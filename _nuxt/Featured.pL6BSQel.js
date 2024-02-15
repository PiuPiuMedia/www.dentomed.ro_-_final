import{_ as g,a as f}from"./CardRow.vue.jPhR8u2_.js";import{d as h,m as v,n as y,q as x,L as k,a as C,c as F,j as a,k as r,v as e,x as l,s as i,F as R,C as b}from"./entry.JSmkQhmI.js";const w={class:"featured mb-16"},A=e("h3",{class:"text-2xl font-bold tracking-tight text-gray-600 mb-0"}," Featured Articles ",-1),q={class:"grid lg:grid-cols-12 lg:gap-16 xl:gap-28"},B={class:"relative lg:col-span-5"},E={class:"sticky top-0 pt-8"},N={class:""},j={class:"lg:col-span-7 pt-8"},P=h({__name:"Featured",async setup(L){let t,o;const _=v`*[_type == "articles" && type == "Resource"] {
      ...,
      author->{
        name,
        slug,
        qualifications,
        job,
        image,
      }
    } | order(orderRank)`,{data:s,error:c}=([t,o]=y(()=>x(_)),t=await t,o(),t);if(c.value)throw console.error(c.value),k({statusCode:404,statusMessage:"Page Not Found"});const d=C(s.value[0]),u=F(()=>s.value?s.value.slice(1):[]);return(Q,V)=>{const p=g,m=f;return a(),r("div",w,[A,e("div",q,[e("div",B,[e("div",E,[e("div",N,[l(p,{article:i(d)},null,8,["article"])])])]),e("div",j,[(a(!0),r(R,null,b(i(u),n=>(a(),r("div",{key:n.slug.current},[l(m,{article:n},null,8,["article"])]))),128))])])])}}});export{P as default};
