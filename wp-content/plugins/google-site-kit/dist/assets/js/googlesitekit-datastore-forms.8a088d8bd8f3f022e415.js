(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[10],{2:function(t,r){t.exports=googlesitekit.i18n},27:function(t,r,e){"use strict";e.d(r,"a",(function(){return n})),e.d(r,"b",(function(){return o}));var n="_googlesitekitDataLayer",o="data-googlesitekit-gtag"},31:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var n=function(t){return t instanceof Date&&!isNaN(t)}},32:function(t,r,e){"use strict";(function(t){var n,o;e.d(r,"a",(function(){return a})),e.d(r,"b",(function(){return i}));var a=new Set((null===(n=t)||void 0===n||null===(o=n._googlesitekitBaseData)||void 0===o?void 0:o.enabledFeatures)||[]),i=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return r instanceof Set&&r.has(t)}}).call(this,e(15))},36:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return p})),e.d(r,"b",(function(){return d}));var n=e(75),o=t._googlesitekitBaseData||{},a=o.isFirstAdmin,i=o.trackingAllowed,c={isFirstAdmin:a,trackingEnabled:o.trackingEnabled,trackingID:o.trackingID,referenceSiteURL:o.referenceSiteURL,userIDHash:o.userIDHash},u=Object(n.a)(c),s=u.enableTracking,l=u.disableTracking,f=u.isTrackingEnabled,d=u.trackEvent;function p(t){t?s():l()}!0===i&&p(f())}).call(this,e(15))},37:function(t,r,e){"use strict";(function(t){e.d(r,"b",(function(){return b})),e.d(r,"d",(function(){return h})),e.d(r,"a",(function(){return m})),e.d(r,"c",(function(){return y}));var n=e(3),o=e.n(n),a=e(10),i=e.n(a);e(25);function c(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return u(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==e.return||e.return()}finally{if(c)throw a}}}}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var s,l="googlesitekit_".concat("1.39.0","_"),f=["sessionStorage","localStorage"],d=[].concat(f),p=function(){var r=i()(o.a.mark((function r(e){var n,a;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t[e]){r.next=3;break}return r.abrupt("return",!1);case 3:return r.prev=3,a="__storage_test__",n.setItem(a,a),n.removeItem(a),r.abrupt("return",!0);case 10:return r.prev=10,r.t0=r.catch(3),r.abrupt("return",r.t0 instanceof DOMException&&(22===r.t0.code||1014===r.t0.code||"QuotaExceededError"===r.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===r.t0.name)&&0!==n.length);case 13:case"end":return r.stop()}}),r,null,[[3,10]])})));return function(t){return r.apply(this,arguments)}}();function v(){return g.apply(this,arguments)}function g(){return(g=i()(o.a.mark((function r(){var e,n,a;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(void 0===s){r.next=2;break}return r.abrupt("return",s);case 2:e=c(d),r.prev=3,e.s();case 5:if((n=e.n()).done){r.next=15;break}if(a=n.value,!s){r.next=9;break}return r.abrupt("continue",13);case 9:return r.next=11,p(a);case 11:if(!r.sent){r.next=13;break}s=t[a];case 13:r.next=5;break;case 15:r.next=20;break;case 17:r.prev=17,r.t0=r.catch(3),e.e(r.t0);case 20:return r.prev=20,e.f(),r.finish(20);case 23:return void 0===s&&(s=null),r.abrupt("return",s);case 25:case"end":return r.stop()}}),r,null,[[3,17,20,23]])})))).apply(this,arguments)}var b=function(){var t=i()(o.a.mark((function t(r){var e,n,a,i,c,u,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:if(!(e=t.sent)){t.next=10;break}if(!(n=e.getItem("".concat(l).concat(r)))){t.next=10;break}if(a=JSON.parse(n),i=a.timestamp,c=a.ttl,u=a.value,s=a.isError,!i||c&&!(Math.round(Date.now()/1e3)-i<c)){t.next=10;break}return t.abrupt("return",{cacheHit:!0,value:u,isError:s});case 10:return t.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var r=i()(o.a.mark((function r(e,n){var a,i,c,u,s,f,d,p,g=arguments;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=g.length>2&&void 0!==g[2]?g[2]:{},i=a.ttl,c=void 0===i?3600:i,u=a.timestamp,s=void 0===u?Math.round(Date.now()/1e3):u,f=a.isError,d=void 0!==f&&f,r.next=3,v();case 3:if(!(p=r.sent)){r.next=14;break}return r.prev=5,p.setItem("".concat(l).concat(e),JSON.stringify({timestamp:s,ttl:c,value:n,isError:d})),r.abrupt("return",!0);case 10:return r.prev=10,r.t0=r.catch(5),t.console.warn("Encountered an unexpected storage error:",r.t0),r.abrupt("return",!1);case 14:return r.abrupt("return",!1);case 15:case"end":return r.stop()}}),r,null,[[5,10]])})));return function(t,e){return r.apply(this,arguments)}}(),m=function(){var r=i()(o.a.mark((function r(e){var n;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v();case 2:if(!(n=r.sent)){r.next=13;break}return r.prev=4,n.removeItem("".concat(l).concat(e)),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(4),t.console.warn("Encountered an unexpected storage error:",r.t0),r.abrupt("return",!1);case 13:return r.abrupt("return",!1);case 14:case"end":return r.stop()}}),r,null,[[4,9]])})));return function(t){return r.apply(this,arguments)}}(),y=function(){var r=i()(o.a.mark((function r(){var e,n,a,i;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v();case 2:if(!(e=r.sent)){r.next=14;break}for(r.prev=4,n=[],a=0;a<e.length;a++)0===(i=e.key(a)).indexOf(l)&&n.push(i.substring(l.length));return r.abrupt("return",n);case 10:return r.prev=10,r.t0=r.catch(4),t.console.warn("Encountered an unexpected storage error:",r.t0),r.abrupt("return",[]);case 14:return r.abrupt("return",[]);case 15:case"end":return r.stop()}}),r,null,[[4,10]])})));return function(){return r.apply(this,arguments)}}()}).call(this,e(15))},39:function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));var n=e(31),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r="string"==typeof t;if(!r)return!1;var e=t.split("-");return 3===e.length&&Object(n.a)(new Date(t))}},44:function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));var n=e(27);function o(t){return function(){t[n.a]=t[n.a]||[],t[n.a].push(arguments)}}},47:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return i})),e.d(r,"b",(function(){return c}));var n=e(18),o=e.n(n),a=e(1),i=function(t){return function(r){return function FilteredComponent(e){return Object(a.createElement)(a.Fragment,{},"",Object(a.createElement)(r,e),t)}}},c=function(r,e){return function(n){return function InnerComponent(a){return t.createElement(r,o()({},a,e,{OriginalComponent:n}))}}}}).call(this,e(1))},49:function(t,r,e){"use strict";e.d(r,"a",(function(){return g})),e.d(r,"b",(function(){return b}));var n=e(6),o=e.n(n),a=e(21),i=e.n(a),c=e(7),u=e.n(c),s=e(64),l=e.n(s),f=e(9);function d(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?d(Object(e),!0).forEach((function(r){o()(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function v(t,r){if(r&&Array.isArray(r)){var e=r.map((function(t){return"object"===i()(t)?Object(f.u)(t):t}));return"".concat(t,"::").concat(l()(JSON.stringify(e)))}return t}var g={receiveError:function(t,r,e){return u()(t,"error is required."),r&&u()(e&&Array.isArray(e),"args is required (and must be an array) when baseName is specified."),{type:"RECEIVE_ERROR",payload:{error:t,baseName:r,args:e}}},clearError:function(t,r){return t&&u()(r&&Array.isArray(r),"args is required (and must be an array) when baseName is specified."),{type:"CLEAR_ERROR",payload:{baseName:t,args:r}}},clearErrors:function(t){return{type:"CLEAR_ERRORS",payload:{baseName:t}}}};function b(){var t={getErrorForSelector:function(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return u()(e,"selectorName is required."),t.getError(r,e,n)},getErrorForAction:function(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return u()(e,"actionName is required."),t.getError(r,e,n)},getError:function(t,r,e){var n=t.error,o=t.errors;return r||e?(u()(r,"baseName is required."),o[v(r,e)]):n},getErrors:function(t){var r=new Set(Object.values(t.errors));return void 0!==t.error&&r.add(t.error),Array.from(r)},hasErrors:function(r){return t.getErrors(r).length>0}};return{initialState:{errors:{},error:void 0},actions:g,controls:{},reducer:function(t,r){var e=r.type,n=r.payload;switch(e){case"RECEIVE_ERROR":var a=n.baseName,i=n.args,c=n.error;return p(p({},t),{},a?{errors:p(p({},t.errors||{}),{},o()({},v(a,i),c))}:{error:c});case"CLEAR_ERROR":var u=n.baseName,s=n.args,l=p({},t);if(u){var f=v(u,s);l.errors=p({},t.errors||{}),delete l.errors[f]}else l.error=void 0;return l;case"CLEAR_ERRORS":var d=n.baseName,g=p({},t);if(d)for(var b in g.errors=p({},t.errors||{}),g.errors)(b===d||b.startsWith("".concat(d,"::")))&&delete g.errors[b];else g.errors={},g.error=void 0;return g;default:return t}},resolvers:{},selectors:t}}},5:function(t,r){t.exports=googlesitekit.data},50:function(t,r,e){"use strict";e.d(r,"a",(function(){return o})),e.d(r,"b",(function(){return n})),e.d(r,"e",(function(){return u})),e.d(r,"f",(function(){return p})),e.d(r,"g",(function(){return v})),e.d(r,"h",(function(){return f.a})),e.d(r,"d",(function(){return g})),e.d(r,"c",(function(){return h})),e.d(r,"i",(function(){return d}));var n="Invalid dateString parameter, it must be a string.",o='Invalid date range, it must be a string with the format "last-x-days".',a=e(7),i=e.n(a),c=e(31),u=function(t){var r=new Date(t);i()(Object(c.a)(r),"Date param must construct to a valid date instance or be a valid date instance itself.");var e="".concat(r.getMonth()+1),n="".concat(r.getDate());return[r.getFullYear(),e.length<2?"0".concat(e):e,n.length<2?"0".concat(n):n].join("-")},s=e(13),l=e.n(s),f=e(39),d=function(t){i()(Object(f.a)(t),n);var r=t.split("-"),e=l()(r,3),o=e[0],a=e[1],c=e[2];return new Date(o,a-1,c)},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,e=d(t);return e.setDate(e.getDate()-r),u(e)},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=t.split("-");return 3===r.length&&"last"===r[0]&&!Number.isNaN(r[1])&&!Number.isNaN(parseFloat(r[1]))&&"days"===r[2]};function g(t){var r=t.match(/last-(\d+)-days/);if(r&&r[1])return parseInt(r[1],10);throw new Error("Unrecognized date range slug.")}var b=e(2);function h(){var t=function(t){return Object(b.sprintf)(
/* translators: %s: number of days */
Object(b._n)("Last %s day","Last %s days",t,"google-site-kit"),t)};return{"last-7-days":{slug:"last-7-days",label:t(7),days:7},"last-14-days":{slug:"last-14-days",label:t(14),days:14},"last-28-days":{slug:"last-28-days",label:t(28),days:28},"last-90-days":{slug:"last-90-days",label:t(90),days:90}}}},52:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var n="core/forms"},55:function(t,r,e){"use strict";e.d(r,"a",(function(){return i})),e.d(r,"b",(function(){return c}));var n=e(21),o=e.n(n),a=e(78),i=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:a.a.sanitize(t,r)}};function c(t){var r,e="object"===o()(t)?t.toString():t;return null==e||null===(r=e.replace)||void 0===r?void 0:r.call(e,/\/+$/,"")}},56:function(t,r,e){"use strict";(function(t){var n=e(0),o=e.n(n),a=e(8),i=e.n(a);function ChangeArrow(r){var e=r.direction,n=r.invertColor,o=r.width,a=r.height;return t.createElement("svg",{className:i()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(e),{"googlesitekit-change-arrow--inverted-color":n}),width:o,height:a,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:o.a.string,invertColor:o.a.bool,width:o.a.number,height:o.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},r.a=ChangeArrow}).call(this,e(1))},60:function(t,r,e){"use strict";function n(t){return new URL(t).pathname}function o(t,r){return new URL(r,t).href}function a(t){return"string"!=typeof t?t:t.replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}e.d(r,"b",(function(){return n})),e.d(r,"a",(function(){return o})),e.d(r,"c",(function(){return a}))},61:function(t,r,e){"use strict";(function(t){e.d(r,"c",(function(){return w})),e.d(r,"d",(function(){return E})),e.d(r,"b",(function(){return S})),e.d(r,"a",(function(){return k}));var n=e(13),o=e.n(n),a=e(21),i=e.n(a),c=e(6),u=e.n(c),s=e(16),l=e.n(s),f=e(23),d=e(59),p=e.n(d),v=e(2);function g(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function b(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?g(Object(e),!0).forEach((function(r){u()(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var h=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=m(t,r),n=e.formatUnit,o=e.formatDecimal;try{return n()}catch(t){return o()}},m=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=parseInt(t,10),Number.isNaN(t)&&(t=0);var e=Math.floor(t/60/60),n=Math.floor(t/60%60),o=Math.floor(t%60);return{hours:e,minutes:n,seconds:o,formatUnit:function(){var a=r.unitDisplay,i=b(b({unitDisplay:void 0===a?"short":a},l()(r,["unitDisplay"])),{},{style:"unit"});return 0===t?E(o,b(b({},i),{},{unit:"second"})):Object(v.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(v._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),o?E(o,b(b({},i),{},{unit:"second"})):"",n?E(n,b(b({},i),{},{unit:"minute"})):"",e?E(e,b(b({},i),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var r=Object(v.sprintf)(// translators: %s number of seconds with "s" as the abbreviated unit.
Object(v.__)("%ds","google-site-kit"),o);if(0===t)return r;var a=Object(v.sprintf)(// translators: %s number of minutes with "m" as the abbreviated unit.
Object(v.__)("%dm","google-site-kit"),n),i=Object(v.sprintf)(// translators: %s number of hours with "h" as the abbreviated unit.
Object(v.__)("%dh","google-site-kit"),e);return Object(v.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(v._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),o?r:"",n?a:"",e?i:"").trim()}}},y=function(t){return 1e6<=t?Math.round(t/1e5)/10:1e4<=t?Math.round(t/1e3):1e3<=t?Math.round(t/100)/10:t},O=function(t){var r={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=t?Object(v.sprintf)(// translators: %s: an abbreviated number in millions.
Object(v.__)("%sM","google-site-kit"),E(y(t),t%10==0?{}:r)):1e4<=t?Object(v.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(v.__)("%sK","google-site-kit"),E(y(t))):1e3<=t?Object(v.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(v.__)("%sK","google-site-kit"),E(y(t),t%10==0?{}:r)):E(t,{signDisplay:"never",maximumFractionDigits:1})},w=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object(f.isFinite)(t)?t:Number(t),Object(f.isFinite)(t)||(console.warn("Invalid number",t,i()(t)),t=0);var e={};if("%"===r)e={style:"percent",maximumFractionDigits:2};else{if("s"===r)return h(t,{unitDisplay:"narrow"});r&&"string"==typeof r?e={style:"currency",currency:r}:Object(f.isPlainObject)(r)&&(e=b({},r))}var n=e,o=n.style,a=void 0===o?"metric":o;return"metric"===a?O(t):"duration"===a?h(t,r):E(t,e)},j=p()(console.warn),E=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=r.locale,n=void 0===e?k():e,a=l()(r,["locale"]);try{return new Intl.NumberFormat(n,a).format(t)}catch(r){j("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(n),", ").concat(JSON.stringify(a)," ).format( ").concat(i()(t)," )"),r.message)}for(var c={currencyDisplay:"narrow",currencySign:"accounting",style:"unit"},u=["signDisplay","compactDisplay"],s={},f=0,d=Object.entries(a);f<d.length;f++){var p=o()(d[f],2),v=p[0],g=p[1];c[v]&&g===c[v]||(u.includes(v)||(s[v]=g))}try{return new Intl.NumberFormat(n,s).format(t)}catch(r){return new Intl.NumberFormat(n).format(t)}},S=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=r.locale,n=void 0===e?k():e,o=r.style,a=void 0===o?"long":o,i=r.type,c=void 0===i?"conjunction":i;if(Intl.ListFormat){var u=new Intl.ListFormat(n,{style:a,type:c});return u.format(t)}
/* translators: used between list items, there is a space after the comma. */var s=Object(v.__)(", ","google-site-kit");return t.join(s)},k=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,e=Object(f.get)(r,["_googlesitekitLegacyData","locale"]);if(e){var n=e.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return r.navigator.language}}).call(this,e(15))},65:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return u})),e.d(r,"b",(function(){return s})),e.d(r,"c",(function(){return f}));var n=e(13),o=e.n(n),a=e(2);function i(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return c(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==e.return||e.return()}finally{if(u)throw a}}}}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=null,e=null,n=document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),o=document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");if(n&&o)return!1;if(r=document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"),e=document.querySelector("#wp-admin-bar-google-site-kit .ab-item"),null===r&&null===e)return!1;var i=document.createElement("span");i.setAttribute("class","googlesitekit-notifications-counter update-plugins count-".concat(t));var c=document.createElement("span");c.setAttribute("class","plugin-count"),c.setAttribute("aria-hidden","true"),c.textContent=t;var u=document.createElement("span");return u.setAttribute("class","screen-reader-text"),u.textContent=Object(a.sprintf)(
/* translators: %d is the number of notifications */
Object(a._n)("%d notification","%d notifications",t,"google-site-kit"),t),i.appendChild(c),i.appendChild(u),r&&null===n&&r.appendChild(i),e&&null===o&&e.appendChild(i),i},s=function(){t.localStorage&&t.localStorage.clear(),t.sessionStorage&&t.sessionStorage.clear()},l=function(t){for(var r=location.search.substr(1).split("&"),e={},n=0;n<r.length;n++)e[r[n].split("=")[0]]=decodeURIComponent(r[n].split("=")[1]);return t?e.hasOwnProperty(t)?decodeURIComponent(e[t].replace(/\+/g," ")):"":e},f=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,e=new URL(r.href);if(t)return e.searchParams&&e.searchParams.get?e.searchParams.get(t):l(t);var n,a={},c=i(e.searchParams.entries());try{for(c.s();!(n=c.n()).done;){var u=o()(n.value,2),s=u[0],f=u[1];a[s]=f}}catch(t){c.e(t)}finally{c.f()}return a}}).call(this,e(15))},70:function(t,r,e){"use strict";e.d(r,"a",(function(){return c}));var n=e(21),o=e.n(n),a=e(64),i=e.n(a),c=function(t){return i()(JSON.stringify(function t(r){var e={};return Object.keys(r).sort().forEach((function(n){var a=r[n];a&&"object"===o()(a)&&!Array.isArray(a)&&(a=t(a)),e[n]=a})),e}(t)))}},71:function(t,r,e){"use strict";(function(t){e(33),e(34)}).call(this,e(15))},72:function(t,r,e){"use strict";function n(t){return t.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function o(t){return"<p>".concat(t.replace(/\n{2,}/g,"</p><p>"),"</p>")}function a(t){return t.replace(/\n/gi,"<br>")}function i(t){for(var r=t,e=0,i=[n,o,a];e<i.length;e++){r=(0,i[e])(r)}return r}e.d(r,"a",(function(){return i}))},73:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var n=function(t){return t=parseFloat(t),isNaN(t)||0===t?[0,0,0,0]:[Math.floor(t/60/60),Math.floor(t/60%60),Math.floor(t%60),Math.floor(1e3*t)-1e3*Math.floor(t)]}},74:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return a})),e.d(r,"b",(function(){return i}));var n=e(179),o=e(56),a=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(r)))return"";var a=e.invertColor,i=void 0!==a&&a;return Object(n.a)(t.createElement(o.a,{direction:r>0?"up":"down",invertColor:i}))},i=function(t){var r,e,n,o,a,i,c,u,s,l,f,d,p,v,g;if(void 0!==t)return 1===(null==t||null===(r=t[0])||void 0===r||null===(e=r.data)||void 0===e||null===(n=e.rows)||void 0===n?void 0:n.length)||(null==t||null===(o=t[0])||void 0===o||null===(a=o.data)||void 0===a||null===(i=a.rows)||void 0===i||null===(c=i[0])||void 0===c||null===(u=c.metrics)||void 0===u||null===(s=u[0])||void 0===s||null===(l=s.values)||void 0===l?void 0:l[0])===(null==t||null===(f=t[0])||void 0===f||null===(d=f.data)||void 0===d||null===(p=d.totals)||void 0===p||null===(v=p[0])||void 0===v||null===(g=v.values)||void 0===g?void 0:g[0])}}).call(this,e(1))},75:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return l}));var n=e(6),o=e.n(n),a=e(76),i=e(77);function c(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function u(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?c(Object(e),!0).forEach((function(r){o()(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var s={isFirstAdmin:!1,trackingEnabled:!1,trackingID:"",referenceSiteURL:"",userIDHash:""};function l(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,o=u(u({},s),r);return o.referenceSiteURL&&(o.referenceSiteURL=o.referenceSiteURL.toString().replace(/\/+$/,"")),{enableTracking:Object(a.a)(o,e),disableTracking:function(){o.trackingEnabled=!1},isTrackingEnabled:function(){return!!o.trackingEnabled},trackEvent:Object(i.a)(o,e,n)}}}).call(this,e(15))},76:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return a}));var n=e(44),o=e(27);function a(r,e){var a=Object(n.a)(e);return function(){r.trackingEnabled=!0;var e=t.document;if(!e.querySelector("script[".concat(o.b,"]"))){var n=e.createElement("script");n.setAttribute(o.b,""),n.async=!0,n.src="https://www.googletagmanager.com/gtag/js?id=".concat(r.trackingID,"&l=").concat(o.a),e.head.appendChild(n),a("js",new Date),a("config",r.trackingID)}}}}).call(this,e(15))},77:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return p}));var n=e(3),o=e.n(n),a=e(6),i=e.n(a),c=e(10),u=e.n(c),s=e(44),l=e(32);function f(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?f(Object(e),!0).forEach((function(r){i()(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function p(r,e,n){var a=Object(s.a)(e);return function(){var e=u()(o.a.mark((function e(i,c,u,s){var f,p,v,g,b,h,m,y;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v=r.isFirstAdmin,g=r.referenceSiteURL,b=r.trackingEnabled,h=r.trackingID,m=r.userIDHash,!(null===(f=n._gaUserPrefs)||void 0===f||null===(p=f.ioo)||void 0===p?void 0:p.call(f))){e.next=3;break}return e.abrupt("return");case 3:if(b){e.next=5;break}return e.abrupt("return");case 5:return y={send_to:h,event_category:i,event_label:u,value:s,dimension1:g,dimension2:v?"true":"false",dimension3:m,dimension4:"1.39.0",dimension5:Array.from(l.a).join(", ")},e.abrupt("return",new Promise((function(r){var e=setTimeout((function(){t.console.warn('Tracking event "'.concat(c,'" (category "').concat(i,'") took too long to fire.')),r()}),1e3);a("event",c,d(d({},y),{},{event_callback:function(){clearTimeout(e),r()}}))})));case 7:case"end":return e.stop()}}),e)})));return function(t,r,n,o){return e.apply(this,arguments)}}()}}).call(this,e(15))},78:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return o}));var n=e(103),o=e.n(n)()(t)}).call(this,e(15))},89:function(t,r,e){"use strict";e.d(r,"a",(function(){return g})),e.d(r,"c",(function(){return h})),e.d(r,"b",(function(){return m}));var n=e(16),o=e.n(n),a=e(6),i=e.n(a),c=e(3),u=e.n(c),s=e(7),l=e.n(s),f=e(5),d=e.n(f),p=e(37),v=d.a.createRegistryControl,g=function(t){var r;l()(t,"storeName is required to create a snapshot store.");var e={},n={deleteSnapshot:u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,{payload:{},type:"DELETE_SNAPSHOT"};case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})),restoreSnapshot:u.a.mark((function t(){var r,e,n,o,a,i,c=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:{},e=r.clearAfterRestore,n=void 0===e||e,t.next=4,{payload:{},type:"RESTORE_SNAPSHOT"};case 4:if(o=t.sent,a=o.cacheHit,i=o.value,!a){t.next=13;break}return t.next=10,{payload:{snapshot:i},type:"SET_STATE_FROM_SNAPSHOT"};case 10:if(!n){t.next=13;break}return t.next=13,{payload:{},type:"DELETE_SNAPSHOT"};case 13:return t.abrupt("return",a);case 14:case"end":return t.stop()}}),t)})),createSnapshot:u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,{payload:{},type:"CREATE_SNAPSHOT"};case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)}))},a=(r={},i()(r,"DELETE_SNAPSHOT",(function(){return Object(p.a)("datastore::cache::".concat(t))})),i()(r,"CREATE_SNAPSHOT",v((function(r){return function(){return Object(p.d)("datastore::cache::".concat(t),r.stores[t].store.getState())}}))),i()(r,"RESTORE_SNAPSHOT",(function(){return Object(p.b)("datastore::cache::".concat(t),3600)})),r);return{initialState:e,actions:n,controls:a,reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1?arguments[1]:void 0,n=r.type,a=r.payload;switch(n){case"SET_STATE_FROM_SNAPSHOT":var i=a.snapshot,c=(i.error,o()(i,["error"]));return c;default:return t}}}},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Object.values(t.stores).filter((function(t){return Object.keys(t.getActions()).includes("restoreSnapshot")}))},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Promise.all(b(t).map((function(t){return t.getActions().createSnapshot()})))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Promise.all(b(t).map((function(t){return t.getActions().restoreSnapshot()})))}},9:function(t,r,e){"use strict";(function(t){e.d(r,"k",(function(){return S})),e.d(r,"a",(function(){return k})),e.d(r,"i",(function(){return _})),e.d(r,"x",(function(){return D})),e.d(r,"d",(function(){return P}));var n=e(6),o=e.n(n),a=e(21),i=e.n(a),c=e(102),u=e.n(c),s=e(99),l=e.n(s),f=e(36);e.d(r,"v",(function(){return f.b}));var d=e(55);e.d(r,"s",(function(){return d.a})),e.d(r,"w",(function(){return d.b}));var p=e(70);e.d(r,"u",(function(){return p.a}));var v=e(65);e.d(r,"b",(function(){return v.b})),e.d(r,"j",(function(){return v.c}));e(71);var g=e(61);e.d(r,"h",(function(){return g.a})),e.d(r,"n",(function(){return g.b})),e.d(r,"q",(function(){return g.c})),e.d(r,"r",(function(){return g.d}));var b=e(47);e.d(r,"e",(function(){return b.b}));var h=e(72);e.d(r,"o",(function(){return h.a}));var m=e(73);e.d(r,"c",(function(){return m.a}));var y=e(50);e.d(r,"t",(function(){return y.i}));var O=e(74);e.d(r,"f",(function(){return O.a})),e.d(r,"m",(function(){return O.b}));var w=e(60);function j(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function E(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?j(Object(e),!0).forEach((function(r){o()(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}e.d(r,"g",(function(){return w.a})),e.d(r,"l",(function(){return w.b})),e.d(r,"p",(function(){return w.c}));var S=function(t){switch(t){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}},k=function(t,r){if("0"===t||0===t||isNaN(t))return null;var e=(r-t)/t;return isNaN(e)||!u()(e)?null:e},_=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t._googlesitekitLegacyData,e=r.modules;return e?Object.keys(e).reduce((function(t,r){return"object"!==i()(e[r])||void 0===e[r].slug||void 0===e[r].name||e[r].slug!==r?t:E(E({},t),{},o()({},r,e[r]))}),{}):{}},D=function(t){try{return JSON.parse(t)&&!!t}catch(t){return!1}},P=function(t){if(!t)return"";var r=t.replace(/&#(\d+);/g,(function(t,r){return String.fromCharCode(r)})).replace(/(\\)/g,"");return l()(r)}}).call(this,e(15))},974:function(t,r,e){"use strict";e.r(r);var n=e(5),o=e.n(n),a=e(49),i=e(89),c=e(6),u=e.n(c),s=e(7),l=e.n(s),f=e(53),d=e.n(f);function p(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?p(Object(e),!0).forEach((function(r){u()(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var g={initialState:{},actions:{setValues:function(t,r){return l()(t&&"string"==typeof t,"a valid formName is required for setting values."),l()(d()(r),"formData must be an object."),{payload:{formName:t,formData:r},type:"SET_FORM_VALUES"}}},controls:{},reducer:function(t,r){var e=r.type,n=r.payload;switch(e){case"SET_FORM_VALUES":var o=n.formName,a=n.formData;return v(v({},t),{},u()({},o,v(v({},t[o]||{}),a)));default:return t}},resolvers:{},selectors:{getValue:function(t,r,e){return(t[r]||{})[e]},hasForm:function(t,r){return!!t[r]}}},b=e(52),h=o.a.combineStores(o.a.commonStore,g,Object(i.a)(b.a),Object(a.b)());h.initialState,h.actions,h.controls,h.reducer,h.resolvers,h.selectors;o.a.registerStore(b.a,h)}},[[974,1,0]]]);