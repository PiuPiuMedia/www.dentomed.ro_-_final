import{_ as b}from"./Simple.vue.mSsK85Wp.js";import{d as f,K as g,m as x,n as h,L as k,j as o,k as c,s as e,B,D as i,x as a,v as l,A as S,F as $,q as C,O as v}from"./entry.JSmkQhmI.js";import{_ as w}from"./Breadcrumb.FOmvxjyK.js";import{_ as N}from"./SanityContentWrapper.vue.g3bpwIlS.js";const q={key:1,role:"main",class:"mx-auto mt-12 mb-36 max-w-4xl px-4 text-gray-600 relative"},F={class:"text-gray-800 text-4xl"},V={class:"body mb-4"},L=f({__name:"[slug]",async setup(A){let s,n;const _=g().params.slug,m=x`*[_type == "policies" && slug.current == "${_}"][0]`,{data:t,error:r}=([s,n]=h(()=>C(m)),s=await s,n(),s);if(r.value)throw console.error(r),k({statusCode:404,statusMessage:"Page Not Found"});return(E,H)=>{const u=b,p=v,d=w,y=N;return o(),c($,null,[e(t)?(o(),B(u,{key:0,title:e(t).title,subtitle:e(t).subtitle,badge:"Policies & Statements"},null,8,["title","subtitle"])):i("",!0),e(t)?(o(),c("main",q,[a(p,{title:e(t).title,description:`Orthodontic treatment patient success story for ${e(t).title}. ${e(t).subtitle}`},null,8,["title","description"]),a(d,{light:"",class:"mb-4"}),l("h1",F,S(e(t).title),1),l("div",V,[a(y,{blocks:e(t).body},null,8,["blocks"])])])):i("",!0)],64)}}});export{L as default};