import{d as c,m as _,n as d,q as m,j as a,k as n,v as s,F as p,C as u,A as o,D as x,s as y}from"./entry.JSmkQhmI.js";const f={class:"stats max-w-8xl mx-auto lg:px-12"},g={class:"no-scrollbar snap-x flex overflow-x-auto w-full py-4 gap-3"},h={class:""},v={class:"text-4xl font-bold text-navy-400 tracking-tight flex items-center"},b={class:"inline"},k={key:0,class:"text-base ml-1 inline font-bold text-primary-500"},w={class:"text-xs text-navy-600 mt-1 mb-0 w-36"},A=c({__name:"StatsGrid",async setup(C){let e,r;const i=_`*[_type == "stats"]{
  title,
  number,
  unit,
} | order(orderRank asc)`,{data:l}=([e,r]=d(()=>m(i)),e=await e,r(),e);return(B,S)=>(a(),n("div",f,[s("div",g,[(a(!0),n(p,null,u(y(l),t=>(a(),n("div",{key:`stat-${t.title}`,class:"snap-start p-4 bg-gray-400/10 rounded-lg relative"},[s("div",h,[s("div",v,[s("span",b,o(t.number),1),t.unit?(a(),n("span",k,o(t.unit),1)):x("",!0)]),s("p",w,o(t.title),1)])]))),128))])]))}});export{A as _};
