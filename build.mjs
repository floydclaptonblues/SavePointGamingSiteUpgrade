import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const file of ['index.html','style.css','app.mjs','core.mjs','catalog.json','favicon.svg'])await copyFile(file,`dist/${file}`);
console.log('Static storefront built in dist/');
