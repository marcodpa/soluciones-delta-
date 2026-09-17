"""Build the static coverage map from geoBoundaries VEN ADM1 (WGS84).

Usage: python scripts/generate-venezuela-map.py path/to/VEN-ADM1.geojson
Source, license and projection are documented in public/maps/README.md.
"""
import html
import json
import math
import sys
from pathlib import Path


def rings(feature):
    geometry = feature["geometry"]
    polygons = geometry["coordinates"] if geometry["type"] == "MultiPolygon" else [geometry["coordinates"]]
    return [ring for polygon in polygons for ring in polygon]


def simplify(points, tolerance=0.35):
    if len(points) < 3:
        return points
    start, end = points[0], points[-1]
    dx, dy = end[0] - start[0], end[1] - start[1]
    length = dx * dx + dy * dy
    distances = []
    for x, y in points[1:-1]:
        t = max(0, min(1, ((x - start[0]) * dx + (y - start[1]) * dy) / length)) if length else 0
        distances.append(math.hypot(x - start[0] - t * dx, y - start[1] - t * dy))
    furthest = max(distances, default=0)
    if furthest <= tolerance:
        return [start, end]
    index = distances.index(furthest) + 1
    return simplify(points[:index + 1], tolerance)[:-1] + simplify(points[index:], tolerance)


data = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
features = data["features"]
assert len([f for f in features if f["properties"]["shapeISO"] == "VE-V"]) == 1
# Mercator projection preserves orientation and makes north point up.
def mercator(point):
    lon, lat = point[:2]
    return (math.radians(lon), -math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)))

points = [mercator(p) for f in features for ring in rings(f) for p in ring]
min_x, max_x = min(p[0] for p in points), max(p[0] for p in points)
min_y, max_y = min(p[1] for p in points), max(p[1] for p in points)
scale = min(480 / (max_x - min_x), 405 / (max_y - min_y))
offset_x = (540 - (max_x - min_x) * scale) / 2
offset_y = (470 - (max_y - min_y) * scale) / 2

def project(point):
    x, y = mercator(point)
    return ((x - min_x) * scale + offset_x, (y - min_y) * scale + offset_y)

svg = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 470" role="img" aria-labelledby="title desc">',
       '<title id="title">Venezuela: estado Zulia</title>',
       '<desc id="desc">Zulia, destacado en verde, se encuentra al noroeste de Venezuela y rodea el lago de Maracaibo.</desc>',
       '<metadata>geoBoundaries VEN-ADM1-42786344; OCHA Venezuela / Instituto Nacional de Estadística; CC BY 3.0 IGO. Simplified and projected to Mercator.</metadata>']
for feature in sorted(features, key=lambda f: f["properties"]["shapeISO"] == "VE-V"):
    is_zulia = feature["properties"]["shapeISO"] == "VE-V"
    paths = []
    for ring in rings(feature):
        projected = simplify([project(point) for point in ring])
        if len(projected) > 3:
            paths.append("M" + "L".join(f"{x:.1f},{y:.1f}" for x, y in projected) + "Z")
    name = html.escape(feature["properties"]["shapeName"])
    fill = "#167b34" if is_zulia else "#dbe7df"
    svg.append(f'<path data-state="{feature["properties"]["shapeISO"]}" fill="{fill}" stroke="#ffffff" stroke-width="0.65" stroke-linejoin="round" fill-rule="evenodd" d="{"".join(paths)}"><title>{name}</title></path>')
# Label the state, not an invented office location. Anchor lies in western Zulia.
x, y = project((-72.3, 10.5))
svg.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="12" fill="#ffffff" fill-opacity=".22"/>')
svg.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="5" fill="#ffffff" stroke="#11632a" stroke-width="2"/>')
svg.append(f'<path d="M{x:.1f},{y - 7:.1f}V{y - 37:.1f}H{x + 56:.1f}" stroke="#11632a" stroke-width="1.4" fill="none"/>')
svg.append('</svg>')
output = Path(__file__).resolve().parents[1] / "public/maps/venezuela-zulia.svg"
output.parent.mkdir(parents=True, exist_ok=True)
output.write_text("\n".join(svg), encoding="utf-8")
print(f"Generated {output.name}: {output.stat().st_size} bytes, {len(features)} regions, Zulia=VE-V")
