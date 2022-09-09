import{h as U}from"./moment.9709ab41.js";import{_ as x,o as g,d as w,w as r,r as i,b as _,e as t,h as p}from"./index.02dabc4c.js";const D={name:"ArticleManger",data(){return{musicData:[]}},methods:{dateFormat:function(e,a){let o=e[a.property];return o==null?"":U(o).format("YYYY-MM-DD HH:mm:ss")},async getMusic(){let{data:e}=await this.$axios({method:"get",url:"/get/music"});if(e.code)return this.$message.error(e.msg);this.musicData=e.data},async lrcupdate(e,a){let{data:o}=await this.$axios({method:"POST",url:"/adminServer/music/lrcupdate",data:{id:e,doc:a}});if(o.code)return this.$message.error(o.msg);this.$message.success("\u66F4\u65B0\u6210\u529F"),await this.getMusic()},lrc_before_upload(e){let a=/\.lrc$/.test(e.name);return a||this.$message.error("\u53EA\u80FD\u4E0A\u4F20.lrc\u6587\u4EF6"),a},lrc_upload_success(e,a){if(e.code)return this.$message.error(e.msg);this.lrcupdate(a,{lrc:e.url})},async update(e,a){let{data:o}=await this.$axios({method:"POST",url:"/adminServer/music/update",data:{id:e,doc:a}});if(o.code)return this.$message.error(o.msg);this.$message.success("\u66F4\u65B0\u6210\u529F"),await this.getMusic()},music_before_upload(e){let a=/\.(mp3|m4a)$/.test(e.name);return a||this.$message.error("\u8BF7\u4E0A\u4F20\u97F3\u4E50\u6587\u4EF6"),a},music_upload_success(e,a){if(e.code)return this.$message.error(e.msg);this.update(a,{url:e.url})},cover_before_upload(e){const a=/^image\/(jpeg|png)$/.test(e.type),o=e.size/1024/1024<2;return a||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG/PNG \u683C\u5F0F!"),o||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),a&&o},cover_upload_success(e,a){if(e.code)return this.$message.error(e.msg);this.update(a,{cover:e.url})},async deleteMusic(e){let{data:a}=await this.$axios({method:"DELETE",url:"/adminServer/music/delete",data:{id:e}});if(a.code)return this.$message.error(a.msg);this.$message.success("\u5220\u9664\u5B8C\u6210"),await this.getMusic()}},created(){this.getMusic()}},S={id:"ArticleManger"},k=p("\u66F4\u65B0\u97F3\u4E50"),C=p("\u66F4\u65B0\u6B4C\u8BCD"),L={class:"cover"},E=p("\u91CD\u4F20\u5C01\u9762"),P={class:"buttonSubmit"};function T(e,a,o,z,f,c){const n=i("el-table-column"),d=i("el-input"),b=i("el-progress"),u=i("el-button"),m=i("el-upload"),v=i("el-image"),$=i("Edit"),h=i("el-icon"),M=i("Delete"),y=i("el-table"),V=i("el-card");return g(),w(V,null,{default:r(()=>[_("div",S,[t(y,{data:f.musicData,border:"",style:{width:"100%"}},{default:r(()=>[(g(),w(n,{prop:"date",label:"\u53D1\u5E03\u65E5\u671F",key:f.musicData.date,formatter:c.dateFormat,align:"center"},null,8,["formatter"])),t(n,{label:"\u6B4C\u540D",align:"center"},{default:r(s=>[t(d,{modelValue:s.row.name,"onUpdate:modelValue":l=>s.row.name=l},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(n,{label:"\u6F14\u5531\u8005",align:"center"},{default:r(s=>[t(d,{modelValue:s.row.artist,"onUpdate:modelValue":l=>s.row.artist=l},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(n,{label:"\u4E3B\u9898\u989C\u8272",align:"center"},{default:r(s=>[t(b,{percentage:100,indeterminate:!0,duration:2,color:s.row.theme},null,8,["color"]),t(d,{modelValue:s.row.theme,"onUpdate:modelValue":l=>s.row.theme=l},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(n,{label:"\u66F4\u65B0\u97F3\u4E50",align:"center"},{default:r(s=>[t(m,{class:"upload-demo",action:`${e.baseURL}/adminServer/music/musicAdd`,"on-success":function(l){c.music_upload_success(l,s.row._id)},"before-upload":c.music_before_upload,limit:1,"with-credentials":!0,"show-file-list":!1},{default:r(()=>[t(u,{size:"large",color:"#626aef"},{default:r(()=>[k]),_:1})]),_:2},1032,["action","on-success","before-upload"])]),_:1}),t(n,{label:"\u66F4\u65B0\u6B4C\u8BCD",align:"center"},{default:r(s=>[t(m,{class:"upload-demo",action:`${e.baseURL}/adminServer/music/lrc`,"on-success":function(l){c.lrc_upload_success(l,s.row._id)},"before-upload":c.lrc_before_upload,limit:1,"with-credentials":!0,"show-file-list":!1},{default:r(()=>[t(u,{size:"large",type:"success"},{default:r(()=>[C]),_:1})]),_:2},1032,["action","on-success","before-upload"])]),_:1}),t(n,{label:"\u91CD\u65B0\u4E0A\u4F20\u5C01\u9762\u56FE",align:"center",width:"350px"},{default:r(s=>[_("div",L,[t(v,{style:{width:"200px",height:"150px"},src:`${e.baseURL}${s.row.cover}`,"preview-src-list":[`${e.baseURL}${s.row.cover}`],"preview-teleported":"true",previewTeleported:""},null,8,["src","preview-src-list"]),t(m,{class:"upload-demo",action:"/adminServer/music/cover","on-success":function(l){c.cover_upload_success(l,s.row._id)},"before-upload":c.cover_before_upload,limit:1,"with-credentials":!0,"show-file-list":!1},{default:r(()=>[t(u,{size:"large",type:"warning",style:{margin:"auto 0"}},{default:r(()=>[E]),_:1})]),_:2},1032,["on-success","before-upload"])])]),_:1}),t(n,{label:"\u64CD\u4F5C",align:"center"},{default:r(s=>[_("div",P,[t(u,{type:"primary",onClick:l=>c.update(s.row._id,{name:s.row.name,artist:s.row.artist,theme:s.row.theme})},{default:r(()=>[t(h,null,{default:r(()=>[t($)]),_:1})]),_:2},1032,["onClick"]),t(u,{type:"danger",onClick:l=>c.deleteMusic(s.row._id),circle:""},{default:r(()=>[t(h,null,{default:r(()=>[t(M)]),_:1})]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data"])])]),_:1})}const R=x(D,[["render",T],["__scopeId","data-v-4444bf02"]]);export{R as default};
