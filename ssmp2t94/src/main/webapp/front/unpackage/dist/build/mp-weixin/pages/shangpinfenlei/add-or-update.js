(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinfenlei/add-or-update"],{"20d1":function(e,n,t){"use strict";t.r(n);var r=t("cac4"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},"423f":function(e,n,t){"use strict";(function(e){t("8915");r(t("66fd"));var n=r(t("be9a"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"6cc1":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},bdfa:function(e,n,t){},be9a:function(e,n,t){"use strict";t.r(n);var r=t("6cc1"),a=t("20d1");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("c802");var u,c=t("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"7285d552",null,!1,r["a"],u);n["default"]=o.exports},c802:function(e,n,t){"use strict";var r=t("bdfa"),a=t.n(r);a.a},cac4:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,u){try{var c=e[i](u),o=c.value}catch(s){return void t(s)}c.done?n(o):Promise.resolve(o).then(r,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function c(e){i(u,r,a,c,o,"next",e)}function o(e){i(u,r,a,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("e1ae"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{ruleForm:{shangpinleibie:""},user:{},ro:{shangpinleibie:!1}}},components:{wPicker:c},computed:{},onLoad:function(n){var t=this;return u(r.default.mark((function a(){var i,u,c,o;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,t.$api.session(i);case 3:if(u=a.sent,t.user=u.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=13;break}return t.ruleForm.id=n.id,a.next=11,t.$api.info("shangpinfenlei",t.ruleForm.id);case 11:u=a.sent,t.ruleForm=u.data;case 13:if(!n.cross){a.next=24;break}c=e.getStorageSync("crossObj"),a.t0=r.default.keys(c);case 16:if((a.t1=a.t0()).done){a.next=24;break}if(o=a.t1.value,"shangpinleibie"!=o){a.next=22;break}return t.ruleForm.shangpinleibie=c[o],t.ro.shangpinleibie=!0,a.abrupt("continue",16);case 22:a.next=16;break;case 24:t.styleChange();case 25:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.shangpinleibie){n.next=3;break}return e.$utils.msg("商品类别不能为空"),n.abrupt("return");case 3:if(!e.ruleForm.id){n.next=8;break}return n.next=6,e.$api.update("shangpinfenlei",e.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,e.$api.add("shangpinfenlei",e.ruleForm);case 10:e.$utils.msgBack("提交成功");case 11:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,t("543d")["default"])}},[["423f","common/runtime","common/vendor"]]]);