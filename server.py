"""Serve this static Nuxt export without logging cancelled media downloads."""

from __future__ import annotations

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import re


class StaticSiteHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        self._byte_range = None
        requested = self.headers.get("Range", "")
        if self.command != "GET" or not requested or self.headers.get("If-Range"):
            return super().send_head()

        path = Path(self.translate_path(self.path))
        match = re.fullmatch(r"bytes=(\d*)-(\d*)", requested.strip())
        if not path.is_file() or not match or not any(match.groups()):
            return super().send_head()

        source = path.open("rb")
        stat = path.stat()
        size = stat.st_size
        first, last = match.groups()
        if first:
            start = int(first)
            end = min(int(last), size - 1) if last else size - 1
        else:
            start = max(0, size - int(last))
            end = size - 1

        if start >= size or end < start:
            source.close()
            self.send_response(416)
            self.send_header("Content-Range", f"bytes */{size}")
            self.send_header("Content-Length", "0")
            self.end_headers()
            return None

        self.send_response(206)
        self.send_header("Content-type", self.guess_type(str(path)))
        self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Content-Length", str(end - start + 1))
        self.send_header("Last-Modified", self.date_time_string(stat.st_mtime))
        self.end_headers()
        self._byte_range = (start, end)
        source.seek(start)
        return source

    def do_GET(self):
        route = self.path.split("?", 1)[0].rstrip("/")
        if route == "/about-us":
            self.path = "/about-us.html"
        elif route == "/packages":
            self.path = "/packages.html"
        elif route == "/services" or route.startswith("/services/"):
            self.path = "/services.html"
        elif route in {"/logo", "/typography", "/color", "/photography", "/campaign", "/motion", "/commercial-production"}:
            self.path = "/index.html"
        super().do_GET()

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        self.send_header("Accept-Ranges", "bytes")
        super().end_headers()

    def copyfile(self, source, outputfile):
        try:
            if self._byte_range is None:
                super().copyfile(source, outputfile)
                return
            start, end = self._byte_range
            remaining = end - start + 1
            while remaining:
                chunk = source.read(min(65536, remaining))
                if not chunk:
                    break
                outputfile.write(chunk)
                remaining -= len(chunk)
        except (BrokenPipeError, ConnectionResetError):
            # Browsers routinely cancel off-screen video preloads.
            pass


if __name__ == "__main__":
    root = Path(__file__).parent
    handler = lambda *args, **kwargs: StaticSiteHandler(*args, directory=root, **kwargs)
    server = ThreadingHTTPServer(("", 4173), handler)
    print("Serving http://localhost:4173")
    server.serve_forever()
