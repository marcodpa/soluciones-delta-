const fs = require('fs');
const ts = require('typescript');
const catalog = JSON.parse(fs.readFileSync('src/lib/i18n/source-catalog.json','utf8'));
const files = [...new Set(catalog.map(x=>x.file))].filter(f=>f.startsWith('src/components/') && !f.endsWith('ArticlesMotion.tsx'));
for(const file of files) {
 let source=fs.readFileSync(file,'utf8').replace(/^\uFEFF/,'');
 if(source.includes('useLocalizedTree'))continue;
 const sf=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 const edits=[];
 for(const stmt of sf.statements) {
  if(!ts.isFunctionDeclaration(stmt)||!stmt.name||!/^[A-Z]/.test(stmt.name.text)||!stmt.body)continue;
  const returns=[];
  function walk(n){if(n!==stmt.body && ts.isFunctionLike(n))return; if(ts.isReturnStatement(n)&&n.expression){let e=n.expression;while(ts.isParenthesizedExpression(e))e=e.expression;if(ts.isJsxElement(e)||ts.isJsxSelfClosingElement(e)||ts.isJsxFragment(e))returns.push(n.expression);}ts.forEachChild(n,walk);}
  walk(stmt.body);
  if(!returns.length)continue;
  edits.push({start:stmt.body.getStart(sf)+1,end:stmt.body.getStart(sf)+1,text:'\n  const localize = useLocalizedTree();'});
  for(const e of returns)edits.push({start:e.getStart(sf),end:e.end,text:`localize(${e.getText(sf)})`});
 }
 if(!edits.length)continue;
 for(const e of edits.sort((a,b)=>b.start-a.start))source=source.slice(0,e.start)+e.text+source.slice(e.end);
 source=source.replace(/^['"]use client['"];?\s*/, '');
 source='"use client";\n\nimport { useLocalizedTree } from "@/lib/i18n/client";\n'+source;
 fs.writeFileSync(file,source);
 console.log(file);
}
