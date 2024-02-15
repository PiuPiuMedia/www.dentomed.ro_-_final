import{d as b,l as k,j as t,k as s,v as d,B as a,y as m,s as v,D as o,A as n,M as _,G as w,J as j}from"./entry.JSmkQhmI.js";import{u as B}from"./useTruncate.NGpuD3oE.js";const p={role:"list-item",class:"flex flex-col gap-6 lg:flex-row"},C={class:"relative w-36 h-44 flex-none rounded-2xl overflow-hidden"},S={key:1,class:"bg-gray-100 h-full w-full"},T={class:"flex-auto"},$={key:0,class:"text-lg font-bold tracking-tight text-gray-800 mb-0"},q={key:1},D={key:1,class:"text-xs text-gray-400 mb-4"},N={key:2,class:"text-md text-gray-600 mb-0"},V={key:3,class:"text-xs text-gray-400 mb-4"},F={key:4,class:"text-sm text-gray-500 leading-6"},E=b({__name:"ProfileSummary",props:{person:{type:Object,required:!0}},setup(e){const{urlFor:g}=k(),{extractTextFromSanityBlocks:x,truncate:y}=B(),h=r=>{const c=x(r);return y(c,200)};return(r,c)=>{const f=w,l=j;return t(),s("div",p,[d("div",C,[e.person.slug?(t(),a(l,{key:0,to:`/team/${e.person.slug.current}`,class:""},{default:m(()=>{var i,u;return[(u=(i=e.person.image)==null?void 0:i.asset)!=null&&u._ref?(t(),a(f,{key:0,class:"grayscale object-cover object-center brightness-90 hover:opacity-90 bg-gradient-to-b from-gray-300 to-gray-100",src:v(g)(e.person.image.asset._ref).width(208).height(260).url(),alt:`${e.person.name} headshot, ${e.person.role}`,width:"208",height:"260"},null,8,["src","alt"])):(t(),s("div",S))]}),_:1},8,["to"])):o("",!0)]),d("div",T,[e.person.name?(t(),s("h3",$,[e.person.slug?(t(),a(l,{key:0,to:`/team/${e.person.slug.current}`,class:"hover:opacity-80"},{default:m(()=>[_(n(e.person.name),1)]),_:1},8,["to"])):(t(),s("span",q,n(e.person.name),1))])):o("",!0),e.person.gdc?(t(),s("p",D," GDC number: "+n(e.person.gdc),1)):o("",!0),e.person.job?(t(),s("p",N,n(e.person.job),1)):o("",!0),e.person.qualifications?(t(),s("p",V,n(e.person.qualifications),1)):o("",!0),e.person.body?(t(),s("div",F,n(h(e.person.body)),1)):o("",!0)])])}}});export{E as _};
