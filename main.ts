import F from"node:fs";
const{MAKEFUN_INPUT_DIR:I,MAKEFUN_OUTPUT_DIR:O}=process.env;
const S=t=>{
let r=t.trim().split("\n"),w=r[0].length,E=[-w,w,-1,1],c=(a,b)=>a-b,j=r.join(""),M=e=>[...j.matchAll(e)].map(x=>x.index),G=M(/[.*+]/g),B=M(/[$*]/g),p=j.search(/[@+]/);
let H=(p/w)|0,m="",pd=-1,j2,b2,d,np,v;
for(let s=0;s<2;s++)for(let k=0;k*7+1<w;k++){
let c0=1+7*k,r0=s?H+1:H-7,a=r0*w+c0,z=(s?H+7:H-1)*w+c0+5;
const f=x=>x>=a&&x<=z&&(x-c0)%w<=5;
let b=B.filter(f);if(!b.length)continue;
let g=G.filter(f),R=B.filter(x=>!b.includes(x)),dc=-1;
for(let x=c0;x<=c0+5;x++)if(j[(s?H+1:H-1)*w+x]!="#")dc=x;
let D={[0]:[p,b,""]},u=0,y=1,V2={},fd=0;
while(u<y&&!fd){
let q=D[u++],[pp,bb,mm]=q,kk=pp+","+bb;
if(V2[kk])continue;V2[kk]=1;
if(bb==g+""){fd=q;break}
for(j2=0;j2<4;j2++){d=E[j2],np=pp+d;
if(j[np]=="#"||bb.includes(np)||R.includes(np)||Math.abs((np/w|0)-H)==1&&np%w!=dc&&np%w!=pd)continue;
D[--u]=[np,bb,mm+"udlr"[j2]];
}
for(b2=0;b2<bb.length;b2++){let b1=bb[b2];
for(j2=0;j2<4;j2++){d=E[j2];
if(pp!=b1-d)continue;v=b1+d;
if(j[v]=="#"||bb.includes(v)||R.includes(v)||(v/w|0)==H)continue;
let nx=[...bb];nx[b2]=v;nx.sort(c);
D[y++]=[b1,nx,mm+"UDLR"[j2]];
}}
}
if(!fd)return"";
m+=fd[2];p=fd[0];
b.map((x,i)=>B[B.indexOf(x)]=fd[1][i]);
B.sort(c);pd=dc;
}
return m;
};
F.readdirSync(I).map(id=>{
let o;F.mkdirSync(o=O+"/"+id,{recursive:true});
F.writeFileSync(o+"/solution.txt",S(F.readFileSync(I+"/"+id+"/level.txt")+""));
});
