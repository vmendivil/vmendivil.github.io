from pathlib import Path
from PIL import Image, ImageOps, ImageFilter
from collections import deque
root=Path(__file__).parent
im=Image.open(root/'raspberry-pi-original.jpg').convert('RGB')
im.thumbnail((1800,1800))
w,h=im.size
# Remove only near-white background connected to photograph edges.
pix=im.load(); seen=set(); queue=deque()
for x in range(w): queue.extend([(x,0),(x,h-1)])
for y in range(h): queue.extend([(0,y),(w-1,y)])
while queue:
 x,y=queue.popleft()
 if (x,y) in seen: continue
 r,g,b=pix[x,y]
 if min(r,g,b)<223 or max(r,g,b)-min(r,g,b)>22: continue
 seen.add((x,y))
 for xx,yy in [(x-1,y),(x+1,y),(x,y-1),(x,y+1)]:
  if 0<=xx<w and 0<=yy<h and (xx,yy) not in seen: queue.append((xx,yy))
alpha=Image.new('L',(w,h),255); a=alpha.load()
for x,y in seen:a[x,y]=0
alpha=alpha.filter(ImageFilter.GaussianBlur(.6))
# Deliberate cool photographic grade; preserve luminance and physical detail.
gray=ImageOps.grayscale(im)
graded=ImageOps.colorize(gray,black='#020b16',white='#b7d4e6',mid='#345e7b')
graded.putalpha(alpha)
(root/'assets').mkdir(exist_ok=True)
graded.save(root/'assets/raspberry-pi-reference.webp',quality=93)
print({'size':graded.size,'background_pixels_removed':len(seen)})
