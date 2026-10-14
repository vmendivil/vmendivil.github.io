from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
from pathlib import Path
from threading import Thread, Event
root=Path(__file__).resolve().parents[2]
for port,slug in [(9619,'19-rokumaruichi'),(9620,'20-alphamark'),(9621,'21-artemii')]:
    server=ThreadingHTTPServer(('127.0.0.1',port),partial(SimpleHTTPRequestHandler,directory=str(root/slug)))
    Thread(target=server.serve_forever,daemon=True).start()
print('pending-19-21 loopback servers ready',flush=True)
Event().wait()
