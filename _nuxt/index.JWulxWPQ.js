import{d as q,l as M,K as W,m as j,n as G,L as Q,c as u,j as a,k as i,s as t,x as n,B as d,D as l,v as o,A as H,F as K,q as J,O as X,E as Y,Q as Z,G as tt,R as _,S as c,U as et,V as st,P as b,_ as ot}from"./entry.JSmkQhmI.js";import{_ as nt,a as at}from"./Checklist.vue.m_1IRqAS.js";import{_ as it}from"./SanityContentWrapper.vue.g3bpwIlS.js";import{_ as lt}from"./SecondaryGhostLink.vue.2cUjzNjH.js";import{_ as _t}from"./Faces.GdNkkdTH.js";import{_ as ct}from"./List.qIRCNwNU.js";import"./nuxt-picture.J5iC6KY6.js";import"./Breadcrumb.FOmvxjyK.js";import"./ProfileSummary.vue.TFP3TsUr.js";import"./useTruncate.NGpuD3oE.js";const rt=_(()=>c(()=>import("./Logo.UaB28luy.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(s=>s.default||s)),mt=_(()=>c(()=>import("./KeyPoints.of6rue0_.js"),__vite__mapDeps([3,1,2,4]),import.meta.url).then(s=>s.default||s)),dt=_(()=>c(()=>import("./Accordion.5YaXmaiS.js"),__vite__mapDeps([5,1,2,6,7,8,9,10,4]),import.meta.url).then(s=>s.default||s)),ut=_(()=>c(()=>import("./IconList.1pZII00q.js"),__vite__mapDeps([11,12,4,1,2,13]),import.meta.url).then(s=>s.default||s)),pt=_(()=>c(()=>import("./PopUp.V2QbARyF.js"),__vite__mapDeps([14,1,2,7,8,15,16,9,17,18]),import.meta.url).then(s=>s.default||s)),gt=_(()=>c(()=>import("./invisalignMenu.8iCEUZi8.js"),__vite__mapDeps([19,1,2,20]),import.meta.url).then(s=>s.default||s)),ht=b("FeaturesLogoWall"),xt=b("CtaMain"),p=s=>(et("data-v-1918965b"),s=s(),st(),s),yt={key:0,role:"main"},ft={class:"mx-auto my-12 max-w-8xl px-4 lg:px-12 pt-0 lg:py-20"},vt={class:"key-points"},bt={key:0,class:""},kt={class:"bg-navy-700/90 pt-24 text-gray-200 mb-24"},wt={class:"ml-half-8xl"},Lt={class:""},It={class:"grid grid-cols-1 gap-x-10 mb-16 lg:grid-cols-2"},Pt={class:"w-full px-4 lg:px-12"},St={class:"max-w-2xl lg:max-w-xl"},zt={class:"mt-2 text-3xl font-bold tracking-tight sm:text-3xl"},Et={class:"body mb-4 text-sm opacity-80"},At={key:0,class:"inline-block"},Ct={class:"flex items-center justify-self-end w-full max-w-2xl"},$t={class:"relative rounded-l-2xl overflow-hidden w-full ml-4 lg:ml-12"},Ft=p(()=>o("div",{class:"absolute inset-0 bg-gradient-to-br from-navy-300 to-transparent mix-blend-multiply opacity-50"},null,-1)),Tt={class:"mb-24 px-4 lg:px-12"},Vt={key:0,class:"bg-white rounded-tl-2xl p-8 pr-0 no-scrollbar lg:p-24 ml-12 lg:ml-12 text-gray-800"},Rt={class:"mb-8 max-w-2xl pr-8"},Bt=p(()=>o("h2",{class:"highlight text-4xl font-bold tracking-tight text-gray-900"}," Success Stories ",-1)),Dt=p(()=>o("p",{class:"mt-4 leading-7 text-gray-500"}," We're proud of the work we do and the smiles we create. ",-1)),Ot={class:"inline-block"},Nt={key:1,class:"h-1 w-full"},Ut={key:1,class:"mt-28 bg-gradient-to-b from-gray-50 to-transparent"},qt={class:"mx-auto my-12 max-w-8xl px-4 lg:px-12"},Mt=q({__name:"index",async setup(s){let r,g;const{urlFor:h}=M(),k=W().params.slug,w=j`*[_type == "treatments" && slug.current == "${k}"][0]`,{data:e,error:x}=([r,g]=G(()=>J(w)),r=await r,g(),r);if(x.value)throw console.error(x),Q({statusCode:404,statusMessage:"Page Not Found"});const m=u(()=>e.value.title.toLowerCase().includes("nhs")),L=u(()=>e.value.title.toLowerCase().includes("invisalign"));return u(()=>String(e.value.headlinePrice)),(jt,Gt)=>{var f,v;const I=X,P=nt,S=rt,z=mt,y=Y,E=it,A=Z,C=tt,$=at,F=lt,T=_t,V=ct,R=dt,B=ut,D=pt,O=gt,N=ht,U=xt;return a(),i(K,null,[t(e)?(a(),i("main",yt,[n(I,{title:t(e).title,description:t(e).subtitle,"image-url":(v=(f=t(e).heroImage)==null?void 0:f.asset)!=null&&v._ref?t(h)(t(e).heroImage.asset._ref).width(800).height(600).url():""},null,8,["title","description","image-url"]),t(e).heroImage&&t(e).title?(a(),d(P,{key:0,image:t(e).heroImage,alt:t(e).heroImageAlt,headline:t(e).title,subtitle:t(e).subtitle,"headline-price":t(e).headlinePrice,details:t(e).details},null,8,["image","alt","headline","subtitle","headline-price","details"])):l("",!0),o("div",ft,[o("div",vt,[t(e).logo?(a(),i("div",bt,[n(S,{logo:t(e).logo,alt:`${t(e).title} logo`},null,8,["logo","alt"])])):l("",!0),n(z,{"section-title":t(e).keyPointsSection,title:t(e).keyPointsTitle,subtitle:t(e).keyPointsSubtitle,keyPoints:t(e).keyPoints,gallery:t(e).gallery,class:"py-8"},null,8,["section-title","title","subtitle","keyPoints","gallery"])])]),o("div",kt,[o("div",wt,[o("div",Lt,[o("div",It,[o("div",Pt,[o("div",St,[n(y,{text:`${t(e).title} guide`,class:"mb-4",dark:""},null,8,["text"]),o("h2",zt,H(t(e).subtitle),1),o("div",Et,[n(E,{blocks:t(e).description},null,8,["blocks"]),t(m)?l("",!0):(a(),i("div",At,[n(A,{text:"Get started",to:"/free-video-consultation",class:"mt-3 mb-5",size:"sm"})]))])])]),o("div",Ct,[o("div",$t,[n(C,{src:t(h)(t(e).explainerImage).width(930).height(683).url(),alt:t(e).explainerImageAlt??`${t(e).title} explainer image`,class:"object-cover shadow-xl w-full h-auto",width:"930",height:"683"},null,8,["src","alt"]),Ft])])]),o("div",Tt,[n($,{features:t(e).whatsIncluded,"treatment-name":t(e).title},null,8,["features","treatment-name"])])]),t(m)?(a(),i("div",Nt)):(a(),i("div",Vt,[o("div",Rt,[n(y,{text:"Patient Success",class:"mb-4"}),Bt,Dt,o("div",Ot,[n(F,{to:"/patient-success",text:"Patient Stories",size:"sm",class:"mt-2"})])]),n(T,{class:""}),n(V,{"practice-slug":"newcastle","team-name":t(e).title,limit:2,class:"mt-24 pr-8"},null,8,["team-name"])]))])]),n(R,{title:`${t(e).title} FAQ`,items:t(e).faq,image:t(e).image,alt:t(e).alt},null,8,["title","items","image","alt"]),t(m)?(a(),i("div",Ut,[n(B,{slug:"childrens-orthodontics"}),n(D)])):l("",!0),o("div",qt,[t(L)?(a(),d(O,{key:0,class:"my-20"})):(a(),d(N,{key:1}))])])):l("",!0),t(m)?l("",!0):(a(),d(U,{key:1}))],64)}}}),oe=ot(Mt,[["__scopeId","data-v-1918965b"]]);export{oe as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Logo.UaB28luy.js","./entry.JSmkQhmI.js","./entry.T71u3_uo.css","./KeyPoints.of6rue0_.js","./nuxt-picture.J5iC6KY6.js","./Accordion.5YaXmaiS.js","./Button.yw9LWidk.js","./tw-merge.PUKor_T7.js","./select.y9GlhWqW.js","./keyboard.-LXsuZ4f.js","./use-resolve-button-type.YhiMAV9N.js","./IconList.1pZII00q.js","./IconList.vue.uUu-mn_J.js","./SecondaryGhostLink.vue.2cUjzNjH.js","./PopUp.V2QbARyF.js","./Modal.i4sh6pHx.js","./dialog.NHRCTCSv.js","./hidden.nMxhsxTR.js","./use-outside-click.-ERayOpG.js","./invisalignMenu.8iCEUZi8.js","./useTruncate.NGpuD3oE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}