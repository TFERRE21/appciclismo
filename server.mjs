import http from 'node:http';
export function handler(req,res){
 const ok=req.method==='GET' && req.url==='/health';
 res.writeHead(ok?200:404,{'Content-Type':'application/json','Cache-Control':'no-store'});
 res.end(JSON.stringify(ok?{status:'ok',service:'pedal-brasil'}:{error:'not_found'}));
}
if(process.argv[1] && import.meta.url===new URL('file://'+process.argv[1]).href) http.createServer(handler).listen(8080,'0.0.0.0');
