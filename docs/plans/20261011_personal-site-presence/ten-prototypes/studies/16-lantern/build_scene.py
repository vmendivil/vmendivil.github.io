"""Original Night Pavilion illustration. No reference assets or source geometry.
Deterministic SVG authoring; preserve the four established facade hit areas.
"""
from pathlib import Path
import random
p = Path(__file__).parent
(p / 'assets').mkdir(exist_ok=True)
r = random.Random(16)
s = ['''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs>
<linearGradient id="sky" x2="0" y2="1"><stop stop-color="#111526"/><stop offset="1" stop-color="#292333"/></linearGradient>
<linearGradient id="water" x2="0" y2="1"><stop stop-color="#1d2838"/><stop offset="1" stop-color="#0b1524"/></linearGradient>
<linearGradient id="fade" x2="0" y2="1"><stop stop-color="white" stop-opacity=".35"/><stop offset=".85" stop-color="white" stop-opacity="0"/></linearGradient>
<linearGradient id="side" x2="1" y2=".2"><stop stop-color="#51362f"/><stop offset=".42" stop-color="#392a30"/><stop offset="1" stop-color="#241f2b"/></linearGradient>
<linearGradient id="roof" x2=".2" y2="1"><stop stop-color="#79685b"/><stop offset=".3" stop-color="#59473f"/><stop offset="1" stop-color="#342832"/></linearGradient>
<linearGradient id="occlusion" x2="0" y2="1"><stop stop-color="#171820" stop-opacity=".9"/><stop offset="1" stop-color="#1b1822" stop-opacity="0"/></linearGradient>
<linearGradient id="shore" x2=".2" y2="1"><stop stop-color="#41424a"/><stop offset=".45" stop-color="#292d3a"/><stop offset="1" stop-color="#182231"/></linearGradient>
<linearGradient id="rock" x2=".4" y2="1"><stop stop-color="#4c4850"/><stop offset=".5" stop-color="#313441"/><stop offset="1" stop-color="#1c2634"/></linearGradient>
<linearGradient id="crown" x2=".3" y2="1"><stop stop-color="#624050"/><stop offset=".5" stop-color="#412d40"/><stop offset="1" stop-color="#292636"/></linearGradient>
<radialGradient id="atelier" cx=".76" cy=".32" r=".85"><stop stop-color="#f1d49a"/><stop offset=".4" stop-color="#ba8a55"/><stop offset="1" stop-color="#5d4137"/></radialGradient>
<radialGradient id="drafting" cx=".4" cy=".58" r=".8"><stop stop-color="#f8db9c"/><stop offset=".4" stop-color="#d0a66c"/><stop offset="1" stop-color="#644936"/></radialGradient>
<radialGradient id="study" cx=".78" cy=".76" r=".9"><stop stop-color="#f2c982"/><stop offset=".44" stop-color="#b5804d"/><stop offset="1" stop-color="#4c3932"/></radialGradient>
<linearGradient id="threshold" x2="1" y2=".2"><stop stop-color="#644534"/><stop offset=".45" stop-color="#ddb477"/><stop offset=".7" stop-color="#a77c51"/><stop offset="1" stop-color="#4f3a33"/></linearGradient>
<mask id="reflection"><rect x="0" y="580" width="1200" height="220" fill="url(#fade)"/></mask>
<filter id="soft"><feGaussianBlur stdDeviation="1.6"/></filter>
<pattern id="wood" width="12" height="42" patternUnits="userSpaceOnUse"><rect width="12" height="42" fill="#53382f"/><path d="M2 0v42M8 0v42" stroke="#6b4734" stroke-width=".5"/></pattern>
</defs><rect width="1200" height="800" fill="url(#sky)"/>
<!-- Far ridges remain low-contrast; near shore has thickness and a waterline. -->
<path d="M0 480 Q140 426 300 476T650 470T950 464T1200 448V600H0Z" fill="#181d2b"/>
<path d="M0 514Q170 482 340 506T700 510T1200 497V580H0Z" fill="#111d29"/>
<rect y="576" width="1200" height="224" fill="url(#water)"/>
<path d="M0 579Q71 556 115 559L166 571Q202 572 235 589L256 613L0 629Z M1200 561Q1146 548 1094 561L1058 583Q1008 581 960 610L1200 633Z" fill="url(#shore)"/>
<path d="M0 628Q150 603 256 614M960 611Q1071 610 1200 632" stroke="#626273" opacity=".23" fill="none"/>
''']
for i in range(56):
    x = r.randint(70, 1130); y = r.randint(30, 405)
    s.append(f'<circle cx="{x}" cy="{y}" r="{r.choice([.5,.6,.9])}" fill="#bbbdcf" opacity=".35"/>')
s.append('<g id="house">')
s.append('<path d="M350 552L799 552L861 583H302Z" fill="#443b3c"/><path d="M302 583H861V594H302Z" fill="#151c28"/><path d="M350 552L799 552L821 564H330Z" fill="#292a32"/>')
# Terrace paving converges toward the rear edge, with warm spill only at the door.
for x in range(335, 844, 48):
    s.append(f'<path d="M{x} 583L{int(350+(x-302)*.8)} 553" stroke="#71615a" opacity=".22"/>')
s.append('<path d="M609 546L691 546L718 583H583Z" fill="#c99259" opacity=".12"/>')
for y, w, x in [(589,230,483),(602,255,470),(615,280,457)]:
    s.append(f'<path d="M{x} {y}h{w}l12 7H{x-12}Z" fill="#504037"/><path d="M{x-12} {y+7}h{w+24}v4H{x-12}Z" fill="#24232c"/><path d="M{x} {y}h{w}" stroke="#927155" stroke-width=".8"/>')
s.append('<path d="M735 119L793 150V552H735Z" fill="url(#side)"/><path d="M455 128H735V552H455Z" fill="url(#wood)"/>')
for y in range(166, 540, 19):
    s.append(f'<path d="M740 {y}l48 16" stroke="#976950" opacity=".13"/>')
s.append('<path d="M737 145v394" stroke="#cb915a" opacity=".27"/>')
for name, x, y, w, h, light in [('curiosity',475,151,238,106,'atelier'),('practice',475,284,238,109,'drafting'),('about',475,420,111,123,'study'),('contact',608,420,105,123,'threshold')]:
    s.append(f'<g id="bay-{name}"><rect x="{x-6}" y="{y-5}" width="{w+12}" height="{h+10}" fill="#251e22"/><rect x="{x}" y="{y}" width="{w}" height="{h}" fill="url(#{light})"/>')
    # Distinct interior planes, not one repeated luminous ceiling.
    if name == 'curiosity':
        s.append(f'<path d="M{x} {y}h{w}l-17 16H{x+16}Z" fill="#c9b089" opacity=".4"/><path d="M{x+160} {y+16}h60v90h-60Z" fill="#51433c" opacity=".28"/><path d="M{x+16} {y+78}h125v7H{x+16}Z M{x+25} {y+85}v21m103-21v21" stroke="#573a2c" stroke-width="5" fill="none"/><rect x="{x+37}" y="{y+58}" width="31" height="20" rx="2" fill="#2e3137"/><path d="M{x+40} {y+62}h24" stroke="#748c88"/><path d="M{x+182} {y+10}v69m-14-6h28l-8-12h-12Z" stroke="#745031" fill="#f6d590"/><path d="M{x+170} {y+74}l-34 32h84l-25-32Z" fill="#f4d592" opacity=".13"/>')
    elif name == 'practice':
        s.append(f'<path d="M{x+16} {y+12}h138v67H{x+16}Z" fill="#f0d49e" opacity=".17"/><path d="M{x+175} {y}v{h}" stroke="#534132" stroke-width="11" opacity=".4"/><path d="M{x+39} {y+72}l131-9 3 10-131 9Z" fill="#f4ddac"/><path d="M{x+55} {y+80}l-8 29m109-37 12 37" stroke="#4b342d" stroke-width="5"/><path d="M{x+80} {y+68}l60-3" stroke="#9e8261"/><path d="M{x+72} {y+5}v12m-19 0h38" stroke="#403a32" stroke-width="3"/><path d="M{x+55} {y+18}h33" stroke="#ffe7b0" stroke-width="3"/>')
    elif name == 'about':
        s.append(f'<rect x="{x+10}" y="{y+12}" width="35" height="87" fill="#523b2e"/>')
        for k in range(4):
            s.append(f'<path d="M{x+10} {y+30+k*19}h35" stroke="#deb67d" stroke-width="3"/>')
            for j in range(5):
                s.append(f'<rect x="{x+13+j*6}" y="{y+15+k*19}" width="4" height="13" fill="{r.choice(["#a86f47","#cbaa77","#454744"])}"/>')
        s.append(f'<path d="M{x+64} {y+89}h33v18H{x+64}Z" fill="#b78e66"/><path d="M{x+60} {y+64}h31v26H{x+60}Z" fill="#d2a56c"/><path d="M{x+92} {y+88}v-43m-9 0h18l-4-11h-10Z" stroke="#654b36" fill="#f8daa0"/>')
    else:
        s.append(f'<rect x="{x+32}" y="{y+21}" width="43" height="102" fill="#6b4934"/><rect x="{x+36}" y="{y+25}" width="35" height="85" fill="#caa46e"/><path d="M{x+40} {y+32}h27v68h-27Z" fill="#e9c58b" opacity=".4"/><circle cx="{x+64}" cy="{y+73}" r="2" fill="#644832"/><path d="M{x+18} {y+33}h7v17h-7Z" fill="#f4d49b"/>')
    # Glazing catches the cool exterior in selective panes, with narrow edge glints.
    gx = x + (11 if name in ['about','curiosity'] else int(w*.68))
    s.append(f'<path d="M{gx} {y+5}h23v{h-10}h-23Z" fill="#8b9dae" opacity=".13"/><path d="M{x+5} {y+h-4}L{x+w-6} {y+h-21}v17Z" fill="#bbc8cc" opacity=".07"/><path d="M{gx+3} {y+8}v{h-18}" stroke="#dfded0" opacity=".28" stroke-width=".8"/>')
    s.append(f'<rect x="{x}" y="{y}" width="{w}" height="{18 if name=="practice" else 26}" fill="url(#occlusion)"/><path d="M{x} {y}v{h}h{w}" fill="none" stroke="#80522f" stroke-width="7"/><path d="M{x+w} {y}v{h}M{x} {y+int(h*.64)}h{w}" stroke="#49372c" stroke-width="4"/>')
    for xx in range(x+24, x+w, 27):
        s.append(f'<path d="M{xx} {y}v{h}" stroke="#49382e" stroke-width="4"/><path d="M{xx+3} {y+14}v{h-14}" stroke="#dfa76a" stroke-width=".8" opacity=".6"/>')
    s.append('</g>')
for y in [128,265,401]:
    s.append(f'<path d="M430 {y-9}H755L801 {y+9}H450Z" fill="url(#roof)"/><path d="M430 {y-9}H755V{y-6}H430Z" fill="#9a8a74"/><path d="M450 {y+9}H801v7H450Z" fill="#241e25"/><path d="M455 {y+16}h280" stroke="#a26a43" stroke-width="1.5"/>')
    for x in [470,540,610,680,749]:
        s.append(f'<path d="M{x} {y-8}l26 16" stroke="#b1a18a" stroke-width=".6" opacity=".24"/>')
    s.append(f'<path d="M752 {y+16}l41 14v13l-41-14Z" fill="#131620" opacity=".5"/>')
s.append('<path d="M425 544H766l48 19H398Z" fill="#70513a"/><path d="M398 563H814v9H398Z" fill="#30232a"/>')
for x in range(401,810,34):
    s.append(f'<path d="M{x} 570v-27" stroke="#443532" stroke-width="3"/>')
s.append('<path d="M401 544h399" stroke="#a27852" stroke-width="2"/></g><g mask="url(#reflection)"><use href="#house" transform="translate(0 1178) scale(1 -1)" filter="url(#soft)" opacity=".6"/></g>')
# Two independently drawn trees: left upright split fan, right low swept crown.
# Connected lobed silhouettes establish volume; sparse edge sprigs add scale.
trees = [
    ('M113 585Q146 506 144 427Q129 344 99 296M145 437Q182 379 244 334M137 386Q87 361 59 319M150 416Q163 326 195 254',
     'M145 436Q116 389 90 374M164 375Q199 348 220 306M123 350Q127 309 151 285M193 339Q248 312 274 290',
     [(83,306,62,30),(165,272,56,38),(247,320,58,29),(61,364,40,25),(185,365,57,31)]),
    ('M1082 585Q1057 515 1050 453Q1038 407 994 372M1052 466Q1101 419 1145 382M1047 448Q1072 362 1052 323M1036 417Q982 414 946 386',
     'M1056 467Q1120 461 1172 425M1091 405Q1138 357 1180 348M1011 387Q1006 346 977 320M1070 382Q1110 368 1118 326',
     [(974,341,50,29),(1041,321,44,30),(1115,347,63,31),(1163,401,43,37),(998,400,67,25)])
]
for trunk, twigs, masses in trees:
    s.append(f'<path d="{trunk}" fill="none" stroke="#282630" stroke-width="13"/><path d="{twigs}" fill="none" stroke="#4a3440" stroke-width="3.5"/>')
    for n, (cx,cy,rx,ry) in enumerate(masses):
        # Hand-directed organic contours, different scale/overlap per branch mass.
        s.append(f'<path d="M{cx-rx} {cy}q-8 {-ry*.5} {rx*.3} {-ry*.63}q{rx*.03} {-ry*.6} {rx*.55} {-ry*.29}q{rx*.3} {-ry*.4} {rx*.57} {ry*.05}q{rx*.6} {-ry*.08} {rx*.53} {ry*.56}q{rx*.35} {ry*.5} {-rx*.2} {ry*.8}q{-rx*.3} {ry*.55} {-rx*.75} {ry*.24}q{-rx*.8} {ry*.43} {-rx*.92} {-ry*.73}Z" fill="url(#crown)" opacity=".86"/>')
        s.append(f'<path d="M{cx-rx*.75} {cy-ry*.25}q{rx*.35} {-ry*.65} {rx*.7} {-ry*.4}m7 3q{rx*.4} {-ry*.2} {rx*.67} {ry*.12}" fill="none" stroke="#886073" stroke-width="2" opacity=".38"/>')
        for i in range(17):
            x=cx+r.uniform(-rx,rx); y=cy+r.uniform(-ry,ry)
            s.append(f'<path d="M{x:.1f} {y:.1f}q-4 -5 -8 -2q2 6 8 2m0 0q3 -5 7 -3q-1 5 -7 3" fill="{r.choice(["#785065","#56384e","#926175"])}" opacity=".48"/>')
# Foreground rocks overlap trunk roots, contrasting with smooth distant ridges.
for d in ['M54 585Q62 566 89 569L109 583L101 604H48Z','M116 597L129 566Q156 553 181 576L199 599L179 614H111Z','M1039 598L1052 575Q1080 563 1108 581L1124 612H1034Z','M1120 582Q1142 563 1167 578L1184 603L1150 615L1116 604Z']:
    s.append(f'<path d="{d}" fill="url(#rock)"/>')
s.append('<path d="M130 570l25 12 25-5M1054 578l24 10 23-5" fill="none" stroke="#7d6d72" opacity=".25"/>')
for i in range(40):
    y=597+i*4; x=r.randint(240,750); w=r.randint(60,210)
    s.append(f'<path d="M{x} {y}h{w}" stroke="#64718a" stroke-width=".6" opacity="{.1 if i%3 else .18}"/>')
s.append('</svg>')
(p / 'assets/pavilion.svg').write_text(''.join(s))
