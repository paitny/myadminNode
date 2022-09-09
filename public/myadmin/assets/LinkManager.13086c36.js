import{_ as g,o as h,c as p,e as t,w as o,r as i,b as k,h as _}from"./index.f9437e7e.js";const b={name:"LinkManger",data(){return{linkData:[]}},methods:{async update(a){let{data:n}=await this.$axios({method:"POST",url:"/adminServer/link/update",data:{_id:a._id,name:a.name,home:a.home,logo:a.logo,des:a.des}});if(n.code)return this.$message.error(n.code);this.$message.success("\u66F4\u65B0\u5B8C\u6210")},async deleteLink(a){let{data:n}=await this.$axios({method:"delete",url:"/adminServer/link/delete",data:{_id:a._id}});if(n.code)return this.$message.error(n.code);this.$message.success("\u5220\u9664\u5B8C\u6210"),await this.getLinkData()},async getLinkData(){let{data:a}=await this.$axios({method:"GET",url:"/get/link"});if(a.code)return this.$message.error(a.msg);this.linkData=a.data}},created(){this.getLinkData()}},f={id:"LinkManger"},w={style:{display:"flex",width:"50%",height:"50%","justify-content":"space-between",margin:"0 auto"}},V=_("\u4FEE\u6539"),y=_("\u5220\u9664");function x(a,n,$,v,c,r){const s=i("el-input"),d=i("el-table-column"),u=i("el-button"),m=i("el-table");return h(),p("div",f,[t(m,{data:c.linkData,border:"",style:{width:"100%"}},{default:o(()=>[t(d,{label:"\u540D\u79F0",align:"center"},{default:o(e=>[t(s,{modelValue:e.row.name,"onUpdate:modelValue":l=>e.row.name=l},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(d,{label:"\u9996\u9875",align:"center"},{default:o(e=>[t(s,{modelValue:e.row.home,"onUpdate:modelValue":l=>e.row.home=l},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(d,{label:"logo",align:"center"},{default:o(e=>[t(s,{modelValue:e.row.logo,"onUpdate:modelValue":l=>e.row.logo=l},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(d,{label:"\u63CF\u8FF0",align:"center"},{default:o(e=>[t(s,{modelValue:e.row.des,"onUpdate:modelValue":l=>e.row.des=l},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(d,{fixed:"right",label:"\u64CD\u4F5C",align:"center"},{default:o(e=>[k("div",w,[t(u,{type:"primary",onClick:l=>r.update(e.row),size:"large",disabled:""},{default:o(()=>[V]),_:2},1032,["onClick"]),t(u,{type:"danger",onClick:l=>r.deleteLink(e.row),size:"large",disabled:""},{default:o(()=>[y]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data"])])}const U=g(b,[["render",x],["__scopeId","data-v-bb507156"]]);export{U as default};
