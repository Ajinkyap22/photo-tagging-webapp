(this["webpackJsonpphoto-tagging"]=this["webpackJsonpphoto-tagging"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var s=a(3),c=a.n(s),n=a(20),r=a.n(n),l=(a(25),a(4)),i=(a(26),a.p+"static/media/level-1.6f474ce0.jpg"),o=a.p+"static/media/level-2.fd52eae7.jpg",d=a.p+"static/media/level-3.4d619032.jpg",b=(a(32),a(1));var m=function(e){return Object(s.useEffect)((function(){var t;return!e.start||e.win||e.show?clearInterval(t):t=setInterval((function(){e.setTime((function(e){return e+1}))}),1e3),function(){return clearInterval(t)}}),[e]),Object(b.jsx)("div",{className:"text-light lead",children:Math.floor(e.time/3600%60).toString().padStart(2,"0")+":"+Math.floor(e.time/60%60).toString().padStart(2,"0")+":"+Math.floor(e.time%60).toString().padStart(2,"0")})};var j=function(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark py-3 fixed-top",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h2",{className:"navbar-brand",children:"Where's That Pokemon?"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navmenu",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navmenu",children:Object(b.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(b.jsx)("li",{className:"nav-item px-2 py-1",children:Object(b.jsx)(m,{start:e.start,show:e.show,win:e.win,time:e.time,setTime:e.setTime})}),Object(b.jsx)("li",{className:"nav-item px-2 py-2 py-md-0",children:Object(b.jsx)("button",{className:"btn btn-light",onClick:e.displayModal,children:"Pokemon"})}),Object(b.jsx)("li",{className:"nav-item px-2 py-2 py-md-0",children:Object(b.jsx)("button",{className:"btn btn-secondary",onClick:e.endGame,children:"Back To Menu"})})]})})]})})},u=a.p+"static/media/snubbull.52b30ae4.png",h=a.p+"static/media/heatmor.b7619b4e.png",O=a.p+"static/media/shroomish.c1c46d5d.png",p=a.p+"static/media/bruxish.de05a0cc.png",x=a.p+"static/media/kricketot.8a515d82.png",g=a.p+"static/media/combee.0206ed94.png",v=a.p+"static/media/charjabug.fd0540f5.png",f=a.p+"static/media/litwick.39e28951.png",N=a.p+"static/media/sewaddle.ccc5bcd8.png";var y=function(e){var t=Object(s.useState)({easy:["Snubbull",u],medium:["Heatmor",h],hard:["Shroomish",O]}),a=Object(l.a)(t,2),c=a[0],n=a[1];return Object(s.useEffect)((function(){1===e.level&&n({easy:["Snubbull",u],medium:["Heatmor",h],hard:["Shroomish",O]});2===e.level&&n({easy:["Bruxish",p],medium:["Kricketot",x],hard:["Combee",g]});3===e.level&&n({easy:["Charjabug",v],medium:["Litwick",f],hard:["Sewaddle",N]})}),[e.level]),Object(b.jsx)("div",{className:e.show?"modal show":"modal",tabIndex:"-1",children:Object(b.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",children:"Pokemon To Find"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:e.closeModal})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsx)("li",{className:"list-group-item ",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("img",{src:c.easy[1],alt:"",className:"img-fluid w-50"})}),Object(b.jsxs)("div",{className:"col g-4",children:[Object(b.jsx)("div",{className:"lead",children:c.easy[0]}),Object(b.jsx)("div",{className:"text-success fw-bold",children:"Easy"})]})]})}),Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col py-2",children:Object(b.jsx)("img",{src:c.medium[1],alt:"",className:"img-fluid w-50"})}),Object(b.jsxs)("div",{className:"col g-4",children:[Object(b.jsx)("div",{className:"lead",children:c.medium[0]}),Object(b.jsx)("div",{className:"text-warning fw-bold",children:"Medium"})]})]})}),Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("img",{src:c.hard[1],alt:"",className:"img-fluid w-50"})}),Object(b.jsxs)("div",{className:"col g-4",children:[Object(b.jsx)("div",{className:"lead",children:c.hard[0]}),Object(b.jsx)("div",{className:"text-danger fw-bold",children:"Hard"})]})]})})]})}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:e.closeModal,children:"OK"})})]})})})};var k=function(e){return Object(b.jsxs)("div",{className:"btn-group-vertical w-100",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-success bg-gradient mb-2",onClick:e.changeLevel.bind(null,1),children:"Level 1"}),Object(b.jsxs)("button",{type:"button",className:"btn btn-warning bg-gradient mb-2",onClick:e.changeLevel.bind(null,2),disabled:!e.unlocked[2]||"",children:["Level 2"," ",Object(b.jsx)("i",{className:"bi bi-lock-fill",hidden:!!e.unlocked[2]})]}),Object(b.jsxs)("button",{type:"button",className:"btn btn-danger bg-gradient mb-2",onClick:e.changeLevel.bind(null,3),disabled:!e.unlocked[3]||"",children:["Level 3"," ",Object(b.jsx)("i",{className:"bi bi-lock-fill",hidden:!!e.unlocked[3]})]})]})};var S=function(e){return Object(b.jsx)("div",{className:e.start?"modal":"modal show",tabIndex:"-1",children:Object(b.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(b.jsxs)("div",{className:"modal-content bg-light bg-gradient",children:[Object(b.jsx)("div",{className:"modal-header",children:Object(b.jsx)("h5",{className:"modal-title",children:"Select a Level"})}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsx)(k,{changeLevel:e.changeLevel,unlocked:e.unlocked})}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:e.handleStart,children:"Start"})})]})})})},w=a(13),C=a.n(w),M=a(12),T=a(8),L=a(17);var P=function(e){return Object(b.jsxs)("div",{className:"btn-group-vertical btn-group-md p-3 menu",hidden:!e.showMenu,style:{position:"absolute",top:"".concat(e.yPos,"px"),left:"".concat(e.xPos,"px"),zIndex:1040},children:[Object(b.jsx)("button",{type:"button",className:"btn btn-dark border border-secondary rounded",onClick:e.handleMenu.bind(this,e.coords[0],e.coords[1],"easy"),hidden:!!e.progress.easy,children:e.names[0]}),Object(b.jsx)("button",{type:"button",className:"btn btn-dark border border-secondary rounded",onClick:e.handleMenu.bind(this,e.coords[0],e.coords[1],"medium"),hidden:!!e.progress.medium,children:e.names[1]}),Object(b.jsx)("button",{type:"button",className:"btn btn-dark border border-secondary rounded",onClick:e.handleMenu.bind(this,e.coords[0],e.coords[1],"hard"),hidden:!!e.progress.hard,children:e.names[2]})]})};var I=function(e){return Object(b.jsx)("div",{className:"position-fixed start-50 translate-middle-x",style:{top:"15%",maxWidth:"300px"},children:Object(b.jsx)("div",{className:"notification align-items-center text-white border-0 ".concat(e.correct?"bg-success":"bg-danger"),role:"alert","aria-live":"assertive","aria-atomic":"true",hidden:!e.showToast,children:Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)("div",{className:"text-center flex-grow-1",style:{padding:".75rem"},children:e.correct?"Gotcha! You found a Pokemon.":"Wrong! Keep Looking."}),Object(b.jsx)("button",{type:"button",className:"btn-close btn-close-white me-2 m-auto","aria-label":"Close",onClick:e.hideToast})]})})})},Y=a(15);a(33);Y.a.initializeApp({apiKey:"AIzaSyB8-xfERk2ZOCe-xUOyQYfSDh9Kexz71eM",authDomain:"where-s-that-pokemon.firebaseapp.com",projectId:"where-s-that-pokemon",storageBucket:"where-s-that-pokemon.appspot.com",messagingSenderId:"251071800530",appId:"1:251071800530:web:8864b7d82994d6ffdab90b"});var B=Y.a.firestore();var E=function(e){var t=Object(s.useState)(0),a=Object(l.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(0),i=Object(l.a)(r,2),o=i[0],d=i[1],m=Object(s.useState)([0,0]),j=Object(l.a)(m,2),u=j[0],h=j[1],O=Object(s.useState)(!1),p=Object(l.a)(O,2),x=p[0],g=p[1],v=Object(s.useState)(["Snubbull","Heatmor","Shroomish"]),f=Object(l.a)(v,2),N=f[0],y=f[1],k=Object(s.useState)(!1),S=Object(l.a)(k,2),w=S[0],Y=S[1],E=Object(s.useState)(!1),H=Object(l.a)(E,2),W=H[0],A=H[1],K=Object(s.useRef)();Object(s.useEffect)((function(){1===e.level&&y(["Snubbull","Heatmor","Shroomish"]),2===e.level&&y(["Bruxish","Kricketot","Combee"]),3===e.level&&y(["Charjabug","Litwick","Sewaddle"])}),[e.level]),Object(s.useEffect)((function(){W&&setTimeout((function(){return A(!1)}),3e3)}),[W]),Object(s.useEffect)((function(){function t(){return(t=Object(L.a)(C.a.mark((function t(){var a,s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setProgress({easy:!1,medium:!1,hard:!1}),e.setUnlocked(Object(T.a)(Object(T.a)({},e.unlocked),{},Object(M.a)({},e.level+1,!0))),a=B.doc("bestTimes/level-".concat(e.level)),t.next=5,a.get().then((function(e){return e.data()}));case 5:s=t.sent,e.time<s.time||0===s.time?e.setBest(e.time):(e.setBest(s.time),e.setUser(s.user)),e.setWin(!0);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object.values(e.progress).every((function(e){return e}))&&function(){t.apply(this,arguments)}()}),[e]);var U=function(){var t=Object(L.a)(C.a.mark((function t(a,s,c){var n,r,l,i,o,d,b,m,j;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=K.current.offsetWidth,r=K.current.offsetHeight,l=+document.querySelector(".navbar").clientHeight,i=a/n,o=(s-l)/r,d="answers/level-".concat(e.level),t.next=8,B.doc(d).get().then((function(e){return e.data()}));case 8:b=t.sent,m=Math.abs(i-b[c].relX)<.02,j=Math.abs(o-b[c].relY)<.02,g(!1),m&&j?(Y(!0),e.setProgress(Object(T.a)(Object(T.a)({},e.progress),{},Object(M.a)({},c,!0)))):Y(!1),A(!0);case 14:case"end":return t.stop()}}),t)})));return function(e,a,s){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{ref:K,children:[Object(b.jsx)("img",{src:e.background,alt:"",className:"img-fluid w-100",onClick:function(e){e.preventDefault(),K.current.offsetWidth-e.pageX<144?n(e.pageX-144):n(e.pageX),K.current.offsetHeight-e.pageY<143?d(e.pageY-143):d(e.pageY),h([e.pageX,e.pageY]),g(!x)},style:{objectFit:"cover"}}),Object(b.jsx)(P,{xPos:c,yPos:o,coords:u,showMenu:x,names:N,handleMenu:U,progress:e.progress}),Object(b.jsx)(I,{correct:w,hideToast:function(){A(!1)},showToast:W})]})};var H=function(){return Object(b.jsx)("footer",{className:"bg-dark fixed-bottom text-light py-1",children:Object(b.jsxs)("p",{className:"m-0",children:["Built by \xa0",Object(b.jsx)("a",{href:"https://github.com/Ajinkyap22",target:"_blank",rel:"noreferrer noopener",className:"link-danger",children:"Ajinkya Palaskar"}),"\xa0 | \xa0",Object(b.jsx)("a",{href:"https://github.com/Ajinkyap22/photo-tagging-webapp",target:"_blank",rel:"noreferrer noopener",className:"link-danger",children:"Source code"})]})})};var W=function(e){var t=Object(s.useState)(""),a=Object(l.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(!1),i=Object(l.a)(r,2),o=i[0],d=i[1];return Object(s.useEffect)((function(){o&&setTimeout((function(){return d(!1)}),3e3)})),Object(b.jsx)("div",{className:e.win?"modal show":"modal",tabIndex:"-1",children:Object(b.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsx)("div",{className:"modal-header",children:Object(b.jsx)("h5",{className:"modal-title",children:"Congratulations! Level Completed."})}),Object(b.jsxs)("div",{className:"modal-body",children:[Object(b.jsxs)("p",{className:"lead",children:["Your Time:",Object(b.jsx)("span",{className:"fw-bold text-danger",children:" ".concat(Math.floor(e.time/3600%60).toString().padStart(2,"0"),":").concat(Math.floor(e.time/60%60).toString().padStart(2,"0"),":").concat(Math.floor(e.time%60).toString().padStart(2,"0"))})]}),Object(b.jsx)("p",{className:"text-success",children:e.best>=e.time?"You just created a new time record!":"Best Time: ".concat(Math.floor(e.best/3600%60).toString().padStart(2,"0"),":").concat(Math.floor(e.best/60%60).toString().padStart(2,"0"),":").concat(Math.floor(e.best%60).toString().padStart(2,"0")," - ").concat(e.user)}),Object(b.jsx)("form",{onSubmit:function(t){t.preventDefault(),B.doc("bestTimes/level-".concat(e.level)).update({time:e.time,user:c}),d(!0),document.querySelector("#username").value=""},hidden:!(e.best>=e.time),children:Object(b.jsxs)("div",{className:"my-2",children:[Object(b.jsx)("label",{htmlFor:"username",className:"form-label fw-bold",children:"Enter Your Username To Save Your Record"}),Object(b.jsx)("input",{type:"text",className:"form-control w-50 m-auto",id:"username",placeholder:"",required:!0,maxLength:"25",onChange:function(e){n(e.target.value)}}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Save"})]})}),Object(b.jsx)("div",{className:"position-fixed bottom-0 m-5 end-0",style:{maxWidth:"300px"},children:Object(b.jsx)("div",{className:"notification align-items-center border-0 bg-primary text-light",role:"alert","aria-live":"assertive","aria-atomic":"true",hidden:!o,children:Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)("div",{className:"text-center flex-grow-1",style:{padding:".75rem"},children:"Your record has been saved"}),Object(b.jsx)("button",{type:"button",className:"btn-close me-2 m-auto","aria-label":"Close",onClick:function(){d(!1)}})]})})})]}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:e.endGame,children:"Play Another Level"})})]})})})};var A=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!1),r=Object(l.a)(n,2),m=r[0],u=r[1],h=Object(s.useState)(1),O=Object(l.a)(h,2),p=O[0],x=O[1],g=Object(s.useState)(i),v=Object(l.a)(g,2),f=v[0],N=v[1],k=Object(s.useState)(!1),w=Object(l.a)(k,2),C=w[0],M=w[1],T=Object(s.useState)(0),L=Object(l.a)(T,2),P=L[0],I=L[1],Y=Object(s.useState)({1:!0,2:!1,3:!1}),B=Object(l.a)(Y,2),A=B[0],K=B[1],U=Object(s.useState)({easy:!1,medium:!1,hard:!1}),G=Object(l.a)(U,2),X=G[0],z=G[1],D=Object(s.useState)(0),q=Object(l.a)(D,2),F=q[0],R=q[1],J=Object(s.useState)(""),_=Object(l.a)(J,2),Q=_[0],Z=_[1];function V(){c(!0)}function $(){u(!1),M(!1),I(0),z({easy:!1,medium:!1,hard:!1})}return Object(b.jsxs)("div",{className:"App",onClick:a?function(){c(!1)}:null,children:[Object(b.jsx)(j,{start:m,show:a,displayModal:V,win:C,time:P,setTime:I,endGame:$}),Object(b.jsx)("div",{className:"container-fluid px-0",children:Object(b.jsx)(E,{background:f,level:p,setWin:M,setUnlocked:K,unlocked:A,time:P,setBest:R,setUser:Z,progress:X,setProgress:z})}),Object(b.jsx)(y,{show:a,start:m,level:p}),Object(b.jsx)(S,{start:m,changeLevel:function(e){x(e),N((function(){return 1===e?i:2===e?o:d}))},handleStart:function(){u(!0),V()},unlocked:A}),Object(b.jsx)(W,{win:C,endGame:$,time:P,best:F,level:p,user:Q}),Object(b.jsx)("div",{className:"overlay",hidden:!(!m||a||C)}),Object(b.jsx)(H,{})]})};a(30);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4c6aaa63.chunk.js.map