/*! For license information please see tap.js.LICENSE.txt */
(()=>{"use strict";function r(r){return r&&"function"==typeof r.schedule}var t=function(r,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n])})(r,n)};function n(r,n){function e(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function e(r){return"function"==typeof r}var o=!1,i={Promise:void 0,set useDeprecatedSynchronousErrorHandling(r){r&&(new Error).stack,o=r},get useDeprecatedSynchronousErrorHandling(){return o}};function s(r){setTimeout((function(){throw r}),0)}var c={closed:!0,next:function(r){},error:function(r){if(i.useDeprecatedSynchronousErrorHandling)throw r;s(r)},complete:function(){}},u=function(){return Array.isArray||function(r){return r&&"number"==typeof r.length}}(),a=function(){function r(r){return Error.call(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(r,t){return t+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r,this}return r.prototype=Object.create(Error.prototype),r}(),h=function(){function r(r){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,r&&(this._ctorUnsubscribe=!0,this._unsubscribe=r)}return r.prototype.unsubscribe=function(){var t;if(!this.closed){var n,o=this,i=o._parentOrParents,s=o._ctorUnsubscribe,c=o._unsubscribe,h=o._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,i instanceof r)i.remove(this);else if(null!==i)for(var f=0;f<i.length;++f)i[f].remove(this);if(e(c)){s&&(this._unsubscribe=void 0);try{c.call(this)}catch(r){t=r instanceof a?p(r.errors):[r]}}if(u(h)){f=-1;for(var l=h.length;++f<l;){var b=h[f];if(null!==(n=b)&&"object"==typeof n)try{b.unsubscribe()}catch(r){t=t||[],r instanceof a?t=t.concat(p(r.errors)):t.push(r)}}}if(t)throw new a(t)}},r.prototype.add=function(t){var n=t;if(!t)return r.EMPTY;switch(typeof t){case"function":n=new r(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof r)){var e=n;(n=new r)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof r){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},r.prototype.remove=function(r){var t=this._subscriptions;if(t){var n=t.indexOf(r);-1!==n&&t.splice(n,1)}},r.EMPTY=function(r){return r.closed=!0,r}(new r),r}();function p(r){return r.reduce((function(r,t){return r.concat(t instanceof a?t.errors:t)}),[])}var f=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),l=function(r){function t(n,e,o){var i=r.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=c;break;case 1:if(!n){i.destination=c;break}if("object"==typeof n){n instanceof t?(i.syncErrorThrowable=n.syncErrorThrowable,i.destination=n,n.add(i)):(i.syncErrorThrowable=!0,i.destination=new b(i,n));break}default:i.syncErrorThrowable=!0,i.destination=new b(i,n,e,o)}return i}return n(t,r),t.prototype[f]=function(){return this},t.create=function(r,n,e){var o=new t(r,n,e);return o.syncErrorThrowable=!1,o},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this))},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){this.destination.error(r),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var r=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=r,this},t}(h),b=function(r){function t(t,n,o,i){var s,u=r.call(this)||this;u._parentSubscriber=t;var a=u;return e(n)?s=n:n&&(s=n.next,o=n.error,i=n.complete,n!==c&&(e((a=Object.create(n)).unsubscribe)&&u.add(a.unsubscribe.bind(a)),a.unsubscribe=u.unsubscribe.bind(u))),u._context=a,u._next=s,u._error=o,u._complete=i,u}return n(t,r),t.prototype.next=function(r){if(!this.isStopped&&this._next){var t=this._parentSubscriber;i.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,r)&&this.unsubscribe():this.__tryOrUnsub(this._next,r)}},t.prototype.error=function(r){if(!this.isStopped){var t=this._parentSubscriber,n=i.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,r),this.unsubscribe()):(this.__tryOrUnsub(this._error,r),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=r,t.syncErrorThrown=!0):s(r),this.unsubscribe();else{if(this.unsubscribe(),n)throw r;s(r)}}},t.prototype.complete=function(){var r=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return r._complete.call(r._context)};i.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(r,t){try{r.call(this._context,t)}catch(r){if(this.unsubscribe(),i.useDeprecatedSynchronousErrorHandling)throw r;s(r)}},t.prototype.__tryOrSetError=function(r,t,n){if(!i.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return i.useDeprecatedSynchronousErrorHandling?(r.syncErrorValue=t,r.syncErrorThrown=!0,!0):(s(t),!0)}return!1},t.prototype._unsubscribe=function(){var r=this._parentSubscriber;this._context=null,this._parentSubscriber=null,r.unsubscribe()},t}(l),y=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function d(r){return r}function _(r){return 0===r.length?d:1===r.length?r[0]:function(t){return r.reduce((function(r,t){return t(r)}),t)}}var v=function(){function r(r){this._isScalar=!1,r&&(this._subscribe=r)}return r.prototype.lift=function(t){var n=new r;return n.source=this,n.operator=t,n},r.prototype.subscribe=function(r,t,n){var e=this.operator,o=function(r,t,n){if(r){if(r instanceof l)return r;if(r[f])return r[f]()}return r||t||n?new l(r,t,n):new l(c)}(r,t,n);if(e?o.add(e.call(o,this.source)):o.add(this.source||i.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),i.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){i.useDeprecatedSynchronousErrorHandling&&(r.syncErrorThrown=!0,r.syncErrorValue=t),function(r){for(;r;){var t=r,n=t.closed,e=t.destination,o=t.isStopped;if(n||o)return!1;r=e&&e instanceof l?e:null}return!0}(r)?r.error(t):console.warn(t)}},r.prototype.forEach=function(r,t){var n=this;return new(t=w(t))((function(t,e){var o;o=n.subscribe((function(t){try{r(t)}catch(r){e(r),o&&o.unsubscribe()}}),e,t)}))},r.prototype._subscribe=function(r){var t=this.source;return t&&t.subscribe(r)},r.prototype[y]=function(){return this},r.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return 0===r.length?this:_(r)(this)},r.prototype.toPromise=function(r){var t=this;return new(r=w(r))((function(r,n){var e;t.subscribe((function(r){return e=r}),(function(r){return n(r)}),(function(){return r(e)}))}))},r.create=function(t){return new r(t)},r}();function w(r){if(r||(r=i.Promise||Promise),!r)throw new Error("no Promise impl found");return r}function E(r,t){return new v((function(n){var e=new h,o=0;return e.add(t.schedule((function(){o!==r.length?(n.next(r[o++]),n.closed||e.add(this.schedule())):n.complete()}))),e}))}function m(r,t){return t?E(r,t):new v((n=r,function(r){for(var t=0,e=n.length;t<e&&!r.closed;t++)r.next(n[t]);r.complete()}));var n}function S(){}function x(r,t,n){return function(e){return e.lift(new g(r,t,n))}}var g=function(){function r(r,t,n){this.nextOrObserver=r,this.error=t,this.complete=n}return r.prototype.call=function(r,t){return t.subscribe(new O(r,this.nextOrObserver,this.error,this.complete))},r}(),O=function(r){function t(t,n,o,i){var s=r.call(this,t)||this;return s._tapNext=S,s._tapError=S,s._tapComplete=S,s._tapError=o||S,s._tapComplete=i||S,e(n)?(s._context=s,s._tapNext=n):n&&(s._context=n,s._tapNext=n.next||S,s._tapError=n.error||S,s._tapComplete=n.complete||S),s}return n(t,r),t.prototype._next=function(r){try{this._tapNext.call(this._context,r)}catch(r){return void this.destination.error(r)}this.destination.next(r)},t.prototype._error=function(r){try{this._tapError.call(this._context,r)}catch(r){return void this.destination.error(r)}this.destination.error(r)},t.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(r){return void this.destination.error(r)}return this.destination.complete()},t}(l);function T(r,t){return function(n){if("function"!=typeof r)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new P(r,t))}}var P=function(){function r(r,t){this.project=r,this.thisArg=t}return r.prototype.call=function(r,t){return t.subscribe(new j(r,this.project,this.thisArg))},r}(),j=function(r){function t(t,n,e){var o=r.call(this,t)||this;return o.project=n,o.count=0,o.thisArg=e||o,o}return n(t,r),t.prototype._next=function(r){var t;try{t=this.project.call(this.thisArg,r,this.count++)}catch(r){return void this.destination.error(r)}this.destination.next(t)},t}(l);const H=r=>{const t=document.createElement("h3");t.innerText=`😀 ${r}`,document.body.appendChild(t)};(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=t[t.length-1];return r(e)?(t.pop(),E(t,e)):m(t)})("jeff").pipe(x(H),T((r=>r.toUpperCase())),x(H),T((r=>`Hello 🐴 ${r}`)),x((async r=>{await Promise.resolve(),alert(r)}))).subscribe()})();