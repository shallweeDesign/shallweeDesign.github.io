from playwright.sync_api import sync_playwright
import os
import threading
import http.server
import socketserver

BASE = "/Users/jamsychuang/Documents/shallweedesign/shallweeDesign.github.io"
OUT  = f"{BASE}/project/assets/screenshots"
PORT = 8999

projects = [
    ("250515_pa-secops-seminar",             "project/250515_pa-secops-seminar/html/index.html"),
    ("250508_pa-ai-guardian",                "project/250508_pa-ai-guardian/html/index.html"),
    ("250507_windriver-ai-edge-forum",       "project/250507_windriver-ai-edge-forum/html/index.html"),
    ("250313_asus-expertguardian",           "project/250313_asus-expertguardian/index.html"),
    ("250219_asus-platform-lottie",          "project/250219_asus-platform-lottie/index.html"),
    ("250212_rog-theta-headset",             "project/250212_rog-theta-headset/index.html"),
    ("250212_rog-pink-accessories",          "project/250212_rog-pink-accessories/index.html"),
    ("250212_asus-gartner-hybrid-workplace", "project/250212_asus-gartner-hybrid-workplace/index.html"),
    ("250212_asus-business-smb",             "project/250212_asus-business-smb/index.html"),
    ("230927_obank-financial-docs",          "project/230927_obank-financial-docs/index.html"),
    ("221006_mitsubishi-factory-trip",       "project/221006_mitsubishi-factory-trip/index.html"),
    ("221006_kkdays-osaka",                  "project/221006_kkdays-osaka/index.html"),
    ("221006_haku",                          "project/221006_haku/index.html"),
]

# ── Start local HTTP server in background thread ────────────────────
os.chdir(BASE)
class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass

socketserver.TCPServer.allow_reuse_address = True
httpd = socketserver.TCPServer(("", PORT), QuietHandler)
thread = threading.Thread(target=httpd.serve_forever, daemon=True)
thread.start()
print(f"Server running at http://localhost:{PORT}")

# ── Capture screenshots ─────────────────────────────────────────────
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1440, "height": 900})

    for name, path in projects:
        url = f"http://localhost:{PORT}/{path}"
        out_path = f"{OUT}/{name}.jpg"
        print(f"Capturing {name}...")
        try:
            page.goto(url, wait_until="networkidle", timeout=20000)
            page.wait_for_timeout(3000)
            page.screenshot(
                path=out_path,
                clip={"x": 0, "y": 0, "width": 1440, "height": 900},
                type="jpeg", quality=85
            )
            print(f"  ✓ {os.path.getsize(out_path) // 1024}KB")
        except Exception as e:
            print(f"  ✗ {e}")

    browser.close()

httpd.shutdown()
print("Done.")
