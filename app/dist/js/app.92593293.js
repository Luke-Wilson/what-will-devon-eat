(function(e){function n(n){for(var o,a,u=n[0],c=n[1],i=n[2],d=0,m=[];d<u.length;d++)a=u[d],s[a]&&m.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(n);while(m.length)m.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,u=1;u<t.length;u++){var c=t[u];0!==s[c]&&(o=!1)}o&&(r.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},s={app:0},r=[];function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var i=0;i<u.length;i++)n(u[i]);var l=c;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("c21b"),s=t.n(o);s.a},"1bb8":function(e,n,t){},"2bbb":function(e,n,t){"use strict";var o=t("1bb8"),s=t.n(o);s.a},"4ea3":function(e,n,t){e.exports=t.p+"img/devon.dc48333c.png"},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var o=t("2b0e"),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},["admin"===e.playerModule.playerName?t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),t("router-link",{attrs:{to:"/save-answers"}},[e._v("Save Answers")]),e._v(" |\n    "),t("router-link",{attrs:{to:"/play"}},[e._v("Play")]),e._v(" |\n    "),t("router-link",{attrs:{to:"/admin"}},[e._v("Admin")]),e._v(" |\n  ")],1):e._e(),t("router-view")],1)},r=[],a=t("c93e"),u=t("2f62"),c={name:"App",methods:Object(a["a"])({},Object(u["d"])(["UPDATE_QUESTION_INDEX","REVEAL_ANSWER","UPDATE_PLAYERS_PROP"]),Object(u["b"])(["getFoods","calculateNewScore"])),computed:Object(a["a"])({},Object(u["e"])(["playerModule"])),mounted:function(){var e=this;this.getFoods(),window.socket.on("nextquestionindex",function(n){e.UPDATE_QUESTION_INDEX({newIndex:n}),e.UPDATE_PLAYERS_PROP({key:"currentAnswer",value:""})}),window.socket.on("revealanswer",function(){console.log("reveal the answer"),e.REVEAL_ANSWER(),e.calculateNewScore()})}},i=c,l=(t("034f"),t("2877")),d=Object(l["a"])(i,s,r,!1,null,null,null);d.options.__file="App.vue";var m=d.exports,f=t("8c4f"),p=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"home"},[e._m(0),o("img",{attrs:{alt:"Vue logo",src:t("4ea3")}}),e.playerModule.playerName.length?e._e():o("player-name-input")],1)},v=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header"},[t("small",[e._v("Welcome to...")]),t("h1",[e._v("What does Devon eat?")])])}],b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"message-window"},[t("h2",[e._v("Messages")]),t("ul",e._l(e.playerModule.messages,function(n){return t("li",[e._v(e._s(n.playerName)+": "+e._s(n.text))])}))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text"},domProps:{value:e.text},on:{input:function(n){n.target.composing||(e.text=n.target.value)}}}),t("button",{on:{click:e.handleSend}},[e._v("Send")])])},h=[],w={name:"Messages",data:function(){return{text:""}},computed:Object(a["a"])({},Object(u["e"])(["playerModule"])),methods:Object(a["a"])({},Object(u["d"])(["PUSH_MESSAGE"]),{handleSend:function(){this.text.length&&(window.socket.emit("message",{playerName:this.playerModule.playerName,text:this.text}),this.text="")}}),mounted:function(){}},_=w,y=Object(l["a"])(_,b,h,!1,null,null,null);y.options.__file="Messages.vue";var g=y.exports,A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"player-name-input"},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.playerName,expression:"playerName"}],staticClass:"form-control form-control-lg",attrs:{placeholder:"Enter your player name"},domProps:{value:e.playerName},on:{input:function(n){n.target.composing||(e.playerName=n.target.value)}}}),t("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.playerName.length},on:{click:function(n){return n.preventDefault(),e.handleCreatePlayer(n)}}},[e._v("Create Player")])])])},O=[],E={name:"PlayerNameInput",data:function(){return{playerName:""}},methods:Object(a["a"])({},Object(u["b"])(["createPlayer"]),{handleCreatePlayer:function(e){this.createPlayer({playerName:this.playerName})}})},P=E,j=(t("ed0e"),Object(l["a"])(P,A,O,!1,null,null,null));j.options.__file="PlayerNameInput.vue";var M=j.exports,S=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.currentQuestion.name?t("div",[t("div",{attrs:{id:"question"}},[t("h3",[e._v("Will Devon eat...")]),t("h1",[e._v(e._s(e.currentQuestion.name)+"?")]),e.foodModule.showAnswer?t("h2",[e._v("The answer is: "+e._s(e.currentQuestion.answer))]):t("h2",[e._v("...")])]),t("div",{staticClass:"options"},[t("button",{staticClass:"btn btn-lg btn-secondary",class:{"btn-warning":"yes"===e.playerModule.currentAnswer&&!e.foodModule.showAnswer,"btn-success":"yes"===e.playerModule.currentAnswer&&"yes"===e.currentQuestion.answer&&e.foodModule.showAnswer,"btn-danger":"yes"===e.playerModule.currentAnswer&&"yes"!==e.currentQuestion.answer&&e.foodModule.showAnswer},attrs:{disabled:e.foodModule.showAnswer},on:{click:function(n){e.handleAnswer("yes")}}},[e._v("\n        YES!\n      ")]),t("button",{staticClass:"btn btn-lg btn-secondary",class:{"btn-warning":"no"===e.playerModule.currentAnswer&&!e.foodModule.showAnswer,"btn-success":"no"===e.playerModule.currentAnswer&&"no"===e.currentQuestion.answer&&e.foodModule.showAnswer,"btn-danger":"no"===e.playerModule.currentAnswer&&"no"!==e.currentQuestion.answer&&e.foodModule.showAnswer},attrs:{disabled:e.foodModule.showAnswer},on:{click:function(n){e.handleAnswer("no")}}},[e._v("\n        Nope\n      ")]),t("button",{staticClass:"btn btn-lg btn-secondary",class:{"btn-warning":"sometimes"===e.playerModule.currentAnswer&&!e.foodModule.showAnswer,"btn-success":"sometimes"===e.playerModule.currentAnswer&&"sometimes"===e.currentQuestion.answer&&e.foodModule.showAnswer,"btn-danger":"sometimes"===e.playerModule.currentAnswer&&"sometimes"!==e.currentQuestion.answer&&e.foodModule.showAnswer},attrs:{disabled:e.foodModule.showAnswer},on:{click:function(n){e.handleAnswer("sometimes")}}},[e._v("\n        Sometimes\n      ")])])]):t("div",[e._v("\n    Fudge. Something went wrong. Actually, I wonder if Devon eats fudge...\n  ")])])},x=[],N={name:"Question",computed:Object(a["a"])({},Object(u["c"])(["currentQuestion","gameFinished"]),Object(u["e"])(["foodModule","playerModule"])),methods:Object(a["a"])({},Object(u["d"])(["UPDATE_PLAYERS_PROP"]),{handleAnswer:function(e){this.UPDATE_PLAYERS_PROP({key:"currentAnswer",value:e})}}),updated:function(){console.log("this.gameFinished"),console.log(this.gameFinished),this.gameFinished&&ye.push("winners")}},R=N,k=(t("e716"),Object(l["a"])(R,S,x,!1,null,null,null));k.options.__file="Question.vue";var F=k.exports,C={name:"home",components:{Messages:g,PlayerNameInput:M,Question:F},data:function(){return{playerName:"",text:""}},computed:Object(a["a"])({},Object(u["e"])(["playerModule"])),mounted:function(){window.socket.on("answer",function(e){console.log({answer:e}),console.log(window.socket)})},updated:function(){this.playerModule.playerName.length&&ye.push("play")}},D=C,Q=(t("b2b4"),Object(l["a"])(D,p,v,!1,null,null,null));Q.options.__file="Home.vue";var T=Q.exports,U=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Save Answers")]),e._l(e.foodModule.foods,function(e){return t("food-component",{attrs:{food:e}})}),t("button",{staticClass:"btn btn-lg btn-success",on:{click:e.handleSave}},[e._v("Save")])],2)},I=[],q=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"food-component"},[t("div",{staticClass:"food-component--name"},[e._v(e._s(e.food.name))]),t("button",{staticClass:"btn",class:{"btn-dark":"yes"===this.food.answer},on:{click:function(n){e.handleAnswer("yes")}}},[e._v("\n    Yes\n  ")]),t("button",{staticClass:"btn",class:{"btn-dark":"no"===this.food.answer},on:{click:function(n){e.handleAnswer("no")}}},[e._v("\n    No\n  ")]),t("button",{staticClass:"btn",class:{"btn-dark":"sometimes"===this.food.answer},on:{click:function(n){e.handleAnswer("sometimes")}}},[e._v("\n    Sometimes\n  ")])])},$=[],W={name:"FoodComponent",props:{food:Object},methods:Object(a["a"])({},Object(u["d"])(["UPDATE_ANSWER"]),{handleAnswer:function(e){this.UPDATE_ANSWER({id:this.food.id,answer:e})}})},L=W,G=(t("db69"),Object(l["a"])(L,q,$,!1,null,null,null));G.options.__file="FoodComponent.vue";var Y=G.exports,H={name:"SaveAnswers",components:{FoodComponent:Y},computed:Object(a["a"])({},Object(u["e"])(["foodModule"])),methods:Object(a["a"])({},Object(u["b"])(["getFoods","updateFoods","saveFoods"]),{handleSave:function(){this.saveFoods()}})},V=H,X=(t("97eb"),Object(l["a"])(V,U,I,!1,null,null,null));X.options.__file="SaveAnswers.vue";var J=X.exports,z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("scoreboard"),t("question")],1)},B=[],K=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"scoreboard"},[t("span",[e._v(e._s(e.playerModule.playerName))]),t("span",[e._v(e._s(e.playerModule.score))])])},Z=[],ee={name:"Scoreboard",computed:Object(a["a"])({},Object(u["e"])(["playerModule"]))},ne=ee,te=(t("2bbb"),Object(l["a"])(ne,K,Z,!1,null,null,null));te.options.__file="Scoreboard.vue";var oe=te.exports,se={name:"Play",components:{Question:F,Scoreboard:oe},computed:Object(a["a"])({},Object(u["c"])(["currentQuestion","gameFinished"])),methods:Object(a["a"])({},Object(u["b"])(["getFoods"]),Object(u["d"])(["UPDATE_QUESTION_INDEX"])),updated:function(){console.log("this.gameFinished"),console.log(this.gameFinished),this.gameFinished&&ye.go("/winners")}},re=se,ae=Object(l["a"])(re,z,B,!1,null,null,null);ae.options.__file="Play.vue";var ue=ae.exports,ce=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{},[e._v("\n  This is the winners page\n")])},ie=[],le={name:"Winners"},de=le,me=Object(l["a"])(de,ce,ie,!1,null,null,null);me.options.__file="Winners.vue";var fe=me.exports,pe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("\n  admin\n  "),t("button",{staticClass:"btn btn-primary",on:{click:e.handleRequestAnswer}},[e._v("Request answer")]),t("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.foodModule.showAnswer},on:{click:e.handleRequestNextQuestion}},[e._v("Request next question")]),t("button",{staticClass:"btn btn-primary",on:{click:e.handleResetGame}},[e._v("Reset question count index to 0")])])},ve=[],be={name:"Admin",computed:Object(a["a"])({},Object(u["e"])(["foodModule"])),methods:Object(a["a"])({},Object(u["b"])(["getFoods","resetGame"]),{handleRequestAnswer:function(){window.socket.emit("requestanswer")},handleRequestNextQuestion:function(){window.socket.emit("nextquestion",this.foodModule.currentQuestionIndex)},handleResetGame:function(){this.resetGame()}}),mounted:function(){this.getFoods()}},he=be,we=Object(l["a"])(he,pe,ve,!1,null,null,null);we.options.__file="Admin.vue";var _e=we.exports;o["a"].use(f["a"]);var ye=new f["a"]({routes:[{path:"/",name:"home",component:T},{path:"/save-answers",name:"save-answers",component:J},{path:"/play",name:"play",component:ue},{path:"/winners",name:"winners",component:fe},{path:"/admin",name:"admin",component:_e}]}),ge=(t("6762"),t("2fdb"),t("bc3a")),Ae=t.n(ge),Oe="".concat(window.location.origin,"/api");window.location.origin.includes("localhost")&&(Oe="http://localhost:3000/api");var Ee={createPlayer:function(e){var n=e.playerName;return Ae()({method:"post",url:"".concat(Oe,"/player"),data:{playerName:n}})},getFoods:function(){return Ae()({method:"get",url:"".concat(Oe,"/food")})},saveFoods:function(e){return Ae()({method:"put",url:"".concat(Oe,"/food"),data:{foods:e}})}},Pe={foods:[],currentQuestionIndex:0,showAnswer:!1},je={currentQuestion:function(e){return e.currentQuestionIndex<e.foods.length?e.foods[e.currentQuestionIndex]:{}},gameFinished:function(e){return e.currentQuestionIndex>=e.foods.length}},Me={saveFoods:function(e){e.commit;var n=e.state;Ee.saveFoods(n.foods).then(function(e){console.log("response from updateFood"),console.log(e)})},getFoods:function(e){var n=e.commit;console.log("dispatching getFoods action"),Ee.getFoods().then(function(e){console.log("response from getFoods"),console.log(e),n("UPDATE_FOOD_PROP",{key:"foods",value:e.data})})},resetGame:function(e){var n=e.commit;n("UPDATE_FOOD_PROP",{key:"currentQuestionIndex",value:0})}},Se={UPDATE_FOOD_PROP:function(e,n){var t=n.key,o=n.value;e[t]=o},UPDATE_ANSWER:function(e,n){var t=n.id,o=n.answer,s=e.foods.map(function(e){return e.id===t&&(e.answer=o),e});e.foods=s,console.log(e)},REVEAL_ANSWER:function(e){e.showAnswer=!0},UPDATE_QUESTION_INDEX:function(e,n){var t=n.newIndex;e.showAnswer=!1,e.currentQuestionIndex=t}},xe={state:Pe,getters:je,actions:Me,mutations:Se},Ne={messages:[],playerName:"",currentAnswer:"",score:0},Re={},ke={createPlayer:function(e,n){var t=e.commit,o=n.playerName;Ee.createPlayer({playerName:o}).then(function(e){t("UPDATE_PLAYERS_PROP",{key:"playerName",value:o})})},calculateNewScore:function(e){var n=e.commit,t=e.rootGetters,o=e.state,s=t.currentQuestion.answer;"sometimes"===s&&"sometimes"===o.currentAnswer?n("UPDATE_SCORE",2):"sometimes"===s&&"sometimes"!==o.currentAnswer?n("UPDATE_SCORE",.5):s===o.currentAnswer&&n("UPDATE_SCORE",1)}},Fe={UPDATE_PLAYERS_PROP:function(e,n){var t=n.key,o=n.value;e[t]=o},PUSH_MESSAGE:function(e,n){var t=n.message;e.messages.push(t)},UPDATE_SCORE:function(e,n){e.score+=n}},Ce={state:Ne,getters:Re,actions:ke,mutations:Fe};o["a"].use(u["a"]);var De=!1,Qe=new u["a"].Store({modules:{foodModule:xe,playerModule:Ce},strict:De});o["a"].config.productionTip=!1,new o["a"]({router:ye,store:Qe,render:function(e){return e(m)}}).$mount("#app")},6980:function(e,n,t){},"6abe":function(e,n,t){},"7cce":function(e,n,t){},"97eb":function(e,n,t){"use strict";var o=t("7cce"),s=t.n(o);s.a},"9cc1":function(e,n,t){},b2b4:function(e,n,t){"use strict";var o=t("c208"),s=t.n(o);s.a},c208:function(e,n,t){},c21b:function(e,n,t){},db69:function(e,n,t){"use strict";var o=t("6abe"),s=t.n(o);s.a},e716:function(e,n,t){"use strict";var o=t("6980"),s=t.n(o);s.a},ed0e:function(e,n,t){"use strict";var o=t("9cc1"),s=t.n(o);s.a}});
//# sourceMappingURL=app.92593293.js.map