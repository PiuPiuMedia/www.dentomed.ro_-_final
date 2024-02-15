import{l,m as u,n as m,q as p,j as a,k as n,F as g,C as d,B as h,s as r,G as y}from"./entry.JSmkQhmI.js";const f={class:"flex -space-x-2 overflow-scroll"},w={__name:"Faces",async setup(x){let e,s;const{urlFor:o}=l(),c=u`*[_type == "patientSuccess" && portraitImage == true]{
  portrait,
  name,
  slug,
} | order(orderRank asc)`,{data:_}=([e,s]=m(()=>p(c)),e=await e,s(),e);return(k,B)=>{const i=y;return a(),n("div",f,[(a(!0),n(g,null,d(r(_),t=>(a(),h(i,{key:`face-${t.name}`,class:"inline-block h-14 w-14 rounded-full ring-2 ring-white",src:r(o)(t.portrait.asset._ref).width(56).height(56).url(),alt:`${t.name} - patient portrait image`,width:"56",height:"56",loading:"lazy"},null,8,["src","alt"]))),128))])}}},v=w;export{v as _};
