"""Serve this static Nuxt export without logging cancelled media downloads."""

from __future__ import annotations

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class StaticSiteHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def copyfile(self, source, outputfile):
        try:
            super().copyfile(source, outputfile)
        except (BrokenPipeError, ConnectionResetError):
            # Browsers routinely cancel off-screen video preloads.
            pass


if __name__ == "__main__":
    root = Path(__file__).parent
    handler = lambda *args, **kwargs: StaticSiteHandler(*args, directory=root, **kwargs)
    server = ThreadingHTTPServer(("", 4173), handler)
    print("Serving http://localhost:4173")
    server.serve_forever()
