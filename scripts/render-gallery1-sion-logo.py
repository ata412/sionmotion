#!/usr/bin/env python3
"""Render the Sion Motion logo clear-space film for the Logo gallery."""

from __future__ import annotations

import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "pages/logo/gallery-1/00@lg.mp4"
FRAMES = Path("/tmp/sion-gallery1-logo-frames")
W, H, FPS, DURATION = 1102, 748, 30, 6.7
FONT = "/System/Library/Fonts/Helvetica.ttc"


def ease(value: float) -> float:
    value = max(0.0, min(1.0, value))
    return value * value * (3 - 2 * value)


def logo(size: tuple[int, int]) -> Image.Image:
    source = Image.open(ROOT / "assets/sion-motion-mark.png").convert("RGBA")
    source.thumbnail(size, Image.Resampling.LANCZOS)
    # The supplied mark is white; the source clip uses an ink-on-paper presentation.
    alpha = source.getchannel("A")
    ink = Image.new("RGBA", source.size, (0, 0, 0, 255))
    ink.putalpha(alpha)
    return ink


def real_logo(size: tuple[int, int]) -> Image.Image:
    """The supplied horizontal Sion brand lockup, retained at a readable scale."""
    source = Image.open(ROOT / "assets/sion-motion-header.png").convert("RGBA")
    source.thumbnail(size, Image.Resampling.LANCZOS)
    return source


def monogram(size: int) -> Image.Image:
    """A legible small-format Sion mark for the compact lockup."""
    badge = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(badge)
    draw.ellipse((0, 0, size - 1, size - 1), fill=(0, 0, 0, 255))
    glyph = ImageFont.truetype(FONT, round(size * .68), index=1)
    bounds = draw.textbbox((0, 0), "S", font=glyph)
    draw.text(((size - (bounds[2] - bounds[0])) / 2, (size - (bounds[3] - bounds[1])) / 2 - bounds[1]),
              "S", font=glyph, fill=(242, 242, 242, 255))
    return badge


def cross(draw: ImageDraw.ImageDraw, x: int, y: int, size: int, alpha: int):
    draw.line((x - size, y - size, x + size, y + size), fill=(224, 17, 58, alpha), width=3)
    draw.line((x + size, y - size, x - size, y + size), fill=(224, 17, 58, alpha), width=3)


def make_frame(t: float) -> Image.Image:
    image = Image.new("RGBA", (W, H), (242, 242, 242, 255))
    draw = ImageDraw.Draw(image)
    centre_x, centre_y = W // 2, H // 2

    # Initial logo reveal.
    intro = 1 - ease((t - 1.05) / .7)
    if intro > 0:
        mark = real_logo((460, 325))
        scale = .72 + .28 * intro
        mark = mark.resize((round(mark.width * scale), round(mark.height * scale)), Image.Resampling.LANCZOS)
        mark.putalpha(mark.getchannel("A").point(lambda value: int(value * intro)))
        image.alpha_composite(mark, (centre_x - mark.width // 2, centre_y - mark.height // 2))

    grid = ease((t - .85) / .6)
    if grid:
        shade = int(216 - 18 * grid)
        draw.rectangle((0, 0, W, H), fill=(shade, shade, shade, 255))
        side = int(W * .16)
        draw.rectangle((0, 0, side, H), fill=(205, 205, 205, 255))
        draw.rectangle((W - side, 0, W, H), fill=(205, 205, 205, 255))
        for x in (side, centre_x, W - side):
            draw.line((x, 0, x, H), fill=(239, 239, 239, 255), width=2)
        for y in (int(H * .25), centre_y, int(H * .75)):
            draw.line((0, y, W, y), fill=(239, 239, 239, 255), width=2)
        for x in (int(side * .5), W - int(side * .5)):
            for y in (int(H * .15), centre_y, int(H * .85)):
                cross(draw, x, y, 14, int(255 * grid))

    lockup = ease((t - 1.45) / .7)
    if lockup:
        name_font = ImageFont.truetype(FONT, 74, index=1)
        name = "SION MOTION"
        name_w = draw.textbbox((0, 0), name, font=name_font)[2]
        mark = real_logo((330, 230))
        total = mark.width + 25 + name_w
        x = (W - total) // 2
        y = centre_y
        mark.putalpha(mark.getchannel("A").point(lambda value: int(value * lockup)))
        image.alpha_composite(mark, (x, y - mark.height // 2))
        draw.text((x + mark.width + 25, y - 38), name, font=name_font, fill=(0, 0, 0, int(255 * lockup)))

        guide_alpha = int(180 * ease((t - 2.2) / .5))
        if guide_alpha:
            left = x - 64
            right = x + total + 64
            top, bottom = y - 104, y + 104
            draw.line((left, top, right, top), fill=(224, 17, 58, guide_alpha), width=2)
            draw.line((left, bottom, right, bottom), fill=(224, 17, 58, guide_alpha), width=2)
            draw.line((left, top - 28, left, bottom + 28), fill=(224, 17, 58, guide_alpha), width=2)
            draw.line((right, top - 28, right, bottom + 28), fill=(224, 17, 58, guide_alpha), width=2)

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
