(this["webpackJsonpreact-apps"]=this["webpackJsonpreact-apps"]||[]).push([[0],{14:function(e,n,r){},15:function(e,n,r){},17:function(e,n,r){},18:function(e,n,r){"use strict";r.r(n);var t=r(1),a=r.n(t),c=r(8),i=r.n(c),s=(r(14),r(15),r(9)),u=r(2),o=r(3),l=r(5),d=r(4),h=r(0);var j=function(e){return Object(h.jsx)("button",{className:"X"===e.value?"square isX":"O"===e.value?"square isO":"square",onClick:function(){return e.onClick()},children:e.value})},b=function(e){Object(l.a)(r,e);var n=Object(d.a)(r);function r(){return Object(u.a)(this,r),n.apply(this,arguments)}return Object(o.a)(r,[{key:"renderSquare",value:function(e){var n=this;return Object(h.jsx)(j,{value:this.props.squares[e],onClick:function(){return n.props.onClick(e)}})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(a.a.Component);function p(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<n.length;r++){var t=Object(s.a)(n[r],3),a=t[0],c=t[1],i=t[2];if(e[a]&&e[a]===e[c]&&e[a]===e[i])return e[a]}return null}a.a.Component;var f=r(6);var v=function(e){return e.ceils>=100?Object(h.jsx)("p",{style:{color:"green",fontWeight:"bold"},children:"\u0412\u043e\u0434\u0430 \u0437\u0430\u043a\u0438\u043f\u0438\u0442."}):Object(h.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:"\u0412\u043e\u0434\u0430 \u043d\u0435 \u0437\u0430\u043a\u0438\u043f\u0438\u0442."})},O={c:"\u0426\u0435\u043b\u044c\u0441\u0438\u044f",f:"\u0424\u0430\u0440\u0435\u043d\u0433\u0435\u0439\u0442\u0430"},g=function(e){Object(l.a)(r,e);var n=Object(d.a)(r);function r(e){var t;return Object(u.a)(this,r),(t=n.call(this,e)).handleChange=t.handleChange.bind(Object(f.a)(t)),t}return Object(o.a)(r,[{key:"handleChange",value:function(e){this.props.onTemperatureChange(e.target.value)}},{key:"render",value:function(){var e=this.props.temperature,n=this.props.scale;return Object(h.jsxs)("fieldset",{children:[Object(h.jsxs)("legend",{children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0432 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445 ",O[n],":"]}),Object(h.jsx)("input",{value:e,onChange:this.handleChange})]})}}]),r}(a.a.Component),C={fieldset:{background:"white"}};function m(e){return 5*(e-32)/9}function x(e){return 9*e/5+32}function k(e,n){var r=parseFloat(e);if(Number.isNaN(r))return"";var t=n(r);return(Math.round(1e3*t)/1e3).toString()}a.a.Component;var q={clock:{background:"black",color:"white",padding:"20px"}};a.a.Component,r(17),a.a.Component;var S=function(e){return Object(h.jsx)("div",{className:"center",children:Object(h.jsx)("h1",{children:"sldjkgflsdg"})})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,20)).then((function(n){var r=n.getCLS,t=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;r(e),t(e),a(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),y()}},[[18,1,2]]]);
//# sourceMappingURL=main.748415b3.chunk.js.map