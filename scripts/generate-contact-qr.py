"""Generate the permanent contact QR and verify the PNG can be decoded."""
from pathlib import Path
import qrcode
import qrcode.image.svg
import cv2

url = "https://soluciones-delta.com/tarjeta"
target = Path(__file__).resolve().parents[1] / "public" / "tarjeta"
qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=32, border=4)
qr.add_data(url)
qr.make(fit=True)
png = target / "qr-soluciones-delta.png"
qr.make_image(fill_color="#073d29", back_color="white").save(png)
qr.make_image(image_factory=qrcode.image.svg.SvgPathFillImage).save(target / "qr-soluciones-delta.svg")
image = cv2.imread(str(png))
for size in (image.shape[0], 400, 220):
    sample = cv2.resize(image, (size, size), interpolation=cv2.INTER_AREA)
    result, _, _ = cv2.QRCodeDetector().detectAndDecode(sample)
    assert result == url, (size, result)
print(f"QR verified at full size, 400px and 220px: {url}")
