(this.webpackJsonpaviasales=this.webpackJsonpaviasales||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(9),i=c.n(a),r=(c(16),c(6)),l=c(5),o=c(8),h=c(2),u=(c(17),c.p+"static/media/Logo.2a735bae.svg"),j=(c(18),c(0));var b=function(){return Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{alt:"plane",src:u})})};c(20);var d=function(e){var t=e.handleFilterByPrice,c=e.filteredByPrice,n=e.handleFilterByDuration,s=e.filteredByDuration,a=e.handleFilterByPriceAndDuration,i=e.filteredByPriceAndDuration,r=c?"filter__text-wrap_blue":"",l=c?"filter__text_white":"",o=s?"filter__text-wrap_blue":"",h=s?"filter__text_white":"",u=i?"filter__text-wrap_blue":"",b=i?"filter__text_white":"";return Object(j.jsxs)("div",{className:"filter",children:[Object(j.jsx)("button",{className:"filter__text-wrap ".concat(r),onClick:t,children:Object(j.jsx)("p",{className:"filter__text ".concat(l),children:"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439"})}),Object(j.jsx)("button",{className:"filter__text-wrap ".concat(o),onClick:n,children:Object(j.jsx)("p",{className:"filter__text ".concat(h),children:"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439"})}),Object(j.jsx)("button",{className:"filter__text-wrap ".concat(u),onClick:a,children:Object(j.jsx)("p",{className:"filter__text ".concat(b),children:"\u041e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439"})})]})};c(21);var f=function(e){var t=e.changeValueAllTickets,c=e.changeValueWithoutTransfer,n=e.changeValueOneTransfer,s=e.changeValueTwoTransfer,a=e.changeValueThreeTransfer;return Object(j.jsxs)("form",{className:"checkboxes",children:[Object(j.jsx)("p",{className:"checkboxes__header",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}),Object(j.jsxs)("div",{className:"checkboxes__wrapper",children:[Object(j.jsx)("input",{className:"checkboxes__checkbox",type:"checkbox",id:"all",name:"valueAllTickets",onClick:t}),Object(j.jsx)("label",{htmlFor:"all"}),Object(j.jsx)("p",{className:"checkboxes__checkbox-text",children:"\u0412\u0441\u0435"})]}),Object(j.jsxs)("div",{className:"checkboxes__wrapper",children:[Object(j.jsx)("input",{className:"checkboxes__checkbox",type:"checkbox",id:"0",name:"valueWithoutTransfer",onClick:c}),Object(j.jsx)("label",{htmlFor:"0"}),Object(j.jsx)("p",{className:"checkboxes__checkbox-text",children:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"})]}),Object(j.jsxs)("div",{className:"checkboxes__wrapper",children:[Object(j.jsx)("input",{className:"checkboxes__checkbox",type:"checkbox",id:"1",name:"valueOneTransfer",onClick:n}),Object(j.jsx)("label",{htmlFor:"1"}),Object(j.jsx)("p",{className:"checkboxes__checkbox-text",children:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"})]}),Object(j.jsxs)("div",{className:"checkboxes__wrapper",children:[Object(j.jsx)("input",{className:"checkboxes__checkbox",type:"checkbox",id:"2",name:"valueTwoTransfers",onClick:s}),Object(j.jsx)("label",{htmlFor:"2"}),Object(j.jsx)("p",{className:"checkboxes__checkbox-text",children:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"})]}),Object(j.jsxs)("div",{className:"checkboxes__wrapper",children:[Object(j.jsx)("input",{className:"checkboxes__checkbox",type:"checkbox",id:"3",name:"valueThreeTransfers",onClick:a}),Object(j.jsx)("label",{htmlFor:"3"}),Object(j.jsx)("p",{className:"checkboxes__checkbox-text",children:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"})]})]})};c(22);var x=function(e){var t=e.handleClick,c=e.isVisibleButton;return Object(j.jsx)("button",{className:"button ".concat(c?"":"button_invisible"),onClick:t,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435 5 \u0431\u0438\u043b\u0435\u0442\u043e\u0432!"})},p=c(10),m=c(11),_=new(function(){function e(t){Object(p.a)(this,e),this.headers=t.headers,this.url=t.url}return Object(m.a)(e,[{key:"getSearchId",value:function(){return fetch("".concat(this.url,"/search"),{method:"GET",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getTickets",value:function(e){return fetch("".concat(this.url,"/tickets?searchId=").concat(e),{method:"GET",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({url:"https://front-test.beta.aviasales.ru"}),O=(c(23),c(24),c.p+"static/media/s7.0c032600.png"),g=c.p+"static/media/ey.19d4987b.png",k=c.p+"static/media/fv.f9579652.jpeg",v=c.p+"static/media/ek.fcc14ea0.png",T=c.p+"static/media/tg.a04f39b6.png",N=c.p+"static/media/su.0b483ca9.png",w=c.p+"static/media/mh.680a8928.png";c(25);function y(e){return e<10?"0"+e:e}var C=function(e){var t,c=e.origin,n=e.destination,s=e.timeOfDeparture,a=e.duration,i=e.stops,r=(t=a,Math.trunc(t/60)+"\u0447 "+t%60+"\u043c"),l=String(s).match(/\d\d:\d\d/),o=new Date(s),h=new Date(+o+6e4*a),u="".concat(y(h.getUTCHours()),":").concat(y(h.getUTCMinutes()));return Object(j.jsx)("div",{className:"ticket__info",children:Object(j.jsxs)("div",{className:"ticket__info-wrap",children:[Object(j.jsxs)("div",{className:"ticket__info-flight",children:[Object(j.jsx)("p",{className:"ticket__info-header-text",children:"".concat(c," - ").concat(n)}),Object(j.jsx)("p",{className:"ticket__info-text",children:"".concat(l," - ").concat(u)})]}),Object(j.jsxs)("div",{className:"ticket__info-flight",children:[Object(j.jsx)("p",{className:"ticket__info-header-text",children:"\u0412 \u043f\u0443\u0442\u0438"}),Object(j.jsx)("p",{className:"ticket__info-text",children:r})]}),Object(j.jsxs)("div",{className:"ticket__info-flight",children:[Object(j.jsx)("p",{className:"ticket__info-header-text",children:function(e){var t="";return 1===e.length?t+="1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430":e.length>1?t+="".concat(e.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"):0===e.length&&(t+="\u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),t}(i)}),Object(j.jsx)("p",{className:"ticket__info-text",children:i.join(" ")})]})]})})};var B=function(e){var t,c=e.ticket,n=c.price.toLocaleString("ru-RU"),s=c.segments.map((function(e,t){return Object(j.jsx)(C,{origin:e.origin,destination:e.destination,timeOfDeparture:e.date,duration:e.duration,stops:e.stops},t)}));return Object(j.jsxs)("div",{className:"ticket",children:[Object(j.jsxs)("div",{className:"ticket__header",children:[Object(j.jsx)("p",{className:"ticket__header-price",children:"".concat(n," \u0420")}),Object(j.jsx)("img",{className:"ticket__header-transporter",alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438-\u043f\u0435\u0440\u0435\u0432\u043e\u0437\u0447\u0438\u043a\u0430",src:(t=c.carrier,"S7"===t?O:"EY"===t?g:"FV"===t?k:"EK"===t?v:"TG"===t?T:"SU"===t?N:"MH"===t?w:O)})]}),Object(j.jsx)("div",{children:s})]})};var F=function(e){var t=e.tickets.map((function(e,t){return Object(j.jsx)(B,{ticket:e},t)}));return Object(j.jsx)("div",{children:t})};var S=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(h.a)(a,2),u=i[0],p=i[1],m=Object(n.useState)(0),O=Object(h.a)(m,2),g=O[0],k=O[1],v=Object(n.useState)(!1),T=Object(h.a)(v,2),N=T[0],w=T[1],y=Object(n.useState)(!1),C=Object(h.a)(y,2),B=C[0],S=C[1],D=Object(n.useState)(!1),V=Object(h.a)(D,2),P=V[0],A=V[1],M=Object(n.useState)({valueAllTickets:!1,valueWithoutTransfer:!1,valueOneTransfer:!1,valueTwoTransfers:!1,valueThreeTransfers:!1}),E=Object(h.a)(M,2),I=E[0],W=E[1],L=c.filter((function(e){return I.valueWithoutTransfer&&e.segments[0].stops.length+e.segments[1].stops.length===0||I.valueOneTransfer&&e.segments[0].stops.length+e.segments[1].stops.length===1||I.valueTwoTransfers&&e.segments[0].stops.length+e.segments[1].stops.length===2||I.valueThreeTransfers&&e.segments[0].stops.length+e.segments[1].stops.length===3||I.valueAllTickets&&e.segments[0].stops.length+e.segments[1].stops.length>=0||!I.valueWithoutTransfer&&!I.valueOneTransfer&&!I.valueTwoTransfers&&!I.valueThreeTransfers&&!I.valueAllTickets&&e.segments[0].stops.length+e.segments[1].stops.length>=0})),U=L.slice(0,5+5*g);console.log("ticketsToRender",U,"filteredTickets",L,"tickets",c);var G=Object(n.useCallback)((function(e){W(Object(o.a)(Object(o.a)({},I),{},Object(l.a)({},e.target.name,!I[e.target.name])))}),[I]);console.log("from function",I);var H=L.map((function(e){return e.segments})),J=L.map((function(e){return e.price})),R=Math.min.apply(Math,Object(r.a)(J)),K=L.filter((function(e){return e.price===R})),Y=H.map((function(e){return e[0].duration+e[1].duration})),q=Math.min.apply(Math,Object(r.a)(Y)),z=L.filter((function(e){return q===e.segments[0].duration+e.segments[1].duration})),Q=Y.sort((function(e,t){return e-t})).slice(0,10),X=L.filter((function(e){return Q.some((function(t){return t===e.segments[0].duration+e.segments[1].duration}))})).map((function(e){return e.price})),Z=Math.min.apply(Math,Object(r.a)(X)),$=L.filter((function(e){return e.price===Z}));return Object(n.useEffect)((function(){_.getSearchId().then((function(e){_.getTickets(e.searchId).then((function(e){s(e.tickets),p(e.tickets)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}),[]),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"app__filter-wrapper",children:[Object(j.jsx)(f,{changeValueOneTransfer:G,changeValueTwoTransfer:G,changeValueThreeTransfer:G,changeValueWithoutTransfer:G,changeValueAllTickets:G}),Object(j.jsxs)("div",{className:"app__filter",children:[Object(j.jsx)(d,{handleFilterByPrice:function(){!1===N&&!1===B&&!1===P?(w(!0),s(K)):!1===N&&!0===B&&!1===P?(S(!1),w(!0),s(u),s(K)):!1===N&&!1===B&&!0===P?(A(!1),w(!0),s(u),s(K)):(w(!1),s(u))},filteredByPrice:N,handleFilterByDuration:function(){!1===B&&!1===N&&!1===P?(S(!0),s(z)):!1===B&&!0===N&&!1===P?(w(!1),S(!0),s(z)):!1===B&&!1===N&&!0===P?(A(!1),S(!0),s(z)):(S(!1),s(u))},filteredByDuration:B,handleFilterByPriceAndDuration:function(){!1===N&&!1===B&&!1===P?(A(!0),s($)):!0===N&&!1===B&&!1===P?(w(!1),A(!0),s($)):!1===N&&!0===B&&!1===P?(S(!1),A(!0),s($)):!0===P&&(A(!1),s(u))},filteredByPriceAndDuration:P}),Object(j.jsx)(F,{tickets:U}),Object(j.jsx)(x,{handleClick:function(){k(g+1)},isVisibleButton:U.length<L.length})]})]})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),D()}],[[26,1,2]]]);
//# sourceMappingURL=main.62d99d32.chunk.js.map