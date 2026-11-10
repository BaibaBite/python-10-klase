let worker=null, pending=new Map(), seq=0, loaded=false;
function ensureWorker(){
 if(worker)return worker;
 worker=new Worker(new URL('./worker.js',import.meta.url));
 worker.onmessage=({data})=>{loaded=true;const p=pending.get(data.id);if(!p)return;clearTimeout(p.timer);pending.delete(data.id);p.resolve(data);};
 worker.onerror=()=>{reset('Python izpildes vide neizdevās ielādēt. Pārbaudi interneta savienojumu.');};
 return worker;
}
function reset(message){worker?.terminate();worker=null;loaded=false;for(const p of pending.values()){clearTimeout(p.timer);p.resolve({output:'',error:message});}pending.clear();}
export async function execute(code,inputs=[],onLoading=()=>{}){
 if(code.length>12000)return {output:'',error:'Kods ir pārāk garš (maksimums 12 000 rakstzīmes).'};
 const w=ensureWorker(), id=++seq;
 onLoading();
 return new Promise(resolve=>{
  const timer=setTimeout(()=>{reset('Programma pārsniedza 6 sekunžu izpildes limitu. Iespējams, izveidots bezgalīgs cikls.');},loaded?7000:45000);
  pending.set(id,{resolve,timer});w.postMessage({id,code,inputs});
 });
}
export function stop(){reset('Izpilde pārtraukta.');}
