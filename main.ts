import F from"node:fs";
const{MAKEFUN_INPUT_DIR:I,MAKEFUN_OUTPUT_DIR:O}=process.env;
let Y;
const S=t=>{
let r=t.trim().split("\n"),w=r[0].length,n=w*r.length,E=[-w,w,-1,1],A=Array(n).fill(1),G=[],B=[],p=-1,c=(a,b)=>a-b,j=r.join("");
for(let i=0;i<n;i++){let h=j[i];h!="#"&&(A[i]=0,".*+".includes(h)&&G.push(i),"$*".includes(h)&&B.push(i),"@+".includes(h)&&(p=i))}
B.sort(c);
let H=(p/w)|0,o=[],m="",Z=A.map((a,i)=>a|(i/w|0)==H);
const V=(f,b)=>{let v=Array(n).fill(-1),q=[f];v[f]=f;Y=f;for(let k=0;k<q.length;k++)for(let d of E){let x=q[k]+d;if(b[x]|o[x]|v[x]+1)continue;v[x]=q[k];if(x<Y)Y=x;q.push(x)}return v};
const W=(f,t,b)=>{let v=V(f,b),s="";if(v[t]<0)return null;for(let x=t;x!=f;x=v[x])s="udlr"[E.indexOf(x-v[x])]+s;return s};
const U=(a,v)=>a.map(x=>o[x]=v);
for(;;){
let bi=B.find(x=>!G.includes(x));if(bi==null)break;
let v=V(bi,Z),b=B.filter(x=>~v[x]),g=G.filter(x=>~v[x]);
let e=-1,k=v.map(x=>x<0);
for(let x=H*w;x<H*w+w;x++)if(!A[x])for(let d of E)if(v[x+d]>=0)e=x;
if(e<0)return"";
k[e]=0;
U(B,1);let wk=W(p,e,A);U(B,0);m+=wk;
if(b==g+""){p=e;continue}
let SB=[[b,e,""]],K=new Set();
let fd=-1;
for(let hd=0;fd<0&&hd<SB.length;hd++){
let[bs,ps,ms]=SB[hd];
U(bs,1);let v2=V(ps,k);
for(let b2=0;b2<bs.length&&fd<0;b2++){let bb=bs[b2];
for(let j2=0;j2<4;j2++){let d=E[j2],t=bb+d;
if(v2[bb-d]<0|k[t]|o[t])continue;
o[bb]=0;o[t]=1;
let nx=bs.slice();nx[b2]=t;nx.sort(c);
V(bb,k);let y2=Y+","+nx;
o[t]=0;o[bb]=1;
if(K.has(y2))continue;
let w2=W(ps,bb-d,k);
if(w2==null)continue;
K.add(y2);SB.push([nx,bb,ms+w2+"UDLR"[j2]]);
if(nx==g+""){fd=SB.length-1;break}
}}
U(bs,0);
}
if(fd<0)return"";
m+=SB[fd][2];p=SB[fd][1];
for(let i in b)B[B.indexOf(b[i])]=SB[fd][0][i];
B.sort(c);
}
return m;
};
F.readdirSync(I).map(id=>{
let o;F.mkdirSync(o=O+"/"+id,{recursive:true});
F.writeFileSync(o+"/solution.txt",S(F.readFileSync(I+"/"+id+"/level.txt","utf8")));
});
