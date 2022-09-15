import{_ as V,o as f,d as C,w as l,r as t,b as u,e as s,c as g,E as F,h as b,p as S,a as k}from"./index.d3350e86.js";const R={name:"MusicAdd",data(){return{form:{name:"",artist:"",lrc:"",url:"",cover:"",theme:""},imageUrl:""}},methods:{submitForm(){this.$refs.musicForm.submit(),this.$refs.lrcForm.submit()},async submit(){let{data:e}=await this.$axios({method:"POST",url:"/adminServer/music/add",data:this.form});if(e.code)return this.$message.error(e.msg);await this.$router.push("/music/micMg")},fileChangemusic(e,o){if(e.status==="ready")if(/^(.+)\.(mp3|m4a)$/.test(e.name)){if(this.form.name)return;this.form.name=RegExp.$1}else this.$message.error("\u53EA\u80FD\u4E0A\u4F20 .mp3\u6216.m4a\u6587\u4EF6"),o.pop()},beforeRemovemusic(){this.form.name=""},music_upload_success(e){if(e.code)return this.$message.error("\u4E0A\u4F20md\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u7AEF\u62A5\u9519");this.form.url=e.url,this.imageUrl?this.$refs.imgForm.submit():this.submit()},fileChangelrc(e,o){e.status==="ready"&&(/^(.+)\.lrc$/.test(e.name)||(this.$message.error("\u53EA\u80FD\u4E0A\u4F20 .lrc \u683C\u5F0F\u7684\u6B4C\u8BCD\u6587\u4EF6"),o.pop()))},lrc_upload_success(e){if(e.code)return this.$message.error("\u4E0A\u4F20\u6B4C\u8BCD\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u7AEF\u62A5\u9519");this.form.lrc=e.url},coverChange(e,o){if(e.status!=="ready")return;const m=/^image\/(jpeg|png)$/.test(e.raw.type),n=e.raw.size/1024/1024<2;m||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG/PNG \u683C\u5F0F!"),n||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),m&&n?this.imageUrl=URL.createObjectURL(e.raw):(this.imageUrl="",o.pop())},cover_upload_success(e){if(e.code)return this.$message.error("\u4E0A\u4F20\u5C01\u9762\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u7AEF\u62A5\u9519");this.form.cover=e.url,this.submit()}}},$=e=>(S("data-v-255ef0b4"),e=e(),k(),e),A={id:"ArticleAdd"},L={class:"el-icon-upload"},M=$(()=>u("div",{class:"el-upload__text"},[b("\u5C06.\u97F3\u4E50\u6587\u4EF6\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216"),u("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1)),P={key:1,class:"el-icon-plus avatar-uploader-icon"},B=b("\u786E\u8BA4\u6DFB\u52A0");function I(e,o,m,n,a,r){const d=t("el-input"),c=t("el-form-item"),v=t("upload-filled"),p=t("el-icon"),_=t("el-upload"),w=t("svg-icon"),h=t("el-button"),x=t("Plus"),y=t("el-form"),U=t("el-card");return f(),C(U,null,{default:l(()=>[u("div",A,[s(y,{model:a.form,"status-icon":"",ref:"ruleForm","label-width":"100px"},{default:l(()=>[s(c,{label:"\u97F3\u4E50\u540D\u5B57\uFF1A","label-width":"100px"},{default:l(()=>[s(d,{modelValue:a.form.name,"onUpdate:modelValue":o[0]||(o[0]=i=>a.form.name=i),placeholder:"\u53EF\u901A\u8FC7\u4E0A\u4F20 music \u81EA\u52A8\u83B7\u53D6\u6587\u4EF6\u540D"},null,8,["modelValue"])]),_:1}),s(c,{label:"\u6F14\u5531\u8005\uFF1A","label-width":"100px"},{default:l(()=>[s(d,{modelValue:a.form.artist,"onUpdate:modelValue":o[1]||(o[1]=i=>a.form.artist=i)},null,8,["modelValue"])]),_:1}),s(c,{label:"\u4E3B\u9898\u989C\u8272\uFF1A","label-width":"100px"},{default:l(()=>[s(d,{modelValue:a.form.theme,"onUpdate:modelValue":o[2]||(o[2]=i=>a.form.theme=i)},null,8,["modelValue"])]),_:1}),s(c,{label:"\u97F3\u4E50\u4E0A\u4F20\uFF1A","label-width":"100px"},{default:l(()=>[s(_,{class:"upload-demo",drag:"",action:`${e.baseURL}/adminServer/music/musicAdd`,"auto-upload":!1,"on-change":r.fileChangemusic,"on-success":r.music_upload_success,"before-remove":r.beforeRemovemusic,limit:1,ref:"musicForm","with-credentials":!0},{default:l(()=>[u("i",L,[s(p,{class:"el-icon--upload"},{default:l(()=>[s(v)]),_:1})]),M]),_:1},8,["action","on-change","on-success","before-remove"])]),_:1}),s(c,{label:"\u6B4C\u8BCD\u4E0A\u4F20\uFF1A","label-width":"100px"},{default:l(()=>[s(_,{class:"upload-demo",action:`${e.baseURL}/adminServer/music/lrc`,multiple:"","auto-upload":!1,"on-change":r.fileChangelrc,"on-success":r.lrc_upload_success,limit:1,"with-credentials":!0,ref:"lrcForm"},{default:l(()=>[s(h,{type:"info",size:"large",circle:""},{default:l(()=>[s(w,{icon:"lrc",style:{width:"60px",height:"60px"}})]),_:1})]),_:1},8,["action","on-change","on-success"])]),_:1}),s(c,{label:"\u5C01\u9762\u56FE\u4E0A\u4F20\uFF1A","label-width":"100px"},{default:l(()=>[s(_,{class:"avatar-uploader",action:`${e.baseURL}/adminServer/music/cover`,"show-file-list":!1,"on-change":r.coverChange,"on-success":r.cover_upload_success,"auto-upload":!1,ref:"imgForm","with-credentials":!0},{default:l(()=>[a.imageUrl?(f(),g("div",{key:0,class:"avatar",style:F({backgroundImage:`url(${a.imageUrl})`})},null,4)):(f(),g("i",P,[s(p,null,{default:l(()=>[s(x)]),_:1})]))]),_:1},8,["action","on-change","on-success"])]),_:1}),s(c,{"label-width":"100px"},{default:l(()=>[s(h,{type:"success",onClick:r.submitForm,size:"large"},{default:l(()=>[B]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])]),_:1})}const N=V(R,[["render",I],["__scopeId","data-v-255ef0b4"]]);export{N as default};
