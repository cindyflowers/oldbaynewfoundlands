(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/0+H":function(e,t,n){"use strict";var o=n("hfKm"),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var i=r(n("q1tI")),a=n("lwAK");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,i=e.hasQuery;return n||r&&(void 0!==i&&i)}t.isInAmpMode=l,t.useAmp=function(){return l(i.default.useContext(a.AmpStateContext))}},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(e,t,n){"use strict";var o=n("ttDY"),r=n("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var a=i(n("q1tI")),l=i(n("Xuae")),c=n("lwAK"),u=n("FYa8"),s=n("/0+H");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=f;var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new o,t=new o,n=new o,r={};return function(i){var a=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var l=i.key.slice(i.key.indexOf("$")+1);e.has(l)?a=!1:e.add(l)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var s=d[c];if(i.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=i.props[s],p=r[s]||new o;p.has(f)?a=!1:(p.add(f),r[s]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var m=l.default();function v(e){var t=e.children;return a.default.createElement(c.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(m,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:s.isInAmpMode(e)},t)}))}))}v.rewind=m.rewind,t.default=v},FYa8:function(e,t,n){"use strict";var o=n("hfKm"),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};o(t,"__esModule",{value:!0});var i=r(n("q1tI"));t.HeadManagerContext=i.createContext(null)},PQJW:function(e,t,n){var o=n("d04V"),r=n("yLu3");e.exports=function(e){if(r(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return o(e)}},RNiq:function(e,t,n){"use strict";n.r(t);var o=n("0iUn"),r=n("sLSF"),i=n("MI3g"),a=n("a7VT"),l=n("Tit0"),c=n("q1tI"),u=n.n(c),s=(n("8Kt/"),n("kOwS")),f=n("AT/M"),p=n("vYYK"),d=n("/MKj"),h=n("YFqc"),m=n.n(h),v=(n("aqT/"),n("a6RD")),b=n.n(v),y=(n("wd/R"),u.a.createElement),g=b()((function(){return n.e(2).then(n.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),w={loop:!0,nav:!0,dots:!0,autoplayHoverPause:!0,items:1,navSpeed:750,autoplay:!0,navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]},O=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return n=Object(i.a)(this,(e=Object(a.a)(t)).call.apply(e,[this].concat(l))),Object(p.a)(Object(f.a)(n),"state",{display:!1,panel:!0}),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({display:!0})}},{key:"render",value:function(){return y(u.a.Fragment,null,y("div",{className:"main-banner-content"},y("div",{className:"row"},y("div",{className:"col-lg-4 col-sm-12 col-md-5 col-12"},y("div",{className:"main-banner-content"},y("span",null,"Established in 1988"),y("h1",null,"OLD BAY NEWFOUNDLANDS"),y("p",null,"Dedicated to perserving the future of purebred Newfoundlands"),y("p",null,y("ul",{className:"main-banner-nav"},y("li",null,y(m.a,{href:"https://www.NewfPuppy.com"},y("a",{target:"_blank"},y("i",{className:"fas fa-dog"})," www.NewfPuppy.com ",y("i",{className:"fas fa-dog"}))))),"can help you decide if a Newfoundland is the right breed of dog for you."),y("div",{className:"row"},y("div",{className:"col-lg-6 col-sm-6 col-xs-6 col-md-6 col-12"},y(m.a,{href:"specialties"},y("a",{className:"btn btn-primary"},"Specialty Awards"))),y("div",{className:"col-lg-6 col-sm-6 col-xs-6 col-md-6 col-12"},y(m.a,{href:"rom"},y("a",{className:"btn btn-primary"},"Register of Merit")))))),y("div",{className:"col-lg-8 col-sm-12 col-md-7 col-12"},this.state.display?y(g,Object(s.a)({className:"home-slides owl-carousel owl-theme"},w),y("div",{className:"main-banner item-bg2"}),y("div",{className:"main-banner item-bg1"}),y("div",{className:"main-banner item-bg3"})):""))))}}]),t}(c.Component),k=Object(d.b)((function(e){return{dogs:e.dogs}}))(O),C=n("zCU4"),_=n("v6Hh"),T=u.a.createElement,j=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return T(u.a.Fragment,null,T(C.a,null),T(k,null),T(_.a,null))}}]),t}(c.Component);t.default=j},TbGu:function(e,t,n){var o=n("fGSI"),r=n("PQJW"),i=n("2PDY");e.exports=function(e){return o(e)||r(e)||i()}},"V/f9":function(e,t,n){n("k8Q4"),n("YQlv"),e.exports=n("p9MR").Array.from},Xuae:function(e,t,n){"use strict";var o=n("/HRN"),r=n("ZDA2"),i=n("/+P4"),a=n("K47E"),l=n("WaGi"),c=n("N9n2"),u=n("TbGu"),s=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var f=n("q1tI"),p=!1;t.default=function(){var e,t=new s;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(u){function s(e){var l;return o(this,s),l=r(this,i(s).call(this,e)),p&&(t.add(a(l)),n(a(l))),l}return c(s,u),l(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),l(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component)}},YQlv:function(e,t,n){"use strict";var o=n("vCXk"),r=n("0T/a"),i=n("AYVP"),a=n("nJOo"),l=n("widk"),c=n("pasi"),u=n("s+zB"),s=n("8Vlj");r(r.S+r.F*!n("Q2zc")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,f,p=i(e),d="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,b=0,y=s(p);if(v&&(m=o(m,h>2?arguments[2]:void 0,2)),void 0==y||d==Array&&l(y))for(n=new d(t=c(p.length));t>b;b++)u(n,b,v?m(p[b],b):p[b]);else for(f=y.call(p),n=new d;!(r=f.next()).done;b++)u(n,b,v?a(f,m,[r.value,b],!0):r.value);return n.length=b,n}})},"aqT/":function(e,t,n){var o;o=function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var o=e.direction,r=e.value;switch(o){case"top":return n.top+r<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+r<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-r>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-r>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var o=n(1),r=n.n(o),i=n(2),a=n.n(i),l=n(0),c=n.n(l),u=n(3),s=n.n(u);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=d(t).call(this,e),n=!r||"object"!==f(r)&&"function"!==typeof r?h(o):r,v(h(n),"getContainer",(function(){return n.props.containment||window})),v(h(n),"addEventListener",(function(e,t,o,r){var i;n.debounceCheck||(n.debounceCheck={});var a=function(){i=null,n.check()},l={target:e,fn:r>-1?function(){i||(i=setTimeout(a,r||0))}:function(){clearTimeout(i),i=setTimeout(a,o||0)},getLastTimeout:function(){return i}};e.addEventListener(t,l.fn),n.debounceCheck[t]=l})),v(h(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),v(h(n),"stopWatching",(function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),v(h(n),"check",(function(){var e,t,o=n.node;if(!o)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(o.getBoundingClientRect())),n.props.containment){var r=n.props.containment.getBoundingClientRect();t={top:r.top,left:r.left,bottom:r.bottom,right:r.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var i=n.props.offset||{};"object"===f(i)&&(t.top+=i.top||0,t.left+=i.left||0,t.bottom-=i.bottom||0,t.right-=i.right||0);var a={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},l=e.height>0&&e.width>0,c=l&&a.top&&a.left&&a.bottom&&a.right;if(l&&n.props.partialVisibility){var u=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"===typeof n.props.partialVisibility&&(u=a[n.props.partialVisibility]),c=n.props.minTopValue?u&&e.top<=t.bottom-n.props.minTopValue:u}"string"===typeof i.direction&&"number"===typeof i.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",i.direction,i.value),c=s()(i,e,t));var p=n.state;return n.state.isVisible!==c&&(p={isVisible:c,visibilityRect:a},n.setState(p),n.props.onChange&&n.props.onChange(c)),p})),n.state={isVisible:null,visibilityRect:{}},n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.node=a.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=a.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):r.a.Children.only(this.props.children)}}])&&p(n.prototype,o),i&&p(n,i),t}(r.a.Component);v(b,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:r.a.createElement("span",null)}),v(b,"propTypes",{onChange:c.a.func,active:c.a.bool,partialVisibility:c.a.oneOfType([c.a.bool,c.a.oneOf(["top","right","bottom","left"])]),delayedCall:c.a.bool,offset:c.a.oneOfType([c.a.shape({top:c.a.number,left:c.a.number,bottom:c.a.number,right:c.a.number}),c.a.shape({direction:c.a.oneOf(["top","right","bottom","left"]),value:c.a.number})]),scrollCheck:c.a.bool,scrollDelay:c.a.number,scrollThrottle:c.a.number,resizeCheck:c.a.bool,resizeDelay:c.a.number,resizeThrottle:c.a.number,intervalCheck:c.a.bool,intervalDelay:c.a.number,containment:"undefined"!==typeof window?c.a.instanceOf(window.Element):c.a.any,children:c.a.oneOfType([c.a.element,c.a.func]),minTopValue:c.a.number})},function(e,t,n){"use strict";var o=n(6);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=o(n("q1tI"),n("i8i4"))},d04V:function(e,t,n){e.exports=n("V/f9")},fGSI:function(e,t,n){var o=n("p0XB");e.exports=function(e){if(o(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},lwAK:function(e,t,n){"use strict";var o=n("hfKm"),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};o(t,"__esModule",{value:!0});var i=r(n("q1tI"));t.AmpStateContext=i.createContext({})},"s+zB":function(e,t,n){"use strict";var o=n("OtwA"),r=n("+EWW");e.exports=function(e,t,n){t in e?o.f(e,t,r(0,n)):e[t]=n}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,0]]]);