(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=n(0),m=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date},t.timerId=setInterval((function(){t.setState({date:new Date}),console.log(t.state.date.toLocaleTimeString())}),1e3),t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){return this.timerId}},{key:"componentDidUpdate",value:function(t){var e=t.name,n=this.props.name;e!==n&&console.log("Renamed from ".concat(e," to ").concat(n))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"clock",children:[Object(u.jsx)("strong",{children:this.props.name})," time is ",this.state.date.toLocaleTimeString()]})}}]),n}(l.Component);n(13);function d(){var t=Math.random().toString().slice(2,6);return"Clock-".concat(t," ")}var h=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:d()},t.timer=setInterval((function(){t.setState({clockName:d()})}),3300),t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;return document.addEventListener("contextmenu",(function(){t.setState({hasClock:!1})})),document.addEventListener("click",(function(){t.setState({hasClock:!0})})),this.timer}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(m,{name:n})]})}}]),n}(l.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.781d463c.chunk.js.map