import{_ as y,o as u,d as U,w as t,r as s,b as d,e as o,c as p,E as V,h,p as $,a as k}from"./index.0f8f88a0.js";const S={name:"VideoAdd",data(){return{form:{title:"",video:"",videoCover:""},imageUrl:""}},methods:{async submit(){let{data:e}=await this.$axios({method:"POST",url:"/adminServer/video/add",data:this.form});if(e.code)return this.$message.error(e.msg);await this.$router.push("/mv/mvManage")},fileChange(e,a){if(e.status==="ready")if(/(.*)\.(mp4|rmvb|avi|ts|flv|mov|3gb|m3u8)$/.test(e.name)){if(this.form.title)return;this.form.title=RegExp.$1}else this.$message.error("\u53EA\u80FD\u4E0A\u4F20.mp4 .avi .flv .rmvb .mov .m3u8 \u6216.3gb\u683C\u5F0F\u7684\u6587\u4EF6"),a.pop()},submitVideo(){this.$refs.videoForm.submit()},beforeRemove(){this.form.title=""},video_upload_success(e){if(e.code)return this.$message.error("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u7AEF\u62A5\u9519");this.form.video=e.url,this.imageUrl?this.$refs.imgForm.submit():this.submit()},videoCoverChange(e,a){if(e.status!=="ready")return;const n=/^image\/(jpeg|png)$/.test(e.raw.type),c=e.raw.size/1024/1024<2;n||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG/PNG \u683C\u5F0F!"),c||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),n&&c?this.imageUrl=URL.createObjectURL(e.raw):(this.imageUrl="",a.pop())},videoCover_upload_success(e){if(e.code)return this.$message.error("\u4E0A\u4F20\u5C01\u9762\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u7AEF\u62A5\u9519");this.form.videoCover=e.url,this.submit()}}},P=e=>($("data-v-3427d170"),e=e(),k(),e),R={class:"videoAdd"},A={class:"videoPhoto"},B={class:"el-icon-upload"},I=P(()=>d("div",{class:"el-upload__text"},[h("\u5C06\u89C6\u9891\u683C\u5F0F\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216"),d("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1)),L={key:1,class:"el-icon-plus avatar-uploader-icon"},F=h("\u786E\u8BA4\u4E0A\u4F20");function N(e,a,n,c,l,i){const f=s("el-input"),r=s("el-form-item"),v=s("upload-filled"),m=s("el-icon"),_=s("el-upload"),g=s("Plus"),b=s("el-button"),w=s("el-form"),x=s("el-card");return u(),U(x,null,{default:t(()=>[d("div",R,[d("div",A,[o(w,{model:l.form},{default:t(()=>[o(r,{label:"\u6807\u9898\uFF1A","label-width":"150px"},{default:t(()=>[o(f,{style:{height:"50px",width:"500px"},modelValue:l.form.title,"onUpdate:modelValue":a[0]||(a[0]=C=>l.form.title=C),placeholder:"\u53EF\u901A\u8FC7\u4E0A\u4F20\u89C6\u9891\u6587\u4EF6\u81EA\u52A8\u83B7\u53D6\u6587\u4EF6\u540D"},null,8,["modelValue"])]),_:1}),o(r,{label:"\u89C6\u9891\u4E0A\u4F20\uFF1A","label-width":"150px"},{default:t(()=>[o(_,{class:"upload-demo",drag:"",action:`${e.baseURL}/adminServer/video/videoAdd`,"auto-upload":!1,"on-change":i.fileChange,limit:1,ref:"videoForm","on-success":i.video_upload_success,"with-credentials":!0},{default:t(()=>[d("i",B,[o(m,{class:"el-icon--upload"},{default:t(()=>[o(v)]),_:1})]),I]),_:1},8,["action","on-change","on-success"])]),_:1}),o(r,{label:"\u5C01\u9762\u56FE\u4E0A\u4F20\uFF1A","label-width":"150px"},{default:t(()=>[o(_,{class:"avatar-uploader",action:`${e.baseURL}/adminServer/video/videoCover`,"show-file-list":!1,"on-change":i.videoCoverChange,"on-success":i.videoCover_upload_success,"auto-upload":!1,ref:"imgForm","with-credentials":!0},{default:t(()=>[l.imageUrl?(u(),p("div",{key:0,class:"avatar",style:V({backgroundImage:`url(${l.imageUrl})`})},null,4)):(u(),p("i",L,[o(m,null,{default:t(()=>[o(g)]),_:1})]))]),_:1},8,["action","on-change","on-success"])]),_:1}),o(r,{"label-width":"150px"},{default:t(()=>[o(b,{type:"success",onClick:i.submitVideo,style:{width:"200px",height:"100px"}},{default:t(()=>[F]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])])]),_:1})}const G=y(S,[["render",N],["__scopeId","data-v-3427d170"]]);export{G as default};
