(function(e){function t(t){for(var r,s,c=t[0],i=t[1],u=t[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0ad1":function(e,t,n){"use strict";var r=n("7186"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("96b8")}}),r("Postcomponent")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Latest Posts")]),n("div",{staticClass:"create-post"},[n("label",{attrs:{for:"create-post"}},[e._v("Wanna Add Any Taks? ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text",id:"create-post",placeholder:"Add new task"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),n("button",{on:{click:e.createPost}},[e._v("Add")])]),n("hr"),e.error?n("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),n("div",{staticClass:"post-container"},e._l(e.posts,(function(t,r){return n("div",{directives:[{name:"bin",rawName:"v-bin:index",value:r,expression:"index",arg:"index"}],key:t._id,staticClass:"post",attrs:{item:t},on:{dblclick:function(n){return e.deletePost(t._id)}}},[e._v(" "+e._s(t.createdAt.getDate()+"/"+t.createdAt.getMonth()+"/ "+t.createdAt.getFullYear())+" "),n("p",{staticClass:"text"},[e._v(e._s(t.text))])])})),0)])},c=[],i=(n("96cf"),n("1da1")),u=(n("d81d"),n("d3b7"),n("5530")),l=n("d4ec"),p=n("bee2"),f=n("bc3a"),d=n.n(f),v="api/tasklist/",b=function(){function e(){Object(l["a"])(this,e)}return Object(p["a"])(e,null,[{key:"getPosts",value:function(){return new Promise((function(e,t){d.a.get(v).then((function(t){var n=t.data;e(n.map((function(e){return Object(u["a"])(Object(u["a"])({},e),{},{createdAt:new Date(e.createdAt)})})))})).catch((function(e){t(e)}))}))}},{key:"insertPost",value:function(e){return d.a.post(v,{text:e})}},{key:"deletePost",value:function(e){return d.a.delete("".concat(v).concat(e))}}]),e}(),m=b,h={name:"Postcomponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.getPosts();case 3:e.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{createPost:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.insertPost(e.text);case 2:return t.next=4,m.getPosts();case 4:e.posts=t.sent;case 5:case"end":return t.stop()}}),t)})))()},deletePost:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,m.deletePost(e);case 2:return n.next=4,m.getPosts();case 4:t.posts=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}},g=h,x=(n("0ad1"),n("2877")),w=Object(x["a"])(g,s,c,!1,null,"1929a84e",null),P=w.exports,y={name:"App",components:{Postcomponent:P}},_=y,O=(n("034f"),Object(x["a"])(_,a,o,!1,null,null,null)),j=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)}}).$mount("#app")},7186:function(e,t,n){},"85ec":function(e,t,n){},"96b8":function(e,t,n){e.exports=n.p+"img/pikachu.244f17af.png"}});
//# sourceMappingURL=app.067f0d55.js.map