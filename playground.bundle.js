webpackJsonp([4],{1035:function(e,t,n){var o=n(954);"string"==typeof o&&(o=[[e.i,o,""]]);n(24)(o,{});o.locals&&(e.exports=o.locals)},1046:function(e,t,n){e.exports=n(207)},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(16),r=(n.n(o),n(356));t.default=n.i(o.createScene)({name:"playground",component:r.a})},356:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(1035),i=(n.n(c),n(1)),a=n.n(i),s=n(15),f=n.n(s),l=n(8);n.n(l);n.d(t,"a",function(){return m});var p,b,y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d={1:"book1",2:"book2"},h=n.i(l.kea)({reducers:function(e){e.actions;return{books:[d,f.a.object,{}]}}}),k=(p=n.i(l.kea)({selectors:function(e){e.selectors;return{book:[function(){return[h.selectors.books,function(e,t){return t.bookId}]},function(e,t){return e[t]},f.a.object]}}}),p(b=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),y(t,[{key:"render",value:function(){var e=this.props.book;return a.a.createElement("div",null,e)}}]),t}(i.Component))||b),m=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),y(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"playground-scene"},a.a.createElement(k,{bookId:1}),a.a.createElement(k,{bookId:2}))}}]),t}(i.Component)},954:function(e,t,n){t=e.exports=n(23)(),t.push([e.i,".playground-scene {\n  margin: 20px;\n}\n",""])}},[1046]);