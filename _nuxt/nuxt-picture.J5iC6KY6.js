import{d as h,aA as E,aB as I,c as n,aC as k,aD as w,aE as z,a as P,o as S,h as m,aF as j}from"./entry.JSmkQhmI.js";const B={...z,legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},N=h({name:"NuxtPicture",props:B,emits:["load"],setup:(s,i)=>{var v,d;const l=E(),u=I(s),g=n(()=>k(s.src)),A=n(()=>["png","webp","gif","svg"].includes(g.value)),r=n(()=>s.legacyFormat?s.legacyFormat:A.value?"png":"jpeg"),t=n(()=>{var f,p;const e=((f=s.format)==null?void 0:f.split(","))||(g.value==="svg"?["svg"]:(p=l.options.format)!=null&&p.length?[...l.options.format]:["webp"]);return e[0]==="svg"?[{src:s.src}]:(e.includes(r.value)&&e.splice(e.indexOf(r.value),1),e.push(r.value),e.map(y=>{const{srcset:F,sizes:b,src:_}=l.getSizes(s.src,{...u.options.value,sizes:s.sizes||l.options.screens,densities:s.densities,modifiers:{...u.modifiers.value,format:y}});return{src:_,type:`image/${y}`,sizes:b,srcset:F}}))}),o=n(()=>t.value.length-1);if(s.preload){const e={rel:"preload",as:"image",imagesrcset:t.value[0].srcset,nonce:s.nonce};(d=(v=t.value)==null?void 0:v[0])!=null&&d.sizes&&(e.imagesizes=t.value[0].sizes),w({link:[e]})}const c={...s.imgAttrs,"data-nuxt-pic":""};for(const e in i.attrs)e in z&&!(e in c)&&(c[e]=i.attrs[e]);const a=P(),x=j().isHydrating;return S(()=>{a.value&&(a.value.complete&&x&&!a.value.getAttribute("data-error")&&i.emit("load",new Event("load")),a.value.onload=e=>{i.emit("load",e)})}),()=>m("picture",null,[...t.value.slice(0,-1).map(e=>m("source",{type:e.type,sizes:e.sizes,srcset:e.srcset})),m("img",{ref:a,...u.attrs.value,...c,src:t.value[o.value].src,sizes:t.value[o.value].sizes,srcset:t.value[o.value].srcset})])}});export{N as _};