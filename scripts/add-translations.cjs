const fs = require('fs');
const catalog = JSON.parse(fs.readFileSync('src/lib/i18n/source-catalog.json', 'utf8').replace(/^\uFEFF/, ''));
const dictionaryPath = 'src/lib/i18n/en.json';
const dictionary = JSON.parse(fs.readFileSync(dictionaryPath, 'utf8').replace(/^\uFEFF/, ''));
const batch = JSON.parse(fs.readFileSync(process.argv[2], 'utf8').replace(/^\uFEFF/, ''));
for (const [id, english] of Object.entries(batch)) {
  if (!catalog[Number(id)] || typeof english !== 'string' || !english.trim()) throw new Error(`Invalid translation ${id}`);
  dictionary[catalog[Number(id)].text] = english;
}
fs.writeFileSync(dictionaryPath, JSON.stringify(dictionary, null, 2) + '\n');
console.log(`${Object.keys(dictionary).length} translated phrases`);
