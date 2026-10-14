from pathlib import Path
import math
p=Path(__file__).parent/'assets'
# Original optically folded amber strip: repeated ruled ribs form the material.
svg='''<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="1100" viewBox="0 0 1100 1100"><defs><linearGradient id="amber" x1="0" y1="0" x2="1" y2=".8"><stop stop-color="#fff099"/><stop offset=".25" stop-color="#ffdb00"/><stop offset=".6" stop-color="#9e6400"/><stop offset=".76" stop-color="#f9bb00"/><stop offset="1" stop-color="#3a2500"/></linearGradient><linearGradient id="edge"><stop stop-color="#ffec77"/><stop offset=".5" stop-color="#d49800"/><stop offset="1" stop-color="#211600"/></linearGradient><filter id="shadow"><feGaussianBlur stdDeviation="20"/></filter></defs><path d="M210 810L890 930 1070 690 440 420Z" fill="#000" opacity=".6" filter="url(#shadow)"/><path d="M110 175L900 140 1050 730 315 945 270 695 770 525 680 325 180 430Z" fill="url(#amber)" stroke="#d0a144" stroke-width="3"/>'''
for i in range(100):
 t=i/100
 # ribs traversing the folding planes, each edge carries light/dark response
 x=110+790*t
 svg+=f'<path d="M{x:.2f} {175-35*t:.2f}L{180+500*t:.2f} {430-105*t:.2f}L{270+500*t:.2f} {695-170*t:.2f}L{315+735*t:.2f} {945-215*t:.2f}" fill="none" stroke="{["#fff3a4","#aa7100","#ebc14a"][i%3]}" stroke-width="{1.2 if i%3 else 2.1}" opacity=".6"/>'
svg+='''<path d="M110 175L900 140 1050 730 315 945" fill="none" stroke="#ffe987" stroke-width="7"/><path d="M180 430L680 325 770 525 270 695" fill="none" stroke="#422b00" stroke-width="9"/><path d="M180 430L680 325" fill="none" stroke="#ffed79" stroke-width="3"/></svg>'''
(p/'fold.svg').write_text(svg)
# Authored manually shaped depth, corresponding to approved portrait facial planes.
(p/'portrait-depth.svg').write_text('''<svg xmlns="http://www.w3.org/2000/svg" width="1254" height="1254"><defs><radialGradient id="d"><stop stop-color="#fff"/><stop offset=".5" stop-color="#cfcfcf"/><stop offset="1" stop-color="#555"/></radialGradient><filter id="b"><feGaussianBlur stdDeviation="35"/></filter></defs><rect width="1254" height="1254" fill="#111"/><g filter="url(#b)"><path d="M300 395L460 90 650 58 879 160 948 330 896 545 922 700 869 870 1140 1030 950 1210 314 1180 100 1010 392 825 350 663Z" fill="url(#d)"/><ellipse cx="580" cy="505" rx="205" ry="335" fill="url(#d)"/><path d="M420 480L504 410 635 465 634 634 473 671Z" fill="#fff"/></g></svg>''')
base='''<svg xmlns="http://www.w3.org/2000/svg" width="700" height="850" viewBox="0 0 700 850"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#151b19"/><stop offset="1" stop-color="#080e10"/></linearGradient><linearGradient id="metal" x2=".7" y2="1"><stop stop-color="#f8eab5"/><stop offset=".45" stop-color="#aa9670"/><stop offset=".6" stop-color="#fff8d9"/><stop offset="1" stop-color="#5e5b4c"/></linearGradient><linearGradient id="paper" x2="1" y2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#b9bbad"/></linearGradient></defs><rect width="700" height="850" fill="url(#bg)"/>'''
board=base+'<ellipse cx="350" cy="615" rx="255" ry="90" fill="#030504"/><g transform="translate(110 245) rotate(-12 250 170)"><rect width="480" height="330" rx="20" fill="#3a624f" stroke="#779b79" stroke-width="3"/>'
for i in range(28):
 x=35+i*15
 board+=f'<path d="M{x} 305V{160+i%6*13}H{280+i%5*20}V35" stroke="#a19c53" fill="none" opacity=".6"/>'
board+='<rect x="200" y="95" width="122" height="122" fill="#101715" stroke="#93a38d" stroke-width="2"/>'
for i in range(12):
 for x,y,w,h in [(190,100+i*9,10,3),(322,100+i*9,10,3),(205+i*9,85,3,10),(205+i*9,217,3,10)]: board+=f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="url(#metal)"/>'
for x in (22,70,118):board+=f'<rect x="{x}" y="20" width="34" height="110" rx="3" fill="url(#metal)"/><rect x="{x+6}" y="30" width="22" height="80" fill="#101715"/>'
for i in range(24):board+=f'<rect x="{100+i*11}" y="260" width="5" height="28" fill="url(#metal)"/>'
for x,y in [(15,15),(465,15),(15,315),(465,315)]:board+=f'<circle cx="{x}" cy="{y}" r="8" fill="#0c1510" stroke="#ccb98c" stroke-width="3"/>'
board+='</g><path d="M425 525C580 700 310 730 230 780" fill="none" stroke="#daba67" stroke-width="11"/><path d="M425 525C580 700 310 730 230 780" fill="none" stroke="#fff0b8" stroke-width="2"/></svg>'
(p/'homelab.svg').write_text(board)
paper=base+'<g transform="translate(100 125) rotate(11 250 300)"><path d="M0 65L430 0 510 535 70 610Z" fill="#6c7168"/><path d="M0 50L430 0 490 520 50 580Z" fill="url(#paper)"/><path d="M315 15L430 0 442 118Z" fill="#d2d4cb"/><path d="M315 15L442 118 345 108Z" fill="#fff"/>'
for i in range(12):paper+=f'<path d="M65 {145+i*25}L{340-(i%4)*25} {115+i*25}" stroke="#767c70" stroke-width="{4 if i%4==0 else 2}" opacity=".55"/>'
paper+='</g><path d="M230 620C400 430 435 615 525 355" fill="none" stroke="#ffdb00" stroke-width="18"/><path d="M230 620C400 430 435 615 525 355" fill="none" stroke="#fff298" stroke-width="3"/></svg>'
(p/'process.svg').write_text(paper)
lens=base+'<ellipse cx="350" cy="600" rx="250" ry="90" fill="#030708"/><g transform="translate(350 420) rotate(-25)">'
for r in range(245,120,-8):lens+=f'<ellipse rx="{r}" ry="{r*.69}" fill="none" stroke="{["#e8d491","#504b38","#988969"][r%3]}" stroke-width="7"/>'
lens+='<ellipse rx="120" ry="83" fill="#173438"/><ellipse rx="103" ry="70" fill="#072329"/><path d="M-93 -30Q-15 -80 73 -25" stroke="#4a8d8c" stroke-width="6" fill="none"/><path d="M-80 20Q0 -15 85 5" stroke="#c5decb" stroke-width="2" fill="none" opacity=".5"/></g></svg>'
(p/'web.svg').write_text(lens)
print('Authored fold, depth and three still-life SVG plates')
