(this["webpackJsonpreact-rock-paper-scissors"]=this["webpackJsonpreact-rock-paper-scissors"]||[]).push([[0],{13:function(e,a,n){e.exports=n(28)},18:function(e,a,n){},19:function(e,a,n){},20:function(e,a,n){},21:function(e,a,n){},27:function(e,a,n){},28:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(8),o=n.n(c),l=(n(18),n(19),n(3)),u=Object.freeze({USER_SELECTING_HAND:"user",AI_SELECTING_HAND:"ai",WON:"won",LOSE:"lose",DRAW:"draw"}),i=n(9),s=n(10),d=n(2),E={ROCK:{id:0,name:"rock",ico:d.b,value:0},PAPER:{id:1,name:"paper",ico:d.a,value:1},SCISSORS:{id:2,name:"scissors",ico:d.c,value:2}},m=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"getRandomHand",value:function(){var e=Math.floor(3*Math.random());for(var a in E)if(E[a].value===e)return E[a];throw new Error("Cant return hand.")}},{key:"getGameStatus",value:function(e,a){return(e.value+1)%3===a.value?u.LOSE:(a.value+1)%3===e.value?u.WON:u.DRAW}},{key:"getScoreModForState",value:function(e){switch(e){case u.WON:return 1;case u.LOSE:return-1;default:return 0}}}]),e}();function v(e,a){var n=Object(t.useState)(e),r=Object(l.a)(n,2),c=r[0],o=r[1];return Object(t.useDebugValue)("".concat(a,": ").concat(c)),[c,o]}var S=r.a.createContext(),h=function(e){var a=e.children,n=v(0,"score"),t=Object(l.a)(n,2),c=t[0],o=t[1],i=v(null,"selectedHand"),s=Object(l.a)(i,2),d=s[0],E=s[1],h=v(null,"cpuHand"),N=Object(l.a)(h,2),f=N[0],b=N[1],p=v(u.USER_SELECTING_HAND,"gameState"),C=Object(l.a)(p,2),O=C[0],H=C[1];return r.a.createElement(S.Provider,{value:{score:c,selectedHand:d,cpuHand:f,gameState:O,playerChooseHand:function(e){b(null),E(e),H(u.AI_SELECTING_HAND),setTimeout((function(){var a=m.getRandomHand();b(a);var n=m.getGameStatus(e,a);H(n),o((function(e){return m.getScoreModForState(n)+e}))}),500)},handlePlayAgainClick:function(){E(null),H(u.USER_SELECTING_HAND)}}},a)};n(20);function N(){var e=Object(t.useContext)(S).score;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Rock"),r.a.createElement("h1",null,"Paper"),r.a.createElement("h1",null,"Scissors")),r.a.createElement("div",{className:"score"},r.a.createElement("h2",null,"Score"),r.a.createElement("h1",null,e)))}n(21);var f=n(11),b=n(12),p=n(4),C=n.n(p);n(27);var O=function(e){var a,n=e.hand,c=e.isDisabled,o=e.isCpuHand,l=e.hide,u=Object(t.useContext)(S),i=u.playerChooseHand,s=u.selectedHand,E=n===s,m=null!==(a=null===n||void 0===n?void 0:n.ico)&&void 0!==a?a:d.d;return r.a.createElement("button",{className:C()("btnHand",Object(f.a)({hide:l,cpuSelected:o,selected:E&&!o},null===n||void 0===n?void 0:n.name,null===n||void 0===n?void 0:n.name)),onClick:function(){return i(n)},disabled:c},r.a.createElement(b.a,{className:"gameIco",icon:m,spin:m===d.d}))};function H(){var e,a=Object(t.useContext)(S),n=a.gameState,c=a.handlePlayAgainClick,o=a.cpuHand,l=a.selectedHand,i=n===u.DRAW||n===u.WON||n===u.LOSE;switch(n){case u.DRAW:e="Draw";break;case u.WON:e="You won!";break;case u.LOSE:e="You lose!";break;case u.AI_SELECTING_HAND:case u.USER_SELECTING_HAND:e="Choose you're hand!";break;default:e="Ups!"}return r.a.createElement("main",{className:"board"},r.a.createElement("h1",{className:"gameResult active"},e),r.a.createElement("div",{className:"containerSquare"},r.a.createElement("button",{className:C()("simpleBtn","tryAgain",{active:i}),onClick:c},"Play again"),function(){var e=[];for(var a in E){var t=E[a]===l,c=n===u.USER_SELECTING_HAND||t&&n!==u.USER_SELECTING_HAND,o=n!==u.USER_SELECTING_HAND;e.push(r.a.createElement(O,{key:E[a].id,hand:E[a],isDisabled:o,hide:!c}))}return e.map((function(e){return e}))}(),r.a.createElement(O,{hand:o,isDisabled:!0,isCpuHand:!0,hide:n===u.USER_SELECTING_HAND})))}var A=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(h,null,r.a.createElement(N,null),r.a.createElement(H,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.4692cb45.chunk.js.map