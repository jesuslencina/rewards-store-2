(this["webpackJsonprewards-store-2"]=this["webpackJsonprewards-store-2"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),i=c(11),r=c.n(i),o=(c(17),c(18),c(19),c(2)),l=c(4),d=c.n(l),j=c(6),u=c(3),b=Object(a.createContext)();function m(e){var t=new Headers;t.append("Content-Type","application/json"),t.append("Accept","application/json"),t.append("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmU0MjIyMzI2ZjdkMjAwMjA0MTE0ZDMiLCJpYXQiOjE2MDg3ODY0Njd9.y-gmTy9zJvIdR9OecwmPGOtBXagHyD9sSNiYK0_lNe4"),t.append("Cookie","__cfduid=d1c80f21dcaa095448f1cb80cfb82fb1a1607248835");var c={method:"GET",headers:t,redirect:"follow"},n={method:"GET",headers:t,redirect:"follow"},i=Object(a.useState)({user:{id:"0",name:"Loading...",points:0,redeemHistory:{},createDate:"new Date(1510171520852)"}}),r=Object(u.a)(i,2),l=r[0],m=r[1],O=Object(a.useState)({}),h=Object(u.a)(O,2),f=h[0],p=h[1],x=Object(a.useState)({filtering:1,displayOffset:0,amountToDisplay:12,amountOfProducts:0,viewingHistory:!1,modal:{class:"",title:"",msg:""}}),g=Object(u.a)(x,2),v=g[0],y=g[1],N=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coding-challenge-api.aerolab.co/user/me",c).then((function(e){return e.text()})).then((function(e){return t=JSON.parse(e)})).catch((function(e){return console.log("error",e)}));case 2:m({user:t});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coding-challenge-api.aerolab.co/products",n).then((function(e){return e.text()})).then((function(e){return p(JSON.parse(e))})).catch((function(e){return console.log("error",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(d.a.mark((function e(c){var s,a,n,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify({productId:c}),n={method:"POST",headers:t,body:a,redirect:"follow"},e.next=4,fetch("https://coding-challenge-api.aerolab.co/redeem",n).then((function(e){return e.text()})).then((function(e){s=e})).catch((function(e){s=e}));case 4:N(),i=JSON.stringify(s).includes("successfully")?"SUCCESS":s.replace("{"," ").replace("}"," ").toUpperCase(),k({class:"is-active",title:i,msg:"Operation: Redeeming a product"});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(d.a.mark((function e(c){var s,a,n,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(l.user.points+c>1e4)){e.next=4;break}s="Error: Too many points. Spend some first",e.next=9;break;case 4:return a=JSON.stringify({amount:c}),n={method:"POST",headers:t,body:a,redirect:"follow"},e.next=8,fetch("https://coding-challenge-api.aerolab.co/user/points",n).then((function(e){return e.text()})).then((function(e){return s=e})).catch((function(e){s=e}));case 8:N();case 9:i=JSON.stringify(s).includes("Updated")?"SUCCESS":s.replace("{"," ").replace("}"," ").toUpperCase(),k({class:"is-active",title:i,msg:"Operation: Redeeming points"});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){y(Object(o.a)(Object(o.a)({},v),{},{modal:{class:e.class,title:e.title,msg:e.msg}}))};return Object(a.useEffect)((function(){N(),C()}),[]),Object(s.jsx)(b.Provider,{value:{userData:l,setUserData:m,products:f,settings:v,setSettings:y,fetchUser:N,fetchProducts:C,fetchMorePoints:S,redeemProduct:w,closeModal:function(e){y(Object(o.a)(Object(o.a)({},v),{},{modal:{class:"",title:"",msg:""}}))}},children:e.children})}var O=c(9);var h=function(e){return Object(s.jsxs)("div",{className:"modal my-modal ".concat(e.modal),children:[Object(s.jsx)("div",{className:"modal-background",onClick:e.handleModal}),Object(s.jsx)("div",{className:"modal-card",children:Object(s.jsxs)("section",{className:"modal-card-body my-modal-body",children:[Object(s.jsx)("h2",{className:"title mb-5",children:"Select the amount of your voucher:"}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{onClick:function(){e.fetchMorePoints(7500),e.handleModal()},className:"button my-button",children:"7500"}),Object(s.jsx)("button",{onClick:function(){e.fetchMorePoints(5e3),e.handleModal()},className:"button my-button",children:"5000"}),Object(s.jsx)("button",{onClick:function(){e.fetchMorePoints(1e3),e.handleModal()},className:"button my-button",children:"1000"})]}),Object(s.jsx)("button",{className:"button is-danger my-cancel-button",onClick:e.handleModal,children:"Cancel"})]})})]})},f=c.p+"static/media/aerolab-logo.0a8fb170.svg",p=c.p+"static/media/coin.b8bc711d.svg";c(21);var x=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),r=Object(u.a)(i,2),l=r[0],d=r[1],j=Object(a.useContext)(b),m=j.userData,x=j.fetchMorePoints,g=j.settings,v=j.setSettings,y=function(){""===l?(d("is-active"),O.a.on()):(d(""),O.a.off())};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation",children:[Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)("a",{className:"navbar-item",href:"https://aerolab.co/",children:Object(s.jsx)("img",{src:f,width:"32",height:"36"})}),Object(s.jsxs)("a",{role:"button",className:"navbar-burger ".concat(c),"aria-label":"menu","aria-expanded":"false",onClick:function(){n(""===c?"is-active":"")},"data-target":"navbarBasicExample",children:[Object(s.jsx)("span",{"aria-hidden":"true"}),Object(s.jsx)("span",{"aria-hidden":"true"}),Object(s.jsx)("span",{"aria-hidden":"true"})]})]}),Object(s.jsx)("div",{className:"navbar-end",children:Object(s.jsxs)("div",{className:"navbar-menu ".concat(c),children:[Object(s.jsx)("div",{className:"navbar-start",children:Object(s.jsxs)("div",{className:"user-data navbar-item",children:[Object(s.jsx)("p",{children:m.user.name}),Object(s.jsxs)("div",{children:[Object(s.jsx)("b",{children:m.user.points})," ",Object(s.jsx)("img",{src:p,alt:"Coins"})]})]})}),Object(s.jsx)("div",{className:"navbar-item",children:Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("a",{className:"button my-button",onClick:function(){return g.viewingHistory?v(Object(o.a)(Object(o.a)({},g),{},{viewingHistory:!1})):v(Object(o.a)(Object(o.a)({},g),{},{viewingHistory:!0}))},children:g.viewingHistory?"View Products":"View History"}),Object(s.jsx)("a",{className:"button is-primary",onClick:y,children:Object(s.jsx)("strong",{children:"REDEEM POINTS"})})]})})]})})]}),Object(s.jsx)(h,{modal:l,handleModal:y,fetchMorePoints:x})]})},g=(c(22),c.p+"static/media/header-x1.b6f067c6.png");var v=function(e){return Object(s.jsxs)("div",{className:"modal ".concat(e.class),children:[Object(s.jsx)("div",{className:"modal-background",onClick:e.close}),Object(s.jsx)("div",{className:"modal-card",children:Object(s.jsxs)("section",{className:"modal-card-body my-modal-body",style:{backgroundColor:"SUCCESS"===e.title?"#1ddb29":"#db241a"},children:[Object(s.jsx)("h2",{className:"has-text-white",children:e.title}),Object(s.jsx)("p",{className:"has-text-white mb-4",children:e.msg}),Object(s.jsx)("button",{className:"button is-secondary",onClick:e.close,children:"OK"})]})})]})};var y=function(){var e=Object(a.useContext)(b),t=e.settings,c=e.closeModal;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("img",{src:g,alt:"Header",className:"header-bg"}),Object(s.jsx)("h1",{className:"header-heading",children:"Rewards Store"})]}),Object(s.jsx)(v,{title:t.modal.title,msg:t.modal.msg,class:t.modal.class,close:c})]})},N=c.p+"static/media/arrow-left.e6eb9be1.svg",C=c.p+"static/media/arrow-right.3306c112.svg";c(23);var w=function(){var e=Object(a.useContext)(b),t=e.settings,c=e.setSettings,n=e.products,i=function(e){c(Object(o.a)(Object(o.a)({},t),{},{filtering:e}))};return Object(s.jsxs)("div",{className:"my-filters",children:[Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("b",{children:"Filter by:"}),Object(s.jsx)("a",{onClick:function(){return i(1)},className:"button ".concat(1===t.filtering?"orange":""),children:"Most recent"}),Object(s.jsx)("a",{onClick:function(){return i(2)},className:"button ".concat(2===t.filtering?"orange":""),children:"Lowest price"}),Object(s.jsx)("a",{onClick:function(){return i(3)},className:"button ".concat(3===t.filtering?"orange":""),children:"Highest price"})]}),Object(s.jsxs)("div",{className:"pag-buttons",children:[t.displayOffset+t.amountToDisplay<n.length?Object(s.jsxs)("p",{className:"has-text-black",children:[t.displayOffset+t.amountToDisplay," of"," ",n.length]}):Object(s.jsxs)("p",{className:"has-text-black",children:[n.length," of ",n.length]}),Object(s.jsx)("img",{src:N,onClick:function(){if(t.displayOffset>=t.amountToDisplay){var e=t.displayOffset-t.amountToDisplay;c(Object(o.a)(Object(o.a)({},t),{},{displayOffset:e}))}},alt:"Left arrow"}),Object(s.jsx)("img",{src:C,onClick:function(){if(Object.values(n).length/t.displayOffset===1/0)c(Object(o.a)(Object(o.a)({},t),{},{displayOffset:t.amountToDisplay}));else if(Object.values(n).length-t.amountToDisplay>t.displayOffset){var e=t.displayOffset+t.amountToDisplay;c(Object(o.a)(Object(o.a)({},t),{},{displayOffset:e}))}},alt:"Right arrow"})]})]})},S=c(10),k=c.p+"static/media/buy-blue.c5c4f01c.svg";var M=function(e){return Object(s.jsx)("div",{className:"product-hover ".concat(e.cost>e.userpoints?"doesnt-afford":"does-afford"),children:e.cost>e.userpoints?Object(s.jsxs)("div",{children:[Object(s.jsxs)("span",{children:["You're missing ",e.cost-e.userpoints]}),Object(s.jsx)("img",{src:p,alt:"Coins"})]}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["REDEEM FOR ",e.cost]}),Object(s.jsx)("img",{src:p,alt:"Coins"})]})})};var D=function(e){var t=Object(a.useContext)(b),c=t.userData,n=t.redeemProduct,i=Object(a.useState)(!1),r=Object(u.a)(i,2),o=r[0],l=r[1];return Object(s.jsxs)("div",{onClick:function(){e.cost<=c.user.points&&n(e.id)},onMouseOver:function(){l(!0)},onMouseLeave:function(){l(!1)},className:"card m-3 my-product",children:[o?Object(s.jsx)(M,{cost:e.cost,userpoints:c.user.points}):"",Object(s.jsx)("div",{className:"top-right",children:e.cost>c.user.points?Object(s.jsxs)("div",{children:[Object(s.jsxs)("span",{children:["You're missing ",e.cost-c.user.points]}),Object(s.jsx)("img",{src:p,alt:"Coin"})]}):Object(s.jsx)("img",{src:k,alt:"Buy"})}),Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("figure",{className:"image is-4by3",children:Object(s.jsx)("img",{src:e.img,alt:e.name})})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("p",{className:"has-text-primary m-0 p-0",children:e.category}),Object(s.jsx)("h4",{className:"is-size-5 m-0",children:e.name})]})]})};c(24);var T=function(){var e=Object(a.useContext)(b),t=e.products,c=e.settings,n=function(e){switch(c.filtering){case 1:return e;case 2:return Object(S.a)(e).sort((function(e,t){return e.cost<t.cost?-1:e.cost>t.cost?1:0}));case 3:return Object(S.a)(e).sort((function(e,t){return e.cost<t.cost?1:e.cost>t.cost?-1:0}));default:return e}}(Object.values(t)).map((function(e){return Object(s.jsx)(D,{img:e.img.url,name:e.name,category:e.category,id:e._id,cost:e.cost},e._id)}));return Object(s.jsx)("div",{className:"container my-product-container",children:n.slice(c.displayOffset,c.displayOffset+c.amountToDisplay)})};var P=function(e){return Object(s.jsxs)("div",{className:"card m-3 my-product",children:[Object(s.jsx)("div",{className:"top-right",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:e.cost}),Object(s.jsx)("img",{src:p,alt:"Coin"})]})}),Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("figure",{className:"image is-4by3",children:Object(s.jsx)("img",{src:e.img,alt:e.name})})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("p",{className:"has-text-primary m-0 p-0",children:e.category}),Object(s.jsx)("h4",{className:"is-size-5 m-0",children:e.name})]})]})};var E=function(){var e=Object(a.useContext)(b).userData,t=Object.values(e.user.redeemHistory).map((function(e){return Object(s.jsx)(P,{img:e.img.url,name:e.name,category:e.category,id:e._id,cost:e.cost},e._id)}));return Object(s.jsxs)("div",{className:"history",children:[Object(s.jsx)("h1",{children:"History"}),Object(s.jsx)("div",{className:"container my-product-container",children:t})]})};var H=function(){var e=Object(a.useContext)(b).settings;return Object(s.jsx)("main",{children:e.viewingHistory?Object(s.jsx)(E,{}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(w,{})," ",Object(s.jsx)(T,{})]})})};var I=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(m,{children:[Object(s.jsx)(x,{}),Object(s.jsx)(y,{}),Object(s.jsx)(H,{})]})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(I,{})}),document.getElementById("root")),J()}],[[25,1,2]]]);
//# sourceMappingURL=main.87f9911f.chunk.js.map