"""Read-only loopback test server: existing public PNGs only."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os
ROOT=Path(__file__).resolve().parent
SERVED=ROOT.parent.parent/'preview'/'18-artisans'
class Handler(SimpleHTTPRequestHandler):
    def translate_path(self,path):
        resolved=Path(super().translate_path(path))
        if resolved.suffix.lower()=='.png' and resolved.is_relative_to(ROOT/'assets'):
            return str(SERVED/'assets'/resolved.name)
        return str(resolved)
os.chdir(ROOT)
ThreadingHTTPServer(('127.0.0.1',9418),Handler).serve_forever()
