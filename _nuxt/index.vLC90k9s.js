import{d as N,m as d,n as y,L as $,s as e,j as a,k as n,x as o,v as r,D as c,F as V,C as W,q as x,O as q,W as A,y as B,M as E,A as g,P as D,J as H}from"./entry.JSmkQhmI.js";import{_ as M}from"./Simple.vue.mSsK85Wp.js";import{_ as P}from"./SanityContentWrapper.vue.g3bpwIlS.js";const Q=D("FeaturesLogoWall"),j={key:0,role:"main"},z={class:"pt-16"},J={class:"mx-auto max-w-8xl px-4 lg:px-12 mb-24"},O={key:0,class:"body mb-4"},R={key:1,class:"space-y-6"},T={class:"mx-auto my-12 max-w-8xl px-4 lg:px-12"},Y=N({__name:"index",async setup(G){let s,i;const f=d`*[_type == "overview" && slug.current == "policies"][0]`,{data:t,error:_}=([s,i]=y(()=>x(f)),s=await s,i(),s),h=d`*[_type == "policies"] | order(orderRank)`,{data:u,error:b}=([s,i]=y(()=>x(h)),s=await s,i(),s);if(_.value||b.value)throw console.error(_),$({statusCode:404,statusMessage:"Page Not Found"});return(v,I)=>{var p,m;const k=q,w=M,C=P,F=H,S=Q,L=A;return e(t)?(a(),n("main",j,[o(k,{title:e(t).title,description:e(t).subtitle,"image-url":(m=(p=e(t).image)==null?void 0:p.asset)!=null&&m._ref?v.urlFor(e(t).image.asset._ref).width(800).height(600).url():""},null,8,["title","description","image-url"]),o(w,{title:e(t).title,subtitle:e(t).subtitle},null,8,["title","subtitle"]),r("div",z,[r("div",J,[e(t).body?(a(),n("div",O,[o(C,{blocks:e(t).body},null,8,["blocks"])])):c("",!0),e(u)?(a(),n("div",R,[(a(!0),n(V,null,W(e(u),l=>(a(),n("div",{key:l.slug.current,class:"border p-4 rounded"},[r("h3",null,[o(F,{to:`/policies/${l.slug.current}`,class:""},{default:B(()=>[E(g(l.title),1)]),_:2},1032,["to"])]),r("p",null,g(l.subtitle),1)]))),128))])):c("",!0)])]),r("div",T,[o(S)]),o(L)])):c("",!0)}}});export{Y as default};
