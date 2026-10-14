"""Embed actual capture origin in evidence PNGs; preserve every pixel chunk."""
from pathlib import Path
import struct,zlib
root=Path(__file__).parent/'.impeccable/review'
for name in ['desktop.png','desktop-full.png','mobile.png','mobile-full.png']:
    p=root/name
    data=p.read_bytes()
    origin='Original Chromium/CDP browser capture of the locally authored Quiet Current WebGL scene. '
    origin+=('Exact top1440x900 crop of desktop-full.png with ffmpeg; no artistic pixels changed.' if name=='desktop.png' else 'Direct one-frame compositor capture; fullpage captures pin garden height to original viewport height. No tiling.')
    payload=b'Source\0'+origin.encode('latin1')
    chunk=struct.pack('>I',len(payload))+b'tEXt'+payload+struct.pack('>I',zlib.crc32(b'tEXt'+payload)&0xffffffff)
    assert data[-8:-4]==b'IEND'
    p.write_bytes(data[:-12]+chunk+data[-12:])
    print(name,struct.unpack('>II',data[16:24]),'original capture provenance embedded')
