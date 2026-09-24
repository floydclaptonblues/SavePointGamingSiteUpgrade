import http from 'node:http';
import {readFile} from 'node:fs/promises';
const allowed=new Set(['index.html','style.css','app.mjs','core.mjs','catalog.json','favicon.svg','logo.svg','space.svg']);
const mime={html:'text/html',css:'text/css',mjs:'text/javascript',json:'application/json',svg:'image/svg+xml'};
http.createServer(async(req,res)=>{const path=new URL(req.url,'http://localhost').pathname;const file=path==='/'?'index.html':path.slice(1);if(!allowed.has(file)){res.writeHead(404);return res.end('Not found')}try{const data=await readFile(new URL(file,import.meta.url));res.writeHead(200,{'Content-Type':mime[file.split('.').pop()]+'; charset=utf-8'});res.end(data)}catch{res.writeHead(500);res.end('Unable to load file')}}).listen(4187,'127.0.0.1',()=>console.log('Preview: http://127.0.0.1:4187'));

