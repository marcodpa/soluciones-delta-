const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const files = [];
function walk(dir) { for (const name of fs.readdirSync(dir)) { const p=path.join(dir,name); if(fs.statSync(p).isDirectory()){if(!['ui','i18n'].includes(name))walk(p);}else if(/\.(tsx|ts)$/.test(p))files.push(p); } }
walk('src/components'); walk('src/lib'); walk('src/app');
const ignored = /(?:ErrorReporter|global-error|layout|opengraph|JsonLd|FortalezasSection|EquipmentSection|ContactSection|ServicesCatalogoPDF|PlanillaCotizacionPDF|utils|related-services|sitemap|robots)/;
const dataKeys = new Set(['slug','serviceSlug','img','src','cover','hero','antes','despues','color','accentColor','image','icon','kind','id','href','url','published','areaType','key','category','variant','type','stroke','background','fontFamily','fontSize','textAlign','position','display','justifyContent','alignItems']);
const attrKeys = new Set(['alt','title','placeholder','aria-label','aria-description']);
const catalog = [];
const seen = new Map();
function add(s,file) { s=s.replace(/\s+/g,' ').trim(); if(!/[a-záéíóúñü]/i.test(s) || s.length<2 || /^(?:https?:|\/|@\/|#|rgba?\(|linear-gradient|radial-gradient)/.test(s))return; if(!seen.has(s)){seen.set(s,catalog.length);catalog.push({id:catalog.length,text:s,file:file.replaceAll('\\','/')});} }
for(const file of files.filter(f=>!ignored.test(f))) {
 const code=fs.readFileSync(file,'utf8'); const sf=ts.createSourceFile(file,code,ts.ScriptTarget.Latest,true, file.endsWith('tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);
 function visit(n){
  if(ts.isJsxText(n)){add(n.text,file);return;}
  if(ts.isStringLiteral(n)||ts.isNoSubstitutionTemplateLiteral(n)){
   const p=n.parent;
   if(ts.isJsxAttribute(p)){if(attrKeys.has(p.name.text))add(n.text,file);return;}
   if(ts.isImportDeclaration(p)||ts.isExportDeclaration(p)||ts.isImportTypeNode(p)||ts.isLiteralTypeNode(p)||ts.isExpressionStatement(p))return;
   if(ts.isPropertyAssignment(p)){if(p.name===n||dataKeys.has(p.name.getText(sf)))return;}
   if(ts.isCallExpression(p) && /(?:matchMedia|querySelector|registerPlugin|addEventListener|removeEventListener|console|fetch|import|createContext|useState|includes|startsWith|endsWith|replace|split|join|padStart|createElement|setAttribute|getAttribute|querySelectorAll)/.test(p.expression.getText(sf)))return;
   if(ts.isBinaryExpression(p)||ts.isCaseClause(p))return;
   // Style object and attribute expressions are not translatable content.
   let ancestor=p; while(ancestor && !ts.isSourceFile(ancestor)){if(ts.isJsxAttribute(ancestor)&&!attrKeys.has(ancestor.name.text))return; if(ts.isPropertyAssignment(ancestor)&&['style','styles'].includes(ancestor.name.getText(sf)))return; ancestor=ancestor.parent;}
   if(/^[a-z0-9]+(?:[-/.][a-z0-9]+)+$/.test(n.text)||/^(?:[A-Z]\d|\d)[\d\s.,%/-]*$/.test(n.text))return;
   add(n.text,file);
  }
  ts.forEachChild(n,visit);
 }
 visit(sf);
}
fs.writeFileSync('src/lib/i18n/source-catalog.json',JSON.stringify(catalog,null,2)+'\n');
console.log(JSON.stringify({entries:catalog.length,characters:catalog.reduce((s,x)=>s+x.text.length,0),byFile:Object.fromEntries([...new Set(catalog.map(x=>x.file))].map(f=>[f,catalog.filter(x=>x.file===f).length]))},null,2));
