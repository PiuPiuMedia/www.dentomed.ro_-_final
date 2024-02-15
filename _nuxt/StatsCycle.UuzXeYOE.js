import{d,m as p,n as v,q as g,a as x,o as h,s as t,j as n,k as r,v as i,F as f,C as k,x as w,y as b,A as u,D as l,z as C,aw as S}from"./entry.JSmkQhmI.js";const B={key:0,class:"stats max-w-md relative"},N={class:"h-full relative"},V={class:"text-center max-w-sm w-full mx-auto"},q={class:"text-2xl lg:text-5xl font-bold text-gray-800 tracking-tight"},z={key:0,class:"inline"},A={key:0,class:"text-sm lg:text-base text-gray-500 lg:mt-2 mb-0"},j=d({__name:"StatsCycle",async setup(D){let o,c;const y=p`*[_type == "stats"]{
  title,
  number,
  unit,
  slug,
} | order(orderRank asc)`,{data:e}=([o,c]=v(()=>g(y)),o=await o,c(),o),s=x(-1);return h(()=>{s.value=0,setInterval(()=>{s.value=s.value+1,s.value>e.value.length-1&&(s.value=0)},3e3)}),(F,Q)=>t(e).length?(n(),r("div",B,[i("div",N,[(n(!0),r(f,null,k(t(e),(_,a)=>(n(),r("div",{key:`stat-${a}`,class:"absolute inset-0"},[w(t(S),{id:`transition-stat-${_.slug.current}`,appear:"",show:t(s)===a,as:"div",enter:"transform duration-[500ms] transition ease-in-out","enter-from":"opacity-0 translate-y-16","enter-to":"opacity-100",leave:"transform duration-[500ms] transition ease-in-out","leave-from":"opacity-100","leave-to":"opacity-0 -translate-y-16",class:"bg-gradient-to-tr from-navy-100/50 to-navy-100/10 rounded-3xl px-16 py-8"},{default:b(()=>{var m;return[i("div",V,[i("div",q,[t(e)[a].number?(n(),r("span",z,u(t(e)[a].number),1)):l("",!0),t(e)[a].unit?(n(),r("span",{key:1,class:C(["ml-1 inline text-primary-400",((m=t(e)[a].unit)==null?void 0:m.length)===1?"text-2xl lg:text-5xl":"text-base lg:text-xl"])},u(t(e)[a].unit),3)):l("",!0)]),t(e)[a].title?(n(),r("p",A,u(t(e)[a].title),1)):l("",!0)])]}),_:2},1032,["id","show"])]))),128))])])):l("",!0)}});export{j as default};
