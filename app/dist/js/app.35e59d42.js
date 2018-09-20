(function(e){function t(t){for(var o,l,s=t[0],u=t[1],c=t[2],p=0,d=[];p<s.length;p++)l=s[p],a[l]&&d.push(a[l][0]),a[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);i&&i(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},r=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var i=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("c21b"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/save-answers"}},[e._v("Save Answers")]),e._v(" |\n  ")],1),n("router-view")],1)},r=[],l=(n("034f"),n("2877")),s={},u=Object(l["a"])(s,a,r,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,i=n("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("question"),e.playerModule.playerName.length?e._e():o("player-name-input"),o("messages")],1)},d=[],f=n("c93e"),m=n("2f62"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"message-window"},[n("h2",[e._v("Messages")]),n("ul",e._l(e.playerModule.messages,function(t){return n("li",[e._v(e._s(t.playerName)+": "+e._s(t.text))])}))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),n("button",{on:{click:e.handleSend}},[e._v("Send")])])},_=[],g={name:"Messages",data:function(){return{text:""}},computed:Object(f["a"])({},Object(m["d"])(["playerModule"])),methods:Object(f["a"])({},Object(m["c"])(["PUSH_MESSAGE"]),{handleSend:function(){this.text.length&&(window.socket.emit("message",{playerName:this.playerModule.playerName,text:this.text}),this.text="")}}),mounted:function(){}},y=g,h=Object(l["a"])(y,v,_,!1,null,null,null);h.options.__file="Messages.vue";var b=h.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.playerName,expression:"playerName"}],attrs:{type:"text"},domProps:{value:e.playerName},on:{input:function(t){t.target.composing||(e.playerName=t.target.value)}}}),n("button",{on:{click:e.handleCreatePlayer}},[e._v("Create Player")])])},P=[],w={name:"PlayerNameInput",data:function(){return{playerName:""}},methods:Object(f["a"])({},Object(m["b"])(["createPlayer"]),{handleCreatePlayer:function(e){this.createPlayer({playerName:this.playerName})}})},x=w,j=Object(l["a"])(x,O,P,!1,null,null,null);j.options.__file="PlayerNameInput.vue";var N=j.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",[e._v("YES!")]),n("button",[e._v("Nope")]),n("button",[e._v("Sometimes")])])}],M={name:"Question"},F=M,A=Object(l["a"])(F,S,E,!1,null,null,null);A.options.__file="Question.vue";var k=A.exports,$={name:"home",components:{Messages:b,PlayerNameInput:N,Question:k},data:function(){return{playerName:"",text:""}},computed:Object(f["a"])({},Object(m["d"])(["playerModule"])),mounted:function(){window.socket.on("answer",function(e){console.log({answer:e}),console.log(window.socket)})}},T=$,C=Object(l["a"])(T,p,d,!1,null,null,null);C.options.__file="Home.vue";var D=C.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Save Answers")]),e._l(e.foodModule.foods,function(e){return n("food-component",{attrs:{food:e}})})],2)},U=[],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  "+e._s(e.food)+"\n")])},I=[],Q={},Y=Q,G=(n("7f02"),Object(l["a"])(Y,H,I,!1,null,null,null));G.options.__file="FoodComponent.vue";var J=G.exports,L={name:"SaveAnswers",components:{FoodComponent:J},computed:Object(f["a"])({},Object(m["d"])(["foodModule"])),methods:Object(f["a"])({},Object(m["b"])(["getFoods","updateFoods"])),mounted:function(){console.log("mounted"),this.getFoods()}},q=L,V=Object(l["a"])(q,R,U,!1,null,null,null);V.options.__file="SaveAnswers.vue";V.exports;o["a"].use(i["a"]);var W=new i["a"]({routes:[{path:"/",name:"home",component:D}]}),z=n("bc3a"),B=n.n(z),K="http://localhost:3000/api",X={createPlayer:function(e){var t=e.playerName;return console.log("playerName"),console.log(t),B()({method:"post",url:"".concat(K,"/player"),data:{playerName:t}})},updateFood:function(e){var t=e.id,n=e.answer;return B()({method:"put",url:"".concat(K,"/food"),data:{id:t,answer:n}})},getFoods:function(){return B()({method:"get",url:"".concat(K,"/food")})}},Z={foods:[]},ee={},te={updateFoods:function(e){e.commit;var t=e.state;X.updateFoods(t.foods).then(function(e){console.log("response from updateFood "),console.log(e)})},getFoods:function(e){var t=e.commit;console.log("dispatching getFoods action"),X.getFoods().then(function(e){console.log("response from getFoods"),console.log(e),t("UPDATE_FOOD_PROP",{key:"foods",value:e.data})})}},ne={UPDATE_FOOD_PROP:function(e,t){var n=t.key,o=t.value;e[n]=o},UPDATE_ANSWER:function(e){console.log(e)}},oe={state:Z,getters:ee,actions:te,mutations:ne},ae={messages:[],playerName:""},re={},le={createPlayer:function(e,t){var n=e.commit,o=t.playerName;console.log("playerName in action"),console.log(o),X.createPlayer({playerName:o}).then(function(e){n("UPDATE_PLAYERS_PROP",{key:"playerName",value:o})})}},se={UPDATE_PLAYERS_PROP:function(e,t){var n=t.key,o=t.value;e[n]=o},PUSH_MESSAGE:function(e,t){var n=t.message;e.messages.push(n)}},ue={state:ae,getters:re,actions:le,mutations:se};o["a"].use(m["a"]);var ce=!1,ie=new m["a"].Store({modules:{foodModule:oe,playerModule:ue},strict:ce});o["a"].config.productionTip=!1,new o["a"]({router:W,store:ie,render:function(e){return e(c)}}).$mount("#app")},"7f02":function(e,t,n){"use strict";var o=n("a944"),a=n.n(o);a.a},a944:function(e,t,n){},c21b:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.35e59d42.js.map