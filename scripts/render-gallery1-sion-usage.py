#!/usr/bin/env python3
"""Render Sion Motion logo-in-use guidance for Logo gallery item 02."""

from __future__ import annotations

import math
import subprocess
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "pages/logo/gallery-1/02@lg.mp4"
FRAMES = Path("/tmp/sion-gallery1-usage-frames")
W, H, FPS, DURATION = 1110, 754, 30, 8.2


def ease(value: float) -> float:
    value = max(0.0, min(1.0, value))
    return value * value * (3 - 2 * value)


def real_logo(width: int) -> Image.Image:
    logo = Image.open(ROOT / "assets/sion-motion-header.png").convert("RGBA")
    logo.thumbnail((width, width), Image.Resampling.LANCZOS)
    return logo


def card(width: int, height: int, angle: float, accent: bool) -> Image.Image:
    surface = Image.new("RGBA", (width, height), (246, 246, 246, 255))
    logo = real_logo(int(width * .56))
    surface.alpha_composite(logo, ((width - logo.width) // 2, (height - logo.height) // 2))
    if accent:
        draw = ImageDraw.Draw(surface)
        draw.line((-width * .08, height * 1.04, width * 1.08, -height * .04), fill=(205, 18, 53, 255), width=5)
    return surface.rotate(angle, resample=Image.Resampling.BICUBIC, expand=True)


def place(base: Image.Image, layer: Image.Image, x: float, y: float, opacity: float = 1) -> None:
    if opacity < 1:
        layer = layer.copy()
        layer.putalpha(layer.getchannel("A").point(lambda value: int(value * opacity)))
    base.alpha_composite(layer, (round(x - layer.width / 2), round(y - layer.height / 2)))


def make_frame(t: float) -> Image.Image:
    image = Image.new("RGBA", (W, H), (155, 155, 155, 255))
    reveal = ease(t / .7)
    drift = math.sin(t * 1.05) * 9

    # A continuous stack of logo cards moves behind the main example.
    top = card(600, 260, -3, False)
    bottom = card(600, 260, 3, False)
    place(image, top, W / 2 + 45, -34 + drift, reveal)
    place(image, bottom, W / 2 - 55, H + 70 + drift, reveal)

    phase = (t % 4.1) / 4.1
    angle = 0 if phase < .22 else (phase - .22) * 20
    angle = min(angle, 12)
    accented = .22 < phase < .74
    main = card(820, 470, angle, accented)
    x = W / 2 + math.sin(t * .78) * 18
    y = H / 2 + math.cos(t * .68) * 12
    place(image, main, x, y, reveal)
    return image.convert("RGB")


def main() -> None:
    FRAMES.mkdir(parents=True, exist_ok=True)
    for index in range(round(DURATION * FPS)):
        make_frame(index / FPS).save(FRAMES / f"{index:04d}.jpg", quality=93, subsampling=0)
    temporary = OUT.with_suffix(".new.mp4")
    subprocess.run([
        "ffmpeg", "-y", "-hide_banner", "-loglevel", "error", "-framerate", str(FPS),
        "-i", str(FRAMES / "%04d.jpg"), "-c:v", "libx264", "-preset", "medium", "-crf", "18",
        "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(temporary),
    ], check=True)
    temporary.replace(OUT)


if __name__ == "__main__":
    main()
