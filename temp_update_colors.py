from pathlib import Path

root = Path(r"c:\Sugar N Grace (Cafe Boutique)\src")
replacements = {
    '#c9a87c': '#d4af37',
    '#f3e5d0': '#f5e2a3',
    '#dfb889': '#b8860b',
    'rgba(201, 168, 124': 'rgba(212, 175, 55',
    'rgba(201,168,124': 'rgba(212,175,55',
}
exts = {'.ts', '.tsx', '.css', '.html'}

for path in root.rglob('*'):
    if path.is_file() and path.suffix.lower() in exts:
        text = path.read_text(encoding='utf-8')
        new_text = text
        for old, new in replacements.items():
            new_text = new_text.replace(old, new)
        if new_text != text:
            path.write_text(new_text, encoding='utf-8')
            print(path)
