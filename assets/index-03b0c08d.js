(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function mm(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const nt={},Xs=[],ir=()=>{},qP=()=>!1,KP=/^on[^a-z]/,Xu=t=>KP.test(t),gm=t=>t.startsWith("onUpdate:"),Ft=Object.assign,_m=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},GP=Object.prototype.hasOwnProperty,Oe=(t,e)=>GP.call(t,e),de=Array.isArray,Zs=t=>Zu(t)==="[object Map]",uE=t=>Zu(t)==="[object Set]",ve=t=>typeof t=="function",Ct=t=>typeof t=="string",ym=t=>typeof t=="symbol",ut=t=>t!==null&&typeof t=="object",hE=t=>ut(t)&&ve(t.then)&&ve(t.catch),dE=Object.prototype.toString,Zu=t=>dE.call(t),QP=t=>Zu(t).slice(8,-1),fE=t=>Zu(t)==="[object Object]",vm=t=>Ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xl=mm(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),eh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},YP=/-(\w)/g,Cr=eh(t=>t.replace(YP,(e,n)=>n?n.toUpperCase():"")),JP=/\B([A-Z])/g,Mo=eh(t=>t.replace(JP,"-$1").toLowerCase()),th=eh(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sd=eh(t=>t?`on${th(t)}`:""),Ha=(t,e)=>!Object.is(t,e),Ol=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ql=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Of=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _y;const Df=()=>_y||(_y=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wm(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ct(r)?tk(r):wm(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Ct(t))return t;if(ut(t))return t}}const XP=/;(?![^(]*\))/g,ZP=/:([^]+)/,ek=/\/\*[^]*?\*\//g;function tk(t){const e={};return t.replace(ek,"").split(XP).forEach(n=>{if(n){const r=n.split(ZP);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function nh(t){let e="";if(Ct(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const r=nh(t[n]);r&&(e+=r+" ")}else if(ut(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nk="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rk=mm(nk);function pE(t){return!!t||t===""}const Mf=t=>Ct(t)?t:t==null?"":de(t)||ut(t)&&(t.toString===dE||!ve(t.toString))?JSON.stringify(t,mE,2):String(t),mE=(t,e)=>e&&e.__v_isRef?mE(t,e.value):Zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:uE(e)?{[`Set(${e.size})`]:[...e.values()]}:ut(e)&&!de(e)&&!fE(e)?String(e):e;let Nn;class gE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nn,!e&&Nn&&(this.index=(Nn.scopes||(Nn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nn;try{return Nn=this,e()}finally{Nn=n}}}on(){Nn=this}off(){Nn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function _E(t){return new gE(t)}function ik(t,e=Nn){e&&e.active&&e.effects.push(t)}function yE(){return Nn}function sk(t){Nn&&Nn.cleanups.push(t)}const Em=t=>{const e=new Set(t);return e.w=0,e.n=0,e},vE=t=>(t.w&Pi)>0,wE=t=>(t.n&Pi)>0,ok=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pi},ak=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];vE(i)&&!wE(i)?i.delete(t):e[n++]=i,i.w&=~Pi,i.n&=~Pi}e.length=n}},Yl=new WeakMap;let pa=0,Pi=1;const Lf=30;let Xn;const cs=Symbol(""),$f=Symbol("");class bm{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ik(this,r)}run(){if(!this.active)return this.fn();let e=Xn,n=bi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Xn,Xn=this,bi=!0,Pi=1<<++pa,pa<=Lf?ok(this):yy(this),this.fn()}finally{pa<=Lf&&ak(this),Pi=1<<--pa,Xn=this.parent,bi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xn===this?this.deferStop=!0:this.active&&(yy(this),this.onStop&&this.onStop(),this.active=!1)}}function yy(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bi=!0;const EE=[];function Lo(){EE.push(bi),bi=!1}function $o(){const t=EE.pop();bi=t===void 0?!0:t}function Cn(t,e,n){if(bi&&Xn){let r=Yl.get(t);r||Yl.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Em()),bE(i)}}function bE(t,e){let n=!1;pa<=Lf?wE(t)||(t.n|=Pi,n=!vE(t)):n=!t.has(Xn),n&&(t.add(Xn),Xn.deps.push(t))}function Jr(t,e,n,r,i,s){const o=Yl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&de(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":de(t)?vm(n)&&a.push(o.get("length")):(a.push(o.get(cs)),Zs(t)&&a.push(o.get($f)));break;case"delete":de(t)||(a.push(o.get(cs)),Zs(t)&&a.push(o.get($f)));break;case"set":Zs(t)&&a.push(o.get(cs));break}if(a.length===1)a[0]&&Vf(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Vf(Em(c))}}function Vf(t,e){const n=de(t)?t:[...t];for(const r of n)r.computed&&vy(r);for(const r of n)r.computed||vy(r)}function vy(t,e){(t!==Xn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function ck(t,e){var n;return(n=Yl.get(t))==null?void 0:n.get(e)}const lk=mm("__proto__,__v_isRef,__isVue"),TE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ym)),uk=Tm(),hk=Tm(!1,!0),dk=Tm(!0),wy=fk();function fk(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ve(this);for(let s=0,o=this.length;s<o;s++)Cn(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Ve)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Lo();const r=Ve(this)[e].apply(this,n);return $o(),r}}),t}function pk(t){const e=Ve(this);return Cn(e,"has",t),e.hasOwnProperty(t)}function Tm(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?kk:SE:e?RE:CE).get(r))return r;const o=de(r);if(!t){if(o&&Oe(wy,i))return Reflect.get(wy,i,s);if(i==="hasOwnProperty")return pk}const a=Reflect.get(r,i,s);return(ym(i)?TE.has(i):lk(i))||(t||Cn(r,"get",i),e)?a:Vt(a)?o&&vm(i)?a:a.value:ut(a)?t?kE(a):ih(a):a}}const mk=IE(),gk=IE(!0);function IE(t=!1){return function(n,r,i,s){let o=n[r];if(uo(o)&&Vt(o)&&!Vt(i))return!1;if(!t&&(!Jl(i)&&!uo(i)&&(o=Ve(o),i=Ve(i)),!de(n)&&Vt(o)&&!Vt(i)))return o.value=i,!0;const a=de(n)&&vm(r)?Number(r)<n.length:Oe(n,r),c=Reflect.set(n,r,i,s);return n===Ve(s)&&(a?Ha(i,o)&&Jr(n,"set",r,i):Jr(n,"add",r,i)),c}}function _k(t,e){const n=Oe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Jr(t,"delete",e,void 0),r}function yk(t,e){const n=Reflect.has(t,e);return(!ym(e)||!TE.has(e))&&Cn(t,"has",e),n}function vk(t){return Cn(t,"iterate",de(t)?"length":cs),Reflect.ownKeys(t)}const AE={get:uk,set:mk,deleteProperty:_k,has:yk,ownKeys:vk},wk={get:dk,set(t,e){return!0},deleteProperty(t,e){return!0}},Ek=Ft({},AE,{get:hk,set:gk}),Im=t=>t,rh=t=>Reflect.getPrototypeOf(t);function cl(t,e,n=!1,r=!1){t=t.__v_raw;const i=Ve(t),s=Ve(e);n||(e!==s&&Cn(i,"get",e),Cn(i,"get",s));const{has:o}=rh(i),a=r?Im:n?Sm:za;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function ll(t,e=!1){const n=this.__v_raw,r=Ve(n),i=Ve(t);return e||(t!==i&&Cn(r,"has",t),Cn(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ul(t,e=!1){return t=t.__v_raw,!e&&Cn(Ve(t),"iterate",cs),Reflect.get(t,"size",t)}function Ey(t){t=Ve(t);const e=Ve(this);return rh(e).has.call(e,t)||(e.add(t),Jr(e,"add",t,t)),this}function by(t,e){e=Ve(e);const n=Ve(this),{has:r,get:i}=rh(n);let s=r.call(n,t);s||(t=Ve(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Ha(e,o)&&Jr(n,"set",t,e):Jr(n,"add",t,e),this}function Ty(t){const e=Ve(this),{has:n,get:r}=rh(e);let i=n.call(e,t);i||(t=Ve(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Jr(e,"delete",t,void 0),s}function Iy(){const t=Ve(this),e=t.size!==0,n=t.clear();return e&&Jr(t,"clear",void 0,void 0),n}function hl(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Ve(o),c=e?Im:t?Sm:za;return!t&&Cn(a,"iterate",cs),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function dl(t,e,n){return function(...r){const i=this.__v_raw,s=Ve(i),o=Zs(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?Im:e?Sm:za;return!e&&Cn(s,"iterate",c?$f:cs),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function ci(t){return function(...e){return t==="delete"?!1:this}}function bk(){const t={get(s){return cl(this,s)},get size(){return ul(this)},has:ll,add:Ey,set:by,delete:Ty,clear:Iy,forEach:hl(!1,!1)},e={get(s){return cl(this,s,!1,!0)},get size(){return ul(this)},has:ll,add:Ey,set:by,delete:Ty,clear:Iy,forEach:hl(!1,!0)},n={get(s){return cl(this,s,!0)},get size(){return ul(this,!0)},has(s){return ll.call(this,s,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:hl(!0,!1)},r={get(s){return cl(this,s,!0,!0)},get size(){return ul(this,!0)},has(s){return ll.call(this,s,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:hl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=dl(s,!1,!1),n[s]=dl(s,!0,!1),e[s]=dl(s,!1,!0),r[s]=dl(s,!0,!0)}),[t,n,e,r]}const[Tk,Ik,Ak,Ck]=bk();function Am(t,e){const n=e?t?Ck:Ak:t?Ik:Tk;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Oe(n,i)&&i in r?n:r,i,s)}const Rk={get:Am(!1,!1)},Sk={get:Am(!1,!0)},Pk={get:Am(!0,!1)},CE=new WeakMap,RE=new WeakMap,SE=new WeakMap,kk=new WeakMap;function Nk(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xk(t){return t.__v_skip||!Object.isExtensible(t)?0:Nk(QP(t))}function ih(t){return uo(t)?t:Cm(t,!1,AE,Rk,CE)}function PE(t){return Cm(t,!1,Ek,Sk,RE)}function kE(t){return Cm(t,!0,wk,Pk,SE)}function Cm(t,e,n,r,i){if(!ut(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=xk(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function eo(t){return uo(t)?eo(t.__v_raw):!!(t&&t.__v_isReactive)}function uo(t){return!!(t&&t.__v_isReadonly)}function Jl(t){return!!(t&&t.__v_isShallow)}function NE(t){return eo(t)||uo(t)}function Ve(t){const e=t&&t.__v_raw;return e?Ve(e):t}function Rm(t){return Ql(t,"__v_skip",!0),t}const za=t=>ut(t)?ih(t):t,Sm=t=>ut(t)?kE(t):t;function xE(t){bi&&Xn&&(t=Ve(t),bE(t.dep||(t.dep=Em())))}function OE(t,e){t=Ve(t);const n=t.dep;n&&Vf(n)}function Vt(t){return!!(t&&t.__v_isRef===!0)}function Xe(t){return ME(t,!1)}function DE(t){return ME(t,!0)}function ME(t,e){return Vt(t)?t:new Ok(t,e)}class Ok{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ve(e),this._value=n?e:za(e)}get value(){return xE(this),this._value}set value(e){const n=this.__v_isShallow||Jl(e)||uo(e);e=n?e:Ve(e),Ha(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:za(e),OE(this))}}function gt(t){return Vt(t)?t.value:t}const Dk={get:(t,e,n)=>gt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Vt(i)&&!Vt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function LE(t){return eo(t)?t:new Proxy(t,Dk)}function Mk(t){const e=de(t)?new Array(t.length):{};for(const n in t)e[n]=$k(t,n);return e}class Lk{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ck(Ve(this._object),this._key)}}function $k(t,e,n){const r=t[e];return Vt(r)?r:new Lk(t,e,n)}class Vk{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new bm(e,()=>{this._dirty||(this._dirty=!0,OE(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Ve(this);return xE(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Fk(t,e,n=!1){let r,i;const s=ve(t);return s?(r=t,i=ir):(r=t.get,i=t.set),new Vk(r,i,s||!i,n)}function Ti(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){sh(s,e,n)}return i}function sr(t,e,n,r){if(ve(t)){const s=Ti(t,e,n,r);return s&&hE(s)&&s.catch(o=>{sh(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(sr(t[s],e,n,r));return i}function sh(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Ti(c,null,10,[t,o,a]);return}}Uk(t,n,i,r)}function Uk(t,e,n,r=!0){console.error(t)}let Wa=!1,Ff=!1;const tn=[];let gr=0;const to=[];let jr=null,Xi=0;const $E=Promise.resolve();let Pm=null;function VE(t){const e=Pm||$E;return t?e.then(this?t.bind(this):t):e}function Bk(t){let e=gr+1,n=tn.length;for(;e<n;){const r=e+n>>>1;qa(tn[r])<t?e=r+1:n=r}return e}function km(t){(!tn.length||!tn.includes(t,Wa&&t.allowRecurse?gr+1:gr))&&(t.id==null?tn.push(t):tn.splice(Bk(t.id),0,t),FE())}function FE(){!Wa&&!Ff&&(Ff=!0,Pm=$E.then(BE))}function jk(t){const e=tn.indexOf(t);e>gr&&tn.splice(e,1)}function Hk(t){de(t)?to.push(...t):(!jr||!jr.includes(t,t.allowRecurse?Xi+1:Xi))&&to.push(t),FE()}function Ay(t,e=Wa?gr+1:0){for(;e<tn.length;e++){const n=tn[e];n&&n.pre&&(tn.splice(e,1),e--,n())}}function UE(t){if(to.length){const e=[...new Set(to)];if(to.length=0,jr){jr.push(...e);return}for(jr=e,jr.sort((n,r)=>qa(n)-qa(r)),Xi=0;Xi<jr.length;Xi++)jr[Xi]();jr=null,Xi=0}}const qa=t=>t.id==null?1/0:t.id,zk=(t,e)=>{const n=qa(t)-qa(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function BE(t){Ff=!1,Wa=!0,tn.sort(zk);const e=ir;try{for(gr=0;gr<tn.length;gr++){const n=tn[gr];n&&n.active!==!1&&Ti(n,null,14)}}finally{gr=0,tn.length=0,UE(),Wa=!1,Pm=null,(tn.length||to.length)&&BE()}}function Wk(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||nt;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||nt;p&&(i=n.map(m=>Ct(m)?m.trim():m)),h&&(i=n.map(Of))}let a,c=r[a=Sd(e)]||r[a=Sd(Cr(e))];!c&&s&&(c=r[a=Sd(Mo(e))]),c&&sr(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,sr(l,t,6,i)}}function jE(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ve(t)){const c=l=>{const u=jE(l,e,!0);u&&(a=!0,Ft(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(ut(t)&&r.set(t,null),null):(de(s)?s.forEach(c=>o[c]=null):Ft(o,s),ut(t)&&r.set(t,o),o)}function oh(t,e){return!t||!Xu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,Mo(e))||Oe(t,e))}let qt=null,ah=null;function Xl(t){const e=qt;return qt=t,ah=t&&t.type.__scopeId||null,e}function qk(t){ah=t}function Kk(){ah=null}function Zl(t,e=qt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Ly(-1);const s=Xl(e);let o;try{o=t(...i)}finally{Xl(s),r._d&&Ly(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Pd(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:m,ctx:y,inheritAttrs:v}=t;let I,A;const k=Xl(t);try{if(n.shapeFlag&4){const P=i||r;I=mr(u.call(P,P,h,s,m,p,y)),A=c}else{const P=e;I=mr(P.length>1?P(s,{attrs:c,slots:a,emit:l}):P(s,null)),A=e.props?c:Gk(c)}}catch(P){Ra.length=0,sh(P,t,1),I=At(ki)}let N=I;if(A&&v!==!1){const P=Object.keys(A),{shapeFlag:j}=N;P.length&&j&7&&(o&&P.some(gm)&&(A=Qk(A,o)),N=fo(N,A))}return n.dirs&&(N=fo(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),I=N,Xl(k),I}const Gk=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xu(n))&&((e||(e={}))[n]=t[n]);return e},Qk=(t,e)=>{const n={};for(const r in t)(!gm(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Yk(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Cy(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!oh(l,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Cy(r,o,l):!0:!!o;return!1}function Cy(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!oh(n,s))return!0}return!1}function Jk({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Xk=t=>t.__isSuspense;function Zk(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):Hk(t)}const fl={};function Qr(t,e,n){return HE(t,e,n)}function HE(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=nt){var a;const c=yE()===((a=Mt)==null?void 0:a.scope)?Mt:null;let l,u=!1,h=!1;if(Vt(t)?(l=()=>t.value,u=Jl(t)):eo(t)?(l=()=>t,r=!0):de(t)?(h=!0,u=t.some(P=>eo(P)||Jl(P)),l=()=>t.map(P=>{if(Vt(P))return P.value;if(eo(P))return es(P);if(ve(P))return Ti(P,c,2)})):ve(t)?e?l=()=>Ti(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),sr(t,c,3,[m])}:l=ir,e&&r){const P=l;l=()=>es(P())}let p,m=P=>{p=k.onStop=()=>{Ti(P,c,4)}},y;if(Ga)if(m=ir,e?n&&sr(e,c,3,[l(),h?[]:void 0,m]):l(),i==="sync"){const P=KN();y=P.__watcherHandles||(P.__watcherHandles=[])}else return ir;let v=h?new Array(t.length).fill(fl):fl;const I=()=>{if(k.active)if(e){const P=k.run();(r||u||(h?P.some((j,z)=>Ha(j,v[z])):Ha(P,v)))&&(p&&p(),sr(e,c,3,[P,v===fl?void 0:h&&v[0]===fl?[]:v,m]),v=P)}else k.run()};I.allowRecurse=!!e;let A;i==="sync"?A=I:i==="post"?A=()=>Tn(I,c&&c.suspense):(I.pre=!0,c&&(I.id=c.uid),A=()=>km(I));const k=new bm(l,A);e?n?I():v=k.run():i==="post"?Tn(k.run.bind(k),c&&c.suspense):k.run();const N=()=>{k.stop(),c&&c.scope&&_m(c.scope.effects,k)};return y&&y.push(N),N}function eN(t,e,n){const r=this.proxy,i=Ct(t)?t.includes(".")?zE(r,t):()=>r[t]:t.bind(r,r);let s;ve(e)?s=e:(s=e.handler,n=e);const o=Mt;po(this);const a=HE(i,s.bind(r),n);return o?po(o):ls(),a}function zE(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function es(t,e){if(!ut(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Vt(t))es(t.value,e);else if(de(t))for(let n=0;n<t.length;n++)es(t[n],e);else if(uE(t)||Zs(t))t.forEach(n=>{es(n,e)});else if(fE(t))for(const n in t)es(t[n],e);return t}function tN(t,e){const n=qt;if(n===null)return t;const r=dh(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=nt]=e[s];o&&(ve(o)&&(o={mounted:o,updated:o}),o.deep&&es(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ki(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Lo(),sr(c,n,8,[t.el,a,t,e]),$o())}}function Kn(t,e){return ve(t)?(()=>Ft({name:t.name},e,{setup:t}))():t}const Aa=t=>!!t.type.__asyncLoader,WE=t=>t.type.__isKeepAlive;function nN(t,e){qE(t,"a",e)}function rN(t,e){qE(t,"da",e)}function qE(t,e,n=Mt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ch(e,r,n),n){let i=n.parent;for(;i&&i.parent;)WE(i.parent.vnode)&&iN(r,e,n,i),i=i.parent}}function iN(t,e,n,r){const i=ch(e,t,r,!0);lh(()=>{_m(r[e],i)},n)}function ch(t,e,n=Mt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Lo(),po(n);const a=sr(e,n,t,o);return ls(),$o(),a});return r?i.unshift(s):i.push(s),s}}const ri=t=>(e,n=Mt)=>(!Ga||t==="sp")&&ch(t,(...r)=>e(...r),n),sN=ri("bm"),Nm=ri("m"),oN=ri("bu"),aN=ri("u"),cN=ri("bum"),lh=ri("um"),KE=ri("sp"),lN=ri("rtg"),uN=ri("rtc");function hN(t,e=Mt){ch("ec",t,e)}const GE="components";function dN(t,e){return pN(GE,t,!0,e)||t}const fN=Symbol.for("v-ndc");function pN(t,e,n=!0,r=!1){const i=qt||Mt;if(i){const s=i.type;if(t===GE){const a=zN(s,!1);if(a&&(a===e||a===Cr(e)||a===th(Cr(e))))return s}const o=Ry(i[t]||s[t],e)||Ry(i.appContext[t],e);return!o&&r?s:o}}function Ry(t,e){return t&&(t[e]||t[Cr(e)]||t[th(Cr(e))])}function Yz(t,e,n,r){let i;const s=n&&n[r];if(de(t)||Ct(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(ut(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function QE(t,e,n={},r,i){if(qt.isCE||qt.parent&&Aa(qt.parent)&&qt.parent.isCE)return e!=="default"&&(n.name=e),At("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),Je();const o=s&&YE(s(n)),a=ho(jn,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function YE(t){return t.some(e=>nu(e)?!(e.type===ki||e.type===jn&&!YE(e.children)):!0)?t:null}const Uf=t=>t?cb(t)?dh(t)||t.proxy:Uf(t.parent):null,Ca=Ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Uf(t.parent),$root:t=>Uf(t.root),$emit:t=>t.emit,$options:t=>xm(t),$forceUpdate:t=>t.f||(t.f=()=>km(t.update)),$nextTick:t=>t.n||(t.n=VE.bind(t.proxy)),$watch:t=>eN.bind(t)}),kd=(t,e)=>t!==nt&&!t.__isScriptSetup&&Oe(t,e),mN={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(kd(r,e))return o[e]=1,r[e];if(i!==nt&&Oe(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&Oe(l,e))return o[e]=3,s[e];if(n!==nt&&Oe(n,e))return o[e]=4,n[e];Bf&&(o[e]=0)}}const u=Ca[e];let h,p;if(u)return e==="$attrs"&&Cn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==nt&&Oe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Oe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return kd(i,e)?(i[e]=n,!0):r!==nt&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==nt&&Oe(t,o)||kd(e,o)||(a=s[0])&&Oe(a,o)||Oe(r,o)||Oe(Ca,o)||Oe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sy(t){return de(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Bf=!0;function gN(t){const e=xm(t),n=t.proxy,r=t.ctx;Bf=!1,e.beforeCreate&&Py(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:y,activated:v,deactivated:I,beforeDestroy:A,beforeUnmount:k,destroyed:N,unmounted:P,render:j,renderTracked:z,renderTriggered:ce,errorCaptured:ye,serverPrefetch:Ke,expose:Pe,inheritAttrs:pt,components:jt,directives:Ze,filters:Mr}=e;if(l&&_N(l,r,null),o)for(const Fe in o){const Ie=o[Fe];ve(Ie)&&(r[Fe]=Ie.bind(n))}if(i){const Fe=i.call(n,n);ut(Fe)&&(t.data=ih(Fe))}if(Bf=!0,s)for(const Fe in s){const Ie=s[Fe],Pn=ve(Ie)?Ie.bind(n,n):ve(Ie.get)?Ie.get.bind(n,n):ir,Rt=!ve(Ie)&&ve(Ie.set)?Ie.set.bind(n):ir,St=Lt({get:Pn,set:Rt});Object.defineProperty(r,Fe,{enumerable:!0,configurable:!0,get:()=>St.value,set:Pt=>St.value=Pt})}if(a)for(const Fe in a)JE(a[Fe],r,n,Fe);if(c){const Fe=ve(c)?c.call(n):c;Reflect.ownKeys(Fe).forEach(Ie=>{Dl(Ie,Fe[Ie])})}u&&Py(u,t,"c");function He(Fe,Ie){de(Ie)?Ie.forEach(Pn=>Fe(Pn.bind(n))):Ie&&Fe(Ie.bind(n))}if(He(sN,h),He(Nm,p),He(oN,m),He(aN,y),He(nN,v),He(rN,I),He(hN,ye),He(uN,z),He(lN,ce),He(cN,k),He(lh,P),He(KE,Ke),de(Pe))if(Pe.length){const Fe=t.exposed||(t.exposed={});Pe.forEach(Ie=>{Object.defineProperty(Fe,Ie,{get:()=>n[Ie],set:Pn=>n[Ie]=Pn})})}else t.exposed||(t.exposed={});j&&t.render===ir&&(t.render=j),pt!=null&&(t.inheritAttrs=pt),jt&&(t.components=jt),Ze&&(t.directives=Ze)}function _N(t,e,n=ir){de(t)&&(t=jf(t));for(const r in t){const i=t[r];let s;ut(i)?"default"in i?s=Dn(i.from||r,i.default,!0):s=Dn(i.from||r):s=Dn(i),Vt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Py(t,e,n){sr(de(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function JE(t,e,n,r){const i=r.includes(".")?zE(n,r):()=>n[r];if(Ct(t)){const s=e[t];ve(s)&&Qr(i,s)}else if(ve(t))Qr(i,t.bind(n));else if(ut(t))if(de(t))t.forEach(s=>JE(s,e,n,r));else{const s=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(s)&&Qr(i,s,t)}}function xm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>eu(c,l,o,!0)),eu(c,e,o)),ut(e)&&s.set(e,c),c}function eu(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&eu(t,s,n,!0),i&&i.forEach(o=>eu(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=yN[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yN={data:ky,props:Ny,emits:Ny,methods:ma,computed:ma,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:ma,directives:ma,watch:wN,provide:ky,inject:vN};function ky(t,e){return e?t?function(){return Ft(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function vN(t,e){return ma(jf(t),jf(e))}function jf(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dn(t,e){return t?[...new Set([].concat(t,e))]:e}function ma(t,e){return t?Ft(Object.create(null),t,e):e}function Ny(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:Ft(Object.create(null),Sy(t),Sy(e??{})):e}function wN(t,e){if(!t)return e;if(!e)return t;const n=Ft(Object.create(null),t);for(const r in e)n[r]=dn(t[r],e[r]);return n}function XE(){return{app:null,config:{isNativeTag:qP,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let EN=0;function bN(t,e){return function(r,i=null){ve(r)||(r=Ft({},r)),i!=null&&!ut(i)&&(i=null);const s=XE(),o=new Set;let a=!1;const c=s.app={_uid:EN++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:GN,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&ve(l.install)?(o.add(l),l.install(c,...u)):ve(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const p=At(r,i);return p.appContext=s,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,dh(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){tu=c;try{return l()}finally{tu=null}}};return c}}let tu=null;function Dl(t,e){if(Mt){let n=Mt.provides;const r=Mt.parent&&Mt.parent.provides;r===n&&(n=Mt.provides=Object.create(r)),n[t]=e}}function Dn(t,e,n=!1){const r=Mt||qt;if(r||tu){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:tu._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}function TN(t,e,n,r=!1){const i={},s={};Ql(s,hh,1),t.propsDefaults=Object.create(null),ZE(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:PE(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function IN(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Ve(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(oh(t.emitsOptions,p))continue;const m=e[p];if(c)if(Oe(s,p))m!==s[p]&&(s[p]=m,l=!0);else{const y=Cr(p);i[y]=Hf(c,a,y,m,t,!1)}else m!==s[p]&&(s[p]=m,l=!0)}}}else{ZE(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!Oe(e,h)&&((u=Mo(h))===h||!Oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Hf(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Oe(e,h))&&(delete s[h],l=!0)}l&&Jr(t,"set","$attrs")}function ZE(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(xl(c))continue;const l=e[c];let u;i&&Oe(i,u=Cr(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:oh(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=Ve(n),l=a||nt;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Hf(i,c,h,l[h],t,!Oe(l,h))}}return o}function Hf(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ve(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(po(i),r=l[n]=c.call(null,e),ls())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Mo(n))&&(r=!0))}return r}function eb(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ve(t)){const u=h=>{c=!0;const[p,m]=eb(h,e,!0);Ft(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return ut(t)&&r.set(t,Xs),Xs;if(de(s))for(let u=0;u<s.length;u++){const h=Cr(s[u]);xy(h)&&(o[h]=nt)}else if(s)for(const u in s){const h=Cr(u);if(xy(h)){const p=s[u],m=o[h]=de(p)||ve(p)?{type:p}:Ft({},p);if(m){const y=My(Boolean,m.type),v=My(String,m.type);m[0]=y>-1,m[1]=v<0||y<v,(y>-1||Oe(m,"default"))&&a.push(h)}}}const l=[o,a];return ut(t)&&r.set(t,l),l}function xy(t){return t[0]!=="$"}function Oy(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Dy(t,e){return Oy(t)===Oy(e)}function My(t,e){return de(e)?e.findIndex(n=>Dy(n,t)):ve(e)&&Dy(e,t)?0:-1}const tb=t=>t[0]==="_"||t==="$stable",Om=t=>de(t)?t.map(mr):[mr(t)],AN=(t,e,n)=>{if(e._n)return e;const r=Zl((...i)=>Om(e(...i)),n);return r._c=!1,r},nb=(t,e,n)=>{const r=t._ctx;for(const i in t){if(tb(i))continue;const s=t[i];if(ve(s))e[i]=AN(i,s,r);else if(s!=null){const o=Om(s);e[i]=()=>o}}},rb=(t,e)=>{const n=Om(e);t.slots.default=()=>n},CN=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ve(e),Ql(e,"_",n)):nb(e,t.slots={})}else t.slots={},e&&rb(t,e);Ql(t.slots,hh,1)},RN=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=nt;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ft(i,e),!n&&a===1&&delete i._):(s=!e.$stable,nb(e,i)),o=e}else e&&(rb(t,e),o={default:1});if(s)for(const a in i)!tb(a)&&!(a in o)&&delete i[a]};function zf(t,e,n,r,i=!1){if(de(t)){t.forEach((p,m)=>zf(p,e&&(de(e)?e[m]:e),n,r,i));return}if(Aa(r)&&!i)return;const s=r.shapeFlag&4?dh(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ct(l)?(u[l]=null,Oe(h,l)&&(h[l]=null)):Vt(l)&&(l.value=null)),ve(c))Ti(c,a,12,[o,u]);else{const p=Ct(c),m=Vt(c);if(p||m){const y=()=>{if(t.f){const v=p?Oe(h,c)?h[c]:u[c]:c.value;i?de(v)&&_m(v,s):de(v)?v.includes(s)||v.push(s):p?(u[c]=[s],Oe(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Oe(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Tn(y,n)):y()}}}const Tn=Zk;function SN(t){return PN(t)}function PN(t,e){const n=Df();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=ir,insertStaticContent:y}=t,v=(w,E,C,x=null,M=null,L=null,Q=!1,H=null,W=!!E.dynamicChildren)=>{if(w===E)return;w&&!ra(w,E)&&(x=O(w),Pt(w,M,L,!0),w=null),E.patchFlag===-2&&(W=!1,E.dynamicChildren=null);const{type:V,ref:ie,shapeFlag:Z}=E;switch(V){case uh:I(w,E,C,x);break;case ki:A(w,E,C,x);break;case Nd:w==null&&k(E,C,x,Q);break;case jn:jt(w,E,C,x,M,L,Q,H,W);break;default:Z&1?j(w,E,C,x,M,L,Q,H,W):Z&6?Ze(w,E,C,x,M,L,Q,H,W):(Z&64||Z&128)&&V.process(w,E,C,x,M,L,Q,H,W,q)}ie!=null&&M&&zf(ie,w&&w.ref,L,E||w,!E)},I=(w,E,C,x)=>{if(w==null)r(E.el=a(E.children),C,x);else{const M=E.el=w.el;E.children!==w.children&&l(M,E.children)}},A=(w,E,C,x)=>{w==null?r(E.el=c(E.children||""),C,x):E.el=w.el},k=(w,E,C,x)=>{[w.el,w.anchor]=y(w.children,E,C,x,w.el,w.anchor)},N=({el:w,anchor:E},C,x)=>{let M;for(;w&&w!==E;)M=p(w),r(w,C,x),w=M;r(E,C,x)},P=({el:w,anchor:E})=>{let C;for(;w&&w!==E;)C=p(w),i(w),w=C;i(E)},j=(w,E,C,x,M,L,Q,H,W)=>{Q=Q||E.type==="svg",w==null?z(E,C,x,M,L,Q,H,W):Ke(w,E,M,L,Q,H,W)},z=(w,E,C,x,M,L,Q,H)=>{let W,V;const{type:ie,props:Z,shapeFlag:se,transition:fe,dirs:we}=w;if(W=w.el=o(w.type,L,Z&&Z.is,Z),se&8?u(W,w.children):se&16&&ye(w.children,W,null,x,M,L&&ie!=="foreignObject",Q,H),we&&Ki(w,null,x,"created"),ce(W,w,w.scopeId,Q,x),Z){for(const Be in Z)Be!=="value"&&!xl(Be)&&s(W,Be,null,Z[Be],L,w.children,x,M,bt);"value"in Z&&s(W,"value",null,Z.value),(V=Z.onVnodeBeforeMount)&&fr(V,x,w)}we&&Ki(w,null,x,"beforeMount");const Ge=(!M||M&&!M.pendingBranch)&&fe&&!fe.persisted;Ge&&fe.beforeEnter(W),r(W,E,C),((V=Z&&Z.onVnodeMounted)||Ge||we)&&Tn(()=>{V&&fr(V,x,w),Ge&&fe.enter(W),we&&Ki(w,null,x,"mounted")},M)},ce=(w,E,C,x,M)=>{if(C&&m(w,C),x)for(let L=0;L<x.length;L++)m(w,x[L]);if(M){let L=M.subTree;if(E===L){const Q=M.vnode;ce(w,Q,Q.scopeId,Q.slotScopeIds,M.parent)}}},ye=(w,E,C,x,M,L,Q,H,W=0)=>{for(let V=W;V<w.length;V++){const ie=w[V]=H?hi(w[V]):mr(w[V]);v(null,ie,E,C,x,M,L,Q,H)}},Ke=(w,E,C,x,M,L,Q)=>{const H=E.el=w.el;let{patchFlag:W,dynamicChildren:V,dirs:ie}=E;W|=w.patchFlag&16;const Z=w.props||nt,se=E.props||nt;let fe;C&&Gi(C,!1),(fe=se.onVnodeBeforeUpdate)&&fr(fe,C,E,w),ie&&Ki(E,w,C,"beforeUpdate"),C&&Gi(C,!0);const we=M&&E.type!=="foreignObject";if(V?Pe(w.dynamicChildren,V,H,C,x,we,L):Q||Ie(w,E,H,null,C,x,we,L,!1),W>0){if(W&16)pt(H,E,Z,se,C,x,M);else if(W&2&&Z.class!==se.class&&s(H,"class",null,se.class,M),W&4&&s(H,"style",Z.style,se.style,M),W&8){const Ge=E.dynamicProps;for(let Be=0;Be<Ge.length;Be++){const et=Ge[Be],bn=Z[et],Un=se[et];(Un!==bn||et==="value")&&s(H,et,bn,Un,M,w.children,C,x,bt)}}W&1&&w.children!==E.children&&u(H,E.children)}else!Q&&V==null&&pt(H,E,Z,se,C,x,M);((fe=se.onVnodeUpdated)||ie)&&Tn(()=>{fe&&fr(fe,C,E,w),ie&&Ki(E,w,C,"updated")},x)},Pe=(w,E,C,x,M,L,Q)=>{for(let H=0;H<E.length;H++){const W=w[H],V=E[H],ie=W.el&&(W.type===jn||!ra(W,V)||W.shapeFlag&70)?h(W.el):C;v(W,V,ie,null,x,M,L,Q,!0)}},pt=(w,E,C,x,M,L,Q)=>{if(C!==x){if(C!==nt)for(const H in C)!xl(H)&&!(H in x)&&s(w,H,C[H],null,Q,E.children,M,L,bt);for(const H in x){if(xl(H))continue;const W=x[H],V=C[H];W!==V&&H!=="value"&&s(w,H,V,W,Q,E.children,M,L,bt)}"value"in x&&s(w,"value",C.value,x.value)}},jt=(w,E,C,x,M,L,Q,H,W)=>{const V=E.el=w?w.el:a(""),ie=E.anchor=w?w.anchor:a("");let{patchFlag:Z,dynamicChildren:se,slotScopeIds:fe}=E;fe&&(H=H?H.concat(fe):fe),w==null?(r(V,C,x),r(ie,C,x),ye(E.children,C,ie,M,L,Q,H,W)):Z>0&&Z&64&&se&&w.dynamicChildren?(Pe(w.dynamicChildren,se,C,M,L,Q,H),(E.key!=null||M&&E===M.subTree)&&ib(w,E,!0)):Ie(w,E,C,ie,M,L,Q,H,W)},Ze=(w,E,C,x,M,L,Q,H,W)=>{E.slotScopeIds=H,w==null?E.shapeFlag&512?M.ctx.activate(E,C,x,Q,W):Mr(E,C,x,M,L,Q,W):un(w,E,W)},Mr=(w,E,C,x,M,L,Q)=>{const H=w.component=FN(w,x,M);if(WE(w)&&(H.ctx.renderer=q),UN(H),H.asyncDep){if(M&&M.registerDep(H,He),!w.el){const W=H.subTree=At(ki);A(null,W,E,C)}return}He(H,w,E,C,M,L,Q)},un=(w,E,C)=>{const x=E.component=w.component;if(Yk(w,E,C))if(x.asyncDep&&!x.asyncResolved){Fe(x,E,C);return}else x.next=E,jk(x.update),x.update();else E.el=w.el,x.vnode=E},He=(w,E,C,x,M,L,Q)=>{const H=()=>{if(w.isMounted){let{next:ie,bu:Z,u:se,parent:fe,vnode:we}=w,Ge=ie,Be;Gi(w,!1),ie?(ie.el=we.el,Fe(w,ie,Q)):ie=we,Z&&Ol(Z),(Be=ie.props&&ie.props.onVnodeBeforeUpdate)&&fr(Be,fe,ie,we),Gi(w,!0);const et=Pd(w),bn=w.subTree;w.subTree=et,v(bn,et,h(bn.el),O(bn),w,M,L),ie.el=et.el,Ge===null&&Jk(w,et.el),se&&Tn(se,M),(Be=ie.props&&ie.props.onVnodeUpdated)&&Tn(()=>fr(Be,fe,ie,we),M)}else{let ie;const{el:Z,props:se}=E,{bm:fe,m:we,parent:Ge}=w,Be=Aa(E);if(Gi(w,!1),fe&&Ol(fe),!Be&&(ie=se&&se.onVnodeBeforeMount)&&fr(ie,Ge,E),Gi(w,!0),Z&&Me){const et=()=>{w.subTree=Pd(w),Me(Z,w.subTree,w,M,null)};Be?E.type.__asyncLoader().then(()=>!w.isUnmounted&&et()):et()}else{const et=w.subTree=Pd(w);v(null,et,C,x,w,M,L),E.el=et.el}if(we&&Tn(we,M),!Be&&(ie=se&&se.onVnodeMounted)){const et=E;Tn(()=>fr(ie,Ge,et),M)}(E.shapeFlag&256||Ge&&Aa(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&w.a&&Tn(w.a,M),w.isMounted=!0,E=C=x=null}},W=w.effect=new bm(H,()=>km(V),w.scope),V=w.update=()=>W.run();V.id=w.uid,Gi(w,!0),V()},Fe=(w,E,C)=>{E.component=w;const x=w.vnode.props;w.vnode=E,w.next=null,IN(w,E.props,x,C),RN(w,E.children,C),Lo(),Ay(),$o()},Ie=(w,E,C,x,M,L,Q,H,W=!1)=>{const V=w&&w.children,ie=w?w.shapeFlag:0,Z=E.children,{patchFlag:se,shapeFlag:fe}=E;if(se>0){if(se&128){Rt(V,Z,C,x,M,L,Q,H,W);return}else if(se&256){Pn(V,Z,C,x,M,L,Q,H,W);return}}fe&8?(ie&16&&bt(V,M,L),Z!==V&&u(C,Z)):ie&16?fe&16?Rt(V,Z,C,x,M,L,Q,H,W):bt(V,M,L,!0):(ie&8&&u(C,""),fe&16&&ye(Z,C,x,M,L,Q,H,W))},Pn=(w,E,C,x,M,L,Q,H,W)=>{w=w||Xs,E=E||Xs;const V=w.length,ie=E.length,Z=Math.min(V,ie);let se;for(se=0;se<Z;se++){const fe=E[se]=W?hi(E[se]):mr(E[se]);v(w[se],fe,C,null,M,L,Q,H,W)}V>ie?bt(w,M,L,!0,!1,Z):ye(E,C,x,M,L,Q,H,W,Z)},Rt=(w,E,C,x,M,L,Q,H,W)=>{let V=0;const ie=E.length;let Z=w.length-1,se=ie-1;for(;V<=Z&&V<=se;){const fe=w[V],we=E[V]=W?hi(E[V]):mr(E[V]);if(ra(fe,we))v(fe,we,C,null,M,L,Q,H,W);else break;V++}for(;V<=Z&&V<=se;){const fe=w[Z],we=E[se]=W?hi(E[se]):mr(E[se]);if(ra(fe,we))v(fe,we,C,null,M,L,Q,H,W);else break;Z--,se--}if(V>Z){if(V<=se){const fe=se+1,we=fe<ie?E[fe].el:x;for(;V<=se;)v(null,E[V]=W?hi(E[V]):mr(E[V]),C,we,M,L,Q,H,W),V++}}else if(V>se)for(;V<=Z;)Pt(w[V],M,L,!0),V++;else{const fe=V,we=V,Ge=new Map;for(V=we;V<=se;V++){const Qt=E[V]=W?hi(E[V]):mr(E[V]);Qt.key!=null&&Ge.set(Qt.key,V)}let Be,et=0;const bn=se-we+1;let Un=!1,Lr=0;const kn=new Array(bn);for(V=0;V<bn;V++)kn[V]=0;for(V=fe;V<=Z;V++){const Qt=w[V];if(et>=bn){Pt(Qt,M,L,!0);continue}let hn;if(Qt.key!=null)hn=Ge.get(Qt.key);else for(Be=we;Be<=se;Be++)if(kn[Be-we]===0&&ra(Qt,E[Be])){hn=Be;break}hn===void 0?Pt(Qt,M,L,!0):(kn[hn-we]=V+1,hn>=Lr?Lr=hn:Un=!0,v(Qt,E[hn],C,null,M,L,Q,H,W),et++)}const Wi=Un?kN(kn):Xs;for(Be=Wi.length-1,V=bn-1;V>=0;V--){const Qt=we+V,hn=E[Qt],dr=Qt+1<ie?E[Qt+1].el:x;kn[V]===0?v(null,hn,C,dr,M,L,Q,H,W):Un&&(Be<0||V!==Wi[Be]?St(hn,C,dr,2):Be--)}}},St=(w,E,C,x,M=null)=>{const{el:L,type:Q,transition:H,children:W,shapeFlag:V}=w;if(V&6){St(w.component.subTree,E,C,x);return}if(V&128){w.suspense.move(E,C,x);return}if(V&64){Q.move(w,E,C,q);return}if(Q===jn){r(L,E,C);for(let Z=0;Z<W.length;Z++)St(W[Z],E,C,x);r(w.anchor,E,C);return}if(Q===Nd){N(w,E,C);return}if(x!==2&&V&1&&H)if(x===0)H.beforeEnter(L),r(L,E,C),Tn(()=>H.enter(L),M);else{const{leave:Z,delayLeave:se,afterLeave:fe}=H,we=()=>r(L,E,C),Ge=()=>{Z(L,()=>{we(),fe&&fe()})};se?se(L,we,Ge):Ge()}else r(L,E,C)},Pt=(w,E,C,x=!1,M=!1)=>{const{type:L,props:Q,ref:H,children:W,dynamicChildren:V,shapeFlag:ie,patchFlag:Z,dirs:se}=w;if(H!=null&&zf(H,null,C,w,!0),ie&256){E.ctx.deactivate(w);return}const fe=ie&1&&se,we=!Aa(w);let Ge;if(we&&(Ge=Q&&Q.onVnodeBeforeUnmount)&&fr(Ge,E,w),ie&6)Vs(w.component,C,x);else{if(ie&128){w.suspense.unmount(C,x);return}fe&&Ki(w,null,E,"beforeUnmount"),ie&64?w.type.remove(w,E,C,M,q,x):V&&(L!==jn||Z>0&&Z&64)?bt(V,E,C,!1,!0):(L===jn&&Z&384||!M&&ie&16)&&bt(W,E,C),x&&si(w)}(we&&(Ge=Q&&Q.onVnodeUnmounted)||fe)&&Tn(()=>{Ge&&fr(Ge,E,w),fe&&Ki(w,null,E,"unmounted")},C)},si=w=>{const{type:E,el:C,anchor:x,transition:M}=w;if(E===jn){Yn(C,x);return}if(E===Nd){P(w);return}const L=()=>{i(C),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(w.shapeFlag&1&&M&&!M.persisted){const{leave:Q,delayLeave:H}=M,W=()=>Q(C,L);H?H(w.el,L,W):W()}else L()},Yn=(w,E)=>{let C;for(;w!==E;)C=p(w),i(w),w=C;i(E)},Vs=(w,E,C)=>{const{bum:x,scope:M,update:L,subTree:Q,um:H}=w;x&&Ol(x),M.stop(),L&&(L.active=!1,Pt(Q,w,E,C)),H&&Tn(H,E),Tn(()=>{w.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},bt=(w,E,C,x=!1,M=!1,L=0)=>{for(let Q=L;Q<w.length;Q++)Pt(w[Q],E,C,x,M)},O=w=>w.shapeFlag&6?O(w.component.subTree):w.shapeFlag&128?w.suspense.next():p(w.anchor||w.el),J=(w,E,C)=>{w==null?E._vnode&&Pt(E._vnode,null,null,!0):v(E._vnode||null,w,E,null,null,null,C),Ay(),UE(),E._vnode=w},q={p:v,um:Pt,m:St,r:si,mt:Mr,mc:ye,pc:Ie,pbc:Pe,n:O,o:t};let re,Me;return e&&([re,Me]=e(q)),{render:J,hydrate:re,createApp:bN(J,re)}}function Gi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ib(t,e,n=!1){const r=t.children,i=e.children;if(de(r)&&de(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=hi(i[s]),a.el=o.el),n||ib(o,a)),a.type===uh&&(a.el=o.el)}}function kN(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const NN=t=>t.__isTeleport,jn=Symbol.for("v-fgt"),uh=Symbol.for("v-txt"),ki=Symbol.for("v-cmt"),Nd=Symbol.for("v-stc"),Ra=[];let tr=null;function Je(t=!1){Ra.push(tr=t?null:[])}function xN(){Ra.pop(),tr=Ra[Ra.length-1]||null}let Ka=1;function Ly(t){Ka+=t}function sb(t){return t.dynamicChildren=Ka>0?tr||Xs:null,xN(),Ka>0&&tr&&tr.push(t),t}function vt(t,e,n,r,i,s){return sb(Ye(t,e,n,r,i,s,!0))}function ho(t,e,n,r,i){return sb(At(t,e,n,r,i,!0))}function nu(t){return t?t.__v_isVNode===!0:!1}function ra(t,e){return t.type===e.type&&t.key===e.key}const hh="__vInternal",ob=({key:t})=>t??null,Ml=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ct(t)||Vt(t)||ve(t)?{i:qt,r:t,k:e,f:!!n}:t:null);function Ye(t,e=null,n=null,r=0,i=null,s=t===jn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ob(e),ref:e&&Ml(e),scopeId:ah,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qt};return a?(Dm(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Ct(n)?8:16),Ka>0&&!o&&tr&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&tr.push(c),c}const At=ON;function ON(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===fN)&&(t=ki),nu(t)){const a=fo(t,e,!0);return n&&Dm(a,n),Ka>0&&!s&&tr&&(a.shapeFlag&6?tr[tr.indexOf(t)]=a:tr.push(a)),a.patchFlag|=-2,a}if(WN(t)&&(t=t.__vccOpts),e){e=DN(e);let{class:a,style:c}=e;a&&!Ct(a)&&(e.class=nh(a)),ut(c)&&(NE(c)&&!de(c)&&(c=Ft({},c)),e.style=wm(c))}const o=Ct(t)?1:Xk(t)?128:NN(t)?64:ut(t)?4:ve(t)?2:0;return Ye(t,e,n,r,i,o,s,!0)}function DN(t){return t?NE(t)||hh in t?Ft({},t):t:null}function fo(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?LN(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ob(a),ref:e&&e.ref?n&&i?de(i)?i.concat(Ml(e)):[i,Ml(e)]:Ml(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==jn?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fo(t.ssContent),ssFallback:t.ssFallback&&fo(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function MN(t=" ",e=0){return At(uh,null,t,e)}function pr(t="",e=!1){return e?(Je(),ho(ki,null,t)):At(ki,null,t)}function mr(t){return t==null||typeof t=="boolean"?At(ki):de(t)?At(jn,null,t.slice()):typeof t=="object"?hi(t):At(uh,null,String(t))}function hi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fo(t)}function Dm(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Dm(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(hh in e)?e._ctx=qt:i===3&&qt&&(qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:qt},n=32):(e=String(e),r&64?(n=16,e=[MN(e)]):n=8);t.children=e,t.shapeFlag|=n}function LN(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=nh([e.class,r.class]));else if(i==="style")e.style=wm([e.style,r.style]);else if(Xu(i)){const s=e[i],o=r[i];o&&s!==o&&!(de(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function fr(t,e,n,r=null){sr(t,e,7,[n,r])}const $N=XE();let VN=0;function FN(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||$N,s={uid:VN++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new gE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eb(r,i),emitsOptions:jE(r,i),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:r.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Wk.bind(null,s),t.ce&&t.ce(s),s}let Mt=null;const ab=()=>Mt||qt;let Mm,Us,$y="__VUE_INSTANCE_SETTERS__";(Us=Df()[$y])||(Us=Df()[$y]=[]),Us.push(t=>Mt=t),Mm=t=>{Us.length>1?Us.forEach(e=>e(t)):Us[0](t)};const po=t=>{Mm(t),t.scope.on()},ls=()=>{Mt&&Mt.scope.off(),Mm(null)};function cb(t){return t.vnode.shapeFlag&4}let Ga=!1;function UN(t,e=!1){Ga=e;const{props:n,children:r}=t.vnode,i=cb(t);TN(t,n,i,e),CN(t,r);const s=i?BN(t,e):void 0;return Ga=!1,s}function BN(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Rm(new Proxy(t.ctx,mN));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?HN(t):null;po(t),Lo();const s=Ti(r,t,0,[t.props,i]);if($o(),ls(),hE(s)){if(s.then(ls,ls),e)return s.then(o=>{Vy(t,o,e)}).catch(o=>{sh(o,t,0)});t.asyncDep=s}else Vy(t,s,e)}else lb(t,e)}function Vy(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ut(e)&&(t.setupState=LE(e)),lb(t,n)}let Fy;function lb(t,e,n){const r=t.type;if(!t.render){if(!e&&Fy&&!r.render){const i=r.template||xm(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ft(Ft({isCustomElement:s,delimiters:a},o),c);r.render=Fy(i,l)}}t.render=r.render||ir}po(t),Lo(),gN(t),$o(),ls()}function jN(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Cn(t,"get","$attrs"),e[n]}}))}function HN(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return jN(t)},slots:t.slots,emit:t.emit,expose:e}}function dh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(LE(Rm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ca)return Ca[n](t)},has(e,n){return n in e||n in Ca}}))}function zN(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function WN(t){return ve(t)&&"__vccOpts"in t}const Lt=(t,e)=>Fk(t,e,Ga);function ub(t,e,n){const r=arguments.length;return r===2?ut(e)&&!de(e)?nu(e)?At(t,null,[e]):At(t,e):At(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&nu(n)&&(n=[n]),At(t,e,n))}const qN=Symbol.for("v-scx"),KN=()=>Dn(qN),GN="3.3.4",QN="http://www.w3.org/2000/svg",Zi=typeof document<"u"?document:null,Uy=Zi&&Zi.createElement("template"),YN={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Zi.createElementNS(QN,t):Zi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Zi.createTextNode(t),createComment:t=>Zi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Uy.innerHTML=r?`<svg>${t}</svg>`:t;const a=Uy.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function JN(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function XN(t,e,n){const r=t.style,i=Ct(n);if(n&&!i){if(e&&!Ct(e))for(const s in e)n[s]==null&&Wf(r,s,"");for(const s in n)Wf(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const By=/\s*!important$/;function Wf(t,e,n){if(de(n))n.forEach(r=>Wf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ZN(t,e);By.test(n)?t.setProperty(Mo(r),n.replace(By,""),"important"):t[r]=n}}const jy=["Webkit","Moz","ms"],xd={};function ZN(t,e){const n=xd[e];if(n)return n;let r=Cr(e);if(r!=="filter"&&r in t)return xd[e]=r;r=th(r);for(let i=0;i<jy.length;i++){const s=jy[i]+r;if(s in t)return xd[e]=s}return e}const Hy="http://www.w3.org/1999/xlink";function ex(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Hy,e.slice(6,e.length)):t.setAttributeNS(Hy,e,n);else{const s=rk(e);n==null||s&&!pE(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function tx(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=pE(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Hs(t,e,n,r){t.addEventListener(e,n,r)}function nx(t,e,n,r){t.removeEventListener(e,n,r)}function rx(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=ix(e);if(r){const l=s[e]=ax(r,i);Hs(t,a,l,c)}else o&&(nx(t,a,o,c),s[e]=void 0)}}const zy=/(?:Once|Passive|Capture)$/;function ix(t){let e;if(zy.test(t)){e={};let r;for(;r=t.match(zy);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mo(t.slice(2)),e]}let Od=0;const sx=Promise.resolve(),ox=()=>Od||(sx.then(()=>Od=0),Od=Date.now());function ax(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sr(cx(r,n.value),e,5,[r])};return n.value=t,n.attached=ox(),n}function cx(t,e){if(de(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Wy=/^on[a-z]/,lx=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?JN(t,r,i):e==="style"?XN(t,n,r):Xu(e)?gm(e)||rx(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ux(t,e,r,i))?tx(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ex(t,e,r,i))};function ux(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Wy.test(e)&&ve(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Wy.test(e)&&Ct(n)?!1:e in t}const qy=t=>{const e=t.props["onUpdate:modelValue"]||!1;return de(e)?n=>Ol(e,n):e};function hx(t){t.target.composing=!0}function Ky(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jz={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=qy(i);const s=r||i.props&&i.props.type==="number";Hs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Of(a)),t._assign(a)}),n&&Hs(t,"change",()=>{t.value=t.value.trim()}),e||(Hs(t,"compositionstart",hx),Hs(t,"compositionend",Ky),Hs(t,"change",Ky))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=qy(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Of(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},dx=["ctrl","shift","alt","meta"],fx={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>dx.some(n=>t[`${n}Key`]&&!e.includes(n))},pl=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=fx[e[i]];if(s&&s(n,e))return}return t(n,...r)},px={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ia(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ia(t,!0),r.enter(t)):r.leave(t,()=>{ia(t,!1)}):ia(t,e))},beforeUnmount(t,{value:e}){ia(t,e)}};function ia(t,e){t.style.display=e?t._vod:"none"}const mx=Ft({patchProp:lx},YN);let Gy;function gx(){return Gy||(Gy=SN(mx))}const _x=(...t)=>{const e=gx().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=yx(r);if(!i)return;const s=e._component;!ve(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function yx(t){return Ct(t)?document.querySelector(t):t}var vx=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const wx=Symbol();var Qy;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qy||(Qy={}));function Ex(){const t=_E(!0),e=t.run(()=>Xe({}));let n=[],r=[];const i=Rm({install(s){i._a=s,s.provide(wx,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!vx?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const zs=typeof window<"u";function bx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ze=Object.assign;function Dd(t,e){const n={};for(const r in e){const i=e[r];n[r]=cr(i)?i.map(t):t(i)}return n}const Sa=()=>{},cr=Array.isArray,Tx=/\/$/,Ix=t=>t.replace(Tx,"");function Md(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Sx(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Ax(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Yy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Cx(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&mo(e.matched[r],n.matched[i])&&hb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function mo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Rx(t[n],e[n]))return!1;return!0}function Rx(t,e){return cr(t)?Jy(t,e):cr(e)?Jy(e,t):t===e}function Jy(t,e){return cr(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Sx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Qa;(function(t){t.pop="pop",t.push="push"})(Qa||(Qa={}));var Pa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pa||(Pa={}));function Px(t){if(!t)if(zs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ix(t)}const kx=/^[^#]+#/;function Nx(t,e){return t.replace(kx,"#")+e}function xx(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const fh=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ox(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=xx(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Xy(t,e){return(history.state?history.state.position-e:-1)+t}const qf=new Map;function Dx(t,e){qf.set(t,e)}function Mx(t){const e=qf.get(t);return qf.delete(t),e}let Lx=()=>location.protocol+"//"+location.host;function db(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Yy(c,"")}return Yy(n,t)+r+i}function $x(t,e,n,r){let i=[],s=[],o=null;const a=({state:p})=>{const m=db(t,location),y=n.value,v=e.value;let I=0;if(p){if(n.value=m,e.value=p,o&&o===y){o=null;return}I=v?p.position-v.position:0}else r(m);i.forEach(A=>{A(n.value,y,{delta:I,type:Qa.pop,direction:I?I>0?Pa.forward:Pa.back:Pa.unknown})})};function c(){o=n.value}function l(p){i.push(p);const m=()=>{const y=i.indexOf(p);y>-1&&i.splice(y,1)};return s.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(ze({},p.state,{scroll:fh()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Zy(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?fh():null}}function Vx(t){const{history:e,location:n}=window,r={value:db(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Lx()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=ze({},e.state,Zy(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=ze({},i.value,e.state,{forward:c,scroll:fh()});s(u.current,u,!0);const h=ze({},Zy(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function Fx(t){t=Px(t);const e=Vx(t),n=$x(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ze({location:"",base:t,go:r,createHref:Nx.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Ux(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Fx(t)}function Bx(t){return typeof t=="string"||t&&typeof t=="object"}function fb(t){return typeof t=="string"||typeof t=="symbol"}const li={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pb=Symbol("");var ev;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ev||(ev={}));function go(t,e){return ze(new Error,{type:t,[pb]:!0},e)}function Ur(t,e){return t instanceof Error&&pb in t&&(e==null||!!(t.type&e))}const tv="[^/]+?",jx={sensitive:!1,strict:!1,start:!0,end:!0},Hx=/[.+*?^${}()[\]/\\]/g;function zx(t,e){const n=ze({},jx,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const p=l[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(i+="/"),i+=p.value.replace(Hx,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:v,optional:I,regexp:A}=p;s.push({name:y,repeatable:v,optional:I});const k=A||tv;if(k!==tv){m+=10;try{new RegExp(`(${k})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+P.message)}}let N=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(N=I&&l.length<2?`(?:/${N})`:"/"+N),I&&(N+="?"),i+=N,m+=20,I&&(m+=-8),v&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",y=s[p-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:v,optional:I}=m,A=y in l?l[y]:"";if(cr(A)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=cr(A)?A.join("/"):A;if(!k)if(I)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function Wx(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qx(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=Wx(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(nv(r))return 1;if(nv(i))return-1}return i.length-r.length}function nv(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Kx={type:0,value:""},Gx=/[a-zA-Z0-9_]/;function Qx(t){if(!t)return[[]];if(t==="/")return[[Kx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Gx.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function Yx(t,e,n){const r=zx(Qx(t.path),n),i=ze(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Jx(t,e){const n=[],r=new Map;e=sv({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,p){const m=!p,y=Xx(u);y.aliasOf=p&&p.record;const v=sv(e,u),I=[y];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of N)I.push(ze({},y,{components:p?p.record.components:y.components,path:P,aliasOf:p?p.record:y}))}let A,k;for(const N of I){const{path:P}=N;if(h&&P[0]!=="/"){const j=h.record.path,z=j[j.length-1]==="/"?"":"/";N.path=h.record.path+(P&&z+P)}if(A=Yx(N,h,v),p?p.alias.push(A):(k=k||A,k!==A&&k.alias.push(A),m&&u.name&&!iv(A)&&o(u.name)),y.children){const j=y.children;for(let z=0;z<j.length;z++)s(j[z],A,p&&p.children[z])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return k?()=>{o(k)}:Sa}function o(u){if(fb(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&qx(u,n[h])>=0&&(u.record.path!==n[h].record.path||!mb(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!iv(u)&&r.set(u.record.name,u)}function l(u,h){let p,m={},y,v;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw go(1,{location:u});v=p.record.name,m=ze(rv(h.params,p.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&rv(u.params,p.keys.map(k=>k.name))),y=p.stringify(m)}else if("path"in u)y=u.path,p=n.find(k=>k.re.test(y)),p&&(m=p.parse(y),v=p.record.name);else{if(p=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!p)throw go(1,{location:u,currentLocation:h});v=p.record.name,m=ze({},h.params,u.params),y=p.stringify(m)}const I=[];let A=p;for(;A;)I.unshift(A.record),A=A.parent;return{name:v,path:y,params:m,matched:I,meta:eO(I)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function rv(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Xx(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Zx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Zx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function iv(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function eO(t){return t.reduce((e,n)=>ze(e,n.meta),{})}function sv(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function mb(t,e){return e.children.some(n=>n===t||mb(t,n))}const gb=/#/g,tO=/&/g,nO=/\//g,rO=/=/g,iO=/\?/g,_b=/\+/g,sO=/%5B/g,oO=/%5D/g,yb=/%5E/g,aO=/%60/g,vb=/%7B/g,cO=/%7C/g,wb=/%7D/g,lO=/%20/g;function Lm(t){return encodeURI(""+t).replace(cO,"|").replace(sO,"[").replace(oO,"]")}function uO(t){return Lm(t).replace(vb,"{").replace(wb,"}").replace(yb,"^")}function Kf(t){return Lm(t).replace(_b,"%2B").replace(lO,"+").replace(gb,"%23").replace(tO,"%26").replace(aO,"`").replace(vb,"{").replace(wb,"}").replace(yb,"^")}function hO(t){return Kf(t).replace(rO,"%3D")}function dO(t){return Lm(t).replace(gb,"%23").replace(iO,"%3F")}function fO(t){return t==null?"":dO(t).replace(nO,"%2F")}function ru(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function pO(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(_b," "),o=s.indexOf("="),a=ru(o<0?s:s.slice(0,o)),c=o<0?null:ru(s.slice(o+1));if(a in e){let l=e[a];cr(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ov(t){let e="";for(let n in t){const r=t[n];if(n=hO(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(cr(r)?r.map(s=>s&&Kf(s)):[r&&Kf(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function mO(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=cr(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const gO=Symbol(""),av=Symbol(""),ph=Symbol(""),$m=Symbol(""),Gf=Symbol("");function sa(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function di(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(go(4,{from:n,to:e})):h instanceof Error?a(h):Bx(h)?a(go(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ld(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(_O(a)){const l=(a.__vccOpts||a)[e];l&&i.push(di(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=bx(l)?l.default:l;s.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&di(p,n,r,s,o)()}))}}return i}function _O(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cv(t){const e=Dn(ph),n=Dn($m),r=Lt(()=>e.resolve(gt(t.to))),i=Lt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(mo.bind(null,u));if(p>-1)return p;const m=lv(c[l-2]);return l>1&&lv(u)===m&&h[h.length-1].path!==m?h.findIndex(mo.bind(null,c[l-2])):p}),s=Lt(()=>i.value>-1&&EO(n.params,r.value.params)),o=Lt(()=>i.value>-1&&i.value===n.matched.length-1&&hb(n.params,r.value.params));function a(c={}){return wO(c)?e[gt(t.replace)?"replace":"push"](gt(t.to)).catch(Sa):Promise.resolve()}return{route:r,href:Lt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const yO=Kn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cv,setup(t,{slots:e}){const n=ih(cv(t)),{options:r}=Dn(ph),i=Lt(()=>({[uv(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[uv(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:ub("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),vO=yO;function wO(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function EO(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!cr(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function lv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const uv=(t,e,n)=>t??e??n,bO=Kn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Dn(Gf),i=Lt(()=>t.route||r.value),s=Dn(av,0),o=Lt(()=>{let l=gt(s);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Lt(()=>i.value.matched[o.value]);Dl(av,Lt(()=>o.value+1)),Dl(gO,a),Dl(Gf,i);const c=Xe();return Qr(()=>[c.value,a.value,t.name],([l,u,h],[p,m,y])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!mo(u,m)||!p)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return hv(n.default,{Component:p,route:l});const m=h.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,I=ub(p,ze({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return hv(n.default,{Component:I,route:l})||I}}});function hv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Eb=bO;function TO(t){const e=Jx(t.routes,t),n=t.parseQuery||pO,r=t.stringifyQuery||ov,i=t.history,s=sa(),o=sa(),a=sa(),c=DE(li);let l=li;zs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Dd.bind(null,O=>""+O),h=Dd.bind(null,fO),p=Dd.bind(null,ru);function m(O,J){let q,re;return fb(O)?(q=e.getRecordMatcher(O),re=J):re=O,e.addRoute(re,q)}function y(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function v(){return e.getRoutes().map(O=>O.record)}function I(O){return!!e.getRecordMatcher(O)}function A(O,J){if(J=ze({},J||c.value),typeof O=="string"){const C=Md(n,O,J.path),x=e.resolve({path:C.path},J),M=i.createHref(C.fullPath);return ze(C,x,{params:p(x.params),hash:ru(C.hash),redirectedFrom:void 0,href:M})}let q;if("path"in O)q=ze({},O,{path:Md(n,O.path,J.path).path});else{const C=ze({},O.params);for(const x in C)C[x]==null&&delete C[x];q=ze({},O,{params:h(C)}),J.params=h(J.params)}const re=e.resolve(q,J),Me=O.hash||"";re.params=u(p(re.params));const w=Ax(r,ze({},O,{hash:uO(Me),path:re.path})),E=i.createHref(w);return ze({fullPath:w,hash:Me,query:r===ov?mO(O.query):O.query||{}},re,{redirectedFrom:void 0,href:E})}function k(O){return typeof O=="string"?Md(n,O,c.value.path):ze({},O)}function N(O,J){if(l!==O)return go(8,{from:J,to:O})}function P(O){return ce(O)}function j(O){return P(ze(k(O),{replace:!0}))}function z(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:q}=J;let re=typeof q=="function"?q(O):q;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=k(re):{path:re},re.params={}),ze({query:O.query,hash:O.hash,params:"path"in re?{}:O.params},re)}}function ce(O,J){const q=l=A(O),re=c.value,Me=O.state,w=O.force,E=O.replace===!0,C=z(q);if(C)return ce(ze(k(C),{state:typeof C=="object"?ze({},Me,C.state):Me,force:w,replace:E}),J||q);const x=q;x.redirectedFrom=J;let M;return!w&&Cx(r,re,q)&&(M=go(16,{to:x,from:re}),St(re,re,!0,!1)),(M?Promise.resolve(M):Pe(x,re)).catch(L=>Ur(L)?Ur(L,2)?L:Rt(L):Ie(L,x,re)).then(L=>{if(L){if(Ur(L,2))return ce(ze({replace:E},k(L.to),{state:typeof L.to=="object"?ze({},Me,L.to.state):Me,force:w}),J||x)}else L=jt(x,re,!0,E,Me);return pt(x,re,L),L})}function ye(O,J){const q=N(O,J);return q?Promise.reject(q):Promise.resolve()}function Ke(O){const J=Yn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function Pe(O,J){let q;const[re,Me,w]=IO(O,J);q=Ld(re.reverse(),"beforeRouteLeave",O,J);for(const C of re)C.leaveGuards.forEach(x=>{q.push(di(x,O,J))});const E=ye.bind(null,O,J);return q.push(E),bt(q).then(()=>{q=[];for(const C of s.list())q.push(di(C,O,J));return q.push(E),bt(q)}).then(()=>{q=Ld(Me,"beforeRouteUpdate",O,J);for(const C of Me)C.updateGuards.forEach(x=>{q.push(di(x,O,J))});return q.push(E),bt(q)}).then(()=>{q=[];for(const C of w)if(C.beforeEnter)if(cr(C.beforeEnter))for(const x of C.beforeEnter)q.push(di(x,O,J));else q.push(di(C.beforeEnter,O,J));return q.push(E),bt(q)}).then(()=>(O.matched.forEach(C=>C.enterCallbacks={}),q=Ld(w,"beforeRouteEnter",O,J),q.push(E),bt(q))).then(()=>{q=[];for(const C of o.list())q.push(di(C,O,J));return q.push(E),bt(q)}).catch(C=>Ur(C,8)?C:Promise.reject(C))}function pt(O,J,q){a.list().forEach(re=>Ke(()=>re(O,J,q)))}function jt(O,J,q,re,Me){const w=N(O,J);if(w)return w;const E=J===li,C=zs?history.state:{};q&&(re||E?i.replace(O.fullPath,ze({scroll:E&&C&&C.scroll},Me)):i.push(O.fullPath,Me)),c.value=O,St(O,J,q,E),Rt()}let Ze;function Mr(){Ze||(Ze=i.listen((O,J,q)=>{if(!Vs.listening)return;const re=A(O),Me=z(re);if(Me){ce(ze(Me,{replace:!0}),re).catch(Sa);return}l=re;const w=c.value;zs&&Dx(Xy(w.fullPath,q.delta),fh()),Pe(re,w).catch(E=>Ur(E,12)?E:Ur(E,2)?(ce(E.to,re).then(C=>{Ur(C,20)&&!q.delta&&q.type===Qa.pop&&i.go(-1,!1)}).catch(Sa),Promise.reject()):(q.delta&&i.go(-q.delta,!1),Ie(E,re,w))).then(E=>{E=E||jt(re,w,!1),E&&(q.delta&&!Ur(E,8)?i.go(-q.delta,!1):q.type===Qa.pop&&Ur(E,20)&&i.go(-1,!1)),pt(re,w,E)}).catch(Sa)}))}let un=sa(),He=sa(),Fe;function Ie(O,J,q){Rt(O);const re=He.list();return re.length?re.forEach(Me=>Me(O,J,q)):console.error(O),Promise.reject(O)}function Pn(){return Fe&&c.value!==li?Promise.resolve():new Promise((O,J)=>{un.add([O,J])})}function Rt(O){return Fe||(Fe=!O,Mr(),un.list().forEach(([J,q])=>O?q(O):J()),un.reset()),O}function St(O,J,q,re){const{scrollBehavior:Me}=t;if(!zs||!Me)return Promise.resolve();const w=!q&&Mx(Xy(O.fullPath,0))||(re||!q)&&history.state&&history.state.scroll||null;return VE().then(()=>Me(O,J,w)).then(E=>E&&Ox(E)).catch(E=>Ie(E,O,J))}const Pt=O=>i.go(O);let si;const Yn=new Set,Vs={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:I,getRoutes:v,resolve:A,options:t,push:P,replace:j,go:Pt,back:()=>Pt(-1),forward:()=>Pt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:He.add,isReady:Pn,install(O){const J=this;O.component("RouterLink",vO),O.component("RouterView",Eb),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>gt(c)}),zs&&!si&&c.value===li&&(si=!0,P(i.location).catch(Me=>{}));const q={};for(const Me in li)Object.defineProperty(q,Me,{get:()=>c.value[Me],enumerable:!0});O.provide(ph,J),O.provide($m,PE(q)),O.provide(Gf,c);const re=O.unmount;Yn.add(O),O.unmount=function(){Yn.delete(O),Yn.size<1&&(l=li,Ze&&Ze(),Ze=null,c.value=li,si=!1,Fe=!1),re()}}};function bt(O){return O.reduce((J,q)=>J.then(()=>Ke(q)),Promise.resolve())}return Vs}function IO(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>mo(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>mo(l,c))||i.push(c))}return[n,r,i]}function AO(){return Dn(ph)}function CO(){return Dn($m)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=function(t,e){if(!t)throw Vo(e)},Vo=function(t){return new Error("Firebase Database ("+bb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new SO;const p=s<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ib=function(t){const e=Tb(t);return mh.encodeByteArray(e,!0)},iu=function(t){return Ib(t).replace(/\./g,"")},su=function(t){try{return mh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(t){return Ab(void 0,t)}function Ab(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!kO(n)||(t[n]=Ab(t[n],e[n]));return t}function kO(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=()=>NO().__FIREBASE_DEFAULTS__,OO=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&su(t[1]);return e&&JSON.parse(e)},Vm=()=>{try{return xO()||OO()||DO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cb=t=>{var e,n;return(n=(e=Vm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},MO=t=>{const e=Cb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rb=()=>{var t;return(t=Vm())===null||t===void 0?void 0:t.config},Sb=t=>{var e;return(e=Vm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[iu(JSON.stringify(n)),iu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(cn())}function Pb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $O(){const t=cn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nb(){return bb.NODE_ADMIN===!0}function Um(){try{return typeof indexedDB=="object"}catch{return!1}}function xb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function VO(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FO,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?UO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gn(i,a,r)}}function UO(t,e){return t.replace(BO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return JSON.parse(t)}function Wt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ja(su(s[0])||""),n=Ja(su(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},jO=function(t){const e=Ob(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},HO=function(t){const e=Ob(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _o(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Qf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ou(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Xa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(dv(s)&&dv(o)){if(!Xa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ga(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function _a(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const p=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):h<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const p=(i<<5|i>>>27)+l+c+u+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function WO(t,e){const n=new qO(t,e);return n.subscribe.bind(n)}class qO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$d),i.error===void 0&&(i.error=$d),i.complete===void 0&&(i.complete=$d);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $d(){}function GO(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,K(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO=1e3,JO=2,XO=4*60*60*1e3,ZO=.5;function fv(t,e=YO,n=JO){const r=e*Math.pow(n,t),i=Math.round(ZO*r*(Math.random()-.5)*2);return Math.min(XO,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ya;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nD(e))try{this.getOrInitializeService({instanceIdentifier:Yi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yi){return this.instances.has(e)}getOptions(e=Yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yi){return this.component?this.component.multipleInstances?e:Yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tD(t){return t===Yi?void 0:t}function nD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(De||(De={}));const iD={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},sD=De.INFO,oD={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},aD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=oD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uo{constructor(e){this.name=e,this._logLevel=sD,this._logHandler=aD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const cD=(t,e)=>e.some(n=>t instanceof n);let pv,mv;function lD(){return pv||(pv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uD(){return mv||(mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Db=new WeakMap,Yf=new WeakMap,Mb=new WeakMap,Vd=new WeakMap,Bm=new WeakMap;function hD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ii(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Db.set(n,t)}).catch(()=>{}),Bm.set(e,t),e}function dD(t){if(Yf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yf.set(t,e)}let Jf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ii(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fD(t){Jf=t(Jf)}function pD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fd(this),e,...n);return Mb.set(r,e.sort?e.sort():[e]),Ii(r)}:uD().includes(t)?function(...e){return t.apply(Fd(this),e),Ii(Db.get(this))}:function(...e){return Ii(t.apply(Fd(this),e))}}function mD(t){return typeof t=="function"?pD(t):(t instanceof IDBTransaction&&dD(t),cD(t,lD())?new Proxy(t,Jf):t)}function Ii(t){if(t instanceof IDBRequest)return hD(t);if(Vd.has(t))return Vd.get(t);const e=mD(t);return e!==t&&(Vd.set(t,e),Bm.set(e,t)),e}const Fd=t=>Bm.get(t);function gD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ii(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ii(o.result),c.oldVersion,c.newVersion,Ii(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const _D=["get","getKey","getAll","getAllKeys","count"],yD=["put","add","delete","clear"],Ud=new Map;function gv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ud.get(e))return Ud.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_D.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Ud.set(e,s),s}fD(t=>({...t,get:(e,n,r)=>gv(e,n)||t.get(e,n,r),has:(e,n)=>!!gv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xf="@firebase/app",_v="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Uo("@firebase/app"),ED="@firebase/app-compat",bD="@firebase/analytics-compat",TD="@firebase/analytics",ID="@firebase/app-check-compat",AD="@firebase/app-check",CD="@firebase/auth",RD="@firebase/auth-compat",SD="@firebase/database",PD="@firebase/database-compat",kD="@firebase/functions",ND="@firebase/functions-compat",xD="@firebase/installations",OD="@firebase/installations-compat",DD="@firebase/messaging",MD="@firebase/messaging-compat",LD="@firebase/performance",$D="@firebase/performance-compat",VD="@firebase/remote-config",FD="@firebase/remote-config-compat",UD="@firebase/storage",BD="@firebase/storage-compat",jD="@firebase/firestore",HD="@firebase/firestore-compat",zD="firebase",WD="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="[DEFAULT]",qD={[Xf]:"fire-core",[ED]:"fire-core-compat",[TD]:"fire-analytics",[bD]:"fire-analytics-compat",[AD]:"fire-app-check",[ID]:"fire-app-check-compat",[CD]:"fire-auth",[RD]:"fire-auth-compat",[SD]:"fire-rtdb",[PD]:"fire-rtdb-compat",[kD]:"fire-fn",[ND]:"fire-fn-compat",[xD]:"fire-iid",[OD]:"fire-iid-compat",[DD]:"fire-fcm",[MD]:"fire-fcm-compat",[LD]:"fire-perf",[$D]:"fire-perf-compat",[VD]:"fire-rc",[FD]:"fire-rc-compat",[UD]:"fire-gcs",[BD]:"fire-gcs-compat",[jD]:"fire-fst",[HD]:"fire-fst-compat","fire-js":"fire-js",[zD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new Map,ep=new Map;function KD(t,e){try{t.container.addComponent(e)}catch(n){fs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(ep.has(e))return fs.debug(`There were multiple attempts to register component ${e}.`),!1;ep.set(e,t);for(const n of au.values())KD(n,t);return!0}function ks(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ai=new $i("app","Firebase",GD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=WD;function Lb(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ai.create("bad-app-name",{appName:String(i)});if(n||(n=Rb()),!n)throw Ai.create("no-options");const s=au.get(i);if(s){if(Xa(n,s.options)&&Xa(r,s.config))return s;throw Ai.create("duplicate-app",{appName:i})}const o=new rD(i);for(const c of ep.values())o.addComponent(c);const a=new QD(n,r,o);return au.set(i,a),a}function _h(t=Zf){const e=au.get(t);if(!e&&t===Zf&&Rb())return Lb();if(!e)throw Ai.create("no-app",{appName:t});return e}function Kt(t,e,n){var r;let i=(r=qD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fs.warn(a.join(" "));return}Rn(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD="firebase-heartbeat-database",JD=1,Za="firebase-heartbeat-store";let Bd=null;function $b(){return Bd||(Bd=gD(YD,JD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Za)}}}).catch(t=>{throw Ai.create("idb-open",{originalErrorMessage:t.message})})),Bd}async function XD(t){try{return await(await $b()).transaction(Za).objectStore(Za).get(Vb(t))}catch(e){if(e instanceof Gn)fs.warn(e.message);else{const n=Ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fs.warn(n.message)}}}async function yv(t,e){try{const r=(await $b()).transaction(Za,"readwrite");await r.objectStore(Za).put(e,Vb(t)),await r.done}catch(n){if(n instanceof Gn)fs.warn(n.message);else{const r=Ai.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fs.warn(r.message)}}}function Vb(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=1024,eM=30*24*60*60*1e3;class tM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=eM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vv(),{heartbeatsToSend:n,unsentEntries:r}=nM(this._heartbeatsCache.heartbeats),i=iu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vv(){return new Date().toISOString().substring(0,10)}function nM(t,e=ZD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Um()?xb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await XD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wv(t){return iu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(t){Rn(new yn("platform-logger",e=>new vD(e),"PRIVATE")),Rn(new yn("heartbeat",e=>new tM(e),"PRIVATE")),Kt(Xf,_v,t),Kt(Xf,_v,"esm2017"),Kt("fire-js","")}iM("");function jm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function X(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}function Ev(t){return t!==void 0&&t.enterprise!==void 0}class sM{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Fb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oM=Fb,Ub=new $i("auth","Firebase",Fb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new Uo("@firebase/auth");function aM(t,...e){cu.logLevel<=De.WARN&&cu.warn(`Auth (${Vi}): ${t}`,...e)}function Ll(t,...e){cu.logLevel<=De.ERROR&&cu.error(`Auth (${Vi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,...e){throw Hm(t,...e)}function Tr(t,...e){return Hm(t,...e)}function Bb(t,e,n){const r=Object.assign(Object.assign({},oM()),{[e]:n});return new $i("auth","Firebase",r).create(e,{appName:t.name})}function jb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Wn(t,"argument-error"),Bb(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ub.create(t,...e)}function pe(t,e,...n){if(!t)throw Hm(e,...n)}function zr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ll(e),new Error(e)}function Xr(t,e){t||zr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cM(){return bv()==="http:"||bv()==="https:"}function bv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cM()||Pb()||"connection"in navigator)?navigator.onLine:!0}function uM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xr(n>e,"Short delay should be less than long delay!"),this.isMobile=Fm()||kb()}get(){return lM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t,e){Xr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;zr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;zr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;zr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=new Ac(3e4,6e4);function Ns(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fi(t,e,n,r,i={}){return zb(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Hb.fetch()(Wb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function zb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hM),e);try{const i=new fM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ml(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ml(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ml(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ml(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Bb(t,u,l);Wn(t,u)}}catch(i){if(i instanceof Gn)throw i;Wn(t,"network-request-failed",{message:String(i)})}}async function Cc(t,e,n,r,i={}){const s=await Fi(t,e,n,r,i);return"mfaPendingCredential"in s&&Wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Wb(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zm(t.config,i):`${t.config.apiScheme}://${i}`}class fM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tr(this.auth,"network-request-failed")),dM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tr(t,e,r);return i.customData._tokenResponse=n,i}async function pM(t,e){return Fi(t,"GET","/v2/recaptchaConfig",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mM(t,e){return Fi(t,"POST","/v1/accounts:delete",e)}async function gM(t,e){return Fi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _M(t,e=!1){const n=dt(t),r=await n.getIdToken(e),i=Wm(r);pe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ka(jd(i.auth_time)),issuedAtTime:ka(jd(i.iat)),expirationTime:ka(jd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jd(t){return Number(t)*1e3}function Wm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ll("JWT malformed, contained fewer than 3 sections"),null;try{const i=su(n);return i?JSON.parse(i):(Ll("Failed to decode base64 JWT payload"),null)}catch(i){return Ll("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yM(t){const e=Wm(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&vM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ka(this.lastLoginAt),this.creationTime=ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await yo(t,gM(n,{idToken:r}));pe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?TM(s.providerUserInfo):[],a=bM(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qb(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function EM(t){const e=dt(t);await lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function TM(t){return t.map(e=>{var{providerId:n}=e,r=jm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IM(t,e){const n=await zb(t,{},async()=>{const r=Fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Wb(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yM(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return pe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await IM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ec;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(pe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(pe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ec,this.toJSON())}_performRefresh(){return zr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class us{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qb(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await yo(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _M(this,e)}reload(){return EM(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new us(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yo(this,mM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:P,isAnonymous:j,providerData:z,stsTokenManager:ce}=n;pe(N&&ce,e,"internal-error");const ye=ec.fromJSON(this.name,ce);pe(typeof N=="string",e,"internal-error"),ui(h,e.name),ui(p,e.name),pe(typeof P=="boolean",e,"internal-error"),pe(typeof j=="boolean",e,"internal-error"),ui(m,e.name),ui(y,e.name),ui(v,e.name),ui(I,e.name),ui(A,e.name),ui(k,e.name);const Ke=new us({uid:N,auth:e,email:p,emailVerified:P,displayName:h,isAnonymous:j,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:ye,createdAt:A,lastLoginAt:k});return z&&Array.isArray(z)&&(Ke.providerData=z.map(Pe=>Object.assign({},Pe))),I&&(Ke._redirectEventId=I),Ke}static async _fromIdTokenResponse(e,n,r=!1){const i=new ec;i.updateFromServerResponse(n);const s=new us({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=new Map;function Wr(t){Xr(t instanceof Function,"Expected a class definition");let e=Tv.get(t);return e?(Xr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kb.type="NONE";const Iv=Kb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t,e,n){return`firebase:${t}:${e}:${n}`}class no{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$l(this.userKey,i.apiKey,s),this.fullPersistenceKey=$l("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?us._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new no(Wr(Iv),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Wr(Iv);const o=$l(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=us._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new no(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new no(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xb(e))return"Blackberry";if(Zb(e))return"Webos";if(qm(e))return"Safari";if((e.includes("chrome/")||Qb(e))&&!e.includes("edge/"))return"Chrome";if(Jb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gb(t=cn()){return/firefox\//i.test(t)}function qm(t=cn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qb(t=cn()){return/crios\//i.test(t)}function Yb(t=cn()){return/iemobile/i.test(t)}function Jb(t=cn()){return/android/i.test(t)}function Xb(t=cn()){return/blackberry/i.test(t)}function Zb(t=cn()){return/webos/i.test(t)}function yh(t=cn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AM(t=cn()){var e;return yh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CM(){return $O()&&document.documentMode===10}function eT(t=cn()){return yh(t)||Jb(t)||Zb(t)||Xb(t)||/windows phone/i.test(t)||Yb(t)}function RM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t,e=[]){let n;switch(t){case"Browser":n=Av(cn());break;case"Worker":n=`${Av(cn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PM(t,e={}){return Fi(t,"GET","/v2/passwordPolicy",Ns(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM=6;class NM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cv(this),this.idTokenSubscription=new Cv(this),this.beforeStateQueue=new SM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ub,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PM(this),n=new NM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wr(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[Wr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kr(t){return dt(t)}class Cv{constructor(e){this.auth=e,this.observer=null,this.addObserver=WO(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OM().appendChild(r)})}function DM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const MM="https://www.google.com/recaptcha/enterprise.js?render=",LM="recaptcha-enterprise",$M="NO_RECAPTCHA";class VM{constructor(e){this.type=LM,this.auth=kr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{pM(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new sM(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Ev(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o($M)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ev(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nT(MM+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function uu(t,e,n,r=!1){const i=new VM(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(t,e){const n=ks(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xa(s,e??{}))return i;Wn(i,"already-initialized")}return n.initialize({options:e})}function UM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function BM(t,e,n){const r=kr(t);pe(r._canInitEmulator,r,"emulator-config-failed"),pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=rT(e),{host:o,port:a}=jM(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||HM()}function rT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jM(t){const e=rT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Rv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Rv(o)}}}function Rv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zr("not implemented")}_getIdTokenResponse(e){return zr("not implemented")}_linkToIdToken(e,n){return zr("not implemented")}_getReauthenticationResolver(e){return zr("not implemented")}}async function zM(t,e){return Fi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hd(t,e){return Cc(t,"POST","/v1/accounts:signInWithPassword",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WM(t,e){return Cc(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}async function qM(t,e){return Cc(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends Km{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new tc(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new tc(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await uu(e,r,"signInWithPassword");return Hd(e,i)}else return Hd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await uu(e,r,"signInWithPassword");return Hd(e,s)}else return Promise.reject(i)});case"emailLink":return WM(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return zM(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qM(e,{idToken:n,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e){return Cc(t,"POST","/v1/accounts:signInWithIdp",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM="http://localhost";class ps extends Km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ps(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ro(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ro(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ro(e,n)}buildRequest(){const e={requestUri:KM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QM(t){const e=ga(_a(t)).link,n=e?ga(_a(e)).deep_link_id:null,r=ga(_a(t)).deep_link_id;return(r?ga(_a(r)).link:null)||r||n||e||t}class Gm{constructor(e){var n,r,i,s,o,a;const c=ga(_a(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=GM((i=c.mode)!==null&&i!==void 0?i:null);pe(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=QM(e);try{return new Gm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.providerId=Bo.PROVIDER_ID}static credential(e,n){return tc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gm.parseLink(n);return pe(r,"argument-error"),tc._fromEmailAndCode(e,r.code,r.tenantId)}}Bo.PROVIDER_ID="password";Bo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends vh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Rc{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Rc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pi.credential(n,r)}catch{return null}}}pi.GOOGLE_SIGN_IN_METHOD="google.com";pi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends Rc{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.GITHUB_SIGN_IN_METHOD="github.com";mi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Rc{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gi.credential(n,r)}catch{return null}}}gi.TWITTER_SIGN_IN_METHOD="twitter.com";gi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(t,e){return Cc(t,"POST","/v1/accounts:signUp",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await us._fromIdTokenResponse(e,r,i),o=Sv(r);return new ms({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Sv(r);return new ms({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Sv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu extends Gn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hu(e,n,r,i)}}function iT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hu._fromErrorAndOperation(t,s,e,r):s})}async function YM(t,e,n=!1){const r=await yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ms._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JM(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await yo(t,iT(r,i,e,t),n);pe(s.idToken,r,"internal-error");const o=Wm(s.idToken);pe(o,r,"internal-error");const{sub:a}=o;return pe(t.uid===a,r,"user-mismatch"),ms._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(t,e,n=!1){const r="signIn",i=await iT(t,r,e),s=await ms._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function XM(t,e){return sT(kr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(t){const e=kr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Xz(t,e,n){var r;const i=kr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await uu(i,s,"signUpPassword");o=zd(i,l)}else o=zd(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await uu(i,s,"signUpPassword");return zd(i,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&oT(t),l}),c=await ms._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Zz(t,e,n){return XM(dt(t),Bo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZM(t,e){return Fi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eW(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=dt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await yo(r,ZM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function aT(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function eL(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function tW(t){return dt(t).signOut()}const du="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(du,"1"),this.storage.removeItem(du),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(){const t=cn();return qm(t)||yh(t)}const nL=1e3,rL=10;class lT extends cT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tL()&&RM(),this.fallbackToPolling=eT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);CM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lT.type="LOCAL";const iL=lT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT extends cT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uT.type="SESSION";const hT=uT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await sL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Qm("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(){return window}function aL(t){Ir().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(){return typeof Ir().WorkerGlobalScope<"u"&&typeof Ir().importScripts=="function"}async function cL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uL(){return dT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="firebaseLocalStorageDb",hL=1,fu="firebaseLocalStorage",pT="fbase_key";class Sc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eh(t,e){return t.transaction([fu],e?"readwrite":"readonly").objectStore(fu)}function dL(){const t=indexedDB.deleteDatabase(fT);return new Sc(t).toPromise()}function np(){const t=indexedDB.open(fT,hL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fu,{keyPath:pT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fu)?e(r):(r.close(),await dL(),e(await np()))})})}async function Pv(t,e,n){const r=Eh(t,!0).put({[pT]:e,value:n});return new Sc(r).toPromise()}async function fL(t,e){const n=Eh(t,!1).get(e),r=await new Sc(n).toPromise();return r===void 0?null:r.value}function kv(t,e){const n=Eh(t,!0).delete(e);return new Sc(n).toPromise()}const pL=800,mL=3;class mT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await np(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wh._getInstance(uL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cL(),!this.activeServiceWorker)return;this.sender=new oL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await np();return await Pv(e,du,"1"),await kv(e,du),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>fL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Eh(i,!1).getAll();return new Sc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mT.type="LOCAL";const gL=mT;new Ac(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e){return e?Wr(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm extends Km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _L(t){return sT(t.auth,new Jm(t),t.bypassAuthState)}function yL(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),JM(n,new Jm(t),t.bypassAuthState)}async function vL(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),YM(n,new Jm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _L;case"linkViaPopup":case"linkViaRedirect":return vL;case"reauthViaPopup":case"reauthViaRedirect":return yL;default:Wn(this.auth,"internal-error")}}resolve(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL=new Ac(2e3,1e4);async function nW(t,e,n){const r=kr(t);jb(t,e,vh);const i=Ym(r,n);return new ts(r,"signInViaPopup",e,i).executeNotNull()}class ts extends gT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Xr(this.filter.length===1,"Popup operations only handle one event");const e=Qm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wL.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL="pendingRedirect",Vl=new Map;class bL extends gT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vl.get(this.auth._key());if(!e){try{const r=await TL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vl.set(this.auth._key(),e)}return this.bypassAuthState||Vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TL(t,e){const n=yT(e),r=_T(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function IL(t,e){return _T(t)._set(yT(e),"true")}function AL(t,e){Vl.set(t._key(),e)}function _T(t){return Wr(t._redirectPersistence)}function yT(t){return $l(EL,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rW(t,e,n){return CL(t,e,n)}async function CL(t,e,n){const r=kr(t);jb(t,e,vh),await r._initializationPromise;const i=Ym(r,n);return await IL(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function iW(t,e){return await kr(t)._initializationPromise,vT(t,e,!1)}async function vT(t,e,n=!1){const r=kr(t),i=Ym(r,e),o=await new bL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RL=10*60*1e3;class SL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nv(e))}saveEventToCache(e){this.cachedEventUids.add(Nv(e)),this.lastProcessedEventTime=Date.now()}}function Nv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kL(t,e={}){return Fi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xL=/^https?/;async function OL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kL(t);for(const n of e)try{if(DL(n))return}catch{}Wn(t,"unauthorized-domain")}function DL(t){const e=tp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xL.test(n))return!1;if(NL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=new Ac(3e4,6e4);function xv(){const t=Ir().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LL(t){return new Promise((e,n)=>{var r,i,s;function o(){xv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xv(),n(Tr(t,"network-request-failed"))},timeout:ML.get()})}if(!((i=(r=Ir().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ir().gapi)===null||s===void 0)&&s.load)o();else{const a=DM("iframefcb");return Ir()[a]=()=>{gapi.load?o():n(Tr(t,"network-request-failed"))},nT(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Fl=null,e})}let Fl=null;function $L(t){return Fl=Fl||LL(t),Fl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VL=new Ac(5e3,15e3),FL="__/auth/iframe",UL="emulator/auth/iframe",BL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HL(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zm(e,UL):`https://${t.config.authDomain}/${FL}`,r={apiKey:e.apiKey,appName:t.name,v:Vi},i=jL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fo(r).slice(1)}`}async function zL(t){const e=await $L(t),n=Ir().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:HL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tr(t,"network-request-failed"),a=Ir().setTimeout(()=>{s(o)},VL.get());function c(){Ir().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qL=500,KL=600,GL="_blank",QL="http://localhost";class Ov{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YL(t,e,n,r=qL,i=KL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},WL),{width:r.toString(),height:i.toString(),top:s,left:o}),l=cn().toLowerCase();n&&(a=Qb(l)?GL:n),Gb(l)&&(e=e||QL,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(AM(l)&&a!=="_self")return JL(e||"",a),new Ov(null);const h=window.open(e||"",a,u);pe(h,t,"popup-blocked");try{h.focus()}catch{}return new Ov(h)}function JL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL="__/auth/handler",ZL="emulator/auth/handler",e2=encodeURIComponent("fac");async function Dv(t,e,n,r,i,s){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vi,eventId:i};if(e instanceof vh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Rc){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${e2}=${encodeURIComponent(c)}`:"";return`${t2(t)}?${Fo(a).slice(1)}${l}`}function t2({config:t}){return t.emulator?zm(t,ZL):`https://${t.authDomain}/${XL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="webStorageSupport";class n2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hT,this._completeRedirectFn=vT,this._overrideRedirectResult=AL}async _openPopup(e,n,r,i){var s;Xr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Dv(e,n,r,tp(),i);return YL(e,o,Qm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Dv(e,n,r,tp(),i);return aL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zL(e),r=new SL(e);return n.register("authEvent",i=>(pe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wd,{type:Wd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wd];o!==void 0&&n(!!o),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eT()||qm()||yh()}}const r2=n2;var Mv="@firebase/auth",Lv="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function o2(t){Rn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tT(t)},l=new xM(r,i,s,c);return UM(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rn(new yn("auth-internal",e=>{const n=kr(e.getProvider("auth").getImmediate());return(r=>new i2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Mv,Lv,s2(t)),Kt(Mv,Lv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=5*60,c2=Sb("authIdTokenMaxAge")||a2;let $v=null;const l2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>c2)return;const i=n==null?void 0:n.token;$v!==i&&($v=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ET(t=_h()){const e=ks(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FM(t,{popupRedirectResolver:r2,persistence:[gL,iL,hT]}),r=Sb("authTokenSyncURL");if(r){const s=l2(r);eL(n,s,()=>s(n.currentUser)),aT(n,o=>s(o))}const i=Cb("auth");return i&&BM(n,`http://${i}`),n}o2("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=new Map,h2={activated:!1,tokenObservers:[]};function lr(t){return u2.get(t)||Object.assign({},h2)}const Vv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,r,i,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ya,await f2(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ya,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function f2(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},pu=new $i("appCheck","AppCheck",p2);function bT(t){if(!lr(t).activated)throw pu.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2="firebase-app-check-database",g2=1,rp="firebase-app-check-store";let gl=null;function _2(){return gl||(gl=new Promise((t,e)=>{try{const n=indexedDB.open(m2,g2);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var i;e(pu.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(rp,{keyPath:"compositeKey"})}}}catch(n){e(pu.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),gl)}function y2(t,e){return v2(w2(t),e)}async function v2(t,e){const r=(await _2()).transaction(rp,"readwrite"),s=r.objectStore(rp).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=c=>{o()},r.onerror=c=>{var l;a(pu.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function w2(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new Uo("@firebase/app-check");function Fv(t,e){return Um()?y2(t,e).catch(n=>{ip.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2={error:"UNKNOWN_ERROR"};function b2(t){return mh.encodeString(JSON.stringify(t),!1)}async function sp(t,e=!1){const n=t.app;bT(n);const r=lr(n);let i=r.token,s;if(i&&!ya(i)&&(r.token=void 0,i=void 0),!i){const c=await r.cachedTokenPromise;c&&(ya(c)?i=c:await Fv(n,void 0))}if(!e&&i&&ya(i))return{token:i.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await lr(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?ip.warn(c.message):ip.error(c),s=c}let a;return i?s?ya(i)?a={token:i.token,internalError:s}:a=Bv(s):(a={token:i.token},r.token=i,await Fv(n,i)):a=Bv(s),o&&C2(n,a),a}async function T2(t){const e=t.app;bT(e);const{provider:n}=lr(e);{const{token:r}=await n.getToken();return{token:r}}}function I2(t,e,n,r){const{app:i}=t,s=lr(i),o={next:n,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&ya(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Uv(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Uv(t))}function TT(t,e){const n=lr(t),r=n.tokenObservers.filter(i=>i.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Uv(t){const{app:e}=t,n=lr(e);let r=n.tokenRefresher;r||(r=A2(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function A2(t){const{app:e}=t;return new d2(async()=>{const n=lr(e);let r;if(n.token?r=await sp(t,!0):r=await sp(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=lr(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},Vv.RETRIAL_MIN_WAIT,Vv.RETRIAL_MAX_WAIT)}function C2(t,e){const n=lr(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function ya(t){return t.expireTimeMillis-Date.now()>0}function Bv(t){return{token:b2(E2),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=lr(this.app);for(const n of e)TT(this.app,n.next);return Promise.resolve()}}function S2(t,e){return new R2(t,e)}function P2(t){return{getToken:e=>sp(t,e),getLimitedUseToken:()=>T2(t),addTokenListener:e=>I2(t,"INTERNAL",e),removeTokenListener:e=>TT(t.app,e)}}const k2="@firebase/app-check",N2="0.8.0",x2="app-check",jv="app-check-internal";function O2(){Rn(new yn(x2,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return S2(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(jv).initialize()})),Rn(new yn(jv,t=>{const e=t.getProvider("app-check").getImmediate();return P2(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Kt(k2,N2)}O2();var D2="firebase",M2="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(D2,M2,"app");const IT=Symbol("firebaseApp");function Pc(t){return ab()&&Dn(IT,null)||_h(t)}const yr=()=>{},L2=typeof window<"u";function Xm(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function $2(t,e,n){const r=(""+e).split("."),i=r.pop(),s=r.reduce((o,a)=>o&&o[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(i),1,n):s[i]=n}function xs(t){return!!t&&typeof t=="object"}const V2=Object.prototype;function F2(t){return xs(t)&&Object.getPrototypeOf(t)===V2}function Zm(t){return xs(t)&&t.type==="document"}function U2(t){return xs(t)&&t.type==="collection"}function B2(t){return Zm(t)||U2(t)}function j2(t){return xs(t)&&t.type==="query"}function H2(t){return xs(t)&&"ref"in t}function z2(t){return xs(t)&&typeof t.bucket=="string"}function W2(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const q2=Symbol.for("v-scx");function K2(){return!!Dn(q2,0)}const _l=new WeakMap;function G2(t,e){if(!_l.has(t)){const n=_E(!0);_l.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),_l.delete(t)}}return _l.get(t)}const AT=new WeakMap;function bh(t){return AT.get(Pc(t))}const yl=new WeakMap;function CT(t){const e=Pc(t);if(!yl.has(e)){let n;const i=[new Promise(s=>{n=s}),s=>{yl.set(e,s),n(s.value)}];yl.set(e,i)}return yl.get(e)}function Q2(t){const e=CT(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function Y2(t,e){const n=ET(e);aT(n,r=>{const i=CT();t.value=r,Array.isArray(i)&&i[1](t)})}const Hv="@firebase/database",zv="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RT="";function J2(t){RT=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Wt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ja(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ii(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new X2(e)}}catch{}return new Z2},ns=ST("localStorage"),op=ST("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new Uo("@firebase/database"),e$=function(){let t=1;return function(){return t++}}(),PT=function(t){const e=QO(t),n=new zO;n.update(e);const r=n.digest();return mh.encodeByteArray(r)},kc=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=kc.apply(null,r):typeof r=="object"?e+=Wt(r):e+=r,e+=" "}return e};let hs=null,Wv=!0;const t$=function(t,e){K(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(io.logLevel=De.VERBOSE,hs=io.log.bind(io),e&&op.set("logging_enabled",!0)):typeof t=="function"?hs=t:(hs=null,op.remove("logging_enabled"))},Zt=function(...t){if(Wv===!0&&(Wv=!1,hs===null&&op.get("logging_enabled")===!0&&t$(!0)),hs){const e=kc.apply(null,t);hs(e)}},Nc=function(t){return function(...e){Zt(t,...e)}},ap=function(...t){const e="FIREBASE INTERNAL ERROR: "+kc(...t);io.error(e)},gs=function(...t){const e=`FIREBASE FATAL ERROR: ${kc(...t)}`;throw io.error(e),new Error(e)},Mn=function(...t){const e="FIREBASE WARNING: "+kc(...t);io.warn(e)},n$=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Mn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},r$=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vo="[MIN_NAME]",_s="[MAX_NAME]",jo=function(t,e){if(t===e)return 0;if(t===vo||e===_s)return-1;if(e===vo||t===_s)return 1;{const n=qv(t),r=qv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},i$=function(t,e){return t===e?0:t<e?-1:1},oa=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Wt(e))},eg=function(t){if(typeof t!="object"||t===null)return Wt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Wt(e[r]),n+=":",n+=eg(t[e[r]]);return n+="}",n},NT=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function qn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xT=function(t){K(!kT(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,c;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let p=parseInt(u.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),h=h+p}return h.toLowerCase()},s$=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},o$=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},a$=new RegExp("^-?(0*)\\d{1,10}$"),c$=-2147483648,l$=2147483647,qv=function(t){if(a$.test(t)){const e=Number(t);if(e>=c$&&e<=l$)return e}return null},xc=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Mn("Exception was thrown by user callback.",n),e},Math.floor(0))}},u$=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Na=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h${constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Mn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d${constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Zt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Mn(e)}}class cp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cp.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="5",OT="v",DT="s",MT="r",LT="f",$T=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,VT="ls",FT="p",lp="ac",UT="websocket",BT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f${constructor(e,n,r,i,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ns.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ns.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function p$(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jT(t,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let r;if(e===UT)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===BT)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);p$(t)&&(n.ns=t.namespace);const i=[];return qn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m${constructor(){this.counters_={}}incrementCounter(e,n=1){ii(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return PO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd={},Kd={};function ng(t){const e=t.toString();return qd[e]||(qd[e]=new m$),qd[e]}function g$(t,e){const n=t.toString();return Kd[n]||(Kd[n]=e()),Kd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _${constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&xc(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="start",y$="close",v$="pLPCommand",w$="pRTLPCB",HT="id",zT="pw",WT="ser",E$="cb",b$="seg",T$="ts",I$="d",A$="dframe",qT=1870,KT=30,C$=qT-KT,R$=25e3,S$=3e4;class Gs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nc(e),this.stats_=ng(n),this.urlFn=c=>(this.appCheckToken&&(c[lp]=this.appCheckToken),jT(n,BT,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _$(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(S$)),r$(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rg((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Kv)this.id=a,this.password=c;else if(o===y$)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Kv]="t",r[WT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[E$]=this.scriptTagHolder.uniqueCallbackIdentifier),r[OT]=tg,this.transportSessionId&&(r[DT]=this.transportSessionId),this.lastSessionId&&(r[VT]=this.lastSessionId),this.applicationId&&(r[FT]=this.applicationId),this.appCheckToken&&(r[lp]=this.appCheckToken),typeof location<"u"&&location.hostname&&$T.test(location.hostname)&&(r[MT]=LT);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gs.forceAllow_=!0}static forceDisallow(){Gs.forceDisallow_=!0}static isAvailable(){return Gs.forceAllow_?!0:!Gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!s$()&&!o$()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Wt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ib(n),i=NT(r,C$);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[A$]="t",r[HT]=e,r[zT]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Wt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=e$(),window[v$+this.uniqueCallbackIdentifier]=e,window[w$+this.uniqueCallbackIdentifier]=n,this.myIFrame=rg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Zt("frame writing exception"),a.stack&&Zt(a.stack),Zt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Zt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[HT]=this.myID,e[zT]=this.myPW,e[WT]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+KT+r.length<=qT;){const o=this.pendingSegs.shift();r=r+"&"+b$+i+"="+o.seg+"&"+T$+i+"="+o.ts+"&"+I$+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(R$)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Zt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P$=16384,k$=45e3;let mu=null;typeof MozWebSocket<"u"?mu=MozWebSocket:typeof WebSocket<"u"&&(mu=WebSocket);class Zn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nc(this.connId),this.stats_=ng(n),this.connURL=Zn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[OT]=tg,typeof location<"u"&&location.hostname&&$T.test(location.hostname)&&(o[MT]=LT),n&&(o[DT]=n),r&&(o[VT]=r),i&&(o[lp]=i),s&&(o[FT]=s),jT(e,UT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ns.set("previous_websocket_failure",!0);try{let r;Nb(),this.mySock=new mu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Zn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&mu!==null&&!Zn.forceDisallow_}static previouslyFailed(){return ns.isInMemoryStorage||ns.get("previous_websocket_failure")===!0}markConnectionHealthy(){ns.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ja(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Wt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=NT(n,P$);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(k$))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zn.responsesRequiredToBeHealthy=2;Zn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gs,Zn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Zn&&Zn.isAvailable();let r=n&&!Zn.previouslyFailed();if(e.webSocketOnly&&(n||Mn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Zn];else{const i=this.transports_=[];for(const s of nc.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);nc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}nc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N$=6e4,x$=5e3,O$=10*1024,D$=100*1024,Gd="t",Gv="d",M$="s",Qv="r",L$="e",Yv="o",Jv="a",Xv="n",Zv="p",$$="h";class V${constructor(e,n,r,i,s,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nc("c:"+this.id+":"),this.transportManager_=new nc(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Na(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>D$?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>O$?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gd in e){const n=e[Gd];n===Jv?this.upgradeIfSecondaryHealthy_():n===Qv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=oa("t",e),r=oa("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=oa("t",e),r=oa("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=oa(Gd,e);if(Gv in e){const r=e[Gv];if(n===$$){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Xv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===M$?this.onConnectionShutdown_(r):n===Qv?this.onReset_(r):n===L$?ap("Server Error: "+r):n===Yv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ap("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),tg!==r&&Mn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Na(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(N$))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Na(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(x$))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ns.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends QT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Fm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gu}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=32,tw=768;class ot{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Qe(){return new ot("")}function Re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ni(t){return t.pieces_.length-t.pieceNum_}function rt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ot(t.pieces_,e)}function YT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function F$(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function JT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function XT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ot(e,0)}function $t(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ot)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ot(n,0)}function be(t){return t.pieceNum_>=t.pieces_.length}function zn(t,e){const n=Re(t),r=Re(e);if(n===null)return e;if(n===r)return zn(rt(t),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ZT(t,e){if(Ni(t)!==Ni(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function nr(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ni(t)>Ni(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class U${constructor(e,n){this.errorPrefix_=n,this.parts_=JT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=gh(this.parts_[r]);eI(this)}}function B$(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gh(e),eI(t)}function j$(t){const e=t.parts_.pop();t.byteLength_-=gh(e),t.parts_.length>0&&(t.byteLength_-=1)}function eI(t){if(t.byteLength_>tw)throw new Error(t.errorPrefix_+"has a key path longer than "+tw+" bytes ("+t.byteLength_+").");if(t.parts_.length>ew)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ew+") or object contains a cycle "+Ji(t))}function Ji(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig extends QT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ig}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=1e3,H$=60*5*1e3,nw=30*1e3,z$=1.3,W$=3e4,q$="server_kill",rw=3;class Yr extends GT{constructor(e,n,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Yr.nextPersistentConnectionId_++,this.log_=Nc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=aa,this.maxReconnectDelay_=H$,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Nb())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ig.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Wt(s)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ya,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;Yr.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ii(e,"w")){const r=_o(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Mn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||HO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=nw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Wt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ap("Unrecognized action received from server: "+Wt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=aa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=aa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>W$&&(this.reconnectDelay_=aa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*z$)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Yr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(h){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,p]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Zt("getToken() completed but was canceled"):(Zt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,a=new V$(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Mn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(q$)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Mn(h),c())}}}interrupt(e){Zt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Zt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qf(this.interruptReasons_)&&(this.reconnectDelay_=aa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>eg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ot(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Zt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rw&&(this.reconnectDelay_=nw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Zt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+RT.replace(/\./g,"-")]=1,Fm()?e["framework.cordova"]=1:kb()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gu.getInstance().currentlyOnline();return Qf(this.interruptReasons_)&&e}}Yr.nextPersistentConnectionId_=0;Yr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Se(vo,e),i=new Se(vo,n);return this.compare(r,i)!==0}minPost(){return Se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl;class tI extends Th{static get __EMPTY_NODE(){return vl}static set __EMPTY_NODE(e){vl=e}compare(e,n){return jo(e.name,n.name)}isDefinedOn(e){throw Vo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Se.MIN}maxPost(){return new Se(_s,vl)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new Se(e,vl)}toString(){return".key"}}const so=new tI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},xn=class va{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??va.RED,this.left=i??vr.EMPTY_NODE,this.right=s??vr.EMPTY_NODE}copy(e,n,r,i,s){return new va(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return vr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return vr.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,va.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,va.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};xn.RED=!0;xn.BLACK=!1;class K${copy(e,n,r,i,s){return this}insert(e,n,r){return new xn(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let vr=class Ul{constructor(e,n=Ul.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ul(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xn.BLACK,null,null))}remove(e){return new Ul(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xn.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new wl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new wl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new wl(this.root_,null,this.comparator_,!0,e)}};vr.EMPTY_NODE=new K$;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G$(t,e){return jo(t.name,e.name)}function sg(t,e){return jo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let up;function Q$(t){up=t}const nI=function(t){return typeof t=="number"?"number:"+xT(t):"string:"+t},rI=function(t){if(t.isLeafNode()){const e=t.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ii(e,".sv"),"Priority must be a string or number.")}else K(t===up||t.isEmpty(),"priority of unexpected type.");K(t===up||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iw;class xt{constructor(e,n=xt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),rI(this.priorityNode_)}static set __childrenNodeConstructor(e){iw=e}static get __childrenNodeConstructor(){return iw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return be(e)?this:Re(e)===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Re(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(K(r!==".priority"||Ni(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,xt.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xT(this.value_):e+=this.value_,this.lazyHash_=PT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xt.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=xt.VALUE_TYPE_ORDER.indexOf(n),s=xt.VALUE_TYPE_ORDER.indexOf(r);return K(i>=0,"Unknown leaf type: "+n),K(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iI,sI;function Y$(t){iI=t}function J$(t){sI=t}class X$ extends Th{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?jo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Se.MIN}maxPost(){return new Se(_s,new xt("[PRIORITY-POST]",sI))}makePost(e,n){const r=iI(e);return new Se(n,new xt("[PRIORITY-POST]",r))}toString(){return".priority"}}const rn=new X$;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z$=Math.log(2);class eV{constructor(e){const n=s=>parseInt(Math.log(s)/Z$,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _u=function(t,e,n,r){t.sort(e);const i=function(c,l){const u=l-c;let h,p;if(u===0)return null;if(u===1)return h=t[c],p=n?n(h):h,new xn(p,h.node,xn.BLACK,null,null);{const m=parseInt(u/2,10)+c,y=i(c,m),v=i(m+1,l);return h=t[m],p=n?n(h):h,new xn(p,h.node,xn.BLACK,y,v)}},s=function(c){let l=null,u=null,h=t.length;const p=function(y,v){const I=h-y,A=h;h-=y;const k=i(I+1,A),N=t[I],P=n?n(N):N;m(new xn(P,N.node,v,null,k))},m=function(y){l?(l.left=y,l=y):(u=y,l=y)};for(let y=0;y<c.count;++y){const v=c.nextBitIsOne(),I=Math.pow(2,c.count-(y+1));v?p(I,xn.BLACK):(p(I,xn.BLACK),p(I,xn.RED))}return u},o=new eV(t.length),a=s(o);return new vr(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qd;const Bs={};class qr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return K(Bs&&rn,"ChildrenNode.ts has not been loaded"),Qd=Qd||new qr({".priority":Bs},{".priority":rn}),Qd}get(e){const n=_o(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof vr?n:null}hasIndex(e){return ii(this.indexSet_,e.toString())}addIndex(e,n){K(e!==so,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Se.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=_u(r,e.getCompare()):a=Bs;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new qr(u,l)}addToIndexes(e,n){const r=ou(this.indexes_,(i,s)=>{const o=_o(this.indexSet_,s);if(K(o,"Missing index implementation for "+s),i===Bs)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Se.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),_u(a,o.getCompare())}else return Bs;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new Se(e.name,a))),c.insert(e,e.node)}});return new qr(r,this.indexSet_)}removeFromIndexes(e,n){const r=ou(this.indexes_,i=>{if(i===Bs)return i;{const s=n.get(e.name);return s?i.remove(new Se(e.name,s)):i}});return new qr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca;class je{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&rI(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ca||(ca=new je(new vr(sg),null,qr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ca}updatePriority(e){return this.children_.isEmpty()?this:new je(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ca:n}}getChild(e){const n=Re(e);return n===null?this:this.getImmediateChild(n).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Se(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ca:this.priorityNode_;return new je(i,o,s)}}updateChild(e,n){const r=Re(e);if(r===null)return n;{K(Re(e)!==".priority"||Ni(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(rt(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(rn,(o,a)=>{n[o]=a.val(e),r++,s&&je.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nI(this.getPriority().val())+":"),this.forEachChild(rn,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":PT(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Se(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Oc?-1:0}withIndex(e){if(e===so||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new je(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===so||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(rn),i=n.getIterator(rn);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===so?null:this.indexMap_.get(e.toString())}}je.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tV extends je{constructor(){super(new vr(sg),je.EMPTY_NODE,qr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return je.EMPTY_NODE}isEmpty(){return!1}}const Oc=new tV;Object.defineProperties(Se,{MIN:{value:new Se(vo,je.EMPTY_NODE)},MAX:{value:new Se(_s,Oc)}});tI.__EMPTY_NODE=je.EMPTY_NODE;xt.__childrenNodeConstructor=je;Q$(Oc);J$(Oc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV=!0;function en(t,e=null){if(t===null)return je.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xt(n,en(e))}if(!(t instanceof Array)&&nV){const n=[];let r=!1;if(qn(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=en(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new Se(o,c)))}}),n.length===0)return je.EMPTY_NODE;const s=_u(n,G$,o=>o.name,sg);if(r){const o=_u(n,rn.getCompare());return new je(s,en(e),new qr({".priority":o},{".priority":rn}))}else return new je(s,en(e),qr.Default)}else{let n=je.EMPTY_NODE;return qn(t,(r,i)=>{if(ii(t,r)&&r.substring(0,1)!=="."){const s=en(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(en(e))}}Y$(en);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV extends Th{constructor(e){super(),this.indexPath_=e,K(!be(e)&&Re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?jo(e.name,n.name):s}makePost(e,n){const r=en(e),i=je.EMPTY_NODE.updateChild(this.indexPath_,r);return new Se(n,i)}maxPost(){const e=je.EMPTY_NODE.updateChild(this.indexPath_,Oc);return new Se(_s,e)}toString(){return JT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV extends Th{compare(e,n){const r=e.node.compareTo(n.node);return r===0?jo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Se.MIN}maxPost(){return Se.MAX}makePost(e,n){const r=en(e);return new Se(n,r)}toString(){return".value"}}const sV=new iV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(t){return{type:"value",snapshotNode:t}}function aV(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function cV(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function sw(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function lV(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=rn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vo}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_s}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===rn}copy(){const e=new og;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ow(t){const e={};if(t.isDefault())return e;let n;if(t.index_===rn?n="$priority":t.index_===sV?n="$value":t.index_===so?n="$key":(K(t.index_ instanceof rV,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Wt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Wt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Wt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Wt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Wt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function aw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==rn&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends GT{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Nc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=yu.getListenId_(e,r),a={};this.listens_[o]=a;const c=ow(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(s,h,!1,r),_o(this.listens_,o)===a){let p;l?l===401?p="permission_denied":p="rest_error:"+l:p="ok",i(p,null)}})}unlisten(e,n){const r=yu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ow(e._queryParams),r=e._path.toString(),i=new Ya;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ja(a.responseText)}catch{Mn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&Mn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(){this.rootNode_=je.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(){return{value:null,children:new Map}}function oI(t,e,n){if(be(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Re(e);t.children.has(r)||t.children.set(r,vu());const i=t.children.get(r);e=rt(e),oI(i,e,n)}}function hp(t,e,n){t.value!==null?n(e,t.value):hV(t,(r,i)=>{const s=new ot(e.toString()+"/"+r);hp(i,s,n)})}function hV(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=10*1e3,fV=30*1e3,pV=5*60*1e3;class mV{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new dV(e);const r=cw+(fV-cw)*Math.random();Na(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;qn(e,(i,s)=>{s>0&&ii(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Na(this.reportStats_.bind(this),Math.floor(Math.random()*2*pV))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wr;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wr||(wr={}));function aI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function lI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=wr.ACK_USER_WRITE,this.source=aI()}operationForChild(e){if(be(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ot(e));return new wu(Qe(),n,this.revert)}}else return K(Re(this.path)===e,"operationForChild called for unrelated child."),new wu(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=wr.OVERWRITE}operationForChild(e){return be(this.path)?new ys(this.source,Qe(),this.snap.getImmediateChild(e)):new ys(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=wr.MERGE}operationForChild(e){if(be(this.path)){const n=this.children.subtree(new ot(e));return n.isEmpty()?null:n.value?new ys(this.source,Qe(),n.value):new rc(this.source,Qe(),n)}else return K(Re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new rc(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(be(e))return this.isFullyInitialized()&&!this.filtered_;const n=Re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function gV(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(lV(o.childName,o.snapshotNode))}),la(t,i,"child_removed",e,r,n),la(t,i,"child_added",e,r,n),la(t,i,"child_moved",s,r,n),la(t,i,"child_changed",e,r,n),la(t,i,"value",e,r,n),i}function la(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,c)=>yV(t,a,c)),o.forEach(a=>{const c=_V(t,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function _V(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yV(t,e,n){if(e.childName==null||n.childName==null)throw Vo("Should only compare child_ events.");const r=new Se(e.childName,e.snapshotNode),i=new Se(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e){return{eventCache:t,serverCache:e}}function xa(t,e,n,r){return uI(new ag(e,n,r),t.serverCache)}function hI(t,e,n,r){return uI(t.eventCache,new ag(e,n,r))}function dp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function vs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yd;const vV=()=>(Yd||(Yd=new vr(i$)),Yd);class tt{constructor(e,n=vV()){this.value=e,this.children=n}static fromObject(e){let n=new tt(null);return qn(e,(r,i)=>{n=n.set(new ot(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Qe(),value:this.value};if(be(e))return null;{const r=Re(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(rt(e),n);return s!=null?{path:$t(new ot(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(be(e))return this;{const n=Re(e),r=this.children.get(n);return r!==null?r.subtree(rt(e)):new tt(null)}}set(e,n){if(be(e))return new tt(n,this.children);{const r=Re(e),s=(this.children.get(r)||new tt(null)).set(rt(e),n),o=this.children.insert(r,s);return new tt(this.value,o)}}remove(e){if(be(e))return this.children.isEmpty()?new tt(null):new tt(null,this.children);{const n=Re(e),r=this.children.get(n);if(r){const i=r.remove(rt(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new tt(null):new tt(this.value,s)}else return this}}get(e){if(be(e))return this.value;{const n=Re(e),r=this.children.get(n);return r?r.get(rt(e)):null}}setTree(e,n){if(be(e))return n;{const r=Re(e),s=(this.children.get(r)||new tt(null)).setTree(rt(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new tt(this.value,o)}}fold(e){return this.fold_(Qe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_($t(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Qe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(be(e))return null;{const s=Re(e),o=this.children.get(s);return o?o.findOnPath_(rt(e),$t(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Qe(),n)}foreachOnPath_(e,n,r){if(be(e))return this;{this.value&&r(n,this.value);const i=Re(e),s=this.children.get(i);return s?s.foreachOnPath_(rt(e),$t(n,i),r):new tt(null)}}foreach(e){this.foreach_(Qe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_($t(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.writeTree_=e}static empty(){return new or(new tt(null))}}function Oa(t,e,n){if(be(e))return new or(new tt(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=zn(i,e);return s=s.updateChild(o,n),new or(t.writeTree_.set(i,s))}else{const i=new tt(n),s=t.writeTree_.setTree(e,i);return new or(s)}}}function lw(t,e,n){let r=t;return qn(n,(i,s)=>{r=Oa(r,$t(e,i),s)}),r}function uw(t,e){if(be(e))return or.empty();{const n=t.writeTree_.setTree(e,new tt(null));return new or(n)}}function fp(t,e){return Os(t,e)!=null}function Os(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(zn(n.path,e)):null}function hw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(rn,(r,i)=>{e.push(new Se(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Se(r,i.value))}),e}function Ci(t,e){if(be(e))return t;{const n=Os(t,e);return n!=null?new or(new tt(n)):new or(t.writeTree_.subtree(e))}}function pp(t){return t.writeTree_.isEmpty()}function wo(t,e){return dI(Qe(),t.writeTree_,e)}function dI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(K(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=dI($t(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild($t(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t,e){return yI(e,t)}function wV(t,e,n,r,i){K(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Oa(t.visibleWrites,e,n)),t.lastWriteId=r}function EV(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function bV(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&TV(a,r.path)?i=!1:nr(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return IV(t),!0;if(r.snap)t.visibleWrites=uw(t.visibleWrites,r.path);else{const a=r.children;qn(a,c=>{t.visibleWrites=uw(t.visibleWrites,$t(r.path,c))})}return!0}else return!1}function TV(t,e){if(t.snap)return nr(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nr($t(t.path,n),e))return!0;return!1}function IV(t){t.visibleWrites=pI(t.allWrites,AV,Qe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function AV(t){return t.visible}function pI(t,e,n){let r=or.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)nr(n,o)?(a=zn(n,o),r=Oa(r,a,s.snap)):nr(o,n)&&(a=zn(o,n),r=Oa(r,Qe(),s.snap.getChild(a)));else if(s.children){if(nr(n,o))a=zn(n,o),r=lw(r,a,s.children);else if(nr(o,n))if(a=zn(o,n),be(a))r=lw(r,Qe(),s.children);else{const c=_o(s.children,Re(a));if(c){const l=c.getChild(rt(a));r=Oa(r,Qe(),l)}}}else throw Vo("WriteRecord should have .snap or .children")}}return r}function mI(t,e,n,r,i){if(!r&&!i){const s=Os(t.visibleWrites,e);if(s!=null)return s;{const o=Ci(t.visibleWrites,e);if(pp(o))return n;if(n==null&&!fp(o,Qe()))return null;{const a=n||je.EMPTY_NODE;return wo(o,a)}}}else{const s=Ci(t.visibleWrites,e);if(!i&&pp(s))return n;if(!i&&n==null&&!fp(s,Qe()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(nr(l.path,e)||nr(e,l.path))},a=pI(t.allWrites,o,e),c=n||je.EMPTY_NODE;return wo(a,c)}}}function CV(t,e,n){let r=je.EMPTY_NODE;const i=Os(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(rn,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ci(t.visibleWrites,e);return n.forEachChild(rn,(o,a)=>{const c=wo(Ci(s,new ot(o)),a);r=r.updateImmediateChild(o,c)}),hw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ci(t.visibleWrites,e);return hw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function RV(t,e,n,r,i){K(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=$t(e,n);if(fp(t.visibleWrites,s))return null;{const o=Ci(t.visibleWrites,s);return pp(o)?i.getChild(n):wo(o,i.getChild(n))}}function SV(t,e,n,r){const i=$t(e,n),s=Os(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ci(t.visibleWrites,i);return wo(o,r.getNode().getImmediateChild(n))}else return null}function PV(t,e){return Os(t.visibleWrites,e)}function kV(t,e,n,r,i,s,o){let a;const c=Ci(t.visibleWrites,e),l=Os(c,Qe());if(l!=null)a=l;else if(n!=null)a=wo(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=p.getNext();for(;m&&u.length<i;)h(m,r)!==0&&u.push(m),m=p.getNext();return u}else return[]}function NV(){return{visibleWrites:or.empty(),allWrites:[],lastWriteId:-1}}function mp(t,e,n,r){return mI(t.writeTree,t.treePath,e,n,r)}function gI(t,e){return CV(t.writeTree,t.treePath,e)}function dw(t,e,n,r){return RV(t.writeTree,t.treePath,e,n,r)}function Eu(t,e){return PV(t.writeTree,$t(t.treePath,e))}function xV(t,e,n,r,i,s){return kV(t.writeTree,t.treePath,e,n,r,i,s)}function cg(t,e,n){return SV(t.writeTree,t.treePath,e,n)}function _I(t,e){return yI($t(t.treePath,e),t.writeTree)}function yI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,sw(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,cV(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,aV(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,sw(r,e.snapshotNode,i.oldSnap));else throw Vo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const vI=new DV;class lg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ag(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vs(this.viewCache_),s=xV(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function MV(t,e){K(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function LV(t,e,n,r,i){const s=new OV;let o,a;if(n.type===wr.OVERWRITE){const l=n;l.source.fromUser?o=gp(t,e,l.path,l.snap,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!be(l.path),o=bu(t,e,l.path,l.snap,r,i,a,s))}else if(n.type===wr.MERGE){const l=n;l.source.fromUser?o=VV(t,e,l.path,l.children,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=_p(t,e,l.path,l.children,r,i,a,s))}else if(n.type===wr.ACK_USER_WRITE){const l=n;l.revert?o=BV(t,e,l.path,r,i,s):o=FV(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===wr.LISTEN_COMPLETE)o=UV(t,e,n.path,r,s);else throw Vo("Unknown operation type: "+n.type);const c=s.getChanges();return $V(e,o,c),{viewCache:o,changes:c}}function $V(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=dp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(oV(dp(e)))}}function wI(t,e,n,r,i,s){const o=e.eventCache;if(Eu(r,n)!=null)return e;{let a,c;if(be(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=vs(e),u=l instanceof je?l:je.EMPTY_NODE,h=gI(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const l=mp(r,vs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=Re(n);if(l===".priority"){K(Ni(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=dw(r,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=rt(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const p=dw(r,n,o.getNode(),c);p!=null?h=o.getNode().getImmediateChild(l).updateChild(u,p):h=o.getNode().getImmediateChild(l)}else h=cg(r,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,s):a=o.getNode()}}return xa(e,a,o.isFullyInitialized()||be(n),t.filter.filtersNodes())}}function bu(t,e,n,r,i,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(be(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),m,null)}else{const m=Re(n);if(!c.isCompleteForPath(n)&&Ni(n)>1)return e;const y=rt(n),I=c.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?l=u.updatePriority(c.getNode(),I):l=u.updateChild(c.getNode(),m,I,y,vI,null)}const h=hI(e,l,c.isFullyInitialized()||be(n),u.filtersNodes()),p=new lg(i,h,s);return wI(t,h,n,i,p,a)}function gp(t,e,n,r,i,s,o){const a=e.eventCache;let c,l;const u=new lg(i,e,s);if(be(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=xa(e,l,!0,t.filter.filtersNodes());else{const h=Re(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),c=xa(e,l,a.isFullyInitialized(),a.isFiltered());else{const p=rt(n),m=a.getNode().getImmediateChild(h);let y;if(be(p))y=r;else{const v=u.getCompleteChild(h);v!=null?YT(p)===".priority"&&v.getChild(XT(p)).isEmpty()?y=v:y=v.updateChild(p,r):y=je.EMPTY_NODE}if(m.equals(y))c=e;else{const v=t.filter.updateChild(a.getNode(),h,y,p,u,o);c=xa(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function fw(t,e){return t.eventCache.isCompleteForChild(e)}function VV(t,e,n,r,i,s,o){let a=e;return r.foreach((c,l)=>{const u=$t(n,c);fw(e,Re(u))&&(a=gp(t,a,u,l,i,s,o))}),r.foreach((c,l)=>{const u=$t(n,c);fw(e,Re(u))||(a=gp(t,a,u,l,i,s,o))}),a}function pw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function _p(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;be(n)?l=r:l=new tt(null).setTree(n,r);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,p)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),y=pw(t,m,p);c=bu(t,c,new ot(h),y,i,s,o,a)}}),l.children.inorderTraversal((h,p)=>{const m=!e.serverCache.isCompleteForChild(h)&&p.value===null;if(!u.hasChild(h)&&!m){const y=e.serverCache.getNode().getImmediateChild(h),v=pw(t,y,p);c=bu(t,c,new ot(h),v,i,s,o,a)}}),c}function FV(t,e,n,r,i,s,o){if(Eu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(be(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return bu(t,e,n,c.getNode().getChild(n),i,s,a,o);if(be(n)){let l=new tt(null);return c.getNode().forEachChild(so,(u,h)=>{l=l.set(new ot(u),h)}),_p(t,e,n,l,i,s,a,o)}else return e}else{let l=new tt(null);return r.foreach((u,h)=>{const p=$t(n,u);c.isCompleteForPath(p)&&(l=l.set(u,c.getNode().getChild(p)))}),_p(t,e,n,l,i,s,a,o)}}function UV(t,e,n,r,i){const s=e.serverCache,o=hI(e,s.getNode(),s.isFullyInitialized()||be(n),s.isFiltered());return wI(t,o,n,r,vI,i)}function BV(t,e,n,r,i,s){let o;if(Eu(r,n)!=null)return e;{const a=new lg(r,e,i),c=e.eventCache.getNode();let l;if(be(n)||Re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=mp(r,vs(e));else{const h=e.serverCache.getNode();K(h instanceof je,"serverChildren would be complete if leaf node"),u=gI(r,h)}u=u,l=t.filter.updateFullNode(c,u,s)}else{const u=Re(n);let h=cg(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,rt(n),a,s):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,je.EMPTY_NODE,rt(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=mp(r,vs(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||Eu(r,Qe())!=null,xa(e,l,o,t.filter.filtersNodes())}}function jV(t,e){const n=vs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!be(e)&&!n.getImmediateChild(Re(e)).isEmpty())?n.getChild(e):null}function mw(t,e,n,r){e.type===wr.MERGE&&e.source.queryId!==null&&(K(vs(t.viewCache_),"We should always have a full cache before handling merges"),K(dp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=LV(t.processor_,i,e,n,r);return MV(t.processor_,s.viewCache),K(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,HV(t,s.changes,s.viewCache.eventCache.getNode(),null)}function HV(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return gV(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gw;function zV(t){K(!gw,"__referenceConstructor has already been defined"),gw=t}function ug(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return K(s!=null,"SyncTree gave us an op for an invalid query."),mw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(mw(o,e,n,r));return s}}function hg(t,e){let n=null;for(const r of t.views.values())n=n||jV(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _w;function WV(t){K(!_w,"__referenceConstructor has already been defined"),_w=t}class yw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new tt(null),this.pendingWriteTree_=NV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qV(t,e,n,r,i){return wV(t.pendingWriteTree_,e,n,r,i),i?Ah(t,new ys(aI(),e,n)):[]}function Qs(t,e,n=!1){const r=EV(t.pendingWriteTree_,e);if(bV(t.pendingWriteTree_,e)){let s=new tt(null);return r.snap!=null?s=s.set(Qe(),!0):qn(r.children,o=>{s=s.set(new ot(o),!0)}),Ah(t,new wu(r.path,s,n))}else return[]}function Ih(t,e,n){return Ah(t,new ys(cI(),e,n))}function KV(t,e,n){const r=tt.fromObject(n);return Ah(t,new rc(cI(),e,r))}function GV(t,e,n,r){const i=II(t,r);if(i!=null){const s=AI(i),o=s.path,a=s.queryId,c=zn(o,e),l=new ys(lI(a),c,n);return CI(t,o,l)}else return[]}function QV(t,e,n,r){const i=II(t,r);if(i){const s=AI(i),o=s.path,a=s.queryId,c=zn(o,e),l=tt.fromObject(n),u=new rc(lI(a),c,l);return CI(t,o,u)}else return[]}function EI(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=zn(o,e),l=hg(a,c);if(l)return l});return mI(i,e,s,n,!0)}function Ah(t,e){return bI(e,t.syncPointTree_,null,fI(t.pendingWriteTree_,Qe()))}function bI(t,e,n,r){if(be(t.path))return TI(t,e,n,r);{const i=e.get(Qe());n==null&&i!=null&&(n=hg(i,Qe()));let s=[];const o=Re(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=_I(r,o);s=s.concat(bI(a,c,l,u))}return i&&(s=s.concat(ug(i,t,r,n))),s}}function TI(t,e,n,r){const i=e.get(Qe());n==null&&i!=null&&(n=hg(i,Qe()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=_I(r,o),u=t.operationForChild(o);u&&(s=s.concat(TI(u,a,c,l)))}),i&&(s=s.concat(ug(i,t,r,n))),s}function II(t,e){return t.tagToQueryMap.get(e)}function AI(t){const e=t.indexOf("$");return K(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ot(t.substr(0,e))}}function CI(t,e,n){const r=t.syncPointTree_.get(e);K(r,"Missing sync point for query tag that we're tracking");const i=fI(t.pendingWriteTree_,e);return ug(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dg(n)}node(){return this.node_}}class fg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$t(this.path_,e);return new fg(this.syncTree_,n)}node(){return EI(this.syncTree_,this.path_)}}const YV=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},vw=function(t,e,n){if(!t||typeof t!="object")return t;if(K(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return JV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return XV(t[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},JV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+t)}},XV=function(t,e,n){t.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&K(!1,"Unexpected increment value: "+r);const i=e.node();if(K(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},ZV=function(t,e,n,r){return pg(e,new fg(n,t),r)},eF=function(t,e,n){return pg(t,new dg(e),n)};function pg(t,e,n){const r=t.getPriority().val(),i=vw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=vw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new xt(a,en(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new xt(i))),o.forEachChild(rn,(a,c)=>{const l=pg(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function gg(t,e){let n=e instanceof ot?e:new ot(e),r=t,i=Re(n);for(;i!==null;){const s=_o(r.node.children,i)||{children:{},childCount:0};r=new mg(i,r,s),n=rt(n),i=Re(n)}return r}function Ho(t){return t.node.value}function RI(t,e){t.node.value=e,yp(t)}function SI(t){return t.node.childCount>0}function tF(t){return Ho(t)===void 0&&!SI(t)}function Ch(t,e){qn(t.node.children,(n,r)=>{e(new mg(n,t,r))})}function PI(t,e,n,r){n&&!r&&e(t),Ch(t,i=>{PI(i,e,!0,r)}),n&&r&&e(t)}function nF(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Dc(t){return new ot(t.parent===null?t.name:Dc(t.parent)+"/"+t.name)}function yp(t){t.parent!==null&&rF(t.parent,t.name,t)}function rF(t,e,n){const r=tF(n),i=ii(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,yp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,yp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iF=/[\[\].#$\/\u0000-\u001F\u007F]/,sF=/[\[\].#$\u0000-\u001F\u007F]/,Jd=10*1024*1024,kI=function(t){return typeof t=="string"&&t.length!==0&&!iF.test(t)},oF=function(t){return typeof t=="string"&&t.length!==0&&!sF.test(t)},aF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),oF(t)},NI=function(t,e,n){const r=n instanceof ot?new U$(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ji(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ji(r)+" with contents = "+e.toString());if(kT(e))throw new Error(t+"contains "+e.toString()+" "+Ji(r));if(typeof e=="string"&&e.length>Jd/3&&gh(e)>Jd)throw new Error(t+"contains a string greater than "+Jd+" utf8 bytes "+Ji(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(qn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!kI(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ji(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);B$(r,o),NI(t,a,r),j$(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ji(r)+" in addition to actual children.")}},cF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!kI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!aF(n))throw new Error(GO(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uF(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ZT(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ds(t,e,n){uF(t,n),hF(t,r=>nr(r,e)||nr(e,r))}function hF(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(dF(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function dF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();hs&&Zt("event: "+n.toString()),xc(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fF="repo_interrupt",pF=25;class mF{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vu(),this.transactionQueueTree_=new mg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gF(t,e,n){if(t.stats_=ng(t.repoInfo_),t.forceRestClient_||u$())t.server_=new yu(t.repoInfo_,(r,i,s,o)=>{ww(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ew(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Wt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yr(t.repoInfo_,e,(r,i,s,o)=>{ww(t,r,i,s,o)},r=>{Ew(t,r)},r=>{yF(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=g$(t.repoInfo_,()=>new mV(t.stats_,t.server_)),t.infoData_=new uV,t.infoSyncTree_=new yw({startListening:(r,i,s,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Ih(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_g(t,"connected",!1),t.serverSyncTree_=new yw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);Ds(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function _F(t){const n=t.infoData_.getNode(new ot(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xI(t){return YV({timestamp:_F(t)})}function ww(t,e,n,r,i){t.dataUpdateCount++;const s=new ot(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const c=ou(n,l=>en(l));o=QV(t.serverSyncTree_,s,c,i)}else{const c=en(n);o=GV(t.serverSyncTree_,s,c,i)}else if(r){const c=ou(n,l=>en(l));o=KV(t.serverSyncTree_,s,c)}else{const c=en(n);o=Ih(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=vg(t,s)),Ds(t.eventQueue_,a,o)}function Ew(t,e){_g(t,"connected",e),e===!1&&wF(t)}function yF(t,e){qn(e,(n,r)=>{_g(t,n,r)})}function _g(t,e,n){const r=new ot("/.info/"+e),i=en(n);t.infoData_.updateSnapshot(r,i);const s=Ih(t.infoSyncTree_,r,i);Ds(t.eventQueue_,r,s)}function vF(t){return t.nextWriteId_++}function wF(t){OI(t,"onDisconnectEvents");const e=xI(t),n=vu();hp(t.onDisconnect_,Qe(),(i,s)=>{const o=ZV(i,s,t.serverSyncTree_,e);oI(n,i,o)});let r=[];hp(n,Qe(),(i,s)=>{r=r.concat(Ih(t.serverSyncTree_,i,s));const o=IF(t,i);vg(t,o)}),t.onDisconnect_=vu(),Ds(t.eventQueue_,Qe(),r)}function EF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fF)}function OI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Zt(n,...e)}function DI(t,e,n){return EI(t.serverSyncTree_,e,n)||je.EMPTY_NODE}function yg(t,e=t.transactionQueueTree_){if(e||Rh(t,e),Ho(e)){const n=LI(t,e);K(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&bF(t,Dc(e),n)}else SI(e)&&Ch(e,n=>{yg(t,n)})}function bF(t,e,n){const r=n.map(l=>l.currentWriteId),i=DI(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];K(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=zn(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{OI(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let p=0;p<n.length;p++)n[p].status=2,u=u.concat(Qs(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&h.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Rh(t,gg(t.transactionQueueTree_,e)),yg(t,t.transactionQueueTree_),Ds(t.eventQueue_,e,u);for(let p=0;p<h.length;p++)xc(h[p])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Mn("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}vg(t,e)}},o)}function vg(t,e){const n=MI(t,e),r=Dc(n),i=LI(t,n);return TF(t,i,r),r}function TF(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=zn(n,c.path);let u=!1,h;if(K(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Qs(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=pF)u=!0,h="maxretry",i=i.concat(Qs(t.serverSyncTree_,c.currentWriteId,!0));else{const p=DI(t,c.path,o);c.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){NI("transaction failed: Data returned ",m,c.path);let y=en(m);typeof m=="object"&&m!=null&&ii(m,".priority")||(y=y.updatePriority(p.getPriority()));const I=c.currentWriteId,A=xI(t),k=eF(y,p,A);c.currentOutputSnapshotRaw=y,c.currentOutputSnapshotResolved=k,c.currentWriteId=vF(t),o.splice(o.indexOf(I),1),i=i.concat(qV(t.serverSyncTree_,c.path,k,c.currentWriteId,c.applyLocally)),i=i.concat(Qs(t.serverSyncTree_,I,!0))}else u=!0,h="nodata",i=i.concat(Qs(t.serverSyncTree_,c.currentWriteId,!0))}Ds(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Rh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)xc(r[a]);yg(t,t.transactionQueueTree_)}function MI(t,e){let n,r=t.transactionQueueTree_;for(n=Re(e);n!==null&&Ho(r)===void 0;)r=gg(r,n),e=rt(e),n=Re(e);return r}function LI(t,e){const n=[];return $I(t,e,n),n.sort((r,i)=>r.order-i.order),n}function $I(t,e,n){const r=Ho(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ch(e,i=>{$I(t,i,n)})}function Rh(t,e){const n=Ho(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,RI(e,n.length>0?n:void 0)}Ch(e,r=>{Rh(t,r)})}function IF(t,e){const n=Dc(MI(t,e)),r=gg(t.transactionQueueTree_,e);return nF(r,i=>{Xd(t,i)}),Xd(t,r),PI(r,i=>{Xd(t,i)}),n}function Xd(t,e){const n=Ho(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(K(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(K(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?RI(e,void 0):n.length=s+1,Ds(t.eventQueue_,Dc(e),i);for(let o=0;o<r.length;o++)xc(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AF(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function CF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Mn(`Invalid query segment '${n}' in query '${t}'`)}return e}const bw=function(t,e){const n=RF(t),r=n.namespace;n.domain==="firebase.com"&&gs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&gs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||n$();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new f$(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ot(n.pathString)}},RF=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=AF(t.substring(u,h)));const p=CF(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const m=e.slice(0,l);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return be(this._path)?null:YT(this._path)}get ref(){return new zo(this._repo,this._path)}get _queryIdentifier(){const e=aw(this._queryParams),n=eg(e);return n==="{}"?"default":n}get _queryObject(){return aw(this._queryParams)}isEqual(e){if(e=dt(e),!(e instanceof wg))return!1;const n=this._repo===e._repo,r=ZT(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+F$(this._path)}}class zo extends wg{constructor(e,n){super(e,n,new og,!1)}get parent(){const e=XT(this._path);return e===null?null:new zo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}zV(zo);WV(zo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SF="FIREBASE_DATABASE_EMULATOR_HOST",vp={};let PF=!1;function kF(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||gs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Zt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=bw(s,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[SF]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=bw(s,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new cp(cp.OWNER):new d$(t.name,t.options,e);cF("Invalid Firebase Database URL",o),be(o.path)||gs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=xF(a,t,u,new h$(t.name,n));return new OF(h,t)}function NF(t,e){const n=vp[e];(!n||n[t.key]!==t)&&gs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),EF(t),delete n[t.key]}function xF(t,e,n,r){let i=vp[e.name];i||(i={},vp[e.name]=i);let s=i[t.toURLString()];return s&&gs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new mF(t,PF,n,r),i[t.toURLString()]=s,s}class OF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zo(this._repo,Qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(NF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gs("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DF(t){J2(Vi),Rn(new yn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return kF(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Kt(Hv,zv,t),Kt(Hv,zv,"esm2017")}Yr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};DF();var MF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,Eg=Eg||{},me=MF||self;function Sh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Mc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LF(t){return Object.prototype.hasOwnProperty.call(t,Zd)&&t[Zd]||(t[Zd]=++$F)}var Zd="closure_uid_"+(1e9*Math.random()>>>0),$F=0;function VF(t,e,n){return t.call.apply(t.bind,arguments)}function FF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function sn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?sn=VF:sn=FF,sn.apply(null,arguments)}function El(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Bt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ui(){this.s=this.s,this.o=this.o}var UF=0;Ui.prototype.s=!1;Ui.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),UF!=0)&&LF(this)};Ui.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const VI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function bg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Tw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Sh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function on(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}on.prototype.h=function(){this.defaultPrevented=!0};var BF=function(){if(!me.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{me.addEventListener("test",()=>{},e),me.removeEventListener("test",()=>{},e)}catch{}return t}();function ic(t){return/^[\s\xa0]*$/.test(t)}function Ph(){var t=me.navigator;return t&&(t=t.userAgent)?t:""}function _r(t){return Ph().indexOf(t)!=-1}function Tg(t){return Tg[" "](t),t}Tg[" "]=function(){};function jF(t,e){var n=DU;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var HF=_r("Opera"),Eo=_r("Trident")||_r("MSIE"),FI=_r("Edge"),wp=FI||Eo,UI=_r("Gecko")&&!(Ph().toLowerCase().indexOf("webkit")!=-1&&!_r("Edge"))&&!(_r("Trident")||_r("MSIE"))&&!_r("Edge"),zF=Ph().toLowerCase().indexOf("webkit")!=-1&&!_r("Edge");function BI(){var t=me.document;return t?t.documentMode:void 0}var Ep;e:{var ef="",tf=function(){var t=Ph();if(UI)return/rv:([^\);]+)(\)|;)/.exec(t);if(FI)return/Edge\/([\d\.]+)/.exec(t);if(Eo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zF)return/WebKit\/(\S+)/.exec(t);if(HF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(tf&&(ef=tf?tf[1]:""),Eo){var nf=BI();if(nf!=null&&nf>parseFloat(ef)){Ep=String(nf);break e}}Ep=ef}var bp;if(me.document&&Eo){var Iw=BI();bp=Iw||parseInt(Ep,10)||void 0}else bp=void 0;var WF=bp;function sc(t,e){if(on.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(UI){e:{try{Tg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:qF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&sc.$.h.call(this)}}Bt(sc,on);var qF={2:"touch",3:"pen",4:"mouse"};sc.prototype.h=function(){sc.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Lc="closure_listenable_"+(1e6*Math.random()|0),KF=0;function GF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++KF,this.fa=this.ia=!1}function kh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ig(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function QF(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function jI(t){const e={};for(const n in t)e[n]=t[n];return e}const Aw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function HI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Aw.length;s++)n=Aw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Nh(t){this.src=t,this.g={},this.h=0}Nh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ip(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new GF(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Tp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=VI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(kh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ip(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ag="closure_lm_"+(1e6*Math.random()|0),rf={};function zI(t,e,n,r,i){if(r&&r.once)return qI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)zI(t,e[s],n,r,i);return null}return n=Sg(n),t&&t[Lc]?t.O(e,n,Mc(r)?!!r.capture:!!r,i):WI(t,e,n,!1,r,i)}function WI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Mc(i)?!!i.capture:!!i,a=Rg(t);if(a||(t[Ag]=a=new Nh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=YF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)BF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(GI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function YF(){function t(n){return e.call(t.src,t.listener,n)}const e=JF;return t}function qI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)qI(t,e[s],n,r,i);return null}return n=Sg(n),t&&t[Lc]?t.P(e,n,Mc(r)?!!r.capture:!!r,i):WI(t,e,n,!0,r,i)}function KI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)KI(t,e[s],n,r,i);else r=Mc(r)?!!r.capture:!!r,n=Sg(n),t&&t[Lc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ip(s,n,r,i),-1<n&&(kh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Rg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ip(e,n,r,i)),(n=-1<t?e[t]:null)&&Cg(n))}function Cg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Lc])Tp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(GI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Rg(e))?(Tp(n,t),n.h==0&&(n.src=null,e[Ag]=null)):kh(t)}}}function GI(t){return t in rf?rf[t]:rf[t]="on"+t}function JF(t,e){if(t.fa)t=!0;else{e=new sc(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Cg(t),t=n.call(r,e)}return t}function Rg(t){return t=t[Ag],t instanceof Nh?t:null}var sf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sg(t){return typeof t=="function"?t:(t[sf]||(t[sf]=function(e){return t.handleEvent(e)}),t[sf])}function Ut(){Ui.call(this),this.i=new Nh(this),this.S=this,this.J=null}Bt(Ut,Ui);Ut.prototype[Lc]=!0;Ut.prototype.removeEventListener=function(t,e,n,r){KI(this,t,e,n,r)};function Gt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new on(e,t);else if(e instanceof on)e.target=e.target||t;else{var i=e;e=new on(r,t),HI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=bl(o,r,!0,e)&&i}if(o=e.g=t,i=bl(o,r,!0,e)&&i,i=bl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=bl(o,r,!1,e)&&i}Ut.prototype.N=function(){if(Ut.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)kh(n[r]);delete t.g[e],t.h--}}this.J=null};Ut.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ut.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function bl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Tp(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Pg=me.JSON.stringify;class XF{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ZF(){var t=kg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class eU{constructor(){this.h=this.g=null}add(e,n){const r=QI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var QI=new XF(()=>new tU,t=>t.reset());class tU{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nU(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function rU(t){me.setTimeout(()=>{throw t},0)}let oc,ac=!1,kg=new eU,YI=()=>{const t=me.Promise.resolve(void 0);oc=()=>{t.then(iU)}};var iU=()=>{for(var t;t=ZF();){try{t.h.call(t.g)}catch(n){rU(n)}var e=QI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ac=!1};function xh(t,e){Ut.call(this),this.h=t||1,this.g=e||me,this.j=sn(this.qb,this),this.l=Date.now()}Bt(xh,Ut);G=xh.prototype;G.ga=!1;G.T=null;G.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Gt(this,"tick"),this.ga&&(Ng(this),this.start()))}};G.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ng(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}G.N=function(){xh.$.N.call(this),Ng(this),delete this.g};function xg(t,e,n){if(typeof t=="function")n&&(t=sn(t,n));else if(t&&typeof t.handleEvent=="function")t=sn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:me.setTimeout(t,e||0)}function JI(t){t.g=xg(()=>{t.g=null,t.i&&(t.i=!1,JI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class sU extends Ui{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:JI(this)}N(){super.N(),this.g&&(me.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cc(t){Ui.call(this),this.h=t,this.g={}}Bt(cc,Ui);var Cw=[];function XI(t,e,n,r){Array.isArray(n)||(n&&(Cw[0]=n.toString()),n=Cw);for(var i=0;i<n.length;i++){var s=zI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ZI(t){Ig(t.g,function(e,n){this.g.hasOwnProperty(n)&&Cg(e)},t),t.g={}}cc.prototype.N=function(){cc.$.N.call(this),ZI(this)};cc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Oh(){this.g=!0}Oh.prototype.Ea=function(){this.g=!1};function oU(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function aU(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ys(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+lU(t,n)+(r?" "+r:"")})}function cU(t,e){t.info(function(){return"TIMEOUT: "+e})}Oh.prototype.info=function(){};function lU(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Pg(n)}catch{return e}}var Ms={},Rw=null;function Dh(){return Rw=Rw||new Ut}Ms.Ta="serverreachability";function eA(t){on.call(this,Ms.Ta,t)}Bt(eA,on);function lc(t){const e=Dh();Gt(e,new eA(e))}Ms.STAT_EVENT="statevent";function tA(t,e){on.call(this,Ms.STAT_EVENT,t),this.stat=e}Bt(tA,on);function mn(t){const e=Dh();Gt(e,new tA(e,t))}Ms.Ua="timingevent";function nA(t,e){on.call(this,Ms.Ua,t),this.size=e}Bt(nA,on);function $c(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return me.setTimeout(function(){t()},e)}var Mh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Og(){}Og.prototype.h=null;function Sw(t){return t.h||(t.h=t.i())}function iA(){}var Vc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Dg(){on.call(this,"d")}Bt(Dg,on);function Mg(){on.call(this,"c")}Bt(Mg,on);var Ap;function Lh(){}Bt(Lh,Og);Lh.prototype.g=function(){return new XMLHttpRequest};Lh.prototype.i=function(){return{}};Ap=new Lh;function Fc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new cc(this),this.P=uU,t=wp?125:void 0,this.V=new xh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new sA}function sA(){this.i=null,this.g="",this.h=!1}var uU=45e3,Cp={},Tu={};G=Fc.prototype;G.setTimeout=function(t){this.P=t};function Rp(t,e,n){t.L=1,t.v=Vh(Zr(e)),t.s=n,t.S=!0,oA(t,null)}function oA(t,e){t.G=Date.now(),Uc(t),t.A=Zr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),pA(n.i,"t",r),t.C=0,n=t.l.J,t.h=new sA,t.g=MA(t.l,n?e:null,!t.s),0<t.O&&(t.M=new sU(sn(t.Pa,t,t.g),t.O)),XI(t.U,t.g,"readystatechange",t.nb),e=t.I?jI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),lc(),oU(t.j,t.u,t.A,t.m,t.W,t.s)}G.nb=function(t){t=t.target;const e=this.M;e&&Er(t)==3?e.l():this.Pa(t)};G.Pa=function(t){try{if(t==this.g)e:{const u=Er(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||wp||this.g&&(this.h.h||this.g.ja()||xw(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?lc(3):lc(2)),$h(this);var n=this.g.da();this.ca=n;t:if(aA(this)){var r=xw(this.g);t="";var i=r.length,s=Er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rs(this),Da(this);var o="";break t}this.h.i=new me.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,aU(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ic(a)){var l=a;break t}}l=null}if(n=l)Ys(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sp(this,n);else{this.i=!1,this.o=3,mn(12),rs(this),Da(this);break e}}this.S?(cA(this,u,o),wp&&this.i&&u==3&&(XI(this.U,this.V,"tick",this.mb),this.V.start())):(Ys(this.j,this.m,o,null),Sp(this,o)),u==4&&rs(this),this.i&&!this.J&&(u==4?NA(this.l,this):(this.i=!1,Uc(this)))}else NU(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mn(12)):(this.o=0,mn(13)),rs(this),Da(this)}}}catch{}finally{}};function aA(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function cA(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=hU(t,n),i==Tu){e==4&&(t.o=4,mn(14),r=!1),Ys(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Cp){t.o=4,mn(15),Ys(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ys(t.j,t.m,i,null),Sp(t,i);aA(t)&&i!=Tu&&i!=Cp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bg(e),e.M=!0,mn(11))):(Ys(t.j,t.m,n,"[Invalid Chunked Response]"),rs(t),Da(t))}G.mb=function(){if(this.g){var t=Er(this.g),e=this.g.ja();this.C<e.length&&($h(this),cA(this,t,e),this.i&&t!=4&&Uc(this))}};function hU(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Tu:(n=Number(e.substring(n,r)),isNaN(n)?Cp:(r+=1,r+n>e.length?Tu:(e=e.slice(r,r+n),t.C=r+n,e)))}G.cancel=function(){this.J=!0,rs(this)};function Uc(t){t.Y=Date.now()+t.P,lA(t,t.P)}function lA(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=$c(sn(t.lb,t),e)}function $h(t){t.B&&(me.clearTimeout(t.B),t.B=null)}G.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(cU(this.j,this.A),this.L!=2&&(lc(),mn(17)),rs(this),this.o=2,Da(this)):lA(this,this.Y-t)};function Da(t){t.l.H==0||t.J||NA(t.l,t)}function rs(t){$h(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ng(t.V),ZI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Sp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Pp(n.i,t))){if(!t.K&&Pp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Cu(n),jh(n);else break e;Ug(n),mn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=$c(sn(n.ib,n),6e3));if(1>=_A(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else is(n,11)}else if((t.K||n.g==t)&&Cu(n),!ic(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Lg(s,s.h),s.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,st(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=DA(r,r.J?r.pa:null,r.Y),o.K){yA(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&($h(a),Uc(a)),r.g=o}else PA(r);0<n.j.length&&Hh(n)}else l[0]!="stop"&&l[0]!="close"||is(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?is(n,7):Fg(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}lc(4)}catch{}}function dU(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Sh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function fU(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Sh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function uA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Sh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=fU(t),r=dU(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var hA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pU(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ds(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ds){this.h=t.h,Iu(this,t.j),this.s=t.s,this.g=t.g,Au(this,t.m),this.l=t.l;var e=t.i,n=new uc;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pw(this,n),this.o=t.o}else t&&(e=String(t).match(hA))?(this.h=!1,Iu(this,e[1]||"",!0),this.s=wa(e[2]||""),this.g=wa(e[3]||"",!0),Au(this,e[4]),this.l=wa(e[5]||"",!0),Pw(this,e[6]||"",!0),this.o=wa(e[7]||"")):(this.h=!1,this.i=new uc(null,this.h))}ds.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ea(e,kw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ea(e,kw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ea(n,n.charAt(0)=="/"?_U:gU,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ea(n,vU)),t.join("")};function Zr(t){return new ds(t)}function Iu(t,e,n){t.j=n?wa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Au(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pw(t,e,n){e instanceof uc?(t.i=e,wU(t.i,t.h)):(n||(e=Ea(e,yU)),t.i=new uc(e,t.h))}function st(t,e,n){t.i.set(e,n)}function Vh(t){return st(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function wa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ea(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,mU),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mU(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kw=/[#\/\?@]/g,gU=/[#\?:]/g,_U=/[#\?]/g,yU=/[#\?@]/g,vU=/#/g;function uc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Bi(t){t.g||(t.g=new Map,t.h=0,t.i&&pU(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=uc.prototype;G.add=function(t,e){Bi(this),this.i=null,t=Wo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dA(t,e){Bi(t),e=Wo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function fA(t,e){return Bi(t),e=Wo(t,e),t.g.has(e)}G.forEach=function(t,e){Bi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};G.ta=function(){Bi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};G.Z=function(t){Bi(this);let e=[];if(typeof t=="string")fA(this,t)&&(e=e.concat(this.g.get(Wo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return Bi(this),this.i=null,t=Wo(this,t),fA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function pA(t,e,n){dA(t,e),0<n.length&&(t.i=null,t.g.set(Wo(t,e),bg(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Wo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wU(t,e){e&&!t.j&&(Bi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(dA(this,r),pA(this,i,n))},t)),t.j=e}var EU=class{constructor(t,e){this.g=t,this.map=e}};function mA(t){this.l=t||bU,me.PerformanceNavigationTiming?(t=me.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(me.g&&me.g.Ka&&me.g.Ka()&&me.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bU=10;function gA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _A(t){return t.h?1:t.g?t.g.size:0}function Pp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Lg(t,e){t.g?t.g.add(e):t.h=e}function yA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mA.prototype.cancel=function(){if(this.i=vA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return bg(t.i)}var TU=class{stringify(t){return me.JSON.stringify(t,void 0)}parse(t){return me.JSON.parse(t,void 0)}};function IU(){this.g=new TU}function AU(t,e,n){const r=n||"";try{uA(t,function(i,s){let o=i;Mc(i)&&(o=Pg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function CU(t,e){const n=new Oh;if(me.Image){const r=new Image;r.onload=El(Tl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=El(Tl,n,r,"TestLoadImage: error",!1,e),r.onabort=El(Tl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=El(Tl,n,r,"TestLoadImage: timeout",!1,e),me.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Tl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Fh(t){this.l=t.fc||null,this.j=t.ob||!1}Bt(Fh,Og);Fh.prototype.g=function(){return new Uh(this.l,this.j)};Fh.prototype.i=function(t){return function(){return t}}({});function Uh(t,e){Ut.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=$g,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Bt(Uh,Ut);var $g=0;G=Uh.prototype;G.open=function(t,e){if(this.readyState!=$g)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hc(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||me).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bc(this)),this.readyState=$g};G.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hc(this)),this.g&&(this.readyState=3,hc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof me.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function wA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}G.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bc(this):hc(this),this.readyState==3&&wA(this)}};G.Za=function(t){this.g&&(this.response=this.responseText=t,Bc(this))};G.Ya=function(t){this.g&&(this.response=t,Bc(this))};G.ka=function(){this.g&&Bc(this)};function Bc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hc(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function hc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Uh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var RU=me.JSON.parse;function ft(t){Ut.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=EA,this.L=this.M=!1}Bt(ft,Ut);var EA="",SU=/^https?$/i,PU=["POST","PUT"];G=ft.prototype;G.Oa=function(t){this.M=t};G.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ap.g(),this.C=this.u?Sw(this.u):Sw(Ap),this.g.onreadystatechange=sn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Nw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=me.FormData&&t instanceof me.FormData,!(0<=VI(PU,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{IA(this),0<this.B&&((this.L=kU(this.g))?(this.g.timeout=this.B,this.g.ontimeout=sn(this.ua,this)):this.A=xg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Nw(this,s)}};function kU(t){return Eo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.ua=function(){typeof Eg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Gt(this,"timeout"),this.abort(8))};function Nw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bA(t),Bh(t)}function bA(t){t.F||(t.F=!0,Gt(t,"complete"),Gt(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Gt(this,"complete"),Gt(this,"abort"),Bh(this))};G.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bh(this,!0)),ft.$.N.call(this)};G.La=function(){this.s||(this.G||this.v||this.l?TA(this):this.kb())};G.kb=function(){TA(this)};function TA(t){if(t.h&&typeof Eg<"u"&&(!t.C[1]||Er(t)!=4||t.da()!=2)){if(t.v&&Er(t)==4)xg(t.La,0,t);else if(Gt(t,"readystatechange"),Er(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(hA)[1]||null;!i&&me.self&&me.self.location&&(i=me.self.location.protocol.slice(0,-1)),r=!SU.test(i?i.toLowerCase():"")}n=r}if(n)Gt(t,"complete"),Gt(t,"success");else{t.m=6;try{var s=2<Er(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",bA(t)}}finally{Bh(t)}}}}function Bh(t,e){if(t.g){IA(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Gt(t,"ready");try{n.onreadystatechange=r}catch{}}}function IA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(me.clearTimeout(t.A),t.A=null)}G.isActive=function(){return!!this.g};function Er(t){return t.g?t.g.readyState:0}G.da=function(){try{return 2<Er(this)?this.g.status:-1}catch{return-1}};G.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),RU(e)}};function xw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case EA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function NU(t){const e={};t=(t.g&&2<=Er(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ic(t[r]))continue;var n=nU(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}QF(e,function(r){return r.join(", ")})}G.Ia=function(){return this.m};G.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function AA(t){let e="";return Ig(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Vg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=AA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):st(t,e,n))}function ua(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function CA(t){this.Ga=0,this.j=[],this.l=new Oh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ua("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ua("baseRetryDelayMs",5e3,t),this.hb=ua("retryDelaySeedMs",1e4,t),this.eb=ua("forwardChannelMaxRetries",2,t),this.xa=ua("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new mA(t&&t.concurrentRequestLimit),this.Ja=new IU,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}G=CA.prototype;G.ra=8;G.H=1;function Fg(t){if(RA(t),t.H==3){var e=t.W++,n=Zr(t.I);if(st(n,"SID",t.K),st(n,"RID",e),st(n,"TYPE","terminate"),jc(t,n),e=new Fc(t,t.l,e),e.L=2,e.v=Vh(Zr(n)),n=!1,me.navigator&&me.navigator.sendBeacon)try{n=me.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&me.Image&&(new Image().src=e.v,n=!0),n||(e.g=MA(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Uc(e)}OA(t)}function jh(t){t.g&&(Bg(t),t.g.cancel(),t.g=null)}function RA(t){jh(t),t.u&&(me.clearTimeout(t.u),t.u=null),Cu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&me.clearTimeout(t.m),t.m=null)}function Hh(t){if(!gA(t.i)&&!t.m){t.m=!0;var e=t.Na;oc||YI(),ac||(oc(),ac=!0),kg.add(e,t),t.C=0}}function xU(t,e){return _A(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=$c(sn(t.Na,t,e),xA(t,t.C)),t.C++,!0)}G.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Fc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=jI(s),HI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=SA(this,i,e),n=Zr(this.I),st(n,"RID",t),st(n,"CVER",22),this.F&&st(n,"X-HTTP-Session-Id",this.F),jc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(AA(s)))+"&"+e:this.o&&Vg(n,this.o,s)),Lg(this.i,i),this.bb&&st(n,"TYPE","init"),this.P?(st(n,"$req",e),st(n,"SID","null"),i.aa=!0,Rp(i,n,null)):Rp(i,n,e),this.H=2}}else this.H==3&&(t?Ow(this,t):this.j.length==0||gA(this.i)||Ow(this))};function Ow(t,e){var n;e?n=e.m:n=t.W++;const r=Zr(t.I);st(r,"SID",t.K),st(r,"RID",n),st(r,"AID",t.V),jc(t,r),t.o&&t.s&&Vg(r,t.o,t.s),n=new Fc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=SA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Lg(t.i,n),Rp(n,r,e)}function jc(t,e){t.na&&Ig(t.na,function(n,r){st(e,r,n)}),t.h&&uA({},function(n,r){st(e,r,n)})}function SA(t,e,n){n=Math.min(t.j.length,n);var r=t.h?sn(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{AU(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function PA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;oc||YI(),ac||(oc(),ac=!0),kg.add(e,t),t.A=0}}function Ug(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=$c(sn(t.Ma,t),xA(t,t.A)),t.A++,!0)}G.Ma=function(){if(this.u=null,kA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=$c(sn(this.jb,this),t)}};G.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,mn(10),jh(this),kA(this))};function Bg(t){t.B!=null&&(me.clearTimeout(t.B),t.B=null)}function kA(t){t.g=new Fc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Zr(t.wa);st(e,"RID","rpc"),st(e,"SID",t.K),st(e,"AID",t.V),st(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&st(e,"TO",t.qa),st(e,"TYPE","xmlhttp"),jc(t,e),t.o&&t.s&&Vg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Vh(Zr(e)),n.s=null,n.S=!0,oA(n,t)}G.ib=function(){this.v!=null&&(this.v=null,jh(this),Ug(this),mn(19))};function Cu(t){t.v!=null&&(me.clearTimeout(t.v),t.v=null)}function NA(t,e){var n=null;if(t.g==e){Cu(t),Bg(t),t.g=null;var r=2}else if(Pp(t.i,e))n=e.F,yA(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Dh(),Gt(r,new nA(r,n)),Hh(t)}else PA(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&xU(t,e)||r==2&&Ug(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:is(t,5);break;case 4:is(t,10);break;case 3:is(t,6);break;default:is(t,2)}}}function xA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function is(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=sn(t.pb,t);n||(n=new ds("//www.google.com/images/cleardot.gif"),me.location&&me.location.protocol=="http"||Iu(n,"https"),Vh(n)),CU(n.toString(),r)}else mn(2);t.H=0,t.h&&t.h.za(e),OA(t),RA(t)}G.pb=function(t){t?(this.l.info("Successfully pinged google.com"),mn(2)):(this.l.info("Failed to ping google.com"),mn(1))};function OA(t){if(t.H=0,t.ma=[],t.h){const e=vA(t.i);(e.length!=0||t.j.length!=0)&&(Tw(t.ma,e),Tw(t.ma,t.j),t.i.i.length=0,bg(t.j),t.j.length=0),t.h.ya()}}function DA(t,e,n){var r=n instanceof ds?Zr(n):new ds(n);if(r.g!="")e&&(r.g=e+"."+r.g),Au(r,r.m);else{var i=me.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ds(null);r&&Iu(s,r),e&&(s.g=e),i&&Au(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&st(r,n,e),st(r,"VER",t.ra),jc(t,r),r}function MA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ft(new Fh({ob:!0})):new ft(t.va),e.Oa(t.J),e}G.isActive=function(){return!!this.h&&this.h.isActive(this)};function LA(){}G=LA.prototype;G.Ba=function(){};G.Aa=function(){};G.za=function(){};G.ya=function(){};G.isActive=function(){return!0};G.Va=function(){};function Ru(){if(Eo&&!(10<=Number(WF)))throw Error("Environmental error: no available transport.")}Ru.prototype.g=function(t,e){return new Vn(t,e)};function Vn(t,e){Ut.call(this),this.g=new CA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ic(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ic(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qo(this)}Bt(Vn,Ut);Vn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;mn(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=DA(t,null,t.Y),Hh(t)};Vn.prototype.close=function(){Fg(this.g)};Vn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pg(t),t=n);e.j.push(new EU(e.fb++,t)),e.H==3&&Hh(e)};Vn.prototype.N=function(){this.g.h=null,delete this.j,Fg(this.g),delete this.g,Vn.$.N.call(this)};function $A(t){Dg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Bt($A,Dg);function VA(){Mg.call(this),this.status=1}Bt(VA,Mg);function qo(t){this.g=t}Bt(qo,LA);qo.prototype.Ba=function(){Gt(this.g,"a")};qo.prototype.Aa=function(t){Gt(this.g,new $A(t))};qo.prototype.za=function(t){Gt(this.g,new VA)};qo.prototype.ya=function(){Gt(this.g,"b")};function OU(){this.blockSize=-1}function ur(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Bt(ur,OU);ur.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function of(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}ur.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)of(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){of(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){of(this,r),i=0;break}}this.h=i,this.i+=e};ur.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function qe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var DU={};function jg(t){return-128<=t&&128>t?jF(t,function(e){return new qe([e|0],0>e?-1:0)}):new qe([t|0],0>t?-1:0)}function br(t){if(isNaN(t)||!isFinite(t))return oo;if(0>t)return zt(br(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=kp;return new qe(e,0)}function FA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return zt(FA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=br(Math.pow(e,8)),r=oo,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=br(Math.pow(e,s)),r=r.R(s).add(br(o))):(r=r.R(n),r=r.add(br(o)))}return r}var kp=4294967296,oo=jg(0),Np=jg(1),Dw=jg(16777216);G=qe.prototype;G.ea=function(){if(Hn(this))return-zt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:kp+r)*e,e*=kp}return t};G.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Kr(this))return"0";if(Hn(this))return"-"+zt(this).toString(t);for(var e=br(Math.pow(t,6)),n=this,r="";;){var i=Pu(n,e).g;n=Su(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Kr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};G.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Kr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Hn(t){return t.h==-1}G.X=function(t){return t=Su(this,t),Hn(t)?-1:Kr(t)?0:1};function zt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new qe(n,~t.h).add(Np)}G.abs=function(){return Hn(this)?zt(this):this};G.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new qe(n,n[n.length-1]&-2147483648?-1:0)};function Su(t,e){return t.add(zt(e))}G.R=function(t){if(Kr(this)||Kr(t))return oo;if(Hn(this))return Hn(t)?zt(this).R(zt(t)):zt(zt(this).R(t));if(Hn(t))return zt(this.R(zt(t)));if(0>this.X(Dw)&&0>t.X(Dw))return br(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,Il(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Il(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Il(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Il(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new qe(n,0)};function Il(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ha(t,e){this.g=t,this.h=e}function Pu(t,e){if(Kr(e))throw Error("division by zero");if(Kr(t))return new ha(oo,oo);if(Hn(t))return e=Pu(zt(t),e),new ha(zt(e.g),zt(e.h));if(Hn(e))return e=Pu(t,zt(e)),new ha(zt(e.g),e.h);if(30<t.g.length){if(Hn(t)||Hn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Np,r=e;0>=r.X(t);)n=Mw(n),r=Mw(r);var i=js(n,1),s=js(r,1);for(r=js(r,2),n=js(n,2);!Kr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=js(r,1),n=js(n,1)}return e=Su(t,i.R(e)),new ha(i,e)}for(i=oo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=br(n),o=s.R(e);Hn(o)||0<o.X(t);)n-=r,s=br(n),o=s.R(e);Kr(s)&&(s=Np),i=i.add(s),t=Su(t,o)}return new ha(i,t)}G.gb=function(t){return Pu(this,t).h};G.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new qe(n,this.h&t.h)};G.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new qe(n,this.h|t.h)};G.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new qe(n,this.h^t.h)};function Mw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new qe(n,t.h)}function js(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new qe(i,t.h)}Ru.prototype.createWebChannel=Ru.prototype.g;Vn.prototype.send=Vn.prototype.u;Vn.prototype.open=Vn.prototype.m;Vn.prototype.close=Vn.prototype.close;Mh.NO_ERROR=0;Mh.TIMEOUT=8;Mh.HTTP_ERROR=6;rA.COMPLETE="complete";iA.EventType=Vc;Vc.OPEN="a";Vc.CLOSE="b";Vc.ERROR="c";Vc.MESSAGE="d";Ut.prototype.listen=Ut.prototype.O;ft.prototype.listenOnce=ft.prototype.P;ft.prototype.getLastError=ft.prototype.Sa;ft.prototype.getLastErrorCode=ft.prototype.Ia;ft.prototype.getStatus=ft.prototype.da;ft.prototype.getResponseJson=ft.prototype.Wa;ft.prototype.getResponseText=ft.prototype.ja;ft.prototype.send=ft.prototype.ha;ft.prototype.setWithCredentials=ft.prototype.Oa;ur.prototype.digest=ur.prototype.l;ur.prototype.reset=ur.prototype.reset;ur.prototype.update=ur.prototype.j;qe.prototype.add=qe.prototype.add;qe.prototype.multiply=qe.prototype.R;qe.prototype.modulo=qe.prototype.gb;qe.prototype.compare=qe.prototype.X;qe.prototype.toNumber=qe.prototype.ea;qe.prototype.toString=qe.prototype.toString;qe.prototype.getBits=qe.prototype.D;qe.fromNumber=br;qe.fromString=FA;var MU=function(){return new Ru},LU=function(){return Dh()},af=Mh,$U=rA,VU=Ms,Lw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Al=iA,FU=ft,UU=ur,ao=qe;const $w="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Uo("@firebase/firestore");function Vw(){return ws.logLevel}function ne(t,...e){if(ws.logLevel<=De.DEBUG){const n=e.map(Hg);ws.debug(`Firestore (${Ko}): ${t}`,...n)}}function ei(t,...e){if(ws.logLevel<=De.ERROR){const n=e.map(Hg);ws.error(`Firestore (${Ko}): ${t}`,...n)}}function bo(t,...e){if(ws.logLevel<=De.WARN){const n=e.map(Hg);ws.warn(`Firestore (${Ko}): ${t}`,...n)}}function Hg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${Ko}) INTERNAL ASSERTION FAILED: `+t;throw ei(e),new Error(e)}function We(t,e){t||le()}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xt.UNAUTHENTICATED))}shutdown(){}}class jU{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HU{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ar,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string"),new UA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new Xt(e)}}class zU{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class WU{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new zU(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qU{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KU{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(We(typeof n.token=="string"),this.R=n.token,new qU(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GU(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=GU(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ue(t,e){return t<e?-1:t>e?1:0}function To(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ee($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new wt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ue(this.nanoseconds,e.nanoseconds):Ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new wt(0,0))}static max(){return new he(new wt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return dc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof dc?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class lt extends dc{construct(e,n,r){return new lt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new lt(n)}static emptyPath(){return new lt([])}}const QU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends dc{construct(e,n,r){return new nn(e,n,r)}static isValidIdentifier(e){return QU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nn(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ee($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ee($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ee($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nn(n)}static emptyPath(){return new nn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(lt.fromString(e))}static fromName(e){return new ae(lt.fromString(e).popFirst(5))}static empty(){return new ae(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return lt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new lt(e.slice()))}}function YU(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new wt(n+1,0):new wt(n,r));return new xi(i,ae.empty(),e)}function JU(t){return new xi(t.readTime,t.key,-1)}class xi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xi(he.min(),ae.empty(),-1)}static max(){return new xi(he.max(),ae.empty(),-1)}}function XU(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZU="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class e4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==ZU)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function zc(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}zg.ae=-1;function Wc(t){return t==null}function ku(t){return t===0&&1/t==-1/0}function t4(t){return typeof t=="number"&&Number.isInteger(t)&&!ku(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){this.comparator=e,this.root=n||Ht.EMPTY}insert(e,n){return new ht(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cl(this.root,e,this.comparator,!0)}}class Cl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ht.RED,this.left=i??Ht.EMPTY,this.right=s??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uw(this.data.getIterator())}getIteratorFrom(e){return new Uw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof an)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new an(this.comparator);return n.data=e,n}}class Uw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.fields=e,e.sort(nn.comparator)}static empty(){return new On([])}unionWith(e){let n=new an(nn.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new On(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new HA("Invalid base64 string: "+s):s}}(e);return new ln(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ln(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ln.EMPTY_BYTE_STRING=new ln("");const n4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(t){if(We(!!t),typeof t=="string"){let e=0;const n=n4.exec(t);if(We(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:yt(t.seconds),nanos:yt(t.nanos)}}function yt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Es(t){return typeof t=="string"?ln.fromBase64String(t):ln.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qg(t){const e=t.mapValue.fields.__previous_value__;return Wg(e)?qg(e):e}function fc(t){const e=Oi(t.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e,n,r,i,s,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class pc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wg(t)?4:i4(t)?9007199254740991:10:le()}function Rr(t,e){if(t===e)return!0;const n=bs(t);if(n!==bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fc(t).isEqual(fc(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Oi(i.timestampValue),a=Oi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Es(i.bytesValue).isEqual(Es(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return yt(i.geoPointValue.latitude)===yt(s.geoPointValue.latitude)&&yt(i.geoPointValue.longitude)===yt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return yt(i.integerValue)===yt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=yt(i.doubleValue),a=yt(s.doubleValue);return o===a?ku(o)===ku(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return To(t.arrayValue.values||[],e.arrayValue.values||[],Rr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Fw(o)!==Fw(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Rr(o[c],a[c])))return!1;return!0}(t,e);default:return le()}}function mc(t,e){return(t.values||[]).find(n=>Rr(n,e))!==void 0}function Io(t,e){if(t===e)return 0;const n=bs(t),r=bs(e);if(n!==r)return Ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=yt(s.integerValue||s.doubleValue),c=yt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Bw(t.timestampValue,e.timestampValue);case 4:return Bw(fc(t),fc(e));case 5:return Ue(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Es(s),c=Es(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=Ue(a[l],c[l]);if(u!==0)return u}return Ue(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ue(yt(s.latitude),yt(o.latitude));return a!==0?a:Ue(yt(s.longitude),yt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Io(a[l],c[l]);if(u)return u}return Ue(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Rl.mapValue&&o===Rl.mapValue)return 0;if(s===Rl.mapValue)return 1;if(o===Rl.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const p=Ue(c[h],u[h]);if(p!==0)return p;const m=Io(a[c[h]],l[u[h]]);if(m!==0)return m}return Ue(c.length,u.length)}(t.mapValue,e.mapValue);default:throw le()}}function Bw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ue(t,e);const n=Oi(t),r=Oi(e),i=Ue(n.seconds,r.seconds);return i!==0?i:Ue(n.nanos,r.nanos)}function Ao(t){return xp(t)}function xp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Oi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=xp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${xp(n.fields[o])}`;return i+"}"}(t.mapValue):le()}function Op(t){return!!t&&"integerValue"in t}function Kg(t){return!!t&&"arrayValue"in t}function jw(t){return!!t&&"nullValue"in t}function Hw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bl(t){return!!t&&"mapValue"in t}function Ma(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ma(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ma(t.arrayValue.values[n]);return e}return Object.assign({},t)}function i4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.value=e}static empty(){return new pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ma(n)}setAll(e){let n=nn.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ma(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Bl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Bl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ls(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pn(Ma(this.value))}}function zA(t){const e=[];return Ls(t.fields,(n,r)=>{const i=new nn([n]);if(Bl(r)){const s=zA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new On(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Dt(e,0,he.min(),he.min(),he.min(),pn.empty(),0)}static newFoundDocument(e,n,r,i){return new Dt(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new Dt(e,2,n,he.min(),he.min(),pn.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,he.min(),he.min(),pn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n){this.position=e,this.inclusive=n}}function zw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=Io(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ww(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n="asc"){this.field=e,this.dir=n}}function s4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{}class It extends WA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new a4(e,n,r):n==="array-contains"?new u4(e,r):n==="in"?new h4(e,r):n==="not-in"?new d4(e,r):n==="array-contains-any"?new f4(e,r):new It(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new c4(e,r):new l4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Io(n,this.value)):n!==null&&bs(this.value)===bs(n)&&this.matchesComparison(Io(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Sr extends WA{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Sr(e,n)}matches(e){return qA(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function qA(t){return t.op==="and"}function KA(t){return o4(t)&&qA(t)}function o4(t){for(const e of t.filters)if(e instanceof Sr)return!1;return!0}function Dp(t){if(t instanceof It)return t.field.canonicalString()+t.op.toString()+Ao(t.value);if(KA(t))return t.filters.map(e=>Dp(e)).join(",");{const e=t.filters.map(n=>Dp(n)).join(",");return`${t.op}(${e})`}}function GA(t,e){return t instanceof It?function(r,i){return i instanceof It&&r.op===i.op&&r.field.isEqual(i.field)&&Rr(r.value,i.value)}(t,e):t instanceof Sr?function(r,i){return i instanceof Sr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&GA(o,i.filters[a]),!0):!1}(t,e):void le()}function QA(t){return t instanceof It?function(n){return`${n.field.canonicalString()} ${n.op} ${Ao(n.value)}`}(t):t instanceof Sr?function(n){return n.op.toString()+" {"+n.getFilters().map(QA).join(" ,")+"}"}(t):"Filter"}class a4 extends It{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class c4 extends It{constructor(e,n){super(e,"in",n),this.keys=YA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class l4 extends It{constructor(e,n){super(e,"not-in",n),this.keys=YA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function YA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class u4 extends It{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kg(n)&&mc(n.arrayValue,this.value)}}class h4 extends It{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mc(this.value.arrayValue,n)}}class d4 extends It{constructor(e,n){super(e,"not-in",n)}matches(e){if(mc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!mc(this.value.arrayValue,n)}}class f4 extends It{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>mc(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function qw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new p4(t,e,n,r,i,s,o)}function Gg(t){const e=ge(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Wc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ao(r)).join(",")),e.he=n}return e.he}function Qg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!s4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!GA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ww(t.startAt,e.startAt)&&Ww(t.endAt,e.endAt)}function Mp(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function m4(t,e,n,r,i,s,o,a){return new zh(t,e,n,r,i,s,o,a)}function Wh(t){return new zh(t)}function Kw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function g4(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function _4(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function y4(t){return t.collectionGroup!==null}function $a(t){const e=ge(t);if(e.Pe===null){e.Pe=[];const n=_4(e),r=g4(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new La(n)),e.Pe.push(new La(nn.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new La(nn.keyField(),s))}}}return e.Pe}function ti(t){const e=ge(t);return e.Ie||(e.Ie=v4(e,$a(t))),e.Ie}function v4(t,e){if(t.limitType==="F")return qw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new La(i.field,s)});const n=t.endAt?new Nu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nu(t.startAt.position,t.startAt.inclusive):null;return qw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Lp(t,e,n){return new zh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qh(t,e){return Qg(ti(t),ti(e))&&t.limitType===e.limitType}function JA(t){return`${Gg(ti(t))}|lt:${t.limitType}`}function $p(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>QA(i)).join(", ")}]`),Wc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ao(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ao(i)).join(",")),`Target(${r})`}(ti(t))}; limitType=${t.limitType})`}function Kh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ae.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of $a(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=zw(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,$a(r),i)||r.endAt&&!function(o,a,c){const l=zw(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,$a(r),i))}(t,e)}function w4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function XA(t){return(e,n)=>{let r=!1;for(const i of $a(t)){const s=E4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function E4(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?Io(c,l):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ls(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4=new ht(ae.comparator);function ni(){return b4}const ZA=new ht(ae.comparator);function ba(...t){let e=ZA;for(const n of t)e=e.insert(n.key,n);return e}function eC(t){let e=ZA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ss(){return Va()}function tC(){return Va()}function Va(){return new Go(t=>t.toString(),(t,e)=>t.isEqual(e))}const T4=new ht(ae.comparator),I4=new an(ae.comparator);function Ee(...t){let e=I4;for(const n of t)e=e.add(n);return e}const A4=new an(Ue);function C4(){return A4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ku(e)?"-0":e}}function rC(t){return{integerValue:""+t}}function R4(t,e){return t4(e)?rC(e):nC(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this._=void 0}}function S4(t,e,n){return t instanceof gc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wg(s)&&(s=qg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof _c?sC(t,e):t instanceof yc?oC(t,e):function(i,s){const o=iC(i,s),a=Gw(o)+Gw(i.Ee);return Op(o)&&Op(i.Ee)?rC(a):nC(i.serializer,a)}(t,e)}function P4(t,e,n){return t instanceof _c?sC(t,e):t instanceof yc?oC(t,e):n}function iC(t,e){return t instanceof xu?function(r){return Op(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class gc extends Gh{}class _c extends Gh{constructor(e){super(),this.elements=e}}function sC(t,e){const n=aC(e);for(const r of t.elements)n.some(i=>Rr(i,r))||n.push(r);return{arrayValue:{values:n}}}class yc extends Gh{constructor(e){super(),this.elements=e}}function oC(t,e){let n=aC(e);for(const r of t.elements)n=n.filter(i=>!Rr(i,r));return{arrayValue:{values:n}}}class xu extends Gh{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Gw(t){return yt(t.integerValue||t.doubleValue)}function aC(t){return Kg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(e,n){this.field=e,this.transform=n}}function N4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof _c&&i instanceof _c||r instanceof yc&&i instanceof yc?To(r.elements,i.elements,Rr):r instanceof xu&&i instanceof xu?Rr(r.Ee,i.Ee):r instanceof gc&&i instanceof gc}(t.transform,e.transform)}class x4{constructor(e,n){this.version=e,this.transformResults=n}}class In{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new In}static exists(e){return new In(void 0,e)}static updateTime(e){return new In(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qh{}function cC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yg(t.key,In.none()):new qc(t.key,t.data,In.none());{const n=t.data,r=pn.empty();let i=new an(nn.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ji(t.key,r,new On(i.toArray()),In.none())}}function O4(t,e,n){t instanceof qc?function(i,s,o){const a=i.value.clone(),c=Yw(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ji?function(i,s,o){if(!jl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Yw(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(lC(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fa(t,e,n,r){return t instanceof qc?function(s,o,a,c){if(!jl(s.precondition,o))return a;const l=s.value.clone(),u=Jw(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ji?function(s,o,a,c){if(!jl(s.precondition,o))return a;const l=Jw(s.fieldTransforms,c,o),u=o.data;return u.setAll(lC(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return jl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function D4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=iC(r.transform,i||null);s!=null&&(n===null&&(n=pn.empty()),n.set(r.field,s))}return n||null}function Qw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&To(r,i,(s,o)=>N4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qc extends Qh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ji extends Qh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function lC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yw(t,e,n){const r=new Map;We(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,P4(o,a,n[i]))}return r}function Jw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,S4(s,o,e))}return r}class Yg extends Qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uC extends Qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&O4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tC();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=cC(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,(n,r)=>Qw(n,r))&&To(this.baseMutations,e.baseMutations,(n,r)=>Qw(n,r))}}class Jg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){We(e.mutations.length===r.length);let i=function(){return T4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,Ce;function hC(t){switch(t){default:return le();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function dC(t){if(t===void 0)return ei("GRPC error has no .code"),$.UNKNOWN;switch(t){case _t.OK:return $.OK;case _t.CANCELLED:return $.CANCELLED;case _t.UNKNOWN:return $.UNKNOWN;case _t.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case _t.INTERNAL:return $.INTERNAL;case _t.UNAVAILABLE:return $.UNAVAILABLE;case _t.UNAUTHENTICATED:return $.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case _t.NOT_FOUND:return $.NOT_FOUND;case _t.ALREADY_EXISTS:return $.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return $.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case _t.ABORTED:return $.ABORTED;case _t.OUT_OF_RANGE:return $.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return $.UNIMPLEMENTED;case _t.DATA_LOSS:return $.DATA_LOSS;default:return le()}}(Ce=_t||(_t={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V4(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F4=new ao([4294967295,4294967295],0);function Xw(t){const e=V4().encode(t),n=new UU;return n.update(e),new Uint8Array(n.digest())}function Zw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ao([n,r],0),new ao([i,s],0)]}class Xg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ta(`Invalid padding: ${n}`);if(r<0)throw new Ta(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ta(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ta(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=ao.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(ao.fromNumber(r)));return i.compare(F4)===1&&(i=new ao([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Xw(e),[r,i]=Zw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Xg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Xw(e),[r,i]=Zw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Kc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Yh(he.min(),i,new ht(Ue),ni(),Ee())}}class Kc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Kc(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class fC{constructor(e,n){this.targetId=e,this.ye=n}}class pC{constructor(e,n,r=ln.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class e0{constructor(){this.we=0,this.Se=n0(),this.be=ln.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=Ee(),n=Ee(),r=Ee();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:le()}}),new Kc(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=n0()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class U4{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=ni(),this.Ue=t0(),this.We=new ht(Ue)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Mp(s))if(r===0){const o=new ae(s.path);this.je(n,o,Dt.newNoDocument(o,he.min()))}else We(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Es(r).toUint8Array()}catch(c){if(c instanceof HA)return bo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Xg(o,i,s)}catch(c){return bo(c instanceof Ta?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Mp(a.target)){const c=new ae(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,Dt.newNoDocument(c,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=Ee();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Yh(e,n,this.We,this.$e,r);return this.$e=ni(),this.Ue=t0(),this.We=new ht(Ue),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new e0,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new an(Ue),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new e0),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function t0(){return new ht(ae.comparator)}function n0(){return new ht(ae.comparator)}const B4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),j4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),H4=(()=>({and:"AND",or:"OR"}))();class z4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vp(t,e){return t.useProto3Json||Wc(e)?e:{value:e}}function Ou(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function W4(t,e){return Ou(t,e.toTimestamp())}function Ln(t){return We(!!t),he.fromTimestamp(function(n){const r=Oi(n);return new wt(r.seconds,r.nanos)}(t))}function Zg(t,e){return function(r){return new lt(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function gC(t){const e=lt.fromString(t);return We(EC(e)),e}function Du(t,e){return Zg(t.databaseId,e.path)}function Ua(t,e){const n=gC(e);if(n.get(1)!==t.databaseId.projectId)throw new ee($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(_C(n))}function Fp(t,e){return Zg(t.databaseId,e)}function q4(t){const e=gC(t);return e.length===4?lt.emptyPath():_C(e)}function vc(t){return new lt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _C(t){return We(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function r0(t,e,n){return{name:Du(t,e),fields:n.value.mapValue.fields}}function K4(t,e){return"found"in e?function(r,i){We(!!i.found),i.found.name,i.found.updateTime;const s=Ua(r,i.found.name),o=Ln(i.found.updateTime),a=i.found.createTime?Ln(i.found.createTime):he.min(),c=new pn({mapValue:{fields:i.found.fields}});return Dt.newFoundDocument(s,o,a,c)}(t,e):"missing"in e?function(r,i){We(!!i.missing),We(!!i.readTime);const s=Ua(r,i.missing),o=Ln(i.readTime);return Dt.newNoDocument(s,o)}(t,e):le()}function G4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(We(u===void 0||typeof u=="string"),ln.fromBase64String(u||"")):(We(u===void 0||u instanceof Uint8Array),ln.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?$.UNKNOWN:dC(l.code);return new ee(u,l.message||"")}(o);n=new pC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ua(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):he.min(),a=new pn({mapValue:{fields:r.document.fields}}),c=Dt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Hl(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ua(t,r.document),s=r.readTime?Ln(r.readTime):he.min(),o=Dt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Hl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ua(t,r.document),s=r.removedTargetIds||[];n=new Hl([],s,i,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new $4(i,s),a=r.targetId;n=new fC(a,o)}}return n}function yC(t,e){let n;if(e instanceof qc)n={update:r0(t,e.key,e.value)};else if(e instanceof Yg)n={delete:Du(t,e.key)};else if(e instanceof ji)n={update:r0(t,e.key,e.data),updateMask:rB(e.fieldMask)};else{if(!(e instanceof uC))return le();n={verify:Du(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof gc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _c)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof yc)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xu)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:W4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:le()}(t,e.precondition)),n}function Q4(t,e){return t&&t.length>0?(We(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ln(i.updateTime):Ln(s);return o.isEqual(he.min())&&(o=Ln(s)),new x4(o,i.transformResults||[])}(n,e))):[]}function Y4(t,e){return{documents:[Fp(t,e.path)]}}function J4(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return wC(Sr.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Ws(h.field),direction:eB(h.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Vp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function X4(t){let e=q4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){We(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const p=vC(h);return p instanceof Sr&&KA(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(y){return new La(qs(y.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Wc(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,m=h.values||[];return new Nu(m,p)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const p=!h.before,m=h.values||[];return new Nu(m,p)}(n.endAt)),m4(e,i,o,s,a,"F",c,l)}function Z4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qs(n.unaryFilter.field);return It.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=qs(n.unaryFilter.field);return It.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qs(n.unaryFilter.field);return It.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qs(n.unaryFilter.field);return It.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return It.create(qs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sr.create(n.compositeFilter.filters.map(r=>vC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function eB(t){return B4[t]}function tB(t){return j4[t]}function nB(t){return H4[t]}function Ws(t){return{fieldPath:t.canonicalString()}}function qs(t){return nn.fromServerFormat(t.fieldPath)}function wC(t){return t instanceof It?function(n){if(n.op==="=="){if(Hw(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NAN"}};if(jw(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hw(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NOT_NAN"}};if(jw(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ws(n.field),op:tB(n.op),value:n.value}}}(t):t instanceof Sr?function(n){const r=n.getFilters().map(i=>wC(i));return r.length===1?r[0]:{compositeFilter:{op:nB(n.op),filters:r}}}(t):le()}function rB(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function EC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,r,i,s=he.min(),o=he.min(),a=ln.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(e){this.ht=e}}function sB(t){const e=X4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oB{constructor(){this._n=new aB}addToCollectionParentIndex(e,n){return this._n.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(xi.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(xi.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class aB{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new an(lt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new an(lt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Co(0)}static Bn(){return new Co(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cB{constructor(){this.changes=new Go(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lB{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uB{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Fa(r.mutation,i,On.empty(),wt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const i=ss();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ba();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ss();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ni();const o=Va(),a=function(){return Va()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof ji)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Fa(u.mutation,l,u.mutation.getFieldMask(),wt.now())):o.set(l.key,On.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new lB(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Va();let i=new ht((o,a)=>o-a),s=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||On.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||Ee()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=tC();u.forEach(p=>{if(!s.has(p)){const m=cC(n.get(p),r.get(p));m!==null&&h.set(p,m),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return ae.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):y4(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(ss());let a=-1,c=s;return o.next(l=>B.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?B.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,Ee())).next(u=>({batchId:a,changes:eC(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let i=ba();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ba();return this.indexManager.getCollectionParents(e,i).next(o=>B.forEach(o,a=>{const c=function(u,h){return new zh(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Dt.newInvalidDocument(l)))});let o=ba();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Fa(l.mutation,c,On.empty(),wt.now()),Kh(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hB{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return B.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ln(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:sB(i.bundledQuery),readTime:Ln(i.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dB{constructor(){this.overlays=new ht(ae.comparator),this.hr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ss();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=ss(),s=n.length+1,o=new ae(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ht((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=ss(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ss(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return B.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new L4(n,r));let s=this.hr.get(n);s===void 0&&(s=Ee(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.Pr=new an(Ot.Ir),this.Tr=new an(Ot.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ot(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ot(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ae(new lt([])),r=new Ot(n,e),i=new Ot(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ae(new lt([])),r=new Ot(n,e),i=new Ot(n,e+1);let s=Ee();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ot(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ot{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ae.comparator(e.key,n.key)||Ue(e.pr,n.pr)}static Er(e,n){return Ue(e.pr,n.pr)||ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fB{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new an(Ot.Ir)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new M4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ot(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ot(n,0),i=new Ot(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new an(Ue);return n.forEach(i=>{const s=new Ot(i,0),o=new Ot(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),B.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ae.isDocumentKey(s)||(s=s.child(""));const o=new Ot(new ae(s),0);let a=new an(Ue);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.pr)),!0)},o),B.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){We(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return B.forEach(n.mutations,i=>{const s=new Ot(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ot(n,0),i=this.wr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pB{constructor(e){this.Cr=e,this.docs=function(){return new ht(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let r=ni();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Dt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ni();const o=n.path,a=new ae(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||XU(JU(u),r)<=0||(i.has(u.key)||Kh(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){le()}Fr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mB(this)}getSize(e){return B.resolve(this.size)}}class mB extends cB{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gB{constructor(e){this.persistence=e,this.Mr=new Go(n=>Gg(n),Qg),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Or=0,this.Nr=new e_,this.targetCount=0,this.Br=Co.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),B.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Co(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.qn(n),B.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _B{constructor(e,n){this.Lr={},this.overlays={},this.kr=new zg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new gB(this),this.indexManager=new oB,this.remoteDocumentCache=function(i){return new pB(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new iB(n),this.$r=new hB(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dB,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new fB(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const i=new yB(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return B.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class yB extends e4{constructor(e){super(),this.currentSequenceNumber=e}}class t_{constructor(e){this.persistence=e,this.zr=new e_,this.jr=null}static Hr(e){return new t_(e)}get Jr(){if(this.jr)return this.jr;throw le()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),B.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Jr,r=>{const i=ae.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return B.or([()=>B.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Ee(),i=Ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vB{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Wi(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.zi(e,n))}Wi(e,n){if(Kw(n))return B.resolve(null);let r=ti(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Lp(n,null,"F"),r=ti(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ee(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.Hi(n,l,o,c.readTime)?this.Wi(e,Lp(n,null,"F")):this.Ji(e,l,n,c)}))})))}Gi(e,n,r,i){return Kw(n)||i.isEqual(he.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.Hi(n,o,r,i)?this.zi(e,n):(Vw()<=De.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$p(n)),this.Ji(e,o,n,YU(i,-1)))})}ji(e,n){let r=new an(XA(e));return n.forEach((i,s)=>{Kh(e,s)&&(r=r.add(s))}),r}Hi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}zi(e,n){return Vw()<=De.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",$p(n)),this.Ui.getDocumentsMatchingQuery(e,n,xi.min())}Ji(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wB{constructor(e,n,r,i){this.persistence=e,this.Yi=n,this.serializer=i,this.Zi=new ht(Ue),this.Xi=new Go(s=>Gg(s),Qg),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uB(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function EB(t,e,n,r){return new wB(t,e,n,r)}async function bC(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=Ee();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({rs:l,removedBatchIds:o,addedBatchIds:a}))})})}function bB(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,p=h.keys();let m=B.resolve();return p.forEach(y=>{m=m.next(()=>u.getEntry(c,y)).next(v=>{const I=l.docVersions.get(y);We(I!==null),v.version.compareTo(I)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Ee();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function TC(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function TB(t,e){const n=ge(t),r=e.snapshotVersion;let i=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});i=n.Zi;const a=[];e.targetChanges.forEach((u,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,u.addedDocuments,h)));let m=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(ln.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),i=i.insert(h,m),function(v,I,A){return v.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(p,m,u)&&a.push(n.Qr.updateTargetData(s,m))});let c=ni(),l=Ee();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(IB(s,o,e.documentUpdates).next(u=>{c=u.ss,l=u.os})),!r.isEqual(he.min())){const u=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return B.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Zi=i,s))}function IB(t,e,n){let r=Ee(),i=Ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ni();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ne("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ss:o,os:i}})}function AB(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function CB(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new vi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Zi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Up(t,e,n){const r=ge(t),i=r.Zi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zc(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(i.target)}function i0(t,e,n){const r=ge(t);let i=he.min(),s=Ee();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=ge(c),p=h.Xi.get(u);return p!==void 0?B.resolve(h.Zi.get(p)):h.Qr.getTargetData(l,u)}(r,o,ti(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?i:he.min(),n?s:Ee())).next(a=>(RB(r,w4(e),a),{documents:a,_s:s})))}function RB(t,e,n){let r=t.es.get(e)||he.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.es.set(e,r)}class s0{constructor(){this.activeTargetIds=C4()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SB{constructor(){this.Ys=new s0,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new s0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PB{Xs(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl=null;function cf(){return Sl===null?Sl=function(){return 268435456+Math.round(2147483648*Math.random())}():Sl++,"0x"+Sl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NB{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="WebChannelConnection";class xB extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${i}/databases/${s}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get mo(){return!1}fo(n,r,i,s,o){const a=cf(),c=this.po(n,r);ne("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(l,s,o),this.wo(n,c,l,i).then(u=>(ne("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw bo("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}So(n,r,i,s,o,a){return this.fo(n,r,i,s,o)}yo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ko}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}po(n,r){const i=kB[n];return`${this.Ao}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,i){const s=cf();return new Promise((o,a)=>{const c=new FU;c.setWithCredentials(!0),c.listenOnce($U.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case af.NO_ERROR:const u=c.getResponseJson();ne(Jt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case af.TIMEOUT:ne(Jt,`RPC '${e}' ${s} timed out`),a(new ee($.DEADLINE_EXCEEDED,"Request time out"));break;case af.HTTP_ERROR:const h=c.getStatus();if(ne(Jt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const y=function(I){const A=I.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(A)>=0?A:$.UNKNOWN}(m.status);a(new ee(y,m.message))}else a(new ee($.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ee($.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{ne(Jt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);ne(Jt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}bo(e,n,r){const i=cf(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=MU(),a=LU(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");ne(Jt,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let p=!1,m=!1;const y=new NB({_o:I=>{m?ne(Jt,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(p||(ne(Jt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),ne(Jt,`RPC '${e}' stream ${i} sending:`,I),h.send(I))},ao:()=>h.close()}),v=(I,A,k)=>{I.listen(A,N=>{try{k(N)}catch(P){setTimeout(()=>{throw P},0)}})};return v(h,Al.EventType.OPEN,()=>{m||ne(Jt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Al.EventType.CLOSE,()=>{m||(m=!0,ne(Jt,`RPC '${e}' stream ${i} transport closed`),y.To())}),v(h,Al.EventType.ERROR,I=>{m||(m=!0,bo(Jt,`RPC '${e}' stream ${i} transport errored:`,I),y.To(new ee($.UNAVAILABLE,"The operation could not be completed")))}),v(h,Al.EventType.MESSAGE,I=>{var A;if(!m){const k=I.data[0];We(!!k);const N=k,P=N.error||((A=N[0])===null||A===void 0?void 0:A.error);if(P){ne(Jt,`RPC '${e}' stream ${i} received error:`,P);const j=P.status;let z=function(Ke){const Pe=_t[Ke];if(Pe!==void 0)return dC(Pe)}(j),ce=P.message;z===void 0&&(z=$.INTERNAL,ce="Unknown error status: "+j+" with message "+P.message),m=!0,y.To(new ee(z,ce)),h.close()}else ne(Jt,`RPC '${e}' stream ${i} received:`,k),y.Eo(k)}}),v(a,VU.STAT_EVENT,I=>{I.stat===Lw.PROXY?ne(Jt,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===Lw.NOPROXY&&ne(Jt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Io()},0),y}}function lf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t){return new z4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,n-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,i,s,o,a,c){this.oi=e,this.ko=r,this.qo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new r_(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(ei(n.toString()),ei("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Qo===n&&this.n_(r,i)},r=>{e(()=>{const i=new ee($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(i)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(i=>{r(()=>this.r_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OB extends IC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=G4(this.serializer,e),r=function(s){if(!("targetChange"in s))return he.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?Ln(o.readTime):he.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=vc(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Mp(c)?{documents:Y4(s,c)}:{query:J4(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=mC(s,o.resumeToken);const l=Vp(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(he.min())>0){a.readTime=Ou(s,o.snapshotVersion.toTimestamp());const l=Vp(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=Z4(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=vc(this.serializer),n.removeTarget=e,this.Yo(n)}}class DB extends IC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=Q4(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.l_(r,n)}return We(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=vc(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yC(this.serializer,r))};this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MB extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.I_=!1}T_(){if(this.I_)throw new ee($.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee($.UNKNOWN,i.toString())})}So(e,n,r,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ee($.UNKNOWN,s.toString())})}terminate(){this.I_=!0}}class LB{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(ei(n),this.R_=!1):ne("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $B{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=s,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{$s(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ge(c);l.S_.add(4),await Gc(l),l.v_.set("Unknown"),l.S_.delete(4),await Xh(l)}(this))})}),this.v_=new LB(r,i)}}async function Xh(t){if($s(t))for(const e of t.b_)await e(!0)}async function Gc(t){for(const e of t.b_)await e(!1)}function AC(t,e){const n=ge(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),o_(n)?s_(n):Qo(n).Go()&&i_(n,e))}function CC(t,e){const n=ge(t),r=Qo(n);n.w_.delete(e),r.Go()&&RC(n,e),n.w_.size===0&&(r.Go()?r.Ho():$s(n)&&n.v_.set("Unknown"))}function i_(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qo(t).o_(e)}function RC(t,e){t.C_.Le(e),Qo(t).__(e)}function s_(t){t.C_=new U4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Qo(t).start(),t.v_.V_()}function o_(t){return $s(t)&&!Qo(t).Wo()&&t.w_.size>0}function $s(t){return ge(t).S_.size===0}function SC(t){t.C_=void 0}async function VB(t){t.w_.forEach((e,n)=>{i_(t,e)})}async function FB(t,e){SC(t),o_(t)?(t.v_.g_(e),s_(t)):t.v_.set("Unknown")}async function UB(t,e,n){if(t.v_.set("Online"),e instanceof pC&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.w_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.w_.delete(a),i.C_.removeTarget(a))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mu(t,r)}else if(e instanceof Hl?t.C_.Ge(e):e instanceof fC?t.C_.Xe(e):t.C_.He(e),!n.isEqual(he.min()))try{const r=await TC(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.C_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.w_.get(l);u&&s.w_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.w_.get(c);if(!u)return;s.w_.set(c,u.withResumeToken(ln.EMPTY_BYTE_STRING,u.snapshotVersion)),RC(s,c);const h=new vi(u.target,c,l,u.sequenceNumber);i_(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Mu(t,r)}}async function Mu(t,e,n){if(!zc(e))throw e;t.S_.add(1),await Gc(t),t.v_.set("Offline"),n||(n=()=>TC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await Xh(t)})}function PC(t,e){return e().catch(n=>Mu(t,n,e))}async function Zh(t){const e=ge(t),n=Di(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;BB(e);)try{const i=await AB(e.localStore,r);if(i===null){e.y_.length===0&&n.Ho();break}r=i.batchId,jB(e,i)}catch(i){await Mu(e,i)}kC(e)&&NC(e)}function BB(t){return $s(t)&&t.y_.length<10}function jB(t,e){t.y_.push(e);const n=Di(t);n.Go()&&n.u_&&n.c_(e.mutations)}function kC(t){return $s(t)&&!Di(t).Wo()&&t.y_.length>0}function NC(t){Di(t).start()}async function HB(t){Di(t).P_()}async function zB(t){const e=Di(t);for(const n of t.y_)e.c_(n.mutations)}async function WB(t,e,n){const r=t.y_.shift(),i=Jg.from(r,e,n);await PC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Zh(t)}async function qB(t,e){e&&Di(t).u_&&await async function(r,i){if(function(o){return hC(o)&&o!==$.ABORTED}(i.code)){const s=r.y_.shift();Di(r).jo(),await PC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Zh(r)}}(t,e),kC(t)&&NC(t)}async function a0(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=$s(n);n.S_.add(3),await Gc(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await Xh(n)}async function KB(t,e){const n=ge(t);e?(n.S_.delete(2),await Xh(n)):e||(n.S_.add(2),await Gc(n),n.v_.set("Unknown"))}function Qo(t){return t.F_||(t.F_=function(n,r,i){const s=ge(n);return s.T_(),new OB(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:VB.bind(null,t),lo:FB.bind(null,t),s_:UB.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),o_(t)?s_(t):t.v_.set("Unknown")):(await t.F_.stop(),SC(t))})),t.F_}function Di(t){return t.M_||(t.M_=function(n,r,i){const s=ge(n);return s.T_(),new DB(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:HB.bind(null,t),lo:qB.bind(null,t),h_:zB.bind(null,t),l_:WB.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await Zh(t)):(await t.M_.stop(),t.y_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new a_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function c_(t,e){if(ei("AsyncQueue",`${e}: ${t}`),zc(t))return new ee($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=ba(),this.sortedSet=new ht(this.comparator)}static emptySet(e){return new co(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof co)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new co;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(){this.x_=new ht(ae.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):le():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ro{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ro(e,n,co.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GB{constructor(){this.N_=void 0,this.listeners=[]}}class QB{constructor(){this.queries=new Go(e=>JA(e),qh),this.onlineState="Unknown",this.B_=new Set}}async function l_(t,e){const n=ge(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new GB),i)try{s.N_=await n.onListen(r)}catch(o){const a=c_(o,`Initialization of query '${$p(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.L_(n.onlineState),s.N_&&e.k_(s.N_)&&h_(n)}async function u_(t,e){const n=ge(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function YB(t,e){const n=ge(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.k_(i)&&(r=!0);o.N_=i}}r&&h_(n)}function JB(t,e,n){const r=ge(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function h_(t){t.B_.forEach(e=>{e.next()})}class d_{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.key=e}}class OC{constructor(e){this.key=e}}class XB{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=Ee(),this.mutatedKeys=Ee(),this.ia=XA(e),this.sa=new co(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new c0,i=n?n.sa:this.sa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const p=i.get(u),m=Kh(this.query,h)?h:null,y=!!p&&this.mutatedKeys.has(p.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;p&&m?p.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),I=!0):this.ua(p,m)||(r.track({type:2,doc:m}),I=!0,(c&&this.ia(m,c)>0||l&&this.ia(m,l)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),I=!0):p&&!m&&(r.track({type:1,doc:p}),I=!0,(c||l)&&(a=!0)),I&&(m?(o=o.add(m),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{sa:o,aa:r,Hi:a,mutatedKeys:s}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const s=e.aa.O_();s.sort((l,u)=>function(p,m){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return y(p)-y(m)}(l.type,u.type)||this.ia(l.doc,u.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,s.length!==0||c?{snapshot:new Ro(this.query,e.sa,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new c0,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=Ee(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new OC(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new xC(r))}),n}Ia(e){this.ta=e._s,this.ra=Ee();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return Ro.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class ZB{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class e6{constructor(e){this.key=e,this.Ea=!1}}class t6{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new Go(a=>JA(a),qh),this.Ra=new Map,this.Va=new Set,this.ma=new ht(ae.comparator),this.fa=new Map,this.ga=new e_,this.pa={},this.ya=new Map,this.wa=Co.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function n6(t,e){const n=d6(t);let r,i;const s=n.Aa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const o=await CB(n.localStore,ti(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await r6(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&AC(n.remoteStore,o)}return i}async function r6(t,e,n,r,i){t.ba=(h,p,m)=>async function(v,I,A,k){let N=I.view._a(A);N.Hi&&(N=await i0(v.localStore,I.query,!1).then(({documents:z})=>I.view._a(z,N)));const P=k&&k.targetChanges.get(I.targetId),j=I.view.applyChanges(N,v.isPrimaryClient,P);return u0(v,I.targetId,j.ha),j.snapshot}(t,h,p,m);const s=await i0(t.localStore,e,!0),o=new XB(e,s._s),a=o._a(s.documents),c=Kc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);u0(t,n,l.ha);const u=new ZB(e,n,o);return t.Aa.set(e,u),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),l.snapshot}async function i6(t,e){const n=ge(t),r=n.Aa.get(e),i=n.Ra.get(r.targetId);if(i.length>1)return n.Ra.set(r.targetId,i.filter(s=>!qh(s,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Up(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),CC(n.remoteStore,r.targetId),Bp(n,r.targetId)}).catch(Hc)):(Bp(n,r.targetId),await Up(n.localStore,r.targetId,!0))}async function s6(t,e,n){const r=f6(t);try{const i=await function(o,a){const c=ge(o),l=wt.now(),u=a.reduce((m,y)=>m.add(y.key),Ee());let h,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=ni(),v=Ee();return c.ts.getEntries(m,u).next(I=>{y=I,y.forEach((A,k)=>{k.isValidDocument()||(v=v.add(A))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,y)).next(I=>{h=I;const A=[];for(const k of a){const N=D4(k,h.get(k.key).overlayedDocument);N!=null&&A.push(new ji(k.key,N,zA(N.value.mapValue),In.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,A,a)}).next(I=>{p=I;const A=I.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(m,I.batchId,A)})}).then(()=>({batchId:p.batchId,changes:eC(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.pa[o.currentUser.toKey()];l||(l=new ht(Ue)),l=l.insert(a,c),o.pa[o.currentUser.toKey()]=l}(r,i.batchId,n),await Qc(r,i.changes),await Zh(r.remoteStore)}catch(i){const s=c_(i,"Failed to persist write");n.reject(s)}}async function DC(t,e){const n=ge(t);try{const r=await TB(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fa.get(s);o&&(We(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ea=!0:i.modifiedDocuments.size>0?We(o.Ea):i.removedDocuments.size>0&&(We(o.Ea),o.Ea=!1))}),await Qc(n,r,e)}catch(r){await Hc(r)}}function l0(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Aa.forEach((s,o)=>{const a=o.view.L_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=ge(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const p of h.listeners)p.L_(a)&&(l=!0)}),l&&h_(c)}(r.eventManager,e),i.length&&r.da.s_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function o6(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fa.get(e),s=i&&i.key;if(s){let o=new ht(ae.comparator);o=o.insert(s,Dt.newNoDocument(s,he.min()));const a=Ee().add(s),c=new Yh(he.min(),new Map,new ht(Ue),o,a);await DC(r,c),r.ma=r.ma.remove(s),r.fa.delete(e),f_(r)}else await Up(r.localStore,e,!1).then(()=>Bp(r,e,n)).catch(Hc)}async function a6(t,e){const n=ge(t),r=e.batch.batchId;try{const i=await bB(n.localStore,e);LC(n,r,null),MC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qc(n,i)}catch(i){await Hc(i)}}async function c6(t,e,n){const r=ge(t);try{const i=await function(o,a){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(We(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);LC(r,e,n),MC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qc(r,i)}catch(i){await Hc(i)}}function MC(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function LC(t,e,n){const r=ge(t);let i=r.pa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pa[r.currentUser.toKey()]=i}}function Bp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||$C(t,r)})}function $C(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(CC(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),f_(t))}function u0(t,e,n){for(const r of n)r instanceof xC?(t.ga.addReference(r.key,e),l6(t,r)):r instanceof OC?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||$C(t,r.key)):le()}function l6(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.Va.add(r),f_(t))}function f_(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new ae(lt.fromString(e)),r=t.wa.next();t.fa.set(r,new e6(n)),t.ma=t.ma.insert(n,r),AC(t.remoteStore,new vi(ti(Wh(n.path)),r,"TargetPurposeLimboResolution",zg.ae))}}async function Qc(t,e,n){const r=ge(t),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,c)=>{o.push(r.ba(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=n_.Ki(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.da.s_(i),await async function(c,l){const u=ge(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>B.forEach(l,p=>B.forEach(p.qi,m=>u.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>B.forEach(p.Qi,m=>u.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!zc(h))throw h;ne("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const p=h.targetId;if(!h.fromCache){const m=u.Zi.get(p),y=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(y);u.Zi=u.Zi.insert(p,v)}}}(r.localStore,s))}async function u6(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await bC(n.localStore,e);n.currentUser=e,function(s,o){s.ya.forEach(a=>{a.forEach(c=>{c.reject(new ee($.CANCELLED,o))})}),s.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qc(n,r.rs)}}function h6(t,e){const n=ge(t),r=n.fa.get(e);if(r&&r.Ea)return Ee().add(r.key);{let i=Ee();const s=n.Ra.get(e);if(!s)return i;for(const o of s){const a=n.Aa.get(o);i=i.unionWith(a.view.oa)}return i}}function d6(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=DC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=h6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=o6.bind(null,e),e.da.s_=YB.bind(null,e.eventManager),e.da.Da=JB.bind(null,e.eventManager),e}function f6(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=a6.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=c6.bind(null,e),e}class h0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Jh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return EB(this.persistence,new vB,e.initialUser,this.serializer)}createPersistence(e){return new _B(t_.Hr,this.serializer)}createSharedClientState(e){return new SB}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class p6{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>l0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=u6.bind(null,this.syncEngine),await KB(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QB}()}createDatastore(e){const n=Jh(e.databaseInfo.databaseId),r=function(s){return new xB(s)}(e.databaseInfo);return function(s,o,a,c){return new MB(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new $B(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>l0(this.syncEngine,n,0),function(){return o0.v()?new o0:new PB}())}createSyncEngine(e,n){return function(i,s,o,a,c,l,u){const h=new t6(i,s,o,a,c,l);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ge(n);ne("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await Gc(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):ei("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m6{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new ee($.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=ge(i),a=vc(o.serializer)+"/documents",c={documents:s.map(p=>Du(o.serializer,p))},l=await o.So("BatchGetDocuments",a,c,s.length),u=new Map;l.forEach(p=>{const m=K4(o.serializer,p);u.set(m.key.toString(),m)});const h=[];return s.forEach(p=>{const m=u.get(p.toString());We(!!m),h.push(m)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Yg(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=ae.fromPath(r);this.mutations.push(new uC(i,this.precondition(i)))}),await async function(r,i){const s=ge(r),o=vc(s.serializer)+"/documents",a={writes:i.map(c=>yC(s.serializer,c))};await s.fo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw le();n=he.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new ee($.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(he.min())?In.exists(!1):In.updateTime(n):In.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(he.min()))throw new ee($.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return In.updateTime(n)}return In.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g6{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Ka=r.maxAttempts,this.Uo=new r_(this.asyncQueue,"transaction_retry")}run(){this.Ka-=1,this.$a()}$a(){this.Uo.No(async()=>{const e=new m6(this.datastore),n=this.Ua(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Wa(i)}))}).catch(r=>{this.Wa(r)})})}Ua(e){try{const n=this.updateFunction(e);return!Wc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Wa(e){this.Ka>0&&this.Ga(e)?(this.Ka-=1,this.asyncQueue.enqueueAndForget(()=>(this.$a(),Promise.resolve()))):this.deferred.reject(e)}Ga(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!hC(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _6{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xt.UNAUTHENTICATED,this.clientId=BA.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ne("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ne("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ee($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=c_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uf(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function d0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await v6(t);ne("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>a0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>a0(e.remoteStore,s)),t._onlineComponents=e}function y6(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function v6(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await uf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!y6(n))throw n;bo("Error using user provided cache. Falling back to memory cache: "+n),await uf(t,new h0)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await uf(t,new h0);return t._offlineComponents}async function m_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await d0(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await d0(t,new p6))),t._onlineComponents}function w6(t){return m_(t).then(e=>e.syncEngine)}function E6(t){return m_(t).then(e=>e.datastore)}async function Lu(t){const e=await m_(t),n=e.eventManager;return n.onListen=n6.bind(null,e.syncEngine),n.onUnlisten=i6.bind(null,e.syncEngine),n}function b6(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new p_({next:p=>{o.enqueueAndForget(()=>u_(s,h));const m=p.docs.has(a);!m&&p.fromCache?l.reject(new ee($.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&c&&c.source==="server"?l.reject(new ee($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new d_(Wh(a.path),u,{includeMetadataChanges:!0,z_:!0});return l_(s,h)}(await Lu(t),t.asyncQueue,e,n,r)),r.promise}function T6(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new p_({next:p=>{o.enqueueAndForget(()=>u_(s,h)),p.fromCache&&c.source==="server"?l.reject(new ee($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new d_(a,u,{includeMetadataChanges:!0,z_:!0});return l_(s,h)}(await Lu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t,e,n){if(!n)throw new ee($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function I6(t,e,n,r){if(e===!0&&r===!0)throw new ee($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function p0(t){if(!ae.isDocumentKey(t))throw new ee($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function m0(t){if(ae.isDocumentKey(t))throw new ee($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function g_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function ar(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=g_(t);throw new ee($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ee($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}I6("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=VC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ed{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new g0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ee($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ee($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new g0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new BU;switch(r.type){case"firstParty":return new WU(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=f0.get(n);r&&(ne("ComponentProvider","Removing Datastore"),f0.delete(n),r.terminate())}(this),Promise.resolve()}}function A6(t,e,n,r={}){var i;const s=(t=ar(t,ed))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&bo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Xt.MOCK_USER;else{a=LO(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new ee($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Xt(l)}t._authCredentials=new jU(new UA(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yc(this.firestore,e,this._query)}}class gn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gn(this.firestore,e,this._key)}}class Ri extends Yc{constructor(e,n,r){super(e,n,Wh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gn(this.firestore,null,new ae(e))}withConverter(e){return new Ri(this.firestore,e,this._path)}}function lW(t,e,...n){if(t=dt(t),FC("collection","path",e),t instanceof ed){const r=lt.fromString(e,...n);return m0(r),new Ri(t,null,r)}{if(!(t instanceof gn||t instanceof Ri))throw new ee($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(lt.fromString(e,...n));return m0(r),new Ri(t.firestore,null,r)}}function Gr(t,e,...n){if(t=dt(t),arguments.length===1&&(e=BA.V()),FC("doc","path",e),t instanceof ed){const r=lt.fromString(e,...n);return p0(r),new gn(t,null,new ae(r))}{if(!(t instanceof gn||t instanceof Ri))throw new ee($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(lt.fromString(e,...n));return p0(r),new gn(t.firestore,t instanceof Ri?t.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C6{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new r_(this,"async_queue_retry"),this.tu=()=>{const n=lf();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=lf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=lf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Ar;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!zc(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ei("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const i=a_.createAndSchedule(this,e,n,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&le()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function _0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ts extends ed{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new C6}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||UC(this),this._firestoreClient.terminate()}}function R6(t,e){const n=typeof t=="object"?t:_h(),r=typeof t=="string"?t:e||"(default)",i=ks(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=MO("firestore");s&&A6(i,...s)}return i}function Jc(t){return t._firestoreClient||UC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function UC(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,l,u){return new r4(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,VC(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new _6(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Is(ln.fromBase64String(e))}catch(n){throw new ee($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Is(ln.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ue(this._lat,e._lat)||Ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S6=/^__.*__$/;class P6{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new qc(e,this.data,n,this.fieldTransforms)}}class BC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ji(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function jC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class __{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.cu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new __(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.Tu(e),i}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.cu(),i}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return $u(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(jC(this.lu)&&S6.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class k6{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Jh(e)}mu(e,n,r,i=!1){return new __({lu:e,methodName:n,Vu:r,path:nn.emptyPath(),Iu:!1,Ru:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function HC(t){const e=t._freezeSettings(),n=Jh(t._databaseId);return new k6(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zC(t,e,n,r,i,s={}){const o=t.mu(s.merge||s.mergeFields?2:0,e,n,i);v_("Data must be an object, but it was:",o,r);const a=WC(r,o);let c,l;if(s.merge)c=new On(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const p=jp(e,h,n);if(!o.contains(p))throw new ee($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);KC(u,p)||u.push(p)}c=new On(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new P6(new pn(a),c,l)}class id extends nd{_toFieldTransform(e){if(e.lu!==2)throw e.lu===1?e.Au(`${this._methodName}() can only appear at the top level of your update data`):e.Au(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof id}}class y_ extends nd{_toFieldTransform(e){return new k4(e.path,new gc)}isEqual(e){return e instanceof y_}}function N6(t,e,n,r){const i=t.mu(1,e,n);v_("Data must be an object, but it was:",i,r);const s=[],o=pn.empty();Ls(r,(c,l)=>{const u=w_(e,c,n);l=dt(l);const h=i.Eu(u);if(l instanceof id)s.push(u);else{const p=sd(l,h);p!=null&&(s.push(u),o.set(u,p))}});const a=new On(s);return new BC(o,a,i.fieldTransforms)}function x6(t,e,n,r,i,s){const o=t.mu(1,e,n),a=[jp(e,r,n)],c=[i];if(s.length%2!=0)throw new ee($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(jp(e,s[p])),c.push(s[p+1]);const l=[],u=pn.empty();for(let p=a.length-1;p>=0;--p)if(!KC(l,a[p])){const m=a[p];let y=c[p];y=dt(y);const v=o.Eu(m);if(y instanceof id)l.push(m);else{const I=sd(y,v);I!=null&&(l.push(m),u.set(m,I))}}const h=new On(l);return new BC(u,h,o.fieldTransforms)}function sd(t,e){if(qC(t=dt(t)))return v_("Unsupported field value:",e,t),WC(t,e);if(t instanceof nd)return function(r,i){if(!jC(i.lu))throw i.Au(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Au(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=sd(a,i.du(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return R4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=wt.fromDate(r);return{timestampValue:Ou(i.serializer,s)}}if(r instanceof wt){const s=new wt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ou(i.serializer,s)}}if(r instanceof rd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Is)return{bytesValue:mC(i.serializer,r._byteString)};if(r instanceof gn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Zg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Au(`Unsupported field value: ${g_(r)}`)}(t,e)}function WC(t,e){const n={};return jA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ls(t,(r,i)=>{const s=sd(i,e.Pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function qC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof wt||t instanceof rd||t instanceof Is||t instanceof gn||t instanceof nd)}function v_(t,e,n){if(!qC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=g_(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function jp(t,e,n){if((e=dt(e))instanceof td)return e._internalPath;if(typeof e=="string")return w_(t,e);throw $u("Field path arguments must be of type string or ",t,!1,void 0,n)}const O6=new RegExp("[~\\*/\\[\\]]");function w_(t,e,n){if(e.search(O6)>=0)throw $u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new td(...e.split("."))._internalPath}catch{throw $u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $u(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ee($.INVALID_ARGUMENT,a+t+c)}function KC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new D6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(GC("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class D6 extends Vu{data(){return super.data()}}function GC(t,e){return typeof e=="string"?w_(t,e):e instanceof td?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class YC{convertValue(e,n="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ls(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new rd(yt(e.latitude),yt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fc(e));default:return null}}convertTimestamp(e){const n=Oi(e);return new wt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=lt.fromString(e);We(EC(r));const i=new pc(r.get(1),r.get(3)),s=new ae(r.popFirst(5));return i.isEqual(n)||ei(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class M6 extends YC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gn(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class E_ extends Vu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(GC("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zl extends E_{data(e={}){return super.data(e)}}class XC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Js(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zl(this._firestore,this._userDataWriter,r.key,r,new Js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new zl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Js(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new zl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Js(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:L6(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function L6(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){t=ar(t,gn);const e=ar(t.firestore,Ts);return b6(Jc(e),t._key).then(n=>eR(e,t,n))}class od extends YC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gn(this.firestore,null,n)}}function $6(t){t=ar(t,Yc);const e=ar(t.firestore,Ts),n=Jc(e),r=new od(e);return QC(t._query),T6(n,t._query).then(i=>new XC(e,r,t,i))}function uW(t,e,n){t=ar(t,gn);const r=ar(t.firestore,Ts),i=JC(t.converter,e,n);return V6(r,[zC(HC(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,In.none())])}function b_(t,...e){var n,r,i;t=dt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||_0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(_0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof gn)l=ar(t.firestore,Ts),u=Wh(t._key.path),c={next:h=>{e[o]&&e[o](eR(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ar(t,Yc);l=ar(h.firestore,Ts),u=h._query;const p=new od(l);c={next:m=>{e[o]&&e[o](new XC(l,p,h,m))},error:e[o+1],complete:e[o+2]},QC(t._query)}return function(p,m,y,v){const I=new p_(v),A=new d_(m,I,y);return p.asyncQueue.enqueueAndForget(async()=>l_(await Lu(p),A)),()=>{I.Ma(),p.asyncQueue.enqueueAndForget(async()=>u_(await Lu(p),A))}}(Jc(l),u,a,c)}function V6(t,e){return function(r,i){const s=new Ar;return r.asyncQueue.enqueueAndForget(async()=>s6(await w6(r),i,s)),s.promise}(Jc(t),e)}function eR(t,e,n){const r=n.docs.get(e._key),i=new od(t);return new E_(t,i,e._key,r,new Js(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F6={maxAttempts:5};function da(t,e){if((t=dt(t)).firestore!==e)throw new ee($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U6 extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=HC(n)}get(n){const r=da(n,this._firestore),i=new M6(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return le();const o=s[0];if(o.isFoundDocument())return new Vu(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Vu(this._firestore,i,r._key,null,r.converter);throw le()})}set(n,r,i){const s=da(n,this._firestore),o=JC(s.converter,r,i),a=zC(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=da(n,this._firestore);let a;return a=typeof(r=dt(r))=="string"||r instanceof td?x6(this._dataReader,"Transaction.update",o._key,r,i,s):N6(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=da(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=da(e,this._firestore),r=new od(this._firestore);return super.get(e).then(i=>new E_(this._firestore,r,n._key,i._document,new Js(!1,!1),n.converter))}}function tR(t,e,n){t=ar(t,Ts);const r=Object.assign(Object.assign({},F6),n);return function(s){if(s.maxAttempts<1)throw new ee($.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new Ar;return s.asyncQueue.enqueueAndForget(async()=>{const l=await E6(s);new g6(s.asyncQueue,l,a,o,c).run()}),c.promise}(Jc(t),i=>e(new U6(t,i)),r)}function Fu(){return new y_("serverTimestamp")}(function(e,n=!0){(function(i){Ko=i})(Vi),Rn(new yn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ts(new HU(r.getProvider("auth-internal")),new KU(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new ee($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pc(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Kt($w,"4.1.2",e),Kt($w,"4.1.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR="firebasestorage.googleapis.com",B6="storageBucket",j6=2*60*1e3,H6=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Gn{constructor(e,n,r=0){super(hf(e),`Firebase Storage: ${n} (${hf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Nr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pr||(Pr={}));function hf(t){return"storage/"+t}function z6(){const t="An unknown error occurred, please check the error payload for server response.";return new Nr(Pr.UNKNOWN,t)}function W6(){return new Nr(Pr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function q6(){return new Nr(Pr.CANCELED,"User canceled the upload/download.")}function K6(t){return new Nr(Pr.INVALID_URL,"Invalid URL '"+t+"'.")}function G6(t){return new Nr(Pr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function y0(t){return new Nr(Pr.INVALID_ARGUMENT,t)}function rR(){return new Nr(Pr.APP_DELETED,"The Firebase app was deleted.")}function Q6(t){return new Nr(Pr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rr.makeFromUrl(e,n)}catch{return new rr(e,"")}if(r.path==="")return r;throw G6(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${i}/o${p}`,"i"),y={bucket:1,path:3},v=n===nR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",A=new RegExp(`^https?://${v}/${i}/${I}`,"i"),N=[{regex:a,indices:c,postModify:s},{regex:m,indices:y,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<N.length;P++){const j=N[P],z=j.regex.exec(e);if(z){const ce=z[j.indices.bucket];let ye=z[j.indices.path];ye||(ye=""),r=new rr(ce,ye),j.postModify(r);break}}if(r==null)throw K6(e);return r}}class Y6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J6(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...I){l||(l=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(m,c())},I)}function p(){s&&clearTimeout(s)}function m(I,...A){if(l){p();return}if(I){p(),u.call(null,I,...A);return}if(c()||o){p(),u.call(null,I,...A);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let y=!1;function v(I){y||(y=!0,p(),!l&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function X6(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z6(t){return t!==void 0}function v0(t,e,n,r){if(r<e)throw y0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw y0(`Invalid value for '${t}'. Expected ${n} or less.`)}function ej(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Uu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Uu||(Uu={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tj(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,n,r,i,s,o,a,c,l,u,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Pl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Uu.NO_ERROR,c=s.getStatus();if(!a||tj(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Uu.ABORT;r(!1,new Pl(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Pl(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Z6(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=z6();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?rR():q6();o(c)}else{const c=W6();o(c)}};this.canceled_?n(!1,new Pl(!1,null,!0)):this.backoffId_=J6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&X6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Pl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function rj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ij(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function oj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function aj(t,e,n,r,i,s,o=!0){const a=ej(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return sj(l,e),rj(l,n),ij(l,s),oj(l,r),new nj(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lj(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n){this._service=e,n instanceof rr?this._location=n:this._location=rr.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Bu(e,n)}get root(){const e=new rr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lj(this._location.path)}get storage(){return this._service}get parent(){const e=cj(this._location.path);if(e===null)return null;const n=new rr(this._location.bucket,e);return new Bu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Q6(e)}}function w0(t,e){const n=e==null?void 0:e[B6];return n==null?null:rr.makeFromBucketSpec(n,t)}class uj{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=nR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=j6,this._maxUploadRetryTime=H6,this._requests=new Set,i!=null?this._bucket=rr.makeFromBucketSpec(i,this._host):this._bucket=w0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rr.makeFromBucketSpec(this._url,e):this._bucket=w0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){v0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){v0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Y6(rR());{const o=aj(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const E0="@firebase/storage",b0="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hj="storage";function dj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new uj(n,r,i,e,Vi)}function fj(){Rn(new yn(hj,dj,"PUBLIC").setMultipleInstances(!0)),Kt(E0,b0,""),Kt(E0,b0,"esm2017")}fj();const df=new WeakMap;function iR(t,e){return df.has(e)||df.set(e,t||{f:{},r:{},s:{},u:{}}),df.get(e)}function pj(t,e,n,r){if(!t)return n;const[i,s]=sR(t);if(!i)return n;const o=iR(void 0,r)[i]||{},a=e||s;return a&&a in o?o[a]:n}function mj(t,e,n,r){if(!t)return;const[i,s]=sR(t);if(!i)return;const o=iR(void 0,r)[i],a=e||s;if(a)return n.then(c=>{o[a]=c}).catch(yr),a}function sR(t){return B2(t)||j2(t)?["f",t.path]:H2(t)?["r",t.toString()]:z2(t)?["s",t.toString()]:[]}const ff=new WeakMap;function gj(t,e,n){const r=Pc();ff.has(r)||ff.set(r,new Map);const i=ff.get(r),s=mj(e,n,t,r);return s&&i.set(s,t),s?()=>i.delete(s):yr}const _j={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Hp(t,e,n,r){if(!F2(t))return[t,{}];const i=[{},{}],s=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,p]=u;Object.getOwnPropertyNames(a).forEach(m=>{const y=Object.getOwnPropertyDescriptor(a,m);y&&!y.enumerable&&Object.defineProperty(h,m,y)});for(const m in a){const y=a[m];if(y==null||y instanceof Date||y instanceof wt||y instanceof rd)h[m]=y;else if(Zm(y)){const v=l+m;h[m]=v in n?c[m]:y.path,p[v]=y.converter?y:y.withConverter(r.converter)}else if(Array.isArray(y)){h[m]=Array(y.length);for(let v=0;v<y.length;v++){const I=y[v];I&&I.path in s&&(h[m][v]=s[I.path])}o(y,c[m]||h[m],l+m+".",[h[m],p])}else xs(y)?(h[m]={},o(y,c[m],l+m+".",[h[m],p])):h[m]=y}}return o(t,e,"",i),i}const T_={reset:!1,wait:!0,maxRefDepth:2,converter:_j,snapshotOptions:{serverTimestamps:"estimate"}};function ju(t){for(const e in t)t[e].unsub()}function zp(t,e,n,r,i,s,o,a,c){const[l,u]=Hp(r.data(t.snapshotOptions),Xm(e,n),i,t);s.set(e,n,l),Wp(t,e,n,i,u,s,o,a,c)}function yj({ref:t,target:e,path:n,depth:r,resolve:i,reject:s,ops:o},a){const c=Object.create(null);let l=yr;return a.once?ZC(t).then(u=>{u.exists()?zp(a,e,n,u,c,o,r,i,s):(o.set(e,n,null),i())}).catch(s):l=b_(t,u=>{u.exists()?zp(a,e,n,u,c,o,r,i,s):(o.set(e,n,null),i())},s),()=>{l(),ju(c)}}function Wp(t,e,n,r,i,s,o,a,c){const l=Object.keys(i);if(Object.keys(r).filter(v=>l.indexOf(v)<0).forEach(v=>{r[v].unsub(),delete r[v]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const p=l.length,m=Object.create(null);function y(v){v in m&&++h>=p&&a(n)}l.forEach(v=>{const I=r[v],A=i[v],k=`${n}.${v}`;if(m[k]=!0,I)if(I.path!==A.path)I.unsub();else return;r[v]={data:()=>Xm(e,k),unsub:yj({ref:A,target:e,path:k,depth:o,ops:s,resolve:y.bind(null,k),reject:c},t),path:A.path}})}function vj(t,e,n,r,i,s){const o=Object.assign({},T_,s),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let p=Xe(l?[]:t.value);l||n.set(t,h,[]);const m=r;let y,v=yr;const I=[],A={added:({newIndex:N,doc:P})=>{I.splice(N,0,Object.create(null));const j=I[N],[z,ce]=Hp(P.data(c),void 0,j,o);n.add(gt(p),N,z),Wp(o,p,`${h}.${N}`,j,ce,n,0,r.bind(null,P),i)},modified:({oldIndex:N,newIndex:P,doc:j})=>{const z=gt(p),ce=I[N],ye=z[N],[Ke,Pe]=Hp(j.data(c),ye,ce,o);I.splice(P,0,ce),n.remove(z,N),n.add(z,P,Ke),Wp(o,p,`${h}.${P}`,ce,Pe,n,0,r,i)},removed:({oldIndex:N})=>{const P=gt(p);n.remove(P,N),ju(I.splice(N,1)[0])}};function k(N){const P=N.docChanges(a);if(!y&&P.length){y=!0;let j=0;const z=P.length,ce=Object.create(null);for(let ye=0;ye<z;ye++)ce[P[ye].doc.id]=!0;r=ye=>{ye&&ye.id in ce&&++j>=z&&(l&&(n.set(t,h,gt(p)),p=t),m(gt(p)),r=yr)}}P.forEach(j=>{A[j.type](j)}),P.length||(l&&(n.set(t,h,gt(p)),p=t),r(gt(p)))}return u?$6(e).then(k).catch(i):v=b_(e,k,i),N=>{if(v(),N){const P=typeof N=="function"?N():[];n.set(t,h,P)}I.forEach(ju)}}function wj(t,e,n,r,i,s){const o=Object.assign({},T_,s),a="value",c=Object.create(null);r=W2(r,()=>Xm(t,a));let l=yr;function u(h){h.exists()?zp(o,t,a,h,c,n,0,r,i):(n.set(t,a,null),r(null))}return o.once?ZC(e).then(u).catch(i):l=b_(e,u,i),h=>{if(l(),h){const p=typeof h=="function"?h():null;n.set(t,a,p)}ju(c)}}const T0=Symbol();function oR(t,e){let n=yr;const r=Object.assign({},T_,e),i=gt(t),s=r.target||Xe();K2()&&(r.once=!0);const o=pj(i,r.ssrKey,T0,Pc()),a=o!==T0;a&&(s.value=o);let c=!a;const l=Xe(!1),u=Xe(),h=DE(),p=yE();let m=yr;function y(){let A=gt(t);const k=new Promise((N,P)=>{if(n(r.reset),!A)return n=yr,N(null);l.value=c,c=!0,A.converter||(A=A.withConverter(r.converter)),n=(Zm(A)?wj:vj)(s,A,Ej,N,P,r)}).catch(N=>(h.value===k&&(u.value=N),Promise.reject(N))).finally(()=>{h.value===k&&(l.value=!1)});h.value=k}let v=yr;Vt(t)&&(v=Qr(t,y)),y(),i&&(m=gj(h.value,i,r.ssrKey)),ab()&&KE(()=>h.value),p&&sk(I);function I(A=r.reset){v(),m(),n(A)}return Object.defineProperties(s,{error:{get:()=>u},data:{get:()=>s},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>I}})}const Ej={set:(t,e,n)=>$2(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function dW(t,e){return oR(t,{target:Xe([]),...e})}function I_(t,e){return oR(t,e)}function bj(t){return(e,n)=>{const r=G2(e,n).run(()=>Xe(t));AT.set(e,r),Y2(r,e)}}function fW(t){return L2?ET(Pc(t)):null}function Tj(t,{firebaseApp:e,modules:n=[]}){t.provide(IT,e);for(const r of n)r(e,t)}const Ij=Kn({__name:"App",setup(t){const e=bh(),n=AO(),r=CO();return Qr(e,async(i,s)=>{if(!i&&s&&r.meta.requiresAuth)return n.push({name:"login"});if(i&&typeof r.query.redirect=="string")return n.push(r.query.redirect)}),(i,s)=>(Je(),ho(gt(Eb)))}}),Aj="modulepreload",Cj=function(t){return"/"+t},I0={},A0=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Cj(s),s in I0)return;I0[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Aj,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var Rj=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},aR={},Fn={};let A_;const Sj=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Fn.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Fn.getSymbolTotalCodewords=function(e){return Sj[e]};Fn.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};Fn.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');A_=e};Fn.isKanjiModeEnabled=function(){return typeof A_<"u"};Fn.toSJIS=function(e){return A_(e)};var ad={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(ad);function cR(){this.buffer=[],this.length=0}cR.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var Pj=cR;function Xc(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}Xc.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};Xc.prototype.get=function(t,e){return this.data[t*this.size+e]};Xc.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};Xc.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var kj=Xc,lR={};(function(t){const e=Fn.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,s=e(r),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],s=t.getRowColCoords(r),o=s.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([s[a],s[c]]);return i}})(lR);var uR={};const Nj=Fn.getSymbolSize,C0=7;uR.getPositions=function(e){const n=Nj(e);return[[0,0],[n-C0,0],[0,n-C0]]};var hR={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,c=0,l=null,u=null;for(let h=0;h<s;h++){a=c=0,l=u=null;for(let p=0;p<s;p++){let m=i.get(h,p);m===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=m,a=1),m=i.get(p,h),m===u?c++:(c>=5&&(o+=e.N1+(c-5)),u=m,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},t.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let c=0;c<s-1;c++){const l=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},t.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,c=0;for(let l=0;l<s;l++){a=c=0;for(let u=0;u<s;u++)a=a<<1&2047|i.get(l,u),u>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&o++}return o*e.N3},t.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let c=0;c<o;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function n(r,i,s){switch(r){case t.Patterns.PATTERN000:return(i+s)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return s%3===0;case t.Patterns.PATTERN011:return(i+s)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case t.Patterns.PATTERN101:return i*s%2+i*s%3===0;case t.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case t.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)s.isReserved(c,a)||s.xor(c,a,n(i,c,a))},t.getBestMask=function(i,s){const o=Object.keys(t.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){s(l),t.applyMask(l,i);const u=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(l,i),u<c&&(c=u,a=l)}return a}})(hR);var cd={};const wi=ad,kl=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Nl=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];cd.getBlocksCount=function(e,n){switch(n){case wi.L:return kl[(e-1)*4+0];case wi.M:return kl[(e-1)*4+1];case wi.Q:return kl[(e-1)*4+2];case wi.H:return kl[(e-1)*4+3];default:return}};cd.getTotalCodewordsCount=function(e,n){switch(n){case wi.L:return Nl[(e-1)*4+0];case wi.M:return Nl[(e-1)*4+1];case wi.Q:return Nl[(e-1)*4+2];case wi.H:return Nl[(e-1)*4+3];default:return}};var dR={},ld={};const Ba=new Uint8Array(512),Hu=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)Ba[n]=e,Hu[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)Ba[n]=Ba[n-255]})();ld.log=function(e){if(e<1)throw new Error("log("+e+")");return Hu[e]};ld.exp=function(e){return Ba[e]};ld.mul=function(e,n){return e===0||n===0?0:Ba[Hu[e]+Hu[n]]};(function(t){const e=ld;t.mul=function(r,i){const s=new Uint8Array(r.length+i.length-1);for(let o=0;o<r.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=e.mul(r[o],i[a]);return s},t.mod=function(r,i){let s=new Uint8Array(r);for(;s.length-i.length>=0;){const o=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let s=0;s<r;s++)i=t.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(dR);const fR=dR;function C_(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}C_.prototype.initialize=function(e){this.degree=e,this.genPoly=fR.generateECPolynomial(this.degree)};C_.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=fR.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(r,i),s}return r};var xj=C_,pR={},Hi={},R_={};R_.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var xr={};const mR="[0-9]+",Oj="[A-Z $%*+\\-./:]+";let wc="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";wc=wc.replace(/u/g,"\\u");const Dj="(?:(?![A-Z0-9 $%*+\\-./:]|"+wc+`)(?:.|[\r
]))+`;xr.KANJI=new RegExp(wc,"g");xr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");xr.BYTE=new RegExp(Dj,"g");xr.NUMERIC=new RegExp(mR,"g");xr.ALPHANUMERIC=new RegExp(Oj,"g");const Mj=new RegExp("^"+wc+"$"),Lj=new RegExp("^"+mR+"$"),$j=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");xr.testKanji=function(e){return Mj.test(e)};xr.testNumeric=function(e){return Lj.test(e)};xr.testAlphanumeric=function(e){return $j.test(e)};(function(t){const e=R_,n=xr;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},t.getBestModeForData=function(s){return n.testNumeric(s)?t.NUMERIC:n.testAlphanumeric(s)?t.ALPHANUMERIC:n.testKanji(s)?t.KANJI:t.BYTE},t.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},t.isValid=function(s){return s&&s.bit&&s.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(s,o){if(t.isValid(s))return s;try{return r(s)}catch{return o}}})(Hi);(function(t){const e=Fn,n=cd,r=ad,i=Hi,s=R_,o=7973,a=e.getBCHDigit(o);function c(p,m,y){for(let v=1;v<=40;v++)if(m<=t.getCapacity(v,y,p))return v}function l(p,m){return i.getCharCountIndicator(p,m)+4}function u(p,m){let y=0;return p.forEach(function(v){const I=l(v.mode,m);y+=I+v.getBitsLength()}),y}function h(p,m){for(let y=1;y<=40;y++)if(u(p,y)<=t.getCapacity(y,m,i.MIXED))return y}t.from=function(m,y){return s.isValid(m)?parseInt(m,10):y},t.getCapacity=function(m,y,v){if(!s.isValid(m))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=i.BYTE);const I=e.getSymbolTotalCodewords(m),A=n.getTotalCodewordsCount(m,y),k=(I-A)*8;if(v===i.MIXED)return k;const N=k-l(v,m);switch(v){case i.NUMERIC:return Math.floor(N/10*3);case i.ALPHANUMERIC:return Math.floor(N/11*2);case i.KANJI:return Math.floor(N/13);case i.BYTE:default:return Math.floor(N/8)}},t.getBestVersionForData=function(m,y){let v;const I=r.from(y,r.M);if(Array.isArray(m)){if(m.length>1)return h(m,I);if(m.length===0)return 1;v=m[0]}else v=m;return c(v.mode,v.getLength(),I)},t.getEncodedBits=function(m){if(!s.isValid(m)||m<7)throw new Error("Invalid QR Code version");let y=m<<12;for(;e.getBCHDigit(y)-a>=0;)y^=o<<e.getBCHDigit(y)-a;return m<<12|y}})(pR);var gR={};const qp=Fn,_R=1335,Vj=21522,R0=qp.getBCHDigit(_R);gR.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;qp.getBCHDigit(i)-R0>=0;)i^=_R<<qp.getBCHDigit(i)-R0;return(r<<10|i)^Vj};var yR={};const Fj=Hi;function So(t){this.mode=Fj.NUMERIC,this.data=t.toString()}So.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};So.prototype.getLength=function(){return this.data.length};So.prototype.getBitsLength=function(){return So.getBitsLength(this.data.length)};So.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const s=this.data.length-n;s>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,s*3+1))};var Uj=So;const Bj=Hi,pf=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Po(t){this.mode=Bj.ALPHANUMERIC,this.data=t}Po.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Po.prototype.getLength=function(){return this.data.length};Po.prototype.getBitsLength=function(){return Po.getBitsLength(this.data.length)};Po.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=pf.indexOf(this.data[n])*45;r+=pf.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(pf.indexOf(this.data[n]),6)};var jj=Po,Hj=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var s=e.charCodeAt(i);if(s>=55296&&s<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(s=(s-55296)*1024+o-56320+65536,i+=1)}if(s<128){n.push(s);continue}if(s<2048){n.push(s>>6|192),n.push(s&63|128);continue}if(s<55296||s>=57344&&s<65536){n.push(s>>12|224),n.push(s>>6&63|128),n.push(s&63|128);continue}if(s>=65536&&s<=1114111){n.push(s>>18|240),n.push(s>>12&63|128),n.push(s>>6&63|128),n.push(s&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const zj=Hj,Wj=Hi;function ko(t){this.mode=Wj.BYTE,typeof t=="string"&&(t=zj(t)),this.data=new Uint8Array(t)}ko.getBitsLength=function(e){return e*8};ko.prototype.getLength=function(){return this.data.length};ko.prototype.getBitsLength=function(){return ko.getBitsLength(this.data.length)};ko.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var qj=ko;const Kj=Hi,Gj=Fn;function No(t){this.mode=Kj.KANJI,this.data=t}No.getBitsLength=function(e){return e*13};No.prototype.getLength=function(){return this.data.length};No.prototype.getBitsLength=function(){return No.getBitsLength(this.data.length)};No.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=Gj.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var Qj=No,vR={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var s={},o={};o[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var c,l,u,h,p,m,y,v,I;!a.empty();){c=a.pop(),l=c.value,h=c.cost,p=n[l]||{};for(u in p)p.hasOwnProperty(u)&&(m=p[u],y=h+m,v=o[u],I=typeof o[u]>"u",(I||v>y)&&(o[u]=y,a.push(u,y),s[u]=l))}if(typeof i<"u"&&typeof o[i]>"u"){var A=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(A)}return s},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],s=r;s;)i.push(s),n[s],s=n[s];return i.reverse(),i},find_path:function(n,r,i){var s=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},s;n=n||{};for(s in r)r.hasOwnProperty(s)&&(i[s]=r[s]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(vR);var Yj=vR.exports;(function(t){const e=Hi,n=Uj,r=jj,i=qj,s=Qj,o=xr,a=Fn,c=Yj;function l(A){return unescape(encodeURIComponent(A)).length}function u(A,k,N){const P=[];let j;for(;(j=A.exec(N))!==null;)P.push({data:j[0],index:j.index,mode:k,length:j[0].length});return P}function h(A){const k=u(o.NUMERIC,e.NUMERIC,A),N=u(o.ALPHANUMERIC,e.ALPHANUMERIC,A);let P,j;return a.isKanjiModeEnabled()?(P=u(o.BYTE,e.BYTE,A),j=u(o.KANJI,e.KANJI,A)):(P=u(o.BYTE_KANJI,e.BYTE,A),j=[]),k.concat(N,P,j).sort(function(ce,ye){return ce.index-ye.index}).map(function(ce){return{data:ce.data,mode:ce.mode,length:ce.length}})}function p(A,k){switch(k){case e.NUMERIC:return n.getBitsLength(A);case e.ALPHANUMERIC:return r.getBitsLength(A);case e.KANJI:return s.getBitsLength(A);case e.BYTE:return i.getBitsLength(A)}}function m(A){return A.reduce(function(k,N){const P=k.length-1>=0?k[k.length-1]:null;return P&&P.mode===N.mode?(k[k.length-1].data+=N.data,k):(k.push(N),k)},[])}function y(A){const k=[];for(let N=0;N<A.length;N++){const P=A[N];switch(P.mode){case e.NUMERIC:k.push([P,{data:P.data,mode:e.ALPHANUMERIC,length:P.length},{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.ALPHANUMERIC:k.push([P,{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.KANJI:k.push([P,{data:P.data,mode:e.BYTE,length:l(P.data)}]);break;case e.BYTE:k.push([{data:P.data,mode:e.BYTE,length:l(P.data)}])}}return k}function v(A,k){const N={},P={start:{}};let j=["start"];for(let z=0;z<A.length;z++){const ce=A[z],ye=[];for(let Ke=0;Ke<ce.length;Ke++){const Pe=ce[Ke],pt=""+z+Ke;ye.push(pt),N[pt]={node:Pe,lastCount:0},P[pt]={};for(let jt=0;jt<j.length;jt++){const Ze=j[jt];N[Ze]&&N[Ze].node.mode===Pe.mode?(P[Ze][pt]=p(N[Ze].lastCount+Pe.length,Pe.mode)-p(N[Ze].lastCount,Pe.mode),N[Ze].lastCount+=Pe.length):(N[Ze]&&(N[Ze].lastCount=Pe.length),P[Ze][pt]=p(Pe.length,Pe.mode)+4+e.getCharCountIndicator(Pe.mode,k))}}j=ye}for(let z=0;z<j.length;z++)P[j[z]].end=0;return{map:P,table:N}}function I(A,k){let N;const P=e.getBestModeForData(A);if(N=e.from(k,P),N!==e.BYTE&&N.bit<P.bit)throw new Error('"'+A+'" cannot be encoded with mode '+e.toString(N)+`.
 Suggested mode is: `+e.toString(P));switch(N===e.KANJI&&!a.isKanjiModeEnabled()&&(N=e.BYTE),N){case e.NUMERIC:return new n(A);case e.ALPHANUMERIC:return new r(A);case e.KANJI:return new s(A);case e.BYTE:return new i(A)}}t.fromArray=function(k){return k.reduce(function(N,P){return typeof P=="string"?N.push(I(P,null)):P.data&&N.push(I(P.data,P.mode)),N},[])},t.fromString=function(k,N){const P=h(k,a.isKanjiModeEnabled()),j=y(P),z=v(j,N),ce=c.find_path(z.map,"start","end"),ye=[];for(let Ke=1;Ke<ce.length-1;Ke++)ye.push(z.table[ce[Ke]].node);return t.fromArray(m(ye))},t.rawSplit=function(k){return t.fromArray(h(k,a.isKanjiModeEnabled()))}})(yR);const ud=Fn,mf=ad,Jj=Pj,Xj=kj,Zj=lR,e9=uR,Kp=hR,Gp=cd,t9=xj,zu=pR,n9=gR,r9=Hi,gf=yR;function i9(t,e){const n=t.size,r=e9.getPositions(e);for(let i=0;i<r.length;i++){const s=r[i][0],o=r[i][1];for(let a=-1;a<=7;a++)if(!(s+a<=-1||n<=s+a))for(let c=-1;c<=7;c++)o+c<=-1||n<=o+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(s+a,o+c,!0,!0):t.set(s+a,o+c,!1,!0))}}function s9(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function o9(t,e){const n=Zj.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],s=n[r][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?t.set(i+o,s+a,!0,!0):t.set(i+o,s+a,!1,!0)}}function a9(t,e){const n=t.size,r=zu.getEncodedBits(e);let i,s,o;for(let a=0;a<18;a++)i=Math.floor(a/3),s=a%3+n-8-3,o=(r>>a&1)===1,t.set(i,s,o,!0),t.set(s,i,o,!0)}function _f(t,e,n){const r=t.size,i=n9.getEncodedBits(e,n);let s,o;for(s=0;s<15;s++)o=(i>>s&1)===1,s<6?t.set(s,8,o,!0):s<8?t.set(s+1,8,o,!0):t.set(r-15+s,8,o,!0),s<8?t.set(8,r-s-1,o,!0):s<9?t.set(8,15-s-1+1,o,!0):t.set(8,15-s-1,o,!0);t.set(r-8,8,1,!0)}function c9(t,e){const n=t.size;let r=-1,i=n-1,s=7,o=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(i,a-c)){let l=!1;o<e.length&&(l=(e[o]>>>s&1)===1),t.set(i,a-c,l),s--,s===-1&&(o++,s=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function l9(t,e,n){const r=new Jj;n.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),r9.getCharCountIndicator(c.mode,t)),c.write(r)});const i=ud.getSymbolTotalCodewords(t),s=Gp.getTotalCodewordsCount(t,e),o=(i-s)*8;for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(o-r.getLengthInBits())/8;for(let c=0;c<a;c++)r.put(c%2?17:236,8);return u9(r,t,e)}function u9(t,e,n){const r=ud.getSymbolTotalCodewords(e),i=Gp.getTotalCodewordsCount(e,n),s=r-i,o=Gp.getBlocksCount(e,n),a=r%o,c=o-a,l=Math.floor(r/o),u=Math.floor(s/o),h=u+1,p=l-u,m=new t9(p);let y=0;const v=new Array(o),I=new Array(o);let A=0;const k=new Uint8Array(t.buffer);for(let ce=0;ce<o;ce++){const ye=ce<c?u:h;v[ce]=k.slice(y,y+ye),I[ce]=m.encode(v[ce]),y+=ye,A=Math.max(A,ye)}const N=new Uint8Array(r);let P=0,j,z;for(j=0;j<A;j++)for(z=0;z<o;z++)j<v[z].length&&(N[P++]=v[z][j]);for(j=0;j<p;j++)for(z=0;z<o;z++)N[P++]=I[z][j];return N}function h9(t,e,n,r){let i;if(Array.isArray(t))i=gf.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const u=gf.rawSplit(t);l=zu.getBestVersionForData(u,n)}i=gf.fromString(t,l||40)}else throw new Error("Invalid data");const s=zu.getBestVersionForData(i,n);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const o=l9(e,n,i),a=ud.getSymbolSize(e),c=new Xj(a);return i9(c,e),s9(c),o9(c,e),_f(c,n,0),e>=7&&a9(c,e),c9(c,o),isNaN(r)&&(r=Kp.getBestMask(c,_f.bind(null,c,n))),Kp.applyMask(r,c),_f(c,n,r),{modules:c,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}aR.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=mf.M,i,s;return typeof n<"u"&&(r=mf.from(n.errorCorrectionLevel,mf.M),i=zu.from(n.version),s=Kp.from(n.maskPattern),n.toSJISFunc&&ud.setToSJISFunction(n.toSJISFunc)),h9(e,i,r,s)};var wR={},S_={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(s){return[s,s]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,s=r.width&&r.width>=21?r.width:void 0,o=r.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const s=t.getScale(r,i);return Math.floor((r+i.margin*2)*s)},t.qrToImageData=function(r,i,s){const o=i.modules.size,a=i.modules.data,c=t.getScale(o,s),l=Math.floor((o+s.margin*2)*c),u=s.margin*c,h=[s.color.light,s.color.dark];for(let p=0;p<l;p++)for(let m=0;m<l;m++){let y=(p*l+m)*4,v=s.color.light;if(p>=u&&m>=u&&p<l-u&&m<l-u){const I=Math.floor((p-u)/c),A=Math.floor((m-u)/c);v=h[a[I*o+A]?1:0]}r[y++]=v.r,r[y++]=v.g,r[y++]=v.b,r[y]=v.a}}})(S_);(function(t){const e=S_;function n(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(s,o,a){let c=a,l=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=r()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),h=l.getContext("2d"),p=h.createImageData(u,u);return e.qrToImageData(p.data,s,c),n(h,l,u),h.putImageData(p,0,0),l},t.renderToDataURL=function(s,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=t.render(s,o,c),u=c.type||"image/png",h=c.rendererOpts||{};return l.toDataURL(u,h.quality)}})(wR);var ER={};const d9=S_;function S0(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function yf(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function f9(t,e,n){let r="",i=0,s=!1,o=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!s&&(s=!0),t[a]?(o++,a>0&&c>0&&t[a-1]||(r+=s?yf("M",c+n,.5+l+n):yf("m",i,0),i=0,s=!1),c+1<e&&t[a+1]||(r+=yf("h",o),o=0)):i++}return r}ER.render=function(e,n,r){const i=d9.getOptions(n),s=e.modules.size,o=e.modules.data,a=s+i.margin*2,c=i.color.light.a?"<path "+S0(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+S0(i.color.dark,"stroke")+' d="'+f9(o,s,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,p),p};const p9=Rj,Qp=aR,bR=wR,m9=ER;function P_(t,e,n,r,i){const s=[].slice.call(arguments,1),o=s.length,a=typeof s[o-1]=="function";if(!a&&!p9())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(i=n,n=e,e=r=void 0):o===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(n=e,e=r=void 0):o===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(c,l){try{const u=Qp.create(n,r);c(t(u,e,r))}catch(u){l(u)}})}try{const c=Qp.create(n,r);i(null,t(c,e,r))}catch(c){i(c)}}Qp.create;var g9=P_.bind(null,bR.render);P_.bind(null,bR.renderToDataURL);P_.bind(null,function(t,e,n){return m9.render(t,n)});const _9={class:"qrcode"},y9=Kn({__name:"QrCode",props:{codeString:{}},setup(t){const e=t,n=Xe(null);return Nm(()=>{g9(n.value,e.codeString,{color:{dark:getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-on-background"),light:getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-background")},scale:10})}),(r,i)=>(Je(),vt("div",_9,[Ye("canvas",{ref_key:"canvas",ref:n},null,512)]))}});const TR=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},v9=TR(y9,[["__scopeId","data-v-8d05d72b"]]),w9=(t,e)=>e.some(n=>t instanceof n);let P0,k0;function E9(){return P0||(P0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b9(){return k0||(k0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const IR=new WeakMap,Yp=new WeakMap,AR=new WeakMap,vf=new WeakMap,k_=new WeakMap;function T9(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Si(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&IR.set(n,t)}).catch(()=>{}),k_.set(e,t),e}function I9(t){if(Yp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yp.set(t,e)}let Jp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||AR.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Si(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function A9(t){Jp=t(Jp)}function C9(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wf(this),e,...n);return AR.set(r,e.sort?e.sort():[e]),Si(r)}:b9().includes(t)?function(...e){return t.apply(wf(this),e),Si(IR.get(this))}:function(...e){return Si(t.apply(wf(this),e))}}function R9(t){return typeof t=="function"?C9(t):(t instanceof IDBTransaction&&I9(t),w9(t,E9())?new Proxy(t,Jp):t)}function Si(t){if(t instanceof IDBRequest)return T9(t);if(vf.has(t))return vf.get(t);const e=R9(t);return e!==t&&(vf.set(t,e),k_.set(e,t)),e}const wf=t=>k_.get(t);function S9(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Si(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Si(o.result),c.oldVersion,c.newVersion,Si(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const P9=["get","getKey","getAll","getAllKeys","count"],k9=["put","add","delete","clear"],Ef=new Map;function N0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ef.get(e))return Ef.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=k9.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||P9.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Ef.set(e,s),s}A9(t=>({...t,get:(e,n,r)=>N0(e,n)||t.get(e,n,r),has:(e,n)=>!!N0(e,n)||t.has(e,n)}));const CR="@firebase/installations",N_="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=1e4,SR=`w:${N_}`,PR="FIS_v2",N9="https://firebaseinstallations.googleapis.com/v1",x9=60*60*1e3,O9="installations",D9="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M9={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},As=new $i(O9,D9,M9);function kR(t){return t instanceof Gn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR({projectId:t}){return`${N9}/projects/${t}/installations`}function xR(t){return{token:t.token,requestStatus:2,expiresIn:$9(t.expiresIn),creationTime:Date.now()}}async function OR(t,e){const r=(await e.json()).error;return As.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function DR({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function L9(t,{refreshToken:e}){const n=DR(t);return n.append("Authorization",V9(e)),n}async function MR(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $9(t){return Number(t.replace("s","000"))}function V9(t){return`${PR} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F9({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=NR(t),i=DR(t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:PR,appId:t.appId,sdkVersion:SR},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await MR(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:xR(l.authToken)}}else throw await OR("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U9(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B9=/^[cdef][\w-]{21}$/,Xp="";function j9(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=H9(t);return B9.test(n)?n:Xp}catch{return Xp}}function H9(t){return U9(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new Map;function VR(t,e){const n=hd(t);FR(n,e),z9(n,e)}function FR(t,e){const n=$R.get(t);if(n)for(const r of n)r(e)}function z9(t,e){const n=W9();n&&n.postMessage({key:t,fid:e}),q9()}let os=null;function W9(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=t=>{FR(t.data.key,t.data.fid)}),os}function q9(){$R.size===0&&os&&(os.close(),os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K9="firebase-installations-database",G9=1,Cs="firebase-installations-store";let bf=null;function x_(){return bf||(bf=S9(K9,G9,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cs)}}})),bf}async function Wu(t,e){const n=hd(t),i=(await x_()).transaction(Cs,"readwrite"),s=i.objectStore(Cs),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&VR(t,e.fid),e}async function UR(t){const e=hd(t),r=(await x_()).transaction(Cs,"readwrite");await r.objectStore(Cs).delete(e),await r.done}async function dd(t,e){const n=hd(t),i=(await x_()).transaction(Cs,"readwrite"),s=i.objectStore(Cs),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&VR(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(t){let e;const n=await dd(t.appConfig,r=>{const i=Q9(r),s=Y9(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Xp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Q9(t){const e=t||{fid:j9(),registrationStatus:0};return BR(e)}function Y9(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(As.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=J9(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:X9(t)}:{installationEntry:e}}async function J9(t,e){try{const n=await F9(t,e);return Wu(t.appConfig,n)}catch(n){throw kR(n)&&n.customData.serverCode===409?await UR(t.appConfig):await Wu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function X9(t){let e=await x0(t.appConfig);for(;e.registrationStatus===1;)await LR(100),e=await x0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await O_(t);return r||n}return e}function x0(t){return dd(t,e=>{if(!e)throw As.create("installation-not-found");return BR(e)})}function BR(t){return Z9(t)?{fid:t.fid,registrationStatus:0}:t}function Z9(t){return t.registrationStatus===1&&t.registrationTime+RR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e5({appConfig:t,heartbeatServiceProvider:e},n){const r=t5(t,n),i=L9(t,n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:SR,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await MR(()=>fetch(r,a));if(c.ok){const l=await c.json();return xR(l)}else throw await OR("Generate Auth Token",c)}function t5(t,{fid:e}){return`${NR(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(t,e=!1){let n;const r=await dd(t.appConfig,s=>{if(!jR(s))throw As.create("not-registered");const o=s.authToken;if(!e&&i5(o))return s;if(o.requestStatus===1)return n=n5(t,e),s;{if(!navigator.onLine)throw As.create("app-offline");const a=o5(s);return n=r5(t,a),a}});return n?await n:r.authToken}async function n5(t,e){let n=await O0(t.appConfig);for(;n.authToken.requestStatus===1;)await LR(100),n=await O0(t.appConfig);const r=n.authToken;return r.requestStatus===0?D_(t,e):r}function O0(t){return dd(t,e=>{if(!jR(e))throw As.create("not-registered");const n=e.authToken;return a5(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function r5(t,e){try{const n=await e5(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Wu(t.appConfig,r),n}catch(n){if(kR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await UR(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Wu(t.appConfig,r)}throw n}}function jR(t){return t!==void 0&&t.registrationStatus===2}function i5(t){return t.requestStatus===2&&!s5(t)}function s5(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+x9}function o5(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function a5(t){return t.requestStatus===1&&t.requestTime+RR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c5(t){const e=t,{installationEntry:n,registrationPromise:r}=await O_(e);return r?r.catch(console.error):D_(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l5(t,e=!1){const n=t;return await u5(n),(await D_(n,e)).token}async function u5(t){const{registrationPromise:e}=await O_(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h5(t){if(!t||!t.options)throw Tf("App Configuration");if(!t.name)throw Tf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Tf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Tf(t){return As.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="installations",d5="installations-internal",f5=t=>{const e=t.getProvider("app").getImmediate(),n=h5(e),r=ks(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},p5=t=>{const e=t.getProvider("app").getImmediate(),n=ks(e,HR).getImmediate();return{getId:()=>c5(n),getToken:i=>l5(n,i)}};function m5(){Rn(new yn(HR,f5,"PUBLIC")),Rn(new yn(d5,p5,"PRIVATE"))}m5();Kt(CR,N_);Kt(CR,N_,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="analytics",g5="firebase_id",_5="origin",y5=60*1e3,v5="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",M_="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Uo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w5={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$n=new $i("analytics","Analytics",w5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E5(t){if(!t.startsWith(M_)){const e=$n.create("invalid-gtag-resource",{gtagURL:t});return An.warn(e.message),""}return t}function zR(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function b5(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function T5(t,e){const n=b5("firebase-js-sdk-policy",{createScriptURL:E5}),r=document.createElement("script"),i=`${M_}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function I5(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function A5(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await zR(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){An.error(a)}t("config",i,s)}async function C5(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await zR(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){An.error(s)}}function R5(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await C5(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await A5(t,e,n,r,a,c)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){An.error(a)}}return i}function S5(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=R5(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function P5(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(M_)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k5=30,N5=1e3;class x5{constructor(e={},n=N5){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const WR=new x5;function O5(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function D5(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:O5(r)},s=v5.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw $n.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function M5(t,e=WR,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw $n.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw $n.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new V5;return setTimeout(async()=>{a.abort()},n!==void 0?n:y5),qR({appId:r,apiKey:i,measurementId:s},o,a,e)}async function qR(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=WR){var s;const{appId:o,measurementId:a}=t;try{await L5(r,e)}catch(c){if(a)return An.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await D5(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!$5(l)){if(i.deleteThrottleMetadata(o),a)return An.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?fv(n,i.intervalMillis,k5):fv(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),An.debug(`Calling attemptFetch again in ${u} millis`),qR(t,h,r,i)}}function L5(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r($n.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $5(t){if(!(t instanceof Gn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class V5{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function F5(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U5(){if(Um())try{await xb()}catch(t){return An.warn($n.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return An.warn($n.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function B5(t,e,n,r,i,s,o){var a;const c=M5(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&An.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>An.error(m)),e.push(c);const l=U5().then(m=>{if(m)return r.getId()}),[u,h]=await Promise.all([c,l]);P5(s)||T5(s,u.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[_5]="firebase",p.update=!0,h!=null&&(p[g5]=h),i("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j5{constructor(e){this.app=e}_delete(){return delete ja[this.app.options.appId],Promise.resolve()}}let ja={},D0=[];const M0={};let If="dataLayer",H5="gtag",L0,KR,$0=!1;function z5(){const t=[];if(Pb()&&t.push("This is a browser extension environment."),VO()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=$n.create("invalid-analytics-context",{errorInfo:e});An.warn(n.message)}}function W5(t,e,n){z5();const r=t.options.appId;if(!r)throw $n.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)An.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $n.create("no-api-key");if(ja[r]!=null)throw $n.create("already-exists",{id:r});if(!$0){I5(If);const{wrappedGtag:s,gtagCore:o}=S5(ja,D0,M0,If,H5);KR=s,L0=o,$0=!0}return ja[r]=B5(t,D0,M0,e,L0,If,n),new j5(t)}function q5(t=_h()){t=dt(t);const e=ks(t,qu);return e.isInitialized()?e.getImmediate():K5(t)}function K5(t,e={}){const n=ks(t,qu);if(n.isInitialized()){const i=n.getImmediate();if(Xa(e,n.getOptions()))return i;throw $n.create("already-initialized")}return n.initialize({options:e})}function G5(t,e,n,r){t=dt(t),F5(KR,ja[t.app.options.appId],e,n,r).catch(i=>An.error(i))}const V0="@firebase/analytics",F0="0.10.0";function Q5(){Rn(new yn(qu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return W5(r,i,n)},"PUBLIC")),Rn(new yn("analytics-internal",t,"PRIVATE")),Kt(V0,F0),Kt(V0,F0,"esm2017");function t(e){try{const n=e.getProvider(qu).getImmediate();return{logEvent:(r,i,s)=>G5(n,r,i,s)}}catch(n){throw $n.create("interop-component-reg-failed",{reason:n})}}}Q5();const Y5={apiKey:"AIzaSyBBi5IzyoAfCGZPdIjY_Unn13awXzMY3QQ",authDomain:"presenzapp.firebaseapp.com",projectId:"presenzapp",storageBucket:"presenzapp.appspot.com",messagingSenderId:"121965141290",appId:"1:121965141290:web:5bda310c5531b4849b9253",measurementId:"G-X4JEPSW9DH"},L_=Lb(Y5),er=R6(L_);q5(L_);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hr=t=>e=>typeof e=="function"?((n,r)=>(customElements.define(n,r),r))(t,e):((n,r)=>{const{kind:i,elements:s}=r;return{kind:i,elements:s,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J5=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},X5=(t,e,n)=>{e.constructor.createProperty(n,t)};function Te(t){return(e,n)=>n!==void 0?X5(t,e,n):J5(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zi(t){return Te({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const GR=({finisher:t,descriptor:e})=>(n,r)=>{var i;if(r===void 0){const s=(i=n.originalKey)!==null&&i!==void 0?i:n.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(n.key)}:{...n,key:s};return t!=null&&(o.finisher=function(a){t(a,s)}),o}{const s=n.constructor;e!==void 0&&Object.defineProperty(n,r,e(r)),t==null||t(s,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qn(t,e){return GR({descriptor:n=>{const r={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const i=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var s,o;return this[i]===void 0&&(this[i]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&o!==void 0?o:null),this[i]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Af;const Z5=((Af=window.HTMLSlotElement)===null||Af===void 0?void 0:Af.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function e3(t){const{slot:e,selector:n}=t??{};return GR({descriptor:r=>({get(){var i;const s="slot"+(e?`[name=${e}]`:":not([name])"),o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(s),a=o!=null?Z5(o,t):[];return n?a.filter(c=>c.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wl=window,$_=Wl.ShadowRoot&&(Wl.ShadyCSS===void 0||Wl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V_=Symbol(),U0=new WeakMap;let QR=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==V_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if($_&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=U0.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&U0.set(n,e))}return e}toString(){return this.cssText}};const t3=t=>new QR(typeof t=="string"?t:t+"",void 0,V_),En=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new QR(n,t,V_)},n3=(t,e)=>{$_?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),i=Wl.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},B0=$_?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return t3(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Cf;const Ku=window,j0=Ku.trustedTypes,r3=j0?j0.emptyScript:"",H0=Ku.reactiveElementPolyfillSupport,Zp={toAttribute(t,e){switch(e){case Boolean:t=t?r3:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},YR=(t,e)=>e!==t&&(e==e||t==t),Rf={attribute:!0,type:String,converter:Zp,reflect:!1,hasChanged:YR},em="finalized";let Ks=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=Rf){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){const s=this[e];this[n]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Rf}static finalize(){if(this.hasOwnProperty(em))return!1;this[em]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(B0(i))}else e!==void 0&&n.push(B0(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return n3(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Rf){var i;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Zp).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,n){var r;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Zp;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||YR)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ks[em]=!0,Ks.elementProperties=new Map,Ks.elementStyles=[],Ks.shadowRootOptions={mode:"open"},H0==null||H0({ReactiveElement:Ks}),((Cf=Ku.reactiveElementVersions)!==null&&Cf!==void 0?Cf:Ku.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sf;const Gu=window,xo=Gu.trustedTypes,z0=xo?xo.createPolicy("lit-html",{createHTML:t=>t}):void 0,tm="$lit$",_i=`lit$${(Math.random()+"").slice(9)}$`,JR="?"+_i,i3=`<${JR}>`,Rs=document,Ec=()=>Rs.createComment(""),bc=t=>t===null||typeof t!="object"&&typeof t!="function",XR=Array.isArray,s3=t=>XR(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Pf=`[ 	
\f\r]`,fa=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W0=/-->/g,q0=/>/g,Qi=RegExp(`>|${Pf}(?:([^\\s"'>=/]+)(${Pf}*=${Pf}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),K0=/'/g,G0=/"/g,ZR=/^(?:script|style|textarea|title)$/i,o3=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),it=o3(1),Ss=Symbol.for("lit-noChange"),_e=Symbol.for("lit-nothing"),Q0=new WeakMap,as=Rs.createTreeWalker(Rs,129,null,!1);function eS(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return z0!==void 0?z0.createHTML(e):e}const a3=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=fa;for(let a=0;a<n;a++){const c=t[a];let l,u,h=-1,p=0;for(;p<c.length&&(o.lastIndex=p,u=o.exec(c),u!==null);)p=o.lastIndex,o===fa?u[1]==="!--"?o=W0:u[1]!==void 0?o=q0:u[2]!==void 0?(ZR.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=Qi):u[3]!==void 0&&(o=Qi):o===Qi?u[0]===">"?(o=i??fa,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?Qi:u[3]==='"'?G0:K0):o===G0||o===K0?o=Qi:o===W0||o===q0?o=fa:(o=Qi,i=void 0);const m=o===Qi&&t[a+1].startsWith("/>")?" ":"";s+=o===fa?c+i3:h>=0?(r.push(l),c.slice(0,h)+tm+c.slice(h)+_i+m):c+_i+(h===-2?(r.push(void 0),a):m)}return[eS(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class Tc{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=e.length-1,c=this.parts,[l,u]=a3(e,n);if(this.el=Tc.createElement(l,r),as.currentNode=this.el.content,n===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(i=as.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const p of i.getAttributeNames())if(p.endsWith(tm)||p.startsWith(_i)){const m=u[o++];if(h.push(p),m!==void 0){const y=i.getAttribute(m.toLowerCase()+tm).split(_i),v=/([.?@])?(.*)/.exec(m);c.push({type:1,index:s,name:v[2],strings:y,ctor:v[1]==="."?l3:v[1]==="?"?h3:v[1]==="@"?d3:fd})}else c.push({type:6,index:s})}for(const p of h)i.removeAttribute(p)}if(ZR.test(i.tagName)){const h=i.textContent.split(_i),p=h.length-1;if(p>0){i.textContent=xo?xo.emptyScript:"";for(let m=0;m<p;m++)i.append(h[m],Ec()),as.nextNode(),c.push({type:2,index:++s});i.append(h[p],Ec())}}}else if(i.nodeType===8)if(i.data===JR)c.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(_i,h+1))!==-1;)c.push({type:7,index:s}),h+=_i.length-1}s++}}static createElement(e,n){const r=Rs.createElement("template");return r.innerHTML=e,r}}function Oo(t,e,n=t,r){var i,s,o,a;if(e===Ss)return e;let c=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const l=bc(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((s=c==null?void 0:c._$AO)===null||s===void 0||s.call(c,!1),l===void 0?c=void 0:(c=new l(t),c._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=c:n._$Cl=c),c!==void 0&&(e=Oo(t,c._$AS(t,e.values),c,r)),e}class c3{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Rs).importNode(r,!0);as.currentNode=s;let o=as.nextNode(),a=0,c=0,l=i[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new Zc(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new f3(o,this,e)),this._$AV.push(u),l=i[++c]}a!==(l==null?void 0:l.index)&&(o=as.nextNode(),a++)}return as.currentNode=Rs,s}v(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class Zc{constructor(e,n,r,i){var s;this.type=2,this._$AH=_e,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Oo(this,e,n),bc(e)?e===_e||e==null||e===""?(this._$AH!==_e&&this._$AR(),this._$AH=_e):e!==this._$AH&&e!==Ss&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):s3(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==_e&&bc(this._$AH)?this._$AA.nextSibling.data=e:this.$(Rs.createTextNode(e)),this._$AH=e}g(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Tc.createElement(eS(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new c3(s,this),a=o.u(this.options);o.v(r),this.$(a),this._$AH=o}}_$AC(e){let n=Q0.get(e.strings);return n===void 0&&Q0.set(e.strings,n=new Tc(e)),n}T(e){XR(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new Zc(this.k(Ec()),this.k(Ec()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class fd{constructor(e,n,r,i,s){this.type=1,this._$AH=_e,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_e}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=Oo(this,e,n,0),o=!bc(e)||e!==this._$AH&&e!==Ss,o&&(this._$AH=e);else{const a=e;let c,l;for(e=s[0],c=0;c<s.length-1;c++)l=Oo(this,a[r+c],n,c),l===Ss&&(l=this._$AH[c]),o||(o=!bc(l)||l!==this._$AH[c]),l===_e?e=_e:e!==_e&&(e+=(l??"")+s[c+1]),this._$AH[c]=l}o&&!i&&this.j(e)}j(e){e===_e?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class l3 extends fd{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_e?void 0:e}}const u3=xo?xo.emptyScript:"";class h3 extends fd{constructor(){super(...arguments),this.type=4}j(e){e&&e!==_e?this.element.setAttribute(this.name,u3):this.element.removeAttribute(this.name)}}class d3 extends fd{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){var r;if((e=(r=Oo(this,e,n,0))!==null&&r!==void 0?r:_e)===Ss)return;const i=this._$AH,s=e===_e&&i!==_e||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==_e&&(i===_e||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class f3{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Oo(this,e)}}const Y0=Gu.litHtmlPolyfillSupport;Y0==null||Y0(Tc,Zc),((Sf=Gu.litHtmlVersions)!==null&&Sf!==void 0?Sf:Gu.litHtmlVersions=[]).push("2.8.0");const p3=(t,e,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=s._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new Zc(e.insertBefore(Ec(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kf,Nf;let _n=class extends Ks{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=p3(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ss}};_n.finalized=!0,_n._$litElement$=!0,(kf=globalThis.litElementHydrateSupport)===null||kf===void 0||kf.call(globalThis,{LitElement:_n});const J0=globalThis.litElementPolyfillSupport;J0==null||J0({LitElement:_n});((Nf=globalThis.litElementVersions)!==null&&Nf!==void 0?Nf:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class m3 extends _n{render(){return it`<span class="shadow"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const g3=En`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let nm=class extends m3{};nm.styles=[g3];nm=X([hr("md-elevation")],nm);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const tS=Symbol("attachableController");let ql;ql=new MutationObserver(t=>{var e;for(const n of t)(e=n.target[tS])==null||e.hostConnected()});class nS{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}constructor(e,n){this.host=e,this.onControlChange=n,this.currentControl=null,e.addController(this),e[tS]=this,ql==null||ql.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const _3=["focusin","focusout","pointerdown"];class F_ extends _n{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new nS(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}handleEvent(e){var n;if(!e[X0]){switch(e.type){default:return;case"focusin":this.visible=((n=this.control)==null?void 0:n.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[X0]=!0}}onControlChange(e,n){for(const r of _3)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}X([Te({type:Boolean,reflect:!0})],F_.prototype,"visible",void 0);X([Te({type:Boolean,reflect:!0})],F_.prototype,"inward",void 0);const X0=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const y3=En`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let rm=class extends F_{};rm.styles=[y3];rm=X([hr("md-focus-ring")],rm);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v3={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},w3=t=>(...e)=>({_$litDirective$:t,values:e});let E3=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ps=w3(class extends E3{constructor(t){var e;if(super(t),t.type!==v3.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,r;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((n=this.nt)===null||n===void 0)&&n.has(s))&&this.it.add(s);return this.render(e)}const i=t.element.classList;this.it.forEach(s=>{s in e||(i.remove(s),this.it.delete(s))});for(const s in e){const o=!!e[s];o===this.it.has(s)||!((r=this.nt)===null||r===void 0)&&r.has(s)||(o?(i.add(s),this.it.add(s)):(i.remove(s),this.it.delete(s)))}return Ss}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ic={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const b3=450,Z0=225,T3=.2,I3=10,A3=75,C3=.35,R3="::after",S3="forwards";var fn;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(fn||(fn={}));const P3=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],k3=150;class el extends _n{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=fn.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new nS(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}render(){const e={hovered:this.hovered,pressed:this.pressed};return it`<div class="surface ${Ps(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==fn.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===fn.HOLDING){this.state=fn.WAITING_FOR_CLICK;return}if(this.state===fn.TOUCH_DELAY){this.state=fn.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=fn.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=fn.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,k3)}),this.state===fn.TOUCH_DELAY&&(this.state=fn.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===fn.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===fn.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:n}=this.getBoundingClientRect(),r=Math.max(e,n),i=Math.max(C3*r,A3),s=Math.floor(r*T3),a=Math.sqrt(n**2+e**2)+I3;this.initialSize=s,this.rippleScale=`${(a+i)/s}`,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(e){const{scrollX:n,scrollY:r}=window,{left:i,top:s}=this.getBoundingClientRect(),o=n+i,a=r+s,{pageX:c,pageY:l}=e;return{x:c-o,y:l-a}}getTranslationCoordinates(e){const{height:n,width:r}=this.getBoundingClientRect(),i={x:(r-this.initialSize)/2,y:(n-this.initialSize)/2};let s;return e instanceof PointerEvent?s=this.getNormalizedPointerEventCoords(e):s={x:r/2,y:n/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:i}}startPressAnimation(e){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:n,endPoint:r}=this.getTranslationCoordinates(e),i=`${n.x}px, ${n.y}px`,s=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${s}) scale(${this.rippleScale})`]},{pseudoElement:R3,duration:b3,easing:Ic.STANDARD,fill:S3})}async endPressAnimation(){this.state=fn.INACTIVE;const e=this.growAnimation,n=(e==null?void 0:e.currentTime)??1/0;if(n>=Z0){this.pressed=!1;return}await new Promise(r=>{setTimeout(r,Z0-n)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const n=e.buttons===1;return this.isTouch(e)||n}inBounds({x:e,y:n}){const{top:r,left:i,bottom:s,right:o}=this.getBoundingClientRect();return e>=i&&e<=o&&n>=r&&n<=s}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,n){for(const r of P3)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}}X([Te({type:Boolean,reflect:!0})],el.prototype,"disabled",void 0);X([zi()],el.prototype,"hovered",void 0);X([zi()],el.prototype,"pressed",void 0);X([Qn(".surface")],el.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const N3=En`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let im=class extends el{};im.styles=[N3];im=X([hr("md-ripple")],im);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rS=Symbol.for(""),x3=t=>{if((t==null?void 0:t.r)===rS)return t==null?void 0:t._$litStatic$},Qu=(t,...e)=>({_$litStatic$:e.reduce((n,r,i)=>n+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[i+1],t[0]),r:rS}),eE=new Map,O3=t=>(e,...n)=>{const r=n.length;let i,s;const o=[],a=[];let c,l=0,u=!1;for(;l<r;){for(c=e[l];l<r&&(s=n[l],(i=x3(s))!==void 0);)c+=i+e[++l],u=!0;l!==r&&a.push(s),o.push(c),l++}if(l===r&&o.push(e[r]),u){const h=o.join("$$lit$$");(e=eE.get(h))===void 0&&(o.raw=o,eE.set(h,e=o)),n=a}return t(e,...n)},iS=O3(it);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const sS=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];sS.map(oS);function oS(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function tl(t){for(const e of sS)t.createProperty(e,{attribute:oS(e),reflect:!0});t.addInitializer(e=>{const n={hostConnected(){e.setAttribute("role","presentation")}};e.addController(n)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Do=Symbol("internals");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function D3(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(n);return r||e.preventDefault(),r}function aS(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function cS(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!M3(t)}function M3(t){const e=sm;return e&&(t.preventDefault(),t.stopImmediatePropagation()),L3(),e}let sm=!1;async function L3(){sm=!0,await null,sm=!1}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function lS(t){t.addInitializer(e=>{const n=e;n.addEventListener("click",async r=>{const{type:i,[Do]:s}=n,{form:o}=s;if(!(!o||i==="button")&&(await new Promise(a=>{a()}),!r.defaultPrevented)){if(i==="reset"){o.reset();return}o.addEventListener("submit",a=>{Object.defineProperty(a,"submitter",{configurable:!0,enumerable:!0,get:()=>n})},{capture:!0,once:!0}),s.setFormValue(n.value),o.requestSubmit()}})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var uS;class vn extends _n{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Do].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this[uS]=this.attachInternals(),this.handleActivationClick=e=>{!cS(e)||!this.buttonElement||(this.focus(),aS(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){const e=this.disabled&&!this.href,n=this.href?Qu`a`:Qu`button`,{ariaLabel:r,ariaHasPopup:i,ariaExpanded:s}=this;return iS`
      <${n}
        class="button ${Ps(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${r||_e}"
        aria-haspopup="${i||_e}"
        aria-expanded="${s||_e}"
        href=${this.href||_e}
        target=${this.target||_e}
      >${this.renderContent()}</${n}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){var r,i;const e=this.disabled&&!this.href,n=it`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return it`
      ${(r=this.renderElevation)==null?void 0:r.call(this)}
      ${(i=this.renderOutline)==null?void 0:i.call(this)}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${e}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?_e:n}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?n:_e}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}uS=Do;tl(vn),lS(vn);vn.formAssociated=!0;vn.shadowRootOptions={mode:"open",delegatesFocus:!0};X([Te({type:Boolean,reflect:!0})],vn.prototype,"disabled",void 0);X([Te()],vn.prototype,"href",void 0);X([Te()],vn.prototype,"target",void 0);X([Te({type:Boolean,attribute:"trailing-icon"})],vn.prototype,"trailingIcon",void 0);X([Te({type:Boolean,attribute:"has-icon"})],vn.prototype,"hasIcon",void 0);X([Te()],vn.prototype,"type",void 0);X([Te()],vn.prototype,"value",void 0);X([Qn(".button")],vn.prototype,"buttonElement",void 0);X([e3({slot:"icon",flatten:!0})],vn.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class $3 extends vn{renderElevation(){return it`<md-elevation></md-elevation>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const V3=En`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-type: var(--md-filled-tonal-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-tonal-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const F3=En`md-elevation{transition-duration:280ms}.button{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}.button:focus{--md-elevation-level: var(--_focus-container-elevation)}.button:hover{--md-elevation-level: var(--_hover-container-elevation)}.button:active{--md-elevation-level: var(--_pressed-container-elevation)}.button:disabled{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const hS=En`:host{display:inline-flex;height:var(--_container-height);outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:var(--_label-text-type);color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let om=class extends $3{};om.styles=[hS,F3,V3];om=X([hr("md-filled-tonal-button")],om);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Yo extends _n{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:e}=this;return it`
      <div class="progress ${Ps(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${e||_e}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?_e:this.value}
      >${this.renderIndicator()}</div>
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}tl(Yo);X([Te({type:Number})],Yo.prototype,"value",void 0);X([Te({type:Number})],Yo.prototype,"max",void 0);X([Te({type:Boolean})],Yo.prototype,"indeterminate",void 0);X([Te({type:Boolean,attribute:"four-color"})],Yo.prototype,"fourColor",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class U3 extends Yo{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const e=(1-this.value/this.max)*100;return it`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle class="active-track" pathLength="100"
          stroke-dashoffset=${e}></circle>
      </svg>
    `}renderIndeterminateContainer(){return it`
      <div class="spinner">
        <div class="left">
          <div class="circle"></div>
        </div>
        <div class="right">
          <div class="circle"></div>
        </div>
      </div>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const B3=En`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 8.3333333333);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;min-block-size:var(--_size);min-inline-size:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}/*# sourceMappingURL=circular-progress-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let am=class extends U3{};am.styles=[B3];am=X([hr("md-circular-progress")],am);const j3={id:"remote"},H3={key:0,indeterminate:""},z3=Kn({__name:"RemoteCode",props:{codeString:{}},setup(t){var a;const e=t,n=Xe(!1),r=Xe(!1);Xe();const i=bh(),s=I_(Gr(er,`users/${(a=i.value)==null?void 0:a.uid}`));async function o(){n.value=!0,await tR(er,async c=>{var l,u,h;c.set(Gr(er,`scans/${new Date().getTime()}`),{code:e.codeString,timestamp:Fu(),username:(l=s.value)==null?void 0:l.username,userRef:Gr(er,`users/${(u=i.value)==null?void 0:u.uid}`)}),c.update(Gr(er,`users/${(h=i.value)==null?void 0:h.uid}`),{lastPunchTime:Fu()})}),n.value=!1,r.value=!0}return(c,l)=>(Je(),vt("div",j3,[n.value?(Je(),vt("md-circular-progress",H3)):(Je(),vt("md-filled-tonal-button",{key:1,onClick:o}," Timbra "))]))}});var dS=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},W3=(t,e,n)=>(dS(t,e,"read from private field"),n?n.call(t):e.get(t)),q3=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},K3=(t,e,n,r)=>(dS(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);const tE=["aztec","code_128","code_39","code_93","codabar","data_matrix","ean_13","ean_8","itf","pdf417","qr_code","upc_a","upc_e","unknown"];function G3(t){if(fS(t))return{width:t.naturalWidth,height:t.naturalHeight};if(pS(t))return{width:t.width.baseVal.value,height:t.height.baseVal.value};if(mS(t))return{width:t.videoWidth,height:t.videoHeight};if(Q3(t))return{width:t.width,height:t.height};if(gS(t))return{width:t.width,height:t.height};if(Y3(t))return{width:t.width,height:t.height};if(_S(t))return{width:t.displayWidth,height:t.displayHeight};throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.")}function fS(t){try{return t instanceof HTMLImageElement}catch{return!1}}function pS(t){try{return t instanceof SVGImageElement}catch{return!1}}function mS(t){try{return t instanceof HTMLVideoElement}catch{return!1}}function Q3(t){try{return t instanceof HTMLCanvasElement}catch{return!1}}function gS(t){try{return t instanceof ImageBitmap}catch{return!1}}function Y3(t){try{return t instanceof OffscreenCanvas}catch{return!1}}function _S(t){try{return t instanceof VideoFrame}catch{return!1}}function J3(t){try{return t instanceof Blob}catch{return!1}}function X3(t){try{return t instanceof ImageData}catch{return!1}}function Z3(t,e){try{const n=new OffscreenCanvas(t,e);if(n.getContext("2d")instanceof OffscreenCanvasRenderingContext2D)return n;throw void 0}catch{const r=document.createElement("canvas");return r.width=t,r.height=e,r}}async function yS(t){if(fS(t)&&!await nH(t))throw new DOMException("Failed to load or decode HTMLImageElement.","InvalidStateError");if(pS(t)&&!await rH(t))throw new DOMException("Failed to load or decode SVGImageElement.","InvalidStateError");if(_S(t)&&iH(t))throw new DOMException("VideoFrame is closed.","InvalidStateError");if(mS(t)&&(t.readyState===0||t.readyState===1))throw new DOMException("Invalid element or state.","InvalidStateError");if(gS(t)&&oH(t))throw new DOMException("The image source is detached.","InvalidStateError");const{width:e,height:n}=G3(t);if(e===0||n===0)return null;const r=Z3(e,n).getContext("2d");r.drawImage(t,0,0);try{return r.getImageData(0,0,e,n)}catch{throw new DOMException("Source would taint origin.","SecurityError")}}async function eH(t){let e;try{e=await createImageBitmap(t)}catch{throw new DOMException("Failed to load or decode Blob.","InvalidStateError")}return await yS(e)}async function tH(t){if(J3(t))return await eH(t);if(X3(t)){if(sH(t))throw new DOMException("The image data has been detached.","InvalidStateError");return t}return await yS(t)}async function nH(t){try{return await t.decode(),!0}catch{return!1}}async function rH(t){var e;try{return await((e=t.decode)==null?void 0:e.call(t)),!0}catch{return!1}}function iH(t){return t.format===null}function sH(t){return t.data.buffer.byteLength===0}function oH(t){return t.width===0&&t.height===0}function nE(t,e){return t instanceof DOMException?new DOMException(`${e}: ${t.message}`,t.name):t instanceof Error?new t.constructor(`${e}: ${t.message}`):new Error(`${e}: ${t}`)}const rE=t=>{let e;const n=new Set,r=(o,a)=>{const c=typeof o=="function"?o(e):o;if(!Object.is(c,e)){const l=e;e=a??typeof c!="object"?c:Object.assign({},e,c),n.forEach(u=>u(e,l))}},i=()=>e,s={setState:r,getState:i,subscribe:o=>(n.add(o),()=>n.delete(o)),destroy:()=>{n.clear()}};return e=t(r,i,s),s},aH=t=>t?rE(t):rE,cH={locateFile:(t,e)=>{var n;const r=(n=t.match(/_(.+?)\.wasm$/))==null?void 0:n[1];return r?`https://cdn.jsdelivr.net/npm/@sec-ant/zxing-wasm@2.1.3/dist/${r}/${t}`:e+t}},Ia=aH()(()=>({zxingModuleWeakMap:new WeakMap,zxingModuleOverrides:cH}));function vS(t,e=Ia.getState().zxingModuleOverrides){const{zxingModuleWeakMap:n}=Ia.getState(),r=n.get(t);if(r&&Object.is(e,Ia.getState().zxingModuleOverrides))return r;{Ia.setState({zxingModuleOverrides:e});const i=t(e);return n.set(t,i),i}}const iE=["Aztec","Codabar","Code128","Code39","Code93","DataBar","DataBarExpanded","DataMatrix","EAN-13","EAN-8","ITF","Linear-Codes","Matrix-Codes","MaxiCode","MicroQRCode","None","PDF417","QRCode","UPC-A","UPC-E"],Ei={tryHarder:!0,formats:[],maxSymbols:255};async function lH(t,{tryHarder:e=Ei.tryHarder,formats:n=Ei.formats,maxSymbols:r=Ei.maxSymbols}=Ei,i){const s=await vS(i,Ia.getState().zxingModuleOverrides),{data:o,width:a,height:c,data:{byteLength:l}}=t,u=s._malloc(l);s.HEAP8.set(o,u);const h=s.readBarcodesFromPixmap(u,a,c,e,uH(n),r);s._free(u);const p=[];for(let m=0;m<h.size();++m){const y=h.get(m);p.push({...y,format:hH(y.format)})}return p}function uH(t){return t.join("|")}function hH(t){const e=sE(t);let n=0,r=iE.length-1;for(;n<=r;){const i=Math.floor((n+r)/2),s=iE[i],o=sE(s);if(o===e)return s;o<e?n=i+1:r=i-1}return"None"}function sE(t){return t.toLowerCase().replace(/_-\[\]/g,"")}var wS=(()=>{var t=import.meta.url;return function(e={}){var n=e,r,i;n.ready=new Promise((d,f)=>{r=d,i=f});var s=Object.assign({},n),o="./this.program",a=typeof window=="object",c=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var l="";function u(d){return n.locateFile?n.locateFile(d,l):l+d}var h;(a||c)&&(c?l=self.location.href:typeof document<"u"&&document.currentScript&&(l=document.currentScript.src),t&&(l=t),l.indexOf("blob:")!==0?l=l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):l="",c&&(h=d=>{var f=new XMLHttpRequest;return f.open("GET",d,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)})),n.print||console.log.bind(console);var p=n.printErr||console.error.bind(console);Object.assign(n,s),s=null,n.arguments&&n.arguments,n.thisProgram&&(o=n.thisProgram),n.quit&&n.quit;var m;n.wasmBinary&&(m=n.wasmBinary),n.noExitRuntime,typeof WebAssembly!="object"&&Yn("no native wasm support detected");var y,v,I=!1,A,k,N,P,j,z,ce,ye;function Ke(){var d=y.buffer;n.HEAP8=A=new Int8Array(d),n.HEAP16=N=new Int16Array(d),n.HEAP32=j=new Int32Array(d),n.HEAPU8=k=new Uint8Array(d),n.HEAPU16=P=new Uint16Array(d),n.HEAPU32=z=new Uint32Array(d),n.HEAPF32=ce=new Float32Array(d),n.HEAPF64=ye=new Float64Array(d)}var Pe,pt=[],jt=[],Ze=[];function Mr(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)Fe(n.preRun.shift());E(pt)}function un(){E(jt)}function He(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)Pn(n.postRun.shift());E(Ze)}function Fe(d){pt.unshift(d)}function Ie(d){jt.unshift(d)}function Pn(d){Ze.unshift(d)}var Rt=0,St=null;function Pt(d){Rt++,n.monitorRunDependencies&&n.monitorRunDependencies(Rt)}function si(d){if(Rt--,n.monitorRunDependencies&&n.monitorRunDependencies(Rt),Rt==0&&St){var f=St;St=null,f()}}function Yn(d){n.onAbort&&n.onAbort(d),d="Aborted("+d+")",p(d),I=!0,d+=". Build with -sASSERTIONS for more info.";var f=new WebAssembly.RuntimeError(d);throw i(f),f}var Vs="data:application/octet-stream;base64,";function bt(d){return d.startsWith(Vs)}var O;n.locateFile?(O="zxing_reader.wasm",bt(O)||(O=u(O))):O=new URL("/reader/zxing_reader.wasm",self.location).href;function J(d){if(d==O&&m)return new Uint8Array(m);if(h)return h(d);throw"both async and sync fetching of the wasm failed"}function q(d){return!m&&(a||c)&&typeof fetch=="function"?fetch(d,{credentials:"same-origin"}).then(f=>{if(!f.ok)throw"failed to load wasm binary file at '"+d+"'";return f.arrayBuffer()}).catch(()=>J(d)):Promise.resolve().then(()=>J(d))}function re(d,f,g){return q(d).then(_=>WebAssembly.instantiate(_,f)).then(_=>_).then(g,_=>{p("failed to asynchronously prepare wasm: "+_),Yn(_)})}function Me(d,f,g,_){return!d&&typeof WebAssembly.instantiateStreaming=="function"&&!bt(f)&&typeof fetch=="function"?fetch(f,{credentials:"same-origin"}).then(b=>{var T=WebAssembly.instantiateStreaming(b,g);return T.then(_,function(R){return p("wasm streaming compile failed: "+R),p("falling back to ArrayBuffer instantiation"),re(f,g,_)})}):re(f,g,_)}function w(){var d={a:fP};function f(_,b){var T=_.exports;return v=T,y=v.qa,Ke(),Pe=v.ua,Ie(v.ra),si(),T}Pt();function g(_){f(_.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(d,f)}catch(_){p("Module.instantiateWasm callback failed with error: "+_),i(_)}return Me(m,O,d,g).catch(i),{}}var E=d=>{for(;d.length>0;)d.shift()(n)},C=[],x=0;function M(d){var f=new H(d);return f.get_caught()||(f.set_caught(!0),x--),f.set_rethrown(!1),C.push(f),hy(f.excPtr),f.get_exception_ptr()}var L=0;function Q(){Ae(0,0);var d=C.pop();uy(d.excPtr),L=0}function H(d){this.excPtr=d,this.ptr=d-24,this.set_type=function(f){z[this.ptr+4>>2]=f},this.get_type=function(){return z[this.ptr+4>>2]},this.set_destructor=function(f){z[this.ptr+8>>2]=f},this.get_destructor=function(){return z[this.ptr+8>>2]},this.set_caught=function(f){f=f?1:0,A[this.ptr+12>>0]=f},this.get_caught=function(){return A[this.ptr+12>>0]!=0},this.set_rethrown=function(f){f=f?1:0,A[this.ptr+13>>0]=f},this.get_rethrown=function(){return A[this.ptr+13>>0]!=0},this.init=function(f,g){this.set_adjusted_ptr(0),this.set_type(f),this.set_destructor(g)},this.set_adjusted_ptr=function(f){z[this.ptr+16>>2]=f},this.get_adjusted_ptr=function(){return z[this.ptr+16>>2]},this.get_exception_ptr=function(){var f=fy(this.get_type());if(f)return z[this.excPtr>>2];var g=this.get_adjusted_ptr();return g!==0?g:this.excPtr}}function W(d){throw L||(L=d),L}var V=d=>{var f=L;if(!f)return na(0),0;var g=new H(f);g.set_adjusted_ptr(f);var _=g.get_type();if(!_)return na(0),f;for(var b in d){var T=d[b];if(T===0||T===_)break;var R=g.ptr+16;if(dy(T,_,R))return na(T),f}return na(_),f},ie=()=>V([]),Z=d=>V([d]),se=(d,f)=>V([d,f]);function fe(d){var f=new H(d).get_exception_ptr();return f}function we(){var d=C.pop();d||Yn("no exception to throw");var f=d.excPtr;throw d.get_rethrown()||(C.push(d),d.set_rethrown(!0),d.set_caught(!1),x++),L=f,L}function Ge(d,f,g){var _=new H(d);throw _.init(f,g),L=d,x++,L}function Be(){return x}var et={};function bn(d){for(;d.length;){var f=d.pop(),g=d.pop();g(f)}}function Un(d){return this.fromWireType(j[d>>2])}var Lr={},kn={},Wi={},Qt=void 0;function hn(d){throw new Qt(d)}function dr(d,f,g){d.forEach(function(S){Wi[S]=f});function _(S){var D=g(S);D.length!==d.length&&hn("Mismatched type converter count");for(var F=0;F<d.length;++F)$r(d[F],D[F])}var b=new Array(f.length),T=[],R=0;f.forEach((S,D)=>{kn.hasOwnProperty(S)?b[D]=kn[S]:(T.push(S),Lr.hasOwnProperty(S)||(Lr[S]=[]),Lr[S].push(()=>{b[D]=kn[S],++R,R===T.length&&_(b)}))}),T.length===0&&_(b)}var VS=function(d){var f=et[d];delete et[d];var g=f.rawConstructor,_=f.rawDestructor,b=f.fields,T=b.map(R=>R.getterReturnType).concat(b.map(R=>R.setterArgumentType));dr([d],T,R=>{var S={};return b.forEach((D,F)=>{var Y=D.fieldName,oe=R[F],ue=D.getter,xe=D.getterContext,at=R[F+b.length],kt=D.setter,ct=D.setterContext;S[Y]={read:Nt=>oe.fromWireType(ue(xe,Nt)),write:(Nt,U)=>{var te=[];kt(ct,Nt,at.toWireType(te,U)),bn(te)}}}),[{name:f.name,fromWireType:function(D){var F={};for(var Y in S)F[Y]=S[Y].read(D);return _(D),F},toWireType:function(D,F){for(var Y in S)if(!(Y in F))throw new TypeError(`Missing field: "${Y}"`);var oe=g();for(Y in S)S[Y].write(oe,F[Y]);return D!==null&&D.push(_,oe),oe},argPackAdvance:8,readValueFromPointer:Un,destructorFunction:_}]})};function FS(d,f,g,_,b){}function _d(d){switch(d){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${d}`)}}function US(){for(var d=new Array(256),f=0;f<256;++f)d[f]=String.fromCharCode(f);U_=d}var U_=void 0;function Yt(d){for(var f="",g=d;k[g];)f+=U_[k[g++]];return f}var Fs=void 0;function Le(d){throw new Fs(d)}function BS(d,f,g={}){var _=f.name;if(d||Le(`type "${_}" must have a positive integer typeid pointer`),kn.hasOwnProperty(d)){if(g.ignoreDuplicateRegistrations)return;Le(`Cannot register type '${_}' twice`)}if(kn[d]=f,delete Wi[d],Lr.hasOwnProperty(d)){var b=Lr[d];delete Lr[d],b.forEach(T=>T())}}function $r(d,f,g={}){if(!("argPackAdvance"in f))throw new TypeError("registerType registeredInstance requires argPackAdvance");return BS(d,f,g)}function jS(d,f,g,_,b){var T=_d(g);f=Yt(f),$r(d,{name:f,fromWireType:function(R){return!!R},toWireType:function(R,S){return S?_:b},argPackAdvance:8,readValueFromPointer:function(R){var S;if(g===1)S=A;else if(g===2)S=N;else if(g===4)S=j;else throw new TypeError("Unknown boolean type size: "+f);return this.fromWireType(S[R>>T])},destructorFunction:null})}function HS(d){if(!(this instanceof oi)||!(d instanceof oi))return!1;for(var f=this.$$.ptrType.registeredClass,g=this.$$.ptr,_=d.$$.ptrType.registeredClass,b=d.$$.ptr;f.baseClass;)g=f.upcast(g),f=f.baseClass;for(;_.baseClass;)b=_.upcast(b),_=_.baseClass;return f===_&&g===b}function zS(d){return{count:d.count,deleteScheduled:d.deleteScheduled,preservePointerOnDelete:d.preservePointerOnDelete,ptr:d.ptr,ptrType:d.ptrType,smartPtr:d.smartPtr,smartPtrType:d.smartPtrType}}function yd(d){function f(g){return g.$$.ptrType.registeredClass.name}Le(f(d)+" instance already deleted")}var vd=!1;function B_(d){}function WS(d){d.smartPtr?d.smartPtrType.rawDestructor(d.smartPtr):d.ptrType.registeredClass.rawDestructor(d.ptr)}function j_(d){d.count.value-=1;var f=d.count.value===0;f&&WS(d)}function H_(d,f,g){if(f===g)return d;if(g.baseClass===void 0)return null;var _=H_(d,f,g.baseClass);return _===null?null:g.downcast(_)}var z_={};function qS(){return Object.keys(Zo).length}function KS(){var d=[];for(var f in Zo)Zo.hasOwnProperty(f)&&d.push(Zo[f]);return d}var Jo=[];function wd(){for(;Jo.length;){var d=Jo.pop();d.$$.deleteScheduled=!1,d.delete()}}var Xo=void 0;function GS(d){Xo=d,Jo.length&&Xo&&Xo(wd)}function QS(){n.getInheritedInstanceCount=qS,n.getLiveInheritedInstances=KS,n.flushPendingDeletes=wd,n.setDelayFunction=GS}var Zo={};function YS(d,f){for(f===void 0&&Le("ptr should not be undefined");d.baseClass;)f=d.upcast(f),d=d.baseClass;return f}function JS(d,f){return f=YS(d,f),Zo[f]}function nl(d,f){(!f.ptrType||!f.ptr)&&hn("makeClassHandle requires ptr and ptrType");var g=!!f.smartPtrType,_=!!f.smartPtr;return g!==_&&hn("Both smartPtrType and smartPtr must be specified"),f.count={value:1},ea(Object.create(d,{$$:{value:f}}))}function XS(d){var f=this.getPointee(d);if(!f)return this.destructor(d),null;var g=JS(this.registeredClass,f);if(g!==void 0){if(g.$$.count.value===0)return g.$$.ptr=f,g.$$.smartPtr=d,g.clone();var _=g.clone();return this.destructor(d),_}function b(){return this.isSmartPointer?nl(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:f,smartPtrType:this,smartPtr:d}):nl(this.registeredClass.instancePrototype,{ptrType:this,ptr:d})}var T=this.registeredClass.getActualType(f),R=z_[T];if(!R)return b.call(this);var S;this.isConst?S=R.constPointerType:S=R.pointerType;var D=H_(f,this.registeredClass,S.registeredClass);return D===null?b.call(this):this.isSmartPointer?nl(S.registeredClass.instancePrototype,{ptrType:S,ptr:D,smartPtrType:this,smartPtr:d}):nl(S.registeredClass.instancePrototype,{ptrType:S,ptr:D})}var ea=function(d){return typeof FinalizationRegistry>"u"?(ea=f=>f,d):(vd=new FinalizationRegistry(f=>{j_(f.$$)}),ea=f=>{var g=f.$$,_=!!g.smartPtr;if(_){var b={$$:g};vd.register(f,b,f)}return f},B_=f=>vd.unregister(f),ea(d))};function ZS(){if(this.$$.ptr||yd(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var d=ea(Object.create(Object.getPrototypeOf(this),{$$:{value:zS(this.$$)}}));return d.$$.count.value+=1,d.$$.deleteScheduled=!1,d}function e1(){this.$$.ptr||yd(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Le("Object already scheduled for deletion"),B_(this),j_(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function t1(){return!this.$$.ptr}function n1(){return this.$$.ptr||yd(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Le("Object already scheduled for deletion"),Jo.push(this),Jo.length===1&&Xo&&Xo(wd),this.$$.deleteScheduled=!0,this}function r1(){oi.prototype.isAliasOf=HS,oi.prototype.clone=ZS,oi.prototype.delete=e1,oi.prototype.isDeleted=t1,oi.prototype.deleteLater=n1}function oi(){}var i1=48,s1=57;function W_(d){if(d===void 0)return"_unknown";d=d.replace(/[^a-zA-Z0-9_]/g,"$");var f=d.charCodeAt(0);return f>=i1&&f<=s1?`_${d}`:d}function q_(d,f){return d=W_(d),{[d]:function(){return f.apply(this,arguments)}}[d]}function K_(d,f,g){if(d[f].overloadTable===void 0){var _=d[f];d[f]=function(){return d[f].overloadTable.hasOwnProperty(arguments.length)||Le(`Function '${g}' called with an invalid number of arguments (${arguments.length}) - expects one of (${d[f].overloadTable})!`),d[f].overloadTable[arguments.length].apply(this,arguments)},d[f].overloadTable=[],d[f].overloadTable[_.argCount]=_}}function G_(d,f,g){n.hasOwnProperty(d)?((g===void 0||n[d].overloadTable!==void 0&&n[d].overloadTable[g]!==void 0)&&Le(`Cannot register public name '${d}' twice`),K_(n,d,d),n.hasOwnProperty(g)&&Le(`Cannot register multiple overloads of a function with the same number of arguments (${g})!`),n[d].overloadTable[g]=f):(n[d]=f,g!==void 0&&(n[d].numArguments=g))}function o1(d,f,g,_,b,T,R,S){this.name=d,this.constructor=f,this.instancePrototype=g,this.rawDestructor=_,this.baseClass=b,this.getActualType=T,this.upcast=R,this.downcast=S,this.pureVirtualFunctions=[]}function Ed(d,f,g){for(;f!==g;)f.upcast||Le(`Expected null or instance of ${g.name}, got an instance of ${f.name}`),d=f.upcast(d),f=f.baseClass;return d}function a1(d,f){if(f===null)return this.isReference&&Le(`null is not a valid ${this.name}`),0;f.$$||Le(`Cannot pass "${Id(f)}" as a ${this.name}`),f.$$.ptr||Le(`Cannot pass deleted object as a pointer of type ${this.name}`);var g=f.$$.ptrType.registeredClass,_=Ed(f.$$.ptr,g,this.registeredClass);return _}function c1(d,f){var g;if(f===null)return this.isReference&&Le(`null is not a valid ${this.name}`),this.isSmartPointer?(g=this.rawConstructor(),d!==null&&d.push(this.rawDestructor,g),g):0;f.$$||Le(`Cannot pass "${Id(f)}" as a ${this.name}`),f.$$.ptr||Le(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&f.$$.ptrType.isConst&&Le(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);var _=f.$$.ptrType.registeredClass;if(g=Ed(f.$$.ptr,_,this.registeredClass),this.isSmartPointer)switch(f.$$.smartPtr===void 0&&Le("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:f.$$.smartPtrType===this?g=f.$$.smartPtr:Le(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:g=f.$$.smartPtr;break;case 2:if(f.$$.smartPtrType===this)g=f.$$.smartPtr;else{var b=f.clone();g=this.rawShare(g,ai.toHandle(function(){b.delete()})),d!==null&&d.push(this.rawDestructor,g)}break;default:Le("Unsupporting sharing policy")}return g}function l1(d,f){if(f===null)return this.isReference&&Le(`null is not a valid ${this.name}`),0;f.$$||Le(`Cannot pass "${Id(f)}" as a ${this.name}`),f.$$.ptr||Le(`Cannot pass deleted object as a pointer of type ${this.name}`),f.$$.ptrType.isConst&&Le(`Cannot convert argument of type ${f.$$.ptrType.name} to parameter type ${this.name}`);var g=f.$$.ptrType.registeredClass,_=Ed(f.$$.ptr,g,this.registeredClass);return _}function u1(d){return this.rawGetPointee&&(d=this.rawGetPointee(d)),d}function h1(d){this.rawDestructor&&this.rawDestructor(d)}function d1(d){d!==null&&d.delete()}function f1(){Vr.prototype.getPointee=u1,Vr.prototype.destructor=h1,Vr.prototype.argPackAdvance=8,Vr.prototype.readValueFromPointer=Un,Vr.prototype.deleteObject=d1,Vr.prototype.fromWireType=XS}function Vr(d,f,g,_,b,T,R,S,D,F,Y){this.name=d,this.registeredClass=f,this.isReference=g,this.isConst=_,this.isSmartPointer=b,this.pointeeType=T,this.sharingPolicy=R,this.rawGetPointee=S,this.rawConstructor=D,this.rawShare=F,this.rawDestructor=Y,!b&&f.baseClass===void 0?_?(this.toWireType=a1,this.destructorFunction=null):(this.toWireType=l1,this.destructorFunction=null):this.toWireType=c1}function Q_(d,f,g){n.hasOwnProperty(d)||hn("Replacing nonexistant public symbol"),n[d].overloadTable!==void 0&&g!==void 0?n[d].overloadTable[g]=f:(n[d]=f,n[d].argCount=g)}var p1=(d,f,g)=>{var _=n["dynCall_"+d];return g&&g.length?_.apply(null,[f].concat(g)):_.call(null,f)},rl=[],$e=d=>{var f=rl[d];return f||(d>=rl.length&&(rl.length=d+1),rl[d]=f=Pe.get(d)),f},m1=(d,f,g)=>{if(d.includes("j"))return p1(d,f,g);var _=$e(f).apply(null,g);return _},g1=(d,f)=>{var g=[];return function(){return g.length=0,Object.assign(g,arguments),m1(d,f,g)}};function Jn(d,f){d=Yt(d);function g(){return d.includes("j")?g1(d,f):$e(f)}var _=g();return typeof _!="function"&&Le(`unknown function pointer with signature ${d}: ${f}`),_}function _1(d,f){var g=q_(f,function(_){this.name=f,this.message=_;var b=new Error(_).stack;b!==void 0&&(this.stack=this.toString()+`
`+b.replace(/^Error(:[^\n]*)?\n/,""))});return g.prototype=Object.create(d.prototype),g.prototype.constructor=g,g.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},g}var Y_=void 0;function J_(d){var f=ly(d),g=Yt(f);return Fr(f),g}function il(d,f){var g=[],_={};function b(T){if(!_[T]&&!kn[T]){if(Wi[T]){Wi[T].forEach(b);return}g.push(T),_[T]=!0}}throw f.forEach(b),new Y_(`${d}: `+g.map(J_).join([", "]))}function y1(d,f,g,_,b,T,R,S,D,F,Y,oe,ue){Y=Yt(Y),T=Jn(b,T),S&&(S=Jn(R,S)),F&&(F=Jn(D,F)),ue=Jn(oe,ue);var xe=W_(Y);G_(xe,function(){il(`Cannot construct ${Y} due to unbound types`,[_])}),dr([d,f,g],_?[_]:[],function(at){at=at[0];var kt,ct;_?(kt=at.registeredClass,ct=kt.instancePrototype):ct=oi.prototype;var Nt=q_(xe,function(){if(Object.getPrototypeOf(this)!==U)throw new Fs("Use 'new' to construct "+Y);if(te.constructor_body===void 0)throw new Fs(Y+" has no accessible constructor");var al=te.constructor_body[arguments.length];if(al===void 0)throw new Fs(`Tried to invoke ctor of ${Y} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(te.constructor_body).toString()}) parameters instead!`);return al.apply(this,arguments)}),U=Object.create(ct,{constructor:{value:Nt}});Nt.prototype=U;var te=new o1(Y,Nt,U,ue,kt,T,S,F);te.baseClass&&(te.baseClass.__derivedClasses===void 0&&(te.baseClass.__derivedClasses=[]),te.baseClass.__derivedClasses.push(te));var mt=new Vr(Y,te,!0,!1,!1),Tt=new Vr(Y+"*",te,!1,!1,!1),qi=new Vr(Y+" const*",te,!1,!0,!1);return z_[d]={pointerType:Tt,constPointerType:qi},Q_(xe,Nt),[mt,Tt,qi]})}function bd(d,f){for(var g=[],_=0;_<d;_++)g.push(z[f+_*4>>2]);return g}function Td(d,f,g,_,b,T){var R=f.length;R<2&&Le("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var S=f[1]!==null&&g!==null,D=!1,F=1;F<f.length;++F)if(f[F]!==null&&f[F].destructorFunction===void 0){D=!0;break}var Y=f[0].name!=="void",oe=R-2,ue=new Array(oe),xe=[],at=[];return function(){arguments.length!==oe&&Le(`function ${d} called with ${arguments.length} arguments, expected ${oe} args!`),at.length=0;var kt;xe.length=S?2:1,xe[0]=b,S&&(kt=f[1].toWireType(at,this),xe[1]=kt);for(var ct=0;ct<oe;++ct)ue[ct]=f[ct+2].toWireType(at,arguments[ct]),xe.push(ue[ct]);var Nt=_.apply(null,xe);function U(te){if(D)bn(at);else for(var mt=S?1:2;mt<f.length;mt++){var Tt=mt===1?kt:ue[mt-2];f[mt].destructorFunction!==null&&f[mt].destructorFunction(Tt)}if(Y)return f[0].fromWireType(te)}return U(Nt)}}function v1(d,f,g,_,b,T){var R=bd(f,g);b=Jn(_,b),dr([],[d],function(S){S=S[0];var D=`constructor ${S.name}`;if(S.registeredClass.constructor_body===void 0&&(S.registeredClass.constructor_body=[]),S.registeredClass.constructor_body[f-1]!==void 0)throw new Fs(`Cannot register multiple constructors with identical number of parameters (${f-1}) for class '${S.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return S.registeredClass.constructor_body[f-1]=()=>{il(`Cannot construct ${S.name} due to unbound types`,R)},dr([],R,function(F){return F.splice(1,0,null),S.registeredClass.constructor_body[f-1]=Td(D,F,null,b,T),[]}),[]})}function w1(d,f,g,_,b,T,R,S,D){var F=bd(g,_);f=Yt(f),T=Jn(b,T),dr([],[d],function(Y){Y=Y[0];var oe=`${Y.name}.${f}`;f.startsWith("@@")&&(f=Symbol[f.substring(2)]),S&&Y.registeredClass.pureVirtualFunctions.push(f);function ue(){il(`Cannot call ${oe} due to unbound types`,F)}var xe=Y.registeredClass.instancePrototype,at=xe[f];return at===void 0||at.overloadTable===void 0&&at.className!==Y.name&&at.argCount===g-2?(ue.argCount=g-2,ue.className=Y.name,xe[f]=ue):(K_(xe,f,oe),xe[f].overloadTable[g-2]=ue),dr([],F,function(kt){var ct=Td(oe,kt,Y,T,R);return xe[f].overloadTable===void 0?(ct.argCount=g-2,xe[f]=ct):xe[f].overloadTable[g-2]=ct,[]}),[]})}function E1(){Object.assign(X_.prototype,{get(d){return this.allocated[d]},has(d){return this.allocated[d]!==void 0},allocate(d){var f=this.freelist.pop()||this.allocated.length;return this.allocated[f]=d,f},free(d){this.allocated[d]=void 0,this.freelist.push(d)}})}function X_(){this.allocated=[void 0],this.freelist=[]}var Bn=new X_;function Z_(d){d>=Bn.reserved&&--Bn.get(d).refcount===0&&Bn.free(d)}function b1(){for(var d=0,f=Bn.reserved;f<Bn.allocated.length;++f)Bn.allocated[f]!==void 0&&++d;return d}function T1(){Bn.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),Bn.reserved=Bn.allocated.length,n.count_emval_handles=b1}var ai={toValue:d=>(d||Le("Cannot use deleted val. handle = "+d),Bn.get(d).value),toHandle:d=>{switch(d){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Bn.allocate({refcount:1,value:d})}}};function I1(d,f){f=Yt(f),$r(d,{name:f,fromWireType:function(g){var _=ai.toValue(g);return Z_(g),_},toWireType:function(g,_){return ai.toHandle(_)},argPackAdvance:8,readValueFromPointer:Un,destructorFunction:null})}function Id(d){if(d===null)return"null";var f=typeof d;return f==="object"||f==="array"||f==="function"?d.toString():""+d}function A1(d,f){switch(f){case 2:return function(g){return this.fromWireType(ce[g>>2])};case 3:return function(g){return this.fromWireType(ye[g>>3])};default:throw new TypeError("Unknown float type: "+d)}}function C1(d,f,g){var _=_d(g);f=Yt(f),$r(d,{name:f,fromWireType:function(b){return b},toWireType:function(b,T){return T},argPackAdvance:8,readValueFromPointer:A1(f,_),destructorFunction:null})}function R1(d,f,g,_,b,T,R){var S=bd(f,g);d=Yt(d),b=Jn(_,b),G_(d,function(){il(`Cannot call ${d} due to unbound types`,S)},f-1),dr([],S,function(D){var F=[D[0],null].concat(D.slice(1));return Q_(d,Td(d,F,null,b,T),f-1),[]})}function S1(d,f,g){switch(f){case 0:return g?function(_){return A[_]}:function(_){return k[_]};case 1:return g?function(_){return N[_>>1]}:function(_){return P[_>>1]};case 2:return g?function(_){return j[_>>2]}:function(_){return z[_>>2]};default:throw new TypeError("Unknown integer type: "+d)}}function P1(d,f,g,_,b){f=Yt(f);var T=_d(g),R=oe=>oe;if(_===0){var S=32-8*g;R=oe=>oe<<S>>>S}var D=f.includes("unsigned"),F=(oe,ue)=>{},Y;D?Y=function(oe,ue){return F(ue,this.name),ue>>>0}:Y=function(oe,ue){return F(ue,this.name),ue},$r(d,{name:f,fromWireType:R,toWireType:Y,argPackAdvance:8,readValueFromPointer:S1(f,T,_!==0),destructorFunction:null})}function k1(d,f,g){var _=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],b=_[f];function T(R){R=R>>2;var S=z,D=S[R],F=S[R+1];return new b(S.buffer,F,D)}g=Yt(g),$r(d,{name:g,fromWireType:T,argPackAdvance:8,readValueFromPointer:T},{ignoreDuplicateRegistrations:!0})}var ey=(d,f,g,_)=>{if(!(_>0))return 0;for(var b=g,T=g+_-1,R=0;R<d.length;++R){var S=d.charCodeAt(R);if(S>=55296&&S<=57343){var D=d.charCodeAt(++R);S=65536+((S&1023)<<10)|D&1023}if(S<=127){if(g>=T)break;f[g++]=S}else if(S<=2047){if(g+1>=T)break;f[g++]=192|S>>6,f[g++]=128|S&63}else if(S<=65535){if(g+2>=T)break;f[g++]=224|S>>12,f[g++]=128|S>>6&63,f[g++]=128|S&63}else{if(g+3>=T)break;f[g++]=240|S>>18,f[g++]=128|S>>12&63,f[g++]=128|S>>6&63,f[g++]=128|S&63}}return f[g]=0,g-b},N1=(d,f,g)=>ey(d,k,f,g),ty=d=>{for(var f=0,g=0;g<d.length;++g){var _=d.charCodeAt(g);_<=127?f++:_<=2047?f+=2:_>=55296&&_<=57343?(f+=4,++g):f+=3}return f},ny=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,x1=(d,f,g)=>{for(var _=f+g,b=f;d[b]&&!(b>=_);)++b;if(b-f>16&&d.buffer&&ny)return ny.decode(d.subarray(f,b));for(var T="";f<b;){var R=d[f++];if(!(R&128)){T+=String.fromCharCode(R);continue}var S=d[f++]&63;if((R&224)==192){T+=String.fromCharCode((R&31)<<6|S);continue}var D=d[f++]&63;if((R&240)==224?R=(R&15)<<12|S<<6|D:R=(R&7)<<18|S<<12|D<<6|d[f++]&63,R<65536)T+=String.fromCharCode(R);else{var F=R-65536;T+=String.fromCharCode(55296|F>>10,56320|F&1023)}}return T},Ad=(d,f)=>d?x1(k,d,f):"";function O1(d,f){f=Yt(f);var g=f==="std::string";$r(d,{name:f,fromWireType:function(_){var b=z[_>>2],T=_+4,R;if(g)for(var S=T,D=0;D<=b;++D){var F=T+D;if(D==b||k[F]==0){var Y=F-S,oe=Ad(S,Y);R===void 0?R=oe:(R+=String.fromCharCode(0),R+=oe),S=F+1}}else{for(var ue=new Array(b),D=0;D<b;++D)ue[D]=String.fromCharCode(k[T+D]);R=ue.join("")}return Fr(_),R},toWireType:function(_,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var T,R=typeof b=="string";R||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||Le("Cannot pass non-string to std::string"),g&&R?T=ty(b):T=b.length;var S=Rd(4+T+1),D=S+4;if(z[S>>2]=T,g&&R)N1(b,D,T+1);else if(R)for(var F=0;F<T;++F){var Y=b.charCodeAt(F);Y>255&&(Fr(D),Le("String has UTF-16 code units that do not fit in 8 bits")),k[D+F]=Y}else for(var F=0;F<T;++F)k[D+F]=b[F];return _!==null&&_.push(Fr,S),S},argPackAdvance:8,readValueFromPointer:Un,destructorFunction:function(_){Fr(_)}})}var ry=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,D1=(d,f)=>{for(var g=d,_=g>>1,b=_+f/2;!(_>=b)&&P[_];)++_;if(g=_<<1,g-d>32&&ry)return ry.decode(k.subarray(d,g));for(var T="",R=0;!(R>=f/2);++R){var S=N[d+R*2>>1];if(S==0)break;T+=String.fromCharCode(S)}return T},M1=(d,f,g)=>{if(g===void 0&&(g=2147483647),g<2)return 0;g-=2;for(var _=f,b=g<d.length*2?g/2:d.length,T=0;T<b;++T){var R=d.charCodeAt(T);N[f>>1]=R,f+=2}return N[f>>1]=0,f-_},L1=d=>d.length*2,$1=(d,f)=>{for(var g=0,_="";!(g>=f/4);){var b=j[d+g*4>>2];if(b==0)break;if(++g,b>=65536){var T=b-65536;_+=String.fromCharCode(55296|T>>10,56320|T&1023)}else _+=String.fromCharCode(b)}return _},V1=(d,f,g)=>{if(g===void 0&&(g=2147483647),g<4)return 0;for(var _=f,b=_+g-4,T=0;T<d.length;++T){var R=d.charCodeAt(T);if(R>=55296&&R<=57343){var S=d.charCodeAt(++T);R=65536+((R&1023)<<10)|S&1023}if(j[f>>2]=R,f+=4,f+4>b)break}return j[f>>2]=0,f-_},F1=d=>{for(var f=0,g=0;g<d.length;++g){var _=d.charCodeAt(g);_>=55296&&_<=57343&&++g,f+=4}return f},U1=function(d,f,g){g=Yt(g);var _,b,T,R,S;f===2?(_=D1,b=M1,R=L1,T=()=>P,S=1):f===4&&(_=$1,b=V1,R=F1,T=()=>z,S=2),$r(d,{name:g,fromWireType:function(D){for(var F=z[D>>2],Y=T(),oe,ue=D+4,xe=0;xe<=F;++xe){var at=D+4+xe*f;if(xe==F||Y[at>>S]==0){var kt=at-ue,ct=_(ue,kt);oe===void 0?oe=ct:(oe+=String.fromCharCode(0),oe+=ct),ue=at+f}}return Fr(D),oe},toWireType:function(D,F){typeof F!="string"&&Le(`Cannot pass non-string to C++ string type ${g}`);var Y=R(F),oe=Rd(4+Y+f);return z[oe>>2]=Y>>S,b(F,oe+4,Y+f),D!==null&&D.push(Fr,oe),oe},argPackAdvance:8,readValueFromPointer:Un,destructorFunction:function(D){Fr(D)}})};function B1(d,f,g,_,b,T){et[d]={name:Yt(f),rawConstructor:Jn(g,_),rawDestructor:Jn(b,T),fields:[]}}function j1(d,f,g,_,b,T,R,S,D,F){et[d].fields.push({fieldName:Yt(f),getterReturnType:g,getter:Jn(_,b),getterContext:T,setterArgumentType:R,setter:Jn(S,D),setterContext:F})}function H1(d,f){f=Yt(f),$r(d,{isVoid:!0,name:f,argPackAdvance:0,fromWireType:function(){},toWireType:function(g,_){}})}var z1={};function W1(d){var f=z1[d];return f===void 0?Yt(d):f}function iy(){if(typeof globalThis=="object")return globalThis;function d(f){f.$$$embind_global$$$=f;var g=typeof $$$embind_global$$$=="object"&&f.$$$embind_global$$$==f;return g||delete f.$$$embind_global$$$,g}if(typeof $$$embind_global$$$=="object"||(typeof global=="object"&&d(global)?$$$embind_global$$$=global:typeof self=="object"&&d(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function q1(d){return d===0?ai.toHandle(iy()):(d=W1(d),ai.toHandle(iy()[d]))}function K1(d){d>4&&(Bn.get(d).refcount+=1)}function sy(d,f){var g=kn[d];return g===void 0&&Le(f+" has unknown type "+J_(d)),g}function G1(d){var f=new Array(d+1);return function(g,_,b){f[0]=g;for(var T=0;T<d;++T){var R=sy(z[_+T*4>>2],"parameter "+T);f[T+1]=R.readValueFromPointer(b),b+=R.argPackAdvance}var S=new(g.bind.apply(g,f));return ai.toHandle(S)}}var oy={};function Q1(d,f,g,_){d=ai.toValue(d);var b=oy[f];return b||(b=G1(f),oy[f]=b),b(d,g,_)}function Y1(d,f){d=sy(d,"_emval_take_value");var g=d.readValueFromPointer(f);return ai.toHandle(g)}var J1=()=>{Yn("")},X1=(d,f,g)=>k.copyWithin(d,f,f+g),Z1=()=>2147483648,eP=d=>{var f=y.buffer,g=d-f.byteLength+65535>>>16;try{return y.grow(g),Ke(),1}catch{}},tP=d=>{var f=k.length;d>>>=0;var g=Z1();if(d>g)return!1;for(var _=(D,F)=>D+(F-D%F)%F,b=1;b<=4;b*=2){var T=f*(1+.2/b);T=Math.min(T,d+100663296);var R=Math.min(g,_(Math.max(d,T),65536)),S=eP(R);if(S)return!0}return!1},Cd={},nP=()=>o||"./this.program",ta=()=>{if(!ta.strings){var d=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:d,_:nP()};for(var g in Cd)Cd[g]===void 0?delete f[g]:f[g]=Cd[g];var _=[];for(var g in f)_.push(`${g}=${f[g]}`);ta.strings=_}return ta.strings},rP=(d,f)=>{for(var g=0;g<d.length;++g)A[f++>>0]=d.charCodeAt(g);A[f>>0]=0},iP=(d,f)=>{var g=0;return ta().forEach(function(_,b){var T=f+g;z[d+b*4>>2]=T,rP(_,T),g+=_.length+1}),0},sP=(d,f)=>{var g=ta();z[d>>2]=g.length;var _=0;return g.forEach(function(b){_+=b.length+1}),z[f>>2]=_,0};function oP(d){return d}var sl=d=>d%4===0&&(d%100!==0||d%400===0),aP=(d,f)=>{for(var g=0,_=0;_<=f;g+=d[_++]);return g},ay=[31,29,31,30,31,30,31,31,30,31,30,31],cy=[31,28,31,30,31,30,31,31,30,31,30,31],cP=(d,f)=>{for(var g=new Date(d.getTime());f>0;){var _=sl(g.getFullYear()),b=g.getMonth(),T=(_?ay:cy)[b];if(f>T-g.getDate())f-=T-g.getDate()+1,g.setDate(1),b<11?g.setMonth(b+1):(g.setMonth(0),g.setFullYear(g.getFullYear()+1));else return g.setDate(g.getDate()+f),g}return g};function lP(d,f,g){var _=g>0?g:ty(d)+1,b=new Array(_),T=ey(d,b,0,b.length);return f&&(b.length=T),b}var uP=(d,f)=>{A.set(d,f)},hP=(d,f,g,_)=>{var b=j[_+40>>2],T={tm_sec:j[_>>2],tm_min:j[_+4>>2],tm_hour:j[_+8>>2],tm_mday:j[_+12>>2],tm_mon:j[_+16>>2],tm_year:j[_+20>>2],tm_wday:j[_+24>>2],tm_yday:j[_+28>>2],tm_isdst:j[_+32>>2],tm_gmtoff:j[_+36>>2],tm_zone:b?Ad(b):""},R=Ad(g),S={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var D in S)R=R.replace(new RegExp(D,"g"),S[D]);var F=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Y=["January","February","March","April","May","June","July","August","September","October","November","December"];function oe(U,te,mt){for(var Tt=typeof U=="number"?U.toString():U||"";Tt.length<te;)Tt=mt[0]+Tt;return Tt}function ue(U,te){return oe(U,te,"0")}function xe(U,te){function mt(qi){return qi<0?-1:qi>0?1:0}var Tt;return(Tt=mt(U.getFullYear()-te.getFullYear()))===0&&(Tt=mt(U.getMonth()-te.getMonth()))===0&&(Tt=mt(U.getDate()-te.getDate())),Tt}function at(U){switch(U.getDay()){case 0:return new Date(U.getFullYear()-1,11,29);case 1:return U;case 2:return new Date(U.getFullYear(),0,3);case 3:return new Date(U.getFullYear(),0,2);case 4:return new Date(U.getFullYear(),0,1);case 5:return new Date(U.getFullYear()-1,11,31);case 6:return new Date(U.getFullYear()-1,11,30)}}function kt(U){var te=cP(new Date(U.tm_year+1900,0,1),U.tm_yday),mt=new Date(te.getFullYear(),0,4),Tt=new Date(te.getFullYear()+1,0,4),qi=at(mt),al=at(Tt);return xe(qi,te)<=0?xe(al,te)<=0?te.getFullYear()+1:te.getFullYear():te.getFullYear()-1}var ct={"%a":U=>F[U.tm_wday].substring(0,3),"%A":U=>F[U.tm_wday],"%b":U=>Y[U.tm_mon].substring(0,3),"%B":U=>Y[U.tm_mon],"%C":U=>{var te=U.tm_year+1900;return ue(te/100|0,2)},"%d":U=>ue(U.tm_mday,2),"%e":U=>oe(U.tm_mday,2," "),"%g":U=>kt(U).toString().substring(2),"%G":U=>kt(U),"%H":U=>ue(U.tm_hour,2),"%I":U=>{var te=U.tm_hour;return te==0?te=12:te>12&&(te-=12),ue(te,2)},"%j":U=>ue(U.tm_mday+aP(sl(U.tm_year+1900)?ay:cy,U.tm_mon-1),3),"%m":U=>ue(U.tm_mon+1,2),"%M":U=>ue(U.tm_min,2),"%n":()=>`
`,"%p":U=>U.tm_hour>=0&&U.tm_hour<12?"AM":"PM","%S":U=>ue(U.tm_sec,2),"%t":()=>"	","%u":U=>U.tm_wday||7,"%U":U=>{var te=U.tm_yday+7-U.tm_wday;return ue(Math.floor(te/7),2)},"%V":U=>{var te=Math.floor((U.tm_yday+7-(U.tm_wday+6)%7)/7);if((U.tm_wday+371-U.tm_yday-2)%7<=2&&te++,te){if(te==53){var mt=(U.tm_wday+371-U.tm_yday)%7;mt!=4&&(mt!=3||!sl(U.tm_year))&&(te=1)}}else{te=52;var Tt=(U.tm_wday+7-U.tm_yday-1)%7;(Tt==4||Tt==5&&sl(U.tm_year%400-1))&&te++}return ue(te,2)},"%w":U=>U.tm_wday,"%W":U=>{var te=U.tm_yday+7-(U.tm_wday+6)%7;return ue(Math.floor(te/7),2)},"%y":U=>(U.tm_year+1900).toString().substring(2),"%Y":U=>U.tm_year+1900,"%z":U=>{var te=U.tm_gmtoff,mt=te>=0;return te=Math.abs(te)/60,te=te/60*100+te%60,(mt?"+":"-")+("0000"+te).slice(-4)},"%Z":U=>U.tm_zone,"%%":()=>"%"};R=R.replace(/%%/g,"\0\0");for(var D in ct)R.includes(D)&&(R=R.replace(new RegExp(D,"g"),ct[D](T)));R=R.replace(/\0\0/g,"%");var Nt=lP(R,!1);return Nt.length>f?0:(uP(Nt,d),Nt.length-1)},dP=(d,f,g,_,b)=>hP(d,f,g,_);Qt=n.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},US(),Fs=n.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},r1(),QS(),f1(),Y_=n.UnboundTypeError=_1(Error,"UnboundTypeError"),E1(),T1();var fP={q:M,u:Q,a:ie,h:Z,l:se,I:fe,P:we,n:Ge,ba:Be,d:W,oa:VS,Y:FS,fa:jS,na:y1,ma:v1,D:w1,ea:I1,W:C1,J:R1,w:P1,s:k1,V:O1,L:U1,Q:B1,pa:j1,ga:H1,U:Z_,la:q1,R:K1,ia:Q1,ka:Y1,K:J1,da:X1,ca:tP,$:iP,aa:sP,H:xP,T:BP,B:DP,p:PP,b:pP,C:NP,ha:LP,c:vP,j:EP,i:_P,x:OP,O:kP,v:RP,G:VP,N:FP,A:MP,F:jP,Z:zP,X:WP,k:wP,f:yP,e:gP,g:mP,M:UP,m:CP,o:bP,S:TP,t:AP,ja:SP,y:$P,r:IP,E:HP,z:oP,_:dP};w();var Fr=n._free=d=>(Fr=n._free=v.sa)(d),Rd=n._malloc=d=>(Rd=n._malloc=v.ta)(d),ly=d=>(ly=v.va)(d);n.__embind_initialize_bindings=()=>(n.__embind_initialize_bindings=v.wa)();var Ae=(d,f)=>(Ae=v.xa)(d,f),na=d=>(na=v.ya)(d),ke=()=>(ke=v.za)(),Ne=d=>(Ne=v.Aa)(d),uy=d=>(uy=v.Ba)(d),hy=d=>(hy=v.Ca)(d),dy=(d,f,g)=>(dy=v.Da)(d,f,g),fy=d=>(fy=v.Ea)(d);n.dynCall_viijii=(d,f,g,_,b,T,R)=>(n.dynCall_viijii=v.Fa)(d,f,g,_,b,T,R);var py=n.dynCall_jiii=(d,f,g,_)=>(py=n.dynCall_jiii=v.Ga)(d,f,g,_),my=n.dynCall_jiiii=(d,f,g,_,b)=>(my=n.dynCall_jiiii=v.Ha)(d,f,g,_,b);n.dynCall_iiiiij=(d,f,g,_,b,T,R)=>(n.dynCall_iiiiij=v.Ia)(d,f,g,_,b,T,R),n.dynCall_iiiiijj=(d,f,g,_,b,T,R,S,D)=>(n.dynCall_iiiiijj=v.Ja)(d,f,g,_,b,T,R,S,D),n.dynCall_iiiiiijj=(d,f,g,_,b,T,R,S,D,F)=>(n.dynCall_iiiiiijj=v.Ka)(d,f,g,_,b,T,R,S,D,F);function pP(d,f){var g=ke();try{return $e(d)(f)}catch(_){if(Ne(g),_!==_+0)throw _;Ae(1,0)}}function mP(d,f,g,_){var b=ke();try{$e(d)(f,g,_)}catch(T){if(Ne(b),T!==T+0)throw T;Ae(1,0)}}function gP(d,f,g){var _=ke();try{$e(d)(f,g)}catch(b){if(Ne(_),b!==b+0)throw b;Ae(1,0)}}function _P(d,f,g,_,b){var T=ke();try{return $e(d)(f,g,_,b)}catch(R){if(Ne(T),R!==R+0)throw R;Ae(1,0)}}function yP(d,f){var g=ke();try{$e(d)(f)}catch(_){if(Ne(g),_!==_+0)throw _;Ae(1,0)}}function vP(d,f,g){var _=ke();try{return $e(d)(f,g)}catch(b){if(Ne(_),b!==b+0)throw b;Ae(1,0)}}function wP(d){var f=ke();try{$e(d)()}catch(g){if(Ne(f),g!==g+0)throw g;Ae(1,0)}}function EP(d,f,g,_){var b=ke();try{return $e(d)(f,g,_)}catch(T){if(Ne(b),T!==T+0)throw T;Ae(1,0)}}function bP(d,f,g,_,b,T){var R=ke();try{$e(d)(f,g,_,b,T)}catch(S){if(Ne(R),S!==S+0)throw S;Ae(1,0)}}function TP(d,f,g,_,b,T,R){var S=ke();try{$e(d)(f,g,_,b,T,R)}catch(D){if(Ne(S),D!==D+0)throw D;Ae(1,0)}}function IP(d,f,g,_,b,T,R,S,D,F,Y){var oe=ke();try{$e(d)(f,g,_,b,T,R,S,D,F,Y)}catch(ue){if(Ne(oe),ue!==ue+0)throw ue;Ae(1,0)}}function AP(d,f,g,_,b,T,R,S){var D=ke();try{$e(d)(f,g,_,b,T,R,S)}catch(F){if(Ne(D),F!==F+0)throw F;Ae(1,0)}}function CP(d,f,g,_,b){var T=ke();try{$e(d)(f,g,_,b)}catch(R){if(Ne(T),R!==R+0)throw R;Ae(1,0)}}function RP(d,f,g,_,b,T,R){var S=ke();try{return $e(d)(f,g,_,b,T,R)}catch(D){if(Ne(S),D!==D+0)throw D;Ae(1,0)}}function SP(d,f,g,_,b,T,R,S,D){var F=ke();try{$e(d)(f,g,_,b,T,R,S,D)}catch(Y){if(Ne(F),Y!==Y+0)throw Y;Ae(1,0)}}function PP(d){var f=ke();try{return $e(d)()}catch(g){if(Ne(f),g!==g+0)throw g;Ae(1,0)}}function kP(d,f,g,_,b,T,R){var S=ke();try{return $e(d)(f,g,_,b,T,R)}catch(D){if(Ne(S),D!==D+0)throw D;Ae(1,0)}}function NP(d,f,g,_){var b=ke();try{return $e(d)(f,g,_)}catch(T){if(Ne(b),T!==T+0)throw T;Ae(1,0)}}function xP(d,f,g,_){var b=ke();try{return $e(d)(f,g,_)}catch(T){if(Ne(b),T!==T+0)throw T;Ae(1,0)}}function OP(d,f,g,_,b,T){var R=ke();try{return $e(d)(f,g,_,b,T)}catch(S){if(Ne(R),S!==S+0)throw S;Ae(1,0)}}function DP(d,f,g,_,b,T){var R=ke();try{return $e(d)(f,g,_,b,T)}catch(S){if(Ne(R),S!==S+0)throw S;Ae(1,0)}}function MP(d,f,g,_,b,T,R,S,D,F){var Y=ke();try{return $e(d)(f,g,_,b,T,R,S,D,F)}catch(oe){if(Ne(Y),oe!==oe+0)throw oe;Ae(1,0)}}function LP(d,f,g){var _=ke();try{return $e(d)(f,g)}catch(b){if(Ne(_),b!==b+0)throw b;Ae(1,0)}}function $P(d,f,g,_,b,T,R,S,D,F){var Y=ke();try{$e(d)(f,g,_,b,T,R,S,D,F)}catch(oe){if(Ne(Y),oe!==oe+0)throw oe;Ae(1,0)}}function VP(d,f,g,_,b,T,R,S){var D=ke();try{return $e(d)(f,g,_,b,T,R,S)}catch(F){if(Ne(D),F!==F+0)throw F;Ae(1,0)}}function FP(d,f,g,_,b,T,R,S,D){var F=ke();try{return $e(d)(f,g,_,b,T,R,S,D)}catch(Y){if(Ne(F),Y!==Y+0)throw Y;Ae(1,0)}}function UP(d,f,g,_,b,T,R){var S=ke();try{$e(d)(f,g,_,b,T,R)}catch(D){if(Ne(S),D!==D+0)throw D;Ae(1,0)}}function BP(d,f,g,_){var b=ke();try{return $e(d)(f,g,_)}catch(T){if(Ne(b),T!==T+0)throw T;Ae(1,0)}}function jP(d,f,g,_,b,T,R,S,D,F,Y,oe){var ue=ke();try{return $e(d)(f,g,_,b,T,R,S,D,F,Y,oe)}catch(xe){if(Ne(ue),xe!==xe+0)throw xe;Ae(1,0)}}function HP(d,f,g,_,b,T,R,S,D,F,Y,oe,ue,xe,at,kt){var ct=ke();try{$e(d)(f,g,_,b,T,R,S,D,F,Y,oe,ue,xe,at,kt)}catch(Nt){if(Ne(ct),Nt!==Nt+0)throw Nt;Ae(1,0)}}function zP(d,f,g,_){var b=ke();try{return py(d,f,g,_)}catch(T){if(Ne(b),T!==T+0)throw T;Ae(1,0)}}function WP(d,f,g,_,b){var T=ke();try{return my(d,f,g,_,b)}catch(R){if(Ne(T),R!==R+0)throw R;Ae(1,0)}}var ol;St=function d(){ol||gy(),ol||(St=d)};function gy(){if(Rt>0||(Mr(),Rt>0))return;function d(){ol||(ol=!0,n.calledRun=!0,!I&&(un(),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),He()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),d()},1)):d()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return gy(),e.ready}})();function dH(t){return vS(wS,t)}async function fH(t,{tryHarder:e=Ei.tryHarder,formats:n=Ei.formats,maxSymbols:r=Ei.maxSymbols}=Ei){return lH(t,{tryHarder:e,formats:n,maxSymbols:r},wS)}const ES=new Map([["aztec","Aztec"],["code_128","Code128"],["code_39","Code39"],["code_93","Code93"],["codabar","Codabar"],["data_matrix","DataMatrix"],["ean_13","EAN-13"],["ean_8","EAN-8"],["itf","ITF"],["pdf417","PDF417"],["qr_code","QRCode"],["upc_a","UPC-A"],["upc_e","UPC-E"]]);function pH(t){for(const[e,n]of ES)if(t===n)return e;return"unknown"}var Kl;class pd{constructor(e={}){q3(this,Kl,void 0);var n;try{const r=(n=e==null?void 0:e.formats)==null?void 0:n.filter(i=>i!=="unknown");if((r==null?void 0:r.length)===0)throw new TypeError("Hint option provided, but is empty.");r==null||r.forEach(i=>{if(!tE.includes(i))throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${i}' is not a valid enum value of type BarcodeFormat.`)}),dH().catch(()=>{}),K3(this,Kl,r??[])}catch(r){throw nE(r,"Failed to construct 'BarcodeDetector'")}}static async getSupportedFormats(){return tE.filter(e=>e!=="unknown")}async detect(e){try{const n=await tH(e);if(n===null)return[];let r;try{r=await fH(n,{tryHarder:!0,formats:W3(this,Kl).map(i=>ES.get(i))})}catch{throw new DOMException("Barcode detection service unavailable. Use 'setZXingModuleOverrides' in offline or strict CSP environments.","NotSupportedError")}return r.map(i=>{const{topLeft:{x:s,y:o},topRight:{x:a,y:c},bottomLeft:{x:l,y:u},bottomRight:{x:h,y:p}}=i.position,m=Math.min(s,a,l,h),y=Math.min(o,c,u,p),v=Math.max(s,a,l,h),I=Math.max(o,c,u,p);return{boundingBox:new DOMRectReadOnly(m,y,v-m,I-y),rawValue:new TextDecoder().decode(i.bytes),format:pH(i.format),cornerPoints:[{x:s,y:o},{x:a,y:c},{x:h,y:p},{x:l,y:u}]}})}catch(n){throw nE(n,"Failed to execute 'detect' on 'BarcodeDetector'")}}}Kl=new WeakMap;const bS=(t,e,n="error")=>{let r,i;const s=new Promise((o,a)=>{r=o,i=a,t.addEventListener(e,r),t.addEventListener(n,i)});return s.finally(()=>{t.removeEventListener(e,r),t.removeEventListener(n,i)}),s},oE=t=>new Promise(e=>setTimeout(e,t));class mH extends Error{constructor(){super("can't process cross-origin image"),this.name="DropImageFetchError"}}class TS extends Error{constructor(){super("this browser has no Stream API support"),this.name="StreamApiNotSupportedError"}}class gH extends Error{constructor(){super("camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP."),this.name="InsecureContextError"}}class _H extends Error{constructor(){super("Loading camera stream timed out after 3 seconds. If you are on iOS in PWA mode, this is a known issue (see https://github.com/gruhn/vue-qrcode-reader/issues/298)"),this.name="StreamLoadTimeoutError"}}let cm;const yH=t=>{cm=new pd({formats:t})},vH=async(t,{detectHandler:e,locateHandler:n,minDelay:r,formats:i})=>{cm=new pd({formats:i});const s=o=>async a=>{if(t.readyState>1){const{lastScanned:c,contentBefore:l,lastScanHadContent:u}=o;if(a-c<r)window.requestAnimationFrame(s(o));else{const h=await cm.detect(t),p=h.some(v=>!l.includes(v.rawValue));p&&e(h);const m=h.length>0;m&&n(h),!m&&u&&n(h);const y={lastScanned:a,lastScanHadContent:m,contentBefore:p?h.map(v=>v.rawValue):l};window.requestAnimationFrame(s(y))}}};s({lastScanned:performance.now(),contentBefore:[],lastScanHadContent:!1})(performance.now())},wH=async t=>{if(t.startsWith("http")&&t.includes(location.host)===!1)throw new mH;const e=document.createElement("img");return e.src=t,await bS(e,"load"),e},IS=async(t,e=["qr_code"])=>await new pd({formats:e}).detect(t),EH=async(t,e=["qr_code"])=>{const n=new pd({formats:e}),r=await wH(t);return await n.detect(r)};var AS={},Sn={};Object.defineProperty(Sn,"__esModule",{value:!0});Sn.compactObject=SS;Sn.deprecated=kH;var bH=Sn.detectBrowser=NH;Sn.disableLog=RH;Sn.disableWarnings=SH;Sn.extractVersion=Gl;Sn.filterStats=xH;Sn.log=PH;Sn.walkStats=Yu;Sn.wrapPeerConnectionEvent=CH;function TH(t,e,n){return e=IH(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function IH(t){var e=AH(t,"string");return Mi(e)==="symbol"?e:String(e)}function AH(t,e){if(Mi(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Mi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Mi(t){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mi(t)}var CS=!0,RS=!0;function Gl(t,e,n){var r=t.match(e);return r&&r.length>=n&&parseInt(r[n],10)}function CH(t,e,n){if(t.RTCPeerConnection){var r=t.RTCPeerConnection.prototype,i=r.addEventListener;r.addEventListener=function(o,a){if(o!==e)return i.apply(this,arguments);var c=function(l){var u=n(l);u&&(a.handleEvent?a.handleEvent(u):a(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,c),i.apply(this,[o,c])};var s=r.removeEventListener;r.removeEventListener=function(o,a){if(o!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(a))return s.apply(this,arguments);var c=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[o,c])},Object.defineProperty(r,"on"+e,{get:function(){return this["_on"+e]},set:function(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}}function RH(t){return typeof t!="boolean"?new Error("Argument type: "+Mi(t)+". Please use a boolean."):(CS=t,t?"adapter.js logging disabled":"adapter.js logging enabled")}function SH(t){return typeof t!="boolean"?new Error("Argument type: "+Mi(t)+". Please use a boolean."):(RS=!t,"adapter.js deprecation warnings "+(t?"disabled":"enabled"))}function PH(){if((typeof window>"u"?"undefined":Mi(window))==="object"){if(CS)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function kH(t,e){RS&&console.warn(t+" is deprecated, please use "+e+" instead.")}function NH(t){var e={browser:null,version:null};if(typeof t>"u"||!t.navigator)return e.browser="Not a browser.",e;var n=t.navigator;if(n.mozGetUserMedia)e.browser="firefox",e.version=Gl(n.userAgent,/Firefox\/(\d+)\./,1);else if(n.webkitGetUserMedia||t.isSecureContext===!1&&t.webkitRTCPeerConnection)e.browser="chrome",e.version=Gl(n.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.RTCPeerConnection&&n.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=Gl(n.userAgent,/AppleWebKit\/(\d+)\./,1),e.supportsUnifiedPlan=t.RTCRtpTransceiver&&"currentDirection"in t.RTCRtpTransceiver.prototype;else return e.browser="Not a supported browser.",e;return e}function aE(t){return Object.prototype.toString.call(t)==="[object Object]"}function SS(t){return aE(t)?Object.keys(t).reduce(function(e,n){var r=aE(t[n]),i=r?SS(t[n]):t[n],s=r&&!Object.keys(i).length;return i===void 0||s?e:Object.assign(e,TH({},n,i))},{}):t}function Yu(t,e,n){!e||n.has(e.id)||(n.set(e.id,e),Object.keys(e).forEach(function(r){r.endsWith("Id")?Yu(t,t.get(e[r]),n):r.endsWith("Ids")&&e[r].forEach(function(i){Yu(t,t.get(i),n)})}))}function xH(t,e,n){var r=n?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;var s=[];return t.forEach(function(o){o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(function(o){t.forEach(function(a){a.type===r&&a.trackId===o.id&&Yu(t,a,i)})}),i}Object.defineProperty(AS,"__esModule",{value:!0});var OH=AS.shimGetUserMedia=LH,DH=MH(Sn);function PS(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(PS=function(r){return r?n:e})(t)}function MH(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||yi(t)!=="object"&&typeof t!="function")return{default:t};var n=PS(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function yi(t){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yi(t)}var cE=DH.log;function LH(t,e){var n=t&&t.navigator;if(n.mediaDevices){var r=function(c){if(yi(c)!=="object"||c.mandatory||c.optional)return c;var l={};return Object.keys(c).forEach(function(u){if(!(u==="require"||u==="advanced"||u==="mediaSource")){var h=yi(c[u])==="object"?c[u]:{ideal:c[u]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);var p=function(y,v){return y?y+v.charAt(0).toUpperCase()+v.slice(1):v==="deviceId"?"sourceId":v};if(h.ideal!==void 0){l.optional=l.optional||[];var m={};typeof h.ideal=="number"?(m[p("min",u)]=h.ideal,l.optional.push(m),m={},m[p("max",u)]=h.ideal,l.optional.push(m)):(m[p("",u)]=h.ideal,l.optional.push(m))}h.exact!==void 0&&typeof h.exact!="number"?(l.mandatory=l.mandatory||{},l.mandatory[p("",u)]=h.exact):["min","max"].forEach(function(y){h[y]!==void 0&&(l.mandatory=l.mandatory||{},l.mandatory[p(y,u)]=h[y])})}}),c.advanced&&(l.optional=(l.optional||[]).concat(c.advanced)),l},i=function(c,l){if(e.version>=61)return l(c);if(c=JSON.parse(JSON.stringify(c)),c&&yi(c.audio)==="object"){var u=function(y,v,I){v in y&&!(I in y)&&(y[I]=y[v],delete y[v])};c=JSON.parse(JSON.stringify(c)),u(c.audio,"autoGainControl","googAutoGainControl"),u(c.audio,"noiseSuppression","googNoiseSuppression"),c.audio=r(c.audio)}if(c&&yi(c.video)==="object"){var h=c.video.facingMode;h=h&&(yi(h)==="object"?h:{ideal:h});var p=e.version<66;if(h&&(h.exact==="user"||h.exact==="environment"||h.ideal==="user"||h.ideal==="environment")&&!(n.mediaDevices.getSupportedConstraints&&n.mediaDevices.getSupportedConstraints().facingMode&&!p)){delete c.video.facingMode;var m;if(h.exact==="environment"||h.ideal==="environment"?m=["back","rear"]:(h.exact==="user"||h.ideal==="user")&&(m=["front"]),m)return n.mediaDevices.enumerateDevices().then(function(y){y=y.filter(function(I){return I.kind==="videoinput"});var v=y.find(function(I){return m.some(function(A){return I.label.toLowerCase().includes(A)})});return!v&&y.length&&m.includes("back")&&(v=y[y.length-1]),v&&(c.video.deviceId=h.exact?{exact:v.deviceId}:{ideal:v.deviceId}),c.video=r(c.video),cE("chrome: "+JSON.stringify(c)),l(c)})}c.video=r(c.video)}return cE("chrome: "+JSON.stringify(c)),l(c)},s=function(c){return e.version>=64?c:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[c.name]||c.name,message:c.message,constraint:c.constraint||c.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}},o=function(c,l,u){i(c,function(h){n.webkitGetUserMedia(h,l,function(p){u&&u(s(p))})})};if(n.getUserMedia=o.bind(n),n.mediaDevices.getUserMedia){var a=n.mediaDevices.getUserMedia.bind(n.mediaDevices);n.mediaDevices.getUserMedia=function(c){return i(c,function(l){return a(l).then(function(u){if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(function(h){h.stop()}),new DOMException("","NotFoundError");return u},function(u){return Promise.reject(s(u))})})}}}}var kS={};Object.defineProperty(kS,"__esModule",{value:!0});var $H=kS.shimGetUserMedia=UH,VH=FH(Sn);function NS(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(NS=function(r){return r?n:e})(t)}function FH(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||lo(t)!=="object"&&typeof t!="function")return{default:t};var n=NS(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function lo(t){"@babel/helpers - typeof";return lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lo(t)}function UH(t,e){var n=t&&t.navigator,r=t&&t.MediaStreamTrack;if(n.getUserMedia=function(c,l,u){VH.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),n.mediaDevices.getUserMedia(c).then(l,u)},!(e.version>55&&"autoGainControl"in n.mediaDevices.getSupportedConstraints())){var i=function(c,l,u){l in c&&!(u in c)&&(c[u]=c[l],delete c[l])},s=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(c){return lo(c)==="object"&&lo(c.audio)==="object"&&(c=JSON.parse(JSON.stringify(c)),i(c.audio,"autoGainControl","mozAutoGainControl"),i(c.audio,"noiseSuppression","mozNoiseSuppression")),s(c)},r&&r.prototype.getSettings){var o=r.prototype.getSettings;r.prototype.getSettings=function(){var c=o.apply(this,arguments);return i(c,"mozAutoGainControl","autoGainControl"),i(c,"mozNoiseSuppression","noiseSuppression"),c}}if(r&&r.prototype.applyConstraints){var a=r.prototype.applyConstraints;r.prototype.applyConstraints=function(c){return this.kind==="audio"&&lo(c)==="object"&&(c=JSON.parse(JSON.stringify(c)),i(c,"autoGainControl","mozAutoGainControl"),i(c,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[c])}}}}var Or={};Object.defineProperty(Or,"__esModule",{value:!0});Or.shimAudioContext=YH;Or.shimCallbacksAPI=WH;Or.shimConstraints=DS;Or.shimCreateOfferLegacy=QH;var BH=Or.shimGetUserMedia=qH;Or.shimLocalStreamsAPI=HH;Or.shimRTCIceServerUrls=KH;Or.shimRemoteStreamsAPI=zH;Or.shimTrackEventTransceiver=GH;var xS=jH(Sn);function OS(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(OS=function(r){return r?n:e})(t)}function jH(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||Li(t)!=="object"&&typeof t!="function")return{default:t};var n=OS(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function Li(t){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Li(t)}function HH(t){if(!(Li(t)!=="object"||!t.RTCPeerConnection)){if("getLocalStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in t.RTCPeerConnection.prototype)){var e=t.RTCPeerConnection.prototype.addTrack;t.RTCPeerConnection.prototype.addStream=function(n){var r=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(function(i){return e.call(r,i,n)}),n.getVideoTracks().forEach(function(i){return e.call(r,i,n)})},t.RTCPeerConnection.prototype.addTrack=function(n){for(var r=this,i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return s&&s.forEach(function(a){r._localStreams?r._localStreams.includes(a)||r._localStreams.push(a):r._localStreams=[a]}),e.apply(this,arguments)}}"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(n){var r=this;this._localStreams||(this._localStreams=[]);var i=this._localStreams.indexOf(n);if(i!==-1){this._localStreams.splice(i,1);var s=n.getTracks();this.getSenders().forEach(function(o){s.includes(o.track)&&r.removeTrack(o)})}})}}function zH(t){if(!(Li(t)!=="object"||!t.RTCPeerConnection)&&("getRemoteStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in t.RTCPeerConnection.prototype))){Object.defineProperty(t.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(n){var r=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=n),this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(function(s){if(r._remoteStreams||(r._remoteStreams=[]),!r._remoteStreams.includes(s)){r._remoteStreams.push(s);var o=new Event("addstream");o.stream=s,r.dispatchEvent(o)}})})}});var e=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){var n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(function(i){if(n._remoteStreams||(n._remoteStreams=[]),!(n._remoteStreams.indexOf(i)>=0)){n._remoteStreams.push(i);var s=new Event("addstream");s.stream=i,n.dispatchEvent(s)}})}),e.apply(n,arguments)}}}function WH(t){if(!(Li(t)!=="object"||!t.RTCPeerConnection)){var e=t.RTCPeerConnection.prototype,n=e.createOffer,r=e.createAnswer,i=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(c,l){var u=arguments.length>=2?arguments[2]:arguments[0],h=n.apply(this,[u]);return l?(h.then(c,l),Promise.resolve()):h},e.createAnswer=function(c,l){var u=arguments.length>=2?arguments[2]:arguments[0],h=r.apply(this,[u]);return l?(h.then(c,l),Promise.resolve()):h};var a=function(c,l,u){var h=i.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h};e.setLocalDescription=a,a=function(c,l,u){var h=s.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.setRemoteDescription=a,a=function(c,l,u){var h=o.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.addIceCandidate=a}}function qH(t){var e=t&&t.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){var n=e.mediaDevices,r=n.getUserMedia.bind(n);e.mediaDevices.getUserMedia=function(i){return r(DS(i))}}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(i,s,o){e.mediaDevices.getUserMedia(i).then(s,o)}).bind(e))}function DS(t){return t&&t.video!==void 0?Object.assign({},t,{video:xS.compactObject(t.video)}):t}function KH(t){if(t.RTCPeerConnection){var e=t.RTCPeerConnection;t.RTCPeerConnection=function(n,r){if(n&&n.iceServers){for(var i=[],s=0;s<n.iceServers.length;s++){var o=n.iceServers[s];o.urls===void 0&&o.url?(xS.deprecated("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,i.push(o)):i.push(n.iceServers[s])}n.iceServers=i}return new e(n,r)},t.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(t.RTCPeerConnection,"generateCertificate",{get:function(){return e.generateCertificate}})}}function GH(t){Li(t)==="object"&&t.RTCTrackEvent&&"receiver"in t.RTCTrackEvent.prototype&&!("transceiver"in t.RTCTrackEvent.prototype)&&Object.defineProperty(t.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function QH(t){var e=t.RTCPeerConnection.prototype.createOffer;t.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);var r=this.getTransceivers().find(function(s){return s.receiver.track.kind==="audio"});n.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);var i=this.getTransceivers().find(function(s){return s.receiver.track.kind==="video"});n.offerToReceiveVideo===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveVideo===!0&&!i&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function YH(t){Li(t)!=="object"||t.AudioContext||(t.AudioContext=t.webkitAudioContext)}const JH=t=>{let e=!1,n;return(...r)=>(e||(n=t(r),e=!0),n)};function Br(t,e){if(t===!1)throw new Error(e??"assertion failure")}const XH=JH(()=>{const t=bH(window);switch(t.browser){case"chrome":OH(window,t);break;case"firefox":$H(window,t);break;case"safari":BH(window,t);break;default:throw new TS}});let Hr={isActive:!1};function xf(){if(Hr.isActive){Hr.videoEl.src="",Hr.videoEl.srcObject=null,Hr.videoEl.load();for(const t of Hr.stream.getTracks())Hr.stream.removeTrack(t),t.stop();Hr={isActive:!1}}}async function ZH(t,{constraints:e,torch:n}){var r,i;if(window.isSecureContext!==!0)throw new gH;if(((r=navigator==null?void 0:navigator.mediaDevices)==null?void 0:r.getUserMedia)===void 0)throw new TS;XH();const s=await navigator.mediaDevices.getUserMedia({audio:!1,video:e});if(t.srcObject!==void 0?t.srcObject=s:t.mozSrcObject!==void 0?t.mozSrcObject=s:window.URL.createObjectURL?t.src=window.URL.createObjectURL(s):window.webkitURL?t.src=window.webkitURL.createObjectURL(s):t.src=s.id,await Promise.race([bS(t,"loadeddata"),oE(3e3).then(()=>{throw new _H})]),await oE(500),n){const[a]=s.getVideoTracks();a.getCapabilities().torch?a.applyConstraints({advanced:[{torch:!0}]}):console.warn("device does not support torch capability")}Hr={videoEl:t,stream:s,isActive:!0};const[o]=Hr.stream.getVideoTracks();return((i=o==null?void 0:o.getCapabilities)==null?void 0:i.call(o))??{}}const ez={class:"qrcode-stream-wrapper"},tz={class:"qrcode-stream-overlay"},nz=Kn({__name:"QrcodeStream",props:{constraints:{type:Object,default(){return{facingMode:"environment"}}},formats:{type:Array,default:()=>["qr_code"]},paused:{type:Boolean,default:!1},torch:{type:Boolean,default:!1},track:{type:Function}},emits:["detect","camera-on","camera-off","error"],setup(t,{emit:e}){const n=t,r=Xe(),i=Xe(),s=Xe(),o=Xe(!1),a=Xe(!1);Nm(()=>{a.value=!0}),lh(()=>{xf()});const c=Lt(()=>({torch:n.torch,constraints:n.constraints,shouldStream:a.value&&!n.paused}));Qr(c,async m=>{const y=s.value;Br(y!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus video element should always be defined.");const v=r.value;Br(v!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus canvas should always be defined.");const I=v.getContext("2d");if(Br(I!==null,"if cavnas is defined, canvas 2d context should also be non-null"),m.shouldStream)try{const A=await ZH(y,m);a.value?(o.value=!0,e("camera-on",A)):xf()}catch(A){e("error",A)}else v.width=y.videoWidth,v.height=y.videoHeight,I.drawImage(y,0,0,y.videoWidth,y.videoHeight),xf(),o.value=!1,e("camera-off")},{deep:!0});const{formats:l}=Mk(n);Qr(l,m=>{a.value&&yH(m)});const u=Lt(()=>c.value.shouldStream&&o.value);Qr(u,m=>{if(m){Br(r.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus pause frame canvas is defined"),h(r.value),Br(i.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus tracking canvas is defined"),h(i.value);const y=()=>n.track===void 0?500:40;Br(s.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus video element is defined"),vH(s.value,{detectHandler:v=>e("detect",v),formats:n.formats,locateHandler:p,minDelay:y()})}});const h=m=>{const y=m.getContext("2d");Br(y!==null,"canvas 2d context should always be non-null"),y.clearRect(0,0,m.width,m.height)},p=m=>{const y=i.value;Br(y!==void 0,"onLocate handler should only be called when component is mounted. Thus tracking canvas is always defined.");const v=s.value;if(Br(v!==void 0,"onLocate handler should only be called when component is mounted. Thus video element is always defined."),m.length===0||n.track===void 0)h(y);else{const I=v.offsetWidth,A=v.offsetHeight,k=v.videoWidth,N=v.videoHeight,P=Math.max(I/k,A/N),j=k*P,z=N*P,ce=j/k,ye=z/N,Ke=(I-j)/2,Pe=(A-z)/2,pt=({x:un,y:He})=>({x:Math.floor(un*ce),y:Math.floor(He*ye)}),jt=({x:un,y:He})=>({x:Math.floor(un+Ke),y:Math.floor(He+Pe)}),Ze=m.map(un=>{const{boundingBox:He,cornerPoints:Fe}=un,{x:Ie,y:Pn}=jt(pt({x:He.x,y:He.y})),{x:Rt,y:St}=pt({x:He.width,y:He.height});return{...un,cornerPoints:Fe.map(Pt=>jt(pt(Pt))),boundingBox:DOMRectReadOnly.fromRect({x:Ie,y:Pn,width:Rt,height:St})}});y.width=v.offsetWidth,y.height=v.offsetHeight;const Mr=y.getContext("2d");n.track(Ze,Mr)}};return(m,y)=>(Je(),vt("div",ez,[Ye("video",{ref_key:"videoRef",ref:s,class:nh([{"qrcode-stream-camera--hidden":!u.value},"qrcode-stream-camera"]),autoplay:"",muted:"",playsinline:""},null,2),tN(Ye("canvas",{ref_key:"pauseFrameRef",ref:r,class:"qrcode-stream-camera"},null,512),[[px,!u.value]]),Ye("canvas",{ref_key:"trackingLayerRef",ref:i,class:"qrcode-stream-overlay"},null,512),Ye("div",tz,[QE(m.$slots,"default",{},void 0,!0)])]))}}),rz=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},MS=rz(nz,[["__scopeId","data-v-dfa4038c"]]),iz=Kn({__name:"QrcodeCapture",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect"],setup(t,{emit:e}){const n=t,r=i=>{if(!(!(i.target instanceof HTMLInputElement)||!i.target.files))for(const s of Array.from(i.target.files))IS(s,n.formats).then(o=>{e("detect",o)})};return(i,s)=>(Je(),vt("input",{onChange:r,type:"file",name:"image",accept:"image/*",capture:"environment",multiple:""},null,32))}}),sz=["onDrop"],oz=Kn({__name:"QrcodeDropZone",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect","dragover","error"],setup(t,{emit:e}){const n=t,r=async o=>{try{const a=await o;e("detect",a)}catch(a){e("error",a)}},i=o=>{e("dragover",o)},s=({dataTransfer:o})=>{if(!o)return;i(!1);const a=[...Array.from(o.files)],c=o.getData("text/uri-list");a.forEach(l=>{r(IS(l))}),c!==""&&r(EH(c,n.formats))};return(o,a)=>(Je(),vt("div",{onDrop:pl(s,["prevent","stop"]),onDragenter:a[0]||(a[0]=pl(c=>i(!0),["prevent","stop"])),onDragleave:a[1]||(a[1]=pl(c=>i(!1),["prevent","stop"])),onDragover:a[2]||(a[2]=pl(()=>{},["prevent","stop"]))},[QE(o.$slots,"default")],40,sz))}});function az(t){t.component("qrcode-stream",MS),t.component("qrcode-capture",iz),t.component("qrcode-drop-zone",oz)}const cz={install:az};let Ju=null;typeof window<"u"?Ju=window.Vue:typeof global<"u"&&(Ju=global.Vue);Ju&&Ju.use(cz);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class lz extends _n{render(){return it`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const uz=En`:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let lm=class extends lz{};lm.styles=[uz];lm=X([hr("md-icon")],lm);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const hz=En`:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-shape: var(--md-filled-icon-button-container-shape, 9999px);--_container-size: var(--md-filled-icon-button-container-size, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-icon-button-toggle-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-icon-color: var(--md-filled-icon-button-toggle-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-state-layer-color: var(--md-filled-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-icon-color: var(--md-filled-icon-button-toggle-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-icon-color: var(--md-filled-icon-button-toggle-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-state-layer-color: var(--md-filled-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var( --md-filled-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-icon-button-container-shape-end-start, var(--_container-shape) )}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled:not(:disabled){color:var(--_toggle-icon-color)}.toggle-filled:not(:disabled):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled:not(:disabled):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled:not(:disabled):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}/*# sourceMappingURL=filled-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function lE(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var LS;class wn extends _n{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=lE(this,this.flipIconInRtl),this[LS]=this.attachInternals()}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Do].form}get labels(){return this[Do].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?Qu`div`:Qu`button`,{ariaLabel:n,ariaHasPopup:r,ariaExpanded:i}=this,s=n&&this.ariaLabelSelected,o=s?_e:this.selected;let a=_e;return this.href||(a=s&&this.selected?this.ariaLabelSelected:n),iS`<${e}
        class="icon-button ${Ps(this.getRenderClasses())}"
        id="button"
        aria-label="${a||_e}"
        aria-haspopup="${!this.href&&r||_e}"
        aria-expanded="${!this.href&&i||_e}"
        aria-pressed="${o}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?_e:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():_e}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return it`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||_e}"
        aria-label="${e||_e}"
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return it`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return it`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`}renderTouchTarget(){return it`<span class="touch"></span>`}renderFocusRing(){return it`<md-focus-ring part="focus-ring" for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return it`<md-ripple
      for=${this.href?"link":_e}
      ?disabled="${!this.href&&this.disabled}"
    ></md-ripple>`}connectedCallback(){this.flipIcon=lE(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){!this.toggle||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}LS=Do;tl(wn),lS(wn);wn.formAssociated=!0;wn.shadowRootOptions={mode:"open",delegatesFocus:!0};X([Te({type:Boolean,reflect:!0})],wn.prototype,"disabled",void 0);X([Te({type:Boolean,attribute:"flip-icon-in-rtl"})],wn.prototype,"flipIconInRtl",void 0);X([Te()],wn.prototype,"href",void 0);X([Te()],wn.prototype,"target",void 0);X([Te({attribute:"aria-label-selected"})],wn.prototype,"ariaLabelSelected",void 0);X([Te({type:Boolean})],wn.prototype,"toggle",void 0);X([Te({type:Boolean,reflect:!0})],wn.prototype,"selected",void 0);X([Te()],wn.prototype,"type",void 0);X([Te()],wn.prototype,"value",void 0);X([zi()],wn.prototype,"flipIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const dz=En`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-size))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let um=class extends wn{getRenderClasses(){return{...super.getRenderClasses(),filled:!0,"toggle-filled":this.toggle}}};um.styles=[dz,hz];um=X([hr("md-filled-icon-button")],um);const fz={class:"qrScanner"},pz=Ye("md-icon",null," replay ",-1),mz=[pz],gz=Kn({__name:"ScanQr",emits:["codeFound"],setup(t,{emit:e}){const n=Xe(!0),r=Xe(!1);Xe();const i="vibrate"in navigator;function s(a){a.length>=1&&(i&&navigator.vibrate(200),r.value=!0,e("codeFound",a[0].rawValue))}function o(){n.value=!1}return(a,c)=>(Je(),vt("div",fz,[At(gt(MS),{onDetect:s,constraints:{facingMode:"environment"},onCameraOn:o,paused:r.value},{default:Zl(()=>[n.value?(Je(),vt("div",{key:0,class:"loading-indicator","on:cameraOn":o},"Caricamento...",32)):pr("",!0)]),_:1},8,["paused"]),r.value?(Je(),vt("md-filled-icon-button",{key:0,class:"restartButton",onClick:c[0]||(c[0]=l=>r.value=!1)},mz)):pr("",!0)]))}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class md extends _n{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}X([Te({type:Boolean,reflect:!0})],md.prototype,"inset",void 0);X([Te({type:Boolean,reflect:!0,attribute:"inset-start"})],md.prototype,"insetStart",void 0);X([Te({type:Boolean,reflect:!0,attribute:"inset-end"})],md.prototype,"insetEnd",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const _z=En`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let hm=class extends md{};hm.styles=[_z];hm=X([hr("md-divider")],hm);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const yz={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:Ic.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:Ic.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},vz={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:Ic.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:Ic.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Et extends _n{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>yz,this.getCloseAnimation=()=>vz,this.isOpen=!1,this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.addEventListener("submit",this.handleSubmit)}async show(){var i;const{dialog:e,container:n}=this;if(!e||!n||e.open)return;if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(i=this.querySelector("[autofocus]"))==null||i.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened"))}async close(e=this.returnValue){const{dialog:n,container:r}=this;if(!n||!r||!n.open)return;const i=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=i;return}await this.animateDialog(this.getCloseAnimation()),n.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),n={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:r}=this;return it`
      <div class="scrim"></div>
      <dialog
        class=${Ps(n)}
        aria-label=${r||_e}
        aria-labelledby=${this.hasHeadline?"headline":_e}
        role=${this.type==="alert"?"alertdialog":_e}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||_e}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||_e}>
              <slot name="headline"
                  @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions"
              @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const n of e)this.handleAnchorIntersection(n)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const n=e.target,{submitter:r}=e;n.method!=="dialog"||!r||this.close(r.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;const n=!D3(this,e);e.preventDefault(),!n&&this.close()}async animateDialog(e){const{dialog:n,scrim:r,container:i,headline:s,content:o,actions:a}=this;if(!n||!r||!i||!s||!o||!a)return;const{container:c,dialog:l,scrim:u,headline:h,content:p,actions:m}=e,y=[[n,l??[]],[r,u??[]],[i,c??[]],[s,h??[]],[o,p??[]],[a,m??[]]],v=[];for(const[I,A]of y)for(const k of A)v.push(I.animate(...k));await Promise.all(v.map(I=>I.finished))}handleHeadlineChange(e){const n=e.target;this.hasHeadline=n.assignedElements().length>0}handleActionsChange(e){const n=e.target;this.hasActions=n.assignedElements().length>0}handleIconChange(e){const n=e.target;this.hasIcon=n.assignedElements().length>0}handleAnchorIntersection(e){const{target:n,isIntersecting:r}=e;n===this.topAnchor&&(this.isAtScrollTop=r),n===this.bottomAnchor&&(this.isAtScrollBottom=r)}}tl(Et);Et.shadowRootOptions={..._n.shadowRootOptions,delegatesFocus:!0};X([Te({type:Boolean})],Et.prototype,"open",null);X([Te({attribute:!1})],Et.prototype,"returnValue",void 0);X([Te()],Et.prototype,"type",void 0);X([Qn("dialog")],Et.prototype,"dialog",void 0);X([Qn(".scrim")],Et.prototype,"scrim",void 0);X([Qn(".container")],Et.prototype,"container",void 0);X([Qn(".headline")],Et.prototype,"headline",void 0);X([Qn(".content")],Et.prototype,"content",void 0);X([Qn(".actions")],Et.prototype,"actions",void 0);X([zi()],Et.prototype,"isAtScrollTop",void 0);X([zi()],Et.prototype,"isAtScrollBottom",void 0);X([Qn(".scroller")],Et.prototype,"scroller",void 0);X([Qn(".top.anchor")],Et.prototype,"topAnchor",void 0);X([Qn(".bottom.anchor")],Et.prototype,"bottomAnchor",void 0);X([zi()],Et.prototype,"hasHeadline",void 0);X([zi()],Et.prototype,"hasActions",void 0);X([zi()],Et.prototype,"hasIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const wz=En`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-type: var(--md-dialog-headline-type, var(--md-sys-typescale-headline-small, 400 1.5rem / 2rem var(--md-ref-typeface-brand, Roboto)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-dialog-supporting-text-type, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font:var(--_headline-type);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;display:flex;gap:8px;margin:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);margin-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;margin-top:16px}.scrollable slot[name=headline]::slotted(*){margin-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){margin-top:8px}.container{border-radius:inherit;display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);content:"";inset:0;position:absolute}.scroller{flex:1;overflow:hidden;z-index:0}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font:var(--_supporting-text-type);position:relative}slot[name=content]::slotted(*){margin:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){display:flex;gap:8px;justify-content:flex-end;margin:16px 24px 24px}.has-actions slot[name=content]::slotted(*){margin-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let dm=class extends Et{};dm.styles=[wz];dm=X([hr("md-dialog")],dm);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ez extends vn{}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const bz=En`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-text-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let fm=class extends Ez{};fm.styles=[hS,bz];fm=X([hr("md-text-button")],fm);const Tz=["open"],Iz=Ye("div",{slot:"headline"},"Conferma identità",-1),Az={key:0,slot:"content",id:"form-id",method:"dialog"},Cz=["open"],Rz=Ye("div",{slot:"headline"},"Codice non trovato",-1),Sz={key:0,slot:"content",id:"form-id",method:"dialog"},Pz={slot:"actions"},kz=Kn({__name:"Scanner",setup(t){const e=Xe(),n=Xe(),r=Xe(!1),i=Xe(!1);async function s(c){n.value=c;const l=await I_(Gr(er,`codes/${c}`),{once:!0}).promise.value;if(!l){i.value=!0;return}e.value=Lt(()=>l.user),r.value=!0}async function o(){r.value=!1;const c=e.value.value;await tR(er,async l=>{var u;l.set(Gr(er,`scans/${new Date().getTime()}`),{code:n.value,timestamp:Fu(),username:c.username,userRef:Gr(er,`users/${c.id}`)}),l.update(Gr(er,`users/${(u=e.value)==null?void 0:u.uid}`),{lastPunchTime:Fu()})})}function a(){r.value=!1}return(c,l)=>(Je(),vt(jn,null,[At(gz,{onCodeFound:s}),Ye("md-dialog",{onClose:l[0]||(l[0]=u=>r.value=!1),class:"removeDialog",type:"alert",open:r.value},[Iz,e.value&&e.value.value?(Je(),vt("form",Az,[Ye("div",null," Il codice corrisponde a: "+Mf(e.value.value.username),1)])):pr("",!0),Ye("div",{slot:"actions"},[Ye("md-text-button",{form:"form-id",value:"cancel",onClick:a},"Annulla"),Ye("md-text-button",{form:"form-id",value:"confirm",onClick:o},"Conferma")])],40,Tz),Ye("md-dialog",{onClose:l[2]||(l[2]=u=>i.value=!1),class:"removeDialog",type:"alert",open:i.value},[Rz,n.value?(Je(),vt("form",Sz,[Ye("div",null," Il codice non corrisponde a nessun utente. Contatta gli sviluppatori con il seguente codice: "+Mf(n.value),1)])):pr("",!0),Ye("div",Pz,[Ye("md-text-button",{form:"form-id",value:"congirm",onClick:l[1]||(l[1]=u=>i.value=!1)},"Ok")])],40,Cz)],64))}}),Nz=t=>(qk("data-v-cb6d17e7"),t=t(),Kk(),t),xz=["src"],Oz=Nz(()=>Ye("img",{class:"accountImage",src:"https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/llwijg0ncg0pyknjcmnk",alt:""},null,-1)),Dz=Kn({__name:"AccountImage",setup(t){var r;const e=bh(),n=Xe((r=e.value)==null?void 0:r.providerData[0].photoURL);return(i,s)=>{const o=dN("RouterLink");return Je(),vt("div",null,[n.value?(Je(),ho(o,{key:0,to:"/myAccount"},{default:Zl(()=>[Ye("img",{class:"accountImage",src:n.value,referrerpolicy:"no-referrer",alt:""},null,8,xz)]),_:1})):(Je(),ho(o,{key:1,to:"/myAccount"},{default:Zl(()=>[Oz]),_:1}))])}}});const Mz=TR(Dz,[["__scopeId","data-v-cb6d17e7"]]);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Lz=En`@media(forced-colors: active){:host{--md-switch-disabled-selected-icon-color: GrayText;--md-switch-disabled-selected-icon-opacity: 1;--md-switch-disabled-selected-track-color: GrayText;--md-switch-disabled-track-opacity: 1;--md-switch-disabled-handle-color: GrayText;--md-switch-disabled-handle-opacity: 1;--md-switch-disabled-icon-color: Canvas;--md-switch-disabled-icon-opacity: 1;--md-switch-selected-focus-track-color: ButtonText;--md-switch-selected-hover-track-color: ButtonText;--md-switch-selected-icon-color: ButtonText;--md-switch-selected-hover-icon-color: ButtonText;--md-switch-selected-focus-icon-color: ButtonText;--md-switch-selected-pressed-icon-color: ButtonText;--md-switch-selected-pressed-track-color: ButtonText;--md-switch-selected-track-color: ButtonText;--md-switch-focus-handle-color: ButtonText;--md-switch-handle-color: ButtonText;--md-switch-hover-handle-color: ButtonText;--md-switch-icon-color: Canvas;--md-switch-hover-icon-color: Canvas;--md-switch-focus-icon-color: Canvas;--md-switch-pressed-icon-color: Canvas;--md-switch-pressed-handle-color: ButtonText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Dr extends _n{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.disabled=!1,this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.value="on",this.internals=this.attachInternals(),this.addEventListener("click",e=>{var n;cS(e)&&((n=this.button)==null||n.focus(),this.button!=null&&aS(this.button))})}update(e){const n=String(this.selected);this.internals.setFormValue(this.selected?this.value:null,n),super.update(e)}render(){return it`
      <button
        id="switch"
        type="button"
        class="switch ${Ps(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label=${this.ariaLabel||_e}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <md-focus-ring part="focus-ring"></md-focus-ring>
        <span class="track">
          ${this.renderHandle()}
        </span>
      </button>
    `}getRenderClasses(){return{"switch--selected":this.selected,"switch--unselected":!this.selected}}renderHandle(){const e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return it`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${Ps(e)}">
          ${this.shouldShowIcons()?this.renderIcons():it``}
        </span>
      </span>
    `}renderIcons(){return it`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?it``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return it`
      <svg class="icon icon--on" viewBox="0 0 24 24">
        <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z"/>
      </svg>
    `}renderOffIcon(){return it`
      <svg class="icon icon--off" viewBox="0 0 24 24">
        <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"/>
      </svg>
    `}renderTouchTarget(){return it`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleClick(){this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected=e==="true"}}tl(Dr);Dr.shadowRootOptions={mode:"open",delegatesFocus:!0};Dr.formAssociated=!0;X([Te({type:Boolean,reflect:!0})],Dr.prototype,"disabled",void 0);X([Te({type:Boolean})],Dr.prototype,"selected",void 0);X([Te({type:Boolean})],Dr.prototype,"icons",void 0);X([Te({type:Boolean,attribute:"show-only-selected-icon"})],Dr.prototype,"showOnlySelectedIcon",void 0);X([Qn("button")],Dr.prototype,"button",void 0);X([Te()],Dr.prototype,"value",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const $z=En`:host{--_disabled-selected-handle-color: var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));--_disabled-selected-handle-opacity: var(--md-switch-disabled-selected-handle-opacity, 1);--_disabled-selected-icon-color: var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-switch-disabled-selected-icon-opacity, 0.38);--_disabled-selected-track-color: var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-track-opacity: var(--md-switch-disabled-track-opacity, 0.12);--_handle-shape: var(--md-switch-handle-shape, 9999px);--_pressed-handle-height: var(--md-switch-pressed-handle-height, 28px);--_pressed-handle-width: var(--md-switch-pressed-handle-width, 28px);--_selected-focus-handle-color: var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-focus-icon-color: var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-focus-track-color: var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4));--_selected-handle-color: var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff));--_selected-handle-height: var(--md-switch-selected-handle-height, 24px);--_selected-handle-width: var(--md-switch-selected-handle-width, 24px);--_selected-hover-handle-color: var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-hover-icon-color: var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-hover-state-layer-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--_selected-hover-track-color: var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4));--_selected-icon-color: var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-icon-size: var(--md-switch-selected-icon-size, 16px);--_selected-pressed-handle-color: var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-pressed-icon-color: var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-pressed-state-layer-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12);--_selected-pressed-track-color: var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4));--_selected-track-color: var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4));--_state-layer-shape: var(--md-switch-state-layer-shape, 9999px);--_state-layer-size: var(--md-switch-state-layer-size, 40px);--_track-height: var(--md-switch-track-height, 32px);--_track-outline-width: var(--md-switch-track-outline-width, 2px);--_track-shape: var(--md-switch-track-shape, 9999px);--_track-width: var(--md-switch-track-width, 52px);--_with-icon-handle-height: var(--md-switch-with-icon-handle-height, 24px);--_with-icon-handle-width: var(--md-switch-with-icon-handle-width, 24px);--_disabled-handle-color: var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-opacity: var(--md-switch-disabled-handle-opacity, 0.38);--_disabled-icon-color: var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-icon-opacity: var(--md-switch-disabled-icon-opacity, 0.38);--_disabled-track-color: var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-track-outline-color: var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-handle-color: var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color: var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-color: var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-outline-color: var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-color: var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e));--_handle-height: var(--md-switch-handle-height, 16px);--_handle-width: var(--md-switch-handle-width, 16px);--_hover-handle-color: var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-state-layer-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--_hover-track-color: var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-track-outline-color: var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e));--_icon-color: var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_icon-size: var(--md-switch-icon-size, 16px);--_pressed-handle-color: var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-state-layer-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12);--_pressed-track-color: var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-track-outline-color: var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e));--_track-color: var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-outline-color: var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-shape-start-start: var( --md-switch-handle-shape-start-start, var(--_handle-shape) );--_handle-shape-start-end: var( --md-switch-handle-shape-start-end, var(--_handle-shape) );--_handle-shape-end-end: var( --md-switch-handle-shape-end-end, var(--_handle-shape) );--_handle-shape-end-start: var( --md-switch-handle-shape-end-start, var(--_handle-shape) );--_track-shape-start-start: var( --md-switch-track-shape-start-start, var(--_track-shape) );--_track-shape-start-end: var( --md-switch-track-shape-start-end, var(--_track-shape) );--_track-shape-end-end: var( --md-switch-track-shape-end-end, var(--_track-shape) );--_track-shape-end-start: var( --md-switch-track-shape-end-start, var(--_track-shape) );display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_track-height))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--_track-shape-start-start);--md-focus-ring-shape-start-end: var(--_track-shape-start-end);--md-focus-ring-shape-end-end: var(--_track-shape-end-end);--md-focus-ring-shape-end-start: var(--_track-shape-end-start)}.switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;padding:0;position:relative;width:var(--_track-width);height:var(--_track-height);border-start-start-radius:var(--_track-shape-start-start);border-start-end-radius:var(--_track-shape-start-end);border-end-end-radius:var(--_track-shape-end-end);border-end-start-radius:var(--_track-shape-end-start)}.touch{position:absolute;height:48px;width:100%}:host([touch-target=none]) .touch{display:none}.switch:disabled{cursor:default;pointer-events:none}.switch:disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.switch:disabled .track::before{background-clip:content-box}.switch--selected:disabled .track{background-clip:border-box}.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.switch:disabled .track::before,.switch:disabled .track::after{transition:none;opacity:var(--_disabled-track-opacity)}.switch--selected .track::before{background-color:var(--_selected-track-color)}.switch--selected:hover .track::before{background-color:var(--_selected-hover-track-color)}.switch--selected:focus-within .track::before{background-color:var(--_selected-focus-track-color)}.switch--selected:active .track::before{background-color:var(--_selected-pressed-track-color)}.switch--selected:disabled .track::before{background-color:var(--_disabled-selected-track-color)}.switch--unselected .track::before{background-color:var(--_track-color);border-color:var(--_track-outline-color);border-style:solid;border-width:var(--_track-outline-width)}.switch--unselected:hover .track::before{background-color:var(--_hover-track-color);border-color:var(--_hover-track-outline-color)}.switch--unselected:focus-visible .track::before{background-color:var(--_focus-track-color);border-color:var(--_focus-track-outline-color)}.switch--unselected:active .track::before{background-color:var(--_pressed-track-color);border-color:var(--_pressed-track-outline-color)}.switch--unselected:disabled .track::before{background-color:var(--_disabled-track-color);border-color:var(--_disabled-track-outline-color)}.handle-container{display:grid;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.switch--selected .handle-container{margin-inline-start:calc(var(--_track-width) - var(--_track-height))}.switch--unselected .handle-container{margin-inline-end:calc(var(--_track-width) - var(--_track-height))}.switch:disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--_handle-shape-start-start);border-start-end-radius:var(--_handle-shape-start-end);border-end-end-radius:var(--_handle-shape-end-end);border-end-start-radius:var(--_handle-shape-end-start);height:var(--_handle-height);width:var(--_handle-width);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.switch:disabled .handle,.switch:disabled .handle::before{transition:none}.switch--selected .handle{height:var(--_selected-handle-height);width:var(--_selected-handle-width)}.handle.with-icon{height:var(--_with-icon-handle-height);width:var(--_with-icon-handle-width)}.switch--selected:enabled:active .handle,.switch--unselected:enabled:active .handle{height:var(--_pressed-handle-height);width:var(--_pressed-handle-width);transition-timing-function:linear;transition-duration:100ms}.switch--selected .handle::before{background-color:var(--_selected-handle-color)}.switch--selected:hover .handle::before{background-color:var(--_selected-hover-handle-color)}.switch--selected:focus-within .handle::before{background-color:var(--_selected-focus-handle-color)}.switch--selected:active .handle::before{background-color:var(--_selected-pressed-handle-color)}.switch--selected:disabled .handle::before{background-color:var(--_disabled-selected-handle-color);opacity:var(--_disabled-selected-handle-opacity)}.switch--unselected .handle::before{background-color:var(--_handle-color)}.switch--unselected:hover .handle::before{background-color:var(--_hover-handle-color)}.switch--unselected:focus-within .handle::before{background-color:var(--_focus-handle-color)}.switch--unselected:active .handle::before{background-color:var(--_pressed-handle-color)}.switch--unselected:disabled .handle::before{background-color:var(--_disabled-handle-color);opacity:var(--_disabled-handle-opacity)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.switch--selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.switch--unselected md-ripple{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.switch:disabled .icon{transition:none}.switch--selected .icon--on,.switch--unselected .icon--off{opacity:1}.switch--unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--_icon-size);height:var(--_icon-size);fill:var(--_icon-color)}.switch--unselected:hover .icon--off{fill:var(--_hover-icon-color)}.switch--unselected:focus-within .icon--off{fill:var(--_focus-icon-color)}.switch--unselected:active .icon--off{fill:var(--_pressed-icon-color)}.switch--unselected:disabled .icon--off{fill:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.icon--on{width:var(--_selected-icon-size);height:var(--_selected-icon-size);fill:var(--_selected-icon-color)}.switch--selected:hover .icon--on{fill:var(--_selected-hover-icon-color)}.switch--selected:focus-within .icon--on{fill:var(--_selected-focus-icon-color)}.switch--selected:active .icon--on{fill:var(--_selected-pressed-icon-color)}.switch--selected:disabled .icon--on{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=switch-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let pm=class extends Dr{};pm.styles=[$z,Lz];pm=X([hr("md-switch")],pm);const Vz={key:1,class:"section"},Fz={key:2,class:"section"},Uz={class:"scanner"},Bz=Ye("div",{class:"text"}," Scansiona un codice e conferma l'identità per timbrare ",-1),jz={key:3,class:"section"},Hz=Ye("div",{class:"text"}," Questo è il tuo codice, mostralo per timbrare ",-1),zz={class:"code"},Wz={key:4,class:"section"},qz={class:"remote"},Kz=Ye("div",{class:"text"}," Clicca sul bottone per timbrare il cartellino ",-1),Gz={key:5,class:"lastPunchTime display-small"},Qz=Kn({__name:"HomeView",setup(t){var u;const e=bh(),n=I_(Gr(er,`users/${(u=e.value)==null?void 0:u.uid}`)),r=Lt(()=>{var h;return((h=n.value)==null?void 0:h.role)==="scanner"}),i=Lt(()=>{var h;return((h=n.value)==null?void 0:h.role)==="scanned"}),s=Lt(()=>{var h;return((h=n.value)==null?void 0:h.role)==="remote"}),o=Lt(()=>{var h;return(h=n.value)==null?void 0:h.actualCode}),a=Xe(window.innerWidth),c=()=>a.value=window.innerWidth;window.addEventListener("resize",c),lh(()=>window.removeEventListener("resize",c));function l(h){const p=h.getHours().toString().padStart(2,"0"),m=h.getMinutes().toString().padStart(2,"0");return`${p}:${m}`}return(h,p)=>(Je(),vt("main",null,[a.value<900||!gt(e)?(Je(),ho(Mz,{key:0})):pr("",!0),!r.value&&!i.value&&!s.value?(Je(),vt("div",Vz," Aspetta qualche istante. Vedrai qui il tuo codice ")):pr("",!0),r.value?(Je(),vt("div",Fz,[Ye("div",Uz,[At(kz)]),Bz])):pr("",!0),i.value&&o.value?(Je(),vt("div",jz,[Hz,Ye("div",zz,[At(v9,{codeString:o.value},null,8,["codeString"])])])):pr("",!0),s.value&&o.value?(Je(),vt("div",Wz,[Ye("div",qz,[Kz,At(z3,{class:"remoteBtn",codeString:o.value},null,8,["codeString"])])])):pr("",!0),gt(n)&&(i.value||s.value)&&gt(n).lastPunchTime?(Je(),vt("div",Gz," Ultima timbratura: "+Mf(l(gt(n).lastPunchTime.toDate())),1)):pr("",!0)]))}});const $S=TO({history:Ux("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!0},component:Qz},{path:"/login",name:"login",component:()=>A0(()=>import("./LoginView-bff3812f.js"),["assets/LoginView-bff3812f.js","assets/filled-button-8dfb5718.js","assets/LoginView-82260fdb.css"])},{path:"/myAccount",name:"myAccount",meta:{requiresAuth:!0},component:()=>A0(()=>import("./UserView-554d5cd9.js"),["assets/UserView-554d5cd9.js","assets/filled-button-8dfb5718.js","assets/UserView-da84faf4.css"])}]});$S.beforeEach(async t=>{if(t.meta.requiresAuth&&!await Q2())return{path:"/login",query:{redirect:t.fullPath}}});const gd=_x(Ij);gd.use(Ex());gd.use($S);gd.use(Tj,{firebaseApp:L_,modules:[bj()]});gd.mount("#app");export{Yz as $,_e as A,Je as B,qk as C,p3 as D,Ic as E,Kk as F,Xz as G,eW as H,uW as I,Gr as J,er as K,Zz as L,TR as M,pi as N,Nm as O,iW as P,MN as Q,nW as R,rW as S,Ss as T,bh as U,gt as V,At as W,vn as X,hS as Y,jn as Z,X as _,En as a,I_ as a0,dW as a1,lW as a2,ho as a3,tW as a4,F3 as a5,w3 as b,E3 as c,v3 as d,hr as e,iS as f,D3 as g,Qu as h,Qn as i,Kn as j,Xe as k,e3 as l,vt as m,Te as n,Ps as o,Ye as p,pl as q,tl as r,_n as s,zi as t,fW as u,Jz as v,tN as w,it as x,Mf as y,pr as z};
