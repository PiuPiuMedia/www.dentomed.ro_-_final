import{_ as L}from"./nuxt-picture.J5iC6KY6.js";import{_ as N}from"./Breadcrumb.FOmvxjyK.js";import{d as v,l as S,a as y,o as z,c as C,j as s,k as a,v as t,x as f,s as l,z as _,B as j,D as u,A as i,M as p,F as w,C as k,Q as P,E as T,I as F}from"./entry.JSmkQhmI.js";const I={class:"relative left-0 top-0 isolate w-full"},M={class:"overflow-hidden absolute w-full h-full"},V=["src","alt"],A=t("div",{class:"absolute inset-0 -z-10 bg-navy-700 opacity-60 mix-blend-multiply"},null,-1),E={class:"text-4xl font-bold tracking-tight text-white sm:text-4xl mb-4"},H={class:"mb-4 text-lg font-semibold text-gray-200"},O={key:1,class:"pricing text-gray-400 text-base mb-4"},U={class:"text-lg font-bold text-white"},D=t("span",{class:"ml-1 text-xs text-gray-400"},"Pay monthly with 0% finance",-1),G={key:2,class:"text-xs md:text-sm text-gray-400 mb-6 max-w-lg"},Q={key:3,class:"flex items-center gap-x-6 mb-8"},W={class:"border-t border-navy-300/30"},J={class:"flex flex-wrap gap-8 lg:gap-12 pt-6"},K={class:"text-xs font-semibold text-gray-400 mb-1"},R={class:"text-sm text-gray-200"},b="min-h-72",rt=v({__name:"Image",props:{image:{type:Object,required:!0},alt:{type:String,required:!1},headline:{type:String,required:!0},subtitle:{type:String,required:!0},headlinePrice:{type:Number,required:!1},details:{type:Array,required:!1},showBreadcrumb:{type:Boolean,default:!0,required:!1}},setup(e){const n=e,{urlFor:r}=S(),m=y(!1),g=y(!1),h=y(!1);z(()=>{if(document){const c=document.getElementsByClassName("hq")[0];c&&c.complete&&(g.value=!0)}setTimeout(()=>{h.value=!0},200)});const o=C(()=>n.headline.toLowerCase().includes("nhs"));return(c,x)=>{const $=L,q=N,B=P;return s(),a("section",{role:"banner",class:_(["hero left-0 top-0 w-full",b])},[t("div",I,[f($,{src:l(r)(e.image.asset._ref).width(2100).height(600).format("webp").url(),alt:e.alt??`${e.headline} image`,width:2100,height:600,"img-attrs":{class:"hq absolute inset-0 -z-10 h-full w-full min-w-full object-cover object-center"},sizes:"xs:100vw, sm:100vw, md:100vw, lg:100vw, xl:100vw, 2xl:100vw",quality:"95",format:"avif,webp,png","legacy-format":"png",onLoad:x[0]||(x[0]=d=>m.value=!0),onOnload:x[1]||(x[1]=d=>m.value=!0)},null,8,["src","alt"]),t("div",M,[t("img",{src:l(r)(e.image.asset._ref).width(42).height(12).quality(50).format("webp").url(),alt:e.alt??`${e.headline} image, low quality placeholder`,width:42,height:12,class:_(["lqip absolute inset-0 h-full w-full min-w-full object-cover object-center blur-lg transition-opacity duration-400 ease-in-out",l(m)||l(g)?"opacity-0":"opacity-100"]),preload:"",loading:"eager"},null,10,V)]),A,t("div",{class:_(["max-w-8xl relative z-20 mx-auto pb-12 pt-12 lg:pb-0 lg:pt-24 px-4 lg:px-12",b])},[t("div",{class:_(["bg-[#353d50] bg-opacity-80 lg:bg-opacity-100 relative z-20 max-w-2xl p-6 md:p-12 text-left transition duration-200 ease-in-out",l(h)?"translate-y-0 lg:translate-y-16 opacity-100":"translate-y-48 opacity-0"])},[e.showBreadcrumb?(s(),j(q,{key:0,class:"mb-6"})):u("",!0),t("h1",E,i(e.headline),1),t("h2",H,i(e.subtitle),1),e.headlinePrice?(s(),a("div",O,[p(" From: "),t("span",U,"£"+i(e.headlinePrice.toLocaleString()),1),p(),D])):u("",!0),l(o)?u("",!0):(s(),a("div",G," The easiest way to get started is to book a free video consultation at a time that suits you. ")),l(o)?u("",!0):(s(),a("div",Q,[f(B,{text:"Get Started",to:"/free-video-consultation",size:"3xl"})])),t("div",W,[t("div",J,[(s(!0),a(w,null,k(e.details,d=>(s(),a("div",{key:d.title,class:"grow"},[t("div",K,i(d.title)+": ",1),t("div",R,i(d.description),1)]))),128))])])],2)])])])}}}),X={class:"text-gray-200 max-w-6xl"},Y={class:""},Z={class:"mx-auto lg:mx-0"},tt={class:""},et={class:"mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 text-base md:text-lg leading-5 lg:leading-7 lg:max-w-none"},st={class:"inline font-bold"},at={key:0,class:"text-xs md:text-sm opacity-80 mt-1"},lt=["innerHTML"],ct=v({__name:"Checklist",props:{features:{type:Array,required:!0},treatmentName:{type:String,required:!0}},setup(e){function n(r){return r.split(":")}return(r,m)=>{const g=T,h=F;return s(),a("div",X,[t("div",Y,[t("div",Z,[t("div",tt,[f(g,{dark:"",text:`${e.treatmentName} at Windmill Orthodontics`,class:"mb-4"},null,8,["text"])]),t("dl",et,[(s(!0),a(w,null,k(e.features,(o,c)=>(s(),a("div",{key:`feature-${c}`,class:"relative pl-8 lg:pl-12"},[t("dt",st,[f(h,{name:"mdi:check",class:"absolute left-1 top-1 w-5 h-5 lg:h-8 lg:w-8 text-primary-300","aria-hidden":"true"}),p(" "+i(n(o)[0]),1)]),p(" "+i(" ")+" "),n(o)[1]?(s(),a("dd",at,[t("span",{innerHTML:n(o)[1]},null,8,lt)])):u("",!0)]))),128))])])])])}}});export{rt as _,ct as a};
