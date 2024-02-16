import{d as y,l as f,j as e,k as a,B as n,y as g,s as v,x as b,D as l,v as i,A as c,M as k,F as _,C as w,G as $,J as j,I as B}from"./entry.JSmkQhmI.js";const I={class:"w-full h-full overflow-hidden"},N={key:0,class:"w-full aspect-[16/7] rounded-2xl overflow-hidden"},V={key:1,class:"bg-gray-100 h-full w-full"},q={class:"flex-auto py-4"},D={key:0,class:"text-lg font-bold tracking-tight text-gray-600 mb-3 leading-0"},O={key:1,class:"text-gray-500 mb-0 text-sm"},S={key:2,class:"flex gap-2 mt-3 items-center"},A={class:"author text-gray-400 text-xs leading-none mb-0 mt-1"},E={class:"inline-flex items-center rounded-full bg-navy-50/50 px-1.5 py-0.5 text-xs font-medium text-navy-300 ring-1 ring-inset ring-navy-300/10"},Q=y({__name:"Card",props:{article:{type:Object,required:!0}},setup(t){const{urlFor:m}=f();return(C,F)=>{var o,u;const h=$,r=j,x=B;return e(),a("div",I,[t.article.slug?(e(),n(r,{key:0,to:`/resources/${t.article.slug.current}`},{default:g(()=>{var s,d;return[(d=(s=t.article.image)==null?void 0:s.asset)!=null&&d._ref?(e(),a("div",N,[b(h,{class:"w-full object-cover object-center contrast-75 brightness-90 hover:opacity-90",src:v(m)(t.article.image.asset._ref).width(400).height(175).url(),alt:t.article.alt,width:"400",height:"175"},null,8,["src","alt"])])):(e(),a("div",V))]}),_:1},8,["to"])):l("",!0),i("div",q,[t.article.title?(e(),a("h3",D,[t.article.slug?(e(),n(r,{key:0,to:`/resources/${t.article.slug.current}`,class:"hover:opacity-80"},{default:g(()=>[k(c(t.article.title),1)]),_:1},8,["to"])):l("",!0)])):l("",!0),t.article.subtitle?(e(),a("p",O,c(t.article.subtitle),1)):l("",!0),(o=t.article.author)!=null&&o.name?(e(),a("div",S,[i("span",A," By "+c(t.article.author.name),1),(u=t.article.author)!=null&&u.name&&t.article.tags?(e(),n(x,{key:0,name:"mdi:circle",class:"text-gray-400 text-xs leading-none mb-0 mt-1 w-1.5 h-1.5"})):l("",!0),(e(!0),a(_,null,w(t.article.tags,s=>(e(),a("div",{key:s},[i("span",E,c(s),1)]))),128))])):l("",!0)])])}}}),G={class:"w-full h-full overflow-hidden grid grid-cols-5 gap-4 lg:gap-8 mb-12"},J={key:0,class:"w-full aspect-[16/9] rounded-2xl overflow-hidden"},L={key:1,class:"bg-gray-100 h-full w-full"},M={class:"pb-4 col-span-3"},R={key:0,class:"text-lg font-bold tracking-tight text-gray-600 mb-3 leading-0"},T={key:1,class:"text-gray-500 mb-0 text-sm"},z={key:2,class:"flex gap-2 mt-3 items-center"},H={class:"author text-gray-400 text-xs leading-none mb-0 mt-1"},K={class:"inline-flex items-center rounded-full bg-navy-50/50 px-1.5 py-0.5 text-xs font-medium text-navy-300 ring-1 ring-inset ring-navy-300/10"},U=y({__name:"CardRow",props:{article:{type:Object,required:!0}},setup(t){const{urlFor:m}=f();return(C,F)=>{var o,u;const h=$,r=j,x=B;return e(),a("div",G,[t.article.slug?(e(),n(r,{key:0,to:`/resources/${t.article.slug.current}`,class:"col-span-2"},{default:g(()=>{var s,d;return[(d=(s=t.article.image)==null?void 0:s.asset)!=null&&d._ref?(e(),a("div",J,[b(h,{class:"w-full object-cover object-center contrast-75 brightness-90 hover:opacity-90",src:v(m)(t.article.image.asset._ref).width(400).height(225).url(),alt:t.article.alt,width:"400",height:"225"},null,8,["src","alt"])])):(e(),a("div",L))]}),_:1},8,["to"])):l("",!0),i("div",M,[t.article.title?(e(),a("h3",R,[t.article.slug?(e(),n(r,{key:0,to:`/resources/${t.article.slug.current}`,class:"hover:opacity-80"},{default:g(()=>[k(c(t.article.title),1)]),_:1},8,["to"])):l("",!0)])):l("",!0),t.article.subtitle?(e(),a("p",T,c(t.article.subtitle),1)):l("",!0),(o=t.article.author)!=null&&o.name?(e(),a("div",z,[i("span",H," By "+c(t.article.author.name),1),(u=t.article.author)!=null&&u.name&&t.article.tags?(e(),n(x,{key:0,name:"mdi:circle",class:"text-gray-400 text-xs leading-none mb-0 mt-1 w-1.5 h-1.5"})):l("",!0),(e(!0),a(_,null,w(t.article.tags,s=>(e(),a("div",{key:s},[i("span",K,c(s),1)]))),128))])):l("",!0)])])}}});export{Q as _,U as a};