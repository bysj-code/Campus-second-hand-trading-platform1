(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chushoujilu/add-or-update"],{"0e4c":function(n,e,i){"use strict";var a=i("a746"),u=i.n(a);u.a},"2f53":function(n,e,i){"use strict";var a;i.d(e,"b",(function(){return u})),i.d(e,"c",(function(){return t})),i.d(e,"a",(function(){return a}));var u=function(){var n=this,e=n.$createElement;n._self._c},t=[]},"3be1":function(n,e,i){"use strict";i.r(e);var a=i("2f53"),u=i("569f");for(var t in u)"default"!==t&&function(n){i.d(e,n,(function(){return u[n]}))}(t);i("0e4c");var r,o=i("f0c5"),h=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"7d23c856",null,!1,a["a"],r);e["default"]=h.exports},"569f":function(n,e,i){"use strict";i.r(e);var a=i("fea8"),u=i.n(a);for(var t in a)"default"!==t&&function(n){i.d(e,n,(function(){return a[n]}))}(t);e["default"]=u.a},a746:function(n,e,i){},af62:function(n,e,i){"use strict";(function(n){i("8915");a(i("66fd"));var e=a(i("3be1"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},fea8:function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(i("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function t(n,e,i,a,u,t,r){try{var o=n[t](r),h=o.value}catch(s){return void i(s)}o.done?e(h):Promise.resolve(h).then(a,u)}function r(n){return function(){var e=this,i=arguments;return new Promise((function(a,u){var r=n.apply(e,i);function o(n){t(r,a,u,o,h,"next",n)}function h(n){t(r,a,u,o,h,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("e1ae"))}.bind(null,i)).catch(i.oe)},h={data:function(){return{ruleForm:{chushoudanhao:this.getUUID(),shangpinbianhao:"",shangpinmingcheng:"",shangpinleibie:"",tupian:"",shangpinguige:"",shangpinpinpai:"",xinjiuchengdu:"",chushoudanjia:"",chushoushuliang:"",chushouzongjia:"",chushoushijian:"",yonghuming:"",xingming:"",shouji:"",beizhu:"",userid:""},shangpinbianhaoOptions:[],shangpinbianhaoIndex:0,shangpinleibieOptions:[],shangpinleibieIndex:0,chushoudanjiaOptions:[],chushoudanjiaIndex:0,yonghumingOptions:[],yonghumingIndex:0,user:{},ro:{chushoudanhao:!1,shangpinbianhao:!1,shangpinmingcheng:!1,shangpinleibie:!1,tupian:!1,shangpinguige:!1,shangpinpinpai:!1,xinjiuchengdu:!1,chushoudanjia:!1,chushoushuliang:!1,chushouzongjia:!1,chushoushijian:!1,yonghuming:!1,xingming:!1,shouji:!1,beizhu:!1,userid:!1}}},components:{wPicker:o},computed:{chushouzongjia:{get:function(){return 1*this.ruleForm.chushoudanjia*this.ruleForm.chushoushuliang}}},onLoad:function(e){var i=this;return r(a.default.mark((function u(){var t,r,o,h;return a.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return t=n.getStorageSync("nowTable"),u.next=3,i.$api.session(t);case 3:return r=u.sent,i.user=r.data,u.next=7,i.$api.option("xinxifabu","chushoubianhao",{});case 7:return r=u.sent,i.shangpinbianhaoOptions=r.data,u.next=11,i.$api.option("shangpinfenlei","shangpinleibie",{});case 11:return r=u.sent,i.shangpinleibieOptions=r.data,u.next=15,i.$api.option("xinxifabu","chushoujiage",{});case 15:return r=u.sent,i.chushoudanjiaOptions=r.data,u.next=19,i.$api.option("xinxifabu","yonghuming",{});case 19:if(r=u.sent,i.yonghumingOptions=r.data,i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid,i.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){u.next=29;break}return i.ruleForm.id=e.id,u.next=27,i.$api.info("chushoujilu",i.ruleForm.id);case 27:r=u.sent,i.ruleForm=r.data;case 29:if(!e.cross){u.next=104;break}o=n.getStorageSync("crossObj"),u.t0=a.default.keys(o);case 32:if((u.t1=u.t0()).done){u.next=104;break}if(h=u.t1.value,"chushoudanhao"!=h){u.next=38;break}return i.ruleForm.chushoudanhao=o[h],i.ro.chushoudanhao=!0,u.abrupt("continue",32);case 38:if("shangpinbianhao"!=h){u.next=42;break}return i.ruleForm.shangpinbianhao=o[h],i.ro.shangpinbianhao=!0,u.abrupt("continue",32);case 42:if("shangpinmingcheng"!=h){u.next=46;break}return i.ruleForm.shangpinmingcheng=o[h],i.ro.shangpinmingcheng=!0,u.abrupt("continue",32);case 46:if("shangpinleibie"!=h){u.next=50;break}return i.ruleForm.shangpinleibie=o[h],i.ro.shangpinleibie=!0,u.abrupt("continue",32);case 50:if("tupian"!=h){u.next=54;break}return i.ruleForm.tupian=o[h],i.ro.tupian=!0,u.abrupt("continue",32);case 54:if("shangpinguige"!=h){u.next=58;break}return i.ruleForm.shangpinguige=o[h],i.ro.shangpinguige=!0,u.abrupt("continue",32);case 58:if("shangpinpinpai"!=h){u.next=62;break}return i.ruleForm.shangpinpinpai=o[h],i.ro.shangpinpinpai=!0,u.abrupt("continue",32);case 62:if("xinjiuchengdu"!=h){u.next=66;break}return i.ruleForm.xinjiuchengdu=o[h],i.ro.xinjiuchengdu=!0,u.abrupt("continue",32);case 66:if("chushoudanjia"!=h){u.next=70;break}return i.ruleForm.chushoudanjia=o[h],i.ro.chushoudanjia=!0,u.abrupt("continue",32);case 70:if("chushoushuliang"!=h){u.next=74;break}return i.ruleForm.chushoushuliang=o[h],i.ro.chushoushuliang=!0,u.abrupt("continue",32);case 74:if("chushouzongjia"!=h){u.next=78;break}return i.ruleForm.chushouzongjia=o[h],i.ro.chushouzongjia=!0,u.abrupt("continue",32);case 78:if("chushoushijian"!=h){u.next=82;break}return i.ruleForm.chushoushijian=o[h],i.ro.chushoushijian=!0,u.abrupt("continue",32);case 82:if("yonghuming"!=h){u.next=86;break}return i.ruleForm.yonghuming=o[h],i.ro.yonghuming=!0,u.abrupt("continue",32);case 86:if("xingming"!=h){u.next=90;break}return i.ruleForm.xingming=o[h],i.ro.xingming=!0,u.abrupt("continue",32);case 90:if("shouji"!=h){u.next=94;break}return i.ruleForm.shouji=o[h],i.ro.shouji=!0,u.abrupt("continue",32);case 94:if("beizhu"!=h){u.next=98;break}return i.ruleForm.beizhu=o[h],i.ro.beizhu=!0,u.abrupt("continue",32);case 98:if("userid"!=h){u.next=102;break}return i.ruleForm.userid=o[h],i.ro.userid=!0,u.abrupt("continue",32);case 102:u.next=32;break;case 104:i.styleChange();case 105:case"end":return u.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shangpinbianhaoChange:function(n){var e=this;return r(a.default.mark((function i(){var u;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.shangpinbianhaoIndex=n.target.value,e.ruleForm.shangpinbianhao=e.shangpinbianhaoOptions[e.shangpinbianhaoIndex],i.next=4,e.$api.follow("xinxifabu","chushoubianhao",{columnValue:e.ruleForm.shangpinbianhao});case 4:u=i.sent,u.data.shangpinmingcheng&&(e.ruleForm.shangpinmingcheng=u.data.shangpinmingcheng),u.data.shangpinguige&&(e.ruleForm.shangpinguige=u.data.shangpinguige),u.data.shangpinpinpai&&(e.ruleForm.shangpinpinpai=u.data.shangpinpinpai),u.data.xinjiuchengdu&&(e.ruleForm.xinjiuchengdu=u.data.xinjiuchengdu),u.data.chushoushuliang&&(e.ruleForm.chushoushuliang=u.data.chushoushuliang),u.data.xingming&&(e.ruleForm.xingming=u.data.xingming),u.data.shouji&&(e.ruleForm.shouji=u.data.shouji);case 12:case"end":return i.stop()}}),i)})))()},yonghumingChange:function(n){var e=this;return r(a.default.mark((function i(){var u;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.yonghumingIndex=n.target.value,e.ruleForm.yonghuming=e.yonghumingOptions[e.yonghumingIndex],i.next=4,e.$api.follow("xinxifabu","yonghuming",{columnValue:e.ruleForm.yonghuming});case 4:u=i.sent,u.data.shangpinmingcheng&&(e.ruleForm.shangpinmingcheng=u.data.shangpinmingcheng),u.data.shangpinguige&&(e.ruleForm.shangpinguige=u.data.shangpinguige),u.data.shangpinpinpai&&(e.ruleForm.shangpinpinpai=u.data.shangpinpinpai),u.data.xinjiuchengdu&&(e.ruleForm.xinjiuchengdu=u.data.xinjiuchengdu),u.data.chushoushuliang&&(e.ruleForm.chushoushuliang=u.data.chushoushuliang),u.data.xingming&&(e.ruleForm.xingming=u.data.xingming),u.data.shouji&&(e.ruleForm.shouji=u.data.shouji);case 12:case"end":return i.stop()}}),i)})))()},chushoushijianChange:function(n){this.ruleForm.chushoushijian=n.target.value,this.$forceUpdate()},shangpinleibieChange:function(n){this.shangpinleibieIndex=n.target.value,this.ruleForm.shangpinleibie=this.shangpinleibieOptions[this.shangpinleibieIndex]},chushoudanjiaChange:function(n){this.chushoudanjiaIndex=n.target.value,this.ruleForm.chushoudanjia=this.chushoudanjiaOptions[this.chushoudanjiaIndex]},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return r(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.chushouzongjia=n.chushouzongjia,n.ruleForm.chushoudanhao){e.next=4;break}return n.$utils.msg("出售单号不能为空"),e.abrupt("return");case 4:if(n.ruleForm.shangpinbianhao){e.next=7;break}return n.$utils.msg("商品编号不能为空"),e.abrupt("return");case 7:if(!n.ruleForm.chushoudanjia||n.$validate.isIntNumer(n.ruleForm.chushoudanjia)){e.next=10;break}return n.$utils.msg("出售单价应输入整数"),e.abrupt("return");case 10:if(!n.ruleForm.chushoushuliang||n.$validate.isIntNumer(n.ruleForm.chushoushuliang)){e.next=13;break}return n.$utils.msg("出售数量应输入整数"),e.abrupt("return");case 13:if(!n.ruleForm.chushouzongjia||n.$validate.isIntNumer(n.ruleForm.chushouzongjia)){e.next=16;break}return n.$utils.msg("出售总价应输入整数"),e.abrupt("return");case 16:if(!n.ruleForm.id){e.next=21;break}return e.next=19,n.$api.update("chushoujilu",n.ruleForm);case 19:e.next=23;break;case 21:return e.next=23,n.$api.add("chushoujilu",n.ruleForm);case 23:n.$utils.msgBack("提交成功");case 24:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,u=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),a=a>9?a:"0"+a,u=u>9?u:"0"+u,"".concat(i,"-").concat(a,"-").concat(u)},toggleTab:function(n){this.$refs[n].show()}}};e.default=h}).call(this,i("543d")["default"])}},[["af62","common/runtime","common/vendor"]]]);