import F from"node:fs";
const{MAKEFUN_INPUT_DIR:I,MAKEFUN_OUTPUT_DIR:O}=process.env;
F.readdirSync(I).map(id=>{
let t=F.readFileSync(I+"/"+id+"/level.txt")+"";
let w=t.search("\n"),E=[-w,w,-1,1],c=(a,b)=>a-b,j=t.replace(/\n/g,""),M=e=>[...j.matchAll(e)].map(x=>x.index),G=M(/[.*+]/g),B=M(/[$*]/g),p=M(/[@+]/g)[0],H=p/w|0,m="",pd=-1,j2,d,np,v,pp,bb,mm,kk,nx;
for(let s=2;s--;)for(let k=0;k*7+1<w;k++){
let c0=1+7*k,a=(H-7+8*s)*w+c0,f=x=>x>=a&x-a<=6*w+5&(x-c0)%w<6,b=B.filter(f).sort(c),g=G.filter(f)+"",R=new Set(B),dc=-1;b.map(x=>R.delete(x));
if(!b[0])continue;
dc=c0;while(j[(H-1+2*s)*w+dc]=="#")dc++;
let D=[[p,b,""]],u=0,y=1,V2={};
while(u<y&bb!=g){
[pp,bb,mm]=D[u++];
if(V2[kk=pp+","+bb])continue;V2[kk]=1;
for(j2=4;j2--;){d=E[j2],np=pp+d;
if(j[np]=="#")continue;
if(bb.includes(np)){
v=np+d;
if(j[v]=="#"|bb.includes(v)|R.has(v)|(v/w|0)==H)continue;
nx=bb.map(x=>x-np?x:v).sort(c);
D[y++]=[np,nx,mm+"UDLR"[j2]];
}else{
if(R.has(np)|((np/w|0)-H)**2==1&np%w!=dc&np%w!=pd)continue;
D[--u]=[np,bb,mm+"udlr"[j2]];
}}
}
if(bb!=g)break;
m+=mm;p=pp;
b.map((x,i)=>B[B.indexOf(x)]=bb[i]),pd=dc;
}
F.mkdirSync(O+"/"+id,{recursive:!0});
F.writeFileSync(O+"/"+id+"/solution.txt",m);
});
