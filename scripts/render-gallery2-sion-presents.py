#!/usr/bin/env python3
"""Replace the centred presenter lockup in Logo gallery item 02."""

from __future__ import annotations

import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "pages/logo/gallery-2/02@lg.mp4"
SOURCE = Path("/tmp/sion-video-originals/gallery-2-02@lg.mp4")
BADGE = Path("/tmp/sion-motion-presents-badge.png")
FONT = "/System/Library/Fonts/Helvetica.ttc"


def badge() -> None:
    width, height = 620, 250
    image = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    logo = Image.open(ROOT / "assets/sion-motion-header.png").convert("RGBA")
    logo.thumbnail((220, 150), Image.Resampling.LANCZOS)
    image.alpha_composite(logo, ((width - logo.width) // 2, 12))
    typeface = ImageFont.truetype(FONT, 29, index=1)
    label = "PRESENTS"
    bounds = draw.textbbox((0, 0), label, font=typeface)
    draw.text(((width - (bounds[2] - bounds[0])) // 2, 190), label, font=typeface, fill=(255, 255, 255, 255))
    image.save(BADGE)


def main() -> None:
    badge()
    temporary = OUT.parent / "02@lg.render.mp4"
    subprocess.run([
        "ffmpeg", "-y", "-hide_banner", "-loglevel", "error", "-i", str(SOURCE), "-loop", "1", "-i", str(BADGE),
        "-filter_complex", "[0:v]delogo=x=360:y=411:w=620:h=250:show=0[clean];[clean][1:v]overlay=x=(W-w)/2:y=(H-h)/2:format=auto",
        "-map", "0:a?", "-t", "7.666667", "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p",
        "-c:a", "aac", str(temporary),
    ], check=True)
    temporary.replace(OUT)


if __name__ == "__main__":
    main()
