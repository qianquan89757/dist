(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87a5c5ea"],{"065d":function(e,t,r){"use strict";r("3487")},3487:function(e,t,r){},"962b":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("div",{staticClass:"login-logo"},[s("img",{attrs:{src:r("cfe5")}}),s("span",{staticStyle:{"letter-spacing":"1px"}},[e._v("车载视频服务平台（出租车）")]),s("span",{staticStyle:{"font-size":"16px","letter-spacing":"1px"}},[e._v("（"+e._s(e.versiondata.vmain)+" "+e._s(e.versiondata.vnum)+"）")])]),s("div",{staticClass:"login-form"},[s("div",{staticClass:"login-form-bg"}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.loginShow,expression:"loginShow"}],staticClass:"login-form-input"},[s("h5",[e._v("用户登录")]),s("div",{staticClass:"login-form-login"},[s("el-form",[s("el-form-item",[s("el-input",{attrs:{"prefix-icon":"el-icon-user",placeholder:"请输入账号",autocomplete:"off",type:"text",id:"username"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin.apply(null,arguments)}},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),s("el-form-item",[s("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入密码",type:"password"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin.apply(null,arguments)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),s("div",{staticClass:"item-row"},[s("el-checkbox",[e._v("记住密码")]),s("span",{staticClass:"jizhumima",on:{click:function(t){return e.handleForgetClick()}}},[e._v("忘记密码?")])],1),s("div",{staticClass:"item-row login-btn",on:{click:e.handleLogin}},[s("el-button",{attrs:{type:"primary"}},[e._v("登  录")])],1)],1)],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.registerShow,expression:"registerShow"}],staticClass:"register"},[s("div",{staticClass:"title-icon"},[s("i",{staticClass:"el-icon-close",on:{click:e.handleEndClick}})]),e._m(0),s("el-form",{ref:"regForm",attrs:{model:e.regForm,rules:e.regRules}},[s("el-form-item",{staticStyle:{margin:"10px",padding:"0px"},attrs:{prop:"phone"}},[s("el-input",{attrs:{placeholder:"请输入手机号",maxlength:11},model:{value:e.regForm.phone,callback:function(t){e.$set(e.regForm,"phone",t)},expression:"regForm.phone"}})],1),s("el-form-item",{staticStyle:{margin:"10px",padding:"0px"},attrs:{prop:"code"}},[s("div",{staticClass:"login-input-num"},[s("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入验证码",maxlength:4},model:{value:e.regForm.code,callback:function(t){e.$set(e.regForm,"code",t)},expression:"regForm.code"}}),s("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.regCode.sended,expression:"!regCode.sended"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleSendCode("regForm")}}},[e._v("获取验证码")]),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.regCode.sended,expression:"regCode.sended"}],attrs:{type:"primary",size:"mini"}},[e._v("已发送（"+e._s(e.regCode.timer)+"）")])],1)]),s("el-form-item",{staticStyle:{margin:"10px",padding:"0px"},attrs:{prop:"company"}},[s("el-input",{attrs:{placeholder:"企业名称",maxlength:18},model:{value:e.regForm.company,callback:function(t){e.$set(e.regForm,"company",t)},expression:"regForm.company"}})],1),s("el-form-item",{staticStyle:{margin:"10px",padding:"0px"},attrs:{prop:"username"}},[s("el-input",{attrs:{placeholder:"登录账号",maxlength:18},model:{value:e.regForm.username,callback:function(t){e.$set(e.regForm,"username",t)},expression:"regForm.username"}})],1),s("el-form-item",{staticStyle:{margin:"10px",padding:"0px"},attrs:{prop:"password"}},[s("el-input",{attrs:{placeholder:"输入密码",type:"password",size:"small",maxlength:11},model:{value:e.regForm.password,callback:function(t){e.$set(e.regForm,"password",t)},expression:"regForm.password"}})],1),s("el-form-item",{staticStyle:{margin:"10px",padding:"0px"},attrs:{prop:"password2"}},[s("el-input",{attrs:{placeholder:"确认密码",type:"password",size:"small",maxlength:11},model:{value:e.regForm.password2,callback:function(t){e.$set(e.regForm,"password2",t)},expression:"regForm.password2"}})],1),s("el-form-item",{staticStyle:{margin:"10px",padding:"0px"}},[s("el-input",{attrs:{placeholder:"推荐码",maxlength:12},model:{value:e.regForm.tjcode,callback:function(t){e.$set(e.regForm,"tjcode",t)},expression:"regForm.tjcode"}})],1),s("el-form-item",{staticStyle:{margin:"10px",padding:"0px"}},[s("el-checkbox",{staticStyle:{color:"#fff"},model:{value:e.regForm.agree,callback:function(t){e.$set(e.regForm,"agree",t)},expression:"regForm.agree"}},[e._v("我已阅读并同意用户协议和隐私协议")])],1),s("el-form-item",{staticStyle:{margin:"10px",padding:"0px"}},[s("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"small"},on:{click:e.handleRegServer}},[e._v("注  册")])],1)],1)],1),s("Verify",{ref:"verify",attrs:{mode:"pop",captchaType:e.captchaType,imgSize:{width:"330px",height:"155px"}},on:{success:e.codeVerifySuccess}}),e._m(1)],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"title"},[r("h5",[e._v("用户注册")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-position"},[s("div",{staticClass:"code-list"},[s("div",[s("img",{attrs:{src:r("8b6a")}})]),s("div",[e._v("手机查车3.0（iOS）")])]),s("div",{staticClass:"code-list"},[s("div",[s("img",{attrs:{src:r("3a9f")}})]),s("div",{staticStyle:{"margin-bottom":"5px"}},[e._v("手机查车3.0（Android）")]),s("div",[e._v("请使用手机浏览器扫码下载")])])])}],i=(r("8e6e"),r("ac6a"),r("456d"),r("ade3")),a=r("a415"),n=r("5880"),l=r("5d39");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={name:"taxi",components:{Verify:l["a"]},data:function(){var e=this,t=function(t,r,s){""===r?s(new Error("请再次输入密码 ")):r!==e.regForm.password?s(new Error("两次输入密码不一致 ")):s()};return{captchaType:LOGIN_CONFIG.VERIFYTYPE,loginForm:{username:"",password:""},regForm:{username:"",password:"",password2:"",phone:"",code:"",company:"",tjcode:"",agree:!1},regCode:{id:-1,sended:!1,timer:75},regRules:{phone:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[34578]\d{9}$/,message:"目前只支持中国大陆的手机号码"}],code:[{required:!0,message:"验证码不能为空",trigger:"blur"},{pattern:/^\d{4}$/,message:"验证码必须是4位数字"}],username:[{required:!0,message:" 账号不能为空",trigger:"blur"},{pattern:/^[a-zA-z]\w{3,15}$/,message:"账号必须是字母、数字、下划线组成，字母开头，4-16位"}],password:[{required:!0,message:"密码不能为空 ",trigger:"blur"},{pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,message:"密码至少包含 数字和英文，长度6-20"}],password2:[{validator:t,trigger:"blur"}],company:[{required:!0,message:"企业名称不能为空 ",trigger:"blur"},{min:2,max:18,message:"长度在 2 到 18 个字符",trigger:"blur"}]},registerShow:!1,loading:null,loginShow:!0}},created:function(){},mounted:function(){this.versionAction()},computed:{versiondata:function(){return this.$store.state.version.version}},methods:d(d({},Object(n["mapActions"])(["versionAction"])),{},{handelShowClick:function(){var e=this;this.loginShow=!1,this.registerShow=!0,this.regForm={username:"",password:"",password2:"",phone:"",code:"",company:"",tjcode:"",agree:!1},this.$nextTick((function(){e.$refs.regForm.clearValidate()}))},handleEndClick:function(){this.registerShow=!1,this.loginShow=!0},handleForgetClick:function(){this.$router.push({path:"forgetPassword"})},handleSendCode:function(e){var t=this;this.$refs[e].validateField("phone",(function(e){" "!=e&&(t.$mLoading.show(),Object(a["a"])(t.regForm.phone).then((function(e){if(t.$mLoading.close(),"0000"==e.data.code){t.$message.success("验证码已发送"),t.$set(t.regCode,"sended",!0),t.$set(t.regCode,"timer",75),t.regCode.id>0&&clearInterval(t.regCode.id);var r=setInterval(t.handleCodeTimer,1e3);t.$set(t.regCode,"id",r)}else t.$message.warning(e.data.message)})))}))},handleCodeTimer:function(){this.regCode.timer>1?this.$set(this.regCode,"timer",this.regCode.timer-1):(this.$set(this.regCode,"timer",0),this.$set(this.regCode,"sended",!1),clearInterval(this.regCode.id),this.$set(this.regCode,"id",-1))},handleRegServer:function(){var e=this;this.$refs.regForm.validate((function(t){if(!t)return!1;e.regForm.agree?(e.$mLoading.show(),Object(a["b"])(e.regForm).then((function(t){"0000"==t.data.code?e.goLogin(e.regForm.username,e.regForm.password):"1213"==t.data.code?(e.$message.success("注册成功，请登录"),e.registerShow=!1,e.$mLoading.close()):(e.$message.warning(t.data.message),e.$mLoading.close())}))):e.$message.warning("请阅读并同意用户协议和隐私协议！")}))},handleFwqClick:function(){this.$router.push({path:"selectFwq"})},handleLogin:function(e){""!=this.loginForm.username?""!=this.loginForm.password?1==LOGIN_CONFIG.VERIFYCODE?this.$refs.verify.show():this.codeVerifySuccess({captchaVerification:0}):this.$message.warning("请输入密码"):this.$message.warning("请输入用户名")},codeVerifySuccess:function(e){this.goLogin(this.loginForm.username,this.loginForm.password,e.captchaVerification)},goLogin:function(e,t,r){var s=this;this.$store.dispatch("Login",{username:e,password:t,captchaVerification:r,loginForm:"/taxi"}).then((function(e){s.$mLoading.close(),0==e.data.data.servertype?s.$router.push({path:"selectFwq"}):s.$router.push({path:"/page"})})).catch((function(){s.$mLoading.close()}))}})},g=m,p=(r("065d"),r("2877")),u=Object(p["a"])(g,s,o,!1,null,null,null);t["default"]=u.exports}}]);