const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const dir = path.join(__dirname, '../public/tarjeta');
const logo = fs.readFileSync(path.join(__dirname, '../public/logo-v2.png')).toString('base64');
const qr = fs.readFileSync(path.join(dir, 'qr-soluciones-delta.png')).toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600">
<defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#0b452f"/><stop offset="1" stop-color="#052b20"/></linearGradient><pattern id="lines" width="160" height="160" patternUnits="userSpaceOnUse"><path d="M-40 160 160-40M0 200 200 0M40 240 240 40" stroke="#c3dcac" stroke-opacity=".05" stroke-width="1"/></pattern></defs>
<rect width="1200" height="1600" fill="url(#bg)"/><rect width="1200" height="1600" fill="url(#lines)"/>
<path d="M960 0H1200V500Z" fill="#85b85c" opacity=".14"/><path d="M0 1250 260 1600H0Z" fill="#85b85c" opacity=".14"/>
<rect x="70" y="65" width="148" height="164" rx="20" fill="#fafbf2"/><image href="data:image/png;base64,${logo}" x="91" y="82" width="106" height="128"/>
<g font-family="Arial, sans-serif"><text x="254" y="132" fill="#f7faef" font-weight="700" font-size="55" letter-spacing="-2">Soluciones Delta</text><text x="258" y="177" fill="#c7dabb" font-size="23" letter-spacing="2">SERVICIOS PETROLEROS EN VENEZUELA</text>
<path d="M72 280H1128" stroke="#72956a" stroke-opacity=".5"/>
<text x="600" y="363" fill="#fffef4" font-size="51" font-weight="700" text-anchor="middle" letter-spacing="-1">Escanea y conecta</text><text x="600" y="423" fill="#fffef4" font-size="51" font-weight="700" text-anchor="middle" letter-spacing="-1">con nosotros.</text>
<text x="600" y="483" fill="#cbdcc2" font-size="25" text-anchor="middle">Toda la información de Delta, en un solo lugar.</text>
<rect x="252" y="540" width="696" height="696" rx="32" fill="white"/>
<image href="data:image/png;base64,${qr}" x="270" y="558" width="660" height="660"/>
<text x="600" y="1298" fill="#d4e6c4" font-size="24" text-anchor="middle">WhatsApp · Contacto · Instagram · Ubicación</text>
<text x="600" y="1374" fill="#ffffff" font-size="38" font-weight="700" text-anchor="middle">+58 424-6472446</text>
<text x="600" y="1421" fill="#d0dfc6" font-size="25" text-anchor="middle">delta@soluciones-delta.com</text>
<path d="M480 1472H720" stroke="#89bb62" stroke-width="3"/>
<text x="600" y="1522" fill="#ffffff" font-size="24" text-anchor="middle" letter-spacing="1">soluciones-delta.com/tarjeta</text>
<text x="600" y="1562" fill="#b7cdae" font-size="18" text-anchor="middle">San Francisco, Zulia · Soluciones Delta, C.A.</text></g></svg>`;
fs.writeFileSync(path.join(dir, 'tarjeta-qr-delta.svg'), svg);
sharp(Buffer.from(svg)).png().toFile(path.join(dir, 'tarjeta-qr-delta.png')).then(()=>console.log('QR presentation created, 1200 × 1600 px'));
