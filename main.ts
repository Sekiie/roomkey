import F from"node:fs";
const{MAKEFUN_INPUT_DIR:I,MAKEFUN_OUTPUT_DIR:O}=process.env;
const S=t=>{
let w=t.search("\n"),E=[-w,w,-1,1],c=(a,b)=>a-b,j=t.replace(/\n/g,""),M=e=>[...j.matchAll(e)].map(x=>x.index),G=M(/[.*+]/g),B=M(/[$*]/g),p=M(/[@+]/g)[0],H=p/w|0,m="",pd=-1,j2,d,np,v,q,pp,bb,mm,kk;
for(let s=0;s<2;s++)for(let k=0;k*7+1<w;k++){
let c0=1+7*k,a=(s?H+1:H-7)*w+c0;
const f=x=>x>=a&&x-a<=6*w+5&&(x-c0)%w<=5;
let b=B.filter(f).sort(c);if(!b.length)continue;
let g=G.filter(f),R=B.filter(x=>!b.includes(x)),dc=-1;
for(d=c0;d<=c0+5;d++)if(j[(s?H+1:H-1)*w+d]!="#")dc=d;
let D=[[p,b,""]],u=0,y=1,V2={};
while(u<y){
q=D[u++],[pp,bb,mm]=q,kk=pp+","+bb;
if(V2[kk])continue;V2[kk]=1;
if(bb==g+"")break;
for(j2=4;j2--;){d=E[j2],np=pp+d;
if(j[np]=="#")continue;
if(bb.includes(np)){
v=np+d;
if(j[v]=="#"||bb.includes(v)||R.includes(v)||(v/w|0)==H)continue;
let nx=bb.map(x=>x==np?v:x).sort(c);
D[y++]=[np,nx,mm+"UDLR"[j2]];
}else{
if(R.includes(np)||Math.abs((np/w|0)-H)==1&&np%w!=dc&&np%w!=pd)continue;
D[--u]=[np,bb,mm+"udlr"[j2]];
}}
}
if(bb!=g+"")return"";
m+=mm;p=pp;
b.map((x,i)=>B[B.indexOf(x)]=bb[i]);
pd=dc;
}
return m;
};
F.readdirSync(I).map(id=>{
F.mkdirSync(O+"/"+id,{recursive:true});
F.writeFileSync(O+"/"+id+"/solution.txt",S(F.readFileSync(I+"/"+id+"/level.txt")+""));
});
