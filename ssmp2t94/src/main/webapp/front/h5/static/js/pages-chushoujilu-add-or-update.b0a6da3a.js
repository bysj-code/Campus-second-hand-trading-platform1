(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chushoujilu-add-or-update"],{"2ead":function(i,r,e){var n=e("24fb");r=n(!1),r.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-13b82e4c]{padding:%?20?%}.content[data-v-13b82e4c]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20210329/bac17293dec74a61b63867efe3bb6be6.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-13b82e4c]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-13b82e4c]{width:%?180?%}.avator[data-v-13b82e4c]{width:%?150?%;height:%?60?%}.right-input[data-v-13b82e4c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-13b82e4c]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-13b82e4c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-13b82e4c]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-13b82e4c]{border:0}.cu-form-group uni-input[data-v-13b82e4c]{padding:0 %?30?%}.uni-input[data-v-13b82e4c]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-13b82e4c]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-13b82e4c]::after{line-height:%?80?%}.select .uni-input[data-v-13b82e4c]{line-height:%?80?%}.input .right-input[data-v-13b82e4c]{line-height:%?80?%}',""]),i.exports=r},"5b98":function(i,r,e){"use strict";var n=e("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,e("ac6a"),e("96cf");var t=n(e("3b8d")),a=n(e("e2b1")),o={data:function(){return{ruleForm:{chushoudanhao:this.getUUID(),shangpinbianhao:"",shangpinmingcheng:"",shangpinleibie:"",tupian:"",shangpinguige:"",shangpinpinpai:"",xinjiuchengdu:"",chushoudanjia:"",chushoushuliang:"",chushouzongjia:"",chushoushijian:"",yonghuming:"",xingming:"",shouji:"",beizhu:"",userid:""},shangpinbianhaoOptions:[],shangpinbianhaoIndex:0,shangpinleibieOptions:[],shangpinleibieIndex:0,chushoudanjiaOptions:[],chushoudanjiaIndex:0,yonghumingOptions:[],yonghumingIndex:0,user:{},ro:{chushoudanhao:!1,shangpinbianhao:!1,shangpinmingcheng:!1,shangpinleibie:!1,tupian:!1,shangpinguige:!1,shangpinpinpai:!1,xinjiuchengdu:!1,chushoudanjia:!1,chushoushuliang:!1,chushouzongjia:!1,chushoushijian:!1,yonghuming:!1,xingming:!1,shouji:!1,beizhu:!1,userid:!1}}},components:{wPicker:a.default},computed:{chushouzongjia:{get:function(){return 1*this.ruleForm.chushoudanjia*this.ruleForm.chushoushuliang}}},onLoad:function(){var i=(0,t.default)(regeneratorRuntime.mark((function i(r){var e,n,t,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e=uni.getStorageSync("nowTable"),i.next=3,this.$api.session(e);case 3:return n=i.sent,this.user=n.data,i.next=7,this.$api.option("xinxifabu","chushoubianhao",{});case 7:return n=i.sent,this.shangpinbianhaoOptions=n.data,i.next=11,this.$api.option("shangpinfenlei","shangpinleibie",{});case 11:return n=i.sent,this.shangpinleibieOptions=n.data,i.next=15,this.$api.option("xinxifabu","chushoujiage",{});case 15:return n=i.sent,this.chushoudanjiaOptions=n.data,i.next=19,this.$api.option("xinxifabu","yonghuming",{});case 19:if(n=i.sent,this.yonghumingOptions=n.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){i.next=29;break}return this.ruleForm.id=r.id,i.next=27,this.$api.info("chushoujilu",this.ruleForm.id);case 27:n=i.sent,this.ruleForm=n.data;case 29:if(!r.cross){i.next=104;break}t=uni.getStorageSync("crossObj"),i.t0=regeneratorRuntime.keys(t);case 32:if((i.t1=i.t0()).done){i.next=104;break}if(a=i.t1.value,"chushoudanhao"!=a){i.next=38;break}return this.ruleForm.chushoudanhao=t[a],this.ro.chushoudanhao=!0,i.abrupt("continue",32);case 38:if("shangpinbianhao"!=a){i.next=42;break}return this.ruleForm.shangpinbianhao=t[a],this.ro.shangpinbianhao=!0,i.abrupt("continue",32);case 42:if("shangpinmingcheng"!=a){i.next=46;break}return this.ruleForm.shangpinmingcheng=t[a],this.ro.shangpinmingcheng=!0,i.abrupt("continue",32);case 46:if("shangpinleibie"!=a){i.next=50;break}return this.ruleForm.shangpinleibie=t[a],this.ro.shangpinleibie=!0,i.abrupt("continue",32);case 50:if("tupian"!=a){i.next=54;break}return this.ruleForm.tupian=t[a],this.ro.tupian=!0,i.abrupt("continue",32);case 54:if("shangpinguige"!=a){i.next=58;break}return this.ruleForm.shangpinguige=t[a],this.ro.shangpinguige=!0,i.abrupt("continue",32);case 58:if("shangpinpinpai"!=a){i.next=62;break}return this.ruleForm.shangpinpinpai=t[a],this.ro.shangpinpinpai=!0,i.abrupt("continue",32);case 62:if("xinjiuchengdu"!=a){i.next=66;break}return this.ruleForm.xinjiuchengdu=t[a],this.ro.xinjiuchengdu=!0,i.abrupt("continue",32);case 66:if("chushoudanjia"!=a){i.next=70;break}return this.ruleForm.chushoudanjia=t[a],this.ro.chushoudanjia=!0,i.abrupt("continue",32);case 70:if("chushoushuliang"!=a){i.next=74;break}return this.ruleForm.chushoushuliang=t[a],this.ro.chushoushuliang=!0,i.abrupt("continue",32);case 74:if("chushouzongjia"!=a){i.next=78;break}return this.ruleForm.chushouzongjia=t[a],this.ro.chushouzongjia=!0,i.abrupt("continue",32);case 78:if("chushoushijian"!=a){i.next=82;break}return this.ruleForm.chushoushijian=t[a],this.ro.chushoushijian=!0,i.abrupt("continue",32);case 82:if("yonghuming"!=a){i.next=86;break}return this.ruleForm.yonghuming=t[a],this.ro.yonghuming=!0,i.abrupt("continue",32);case 86:if("xingming"!=a){i.next=90;break}return this.ruleForm.xingming=t[a],this.ro.xingming=!0,i.abrupt("continue",32);case 90:if("shouji"!=a){i.next=94;break}return this.ruleForm.shouji=t[a],this.ro.shouji=!0,i.abrupt("continue",32);case 94:if("beizhu"!=a){i.next=98;break}return this.ruleForm.beizhu=t[a],this.ro.beizhu=!0,i.abrupt("continue",32);case 98:if("userid"!=a){i.next=102;break}return this.ruleForm.userid=t[a],this.ro.userid=!0,i.abrupt("continue",32);case 102:i.next=32;break;case 104:this.styleChange();case 105:case"end":return i.stop()}}),i,this)})));function r(r){return i.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shangpinbianhaoChange:function(){var i=(0,t.default)(regeneratorRuntime.mark((function i(r){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.shangpinbianhaoIndex=r.target.value,this.ruleForm.shangpinbianhao=this.shangpinbianhaoOptions[this.shangpinbianhaoIndex],i.next=4,this.$api.follow("xinxifabu","chushoubianhao",{columnValue:this.ruleForm.shangpinbianhao});case 4:e=i.sent,e.data.shangpinmingcheng&&(this.ruleForm.shangpinmingcheng=e.data.shangpinmingcheng),e.data.shangpinguige&&(this.ruleForm.shangpinguige=e.data.shangpinguige),e.data.shangpinpinpai&&(this.ruleForm.shangpinpinpai=e.data.shangpinpinpai),e.data.xinjiuchengdu&&(this.ruleForm.xinjiuchengdu=e.data.xinjiuchengdu),e.data.chushoushuliang&&(this.ruleForm.chushoushuliang=e.data.chushoushuliang),e.data.xingming&&(this.ruleForm.xingming=e.data.xingming),e.data.shouji&&(this.ruleForm.shouji=e.data.shouji);case 12:case"end":return i.stop()}}),i,this)})));function r(r){return i.apply(this,arguments)}return r}(),yonghumingChange:function(){var i=(0,t.default)(regeneratorRuntime.mark((function i(r){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.yonghumingIndex=r.target.value,this.ruleForm.yonghuming=this.yonghumingOptions[this.yonghumingIndex],i.next=4,this.$api.follow("xinxifabu","yonghuming",{columnValue:this.ruleForm.yonghuming});case 4:e=i.sent,e.data.shangpinmingcheng&&(this.ruleForm.shangpinmingcheng=e.data.shangpinmingcheng),e.data.shangpinguige&&(this.ruleForm.shangpinguige=e.data.shangpinguige),e.data.shangpinpinpai&&(this.ruleForm.shangpinpinpai=e.data.shangpinpinpai),e.data.xinjiuchengdu&&(this.ruleForm.xinjiuchengdu=e.data.xinjiuchengdu),e.data.chushoushuliang&&(this.ruleForm.chushoushuliang=e.data.chushoushuliang),e.data.xingming&&(this.ruleForm.xingming=e.data.xingming),e.data.shouji&&(this.ruleForm.shouji=e.data.shouji);case 12:case"end":return i.stop()}}),i,this)})));function r(r){return i.apply(this,arguments)}return r}(),chushoushijianChange:function(i){this.ruleForm.chushoushijian=i.target.value,this.$forceUpdate()},shangpinleibieChange:function(i){this.shangpinleibieIndex=i.target.value,this.ruleForm.shangpinleibie=this.shangpinleibieOptions[this.shangpinleibieIndex]},chushoudanjiaChange:function(i){this.chushoudanjiaIndex=i.target.value,this.ruleForm.chushoudanjia=this.chushoudanjiaOptions[this.chushoudanjiaIndex]},tupianTap:function(){var i=this;this.$api.upload((function(r){i.ruleForm.tupian=i.$base.url+"upload/"+r.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=(0,t.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(this.ruleForm.chushouzongjia=this.chushouzongjia,this.ruleForm.chushoudanhao){i.next=4;break}return this.$utils.msg("出售单号不能为空"),i.abrupt("return");case 4:if(this.ruleForm.shangpinbianhao){i.next=7;break}return this.$utils.msg("商品编号不能为空"),i.abrupt("return");case 7:if(!this.ruleForm.chushoudanjia||this.$validate.isIntNumer(this.ruleForm.chushoudanjia)){i.next=10;break}return this.$utils.msg("出售单价应输入整数"),i.abrupt("return");case 10:if(!this.ruleForm.chushoushuliang||this.$validate.isIntNumer(this.ruleForm.chushoushuliang)){i.next=13;break}return this.$utils.msg("出售数量应输入整数"),i.abrupt("return");case 13:if(!this.ruleForm.chushouzongjia||this.$validate.isIntNumer(this.ruleForm.chushouzongjia)){i.next=16;break}return this.$utils.msg("出售总价应输入整数"),i.abrupt("return");case 16:if(!this.ruleForm.id){i.next=21;break}return i.next=19,this.$api.update("chushoujilu",this.ruleForm);case 19:i.next=23;break;case 21:return i.next=23,this.$api.add("chushoujilu",this.ruleForm);case 23:this.$utils.msgBack("提交成功");case 24:case"end":return i.stop()}}),i,this)})));function r(){return i.apply(this,arguments)}return r}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var r=new Date,e=r.getFullYear(),n=r.getMonth()+1,t=r.getDate();return"start"===i?e-=60:"end"===i&&(e+=2),n=n>9?n:"0"+n,t=t>9?t:"0"+t,"".concat(e,"-").concat(n,"-").concat(t)},toggleTab:function(i){this.$refs[i].show()}}};r.default=o},"70fa":function(i,r,e){"use strict";var n=e("92d1"),t=e.n(n);t.a},"92d1":function(i,r,e){var n=e("2ead");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var t=e("4f06").default;t("aaba850a",n,!0,{sourceMap:!1,shadowMode:!1})},c4ed:function(i,r,e){"use strict";var n,t=function(){var i=this,r=i.$createElement,e=i._self._c||r;return e("v-uni-view",{staticClass:"content"},[e("v-uni-form",{staticClass:"app-update-pv"},[e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 ",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("出售单号")]),e("v-uni-view",{staticClass:"right-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"}},[i._v(i._s(i.ruleForm.chushoudanhao))])],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("商品编号")]),e("v-uni-picker",{attrs:{value:i.shangpinbianhaoIndex,range:i.shangpinbianhaoOptions},on:{change:function(r){arguments[0]=r=i.$handleEvent(r),i.shangpinbianhaoChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"}},[i._v(i._s(i.shangpinbianhaoOptions[i.shangpinbianhaoIndex]))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 ",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("商品名称")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:i.ro.shangpinmingcheng,placeholder:"商品名称"},model:{value:i.ruleForm.shangpinmingcheng,callback:function(r){i.$set(i.ruleForm,"shangpinmingcheng",r)},expression:"ruleForm.shangpinmingcheng"}})],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("商品类别")]),e("v-uni-picker",{attrs:{value:i.shangpinleibieIndex,range:i.shangpinleibieOptions},on:{change:function(r){arguments[0]=r=i.$handleEvent(r),i.shangpinleibieChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"}},[i._v(i._s(i.ruleForm.shangpinleibie?i.ruleForm.shangpinleibie:"请选择商品类别"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",class:"left"==i.right?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0.1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"160rpx"},on:{click:function(r){arguments[0]=r=i.$handleEvent(r),i.tupianTap.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 51, 51, 1)",textAlign:"center"}},[i._v("图片")]),e("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"right"}},[i.ruleForm.tupian?e("v-uni-image",{staticClass:"avator",style:{width:"120rpx",boxShadow:"0 0 8rpx rgba(0,0,0,.3)",borderRadius:"40rpx",textAlign:"right",height:"120rpx"},attrs:{src:i.ruleForm.tupian,mode:"aspectFill"}}):e("v-uni-image",{staticClass:"avator",style:{width:"120rpx",boxShadow:"0 0 8rpx rgba(0,0,0,.3)",borderRadius:"40rpx",textAlign:"right",height:"120rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 ",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("商品规格")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:i.ro.shangpinguige,placeholder:"商品规格"},model:{value:i.ruleForm.shangpinguige,callback:function(r){i.$set(i.ruleForm,"shangpinguige",r)},expression:"ruleForm.shangpinguige"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 ",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("商品品牌")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:i.ro.shangpinpinpai,placeholder:"商品品牌"},model:{value:i.ruleForm.shangpinpinpai,callback:function(r){i.$set(i.ruleForm,"shangpinpinpai",r)},expression:"ruleForm.shangpinpinpai"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 ",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("新旧程度")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:i.ro.xinjiuchengdu,placeholder:"新旧程度"},model:{value:i.ruleForm.xinjiuchengdu,callback:function(r){i.$set(i.ruleForm,"xinjiuchengdu",r)},expression:"ruleForm.xinjiuchengdu"}})],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("出售单价")]),e("v-uni-picker",{attrs:{value:i.chushoudanjiaIndex,range:i.chushoudanjiaOptions},on:{change:function(r){arguments[0]=r=i.$handleEvent(r),i.chushoudanjiaChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"}},[i._v(i._s(i.ruleForm.chushoudanjia?i.ruleForm.chushoudanjia:"请选择出售单价"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 ",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("出售数量")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:i.ro.chushoushuliang,placeholder:"出售数量"},model:{value:i.ruleForm.chushoushuliang,callback:function(r){i.$set(i.ruleForm,"chushoushuliang",r)},expression:"ruleForm.chushoushuliang"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 ",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("出售总价")]),e("v-uni-view",{staticClass:"right-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"}},[i._v(i._s(i.chushouzongjia))])],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("出售时间")]),e("v-uni-picker",{attrs:{mode:"date",value:i.ruleForm.chushoushijian},on:{change:function(r){arguments[0]=r=i.$handleEvent(r),i.chushoushijianChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"}},[i._v(i._s(i.ruleForm.chushoushijian?i.ruleForm.chushoushijian:"请选择出售时间"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("用户名")]),e("v-uni-picker",{attrs:{value:i.yonghumingIndex,range:i.yonghumingOptions},on:{change:function(r){arguments[0]=r=i.$handleEvent(r),i.yonghumingChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"}},[i._v(i._s(i.yonghumingOptions[i.yonghumingIndex]))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 ",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("姓名")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:i.ro.xingming,placeholder:"姓名"},model:{value:i.ruleForm.xingming,callback:function(r){i.$set(i.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 ",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("手机")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:i.ro.shouji,placeholder:"手机"},model:{value:i.ruleForm.shouji,callback:function(r){i.$set(i.ruleForm,"shouji",r)},expression:"ruleForm.shouji"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(1, 157, 214, 0)",borderColor:"rgba(245, 245, 245, 1)",margin:"0 0 0 0",borderWidth:"0",borderStyle:"solid",height:"308rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(68, 68, 68, 1)",textAlign:"center"}},[i._v("备注")]),e("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"0",color:"rgba(68, 68, 68, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"备注"},model:{value:i.ruleForm.beizhu,callback:function(r){i.$set(i.ruleForm,"beizhu",r)},expression:"ruleForm.beizhu"}})],1),e("v-uni-view",{staticClass:"btn"},[e("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(113, 186, 0, 1)",borderColor:"rgba(68, 68, 68, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"90%",fontSize:"32rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=i.$handleEvent(r),i.onSubmitTap.apply(void 0,arguments)}}},[i._v("提交")])],1)],1)],1)},a=[];e.d(r,"b",(function(){return t})),e.d(r,"c",(function(){return a})),e.d(r,"a",(function(){return n}))},d25c:function(i,r,e){"use strict";e.r(r);var n=e("5b98"),t=e.n(n);for(var a in n)"default"!==a&&function(i){e.d(r,i,(function(){return n[i]}))}(a);r["default"]=t.a},ec45:function(i,r,e){"use strict";e.r(r);var n=e("c4ed"),t=e("d25c");for(var a in t)"default"!==a&&function(i){e.d(r,i,(function(){return t[i]}))}(a);e("70fa");var o,s=e("f0c5"),u=Object(s["a"])(t["default"],n["b"],n["c"],!1,null,"13b82e4c",null,!1,n["a"],o);r["default"]=u.exports}}]);