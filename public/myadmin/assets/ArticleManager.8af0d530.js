import{_ as A,o as g,d as f,w as r,r as n,b as p,e as l,M as x,h as _}from"./index.4774a939.js";const V={name:"ArticleManger",data(){return{articleData:[],AllArticleData:[],searchTxt:"",timer:null,total:0,display:!0,query:{page:1,perPage:5}}},methods:{handleSearch(){clearTimeout(this.timer),this.timer=setTimeout(()=>{let e=this.searchTxt.trim();if(!e)return this.articleData=this.AllArticleData;let t=[];this.AllArticleData.forEach(s=>{(s.title.includes(e)||s.des.includes(e))&&t.push(s)}),this.articleData=t},500)},async getArticles(){let{data:e}=await this.$axios({method:"get",url:"/get/article",params:this.query});if(e.code)return this.$message.error(e.msg);this.AllArticleData=e.data,this.total=e.total,this.total==0&&(this.display=!1),this.handleSearch()},async update(e,t){let{data:s}=await this.$axios({method:"POST",url:"/adminServer/article/update",data:{id:e,doc:t}});if(s.code)return this.$message.error(s.msg);this.$message.success("\u66F4\u65B0\u6210\u529F"),await this.getArticles()},md_before_upload(e){let t=/\.md$/.test(e.name);return t||this.$message.error("\u8BF7\u4E0A\u4F20md\u6587\u4EF6"),t},md_upload_success(e,t){if(e.code)return this.$message.error(e.msg);this.update(t,{md:e.url})},cover_before_upload(e){const t=/^image\/(jpeg|png)$/.test(e.type),s=e.size/1024/1024<2;return t||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG/PNG \u683C\u5F0F!"),s||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),t&&s},cover_upload_success(e,t){if(e.code)return this.$message.error(e.msg);this.update(t,{cover:e.url})},async deleteArticle(e){let{data:t}=await this.$axios({method:"DELETE",url:"/adminServer/article/delete",data:{id:e}});if(t.code)return this.$message.error(t.msg);this.$message.success("\u5220\u9664\u5B8C\u6210"),await this.getArticles()}},created(){this.getArticles()}},C={id:"ArticleManger"},z=_("\u70B9\u51FB\u4E0A\u4F20md"),S={class:"cover"},T=_("\u91CD\u4F20\u5C01\u9762"),U={class:"buttonSubmit"},D=_("\u4FEE\u6539 "),k=_("\u5220\u9664 ");function M(e,t,s,$,o,i){const m=n("el-input"),c=n("el-table-column"),u=n("el-button"),h=n("el-upload"),b=n("el-image"),w=n("el-table"),v=n("el-pagination"),y=n("el-card");return g(),f(y,null,{default:r(()=>[p("div",C,[l(m,{class:"search",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9","prefix-icon":"el-icon-search",onInput:i.handleSearch,modelValue:o.searchTxt,"onUpdate:modelValue":t[0]||(t[0]=a=>o.searchTxt=a)},null,8,["onInput","modelValue"]),l(w,{data:o.articleData,border:"",style:{width:"100%"}},{default:r(()=>[l(c,{label:"\u6807\u9898"},{default:r(a=>[l(m,{modelValue:a.row.title,"onUpdate:modelValue":d=>a.row.title=d},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(c,{label:"\u63CF\u8FF0"},{default:r(a=>[l(m,{modelValue:a.row.des,"onUpdate:modelValue":d=>a.row.des=d},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(c,{label:"\u91CD\u65B0\u4E0A\u4F20md",width:"140px"},{default:r(a=>[l(h,{class:"upload-demo",action:`${e.baseURL}/adminServer/article/md`,"on-success":function(d){i.md_upload_success(d,a.row._id)},"before-upload":i.md_before_upload,limit:1,"with-credentials":!0,"show-file-list":!1},{default:r(()=>[l(u,{size:"large",type:"success"},{default:r(()=>[z]),_:1})]),_:2},1032,["action","on-success","before-upload"])]),_:1}),l(c,{label:"\u91CD\u65B0\u4E0A\u4F20\u5C01\u9762\u56FE"},{default:r(a=>[p("div",S,[l(b,{style:{width:"200px",height:"150px"},src:`${e.baseURL}${a.row.cover}`,"preview-src-list":[`${e.baseURL}${a.row.cover}`],"preview-teleported":"true",previewTeleported:""},null,8,["src","preview-src-list"]),l(h,{class:"upload-demo",action:"/adminServer/article/cover","on-success":function(d){i.cover_upload_success(d,a.row._id)},"before-upload":i.cover_before_upload,limit:1,"with-credentials":!0,"show-file-list":!1},{default:r(()=>[l(u,{size:"large",type:"warning",style:{margin:"auto 0"}},{default:r(()=>[T]),_:1})]),_:2},1032,["on-success","before-upload"])])]),_:1}),l(c,{fixed:"right",label:"\u64CD\u4F5C"},{default:r(a=>[p("div",U,[l(u,{type:"primary",onClick:d=>i.update(a.row._id,{title:a.row.title,des:a.row.des}),size:"large"},{default:r(()=>[D]),_:2},1032,["onClick"]),l(u,{type:"danger",onClick:d=>i.deleteArticle(a.row._id),size:"large"},{default:r(()=>[k]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data"]),o.display?(g(),f(v,{key:0,background:"",layout:"sizes,prev,pager,next,jumper,->,slot, total",total:o.total,"page-size":o.query.perPage,"onUpdate:page-size":t[1]||(t[1]=a=>o.query.perPage=a),"current-page":o.query.page,"onUpdate:current-page":t[2]||(t[2]=a=>o.query.page=a),onCurrentChange:i.getArticles,onSizeChange:i.getArticles,"page-sizes":[2,5,10,20,30]},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"])):x("",!0)])]),_:1})}const q=A(V,[["render",M],["__scopeId","data-v-62bb2289"]]);export{q as default};
