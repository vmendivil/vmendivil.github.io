"""Original deterministic vector listening-lounge illustration. No reference assets."""
from pathlib import Path
import random
random.seed(11)
p=[]
def add(s): p.append(s)
def rect(x,y,w,h,fill,extra=''): add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" {extra}/>')
add('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 730" preserveAspectRatio="xMidYMid slice" role="img" aria-label="An original illustrated listening lounge, a glowing television on a walnut cabinet, lamplight and a rainy city window">
<defs>
<linearGradient id="wall" x2="1" y2=".7"><stop stop-color="#514337"/><stop offset=".55" stop-color="#847054"/><stop offset="1" stop-color="#42352c"/></linearGradient>
<linearGradient id="sky" x2="0" y2="1"><stop stop-color="#162932"/><stop offset=".65" stop-color="#4a6063"/><stop offset="1" stop-color="#20363e"/></linearGradient>
<linearGradient id="curtain"><stop stop-color="#33251e"/><stop offset=".28" stop-color="#85653b"/><stop offset=".52" stop-color="#b49357"/><stop offset=".74" stop-color="#685235"/><stop offset="1" stop-color="#31271f"/></linearGradient>
<linearGradient id="wood" x2=".2" y2="1"><stop stop-color="#b2844e"/><stop offset=".12" stop-color="#704b2e"/><stop offset=".8" stop-color="#3e2b20"/><stop offset="1" stop-color="#261c18"/></linearGradient>
<linearGradient id="top" x2=".5" y2="1"><stop stop-color="#ba915d"/><stop offset=".5" stop-color="#997445"/><stop offset="1" stop-color="#715334"/></linearGradient>
<linearGradient id="tv" x2=".7" y2="1"><stop stop-color="#b9a584"/><stop offset=".14" stop-color="#806e56"/><stop offset=".75" stop-color="#51483c"/><stop offset="1" stop-color="#302f2a"/></linearGradient>
<linearGradient id="glass" x2=".7" y2="1"><stop stop-color="#396871"/><stop offset=".4" stop-color="#12424e"/><stop offset="1" stop-color="#092d39"/></linearGradient>
<linearGradient id="sofa" x2=".4" y2="1"><stop stop-color="#a25b3c"/><stop offset=".5" stop-color="#713b2b"/><stop offset="1" stop-color="#39281f"/></linearGradient>
<radialGradient id="light"><stop stop-color="#ffde96" stop-opacity=".56"/><stop offset="1" stop-color="#ffcc7a" stop-opacity="0"/></radialGradient>
<radialGradient id="reflection"><stop stop-color="#b4d6d4" stop-opacity=".23"/><stop offset="1" stop-color="#b4d6d4" stop-opacity="0"/></radialGradient>
<linearGradient id="shade" x2="0" y2="1"><stop stop-color="#a68144"/><stop offset=".45" stop-color="#d2b274"/><stop offset="1" stop-color="#f2ce87"/></linearGradient>
<filter id="shadow" x="-40%" y="-40%" width="190%" height="190%"><feDropShadow dx="8" dy="17" stdDeviation="12" flood-color="#0a1519" flood-opacity=".6"/></filter>
<filter id="soft"><feGaussianBlur stdDeviation="3"/></filter>
<filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".075"/></feComponentTransfer><feBlend in="SourceGraphic" mode="soft-light"/></filter>
<pattern id="weave" width="5" height="5" patternUnits="userSpaceOnUse"><rect width="5" height="5" fill="#453f30"/><path d="M0 1H5 M1 0V5" stroke="#ad9470" stroke-width=".65" opacity=".7"/></pattern>
<pattern id="scan" width="3" height="4" patternUnits="userSpaceOnUse"><path d="M0 1H3" stroke="#061f29" opacity=".22"/></pattern>
<clipPath id="window"><rect x="202" y="-30" width="964" height="481" rx="3"/></clipPath>
<linearGradient id="ceramic" x1="0" x2="1"><stop stop-color="#5a675b"/><stop offset=".22" stop-color="#a8b39b"/><stop offset=".5" stop-color="#d5d6b6"/><stop offset=".74" stop-color="#b8b797"/><stop offset="1" stop-color="#686f59"/></linearGradient>
<linearGradient id="pot" x1="0" x2="1"><stop stop-color="#4a392c"/><stop offset=".18" stop-color="#93714b"/><stop offset=".42" stop-color="#c39b68"/><stop offset=".7" stop-color="#9b764d"/><stop offset="1" stop-color="#594632"/></linearGradient>
<linearGradient id="leaf" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#172e2b"/><stop offset=".45" stop-color="#3c5740"/><stop offset=".64" stop-color="#77825a"/><stop offset="1" stop-color="#afb278"/></linearGradient>
<linearGradient id="metal" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#eadbb3"/><stop offset=".22" stop-color="#a8aa91"/><stop offset=".45" stop-color="#596258"/><stop offset=".75" stop-color="#d2c9a6"/><stop offset="1" stop-color="#454c43"/></linearGradient>
<linearGradient id="pane" x1="0" y1="0" x2="1" y2=".7"><stop stop-color="#6eaaa9" stop-opacity=".2"/><stop offset=".3" stop-color="#071e29" stop-opacity=".14"/><stop offset=".7" stop-color="#c3d6ba" stop-opacity=".04"/><stop offset="1" stop-color="#c8b582" stop-opacity=".15"/></linearGradient>
<radialGradient id="lamp-glass" cx=".75" cy=".62" r=".7"><stop stop-color="#f6d796" stop-opacity=".25"/><stop offset=".3" stop-color="#dfc693" stop-opacity=".06"/><stop offset="1" stop-color="#dfc693" stop-opacity="0"/></radialGradient>
<radialGradient id="screen-spill"><stop stop-color="#629ea0" stop-opacity=".4"/><stop offset="1" stop-color="#4c8b91" stop-opacity="0"/></radialGradient>
<radialGradient id="cushion" cx=".25" cy=".1" r=".95"><stop stop-color="#b57550"/><stop offset=".48" stop-color="#8d4e34"/><stop offset="1" stop-color="#482e23"/></radialGradient>
<linearGradient id="recess" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#0d1515"/><stop offset=".28" stop-color="#201f19"/><stop offset="1" stop-color="#66503a"/></linearGradient>
<clipPath id="cabinet-front"><rect x="389" y="533" width="914" height="114" rx="4"/></clipPath>
<clipPath id="tube"><rect x="660" y="303" width="265" height="188" rx="24"/></clipPath>
</defs>
<rect width="1440" height="730" fill="url(#wall)"/>
<g clip-path="url(#window)"><rect x="202" width="964" height="451" fill="url(#sky)"/>
<ellipse cx="858" cy="196" rx="510" ry="200" fill="url(#reflection)"/>
''')
# Three staggered layers of original wet skyline, window detail and light spill.
for layer in range(3):
    x=185
    while x<1180:
        w=random.randint(42,102); h=random.randint(70,160)+layer*20; y=400-h+layer*17
        color=['#385058','#2d4249','#21353c'][layer]
        rect(x,y,w,h+100,color)
        rect(x-3,y-4,w+6,4,'#4d6367')
        if random.random()>.6:
            add(f'<path d="M{x+w/2} {y}V{y-30} M{x+w/2-10} {y-21}h20" stroke="#4a6167" stroke-width="2"/>')
        for a in range(int(w//15)):
            for b in range(int(h//18)):
                if random.random()>.4:
                    rect(x+8+a*14,y+9+b*18,5,8,random.choice(['#99aaa1','#dec691','#789798','#4f696e']),f'opacity="{random.uniform(.25,.85):.2f}"')
        x+=w+random.randint(6,17)
add('<path d="M195 405H1170 M195 423H1170" stroke="#c7bc98" opacity=".35" stroke-width="2"/>')
for i in range(30):
    x=random.randint(220,1160)
    rect(x,random.randint(395,430),random.randint(2,6),random.randint(9,35),'#cfba8b','opacity=".4" filter="url(#soft)"')
# Wet depth: fine distant lights have their own soft bloom; glazing is in front.
for i in range(45):
    x=random.randint(223,1154); y=random.randint(280,438)
    add(f'<ellipse cx="{x}" cy="{y}" rx="{random.uniform(1,3):.2f}" ry="1.3" fill="#f1dfb4" opacity=".24" filter="url(#soft)"/>')
add('''<rect x="202" y="0" width="964" height="451" fill="url(#pane)"/>
<rect x="202" y="0" width="964" height="451" fill="url(#lamp-glass)"/>
<g opacity=".12" filter="url(#soft)"><path d="M1066 169h52l24 69h-100Z" fill="#e7c98f"/><ellipse cx="1092" cy="240" rx="49" ry="5" fill="#fce1a5"/><path d="M1092 243v175" stroke="#d1bf93" stroke-width="3"/></g>
<path d="M216 12L466 0 760 448H641Z" fill="#acc6be" opacity=".025"/>
<path d="M214 185H652 M700 185H1157" stroke="#a5c8c4" stroke-width="2" opacity=".15"/>
<path d="M652 8V443 M1149 8V443" stroke="#c3d8c8" stroke-width="2" opacity=".09"/>
''')
add('<g class="rain" stroke="#a9c5c6" stroke-linecap="round">')
for i in range(170):
    x=random.randint(200,1165); y=random.randint(-30,450)
    add(f'<path d="M{x} {y}l-2 {random.randint(8,42)}" opacity="{random.uniform(.08,.35):.2f}"/>')
add('</g>')
# Long irregular beads on glass.
for i in range(22):
    x=random.randint(220,1140); y=random.randint(0,390)
    add(f'<path d="M{x} {y}q-5 12 -1 28t-4 30" fill="none" stroke="#a9bab0" stroke-width="1.5" opacity=".24"/>')
# Droplet lenses carry a dark occluded edge and an offset cool highlight.
for i in range(58):
    x=random.randint(220,1150); y=random.randint(10,440); r=random.uniform(.7,2.1)
    add(f'<ellipse cx="{x}" cy="{y}" rx="{r:.2f}" ry="{r*1.8:.2f}" fill="#142c32" opacity=".42"/><path d="M{x-r*.4:.2f} {y-r:.2f}v{r*1.2:.2f}" stroke="#d3e5d6" opacity=".4" stroke-width=".6"/>')
add('''<path d="M270 10Q600 80 1000 25 M350 230Q780 180 1120 210" fill="none" stroke="#e9d3a0" stroke-width="18" opacity=".04"/>
</g>
<g filter="url(#shadow)"><path d="M188-20H1190V474H188Z M215 0V445H1163V0Z" fill="#65543d" fill-rule="evenodd"/><path d="M205 0V452H1177V0 M199 455H1188" fill="none" stroke="#a68758" stroke-width="6"/>
<rect x="667" y="0" width="22" height="452" fill="#715b40"/><path d="M671 0V452 M202 167H1180" stroke="#ab8e61" stroke-width="4"/>
<rect x="202" y="171" width="976" height="9" fill="#5b4c37"/>
<rect x="653" y="234" width="10" height="47" rx="4" fill="#b9a17c"/><path d="M656 241v27" stroke="#f1d1a2"/>
<path d="M173 458H1210L1231 483H151Z" fill="url(#top)"/></g>
''')
# Folded curtains have individually varied hems, seams, light ridges.
for side in [0,1]:
    for i in range(6):
        x=(side*1194)+i*37-15
        add(f'<path d="M{x} -20q17 20 38 0l{random.randint(-9,9)} 501q-19 13 -43 2Z" fill="url(#curtain)"/>')
        add(f'<path d="M{x+12} 0q-5 210 0 468" stroke="#d0ad6a" opacity=".12" fill="none"/>')
add('''<rect y="565" width="1440" height="165" fill="#3d332b"/>
<path d="M0 573H1440 M0 632H1440 M0 702H1440 M200 565L155 730 M900 565L1010 730" stroke="#6d5140" stroke-width="2" opacity=".5"/>
<path d="M285 620H1350L1440 730H150Z" fill="#71654e"/>
<path d="M310 634H1357L1413 714H210Z" fill="#534e41"/>
''')
for i in range(55):
    add(f'<path d="M{270-i} {642+i*1.3}H{1355+i}" stroke="#b1a080" stroke-width=".5" opacity=".3"/>')
# Warm illumination sits behind solids; material highlights below are local.
add('''<ellipse cx="1214" cy="295" rx="301" ry="320" fill="url(#light)"/>
<path d="M1112 302l-114 259h364l-69-259Z" fill="url(#light)" opacity=".4"/>
''')
# Cabinet and audio furniture.
add('''<ellipse cx="886" cy="601" rx="480" ry="39" fill="#181b19" opacity=".6" filter="url(#soft)"/>
<g filter="url(#shadow)">
<path d="M414 504H1276L1308 533H385Z" fill="url(#top)"/>
<rect x="389" y="533" width="914" height="114" rx="4" fill="url(#wood)"/>
<path d="M1303 533l14-9v112l-14 11Z" fill="#34291f"/>
<path d="M391 536H1302" stroke="#d3ac72" stroke-width="2" opacity=".6"/>
<rect x="413" y="549" width="271" height="77" fill="url(#recess)"/><rect x="694" y="549" width="277" height="77" fill="url(#recess)"/>
<path d="M413 550h271v8H421v65h-8 M694 550h277v8H702v65h-8" fill="#161a17" opacity=".6"/>
<path d="M413 627h271 M694 627h277" stroke="#b6935b" opacity=".6"/>
<path d="M980 549v79h299" fill="none" stroke="#211e19" stroke-width="3"/>
<path d="M997 551h272" stroke="#e3bb80" stroke-width="1" opacity=".4"/>
<rect x="986" y="550" width="291" height="76" rx="3" fill="#62442d"/>
<path d="M997 554H1265 M995 618H1268" stroke="#b08450" opacity=".3"/>
<path d="M1070 578H1197" stroke="#c0a778" stroke-width="5"/>
<path d="M422 644l-8 39h13l10-39 M1254 644l9 39h-13l-10-39" fill="#2e251e"/>
</g>
''')
for i in range(28):
    x=423+i*8
    add(f'<path d="M{x} 558l-3 65" stroke="{random.choice(["#ab8a53","#50605b","#7e4531","#cfb991","#313d3d"])}" stroke-width="{random.randint(4,7)}"/>')
for i in range(45):
    y=536+random.random()*108
    add(f'<path d="M986 {y:.2f}q80 -4 290 0" stroke="#b78d54" stroke-width=".6" opacity=".16"/>')
# Walnut figure varies in spacing and direction rather than repeated flat stripes.
add('<g clip-path="url(#cabinet-front)" fill="none">')
for i in range(19):
    y=537+i*5.6
    add(f'<path d="M990 {y:.2f}c53 {random.uniform(-5,5):.2f} 80 -7 124 -2s83 5 160 0" stroke="{random.choice(["#1f211a","#d4a674","#8e6543"])}" stroke-width="{random.uniform(.4,1.2):.2f}" opacity=".26"/>')
add('''<path d="M1090 587q24-11 55 0t79 3 M1099 588q20-6 43 0t59 2" stroke="#362a1f" opacity=".35"/>
</g>''')
# Local reflected pools stay on the horizontal board, with contact occlusion.
add('''<path d="M414 504H1276L1308 533H385Z" fill="url(#screen-spill)"/>
<ellipse cx="1142" cy="514" rx="137" ry="14" fill="url(#light)"/>
<path d="M458 514q82 6 181 1 M1096 529q84-2 176 0" fill="none" stroke="#dfc391" opacity=".23"/>
<path d="M1072 582h126" stroke="#211f1a" stroke-width="6" opacity=".5"/>
<path d="M1071 576h126" stroke="#ead4a7" stroke-width="1"/>
''')
# Stereo amplifier, pi sized object, patch lead. They are nonfunctional scenery.
add('''<rect x="708" y="568" width="245" height="41" rx="3" fill="#8e8873"/><rect x="720" y="577" width="71" height="15" fill="#283b37"/>
<path d="M726 584H781" stroke="#c5cb91" opacity=".5"/><circle cx="923" cy="589" r="12" fill="#44483d"/><circle cx="923" cy="589" r="9" fill="#afb097"/>
<circle cx="812" cy="589" r="4" fill="#283b37"/><circle cx="836" cy="589" r="4" fill="#283b37"/>
<rect x="720" y="612" width="77" height="10" rx="3" fill="#262c26"/>
<rect x="807" y="612" width="34" height="10" fill="#677947"/><circle cx="834" cy="616" r="2" fill="#d5d18e"/>
<path d="M843 617q25 9 52 0" fill="none" stroke="#b99967" stroke-width="2"/>
''')
# Speaker with acoustic cloth and turntable, no workstation keyboard.
add('''<g filter="url(#shadow)"><rect x="438" y="323" width="144" height="185" rx="8" fill="url(#wood)"/><rect x="450" y="335" width="120" height="160" rx="4" fill="url(#weave)"/>
<circle cx="510" cy="443" r="41" fill="#181e1b" opacity=".32"/><circle cx="510" cy="367" r="20" fill="#181e1b" opacity=".32"/>
<path d="M464 339H552" stroke="#c1a171" opacity=".4"/>
<ellipse cx="1110" cy="508" rx="140" ry="10" fill="#172421" opacity=".65"/>
<path d="M983 490H1244l10 14H973Z" fill="#433729"/>
<path d="M983 491H1244v11H983Z" fill="url(#wood)"/>
<path d="M1244 491l10 13v-20l-10-8Z" fill="#3b332a"/>
<path d="M1000 465H1233L1244 491H983Z" fill="url(#metal)"/>
<path d="M987 491h251" stroke="#e0cda4" stroke-width="1" opacity=".8"/>
<ellipse cx="1096" cy="480" rx="72" ry="15" fill="#111b1c"/>
<path d="M1024 477v5a72 15 0 0 0 144 0v-5" fill="#58675e"/>
<ellipse cx="1096" cy="477" rx="72" ry="15" fill="url(#metal)"/>
<ellipse cx="1096" cy="476" rx="67" ry="13" fill="#172423"/>
<g fill="none" stroke="#a5aca0" stroke-width=".6" opacity=".32"><ellipse cx="1096" cy="476" rx="63" ry="11.7"/><ellipse cx="1096" cy="476" rx="57" ry="10.4"/><ellipse cx="1096" cy="476" rx="50" ry="9.1"/><ellipse cx="1096" cy="476" rx="42" ry="7.8"/><ellipse cx="1096" cy="476" rx="34" ry="6.5"/></g>
<path d="M1044 471q31-8 80-4l-16 12-27 4Z" fill="#c5cab2" opacity=".11"/>
<ellipse cx="1096" cy="476" rx="18" ry="3.5" fill="#b27d4e"/><path d="M1096 474v-4" stroke="#e5dcb9" stroke-width="2"/>
<ellipse cx="1220" cy="472" rx="9" ry="4" fill="#263732"/><path d="M1220 471v-6" stroke="url(#metal)" stroke-width="8"/>
<path d="M1220 471l-27-10-43 21" fill="none" stroke="#23332e" stroke-width="5" transform="translate(1 3)" opacity=".7"/>
<path d="M1220 467l-27-8-43 21" fill="none" stroke="url(#metal)" stroke-width="4"/>
<path d="M1152 477l-7 3 4 5 8-3Z" fill="#293730"/><path d="M1149 483v3" stroke="#d5cb9f"/>
<path d="M1004 487h12" stroke="#37463e" stroke-width="3"/>
<path d="M998 465l13-71h227l-5 71" fill="#b0c7bb" opacity=".10" stroke="#c5d5c6" stroke-width="2"/>
<path d="M1013 397h222 M1016 400l-11 52 M1019 450l39-47h45l-38 47Z" fill="none" stroke="#e7e3c8" opacity=".13" stroke-width="2"/>
<path d="M1015 460h13 M1212 460h16" stroke="#273f3b" stroke-width="4"/>
</g>
''')
# Main large vintage television.
add('''<ellipse cx="795" cy="520" rx="209" ry="20" fill="#192326" opacity=".6"/>
<g filter="url(#shadow)"><rect x="617" y="274" width="359" height="235" rx="29" fill="url(#tv)"/><path d="M638 280Q777 261 954 280" fill="none" stroke="#d3ba8d" stroke-width="3" opacity=".6"/>
<path d="M972 301q10 67-3 185" stroke="#d4b77f" stroke-width="2" opacity=".42" fill="none"/>
<path d="M619 340v108q0 32 21 47" stroke="#79aaa0" stroke-width="2" opacity=".26" fill="none"/>
<rect x="640" y="291" width="300" height="214" rx="31" fill="#252b27"/>
<rect x="653" y="297" width="278" height="199" rx="27" fill="#071f26"/>
<g clip-path="url(#tube)">
<rect x="660" y="303" width="265" height="188" fill="url(#glass)"/>
<g class="broadcast" data-broadcast="about">
<path d="M666 447Q720 405 795 453T930 437 M666 460Q720 418 795 466T930 450" fill="none" stroke="#81b7b4" opacity=".5"/>
<circle cx="867" cy="346" r="19" fill="#e4c98b"/><path d="M844 348l23-8 24 8-24 8Z" fill="#143f49"/>
<text x="682" y="369" fill="#f5e4af" font-family="sans-serif" font-weight="900" font-size="26">VICTOR</text><text x="682" y="399" fill="#f5e4af" font-family="sans-serif" font-weight="900" font-size="26">MENDIVIL</text>
<text x="682" y="426" fill="#c3d6ca" font-family="monospace" font-size="10">SOFTWARE / PEOPLE / POSSIBILITY</text>
</g>
<g class="broadcast" data-broadcast="practice" style="display:none">
<rect x="660" y="303" width="265" height="188" fill="#313f48"/><path d="M678 444L724 404l42 16 68-64 71 24" fill="none" stroke="#e9c888" stroke-width="4"/>
<path d="M678 455L724 415l42 16 68-64 71 24" fill="none" stroke="#83b4ac" stroke-width="2"/>
<circle cx="724" cy="404" r="7" fill="#d09065"/><circle cx="834" cy="356" r="7" fill="#e5c37f"/>
<text x="681" y="343" fill="#f5e4af" font-family="sans-serif" font-size="23" font-weight="900">FROM ASK</text><text x="681" y="371" fill="#f5e4af" font-family="sans-serif" font-size="23" font-weight="900">TO WORKING.</text>
<text x="681" y="478" fill="#c3d6ca" font-family="monospace" font-size="10">THE WHOLE SOFTWARE JOURNEY</text>
</g>
<g class="broadcast" data-broadcast="curiosity" style="display:none">
<rect x="660" y="303" width="265" height="188" fill="#304741"/>
<g stroke="#a2c3a7" fill="none"><ellipse cx="855" cy="411" rx="47" ry="23" transform="rotate(-28 855 411)"/><ellipse cx="855" cy="411" rx="47" ry="23" transform="rotate(40 855 411)"/><circle cx="855" cy="411" r="9" fill="#dec67f"/></g>
<path d="M679 446h54v-44h-54Z" fill="#80a888"/><path d="M685 405h19v13h-19 M711 405h16v7h-16 M685 424h39v13h-39" fill="#29423c"/>
<text x="680" y="343" fill="#f5e4af" font-family="sans-serif" font-size="25" font-weight="900">STAY</text><text x="680" y="371" fill="#f5e4af" font-family="sans-serif" font-size="25" font-weight="900">CURIOUS.</text>
<text x="681" y="478" fill="#c3d6ca" font-family="monospace" font-size="10">SMALL MACHINES / BIG QUESTIONS</text>
</g>
<g class="broadcast" data-broadcast="contact" style="display:none">
<rect x="660" y="303" width="265" height="188" fill="#594439"/><path d="M756 395h98v60h-98Z" fill="#dfcca4"/><path d="M756 395l49 33 49-33 M756 455l34-30 M854 455l-34-30" fill="none" stroke="#9d7451" stroke-width="2"/>
<text x="680" y="343" fill="#f5e4af" font-family="sans-serif" font-size="25" font-weight="900">LET’S</text><text x="680" y="371" fill="#f5e4af" font-family="sans-serif" font-size="25" font-weight="900">TALK.</text>
<text x="681" y="478" fill="#e9d3b5" font-family="monospace" font-size="10">A SMALL, CLEAR NEXT STEP</text>
</g>
<rect x="660" y="303" width="265" height="188" fill="url(#scan)"/>
<path d="M675 310Q790 294 910 314L904 333Q784 319 679 331Z" fill="#d5dfd0" opacity=".08"/>
</g>
<circle cx="955" cy="323" r="10" fill="#303931"/><circle cx="955" cy="323" r="7" fill="#aca58b"/><path d="M955 318v8" stroke="#3f483d" stroke-width="2"/>
<circle cx="955" cy="354" r="10" fill="#303931"/><circle cx="955" cy="354" r="7" fill="#aca58b"/>
<rect x="944" y="385" width="20" height="90" fill="url(#weave)" rx="3"/>
<circle cx="953" cy="487" r="3" fill="#dbdc9e"/>
<path d="M649 507l-8 9h21l10-9 M921 507l10 9h20l-6-9" fill="#292e28"/>
</g>
''')
# Lamp directional pool and ceramic base.
add('''<g filter="url(#shadow)"><path d="M1210 190v310" stroke="#a58a5b" stroke-width="9"/><path d="M1210 190v310" stroke="#e7c989" stroke-width="2"/>
<ellipse cx="1216" cy="511" rx="46" ry="8" fill="#283028" opacity=".65"/>
<path d="M1169 501v5q41 20 82 0v-5Z" fill="url(#pot)"/><ellipse cx="1210" cy="501" rx="41" ry="9" fill="url(#metal)"/>
<path d="M1176 502q30 9 59 2" fill="none" stroke="#e2c68e" opacity=".5"/>
<path d="M1152 185h113l34 113h-181Z" fill="url(#shade)"/><ellipse cx="1208" cy="298" rx="89" ry="10" fill="#f5d793"/>
<ellipse cx="1208" cy="187" rx="55" ry="5" fill="#745a35"/>
</g>
''')
for i in range(24):
    x=1154+i*4.5
    add(f'<path d="M{x:.1f} 191L{1123+i*7.1:.1f} 294" stroke="#725c36" stroke-width="1" opacity=".16"/>')
# Personal listening ephemera and small original print, cup.
add('''<g transform="rotate(-8 376 432)" filter="url(#shadow)"><rect x="304" y="354" width="106" height="148" fill="#ddd0a7"/><rect x="311" y="361" width="92" height="100" fill="#496868"/><circle cx="357" cy="410" r="32" fill="#be9c63"/><path d="M319 428q39-27 75 0 M319 437q39-27 75 0" stroke="#254c53" stroke-width="8" fill="none"/><text x="316" y="478" font-size="12" font-family="sans-serif" fill="#594c36">SLOW SIGNALS</text></g>
<path d="M367 494h54v11h-54Z" fill="#a76d49"/><path d="M355 506h73v9h-73Z" fill="#c8bb93"/>
<g filter="url(#shadow)"><ellipse cx="1003" cy="521" rx="37" ry="7" fill="#1f302c" opacity=".75"/>
<ellipse cx="1000" cy="518" rx="34" ry="6" fill="url(#ceramic)"/><ellipse cx="1000" cy="518" rx="25" ry="3" fill="#7b8b71"/>
<path d="M1014 482q22-8 23 7t-19 19" fill="none" stroke="#455a4d" stroke-width="8"/>
<path d="M1015 480q22-7 20 9t-18 15" fill="none" stroke="url(#ceramic)" stroke-width="6"/>
<path d="M1019 482q13-3 13 7" fill="none" stroke="#e9e2bd" stroke-width="1" opacity=".7"/>
<path d="M985 474q16 7 32 0l-1 39q-1 9-15 9t-15-9Z" fill="url(#ceramic)"/>
<path d="M988 481v28q0 8 8 9" stroke="#a6d2c4" stroke-width="1.5" opacity=".48" fill="none"/>
<ellipse cx="1001" cy="474" rx="16" ry="5" fill="#e3dfbf"/>
<ellipse cx="1001" cy="474" rx="13" ry="3.6" fill="#6e6a51"/><ellipse cx="1001" cy="475" rx="12" ry="2.3" fill="#343d31"/>
<path d="M990 476q12 4 23-1" fill="none" stroke="#bcb892" stroke-width=".7"/>
<path d="M991 515q9 5 20 0" fill="none" stroke="#59664d" opacity=".45"/>
</g>
''')
# Sofa as large asymmetric foreground silhouette with seams and textile texture.
add('''<g filter="url(#shadow)"><path d="M-80 454q123-66 209-17l100 121 73 46-9 126H-80Z" fill="url(#sofa)"/><path d="M-15 475q61-33 105-11l77 114-15 70H-20Z" fill="url(#cushion)"/><path d="M95 469q36-7 49 37l30 83" fill="none" stroke="#c17b50" stroke-width="2"/><path d="M-20 644q118-36 232-15l70 101H-20Z" fill="#6b3a2a"/><path d="M162 560q56-16 85 11l39 72-25 58-83-28Z" fill="url(#cushion)"/><path d="M177 572q45-17 62 5l27 58-13 48" fill="none" stroke="#d38d60" stroke-width="2" opacity=".6"/>
<path d="M-40 600l101-45 56 21-39 95-108-13Z" fill="#b29f72"/><path d="M-35 608l85-38 50 12-31 76-91-8Z" fill="#89937b"/></g>
''')
for i in range(24):
    add(f'<path d="M{-20+i*5} {607-i*1.7}l-20 47" stroke="#dacda0" opacity=".3" stroke-width="1"/>')
# Original plant, less dominant than reference desk greenery.
add('''<ellipse cx="1339" cy="538" rx="50" ry="9" fill="#19251e" opacity=".5" filter="url(#soft)"/>
<path d="M1331 478q12-91 7-177 M1336 433q-13-43-44-61 M1338 404q24-38 47-51" fill="none" stroke="#293e2f" stroke-width="5"/>
<path d="M1331 478q12-91 7-177 M1336 433q-13-43-44-61 M1338 404q24-38 47-51" fill="none" stroke="#9a9a64" stroke-width="1.2"/>
<path d="M1336 362C1320 346 1294 329 1296 304c28 1 47 19 40 58Z" fill="url(#leaf)"/>
<path d="M1340 338c4-19 36-44 55-36-2 25-25 35-55 36Z" fill="url(#leaf)"/>
<path d="M1321 417c-18 3-48-14-49-35 24-10 44 10 49 35Z" fill="url(#leaf)"/>
<path d="M1350 390c8-21 35-37 54-16-13 24-33 27-54 16Z" fill="url(#leaf)"/>
<path d="M1342 445c11-28 41-35 58-21-13 23-35 29-58 21Z" fill="url(#leaf)"/>
<path d="M1336 361l-31-44 M1340 338l42-28 M1321 417l-38-28 M1350 390l44-13 M1342 445l43-18" stroke="#b7b47a" stroke-width="1" opacity=".54" fill="none"/>
<path d="M1332 348l-13-4 M1327 341l-4-14 M1357 326l4-9 M1374 316l9 3 M1307 407l-3-9 M1368 385l9 3" stroke="#1d3c32" stroke-width="1.2" opacity=".65"/>
<path d="M1298 465q34 12 70 0l-6 54q-3 19-29 19t-29-19Z" fill="url(#pot)"/>
<path d="M1302 476q32 12 62 0" fill="none" stroke="#59472f" stroke-width="2" opacity=".5"/>
<path d="M1310 483l3 31q1 11 12 13" stroke="#e0b777" stroke-width="2" opacity=".35" fill="none"/>
<ellipse cx="1333" cy="465" rx="35" ry="9" fill="#b8915e"/>
<ellipse cx="1333" cy="466" rx="30" ry="6" fill="#3b3527"/>
<path d="M1304 464q28-7 58 0" stroke="#e1bd82" opacity=".6" fill="none"/>
<path d="M1312 468l5-2 M1324 463l5 1 M1342 467h5 M1352 465l4 1" stroke="#847354" stroke-width="2"/>
<path d="M1331 470v-13" stroke="#7d8051" stroke-width="4"/>
<rect width="1440" height="730" fill="transparent" filter="url(#grain)" pointer-events="none"/>
</svg>''')
Path(__file__).parent.joinpath('assets/lounge.svg').write_text(''.join(p))
print('Original scene generated:',len(p),'vector elements')
