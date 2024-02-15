import{d as p,l as S,j as r,k as l,B as j,y as x,x as c,s as e,D as u,v as a,M as q,A as v,G as W,J as G,I as J,a as m,F as B,C as V,m as F,n as N,L as z,q as P,O as K,W as U}from"./entry.JSmkQhmI.js";import{_ as X}from"./CardsSingle.vue.Behcyph-.js";import{_ as Y}from"./ProfileAuthor.vue.NpRMRk_G.js";import{_ as Z}from"./SanityContentWrapper.vue.g3bpwIlS.js";import{_ as E,a as tt}from"./CardRow.vue.jPhR8u2_.js";import"./invisalign.poster.GOTNBpUd.js";const et={class:"grid lg:grid-cols-2 gap-x-16 gap-y-4 items-center pb-16 mb-12 border-b border-navy-300/30"},st={key:0,class:"w-full aspect-[16/9] rounded-3xl overflow-hidden"},at={key:1,class:"bg-gray-100 h-full w-full"},rt={class:"max-w-lg"},ot={key:0,class:"text-2xl font-bold tracking-tight text-gray-600 mb-3"},ct={key:1,class:"text-gray-500 mb-0 text-sm"},lt={class:"author"},it={class:""},nt=p({__name:"Promoted",props:{article:{type:Object,required:!0}},setup(t){const{urlFor:o}=S();return(n,h)=>{const f=W,s=G,d=Y,g=J;return r(),l("div",et,[t.article.slug?(r(),j(s,{key:0,to:`/resources/${t.article.slug.current}`},{default:x(()=>{var i,b;return[(b=(i=t.article.image)==null?void 0:i.asset)!=null&&b._ref?(r(),l("div",st,[c(f,{class:"w-full object-cover object-center contrast-75 brightness-90 hover:opacity-90",src:e(o)(t.article.image.asset._ref).width(400).height(225).url(),alt:t.article.alt,width:"400",height:"225"},null,8,["src","alt"])])):(r(),l("div",at))]}),_:1},8,["to"])):u("",!0),a("div",null,[a("div",rt,[t.article.title?(r(),l("h3",ot,[t.article.slug?(r(),j(s,{key:0,to:`/resources/${t.article.slug.current}`,class:"hover:opacity-80"},{default:x(()=>[q(v(t.article.title),1)]),_:1},8,["to"])):u("",!0)])):u("",!0),t.article.subtitle?(r(),l("p",ct,v(t.article.subtitle),1)):u("",!0)]),a("div",lt,[c(d,{name:t.article.author.name,slug:t.article.author.slug,qualifications:t.article.author.qualifications,job:t.article.author.job,image:t.article.author.image,class:"mb-2"},null,8,["name","slug","qualifications","job","image"])]),a("div",it,[c(s,{to:`/resources/${t.article.slug.current}`,class:"group flex items-center text-sm text-navy-400 group-hover:text-navy-300"},{default:x(()=>[q(" Read article "),c(g,{name:"mdi:arrow-right",class:"inline-block w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-200 ease-in-out"})]),_:1},8,["to"])])])])}}}),ut={class:"featured mb-16"},dt=a("h3",{class:"text-2xl font-bold tracking-tight text-gray-600 mb-0"}," Featured Articles ",-1),_t={class:"grid lg:grid-cols-12 lg:gap-16 xl:gap-28"},mt={class:"relative lg:col-span-5"},gt={class:"sticky top-0 pt-8"},ht={class:""},ft={class:"lg:col-span-7 pt-8"},bt=p({__name:"NotFeatured",props:{articles:{}},setup(t){const o=t,n=m(o.articles[0]),h=m(o.articles.slice(1));return(f,s)=>{const d=E,g=tt;return r(),l("div",ut,[dt,a("div",_t,[a("div",mt,[a("div",gt,[a("div",ht,[c(d,{article:e(n)},null,8,["article"])])])]),a("div",ft,[(r(!0),l(B,null,V(e(h),i=>(r(),l("div",{key:i.slug.current},[c(g,{article:i},null,8,["article"])]))),128))])])])}}}),xt={key:0,role:"main",class:""},vt={key:0,class:"pt-16"},pt={class:"mx-auto max-w-8xl px-4 lg:px-12"},yt={class:""},$t={class:"mx-auto max-w-8xl px-4 lg:px-12"},kt={class:"mb-8"},wt={class:"text-2xl font-bold tracking-tight text-gray-600 mb-4"},Ct={key:0,class:"body mb-4"},At={class:"grid lg:grid-cols-3 lg:gap-16 xl:gap-20 pb-12 mb-8 border-b border-navy-300/30"},St=p({__name:"index",async setup(t){let o,n;const{urlFor:h}=S(),f=F`*[_type == "overview" && slug.current == "resources"][0]`,{data:s,error:d}=([o,n]=N(()=>P(f)),o=await o,n(),o),g=F`*[_type == "articles" && type == "Resource"] {
    ...,
    author->{
      name,
      slug,
      qualifications,
      job,
      image,
    }
  } | order(orderRank)`,{data:i,error:b}=([o,n]=N(()=>P(g)),o=await o,n(),o);if(d.value||b.value)throw console.error(d),z({statusCode:404,statusMessage:"Page Not Found"});const y=m(i.value.filter(_=>_.promoted)),$=m(y.value[0]),k=m(y.value.slice(1,4)),I=m(i.value.filter(_=>!k.value.some(w=>w.slug.current===_.slug.current)).filter(_=>_.slug.current!==$.value.slug.current));return(_,w)=>{var C,A;const D=K,H=X,L=nt,M=Z,O=E,Q=bt,T=U;return e(s)?(r(),l("main",xt,[c(D,{title:e(s).title,description:e(s).subtitle,"image-url":(A=(C=e(s).image)==null?void 0:C.asset)!=null&&A._ref?e(h)(e(s).image.asset._ref).width(800).height(600).url():""},null,8,["title","description","image-url"]),c(H,{title:e(s).title,subtitle:e(s).subtitle,buttons:[],image:e(s).image,alt:e(s).title,class:""},null,8,["title","subtitle","image","alt"]),e(i)?(r(),l("div",vt,[a("div",pt,[c(L,{article:e($)},null,8,["article"])]),a("div",yt,[a("div",$t,[a("div",kt,[a("h2",wt,v(e(s).title),1),e(s).body?(r(),l("div",Ct,[c(M,{blocks:e(s).body},null,8,["blocks"])])):u("",!0)]),a("div",At,[(r(!0),l(B,null,V(e(k),R=>(r(),l("div",{key:R.slug.current,class:"mb-8 lg:mb-0 last:mb-0"},[c(O,{article:R},null,8,["article"])]))),128))]),c(Q,{articles:e(I)},null,8,["articles"])])]),c(T)])):u("",!0)])):u("",!0)}}});export{St as default};
