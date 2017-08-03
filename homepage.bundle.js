webpackJsonp([2],{1021:function(e,n){e.exports="import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\nimport { take, race, put } from 'redux-saga/effects'\n\nimport delay from '~/utils/delay' // promise-based timeout helper\nimport range from '~/utils/range' // range(3) === [0, 1, 2]\n\nimport images from './images'     // array of objects [{ src, author }, ...]\n\n@kea({\n  actions: () => ({\n    updateSlide: index => ({ index })\n  }),\n\n  reducers: ({ actions, key }) => ({\n    currentSlide: [0, PropTypes.number, {\n      [actions.updateSlide]: (state, payload) => payload.index % images.length\n    }]\n  }),\n\n  selectors: ({ selectors }) => ({\n    currentImage: [\n      () => [selectors.currentSlide],\n      (currentSlide) => images[currentSlide],\n      PropTypes.object\n    ]\n  }),\n\n  start: function * () {\n    const { updateSlide } = this.actions\n\n    while (true) {\n      const { timeout } = yield race({\n        change: take(updateSlide.toString()),\n        timeout: delay(5000)\n      })\n\n      if (timeout) {\n        const currentSlide = yield this.get('currentSlide')\n        yield put(updateSlide(currentSlide + 1))\n      }\n    }\n  }\n})\nexport default class Slider extends Component {\n  render () {\n    const { currentSlide, currentImage } = this.props\n    const { updateSlide } = this.actions\n\n    const title = `Image copyright by ${currentImage.author}`\n\n    return (\n      <div className='kea-slider'>\n        <img src={currentImage.src} alt={title} title={title} />\n        <div className='buttons'>\n          {range(images.length).map(i => (\n            <span key={i}\n                  className={i === currentSlide ? 'selected' : ''}\n                  onClick={() => updateSlide(i)} />\n          ))}\n        </div>\n      </div>\n    )\n  }\n}\n"},1034:function(e,n,t){var a=t(953);"string"==typeof a&&(a=[[e.i,a,""]]);t(24)(a,{});a.locals&&(e.exports=a.locals)},1038:function(e,n){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjAwcHgiIGhlaWdodD0iMjAwcHgiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMTAuMDAwMDAwKSI+CiAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMTEiIGZpbGw9IiNGRkZGRkYiIGN4PSI5OSIgY3k9IjkwIiByeD0iOTAiIHJ5PSI5MCI+PC9lbGxpcHNlPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDMxLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0OS4yOTI2NDEsMjcuMzg3NTQ3IEMxNDcuOTA0OTkyLDIzLjIzNzU5OTIgMTQ1LjI3NTkzNCwyMS44NDk5NTAzIDE0NS4yNzU5MzQsMjEuODQ5OTUwMyBDMTQ1LjI3MjY4NCwyMS44NDk5NTAzIDE0NC43MjM0NzQsMjMuNTc4ODI0NCAxNDMuNDA3MzIsMjQuMzc1MDE2NCBDMTQyLjA5MTE2NiwyNS4xNzEyMDg0IDE0MC40NjMwMzQsMjQuODk0OTc4NSAxNDAuNDYzMDM0LDI0Ljg5NDk3ODUgQzE0MC40NjMwMzQsMjQuODk0OTc4NSAxNDMuNjkwMDQ5LDM5LjY0ODkwNCAxNDIuNjE3NjI3LDQ3LjkwOTgwMjMgQzE0MS41NDUyMDYsNTYuMTY3NDUwOSAxMzguMjE0MTk4LDYxLjk1MjAyOTYgMTM2LjQ0MzA3Nyw2Ni4xOTk0NzAzIEMxMzQuNjc1MjA2LDcwLjQ0NjkxMDkgMTI5LjgwNzA2LDc4Ljc2NjMwNSAxMjUuMTE3NjUyLDg0LjA3MzE2ODUgQzEyMC40MjQ5OTQsODkuMzg2NTMxNSAxMDYuMjYyNTI1LDEwMy4wOTA3ODMgMTAwLjE3MjQ2OSwxMDcuMDA2NzQ4IEM5NC4wODI0MTI0LDExMC45MTk0NjMgOTAuMzg3NDMxNSwxMTEuNDEzNDI3IDkwLjM4NzQzMTUsMTExLjQxMzQyNyBDOTAuMzg3NDMxNSwxMTEuNDEzNDI3IDk2LjM2MDQ5NjQsMTE2LjQ4OTU1OCA5OS4yNjI1MzUxLDExOC4xNTM0MzYgQzEwMi4xNjQ1NzQsMTE5LjgxNzMxNSAxMDMuOTk3NDQsMTE5Ljk4NjMwMyAxMDUuODc1ODAzLDExOS45NDQwNTYgQzEwNy43NTA5MTcsMTE5LjkwNTA1OSAxMDkuNTU0NTM2LDExOS40NTk4NDEgMTEwLjcxNDcwMSwxMTguNzQ0ODkzIEMxMTEuODc0ODY3LDExOC4wMzMxOTUgMTE0LjI4OTQ0MSwxMTcuODUxMjA4IDExNS4xODMxMjYsMTE5LjEwNTYxNyBDMTE2LjA3NjgxLDEyMC4zNTM1MjYgMTE2LjM0MzI5MSwxMjEuODcxMTY2IDExNi4zNDMyOTEsMTIxLjg3MTE2NiBDMTE2LjM0MzI5MSwxMjEuODcxMTY2IDEyMS44Mzg2NDEsMTIyLjA0OTkwMyAxMjMuNTM1MDE3LDEyMy4zNDY1NTggQzEyNS4yMzEzOTQsMTI0LjY0MzIxNCAxMjUuMTQzNjUsMTI3LjYzNjI0NiAxMjUuMTQzNjUsMTI3LjYzNjI0NiBDMTI1LjE0MzY1LDEyNy42MzYyNDYgMTI0LjE5MTQ2OSwxMjQuODA1NzAyIDEyMi41OTU4MzYsMTI0LjgwNTcwMiBDMTIwLjk5Njk1MiwxMjQuODA1NzAyIDEyMi4zMDk4NTcsMTI2LjU4OTgyMiAxMTkuNjgwNzk4LDEyNi40OTg4MjkgQzExNy4wNDg0OSwxMjYuNDA0NTg1IDEwOS43NjU3NywxMjQuNTY4NDY5IDEwMy42MTA3MTgsMTI0LjAwNjI2IEM5Ny40NTU2NjY3LDEyMy40NDQwNTEgOTAuOTY5MTM5MSwxMjQuMTk0NzQ2IDg4LjE1MTU5NDMsMTI0LjU2ODQ2OSBDODUuMzMwNzk5NywxMjQuOTQ1NDQyIDgxLjU3NDA3MzQsMTI1LjkzMzM3IDgwLjA2NjE4MzIsMTI1LjEzMzkyOCBDNzguNTY0NzkyNSwxMjQuMzM0NDg2IDc4LjQyNTA1MjcsMTIzLjExNTgyNSA3OC40MjUwNTI3LDEyMy4xMTU4MjUgQzc4LjQyNTA1MjcsMTIzLjExNTgyNSA3Ny44NTk1OTM5LDEyMy4xNjEzMjIgNzYuNzgwNjcyNSwxMjQuMDU1MDA3IEM3NS42OTg1MDEzLDEyNC45NDU0NDIgNzUuNDYxMjY4NiwxMjYuMTcwNjAzIDc1LjQ2MTI2ODYsMTI2LjE3MDYwMyBDNzUuNDYxMjY4NiwxMjYuMTcwNjAzIDc0LjU3MDgzMzQsMTIzLjc3MjI3NyA3Ni4zMDk0NTY4LDEyMi41OTU4NjMgQzc4LjA0ODA4MDIsMTIxLjQxOTQ0OSA3OS4xMjcwMDE2LDEyMS42NTY2ODEgNzkuMTI3MDAxNiwxMjEuNjU2NjgxIEM3OS4xMjcwMDE2LDEyMS42NTY2ODEgNzkuNzM3OTU3MSwxMjAuNjcyMDAzIDgxLjM4MjMzNzMsMTIwLjg2MDQ4OSBDODMuMDI5OTY3MywxMjEuMDQ1NzI2IDkxLjY3NDMzNzcsMTIwLjY3MjAwMyA5Mi41NjgwMjI2LDEyMC42NzIwMDMgQzkzLjQ2MTcwNzYsMTIwLjY3MjAwMyA5NC42ODM2MTg2LDEyMC40MzgwMiA5My40MTI5NjExLDExOS4zMDcxMDIgQzkyLjE0NTU1MzQsMTE4LjE3OTQzNSA4NS43MDc3NzIzLDExMi4wNzMxMjkgODUuNzA3NzcyMywxMTIuMDczMTI5IEM4NS43MDQ1MjI1LDExMi4wNzMxMjkgNzcuNjM1MzYwMiwxMTMuMTA5ODA0IDcwLjg2Mjg1MzUsMTEyLjg1MzA3MiBDNjQuMDkwMzQ2NywxMTIuNTkzMDkxIDU0LjA5MDgyNSwxMTIuMDE0NjM0IDU0LjA5MDgyNSwxMTIuMDE0NjM0IEM1NC4wOTA4MjUsMTEyLjAxNDYzNCAxNS42NTkxMjQsMTQ0LjE1NDc5MyA4LjQzMTY1MDM5LDE0OS45MTk4NzMgQzEuMjAwOTI3MDEsMTU1LjY4ODIwMyAtMC43NzE2NzkzMjYsMTU0LjczOTI3MiAwLjI1MTk5NjExOSwxNTAuNzk3MzA5IEMxLjI3MjQyMTgsMTQ2Ljg1NTM0NiAxMC44Mzk3MjUsMTM0LjM2OTc1NSAxMC44Mzk3MjUsMTM0LjM2OTc1NSBDMTAuODM2NDc1MiwxMzQuMzY5NzU1IDkuNzQ0NTU0NzcsMTMyLjU0MzM4OCAxMC45ODU5NjQ0LDEyOS4yNjExMjcgQzEyLjIyNzM3MzksMTI1Ljk3MjM2NyAxNC40MTc3MTQ0LDEyMS4yOTkyMDcgMTQuNDE3NzE0NCwxMjEuMjk5MjA3IEMxNC40MTQ0NjQ3LDEyMS4yOTkyMDcgMTAuOTUzNDY2NywxMjUuNjQ3MzkxIDkuODg3NTQ0MzUsMTI2Ljk5NjA0MiBDOC44MjE2MjE5OCwxMjguMzQ3OTQ0IDcuNjA5NDYwMjcsMTI4Ljk5MTM5NyA4LjM5MjY1MzIzLDEyNS44NjE4NzUgQzkuMTc5MDk1OTUsMTIyLjczMjM1MyAxNi44MjkwMzg4LDEwNy41NDk0NTkgMjguODUzMTYzMSw5MS4zODgzODU3IEM0MC44NzQwMzc2LDc1LjIzMDU2MjUgNTMuMTU0ODkzMSw2Ni4xNzk5NzE3IDUzLjE1NDg5MzEsNjYuMTc5OTcxNyBDNTMuMTU0ODkzMSw2Ni4xNzk5NzE3IDY1LjAxNjUyOTMsNTEuNDg3NzkxNyA3Mi44MDI5NjIyLDQ0Ljk2ODc2NjUgQzgwLjU5MjY0NDgsMzguNDQ5NzQxMyA4OC42NDg4MDgxLDMyLjgzNDE1MDMgOTAuNTUzMTY5NCwzMS4zODQ3NTU5IEM5Mi40NTQyODA5LDI5LjkzODYxMTIgOTMuNzIxNjg4NiwyOC4xMjg0OTMgOTQuODEwMzU5MywyNS42ODE0MjEyIEM5NS44OTU3ODAzLDIzLjIzNzU5OTIgMTAzLjY4MjIxMyw5LjExMDg3ODA5IDEwOS44NDA1MTUsMy44NTkyNjA1NyBDMTE1Ljk5ODgxNiwtMS4zOTU2MDY3MSAxMjcuMjA0LC0wLjIwMjk0MzU3NCAxMzEuMTc1MjExLDEuMTkxMjA0ODkgQzEzNS4xNDMxNzIsMi41OTE4NTI4OCAxMzkuMTY5NjI5LDUuNTAwMzkxMDUgMTQwLjY3NzUxOSw3LjIzMjUxNDg5IEMxNDIuMTg4NjU5LDguOTY0NjM4NzQgMTQyLjE4ODY1OSwxMC4zNjUyODY3IDE0Mi4xODg2NTksMTAuMzY1Mjg2NyBDMTQyLjE4NTQwOSwxMC4zNjUyODY3IDE0Ny4yMTYwNDMsMTIuMjA3OTAyNSAxNDkuOTU4ODQzLDE1Ljc4NTg5MTkgQzE1Mi42OTUxNDQsMTkuMzYzODgxNCAxNTUuMDQ0NzIyLDI2Ljc5NjA5MDEgMTQ5Ljk0OTA5NCwzNS4yMTI5NzcgQzE0OS45NDkwOTQsMzUuMjEyOTc3IDE1MC42NzM3OTEsMzEuNTQwNzQ0NSAxNDkuMjkyNjQxLDI3LjM4NzU0NyBaIiBpZD0iRmlsbC0zMyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yIiBzdHJva2U9IiNGRkZGRkYiIGN4PSIxMzEiIGN5PSIxMiIgcj0iMiI+PC9jaXJjbGU+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="},1045:function(e,n,t){e.exports=t(206)},206:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(16),i=(t.n(a),t(354));n.default=t.i(a.createScene)({name:"homepage",component:i.a})},343:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function M(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=t(1),o=t.n(c),s=t(15),N=t.n(s),u=t(8),l=(t.n(u),t(128)),g=t(44);t.d(n,"a",function(){return p});var D,j,T=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),p=(D=t.i(u.kea)({actions:function(){return{start:!0,finish:!0,setCounter:function(e){return{counter:e}}}},reducers:function(e){var n,t=e.actions;e.key,e.props;return{counter:[0,N.a.number,r({},t.setCounter,function(e,n){return n.counter})],finished:[!1,N.a.bool,(n={},r(n,t.start,function(){return!1}),r(n,t.finish,function(){return!0}),n)]}},takeLatest:function(e){var n=e.actions;e.workers;return r({},n.start,regeneratorRuntime.mark(function e(){var n,a,i,M;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=this.actions,a=n.setCounter,i=n.finish,M=50;case 3:if(!(M>=0)){e.next=11;break}return e.next=6,t.i(g.a)(a(M));case 6:return e.next=8,t.i(l.a)(50);case 8:M--,e.next=3;break;case 11:return e.next=13,t.i(g.a)(i());case 13:return e.prev=13,e.next=16,t.i(g.b)();case 16:if(!e.sent){e.next=18;break}console.log("Countdown was cancelled!");case 18:return e.finish(13);case 19:case"end":return e.stop()}},e,this,[[0,,13,19]])}))}}),D(j=function(e){function n(){return a(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return M(n,e),T(n,[{key:"render",value:function(){var e=this.props,n=e.counter,t=e.finished,a=this.actions.start;return o.a.createElement("div",{className:"kea-counter"},"Count: ",n,o.a.createElement("br",null),o.a.createElement("br",null),t?"We made it until the end! finish() action triggered":"Click start to trigger the finish() action in a few seconds",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){return a()}},"Start"))}}]),n}(c.Component))||j)},354:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function M(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var r=t(1034),c=(t.n(r),t(1)),o=t.n(c),s=t(8),N=(t.n(s),t(33)),u=(t.n(N),t(19)),l=t.n(u),g=t(1038),D=t.n(g),j=t(211),T=t(209),p=t(343),m=t(210);t.d(n,"a",function(){return E});var d,x,z=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),I={counter:t(324),slider:t(1021),countdown:t(985),github:t(325)},E=(d=t.i(s.kea)({}),d(x=function(e){function n(){var e,M,r,c;a(this,n);for(var o=arguments.length,s=Array(o),u=0;u<o;u++)s[u]=arguments[u];return M=r=i(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),r.handleRoute=function(e){var n=r.props.dispatch,a=e.target.attributes.href.value;e.preventDefault(),n(t.i(N.push)(a)),window.scrollTo(0,0)},c=M,i(r,c)}return M(n,e),z(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"homepage-scene"},o.a.createElement("div",{className:"landing"},o.a.createElement("div",{className:"intro"},o.a.createElement("img",{src:D.a,alt:""}),o.a.createElement("div",{className:"text"},o.a.createElement("h1",null,"Kea"),o.a.createElement("strong",null,"High level abstraction between ",o.a.createElement("nobr",null,"React and Redux")),o.a.createElement("div",{className:"links"},o.a.createElement("a",{href:"/guide/installation",onClick:this.handleRoute},"Get started"),"    ",o.a.createElement("a",{href:"https://www.github.com/keajs/kea"},"Fork on GitHub"),"    ",o.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=keajs&repo=kea&type=star&count=true",frameBorder:"0",scrolling:"0",width:"100px",height:"20px",style:{verticalAlign:"sub"}}))))),o.a.createElement("h2",null,"Simple counter"),o.a.createElement("div",{className:"split"},o.a.createElement("div",{className:"code"},o.a.createElement(l.a,{className:"javascript"},I.counter)),o.a.createElement("div",{className:"description"},o.a.createElement("div",{className:"demo"},o.a.createElement(T.a,null)),o.a.createElement("br",null),"Read the guide: ",o.a.createElement("a",{href:"/guide/counter",onClick:this.handleRoute},"Counter"))),o.a.createElement("h2",null,"Slider"),o.a.createElement("div",{className:"split"},o.a.createElement("div",{className:"code"},o.a.createElement(l.a,{className:"javascript"},I.slider)),o.a.createElement("div",{className:"description"},o.a.createElement("div",{className:"demo"},o.a.createElement(j.a,{id:999})),o.a.createElement("br",null),"Read the guide: ",o.a.createElement("a",{href:"/guide/sliders",onClick:this.handleRoute},"Sliders"))),o.a.createElement("h2",null,"Github"),o.a.createElement("div",{className:"split"},o.a.createElement("div",{className:"code"},o.a.createElement(l.a,{className:"javascript"},I.github)),o.a.createElement("div",{className:"description"},o.a.createElement("div",{className:"demo"},o.a.createElement(m.a,null)),o.a.createElement("br",null),"Read the guide: ",o.a.createElement("a",{href:"/guide/github",onClick:this.handleRoute},"Github"))),o.a.createElement("h2",null,"Debounced countdown"),o.a.createElement("div",{className:"split"},o.a.createElement("div",{className:"code"},o.a.createElement(l.a,{className:"javascript"},I.countdown)),o.a.createElement("div",{className:"description"},o.a.createElement("div",{className:"demo"},o.a.createElement(p.a,null)),o.a.createElement("br",null))))}}]),n}(c.Component))||x)},953:function(e,n,t){n=e.exports=t(23)(),n.push([e.i,".homepage-scene {\n  font-family: 'Helvetica Neue', 'Arial', sans-serif;\n}\n.homepage-scene h1 em {\n  border-bottom: 1px dashed #888;\n  cursor: pointer;\n}\n.homepage-scene .slider-container {\n  max-width: 500px;\n  margin: 0 auto;\n}\n.homepage-scene h2 {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 0;\n}\n.homepage-scene .split {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n.homepage-scene .split .description {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 auto;\n  flex: 1 auto;\n  margin-left: 0;\n}\n.homepage-scene .split .description .demo {\n  margin: 0;\n}\n.homepage-scene .split .code {\n  width: 650px;\n  min-width: 650px;\n}\n.homepage-scene .split .code pre {\n  margin: 0;\n}\n.homepage-scene .landing {\n  border-bottom: 1px solid #ccc;\n  background: #388e3c;\n  padding: 120px 40px 120px 40px;\n  color: #fff;\n}\n.homepage-scene .landing a {\n  color: #fff;\n}\n.homepage-scene .landing .intro {\n  margin: 0 auto;\n  max-width: 700px;\n  min-height: 150px;\n}\n.homepage-scene .landing .intro img {\n  float: left;\n  margin-right: 20px;\n  height: 150px;\n  width: 150px;\n}\n.homepage-scene .landing .intro .text {\n  margin-left: 170px;\n}\n.homepage-scene .landing .intro .text h1 {\n  margin-top: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  margin-bottom: 0;\n  font-weight: 400;\n  font-size: 44px;\n  border: 0;\n}\n.homepage-scene .landing .intro .text strong {\n  display: block;\n  font-weight: 300;\n  font-size: 24px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n.homepage-scene .landing .intro .text div.links {\n  line-height: 30px;\n}\n    @media (max-width: 959px) {\n  .homepage-scene .split {\n    display: block;\n  }\n  .homepage-scene .split .description {\n    margin-left: 20px;\n  }\n  .homepage-scene .split .code {\n    width: auto;\n    min-width: auto;\n  }\n    }\n    @media (max-width: 520px) {\n  .homepage-scene .landing {\n    padding: 80px 20px 80px 20px;\n  }\n  .homepage-scene .landing .intro {\n    text-align: center;\n  }\n  .homepage-scene .landing .intro img {\n    float: none;\n    margin-right: 0;\n  }\n  .homepage-scene .landing .intro .text {\n    margin-left: 0;\n  }\n    }\n",""])},985:function(e,n){e.exports="import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\nimport delay from '~/utils/delay'\nimport { put, cancelled } from 'redux-saga/effects'\n\n@kea({\n  actions: () => ({\n    start: true,\n    finish: true,\n    setCounter: (counter) => ({ counter })\n  }),\n\n  reducers: ({ actions, key, props }) => ({\n    counter: [0, PropTypes.number, {\n      [actions.setCounter]: (_, payload) => payload.counter\n    }],\n    finished: [false, PropTypes.bool, {\n      [actions.start]: () => false,\n      [actions.finish]: () => true\n    }]\n  }),\n\n  takeLatest: ({ actions, workers }) => ({\n    [actions.start]: function * () {\n      try {\n        const { setCounter, finish } = this.actions\n\n        for (let i = 50; i >= 0; i--) {\n          yield put(setCounter(i))\n          yield delay(50)\n        }\n        yield put(finish())\n      } finally {\n        if (yield cancelled()) {\n          console.log('Countdown was cancelled!')\n        }\n      }\n    }\n  })\n})\nexport default class Counter extends Component {\n  render () {\n    const { counter, finished } = this.props\n    const { start } = this.actions\n\n    return (\n      <div className='kea-counter'>\n        Count: {counter}\n        <br /><br />\n        {finished\n          ? 'We made it until the end! finish() action triggered'\n          : 'Click start to trigger the finish() action in a few seconds'}\n        <br /><br />\n        <button onClick={() => start()}>Start</button>\n      </div>\n    )\n  }\n}\n"}},[1045]);