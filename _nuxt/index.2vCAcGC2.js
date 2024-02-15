import{d as O,l as P,m as $,n as C,L as Q,s as e,j as a,k as l,x as n,v as s,D as i,F as T,C as U,q as S,O as G,E as I,W as J,B,y as K,A as u,P as R,G as X,J as Y}from"./entry.JSmkQhmI.js";import{_ as Z}from"./CardsSingle.vue.Behcyph-.js";import{_ as tt}from"./SanityContentWrapper.vue.g3bpwIlS.js";import{_ as et}from"./TextLink.vue.MOljMdj-.js";import{_ as st}from"./Syndicated.vue.VRSSz9Sq.js";import"./invisalign.poster.GOTNBpUd.js";const ot=R("FeaturesLogoWall"),at={key:0,role:"main",class:""},nt={key:0,class:"pt-16"},rt={class:"mx-auto max-w-8xl px-4 lg:px-12"},lt={key:0,class:"body mb-4"},it={key:1,class:"mb-16"},ct={class:"md:grid md:grid-cols-2 md:gap-4 lg:gap-8"},_t={class:"card flex flex-col justify-between overflow-hidden rounded-lg border border-navy-300/30 group-hover:border-navy-400/70"},ut={class:"relative"},dt=s("div",{class:"absolute inset-0 w-full h-full bg-gradient-to-t from-navy-900 to-navy-600 mix-blend-multiply opacity-50 md:group-hover:opacity-80 transition-opacity duration-500 ease-in-out"},null,-1),mt={class:"absolute inset-0 h-full w-full transition duration-500 ease-in-out"},pt=s("span",{class:"absolute inset-0 z-10","aria-hidden":"true"},null,-1),ht={class:"sr-only"},gt={class:"treatment flex flex-col justify-center items-center w-full h-full pt-8 pb-8 px-4 lg:px-12 translate-y-0 transition duration-500 ease-in-out lg:group-hover:-translate-y-8"},yt={key:1,class:"text-white text-center my-2 text-2xl tracking-tight font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"},xt={class:"my-4"},ft={class:"text-xl font-bold text-gray-700 mb-2"},bt={class:"text-sm text-gray-500 mb-3"},vt={class:"mx-auto my-12 max-w-8xl px-4 lg:px-12"},Ft=O({__name:"index",async setup(wt){let r,c;const{urlFor:d,dims:p}=P(),L=$`*[_type == "overview" && slug.current == "treatments"][0]`,{data:o,error:h}=([r,c]=C(()=>S(L)),r=await r,c(),r),F=$`*[_type == "treatments"] | order(orderRank)`,{data:m,error:j}=([r,c]=C(()=>S(F)),r=await r,c(),r);if(h.value||j.value)throw console.error(h),Q({statusCode:404,statusMessage:"Page Not Found"});const q=(_,g)=>_?Math.ceil(p(_).width/p(_).height*g):0;return(_,g)=>{var x,f;const W=G,E=Z,M=tt,N=I,y=X,z=Y,A=et,V=ot,D=J,H=st;return e(o)?(a(),l("main",at,[n(W,{title:e(o).title,description:e(o).subtitle,"image-url":(f=(x=e(o).image)==null?void 0:x.asset)!=null&&f._ref?e(d)(e(o).image.asset._ref).width(800).height(600).url():""},null,8,["title","description","image-url"]),n(E,{title:e(o).title,subtitle:e(o).subtitle,buttons:[],image:e(o).image,alt:e(o).title,class:""},null,8,["title","subtitle","image","alt"]),e(m)?(a(),l("div",nt,[s("div",rt,[e(o).body?(a(),l("div",lt,[n(M,{blocks:e(o).body},null,8,["blocks"])])):i("",!0),e(m)?(a(),l("div",it,[n(N,{text:"Orthodontic Treatments at Windmill",class:"mb-8"}),s("div",ct,[(a(!0),l(T,null,U(e(m),t=>{var b,v,w,k;return a(),l("div",{key:t.title,class:"group w-full relative inline-block md:block mb-12"},[s("div",_t,[s("div",ut,[(v=(b=t==null?void 0:t.image)==null?void 0:b.asset)!=null&&v._ref?(a(),B(y,{key:0,class:"h-auto w-full object-cover",src:e(d)(t.image.asset._ref).width(480).height(360).url(),quality:"80",width:"480",height:"360",sizes:"sm:320px, lg:480px",alt:`${t.title} background`},null,8,["src","alt"])):i("",!0),dt,s("div",mt,[n(z,{to:`/treatments/${t.slug.current}`,class:"block font-bold text-base text-gray-700"},{default:K(()=>[pt,s("span",ht,u(t.title),1)]),_:2},1032,["to"]),s("div",gt,[(k=(w=t==null?void 0:t.logo)==null?void 0:w.asset)!=null&&k._ref&&t.showLogo?(a(),B(y,{key:0,class:"my-2 invert brightness-0 object-contain max-h-14",src:e(d)(t.logo.asset._ref).height(66).url(),quality:"80",alt:`${t.title} logo`,height:"66",width:q(t.logo.asset._ref,66)},null,8,["src","alt","width"])):(a(),l("div",yt,u(t.title),1))])])])]),s("div",xt,[s("h3",ft,u(t.title),1),s("p",bt,u(t.subtitle),1),n(A,{to:`/treatments/${t.slug.current}`,class:"mt-3",text:t.title.length<40?`More about ${t.title}`:"More about this treatment"},null,8,["to","text"])])])}),128))])])):i("",!0)])])):i("",!0),s("div",vt,[n(V)]),n(D),n(H)])):i("",!0)}}});export{Ft as default};
