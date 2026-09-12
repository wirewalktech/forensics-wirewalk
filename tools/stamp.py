#!/usr/bin/env python3
"""Compute the real SHA-256 shown in each page's chain-of-custody footer.

The hash is taken over the page BODY only — everything after the closing front
matter delimiter. Hashing the body rather than the whole file keeps the value
stable when the stamp itself is written back, and keeps it independently
checkable: anyone can clone the public repo, strip the front matter, and verify.

An uncomputed or decorative hash on a forensics site is exactly the costume the
design brief exists to avoid, so a page that cannot be stamped is left without a
hash and the footer omits the row rather than printing something false.

    python3 tools/stamp.py            # stamp every page
    python3 tools/stamp.py --check    # verify, exit 1 on any drift (CI / pre-push)
"""
import hashlib, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
FM = re.compile(r"^---\n(.*?)\n---\n", re.S)
CHECK = "--check" in sys.argv

def pages():
    for p in sorted(ROOT.rglob("*.html")) + sorted(ROOT.rglob("*.md")):
        if any(part.startswith((".", "_site")) for part in p.relative_to(ROOT).parts):
            if not p.relative_to(ROOT).parts[0] == "_posts":
                continue
        if p.name == "README.md":
            continue
        yield p

drift, stamped, skipped = [], 0, 0
for path in pages():
    src = path.read_text(encoding="utf-8")
    m = FM.match(src)
    if not m:                      # no front matter -> Jekyll will not render it as a page
        skipped += 1
        continue
    front, body = m.group(1), src[m.end():]
    digest = hashlib.sha256(body.encode("utf-8")).hexdigest()
    rel = path.relative_to(ROOT)
    current = re.search(r"^content_sha256:\s*(\S+)\s*$", front, re.M)
    if current and current.group(1) == digest:
        stamped += 1
        continue
    if CHECK:
        drift.append(f"{rel}: {'stale' if current else 'unstamped'} (expected {digest[:16]}...)")
        continue
    front = (re.sub(r"^content_sha256:.*$", f"content_sha256: {digest}", front, flags=re.M)
             if current else front.rstrip() + f"\ncontent_sha256: {digest}")
    path.write_text(f"---\n{front}\n---\n{body}", encoding="utf-8")
    print(f"  stamped {rel}  {digest[:16]}...")
    stamped += 1

if CHECK and drift:
    print("FAIL — the published hash does not match the page body:")
    for d in drift:
        print("  " + d)
    sys.exit(1)
print(f"{'verified' if CHECK else 'stamped'} {stamped} page(s); {skipped} file(s) without front matter")
