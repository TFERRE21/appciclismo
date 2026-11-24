import {test} from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import {handler} from './server.mjs';
test('health e rota desconhecida',async()=>{const server=http.createServer(handler); await new Promise(r=>server.listen(0,'127.0.0.1',r)); try{const base='http://127.0.0.1:'+server.address().port;const health=await fetch(base+'/health');assert.equal(health.status,200);assert.equal((await health.json()).status,'ok');assert.equal((await fetch(base+'/missing')).status,404);}finally{await new Promise(r=>server.close(r));}});
