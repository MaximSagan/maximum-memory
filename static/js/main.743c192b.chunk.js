(this["webpackJsonpmaximum-memory"]=this["webpackJsonpmaximum-memory"]||[]).push([[0],{88:function(e,a,t){e.exports=t(99)},93:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(12),c=t.n(i),o=(t(93),t(21)),l=t(147),s=t(151),d=t(148),m=t(136),u=t(145),p=t(132),g=Object(p.a)((function(e){return{root:{width:400,padding:20,display:"flex",flexDirection:"column"},title:{marginBottom:e.spacing(3)},slider:{marginBottom:e.spacing(3)},radioGroup:{display:"flex",justifyContent:"space-around"},label:{color:e.palette.text.primary,marginBottom:e.spacing(3)},cardThemeOption:{width:128,height:128},startButton:{marginTop:e.spacing(4),alignSelf:"flex-end"},extendedIcon:{marginRight:e.spacing(1)}}})),h=t(75),f=t(24),b=[{id:"countries",title:"Countries"},{id:"heroes",title:"Heroes"}],v=b[0].id,O=Object(p.a)((function(e){var a={position:"absolute",width:"100%",height:"100%",WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",borderWidth:2,borderStyle:"solid",borderRadius:e.shape.borderRadius};return{root:{perspective:"1000px"},card:{position:"relative",overflow:"visible",width:"100%",height:"100%",textAlign:"center",transition:"transform ".concat(600,"ms"),transformStyle:"preserve-3d"},cardFlipped:{transform:"rotateY(180deg)"},cardActive:{backgroundColor:e.palette.primary.light},"@keyframes highlightMatched":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(1.1)"},"100%":{transform:"scale(1)"}},cardMatched:{animationName:"$highlightMatched",animationDuration:"0.4s"},front:Object(f.a)({},a,{borderColor:"transparent",transition:"border-color 0.4s"}),frontActive:{borderColor:e.palette.primary.main},back:Object(f.a)({},a,{background:"\n      radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 9%, hsla(0, 100%, 20%, 0) 9%) 0 0,\n      radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 8%, hsla(0, 100%, 20%, 0) 10%) 20px 20px,\n      radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 20px 0,\n      radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 0 20px,\n      radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 20px 0,\n      radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 40px 20px,\n      radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 0 0,\n      radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 20px 20px,\n      linear-gradient(45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0,\n      linear-gradient(-45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0\n    ",backgroundColor:"#300",backgroundSize:"40px 40px",borderColor:"black",color:"white",transform:"rotateY(180deg)"}),cardImage:{width:"100%",height:"100%",objectFit:"contain"}}})),j=t(134),E=t(57),x=t.n(E),C=r.a.memo((function(e){var a=e.src,t=e.alt,n=e.className,i=e.isFaceUp,c=void 0===i||i,o=e.isActive,l=void 0!==o&&o,s=e.isMatched,d=void 0!==s&&s,m=Object(h.a)(e,["src","alt","className","isFaceUp","isActive","isMatched"]),u=O();return r.a.createElement("div",Object.assign({},m,{className:x()(u.root,n)}),r.a.createElement(j.a,{raised:!0,className:x()(u.card,!c&&u.cardFlipped,d&&u.cardMatched)},r.a.createElement("div",{className:x()(u.front,l&&u.frontActive)},r.a.createElement("img",{className:u.cardImage,src:a,alt:t})),r.a.createElement("div",{className:u.back})))})),y=t(61),k=t(150),w=t(137),N=t(72),M=t.n(N),I=r.a.memo((function(e){var a=e.onConfirmGameSettings,t=g(),i=Object(n.useRef)(Math.floor(20*Math.random())),c=Object(n.useState)(v),p=Object(o.a)(c,2),h=p[0],f=p[1],O=Object(n.useState)(24),E=Object(o.a)(O,2),x=E[0],N=E[1],I=Object(n.useCallback)((function(e,a){f(a)}),[f]),S=Object(n.useCallback)((function(e,a){N(a)}),[N]),A=Object(n.useCallback)((function(e){a({cardTheme:b.find((function(e){return e.id===h})),numberOfCards:x})}),[a,h,x]);return r.a.createElement(j.a,{className:t.root,component:"form"},r.a.createElement(y.a,{variant:"h4",className:t.title},"Game setup"),r.a.createElement(y.a,{id:"number-of-cards-slider",className:t.label},"Number of cards"),r.a.createElement(k.a,{className:t.slider,value:x,onChange:S,"aria-labelledby":"number-of-cards-slider",valueLabelDisplay:"on",step:2,marks:!0,min:4,max:40}),r.a.createElement(l.a,{component:"fieldset"},r.a.createElement(s.a,{component:"legend",className:t.label},"Card theme"),r.a.createElement(d.a,{row:!0,className:t.radioGroup,"aria-label":"card-theme",name:"card-theme",value:h,onChange:I},b.map((function(e){return r.a.createElement(m.a,{key:e.id,value:e.id,control:r.a.createElement(u.a,null),label:r.a.createElement(C,{className:t.cardThemeOption,src:"/images/".concat(e.id,"/").concat(i.current,".png"),alt:e.title})})})))),r.a.createElement(w.a,{color:"primary",variant:"extended",className:t.startButton,onClick:A},r.a.createElement(M.a,{className:t.extendedIcon}),"Start game"))})),S=t(60),A=t(41),F=Object(p.a)((function(e){return{root:Object(A.a)({display:"flex",flexDirection:"column",maxWidth:980,width:"calc(100vw - ".concat(e.spacing(4),"px)"),padding:e.spacing(2.5)},e.breakpoints.up("lg"),{width:"calc(100vw - ".concat(e.spacing(8),"px)")}),gameCards:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",marginLeft:-e.spacing(1),marginRight:-e.spacing(1)},imageCard:function(a){var t=a.numberOfCards;return Object(A.a)({margin:e.spacing(1),width:t<20?100:50,height:t<20?100:50},e.breakpoints.up("lg"),{width:t<20?200:100,height:t<20?200:100})},gameInfo:{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems:"center",marginBottom:e.spacing(1)},progress:{marginTop:e.spacing(3),marginBottom:e.spacing(1)}}})),B=t(152),U=t(76),G=t(153),T=t(146),W=t(149),D=t(154);function R(e){return Array.from({length:e},(function(e,a){return a}))}function Y(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}var z=t(139),J=t(138),L=t(73),V=t.n(L),$=t(144),H=t(140),q=t(141),K=t(142),P=t(143),Q=t(74),X=t.n(Q),Z=r.a.memo((function(e){var a=e.gameSettings,t=e.onEndGame,i=a.numberOfCards,c=a.cardTheme,l=F({numberOfCards:i}),s=Object(n.useState)((function(){return function(e){var a=Y(R(20)).slice(0,e/2);return Y([].concat(Object(S.a)(a),Object(S.a)(a))).map((function(e,a){return{displayIndex:a,imageId:e,isFaceUp:!0,isMatched:!1,isActive:!1}}))}(i)})),d=Object(o.a)(s,2),m=d[0],u=d[1],p=Object(n.useState)(!1),g=Object(o.a)(p,2),h=g[0],b=g[1],v=Object(n.useState)(0),O=Object(o.a)(v,2),E=O[0],x=O[1],k=Object(W.a)((function(){return Object(B.a)(3e3,50).pipe(Object(G.a)(i))})),N=Object(n.useMemo)((function(){return Y(R(i))}),[i]);Object(D.a)(k,(function(e){var a=N[e];u((function(e){return e.map((function(e,t){return t===a?Object(f.a)({},e,{isFaceUp:!1}):e}))}))}),null,(function(){return b(!0)}));var M=Object(n.useMemo)((function(){return new U.a}),[]),I=Object(W.a)((function(){return M.pipe(Object(T.a)(600))}));Object(D.a)(I,(function(e){var a=e.isMatch,t=e.indices;b(!0),a?u((function(e){return e.map((function(e,a){return t.includes(a)?Object(f.a)({},e,{isMatched:!0,isActive:!1}):e}))})):(u((function(e){return e.map((function(e,a){return t.includes(a)?Object(f.a)({},e,{isFaceUp:!1,isActive:!1}):e}))})),x((function(e){return e+1})))}));var A=m.filter((function(e){return e.isMatched})).length/i*100;return r.a.createElement(j.a,{className:l.root},r.a.createElement("div",{className:l.gameInfo},r.a.createElement(J.a,{variant:"contained",color:"primary",size:"small",endIcon:r.a.createElement(V.a,null),onClick:t},"End game"),E>0&&r.a.createElement(y.a,null,"Misses: ",E)),r.a.createElement("div",{className:l.gameCards},m.map((function(e,a){return r.a.createElement(C,{className:l.imageCard,src:"/images/".concat(c.id,"/").concat(e.imageId,".png"),alt:"Card",isFaceUp:e.isFaceUp,isMatched:e.isMatched,isActive:e.isActive,onClick:function(){return function(e){var a=m[e];if(h&&!a.isFaceUp){u(m.map((function(a,t){return e===t?Object(f.a)({},a,{isFaceUp:!0,isActive:!0}):a})));var t=m.find((function(e){var a=e.isFaceUp,t=e.isMatched;return a&&!t}));if(t){var n=a.imageId===t.imageId;M.next({isMatch:n,indices:[e,t.displayIndex]}),b(!1)}}}(a)}})}))),r.a.createElement(z.a,{className:l.progress,variant:"determinate",value:A}),100===A&&r.a.createElement($.a,{open:100===A,disableBackdropClick:!0,"aria-labelledby":"alert-dialog-title"},r.a.createElement(H.a,{id:"alert-dialog-title"},"Congratulations"),r.a.createElement(q.a,null,r.a.createElement(K.a,{id:"alert-dialog-description"},"You matched ",i," cards with"," ",0===E?"no misses":1===E?"only one miss":"".concat(E," misses"),"!")),r.a.createElement(P.a,null,r.a.createElement(w.a,{color:"primary","aria-label":"add",onClick:t},r.a.createElement(X.a,null)))))}));var _=Object(p.a)((function(e){return{root:{display:"grid",placeItems:"center",height:"100vh",backgroundColor:e.palette.background.default}}}));var ee=function(){var e=_(),a=Object(n.useState)(null),t=Object(o.a)(a,2),i=t[0],c=t[1],l=Object(n.useCallback)((function(){return c(null)}),[]);return r.a.createElement("div",{className:e.root},i?r.a.createElement(Z,{gameSettings:i,onEndGame:l}):r.a.createElement(I,{onConfirmGameSettings:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[88,1,2]]]);
//# sourceMappingURL=main.743c192b.chunk.js.map