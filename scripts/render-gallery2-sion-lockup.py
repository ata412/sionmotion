#!/usr/bin/env python3
"""Render the Sion Motion partnership-lockup film used on the Logo page."""

from __future__ import annotations

import math
import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "pages/logo/gallery-2/01@lg.mp4"
FRAMES = Path("/tmp/sion-gallery2-lockup-frames")
W, H, FPS, DURATION = 2680, 3116, 30, 6.17
FONT = "/System/Library/Fonts/Helvetica.ttc"


def font(size: int, weight: str = "regular") -> ImageFont.FreeTypeFont:
    # Helvetica is available on macOS and keeps the original film's clean geometry.
    index = 1 if weight == "bold" else 0
    return ImageFont.truetype(FONT, size, index=index)


def ease(value: float) -> float:
    value = max(0.0, min(1.0, value))
    return value * value * (3 - 2 * value)


def centered(draw: ImageDraw.ImageDraw, text: str, y: float, fnt, fill, spacing=0):
    box = draw.textbbox((0, 0), text, font=fnt, stroke_width=0)
    draw.text(((W - (box[2] - box[0])) / 2, y), text, font=fnt, fill=fill, spacing=spacing)


def line(draw: ImageDraw.ImageDraw, points, opacity: int = 95, width: int = 3):
    draw.line(points, fill=(255, 255, 255, opacity), width=width)


def frame(t: float) -> Image.Image:
    image = Image.new("RGBA", (W, H), (0, 0, 0, 255))
    draw = ImageDraw.Draw(image)
    gray = (204, 204, 204, 255)
    soft = (142, 142, 142, 255)

    # The measured construction lines in the original lockup animation.
    construction = ease((t - .65) / .75)
    if construction:
        alpha = int(95 * construction)
        line(draw, [(W * .25, H * .12), (W * .25, H * .45)], alpha)
        line(draw, [(W * .50, H * .07), (W * .50, H * .63)], alpha)
        line(draw, [(W * .74, H * .12), (W * .74, H * .45)], alpha)
        line(draw, [(W * .18, H * .28), (W * .82, H * .28)], alpha)

    # Centre cross is built from two strokes, matching the visual language of the source.
    cross_in = ease((t - .4) / .45)
    if cross_in:
        alpha = int(255 * cross_in)
        cx, cy, size = W / 2, H * .28, 84
        line(draw, [(cx - size, cy - size), (cx + size, cy + size)], alpha, 6)
        line(draw, [(cx + size, cy - size), (cx - size, cy + size)], alpha, 6)

    # Large technical type slides through the construction grid between the lockups.
    technical = ease((t - 1.1) / .65) * (1 - ease((t - 4.35) / .65))
    if technical:
        offset = (1 - technical) * 260
        large = font(160, "bold")
        # Keep the two names on separate sides of the partnership mark.
        # The source animation uses the cross as the fixed centre point.
        name = "SION MOTION"
        partner = "PARTNERSHIP"
        name_width = draw.textbbox((0, 0), name, font=large)[2]
        name_x = W / 2 - 150 - name_width - offset
        partner_x = W / 2 + 150 + offset * .35
        draw.text((name_x, H * .205 + offset * .08), name, font=large,
                  fill=(int(210 * technical),) * 3 + (255,))
        draw.text((partner_x, H * .345 - offset * .35), partner, font=font(130),
                  fill=(int(185 * technical),) * 3 + (255,))
        label_alpha = int(255 * ease((t - 2.25) / .45) * (1 - ease((t - 4.0) / .45)))
        if label_alpha:
            centered(draw, "1/4 thickness of Sion", H * .50, font(46), (255, 255, 255, label_alpha))

    # At both ends, the actual partnership lockup resolves in the middle of the frame.
    lockup = ease(t / .48) if t < 1.15 else ease((t - 5.15) / .5)
    if lockup:
        lockup = min(1.0, lockup)
        y = H * .47
        name = "SION MOTION"
        partner = "PARTNERSHIP"
        name_font = font(66, "bold")
        partner_font = font(59)
        name_box = draw.textbbox((0, 0), name, font=name_font)
        partner_box = draw.textbbox((0, 0), partner, font=partner_font)
        mark_w, mark_h = 98, 142
        gap, cross_w = 42, 50
        content_w = mark_w + 28 + name_box[2] + gap + cross_w + gap + partner_box[2]
        x = (W - content_w) / 2
        mark = Image.open(ROOT / "assets/sion-motion-mark.png").convert("RGBA")
        mark.thumbnail((mark_w, mark_h), Image.Resampling.LANCZOS)
        mark.putalpha(mark.getchannel("A").point(lambda value: value * lockup))
        image.alpha_composite(mark, (int(x), int(y - mark.height / 2)))
        x += mark_w + 28
        alpha = int(255 * lockup)
        draw.text((x, y - 36), name, font=name_font, fill=(255, 255, 255, alpha))
        x += name_box[2] + gap
        line(draw, [(x, y - 23), (x + 34, y + 23)], alpha, 3)
        line(draw, [(x + 34, y - 23), (x, y + 23)], alpha, 3)
        x += cross_w + gap
        draw.text((x, y - 30), partner, font=partner_font, fill=(255, 255, 255, alpha))

    return image.convert("RGB")


def main() -> None:
    FRAMES.mkdir(parents=True, exist_ok=True)
    for index in range(round(DURATION * FPS)):
        frame(index / FPS).save(FRAMES / f"{index:04d}.jpg", quality=93, subsampling=0)

    temporary = OUT.with_suffix(".new.mp4")
    subprocess.run([
        "ffmpeg", "-y", "-hide_banner", "-loglevel", "error", "-framerate", str(FPS),
        "-i", str(FRAMES / "%04d.jpg"), "-c:v", "libx264", "-preset", "medium",
        "-crf", "18", "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(temporary),
    ], check=True)
    temporary.replace(OUT)


if __name__ == "__main__":
    main()
