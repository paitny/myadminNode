import{h as _}from"./moment.9709ab41.js";import{_ as v,o as n,c as u,e as t,w as c,r as o,d as h,b as f}from"./index.50edf87c.js";const b={name:"LatelyVisitor",data(){return{visitorData:[]}},methods:{dateFormat:function(e,i){let a=e[i.property];return a==null?"":_(a).format("YYYY-MM-DD HH:mm:ss")}},async created(){let{data:e}=await this.$axios({method:"GET",url:"/get/visitor"});e.code||(this.visitorData=e.data)}},w={id:"lateUser"},g={class:"demo-image__preview"};function x(e,i,a,y,s,d){const r=o("el-table-column"),p=o("el-image"),m=o("el-table");return n(),u("div",w,[t(m,{data:s.visitorData,border:"",style:{width:"100%"}},{default:c(()=>[(n(),h(r,{prop:"date",label:"\u8BBF\u95EE\u65F6\u95F4",key:s.visitorData.date,formatter:d.dateFormat,width:"200px",align:"center"},null,8,["formatter"])),t(r,{prop:"_id",label:"id",align:"center"}),t(r,{prop:"visitor.user",label:"Name",align:"center"}),t(r,{prop:"visitor.secret",label:"secret",align:"center"}),t(r,{prop:"visitor.photo",label:"\u5934\u50CF",align:"center"},{default:c(l=>[f("div",g,[t(p,{style:{width:"150px",height:"100px"},src:[`${e.baseURL}${l.row.visitor.photo}`],"preview-src-list":[`${e.baseURL}${l.row.visitor.photo}`],"initial-index":4,fit:"cover","preview-teleported":"true",previewTeleported:""},null,8,["src","preview-src-list"])])]),_:1}),t(r,{label:"\u662F\u5426\u7BA1\u7406\u5458\u767B\u5F55",align:"center",prop:"visitor.admin"})]),_:1},8,["data"])])}const k=v(b,[["render",x]]);export{k as default};
