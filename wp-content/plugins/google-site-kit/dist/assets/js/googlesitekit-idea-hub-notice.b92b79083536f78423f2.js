(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[15],{2:function(t,e){t.exports=googlesitekit.i18n},60:function(t,e,r){"use strict";(function(t){r.d(e,"b",(function(){return b})),r.d(e,"d",(function(){return h})),r.d(e,"a",(function(){return g})),r.d(e,"c",(function(){return m}));var n=r(3),a=r.n(n),u=r(10),c=r.n(u);r(26);function o(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,c=!0,o=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){o=!0,u=t},f:function(){try{c||null==r.return||r.return()}finally{if(o)throw u}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s,f="googlesitekit_".concat("1.38.1","_"),p=["sessionStorage","localStorage"],l=[].concat(p),d=function(){var e=c()(a.a.mark((function e(r){var n,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t[r]){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,u="__storage_test__",n.setItem(u,u),n.removeItem(u),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",e.t0 instanceof DOMException&&(22===e.t0.code||1014===e.t0.code||"QuotaExceededError"===e.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.t0.name)&&0!==n.length);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=c()(a.a.mark((function e(){var r,n,u,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(r=t._googlesitekitLegacyData)||void 0===r||null===(n=r.admin)||void 0===n?void 0:n.nojscache)){e.next=2;break}return e.abrupt("return",null);case 2:if(void 0!==s){e.next=25;break}u=o(l),e.prev=4,u.s();case 6:if((c=u.n()).done){e.next=16;break}if(i=c.value,!s){e.next=10;break}return e.abrupt("continue",14);case 10:return e.next=12,d(i);case 12:if(!e.sent){e.next=14;break}s=t[i];case 14:e.next=6;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),u.e(e.t0);case 21:return e.prev=21,u.f(),e.finish(21);case 24:void 0===s&&(s=null);case 25:return e.abrupt("return",s);case 26:case"end":return e.stop()}}),e,null,[[4,18,21,24]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var t=c()(a.a.mark((function t(e){var r,n,u,c,o,i,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:if(!(r=t.sent)){t.next=10;break}if(!(n=r.getItem("".concat(f).concat(e)))){t.next=10;break}if(u=JSON.parse(n),c=u.timestamp,o=u.ttl,i=u.value,s=u.isError,!c||o&&!(Math.round(Date.now()/1e3)-c<o)){t.next=10;break}return t.abrupt("return",{cacheHit:!0,value:i,isError:s});case 10:return t.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var e=c()(a.a.mark((function e(r,n){var u,c,o,i,s,p,l,d,b=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=b.length>2&&void 0!==b[2]?b[2]:{},c=u.ttl,o=void 0===c?3600:c,i=u.timestamp,s=void 0===i?Math.round(Date.now()/1e3):i,p=u.isError,l=void 0!==p&&p,e.next=3,v();case 3:if(!(d=e.sent)){e.next=14;break}return e.prev=5,d.setItem("".concat(f).concat(r),JSON.stringify({timestamp:s,ttl:o,value:n,isError:l})),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(5),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t,r){return e.apply(this,arguments)}}(),g=function(){var e=c()(a.a.mark((function e(r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:if(!(n=e.sent)){e.next=13;break}return e.prev=4,n.removeItem("".concat(f).concat(r)),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=c()(a.a.mark((function e(){var r,n,u,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:if(!(r=e.sent)){e.next=14;break}for(e.prev=4,n=[],u=0;u<r.length;u++)0===(c=r.key(u)).indexOf(f)&&n.push(c.substring(f.length));return e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",[]);case 14:return e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}()}).call(this,r(14))},952:function(t,e,r){"use strict";r.r(e),function(t){var e=r(3),n=r.n(e),a=r(10),u=r.n(a),c=r(2),o=r(60),i=function(t){return"modules::idea-hub::dismissed-editor-notice-".concat(t)};(function(){var e=u()(n.a.mark((function e(){var r,a,s,f,p,l,d=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=d.length>0&&void 0!==d[0]?d[0]:t,a=r.wp,s=[],f=function(t){var e=a.data.select("core/notices").getNotices();if(void 0!==e){var r=i(t);return e.some((function(t){return t.id===r}))}},p=function(){var t=u()(n.a.mark((function t(){var e,r,u,p;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.data.select("core/editor").getCurrentPostId()){t.next=3;break}return t.abrupt("return");case 3:return r=i(e),t.next=6,Object(o.b)(r);case 6:if(u=t.sent,!u.cacheHit){t.next=11;break}return l(),t.abrupt("return");case 11:if(!1!==f(e)||!s.includes(r)){t.next=15;break}return Object(o.d)(r,!0,{ttl:108e3}),l(),t.abrupt("return");case 15:(null==(p=a.data.select("core/editor").getEditedPostAttribute("meta"))?void 0:p.googlesitekitpersistent_idea_text)&&!s.includes(r)&&(a.data.dispatch("core/notices").createInfoNotice(Object(c.sprintf)(
/* translators: %s: Idea post name */
Object(c.__)("This post was created from an idea you picked in Site Kit’s Idea Hub: %s","google-site-kit"),p.googlesitekitpersistent_idea_text),{id:r}),s.push(r));case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=a.data.subscribe(p);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}.call(this,r(14))}},[[952,1,0]]]);