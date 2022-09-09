import{h as k}from"./moment.9709ab41.js";import{_ as g,r as s,o as p,c as m,e as r,w as a,F as L,f as W,d as h,b as n,E as H,h as f,p as I,a as T}from"./index.cf88ebec.js";const U={name:"swiper",data(){return{urlList:[{id:0},{id:1},{id:2},{id:3},{id:4}],bannerHeight:0,screenWidth:0}},methods:{async getSwiper(){let{data:e}=await this.$axios({method:"GET",url:"/get/swiper"});if(e.code)return this.$message.error(e.msg);this.urlList=e.data}},mounted(){this.getSwiper(),this.screenWidth=window.innerWidth,this.bannerHeight=350/2200*this.screenWidth,window.onresize=()=>{this.screenWidth=window.innerWidth,this.bannerHeight=350/2200*this.screenWidth}}};function j(e,t,i,S,o,d){const u=s("el-carousel-item"),l=s("el-carousel");return p(),m("div",null,[r(l,{height:o.bannerHeight+"px",type:"card"},{default:a(()=>[(p(!0),m(L,null,W(o.urlList,_=>(p(),h(u,{key:_.id},{default:a(()=>[n("div",{class:"img",style:H({backgroundImage:`url(${e.baseURL}${_.swiper})`}),alt:"\u6B63\u5728\u52A0\u8F7D\u4E2D"},null,4)]),_:2},1024))),128))]),_:1},8,["height"])])}const E=g(U,[["render",j],["__scopeId","data-v-3b8d475f"]]);const F={name:"SwiperManger",data(){return{MangerSwiper:[]}},components:{Swiper:E},methods:{dateFormat:function(e,t){let i=e[t.property];return i==null?"":k(i).format("YYYY-MM-DD HH:mm:ss")},async getMangerSwiper(){let{data:e}=await this.$axios({method:"GET",url:"/get/swiper"});this.MangerSwiper=e.data},async swiperUpdate(e,t){let{data:i}=await this.$axios({method:"POST",url:"/adminServer/swiper/update",data:{id:e,doc:t}});if(i.code)return this.$message.error(i.msg);this.$message.success("\u66F4\u65B0\u6210\u529F"),await this.getMangerSwiper()},swiper_before_upload(e,t){/^(\s|\S)+(jpg|png|JPG|PNG)+$/.test(e.name)||(this.$message.error("\u53EA\u80FD\u4E0A\u4F20.png \u6216. jpj\u6587\u4EF6"),t.pop())},swiper_upload_success(e,t){if(e.code)return this.$message.error(e.msg);this.swiperUpdate(t,{swiper:e.url})},async deleteSwiper(e){let{data:t}=await this.$axios({method:"POST",url:"/adminServer/swiper/delete",data:{id:e}});if(t.code)return this.$message.error(t.msg);this.$message.success("\u5220\u9664\u6210\u529F"),await this.getMangerSwiper()}},created(){this.getMangerSwiper()}},B=e=>(I("data-v-c6d29e1f"),e=e(),T(),e),C={class:"swiperExhibition"},G={class:"swiper"},N={class:"el-icon-upload"},P=B(()=>n("div",{class:"el-upload__text"},[f("\u5C06.jpj\u6216\u8005png\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216"),n("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1)),R=f("\u5220\u9664 ");function Y(e,t,i,S,o,d){const u=s("Swiper"),l=s("el-table-column"),_=s("el-image"),b=s("upload-filled"),$=s("el-icon"),v=s("el-upload"),y=s("el-button"),x=s("el-table"),M=s("el-card");return p(),h(M,null,{default:a(()=>[n("div",C,[r(u)]),r(x,{data:o.MangerSwiper,border:"",style:{width:"100%",height:"100%"}},{default:a(()=>[(p(),h(l,{prop:"date",label:"\u53D1\u5E03\u65E5\u671F",key:o.MangerSwiper.date,formatter:d.dateFormat,align:"center"},null,8,["formatter"])),r(l,{label:"\u91CD\u65B0\u4E0A\u4F20\u8F6E\u64AD\u56FE",width:"1000",align:"center"},{default:a(c=>[n("div",G,[r(_,{style:{width:"450px",height:"250px"},src:`${e.baseURL}${c.row.swiper}`,"preview-src-list":[`${e.baseURL}${c.row.swiper}`],"preview-teleported":"true",previewTeleported:""},null,8,["src","preview-src-list"]),r(v,{class:"upload-demo",drag:"",action:`${e.baseURL}/adminServer/swiper/swiperAdd`,"on-change":d.swiper_before_upload,limit:1,ref:"swiperForm","on-success":function(w){d.swiper_upload_success(w,c.row._id)},"with-credentials":!0},{default:a(()=>[n("i",N,[r($,{class:"el-icon--upload"},{default:a(()=>[r(b)]),_:1})]),P]),_:2},1032,["action","on-change","on-success"])])]),_:1}),r(l,{fixed:"right",label:"\u64CD\u4F5C",align:"center"},{default:a(c=>[r(y,{style:{width:"200px",height:"100px",margin:"0 auto"},type:"danger",onClick:w=>d.deleteSwiper(c.row._id),size:"large",disabled:""},{default:a(()=>[R]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})}const D=g(F,[["render",Y],["__scopeId","data-v-c6d29e1f"]]);export{D as default};
