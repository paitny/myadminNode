import{_ as d,q as p,x as _,o as m,c as g,C as h,b as t,t as o,h as v,k as f}from"./index.7057c5da.js";const x={class:"count-wrapper"},y={class:"count-txt"},k={__name:"index",props:{msg:{type:String,required:!0},isLogin:{type:Boolean,required:!0}},setup(n){const i=n,a=p(),r=_(5),s=i.isLogin?{path:"/",title:"\u9996\u9875"}:{path:"/login",title:"\u767B\u5F55\u9875\u9762"};let c=null;const l=e=>{e.value<=0?a.replace(s.path):c=setTimeout(()=>{e.value--,l(e)},1e3)};l(r);const u=()=>{clearTimeout(c),a.replace(s.path)};return(e,B)=>(m(),g("div",x,[h(e.$slots,"default",{class:"icon"},void 0,!0),t("h2",null,o(n.msg),1),t("div",y,[v(" \u9875\u9762\u5C06\u5728"+o(r.value)+"\u79D2\u540E\u8DF3\u8F6C\u81F3 ",1),t("span",null,o(f(s).title),1)]),t("div",{class:"return",onClick:u},"\u7ACB\u5373\u8DF3\u8F6C")]))}},q=d(k,[["__scopeId","data-v-881166d0"]]);export{q as C};
