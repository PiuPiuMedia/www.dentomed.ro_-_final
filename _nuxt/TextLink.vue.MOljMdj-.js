import{d as i,c,j as n,B as r,y as u,D as l,A as x,M as m,x as d,z as p,s as f,I as _,J as g}from"./entry.JSmkQhmI.js";const w=i({__name:"TextLink",props:{text:{type:String,required:!0},to:{type:String,required:!0},size:{type:String,required:!1,default:"lg"},icon:{type:String,required:!1,default:null}},setup(t){const a=t,s=c(()=>{switch(a.size){case"sm":return"text-xs";case"lg":return"text-base";case"xl":return"text-md";case"2xl":return"text-lg";case"3xl":return"text-lg";default:return"text-base"}});return(y,h)=>{const e=_,o=g;return n(),r(o,{to:t.to,class:p(`
      ${f(s)}
      font-bold
      text-primary-500 hover:text-primary-600
      transition duration-300 ease-in-out
      flex items-center justify-start
      uppercase
      group
    `)},{default:u(()=>[t.icon?(n(),r(e,{key:0,name:t.icon,class:"text-white w-5 h-5 mr-1"},null,8,["name"])):l("",!0),m(" "+x(t.text)+" ",1),d(e,{name:"mdi:arrow-right",class:"inline-block w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-200 ease-in-out"})]),_:1},8,["to","class"])}}});export{w as _};
