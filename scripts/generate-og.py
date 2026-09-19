#!/usr/bin/env python3
"""Charcoal OG images: 'Build Tomorrow.' in white, small SCAD wordmark."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "og"
FONT_DIR = ROOT / "scripts" / "fonts"
W, H = 1200, 630
GROUND = (28, 28, 28)  # #1C1C1C
INK = (242, 242, 242)  # #F2F2F2
MUTE = (200, 200, 200)  # #C8C8C8


def load_font(name: str, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    path = FONT_DIR / name
    if path.exists():
        return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def render(filename: str, kicker: str) -> None:
    img = Image.new("RGB", (W, H), GROUND)
    draw = ImageDraw.Draw(img)
    display = load_font("Archivo-Black.ttf", 92)
    mark = load_font("Archivo-ExtraBold.ttf", 22)
    kicker_font = load_font("Archivo-ExtraBold.ttf", 18)

    draw.text((80, 168), kicker, font=kicker_font, fill=MUTE)
    draw.text((80, 230), "Build Tomorrow.", font=display, fill=INK)
    draw.text((80, 546), "SCAD", font=mark, fill=INK)
    OUT.mkdir(parents=True, exist_ok=True)
    img.save(OUT / filename, "PNG", optimize=True)


def main() -> None:
    render("home.png", "SCAD SCHOOL OF CREATIVE TECHNOLOGY")
    render("technology.png", "THE TECHNOLOGY FUND")
    render("designtomorrow.png", "DESIGN TOMORROW")
    render("give.png", "HARDWARE & COMPUTE")


if __name__ == "__main__":
    main()
