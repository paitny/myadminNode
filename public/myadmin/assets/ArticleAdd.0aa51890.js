import{_ as U,o as u,d as V,w as o,r as l,b as d,e as t,c as h,E as k,h as g,p as A,a as C}from"./index.d1969b6a.js";const S={name:"ArticleAdd",data(){return{form:{title:"",des:"",md:"",cover:""},imageUrl:""}},methods:{submitForm(){this.$refs.mdForm.submit()},async submit(){let{data:e}=await this.$axios({method:"POST",url:"/adminServer/article/add",data:this.form});if(e.code)return this.$message.error(e.msg);await this.$router.push("/articleMg/articleManage")},fileChange(e,s){if(e.status==="ready")if(/^(.+)\.md$/.test(e.name)){if(this.form.title)return;this.form.title=RegExp.$1}else this.$message.error("\u53EA\u80FD\u4E0A\u4F20 .md \u6587\u4EF6"),s.pop()},beforeRemove(){this.form.title=""},md_upload_success(e){if(e.code)return this.$message.error("\u4E0A\u4F20md\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u7AEF\u62A5\u9519");this.form.md=e.url,this.imageUrl?this.$refs.imgForm.submit():this.submit()},coverChange(e,s){if(e.status!=="ready")return;const c=/^image\/(jpeg|png)$/.test(e.raw.type),n=e.raw.size/1024/1024<2;c||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG/PNG \u683C\u5F0F!"),n||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),c&&n?this.imageUrl=URL.createObjectURL(e.raw):(this.imageUrl="",s.pop())},cover_upload_success(e){if(e.code)return this.$message.error("\u4E0A\u4F20\u5C01\u9762\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u7AEF\u62A5\u9519");this.form.cover=e.url,this.submit()}}},F=e=>(A("data-v-e6310752"),e=e(),C(),e),P={id:"ArticleAdd"},R={class:"el-icon-upload"},$=F(()=>d("div",{class:"el-upload__text"},[g("\u5C06.md\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216"),d("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1)),B={key:1,class:"el-icon-plus avatar-uploader-icon"},I=g("\u786E\u8BA4\u53D1\u8868");function L(e,s,c,n,a,r){const _=l("el-input"),i=l("el-form-item"),b=l("upload-filled"),p=l("el-icon"),f=l("el-upload"),v=l("Plus"),w=l("el-button"),x=l("el-form"),y=l("el-card");return u(),V(y,null,{default:o(()=>[d("div",P,[t(x,{model:a.form,"status-icon":"",ref:"ruleForm","label-width":"100px"},{default:o(()=>[t(i,{label:"\u6807\u9898\uFF1A","label-width":"100px"},{default:o(()=>[t(_,{modelValue:a.form.title,"onUpdate:modelValue":s[0]||(s[0]=m=>a.form.title=m),placeholder:"\u53EF\u901A\u8FC7\u4E0A\u4F20 md \u81EA\u52A8\u83B7\u53D6\u6587\u4EF6\u540D"},null,8,["modelValue"])]),_:1}),t(i,{label:"\u63CF\u8FF0\uFF1A","label-width":"100px"},{default:o(()=>[t(_,{type:"textarea",modelValue:a.form.des,"onUpdate:modelValue":s[1]||(s[1]=m=>a.form.des=m)},null,8,["modelValue"])]),_:1}),t(i,{label:"md\u4E0A\u4F20\uFF1A","label-width":"100px"},{default:o(()=>[t(f,{class:"upload-demo",drag:"",action:`${e.baseURL}/adminServer/article/md`,"auto-upload":!1,"on-change":r.fileChange,"on-success":r.md_upload_success,"before-remove":r.beforeRemove,limit:1,ref:"mdForm","with-credentials":!0},{default:o(()=>[d("i",R,[t(p,{class:"el-icon--upload"},{default:o(()=>[t(b)]),_:1})]),$]),_:1},8,["action","on-change","on-success","before-remove"])]),_:1}),t(i,{label:"\u5C01\u9762\u56FE\u4E0A\u4F20\uFF1A","label-width":"100px"},{default:o(()=>[t(f,{class:"avatar-uploader",action:"/adminServer/article/cover","show-file-list":!1,"on-change":r.coverChange,"on-success":r.cover_upload_success,"auto-upload":!1,ref:"imgForm","with-credentials":!0},{default:o(()=>[a.imageUrl?(u(),h("div",{key:0,class:"avatar",style:k({backgroundImage:`url(${a.imageUrl})`})},null,4)):(u(),h("i",B,[t(p,null,{default:o(()=>[t(v)]),_:1})]))]),_:1},8,["on-change","on-success"])]),_:1}),t(i,{"label-width":"100px"},{default:o(()=>[t(w,{type:"primary",onClick:r.submitForm,size:"large"},{default:o(()=>[I]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])]),_:1})}const N=U(S,[["render",L],["__scopeId","data-v-e6310752"]]);export{N as default};
