import{h as $}from"./moment.9709ab41.js";import{_ as M,o as h,c as g,w as r,r as u,b as f,a as s,f as n}from"./index.82b5f088.js";const y={name:"ArticleManger",data(){return{musicData:[]}},methods:{dateFormat:function(e,t){let o=e[t.property];return o==null?"":$(o).format("YYYY-MM-DD HH:mm:ss")},async getMusic(){let{data:e}=await this.$axios({method:"get",url:"/get/music"});if(e.code)return this.$message.error(e.msg);this.musicData=e.data},async lrcupdate(e,t){let{data:o}=await this.$axios({method:"POST",url:"/adminServer/music/lrcupdate",data:{id:e,doc:t}});if(o.code)return this.$message.error(o.msg);this.$message.success("\u66F4\u65B0\u6210\u529F"),await this.getMusic()},lrc_before_upload(e){let t=/\.lrc$/.test(e.name);return t||this.$message.error("\u53EA\u80FD\u4E0A\u4F20.lrc\u6587\u4EF6"),t},lrc_upload_success(e,t){if(e.code)return this.$message.error(e.msg);this.lrcupdate(t,{lrc:e.url})},async update(e,t){let{data:o}=await this.$axios({method:"POST",url:"/adminServer/music/update",data:{id:e,doc:t}});if(o.code)return this.$message.error(o.msg);this.$message.success("\u66F4\u65B0\u6210\u529F"),await this.getMusic()},music_before_upload(e){let t=/\.(mp3|m4a)$/.test(e.name);return t||this.$message.error("\u8BF7\u4E0A\u4F20\u97F3\u4E50\u6587\u4EF6"),t},music_upload_success(e,t){if(e.code)return this.$message.error(e.msg);this.update(t,{url:e.url})},cover_before_upload(e){const t=/^image\/(jpeg|png)$/.test(e.type),o=e.size/1024/1024<2;return t||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG/PNG \u683C\u5F0F!"),o||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),t&&o},cover_upload_success(e,t){if(e.code)return this.$message.error(e.msg);this.update(t,{cover:e.url})},async deleteMusic(e){let{data:t}=await this.$axios({method:"DELETE",url:"/adminServer/music/delete",data:{id:e}});if(t.code)return this.$message.error(t.msg);this.$message.success("\u5220\u9664\u5B8C\u6210"),await this.getMusic()}},created(){this.getMusic()}},V={id:"ArticleManger"},U=n("\u70B9\u51FB\u66F4\u65B0\u97F3\u4E50\u6587\u4EF6"),x=n("\u70B9\u51FB\u66F4\u65B0\u6B4C\u8BCD"),S={class:"cover"},k=n("\u91CD\u4F20\u5C01\u9762"),D={class:"buttonSubmit"},z=n("\u4FEE\u6539 "),C=n("\u5220\u9664 ");function L(e,t,o,P,p,i){const c=u("el-table-column"),m=u("el-input"),d=u("el-button"),_=u("el-upload"),w=u("el-image"),b=u("el-table"),v=u("el-card");return h(),g(v,null,{default:r(()=>[f("div",V,[s(b,{data:p.musicData,border:"",style:{width:"100%"}},{default:r(()=>[(h(),g(c,{prop:"date",label:"\u53D1\u5E03\u65E5\u671F",key:p.musicData.date,formatter:i.dateFormat,align:"center"},null,8,["formatter"])),s(c,{label:"\u6B4C\u540D"},{default:r(a=>[s(m,{modelValue:a.row.name,"onUpdate:modelValue":l=>a.row.name=l},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),s(c,{label:"\u6F14\u5531\u8005"},{default:r(a=>[s(m,{modelValue:a.row.artist,"onUpdate:modelValue":l=>a.row.artist=l},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),s(c,{label:"\u4E3B\u9898\u989C\u8272"},{default:r(a=>[s(m,{modelValue:a.row.theme,"onUpdate:modelValue":l=>a.row.theme=l},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),s(c,{label:"\u91CD\u65B0\u4E0A\u4F20\u97F3\u4E50\u6587\u4EF6"},{default:r(a=>[s(_,{class:"upload-demo",action:`${e.baseURL}/adminServer/music/musicAdd`,"on-success":function(l){i.music_upload_success(l,a.row._id)},"before-upload":i.music_before_upload,limit:1,"with-credentials":!0,"show-file-list":!1},{default:r(()=>[s(d,{size:"large",type:"success"},{default:r(()=>[U]),_:1})]),_:2},1032,["action","on-success","before-upload"])]),_:1}),s(c,{label:"\u66F4\u65B0\u6B4C\u8BCD"},{default:r(a=>[s(_,{class:"upload-demo",action:`${e.baseURL}/adminServer/music/lrc`,"on-success":function(l){i.lrc_upload_success(l,a.row._id)},"before-upload":i.lrc_before_upload,limit:1,"with-credentials":!0,"show-file-list":!1},{default:r(()=>[s(d,{size:"large",type:"success"},{default:r(()=>[x]),_:1})]),_:2},1032,["action","on-success","before-upload"])]),_:1}),s(c,{label:"\u91CD\u65B0\u4E0A\u4F20\u5C01\u9762\u56FE"},{default:r(a=>[f("div",S,[s(w,{style:{width:"200px",height:"150px"},src:`${e.baseURL}${a.row.cover}`,"preview-src-list":[`${e.baseURL}${a.row.cover}`],"preview-teleported":"true",previewTeleported:""},null,8,["src","preview-src-list"]),s(_,{class:"upload-demo",action:"/adminServer/music/cover","on-success":function(l){i.cover_upload_success(l,a.row._id)},"before-upload":i.cover_before_upload,limit:1,"with-credentials":!0,"show-file-list":!1},{default:r(()=>[s(d,{size:"large",type:"warning",style:{margin:"auto 0"}},{default:r(()=>[k]),_:1})]),_:2},1032,["on-success","before-upload"])])]),_:1}),s(c,{fixed:"right",label:"\u64CD\u4F5C"},{default:r(a=>[f("div",D,[s(d,{type:"primary",onClick:l=>i.update(a.row._id,{name:a.row.name,artist:a.row.artist,theme:a.row.theme}),size:"large"},{default:r(()=>[z]),_:2},1032,["onClick"]),s(d,{type:"danger",onClick:l=>i.deleteMusic(a.row._id),size:"large"},{default:r(()=>[C]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data"])])]),_:1})}const N=M(y,[["render",L],["__scopeId","data-v-9a78406b"]]);export{N as default};
