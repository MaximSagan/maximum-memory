(this["webpackJsonpmaximum-memory"]=this["webpackJsonpmaximum-memory"]||[]).push([[0],{100:function(e,a,t){e.exports=t(111)},105:function(e,a,t){},111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(15),c=t.n(i),o=(t(105),t(168)),s=t(161),l=t(24),d=t(165),m=t(170),u=t(166),p=t(148),b=t(162),g=t(144),h=Object(g.a)((function(e){return{root:{maxWidth:400,padding:20,display:"flex",flexDirection:"column"},title:{marginBottom:e.spacing(3)},slider:{marginTop:e.spacing(1),marginBottom:e.spacing(3)},radioGroup:{display:"flex",justifyContent:"space-around"},label:{color:e.palette.text.primary,marginBottom:e.spacing(3)},cardThemeOption:{width:90,height:90},startButton:{marginTop:e.spacing(4),alignSelf:"flex-end"},extendedIcon:{marginRight:e.spacing(1)}}})),f=t(88),v=t(28),O=[{id:"countries",title:"Countries"},{id:"heroes",title:"Heroes"}],j=O[0].id,C=Object(g.a)((function(e){var a={position:"absolute",width:"100%",height:"100%",WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",borderWidth:4,borderStyle:"solid",borderRadius:e.shape.borderRadius};return{root:{perspective:"1000px"},card:E({position:"relative",overflow:"visible",width:"100%",height:"100%",textAlign:"center",transition:"transform ".concat(600,"ms"),transformStyle:"preserve-3d"}),cardFlipped:E({transform:"rotateY(180deg)"}),"@keyframes highlightMatched":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(1.1)"},"100%":{transform:"scale(1)"}},cardMatched:E({animationName:"$highlightMatched",animationDuration:"0.4s"}),front:Object(v.a)({},a,{borderColor:"transparent",transition:"border-color 0.4s"}),frontActive:{borderColor:e.palette.primary.main},back:Object(v.a)({},a,{background:"\n      radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 9%, hsla(0, 100%, 20%, 0) 9%) 0 0,\n      radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 8%, hsla(0, 100%, 20%, 0) 10%) 20px 20px,\n      radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 20px 0,\n      radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 0 20px,\n      radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 20px 0,\n      radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 40px 20px,\n      radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 0 0,\n      radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 20px 20px,\n      linear-gradient(45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0,\n      linear-gradient(-45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0\n    ",backgroundColor:"#300",backgroundSize:"40px 40px",borderColor:"black",color:"white",transform:"rotateY(180deg)","&:hover":{borderColor:e.palette.primary.main,borderWidth:4}}),cardImage:{width:"100%",height:"100%",objectFit:"contain"}}}));function E(e){return{"&&":e}}var x=t(146),y=t(40),k=t.n(y),w=r.a.memo((function(e){var a=e.src,t=e.alt,n=e.className,i=e.isFaceUp,c=void 0===i||i,o=e.isActive,s=void 0!==o&&o,l=e.isMatched,d=void 0!==l&&l,m=Object(f.a)(e,["src","alt","className","isFaceUp","isActive","isMatched"]),u=C();return r.a.createElement("div",Object.assign({},m,{className:k()(u.root,n)}),r.a.createElement(x.a,{raised:!0,className:k()(u.card,!c&&u.cardFlipped,d&&u.cardMatched)},r.a.createElement("div",{className:k()(u.front,s&&u.frontActive)},r.a.createElement("img",{className:u.cardImage,src:a,alt:t})),r.a.createElement("div",{className:u.back})))})),N=t(74),M=t(169),S=t(149),F=t(85),I=t.n(F),A=r.a.memo((function(e){var a,t,i,c=e.previousSettings,o=e.onConfirmGameSettings,s=h(),g=Object(n.useRef)(Math.floor(20*Math.random())),f=Object(n.useState)(null!==(a=null===c||void 0===c||null===(t=c.cardTheme)||void 0===t?void 0:t.id)&&void 0!==a?a:j),v=Object(l.a)(f,2),C=v[0],E=v[1],y=Object(n.useState)(null!==(i=null===c||void 0===c?void 0:c.numberOfCards)&&void 0!==i?i:12),k=Object(l.a)(y,2),F=k[0],A=k[1],B=Object(n.useCallback)((function(e,a){E(a)}),[E]),U=Object(n.useCallback)((function(e,a){A(a)}),[A]),T=Object(n.useCallback)((function(e){o({cardTheme:O.find((function(e){return e.id===C})),numberOfCards:F})}),[o,C,F]);return r.a.createElement(x.a,{className:s.root,component:"form"},r.a.createElement(N.a,{variant:"h4",className:s.title},"Game setup"),r.a.createElement(N.a,{id:"number-of-cards-slider",className:s.label},"Number of cards"),r.a.createElement(M.a,{className:s.slider,value:F,onChange:U,"aria-labelledby":"number-of-cards-slider",valueLabelDisplay:"on",step:2,marks:!0,min:4,max:40}),r.a.createElement(d.a,{component:"fieldset"},r.a.createElement(m.a,{component:"legend",className:s.label},"Card theme"),r.a.createElement(u.a,{row:!0,className:s.radioGroup,"aria-label":"card-theme",name:"card-theme",value:C,onChange:B},O.map((function(e){return r.a.createElement(p.a,{key:e.id,value:e.id,control:r.a.createElement(b.a,null),label:r.a.createElement(w,{className:s.cardThemeOption,src:"images/".concat(e.id,"/").concat(g.current,".png"),alt:e.title})})})))),r.a.createElement(S.a,{color:"primary",variant:"extended",className:s.startButton,onClick:T},r.a.createElement(I.a,{className:s.extendedIcon}),"Start game"))})),B=t(73),U=t(49),T=Object(g.a)((function(e){return{root:Object(U.a)({display:"flex",flexDirection:"column",maxWidth:980,width:"calc(100vw - ".concat(e.spacing(4),"px)"),padding:e.spacing(2.5)},e.breakpoints.up("lg"),{width:"calc(100vw - ".concat(e.spacing(8),"px)")}),gameCards:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",marginLeft:-e.spacing(1),marginRight:-e.spacing(1)},imageCard:function(a){var t=a.numberOfCards;return Object(U.a)({margin:e.spacing(1),width:t<20?70:50,height:t<20?70:50},e.breakpoints.up("lg"),{width:t<20?140:100,height:t<20?140:100})},gameInfo:{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems:"center",marginBottom:e.spacing(1)},hideCardsCountdown:{opacity:1,transition:"opacity 1s"},hideCardsCountdownFinished:{opacity:0},progress:{marginTop:e.spacing(3),marginBottom:e.spacing(1)}}})),W=t(154),G=t(159),D=t(156),R=t(38),Y=t(171),z=t(63),H=t(163),J=t(155),L=t(164),V=t(167),$=t(172),P=t(89);function q(e){return Array.from({length:e},(function(e,a){return a}))}function K(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}var Q=t(158),X=t(157),Z=t(87),_=t.n(Z),ee=t(160),ae=t(150),te=t(151),ne=t(152),re=t(153),ie=t(86),ce=t.n(ie),oe=r.a.memo((function(e){var a=e.numberOfCards,t=e.numberOfMisses,n=e.onConfirm;return r.a.createElement(ee.a,{open:!0,disableBackdropClick:!0,"aria-labelledby":"alert-dialog-title"},r.a.createElement(ae.a,{id:"alert-dialog-title"},"Congratulations"),r.a.createElement(te.a,null,r.a.createElement(ne.a,{id:"alert-dialog-description"},"You matched ",a," cards with"," ",0===t?"no misses":1===t?"only one miss":"".concat(t," misses"),"!")),r.a.createElement(re.a,null,r.a.createElement(S.a,{color:"primary","aria-label":"add",onClick:n},r.a.createElement(ce.a,null))))})),se=r.a.memo((function(e){var a=e.gameSettings,t=e.onEndGame,i=a.numberOfCards,c=a.cardTheme,o=T({numberOfCards:i}),s=Object(n.useState)((function(){return function(e){var a=K(q(20)).slice(0,e/2);return K([].concat(Object(B.a)(a),Object(B.a)(a))).map((function(e,a){return{displayIndex:a,imageId:e,isFaceUp:!0,isMatched:!1,isActive:!1}}))}(i)})),d=Object(l.a)(s,2),m=d[0],u=d[1],p=Object(n.useState)(!1),b=Object(l.a)(p,2),g=b[0],h=b[1],f=Object(n.useState)(0),O=Object(l.a)(f,2),j=O[0],C=O[1],E=Object(n.useMemo)((function(){return K(q(i))}),[i]),y=Object(V.a)((function(){return Object(W.a)(1e3).pipe(Object(Y.a)(3),Object(z.a)((function(e){return 3-e-1})),Object(H.a)())})),M=Object($.a)(y,3);console.log({secondsUntilHideCards:M});var S=Object(V.a)((function(){return Object(G.a)(y.pipe(Object(J.a)()),Object(D.a)(0,50).pipe(Object(Y.a)(i)))}));Object(P.a)(S,(function(e){var a=E[e];u((function(e){return e.map((function(e,t){return t===a?Object(v.a)({},e,{isFaceUp:!1}):e}))}))}),null,(function(){return h(!0)}));var F=Object(n.useMemo)((function(){return new R.a}),[]),I=Object(V.a)((function(){return F.pipe(Object(L.a)(600))}));Object(P.a)(I,(function(e){var a=e.isMatch,t=e.indices;h(!0),a?u((function(e){return e.map((function(e,a){return t.includes(a)?Object(v.a)({},e,{isMatched:!0,isActive:!1}):e}))})):(u((function(e){return e.map((function(e,a){return t.includes(a)?Object(v.a)({},e,{isFaceUp:!1,isActive:!1}):e}))})),C((function(e){return e+1})))}));var A=m.filter((function(e){return e.isMatched})).length/i*100;return r.a.createElement(x.a,{className:o.root},r.a.createElement("div",{className:o.gameInfo},r.a.createElement(X.a,{variant:"contained",color:"primary",size:"small",endIcon:r.a.createElement(_.a,null),onClick:t},"End game"),j>0?r.a.createElement(N.a,null,"Misses: ",j):r.a.createElement(N.a,{className:k()(o.hideCardsCountdown,0===M&&o.hideCardsCountdownFinished)},"Flipping in ",M,"...")),r.a.createElement("div",{className:o.gameCards},m.map((function(e,a){return r.a.createElement(w,{className:o.imageCard,src:"images/".concat(c.id,"/").concat(e.imageId,".png"),alt:"Card",isFaceUp:e.isFaceUp,isMatched:e.isMatched,isActive:e.isActive,onClick:function(){return function(e){var a=m[e];if(g&&!a.isFaceUp){u(m.map((function(a,t){return e===t?Object(v.a)({},a,{isFaceUp:!0,isActive:!0}):a})));var t=m.find((function(e){var a=e.isFaceUp,t=e.isMatched;return a&&!t}));if(t){var n=a.imageId===t.imageId;F.next({isMatch:n,indices:[e,t.displayIndex]}),h(!1)}}}(a)}})}))),r.a.createElement(Q.a,{className:o.progress,variant:"determinate",value:A}),100===A&&r.a.createElement(oe,{numberOfCards:i,numberOfMisses:j,onConfirm:t}))}));var le=Object(g.a)((function(e){return{root:{display:"grid",placeItems:"center",height:"100vh",backgroundColor:e.palette.background.default}}}));var de=function(){var e=le(),a=Object(n.useState)(void 0),t=Object(l.a)(a,2),i=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),d=s[0],m=s[1],u=Object(n.useCallback)((function(e){c(e),m(!0)}),[]),p=Object(n.useCallback)((function(){return m(!1)}),[]);return r.a.createElement("div",{className:e.root},d?r.a.createElement(se,{gameSettings:i,onEndGame:p}):r.a.createElement(A,{onConfirmGameSettings:u,previousSettings:i}))},me=Object(o.a)({productionPrefix:"mm"});var ue=function(){return r.a.createElement(s.b,{generateClassName:me},r.a.createElement(de,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.b3970984.chunk.js.map