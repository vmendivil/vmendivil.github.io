"""Read-only LAN preview. Serve ONLY the assembled public preview directory."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote, urlsplit
import argparse
import html
import io
import json

ROOT = Path(__file__).resolve().parent / 'preview'

class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def send_head(self):
        parts = Path(unquote(urlsplit(self.path).path)).parts
        if any(part.startswith('.') or part in {'BUILD_BRIEF.md','PRODUCT.md','DESIGN.md','README.md','VERIFICATION.md'} for part in parts):
            self.send_error(404)
            return None
        target = Path(self.translate_path(self.path)).resolve()
        if not target.is_relative_to(ROOT.resolve()):
            self.send_error(404)
            return None
        # Comparison chrome is preview-only: never alter study files or assets.
        document = target / 'index.html' if target.is_dir() else target
        if document.is_file() and document.suffix.lower() == '.html':
            relative = document.relative_to(ROOT.resolve())
            rows = json.loads((ROOT / 'manifest.json').read_text())
            row = next((r for r in rows if r['slug'] == relative.parts[0]), None)
            if row and row.get('source_url'):
                url = html.escape(row['source_url'], quote=True)
                name = html.escape(row['reference'], quote=True)
                markup = (
                    '\n<!-- Preview-only source comparison; approved 1559174714826563705 -->\n'
                    '<link rel="stylesheet" href="/source-links.css">\n'
                    f'<a id="prototype-source-link" href="{url}" target="_blank" '
                    f'rel="noopener noreferrer" aria-label="Original inspiration site: {name} (opens in a new tab)" '
                    f'title="Inspiration: {name} — opens in a new tab" '
                    'style="position:fixed;right:12px;bottom:12px;z-index:2147483000;'
                    'padding:10px 14px;background:#f4f2ed;color:#243026;font:14px/20px system-ui;">'
                    'Original site</a>\n<script src="/source-links.js" defer></script>\n'
                ).encode('utf-8')
                content = document.read_bytes()
                closing = content.lower().rfind(b'</body>')
                content = content[:closing] + markup + content[closing:] if closing >= 0 else content + markup
                self.send_response(200)
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                self.send_header('Content-Length', str(len(content)))
                self.end_headers()
                return io.BytesIO(content)
        return super().send_head()

    def list_directory(self, path):
        self.send_error(404, 'Directory listing is disabled')
        return None

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('Referrer-Policy', 'no-referrer')
        super().end_headers()

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--bind', default='127.0.0.1')
    parser.add_argument('--port', type=int, default=8788)
    args = parser.parse_args()
    with ThreadingHTTPServer((args.bind, args.port), PreviewHandler) as server:
        print(f'Public preview root: {ROOT}', flush=True)
        print(f'Preview URL: http://{args.bind}:{args.port}/', flush=True)
        server.serve_forever()
