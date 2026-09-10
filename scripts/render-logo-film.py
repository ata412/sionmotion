"""Render the Sion Motion logo film using Pillow and ffmpeg (no source downloads)."""
from pathlib import Path
import math
import subprocess
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
W, H, FPS, SECONDS = 1440, 810, 30, 20
FONT = '/System/Library/Fonts/Supplemental/Arial.ttf'
OUTPUT = ROOT / 'pages/logo/video-block-00@lg.mp4'
SOURCE = ROOT / 'pages/home/show-reel/background-with-audio.mp4'
MARK = Image.open(ROOT / 'assets/sion-motion-mark.png').convert('RGBA')

def ease(t):
    t = max(0, min(1, t))
    return t*t*(3-2*t)

def font(size):
    return ImageFont.truetype(FONT, round(size))

def lockup(scale=1, descriptor='', alpha=1, descriptor_space=''):
    canvas = Image.new('RGBA', (W, H))
    draw = ImageDraw.Draw(canvas)
    face = font(55*scale)
    sub = font(46*scale)
    label = 'SION MOTION'
    mark_h = round(112*scale)
    mark_w = round(mark_h*MARK.width/MARK.height)
    gap = 22*scale
    name_w = draw.textlength(label, font=face)
    space = descriptor_space or descriptor
    descriptor_w = draw.textlength(space, font=sub) + 30*scale if space else 0
    left = (W-mark_w-gap-name_w-descriptor_w)/2
    mark = MARK.resize((mark_w, mark_h), Image.Resampling.LANCZOS)
    canvas.alpha_composite(mark, (round(left), round((H-mark_h)/2)))
    x = left+mark_w+gap
    draw.text((x,H/2), label, font=face, fill='white', anchor='lm')
    if descriptor:
        draw.text((x+name_w+30*scale,H/2), descriptor, font=sub, fill='white', anchor='lm')
    if alpha < 1:
        canvas.putalpha(canvas.getchannel('A').point(lambda a: round(a*max(0,alpha))))
    return canvas

def rolling_lockup(t, scale=.95, alpha=1):
    """Keep the brand fixed while a vertical list advances through its services."""
    words = ['Motion', 'Production', 'Showreel']
    canvas = lockup(scale, descriptor_space='Production')
    draw = ImageDraw.Draw(canvas)
    face = font(46*scale)
    widest = draw.textlength('Production', font=face)
    name_w = draw.textlength('SION MOTION', font=font(55*scale))
    mark_w = round(round(112*scale)*MARK.width/MARK.height)
    width = mark_w + 22*scale + name_w + 30*scale + widest
    x = (W-width)/2 + mark_w + 22*scale + name_w + 30*scale
    # Each change physically scrolls the next word to the brand's baseline.
    offset = ease((t-7.35)/.75) + ease((t-9.05)/.75)
    line_height = 62*scale
    entry = (1-ease((t-6)/.65))*line_height
    words_layer = Image.new('RGBA', (W,H))
    pen = ImageDraw.Draw(words_layer)
    for i, word in enumerate(words):
        distance = i-offset
        brightness = 1-.76*min(1,abs(distance))
        pen.text((x,H/2+distance*line_height+entry),word,font=face,
                 fill=(255,255,255,round(255*brightness)),anchor='lm')
    top, bottom = round(H/2-33*scale), round(H/2+155*scale)
    canvas.alpha_composite(words_layer.crop((round(x),top,W,bottom)),(round(x),top))
    if alpha < 1:
        canvas.putalpha(canvas.getchannel('A').point(lambda a: round(a*max(0,alpha))))
    return canvas

def render():
    footage = subprocess.Popen(['ffmpeg','-v','error','-ss','6','-i',str(SOURCE),
        '-t',str(SECONDS),'-vf',f'scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},fps={FPS}',
        '-f','rawvideo','-pix_fmt','rgb24','-'], stdout=subprocess.PIPE)
    temp = OUTPUT.with_name('video-block-00-render.tmp.mp4')
    encoder = subprocess.Popen(['ffmpeg','-v','error','-y','-f','rawvideo','-pix_fmt','rgb24',
        '-s',f'{W}x{H}','-r',str(FPS),'-i','-','-ss','6','-i',str(SOURCE),
        '-map','0:v:0','-map','1:a:0','-t',str(SECONDS),'-c:v','libx264','-preset','fast',
        '-crf','20','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k',
        '-af','afade=t=in:st=0:d=1,afade=t=out:st=18:d=2',
        '-movflags','+faststart',str(temp)], stdin=subprocess.PIPE)
    try:
        for frame in range(FPS*SECONDS):
            t = frame/FPS
            data = footage.stdout.read(W*H*3)
            if len(data) != W*H*3:
                raise RuntimeError('Showreel ended before the logo film was complete')
            bg = Image.frombytes('RGB',(W,H),data).convert('RGBA')
            image = Image.new('RGBA',(W,H),'black')
            if t < 3:
                art = lockup(1, alpha=ease(t/.8))
                # Reveal the name horizontally, then hold the complete lockup.
                reveal = round(W*ease((t-.15)/1.35))
                image.alpha_composite(art.crop((0,0,reveal,H)), (0,0))
            elif t < 6:
                s = 1 + .7*math.sin(math.pi*ease((t-3)/3))
                image.alpha_composite(lockup(s))
                d = ImageDraw.Draw(image)
                a = math.sin(math.pi*(t-3)/3)
                color = (round(95*a),round(230*a),round(190*a))
                d.line((450,505,990,505),fill=color,width=1)
                d.text((W/2,540),'IDENTITY IN MOTION',font=font(17),anchor='mm',fill=color)
            elif t < 11:
                image.alpha_composite(rolling_lockup(t))
            elif t < 18:
                image = Image.blend(image,bg,ease((t-11)/1.3))
                if t < 13.5:
                    image.alpha_composite(rolling_lockup(11,.95-.15*ease((t-11)/1.3),1-ease((t-12)/1.5)))
                else:
                    logo = lockup().resize((576,324),Image.Resampling.LANCZOS)
                    image.alpha_composite(logo,(-50,-100))
            else:
                image = Image.blend(bg,image,ease((t-18)/.8))
                image.alpha_composite(lockup(.95,alpha=ease((t-18.6)/.7)*(1-ease((t-19.6)/.4))))
            encoder.stdin.write(image.convert('RGB').tobytes())
            if frame % 150 == 0:
                print(f'Rendered {frame//FPS}/{SECONDS}s',flush=True)
        encoder.stdin.close()
        if encoder.wait() != 0 or footage.wait() != 0:
            raise RuntimeError('ffmpeg failed')
        temp.replace(OUTPUT)
    finally:
        if encoder.poll() is None: encoder.terminate()
        if footage.poll() is None: footage.terminate()

if __name__ == '__main__':
    render()
