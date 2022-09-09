import{h as _}from"./moment.9709ab41.js";import{_ as h,o as i,c as f,e as t,w as m,r as c,d as g}from"./index.382f8e1e.js";const b={name:"ContactMsg",data(){return{contactData:[]}},methods:{dateFormat:function(e,o){let n=e[o.property];return n==null?"":_(n).format("YYYY-MM-DD HH:mm:ss")},async getContactData(){let{data:e}=await this.$axios({method:"GET",url:"/adminServer/contact"});if(e.code)return this.$message.error(e.msg);this.contactData=e.data},async switchHandle(e){let{data:o}=await this.$axios({method:"POST",url:"/adminServer/contact/read",data:{id:e._id,read:e.read}});if(o.code)return this.$message.error(o.msg)}},created(){this.getContactData()}},w={id:"ContactMsg"};function v(e,o,n,x,l,s){const a=c("el-table-column"),u=c("el-switch"),p=c("el-table");return i(),f("div",w,[t(p,{data:l.contactData,border:"",style:{width:"100%"}},{default:m(()=>[(i(),g(a,{prop:"date",label:"\u65E5\u671F",key:l.contactData.date,formatter:s.dateFormat,align:"center"},null,8,["formatter"])),t(a,{prop:"name",label:"Name",align:"center"}),t(a,{prop:"email",label:"Email",align:"center"}),t(a,{prop:"subject",label:"Subject",align:"center"}),t(a,{prop:"message",label:"Message",align:"center"}),t(a,{label:"\u662F\u5426\u5904\u7406",align:"center"},{default:m(r=>[t(u,{style:{display:"block"},modelValue:r.row.read,"onUpdate:modelValue":d=>r.row.read=d,"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"\u5DF2\u5904\u7406","inactive-text":"\u672A\u5904\u7406",onChange:d=>s.switchHandle(r.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})]),_:1},8,["data"])])}const y=h(b,[["render",v]]);export{y as default};
