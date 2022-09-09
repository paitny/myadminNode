import{h as $}from"./moment.9709ab41.js";import{_ as y,o as v,d as f,w as s,r as i,e as a,b as c,h as _}from"./index.89e98c57.js";const C={name:"VideoManger",data(){return{MangerVideo:[]}},methods:{dateFormat:function(e,t){let d=e[t.property];return d==null?"":$(d).format("YYYY-MM-DD HH:mm:ss")},async getVideo(){let{data:e}=await this.$axios({method:"get",url:"/get/video"});if(e.code)return this.$message.error(e.msg);this.MangerVideo=e.data},async update(e,t){let{data:d}=await this.$axios({method:"POST",url:"/adminServer/video/update",data:{id:e,doc:t}});if(d.code)return this.$message.error(d.msg);this.$message.success("\u66F4\u65B0\u6210\u529F"),await this.getVideo()},video_before_upload(e){let t=/(.*)\.(mp4|rmvb|avi|ts|flv|mov|3gb)$/.test(e.name);return t||this.$message.error("\u8BF7\u4E0A\u4F20\u89C6\u9891\u6587\u4EF6"),t},video_upload_success(e,t){if(e.code)return this.$message.error(e.msg);this.update(t,{video:e.url})},videoCover_before_upload(e){const t=/^image\/(jpeg|png)$/.test(e.type),d=e.size/1024/1024<2;return t||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG/PNG \u683C\u5F0F!"),d||this.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),t&&d},videoCover_upload_success(e,t){if(e.code)return this.$message.error(e.msg);this.update(t,{videoCover:e.url})},async deleteVideo(e){let{data:t}=await this.$axios({method:"DELETE",url:"/adminServer/video/delete",data:{id:e}});if(t.code)return this.$message.error(t.msg);this.$message.success("\u89C6\u9891\u5DF2\u5220\u9664\u5B8C\u6210"),await this.getVideo()}},created(){this.getVideo()}},M={style:{"margin-top":"10px"}},x=_("\u66F4\u65B0\u89C6\u9891"),k={class:"videoCover"},L=_("\u91CD\u4F20\u5C01\u9762"),U={style:{"margin-bottom":"50px"}},P=_("\u4FEE\u6539 "),R=_("\u5220\u9664 ");function z(e,t,d,S,m,r){const n=i("el-table-column"),g=i("el-input"),h=i("vue3VideoPlay"),u=i("el-button"),p=i("el-upload"),b=i("el-image"),w=i("el-table"),V=i("el-card");return v(),f(V,null,{default:s(()=>[a(w,{data:m.MangerVideo,border:"",style:{width:"100%",height:"100%"}},{default:s(()=>[(v(),f(n,{prop:"date",label:"\u53D1\u5E03\u65E5\u671F",key:m.MangerVideo.date,formatter:r.dateFormat,align:"center"},null,8,["formatter"])),a(n,{label:"\u6807\u9898"},{default:s(o=>[a(g,{modelValue:o.row.title,"onUpdate:modelValue":l=>o.row.title=l},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(n,{label:"\u91CD\u65B0\u4E0A\u4F20\u89C6\u9891",align:"center",width:"500px"},{default:s(o=>[c("div",null,[a(h,{poster:`${e.baseURL}${o.row.videoCover}`,src:`${e.baseURL}${o.row.video}`,type:"video/mp4",autoPlay:!1},null,8,["poster","src"])]),a(p,{class:"upload-demo",action:`${e.baseURL}/adminServer/video/videoAdd`,"on-success":function(l){r.video_upload_success(l,o.row._id)},"before-upload":r.video_before_upload,limit:1,"with-credentials":!0,"show-file-list":!1},{default:s(()=>[c("div",M,[a(u,{size:"large",type:"success",disabled:""},{default:s(()=>[x]),_:1})])]),_:2},1032,["action","on-success","before-upload"])]),_:1}),a(n,{label:"\u91CD\u65B0\u4E0A\u4F20\u5C01\u9762\u56FE"},{default:s(o=>[c("div",k,[a(b,{style:{width:"150px",height:"100px"},src:`${e.baseURL}${o.row.videoCover}`,"preview-src-list":[`${e.baseURL}${o.row.videoCover}`],"preview-teleported":"true",previewTeleported:""},null,8,["src","preview-src-list"]),a(p,{class:"upload-demo",action:`${e.baseURL}/adminServer/video/videoCover`,"on-success":function(l){r.videoCover_upload_success(l,o.row._id)},"before-upload":r.videoCover_before_upload,limit:1,"with-credentials":!0,"show-file-list":!1},{default:s(()=>[a(u,{size:"large",type:"warning",disabled:""},{default:s(()=>[L]),_:1})]),_:2},1032,["action","on-success","before-upload"])])]),_:1}),a(n,{fixed:"right",label:"\u64CD\u4F5C",width:"150px",align:"center"},{default:s(o=>[c("div",U,[a(u,{type:"primary",onClick:l=>r.update(o.row._id,{title:o.row.title}),size:"large",disabled:""},{default:s(()=>[P]),_:2},1032,["onClick"])]),c("div",null,[a(u,{type:"danger",onClick:l=>r.deleteVideo(o.row._id),size:"large",disabled:""},{default:s(()=>[R]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data"])]),_:1})}const T=y(C,[["render",z],["__scopeId","data-v-92edcb11"]]);export{T as default};
