import{_ as U,o as f,d as V,w as a,r as t,b as u,e as s,c as b,E as C,h as p,p as F,a as S}from"./index.b344963c.js";const k={name:"MusicAdd",data(){return{form:{name:"",artist:"",lrc:"",url:"",cover:"",theme:""},imageUrl:""}},methods:{submitForm(){this.$refs.musicForm.submit(),this.$refs.lrcForm.submit()},async submit(){let{data:e}=await this.$axios({method:"POST",url:"/adminServer/music/add",data:this.form});if(e.code)return this.$message.error(e.msg);await this.$router.push("/music/micMg")},fileChangemusic(e,l){if(e.status==="ready")if(/^(.+)\.(mp3|m4a)$/.test(e.name)){if(this.form.name)return;this.form.name=RegExp.$1}else this.$message.error("\u53EA\u80FD\u4E0A\u4F20 .mp3\u6216.m4a\u6587\u4EF6"),l.pop()},beforeRemovemusic(){this.form.name=""},music_upload_success(e){if(e.code)return this.$message.error("\u4E0A\u4F20md\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u7AEF\u62A5\u9519");this.form.url=e.url,this.imageUrl?this.$refs.imgForm.submit():this.submit()},fileChangelrc(e,l){e.status==="ready"&&(/^(.+)\.lrc$/.test(e.name)||(this.$message.error("\u53EA\u80FD\u4E0A\u4F20 .lrc \u683C\u5F0F\u7684\u6B4C\u8BCD\u6587\u4EF6"),l.pop()))},lrc_upload_success(e){if(e.code)return this.$message.error("\u4E0A\u4F20\u6B4C\u8BCD\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u7AEF\u62A5\u9519");this.form.lrc=e.url},coverChange(e,l){if(e.status!=="ready")return;const m=/^image\/(jpeg|png)$/.test(e.raw.type),n=e.raw.size/1024/1024<2;m||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG/PNG \u683C\u5F0F!"),n||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),m&&n?this.imageUrl=URL.createObjectURL(e.raw):(this.imageUrl="",l.pop())},cover_upload_success(e){if(e.code)return this.$message.error("\u4E0A\u4F20\u5C01\u9762\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u7AEF\u62A5\u9519");this.form.cover=e.url,this.submit()}}},R=e=>(F("data-v-a0f8aac9"),e=e(),S(),e),$={id:"ArticleAdd"},A={class:"el-icon-upload"},L=R(()=>u("div",{class:"el-upload__text"},[p("\u5C06.\u97F3\u4E50\u6587\u4EF6\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216"),u("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1)),M=p("\u6B4C\u8BCD\u4E0A\u4F20"),P={key:1,class:"el-icon-plus avatar-uploader-icon"},B=p("\u786E\u8BA4\u6DFB\u52A0");function I(e,l,m,n,o,r){const d=t("el-input"),c=t("el-form-item"),v=t("upload-filled"),h=t("el-icon"),_=t("el-upload"),g=t("el-button"),w=t("Plus"),x=t("el-form"),y=t("el-card");return f(),V(y,null,{default:a(()=>[u("div",$,[s(x,{model:o.form,"status-icon":"",ref:"ruleForm","label-width":"100px"},{default:a(()=>[s(c,{label:"\u97F3\u4E50\u540D\u5B57\uFF1A","label-width":"100px"},{default:a(()=>[s(d,{modelValue:o.form.name,"onUpdate:modelValue":l[0]||(l[0]=i=>o.form.name=i),placeholder:"\u53EF\u901A\u8FC7\u4E0A\u4F20 music \u81EA\u52A8\u83B7\u53D6\u6587\u4EF6\u540D"},null,8,["modelValue"])]),_:1}),s(c,{label:"\u6F14\u5531\u8005\uFF1A","label-width":"100px"},{default:a(()=>[s(d,{modelValue:o.form.artist,"onUpdate:modelValue":l[1]||(l[1]=i=>o.form.artist=i)},null,8,["modelValue"])]),_:1}),s(c,{label:"\u4E3B\u9898\u989C\u8272\uFF1A","label-width":"100px"},{default:a(()=>[s(d,{modelValue:o.form.theme,"onUpdate:modelValue":l[2]||(l[2]=i=>o.form.theme=i)},null,8,["modelValue"])]),_:1}),s(c,{label:"\u97F3\u4E50\u4E0A\u4F20\uFF1A","label-width":"100px"},{default:a(()=>[s(_,{class:"upload-demo",drag:"",action:`${e.baseURL}/adminServer/music/musicAdd`,"auto-upload":!1,"on-change":r.fileChangemusic,"on-success":r.music_upload_success,"before-remove":r.beforeRemovemusic,limit:1,ref:"musicForm","with-credentials":!0},{default:a(()=>[u("i",A,[s(h,{class:"el-icon--upload"},{default:a(()=>[s(v)]),_:1})]),L]),_:1},8,["action","on-change","on-success","before-remove"])]),_:1}),s(c,{label:"\u6B4C\u8BCD\u4E0A\u4F20\uFF1A","label-width":"100px"},{default:a(()=>[s(_,{class:"upload-demo",action:`${e.baseURL}/adminServer/music/lrc`,multiple:"","auto-upload":!1,"on-change":r.fileChangelrc,"on-success":r.lrc_upload_success,limit:1,"with-credentials":!0,ref:"lrcForm"},{default:a(()=>[s(g,{type:"primary",size:"large"},{default:a(()=>[M]),_:1})]),_:1},8,["action","on-change","on-success"])]),_:1}),s(c,{label:"\u5C01\u9762\u56FE\u4E0A\u4F20\uFF1A","label-width":"100px"},{default:a(()=>[s(_,{class:"avatar-uploader",action:`${e.baseURL}/adminServer/music/cover`,"show-file-list":!1,"on-change":r.coverChange,"on-success":r.cover_upload_success,"auto-upload":!1,ref:"imgForm","with-credentials":!0},{default:a(()=>[o.imageUrl?(f(),b("div",{key:0,class:"avatar",style:C({backgroundImage:`url(${o.imageUrl})`})},null,4)):(f(),b("i",P,[s(h,null,{default:a(()=>[s(w)]),_:1})]))]),_:1},8,["action","on-change","on-success"])]),_:1}),s(c,{"label-width":"100px"},{default:a(()=>[s(g,{type:"success",onClick:r.submitForm,size:"large"},{default:a(()=>[B]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])]),_:1})}const N=U(k,[["render",I],["__scopeId","data-v-a0f8aac9"]]);export{N as default};
