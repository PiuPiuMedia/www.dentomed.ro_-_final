import{d as l,c as s,j as r,B as a,y as x,D as p,M as d,A as m,x as f,z as y,s as o,I as g,J as _}from"./entry.JSmkQhmI.js";const w=l({__name:"SecondaryGhostLink",props:{text:{type:String,required:!0},to:{type:String,required:!0},size:{type:String,required:!1,default:"lg"},icon:{type:String,required:!1,default:null}},setup(e){const t=e,i=s(()=>{switch(t.size){case"sm":return"px-4 py-2";case"lg":return"px-4 py-2.5";case"xl":return"px-5 py-2.5";case"2xl":return"px-6 py-3";case"3xl":return"px-7 py-4";default:return"px-4 py-2.5"}}),u=s(()=>{switch(t.size){case"sm":return"text-xs";case"lg":return"text-base";case"xl":return"text-md";case"2xl":return"text-lg";case"3xl":return"text-lg";default:return"text-base"}});return(h,v)=>{const n=g,c=_;return r(),a(c,{to:e.to,class:y(`rounded-full bg-navy-300/20 hover:bg-navy-300/40
      ring-1 ring-navy-50/40
      ${o(i)}
      ${o(u)}
      font-semibold
      text-navy-400
      shadow-sm
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600
      transition duration-300 ease-in-out
      flex items-center justify-center
      uppercase
      group
    `)},{default:x(()=>[e.icon?(r(),a(n,{key:0,name:e.icon,class:"text-white w-5 h-5 mr-1"},null,8,["name"])):p("",!0),d(" "+m(e.text)+" ",1),f(n,{name:"mdi:arrow-right",class:"inline-block w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-200 ease-in-out"})]),_:1},8,["to","class"])}}});export{w as _};
