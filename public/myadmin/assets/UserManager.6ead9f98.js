import{h as g}from"./moment.9709ab41.js";import{_ as f,o as m,d as w,a as t,w as s,r as n,c as b,b as v,f as $}from"./index.82b5f088.js";const x={name:"ContactMsg",data(){return{userData:[]}},methods:{dateFormat:function(e,a){let l=e[a.property];return l==null?"":g(l).format("YYYY-MM-DD HH:mm:ss")},async getUserData(){let{data:e}=await this.$axios({method:"GET",url:"/get/user"});if(e.code)return this.$message.error(e.msg);this.userData=e.data},async deleteUser(e){let{data:a}=await this.$axios({method:"DELETE",url:"/adminServer/consumer/delete",data:{id:e}});if(a.code)return this.$message.error(a.msg);this.$message.success("\u7528\u6237\u5DF2\u6CE8\u9500"),await this.getContactData()},async switchHandle(e){let{data:a}=await this.$axios({method:"POST",url:"/adminServer/consumer/admin",data:{id:e._id,admin:e.admin}});if(a.code)return this.$message.error(a.msg);await this.getUserData()}},created(){this.getUserData()}},D={id:"userAdmin"},U={class:"demo-image__preview"},y=$("\u6CE8\u9500\u7528\u6237 ");function k(e,a,l,C,c,i){const o=n("el-table-column"),u=n("el-image"),_=n("el-switch"),p=n("el-button"),h=n("el-table");return m(),w("div",D,[t(h,{data:c.userData,border:"",style:{width:"100%"}},{default:s(()=>[(m(),b(o,{prop:"date",label:"\u6CE8\u518C\u65E5\u671F",key:c.userData.date,formatter:i.dateFormat,width:"200px",align:"center"},null,8,["formatter"])),t(o,{prop:"_id",label:"id",align:"center"}),t(o,{prop:"user",label:"Name",align:"center"}),t(o,{prop:"secret",label:"secret",align:"center"}),t(o,{prop:"photo",label:"\u5934\u50CF",align:"center"},{default:s(r=>[v("div",U,[t(u,{src:`${e.baseURL}${r.row.photo}`,"preview-src-list":[`${e.baseURL}${r.row.photo}`],"initial-index":4,fit:"cover","preview-teleported":"true",previewTeleported:""},null,8,["src","preview-src-list"])])]),_:1}),t(o,{label:"\u7BA1\u7406\u5458\u8D26\u53F7\u6388\u6743",align:"center"},{default:s(r=>[t(_,{style:{display:"block"},modelValue:r.row.admin,"onUpdate:modelValue":d=>r.row.admin=d,"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"\u7BA1\u7406\u5458","inactive-text":"\u4E0D\u662F\u7BA1\u7406\u5458",onChange:d=>i.switchHandle(r.row),disabled:""},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(o,{fixed:"right",label:"\u8C28\u614E\u64CD\u4F5C",align:"center"},{default:s(r=>[t(p,{type:"danger",onClick:d=>i.deleteUser(r.row._id),size:"large",disabled:""},{default:s(()=>[y]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])}const T=f(x,[["render",k]]);export{T as default};
