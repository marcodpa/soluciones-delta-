# Venezuela / Zulia coverage map

`venezuela-zulia.svg` is generated from geographic coordinates, not an AI image or hand-drawn outline.

- Source: [geoBoundaries VEN ADM1](https://www.geoboundaries.org/api/current/gbOpen/VEN/ADM1/), boundary ID `VEN-ADM1-42786344`.
- Original providers: OCHA Venezuela and Instituto Nacional de Estadística, administrative geography representing 2020.
- License: [CC BY 3.0 IGO](https://creativecommons.org/licenses/by/3.0/igo/).
- Data: https://media.githubusercontent.com/media/wmgeolab/geoBoundaries/9469f09/releaseData/gbOpen/VEN/ADM1/geoBoundaries-VEN-ADM1_simplified.geojson
- Changes: Mercator projection, 0.35px line simplification, styling and a state label. The green shape is selected by ISO code `VE-V` (Zulia). The label anchor is not an office marker.
- Rebuild: `python scripts/generate-venezuela-map.py <downloaded-geojson>`.

The map is illustrative administrative geography from the cited dataset, not a legal boundary determination.
