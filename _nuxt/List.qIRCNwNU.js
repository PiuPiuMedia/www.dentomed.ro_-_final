import{m as h,n as x,q as y,s as l,j as a,k as m,v as e,x as _,A as f,F as k,C as S,B as q,D as v,E as B}from"./entry.JSmkQhmI.js";import{_ as b}from"./SecondaryGhostLink.vue.2cUjzNjH.js";import{_ as w}from"./ProfileSummary.vue.TFP3TsUr.js";const N={key:0,class:""},$={"aria-labelledby":"team-heading"},V={class:""},C={class:"max-w-3xl"},L={id:"team-heading",class:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl capitalize"},z=e("p",{class:"mt-3 text-xl text-gray-500 sm:mt-4"}," Our team of highly qualified and experienced professionals are here to help you with all your orthodontic needs. ",-1),A={class:"inline-block"},D={role:"list",class:"mx-auto mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16 xl:max-w-none"},E={__name:"List",props:{practiceSlug:{type:String,required:!0},teamName:{type:String,required:!1},limit:{type:Number,required:!1,default:17}},async setup(s){let t,o;const n=s,d=h`*[_type == "people" && references
  (
    *[_type == "practices" && slug.current == "${n.practiceSlug}"][0]._id
  )] | order(orderRank asc) [0...${n.limit}]`,{data:i}=([t,o]=x(()=>y(d)),t=await t,o(),t);return(F,T)=>{var r;const p=B,u=b,g=w;return(r=l(i))!=null&&r.length?(a(),m("div",N,[e("section",$,[e("div",V,[e("div",C,[_(p,{text:"Meet the team",class:"mb-4"}),e("h3",L,f(s.teamName??s.practiceSlug)+" Team ",1),z,e("div",A,[_(u,{to:"/team",text:"View all",size:"sm",class:"mt-2"})])]),e("div",null,[e("div",D,[(a(!0),m(k,null,S(l(i),c=>(a(),q(g,{key:c._id,person:c},null,8,["person"]))),128))])])])])])):v("",!0)}}},M=E;export{M as _};