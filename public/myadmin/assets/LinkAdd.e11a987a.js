import{_ as p,o as _,d as c,w as r,r as m,b as V,e as o,h}from"./index.fb820494.js";const b={name:"LinkAdd",data(){return{form:{name:"",home:"",logo:"",des:""},rules:{name:[{required:!0}],des:[{required:!0}],home:[{required:!0,type:"url"}],logo:[{required:!0,type:"url"}]}}},methods:{submit(){this.$refs.form.validate(async d=>{if(d){let{data:e}=await this.$axios({method:"POST",url:"/adminServer/link/add",data:this.form});if(e.code)return this.$message.error(e.msg);this.$message.success("\u6DFB\u52A0\u6210\u529F"),this.$refs.form.resetFields(),await this.getLinkData()}else return!1})}}},g={id:"LinkAdd"},k=h("\u786E\u8BA4\u6DFB\u52A0");function x(d,e,y,q,l,u){const n=m("el-input"),s=m("el-form-item"),a=m("el-button"),i=m("el-form"),f=m("el-card");return _(),c(f,null,{default:r(()=>[V("div",g,[o(i,{model:l.form,rules:l.rules,ref:"form","status-icon":"","label-position":"top"},{default:r(()=>[o(s,{label:"\u540D\u79F0",prop:"name"},{default:r(()=>[o(n,{modelValue:l.form.name,"onUpdate:modelValue":e[0]||(e[0]=t=>l.form.name=t)},null,8,["modelValue"])]),_:1}),o(s,{label:"\u9996\u9875",prop:"home"},{default:r(()=>[o(n,{modelValue:l.form.home,"onUpdate:modelValue":e[1]||(e[1]=t=>l.form.home=t)},null,8,["modelValue"])]),_:1}),o(s,{label:"\u56FE\u6807",prop:"logo"},{default:r(()=>[o(n,{modelValue:l.form.logo,"onUpdate:modelValue":e[2]||(e[2]=t=>l.form.logo=t)},null,8,["modelValue"])]),_:1}),o(s,{label:"\u63CF\u8FF0",prop:"des"},{default:r(()=>[o(n,{modelValue:l.form.des,"onUpdate:modelValue":e[3]||(e[3]=t=>l.form.des=t)},null,8,["modelValue"])]),_:1}),o(s,null,{default:r(()=>[o(a,{type:"primary",size:"large",onClick:u.submit},{default:r(()=>[k]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])]),_:1})}const w=p(b,[["render",x]]);export{w as default};
