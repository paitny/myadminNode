import{_ as h,o as w,d as g,w as s,r as o,b as a,e as t,h as d,p as S,a as b}from"./index.73da3f84.js";const v={name:"SwiperAdd",data(){return{form:{swiper:""}}},methods:{async submit(){let{data:e}=await this.$axios({method:"POST",url:"/adminServer/swiper/add",data:this.form});if(e.code)return this.$message.error(e.msg);await this.$router.push("/swiperMg/swiperManage")},fileChange(e,i){e.status==="ready"&&(/^(\s|\S)+(jpg|png|JPG|PNG)+$/.test(e.name)||(this.$message.error("\u53EA\u80FD\u4E0A\u4F20.png \u6216. jpj\u6587\u4EF6"),i.pop()))},submitSwiper(){this.$refs.swiperForm.submit()},swiper_upload_success(e){if(e.code)return this.$message.error("\u4E0A\u4F20\u8F6E\u64AD\u56FE\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540E\u7AEF\u62A5\u9519");this.form.swiper=e.url,this.submit()}}},x=e=>(S("data-v-8cf525f9"),e=e(),b(),e),$={class:"swiperAdd"},y={class:"swiperPhoto"},C={class:"el-icon-upload"},j=x(()=>a("div",{class:"el-upload__text"},[d("\u5C06.jpj\u6216\u8005png\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216"),a("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1)),A=d("\u786E\u8BA4\u4E0A\u4F20");function k(e,i,I,N,l,r){const n=o("upload-filled"),p=o("el-icon"),_=o("el-upload"),c=o("el-form-item"),u=o("el-button"),m=o("el-form"),f=o("el-card");return w(),g(f,null,{default:s(()=>[a("div",$,[a("div",y,[t(m,{model:l.form},{default:s(()=>[t(c,{label:"\u8F6E\u64AD\u56FE\u4E0A\u4F20\uFF1A","label-width":"150px"},{default:s(()=>[t(_,{class:"upload-demo",drag:"",action:`${e.baseURL}/adminServer/swiper/swiperAdd`,"auto-upload":!1,"on-change":r.fileChange,limit:1,ref:"swiperForm","on-success":r.swiper_upload_success,"with-credentials":!0},{default:s(()=>[a("i",C,[t(p,{class:"el-icon--upload"},{default:s(()=>[t(n)]),_:1})]),j]),_:1},8,["action","on-change","on-success"])]),_:1}),t(c,null,{default:s(()=>[t(u,{type:"primary",onClick:r.submitSwiper,size:"large",style:{margin:"50px 16%"}},{default:s(()=>[A]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])])]),_:1})}const B=h(v,[["render",k],["__scopeId","data-v-8cf525f9"]]);export{B as default};
