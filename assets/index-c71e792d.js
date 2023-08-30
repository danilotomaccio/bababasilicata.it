(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function em(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ze={},zs=[],Zn=()=>{},C1=()=>!1,R1=/^on[^a-z]/,ju=t=>R1.test(t),tm=t=>t.startsWith("onUpdate:"),Mt=Object.assign,nm=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},S1=Object.prototype.hasOwnProperty,Oe=(t,e)=>S1.call(t,e),ue=Array.isArray,qs=t=>Hu(t)==="[object Map]",z0=t=>Hu(t)==="[object Set]",ve=t=>typeof t=="function",bt=t=>typeof t=="string",rm=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",q0=t=>at(t)&&ve(t.then)&&ve(t.catch),K0=Object.prototype.toString,Hu=t=>K0.call(t),P1=t=>Hu(t).slice(8,-1),G0=t=>Hu(t)==="[object Object]",im=t=>bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Tl=em(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},k1=/-(\w)/g,Er=Wu(t=>t.replace(k1,(e,n)=>n?n.toUpperCase():"")),N1=/\B([A-Z])/g,No=Wu(t=>t.replace(N1,"-$1").toLowerCase()),zu=Wu(t=>t.charAt(0).toUpperCase()+t.slice(1)),md=Wu(t=>t?`on${zu(t)}`:""),Va=(t,e)=>!Object.is(t,e),bl=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Bl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ef=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let J_;const Tf=()=>J_||(J_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sm(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=bt(r)?M1(r):sm(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(bt(t))return t;if(at(t))return t}}const O1=/;(?![^(]*\))/g,x1=/:([^]+)/,D1=/\/\*[^]*?\*\//g;function M1(t){const e={};return t.replace(D1,"").split(O1).forEach(n=>{if(n){const r=n.split(x1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function qu(t){let e="";if(bt(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=qu(t[n]);r&&(e+=r+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const L1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$1=em(L1);function Q0(t){return!!t||t===""}const X_=t=>bt(t)?t:t==null?"":ue(t)||at(t)&&(t.toString===K0||!ve(t.toString))?JSON.stringify(t,Y0,2):String(t),Y0=(t,e)=>e&&e.__v_isRef?Y0(t,e.value):qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:z0(e)?{[`Set(${e.size})`]:[...e.values()]}:at(e)&&!ue(e)&&!G0(e)?String(e):e;let Rn;class J0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Rn,!e&&Rn&&(this.index=(Rn.scopes||(Rn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Rn;try{return Rn=this,e()}finally{Rn=n}}}on(){Rn=this}off(){Rn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function X0(t){return new J0(t)}function V1(t,e=Rn){e&&e.active&&e.effects.push(t)}function Z0(){return Rn}function F1(t){Rn&&Rn.cleanups.push(t)}const om=t=>{const e=new Set(t);return e.w=0,e.n=0,e},eE=t=>(t.w&Ai)>0,tE=t=>(t.n&Ai)>0,U1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ai},B1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];eE(i)&&!tE(i)?i.delete(t):e[n++]=i,i.w&=~Ai,i.n&=~Ai}e.length=n}},jl=new WeakMap;let la=0,Ai=1;const bf=30;let Kn;const is=Symbol(""),If=Symbol("");class am{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,V1(this,r)}run(){if(!this.active)return this.fn();let e=Kn,n=yi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Kn,Kn=this,yi=!0,Ai=1<<++la,la<=bf?U1(this):Z_(this),this.fn()}finally{la<=bf&&B1(this),Ai=1<<--la,Kn=this.parent,yi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Kn===this?this.deferStop=!0:this.active&&(Z_(this),this.onStop&&this.onStop(),this.active=!1)}}function Z_(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let yi=!0;const nE=[];function Oo(){nE.push(yi),yi=!1}function xo(){const t=nE.pop();yi=t===void 0?!0:t}function En(t,e,n){if(yi&&Kn){let r=jl.get(t);r||jl.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=om()),rE(i)}}function rE(t,e){let n=!1;la<=bf?tE(t)||(t.n|=Ai,n=!eE(t)):n=!t.has(Kn),n&&(t.add(Kn),Kn.deps.push(t))}function Kr(t,e,n,r,i,s){const o=jl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ue(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ue(t)?im(n)&&a.push(o.get("length")):(a.push(o.get(is)),qs(t)&&a.push(o.get(If)));break;case"delete":ue(t)||(a.push(o.get(is)),qs(t)&&a.push(o.get(If)));break;case"set":qs(t)&&a.push(o.get(is));break}if(a.length===1)a[0]&&Af(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Af(om(c))}}function Af(t,e){const n=ue(t)?t:[...t];for(const r of n)r.computed&&ey(r);for(const r of n)r.computed||ey(r)}function ey(t,e){(t!==Kn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function j1(t,e){var n;return(n=jl.get(t))==null?void 0:n.get(e)}const H1=em("__proto__,__v_isRef,__isVue"),iE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rm)),W1=cm(),z1=cm(!1,!0),q1=cm(!0),ty=K1();function K1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=$e(this);for(let s=0,o=this.length;s<o;s++)En(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map($e)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Oo();const r=$e(this)[e].apply(this,n);return xo(),r}}),t}function G1(t){const e=$e(this);return En(e,"has",t),e.hasOwnProperty(t)}function cm(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?uk:lE:e?cE:aE).get(r))return r;const o=ue(r);if(!t){if(o&&Oe(ty,i))return Reflect.get(ty,i,s);if(i==="hasOwnProperty")return G1}const a=Reflect.get(r,i,s);return(rm(i)?iE.has(i):H1(i))||(t||En(r,"get",i),e)?a:xt(a)?o&&im(i)?a:a.value:at(a)?t?hE(a):Gu(a):a}}const Q1=sE(),Y1=sE(!0);function sE(t=!1){return function(n,r,i,s){let o=n[r];if(ro(o)&&xt(o)&&!xt(i))return!1;if(!t&&(!Hl(i)&&!ro(i)&&(o=$e(o),i=$e(i)),!ue(n)&&xt(o)&&!xt(i)))return o.value=i,!0;const a=ue(n)&&im(r)?Number(r)<n.length:Oe(n,r),c=Reflect.set(n,r,i,s);return n===$e(s)&&(a?Va(i,o)&&Kr(n,"set",r,i):Kr(n,"add",r,i)),c}}function J1(t,e){const n=Oe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Kr(t,"delete",e,void 0),r}function X1(t,e){const n=Reflect.has(t,e);return(!rm(e)||!iE.has(e))&&En(t,"has",e),n}function Z1(t){return En(t,"iterate",ue(t)?"length":is),Reflect.ownKeys(t)}const oE={get:W1,set:Q1,deleteProperty:J1,has:X1,ownKeys:Z1},ek={get:q1,set(t,e){return!0},deleteProperty(t,e){return!0}},tk=Mt({},oE,{get:z1,set:Y1}),lm=t=>t,Ku=t=>Reflect.getPrototypeOf(t);function Xc(t,e,n=!1,r=!1){t=t.__v_raw;const i=$e(t),s=$e(e);n||(e!==s&&En(i,"get",e),En(i,"get",s));const{has:o}=Ku(i),a=r?lm:n?fm:Fa;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Zc(t,e=!1){const n=this.__v_raw,r=$e(n),i=$e(t);return e||(t!==i&&En(r,"has",t),En(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function el(t,e=!1){return t=t.__v_raw,!e&&En($e(t),"iterate",is),Reflect.get(t,"size",t)}function ny(t){t=$e(t);const e=$e(this);return Ku(e).has.call(e,t)||(e.add(t),Kr(e,"add",t,t)),this}function ry(t,e){e=$e(e);const n=$e(this),{has:r,get:i}=Ku(n);let s=r.call(n,t);s||(t=$e(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Va(e,o)&&Kr(n,"set",t,e):Kr(n,"add",t,e),this}function iy(t){const e=$e(this),{has:n,get:r}=Ku(e);let i=n.call(e,t);i||(t=$e(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Kr(e,"delete",t,void 0),s}function sy(){const t=$e(this),e=t.size!==0,n=t.clear();return e&&Kr(t,"clear",void 0,void 0),n}function tl(t,e){return function(r,i){const s=this,o=s.__v_raw,a=$e(o),c=e?lm:t?fm:Fa;return!t&&En(a,"iterate",is),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function nl(t,e,n){return function(...r){const i=this.__v_raw,s=$e(i),o=qs(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?lm:e?fm:Fa;return!e&&En(s,"iterate",c?If:is),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function ii(t){return function(...e){return t==="delete"?!1:this}}function nk(){const t={get(s){return Xc(this,s)},get size(){return el(this)},has:Zc,add:ny,set:ry,delete:iy,clear:sy,forEach:tl(!1,!1)},e={get(s){return Xc(this,s,!1,!0)},get size(){return el(this)},has:Zc,add:ny,set:ry,delete:iy,clear:sy,forEach:tl(!1,!0)},n={get(s){return Xc(this,s,!0)},get size(){return el(this,!0)},has(s){return Zc.call(this,s,!0)},add:ii("add"),set:ii("set"),delete:ii("delete"),clear:ii("clear"),forEach:tl(!0,!1)},r={get(s){return Xc(this,s,!0,!0)},get size(){return el(this,!0)},has(s){return Zc.call(this,s,!0)},add:ii("add"),set:ii("set"),delete:ii("delete"),clear:ii("clear"),forEach:tl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=nl(s,!1,!1),n[s]=nl(s,!0,!1),e[s]=nl(s,!1,!0),r[s]=nl(s,!0,!0)}),[t,n,e,r]}const[rk,ik,sk,ok]=nk();function um(t,e){const n=e?t?ok:sk:t?ik:rk;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Oe(n,i)&&i in r?n:r,i,s)}const ak={get:um(!1,!1)},ck={get:um(!1,!0)},lk={get:um(!0,!1)},aE=new WeakMap,cE=new WeakMap,lE=new WeakMap,uk=new WeakMap;function hk(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dk(t){return t.__v_skip||!Object.isExtensible(t)?0:hk(P1(t))}function Gu(t){return ro(t)?t:hm(t,!1,oE,ak,aE)}function uE(t){return hm(t,!1,tk,ck,cE)}function hE(t){return hm(t,!0,ek,lk,lE)}function hm(t,e,n,r,i){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=dk(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Ks(t){return ro(t)?Ks(t.__v_raw):!!(t&&t.__v_isReactive)}function ro(t){return!!(t&&t.__v_isReadonly)}function Hl(t){return!!(t&&t.__v_isShallow)}function dE(t){return Ks(t)||ro(t)}function $e(t){const e=t&&t.__v_raw;return e?$e(e):t}function dm(t){return Bl(t,"__v_skip",!0),t}const Fa=t=>at(t)?Gu(t):t,fm=t=>at(t)?hE(t):t;function fE(t){yi&&Kn&&(t=$e(t),rE(t.dep||(t.dep=om())))}function pE(t,e){t=$e(t);const n=t.dep;n&&Af(n)}function xt(t){return!!(t&&t.__v_isRef===!0)}function ct(t){return gE(t,!1)}function mE(t){return gE(t,!0)}function gE(t,e){return xt(t)?t:new fk(t,e)}class fk{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:$e(e),this._value=n?e:Fa(e)}get value(){return fE(this),this._value}set value(e){const n=this.__v_isShallow||Hl(e)||ro(e);e=n?e:$e(e),Va(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Fa(e),pE(this))}}function Et(t){return xt(t)?t.value:t}const pk={get:(t,e,n)=>Et(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return xt(i)&&!xt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function _E(t){return Ks(t)?t:new Proxy(t,pk)}function mk(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=_k(t,n);return e}class gk{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return j1($e(this._object),this._key)}}function _k(t,e,n){const r=t[e];return xt(r)?r:new gk(t,e,n)}class yk{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new am(e,()=>{this._dirty||(this._dirty=!0,pE(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=$e(this);return fE(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function vk(t,e,n=!1){let r,i;const s=ve(t);return s?(r=t,i=Zn):(r=t.get,i=t.set),new yk(r,i,s||!i,n)}function vi(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Qu(s,e,n)}return i}function er(t,e,n,r){if(ve(t)){const s=vi(t,e,n,r);return s&&q0(s)&&s.catch(o=>{Qu(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(er(t[s],e,n,r));return i}function Qu(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){vi(c,null,10,[t,o,a]);return}}wk(t,n,i,r)}function wk(t,e,n,r=!0){console.error(t)}let Ua=!1,Cf=!1;const Zt=[];let ur=0;const Gs=[];let $r=null,Gi=0;const yE=Promise.resolve();let pm=null;function vE(t){const e=pm||yE;return t?e.then(this?t.bind(this):t):e}function Ek(t){let e=ur+1,n=Zt.length;for(;e<n;){const r=e+n>>>1;Ba(Zt[r])<t?e=r+1:n=r}return e}function mm(t){(!Zt.length||!Zt.includes(t,Ua&&t.allowRecurse?ur+1:ur))&&(t.id==null?Zt.push(t):Zt.splice(Ek(t.id),0,t),wE())}function wE(){!Ua&&!Cf&&(Cf=!0,pm=yE.then(TE))}function Tk(t){const e=Zt.indexOf(t);e>ur&&Zt.splice(e,1)}function bk(t){ue(t)?Gs.push(...t):(!$r||!$r.includes(t,t.allowRecurse?Gi+1:Gi))&&Gs.push(t),wE()}function oy(t,e=Ua?ur+1:0){for(;e<Zt.length;e++){const n=Zt[e];n&&n.pre&&(Zt.splice(e,1),e--,n())}}function EE(t){if(Gs.length){const e=[...new Set(Gs)];if(Gs.length=0,$r){$r.push(...e);return}for($r=e,$r.sort((n,r)=>Ba(n)-Ba(r)),Gi=0;Gi<$r.length;Gi++)$r[Gi]();$r=null,Gi=0}}const Ba=t=>t.id==null?1/0:t.id,Ik=(t,e)=>{const n=Ba(t)-Ba(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function TE(t){Cf=!1,Ua=!0,Zt.sort(Ik);const e=Zn;try{for(ur=0;ur<Zt.length;ur++){const n=Zt[ur];n&&n.active!==!1&&vi(n,null,14)}}finally{ur=0,Zt.length=0,EE(),Ua=!1,pm=null,(Zt.length||Gs.length)&&TE()}}function Ak(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ze;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||Ze;p&&(i=n.map(m=>bt(m)?m.trim():m)),h&&(i=n.map(Ef))}let a,c=r[a=md(e)]||r[a=md(Er(e))];!c&&s&&(c=r[a=md(No(e))]),c&&er(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,er(l,t,6,i)}}function bE(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ve(t)){const c=l=>{const u=bE(l,e,!0);u&&(a=!0,Mt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(at(t)&&r.set(t,null),null):(ue(s)?s.forEach(c=>o[c]=null):Mt(o,s),at(t)&&r.set(t,o),o)}function Yu(t,e){return!t||!ju(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,No(e))||Oe(t,e))}let Ht=null,Ju=null;function Wl(t){const e=Ht;return Ht=t,Ju=t&&t.type.__scopeId||null,e}function Ck(t){Ju=t}function Rk(){Ju=null}function zl(t,e=Ht,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&_y(-1);const s=Wl(e);let o;try{o=t(...i)}finally{Wl(s),r._d&&_y(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gd(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:m,ctx:y,inheritAttrs:v}=t;let I,A;const k=Wl(t);try{if(n.shapeFlag&4){const P=i||r;I=lr(u.call(P,P,h,s,m,p,y)),A=c}else{const P=e;I=lr(P.length>1?P(s,{attrs:c,slots:a,emit:l}):P(s,null)),A=e.props?c:Sk(c)}}catch(P){ba.length=0,Qu(P,t,1),I=Dt(Ci)}let N=I;if(A&&v!==!1){const P=Object.keys(A),{shapeFlag:j}=N;P.length&&j&7&&(o&&P.some(tm)&&(A=Pk(A,o)),N=so(N,A))}return n.dirs&&(N=so(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),I=N,Wl(k),I}const Sk=t=>{let e;for(const n in t)(n==="class"||n==="style"||ju(n))&&((e||(e={}))[n]=t[n]);return e},Pk=(t,e)=>{const n={};for(const r in t)(!tm(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kk(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ay(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!Yu(l,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ay(r,o,l):!0:!!o;return!1}function ay(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Yu(n,s))return!0}return!1}function Nk({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ok=t=>t.__isSuspense;function xk(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):bk(t)}const rl={};function Hr(t,e,n){return IE(t,e,n)}function IE(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Ze){var a;const c=Z0()===((a=Nt)==null?void 0:a.scope)?Nt:null;let l,u=!1,h=!1;if(xt(t)?(l=()=>t.value,u=Hl(t)):Ks(t)?(l=()=>t,r=!0):ue(t)?(h=!0,u=t.some(P=>Ks(P)||Hl(P)),l=()=>t.map(P=>{if(xt(P))return P.value;if(Ks(P))return Yi(P);if(ve(P))return vi(P,c,2)})):ve(t)?e?l=()=>vi(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),er(t,c,3,[m])}:l=Zn,e&&r){const P=l;l=()=>Yi(P())}let p,m=P=>{p=k.onStop=()=>{vi(P,c,4)}},y;if(Ha)if(m=Zn,e?n&&er(e,c,3,[l(),h?[]:void 0,m]):l(),i==="sync"){const P=RN();y=P.__watcherHandles||(P.__watcherHandles=[])}else return Zn;let v=h?new Array(t.length).fill(rl):rl;const I=()=>{if(k.active)if(e){const P=k.run();(r||u||(h?P.some((j,W)=>Va(j,v[W])):Va(P,v)))&&(p&&p(),er(e,c,3,[P,v===rl?void 0:h&&v[0]===rl?[]:v,m]),v=P)}else k.run()};I.allowRecurse=!!e;let A;i==="sync"?A=I:i==="post"?A=()=>_n(I,c&&c.suspense):(I.pre=!0,c&&(I.id=c.uid),A=()=>mm(I));const k=new am(l,A);e?n?I():v=k.run():i==="post"?_n(k.run.bind(k),c&&c.suspense):k.run();const N=()=>{k.stop(),c&&c.scope&&nm(c.scope.effects,k)};return y&&y.push(N),N}function Dk(t,e,n){const r=this.proxy,i=bt(t)?t.includes(".")?AE(r,t):()=>r[t]:t.bind(r,r);let s;ve(e)?s=e:(s=e.handler,n=e);const o=Nt;oo(this);const a=IE(i,s.bind(r),n);return o?oo(o):os(),a}function AE(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Yi(t,e){if(!at(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xt(t))Yi(t.value,e);else if(ue(t))for(let n=0;n<t.length;n++)Yi(t[n],e);else if(z0(t)||qs(t))t.forEach(n=>{Yi(n,e)});else if(G0(t))for(const n in t)Yi(t[n],e);return t}function Mk(t,e){const n=Ht;if(n===null)return t;const r=nh(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Ze]=e[s];o&&(ve(o)&&(o={mounted:o,updated:o}),o.deep&&Yi(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Hi(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Oo(),er(c,n,8,[t.el,a,t,e]),xo())}}function sr(t,e){return ve(t)?(()=>Mt({name:t.name},e,{setup:t}))():t}const Ea=t=>!!t.type.__asyncLoader,CE=t=>t.type.__isKeepAlive;function Lk(t,e){RE(t,"a",e)}function $k(t,e){RE(t,"da",e)}function RE(t,e,n=Nt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Xu(e,r,n),n){let i=n.parent;for(;i&&i.parent;)CE(i.parent.vnode)&&Vk(r,e,n,i),i=i.parent}}function Vk(t,e,n,r){const i=Xu(e,t,r,!0);Zu(()=>{nm(r[e],i)},n)}function Xu(t,e,n=Nt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Oo(),oo(n);const a=er(e,n,t,o);return os(),xo(),a});return r?i.unshift(s):i.push(s),s}}const Zr=t=>(e,n=Nt)=>(!Ha||t==="sp")&&Xu(t,(...r)=>e(...r),n),Fk=Zr("bm"),gm=Zr("m"),Uk=Zr("bu"),Bk=Zr("u"),jk=Zr("bum"),Zu=Zr("um"),SE=Zr("sp"),Hk=Zr("rtg"),Wk=Zr("rtc");function zk(t,e=Nt){Xu("ec",t,e)}const PE="components";function qk(t,e){return Gk(PE,t,!0,e)||t}const Kk=Symbol.for("v-ndc");function Gk(t,e,n=!0,r=!1){const i=Ht||Nt;if(i){const s=i.type;if(t===PE){const a=IN(s,!1);if(a&&(a===e||a===Er(e)||a===zu(Er(e))))return s}const o=cy(i[t]||s[t],e)||cy(i.appContext[t],e);return!o&&r?s:o}}function cy(t,e){return t&&(t[e]||t[Er(e)]||t[zu(Er(e))])}function gW(t,e,n,r){let i;const s=n&&n[r];if(ue(t)||bt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(at(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function kE(t,e,n={},r,i){if(Ht.isCE||Ht.parent&&Ea(Ht.parent)&&Ht.parent.isCE)return e!=="default"&&(n.name=e),Dt("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),gt();const o=s&&NE(s(n)),a=io($n,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function NE(t){return t.some(e=>Gl(e)?!(e.type===Ci||e.type===$n&&!NE(e.children)):!0)?t:null}const Rf=t=>t?HE(t)?nh(t)||t.proxy:Rf(t.parent):null,Ta=Mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Rf(t.parent),$root:t=>Rf(t.root),$emit:t=>t.emit,$options:t=>_m(t),$forceUpdate:t=>t.f||(t.f=()=>mm(t.update)),$nextTick:t=>t.n||(t.n=vE.bind(t.proxy)),$watch:t=>Dk.bind(t)}),_d=(t,e)=>t!==Ze&&!t.__isScriptSetup&&Oe(t,e),Qk={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(_d(r,e))return o[e]=1,r[e];if(i!==Ze&&Oe(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&Oe(l,e))return o[e]=3,s[e];if(n!==Ze&&Oe(n,e))return o[e]=4,n[e];Sf&&(o[e]=0)}}const u=Ta[e];let h,p;if(u)return e==="$attrs"&&En(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ze&&Oe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Oe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return _d(i,e)?(i[e]=n,!0):r!==Ze&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Ze&&Oe(t,o)||_d(e,o)||(a=s[0])&&Oe(a,o)||Oe(r,o)||Oe(Ta,o)||Oe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ly(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sf=!0;function Yk(t){const e=_m(t),n=t.proxy,r=t.ctx;Sf=!1,e.beforeCreate&&uy(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:y,activated:v,deactivated:I,beforeDestroy:A,beforeUnmount:k,destroyed:N,unmounted:P,render:j,renderTracked:W,renderTriggered:ce,errorCaptured:ge,serverPrefetch:qe,expose:Se,inheritAttrs:ht,components:Ft,directives:Qe,filters:kr}=e;if(l&&Jk(l,r,null),o)for(const Ve in o){const be=o[Ve];ve(be)&&(r[Ve]=be.bind(n))}if(i){const Ve=i.call(n,n);at(Ve)&&(t.data=Gu(Ve))}if(Sf=!0,s)for(const Ve in s){const be=s[Ve],An=ve(be)?be.bind(n,n):ve(be.get)?be.get.bind(n,n):Zn,It=!ve(be)&&ve(be.set)?be.set.bind(n):Zn,At=en({get:An,set:It});Object.defineProperty(r,Ve,{enumerable:!0,configurable:!0,get:()=>At.value,set:Ct=>At.value=Ct})}if(a)for(const Ve in a)OE(a[Ve],r,n,Ve);if(c){const Ve=ve(c)?c.call(n):c;Reflect.ownKeys(Ve).forEach(be=>{Il(be,Ve[be])})}u&&uy(u,t,"c");function He(Ve,be){ue(be)?be.forEach(An=>Ve(An.bind(n))):be&&Ve(be.bind(n))}if(He(Fk,h),He(gm,p),He(Uk,m),He(Bk,y),He(Lk,v),He($k,I),He(zk,ge),He(Wk,W),He(Hk,ce),He(jk,k),He(Zu,P),He(SE,qe),ue(Se))if(Se.length){const Ve=t.exposed||(t.exposed={});Se.forEach(be=>{Object.defineProperty(Ve,be,{get:()=>n[be],set:An=>n[be]=An})})}else t.exposed||(t.exposed={});j&&t.render===Zn&&(t.render=j),ht!=null&&(t.inheritAttrs=ht),Ft&&(t.components=Ft),Qe&&(t.directives=Qe)}function Jk(t,e,n=Zn){ue(t)&&(t=Pf(t));for(const r in t){const i=t[r];let s;at(i)?"default"in i?s=Pn(i.from||r,i.default,!0):s=Pn(i.from||r):s=Pn(i),xt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function uy(t,e,n){er(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function OE(t,e,n,r){const i=r.includes(".")?AE(n,r):()=>n[r];if(bt(t)){const s=e[t];ve(s)&&Hr(i,s)}else if(ve(t))Hr(i,t.bind(n));else if(at(t))if(ue(t))t.forEach(s=>OE(s,e,n,r));else{const s=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(s)&&Hr(i,s,t)}}function _m(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>ql(c,l,o,!0)),ql(c,e,o)),at(e)&&s.set(e,c),c}function ql(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ql(t,s,n,!0),i&&i.forEach(o=>ql(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Xk[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xk={data:hy,props:dy,emits:dy,methods:ua,computed:ua,beforeCreate:hn,created:hn,beforeMount:hn,mounted:hn,beforeUpdate:hn,updated:hn,beforeDestroy:hn,beforeUnmount:hn,destroyed:hn,unmounted:hn,activated:hn,deactivated:hn,errorCaptured:hn,serverPrefetch:hn,components:ua,directives:ua,watch:eN,provide:hy,inject:Zk};function hy(t,e){return e?t?function(){return Mt(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function Zk(t,e){return ua(Pf(t),Pf(e))}function Pf(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function hn(t,e){return t?[...new Set([].concat(t,e))]:e}function ua(t,e){return t?Mt(Object.create(null),t,e):e}function dy(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:Mt(Object.create(null),ly(t),ly(e??{})):e}function eN(t,e){if(!t)return e;if(!e)return t;const n=Mt(Object.create(null),t);for(const r in e)n[r]=hn(t[r],e[r]);return n}function xE(){return{app:null,config:{isNativeTag:C1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tN=0;function nN(t,e){return function(r,i=null){ve(r)||(r=Mt({},r)),i!=null&&!at(i)&&(i=null);const s=xE(),o=new Set;let a=!1;const c=s.app={_uid:tN++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:SN,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&ve(l.install)?(o.add(l),l.install(c,...u)):ve(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const p=Dt(r,i);return p.appContext=s,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,nh(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){Kl=c;try{return l()}finally{Kl=null}}};return c}}let Kl=null;function Il(t,e){if(Nt){let n=Nt.provides;const r=Nt.parent&&Nt.parent.provides;r===n&&(n=Nt.provides=Object.create(r)),n[t]=e}}function Pn(t,e,n=!1){const r=Nt||Ht;if(r||Kl){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Kl._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}function rN(t,e,n,r=!1){const i={},s={};Bl(s,th,1),t.propsDefaults=Object.create(null),DE(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:uE(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function iN(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=$e(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Yu(t.emitsOptions,p))continue;const m=e[p];if(c)if(Oe(s,p))m!==s[p]&&(s[p]=m,l=!0);else{const y=Er(p);i[y]=kf(c,a,y,m,t,!1)}else m!==s[p]&&(s[p]=m,l=!0)}}}else{DE(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!Oe(e,h)&&((u=No(h))===h||!Oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=kf(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Oe(e,h))&&(delete s[h],l=!0)}l&&Kr(t,"set","$attrs")}function DE(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Tl(c))continue;const l=e[c];let u;i&&Oe(i,u=Er(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Yu(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=$e(n),l=a||Ze;for(let u=0;u<s.length;u++){const h=s[u];n[h]=kf(i,c,h,l[h],t,!Oe(l,h))}}return o}function kf(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ve(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(oo(i),r=l[n]=c.call(null,e),os())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===No(n))&&(r=!0))}return r}function ME(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ve(t)){const u=h=>{c=!0;const[p,m]=ME(h,e,!0);Mt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return at(t)&&r.set(t,zs),zs;if(ue(s))for(let u=0;u<s.length;u++){const h=Er(s[u]);fy(h)&&(o[h]=Ze)}else if(s)for(const u in s){const h=Er(u);if(fy(h)){const p=s[u],m=o[h]=ue(p)||ve(p)?{type:p}:Mt({},p);if(m){const y=gy(Boolean,m.type),v=gy(String,m.type);m[0]=y>-1,m[1]=v<0||y<v,(y>-1||Oe(m,"default"))&&a.push(h)}}}const l=[o,a];return at(t)&&r.set(t,l),l}function fy(t){return t[0]!=="$"}function py(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function my(t,e){return py(t)===py(e)}function gy(t,e){return ue(e)?e.findIndex(n=>my(n,t)):ve(e)&&my(e,t)?0:-1}const LE=t=>t[0]==="_"||t==="$stable",ym=t=>ue(t)?t.map(lr):[lr(t)],sN=(t,e,n)=>{if(e._n)return e;const r=zl((...i)=>ym(e(...i)),n);return r._c=!1,r},$E=(t,e,n)=>{const r=t._ctx;for(const i in t){if(LE(i))continue;const s=t[i];if(ve(s))e[i]=sN(i,s,r);else if(s!=null){const o=ym(s);e[i]=()=>o}}},VE=(t,e)=>{const n=ym(e);t.slots.default=()=>n},oN=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=$e(e),Bl(e,"_",n)):$E(e,t.slots={})}else t.slots={},e&&VE(t,e);Bl(t.slots,th,1)},aN=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Ze;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Mt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,$E(e,i)),o=e}else e&&(VE(t,e),o={default:1});if(s)for(const a in i)!LE(a)&&!(a in o)&&delete i[a]};function Nf(t,e,n,r,i=!1){if(ue(t)){t.forEach((p,m)=>Nf(p,e&&(ue(e)?e[m]:e),n,r,i));return}if(Ea(r)&&!i)return;const s=r.shapeFlag&4?nh(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ze?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(bt(l)?(u[l]=null,Oe(h,l)&&(h[l]=null)):xt(l)&&(l.value=null)),ve(c))vi(c,a,12,[o,u]);else{const p=bt(c),m=xt(c);if(p||m){const y=()=>{if(t.f){const v=p?Oe(h,c)?h[c]:u[c]:c.value;i?ue(v)&&nm(v,s):ue(v)?v.includes(s)||v.push(s):p?(u[c]=[s],Oe(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Oe(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,_n(y,n)):y()}}}const _n=xk;function cN(t){return lN(t)}function lN(t,e){const n=Tf();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=Zn,insertStaticContent:y}=t,v=(w,E,C,O=null,M=null,L=null,Q=!1,H=null,z=!!E.dynamicChildren)=>{if(w===E)return;w&&!Zo(w,E)&&(O=x(w),Ct(w,M,L,!0),w=null),E.patchFlag===-2&&(z=!1,E.dynamicChildren=null);const{type:$,ref:re,shapeFlag:X}=E;switch($){case eh:I(w,E,C,O);break;case Ci:A(w,E,C,O);break;case yd:w==null&&k(E,C,O,Q);break;case $n:Ft(w,E,C,O,M,L,Q,H,z);break;default:X&1?j(w,E,C,O,M,L,Q,H,z):X&6?Qe(w,E,C,O,M,L,Q,H,z):(X&64||X&128)&&$.process(w,E,C,O,M,L,Q,H,z,q)}re!=null&&M&&Nf(re,w&&w.ref,L,E||w,!E)},I=(w,E,C,O)=>{if(w==null)r(E.el=a(E.children),C,O);else{const M=E.el=w.el;E.children!==w.children&&l(M,E.children)}},A=(w,E,C,O)=>{w==null?r(E.el=c(E.children||""),C,O):E.el=w.el},k=(w,E,C,O)=>{[w.el,w.anchor]=y(w.children,E,C,O,w.el,w.anchor)},N=({el:w,anchor:E},C,O)=>{let M;for(;w&&w!==E;)M=p(w),r(w,C,O),w=M;r(E,C,O)},P=({el:w,anchor:E})=>{let C;for(;w&&w!==E;)C=p(w),i(w),w=C;i(E)},j=(w,E,C,O,M,L,Q,H,z)=>{Q=Q||E.type==="svg",w==null?W(E,C,O,M,L,Q,H,z):qe(w,E,M,L,Q,H,z)},W=(w,E,C,O,M,L,Q,H)=>{let z,$;const{type:re,props:X,shapeFlag:ie,transition:he,dirs:we}=w;if(z=w.el=o(w.type,L,X&&X.is,X),ie&8?u(z,w.children):ie&16&&ge(w.children,z,null,O,M,L&&re!=="foreignObject",Q,H),we&&Hi(w,null,O,"created"),ce(z,w,w.scopeId,Q,O),X){for(const Be in X)Be!=="value"&&!Tl(Be)&&s(z,Be,null,X[Be],L,w.children,O,M,vt);"value"in X&&s(z,"value",null,X.value),($=X.onVnodeBeforeMount)&&cr($,O,w)}we&&Hi(w,null,O,"beforeMount");const Ke=(!M||M&&!M.pendingBranch)&&he&&!he.persisted;Ke&&he.beforeEnter(z),r(z,E,C),(($=X&&X.onVnodeMounted)||Ke||we)&&_n(()=>{$&&cr($,O,w),Ke&&he.enter(z),we&&Hi(w,null,O,"mounted")},M)},ce=(w,E,C,O,M)=>{if(C&&m(w,C),O)for(let L=0;L<O.length;L++)m(w,O[L]);if(M){let L=M.subTree;if(E===L){const Q=M.vnode;ce(w,Q,Q.scopeId,Q.slotScopeIds,M.parent)}}},ge=(w,E,C,O,M,L,Q,H,z=0)=>{for(let $=z;$<w.length;$++){const re=w[$]=H?ai(w[$]):lr(w[$]);v(null,re,E,C,O,M,L,Q,H)}},qe=(w,E,C,O,M,L,Q)=>{const H=E.el=w.el;let{patchFlag:z,dynamicChildren:$,dirs:re}=E;z|=w.patchFlag&16;const X=w.props||Ze,ie=E.props||Ze;let he;C&&Wi(C,!1),(he=ie.onVnodeBeforeUpdate)&&cr(he,C,E,w),re&&Hi(E,w,C,"beforeUpdate"),C&&Wi(C,!0);const we=M&&E.type!=="foreignObject";if($?Se(w.dynamicChildren,$,H,C,O,we,L):Q||be(w,E,H,null,C,O,we,L,!1),z>0){if(z&16)ht(H,E,X,ie,C,O,M);else if(z&2&&X.class!==ie.class&&s(H,"class",null,ie.class,M),z&4&&s(H,"style",X.style,ie.style,M),z&8){const Ke=E.dynamicProps;for(let Be=0;Be<Ke.length;Be++){const Ye=Ke[Be],gn=X[Ye],Mn=ie[Ye];(Mn!==gn||Ye==="value")&&s(H,Ye,gn,Mn,M,w.children,C,O,vt)}}z&1&&w.children!==E.children&&u(H,E.children)}else!Q&&$==null&&ht(H,E,X,ie,C,O,M);((he=ie.onVnodeUpdated)||re)&&_n(()=>{he&&cr(he,C,E,w),re&&Hi(E,w,C,"updated")},O)},Se=(w,E,C,O,M,L,Q)=>{for(let H=0;H<E.length;H++){const z=w[H],$=E[H],re=z.el&&(z.type===$n||!Zo(z,$)||z.shapeFlag&70)?h(z.el):C;v(z,$,re,null,O,M,L,Q,!0)}},ht=(w,E,C,O,M,L,Q)=>{if(C!==O){if(C!==Ze)for(const H in C)!Tl(H)&&!(H in O)&&s(w,H,C[H],null,Q,E.children,M,L,vt);for(const H in O){if(Tl(H))continue;const z=O[H],$=C[H];z!==$&&H!=="value"&&s(w,H,$,z,Q,E.children,M,L,vt)}"value"in O&&s(w,"value",C.value,O.value)}},Ft=(w,E,C,O,M,L,Q,H,z)=>{const $=E.el=w?w.el:a(""),re=E.anchor=w?w.anchor:a("");let{patchFlag:X,dynamicChildren:ie,slotScopeIds:he}=E;he&&(H=H?H.concat(he):he),w==null?(r($,C,O),r(re,C,O),ge(E.children,C,re,M,L,Q,H,z)):X>0&&X&64&&ie&&w.dynamicChildren?(Se(w.dynamicChildren,ie,C,M,L,Q,H),(E.key!=null||M&&E===M.subTree)&&FE(w,E,!0)):be(w,E,C,re,M,L,Q,H,z)},Qe=(w,E,C,O,M,L,Q,H,z)=>{E.slotScopeIds=H,w==null?E.shapeFlag&512?M.ctx.activate(E,C,O,Q,z):kr(E,C,O,M,L,Q,z):ln(w,E,z)},kr=(w,E,C,O,M,L,Q)=>{const H=w.component=vN(w,O,M);if(CE(w)&&(H.ctx.renderer=q),wN(H),H.asyncDep){if(M&&M.registerDep(H,He),!w.el){const z=H.subTree=Dt(Ci);A(null,z,E,C)}return}He(H,w,E,C,M,L,Q)},ln=(w,E,C)=>{const O=E.component=w.component;if(kk(w,E,C))if(O.asyncDep&&!O.asyncResolved){Ve(O,E,C);return}else O.next=E,Tk(O.update),O.update();else E.el=w.el,O.vnode=E},He=(w,E,C,O,M,L,Q)=>{const H=()=>{if(w.isMounted){let{next:re,bu:X,u:ie,parent:he,vnode:we}=w,Ke=re,Be;Wi(w,!1),re?(re.el=we.el,Ve(w,re,Q)):re=we,X&&bl(X),(Be=re.props&&re.props.onVnodeBeforeUpdate)&&cr(Be,he,re,we),Wi(w,!0);const Ye=gd(w),gn=w.subTree;w.subTree=Ye,v(gn,Ye,h(gn.el),x(gn),w,M,L),re.el=Ye.el,Ke===null&&Nk(w,Ye.el),ie&&_n(ie,M),(Be=re.props&&re.props.onVnodeUpdated)&&_n(()=>cr(Be,he,re,we),M)}else{let re;const{el:X,props:ie}=E,{bm:he,m:we,parent:Ke}=w,Be=Ea(E);if(Wi(w,!1),he&&bl(he),!Be&&(re=ie&&ie.onVnodeBeforeMount)&&cr(re,Ke,E),Wi(w,!0),X&&De){const Ye=()=>{w.subTree=gd(w),De(X,w.subTree,w,M,null)};Be?E.type.__asyncLoader().then(()=>!w.isUnmounted&&Ye()):Ye()}else{const Ye=w.subTree=gd(w);v(null,Ye,C,O,w,M,L),E.el=Ye.el}if(we&&_n(we,M),!Be&&(re=ie&&ie.onVnodeMounted)){const Ye=E;_n(()=>cr(re,Ke,Ye),M)}(E.shapeFlag&256||Ke&&Ea(Ke.vnode)&&Ke.vnode.shapeFlag&256)&&w.a&&_n(w.a,M),w.isMounted=!0,E=C=O=null}},z=w.effect=new am(H,()=>mm($),w.scope),$=w.update=()=>z.run();$.id=w.uid,Wi(w,!0),$()},Ve=(w,E,C)=>{E.component=w;const O=w.vnode.props;w.vnode=E,w.next=null,iN(w,E.props,O,C),aN(w,E.children,C),Oo(),oy(),xo()},be=(w,E,C,O,M,L,Q,H,z=!1)=>{const $=w&&w.children,re=w?w.shapeFlag:0,X=E.children,{patchFlag:ie,shapeFlag:he}=E;if(ie>0){if(ie&128){It($,X,C,O,M,L,Q,H,z);return}else if(ie&256){An($,X,C,O,M,L,Q,H,z);return}}he&8?(re&16&&vt($,M,L),X!==$&&u(C,X)):re&16?he&16?It($,X,C,O,M,L,Q,H,z):vt($,M,L,!0):(re&8&&u(C,""),he&16&&ge(X,C,O,M,L,Q,H,z))},An=(w,E,C,O,M,L,Q,H,z)=>{w=w||zs,E=E||zs;const $=w.length,re=E.length,X=Math.min($,re);let ie;for(ie=0;ie<X;ie++){const he=E[ie]=z?ai(E[ie]):lr(E[ie]);v(w[ie],he,C,null,M,L,Q,H,z)}$>re?vt(w,M,L,!0,!1,X):ge(E,C,O,M,L,Q,H,z,X)},It=(w,E,C,O,M,L,Q,H,z)=>{let $=0;const re=E.length;let X=w.length-1,ie=re-1;for(;$<=X&&$<=ie;){const he=w[$],we=E[$]=z?ai(E[$]):lr(E[$]);if(Zo(he,we))v(he,we,C,null,M,L,Q,H,z);else break;$++}for(;$<=X&&$<=ie;){const he=w[X],we=E[ie]=z?ai(E[ie]):lr(E[ie]);if(Zo(he,we))v(he,we,C,null,M,L,Q,H,z);else break;X--,ie--}if($>X){if($<=ie){const he=ie+1,we=he<re?E[he].el:O;for(;$<=ie;)v(null,E[$]=z?ai(E[$]):lr(E[$]),C,we,M,L,Q,H,z),$++}}else if($>ie)for(;$<=X;)Ct(w[$],M,L,!0),$++;else{const he=$,we=$,Ke=new Map;for($=we;$<=ie;$++){const qt=E[$]=z?ai(E[$]):lr(E[$]);qt.key!=null&&Ke.set(qt.key,$)}let Be,Ye=0;const gn=ie-we+1;let Mn=!1,Nr=0;const Cn=new Array(gn);for($=0;$<gn;$++)Cn[$]=0;for($=he;$<=X;$++){const qt=w[$];if(Ye>=gn){Ct(qt,M,L,!0);continue}let un;if(qt.key!=null)un=Ke.get(qt.key);else for(Be=we;Be<=ie;Be++)if(Cn[Be-we]===0&&Zo(qt,E[Be])){un=Be;break}un===void 0?Ct(qt,M,L,!0):(Cn[un-we]=$+1,un>=Nr?Nr=un:Mn=!0,v(qt,E[un],C,null,M,L,Q,H,z),Ye++)}const Bi=Mn?uN(Cn):zs;for(Be=Bi.length-1,$=gn-1;$>=0;$--){const qt=we+$,un=E[qt],ar=qt+1<re?E[qt+1].el:O;Cn[$]===0?v(null,un,C,ar,M,L,Q,H,z):Mn&&(Be<0||$!==Bi[Be]?At(un,C,ar,2):Be--)}}},At=(w,E,C,O,M=null)=>{const{el:L,type:Q,transition:H,children:z,shapeFlag:$}=w;if($&6){At(w.component.subTree,E,C,O);return}if($&128){w.suspense.move(E,C,O);return}if($&64){Q.move(w,E,C,q);return}if(Q===$n){r(L,E,C);for(let X=0;X<z.length;X++)At(z[X],E,C,O);r(w.anchor,E,C);return}if(Q===yd){N(w,E,C);return}if(O!==2&&$&1&&H)if(O===0)H.beforeEnter(L),r(L,E,C),_n(()=>H.enter(L),M);else{const{leave:X,delayLeave:ie,afterLeave:he}=H,we=()=>r(L,E,C),Ke=()=>{X(L,()=>{we(),he&&he()})};ie?ie(L,we,Ke):Ke()}else r(L,E,C)},Ct=(w,E,C,O=!1,M=!1)=>{const{type:L,props:Q,ref:H,children:z,dynamicChildren:$,shapeFlag:re,patchFlag:X,dirs:ie}=w;if(H!=null&&Nf(H,null,C,w,!0),re&256){E.ctx.deactivate(w);return}const he=re&1&&ie,we=!Ea(w);let Ke;if(we&&(Ke=Q&&Q.onVnodeBeforeUnmount)&&cr(Ke,E,w),re&6)Os(w.component,C,O);else{if(re&128){w.suspense.unmount(C,O);return}he&&Hi(w,null,E,"beforeUnmount"),re&64?w.type.remove(w,E,C,M,q,O):$&&(L!==$n||X>0&&X&64)?vt($,E,C,!1,!0):(L===$n&&X&384||!M&&re&16)&&vt(z,E,C),O&&ti(w)}(we&&(Ke=Q&&Q.onVnodeUnmounted)||he)&&_n(()=>{Ke&&cr(Ke,E,w),he&&Hi(w,null,E,"unmounted")},C)},ti=w=>{const{type:E,el:C,anchor:O,transition:M}=w;if(E===$n){zn(C,O);return}if(E===yd){P(w);return}const L=()=>{i(C),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(w.shapeFlag&1&&M&&!M.persisted){const{leave:Q,delayLeave:H}=M,z=()=>Q(C,L);H?H(w.el,L,z):z()}else L()},zn=(w,E)=>{let C;for(;w!==E;)C=p(w),i(w),w=C;i(E)},Os=(w,E,C)=>{const{bum:O,scope:M,update:L,subTree:Q,um:H}=w;O&&bl(O),M.stop(),L&&(L.active=!1,Ct(Q,w,E,C)),H&&_n(H,E),_n(()=>{w.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},vt=(w,E,C,O=!1,M=!1,L=0)=>{for(let Q=L;Q<w.length;Q++)Ct(w[Q],E,C,O,M)},x=w=>w.shapeFlag&6?x(w.component.subTree):w.shapeFlag&128?w.suspense.next():p(w.anchor||w.el),J=(w,E,C)=>{w==null?E._vnode&&Ct(E._vnode,null,null,!0):v(E._vnode||null,w,E,null,null,null,C),oy(),EE(),E._vnode=w},q={p:v,um:Ct,m:At,r:ti,mt:kr,mc:ge,pc:be,pbc:Se,n:x,o:t};let ne,De;return e&&([ne,De]=e(q)),{render:J,hydrate:ne,createApp:nN(J,ne)}}function Wi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function FE(t,e,n=!1){const r=t.children,i=e.children;if(ue(r)&&ue(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=ai(i[s]),a.el=o.el),n||FE(o,a)),a.type===eh&&(a.el=o.el)}}function uN(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const hN=t=>t.__isTeleport,$n=Symbol.for("v-fgt"),eh=Symbol.for("v-txt"),Ci=Symbol.for("v-cmt"),yd=Symbol.for("v-stc"),ba=[];let Qn=null;function gt(t=!1){ba.push(Qn=t?null:[])}function dN(){ba.pop(),Qn=ba[ba.length-1]||null}let ja=1;function _y(t){ja+=t}function UE(t){return t.dynamicChildren=ja>0?Qn||zs:null,dN(),ja>0&&Qn&&Qn.push(t),t}function yn(t,e,n,r,i,s){return UE(Xe(t,e,n,r,i,s,!0))}function io(t,e,n,r,i){return UE(Dt(t,e,n,r,i,!0))}function Gl(t){return t?t.__v_isVNode===!0:!1}function Zo(t,e){return t.type===e.type&&t.key===e.key}const th="__vInternal",BE=({key:t})=>t??null,Al=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?bt(t)||xt(t)||ve(t)?{i:Ht,r:t,k:e,f:!!n}:t:null);function Xe(t,e=null,n=null,r=0,i=null,s=t===$n?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&BE(e),ref:e&&Al(e),scopeId:Ju,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ht};return a?(vm(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=bt(n)?8:16),ja>0&&!o&&Qn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Qn.push(c),c}const Dt=fN;function fN(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Kk)&&(t=Ci),Gl(t)){const a=so(t,e,!0);return n&&vm(a,n),ja>0&&!s&&Qn&&(a.shapeFlag&6?Qn[Qn.indexOf(t)]=a:Qn.push(a)),a.patchFlag|=-2,a}if(AN(t)&&(t=t.__vccOpts),e){e=pN(e);let{class:a,style:c}=e;a&&!bt(a)&&(e.class=qu(a)),at(c)&&(dE(c)&&!ue(c)&&(c=Mt({},c)),e.style=sm(c))}const o=bt(t)?1:Ok(t)?128:hN(t)?64:at(t)?4:ve(t)?2:0;return Xe(t,e,n,r,i,o,s,!0)}function pN(t){return t?dE(t)||th in t?Mt({},t):t:null}function so(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?gN(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&BE(a),ref:e&&e.ref?n&&i?ue(i)?i.concat(Al(e)):[i,Al(e)]:Al(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$n?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&so(t.ssContent),ssFallback:t.ssFallback&&so(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function mN(t=" ",e=0){return Dt(eh,null,t,e)}function ss(t="",e=!1){return e?(gt(),io(Ci,null,t)):Dt(Ci,null,t)}function lr(t){return t==null||typeof t=="boolean"?Dt(Ci):ue(t)?Dt($n,null,t.slice()):typeof t=="object"?ai(t):Dt(eh,null,String(t))}function ai(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:so(t)}function vm(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),vm(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(th in e)?e._ctx=Ht:i===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:Ht},n=32):(e=String(e),r&64?(n=16,e=[mN(e)]):n=8);t.children=e,t.shapeFlag|=n}function gN(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=qu([e.class,r.class]));else if(i==="style")e.style=sm([e.style,r.style]);else if(ju(i)){const s=e[i],o=r[i];o&&s!==o&&!(ue(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function cr(t,e,n,r=null){er(t,e,7,[n,r])}const _N=xE();let yN=0;function vN(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||_N,s={uid:yN++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new J0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ME(r,i),emitsOptions:bE(r,i),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:r.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ak.bind(null,s),t.ce&&t.ce(s),s}let Nt=null;const jE=()=>Nt||Ht;let wm,Ds,yy="__VUE_INSTANCE_SETTERS__";(Ds=Tf()[yy])||(Ds=Tf()[yy]=[]),Ds.push(t=>Nt=t),wm=t=>{Ds.length>1?Ds.forEach(e=>e(t)):Ds[0](t)};const oo=t=>{wm(t),t.scope.on()},os=()=>{Nt&&Nt.scope.off(),wm(null)};function HE(t){return t.vnode.shapeFlag&4}let Ha=!1;function wN(t,e=!1){Ha=e;const{props:n,children:r}=t.vnode,i=HE(t);rN(t,n,i,e),oN(t,r);const s=i?EN(t,e):void 0;return Ha=!1,s}function EN(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=dm(new Proxy(t.ctx,Qk));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?bN(t):null;oo(t),Oo();const s=vi(r,t,0,[t.props,i]);if(xo(),os(),q0(s)){if(s.then(os,os),e)return s.then(o=>{vy(t,o,e)}).catch(o=>{Qu(o,t,0)});t.asyncDep=s}else vy(t,s,e)}else WE(t,e)}function vy(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=_E(e)),WE(t,n)}let wy;function WE(t,e,n){const r=t.type;if(!t.render){if(!e&&wy&&!r.render){const i=r.template||_m(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Mt(Mt({isCustomElement:s,delimiters:a},o),c);r.render=wy(i,l)}}t.render=r.render||Zn}oo(t),Oo(),Yk(t),xo(),os()}function TN(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return En(t,"get","$attrs"),e[n]}}))}function bN(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return TN(t)},slots:t.slots,emit:t.emit,expose:e}}function nh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(_E(dm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ta)return Ta[n](t)},has(e,n){return n in e||n in Ta}}))}function IN(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function AN(t){return ve(t)&&"__vccOpts"in t}const en=(t,e)=>vk(t,e,Ha);function zE(t,e,n){const r=arguments.length;return r===2?at(e)&&!ue(e)?Gl(e)?Dt(t,null,[e]):Dt(t,e):Dt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gl(n)&&(n=[n]),Dt(t,e,n))}const CN=Symbol.for("v-scx"),RN=()=>Pn(CN),SN="3.3.4",PN="http://www.w3.org/2000/svg",Qi=typeof document<"u"?document:null,Ey=Qi&&Qi.createElement("template"),kN={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Qi.createElementNS(PN,t):Qi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Qi.createTextNode(t),createComment:t=>Qi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Ey.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ey.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function NN(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ON(t,e,n){const r=t.style,i=bt(n);if(n&&!i){if(e&&!bt(e))for(const s in e)n[s]==null&&Of(r,s,"");for(const s in n)Of(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Ty=/\s*!important$/;function Of(t,e,n){if(ue(n))n.forEach(r=>Of(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=xN(t,e);Ty.test(n)?t.setProperty(No(r),n.replace(Ty,""),"important"):t[r]=n}}const by=["Webkit","Moz","ms"],vd={};function xN(t,e){const n=vd[e];if(n)return n;let r=Er(e);if(r!=="filter"&&r in t)return vd[e]=r;r=zu(r);for(let i=0;i<by.length;i++){const s=by[i]+r;if(s in t)return vd[e]=s}return e}const Iy="http://www.w3.org/1999/xlink";function DN(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Iy,e.slice(6,e.length)):t.setAttributeNS(Iy,e,n);else{const s=$1(e);n==null||s&&!Q0(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function MN(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Q0(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function $s(t,e,n,r){t.addEventListener(e,n,r)}function LN(t,e,n,r){t.removeEventListener(e,n,r)}function $N(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=VN(e);if(r){const l=s[e]=BN(r,i);$s(t,a,l,c)}else o&&(LN(t,a,o,c),s[e]=void 0)}}const Ay=/(?:Once|Passive|Capture)$/;function VN(t){let e;if(Ay.test(t)){e={};let r;for(;r=t.match(Ay);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):No(t.slice(2)),e]}let wd=0;const FN=Promise.resolve(),UN=()=>wd||(FN.then(()=>wd=0),wd=Date.now());function BN(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;er(jN(r,n.value),e,5,[r])};return n.value=t,n.attached=UN(),n}function jN(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Cy=/^on[a-z]/,HN=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?NN(t,r,i):e==="style"?ON(t,n,r):ju(e)?tm(e)||$N(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WN(t,e,r,i))?MN(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),DN(t,e,r,i))};function WN(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Cy.test(e)&&ve(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Cy.test(e)&&bt(n)?!1:e in t}const Ry=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>bl(e,n):e};function zN(t){t.target.composing=!0}function Sy(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _W={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Ry(i);const s=r||i.props&&i.props.type==="number";$s(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Ef(a)),t._assign(a)}),n&&$s(t,"change",()=>{t.value=t.value.trim()}),e||($s(t,"compositionstart",zN),$s(t,"compositionend",Sy),$s(t,"change",Sy))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Ry(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Ef(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},qN=["ctrl","shift","alt","meta"],KN={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qN.some(n=>t[`${n}Key`]&&!e.includes(n))},il=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=KN[e[i]];if(s&&s(n,e))return}return t(n,...r)},GN={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ea(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ea(t,!0),r.enter(t)):r.leave(t,()=>{ea(t,!1)}):ea(t,e))},beforeUnmount(t,{value:e}){ea(t,e)}};function ea(t,e){t.style.display=e?t._vod:"none"}const QN=Mt({patchProp:HN},kN);let Py;function YN(){return Py||(Py=cN(QN))}const JN=(...t)=>{const e=YN().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=XN(r);if(!i)return;const s=e._component;!ve(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function XN(t){return bt(t)?document.querySelector(t):t}var ZN=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const eO=Symbol();var ky;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ky||(ky={}));function tO(){const t=X0(!0),e=t.run(()=>ct({}));let n=[],r=[];const i=dm({install(s){i._a=s,s.provide(eO,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!ZN?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Vs=typeof window<"u";function nO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const We=Object.assign;function Ed(t,e){const n={};for(const r in e){const i=e[r];n[r]=nr(i)?i.map(t):t(i)}return n}const Ia=()=>{},nr=Array.isArray,rO=/\/$/,iO=t=>t.replace(rO,"");function Td(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=cO(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function sO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ny(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function oO(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ao(e.matched[r],n.matched[i])&&qE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ao(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!aO(t[n],e[n]))return!1;return!0}function aO(t,e){return nr(t)?Oy(t,e):nr(e)?Oy(e,t):t===e}function Oy(t,e){return nr(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function cO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Wa;(function(t){t.pop="pop",t.push="push"})(Wa||(Wa={}));var Aa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Aa||(Aa={}));function lO(t){if(!t)if(Vs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iO(t)}const uO=/^[^#]+#/;function hO(t,e){return t.replace(uO,"#")+e}function dO(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const rh=()=>({left:window.pageXOffset,top:window.pageYOffset});function fO(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=dO(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function xy(t,e){return(history.state?history.state.position-e:-1)+t}const xf=new Map;function pO(t,e){xf.set(t,e)}function mO(t){const e=xf.get(t);return xf.delete(t),e}let gO=()=>location.protocol+"//"+location.host;function KE(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Ny(c,"")}return Ny(n,t)+r+i}function _O(t,e,n,r){let i=[],s=[],o=null;const a=({state:p})=>{const m=KE(t,location),y=n.value,v=e.value;let I=0;if(p){if(n.value=m,e.value=p,o&&o===y){o=null;return}I=v?p.position-v.position:0}else r(m);i.forEach(A=>{A(n.value,y,{delta:I,type:Wa.pop,direction:I?I>0?Aa.forward:Aa.back:Aa.unknown})})};function c(){o=n.value}function l(p){i.push(p);const m=()=>{const y=i.indexOf(p);y>-1&&i.splice(y,1)};return s.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(We({},p.state,{scroll:rh()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Dy(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?rh():null}}function yO(t){const{history:e,location:n}=window,r={value:KE(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:gO()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=We({},e.state,Dy(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=We({},i.value,e.state,{forward:c,scroll:rh()});s(u.current,u,!0);const h=We({},Dy(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function vO(t){t=lO(t);const e=yO(t),n=_O(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=We({location:"",base:t,go:r,createHref:hO.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function wO(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),vO(t)}function EO(t){return typeof t=="string"||t&&typeof t=="object"}function GE(t){return typeof t=="string"||typeof t=="symbol"}const si={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},QE=Symbol("");var My;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(My||(My={}));function co(t,e){return We(new Error,{type:t,[QE]:!0},e)}function Mr(t,e){return t instanceof Error&&QE in t&&(e==null||!!(t.type&e))}const Ly="[^/]+?",TO={sensitive:!1,strict:!1,start:!0,end:!0},bO=/[.+*?^${}()[\]/\\]/g;function IO(t,e){const n=We({},TO,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const p=l[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(i+="/"),i+=p.value.replace(bO,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:v,optional:I,regexp:A}=p;s.push({name:y,repeatable:v,optional:I});const k=A||Ly;if(k!==Ly){m+=10;try{new RegExp(`(${k})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+P.message)}}let N=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(N=I&&l.length<2?`(?:/${N})`:"/"+N),I&&(N+="?"),i+=N,m+=20,I&&(m+=-8),v&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",y=s[p-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:v,optional:I}=m,A=y in l?l[y]:"";if(nr(A)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=nr(A)?A.join("/"):A;if(!k)if(I)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function AO(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function CO(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=AO(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if($y(r))return 1;if($y(i))return-1}return i.length-r.length}function $y(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const RO={type:0,value:""},SO=/[a-zA-Z0-9_]/;function PO(t){if(!t)return[[]];if(t==="/")return[[RO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:SO.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function kO(t,e,n){const r=IO(PO(t.path),n),i=We(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function NO(t,e){const n=[],r=new Map;e=Uy({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,p){const m=!p,y=OO(u);y.aliasOf=p&&p.record;const v=Uy(e,u),I=[y];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of N)I.push(We({},y,{components:p?p.record.components:y.components,path:P,aliasOf:p?p.record:y}))}let A,k;for(const N of I){const{path:P}=N;if(h&&P[0]!=="/"){const j=h.record.path,W=j[j.length-1]==="/"?"":"/";N.path=h.record.path+(P&&W+P)}if(A=kO(N,h,v),p?p.alias.push(A):(k=k||A,k!==A&&k.alias.push(A),m&&u.name&&!Fy(A)&&o(u.name)),y.children){const j=y.children;for(let W=0;W<j.length;W++)s(j[W],A,p&&p.children[W])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return k?()=>{o(k)}:Ia}function o(u){if(GE(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&CO(u,n[h])>=0&&(u.record.path!==n[h].record.path||!YE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Fy(u)&&r.set(u.record.name,u)}function l(u,h){let p,m={},y,v;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw co(1,{location:u});v=p.record.name,m=We(Vy(h.params,p.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Vy(u.params,p.keys.map(k=>k.name))),y=p.stringify(m)}else if("path"in u)y=u.path,p=n.find(k=>k.re.test(y)),p&&(m=p.parse(y),v=p.record.name);else{if(p=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!p)throw co(1,{location:u,currentLocation:h});v=p.record.name,m=We({},h.params,u.params),y=p.stringify(m)}const I=[];let A=p;for(;A;)I.unshift(A.record),A=A.parent;return{name:v,path:y,params:m,matched:I,meta:DO(I)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Vy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function OO(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:xO(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function xO(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Fy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function DO(t){return t.reduce((e,n)=>We(e,n.meta),{})}function Uy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function YE(t,e){return e.children.some(n=>n===t||YE(t,n))}const JE=/#/g,MO=/&/g,LO=/\//g,$O=/=/g,VO=/\?/g,XE=/\+/g,FO=/%5B/g,UO=/%5D/g,ZE=/%5E/g,BO=/%60/g,eT=/%7B/g,jO=/%7C/g,tT=/%7D/g,HO=/%20/g;function Em(t){return encodeURI(""+t).replace(jO,"|").replace(FO,"[").replace(UO,"]")}function WO(t){return Em(t).replace(eT,"{").replace(tT,"}").replace(ZE,"^")}function Df(t){return Em(t).replace(XE,"%2B").replace(HO,"+").replace(JE,"%23").replace(MO,"%26").replace(BO,"`").replace(eT,"{").replace(tT,"}").replace(ZE,"^")}function zO(t){return Df(t).replace($O,"%3D")}function qO(t){return Em(t).replace(JE,"%23").replace(VO,"%3F")}function KO(t){return t==null?"":qO(t).replace(LO,"%2F")}function Ql(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function GO(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(XE," "),o=s.indexOf("="),a=Ql(o<0?s:s.slice(0,o)),c=o<0?null:Ql(s.slice(o+1));if(a in e){let l=e[a];nr(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function By(t){let e="";for(let n in t){const r=t[n];if(n=zO(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(nr(r)?r.map(s=>s&&Df(s)):[r&&Df(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function QO(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=nr(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const YO=Symbol(""),jy=Symbol(""),ih=Symbol(""),Tm=Symbol(""),Mf=Symbol("");function ta(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ci(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(co(4,{from:n,to:e})):h instanceof Error?a(h):EO(h)?a(co(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function bd(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(JO(a)){const l=(a.__vccOpts||a)[e];l&&i.push(ci(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=nO(l)?l.default:l;s.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&ci(p,n,r,s,o)()}))}}return i}function JO(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hy(t){const e=Pn(ih),n=Pn(Tm),r=en(()=>e.resolve(Et(t.to))),i=en(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(ao.bind(null,u));if(p>-1)return p;const m=Wy(c[l-2]);return l>1&&Wy(u)===m&&h[h.length-1].path!==m?h.findIndex(ao.bind(null,c[l-2])):p}),s=en(()=>i.value>-1&&tx(n.params,r.value.params)),o=en(()=>i.value>-1&&i.value===n.matched.length-1&&qE(n.params,r.value.params));function a(c={}){return ex(c)?e[Et(t.replace)?"replace":"push"](Et(t.to)).catch(Ia):Promise.resolve()}return{route:r,href:en(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const XO=sr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hy,setup(t,{slots:e}){const n=Gu(Hy(t)),{options:r}=Pn(ih),i=en(()=>({[zy(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zy(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:zE("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),ZO=XO;function ex(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tx(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!nr(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Wy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zy=(t,e,n)=>t??e??n,nx=sr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Pn(Mf),i=en(()=>t.route||r.value),s=Pn(jy,0),o=en(()=>{let l=Et(s);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=en(()=>i.value.matched[o.value]);Il(jy,en(()=>o.value+1)),Il(YO,a),Il(Mf,i);const c=ct();return Hr(()=>[c.value,a.value,t.name],([l,u,h],[p,m,y])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!ao(u,m)||!p)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return qy(n.default,{Component:p,route:l});const m=h.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,I=zE(p,We({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return qy(n.default,{Component:I,route:l})||I}}});function qy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nT=nx;function rx(t){const e=NO(t.routes,t),n=t.parseQuery||GO,r=t.stringifyQuery||By,i=t.history,s=ta(),o=ta(),a=ta(),c=mE(si);let l=si;Vs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ed.bind(null,x=>""+x),h=Ed.bind(null,KO),p=Ed.bind(null,Ql);function m(x,J){let q,ne;return GE(x)?(q=e.getRecordMatcher(x),ne=J):ne=x,e.addRoute(ne,q)}function y(x){const J=e.getRecordMatcher(x);J&&e.removeRoute(J)}function v(){return e.getRoutes().map(x=>x.record)}function I(x){return!!e.getRecordMatcher(x)}function A(x,J){if(J=We({},J||c.value),typeof x=="string"){const C=Td(n,x,J.path),O=e.resolve({path:C.path},J),M=i.createHref(C.fullPath);return We(C,O,{params:p(O.params),hash:Ql(C.hash),redirectedFrom:void 0,href:M})}let q;if("path"in x)q=We({},x,{path:Td(n,x.path,J.path).path});else{const C=We({},x.params);for(const O in C)C[O]==null&&delete C[O];q=We({},x,{params:h(C)}),J.params=h(J.params)}const ne=e.resolve(q,J),De=x.hash||"";ne.params=u(p(ne.params));const w=sO(r,We({},x,{hash:WO(De),path:ne.path})),E=i.createHref(w);return We({fullPath:w,hash:De,query:r===By?QO(x.query):x.query||{}},ne,{redirectedFrom:void 0,href:E})}function k(x){return typeof x=="string"?Td(n,x,c.value.path):We({},x)}function N(x,J){if(l!==x)return co(8,{from:J,to:x})}function P(x){return ce(x)}function j(x){return P(We(k(x),{replace:!0}))}function W(x){const J=x.matched[x.matched.length-1];if(J&&J.redirect){const{redirect:q}=J;let ne=typeof q=="function"?q(x):q;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=k(ne):{path:ne},ne.params={}),We({query:x.query,hash:x.hash,params:"path"in ne?{}:x.params},ne)}}function ce(x,J){const q=l=A(x),ne=c.value,De=x.state,w=x.force,E=x.replace===!0,C=W(q);if(C)return ce(We(k(C),{state:typeof C=="object"?We({},De,C.state):De,force:w,replace:E}),J||q);const O=q;O.redirectedFrom=J;let M;return!w&&oO(r,ne,q)&&(M=co(16,{to:O,from:ne}),At(ne,ne,!0,!1)),(M?Promise.resolve(M):Se(O,ne)).catch(L=>Mr(L)?Mr(L,2)?L:It(L):be(L,O,ne)).then(L=>{if(L){if(Mr(L,2))return ce(We({replace:E},k(L.to),{state:typeof L.to=="object"?We({},De,L.to.state):De,force:w}),J||O)}else L=Ft(O,ne,!0,E,De);return ht(O,ne,L),L})}function ge(x,J){const q=N(x,J);return q?Promise.reject(q):Promise.resolve()}function qe(x){const J=zn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(x):x()}function Se(x,J){let q;const[ne,De,w]=ix(x,J);q=bd(ne.reverse(),"beforeRouteLeave",x,J);for(const C of ne)C.leaveGuards.forEach(O=>{q.push(ci(O,x,J))});const E=ge.bind(null,x,J);return q.push(E),vt(q).then(()=>{q=[];for(const C of s.list())q.push(ci(C,x,J));return q.push(E),vt(q)}).then(()=>{q=bd(De,"beforeRouteUpdate",x,J);for(const C of De)C.updateGuards.forEach(O=>{q.push(ci(O,x,J))});return q.push(E),vt(q)}).then(()=>{q=[];for(const C of w)if(C.beforeEnter)if(nr(C.beforeEnter))for(const O of C.beforeEnter)q.push(ci(O,x,J));else q.push(ci(C.beforeEnter,x,J));return q.push(E),vt(q)}).then(()=>(x.matched.forEach(C=>C.enterCallbacks={}),q=bd(w,"beforeRouteEnter",x,J),q.push(E),vt(q))).then(()=>{q=[];for(const C of o.list())q.push(ci(C,x,J));return q.push(E),vt(q)}).catch(C=>Mr(C,8)?C:Promise.reject(C))}function ht(x,J,q){a.list().forEach(ne=>qe(()=>ne(x,J,q)))}function Ft(x,J,q,ne,De){const w=N(x,J);if(w)return w;const E=J===si,C=Vs?history.state:{};q&&(ne||E?i.replace(x.fullPath,We({scroll:E&&C&&C.scroll},De)):i.push(x.fullPath,De)),c.value=x,At(x,J,q,E),It()}let Qe;function kr(){Qe||(Qe=i.listen((x,J,q)=>{if(!Os.listening)return;const ne=A(x),De=W(ne);if(De){ce(We(De,{replace:!0}),ne).catch(Ia);return}l=ne;const w=c.value;Vs&&pO(xy(w.fullPath,q.delta),rh()),Se(ne,w).catch(E=>Mr(E,12)?E:Mr(E,2)?(ce(E.to,ne).then(C=>{Mr(C,20)&&!q.delta&&q.type===Wa.pop&&i.go(-1,!1)}).catch(Ia),Promise.reject()):(q.delta&&i.go(-q.delta,!1),be(E,ne,w))).then(E=>{E=E||Ft(ne,w,!1),E&&(q.delta&&!Mr(E,8)?i.go(-q.delta,!1):q.type===Wa.pop&&Mr(E,20)&&i.go(-1,!1)),ht(ne,w,E)}).catch(Ia)}))}let ln=ta(),He=ta(),Ve;function be(x,J,q){It(x);const ne=He.list();return ne.length?ne.forEach(De=>De(x,J,q)):console.error(x),Promise.reject(x)}function An(){return Ve&&c.value!==si?Promise.resolve():new Promise((x,J)=>{ln.add([x,J])})}function It(x){return Ve||(Ve=!x,kr(),ln.list().forEach(([J,q])=>x?q(x):J()),ln.reset()),x}function At(x,J,q,ne){const{scrollBehavior:De}=t;if(!Vs||!De)return Promise.resolve();const w=!q&&mO(xy(x.fullPath,0))||(ne||!q)&&history.state&&history.state.scroll||null;return vE().then(()=>De(x,J,w)).then(E=>E&&fO(E)).catch(E=>be(E,x,J))}const Ct=x=>i.go(x);let ti;const zn=new Set,Os={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:I,getRoutes:v,resolve:A,options:t,push:P,replace:j,go:Ct,back:()=>Ct(-1),forward:()=>Ct(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:He.add,isReady:An,install(x){const J=this;x.component("RouterLink",ZO),x.component("RouterView",nT),x.config.globalProperties.$router=J,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Et(c)}),Vs&&!ti&&c.value===si&&(ti=!0,P(i.location).catch(De=>{}));const q={};for(const De in si)Object.defineProperty(q,De,{get:()=>c.value[De],enumerable:!0});x.provide(ih,J),x.provide(Tm,uE(q)),x.provide(Mf,c);const ne=x.unmount;zn.add(x),x.unmount=function(){zn.delete(x),zn.size<1&&(l=si,Qe&&Qe(),Qe=null,c.value=si,ti=!1,Ve=!1),ne()}}};function vt(x){return x.reduce((J,q)=>J.then(()=>qe(q)),Promise.resolve())}return Os}function ix(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>ao(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ao(l,c))||i.push(c))}return[n,r,i]}function sx(){return Pn(ih)}function ox(){return Pn(Tm)}/**
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
 */const rT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const K=function(t,e){if(!t)throw Do(e)},Do=function(t){return new Error("Firebase Database ("+rT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const iT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ax=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ax(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new cx;const p=s<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sT=function(t){const e=iT(t);return sh.encodeByteArray(e,!0)},Yl=function(t){return sT(t).replace(/\./g,"")},Jl=function(t){try{return sh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lx(t){return oT(void 0,t)}function oT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ux(n)||(t[n]=oT(t[n],e[n]));return t}function ux(t){return t!=="__proto__"}/**
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
 */function hx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dx=()=>hx().__FIREBASE_DEFAULTS__,fx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},px=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jl(t[1]);return e&&JSON.parse(e)},bm=()=>{try{return dx()||fx()||px()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},aT=t=>{var e,n;return(n=(e=bm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mx=t=>{const e=aT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cT=()=>{var t;return(t=bm())===null||t===void 0?void 0:t.config},lT=t=>{var e;return(e=bm())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class za{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Yl(JSON.stringify(n)),Yl(JSON.stringify(o)),a].join(".")}/**
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
 */function an(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Im(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(an())}function uT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _x(){const t=an();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dT(){return rT.NODE_ADMIN===!0}function Am(){try{return typeof indexedDB=="object"}catch{return!1}}function fT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function yx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const vx="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vx,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Hn(i,a,r)}}function wx(t,e){return t.replace(Ex,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ex=/\{\$([^}]+)}/g;/**
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
 */function qa(t){return JSON.parse(t)}function jt(t){return JSON.stringify(t)}/**
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
 */const pT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=qa(Jl(s[0])||""),n=qa(Jl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Tx=function(t){const e=pT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bx=function(t){const e=pT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ei(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function lo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Lf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ka(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ky(s)&&Ky(o)){if(!Ka(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ky(t){return t!==null&&typeof t=="object"}/**
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
 */function Mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ha(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function da(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Ix{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const p=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):h<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const p=(i<<5|i>>>27)+l+c+u+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Ax(t,e){const n=new Cx(t,e);return n.subscribe.bind(n)}class Cx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Rx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Id),i.error===void 0&&(i.error=Id),i.complete===void 0&&(i.complete=Id);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Id(){}function Sx(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Px=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,K(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const kx=1e3,Nx=2,Ox=4*60*60*1e3,xx=.5;function Gy(t,e=kx,n=Nx){const r=e*Math.pow(n,t),i=Math.round(xx*r*(Math.random()-.5)*2);return Math.min(Ox,r+i)}/**
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
 */function Lt(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qi="[DEFAULT]";/**
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
 */class Dx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new za;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lx(e))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qi){return this.instances.has(e)}getOptions(e=qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qi){return this.component?this.component.multipleInstances?e:qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mx(t){return t===qi?void 0:t}function Lx(t){return t.instantiationMode==="EAGER"}/**
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
 */class $x{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const Vx={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},Fx=xe.INFO,Ux={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},Bx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ux[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lo{constructor(e){this.name=e,this._logLevel=Fx,this._logHandler=Bx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const jx=(t,e)=>e.some(n=>t instanceof n);let Qy,Yy;function Hx(){return Qy||(Qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wx(){return Yy||(Yy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mT=new WeakMap,$f=new WeakMap,gT=new WeakMap,Ad=new WeakMap,Cm=new WeakMap;function zx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(wi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mT.set(n,t)}).catch(()=>{}),Cm.set(e,t),e}function qx(t){if($f.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});$f.set(t,e)}let Vf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $f.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kx(t){Vf=t(Vf)}function Gx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cd(this),e,...n);return gT.set(r,e.sort?e.sort():[e]),wi(r)}:Wx().includes(t)?function(...e){return t.apply(Cd(this),e),wi(mT.get(this))}:function(...e){return wi(t.apply(Cd(this),e))}}function Qx(t){return typeof t=="function"?Gx(t):(t instanceof IDBTransaction&&qx(t),jx(t,Hx())?new Proxy(t,Vf):t)}function wi(t){if(t instanceof IDBRequest)return zx(t);if(Ad.has(t))return Ad.get(t);const e=Qx(t);return e!==t&&(Ad.set(t,e),Cm.set(e,t)),e}const Cd=t=>Cm.get(t);function Yx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=wi(o);return r&&o.addEventListener("upgradeneeded",c=>{r(wi(o.result),c.oldVersion,c.newVersion,wi(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Jx=["get","getKey","getAll","getAllKeys","count"],Xx=["put","add","delete","clear"],Rd=new Map;function Jy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rd.get(e))return Rd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Xx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Jx.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Rd.set(e,s),s}Kx(t=>({...t,get:(e,n,r)=>Jy(e,n)||t.get(e,n,r),has:(e,n)=>!!Jy(e,n)||t.has(e,n)}));/**
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
 */class Zx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ff="@firebase/app",Xy="0.9.17";/**
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
 */const us=new Lo("@firebase/app"),tD="@firebase/app-compat",nD="@firebase/analytics-compat",rD="@firebase/analytics",iD="@firebase/app-check-compat",sD="@firebase/app-check",oD="@firebase/auth",aD="@firebase/auth-compat",cD="@firebase/database",lD="@firebase/database-compat",uD="@firebase/functions",hD="@firebase/functions-compat",dD="@firebase/installations",fD="@firebase/installations-compat",pD="@firebase/messaging",mD="@firebase/messaging-compat",gD="@firebase/performance",_D="@firebase/performance-compat",yD="@firebase/remote-config",vD="@firebase/remote-config-compat",wD="@firebase/storage",ED="@firebase/storage-compat",TD="@firebase/firestore",bD="@firebase/firestore-compat",ID="firebase",AD="10.3.0";/**
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
 */const Uf="[DEFAULT]",CD={[Ff]:"fire-core",[tD]:"fire-core-compat",[rD]:"fire-analytics",[nD]:"fire-analytics-compat",[sD]:"fire-app-check",[iD]:"fire-app-check-compat",[oD]:"fire-auth",[aD]:"fire-auth-compat",[cD]:"fire-rtdb",[lD]:"fire-rtdb-compat",[uD]:"fire-fn",[hD]:"fire-fn-compat",[dD]:"fire-iid",[fD]:"fire-iid-compat",[pD]:"fire-fcm",[mD]:"fire-fcm-compat",[gD]:"fire-perf",[_D]:"fire-perf-compat",[yD]:"fire-rc",[vD]:"fire-rc-compat",[wD]:"fire-gcs",[ED]:"fire-gcs-compat",[TD]:"fire-fst",[bD]:"fire-fst-compat","fire-js":"fire-js",[ID]:"fire-js-all"};/**
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
 */const Zl=new Map,Bf=new Map;function RD(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(Bf.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;Bf.set(e,t);for(const n of Zl.values())RD(n,t);return!0}function Is(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const SD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ei=new xi("app","Firebase",SD);/**
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
 */class PD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
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
 */const Di=AD;function _T(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ei.create("bad-app-name",{appName:String(i)});if(n||(n=cT()),!n)throw Ei.create("no-options");const s=Zl.get(i);if(s){if(Ka(n,s.options)&&Ka(r,s.config))return s;throw Ei.create("duplicate-app",{appName:i})}const o=new $x(i);for(const c of Bf.values())o.addComponent(c);const a=new PD(n,r,o);return Zl.set(i,a),a}function ah(t=Uf){const e=Zl.get(t);if(!e&&t===Uf&&cT())return _T();if(!e)throw Ei.create("no-app",{appName:t});return e}function Wt(t,e,n){var r;let i=(r=CD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}Tn(new pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const kD="firebase-heartbeat-database",ND=1,Ga="firebase-heartbeat-store";let Sd=null;function yT(){return Sd||(Sd=Yx(kD,ND,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ga)}}}).catch(t=>{throw Ei.create("idb-open",{originalErrorMessage:t.message})})),Sd}async function OD(t){try{return await(await yT()).transaction(Ga).objectStore(Ga).get(vT(t))}catch(e){if(e instanceof Hn)us.warn(e.message);else{const n=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(n.message)}}}async function Zy(t,e){try{const r=(await yT()).transaction(Ga,"readwrite");await r.objectStore(Ga).put(e,vT(t)),await r.done}catch(n){if(n instanceof Hn)us.warn(n.message);else{const r=Ei.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});us.warn(r.message)}}}function vT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xD=1024,DD=30*24*60*60*1e3;class MD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $D(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ev();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=DD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ev(),{heartbeatsToSend:n,unsentEntries:r}=LD(this._heartbeatsCache.heartbeats),i=Yl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ev(){return new Date().toISOString().substring(0,10)}function LD(t,e=xD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),tv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $D{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Am()?fT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await OD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tv(t){return Yl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function VD(t){Tn(new pn("platform-logger",e=>new Zx(e),"PRIVATE")),Tn(new pn("heartbeat",e=>new MD(e),"PRIVATE")),Wt(Ff,Xy,t),Wt(Ff,Xy,"esm2017"),Wt("fire-js","")}VD("");function Rm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function te(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}function nv(t){return t!==void 0&&t.enterprise!==void 0}class FD{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function wT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UD=wT,ET=new xi("auth","Firebase",wT());/**
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
 */const eu=new Lo("@firebase/auth");function BD(t,...e){eu.logLevel<=xe.WARN&&eu.warn(`Auth (${Di}): ${t}`,...e)}function Cl(t,...e){eu.logLevel<=xe.ERROR&&eu.error(`Auth (${Di}): ${t}`,...e)}/**
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
 */function Bn(t,...e){throw Sm(t,...e)}function _r(t,...e){return Sm(t,...e)}function TT(t,e,n){const r=Object.assign(Object.assign({},UD()),{[e]:n});return new xi("auth","Firebase",r).create(e,{appName:t.name})}function bT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Bn(t,"argument-error"),TT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ET.create(t,...e)}function de(t,e,...n){if(!t)throw Sm(e,...n)}function Fr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cl(e),new Error(e)}function Gr(t,e){t||Fr(e)}/**
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
 */function jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jD(){return rv()==="http:"||rv()==="https:"}function rv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function HD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jD()||uT()||"connection"in navigator)?navigator.onLine:!0}function WD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gr(n>e,"Short delay should be less than long delay!"),this.isMobile=Im()||hT()}get(){return HD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pm(t,e){Gr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class IT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qD=new yc(3e4,6e4);function As(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mi(t,e,n,r,i={}){return AT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Mo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),IT.fetch()(CT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function AT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zD),e);try{const i=new KD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw sl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw sl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw sl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw sl(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw TT(t,u,l);Bn(t,u)}}catch(i){if(i instanceof Hn)throw i;Bn(t,"network-request-failed",{message:String(i)})}}async function vc(t,e,n,r,i={}){const s=await Mi(t,e,n,r,i);return"mfaPendingCredential"in s&&Bn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function CT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Pm(t.config,i):`${t.config.apiScheme}://${i}`}class KD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_r(this.auth,"network-request-failed")),qD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_r(t,e,r);return i.customData._tokenResponse=n,i}async function GD(t,e){return Mi(t,"GET","/v2/recaptchaConfig",As(t,e))}/**
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
 */async function QD(t,e){return Mi(t,"POST","/v1/accounts:delete",e)}async function YD(t,e){return Mi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JD(t,e=!1){const n=Lt(t),r=await n.getIdToken(e),i=km(r);de(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ca(Pd(i.auth_time)),issuedAtTime:Ca(Pd(i.iat)),expirationTime:Ca(Pd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pd(t){return Number(t)*1e3}function km(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jl(n);return i?JSON.parse(i):(Cl("Failed to decode base64 JWT payload"),null)}catch(i){return Cl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function XD(t){const e=km(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&ZD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ZD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class eM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class RT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ca(this.lastLoginAt),this.creationTime=Ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await uo(t,YD(n,{idToken:r}));de(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?rM(s.providerUserInfo):[],a=nM(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new RT(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function tM(t){const e=Lt(t);await tu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rM(t){return t.map(e=>{var{providerId:n}=e,r=Rm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function iM(t,e){const n=await AT(t,{},async()=>{const r=Mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=CT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",IT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Qa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return de(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await iM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qa;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(de(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(de(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qa,this.toJSON())}_performRefresh(){return Fr("not implemented")}}/**
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
 */function oi(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class as{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new RT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await uo(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JD(this,e)}reload(){return tM(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new as(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await uo(this,QD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:P,isAnonymous:j,providerData:W,stsTokenManager:ce}=n;de(N&&ce,e,"internal-error");const ge=Qa.fromJSON(this.name,ce);de(typeof N=="string",e,"internal-error"),oi(h,e.name),oi(p,e.name),de(typeof P=="boolean",e,"internal-error"),de(typeof j=="boolean",e,"internal-error"),oi(m,e.name),oi(y,e.name),oi(v,e.name),oi(I,e.name),oi(A,e.name),oi(k,e.name);const qe=new as({uid:N,auth:e,email:p,emailVerified:P,displayName:h,isAnonymous:j,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:ge,createdAt:A,lastLoginAt:k});return W&&Array.isArray(W)&&(qe.providerData=W.map(Se=>Object.assign({},Se))),I&&(qe._redirectEventId=I),qe}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qa;i.updateFromServerResponse(n);const s=new as({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tu(s),s}}/**
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
 */const iv=new Map;function Ur(t){Gr(t instanceof Function,"Expected a class definition");let e=iv.get(t);return e?(Gr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,iv.set(t,e),e)}/**
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
 */class ST{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ST.type="NONE";const sv=ST;/**
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
 */function Rl(t,e,n){return`firebase:${t}:${e}:${n}`}class Qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Rl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Rl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?as._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qs(Ur(sv),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ur(sv);const o=Rl(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=as._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Qs(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Qs(s,e,r))}}/**
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
 */function ov(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(PT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xT(e))return"Blackberry";if(DT(e))return"Webos";if(Nm(e))return"Safari";if((e.includes("chrome/")||kT(e))&&!e.includes("edge/"))return"Chrome";if(OT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function PT(t=an()){return/firefox\//i.test(t)}function Nm(t=an()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kT(t=an()){return/crios\//i.test(t)}function NT(t=an()){return/iemobile/i.test(t)}function OT(t=an()){return/android/i.test(t)}function xT(t=an()){return/blackberry/i.test(t)}function DT(t=an()){return/webos/i.test(t)}function ch(t=an()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sM(t=an()){var e;return ch(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oM(){return _x()&&document.documentMode===10}function MT(t=an()){return ch(t)||OT(t)||DT(t)||xT(t)||/windows phone/i.test(t)||NT(t)}function aM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function LT(t,e=[]){let n;switch(t){case"Browser":n=ov(an());break;case"Worker":n=`${ov(an())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Di}/${r}`}/**
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
 */class cM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function lM(t,e={}){return Mi(t,"GET","/v2/passwordPolicy",As(t,e))}/**
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
 */const uM=6;class hM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:uM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class dM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new av(this),this.idTokenSubscription=new av(this),this.beforeStateQueue=new cM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ET,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ur(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Lt(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ur(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lM(this),n=new hM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ur(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[Ur(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=LT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ar(t){return Lt(t)}class av{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ax(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function fM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $T(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_r("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",fM().appendChild(r)})}function pM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const mM="https://www.google.com/recaptcha/enterprise.js?render=",gM="recaptcha-enterprise",_M="NO_RECAPTCHA";class yM{constructor(e){this.type=gM,this.auth=Ar(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{GD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new FD(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;nv(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(_M)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&nv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}$T(mM+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function nu(t,e,n,r=!1){const i=new yM(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function vM(t,e){const n=Is(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ka(s,e??{}))return i;Bn(i,"already-initialized")}return n.initialize({options:e})}function wM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ur);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function EM(t,e,n){const r=Ar(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=VT(e),{host:o,port:a}=TM(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||bM()}function VT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TM(t){const e=VT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cv(o)}}}function cv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Om{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fr("not implemented")}_getIdTokenResponse(e){return Fr("not implemented")}_linkToIdToken(e,n){return Fr("not implemented")}_getReauthenticationResolver(e){return Fr("not implemented")}}async function IM(t,e){return Mi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function kd(t,e){return vc(t,"POST","/v1/accounts:signInWithPassword",As(t,e))}/**
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
 */async function AM(t,e){return vc(t,"POST","/v1/accounts:signInWithEmailLink",As(t,e))}async function CM(t,e){return vc(t,"POST","/v1/accounts:signInWithEmailLink",As(t,e))}/**
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
 */class Ya extends Om{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ya(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ya(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await nu(e,r,"signInWithPassword");return kd(e,i)}else return kd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await nu(e,r,"signInWithPassword");return kd(e,s)}else return Promise.reject(i)});case"emailLink":return AM(e,{email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return IM(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return CM(e,{idToken:n,email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ys(t,e){return vc(t,"POST","/v1/accounts:signInWithIdp",As(t,e))}/**
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
 */const RM="http://localhost";class hs extends Om{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:RM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mo(n)}return e}}/**
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
 */function SM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PM(t){const e=ha(da(t)).link,n=e?ha(da(e)).deep_link_id:null,r=ha(da(t)).deep_link_id;return(r?ha(da(r)).link:null)||r||n||e||t}class xm{constructor(e){var n,r,i,s,o,a;const c=ha(da(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=SM((i=c.mode)!==null&&i!==void 0?i:null);de(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=PM(e);try{return new xm(n)}catch{return null}}}/**
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
 */class $o{constructor(){this.providerId=$o.PROVIDER_ID}static credential(e,n){return Ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xm.parseLink(n);return de(r,"argument-error"),Ya._fromEmailAndCode(e,r.code,r.tenantId)}}$o.PROVIDER_ID="password";$o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wc extends lh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class li extends wc{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.FACEBOOK_SIGN_IN_METHOD="facebook.com";li.PROVIDER_ID="facebook.com";/**
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
 */class ui extends wc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hs._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ui.credential(n,r)}catch{return null}}}ui.GOOGLE_SIGN_IN_METHOD="google.com";ui.PROVIDER_ID="google.com";/**
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
 */class hi extends wc{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.GITHUB_SIGN_IN_METHOD="github.com";hi.PROVIDER_ID="github.com";/**
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
 */class di extends wc{constructor(){super("twitter.com")}static credential(e,n){return hs._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return di.credential(n,r)}catch{return null}}}di.TWITTER_SIGN_IN_METHOD="twitter.com";di.PROVIDER_ID="twitter.com";/**
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
 */async function Nd(t,e){return vc(t,"POST","/v1/accounts:signUp",As(t,e))}/**
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
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await as._fromIdTokenResponse(e,r,i),o=lv(r);return new ds({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=lv(r);return new ds({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function lv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ru extends Hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ru.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ru(e,n,r,i)}}function FT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ru._fromErrorAndOperation(t,s,e,r):s})}async function kM(t,e,n=!1){const r=await uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",r)}/**
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
 */async function NM(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await uo(t,FT(r,i,e,t),n);de(s.idToken,r,"internal-error");const o=km(s.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),ds._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Bn(r,"user-mismatch"),s}}/**
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
 */async function UT(t,e,n=!1){const r="signIn",i=await FT(t,r,e),s=await ds._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function OM(t,e){return UT(Ar(t),e)}/**
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
 */async function BT(t){const e=Ar(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yW(t,e,n){var r;const i=Ar(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await nu(i,s,"signUpPassword");o=Nd(i,l)}else o=Nd(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await nu(i,s,"signUpPassword");return Nd(i,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&BT(t),l}),c=await ds._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function vW(t,e,n){return OM(Lt(t),$o.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&BT(t),r})}/**
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
 */async function xM(t,e){return Mi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function wW(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Lt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await uo(r,xM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function jT(t,e,n,r){return Lt(t).onIdTokenChanged(e,n,r)}function DM(t,e,n){return Lt(t).beforeAuthStateChanged(e,n)}function EW(t){return Lt(t).signOut()}const iu="__sak";/**
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
 */class HT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(iu,"1"),this.storage.removeItem(iu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function MM(){const t=an();return Nm(t)||ch(t)}const LM=1e3,$M=10;class WT extends HT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=MM()&&aM(),this.fallbackToPolling=MT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);oM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$M):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},LM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}WT.type="LOCAL";const VM=WT;/**
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
 */class zT extends HT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zT.type="SESSION";const qT=zT;/**
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
 */function FM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class uh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new uh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await FM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uh.receivers=[];/**
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
 */function Dm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class UM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Dm("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yr(){return window}function BM(t){yr().location.href=t}/**
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
 */function KT(){return typeof yr().WorkerGlobalScope<"u"&&typeof yr().importScripts=="function"}async function jM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WM(){return KT()?self:null}/**
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
 */const GT="firebaseLocalStorageDb",zM=1,su="firebaseLocalStorage",QT="fbase_key";class Ec{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hh(t,e){return t.transaction([su],e?"readwrite":"readonly").objectStore(su)}function qM(){const t=indexedDB.deleteDatabase(GT);return new Ec(t).toPromise()}function Hf(){const t=indexedDB.open(GT,zM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(su,{keyPath:QT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(su)?e(r):(r.close(),await qM(),e(await Hf()))})})}async function uv(t,e,n){const r=hh(t,!0).put({[QT]:e,value:n});return new Ec(r).toPromise()}async function KM(t,e){const n=hh(t,!1).get(e),r=await new Ec(n).toPromise();return r===void 0?null:r.value}function hv(t,e){const n=hh(t,!0).delete(e);return new Ec(n).toPromise()}const GM=800,QM=3;class YT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return KT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uh._getInstance(WM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jM(),!this.activeServiceWorker)return;this.sender=new UM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hf();return await uv(e,iu,"1"),await hv(e,iu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hh(i,!1).getAll();return new Ec(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}YT.type="LOCAL";const YM=YT;new yc(3e4,6e4);/**
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
 */function Mm(t,e){return e?Ur(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lm extends Om{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JM(t){return UT(t.auth,new Lm(t),t.bypassAuthState)}function XM(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),NM(n,new Lm(t),t.bypassAuthState)}async function ZM(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),kM(n,new Lm(t),t.bypassAuthState)}/**
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
 */class JT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JM;case"linkViaPopup":case"linkViaRedirect":return ZM;case"reauthViaPopup":case"reauthViaRedirect":return XM;default:Bn(this.auth,"internal-error")}}resolve(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eL=new yc(2e3,1e4);async function TW(t,e,n){const r=Ar(t);bT(t,e,lh);const i=Mm(r,n);return new Ji(r,"signInViaPopup",e,i).executeNotNull()}class Ji extends JT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ji.currentPopupAction&&Ji.currentPopupAction.cancel(),Ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Gr(this.filter.length===1,"Popup operations only handle one event");const e=Dm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_r(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_r(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_r(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eL.get())};e()}}Ji.currentPopupAction=null;/**
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
 */const tL="pendingRedirect",Sl=new Map;class nL extends JT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sl.get(this.auth._key());if(!e){try{const r=await rL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sl.set(this.auth._key(),e)}return this.bypassAuthState||Sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rL(t,e){const n=ZT(e),r=XT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function iL(t,e){return XT(t)._set(ZT(e),"true")}function sL(t,e){Sl.set(t._key(),e)}function XT(t){return Ur(t._redirectPersistence)}function ZT(t){return Rl(tL,t.config.apiKey,t.name)}/**
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
 */function bW(t,e,n){return oL(t,e,n)}async function oL(t,e,n){const r=Ar(t);bT(t,e,lh),await r._initializationPromise;const i=Mm(r,n);return await iL(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function IW(t,e){return await Ar(t)._initializationPromise,eb(t,e,!1)}async function eb(t,e,n=!1){const r=Ar(t),i=Mm(r,e),o=await new nL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const aL=10*60*1e3;class cL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tb(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_r(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aL&&this.cachedEventUids.clear(),this.cachedEventUids.has(dv(e))}saveEventToCache(e){this.cachedEventUids.add(dv(e)),this.lastProcessedEventTime=Date.now()}}function dv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tb(t);default:return!1}}/**
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
 */async function uL(t,e={}){return Mi(t,"GET","/v1/projects",e)}/**
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
 */const hL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dL=/^https?/;async function fL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uL(t);for(const n of e)try{if(pL(n))return}catch{}Bn(t,"unauthorized-domain")}function pL(t){const e=jf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dL.test(n))return!1;if(hL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const mL=new yc(3e4,6e4);function fv(){const t=yr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gL(t){return new Promise((e,n)=>{var r,i,s;function o(){fv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fv(),n(_r(t,"network-request-failed"))},timeout:mL.get()})}if(!((i=(r=yr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yr().gapi)===null||s===void 0)&&s.load)o();else{const a=pM("iframefcb");return yr()[a]=()=>{gapi.load?o():n(_r(t,"network-request-failed"))},$T(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Pl=null,e})}let Pl=null;function _L(t){return Pl=Pl||gL(t),Pl}/**
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
 */const yL=new yc(5e3,15e3),vL="__/auth/iframe",wL="emulator/auth/iframe",EL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bL(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pm(e,wL):`https://${t.config.authDomain}/${vL}`,r={apiKey:e.apiKey,appName:t.name,v:Di},i=TL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Mo(r).slice(1)}`}async function IL(t){const e=await _L(t),n=yr().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:bL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_r(t,"network-request-failed"),a=yr().setTimeout(()=>{s(o)},yL.get());function c(){yr().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const AL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CL=500,RL=600,SL="_blank",PL="http://localhost";class pv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kL(t,e,n,r=CL,i=RL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},AL),{width:r.toString(),height:i.toString(),top:s,left:o}),l=an().toLowerCase();n&&(a=kT(l)?SL:n),PT(l)&&(e=e||PL,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(sM(l)&&a!=="_self")return NL(e||"",a),new pv(null);const h=window.open(e||"",a,u);de(h,t,"popup-blocked");try{h.focus()}catch{}return new pv(h)}function NL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const OL="__/auth/handler",xL="emulator/auth/handler",DL=encodeURIComponent("fac");async function mv(t,e,n,r,i,s){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Di,eventId:i};if(e instanceof lh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Lf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof wc){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${DL}=${encodeURIComponent(c)}`:"";return`${ML(t)}?${Mo(a).slice(1)}${l}`}function ML({config:t}){return t.emulator?Pm(t,xL):`https://${t.authDomain}/${OL}`}/**
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
 */const Od="webStorageSupport";class LL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qT,this._completeRedirectFn=eb,this._overrideRedirectResult=sL}async _openPopup(e,n,r,i){var s;Gr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mv(e,n,r,jf(),i);return kL(e,o,Dm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mv(e,n,r,jf(),i);return BM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IL(e),r=new cL(e);return n.register("authEvent",i=>(de(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Od,{type:Od},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Od];o!==void 0&&n(!!o),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return MT()||Nm()||ch()}}const $L=LL;var gv="@firebase/auth",_v="1.3.0";/**
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
 */class VL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function FL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function UL(t){Tn(new pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:LT(t)},l=new dM(r,i,s,c);return wM(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new pn("auth-internal",e=>{const n=Ar(e.getProvider("auth").getImmediate());return(r=>new VL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(gv,_v,FL(t)),Wt(gv,_v,"esm2017")}/**
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
 */const BL=5*60,jL=lT("authIdTokenMaxAge")||BL;let yv=null;const HL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jL)return;const i=n==null?void 0:n.token;yv!==i&&(yv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nb(t=ah()){const e=Is(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vM(t,{popupRedirectResolver:$L,persistence:[YM,VM,qT]}),r=lT("authTokenSyncURL");if(r){const s=HL(r);DM(n,s,()=>s(n.currentUser)),jT(n,o=>s(o))}const i=aT("auth");return i&&EM(n,`http://${i}`),n}UL("Browser");/**
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
 */const WL=new Map,zL={activated:!1,tokenObservers:[]};function rr(t){return WL.get(t)||Object.assign({},zL)}const vv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class qL{constructor(e,n,r,i,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new za,await KL(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new za,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function KL(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const GL={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ou=new xi("appCheck","AppCheck",GL);function rb(t){if(!rr(t).activated)throw ou.create("use-before-activation",{appName:t.name})}/**
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
 */const QL="firebase-app-check-database",YL=1,Wf="firebase-app-check-store";let ol=null;function JL(){return ol||(ol=new Promise((t,e)=>{try{const n=indexedDB.open(QL,YL);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var i;e(ou.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Wf,{keyPath:"compositeKey"})}}}catch(n){e(ou.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ol)}function XL(t,e){return ZL(e2(t),e)}async function ZL(t,e){const r=(await JL()).transaction(Wf,"readwrite"),s=r.objectStore(Wf).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=c=>{o()},r.onerror=c=>{var l;a(ou.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function e2(t){return`${t.options.appId}-${t.name}`}/**
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
 */const zf=new Lo("@firebase/app-check");function wv(t,e){return Am()?XL(t,e).catch(n=>{zf.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const t2={error:"UNKNOWN_ERROR"};function n2(t){return sh.encodeString(JSON.stringify(t),!1)}async function qf(t,e=!1){const n=t.app;rb(n);const r=rr(n);let i=r.token,s;if(i&&!fa(i)&&(r.token=void 0,i=void 0),!i){const c=await r.cachedTokenPromise;c&&(fa(c)?i=c:await wv(n,void 0))}if(!e&&i&&fa(i))return{token:i.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await rr(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?zf.warn(c.message):zf.error(c),s=c}let a;return i?s?fa(i)?a={token:i.token,internalError:s}:a=Tv(s):(a={token:i.token},r.token=i,await wv(n,i)):a=Tv(s),o&&o2(n,a),a}async function r2(t){const e=t.app;rb(e);const{provider:n}=rr(e);{const{token:r}=await n.getToken();return{token:r}}}function i2(t,e,n,r){const{app:i}=t,s=rr(i),o={next:n,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&fa(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Ev(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Ev(t))}function ib(t,e){const n=rr(t),r=n.tokenObservers.filter(i=>i.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Ev(t){const{app:e}=t,n=rr(e);let r=n.tokenRefresher;r||(r=s2(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function s2(t){const{app:e}=t;return new qL(async()=>{const n=rr(e);let r;if(n.token?r=await qf(t,!0):r=await qf(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=rr(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},vv.RETRIAL_MIN_WAIT,vv.RETRIAL_MAX_WAIT)}function o2(t,e){const n=rr(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function fa(t){return t.expireTimeMillis-Date.now()>0}function Tv(t){return{token:n2(t2),error:t}}/**
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
 */class a2{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=rr(this.app);for(const n of e)ib(this.app,n.next);return Promise.resolve()}}function c2(t,e){return new a2(t,e)}function l2(t){return{getToken:e=>qf(t,e),getLimitedUseToken:()=>r2(t),addTokenListener:e=>i2(t,"INTERNAL",e),removeTokenListener:e=>ib(t.app,e)}}const u2="@firebase/app-check",h2="0.8.0",d2="app-check",bv="app-check-internal";function f2(){Tn(new pn(d2,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return c2(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(bv).initialize()})),Tn(new pn(bv,t=>{const e=t.getProvider("app-check").getImmediate();return l2(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Wt(u2,h2)}f2();var p2="firebase",m2="10.3.0";/**
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
 */Wt(p2,m2,"app");const sb=Symbol("firebaseApp");function Tc(t){return jE()&&Pn(sb,null)||ah(t)}const dr=()=>{},g2=typeof window<"u";function $m(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function _2(t,e,n){const r=(""+e).split("."),i=r.pop(),s=r.reduce((o,a)=>o&&o[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(i),1,n):s[i]=n}function Cs(t){return!!t&&typeof t=="object"}const y2=Object.prototype;function v2(t){return Cs(t)&&Object.getPrototypeOf(t)===y2}function Vm(t){return Cs(t)&&t.type==="document"}function w2(t){return Cs(t)&&t.type==="collection"}function E2(t){return Vm(t)||w2(t)}function T2(t){return Cs(t)&&t.type==="query"}function b2(t){return Cs(t)&&"ref"in t}function I2(t){return Cs(t)&&typeof t.bucket=="string"}function A2(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const C2=Symbol.for("v-scx");function R2(){return!!Pn(C2,0)}const al=new WeakMap;function S2(t,e){if(!al.has(t)){const n=X0(!0);al.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),al.delete(t)}}return al.get(t)}const ob=new WeakMap;function Fm(t){return ob.get(Tc(t))}const cl=new WeakMap;function ab(t){const e=Tc(t);if(!cl.has(e)){let n;const i=[new Promise(s=>{n=s}),s=>{cl.set(e,s),n(s.value)}];cl.set(e,i)}return cl.get(e)}function P2(t){const e=ab(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function k2(t,e){const n=nb(e);jT(n,r=>{const i=ab();t.value=r,Array.isArray(i)&&i[1](t)})}const Iv="@firebase/database",Av="1.0.1";/**
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
 */let cb="";function N2(t){cb=t}/**
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
 */class O2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),jt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:qa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class x2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ei(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const lb=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new O2(e)}}catch{}return new x2},Xi=lb("localStorage"),Kf=lb("sessionStorage");/**
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
 */const Js=new Lo("@firebase/database"),D2=function(){let t=1;return function(){return t++}}(),ub=function(t){const e=Px(t),n=new Ix;n.update(e);const r=n.digest();return sh.encodeByteArray(r)},bc=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=bc.apply(null,r):typeof r=="object"?e+=jt(r):e+=r,e+=" "}return e};let cs=null,Cv=!0;const M2=function(t,e){K(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Js.logLevel=xe.VERBOSE,cs=Js.log.bind(Js),e&&Kf.set("logging_enabled",!0)):typeof t=="function"?cs=t:(cs=null,Kf.remove("logging_enabled"))},Yt=function(...t){if(Cv===!0&&(Cv=!1,cs===null&&Kf.get("logging_enabled")===!0&&M2(!0)),cs){const e=bc.apply(null,t);cs(e)}},Ic=function(t){return function(...e){Yt(t,...e)}},Gf=function(...t){const e="FIREBASE INTERNAL ERROR: "+bc(...t);Js.error(e)},fs=function(...t){const e=`FIREBASE FATAL ERROR: ${bc(...t)}`;throw Js.error(e),new Error(e)},kn=function(...t){const e="FIREBASE WARNING: "+bc(...t);Js.warn(e)},L2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&kn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hb=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ho="[MIN_NAME]",ps="[MAX_NAME]",Vo=function(t,e){if(t===e)return 0;if(t===ho||e===ps)return-1;if(e===ho||t===ps)return 1;{const n=Rv(t),r=Rv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},V2=function(t,e){return t===e?0:t<e?-1:1},na=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+jt(e))},Um=function(t){if(typeof t!="object"||t===null)return jt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=jt(e[r]),n+=":",n+=Um(t[e[r]]);return n+="}",n},db=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function jn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const fb=function(t){K(!hb(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,c;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let p=parseInt(u.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),h=h+p}return h.toLowerCase()},F2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},U2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},B2=new RegExp("^-?(0*)\\d{1,10}$"),j2=-2147483648,H2=2147483647,Rv=function(t){if(B2.test(t)){const e=Number(t);if(e>=j2&&e<=H2)return e}return null},Ac=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw kn("Exception was thrown by user callback.",n),e},Math.floor(0))}},W2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ra=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class z2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){kn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class q2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',kn(e)}}class Qf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qf.OWNER="owner";/**
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
 */const Bm="5",pb="v",mb="s",gb="r",_b="f",yb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vb="ls",wb="p",Yf="ac",Eb="websocket",Tb="long_polling";/**
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
 */class K2{constructor(e,n,r,i,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function G2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bb(t,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let r;if(e===Eb)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Tb)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);G2(t)&&(n.ns=t.namespace);const i=[];return jn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Q2{constructor(){this.counters_={}}incrementCounter(e,n=1){ei(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lx(this.counters_)}}/**
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
 */const xd={},Dd={};function jm(t){const e=t.toString();return xd[e]||(xd[e]=new Q2),xd[e]}function Y2(t,e){const n=t.toString();return Dd[n]||(Dd[n]=e()),Dd[n]}/**
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
 */class J2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ac(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Sv="start",X2="close",Z2="pLPCommand",e$="pRTLPCB",Ib="id",Ab="pw",Cb="ser",t$="cb",n$="seg",r$="ts",i$="d",s$="dframe",Rb=1870,Sb=30,o$=Rb-Sb,a$=25e3,c$=3e4;class js{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ic(e),this.stats_=jm(n),this.urlFn=c=>(this.appCheckToken&&(c[Yf]=this.appCheckToken),bb(n,Tb,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new J2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(c$)),$2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hm((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sv)this.id=a,this.password=c;else if(o===X2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Sv]="t",r[Cb]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[t$]=this.scriptTagHolder.uniqueCallbackIdentifier),r[pb]=Bm,this.transportSessionId&&(r[mb]=this.transportSessionId),this.lastSessionId&&(r[vb]=this.lastSessionId),this.applicationId&&(r[wb]=this.applicationId),this.appCheckToken&&(r[Yf]=this.appCheckToken),typeof location<"u"&&location.hostname&&yb.test(location.hostname)&&(r[gb]=_b);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){js.forceAllow_=!0}static forceDisallow(){js.forceDisallow_=!0}static isAvailable(){return js.forceAllow_?!0:!js.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!F2()&&!U2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=jt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sT(n),i=db(r,o$);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[s$]="t",r[Ib]=e,r[Ab]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=jt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Hm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=D2(),window[Z2+this.uniqueCallbackIdentifier]=e,window[e$+this.uniqueCallbackIdentifier]=n,this.myIFrame=Hm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Yt("frame writing exception"),a.stack&&Yt(a.stack),Yt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Yt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ib]=this.myID,e[Ab]=this.myPW,e[Cb]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sb+r.length<=Rb;){const o=this.pendingSegs.shift();r=r+"&"+n$+i+"="+o.seg+"&"+r$+i+"="+o.ts+"&"+i$+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(a$)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const l$=16384,u$=45e3;let au=null;typeof MozWebSocket<"u"?au=MozWebSocket:typeof WebSocket<"u"&&(au=WebSocket);class Gn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ic(this.connId),this.stats_=jm(n),this.connURL=Gn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[pb]=Bm,typeof location<"u"&&location.hostname&&yb.test(location.hostname)&&(o[gb]=_b),n&&(o[mb]=n),r&&(o[vb]=r),i&&(o[Yf]=i),s&&(o[wb]=s),bb(e,Eb,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xi.set("previous_websocket_failure",!0);try{let r;dT(),this.mySock=new au(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Gn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&au!==null&&!Gn.forceDisallow_}static previouslyFailed(){return Xi.isInMemoryStorage||Xi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=qa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=jt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=db(n,l$);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(u$))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gn.responsesRequiredToBeHealthy=2;Gn.healthyTimeout=3e4;/**
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
 */class Ja{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[js,Gn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gn&&Gn.isAvailable();let r=n&&!Gn.previouslyFailed();if(e.webSocketOnly&&(n||kn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Gn];else{const i=this.transports_=[];for(const s of Ja.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ja.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ja.globalTransportInitialized_=!1;/**
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
 */const h$=6e4,d$=5e3,f$=10*1024,p$=100*1024,Md="t",Pv="d",m$="s",kv="r",g$="e",Nv="o",Ov="a",xv="n",Dv="p",_$="h";class y${constructor(e,n,r,i,s,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ic("c:"+this.id+":"),this.transportManager_=new Ja(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ra(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>p$?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>f$?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Md in e){const n=e[Md];n===Ov?this.upgradeIfSecondaryHealthy_():n===kv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Nv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=na("t",e),r=na("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Dv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ov,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=na("t",e),r=na("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=na(Md,e);if(Pv in e){const r=e[Pv];if(n===_$){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===xv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===m$?this.onConnectionShutdown_(r):n===kv?this.onReset_(r):n===g$?Gf("Server Error: "+r):n===Nv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bm!==r&&kn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ra(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(h$))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ra(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(d$))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Dv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Pb{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class kb{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class cu extends kb{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Im()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new cu}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Mv=32,Lv=768;class rt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ge(){return new rt("")}function Ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ri(t){return t.pieces_.length-t.pieceNum_}function et(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new rt(t.pieces_,e)}function Nb(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function v$(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ob(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function xb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new rt(e,0)}function Ot(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof rt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new rt(n,0)}function Te(t){return t.pieceNum_>=t.pieces_.length}function Un(t,e){const n=Ce(t),r=Ce(e);if(n===null)return e;if(n===r)return Un(et(t),et(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Db(t,e){if(Ri(t)!==Ri(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Yn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ri(t)>Ri(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class w${constructor(e,n){this.errorPrefix_=n,this.parts_=Ob(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=oh(this.parts_[r]);Mb(this)}}function E$(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=oh(e),Mb(t)}function T$(t){const e=t.parts_.pop();t.byteLength_-=oh(e),t.parts_.length>0&&(t.byteLength_-=1)}function Mb(t){if(t.byteLength_>Lv)throw new Error(t.errorPrefix_+"has a key path longer than "+Lv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Mv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Mv+") or object contains a cycle "+Ki(t))}function Ki(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Wm extends kb{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Wm}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ra=1e3,b$=60*5*1e3,$v=30*1e3,I$=1.3,A$=3e4,C$="server_kill",Vv=3;class Wr extends Pb{constructor(e,n,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Wr.nextPersistentConnectionId_++,this.log_=Ic("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ra,this.maxReconnectDelay_=b$,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!dT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(jt(s)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new za,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;Wr.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ei(e,"w")){const r=lo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();kn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$v)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Tx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+jt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gf("Unrecognized action received from server: "+jt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ra,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ra,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>A$&&(this.reconnectDelay_=ra),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*I$)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(h){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,p]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Yt("getToken() completed but was canceled"):(Yt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,a=new y$(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{kn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(C$)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&kn(h),c())}}}interrupt(e){Yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Lf(this.interruptReasons_)&&(this.reconnectDelay_=ra,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Um(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new rt(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Yt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vv&&(this.reconnectDelay_=$v,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Yt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+cb.replace(/\./g,"-")]=1,Im()?e["framework.cordova"]=1:hT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cu.getInstance().currentlyOnline();return Lf(this.interruptReasons_)&&e}}Wr.nextPersistentConnectionId_=0;Wr.nextConnectionId_=0;/**
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
 */class Re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Re(e,n)}}/**
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
 */class dh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Re(ho,e),i=new Re(ho,n);return this.compare(r,i)!==0}minPost(){return Re.MIN}}/**
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
 */let ll;class Lb extends dh{static get __EMPTY_NODE(){return ll}static set __EMPTY_NODE(e){ll=e}compare(e,n){return Vo(e.name,n.name)}isDefinedOn(e){throw Do("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Re.MIN}maxPost(){return new Re(ps,ll)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new Re(e,ll)}toString(){return".key"}}const Xs=new Lb;/**
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
 */let ul=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Sn=class pa{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pa.RED,this.left=i??fr.EMPTY_NODE,this.right=s??fr.EMPTY_NODE}copy(e,n,r,i,s){return new pa(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return fr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return fr.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pa.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Sn.RED=!0;Sn.BLACK=!1;class R${copy(e,n,r,i,s){return this}insert(e,n,r){return new Sn(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let fr=class kl{constructor(e,n=kl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new kl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Sn.BLACK,null,null))}remove(e){return new kl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Sn.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ul(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ul(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ul(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ul(this.root_,null,this.comparator_,!0,e)}};fr.EMPTY_NODE=new R$;/**
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
 */function S$(t,e){return Vo(t.name,e.name)}function zm(t,e){return Vo(t,e)}/**
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
 */let Jf;function P$(t){Jf=t}const $b=function(t){return typeof t=="number"?"number:"+fb(t):"string:"+t},Vb=function(t){if(t.isLeafNode()){const e=t.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ei(e,".sv"),"Priority must be a string or number.")}else K(t===Jf||t.isEmpty(),"priority of unexpected type.");K(t===Jf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Fv;class Pt{constructor(e,n=Pt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Vb(this.priorityNode_)}static set __childrenNodeConstructor(e){Fv=e}static get __childrenNodeConstructor(){return Fv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Te(e)?this:Ce(e)===".priority"?this.priorityNode_:Pt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Pt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ce(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(K(r!==".priority"||Ri(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Pt.__childrenNodeConstructor.EMPTY_NODE.updateChild(et(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$b(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=fb(this.value_):e+=this.value_,this.lazyHash_=ub(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pt.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Pt.VALUE_TYPE_ORDER.indexOf(n),s=Pt.VALUE_TYPE_ORDER.indexOf(r);return K(i>=0,"Unknown leaf type: "+n),K(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Pt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Fb,Ub;function k$(t){Fb=t}function N$(t){Ub=t}class O$ extends dh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Vo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Re.MIN}maxPost(){return new Re(ps,new Pt("[PRIORITY-POST]",Ub))}makePost(e,n){const r=Fb(e);return new Re(n,new Pt("[PRIORITY-POST]",r))}toString(){return".priority"}}const nn=new O$;/**
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
 */const x$=Math.log(2);class D${constructor(e){const n=s=>parseInt(Math.log(s)/x$,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const lu=function(t,e,n,r){t.sort(e);const i=function(c,l){const u=l-c;let h,p;if(u===0)return null;if(u===1)return h=t[c],p=n?n(h):h,new Sn(p,h.node,Sn.BLACK,null,null);{const m=parseInt(u/2,10)+c,y=i(c,m),v=i(m+1,l);return h=t[m],p=n?n(h):h,new Sn(p,h.node,Sn.BLACK,y,v)}},s=function(c){let l=null,u=null,h=t.length;const p=function(y,v){const I=h-y,A=h;h-=y;const k=i(I+1,A),N=t[I],P=n?n(N):N;m(new Sn(P,N.node,v,null,k))},m=function(y){l?(l.left=y,l=y):(u=y,l=y)};for(let y=0;y<c.count;++y){const v=c.nextBitIsOne(),I=Math.pow(2,c.count-(y+1));v?p(I,Sn.BLACK):(p(I,Sn.BLACK),p(I,Sn.RED))}return u},o=new D$(t.length),a=s(o);return new fr(r||e,a)};/**
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
 */let Ld;const Ms={};class Br{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return K(Ms&&nn,"ChildrenNode.ts has not been loaded"),Ld=Ld||new Br({".priority":Ms},{".priority":nn}),Ld}get(e){const n=lo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof fr?n:null}hasIndex(e){return ei(this.indexSet_,e.toString())}addIndex(e,n){K(e!==Xs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Re.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=lu(r,e.getCompare()):a=Ms;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Br(u,l)}addToIndexes(e,n){const r=Xl(this.indexes_,(i,s)=>{const o=lo(this.indexSet_,s);if(K(o,"Missing index implementation for "+s),i===Ms)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Re.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),lu(a,o.getCompare())}else return Ms;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new Re(e.name,a))),c.insert(e,e.node)}});return new Br(r,this.indexSet_)}removeFromIndexes(e,n){const r=Xl(this.indexes_,i=>{if(i===Ms)return i;{const s=n.get(e.name);return s?i.remove(new Re(e.name,s)):i}});return new Br(r,this.indexSet_)}}/**
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
 */let ia;class je{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Vb(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ia||(ia=new je(new fr(zm),null,Br.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ia}updatePriority(e){return this.children_.isEmpty()?this:new je(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ia:n}}getChild(e){const n=Ce(e);return n===null?this:this.getImmediateChild(n).getChild(et(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Re(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ia:this.priorityNode_;return new je(i,o,s)}}updateChild(e,n){const r=Ce(e);if(r===null)return n;{K(Ce(e)!==".priority"||Ri(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(et(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(nn,(o,a)=>{n[o]=a.val(e),r++,s&&je.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$b(this.getPriority().val())+":"),this.forEachChild(nn,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ub(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Re(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Re(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cc?-1:0}withIndex(e){if(e===Xs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new je(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Xs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(nn),i=n.getIterator(nn);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xs?null:this.indexMap_.get(e.toString())}}je.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class M$ extends je{constructor(){super(new fr(zm),je.EMPTY_NODE,Br.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return je.EMPTY_NODE}isEmpty(){return!1}}const Cc=new M$;Object.defineProperties(Re,{MIN:{value:new Re(ho,je.EMPTY_NODE)},MAX:{value:new Re(ps,Cc)}});Lb.__EMPTY_NODE=je.EMPTY_NODE;Pt.__childrenNodeConstructor=je;P$(Cc);N$(Cc);/**
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
 */const L$=!0;function Jt(t,e=null){if(t===null)return je.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Pt(n,Jt(e))}if(!(t instanceof Array)&&L$){const n=[];let r=!1;if(jn(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Jt(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new Re(o,c)))}}),n.length===0)return je.EMPTY_NODE;const s=lu(n,S$,o=>o.name,zm);if(r){const o=lu(n,nn.getCompare());return new je(s,Jt(e),new Br({".priority":o},{".priority":nn}))}else return new je(s,Jt(e),Br.Default)}else{let n=je.EMPTY_NODE;return jn(t,(r,i)=>{if(ei(t,r)&&r.substring(0,1)!=="."){const s=Jt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Jt(e))}}k$(Jt);/**
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
 */class $$ extends dh{constructor(e){super(),this.indexPath_=e,K(!Te(e)&&Ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Vo(e.name,n.name):s}makePost(e,n){const r=Jt(e),i=je.EMPTY_NODE.updateChild(this.indexPath_,r);return new Re(n,i)}maxPost(){const e=je.EMPTY_NODE.updateChild(this.indexPath_,Cc);return new Re(ps,e)}toString(){return Ob(this.indexPath_,0).join("/")}}/**
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
 */class V$ extends dh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Vo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Re.MIN}maxPost(){return Re.MAX}makePost(e,n){const r=Jt(e);return new Re(n,r)}toString(){return".value"}}const F$=new V$;/**
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
 */function U$(t){return{type:"value",snapshotNode:t}}function B$(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function j$(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Uv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function H$(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class qm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=nn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ho}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ps}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===nn}copy(){const e=new qm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Bv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===nn?n="$priority":t.index_===F$?n="$value":t.index_===Xs?n="$key":(K(t.index_ instanceof $$,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=jt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=jt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+jt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=jt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+jt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function jv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==nn&&(e.i=t.index_.toString()),e}/**
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
 */class uu extends Pb{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ic("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=uu.getListenId_(e,r),a={};this.listens_[o]=a;const c=Bv(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(s,h,!1,r),lo(this.listens_,o)===a){let p;l?l===401?p="permission_denied":p="rest_error:"+l:p="ok",i(p,null)}})}unlisten(e,n){const r=uu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Bv(e._queryParams),r=e._path.toString(),i=new za;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=qa(a.responseText)}catch{kn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&kn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class W${constructor(){this.rootNode_=je.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function hu(){return{value:null,children:new Map}}function Bb(t,e,n){if(Te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ce(e);t.children.has(r)||t.children.set(r,hu());const i=t.children.get(r);e=et(e),Bb(i,e,n)}}function Xf(t,e,n){t.value!==null?n(e,t.value):z$(t,(r,i)=>{const s=new rt(e.toString()+"/"+r);Xf(i,s,n)})}function z$(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class q${constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&jn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Hv=10*1e3,K$=30*1e3,G$=5*60*1e3;class Q${constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new q$(e);const r=Hv+(K$-Hv)*Math.random();Ra(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;jn(e,(i,s)=>{s>0&&ei(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ra(this.reportStats_.bind(this),Math.floor(Math.random()*2*G$))}}/**
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
 */var pr;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pr||(pr={}));function jb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hb(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wb(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class du{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pr.ACK_USER_WRITE,this.source=jb()}operationForChild(e){if(Te(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new rt(e));return new du(Ge(),n,this.revert)}}else return K(Ce(this.path)===e,"operationForChild called for unrelated child."),new du(et(this.path),this.affectedTree,this.revert)}}/**
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
 */class ms{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pr.OVERWRITE}operationForChild(e){return Te(this.path)?new ms(this.source,Ge(),this.snap.getImmediateChild(e)):new ms(this.source,et(this.path),this.snap)}}/**
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
 */class Xa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pr.MERGE}operationForChild(e){if(Te(this.path)){const n=this.children.subtree(new rt(e));return n.isEmpty()?null:n.value?new ms(this.source,Ge(),n.value):new Xa(this.source,Ge(),n)}else return K(Ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xa(this.source,et(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Km{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Te(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Y$(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(H$(o.childName,o.snapshotNode))}),sa(t,i,"child_removed",e,r,n),sa(t,i,"child_added",e,r,n),sa(t,i,"child_moved",s,r,n),sa(t,i,"child_changed",e,r,n),sa(t,i,"value",e,r,n),i}function sa(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,c)=>X$(t,a,c)),o.forEach(a=>{const c=J$(t,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function J$(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function X$(t,e,n){if(e.childName==null||n.childName==null)throw Do("Should only compare child_ events.");const r=new Re(e.childName,e.snapshotNode),i=new Re(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function zb(t,e){return{eventCache:t,serverCache:e}}function Sa(t,e,n,r){return zb(new Km(e,n,r),t.serverCache)}function qb(t,e,n,r){return zb(t.eventCache,new Km(e,n,r))}function Zf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let $d;const Z$=()=>($d||($d=new fr(V2)),$d);class Je{constructor(e,n=Z$()){this.value=e,this.children=n}static fromObject(e){let n=new Je(null);return jn(e,(r,i)=>{n=n.set(new rt(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ge(),value:this.value};if(Te(e))return null;{const r=Ce(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(et(e),n);return s!=null?{path:Ot(new rt(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Te(e))return this;{const n=Ce(e),r=this.children.get(n);return r!==null?r.subtree(et(e)):new Je(null)}}set(e,n){if(Te(e))return new Je(n,this.children);{const r=Ce(e),s=(this.children.get(r)||new Je(null)).set(et(e),n),o=this.children.insert(r,s);return new Je(this.value,o)}}remove(e){if(Te(e))return this.children.isEmpty()?new Je(null):new Je(null,this.children);{const n=Ce(e),r=this.children.get(n);if(r){const i=r.remove(et(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Je(null):new Je(this.value,s)}else return this}}get(e){if(Te(e))return this.value;{const n=Ce(e),r=this.children.get(n);return r?r.get(et(e)):null}}setTree(e,n){if(Te(e))return n;{const r=Ce(e),s=(this.children.get(r)||new Je(null)).setTree(et(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Je(this.value,o)}}fold(e){return this.fold_(Ge(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ot(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ge(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Te(e))return null;{const s=Ce(e),o=this.children.get(s);return o?o.findOnPath_(et(e),Ot(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ge(),n)}foreachOnPath_(e,n,r){if(Te(e))return this;{this.value&&r(n,this.value);const i=Ce(e),s=this.children.get(i);return s?s.foreachOnPath_(et(e),Ot(n,i),r):new Je(null)}}foreach(e){this.foreach_(Ge(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ot(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class tr{constructor(e){this.writeTree_=e}static empty(){return new tr(new Je(null))}}function Pa(t,e,n){if(Te(e))return new tr(new Je(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Un(i,e);return s=s.updateChild(o,n),new tr(t.writeTree_.set(i,s))}else{const i=new Je(n),s=t.writeTree_.setTree(e,i);return new tr(s)}}}function Wv(t,e,n){let r=t;return jn(n,(i,s)=>{r=Pa(r,Ot(e,i),s)}),r}function zv(t,e){if(Te(e))return tr.empty();{const n=t.writeTree_.setTree(e,new Je(null));return new tr(n)}}function ep(t,e){return Rs(t,e)!=null}function Rs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Un(n.path,e)):null}function qv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(nn,(r,i)=>{e.push(new Re(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Re(r,i.value))}),e}function Ti(t,e){if(Te(e))return t;{const n=Rs(t,e);return n!=null?new tr(new Je(n)):new tr(t.writeTree_.subtree(e))}}function tp(t){return t.writeTree_.isEmpty()}function fo(t,e){return Kb(Ge(),t.writeTree_,e)}function Kb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(K(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Kb(Ot(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ot(t,".priority"),r)),n}}/**
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
 */function Gb(t,e){return Zb(e,t)}function eV(t,e,n,r,i){K(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Pa(t.visibleWrites,e,n)),t.lastWriteId=r}function tV(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function nV(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&rV(a,r.path)?i=!1:Yn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return iV(t),!0;if(r.snap)t.visibleWrites=zv(t.visibleWrites,r.path);else{const a=r.children;jn(a,c=>{t.visibleWrites=zv(t.visibleWrites,Ot(r.path,c))})}return!0}else return!1}function rV(t,e){if(t.snap)return Yn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Yn(Ot(t.path,n),e))return!0;return!1}function iV(t){t.visibleWrites=Qb(t.allWrites,sV,Ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sV(t){return t.visible}function Qb(t,e,n){let r=tr.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Yn(n,o)?(a=Un(n,o),r=Pa(r,a,s.snap)):Yn(o,n)&&(a=Un(o,n),r=Pa(r,Ge(),s.snap.getChild(a)));else if(s.children){if(Yn(n,o))a=Un(n,o),r=Wv(r,a,s.children);else if(Yn(o,n))if(a=Un(o,n),Te(a))r=Wv(r,Ge(),s.children);else{const c=lo(s.children,Ce(a));if(c){const l=c.getChild(et(a));r=Pa(r,Ge(),l)}}}else throw Do("WriteRecord should have .snap or .children")}}return r}function Yb(t,e,n,r,i){if(!r&&!i){const s=Rs(t.visibleWrites,e);if(s!=null)return s;{const o=Ti(t.visibleWrites,e);if(tp(o))return n;if(n==null&&!ep(o,Ge()))return null;{const a=n||je.EMPTY_NODE;return fo(o,a)}}}else{const s=Ti(t.visibleWrites,e);if(!i&&tp(s))return n;if(!i&&n==null&&!ep(s,Ge()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(Yn(l.path,e)||Yn(e,l.path))},a=Qb(t.allWrites,o,e),c=n||je.EMPTY_NODE;return fo(a,c)}}}function oV(t,e,n){let r=je.EMPTY_NODE;const i=Rs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(nn,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ti(t.visibleWrites,e);return n.forEachChild(nn,(o,a)=>{const c=fo(Ti(s,new rt(o)),a);r=r.updateImmediateChild(o,c)}),qv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ti(t.visibleWrites,e);return qv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function aV(t,e,n,r,i){K(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ot(e,n);if(ep(t.visibleWrites,s))return null;{const o=Ti(t.visibleWrites,s);return tp(o)?i.getChild(n):fo(o,i.getChild(n))}}function cV(t,e,n,r){const i=Ot(e,n),s=Rs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ti(t.visibleWrites,i);return fo(o,r.getNode().getImmediateChild(n))}else return null}function lV(t,e){return Rs(t.visibleWrites,e)}function uV(t,e,n,r,i,s,o){let a;const c=Ti(t.visibleWrites,e),l=Rs(c,Ge());if(l!=null)a=l;else if(n!=null)a=fo(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=p.getNext();for(;m&&u.length<i;)h(m,r)!==0&&u.push(m),m=p.getNext();return u}else return[]}function hV(){return{visibleWrites:tr.empty(),allWrites:[],lastWriteId:-1}}function np(t,e,n,r){return Yb(t.writeTree,t.treePath,e,n,r)}function Jb(t,e){return oV(t.writeTree,t.treePath,e)}function Kv(t,e,n,r){return aV(t.writeTree,t.treePath,e,n,r)}function fu(t,e){return lV(t.writeTree,Ot(t.treePath,e))}function dV(t,e,n,r,i,s){return uV(t.writeTree,t.treePath,e,n,r,i,s)}function Gm(t,e,n){return cV(t.writeTree,t.treePath,e,n)}function Xb(t,e){return Zb(Ot(t.treePath,e),t.writeTree)}function Zb(t,e){return{treePath:t,writeTree:e}}/**
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
 */class fV{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Uv(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,j$(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,B$(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Uv(r,e.snapshotNode,i.oldSnap));else throw Do("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class pV{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const eI=new pV;class Qm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Km(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gs(this.viewCache_),s=dV(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function mV(t,e){K(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gV(t,e,n,r,i){const s=new fV;let o,a;if(n.type===pr.OVERWRITE){const l=n;l.source.fromUser?o=rp(t,e,l.path,l.snap,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Te(l.path),o=pu(t,e,l.path,l.snap,r,i,a,s))}else if(n.type===pr.MERGE){const l=n;l.source.fromUser?o=yV(t,e,l.path,l.children,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ip(t,e,l.path,l.children,r,i,a,s))}else if(n.type===pr.ACK_USER_WRITE){const l=n;l.revert?o=EV(t,e,l.path,r,i,s):o=vV(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===pr.LISTEN_COMPLETE)o=wV(t,e,n.path,r,s);else throw Do("Unknown operation type: "+n.type);const c=s.getChanges();return _V(e,o,c),{viewCache:o,changes:c}}function _V(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Zf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(U$(Zf(e)))}}function tI(t,e,n,r,i,s){const o=e.eventCache;if(fu(r,n)!=null)return e;{let a,c;if(Te(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=gs(e),u=l instanceof je?l:je.EMPTY_NODE,h=Jb(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const l=np(r,gs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=Ce(n);if(l===".priority"){K(Ri(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Kv(r,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=et(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const p=Kv(r,n,o.getNode(),c);p!=null?h=o.getNode().getImmediateChild(l).updateChild(u,p):h=o.getNode().getImmediateChild(l)}else h=Gm(r,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,s):a=o.getNode()}}return Sa(e,a,o.isFullyInitialized()||Te(n),t.filter.filtersNodes())}}function pu(t,e,n,r,i,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(Te(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),m,null)}else{const m=Ce(n);if(!c.isCompleteForPath(n)&&Ri(n)>1)return e;const y=et(n),I=c.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?l=u.updatePriority(c.getNode(),I):l=u.updateChild(c.getNode(),m,I,y,eI,null)}const h=qb(e,l,c.isFullyInitialized()||Te(n),u.filtersNodes()),p=new Qm(i,h,s);return tI(t,h,n,i,p,a)}function rp(t,e,n,r,i,s,o){const a=e.eventCache;let c,l;const u=new Qm(i,e,s);if(Te(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Sa(e,l,!0,t.filter.filtersNodes());else{const h=Ce(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),c=Sa(e,l,a.isFullyInitialized(),a.isFiltered());else{const p=et(n),m=a.getNode().getImmediateChild(h);let y;if(Te(p))y=r;else{const v=u.getCompleteChild(h);v!=null?Nb(p)===".priority"&&v.getChild(xb(p)).isEmpty()?y=v:y=v.updateChild(p,r):y=je.EMPTY_NODE}if(m.equals(y))c=e;else{const v=t.filter.updateChild(a.getNode(),h,y,p,u,o);c=Sa(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Gv(t,e){return t.eventCache.isCompleteForChild(e)}function yV(t,e,n,r,i,s,o){let a=e;return r.foreach((c,l)=>{const u=Ot(n,c);Gv(e,Ce(u))&&(a=rp(t,a,u,l,i,s,o))}),r.foreach((c,l)=>{const u=Ot(n,c);Gv(e,Ce(u))||(a=rp(t,a,u,l,i,s,o))}),a}function Qv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ip(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;Te(n)?l=r:l=new Je(null).setTree(n,r);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,p)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),y=Qv(t,m,p);c=pu(t,c,new rt(h),y,i,s,o,a)}}),l.children.inorderTraversal((h,p)=>{const m=!e.serverCache.isCompleteForChild(h)&&p.value===null;if(!u.hasChild(h)&&!m){const y=e.serverCache.getNode().getImmediateChild(h),v=Qv(t,y,p);c=pu(t,c,new rt(h),v,i,s,o,a)}}),c}function vV(t,e,n,r,i,s,o){if(fu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(Te(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return pu(t,e,n,c.getNode().getChild(n),i,s,a,o);if(Te(n)){let l=new Je(null);return c.getNode().forEachChild(Xs,(u,h)=>{l=l.set(new rt(u),h)}),ip(t,e,n,l,i,s,a,o)}else return e}else{let l=new Je(null);return r.foreach((u,h)=>{const p=Ot(n,u);c.isCompleteForPath(p)&&(l=l.set(u,c.getNode().getChild(p)))}),ip(t,e,n,l,i,s,a,o)}}function wV(t,e,n,r,i){const s=e.serverCache,o=qb(e,s.getNode(),s.isFullyInitialized()||Te(n),s.isFiltered());return tI(t,o,n,r,eI,i)}function EV(t,e,n,r,i,s){let o;if(fu(r,n)!=null)return e;{const a=new Qm(r,e,i),c=e.eventCache.getNode();let l;if(Te(n)||Ce(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=np(r,gs(e));else{const h=e.serverCache.getNode();K(h instanceof je,"serverChildren would be complete if leaf node"),u=Jb(r,h)}u=u,l=t.filter.updateFullNode(c,u,s)}else{const u=Ce(n);let h=Gm(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,et(n),a,s):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,je.EMPTY_NODE,et(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=np(r,gs(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||fu(r,Ge())!=null,Sa(e,l,o,t.filter.filtersNodes())}}function TV(t,e){const n=gs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Te(e)&&!n.getImmediateChild(Ce(e)).isEmpty())?n.getChild(e):null}function Yv(t,e,n,r){e.type===pr.MERGE&&e.source.queryId!==null&&(K(gs(t.viewCache_),"We should always have a full cache before handling merges"),K(Zf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=gV(t.processor_,i,e,n,r);return mV(t.processor_,s.viewCache),K(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,bV(t,s.changes,s.viewCache.eventCache.getNode(),null)}function bV(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Y$(t.eventGenerator_,e,n,i)}/**
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
 */let Jv;function IV(t){K(!Jv,"__referenceConstructor has already been defined"),Jv=t}function Ym(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return K(s!=null,"SyncTree gave us an op for an invalid query."),Yv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Yv(o,e,n,r));return s}}function Jm(t,e){let n=null;for(const r of t.views.values())n=n||TV(r,e);return n}/**
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
 */let Xv;function AV(t){K(!Xv,"__referenceConstructor has already been defined"),Xv=t}class Zv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Je(null),this.pendingWriteTree_=hV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function CV(t,e,n,r,i){return eV(t.pendingWriteTree_,e,n,r,i),i?ph(t,new ms(jb(),e,n)):[]}function Hs(t,e,n=!1){const r=tV(t.pendingWriteTree_,e);if(nV(t.pendingWriteTree_,e)){let s=new Je(null);return r.snap!=null?s=s.set(Ge(),!0):jn(r.children,o=>{s=s.set(new rt(o),!0)}),ph(t,new du(r.path,s,n))}else return[]}function fh(t,e,n){return ph(t,new ms(Hb(),e,n))}function RV(t,e,n){const r=Je.fromObject(n);return ph(t,new Xa(Hb(),e,r))}function SV(t,e,n,r){const i=sI(t,r);if(i!=null){const s=oI(i),o=s.path,a=s.queryId,c=Un(o,e),l=new ms(Wb(a),c,n);return aI(t,o,l)}else return[]}function PV(t,e,n,r){const i=sI(t,r);if(i){const s=oI(i),o=s.path,a=s.queryId,c=Un(o,e),l=Je.fromObject(n),u=new Xa(Wb(a),c,l);return aI(t,o,u)}else return[]}function nI(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Un(o,e),l=Jm(a,c);if(l)return l});return Yb(i,e,s,n,!0)}function ph(t,e){return rI(e,t.syncPointTree_,null,Gb(t.pendingWriteTree_,Ge()))}function rI(t,e,n,r){if(Te(t.path))return iI(t,e,n,r);{const i=e.get(Ge());n==null&&i!=null&&(n=Jm(i,Ge()));let s=[];const o=Ce(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=Xb(r,o);s=s.concat(rI(a,c,l,u))}return i&&(s=s.concat(Ym(i,t,r,n))),s}}function iI(t,e,n,r){const i=e.get(Ge());n==null&&i!=null&&(n=Jm(i,Ge()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=Xb(r,o),u=t.operationForChild(o);u&&(s=s.concat(iI(u,a,c,l)))}),i&&(s=s.concat(Ym(i,t,r,n))),s}function sI(t,e){return t.tagToQueryMap.get(e)}function oI(t){const e=t.indexOf("$");return K(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new rt(t.substr(0,e))}}function aI(t,e,n){const r=t.syncPointTree_.get(e);K(r,"Missing sync point for query tag that we're tracking");const i=Gb(t.pendingWriteTree_,e);return Ym(r,n,i,null)}/**
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
 */class Xm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Xm(n)}node(){return this.node_}}class Zm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ot(this.path_,e);return new Zm(this.syncTree_,n)}node(){return nI(this.syncTree_,this.path_)}}const kV=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ew=function(t,e,n){if(!t||typeof t!="object")return t;if(K(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return NV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return OV(t[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},NV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+t)}},OV=function(t,e,n){t.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&K(!1,"Unexpected increment value: "+r);const i=e.node();if(K(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},xV=function(t,e,n,r){return eg(e,new Zm(n,t),r)},DV=function(t,e,n){return eg(t,new Xm(e),n)};function eg(t,e,n){const r=t.getPriority().val(),i=ew(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=ew(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Pt(a,Jt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Pt(i))),o.forEachChild(nn,(a,c)=>{const l=eg(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
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
 */class tg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ng(t,e){let n=e instanceof rt?e:new rt(e),r=t,i=Ce(n);for(;i!==null;){const s=lo(r.node.children,i)||{children:{},childCount:0};r=new tg(i,r,s),n=et(n),i=Ce(n)}return r}function Fo(t){return t.node.value}function cI(t,e){t.node.value=e,sp(t)}function lI(t){return t.node.childCount>0}function MV(t){return Fo(t)===void 0&&!lI(t)}function mh(t,e){jn(t.node.children,(n,r)=>{e(new tg(n,t,r))})}function uI(t,e,n,r){n&&!r&&e(t),mh(t,i=>{uI(i,e,!0,r)}),n&&r&&e(t)}function LV(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Rc(t){return new rt(t.parent===null?t.name:Rc(t.parent)+"/"+t.name)}function sp(t){t.parent!==null&&$V(t.parent,t.name,t)}function $V(t,e,n){const r=MV(n),i=ei(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,sp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,sp(t))}/**
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
 */const VV=/[\[\].#$\/\u0000-\u001F\u007F]/,FV=/[\[\].#$\u0000-\u001F\u007F]/,Vd=10*1024*1024,hI=function(t){return typeof t=="string"&&t.length!==0&&!VV.test(t)},UV=function(t){return typeof t=="string"&&t.length!==0&&!FV.test(t)},BV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),UV(t)},dI=function(t,e,n){const r=n instanceof rt?new w$(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ki(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ki(r)+" with contents = "+e.toString());if(hb(e))throw new Error(t+"contains "+e.toString()+" "+Ki(r));if(typeof e=="string"&&e.length>Vd/3&&oh(e)>Vd)throw new Error(t+"contains a string greater than "+Vd+" utf8 bytes "+Ki(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(jn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!hI(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ki(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);E$(r,o),dI(t,a,r),T$(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ki(r)+" in addition to actual children.")}},jV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!BV(n))throw new Error(Sx(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class HV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function WV(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Db(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ss(t,e,n){WV(t,n),zV(t,r=>Yn(r,e)||Yn(e,r))}function zV(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(qV(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();cs&&Yt("event: "+n.toString()),Ac(r)}}}/**
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
 */const KV="repo_interrupt",GV=25;class QV{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new HV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hu(),this.transactionQueueTree_=new tg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YV(t,e,n){if(t.stats_=jm(t.repoInfo_),t.forceRestClient_||W2())t.server_=new uu(t.repoInfo_,(r,i,s,o)=>{tw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>nw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{jt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Wr(t.repoInfo_,e,(r,i,s,o)=>{tw(t,r,i,s,o)},r=>{nw(t,r)},r=>{XV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Y2(t.repoInfo_,()=>new Q$(t.stats_,t.server_)),t.infoData_=new W$,t.infoSyncTree_=new Zv({startListening:(r,i,s,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=fh(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),rg(t,"connected",!1),t.serverSyncTree_=new Zv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);Ss(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function JV(t){const n=t.infoData_.getNode(new rt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function fI(t){return kV({timestamp:JV(t)})}function tw(t,e,n,r,i){t.dataUpdateCount++;const s=new rt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const c=Xl(n,l=>Jt(l));o=PV(t.serverSyncTree_,s,c,i)}else{const c=Jt(n);o=SV(t.serverSyncTree_,s,c,i)}else if(r){const c=Xl(n,l=>Jt(l));o=RV(t.serverSyncTree_,s,c)}else{const c=Jt(n);o=fh(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=sg(t,s)),Ss(t.eventQueue_,a,o)}function nw(t,e){rg(t,"connected",e),e===!1&&eF(t)}function XV(t,e){jn(e,(n,r)=>{rg(t,n,r)})}function rg(t,e,n){const r=new rt("/.info/"+e),i=Jt(n);t.infoData_.updateSnapshot(r,i);const s=fh(t.infoSyncTree_,r,i);Ss(t.eventQueue_,r,s)}function ZV(t){return t.nextWriteId_++}function eF(t){pI(t,"onDisconnectEvents");const e=fI(t),n=hu();Xf(t.onDisconnect_,Ge(),(i,s)=>{const o=xV(i,s,t.serverSyncTree_,e);Bb(n,i,o)});let r=[];Xf(n,Ge(),(i,s)=>{r=r.concat(fh(t.serverSyncTree_,i,s));const o=iF(t,i);sg(t,o)}),t.onDisconnect_=hu(),Ss(t.eventQueue_,Ge(),r)}function tF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(KV)}function pI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Yt(n,...e)}function mI(t,e,n){return nI(t.serverSyncTree_,e,n)||je.EMPTY_NODE}function ig(t,e=t.transactionQueueTree_){if(e||gh(t,e),Fo(e)){const n=_I(t,e);K(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&nF(t,Rc(e),n)}else lI(e)&&mh(e,n=>{ig(t,n)})}function nF(t,e,n){const r=n.map(l=>l.currentWriteId),i=mI(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];K(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Un(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{pI(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let p=0;p<n.length;p++)n[p].status=2,u=u.concat(Hs(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&h.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();gh(t,ng(t.transactionQueueTree_,e)),ig(t,t.transactionQueueTree_),Ss(t.eventQueue_,e,u);for(let p=0;p<h.length;p++)Ac(h[p])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{kn("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}sg(t,e)}},o)}function sg(t,e){const n=gI(t,e),r=Rc(n),i=_I(t,n);return rF(t,i,r),r}function rF(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Un(n,c.path);let u=!1,h;if(K(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Hs(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=GV)u=!0,h="maxretry",i=i.concat(Hs(t.serverSyncTree_,c.currentWriteId,!0));else{const p=mI(t,c.path,o);c.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){dI("transaction failed: Data returned ",m,c.path);let y=Jt(m);typeof m=="object"&&m!=null&&ei(m,".priority")||(y=y.updatePriority(p.getPriority()));const I=c.currentWriteId,A=fI(t),k=DV(y,p,A);c.currentOutputSnapshotRaw=y,c.currentOutputSnapshotResolved=k,c.currentWriteId=ZV(t),o.splice(o.indexOf(I),1),i=i.concat(CV(t.serverSyncTree_,c.path,k,c.currentWriteId,c.applyLocally)),i=i.concat(Hs(t.serverSyncTree_,I,!0))}else u=!0,h="nodata",i=i.concat(Hs(t.serverSyncTree_,c.currentWriteId,!0))}Ss(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}gh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ac(r[a]);ig(t,t.transactionQueueTree_)}function gI(t,e){let n,r=t.transactionQueueTree_;for(n=Ce(e);n!==null&&Fo(r)===void 0;)r=ng(r,n),e=et(e),n=Ce(e);return r}function _I(t,e){const n=[];return yI(t,e,n),n.sort((r,i)=>r.order-i.order),n}function yI(t,e,n){const r=Fo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);mh(e,i=>{yI(t,i,n)})}function gh(t,e){const n=Fo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,cI(e,n.length>0?n:void 0)}mh(e,r=>{gh(t,r)})}function iF(t,e){const n=Rc(gI(t,e)),r=ng(t.transactionQueueTree_,e);return LV(r,i=>{Fd(t,i)}),Fd(t,r),uI(r,i=>{Fd(t,i)}),n}function Fd(t,e){const n=Fo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(K(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(K(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Hs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?cI(e,void 0):n.length=s+1,Ss(t.eventQueue_,Rc(e),i);for(let o=0;o<r.length;o++)Ac(r[o])}}/**
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
 */function sF(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function oF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):kn(`Invalid query segment '${n}' in query '${t}'`)}return e}const rw=function(t,e){const n=aF(t),r=n.namespace;n.domain==="firebase.com"&&fs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&fs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||L2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new K2(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new rt(n.pathString)}},aF=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=sF(t.substring(u,h)));const p=oF(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const m=e.slice(0,l);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class og{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Te(this._path)?null:Nb(this._path)}get ref(){return new Uo(this._repo,this._path)}get _queryIdentifier(){const e=jv(this._queryParams),n=Um(e);return n==="{}"?"default":n}get _queryObject(){return jv(this._queryParams)}isEqual(e){if(e=Lt(e),!(e instanceof og))return!1;const n=this._repo===e._repo,r=Db(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+v$(this._path)}}class Uo extends og{constructor(e,n){super(e,n,new qm,!1)}get parent(){const e=xb(this._path);return e===null?null:new Uo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}IV(Uo);AV(Uo);/**
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
 */const cF="FIREBASE_DATABASE_EMULATOR_HOST",op={};let lF=!1;function uF(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||fs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Yt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=rw(s,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[cF]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=rw(s,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Qf(Qf.OWNER):new q2(t.name,t.options,e);jV("Invalid Firebase Database URL",o),Te(o.path)||fs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=dF(a,t,u,new z2(t.name,n));return new fF(h,t)}function hF(t,e){const n=op[e];(!n||n[t.key]!==t)&&fs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tF(t),delete n[t.key]}function dF(t,e,n,r){let i=op[e.name];i||(i={},op[e.name]=i);let s=i[t.toURLString()];return s&&fs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new QV(t,lF,n,r),i[t.toURLString()]=s,s}class fF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Uo(this._repo,Ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fs("Cannot call "+e+" on a deleted database.")}}/**
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
 */function pF(t){N2(Di),Tn(new pn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return uF(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Wt(Iv,Av,t),Wt(Iv,Av,"esm2017")}Wr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};pF();var mF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,ag=ag||{},pe=mF||self;function _h(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Sc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gF(t){return Object.prototype.hasOwnProperty.call(t,Ud)&&t[Ud]||(t[Ud]=++_F)}var Ud="closure_uid_"+(1e9*Math.random()>>>0),_F=0;function yF(t,e,n){return t.call.apply(t.bind,arguments)}function vF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function rn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rn=yF:rn=vF,rn.apply(null,arguments)}function hl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Vt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Li(){this.s=this.s,this.o=this.o}var wF=0;Li.prototype.s=!1;Li.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),wF!=0)&&gF(this)};Li.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function cg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function iw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(_h(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function sn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}sn.prototype.h=function(){this.defaultPrevented=!0};var EF=function(){if(!pe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{pe.addEventListener("test",()=>{},e),pe.removeEventListener("test",()=>{},e)}catch{}return t}();function Za(t){return/^[\s\xa0]*$/.test(t)}function yh(){var t=pe.navigator;return t&&(t=t.userAgent)?t:""}function hr(t){return yh().indexOf(t)!=-1}function lg(t){return lg[" "](t),t}lg[" "]=function(){};function TF(t,e){var n=pU;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var bF=hr("Opera"),po=hr("Trident")||hr("MSIE"),wI=hr("Edge"),ap=wI||po,EI=hr("Gecko")&&!(yh().toLowerCase().indexOf("webkit")!=-1&&!hr("Edge"))&&!(hr("Trident")||hr("MSIE"))&&!hr("Edge"),IF=yh().toLowerCase().indexOf("webkit")!=-1&&!hr("Edge");function TI(){var t=pe.document;return t?t.documentMode:void 0}var cp;e:{var Bd="",jd=function(){var t=yh();if(EI)return/rv:([^\);]+)(\)|;)/.exec(t);if(wI)return/Edge\/([\d\.]+)/.exec(t);if(po)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(IF)return/WebKit\/(\S+)/.exec(t);if(bF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(jd&&(Bd=jd?jd[1]:""),po){var Hd=TI();if(Hd!=null&&Hd>parseFloat(Bd)){cp=String(Hd);break e}}cp=Bd}var lp;if(pe.document&&po){var sw=TI();lp=sw||parseInt(cp,10)||void 0}else lp=void 0;var AF=lp;function ec(t,e){if(sn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(EI){e:{try{lg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ec.$.h.call(this)}}Vt(ec,sn);var CF={2:"touch",3:"pen",4:"mouse"};ec.prototype.h=function(){ec.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pc="closure_listenable_"+(1e6*Math.random()|0),RF=0;function SF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++RF,this.fa=this.ia=!1}function vh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ug(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function PF(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function bI(t){const e={};for(const n in t)e[n]=t[n];return e}const ow="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function II(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<ow.length;s++)n=ow[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wh(t){this.src=t,this.g={},this.h=0}wh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=hp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new SF(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function up(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=vI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(vh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var hg="closure_lm_"+(1e6*Math.random()|0),Wd={};function AI(t,e,n,r,i){if(r&&r.once)return RI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)AI(t,e[s],n,r,i);return null}return n=pg(n),t&&t[Pc]?t.O(e,n,Sc(r)?!!r.capture:!!r,i):CI(t,e,n,!1,r,i)}function CI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Sc(i)?!!i.capture:!!i,a=fg(t);if(a||(t[hg]=a=new wh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=kF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)EF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(PI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kF(){function t(n){return e.call(t.src,t.listener,n)}const e=NF;return t}function RI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)RI(t,e[s],n,r,i);return null}return n=pg(n),t&&t[Pc]?t.P(e,n,Sc(r)?!!r.capture:!!r,i):CI(t,e,n,!0,r,i)}function SI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)SI(t,e[s],n,r,i);else r=Sc(r)?!!r.capture:!!r,n=pg(n),t&&t[Pc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=hp(s,n,r,i),-1<n&&(vh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=fg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hp(e,n,r,i)),(n=-1<t?e[t]:null)&&dg(n))}function dg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Pc])up(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(PI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=fg(e))?(up(n,t),n.h==0&&(n.src=null,e[hg]=null)):vh(t)}}}function PI(t){return t in Wd?Wd[t]:Wd[t]="on"+t}function NF(t,e){if(t.fa)t=!0;else{e=new ec(e,this);var n=t.listener,r=t.la||t.src;t.ia&&dg(t),t=n.call(r,e)}return t}function fg(t){return t=t[hg],t instanceof wh?t:null}var zd="__closure_events_fn_"+(1e9*Math.random()>>>0);function pg(t){return typeof t=="function"?t:(t[zd]||(t[zd]=function(e){return t.handleEvent(e)}),t[zd])}function $t(){Li.call(this),this.i=new wh(this),this.S=this,this.J=null}Vt($t,Li);$t.prototype[Pc]=!0;$t.prototype.removeEventListener=function(t,e,n,r){SI(this,t,e,n,r)};function zt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new sn(e,t);else if(e instanceof sn)e.target=e.target||t;else{var i=e;e=new sn(r,t),II(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=dl(o,r,!0,e)&&i}if(o=e.g=t,i=dl(o,r,!0,e)&&i,i=dl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=dl(o,r,!1,e)&&i}$t.prototype.N=function(){if($t.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)vh(n[r]);delete t.g[e],t.h--}}this.J=null};$t.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};$t.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function dl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&up(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var mg=pe.JSON.stringify;class OF{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function xF(){var t=gg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class DF{constructor(){this.h=this.g=null}add(e,n){const r=kI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var kI=new OF(()=>new MF,t=>t.reset());class MF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LF(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function $F(t){pe.setTimeout(()=>{throw t},0)}let tc,nc=!1,gg=new DF,NI=()=>{const t=pe.Promise.resolve(void 0);tc=()=>{t.then(VF)}};var VF=()=>{for(var t;t=xF();){try{t.h.call(t.g)}catch(n){$F(n)}var e=kI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}nc=!1};function Eh(t,e){$t.call(this),this.h=t||1,this.g=e||pe,this.j=rn(this.qb,this),this.l=Date.now()}Vt(Eh,$t);G=Eh.prototype;G.ga=!1;G.T=null;G.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),zt(this,"tick"),this.ga&&(_g(this),this.start()))}};G.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _g(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}G.N=function(){Eh.$.N.call(this),_g(this),delete this.g};function yg(t,e,n){if(typeof t=="function")n&&(t=rn(t,n));else if(t&&typeof t.handleEvent=="function")t=rn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:pe.setTimeout(t,e||0)}function OI(t){t.g=yg(()=>{t.g=null,t.i&&(t.i=!1,OI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class FF extends Li{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:OI(this)}N(){super.N(),this.g&&(pe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rc(t){Li.call(this),this.h=t,this.g={}}Vt(rc,Li);var aw=[];function xI(t,e,n,r){Array.isArray(n)||(n&&(aw[0]=n.toString()),n=aw);for(var i=0;i<n.length;i++){var s=AI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function DI(t){ug(t.g,function(e,n){this.g.hasOwnProperty(n)&&dg(e)},t),t.g={}}rc.prototype.N=function(){rc.$.N.call(this),DI(this)};rc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Th(){this.g=!0}Th.prototype.Ea=function(){this.g=!1};function UF(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function BF(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ws(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+HF(t,n)+(r?" "+r:"")})}function jF(t,e){t.info(function(){return"TIMEOUT: "+e})}Th.prototype.info=function(){};function HF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return mg(n)}catch{return e}}var Ps={},cw=null;function bh(){return cw=cw||new $t}Ps.Ta="serverreachability";function MI(t){sn.call(this,Ps.Ta,t)}Vt(MI,sn);function ic(t){const e=bh();zt(e,new MI(e))}Ps.STAT_EVENT="statevent";function LI(t,e){sn.call(this,Ps.STAT_EVENT,t),this.stat=e}Vt(LI,sn);function fn(t){const e=bh();zt(e,new LI(e,t))}Ps.Ua="timingevent";function $I(t,e){sn.call(this,Ps.Ua,t),this.size=e}Vt($I,sn);function kc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return pe.setTimeout(function(){t()},e)}var Ih={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},VI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function vg(){}vg.prototype.h=null;function lw(t){return t.h||(t.h=t.i())}function FI(){}var Nc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function wg(){sn.call(this,"d")}Vt(wg,sn);function Eg(){sn.call(this,"c")}Vt(Eg,sn);var dp;function Ah(){}Vt(Ah,vg);Ah.prototype.g=function(){return new XMLHttpRequest};Ah.prototype.i=function(){return{}};dp=new Ah;function Oc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new rc(this),this.P=WF,t=ap?125:void 0,this.V=new Eh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new UI}function UI(){this.i=null,this.g="",this.h=!1}var WF=45e3,fp={},mu={};G=Oc.prototype;G.setTimeout=function(t){this.P=t};function pp(t,e,n){t.L=1,t.v=Rh(Qr(e)),t.s=n,t.S=!0,BI(t,null)}function BI(t,e){t.G=Date.now(),xc(t),t.A=Qr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),QI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new UI,t.g=gA(t.l,n?e:null,!t.s),0<t.O&&(t.M=new FF(rn(t.Pa,t,t.g),t.O)),xI(t.U,t.g,"readystatechange",t.nb),e=t.I?bI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ic(),UF(t.j,t.u,t.A,t.m,t.W,t.s)}G.nb=function(t){t=t.target;const e=this.M;e&&mr(t)==3?e.l():this.Pa(t)};G.Pa=function(t){try{if(t==this.g)e:{const u=mr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ap||this.g&&(this.h.h||this.g.ja()||fw(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ic(3):ic(2)),Ch(this);var n=this.g.da();this.ca=n;t:if(jI(this)){var r=fw(this.g);t="";var i=r.length,s=mr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zi(this),ka(this);var o="";break t}this.h.i=new pe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,BF(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Za(a)){var l=a;break t}}l=null}if(n=l)Ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mp(this,n);else{this.i=!1,this.o=3,fn(12),Zi(this),ka(this);break e}}this.S?(HI(this,u,o),ap&&this.i&&u==3&&(xI(this.U,this.V,"tick",this.mb),this.V.start())):(Ws(this.j,this.m,o,null),mp(this,o)),u==4&&Zi(this),this.i&&!this.J&&(u==4?dA(this.l,this):(this.i=!1,xc(this)))}else hU(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,fn(12)):(this.o=0,fn(13)),Zi(this),ka(this)}}}catch{}finally{}};function jI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function HI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=zF(t,n),i==mu){e==4&&(t.o=4,fn(14),r=!1),Ws(t.j,t.m,null,"[Incomplete Response]");break}else if(i==fp){t.o=4,fn(15),Ws(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ws(t.j,t.m,i,null),mp(t,i);jI(t)&&i!=mu&&i!=fp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,fn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Rg(e),e.M=!0,fn(11))):(Ws(t.j,t.m,n,"[Invalid Chunked Response]"),Zi(t),ka(t))}G.mb=function(){if(this.g){var t=mr(this.g),e=this.g.ja();this.C<e.length&&(Ch(this),HI(this,t,e),this.i&&t!=4&&xc(this))}};function zF(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?mu:(n=Number(e.substring(n,r)),isNaN(n)?fp:(r+=1,r+n>e.length?mu:(e=e.slice(r,r+n),t.C=r+n,e)))}G.cancel=function(){this.J=!0,Zi(this)};function xc(t){t.Y=Date.now()+t.P,WI(t,t.P)}function WI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=kc(rn(t.lb,t),e)}function Ch(t){t.B&&(pe.clearTimeout(t.B),t.B=null)}G.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(jF(this.j,this.A),this.L!=2&&(ic(),fn(17)),Zi(this),this.o=2,ka(this)):WI(this,this.Y-t)};function ka(t){t.l.H==0||t.J||dA(t.l,t)}function Zi(t){Ch(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,_g(t.V),DI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function mp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||gp(n.i,t))){if(!t.K&&gp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)yu(n),Nh(n);else break e;Cg(n),fn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=kc(rn(n.ib,n),6e3));if(1>=XI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else es(n,11)}else if((t.K||n.g==t)&&yu(n),!Za(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Tg(s,s.h),s.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,tt(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=mA(r,r.J?r.pa:null,r.Y),o.K){ZI(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Ch(a),xc(a)),r.g=o}else uA(r);0<n.j.length&&Oh(n)}else l[0]!="stop"&&l[0]!="close"||es(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?es(n,7):Ag(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ic(4)}catch{}}function qF(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_h(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function KF(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_h(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function zI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_h(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=KF(t),r=qF(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var qI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ls(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ls){this.h=t.h,gu(this,t.j),this.s=t.s,this.g=t.g,_u(this,t.m),this.l=t.l;var e=t.i,n=new sc;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),uw(this,n),this.o=t.o}else t&&(e=String(t).match(qI))?(this.h=!1,gu(this,e[1]||"",!0),this.s=ma(e[2]||""),this.g=ma(e[3]||"",!0),_u(this,e[4]),this.l=ma(e[5]||"",!0),uw(this,e[6]||"",!0),this.o=ma(e[7]||"")):(this.h=!1,this.i=new sc(null,this.h))}ls.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ga(e,hw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ga(e,hw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ga(n,n.charAt(0)=="/"?JF:YF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ga(n,ZF)),t.join("")};function Qr(t){return new ls(t)}function gu(t,e,n){t.j=n?ma(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _u(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function uw(t,e,n){e instanceof sc?(t.i=e,eU(t.i,t.h)):(n||(e=ga(e,XF)),t.i=new sc(e,t.h))}function tt(t,e,n){t.i.set(e,n)}function Rh(t){return tt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ma(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ga(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var hw=/[#\/\?@]/g,YF=/[#\?:]/g,JF=/[#\?]/g,XF=/[#\?@]/g,ZF=/#/g;function sc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $i(t){t.g||(t.g=new Map,t.h=0,t.i&&GF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=sc.prototype;G.add=function(t,e){$i(this),this.i=null,t=Bo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function KI(t,e){$i(t),e=Bo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function GI(t,e){return $i(t),e=Bo(t,e),t.g.has(e)}G.forEach=function(t,e){$i(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};G.ta=function(){$i(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};G.Z=function(t){$i(this);let e=[];if(typeof t=="string")GI(this,t)&&(e=e.concat(this.g.get(Bo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return $i(this),this.i=null,t=Bo(this,t),GI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function QI(t,e,n){KI(t,e),0<n.length&&(t.i=null,t.g.set(Bo(t,e),cg(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Bo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eU(t,e){e&&!t.j&&($i(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(KI(this,r),QI(this,i,n))},t)),t.j=e}var tU=class{constructor(t,e){this.g=t,this.map=e}};function YI(t){this.l=t||nU,pe.PerformanceNavigationTiming?(t=pe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(pe.g&&pe.g.Ka&&pe.g.Ka()&&pe.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nU=10;function JI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function XI(t){return t.h?1:t.g?t.g.size:0}function gp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Tg(t,e){t.g?t.g.add(e):t.h=e}function ZI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}YI.prototype.cancel=function(){if(this.i=eA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function eA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return cg(t.i)}var rU=class{stringify(t){return pe.JSON.stringify(t,void 0)}parse(t){return pe.JSON.parse(t,void 0)}};function iU(){this.g=new rU}function sU(t,e,n){const r=n||"";try{zI(t,function(i,s){let o=i;Sc(i)&&(o=mg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function oU(t,e){const n=new Th;if(pe.Image){const r=new Image;r.onload=hl(fl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=hl(fl,n,r,"TestLoadImage: error",!1,e),r.onabort=hl(fl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=hl(fl,n,r,"TestLoadImage: timeout",!1,e),pe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function fl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Sh(t){this.l=t.fc||null,this.j=t.ob||!1}Vt(Sh,vg);Sh.prototype.g=function(){return new Ph(this.l,this.j)};Sh.prototype.i=function(t){return function(){return t}}({});function Ph(t,e){$t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=bg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Vt(Ph,$t);var bg=0;G=Ph.prototype;G.open=function(t,e){if(this.readyState!=bg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,oc(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||pe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dc(this)),this.readyState=bg};G.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,oc(this)),this.g&&(this.readyState=3,oc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof pe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function tA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}G.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dc(this):oc(this),this.readyState==3&&tA(this)}};G.Za=function(t){this.g&&(this.response=this.responseText=t,Dc(this))};G.Ya=function(t){this.g&&(this.response=t,Dc(this))};G.ka=function(){this.g&&Dc(this)};function Dc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,oc(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function oc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ph.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var aU=pe.JSON.parse;function ut(t){$t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=nA,this.L=this.M=!1}Vt(ut,$t);var nA="",cU=/^https?$/i,lU=["POST","PUT"];G=ut.prototype;G.Oa=function(t){this.M=t};G.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dp.g(),this.C=this.u?lw(this.u):lw(dp),this.g.onreadystatechange=rn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){dw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=pe.FormData&&t instanceof pe.FormData,!(0<=vI(lU,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{sA(this),0<this.B&&((this.L=uU(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rn(this.ua,this)):this.A=yg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){dw(this,s)}};function uU(t){return po&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.ua=function(){typeof ag<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,zt(this,"timeout"),this.abort(8))};function dw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,rA(t),kh(t)}function rA(t){t.F||(t.F=!0,zt(t,"complete"),zt(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,zt(this,"complete"),zt(this,"abort"),kh(this))};G.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kh(this,!0)),ut.$.N.call(this)};G.La=function(){this.s||(this.G||this.v||this.l?iA(this):this.kb())};G.kb=function(){iA(this)};function iA(t){if(t.h&&typeof ag<"u"&&(!t.C[1]||mr(t)!=4||t.da()!=2)){if(t.v&&mr(t)==4)yg(t.La,0,t);else if(zt(t,"readystatechange"),mr(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(qI)[1]||null;!i&&pe.self&&pe.self.location&&(i=pe.self.location.protocol.slice(0,-1)),r=!cU.test(i?i.toLowerCase():"")}n=r}if(n)zt(t,"complete"),zt(t,"success");else{t.m=6;try{var s=2<mr(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",rA(t)}}finally{kh(t)}}}}function kh(t,e){if(t.g){sA(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||zt(t,"ready");try{n.onreadystatechange=r}catch{}}}function sA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(pe.clearTimeout(t.A),t.A=null)}G.isActive=function(){return!!this.g};function mr(t){return t.g?t.g.readyState:0}G.da=function(){try{return 2<mr(this)?this.g.status:-1}catch{return-1}};G.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),aU(e)}};function fw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case nA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function hU(t){const e={};t=(t.g&&2<=mr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Za(t[r]))continue;var n=LF(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}PF(e,function(r){return r.join(", ")})}G.Ia=function(){return this.m};G.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function oA(t){let e="";return ug(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ig(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=oA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):tt(t,e,n))}function oa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function aA(t){this.Ga=0,this.j=[],this.l=new Th,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=oa("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=oa("baseRetryDelayMs",5e3,t),this.hb=oa("retryDelaySeedMs",1e4,t),this.eb=oa("forwardChannelMaxRetries",2,t),this.xa=oa("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new YI(t&&t.concurrentRequestLimit),this.Ja=new iU,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}G=aA.prototype;G.ra=8;G.H=1;function Ag(t){if(cA(t),t.H==3){var e=t.W++,n=Qr(t.I);if(tt(n,"SID",t.K),tt(n,"RID",e),tt(n,"TYPE","terminate"),Mc(t,n),e=new Oc(t,t.l,e),e.L=2,e.v=Rh(Qr(n)),n=!1,pe.navigator&&pe.navigator.sendBeacon)try{n=pe.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&pe.Image&&(new Image().src=e.v,n=!0),n||(e.g=gA(e.l,null),e.g.ha(e.v)),e.G=Date.now(),xc(e)}pA(t)}function Nh(t){t.g&&(Rg(t),t.g.cancel(),t.g=null)}function cA(t){Nh(t),t.u&&(pe.clearTimeout(t.u),t.u=null),yu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&pe.clearTimeout(t.m),t.m=null)}function Oh(t){if(!JI(t.i)&&!t.m){t.m=!0;var e=t.Na;tc||NI(),nc||(tc(),nc=!0),gg.add(e,t),t.C=0}}function dU(t,e){return XI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=kc(rn(t.Na,t,e),fA(t,t.C)),t.C++,!0)}G.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Oc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=bI(s),II(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lA(this,i,e),n=Qr(this.I),tt(n,"RID",t),tt(n,"CVER",22),this.F&&tt(n,"X-HTTP-Session-Id",this.F),Mc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(oA(s)))+"&"+e:this.o&&Ig(n,this.o,s)),Tg(this.i,i),this.bb&&tt(n,"TYPE","init"),this.P?(tt(n,"$req",e),tt(n,"SID","null"),i.aa=!0,pp(i,n,null)):pp(i,n,e),this.H=2}}else this.H==3&&(t?pw(this,t):this.j.length==0||JI(this.i)||pw(this))};function pw(t,e){var n;e?n=e.m:n=t.W++;const r=Qr(t.I);tt(r,"SID",t.K),tt(r,"RID",n),tt(r,"AID",t.V),Mc(t,r),t.o&&t.s&&Ig(r,t.o,t.s),n=new Oc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=lA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Tg(t.i,n),pp(n,r,e)}function Mc(t,e){t.na&&ug(t.na,function(n,r){tt(e,r,n)}),t.h&&zI({},function(n,r){tt(e,r,n)})}function lA(t,e,n){n=Math.min(t.j.length,n);var r=t.h?rn(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{sU(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function uA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;tc||NI(),nc||(tc(),nc=!0),gg.add(e,t),t.A=0}}function Cg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=kc(rn(t.Ma,t),fA(t,t.A)),t.A++,!0)}G.Ma=function(){if(this.u=null,hA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=kc(rn(this.jb,this),t)}};G.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,fn(10),Nh(this),hA(this))};function Rg(t){t.B!=null&&(pe.clearTimeout(t.B),t.B=null)}function hA(t){t.g=new Oc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qr(t.wa);tt(e,"RID","rpc"),tt(e,"SID",t.K),tt(e,"AID",t.V),tt(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&tt(e,"TO",t.qa),tt(e,"TYPE","xmlhttp"),Mc(t,e),t.o&&t.s&&Ig(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Rh(Qr(e)),n.s=null,n.S=!0,BI(n,t)}G.ib=function(){this.v!=null&&(this.v=null,Nh(this),Cg(this),fn(19))};function yu(t){t.v!=null&&(pe.clearTimeout(t.v),t.v=null)}function dA(t,e){var n=null;if(t.g==e){yu(t),Rg(t),t.g=null;var r=2}else if(gp(t.i,e))n=e.F,ZI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=bh(),zt(r,new $I(r,n)),Oh(t)}else uA(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&dU(t,e)||r==2&&Cg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:es(t,5);break;case 4:es(t,10);break;case 3:es(t,6);break;default:es(t,2)}}}function fA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function es(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=rn(t.pb,t);n||(n=new ls("//www.google.com/images/cleardot.gif"),pe.location&&pe.location.protocol=="http"||gu(n,"https"),Rh(n)),oU(n.toString(),r)}else fn(2);t.H=0,t.h&&t.h.za(e),pA(t),cA(t)}G.pb=function(t){t?(this.l.info("Successfully pinged google.com"),fn(2)):(this.l.info("Failed to ping google.com"),fn(1))};function pA(t){if(t.H=0,t.ma=[],t.h){const e=eA(t.i);(e.length!=0||t.j.length!=0)&&(iw(t.ma,e),iw(t.ma,t.j),t.i.i.length=0,cg(t.j),t.j.length=0),t.h.ya()}}function mA(t,e,n){var r=n instanceof ls?Qr(n):new ls(n);if(r.g!="")e&&(r.g=e+"."+r.g),_u(r,r.m);else{var i=pe.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ls(null);r&&gu(s,r),e&&(s.g=e),i&&_u(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&tt(r,n,e),tt(r,"VER",t.ra),Mc(t,r),r}function gA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ut(new Sh({ob:!0})):new ut(t.va),e.Oa(t.J),e}G.isActive=function(){return!!this.h&&this.h.isActive(this)};function _A(){}G=_A.prototype;G.Ba=function(){};G.Aa=function(){};G.za=function(){};G.ya=function(){};G.isActive=function(){return!0};G.Va=function(){};function vu(){if(po&&!(10<=Number(AF)))throw Error("Environmental error: no available transport.")}vu.prototype.g=function(t,e){return new xn(t,e)};function xn(t,e){$t.call(this),this.g=new aA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Za(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Za(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new jo(this)}Vt(xn,$t);xn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;fn(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=mA(t,null,t.Y),Oh(t)};xn.prototype.close=function(){Ag(this.g)};xn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=mg(t),t=n);e.j.push(new tU(e.fb++,t)),e.H==3&&Oh(e)};xn.prototype.N=function(){this.g.h=null,delete this.j,Ag(this.g),delete this.g,xn.$.N.call(this)};function yA(t){wg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Vt(yA,wg);function vA(){Eg.call(this),this.status=1}Vt(vA,Eg);function jo(t){this.g=t}Vt(jo,_A);jo.prototype.Ba=function(){zt(this.g,"a")};jo.prototype.Aa=function(t){zt(this.g,new yA(t))};jo.prototype.za=function(t){zt(this.g,new vA)};jo.prototype.ya=function(){zt(this.g,"b")};function fU(){this.blockSize=-1}function ir(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Vt(ir,fU);ir.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function qd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}ir.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)qd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){qd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){qd(this,r),i=0;break}}this.h=i,this.i+=e};ir.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ze(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var pU={};function Sg(t){return-128<=t&&128>t?TF(t,function(e){return new ze([e|0],0>e?-1:0)}):new ze([t|0],0>t?-1:0)}function gr(t){if(isNaN(t)||!isFinite(t))return Zs;if(0>t)return Bt(gr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=_p;return new ze(e,0)}function wA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Bt(wA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gr(Math.pow(e,8)),r=Zs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=gr(Math.pow(e,s)),r=r.R(s).add(gr(o))):(r=r.R(n),r=r.add(gr(o)))}return r}var _p=4294967296,Zs=Sg(0),yp=Sg(1),mw=Sg(16777216);G=ze.prototype;G.ea=function(){if(Vn(this))return-Bt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:_p+r)*e,e*=_p}return t};G.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(jr(this))return"0";if(Vn(this))return"-"+Bt(this).toString(t);for(var e=gr(Math.pow(t,6)),n=this,r="";;){var i=Eu(n,e).g;n=wu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,jr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};G.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function jr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Vn(t){return t.h==-1}G.X=function(t){return t=wu(this,t),Vn(t)?-1:jr(t)?0:1};function Bt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ze(n,~t.h).add(yp)}G.abs=function(){return Vn(this)?Bt(this):this};G.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ze(n,n[n.length-1]&-2147483648?-1:0)};function wu(t,e){return t.add(Bt(e))}G.R=function(t){if(jr(this)||jr(t))return Zs;if(Vn(this))return Vn(t)?Bt(this).R(Bt(t)):Bt(Bt(this).R(t));if(Vn(t))return Bt(this.R(Bt(t)));if(0>this.X(mw)&&0>t.X(mw))return gr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,pl(n,2*r+2*i),n[2*r+2*i+1]+=s*c,pl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,pl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,pl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ze(n,0)};function pl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function aa(t,e){this.g=t,this.h=e}function Eu(t,e){if(jr(e))throw Error("division by zero");if(jr(t))return new aa(Zs,Zs);if(Vn(t))return e=Eu(Bt(t),e),new aa(Bt(e.g),Bt(e.h));if(Vn(e))return e=Eu(t,Bt(e)),new aa(Bt(e.g),e.h);if(30<t.g.length){if(Vn(t)||Vn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=yp,r=e;0>=r.X(t);)n=gw(n),r=gw(r);var i=Ls(n,1),s=Ls(r,1);for(r=Ls(r,2),n=Ls(n,2);!jr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ls(r,1),n=Ls(n,1)}return e=wu(t,i.R(e)),new aa(i,e)}for(i=Zs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=gr(n),o=s.R(e);Vn(o)||0<o.X(t);)n-=r,s=gr(n),o=s.R(e);jr(s)&&(s=yp),i=i.add(s),t=wu(t,o)}return new aa(i,t)}G.gb=function(t){return Eu(this,t).h};G.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ze(n,this.h&t.h)};G.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ze(n,this.h|t.h)};G.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ze(n,this.h^t.h)};function gw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ze(n,t.h)}function Ls(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ze(i,t.h)}vu.prototype.createWebChannel=vu.prototype.g;xn.prototype.send=xn.prototype.u;xn.prototype.open=xn.prototype.m;xn.prototype.close=xn.prototype.close;Ih.NO_ERROR=0;Ih.TIMEOUT=8;Ih.HTTP_ERROR=6;VI.COMPLETE="complete";FI.EventType=Nc;Nc.OPEN="a";Nc.CLOSE="b";Nc.ERROR="c";Nc.MESSAGE="d";$t.prototype.listen=$t.prototype.O;ut.prototype.listenOnce=ut.prototype.P;ut.prototype.getLastError=ut.prototype.Sa;ut.prototype.getLastErrorCode=ut.prototype.Ia;ut.prototype.getStatus=ut.prototype.da;ut.prototype.getResponseJson=ut.prototype.Wa;ut.prototype.getResponseText=ut.prototype.ja;ut.prototype.send=ut.prototype.ha;ut.prototype.setWithCredentials=ut.prototype.Oa;ir.prototype.digest=ir.prototype.l;ir.prototype.reset=ir.prototype.reset;ir.prototype.update=ir.prototype.j;ze.prototype.add=ze.prototype.add;ze.prototype.multiply=ze.prototype.R;ze.prototype.modulo=ze.prototype.gb;ze.prototype.compare=ze.prototype.X;ze.prototype.toNumber=ze.prototype.ea;ze.prototype.toString=ze.prototype.toString;ze.prototype.getBits=ze.prototype.D;ze.fromNumber=gr;ze.fromString=wA;var mU=function(){return new vu},gU=function(){return bh()},Kd=Ih,_U=VI,yU=Ps,_w={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ml=FI,vU=ut,wU=ir,eo=ze;const yw="@firebase/firestore";/**
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
 */class Qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qt.UNAUTHENTICATED=new Qt(null),Qt.GOOGLE_CREDENTIALS=new Qt("google-credentials-uid"),Qt.FIRST_PARTY=new Qt("first-party-uid"),Qt.MOCK_USER=new Qt("mock-user");/**
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
 */let Ho="10.3.0";/**
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
 */const _s=new Lo("@firebase/firestore");function vw(){return _s.logLevel}function ee(t,...e){if(_s.logLevel<=xe.DEBUG){const n=e.map(Pg);_s.debug(`Firestore (${Ho}): ${t}`,...n)}}function Yr(t,...e){if(_s.logLevel<=xe.ERROR){const n=e.map(Pg);_s.error(`Firestore (${Ho}): ${t}`,...n)}}function mo(t,...e){if(_s.logLevel<=xe.WARN){const n=e.map(Pg);_s.warn(`Firestore (${Ho}): ${t}`,...n)}}function Pg(t){if(typeof t=="string")return t;try{/**
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
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${Ho}) INTERNAL ASSERTION FAILED: `+t;throw Yr(e),new Error(e)}function nt(t,e){t||fe()}function _e(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class EA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qt.UNAUTHENTICATED))}shutdown(){}}class TU{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bU{constructor(e){this.t=e,this.currentUser=Qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string"),new EA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return nt(e===null||typeof e=="string"),new Qt(e)}}class IU{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AU{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new IU(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CU{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RU{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(nt(typeof n.token=="string"),this.R=n.token,new CU(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function SU(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class TA{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=SU(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Fe(t,e){return t<e?-1:t>e?1:0}function go(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class _t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new se(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new _t(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new me(e)}static min(){return new me(new _t(0,0))}static max(){return new me(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ac{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ac.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ac?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ot extends ac{construct(e,n,r){return new ot(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ot(n)}static emptyPath(){return new ot([])}}const PU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tn extends ac{construct(e,n,r){return new tn(e,n,r)}static isValidIdentifier(e){return PU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tn(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new se(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new se(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new se(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tn(n)}static emptyPath(){return new tn([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(ot.fromString(e))}static fromName(e){return new ae(ot.fromString(e).popFirst(5))}static empty(){return new ae(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ot.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new ot(e.slice()))}}function kU(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=me.fromTimestamp(r===1e9?new _t(n+1,0):new _t(n,r));return new Si(i,ae.empty(),e)}function NU(t){return new Si(t.readTime,t.key,-1)}class Si{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Si(me.min(),ae.empty(),-1)}static max(){return new Si(me.max(),ae.empty(),-1)}}function OU(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const xU="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DU{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Lc(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==xU)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $c(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class kg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}kg.ae=-1;function xh(t){return t==null}function Tu(t){return t===0&&1/t==-1/0}function MU(t){return typeof t=="number"&&Number.isInteger(t)&&!Tu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ww(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class lt{constructor(e,n){this.comparator=e,this.root=n||Ut.EMPTY}insert(e,n){return new lt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ut.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gl(this.root,e,this.comparator,!0)}}class gl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ut{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ut.RED,this.left=i??Ut.EMPTY,this.right=s??Ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ut(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}Ut.EMPTY=null,Ut.RED=!0,Ut.BLACK=!1;Ut.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class on{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ew(this.data.getIterator())}getIteratorFrom(e){return new Ew(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof on)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new on(this.comparator);return n.data=e,n}}class Ew{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jn{constructor(e){this.fields=e,e.sort(tn.comparator)}static empty(){return new Jn([])}unionWith(e){let n=new on(tn.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class IA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class cn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new IA("Invalid base64 string: "+s):s}}(e);return new cn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new cn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}cn.EMPTY_BYTE_STRING=new cn("");const LU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(t){if(nt(!!t),typeof t=="string"){let e=0;const n=LU.exec(t);if(nt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pt(t.seconds),nanos:pt(t.nanos)}}function pt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ys(t){return typeof t=="string"?cn.fromBase64String(t):cn.fromUint8Array(t)}/**
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
 */function Ng(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Og(t){const e=t.mapValue.fields.__previous_value__;return Ng(e)?Og(e):e}function cc(t){const e=Pi(t.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
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
 */class $U{constructor(e,n,r,i,s,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class lc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const _l={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ng(t)?4:VU(t)?9007199254740991:10:fe()}function Tr(t,e){if(t===e)return!0;const n=vs(t);if(n!==vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cc(t).isEqual(cc(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Pi(i.timestampValue),a=Pi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ys(i.bytesValue).isEqual(ys(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return pt(i.geoPointValue.latitude)===pt(s.geoPointValue.latitude)&&pt(i.geoPointValue.longitude)===pt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return pt(i.integerValue)===pt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=pt(i.doubleValue),a=pt(s.doubleValue);return o===a?Tu(o)===Tu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return go(t.arrayValue.values||[],e.arrayValue.values||[],Tr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ww(o)!==ww(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Tr(o[c],a[c])))return!1;return!0}(t,e);default:return fe()}}function uc(t,e){return(t.values||[]).find(n=>Tr(n,e))!==void 0}function _o(t,e){if(t===e)return 0;const n=vs(t),r=vs(e);if(n!==r)return Fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=pt(s.integerValue||s.doubleValue),c=pt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Tw(t.timestampValue,e.timestampValue);case 4:return Tw(cc(t),cc(e));case 5:return Fe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ys(s),c=ys(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=Fe(a[l],c[l]);if(u!==0)return u}return Fe(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Fe(pt(s.latitude),pt(o.latitude));return a!==0?a:Fe(pt(s.longitude),pt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=_o(a[l],c[l]);if(u)return u}return Fe(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===_l.mapValue&&o===_l.mapValue)return 0;if(s===_l.mapValue)return 1;if(o===_l.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const p=Fe(c[h],u[h]);if(p!==0)return p;const m=_o(a[c[h]],l[u[h]]);if(m!==0)return m}return Fe(c.length,u.length)}(t.mapValue,e.mapValue);default:throw fe()}}function Tw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Fe(t,e);const n=Pi(t),r=Pi(e),i=Fe(n.seconds,r.seconds);return i!==0?i:Fe(n.nanos,r.nanos)}function yo(t){return vp(t)}function vp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ys(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=vp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vp(n.fields[o])}`;return i+"}"}(t.mapValue):fe()}function wp(t){return!!t&&"integerValue"in t}function xg(t){return!!t&&"arrayValue"in t}function bw(t){return!!t&&"nullValue"in t}function Iw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nl(t){return!!t&&"mapValue"in t}function Na(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Na(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Na(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VU(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Fn{constructor(e){this.value=e}static empty(){return new Fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Na(n)}setAll(e){let n=tn.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Na(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Nl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Fn(Na(this.value))}}function AA(t){const e=[];return Wo(t.fields,(n,r)=>{const i=new tn([n]);if(Nl(r)){const s=AA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Jn(e)}/**
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
 */class Xt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Xt(e,0,me.min(),me.min(),me.min(),Fn.empty(),0)}static newFoundDocument(e,n,r,i){return new Xt(e,1,n,me.min(),r,i,0)}static newNoDocument(e,n){return new Xt(e,2,n,me.min(),me.min(),Fn.empty(),0)}static newUnknownDocument(e,n){return new Xt(e,3,n,me.min(),me.min(),Fn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bu{constructor(e,n){this.position=e,this.inclusive=n}}function Aw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=_o(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oa{constructor(e,n="asc"){this.field=e,this.dir=n}}function FU(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class CA{}class Tt extends CA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BU(e,n,r):n==="array-contains"?new WU(e,r):n==="in"?new zU(e,r):n==="not-in"?new qU(e,r):n==="array-contains-any"?new KU(e,r):new Tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jU(e,r):new HU(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_o(n,this.value)):n!==null&&vs(this.value)===vs(n)&&this.matchesComparison(_o(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class br extends CA{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new br(e,n)}matches(e){return RA(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function RA(t){return t.op==="and"}function SA(t){return UU(t)&&RA(t)}function UU(t){for(const e of t.filters)if(e instanceof br)return!1;return!0}function Ep(t){if(t instanceof Tt)return t.field.canonicalString()+t.op.toString()+yo(t.value);if(SA(t))return t.filters.map(e=>Ep(e)).join(",");{const e=t.filters.map(n=>Ep(n)).join(",");return`${t.op}(${e})`}}function PA(t,e){return t instanceof Tt?function(r,i){return i instanceof Tt&&r.op===i.op&&r.field.isEqual(i.field)&&Tr(r.value,i.value)}(t,e):t instanceof br?function(r,i){return i instanceof br&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&PA(o,i.filters[a]),!0):!1}(t,e):void fe()}function kA(t){return t instanceof Tt?function(n){return`${n.field.canonicalString()} ${n.op} ${yo(n.value)}`}(t):t instanceof br?function(n){return n.op.toString()+" {"+n.getFilters().map(kA).join(" ,")+"}"}(t):"Filter"}class BU extends Tt{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class jU extends Tt{constructor(e,n){super(e,"in",n),this.keys=NA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class HU extends Tt{constructor(e,n){super(e,"not-in",n),this.keys=NA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function NA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class WU extends Tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xg(n)&&uc(n.arrayValue,this.value)}}class zU extends Tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uc(this.value.arrayValue,n)}}class qU extends Tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(uc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!uc(this.value.arrayValue,n)}}class KU extends Tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>uc(this.value.arrayValue,r))}}/**
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
 */class GU{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Rw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new GU(t,e,n,r,i,s,o)}function Dg(t){const e=_e(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ep(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yo(r)).join(",")),e.he=n}return e.he}function Mg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FU(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!PA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cw(t.startAt,e.startAt)&&Cw(t.endAt,e.endAt)}function Tp(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Dh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function QU(t,e,n,r,i,s,o,a){return new Dh(t,e,n,r,i,s,o,a)}function Mh(t){return new Dh(t)}function Sw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function YU(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function JU(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function XU(t){return t.collectionGroup!==null}function xa(t){const e=_e(t);if(e.Pe===null){e.Pe=[];const n=JU(e),r=YU(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Oa(n)),e.Pe.push(new Oa(tn.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Oa(tn.keyField(),s))}}}return e.Pe}function Jr(t){const e=_e(t);return e.Ie||(e.Ie=ZU(e,xa(t))),e.Ie}function ZU(t,e){if(t.limitType==="F")return Rw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Oa(i.field,s)});const n=t.endAt?new bu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bu(t.startAt.position,t.startAt.inclusive):null;return Rw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bp(t,e,n){return new Dh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lh(t,e){return Mg(Jr(t),Jr(e))&&t.limitType===e.limitType}function OA(t){return`${Dg(Jr(t))}|lt:${t.limitType}`}function Ip(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>kA(i)).join(", ")}]`),xh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>yo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>yo(i)).join(",")),`Target(${r})`}(Jr(t))}; limitType=${t.limitType})`}function $h(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ae.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=Aw(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,xa(r),i)||r.endAt&&!function(o,a,c){const l=Aw(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,xa(r),i))}(t,e)}function e4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xA(t){return(e,n)=>{let r=!1;for(const i of xa(t)){const s=t4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function t4(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?_o(c,l):fe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe()}}/**
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
 */class zo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return bA(this.inner)}size(){return this.innerSize}}/**
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
 */const n4=new lt(ae.comparator);function Xr(){return n4}const DA=new lt(ae.comparator);function _a(...t){let e=DA;for(const n of t)e=e.insert(n.key,n);return e}function MA(t){let e=DA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ts(){return Da()}function LA(){return Da()}function Da(){return new zo(t=>t.toString(),(t,e)=>t.isEqual(e))}const r4=new lt(ae.comparator),i4=new on(ae.comparator);function Ee(...t){let e=i4;for(const n of t)e=e.add(n);return e}const s4=new on(Fe);function o4(){return s4}/**
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
 */function $A(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tu(e)?"-0":e}}function VA(t){return{integerValue:""+t}}function a4(t,e){return MU(e)?VA(e):$A(t,e)}/**
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
 */class Vh{constructor(){this._=void 0}}function c4(t,e,n){return t instanceof Iu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ng(s)&&(s=Og(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof hc?UA(t,e):t instanceof dc?BA(t,e):function(i,s){const o=FA(i,s),a=Pw(o)+Pw(i.Ee);return wp(o)&&wp(i.Ee)?VA(a):$A(i.serializer,a)}(t,e)}function l4(t,e,n){return t instanceof hc?UA(t,e):t instanceof dc?BA(t,e):n}function FA(t,e){return t instanceof Au?function(r){return wp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Iu extends Vh{}class hc extends Vh{constructor(e){super(),this.elements=e}}function UA(t,e){const n=jA(e);for(const r of t.elements)n.some(i=>Tr(i,r))||n.push(r);return{arrayValue:{values:n}}}class dc extends Vh{constructor(e){super(),this.elements=e}}function BA(t,e){let n=jA(e);for(const r of t.elements)n=n.filter(i=>!Tr(i,r));return{arrayValue:{values:n}}}class Au extends Vh{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Pw(t){return pt(t.integerValue||t.doubleValue)}function jA(t){return xg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function u4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof hc&&i instanceof hc||r instanceof dc&&i instanceof dc?go(r.elements,i.elements,Tr):r instanceof Au&&i instanceof Au?Tr(r.Ee,i.Ee):r instanceof Iu&&i instanceof Iu}(t.transform,e.transform)}class h4{constructor(e,n){this.version=e,this.transformResults=n}}class qr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qr}static exists(e){return new qr(void 0,e)}static updateTime(e){return new qr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ol(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fh{}function HA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zA(t.key,qr.none()):new Vc(t.key,t.data,qr.none());{const n=t.data,r=Fn.empty();let i=new on(tn.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ks(t.key,r,new Jn(i.toArray()),qr.none())}}function d4(t,e,n){t instanceof Vc?function(i,s,o){const a=i.value.clone(),c=Nw(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ks?function(i,s,o){if(!Ol(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Nw(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(WA(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ma(t,e,n,r){return t instanceof Vc?function(s,o,a,c){if(!Ol(s.precondition,o))return a;const l=s.value.clone(),u=Ow(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ks?function(s,o,a,c){if(!Ol(s.precondition,o))return a;const l=Ow(s.fieldTransforms,c,o),u=o.data;return u.setAll(WA(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Ol(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function f4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=FA(r.transform,i||null);s!=null&&(n===null&&(n=Fn.empty()),n.set(r.field,s))}return n||null}function kw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&go(r,i,(s,o)=>u4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vc extends Fh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ks extends Fh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function WA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Nw(t,e,n){const r=new Map;nt(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,l4(o,a,n[i]))}return r}function Ow(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,c4(s,o,e))}return r}class zA extends Fh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class p4 extends Fh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class m4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&d4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ma(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ma(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=LA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=HA(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,(n,r)=>kw(n,r))&&go(this.baseMutations,e.baseMutations,(n,r)=>kw(n,r))}}class Lg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){nt(e.mutations.length===r.length);let i=function(){return r4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Lg(e,n,r,i)}}/**
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
 */class g4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ft,Ae;function y4(t){switch(t){default:return fe();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function qA(t){if(t===void 0)return Yr("GRPC error has no .code"),V.UNKNOWN;switch(t){case ft.OK:return V.OK;case ft.CANCELLED:return V.CANCELLED;case ft.UNKNOWN:return V.UNKNOWN;case ft.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ft.INTERNAL:return V.INTERNAL;case ft.UNAVAILABLE:return V.UNAVAILABLE;case ft.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ft.NOT_FOUND:return V.NOT_FOUND;case ft.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ft.ABORTED:return V.ABORTED;case ft.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ft.DATA_LOSS:return V.DATA_LOSS;default:return fe()}}(Ae=ft||(ft={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function v4(){return new TextEncoder}/**
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
 */const w4=new eo([4294967295,4294967295],0);function xw(t){const e=v4().encode(t),n=new wU;return n.update(e),new Uint8Array(n.digest())}function Dw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new eo([n,r],0),new eo([i,s],0)]}class $g{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ya(`Invalid padding: ${n}`);if(r<0)throw new ya(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ya(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ya(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=eo.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(eo.fromNumber(r)));return i.compare(w4)===1&&(i=new eo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=xw(e),[r,i]=Dw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new $g(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=xw(e),[r,i]=Dw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Uh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uh(me.min(),i,new lt(Fe),Xr(),Ee())}}class Fc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fc(r,n,Ee(),Ee(),Ee())}}/**
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
 */class xl{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class KA{constructor(e,n){this.targetId=e,this.ye=n}}class GA{constructor(e,n,r=cn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Mw{constructor(){this.we=0,this.Se=$w(),this.be=cn.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=Ee(),n=Ee(),r=Ee();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:fe()}}),new Fc(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=$w()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class E4{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Xr(),this.Ue=Lw(),this.We=new lt(Fe)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Tp(s))if(r===0){const o=new ae(s.path);this.je(n,o,Xt.newNoDocument(o,me.min()))}else nt(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ys(r).toUint8Array()}catch(c){if(c instanceof IA)return mo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new $g(o,i,s)}catch(c){return mo(c instanceof ya?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Tp(a.target)){const c=new ae(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,Xt.newNoDocument(c,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=Ee();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Uh(e,n,this.We,this.$e,r);return this.$e=Xr(),this.Ue=Lw(),this.We=new lt(Fe),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Mw,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new on(Fe),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Mw),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Lw(){return new lt(ae.comparator)}function $w(){return new lt(ae.comparator)}const T4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),b4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),I4=(()=>({and:"AND",or:"OR"}))();class A4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ap(t,e){return t.useProto3Json||xh(e)?e:{value:e}}function Cu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function C4(t,e){return Cu(t,e.toTimestamp())}function vr(t){return nt(!!t),me.fromTimestamp(function(n){const r=Pi(n);return new _t(r.seconds,r.nanos)}(t))}function Vg(t,e){return function(r){return new ot(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function YA(t){const e=ot.fromString(t);return nt(eC(e)),e}function Cp(t,e){return Vg(t.databaseId,e.path)}function Gd(t,e){const n=YA(e);if(n.get(1)!==t.databaseId.projectId)throw new se(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(JA(n))}function Rp(t,e){return Vg(t.databaseId,e)}function R4(t){const e=YA(t);return e.length===4?ot.emptyPath():JA(e)}function Sp(t){return new ot(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function JA(t){return nt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vw(t,e,n){return{name:Cp(t,e),fields:n.value.mapValue.fields}}function S4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(nt(u===void 0||typeof u=="string"),cn.fromBase64String(u||"")):(nt(u===void 0||u instanceof Uint8Array),cn.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?V.UNKNOWN:qA(l.code);return new se(u,l.message||"")}(o);n=new GA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gd(t,r.document.name),s=vr(r.document.updateTime),o=r.document.createTime?vr(r.document.createTime):me.min(),a=new Fn({mapValue:{fields:r.document.fields}}),c=Xt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new xl(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gd(t,r.document),s=r.readTime?vr(r.readTime):me.min(),o=Xt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new xl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gd(t,r.document),s=r.removedTargetIds||[];n=new xl([],s,i,null)}else{if(!("filter"in e))return fe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new _4(i,s),a=r.targetId;n=new KA(a,o)}}return n}function P4(t,e){let n;if(e instanceof Vc)n={update:Vw(t,e.key,e.value)};else if(e instanceof zA)n={delete:Cp(t,e.key)};else if(e instanceof ks)n={update:Vw(t,e.key,e.data),updateMask:V4(e.fieldMask)};else{if(!(e instanceof p4))return fe();n={verify:Cp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Iu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof hc)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof dc)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Au)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw fe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:C4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:fe()}(t,e.precondition)),n}function k4(t,e){return t&&t.length>0?(nt(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?vr(i.updateTime):vr(s);return o.isEqual(me.min())&&(o=vr(s)),new h4(o,i.transformResults||[])}(n,e))):[]}function N4(t,e){return{documents:[Rp(t,e.path)]}}function O4(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Rp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return ZA(br.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Fs(h.field),direction:M4(h.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ap(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function x4(t){let e=R4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){nt(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const p=XA(h);return p instanceof br&&SA(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(y){return new Oa(Us(y.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,xh(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,m=h.values||[];return new bu(m,p)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const p=!h.before,m=h.values||[];return new bu(m,p)}(n.endAt)),QU(e,i,o,s,a,"F",c,l)}function D4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function XA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Us(n.unaryFilter.field);return Tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Us(n.unaryFilter.field);return Tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Us(n.unaryFilter.field);return Tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Us(n.unaryFilter.field);return Tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return Tt.create(Us(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return br.create(n.compositeFilter.filters.map(r=>XA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function M4(t){return T4[t]}function L4(t){return b4[t]}function $4(t){return I4[t]}function Fs(t){return{fieldPath:t.canonicalString()}}function Us(t){return tn.fromServerFormat(t.fieldPath)}function ZA(t){return t instanceof Tt?function(n){if(n.op==="=="){if(Iw(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NAN"}};if(bw(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Iw(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NOT_NAN"}};if(bw(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fs(n.field),op:L4(n.op),value:n.value}}}(t):t instanceof br?function(n){const r=n.getFilters().map(i=>ZA(i));return r.length===1?r[0]:{compositeFilter:{op:$4(n.op),filters:r}}}(t):fe()}function V4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class mi{constructor(e,n,r,i,s=me.min(),o=me.min(),a=cn.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class F4{constructor(e){this.ht=e}}function U4(t){const e=x4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bp(e,e.limit,"L"):e}/**
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
 */class B4{constructor(){this._n=new j4}addToCollectionParentIndex(e,n){return this._n.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Si.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class j4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new on(ot.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new on(ot.comparator)).toArray()}}/**
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
 */class vo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new vo(0)}static Bn(){return new vo(-1)}}/**
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
 */class H4{constructor(){this.changes=new zo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class W4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class z4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ma(r.mutation,i,Jn.empty(),_t.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const i=ts();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=_a();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ts();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Xr();const o=Da(),a=function(){return Da()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof ks)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ma(u.mutation,l,u.mutation.getFieldMask(),_t.now())):o.set(l.key,Jn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new W4(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Da();let i=new lt((o,a)=>o-a),s=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Jn.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||Ee()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=LA();u.forEach(p=>{if(!s.has(p)){const m=HA(n.get(p),r.get(p));m!==null&&h.set(p,m),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return ae.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):XU(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(ts());let a=-1,c=s;return o.next(l=>B.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?B.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,Ee())).next(u=>({batchId:a,changes:MA(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let i=_a();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=_a();return this.indexManager.getCollectionParents(e,i).next(o=>B.forEach(o,a=>{const c=function(u,h){return new Dh(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Xt.newInvalidDocument(l)))});let o=_a();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Ma(l.mutation,c,Jn.empty(),_t.now()),$h(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class q4{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return B.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vr(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:U4(i.bundledQuery),readTime:vr(i.readTime)}}(n)),B.resolve()}}/**
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
 */class K4{constructor(){this.overlays=new lt(ae.comparator),this.hr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ts();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=ts(),s=n.length+1,o=new ae(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new lt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=ts(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ts(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return B.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new g4(n,r));let s=this.hr.get(n);s===void 0&&(s=Ee(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class Fg{constructor(){this.Pr=new on(kt.Ir),this.Tr=new on(kt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new kt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new kt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ae(new ot([])),r=new kt(n,e),i=new kt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ae(new ot([])),r=new kt(n,e),i=new kt(n,e+1);let s=Ee();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new kt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class kt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ae.comparator(e.key,n.key)||Fe(e.pr,n.pr)}static Er(e,n){return Fe(e.pr,n.pr)||ae.comparator(e.key,n.key)}}/**
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
 */class G4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new on(kt.Ir)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new m4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new kt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new kt(n,0),i=new kt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new on(Fe);return n.forEach(i=>{const s=new kt(i,0),o=new kt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),B.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ae.isDocumentKey(s)||(s=s.child(""));const o=new kt(new ae(s),0);let a=new on(Fe);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.pr)),!0)},o),B.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){nt(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return B.forEach(n.mutations,i=>{const s=new kt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new kt(n,0),i=this.wr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Q4{constructor(e){this.Cr=e,this.docs=function(){return new lt(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Xt.newInvalidDocument(n))}getEntries(e,n){let r=Xr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xr();const o=n.path,a=new ae(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||OU(NU(u),r)<=0||(i.has(u.key)||$h(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){fe()}Fr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Y4(this)}getSize(e){return B.resolve(this.size)}}class Y4 extends H4{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class J4{constructor(e){this.persistence=e,this.Mr=new zo(n=>Dg(n),Mg),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Fg,this.targetCount=0,this.Br=vo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),B.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new vo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.qn(n),B.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Nr.containsKey(n))}}/**
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
 */class X4{constructor(e,n){this.Lr={},this.overlays={},this.kr=new kg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new J4(this),this.indexManager=new B4,this.remoteDocumentCache=function(i){return new Q4(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new F4(n),this.$r=new q4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new K4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new G4(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const i=new Z4(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return B.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class Z4 extends DU{constructor(e){super(),this.currentSequenceNumber=e}}class Ug{constructor(e){this.persistence=e,this.zr=new Fg,this.jr=null}static Hr(e){return new Ug(e)}get Jr(){if(this.jr)return this.jr;throw fe()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),B.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Jr,r=>{const i=ae.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,me.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return B.or([()=>B.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Bg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Ee(),i=Ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bg(e,n.fromCache,r,i)}}/**
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
 */class eB{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Wi(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.zi(e,n))}Wi(e,n){if(Sw(n))return B.resolve(null);let r=Jr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bp(n,null,"F"),r=Jr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ee(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.Hi(n,l,o,c.readTime)?this.Wi(e,bp(n,null,"F")):this.Ji(e,l,n,c)}))})))}Gi(e,n,r,i){return Sw(n)||i.isEqual(me.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.Hi(n,o,r,i)?this.zi(e,n):(vw()<=xe.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ip(n)),this.Ji(e,o,n,kU(i,-1)))})}ji(e,n){let r=new on(xA(e));return n.forEach((i,s)=>{$h(e,s)&&(r=r.add(s))}),r}Hi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}zi(e,n){return vw()<=xe.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Ip(n)),this.Ui.getDocumentsMatchingQuery(e,n,Si.min())}Ji(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class tB{constructor(e,n,r,i){this.persistence=e,this.Yi=n,this.serializer=i,this.Zi=new lt(Fe),this.Xi=new zo(s=>Dg(s),Mg),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new z4(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function nB(t,e,n,r){return new tB(t,e,n,r)}async function tC(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=Ee();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({rs:l,removedBatchIds:o,addedBatchIds:a}))})})}function rB(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,p=h.keys();let m=B.resolve();return p.forEach(y=>{m=m.next(()=>u.getEntry(c,y)).next(v=>{const I=l.docVersions.get(y);nt(I!==null),v.version.compareTo(I)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Ee();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function nC(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function iB(t,e){const n=_e(t),r=e.snapshotVersion;let i=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});i=n.Zi;const a=[];e.targetChanges.forEach((u,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,u.addedDocuments,h)));let m=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(cn.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),i=i.insert(h,m),function(v,I,A){return v.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(p,m,u)&&a.push(n.Qr.updateTargetData(s,m))});let c=Xr(),l=Ee();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(sB(s,o,e.documentUpdates).next(u=>{c=u.ss,l=u.os})),!r.isEqual(me.min())){const u=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return B.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Zi=i,s))}function sB(t,e,n){let r=Ee(),i=Ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xr();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(me.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ss:o,os:i}})}function oB(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aB(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new mi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Zi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Pp(t,e,n){const r=_e(t),i=r.Zi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$c(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(i.target)}function Fw(t,e,n){const r=_e(t);let i=me.min(),s=Ee();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=_e(c),p=h.Xi.get(u);return p!==void 0?B.resolve(h.Zi.get(p)):h.Qr.getTargetData(l,u)}(r,o,Jr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?i:me.min(),n?s:Ee())).next(a=>(cB(r,e4(e),a),{documents:a,_s:s})))}function cB(t,e,n){let r=t.es.get(e)||me.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.es.set(e,r)}class Uw{constructor(){this.activeTargetIds=o4()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lB{constructor(){this.Ys=new Uw,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new Uw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uB{Xs(e){}shutdown(){}}/**
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
 */class Bw{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yl=null;function Qd(){return yl===null?yl=function(){return 268435456+Math.round(2147483648*Math.random())}():yl++,"0x"+yl.toString(16)}/**
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
 */const hB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dB{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
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
 */const Gt="WebChannelConnection";class fB extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${i}/databases/${s}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get mo(){return!1}fo(n,r,i,s,o){const a=Qd(),c=this.po(n,r);ee("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(l,s,o),this.wo(n,c,l,i).then(u=>(ee("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw mo("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}So(n,r,i,s,o,a){return this.fo(n,r,i,s,o)}yo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ho}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}po(n,r){const i=hB[n];return`${this.Ao}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,i){const s=Qd();return new Promise((o,a)=>{const c=new vU;c.setWithCredentials(!0),c.listenOnce(_U.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Kd.NO_ERROR:const u=c.getResponseJson();ee(Gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Kd.TIMEOUT:ee(Gt,`RPC '${e}' ${s} timed out`),a(new se(V.DEADLINE_EXCEEDED,"Request time out"));break;case Kd.HTTP_ERROR:const h=c.getStatus();if(ee(Gt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const y=function(I){const A=I.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(A)>=0?A:V.UNKNOWN}(m.status);a(new se(y,m.message))}else a(new se(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new se(V.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{ee(Gt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);ee(Gt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}bo(e,n,r){const i=Qd(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mU(),a=gU(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");ee(Gt,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let p=!1,m=!1;const y=new dB({_o:I=>{m?ee(Gt,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(p||(ee(Gt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),ee(Gt,`RPC '${e}' stream ${i} sending:`,I),h.send(I))},ao:()=>h.close()}),v=(I,A,k)=>{I.listen(A,N=>{try{k(N)}catch(P){setTimeout(()=>{throw P},0)}})};return v(h,ml.EventType.OPEN,()=>{m||ee(Gt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,ml.EventType.CLOSE,()=>{m||(m=!0,ee(Gt,`RPC '${e}' stream ${i} transport closed`),y.To())}),v(h,ml.EventType.ERROR,I=>{m||(m=!0,mo(Gt,`RPC '${e}' stream ${i} transport errored:`,I),y.To(new se(V.UNAVAILABLE,"The operation could not be completed")))}),v(h,ml.EventType.MESSAGE,I=>{var A;if(!m){const k=I.data[0];nt(!!k);const N=k,P=N.error||((A=N[0])===null||A===void 0?void 0:A.error);if(P){ee(Gt,`RPC '${e}' stream ${i} received error:`,P);const j=P.status;let W=function(qe){const Se=ft[qe];if(Se!==void 0)return qA(Se)}(j),ce=P.message;W===void 0&&(W=V.INTERNAL,ce="Unknown error status: "+j+" with message "+P.message),m=!0,y.To(new se(W,ce)),h.close()}else ee(Gt,`RPC '${e}' stream ${i} received:`,k),y.Eo(k)}}),v(a,yU.STAT_EVENT,I=>{I.stat===_w.PROXY?ee(Gt,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===_w.NOPROXY&&ee(Gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Io()},0),y}}function Yd(){return typeof document<"u"?document:null}/**
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
 */function Bh(t){return new A4(t,!0)}/**
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
 */class rC{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,n-r);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
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
 */class iC{constructor(e,n,r,i,s,o,a,c){this.oi=e,this.ko=r,this.qo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new rC(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Yr(n.toString()),Yr("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Qo===n&&this.n_(r,i)},r=>{e(()=>{const i=new se(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(i)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(i=>{r(()=>this.r_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pB extends iC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=S4(this.serializer,e),r=function(s){if(!("targetChange"in s))return me.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?vr(o.readTime):me.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=Sp(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Tp(c)?{documents:N4(s,c)}:{query:O4(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=QA(s,o.resumeToken);const l=Ap(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(me.min())>0){a.readTime=Cu(s,o.snapshotVersion.toTimestamp());const l=Ap(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=D4(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=Sp(this.serializer),n.removeTarget=e,this.Yo(n)}}class mB extends iC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(nt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=k4(e.writeResults,e.commitTime),r=vr(e.commitTime);return this.listener.l_(r,n)}return nt(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=Sp(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>P4(this.serializer,r))};this.Yo(n)}}/**
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
 */class gB extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.I_=!1}T_(){if(this.I_)throw new se(V.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se(V.UNKNOWN,i.toString())})}So(e,n,r,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new se(V.UNKNOWN,s.toString())})}terminate(){this.I_=!0}}class _B{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(Yr(n),this.R_=!1):ee("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
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
 */class yB{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=s,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{Ns(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=_e(c);l.S_.add(4),await Uc(l),l.v_.set("Unknown"),l.S_.delete(4),await jh(l)}(this))})}),this.v_=new _B(r,i)}}async function jh(t){if(Ns(t))for(const e of t.b_)await e(!0)}async function Uc(t){for(const e of t.b_)await e(!1)}function sC(t,e){const n=_e(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),Wg(n)?Hg(n):qo(n).Go()&&jg(n,e))}function oC(t,e){const n=_e(t),r=qo(n);n.w_.delete(e),r.Go()&&aC(n,e),n.w_.size===0&&(r.Go()?r.Ho():Ns(n)&&n.v_.set("Unknown"))}function jg(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qo(t).o_(e)}function aC(t,e){t.C_.Le(e),qo(t).__(e)}function Hg(t){t.C_=new E4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),qo(t).start(),t.v_.V_()}function Wg(t){return Ns(t)&&!qo(t).Wo()&&t.w_.size>0}function Ns(t){return _e(t).S_.size===0}function cC(t){t.C_=void 0}async function vB(t){t.w_.forEach((e,n)=>{jg(t,e)})}async function wB(t,e){cC(t),Wg(t)?(t.v_.g_(e),Hg(t)):t.v_.set("Unknown")}async function EB(t,e,n){if(t.v_.set("Online"),e instanceof GA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.w_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.w_.delete(a),i.C_.removeTarget(a))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ru(t,r)}else if(e instanceof xl?t.C_.Ge(e):e instanceof KA?t.C_.Xe(e):t.C_.He(e),!n.isEqual(me.min()))try{const r=await nC(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.C_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.w_.get(l);u&&s.w_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.w_.get(c);if(!u)return;s.w_.set(c,u.withResumeToken(cn.EMPTY_BYTE_STRING,u.snapshotVersion)),aC(s,c);const h=new mi(u.target,c,l,u.sequenceNumber);jg(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await Ru(t,r)}}async function Ru(t,e,n){if(!$c(e))throw e;t.S_.add(1),await Uc(t),t.v_.set("Offline"),n||(n=()=>nC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await jh(t)})}function lC(t,e){return e().catch(n=>Ru(t,n,e))}async function Hh(t){const e=_e(t),n=ki(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;TB(e);)try{const i=await oB(e.localStore,r);if(i===null){e.y_.length===0&&n.Ho();break}r=i.batchId,bB(e,i)}catch(i){await Ru(e,i)}uC(e)&&hC(e)}function TB(t){return Ns(t)&&t.y_.length<10}function bB(t,e){t.y_.push(e);const n=ki(t);n.Go()&&n.u_&&n.c_(e.mutations)}function uC(t){return Ns(t)&&!ki(t).Wo()&&t.y_.length>0}function hC(t){ki(t).start()}async function IB(t){ki(t).P_()}async function AB(t){const e=ki(t);for(const n of t.y_)e.c_(n.mutations)}async function CB(t,e,n){const r=t.y_.shift(),i=Lg.from(r,e,n);await lC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Hh(t)}async function RB(t,e){e&&ki(t).u_&&await async function(r,i){if(function(o){return y4(o)&&o!==V.ABORTED}(i.code)){const s=r.y_.shift();ki(r).jo(),await lC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Hh(r)}}(t,e),uC(t)&&hC(t)}async function jw(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Ns(n);n.S_.add(3),await Uc(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await jh(n)}async function SB(t,e){const n=_e(t);e?(n.S_.delete(2),await jh(n)):e||(n.S_.add(2),await Uc(n),n.v_.set("Unknown"))}function qo(t){return t.F_||(t.F_=function(n,r,i){const s=_e(n);return s.T_(),new pB(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:vB.bind(null,t),lo:wB.bind(null,t),s_:EB.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),Wg(t)?Hg(t):t.v_.set("Unknown")):(await t.F_.stop(),cC(t))})),t.F_}function ki(t){return t.M_||(t.M_=function(n,r,i){const s=_e(n);return s.T_(),new mB(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:IB.bind(null,t),lo:RB.bind(null,t),h_:AB.bind(null,t),l_:CB.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await Hh(t)):(await t.M_.stop(),t.y_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
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
 */class zg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new zg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qg(t,e){if(Yr("AsyncQueue",`${e}: ${t}`),$c(t))return new se(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class to{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=_a(),this.sortedSet=new lt(this.comparator)}static emptySet(e){return new to(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof to)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new to;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Hw{constructor(){this.x_=new lt(ae.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):fe():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class wo{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new wo(e,n,to.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class PB{constructor(){this.N_=void 0,this.listeners=[]}}class kB{constructor(){this.queries=new zo(e=>OA(e),Lh),this.onlineState="Unknown",this.B_=new Set}}async function Kg(t,e){const n=_e(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new PB),i)try{s.N_=await n.onListen(r)}catch(o){const a=qg(o,`Initialization of query '${Ip(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.L_(n.onlineState),s.N_&&e.k_(s.N_)&&Qg(n)}async function Gg(t,e){const n=_e(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function NB(t,e){const n=_e(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.k_(i)&&(r=!0);o.N_=i}}r&&Qg(n)}function OB(t,e,n){const r=_e(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Qg(t){t.B_.forEach(e=>{e.next()})}class Yg{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
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
 */class dC{constructor(e){this.key=e}}class fC{constructor(e){this.key=e}}class xB{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=Ee(),this.mutatedKeys=Ee(),this.ia=xA(e),this.sa=new to(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new Hw,i=n?n.sa:this.sa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const p=i.get(u),m=$h(this.query,h)?h:null,y=!!p&&this.mutatedKeys.has(p.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;p&&m?p.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),I=!0):this.ua(p,m)||(r.track({type:2,doc:m}),I=!0,(c&&this.ia(m,c)>0||l&&this.ia(m,l)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),I=!0):p&&!m&&(r.track({type:1,doc:p}),I=!0,(c||l)&&(a=!0)),I&&(m?(o=o.add(m),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{sa:o,aa:r,Hi:a,mutatedKeys:s}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const s=e.aa.O_();s.sort((l,u)=>function(p,m){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return y(p)-y(m)}(l.type,u.type)||this.ia(l.doc,u.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,s.length!==0||c?{snapshot:new wo(this.query,e.sa,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new Hw,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=Ee(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new fC(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new dC(r))}),n}Ia(e){this.ta=e._s,this.ra=Ee();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return wo.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class DB{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MB{constructor(e){this.key=e,this.Ea=!1}}class LB{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new zo(a=>OA(a),Lh),this.Ra=new Map,this.Va=new Set,this.ma=new lt(ae.comparator),this.fa=new Map,this.ga=new Fg,this.pa={},this.ya=new Map,this.wa=vo.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function $B(t,e){const n=KB(t);let r,i;const s=n.Aa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const o=await aB(n.localStore,Jr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await VB(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&sC(n.remoteStore,o)}return i}async function VB(t,e,n,r,i){t.ba=(h,p,m)=>async function(v,I,A,k){let N=I.view._a(A);N.Hi&&(N=await Fw(v.localStore,I.query,!1).then(({documents:W})=>I.view._a(W,N)));const P=k&&k.targetChanges.get(I.targetId),j=I.view.applyChanges(N,v.isPrimaryClient,P);return zw(v,I.targetId,j.ha),j.snapshot}(t,h,p,m);const s=await Fw(t.localStore,e,!0),o=new xB(e,s._s),a=o._a(s.documents),c=Fc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);zw(t,n,l.ha);const u=new DB(e,n,o);return t.Aa.set(e,u),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),l.snapshot}async function FB(t,e){const n=_e(t),r=n.Aa.get(e),i=n.Ra.get(r.targetId);if(i.length>1)return n.Ra.set(r.targetId,i.filter(s=>!Lh(s,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Pp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),oC(n.remoteStore,r.targetId),kp(n,r.targetId)}).catch(Lc)):(kp(n,r.targetId),await Pp(n.localStore,r.targetId,!0))}async function UB(t,e,n){const r=GB(t);try{const i=await function(o,a){const c=_e(o),l=_t.now(),u=a.reduce((m,y)=>m.add(y.key),Ee());let h,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=Xr(),v=Ee();return c.ts.getEntries(m,u).next(I=>{y=I,y.forEach((A,k)=>{k.isValidDocument()||(v=v.add(A))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,y)).next(I=>{h=I;const A=[];for(const k of a){const N=f4(k,h.get(k.key).overlayedDocument);N!=null&&A.push(new ks(k.key,N,AA(N.value.mapValue),qr.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,A,a)}).next(I=>{p=I;const A=I.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(m,I.batchId,A)})}).then(()=>({batchId:p.batchId,changes:MA(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.pa[o.currentUser.toKey()];l||(l=new lt(Fe)),l=l.insert(a,c),o.pa[o.currentUser.toKey()]=l}(r,i.batchId,n),await Bc(r,i.changes),await Hh(r.remoteStore)}catch(i){const s=qg(i,"Failed to persist write");n.reject(s)}}async function pC(t,e){const n=_e(t);try{const r=await iB(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fa.get(s);o&&(nt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ea=!0:i.modifiedDocuments.size>0?nt(o.Ea):i.removedDocuments.size>0&&(nt(o.Ea),o.Ea=!1))}),await Bc(n,r,e)}catch(r){await Lc(r)}}function Ww(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Aa.forEach((s,o)=>{const a=o.view.L_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=_e(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const p of h.listeners)p.L_(a)&&(l=!0)}),l&&Qg(c)}(r.eventManager,e),i.length&&r.da.s_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BB(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fa.get(e),s=i&&i.key;if(s){let o=new lt(ae.comparator);o=o.insert(s,Xt.newNoDocument(s,me.min()));const a=Ee().add(s),c=new Uh(me.min(),new Map,new lt(Fe),o,a);await pC(r,c),r.ma=r.ma.remove(s),r.fa.delete(e),Jg(r)}else await Pp(r.localStore,e,!1).then(()=>kp(r,e,n)).catch(Lc)}async function jB(t,e){const n=_e(t),r=e.batch.batchId;try{const i=await rB(n.localStore,e);gC(n,r,null),mC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bc(n,i)}catch(i){await Lc(i)}}async function HB(t,e,n){const r=_e(t);try{const i=await function(o,a){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(nt(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);gC(r,e,n),mC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bc(r,i)}catch(i){await Lc(i)}}function mC(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function gC(t,e,n){const r=_e(t);let i=r.pa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pa[r.currentUser.toKey()]=i}}function kp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||_C(t,r)})}function _C(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(oC(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),Jg(t))}function zw(t,e,n){for(const r of n)r instanceof dC?(t.ga.addReference(r.key,e),WB(t,r)):r instanceof fC?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||_C(t,r.key)):fe()}function WB(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Va.add(r),Jg(t))}function Jg(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new ae(ot.fromString(e)),r=t.wa.next();t.fa.set(r,new MB(n)),t.ma=t.ma.insert(n,r),sC(t.remoteStore,new mi(Jr(Mh(n.path)),r,"TargetPurposeLimboResolution",kg.ae))}}async function Bc(t,e,n){const r=_e(t),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,c)=>{o.push(r.ba(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Bg.Ki(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.da.s_(i),await async function(c,l){const u=_e(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>B.forEach(l,p=>B.forEach(p.qi,m=>u.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>B.forEach(p.Qi,m=>u.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!$c(h))throw h;ee("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const p=h.targetId;if(!h.fromCache){const m=u.Zi.get(p),y=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(y);u.Zi=u.Zi.insert(p,v)}}}(r.localStore,s))}async function zB(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await tC(n.localStore,e);n.currentUser=e,function(s,o){s.ya.forEach(a=>{a.forEach(c=>{c.reject(new se(V.CANCELLED,o))})}),s.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Bc(n,r.rs)}}function qB(t,e){const n=_e(t),r=n.fa.get(e);if(r&&r.Ea)return Ee().add(r.key);{let i=Ee();const s=n.Ra.get(e);if(!s)return i;for(const o of s){const a=n.Aa.get(o);i=i.unionWith(a.view.oa)}return i}}function KB(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qB.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BB.bind(null,e),e.da.s_=NB.bind(null,e.eventManager),e.da.Da=OB.bind(null,e.eventManager),e}function GB(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jB.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HB.bind(null,e),e}class qw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Bh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return nB(this.persistence,new eB,e.initialUser,this.serializer)}createPersistence(e){return new X4(Ug.Hr,this.serializer)}createSharedClientState(e){return new lB}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class QB{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ww(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zB.bind(null,this.syncEngine),await SB(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kB}()}createDatastore(e){const n=Bh(e.databaseInfo.databaseId),r=function(s){return new fB(s)}(e.databaseInfo);return function(s,o,a,c){return new gB(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new yB(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ww(this.syncEngine,n,0),function(){return Bw.v()?new Bw:new uB}())}createSyncEngine(e,n){return function(i,s,o,a,c,l,u){const h=new LB(i,s,o,a,c,l);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=_e(n);ee("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await Uc(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Xg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):Yr("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class YB{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Qt.UNAUTHENTICATED,this.clientId=TA.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ee("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ee("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new se(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jd(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await tC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XB(t);ee("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>jw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>jw(e.remoteStore,s)),t._onlineComponents=e}function JB(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function XB(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!JB(n))throw n;mo("Error using user provided cache. Falling back to memory cache: "+n),await Jd(t,new qw)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Jd(t,new qw);return t._offlineComponents}async function yC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Kw(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Kw(t,new QB))),t._onlineComponents}function ZB(t){return yC(t).then(e=>e.syncEngine)}async function Su(t){const e=await yC(t),n=e.eventManager;return n.onListen=$B.bind(null,e.syncEngine),n.onUnlisten=FB.bind(null,e.syncEngine),n}function ej(t,e,n={}){const r=new zr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new Xg({next:p=>{o.enqueueAndForget(()=>Gg(s,h));const m=p.docs.has(a);!m&&p.fromCache?l.reject(new se(V.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&c&&c.source==="server"?l.reject(new se(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new Yg(Mh(a.path),u,{includeMetadataChanges:!0,z_:!0});return Kg(s,h)}(await Su(t),t.asyncQueue,e,n,r)),r.promise}function tj(t,e,n={}){const r=new zr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new Xg({next:p=>{o.enqueueAndForget(()=>Gg(s,h)),p.fromCache&&c.source==="server"?l.reject(new se(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new Yg(a,u,{includeMetadataChanges:!0,z_:!0});return Kg(s,h)}(await Su(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function vC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Gw=new Map;/**
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
 */function wC(t,e,n){if(!n)throw new se(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nj(t,e,n,r){if(e===!0&&r===!0)throw new se(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qw(t){if(!ae.isDocumentKey(t))throw new se(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yw(t){if(ae.isDocumentKey(t))throw new se(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function wr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zg(t);throw new se(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Jw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new se(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new se(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new se(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EU;switch(r.type){case"firstParty":return new AU(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gw.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Gw.delete(n),r.terminate())}(this),Promise.resolve()}}function rj(t,e,n,r={}){var i;const s=(t=wr(t,Wh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Qt.MOCK_USER;else{a=gx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new se(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Qt(l)}t._authCredentials=new TU(new EA(a,c))}}/**
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
 */class jc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jc(this.firestore,e,this._query)}}class vn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vn(this.firestore,e,this._key)}}class bi extends jc{constructor(e,n,r){super(e,n,Mh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vn(this.firestore,null,new ae(e))}withConverter(e){return new bi(this.firestore,e,this._path)}}function PW(t,e,...n){if(t=Lt(t),wC("collection","path",e),t instanceof Wh){const r=ot.fromString(e,...n);return Yw(r),new bi(t,null,r)}{if(!(t instanceof vn||t instanceof bi))throw new se(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ot.fromString(e,...n));return Yw(r),new bi(t.firestore,null,r)}}function Dl(t,e,...n){if(t=Lt(t),arguments.length===1&&(e=TA.V()),wC("doc","path",e),t instanceof Wh){const r=ot.fromString(e,...n);return Qw(r),new vn(t,null,new ae(r))}{if(!(t instanceof vn||t instanceof bi))throw new se(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ot.fromString(e,...n));return Qw(r),new vn(t.firestore,t instanceof bi?t.converter:null,new ae(r))}}/**
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
 */class ij{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new rC(this,"async_queue_retry"),this.tu=()=>{const n=Yd();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=Yd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=Yd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new zr;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!$c(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Yr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const i=zg.createAndSchedule(this,e,n,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&fe()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function Xw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Eo extends Wh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new ij}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||EC(this),this._firestoreClient.terminate()}}function sj(t,e){const n=typeof t=="object"?t:ah(),r=typeof t=="string"?t:e||"(default)",i=Is(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=mx("firestore");s&&rj(i,...s)}return i}function zh(t){return t._firestoreClient||EC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function EC(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,l,u){return new $U(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,vC(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new YB(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class To{constructor(e){this._byteString=e}static fromBase64String(e){try{return new To(cn.fromBase64String(e))}catch(n){throw new se(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new To(cn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class e_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class TC{constructor(e){this._methodName=e}}/**
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
 */class qh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}}/**
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
 */const oj=/^__.*__$/;class aj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ks(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vc(e,this.data,n,this.fieldTransforms)}}function bC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class t_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.cu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new t_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.Tu(e),i}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.cu(),i}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return Pu(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(bC(this.lu)&&oj.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class cj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bh(e)}mu(e,n,r,i=!1){return new t_({lu:e,methodName:n,Vu:r,path:tn.emptyPath(),Iu:!1,Ru:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lj(t){const e=t._freezeSettings(),n=Bh(t._databaseId);return new cj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uj(t,e,n,r,i,s={}){const o=t.mu(s.merge||s.mergeFields?2:0,e,n,i);RC("Data must be an object, but it was:",o,r);const a=AC(r,o);let c,l;if(s.merge)c=new Jn(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const p=hj(e,h,n);if(!o.contains(p))throw new se(V.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);fj(u,p)||u.push(p)}c=new Jn(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new aj(new Fn(a),c,l)}function IC(t,e){if(CC(t=Lt(t)))return RC("Unsupported field value:",e,t),AC(t,e);if(t instanceof TC)return function(r,i){if(!bC(i.lu))throw i.Au(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Au(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=IC(a,i.du(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return a4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=_t.fromDate(r);return{timestampValue:Cu(i.serializer,s)}}if(r instanceof _t){const s=new _t(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cu(i.serializer,s)}}if(r instanceof qh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof To)return{bytesValue:QA(i.serializer,r._byteString)};if(r instanceof vn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Vg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Au(`Unsupported field value: ${Zg(r)}`)}(t,e)}function AC(t,e){const n={};return bA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wo(t,(r,i)=>{const s=IC(i,e.Pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function CC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _t||t instanceof qh||t instanceof To||t instanceof vn||t instanceof TC)}function RC(t,e,n){if(!CC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Zg(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function hj(t,e,n){if((e=Lt(e))instanceof e_)return e._internalPath;if(typeof e=="string")return SC(t,e);throw Pu("Field path arguments must be of type string or ",t,!1,void 0,n)}const dj=new RegExp("[~\\*/\\[\\]]");function SC(t,e,n){if(e.search(dj)>=0)throw Pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new e_(...e.split("."))._internalPath}catch{throw Pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new se(V.INVALID_ARGUMENT,a+t+c)}function fj(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class PC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kC("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pj extends PC{data(){return super.data()}}function kC(t,e){return typeof e=="string"?SC(t,e):e instanceof e_?e._internalPath:e._delegate._internalPath}/**
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
 */function NC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new se(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mj{convertValue(e,n="none"){switch(vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw fe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Wo(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new qh(pt(e.latitude),pt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Og(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(cc(e));default:return null}}convertTimestamp(e){const n=Pi(e);return new _t(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ot.fromString(e);nt(eC(r));const i=new lc(r.get(1),r.get(3)),s=new ae(r.popFirst(5));return i.isEqual(n)||Yr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function gj(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class va{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class OC extends PC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kC("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ml extends OC{data(e={}){return super.data(e)}}class xC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new va(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ml(this._firestore,this._userDataWriter,r.key,r,new va(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Ml(i._firestore,i._userDataWriter,a.doc.key,a.doc,new va(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Ml(i._firestore,i._userDataWriter,a.doc.key,a.doc,new va(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:_j(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _j(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}/**
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
 */function DC(t){t=wr(t,vn);const e=wr(t.firestore,Eo);return ej(zh(e),t._key).then(n=>MC(e,t,n))}class n_ extends mj{constructor(e){super(),this.firestore=e}convertBytes(e){return new To(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vn(this.firestore,null,n)}}function yj(t){t=wr(t,jc);const e=wr(t.firestore,Eo),n=zh(e),r=new n_(e);return NC(t._query),tj(n,t._query).then(i=>new xC(e,r,t,i))}function vj(t,e,n){t=wr(t,vn);const r=wr(t.firestore,Eo),i=gj(t.converter,e,n);return wj(r,[uj(lj(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qr.none())])}function r_(t,...e){var n,r,i;t=Lt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Xw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Xw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof vn)l=wr(t.firestore,Eo),u=Mh(t._key.path),c={next:h=>{e[o]&&e[o](MC(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=wr(t,jc);l=wr(h.firestore,Eo),u=h._query;const p=new n_(l);c={next:m=>{e[o]&&e[o](new xC(l,p,h,m))},error:e[o+1],complete:e[o+2]},NC(t._query)}return function(p,m,y,v){const I=new Xg(v),A=new Yg(m,I,y);return p.asyncQueue.enqueueAndForget(async()=>Kg(await Su(p),A)),()=>{I.Ma(),p.asyncQueue.enqueueAndForget(async()=>Gg(await Su(p),A))}}(zh(l),u,a,c)}function wj(t,e){return function(r,i){const s=new zr;return r.asyncQueue.enqueueAndForget(async()=>UB(await ZB(r),i,s)),s.promise}(zh(t),e)}function MC(t,e,n){const r=n.docs.get(e._key),i=new n_(t);return new OC(t,i,e._key,r,new va(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ho=i})(Di),Tn(new pn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Eo(new bU(r.getProvider("auth-internal")),new RU(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new se(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lc(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Wt(yw,"4.1.2",e),Wt(yw,"4.1.2","esm2017")})();/**
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
 */const LC="firebasestorage.googleapis.com",Ej="storageBucket",Tj=2*60*1e3,bj=10*60*1e3;/**
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
 */class Cr extends Hn{constructor(e,n,r=0){super(Xd(e),`Firebase Storage: ${n} (${Xd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Cr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ir;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ir||(Ir={}));function Xd(t){return"storage/"+t}function Ij(){const t="An unknown error occurred, please check the error payload for server response.";return new Cr(Ir.UNKNOWN,t)}function Aj(){return new Cr(Ir.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Cj(){return new Cr(Ir.CANCELED,"User canceled the upload/download.")}function Rj(t){return new Cr(Ir.INVALID_URL,"Invalid URL '"+t+"'.")}function Sj(t){return new Cr(Ir.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zw(t){return new Cr(Ir.INVALID_ARGUMENT,t)}function $C(){return new Cr(Ir.APP_DELETED,"The Firebase app was deleted.")}function Pj(t){return new Cr(Ir.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Xn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xn.makeFromUrl(e,n)}catch{return new Xn(e,"")}if(r.path==="")return r;throw Sj(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${i}/o${p}`,"i"),y={bucket:1,path:3},v=n===LC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",A=new RegExp(`^https?://${v}/${i}/${I}`,"i"),N=[{regex:a,indices:c,postModify:s},{regex:m,indices:y,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<N.length;P++){const j=N[P],W=j.regex.exec(e);if(W){const ce=W[j.indices.bucket];let ge=W[j.indices.path];ge||(ge=""),r=new Xn(ce,ge),j.postModify(r);break}}if(r==null)throw Rj(e);return r}}class kj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Nj(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...I){l||(l=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(m,c())},I)}function p(){s&&clearTimeout(s)}function m(I,...A){if(l){p();return}if(I){p(),u.call(null,I,...A);return}if(c()||o){p(),u.call(null,I,...A);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let y=!1;function v(I){y||(y=!0,p(),!l&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function Oj(t){t(!1)}/**
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
 */function xj(t){return t!==void 0}function e0(t,e,n,r){if(r<e)throw Zw(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Zw(`Invalid value for '${t}'. Expected ${n} or less.`)}function Dj(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ku;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ku||(ku={}));/**
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
 */function Mj(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class Lj{constructor(e,n,r,i,s,o,a,c,l,u,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new vl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ku.NO_ERROR,c=s.getStatus();if(!a||Mj(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===ku.ABORT;r(!1,new vl(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new vl(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());xj(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Ij();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?$C():Cj();o(c)}else{const c=Aj();o(c)}};this.canceled_?n(!1,new vl(!1,null,!0)):this.backoffId_=Nj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Oj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $j(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Vj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Fj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Uj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Bj(t,e,n,r,i,s,o=!0){const a=Dj(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Fj(l,e),$j(l,n),Vj(l,s),Uj(l,r),new Lj(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function jj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Hj(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Nu{constructor(e,n){this._service=e,n instanceof Xn?this._location=n:this._location=Xn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Nu(e,n)}get root(){const e=new Xn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Hj(this._location.path)}get storage(){return this._service}get parent(){const e=jj(this._location.path);if(e===null)return null;const n=new Xn(this._location.bucket,e);return new Nu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Pj(e)}}function t0(t,e){const n=e==null?void 0:e[Ej];return n==null?null:Xn.makeFromBucketSpec(n,t)}class Wj{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=LC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Tj,this._maxUploadRetryTime=bj,this._requests=new Set,i!=null?this._bucket=Xn.makeFromBucketSpec(i,this._host):this._bucket=t0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xn.makeFromBucketSpec(this._url,e):this._bucket=t0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){e0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){e0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new kj($C());{const o=Bj(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const n0="@firebase/storage",r0="0.11.2";/**
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
 */const zj="storage";function qj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Wj(n,r,i,e,Di)}function Kj(){Tn(new pn(zj,qj,"PUBLIC").setMultipleInstances(!0)),Wt(n0,r0,""),Wt(n0,r0,"esm2017")}Kj();const Zd=new WeakMap;function VC(t,e){return Zd.has(e)||Zd.set(e,t||{f:{},r:{},s:{},u:{}}),Zd.get(e)}function Gj(t,e,n,r){if(!t)return n;const[i,s]=FC(t);if(!i)return n;const o=VC(void 0,r)[i]||{},a=e||s;return a&&a in o?o[a]:n}function Qj(t,e,n,r){if(!t)return;const[i,s]=FC(t);if(!i)return;const o=VC(void 0,r)[i],a=e||s;if(a)return n.then(c=>{o[a]=c}).catch(dr),a}function FC(t){return E2(t)||T2(t)?["f",t.path]:b2(t)?["r",t.toString()]:I2(t)?["s",t.toString()]:[]}const ef=new WeakMap;function Yj(t,e,n){const r=Tc();ef.has(r)||ef.set(r,new Map);const i=ef.get(r),s=Qj(e,n,t,r);return s&&i.set(s,t),s?()=>i.delete(s):dr}const Jj={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Np(t,e,n,r){if(!v2(t))return[t,{}];const i=[{},{}],s=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,p]=u;Object.getOwnPropertyNames(a).forEach(m=>{const y=Object.getOwnPropertyDescriptor(a,m);y&&!y.enumerable&&Object.defineProperty(h,m,y)});for(const m in a){const y=a[m];if(y==null||y instanceof Date||y instanceof _t||y instanceof qh)h[m]=y;else if(Vm(y)){const v=l+m;h[m]=v in n?c[m]:y.path,p[v]=y.converter?y:y.withConverter(r.converter)}else if(Array.isArray(y)){h[m]=Array(y.length);for(let v=0;v<y.length;v++){const I=y[v];I&&I.path in s&&(h[m][v]=s[I.path])}o(y,c[m]||h[m],l+m+".",[h[m],p])}else Cs(y)?(h[m]={},o(y,c[m],l+m+".",[h[m],p])):h[m]=y}}return o(t,e,"",i),i}const i_={reset:!1,wait:!0,maxRefDepth:2,converter:Jj,snapshotOptions:{serverTimestamps:"estimate"}};function Ou(t){for(const e in t)t[e].unsub()}function Op(t,e,n,r,i,s,o,a,c){const[l,u]=Np(r.data(t.snapshotOptions),$m(e,n),i,t);s.set(e,n,l),xp(t,e,n,i,u,s,o,a,c)}function Xj({ref:t,target:e,path:n,depth:r,resolve:i,reject:s,ops:o},a){const c=Object.create(null);let l=dr;return a.once?DC(t).then(u=>{u.exists()?Op(a,e,n,u,c,o,r,i,s):(o.set(e,n,null),i())}).catch(s):l=r_(t,u=>{u.exists()?Op(a,e,n,u,c,o,r,i,s):(o.set(e,n,null),i())},s),()=>{l(),Ou(c)}}function xp(t,e,n,r,i,s,o,a,c){const l=Object.keys(i);if(Object.keys(r).filter(v=>l.indexOf(v)<0).forEach(v=>{r[v].unsub(),delete r[v]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const p=l.length,m=Object.create(null);function y(v){v in m&&++h>=p&&a(n)}l.forEach(v=>{const I=r[v],A=i[v],k=`${n}.${v}`;if(m[k]=!0,I)if(I.path!==A.path)I.unsub();else return;r[v]={data:()=>$m(e,k),unsub:Xj({ref:A,target:e,path:k,depth:o,ops:s,resolve:y.bind(null,k),reject:c},t),path:A.path}})}function Zj(t,e,n,r,i,s){const o=Object.assign({},i_,s),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let p=ct(l?[]:t.value);l||n.set(t,h,[]);const m=r;let y,v=dr;const I=[],A={added:({newIndex:N,doc:P})=>{I.splice(N,0,Object.create(null));const j=I[N],[W,ce]=Np(P.data(c),void 0,j,o);n.add(Et(p),N,W),xp(o,p,`${h}.${N}`,j,ce,n,0,r.bind(null,P),i)},modified:({oldIndex:N,newIndex:P,doc:j})=>{const W=Et(p),ce=I[N],ge=W[N],[qe,Se]=Np(j.data(c),ge,ce,o);I.splice(P,0,ce),n.remove(W,N),n.add(W,P,qe),xp(o,p,`${h}.${P}`,ce,Se,n,0,r,i)},removed:({oldIndex:N})=>{const P=Et(p);n.remove(P,N),Ou(I.splice(N,1)[0])}};function k(N){const P=N.docChanges(a);if(!y&&P.length){y=!0;let j=0;const W=P.length,ce=Object.create(null);for(let ge=0;ge<W;ge++)ce[P[ge].doc.id]=!0;r=ge=>{ge&&ge.id in ce&&++j>=W&&(l&&(n.set(t,h,Et(p)),p=t),m(Et(p)),r=dr)}}P.forEach(j=>{A[j.type](j)}),P.length||(l&&(n.set(t,h,Et(p)),p=t),r(Et(p)))}return u?yj(e).then(k).catch(i):v=r_(e,k,i),N=>{if(v(),N){const P=typeof N=="function"?N():[];n.set(t,h,P)}I.forEach(Ou)}}function e6(t,e,n,r,i,s){const o=Object.assign({},i_,s),a="value",c=Object.create(null);r=A2(r,()=>$m(t,a));let l=dr;function u(h){h.exists()?Op(o,t,a,h,c,n,0,r,i):(n.set(t,a,null),r(null))}return o.once?DC(e).then(u).catch(i):l=r_(e,u,i),h=>{if(l(),h){const p=typeof h=="function"?h():null;n.set(t,a,p)}Ou(c)}}const i0=Symbol();function UC(t,e){let n=dr;const r=Object.assign({},i_,e),i=Et(t),s=r.target||ct();R2()&&(r.once=!0);const o=Gj(i,r.ssrKey,i0,Tc()),a=o!==i0;a&&(s.value=o);let c=!a;const l=ct(!1),u=ct(),h=mE(),p=Z0();let m=dr;function y(){let A=Et(t);const k=new Promise((N,P)=>{if(n(r.reset),!A)return n=dr,N(null);l.value=c,c=!0,A.converter||(A=A.withConverter(r.converter)),n=(Vm(A)?e6:Zj)(s,A,t6,N,P,r)}).catch(N=>(h.value===k&&(u.value=N),Promise.reject(N))).finally(()=>{h.value===k&&(l.value=!1)});h.value=k}let v=dr;xt(t)&&(v=Hr(t,y)),y(),i&&(m=Yj(h.value,i,r.ssrKey)),jE()&&SE(()=>h.value),p&&F1(I);function I(A=r.reset){v(),m(),n(A)}return Object.defineProperties(s,{error:{get:()=>u},data:{get:()=>s},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>I}})}const t6={set:(t,e,n)=>_2(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function kW(t,e){return UC(t,{target:ct([]),...e})}function BC(t,e){return UC(t,e)}function n6(t){return(e,n)=>{const r=S2(e,n).run(()=>ct(t));ob.set(e,r),k2(r,e)}}function NW(t){return g2?nb(Tc(t)):null}function r6(t,{firebaseApp:e,modules:n=[]}){t.provide(sb,e);for(const r of n)r(e,t)}const i6=sr({__name:"App",setup(t){const e=Fm(),n=sx(),r=ox();return Hr(e,async(i,s)=>{if(!i&&s&&r.meta.requiresAuth)return n.push({name:"login"});if(i&&typeof r.query.redirect=="string")return n.push(r.query.redirect)}),(i,s)=>(gt(),io(Et(nT)))}}),s6="modulepreload",o6=function(t){return"/"+t},s0={},o0=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=o6(s),s in s0)return;s0[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":s6,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var a6=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},jC={},Dn={};let s_;const c6=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Dn.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Dn.getSymbolTotalCodewords=function(e){return c6[e]};Dn.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};Dn.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');s_=e};Dn.isKanjiModeEnabled=function(){return typeof s_<"u"};Dn.toSJIS=function(e){return s_(e)};var Kh={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(Kh);function HC(){this.buffer=[],this.length=0}HC.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var l6=HC;function Hc(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}Hc.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};Hc.prototype.get=function(t,e){return this.data[t*this.size+e]};Hc.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};Hc.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var u6=Hc,WC={};(function(t){const e=Dn.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,s=e(r),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],s=t.getRowColCoords(r),o=s.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([s[a],s[c]]);return i}})(WC);var zC={};const h6=Dn.getSymbolSize,a0=7;zC.getPositions=function(e){const n=h6(e);return[[0,0],[n-a0,0],[0,n-a0]]};var qC={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,c=0,l=null,u=null;for(let h=0;h<s;h++){a=c=0,l=u=null;for(let p=0;p<s;p++){let m=i.get(h,p);m===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=m,a=1),m=i.get(p,h),m===u?c++:(c>=5&&(o+=e.N1+(c-5)),u=m,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},t.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let c=0;c<s-1;c++){const l=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},t.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,c=0;for(let l=0;l<s;l++){a=c=0;for(let u=0;u<s;u++)a=a<<1&2047|i.get(l,u),u>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&o++}return o*e.N3},t.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let c=0;c<o;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function n(r,i,s){switch(r){case t.Patterns.PATTERN000:return(i+s)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return s%3===0;case t.Patterns.PATTERN011:return(i+s)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case t.Patterns.PATTERN101:return i*s%2+i*s%3===0;case t.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case t.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)s.isReserved(c,a)||s.xor(c,a,n(i,c,a))},t.getBestMask=function(i,s){const o=Object.keys(t.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){s(l),t.applyMask(l,i);const u=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(l,i),u<c&&(c=u,a=l)}return a}})(qC);var Gh={};const gi=Kh,wl=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],El=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Gh.getBlocksCount=function(e,n){switch(n){case gi.L:return wl[(e-1)*4+0];case gi.M:return wl[(e-1)*4+1];case gi.Q:return wl[(e-1)*4+2];case gi.H:return wl[(e-1)*4+3];default:return}};Gh.getTotalCodewordsCount=function(e,n){switch(n){case gi.L:return El[(e-1)*4+0];case gi.M:return El[(e-1)*4+1];case gi.Q:return El[(e-1)*4+2];case gi.H:return El[(e-1)*4+3];default:return}};var KC={},Qh={};const La=new Uint8Array(512),xu=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)La[n]=e,xu[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)La[n]=La[n-255]})();Qh.log=function(e){if(e<1)throw new Error("log("+e+")");return xu[e]};Qh.exp=function(e){return La[e]};Qh.mul=function(e,n){return e===0||n===0?0:La[xu[e]+xu[n]]};(function(t){const e=Qh;t.mul=function(r,i){const s=new Uint8Array(r.length+i.length-1);for(let o=0;o<r.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=e.mul(r[o],i[a]);return s},t.mod=function(r,i){let s=new Uint8Array(r);for(;s.length-i.length>=0;){const o=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let s=0;s<r;s++)i=t.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(KC);const GC=KC;function o_(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o_.prototype.initialize=function(e){this.degree=e,this.genPoly=GC.generateECPolynomial(this.degree)};o_.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=GC.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(r,i),s}return r};var d6=o_,QC={},Vi={},a_={};a_.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Rr={};const YC="[0-9]+",f6="[A-Z $%*+\\-./:]+";let fc="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";fc=fc.replace(/u/g,"\\u");const p6="(?:(?![A-Z0-9 $%*+\\-./:]|"+fc+`)(?:.|[\r
]))+`;Rr.KANJI=new RegExp(fc,"g");Rr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Rr.BYTE=new RegExp(p6,"g");Rr.NUMERIC=new RegExp(YC,"g");Rr.ALPHANUMERIC=new RegExp(f6,"g");const m6=new RegExp("^"+fc+"$"),g6=new RegExp("^"+YC+"$"),_6=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Rr.testKanji=function(e){return m6.test(e)};Rr.testNumeric=function(e){return g6.test(e)};Rr.testAlphanumeric=function(e){return _6.test(e)};(function(t){const e=a_,n=Rr;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},t.getBestModeForData=function(s){return n.testNumeric(s)?t.NUMERIC:n.testAlphanumeric(s)?t.ALPHANUMERIC:n.testKanji(s)?t.KANJI:t.BYTE},t.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},t.isValid=function(s){return s&&s.bit&&s.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(s,o){if(t.isValid(s))return s;try{return r(s)}catch{return o}}})(Vi);(function(t){const e=Dn,n=Gh,r=Kh,i=Vi,s=a_,o=7973,a=e.getBCHDigit(o);function c(p,m,y){for(let v=1;v<=40;v++)if(m<=t.getCapacity(v,y,p))return v}function l(p,m){return i.getCharCountIndicator(p,m)+4}function u(p,m){let y=0;return p.forEach(function(v){const I=l(v.mode,m);y+=I+v.getBitsLength()}),y}function h(p,m){for(let y=1;y<=40;y++)if(u(p,y)<=t.getCapacity(y,m,i.MIXED))return y}t.from=function(m,y){return s.isValid(m)?parseInt(m,10):y},t.getCapacity=function(m,y,v){if(!s.isValid(m))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=i.BYTE);const I=e.getSymbolTotalCodewords(m),A=n.getTotalCodewordsCount(m,y),k=(I-A)*8;if(v===i.MIXED)return k;const N=k-l(v,m);switch(v){case i.NUMERIC:return Math.floor(N/10*3);case i.ALPHANUMERIC:return Math.floor(N/11*2);case i.KANJI:return Math.floor(N/13);case i.BYTE:default:return Math.floor(N/8)}},t.getBestVersionForData=function(m,y){let v;const I=r.from(y,r.M);if(Array.isArray(m)){if(m.length>1)return h(m,I);if(m.length===0)return 1;v=m[0]}else v=m;return c(v.mode,v.getLength(),I)},t.getEncodedBits=function(m){if(!s.isValid(m)||m<7)throw new Error("Invalid QR Code version");let y=m<<12;for(;e.getBCHDigit(y)-a>=0;)y^=o<<e.getBCHDigit(y)-a;return m<<12|y}})(QC);var JC={};const Dp=Dn,XC=1335,y6=21522,c0=Dp.getBCHDigit(XC);JC.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;Dp.getBCHDigit(i)-c0>=0;)i^=XC<<Dp.getBCHDigit(i)-c0;return(r<<10|i)^y6};var ZC={};const v6=Vi;function bo(t){this.mode=v6.NUMERIC,this.data=t.toString()}bo.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};bo.prototype.getLength=function(){return this.data.length};bo.prototype.getBitsLength=function(){return bo.getBitsLength(this.data.length)};bo.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const s=this.data.length-n;s>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,s*3+1))};var w6=bo;const E6=Vi,tf=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Io(t){this.mode=E6.ALPHANUMERIC,this.data=t}Io.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Io.prototype.getLength=function(){return this.data.length};Io.prototype.getBitsLength=function(){return Io.getBitsLength(this.data.length)};Io.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=tf.indexOf(this.data[n])*45;r+=tf.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(tf.indexOf(this.data[n]),6)};var T6=Io,b6=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var s=e.charCodeAt(i);if(s>=55296&&s<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(s=(s-55296)*1024+o-56320+65536,i+=1)}if(s<128){n.push(s);continue}if(s<2048){n.push(s>>6|192),n.push(s&63|128);continue}if(s<55296||s>=57344&&s<65536){n.push(s>>12|224),n.push(s>>6&63|128),n.push(s&63|128);continue}if(s>=65536&&s<=1114111){n.push(s>>18|240),n.push(s>>12&63|128),n.push(s>>6&63|128),n.push(s&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const I6=b6,A6=Vi;function Ao(t){this.mode=A6.BYTE,typeof t=="string"&&(t=I6(t)),this.data=new Uint8Array(t)}Ao.getBitsLength=function(e){return e*8};Ao.prototype.getLength=function(){return this.data.length};Ao.prototype.getBitsLength=function(){return Ao.getBitsLength(this.data.length)};Ao.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var C6=Ao;const R6=Vi,S6=Dn;function Co(t){this.mode=R6.KANJI,this.data=t}Co.getBitsLength=function(e){return e*13};Co.prototype.getLength=function(){return this.data.length};Co.prototype.getBitsLength=function(){return Co.getBitsLength(this.data.length)};Co.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=S6.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var P6=Co,eR={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var s={},o={};o[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var c,l,u,h,p,m,y,v,I;!a.empty();){c=a.pop(),l=c.value,h=c.cost,p=n[l]||{};for(u in p)p.hasOwnProperty(u)&&(m=p[u],y=h+m,v=o[u],I=typeof o[u]>"u",(I||v>y)&&(o[u]=y,a.push(u,y),s[u]=l))}if(typeof i<"u"&&typeof o[i]>"u"){var A=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(A)}return s},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],s=r;s;)i.push(s),n[s],s=n[s];return i.reverse(),i},find_path:function(n,r,i){var s=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},s;n=n||{};for(s in r)r.hasOwnProperty(s)&&(i[s]=r[s]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(eR);var k6=eR.exports;(function(t){const e=Vi,n=w6,r=T6,i=C6,s=P6,o=Rr,a=Dn,c=k6;function l(A){return unescape(encodeURIComponent(A)).length}function u(A,k,N){const P=[];let j;for(;(j=A.exec(N))!==null;)P.push({data:j[0],index:j.index,mode:k,length:j[0].length});return P}function h(A){const k=u(o.NUMERIC,e.NUMERIC,A),N=u(o.ALPHANUMERIC,e.ALPHANUMERIC,A);let P,j;return a.isKanjiModeEnabled()?(P=u(o.BYTE,e.BYTE,A),j=u(o.KANJI,e.KANJI,A)):(P=u(o.BYTE_KANJI,e.BYTE,A),j=[]),k.concat(N,P,j).sort(function(ce,ge){return ce.index-ge.index}).map(function(ce){return{data:ce.data,mode:ce.mode,length:ce.length}})}function p(A,k){switch(k){case e.NUMERIC:return n.getBitsLength(A);case e.ALPHANUMERIC:return r.getBitsLength(A);case e.KANJI:return s.getBitsLength(A);case e.BYTE:return i.getBitsLength(A)}}function m(A){return A.reduce(function(k,N){const P=k.length-1>=0?k[k.length-1]:null;return P&&P.mode===N.mode?(k[k.length-1].data+=N.data,k):(k.push(N),k)},[])}function y(A){const k=[];for(let N=0;N<A.length;N++){const P=A[N];switch(P.mode){case e.NUMERIC:k.push([P,{data:P.data,mode:e.ALPHANUMERIC,length:P.length},{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.ALPHANUMERIC:k.push([P,{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.KANJI:k.push([P,{data:P.data,mode:e.BYTE,length:l(P.data)}]);break;case e.BYTE:k.push([{data:P.data,mode:e.BYTE,length:l(P.data)}])}}return k}function v(A,k){const N={},P={start:{}};let j=["start"];for(let W=0;W<A.length;W++){const ce=A[W],ge=[];for(let qe=0;qe<ce.length;qe++){const Se=ce[qe],ht=""+W+qe;ge.push(ht),N[ht]={node:Se,lastCount:0},P[ht]={};for(let Ft=0;Ft<j.length;Ft++){const Qe=j[Ft];N[Qe]&&N[Qe].node.mode===Se.mode?(P[Qe][ht]=p(N[Qe].lastCount+Se.length,Se.mode)-p(N[Qe].lastCount,Se.mode),N[Qe].lastCount+=Se.length):(N[Qe]&&(N[Qe].lastCount=Se.length),P[Qe][ht]=p(Se.length,Se.mode)+4+e.getCharCountIndicator(Se.mode,k))}}j=ge}for(let W=0;W<j.length;W++)P[j[W]].end=0;return{map:P,table:N}}function I(A,k){let N;const P=e.getBestModeForData(A);if(N=e.from(k,P),N!==e.BYTE&&N.bit<P.bit)throw new Error('"'+A+'" cannot be encoded with mode '+e.toString(N)+`.
 Suggested mode is: `+e.toString(P));switch(N===e.KANJI&&!a.isKanjiModeEnabled()&&(N=e.BYTE),N){case e.NUMERIC:return new n(A);case e.ALPHANUMERIC:return new r(A);case e.KANJI:return new s(A);case e.BYTE:return new i(A)}}t.fromArray=function(k){return k.reduce(function(N,P){return typeof P=="string"?N.push(I(P,null)):P.data&&N.push(I(P.data,P.mode)),N},[])},t.fromString=function(k,N){const P=h(k,a.isKanjiModeEnabled()),j=y(P),W=v(j,N),ce=c.find_path(W.map,"start","end"),ge=[];for(let qe=1;qe<ce.length-1;qe++)ge.push(W.table[ce[qe]].node);return t.fromArray(m(ge))},t.rawSplit=function(k){return t.fromArray(h(k,a.isKanjiModeEnabled()))}})(ZC);const Yh=Dn,nf=Kh,N6=l6,O6=u6,x6=WC,D6=zC,Mp=qC,Lp=Gh,M6=d6,Du=QC,L6=JC,$6=Vi,rf=ZC;function V6(t,e){const n=t.size,r=D6.getPositions(e);for(let i=0;i<r.length;i++){const s=r[i][0],o=r[i][1];for(let a=-1;a<=7;a++)if(!(s+a<=-1||n<=s+a))for(let c=-1;c<=7;c++)o+c<=-1||n<=o+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(s+a,o+c,!0,!0):t.set(s+a,o+c,!1,!0))}}function F6(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function U6(t,e){const n=x6.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],s=n[r][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?t.set(i+o,s+a,!0,!0):t.set(i+o,s+a,!1,!0)}}function B6(t,e){const n=t.size,r=Du.getEncodedBits(e);let i,s,o;for(let a=0;a<18;a++)i=Math.floor(a/3),s=a%3+n-8-3,o=(r>>a&1)===1,t.set(i,s,o,!0),t.set(s,i,o,!0)}function sf(t,e,n){const r=t.size,i=L6.getEncodedBits(e,n);let s,o;for(s=0;s<15;s++)o=(i>>s&1)===1,s<6?t.set(s,8,o,!0):s<8?t.set(s+1,8,o,!0):t.set(r-15+s,8,o,!0),s<8?t.set(8,r-s-1,o,!0):s<9?t.set(8,15-s-1+1,o,!0):t.set(8,15-s-1,o,!0);t.set(r-8,8,1,!0)}function j6(t,e){const n=t.size;let r=-1,i=n-1,s=7,o=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(i,a-c)){let l=!1;o<e.length&&(l=(e[o]>>>s&1)===1),t.set(i,a-c,l),s--,s===-1&&(o++,s=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function H6(t,e,n){const r=new N6;n.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),$6.getCharCountIndicator(c.mode,t)),c.write(r)});const i=Yh.getSymbolTotalCodewords(t),s=Lp.getTotalCodewordsCount(t,e),o=(i-s)*8;for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(o-r.getLengthInBits())/8;for(let c=0;c<a;c++)r.put(c%2?17:236,8);return W6(r,t,e)}function W6(t,e,n){const r=Yh.getSymbolTotalCodewords(e),i=Lp.getTotalCodewordsCount(e,n),s=r-i,o=Lp.getBlocksCount(e,n),a=r%o,c=o-a,l=Math.floor(r/o),u=Math.floor(s/o),h=u+1,p=l-u,m=new M6(p);let y=0;const v=new Array(o),I=new Array(o);let A=0;const k=new Uint8Array(t.buffer);for(let ce=0;ce<o;ce++){const ge=ce<c?u:h;v[ce]=k.slice(y,y+ge),I[ce]=m.encode(v[ce]),y+=ge,A=Math.max(A,ge)}const N=new Uint8Array(r);let P=0,j,W;for(j=0;j<A;j++)for(W=0;W<o;W++)j<v[W].length&&(N[P++]=v[W][j]);for(j=0;j<p;j++)for(W=0;W<o;W++)N[P++]=I[W][j];return N}function z6(t,e,n,r){let i;if(Array.isArray(t))i=rf.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const u=rf.rawSplit(t);l=Du.getBestVersionForData(u,n)}i=rf.fromString(t,l||40)}else throw new Error("Invalid data");const s=Du.getBestVersionForData(i,n);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const o=H6(e,n,i),a=Yh.getSymbolSize(e),c=new O6(a);return V6(c,e),F6(c),U6(c,e),sf(c,n,0),e>=7&&B6(c,e),j6(c,o),isNaN(r)&&(r=Mp.getBestMask(c,sf.bind(null,c,n))),Mp.applyMask(r,c),sf(c,n,r),{modules:c,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}jC.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=nf.M,i,s;return typeof n<"u"&&(r=nf.from(n.errorCorrectionLevel,nf.M),i=Du.from(n.version),s=Mp.from(n.maskPattern),n.toSJISFunc&&Yh.setToSJISFunction(n.toSJISFunc)),z6(e,i,r,s)};var tR={},c_={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(s){return[s,s]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,s=r.width&&r.width>=21?r.width:void 0,o=r.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const s=t.getScale(r,i);return Math.floor((r+i.margin*2)*s)},t.qrToImageData=function(r,i,s){const o=i.modules.size,a=i.modules.data,c=t.getScale(o,s),l=Math.floor((o+s.margin*2)*c),u=s.margin*c,h=[s.color.light,s.color.dark];for(let p=0;p<l;p++)for(let m=0;m<l;m++){let y=(p*l+m)*4,v=s.color.light;if(p>=u&&m>=u&&p<l-u&&m<l-u){const I=Math.floor((p-u)/c),A=Math.floor((m-u)/c);v=h[a[I*o+A]?1:0]}r[y++]=v.r,r[y++]=v.g,r[y++]=v.b,r[y]=v.a}}})(c_);(function(t){const e=c_;function n(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(s,o,a){let c=a,l=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=r()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),h=l.getContext("2d"),p=h.createImageData(u,u);return e.qrToImageData(p.data,s,c),n(h,l,u),h.putImageData(p,0,0),l},t.renderToDataURL=function(s,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=t.render(s,o,c),u=c.type||"image/png",h=c.rendererOpts||{};return l.toDataURL(u,h.quality)}})(tR);var nR={};const q6=c_;function l0(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function of(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function K6(t,e,n){let r="",i=0,s=!1,o=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!s&&(s=!0),t[a]?(o++,a>0&&c>0&&t[a-1]||(r+=s?of("M",c+n,.5+l+n):of("m",i,0),i=0,s=!1),c+1<e&&t[a+1]||(r+=of("h",o),o=0)):i++}return r}nR.render=function(e,n,r){const i=q6.getOptions(n),s=e.modules.size,o=e.modules.data,a=s+i.margin*2,c=i.color.light.a?"<path "+l0(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+l0(i.color.dark,"stroke")+' d="'+K6(o,s,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,p),p};const G6=a6,$p=jC,rR=tR,Q6=nR;function l_(t,e,n,r,i){const s=[].slice.call(arguments,1),o=s.length,a=typeof s[o-1]=="function";if(!a&&!G6())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(i=n,n=e,e=r=void 0):o===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(n=e,e=r=void 0):o===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(c,l){try{const u=$p.create(n,r);c(t(u,e,r))}catch(u){l(u)}})}try{const c=$p.create(n,r);i(null,t(c,e,r))}catch(c){i(c)}}$p.create;var Y6=l_.bind(null,rR.render);l_.bind(null,rR.renderToDataURL);l_.bind(null,function(t,e,n){return Q6.render(t,n)});const J6={class:"qrcode"},X6=sr({__name:"QrCode",props:{codeString:{}},setup(t){const e=t,n=ct(null);return gm(()=>{Y6(n.value,e.codeString,{color:{dark:getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-on-background"),light:getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-background")},scale:10})}),(r,i)=>(gt(),yn("div",J6,[Xe("canvas",{ref_key:"canvas",ref:n},null,512)]))}});const iR=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},Z6=iR(X6,[["__scopeId","data-v-8d05d72b"]]),e9=(t,e)=>e.some(n=>t instanceof n);let u0,h0;function t9(){return u0||(u0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n9(){return h0||(h0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sR=new WeakMap,Vp=new WeakMap,oR=new WeakMap,af=new WeakMap,u_=new WeakMap;function r9(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ii(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sR.set(n,t)}).catch(()=>{}),u_.set(e,t),e}function i9(t){if(Vp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Vp.set(t,e)}let Fp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oR.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ii(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function s9(t){Fp=t(Fp)}function o9(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cf(this),e,...n);return oR.set(r,e.sort?e.sort():[e]),Ii(r)}:n9().includes(t)?function(...e){return t.apply(cf(this),e),Ii(sR.get(this))}:function(...e){return Ii(t.apply(cf(this),e))}}function a9(t){return typeof t=="function"?o9(t):(t instanceof IDBTransaction&&i9(t),e9(t,t9())?new Proxy(t,Fp):t)}function Ii(t){if(t instanceof IDBRequest)return r9(t);if(af.has(t))return af.get(t);const e=a9(t);return e!==t&&(af.set(t,e),u_.set(e,t)),e}const cf=t=>u_.get(t);function c9(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ii(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ii(o.result),c.oldVersion,c.newVersion,Ii(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const l9=["get","getKey","getAll","getAllKeys","count"],u9=["put","add","delete","clear"],lf=new Map;function d0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lf.get(e))return lf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=u9.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||l9.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return lf.set(e,s),s}s9(t=>({...t,get:(e,n,r)=>d0(e,n)||t.get(e,n,r),has:(e,n)=>!!d0(e,n)||t.has(e,n)}));const aR="@firebase/installations",h_="0.6.4";/**
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
 */const cR=1e4,lR=`w:${h_}`,uR="FIS_v2",h9="https://firebaseinstallations.googleapis.com/v1",d9=60*60*1e3,f9="installations",p9="Installations";/**
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
 */const m9={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ws=new xi(f9,p9,m9);function hR(t){return t instanceof Hn&&t.code.includes("request-failed")}/**
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
 */function dR({projectId:t}){return`${h9}/projects/${t}/installations`}function fR(t){return{token:t.token,requestStatus:2,expiresIn:_9(t.expiresIn),creationTime:Date.now()}}async function pR(t,e){const r=(await e.json()).error;return ws.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function mR({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function g9(t,{refreshToken:e}){const n=mR(t);return n.append("Authorization",y9(e)),n}async function gR(t){const e=await t();return e.status>=500&&e.status<600?t():e}function _9(t){return Number(t.replace("s","000"))}function y9(t){return`${uR} ${t}`}/**
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
 */async function v9({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=dR(t),i=mR(t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:uR,appId:t.appId,sdkVersion:lR},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await gR(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:fR(l.authToken)}}else throw await pR("Create Installation",c)}/**
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
 */function _R(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function w9(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const E9=/^[cdef][\w-]{21}$/,Up="";function T9(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=b9(t);return E9.test(n)?n:Up}catch{return Up}}function b9(t){return w9(t).substr(0,22)}/**
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
 */function Jh(t){return`${t.appName}!${t.appId}`}/**
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
 */const yR=new Map;function vR(t,e){const n=Jh(t);wR(n,e),I9(n,e)}function wR(t,e){const n=yR.get(t);if(n)for(const r of n)r(e)}function I9(t,e){const n=A9();n&&n.postMessage({key:t,fid:e}),C9()}let ns=null;function A9(){return!ns&&"BroadcastChannel"in self&&(ns=new BroadcastChannel("[Firebase] FID Change"),ns.onmessage=t=>{wR(t.data.key,t.data.fid)}),ns}function C9(){yR.size===0&&ns&&(ns.close(),ns=null)}/**
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
 */const R9="firebase-installations-database",S9=1,Es="firebase-installations-store";let uf=null;function d_(){return uf||(uf=c9(R9,S9,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Es)}}})),uf}async function Mu(t,e){const n=Jh(t),i=(await d_()).transaction(Es,"readwrite"),s=i.objectStore(Es),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&vR(t,e.fid),e}async function ER(t){const e=Jh(t),r=(await d_()).transaction(Es,"readwrite");await r.objectStore(Es).delete(e),await r.done}async function Xh(t,e){const n=Jh(t),i=(await d_()).transaction(Es,"readwrite"),s=i.objectStore(Es),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&vR(t,a.fid),a}/**
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
 */async function f_(t){let e;const n=await Xh(t.appConfig,r=>{const i=P9(r),s=k9(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Up?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function P9(t){const e=t||{fid:T9(),registrationStatus:0};return TR(e)}function k9(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ws.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=N9(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:O9(t)}:{installationEntry:e}}async function N9(t,e){try{const n=await v9(t,e);return Mu(t.appConfig,n)}catch(n){throw hR(n)&&n.customData.serverCode===409?await ER(t.appConfig):await Mu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function O9(t){let e=await f0(t.appConfig);for(;e.registrationStatus===1;)await _R(100),e=await f0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await f_(t);return r||n}return e}function f0(t){return Xh(t,e=>{if(!e)throw ws.create("installation-not-found");return TR(e)})}function TR(t){return x9(t)?{fid:t.fid,registrationStatus:0}:t}function x9(t){return t.registrationStatus===1&&t.registrationTime+cR<Date.now()}/**
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
 */async function D9({appConfig:t,heartbeatServiceProvider:e},n){const r=M9(t,n),i=g9(t,n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:lR,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await gR(()=>fetch(r,a));if(c.ok){const l=await c.json();return fR(l)}else throw await pR("Generate Auth Token",c)}function M9(t,{fid:e}){return`${dR(t)}/${e}/authTokens:generate`}/**
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
 */async function p_(t,e=!1){let n;const r=await Xh(t.appConfig,s=>{if(!bR(s))throw ws.create("not-registered");const o=s.authToken;if(!e&&V9(o))return s;if(o.requestStatus===1)return n=L9(t,e),s;{if(!navigator.onLine)throw ws.create("app-offline");const a=U9(s);return n=$9(t,a),a}});return n?await n:r.authToken}async function L9(t,e){let n=await p0(t.appConfig);for(;n.authToken.requestStatus===1;)await _R(100),n=await p0(t.appConfig);const r=n.authToken;return r.requestStatus===0?p_(t,e):r}function p0(t){return Xh(t,e=>{if(!bR(e))throw ws.create("not-registered");const n=e.authToken;return B9(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function $9(t,e){try{const n=await D9(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Mu(t.appConfig,r),n}catch(n){if(hR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ER(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Mu(t.appConfig,r)}throw n}}function bR(t){return t!==void 0&&t.registrationStatus===2}function V9(t){return t.requestStatus===2&&!F9(t)}function F9(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+d9}function U9(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function B9(t){return t.requestStatus===1&&t.requestTime+cR<Date.now()}/**
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
 */async function j9(t){const e=t,{installationEntry:n,registrationPromise:r}=await f_(e);return r?r.catch(console.error):p_(e).catch(console.error),n.fid}/**
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
 */async function H9(t,e=!1){const n=t;return await W9(n),(await p_(n,e)).token}async function W9(t){const{registrationPromise:e}=await f_(t);e&&await e}/**
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
 */function z9(t){if(!t||!t.options)throw hf("App Configuration");if(!t.name)throw hf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw hf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function hf(t){return ws.create("missing-app-config-values",{valueName:t})}/**
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
 */const IR="installations",q9="installations-internal",K9=t=>{const e=t.getProvider("app").getImmediate(),n=z9(e),r=Is(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},G9=t=>{const e=t.getProvider("app").getImmediate(),n=Is(e,IR).getImmediate();return{getId:()=>j9(n),getToken:i=>H9(n,i)}};function Q9(){Tn(new pn(IR,K9,"PUBLIC")),Tn(new pn(q9,G9,"PRIVATE"))}Q9();Wt(aR,h_);Wt(aR,h_,"esm2017");/**
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
 */const Lu="analytics",Y9="firebase_id",J9="origin",X9=60*1e3,Z9="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",m_="https://www.googletagmanager.com/gtag/js";/**
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
 */const wn=new Lo("@firebase/analytics");/**
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
 */const e3={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nn=new xi("analytics","Analytics",e3);/**
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
 */function t3(t){if(!t.startsWith(m_)){const e=Nn.create("invalid-gtag-resource",{gtagURL:t});return wn.warn(e.message),""}return t}function AR(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function n3(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function r3(t,e){const n=n3("firebase-js-sdk-policy",{createScriptURL:t3}),r=document.createElement("script"),i=`${m_}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function i3(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function s3(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await AR(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){wn.error(a)}t("config",i,s)}async function o3(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await AR(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){wn.error(s)}}function a3(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await o3(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await s3(t,e,n,r,a,c)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){wn.error(a)}}return i}function c3(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=a3(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function l3(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(m_)&&n.src.includes(t))return n;return null}/**
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
 */const u3=30,h3=1e3;class d3{constructor(e={},n=h3){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const CR=new d3;function f3(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function p3(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:f3(r)},s=Z9.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Nn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function m3(t,e=CR,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Nn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Nn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new y3;return setTimeout(async()=>{a.abort()},n!==void 0?n:X9),RR({appId:r,apiKey:i,measurementId:s},o,a,e)}async function RR(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=CR){var s;const{appId:o,measurementId:a}=t;try{await g3(r,e)}catch(c){if(a)return wn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await p3(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!_3(l)){if(i.deleteThrottleMetadata(o),a)return wn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?Gy(n,i.intervalMillis,u3):Gy(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),wn.debug(`Calling attemptFetch again in ${u} millis`),RR(t,h,r,i)}}function g3(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Nn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _3(t){if(!(t instanceof Hn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class y3{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function v3(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function w3(){if(Am())try{await fT()}catch(t){return wn.warn(Nn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return wn.warn(Nn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function E3(t,e,n,r,i,s,o){var a;const c=m3(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&wn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>wn.error(m)),e.push(c);const l=w3().then(m=>{if(m)return r.getId()}),[u,h]=await Promise.all([c,l]);l3(s)||r3(s,u.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[J9]="firebase",p.update=!0,h!=null&&(p[Y9]=h),i("config",u.measurementId,p),u.measurementId}/**
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
 */class T3{constructor(e){this.app=e}_delete(){return delete $a[this.app.options.appId],Promise.resolve()}}let $a={},m0=[];const g0={};let df="dataLayer",b3="gtag",_0,SR,y0=!1;function I3(){const t=[];if(uT()&&t.push("This is a browser extension environment."),yx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Nn.create("invalid-analytics-context",{errorInfo:e});wn.warn(n.message)}}function A3(t,e,n){I3();const r=t.options.appId;if(!r)throw Nn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)wn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nn.create("no-api-key");if($a[r]!=null)throw Nn.create("already-exists",{id:r});if(!y0){i3(df);const{wrappedGtag:s,gtagCore:o}=c3($a,m0,g0,df,b3);SR=s,_0=o,y0=!0}return $a[r]=E3(t,m0,g0,e,_0,df,n),new T3(t)}function C3(t=ah()){t=Lt(t);const e=Is(t,Lu);return e.isInitialized()?e.getImmediate():R3(t)}function R3(t,e={}){const n=Is(t,Lu);if(n.isInitialized()){const i=n.getImmediate();if(Ka(e,n.getOptions()))return i;throw Nn.create("already-initialized")}return n.initialize({options:e})}function S3(t,e,n,r){t=Lt(t),v3(SR,$a[t.app.options.appId],e,n,r).catch(i=>wn.error(i))}const v0="@firebase/analytics",w0="0.10.0";function P3(){Tn(new pn(Lu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return A3(r,i,n)},"PUBLIC")),Tn(new pn("analytics-internal",t,"PRIVATE")),Wt(v0,w0),Wt(v0,w0,"esm2017");function t(e){try{const n=e.getProvider(Lu).getImmediate();return{logEvent:(r,i,s)=>S3(n,r,i,s)}}catch(n){throw Nn.create("interop-component-reg-failed",{reason:n})}}}P3();const k3={apiKey:"AIzaSyBBi5IzyoAfCGZPdIjY_Unn13awXzMY3QQ",authDomain:"presenzapp.firebaseapp.com",projectId:"presenzapp",storageBucket:"presenzapp.appspot.com",messagingSenderId:"121965141290",appId:"1:121965141290:web:5bda310c5531b4849b9253",measurementId:"G-X4JEPSW9DH"},g_=_T(k3),Ll=sj(g_);C3(g_);var PR=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},N3=(t,e,n)=>(PR(t,e,"read from private field"),n?n.call(t):e.get(t)),O3=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},x3=(t,e,n,r)=>(PR(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);const E0=["aztec","code_128","code_39","code_93","codabar","data_matrix","ean_13","ean_8","itf","pdf417","qr_code","upc_a","upc_e","unknown"];function D3(t){if(kR(t))return{width:t.naturalWidth,height:t.naturalHeight};if(NR(t))return{width:t.width.baseVal.value,height:t.height.baseVal.value};if(OR(t))return{width:t.videoWidth,height:t.videoHeight};if(M3(t))return{width:t.width,height:t.height};if(xR(t))return{width:t.width,height:t.height};if(L3(t))return{width:t.width,height:t.height};if(DR(t))return{width:t.displayWidth,height:t.displayHeight};throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.")}function kR(t){try{return t instanceof HTMLImageElement}catch{return!1}}function NR(t){try{return t instanceof SVGImageElement}catch{return!1}}function OR(t){try{return t instanceof HTMLVideoElement}catch{return!1}}function M3(t){try{return t instanceof HTMLCanvasElement}catch{return!1}}function xR(t){try{return t instanceof ImageBitmap}catch{return!1}}function L3(t){try{return t instanceof OffscreenCanvas}catch{return!1}}function DR(t){try{return t instanceof VideoFrame}catch{return!1}}function $3(t){try{return t instanceof Blob}catch{return!1}}function V3(t){try{return t instanceof ImageData}catch{return!1}}function F3(t,e){try{const n=new OffscreenCanvas(t,e);if(n.getContext("2d")instanceof OffscreenCanvasRenderingContext2D)return n;throw void 0}catch{const r=document.createElement("canvas");return r.width=t,r.height=e,r}}async function MR(t){if(kR(t)&&!await j3(t))throw new DOMException("Failed to load or decode HTMLImageElement.","InvalidStateError");if(NR(t)&&!await H3(t))throw new DOMException("Failed to load or decode SVGImageElement.","InvalidStateError");if(DR(t)&&W3(t))throw new DOMException("VideoFrame is closed.","InvalidStateError");if(OR(t)&&(t.readyState===0||t.readyState===1))throw new DOMException("Invalid element or state.","InvalidStateError");if(xR(t)&&q3(t))throw new DOMException("The image source is detached.","InvalidStateError");const{width:e,height:n}=D3(t);if(e===0||n===0)return null;const r=F3(e,n).getContext("2d");r.drawImage(t,0,0);try{return r.getImageData(0,0,e,n)}catch{throw new DOMException("Source would taint origin.","SecurityError")}}async function U3(t){let e;try{e=await createImageBitmap(t)}catch{throw new DOMException("Failed to load or decode Blob.","InvalidStateError")}return await MR(e)}async function B3(t){if($3(t))return await U3(t);if(V3(t)){if(z3(t))throw new DOMException("The image data has been detached.","InvalidStateError");return t}return await MR(t)}async function j3(t){try{return await t.decode(),!0}catch{return!1}}async function H3(t){var e;try{return await((e=t.decode)==null?void 0:e.call(t)),!0}catch{return!1}}function W3(t){return t.format===null}function z3(t){return t.data.buffer.byteLength===0}function q3(t){return t.width===0&&t.height===0}function T0(t,e){return t instanceof DOMException?new DOMException(`${e}: ${t.message}`,t.name):t instanceof Error?new t.constructor(`${e}: ${t.message}`):new Error(`${e}: ${t}`)}const b0=t=>{let e;const n=new Set,r=(o,a)=>{const c=typeof o=="function"?o(e):o;if(!Object.is(c,e)){const l=e;e=a??typeof c!="object"?c:Object.assign({},e,c),n.forEach(u=>u(e,l))}},i=()=>e,s={setState:r,getState:i,subscribe:o=>(n.add(o),()=>n.delete(o)),destroy:()=>{n.clear()}};return e=t(r,i,s),s},K3=t=>t?b0(t):b0,G3={locateFile:(t,e)=>{var n;const r=(n=t.match(/_(.+?)\.wasm$/))==null?void 0:n[1];return r?`https://cdn.jsdelivr.net/npm/@sec-ant/zxing-wasm@2.1.3/dist/${r}/${t}`:e+t}},wa=K3()(()=>({zxingModuleWeakMap:new WeakMap,zxingModuleOverrides:G3}));function LR(t,e=wa.getState().zxingModuleOverrides){const{zxingModuleWeakMap:n}=wa.getState(),r=n.get(t);if(r&&Object.is(e,wa.getState().zxingModuleOverrides))return r;{wa.setState({zxingModuleOverrides:e});const i=t(e);return n.set(t,i),i}}const I0=["Aztec","Codabar","Code128","Code39","Code93","DataBar","DataBarExpanded","DataMatrix","EAN-13","EAN-8","ITF","Linear-Codes","Matrix-Codes","MaxiCode","MicroQRCode","None","PDF417","QRCode","UPC-A","UPC-E"],_i={tryHarder:!0,formats:[],maxSymbols:255};async function Q3(t,{tryHarder:e=_i.tryHarder,formats:n=_i.formats,maxSymbols:r=_i.maxSymbols}=_i,i){const s=await LR(i,wa.getState().zxingModuleOverrides),{data:o,width:a,height:c,data:{byteLength:l}}=t,u=s._malloc(l);s.HEAP8.set(o,u);const h=s.readBarcodesFromPixmap(u,a,c,e,Y3(n),r);s._free(u);const p=[];for(let m=0;m<h.size();++m){const y=h.get(m);p.push({...y,format:J3(y.format)})}return p}function Y3(t){return t.join("|")}function J3(t){const e=A0(t);let n=0,r=I0.length-1;for(;n<=r;){const i=Math.floor((n+r)/2),s=I0[i],o=A0(s);if(o===e)return s;o<e?n=i+1:r=i-1}return"None"}function A0(t){return t.toLowerCase().replace(/_-\[\]/g,"")}var $R=(()=>{var t=import.meta.url;return function(e={}){var n=e,r,i;n.ready=new Promise((d,f)=>{r=d,i=f});var s=Object.assign({},n),o="./this.program",a=typeof window=="object",c=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var l="";function u(d){return n.locateFile?n.locateFile(d,l):l+d}var h;(a||c)&&(c?l=self.location.href:typeof document<"u"&&document.currentScript&&(l=document.currentScript.src),t&&(l=t),l.indexOf("blob:")!==0?l=l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):l="",c&&(h=d=>{var f=new XMLHttpRequest;return f.open("GET",d,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)})),n.print||console.log.bind(console);var p=n.printErr||console.error.bind(console);Object.assign(n,s),s=null,n.arguments&&n.arguments,n.thisProgram&&(o=n.thisProgram),n.quit&&n.quit;var m;n.wasmBinary&&(m=n.wasmBinary),n.noExitRuntime,typeof WebAssembly!="object"&&zn("no native wasm support detected");var y,v,I=!1,A,k,N,P,j,W,ce,ge;function qe(){var d=y.buffer;n.HEAP8=A=new Int8Array(d),n.HEAP16=N=new Int16Array(d),n.HEAP32=j=new Int32Array(d),n.HEAPU8=k=new Uint8Array(d),n.HEAPU16=P=new Uint16Array(d),n.HEAPU32=W=new Uint32Array(d),n.HEAPF32=ce=new Float32Array(d),n.HEAPF64=ge=new Float64Array(d)}var Se,ht=[],Ft=[],Qe=[];function kr(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)Ve(n.preRun.shift());E(ht)}function ln(){E(Ft)}function He(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)An(n.postRun.shift());E(Qe)}function Ve(d){ht.unshift(d)}function be(d){Ft.unshift(d)}function An(d){Qe.unshift(d)}var It=0,At=null;function Ct(d){It++,n.monitorRunDependencies&&n.monitorRunDependencies(It)}function ti(d){if(It--,n.monitorRunDependencies&&n.monitorRunDependencies(It),It==0&&At){var f=At;At=null,f()}}function zn(d){n.onAbort&&n.onAbort(d),d="Aborted("+d+")",p(d),I=!0,d+=". Build with -sASSERTIONS for more info.";var f=new WebAssembly.RuntimeError(d);throw i(f),f}var Os="data:application/octet-stream;base64,";function vt(d){return d.startsWith(Os)}var x;n.locateFile?(x="zxing_reader.wasm",vt(x)||(x=u(x))):x=new URL("/reader/zxing_reader.wasm",self.location).href;function J(d){if(d==x&&m)return new Uint8Array(m);if(h)return h(d);throw"both async and sync fetching of the wasm failed"}function q(d){return!m&&(a||c)&&typeof fetch=="function"?fetch(d,{credentials:"same-origin"}).then(f=>{if(!f.ok)throw"failed to load wasm binary file at '"+d+"'";return f.arrayBuffer()}).catch(()=>J(d)):Promise.resolve().then(()=>J(d))}function ne(d,f,g){return q(d).then(_=>WebAssembly.instantiate(_,f)).then(_=>_).then(g,_=>{p("failed to asynchronously prepare wasm: "+_),zn(_)})}function De(d,f,g,_){return!d&&typeof WebAssembly.instantiateStreaming=="function"&&!vt(f)&&typeof fetch=="function"?fetch(f,{credentials:"same-origin"}).then(T=>{var b=WebAssembly.instantiateStreaming(T,g);return b.then(_,function(R){return p("wasm streaming compile failed: "+R),p("falling back to ArrayBuffer instantiation"),ne(f,g,_)})}):ne(f,g,_)}function w(){var d={a:KP};function f(_,T){var b=_.exports;return v=b,y=v.qa,qe(),Se=v.ua,be(v.ra),ti(),b}Ct();function g(_){f(_.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(d,f)}catch(_){p("Module.instantiateWasm callback failed with error: "+_),i(_)}return De(m,x,d,g).catch(i),{}}var E=d=>{for(;d.length>0;)d.shift()(n)},C=[],O=0;function M(d){var f=new H(d);return f.get_caught()||(f.set_caught(!0),O--),f.set_rethrown(!1),C.push(f),z_(f.excPtr),f.get_exception_ptr()}var L=0;function Q(){Ie(0,0);var d=C.pop();W_(d.excPtr),L=0}function H(d){this.excPtr=d,this.ptr=d-24,this.set_type=function(f){W[this.ptr+4>>2]=f},this.get_type=function(){return W[this.ptr+4>>2]},this.set_destructor=function(f){W[this.ptr+8>>2]=f},this.get_destructor=function(){return W[this.ptr+8>>2]},this.set_caught=function(f){f=f?1:0,A[this.ptr+12>>0]=f},this.get_caught=function(){return A[this.ptr+12>>0]!=0},this.set_rethrown=function(f){f=f?1:0,A[this.ptr+13>>0]=f},this.get_rethrown=function(){return A[this.ptr+13>>0]!=0},this.init=function(f,g){this.set_adjusted_ptr(0),this.set_type(f),this.set_destructor(g)},this.set_adjusted_ptr=function(f){W[this.ptr+16>>2]=f},this.get_adjusted_ptr=function(){return W[this.ptr+16>>2]},this.get_exception_ptr=function(){var f=K_(this.get_type());if(f)return W[this.excPtr>>2];var g=this.get_adjusted_ptr();return g!==0?g:this.excPtr}}function z(d){throw L||(L=d),L}var $=d=>{var f=L;if(!f)return Xo(0),0;var g=new H(f);g.set_adjusted_ptr(f);var _=g.get_type();if(!_)return Xo(0),f;for(var T in d){var b=d[T];if(b===0||b===_)break;var R=g.ptr+16;if(q_(b,_,R))return Xo(b),f}return Xo(_),f},re=()=>$([]),X=d=>$([d]),ie=(d,f)=>$([d,f]);function he(d){var f=new H(d).get_exception_ptr();return f}function we(){var d=C.pop();d||zn("no exception to throw");var f=d.excPtr;throw d.get_rethrown()||(C.push(d),d.set_rethrown(!0),d.set_caught(!1),O++),L=f,L}function Ke(d,f,g){var _=new H(d);throw _.init(f,g),L=d,O++,L}function Be(){return O}var Ye={};function gn(d){for(;d.length;){var f=d.pop(),g=d.pop();g(f)}}function Mn(d){return this.fromWireType(j[d>>2])}var Nr={},Cn={},Bi={},qt=void 0;function un(d){throw new qt(d)}function ar(d,f,g){d.forEach(function(S){Bi[S]=f});function _(S){var D=g(S);D.length!==d.length&&un("Mismatched type converter count");for(var F=0;F<d.length;++F)Or(d[F],D[F])}var T=new Array(f.length),b=[],R=0;f.forEach((S,D)=>{Cn.hasOwnProperty(S)?T[D]=Cn[S]:(b.push(S),Nr.hasOwnProperty(S)||(Nr[S]=[]),Nr[S].push(()=>{T[D]=Cn[S],++R,R===b.length&&_(T)}))}),b.length===0&&_(T)}var yS=function(d){var f=Ye[d];delete Ye[d];var g=f.rawConstructor,_=f.rawDestructor,T=f.fields,b=T.map(R=>R.getterReturnType).concat(T.map(R=>R.setterArgumentType));ar([d],b,R=>{var S={};return T.forEach((D,F)=>{var Y=D.fieldName,oe=R[F],le=D.getter,Ne=D.getterContext,it=R[F+T.length],Rt=D.setter,st=D.setterContext;S[Y]={read:St=>oe.fromWireType(le(Ne,St)),write:(St,U)=>{var Z=[];Rt(st,St,it.toWireType(Z,U)),gn(Z)}}}),[{name:f.name,fromWireType:function(D){var F={};for(var Y in S)F[Y]=S[Y].read(D);return _(D),F},toWireType:function(D,F){for(var Y in S)if(!(Y in F))throw new TypeError(`Missing field: "${Y}"`);var oe=g();for(Y in S)S[Y].write(oe,F[Y]);return D!==null&&D.push(_,oe),oe},argPackAdvance:8,readValueFromPointer:Mn,destructorFunction:_}]})};function vS(d,f,g,_,T){}function id(d){switch(d){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${d}`)}}function wS(){for(var d=new Array(256),f=0;f<256;++f)d[f]=String.fromCharCode(f);w_=d}var w_=void 0;function Kt(d){for(var f="",g=d;k[g];)f+=w_[k[g++]];return f}var xs=void 0;function Me(d){throw new xs(d)}function ES(d,f,g={}){var _=f.name;if(d||Me(`type "${_}" must have a positive integer typeid pointer`),Cn.hasOwnProperty(d)){if(g.ignoreDuplicateRegistrations)return;Me(`Cannot register type '${_}' twice`)}if(Cn[d]=f,delete Bi[d],Nr.hasOwnProperty(d)){var T=Nr[d];delete Nr[d],T.forEach(b=>b())}}function Or(d,f,g={}){if(!("argPackAdvance"in f))throw new TypeError("registerType registeredInstance requires argPackAdvance");return ES(d,f,g)}function TS(d,f,g,_,T){var b=id(g);f=Kt(f),Or(d,{name:f,fromWireType:function(R){return!!R},toWireType:function(R,S){return S?_:T},argPackAdvance:8,readValueFromPointer:function(R){var S;if(g===1)S=A;else if(g===2)S=N;else if(g===4)S=j;else throw new TypeError("Unknown boolean type size: "+f);return this.fromWireType(S[R>>b])},destructorFunction:null})}function bS(d){if(!(this instanceof ni)||!(d instanceof ni))return!1;for(var f=this.$$.ptrType.registeredClass,g=this.$$.ptr,_=d.$$.ptrType.registeredClass,T=d.$$.ptr;f.baseClass;)g=f.upcast(g),f=f.baseClass;for(;_.baseClass;)T=_.upcast(T),_=_.baseClass;return f===_&&g===T}function IS(d){return{count:d.count,deleteScheduled:d.deleteScheduled,preservePointerOnDelete:d.preservePointerOnDelete,ptr:d.ptr,ptrType:d.ptrType,smartPtr:d.smartPtr,smartPtrType:d.smartPtrType}}function sd(d){function f(g){return g.$$.ptrType.registeredClass.name}Me(f(d)+" instance already deleted")}var od=!1;function E_(d){}function AS(d){d.smartPtr?d.smartPtrType.rawDestructor(d.smartPtr):d.ptrType.registeredClass.rawDestructor(d.ptr)}function T_(d){d.count.value-=1;var f=d.count.value===0;f&&AS(d)}function b_(d,f,g){if(f===g)return d;if(g.baseClass===void 0)return null;var _=b_(d,f,g.baseClass);return _===null?null:g.downcast(_)}var I_={};function CS(){return Object.keys(Qo).length}function RS(){var d=[];for(var f in Qo)Qo.hasOwnProperty(f)&&d.push(Qo[f]);return d}var Ko=[];function ad(){for(;Ko.length;){var d=Ko.pop();d.$$.deleteScheduled=!1,d.delete()}}var Go=void 0;function SS(d){Go=d,Ko.length&&Go&&Go(ad)}function PS(){n.getInheritedInstanceCount=CS,n.getLiveInheritedInstances=RS,n.flushPendingDeletes=ad,n.setDelayFunction=SS}var Qo={};function kS(d,f){for(f===void 0&&Me("ptr should not be undefined");d.baseClass;)f=d.upcast(f),d=d.baseClass;return f}function NS(d,f){return f=kS(d,f),Qo[f]}function qc(d,f){(!f.ptrType||!f.ptr)&&un("makeClassHandle requires ptr and ptrType");var g=!!f.smartPtrType,_=!!f.smartPtr;return g!==_&&un("Both smartPtrType and smartPtr must be specified"),f.count={value:1},Yo(Object.create(d,{$$:{value:f}}))}function OS(d){var f=this.getPointee(d);if(!f)return this.destructor(d),null;var g=NS(this.registeredClass,f);if(g!==void 0){if(g.$$.count.value===0)return g.$$.ptr=f,g.$$.smartPtr=d,g.clone();var _=g.clone();return this.destructor(d),_}function T(){return this.isSmartPointer?qc(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:f,smartPtrType:this,smartPtr:d}):qc(this.registeredClass.instancePrototype,{ptrType:this,ptr:d})}var b=this.registeredClass.getActualType(f),R=I_[b];if(!R)return T.call(this);var S;this.isConst?S=R.constPointerType:S=R.pointerType;var D=b_(f,this.registeredClass,S.registeredClass);return D===null?T.call(this):this.isSmartPointer?qc(S.registeredClass.instancePrototype,{ptrType:S,ptr:D,smartPtrType:this,smartPtr:d}):qc(S.registeredClass.instancePrototype,{ptrType:S,ptr:D})}var Yo=function(d){return typeof FinalizationRegistry>"u"?(Yo=f=>f,d):(od=new FinalizationRegistry(f=>{T_(f.$$)}),Yo=f=>{var g=f.$$,_=!!g.smartPtr;if(_){var T={$$:g};od.register(f,T,f)}return f},E_=f=>od.unregister(f),Yo(d))};function xS(){if(this.$$.ptr||sd(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var d=Yo(Object.create(Object.getPrototypeOf(this),{$$:{value:IS(this.$$)}}));return d.$$.count.value+=1,d.$$.deleteScheduled=!1,d}function DS(){this.$$.ptr||sd(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Me("Object already scheduled for deletion"),E_(this),T_(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function MS(){return!this.$$.ptr}function LS(){return this.$$.ptr||sd(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Me("Object already scheduled for deletion"),Ko.push(this),Ko.length===1&&Go&&Go(ad),this.$$.deleteScheduled=!0,this}function $S(){ni.prototype.isAliasOf=bS,ni.prototype.clone=xS,ni.prototype.delete=DS,ni.prototype.isDeleted=MS,ni.prototype.deleteLater=LS}function ni(){}var VS=48,FS=57;function A_(d){if(d===void 0)return"_unknown";d=d.replace(/[^a-zA-Z0-9_]/g,"$");var f=d.charCodeAt(0);return f>=VS&&f<=FS?`_${d}`:d}function C_(d,f){return d=A_(d),{[d]:function(){return f.apply(this,arguments)}}[d]}function R_(d,f,g){if(d[f].overloadTable===void 0){var _=d[f];d[f]=function(){return d[f].overloadTable.hasOwnProperty(arguments.length)||Me(`Function '${g}' called with an invalid number of arguments (${arguments.length}) - expects one of (${d[f].overloadTable})!`),d[f].overloadTable[arguments.length].apply(this,arguments)},d[f].overloadTable=[],d[f].overloadTable[_.argCount]=_}}function S_(d,f,g){n.hasOwnProperty(d)?((g===void 0||n[d].overloadTable!==void 0&&n[d].overloadTable[g]!==void 0)&&Me(`Cannot register public name '${d}' twice`),R_(n,d,d),n.hasOwnProperty(g)&&Me(`Cannot register multiple overloads of a function with the same number of arguments (${g})!`),n[d].overloadTable[g]=f):(n[d]=f,g!==void 0&&(n[d].numArguments=g))}function US(d,f,g,_,T,b,R,S){this.name=d,this.constructor=f,this.instancePrototype=g,this.rawDestructor=_,this.baseClass=T,this.getActualType=b,this.upcast=R,this.downcast=S,this.pureVirtualFunctions=[]}function cd(d,f,g){for(;f!==g;)f.upcast||Me(`Expected null or instance of ${g.name}, got an instance of ${f.name}`),d=f.upcast(d),f=f.baseClass;return d}function BS(d,f){if(f===null)return this.isReference&&Me(`null is not a valid ${this.name}`),0;f.$$||Me(`Cannot pass "${hd(f)}" as a ${this.name}`),f.$$.ptr||Me(`Cannot pass deleted object as a pointer of type ${this.name}`);var g=f.$$.ptrType.registeredClass,_=cd(f.$$.ptr,g,this.registeredClass);return _}function jS(d,f){var g;if(f===null)return this.isReference&&Me(`null is not a valid ${this.name}`),this.isSmartPointer?(g=this.rawConstructor(),d!==null&&d.push(this.rawDestructor,g),g):0;f.$$||Me(`Cannot pass "${hd(f)}" as a ${this.name}`),f.$$.ptr||Me(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&f.$$.ptrType.isConst&&Me(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);var _=f.$$.ptrType.registeredClass;if(g=cd(f.$$.ptr,_,this.registeredClass),this.isSmartPointer)switch(f.$$.smartPtr===void 0&&Me("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:f.$$.smartPtrType===this?g=f.$$.smartPtr:Me(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:g=f.$$.smartPtr;break;case 2:if(f.$$.smartPtrType===this)g=f.$$.smartPtr;else{var T=f.clone();g=this.rawShare(g,ri.toHandle(function(){T.delete()})),d!==null&&d.push(this.rawDestructor,g)}break;default:Me("Unsupporting sharing policy")}return g}function HS(d,f){if(f===null)return this.isReference&&Me(`null is not a valid ${this.name}`),0;f.$$||Me(`Cannot pass "${hd(f)}" as a ${this.name}`),f.$$.ptr||Me(`Cannot pass deleted object as a pointer of type ${this.name}`),f.$$.ptrType.isConst&&Me(`Cannot convert argument of type ${f.$$.ptrType.name} to parameter type ${this.name}`);var g=f.$$.ptrType.registeredClass,_=cd(f.$$.ptr,g,this.registeredClass);return _}function WS(d){return this.rawGetPointee&&(d=this.rawGetPointee(d)),d}function zS(d){this.rawDestructor&&this.rawDestructor(d)}function qS(d){d!==null&&d.delete()}function KS(){xr.prototype.getPointee=WS,xr.prototype.destructor=zS,xr.prototype.argPackAdvance=8,xr.prototype.readValueFromPointer=Mn,xr.prototype.deleteObject=qS,xr.prototype.fromWireType=OS}function xr(d,f,g,_,T,b,R,S,D,F,Y){this.name=d,this.registeredClass=f,this.isReference=g,this.isConst=_,this.isSmartPointer=T,this.pointeeType=b,this.sharingPolicy=R,this.rawGetPointee=S,this.rawConstructor=D,this.rawShare=F,this.rawDestructor=Y,!T&&f.baseClass===void 0?_?(this.toWireType=BS,this.destructorFunction=null):(this.toWireType=HS,this.destructorFunction=null):this.toWireType=jS}function P_(d,f,g){n.hasOwnProperty(d)||un("Replacing nonexistant public symbol"),n[d].overloadTable!==void 0&&g!==void 0?n[d].overloadTable[g]=f:(n[d]=f,n[d].argCount=g)}var GS=(d,f,g)=>{var _=n["dynCall_"+d];return g&&g.length?_.apply(null,[f].concat(g)):_.call(null,f)},Kc=[],Le=d=>{var f=Kc[d];return f||(d>=Kc.length&&(Kc.length=d+1),Kc[d]=f=Se.get(d)),f},QS=(d,f,g)=>{if(d.includes("j"))return GS(d,f,g);var _=Le(f).apply(null,g);return _},YS=(d,f)=>{var g=[];return function(){return g.length=0,Object.assign(g,arguments),QS(d,f,g)}};function qn(d,f){d=Kt(d);function g(){return d.includes("j")?YS(d,f):Le(f)}var _=g();return typeof _!="function"&&Me(`unknown function pointer with signature ${d}: ${f}`),_}function JS(d,f){var g=C_(f,function(_){this.name=f,this.message=_;var T=new Error(_).stack;T!==void 0&&(this.stack=this.toString()+`
`+T.replace(/^Error(:[^\n]*)?\n/,""))});return g.prototype=Object.create(d.prototype),g.prototype.constructor=g,g.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},g}var k_=void 0;function N_(d){var f=H_(d),g=Kt(f);return Dr(f),g}function Gc(d,f){var g=[],_={};function T(b){if(!_[b]&&!Cn[b]){if(Bi[b]){Bi[b].forEach(T);return}g.push(b),_[b]=!0}}throw f.forEach(T),new k_(`${d}: `+g.map(N_).join([", "]))}function XS(d,f,g,_,T,b,R,S,D,F,Y,oe,le){Y=Kt(Y),b=qn(T,b),S&&(S=qn(R,S)),F&&(F=qn(D,F)),le=qn(oe,le);var Ne=A_(Y);S_(Ne,function(){Gc(`Cannot construct ${Y} due to unbound types`,[_])}),ar([d,f,g],_?[_]:[],function(it){it=it[0];var Rt,st;_?(Rt=it.registeredClass,st=Rt.instancePrototype):st=ni.prototype;var St=C_(Ne,function(){if(Object.getPrototypeOf(this)!==U)throw new xs("Use 'new' to construct "+Y);if(Z.constructor_body===void 0)throw new xs(Y+" has no accessible constructor");var Jc=Z.constructor_body[arguments.length];if(Jc===void 0)throw new xs(`Tried to invoke ctor of ${Y} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(Z.constructor_body).toString()}) parameters instead!`);return Jc.apply(this,arguments)}),U=Object.create(st,{constructor:{value:St}});St.prototype=U;var Z=new US(Y,St,U,le,Rt,b,S,F);Z.baseClass&&(Z.baseClass.__derivedClasses===void 0&&(Z.baseClass.__derivedClasses=[]),Z.baseClass.__derivedClasses.push(Z));var dt=new xr(Y,Z,!0,!1,!1),wt=new xr(Y+"*",Z,!1,!1,!1),ji=new xr(Y+" const*",Z,!1,!0,!1);return I_[d]={pointerType:wt,constPointerType:ji},P_(Ne,St),[dt,wt,ji]})}function ld(d,f){for(var g=[],_=0;_<d;_++)g.push(W[f+_*4>>2]);return g}function ud(d,f,g,_,T,b){var R=f.length;R<2&&Me("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var S=f[1]!==null&&g!==null,D=!1,F=1;F<f.length;++F)if(f[F]!==null&&f[F].destructorFunction===void 0){D=!0;break}var Y=f[0].name!=="void",oe=R-2,le=new Array(oe),Ne=[],it=[];return function(){arguments.length!==oe&&Me(`function ${d} called with ${arguments.length} arguments, expected ${oe} args!`),it.length=0;var Rt;Ne.length=S?2:1,Ne[0]=T,S&&(Rt=f[1].toWireType(it,this),Ne[1]=Rt);for(var st=0;st<oe;++st)le[st]=f[st+2].toWireType(it,arguments[st]),Ne.push(le[st]);var St=_.apply(null,Ne);function U(Z){if(D)gn(it);else for(var dt=S?1:2;dt<f.length;dt++){var wt=dt===1?Rt:le[dt-2];f[dt].destructorFunction!==null&&f[dt].destructorFunction(wt)}if(Y)return f[0].fromWireType(Z)}return U(St)}}function ZS(d,f,g,_,T,b){var R=ld(f,g);T=qn(_,T),ar([],[d],function(S){S=S[0];var D=`constructor ${S.name}`;if(S.registeredClass.constructor_body===void 0&&(S.registeredClass.constructor_body=[]),S.registeredClass.constructor_body[f-1]!==void 0)throw new xs(`Cannot register multiple constructors with identical number of parameters (${f-1}) for class '${S.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return S.registeredClass.constructor_body[f-1]=()=>{Gc(`Cannot construct ${S.name} due to unbound types`,R)},ar([],R,function(F){return F.splice(1,0,null),S.registeredClass.constructor_body[f-1]=ud(D,F,null,T,b),[]}),[]})}function eP(d,f,g,_,T,b,R,S,D){var F=ld(g,_);f=Kt(f),b=qn(T,b),ar([],[d],function(Y){Y=Y[0];var oe=`${Y.name}.${f}`;f.startsWith("@@")&&(f=Symbol[f.substring(2)]),S&&Y.registeredClass.pureVirtualFunctions.push(f);function le(){Gc(`Cannot call ${oe} due to unbound types`,F)}var Ne=Y.registeredClass.instancePrototype,it=Ne[f];return it===void 0||it.overloadTable===void 0&&it.className!==Y.name&&it.argCount===g-2?(le.argCount=g-2,le.className=Y.name,Ne[f]=le):(R_(Ne,f,oe),Ne[f].overloadTable[g-2]=le),ar([],F,function(Rt){var st=ud(oe,Rt,Y,b,R);return Ne[f].overloadTable===void 0?(st.argCount=g-2,Ne[f]=st):Ne[f].overloadTable[g-2]=st,[]}),[]})}function tP(){Object.assign(O_.prototype,{get(d){return this.allocated[d]},has(d){return this.allocated[d]!==void 0},allocate(d){var f=this.freelist.pop()||this.allocated.length;return this.allocated[f]=d,f},free(d){this.allocated[d]=void 0,this.freelist.push(d)}})}function O_(){this.allocated=[void 0],this.freelist=[]}var Ln=new O_;function x_(d){d>=Ln.reserved&&--Ln.get(d).refcount===0&&Ln.free(d)}function nP(){for(var d=0,f=Ln.reserved;f<Ln.allocated.length;++f)Ln.allocated[f]!==void 0&&++d;return d}function rP(){Ln.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),Ln.reserved=Ln.allocated.length,n.count_emval_handles=nP}var ri={toValue:d=>(d||Me("Cannot use deleted val. handle = "+d),Ln.get(d).value),toHandle:d=>{switch(d){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Ln.allocate({refcount:1,value:d})}}};function iP(d,f){f=Kt(f),Or(d,{name:f,fromWireType:function(g){var _=ri.toValue(g);return x_(g),_},toWireType:function(g,_){return ri.toHandle(_)},argPackAdvance:8,readValueFromPointer:Mn,destructorFunction:null})}function hd(d){if(d===null)return"null";var f=typeof d;return f==="object"||f==="array"||f==="function"?d.toString():""+d}function sP(d,f){switch(f){case 2:return function(g){return this.fromWireType(ce[g>>2])};case 3:return function(g){return this.fromWireType(ge[g>>3])};default:throw new TypeError("Unknown float type: "+d)}}function oP(d,f,g){var _=id(g);f=Kt(f),Or(d,{name:f,fromWireType:function(T){return T},toWireType:function(T,b){return b},argPackAdvance:8,readValueFromPointer:sP(f,_),destructorFunction:null})}function aP(d,f,g,_,T,b,R){var S=ld(f,g);d=Kt(d),T=qn(_,T),S_(d,function(){Gc(`Cannot call ${d} due to unbound types`,S)},f-1),ar([],S,function(D){var F=[D[0],null].concat(D.slice(1));return P_(d,ud(d,F,null,T,b),f-1),[]})}function cP(d,f,g){switch(f){case 0:return g?function(_){return A[_]}:function(_){return k[_]};case 1:return g?function(_){return N[_>>1]}:function(_){return P[_>>1]};case 2:return g?function(_){return j[_>>2]}:function(_){return W[_>>2]};default:throw new TypeError("Unknown integer type: "+d)}}function lP(d,f,g,_,T){f=Kt(f);var b=id(g),R=oe=>oe;if(_===0){var S=32-8*g;R=oe=>oe<<S>>>S}var D=f.includes("unsigned"),F=(oe,le)=>{},Y;D?Y=function(oe,le){return F(le,this.name),le>>>0}:Y=function(oe,le){return F(le,this.name),le},Or(d,{name:f,fromWireType:R,toWireType:Y,argPackAdvance:8,readValueFromPointer:cP(f,b,_!==0),destructorFunction:null})}function uP(d,f,g){var _=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],T=_[f];function b(R){R=R>>2;var S=W,D=S[R],F=S[R+1];return new T(S.buffer,F,D)}g=Kt(g),Or(d,{name:g,fromWireType:b,argPackAdvance:8,readValueFromPointer:b},{ignoreDuplicateRegistrations:!0})}var D_=(d,f,g,_)=>{if(!(_>0))return 0;for(var T=g,b=g+_-1,R=0;R<d.length;++R){var S=d.charCodeAt(R);if(S>=55296&&S<=57343){var D=d.charCodeAt(++R);S=65536+((S&1023)<<10)|D&1023}if(S<=127){if(g>=b)break;f[g++]=S}else if(S<=2047){if(g+1>=b)break;f[g++]=192|S>>6,f[g++]=128|S&63}else if(S<=65535){if(g+2>=b)break;f[g++]=224|S>>12,f[g++]=128|S>>6&63,f[g++]=128|S&63}else{if(g+3>=b)break;f[g++]=240|S>>18,f[g++]=128|S>>12&63,f[g++]=128|S>>6&63,f[g++]=128|S&63}}return f[g]=0,g-T},hP=(d,f,g)=>D_(d,k,f,g),M_=d=>{for(var f=0,g=0;g<d.length;++g){var _=d.charCodeAt(g);_<=127?f++:_<=2047?f+=2:_>=55296&&_<=57343?(f+=4,++g):f+=3}return f},L_=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,dP=(d,f,g)=>{for(var _=f+g,T=f;d[T]&&!(T>=_);)++T;if(T-f>16&&d.buffer&&L_)return L_.decode(d.subarray(f,T));for(var b="";f<T;){var R=d[f++];if(!(R&128)){b+=String.fromCharCode(R);continue}var S=d[f++]&63;if((R&224)==192){b+=String.fromCharCode((R&31)<<6|S);continue}var D=d[f++]&63;if((R&240)==224?R=(R&15)<<12|S<<6|D:R=(R&7)<<18|S<<12|D<<6|d[f++]&63,R<65536)b+=String.fromCharCode(R);else{var F=R-65536;b+=String.fromCharCode(55296|F>>10,56320|F&1023)}}return b},dd=(d,f)=>d?dP(k,d,f):"";function fP(d,f){f=Kt(f);var g=f==="std::string";Or(d,{name:f,fromWireType:function(_){var T=W[_>>2],b=_+4,R;if(g)for(var S=b,D=0;D<=T;++D){var F=b+D;if(D==T||k[F]==0){var Y=F-S,oe=dd(S,Y);R===void 0?R=oe:(R+=String.fromCharCode(0),R+=oe),S=F+1}}else{for(var le=new Array(T),D=0;D<T;++D)le[D]=String.fromCharCode(k[b+D]);R=le.join("")}return Dr(_),R},toWireType:function(_,T){T instanceof ArrayBuffer&&(T=new Uint8Array(T));var b,R=typeof T=="string";R||T instanceof Uint8Array||T instanceof Uint8ClampedArray||T instanceof Int8Array||Me("Cannot pass non-string to std::string"),g&&R?b=M_(T):b=T.length;var S=pd(4+b+1),D=S+4;if(W[S>>2]=b,g&&R)hP(T,D,b+1);else if(R)for(var F=0;F<b;++F){var Y=T.charCodeAt(F);Y>255&&(Dr(D),Me("String has UTF-16 code units that do not fit in 8 bits")),k[D+F]=Y}else for(var F=0;F<b;++F)k[D+F]=T[F];return _!==null&&_.push(Dr,S),S},argPackAdvance:8,readValueFromPointer:Mn,destructorFunction:function(_){Dr(_)}})}var $_=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,pP=(d,f)=>{for(var g=d,_=g>>1,T=_+f/2;!(_>=T)&&P[_];)++_;if(g=_<<1,g-d>32&&$_)return $_.decode(k.subarray(d,g));for(var b="",R=0;!(R>=f/2);++R){var S=N[d+R*2>>1];if(S==0)break;b+=String.fromCharCode(S)}return b},mP=(d,f,g)=>{if(g===void 0&&(g=2147483647),g<2)return 0;g-=2;for(var _=f,T=g<d.length*2?g/2:d.length,b=0;b<T;++b){var R=d.charCodeAt(b);N[f>>1]=R,f+=2}return N[f>>1]=0,f-_},gP=d=>d.length*2,_P=(d,f)=>{for(var g=0,_="";!(g>=f/4);){var T=j[d+g*4>>2];if(T==0)break;if(++g,T>=65536){var b=T-65536;_+=String.fromCharCode(55296|b>>10,56320|b&1023)}else _+=String.fromCharCode(T)}return _},yP=(d,f,g)=>{if(g===void 0&&(g=2147483647),g<4)return 0;for(var _=f,T=_+g-4,b=0;b<d.length;++b){var R=d.charCodeAt(b);if(R>=55296&&R<=57343){var S=d.charCodeAt(++b);R=65536+((R&1023)<<10)|S&1023}if(j[f>>2]=R,f+=4,f+4>T)break}return j[f>>2]=0,f-_},vP=d=>{for(var f=0,g=0;g<d.length;++g){var _=d.charCodeAt(g);_>=55296&&_<=57343&&++g,f+=4}return f},wP=function(d,f,g){g=Kt(g);var _,T,b,R,S;f===2?(_=pP,T=mP,R=gP,b=()=>P,S=1):f===4&&(_=_P,T=yP,R=vP,b=()=>W,S=2),Or(d,{name:g,fromWireType:function(D){for(var F=W[D>>2],Y=b(),oe,le=D+4,Ne=0;Ne<=F;++Ne){var it=D+4+Ne*f;if(Ne==F||Y[it>>S]==0){var Rt=it-le,st=_(le,Rt);oe===void 0?oe=st:(oe+=String.fromCharCode(0),oe+=st),le=it+f}}return Dr(D),oe},toWireType:function(D,F){typeof F!="string"&&Me(`Cannot pass non-string to C++ string type ${g}`);var Y=R(F),oe=pd(4+Y+f);return W[oe>>2]=Y>>S,T(F,oe+4,Y+f),D!==null&&D.push(Dr,oe),oe},argPackAdvance:8,readValueFromPointer:Mn,destructorFunction:function(D){Dr(D)}})};function EP(d,f,g,_,T,b){Ye[d]={name:Kt(f),rawConstructor:qn(g,_),rawDestructor:qn(T,b),fields:[]}}function TP(d,f,g,_,T,b,R,S,D,F){Ye[d].fields.push({fieldName:Kt(f),getterReturnType:g,getter:qn(_,T),getterContext:b,setterArgumentType:R,setter:qn(S,D),setterContext:F})}function bP(d,f){f=Kt(f),Or(d,{isVoid:!0,name:f,argPackAdvance:0,fromWireType:function(){},toWireType:function(g,_){}})}var IP={};function AP(d){var f=IP[d];return f===void 0?Kt(d):f}function V_(){if(typeof globalThis=="object")return globalThis;function d(f){f.$$$embind_global$$$=f;var g=typeof $$$embind_global$$$=="object"&&f.$$$embind_global$$$==f;return g||delete f.$$$embind_global$$$,g}if(typeof $$$embind_global$$$=="object"||(typeof global=="object"&&d(global)?$$$embind_global$$$=global:typeof self=="object"&&d(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function CP(d){return d===0?ri.toHandle(V_()):(d=AP(d),ri.toHandle(V_()[d]))}function RP(d){d>4&&(Ln.get(d).refcount+=1)}function F_(d,f){var g=Cn[d];return g===void 0&&Me(f+" has unknown type "+N_(d)),g}function SP(d){var f=new Array(d+1);return function(g,_,T){f[0]=g;for(var b=0;b<d;++b){var R=F_(W[_+b*4>>2],"parameter "+b);f[b+1]=R.readValueFromPointer(T),T+=R.argPackAdvance}var S=new(g.bind.apply(g,f));return ri.toHandle(S)}}var U_={};function PP(d,f,g,_){d=ri.toValue(d);var T=U_[f];return T||(T=SP(f),U_[f]=T),T(d,g,_)}function kP(d,f){d=F_(d,"_emval_take_value");var g=d.readValueFromPointer(f);return ri.toHandle(g)}var NP=()=>{zn("")},OP=(d,f,g)=>k.copyWithin(d,f,f+g),xP=()=>2147483648,DP=d=>{var f=y.buffer,g=d-f.byteLength+65535>>>16;try{return y.grow(g),qe(),1}catch{}},MP=d=>{var f=k.length;d>>>=0;var g=xP();if(d>g)return!1;for(var _=(D,F)=>D+(F-D%F)%F,T=1;T<=4;T*=2){var b=f*(1+.2/T);b=Math.min(b,d+100663296);var R=Math.min(g,_(Math.max(d,b),65536)),S=DP(R);if(S)return!0}return!1},fd={},LP=()=>o||"./this.program",Jo=()=>{if(!Jo.strings){var d=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:d,_:LP()};for(var g in fd)fd[g]===void 0?delete f[g]:f[g]=fd[g];var _=[];for(var g in f)_.push(`${g}=${f[g]}`);Jo.strings=_}return Jo.strings},$P=(d,f)=>{for(var g=0;g<d.length;++g)A[f++>>0]=d.charCodeAt(g);A[f>>0]=0},VP=(d,f)=>{var g=0;return Jo().forEach(function(_,T){var b=f+g;W[d+T*4>>2]=b,$P(_,b),g+=_.length+1}),0},FP=(d,f)=>{var g=Jo();W[d>>2]=g.length;var _=0;return g.forEach(function(T){_+=T.length+1}),W[f>>2]=_,0};function UP(d){return d}var Qc=d=>d%4===0&&(d%100!==0||d%400===0),BP=(d,f)=>{for(var g=0,_=0;_<=f;g+=d[_++]);return g},B_=[31,29,31,30,31,30,31,31,30,31,30,31],j_=[31,28,31,30,31,30,31,31,30,31,30,31],jP=(d,f)=>{for(var g=new Date(d.getTime());f>0;){var _=Qc(g.getFullYear()),T=g.getMonth(),b=(_?B_:j_)[T];if(f>b-g.getDate())f-=b-g.getDate()+1,g.setDate(1),T<11?g.setMonth(T+1):(g.setMonth(0),g.setFullYear(g.getFullYear()+1));else return g.setDate(g.getDate()+f),g}return g};function HP(d,f,g){var _=g>0?g:M_(d)+1,T=new Array(_),b=D_(d,T,0,T.length);return f&&(T.length=b),T}var WP=(d,f)=>{A.set(d,f)},zP=(d,f,g,_)=>{var T=j[_+40>>2],b={tm_sec:j[_>>2],tm_min:j[_+4>>2],tm_hour:j[_+8>>2],tm_mday:j[_+12>>2],tm_mon:j[_+16>>2],tm_year:j[_+20>>2],tm_wday:j[_+24>>2],tm_yday:j[_+28>>2],tm_isdst:j[_+32>>2],tm_gmtoff:j[_+36>>2],tm_zone:T?dd(T):""},R=dd(g),S={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var D in S)R=R.replace(new RegExp(D,"g"),S[D]);var F=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Y=["January","February","March","April","May","June","July","August","September","October","November","December"];function oe(U,Z,dt){for(var wt=typeof U=="number"?U.toString():U||"";wt.length<Z;)wt=dt[0]+wt;return wt}function le(U,Z){return oe(U,Z,"0")}function Ne(U,Z){function dt(ji){return ji<0?-1:ji>0?1:0}var wt;return(wt=dt(U.getFullYear()-Z.getFullYear()))===0&&(wt=dt(U.getMonth()-Z.getMonth()))===0&&(wt=dt(U.getDate()-Z.getDate())),wt}function it(U){switch(U.getDay()){case 0:return new Date(U.getFullYear()-1,11,29);case 1:return U;case 2:return new Date(U.getFullYear(),0,3);case 3:return new Date(U.getFullYear(),0,2);case 4:return new Date(U.getFullYear(),0,1);case 5:return new Date(U.getFullYear()-1,11,31);case 6:return new Date(U.getFullYear()-1,11,30)}}function Rt(U){var Z=jP(new Date(U.tm_year+1900,0,1),U.tm_yday),dt=new Date(Z.getFullYear(),0,4),wt=new Date(Z.getFullYear()+1,0,4),ji=it(dt),Jc=it(wt);return Ne(ji,Z)<=0?Ne(Jc,Z)<=0?Z.getFullYear()+1:Z.getFullYear():Z.getFullYear()-1}var st={"%a":U=>F[U.tm_wday].substring(0,3),"%A":U=>F[U.tm_wday],"%b":U=>Y[U.tm_mon].substring(0,3),"%B":U=>Y[U.tm_mon],"%C":U=>{var Z=U.tm_year+1900;return le(Z/100|0,2)},"%d":U=>le(U.tm_mday,2),"%e":U=>oe(U.tm_mday,2," "),"%g":U=>Rt(U).toString().substring(2),"%G":U=>Rt(U),"%H":U=>le(U.tm_hour,2),"%I":U=>{var Z=U.tm_hour;return Z==0?Z=12:Z>12&&(Z-=12),le(Z,2)},"%j":U=>le(U.tm_mday+BP(Qc(U.tm_year+1900)?B_:j_,U.tm_mon-1),3),"%m":U=>le(U.tm_mon+1,2),"%M":U=>le(U.tm_min,2),"%n":()=>`
`,"%p":U=>U.tm_hour>=0&&U.tm_hour<12?"AM":"PM","%S":U=>le(U.tm_sec,2),"%t":()=>"	","%u":U=>U.tm_wday||7,"%U":U=>{var Z=U.tm_yday+7-U.tm_wday;return le(Math.floor(Z/7),2)},"%V":U=>{var Z=Math.floor((U.tm_yday+7-(U.tm_wday+6)%7)/7);if((U.tm_wday+371-U.tm_yday-2)%7<=2&&Z++,Z){if(Z==53){var dt=(U.tm_wday+371-U.tm_yday)%7;dt!=4&&(dt!=3||!Qc(U.tm_year))&&(Z=1)}}else{Z=52;var wt=(U.tm_wday+7-U.tm_yday-1)%7;(wt==4||wt==5&&Qc(U.tm_year%400-1))&&Z++}return le(Z,2)},"%w":U=>U.tm_wday,"%W":U=>{var Z=U.tm_yday+7-(U.tm_wday+6)%7;return le(Math.floor(Z/7),2)},"%y":U=>(U.tm_year+1900).toString().substring(2),"%Y":U=>U.tm_year+1900,"%z":U=>{var Z=U.tm_gmtoff,dt=Z>=0;return Z=Math.abs(Z)/60,Z=Z/60*100+Z%60,(dt?"+":"-")+("0000"+Z).slice(-4)},"%Z":U=>U.tm_zone,"%%":()=>"%"};R=R.replace(/%%/g,"\0\0");for(var D in st)R.includes(D)&&(R=R.replace(new RegExp(D,"g"),st[D](b)));R=R.replace(/\0\0/g,"%");var St=HP(R,!1);return St.length>f?0:(WP(St,d),St.length-1)},qP=(d,f,g,_,T)=>zP(d,f,g,_);qt=n.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},wS(),xs=n.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},$S(),PS(),KS(),k_=n.UnboundTypeError=JS(Error,"UnboundTypeError"),tP(),rP();var KP={q:M,u:Q,a:re,h:X,l:ie,I:he,P:we,n:Ke,ba:Be,d:z,oa:yS,Y:vS,fa:TS,na:XS,ma:ZS,D:eP,ea:iP,W:oP,J:aP,w:lP,s:uP,V:fP,L:wP,Q:EP,pa:TP,ga:bP,U:x_,la:CP,R:RP,ia:PP,ka:kP,K:NP,da:OP,ca:MP,$:VP,aa:FP,H:d1,T:E1,B:p1,p:l1,b:GP,C:h1,ha:g1,c:ZP,j:t1,i:JP,x:f1,O:u1,v:a1,G:y1,N:v1,A:m1,F:T1,Z:I1,X:A1,k:e1,f:XP,e:YP,g:QP,M:w1,m:o1,o:n1,S:r1,t:s1,ja:c1,y:_1,r:i1,E:b1,z:UP,_:qP};w();var Dr=n._free=d=>(Dr=n._free=v.sa)(d),pd=n._malloc=d=>(pd=n._malloc=v.ta)(d),H_=d=>(H_=v.va)(d);n.__embind_initialize_bindings=()=>(n.__embind_initialize_bindings=v.wa)();var Ie=(d,f)=>(Ie=v.xa)(d,f),Xo=d=>(Xo=v.ya)(d),Pe=()=>(Pe=v.za)(),ke=d=>(ke=v.Aa)(d),W_=d=>(W_=v.Ba)(d),z_=d=>(z_=v.Ca)(d),q_=(d,f,g)=>(q_=v.Da)(d,f,g),K_=d=>(K_=v.Ea)(d);n.dynCall_viijii=(d,f,g,_,T,b,R)=>(n.dynCall_viijii=v.Fa)(d,f,g,_,T,b,R);var G_=n.dynCall_jiii=(d,f,g,_)=>(G_=n.dynCall_jiii=v.Ga)(d,f,g,_),Q_=n.dynCall_jiiii=(d,f,g,_,T)=>(Q_=n.dynCall_jiiii=v.Ha)(d,f,g,_,T);n.dynCall_iiiiij=(d,f,g,_,T,b,R)=>(n.dynCall_iiiiij=v.Ia)(d,f,g,_,T,b,R),n.dynCall_iiiiijj=(d,f,g,_,T,b,R,S,D)=>(n.dynCall_iiiiijj=v.Ja)(d,f,g,_,T,b,R,S,D),n.dynCall_iiiiiijj=(d,f,g,_,T,b,R,S,D,F)=>(n.dynCall_iiiiiijj=v.Ka)(d,f,g,_,T,b,R,S,D,F);function GP(d,f){var g=Pe();try{return Le(d)(f)}catch(_){if(ke(g),_!==_+0)throw _;Ie(1,0)}}function QP(d,f,g,_){var T=Pe();try{Le(d)(f,g,_)}catch(b){if(ke(T),b!==b+0)throw b;Ie(1,0)}}function YP(d,f,g){var _=Pe();try{Le(d)(f,g)}catch(T){if(ke(_),T!==T+0)throw T;Ie(1,0)}}function JP(d,f,g,_,T){var b=Pe();try{return Le(d)(f,g,_,T)}catch(R){if(ke(b),R!==R+0)throw R;Ie(1,0)}}function XP(d,f){var g=Pe();try{Le(d)(f)}catch(_){if(ke(g),_!==_+0)throw _;Ie(1,0)}}function ZP(d,f,g){var _=Pe();try{return Le(d)(f,g)}catch(T){if(ke(_),T!==T+0)throw T;Ie(1,0)}}function e1(d){var f=Pe();try{Le(d)()}catch(g){if(ke(f),g!==g+0)throw g;Ie(1,0)}}function t1(d,f,g,_){var T=Pe();try{return Le(d)(f,g,_)}catch(b){if(ke(T),b!==b+0)throw b;Ie(1,0)}}function n1(d,f,g,_,T,b){var R=Pe();try{Le(d)(f,g,_,T,b)}catch(S){if(ke(R),S!==S+0)throw S;Ie(1,0)}}function r1(d,f,g,_,T,b,R){var S=Pe();try{Le(d)(f,g,_,T,b,R)}catch(D){if(ke(S),D!==D+0)throw D;Ie(1,0)}}function i1(d,f,g,_,T,b,R,S,D,F,Y){var oe=Pe();try{Le(d)(f,g,_,T,b,R,S,D,F,Y)}catch(le){if(ke(oe),le!==le+0)throw le;Ie(1,0)}}function s1(d,f,g,_,T,b,R,S){var D=Pe();try{Le(d)(f,g,_,T,b,R,S)}catch(F){if(ke(D),F!==F+0)throw F;Ie(1,0)}}function o1(d,f,g,_,T){var b=Pe();try{Le(d)(f,g,_,T)}catch(R){if(ke(b),R!==R+0)throw R;Ie(1,0)}}function a1(d,f,g,_,T,b,R){var S=Pe();try{return Le(d)(f,g,_,T,b,R)}catch(D){if(ke(S),D!==D+0)throw D;Ie(1,0)}}function c1(d,f,g,_,T,b,R,S,D){var F=Pe();try{Le(d)(f,g,_,T,b,R,S,D)}catch(Y){if(ke(F),Y!==Y+0)throw Y;Ie(1,0)}}function l1(d){var f=Pe();try{return Le(d)()}catch(g){if(ke(f),g!==g+0)throw g;Ie(1,0)}}function u1(d,f,g,_,T,b,R){var S=Pe();try{return Le(d)(f,g,_,T,b,R)}catch(D){if(ke(S),D!==D+0)throw D;Ie(1,0)}}function h1(d,f,g,_){var T=Pe();try{return Le(d)(f,g,_)}catch(b){if(ke(T),b!==b+0)throw b;Ie(1,0)}}function d1(d,f,g,_){var T=Pe();try{return Le(d)(f,g,_)}catch(b){if(ke(T),b!==b+0)throw b;Ie(1,0)}}function f1(d,f,g,_,T,b){var R=Pe();try{return Le(d)(f,g,_,T,b)}catch(S){if(ke(R),S!==S+0)throw S;Ie(1,0)}}function p1(d,f,g,_,T,b){var R=Pe();try{return Le(d)(f,g,_,T,b)}catch(S){if(ke(R),S!==S+0)throw S;Ie(1,0)}}function m1(d,f,g,_,T,b,R,S,D,F){var Y=Pe();try{return Le(d)(f,g,_,T,b,R,S,D,F)}catch(oe){if(ke(Y),oe!==oe+0)throw oe;Ie(1,0)}}function g1(d,f,g){var _=Pe();try{return Le(d)(f,g)}catch(T){if(ke(_),T!==T+0)throw T;Ie(1,0)}}function _1(d,f,g,_,T,b,R,S,D,F){var Y=Pe();try{Le(d)(f,g,_,T,b,R,S,D,F)}catch(oe){if(ke(Y),oe!==oe+0)throw oe;Ie(1,0)}}function y1(d,f,g,_,T,b,R,S){var D=Pe();try{return Le(d)(f,g,_,T,b,R,S)}catch(F){if(ke(D),F!==F+0)throw F;Ie(1,0)}}function v1(d,f,g,_,T,b,R,S,D){var F=Pe();try{return Le(d)(f,g,_,T,b,R,S,D)}catch(Y){if(ke(F),Y!==Y+0)throw Y;Ie(1,0)}}function w1(d,f,g,_,T,b,R){var S=Pe();try{Le(d)(f,g,_,T,b,R)}catch(D){if(ke(S),D!==D+0)throw D;Ie(1,0)}}function E1(d,f,g,_){var T=Pe();try{return Le(d)(f,g,_)}catch(b){if(ke(T),b!==b+0)throw b;Ie(1,0)}}function T1(d,f,g,_,T,b,R,S,D,F,Y,oe){var le=Pe();try{return Le(d)(f,g,_,T,b,R,S,D,F,Y,oe)}catch(Ne){if(ke(le),Ne!==Ne+0)throw Ne;Ie(1,0)}}function b1(d,f,g,_,T,b,R,S,D,F,Y,oe,le,Ne,it,Rt){var st=Pe();try{Le(d)(f,g,_,T,b,R,S,D,F,Y,oe,le,Ne,it,Rt)}catch(St){if(ke(st),St!==St+0)throw St;Ie(1,0)}}function I1(d,f,g,_){var T=Pe();try{return G_(d,f,g,_)}catch(b){if(ke(T),b!==b+0)throw b;Ie(1,0)}}function A1(d,f,g,_,T){var b=Pe();try{return Q_(d,f,g,_,T)}catch(R){if(ke(b),R!==R+0)throw R;Ie(1,0)}}var Yc;At=function d(){Yc||Y_(),Yc||(At=d)};function Y_(){if(It>0||(kr(),It>0))return;function d(){Yc||(Yc=!0,n.calledRun=!0,!I&&(ln(),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),He()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),d()},1)):d()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Y_(),e.ready}})();function X3(t){return LR($R,t)}async function Z3(t,{tryHarder:e=_i.tryHarder,formats:n=_i.formats,maxSymbols:r=_i.maxSymbols}=_i){return Q3(t,{tryHarder:e,formats:n,maxSymbols:r},$R)}const VR=new Map([["aztec","Aztec"],["code_128","Code128"],["code_39","Code39"],["code_93","Code93"],["codabar","Codabar"],["data_matrix","DataMatrix"],["ean_13","EAN-13"],["ean_8","EAN-8"],["itf","ITF"],["pdf417","PDF417"],["qr_code","QRCode"],["upc_a","UPC-A"],["upc_e","UPC-E"]]);function eH(t){for(const[e,n]of VR)if(t===n)return e;return"unknown"}var $l;class Zh{constructor(e={}){O3(this,$l,void 0);var n;try{const r=(n=e==null?void 0:e.formats)==null?void 0:n.filter(i=>i!=="unknown");if((r==null?void 0:r.length)===0)throw new TypeError("Hint option provided, but is empty.");r==null||r.forEach(i=>{if(!E0.includes(i))throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${i}' is not a valid enum value of type BarcodeFormat.`)}),X3().catch(()=>{}),x3(this,$l,r??[])}catch(r){throw T0(r,"Failed to construct 'BarcodeDetector'")}}static async getSupportedFormats(){return E0.filter(e=>e!=="unknown")}async detect(e){try{const n=await B3(e);if(n===null)return[];let r;try{r=await Z3(n,{tryHarder:!0,formats:N3(this,$l).map(i=>VR.get(i))})}catch{throw new DOMException("Barcode detection service unavailable. Use 'setZXingModuleOverrides' in offline or strict CSP environments.","NotSupportedError")}return r.map(i=>{const{topLeft:{x:s,y:o},topRight:{x:a,y:c},bottomLeft:{x:l,y:u},bottomRight:{x:h,y:p}}=i.position,m=Math.min(s,a,l,h),y=Math.min(o,c,u,p),v=Math.max(s,a,l,h),I=Math.max(o,c,u,p);return{boundingBox:new DOMRectReadOnly(m,y,v-m,I-y),rawValue:new TextDecoder().decode(i.bytes),format:eH(i.format),cornerPoints:[{x:s,y:o},{x:a,y:c},{x:h,y:p},{x:l,y:u}]}})}catch(n){throw T0(n,"Failed to execute 'detect' on 'BarcodeDetector'")}}}$l=new WeakMap;const FR=(t,e,n="error")=>{let r,i;const s=new Promise((o,a)=>{r=o,i=a,t.addEventListener(e,r),t.addEventListener(n,i)});return s.finally(()=>{t.removeEventListener(e,r),t.removeEventListener(n,i)}),s},C0=t=>new Promise(e=>setTimeout(e,t));class tH extends Error{constructor(){super("can't process cross-origin image"),this.name="DropImageFetchError"}}class UR extends Error{constructor(){super("this browser has no Stream API support"),this.name="StreamApiNotSupportedError"}}class nH extends Error{constructor(){super("camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP."),this.name="InsecureContextError"}}class rH extends Error{constructor(){super("Loading camera stream timed out after 3 seconds. If you are on iOS in PWA mode, this is a known issue (see https://github.com/gruhn/vue-qrcode-reader/issues/298)"),this.name="StreamLoadTimeoutError"}}let Bp;const iH=t=>{Bp=new Zh({formats:t})},sH=async(t,{detectHandler:e,locateHandler:n,minDelay:r,formats:i})=>{Bp=new Zh({formats:i});const s=o=>async a=>{if(t.readyState>1){const{lastScanned:c,contentBefore:l,lastScanHadContent:u}=o;if(a-c<r)window.requestAnimationFrame(s(o));else{const h=await Bp.detect(t),p=h.some(v=>!l.includes(v.rawValue));p&&e(h);const m=h.length>0;m&&n(h),!m&&u&&n(h);const y={lastScanned:a,lastScanHadContent:m,contentBefore:p?h.map(v=>v.rawValue):l};window.requestAnimationFrame(s(y))}}};s({lastScanned:performance.now(),contentBefore:[],lastScanHadContent:!1})(performance.now())},oH=async t=>{if(t.startsWith("http")&&t.includes(location.host)===!1)throw new tH;const e=document.createElement("img");return e.src=t,await FR(e,"load"),e},BR=async(t,e=["qr_code"])=>await new Zh({formats:e}).detect(t),aH=async(t,e=["qr_code"])=>{const n=new Zh({formats:e}),r=await oH(t);return await n.detect(r)};var jR={},In={};Object.defineProperty(In,"__esModule",{value:!0});In.compactObject=zR;In.deprecated=gH;var cH=In.detectBrowser=_H;In.disableLog=fH;In.disableWarnings=pH;In.extractVersion=Vl;In.filterStats=yH;In.log=mH;In.walkStats=$u;In.wrapPeerConnectionEvent=dH;function lH(t,e,n){return e=uH(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function uH(t){var e=hH(t,"string");return Ni(e)==="symbol"?e:String(e)}function hH(t,e){if(Ni(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ni(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ni(t){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ni(t)}var HR=!0,WR=!0;function Vl(t,e,n){var r=t.match(e);return r&&r.length>=n&&parseInt(r[n],10)}function dH(t,e,n){if(t.RTCPeerConnection){var r=t.RTCPeerConnection.prototype,i=r.addEventListener;r.addEventListener=function(o,a){if(o!==e)return i.apply(this,arguments);var c=function(l){var u=n(l);u&&(a.handleEvent?a.handleEvent(u):a(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,c),i.apply(this,[o,c])};var s=r.removeEventListener;r.removeEventListener=function(o,a){if(o!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(a))return s.apply(this,arguments);var c=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[o,c])},Object.defineProperty(r,"on"+e,{get:function(){return this["_on"+e]},set:function(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}}function fH(t){return typeof t!="boolean"?new Error("Argument type: "+Ni(t)+". Please use a boolean."):(HR=t,t?"adapter.js logging disabled":"adapter.js logging enabled")}function pH(t){return typeof t!="boolean"?new Error("Argument type: "+Ni(t)+". Please use a boolean."):(WR=!t,"adapter.js deprecation warnings "+(t?"disabled":"enabled"))}function mH(){if((typeof window>"u"?"undefined":Ni(window))==="object"){if(HR)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function gH(t,e){WR&&console.warn(t+" is deprecated, please use "+e+" instead.")}function _H(t){var e={browser:null,version:null};if(typeof t>"u"||!t.navigator)return e.browser="Not a browser.",e;var n=t.navigator;if(n.mozGetUserMedia)e.browser="firefox",e.version=Vl(n.userAgent,/Firefox\/(\d+)\./,1);else if(n.webkitGetUserMedia||t.isSecureContext===!1&&t.webkitRTCPeerConnection)e.browser="chrome",e.version=Vl(n.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.RTCPeerConnection&&n.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=Vl(n.userAgent,/AppleWebKit\/(\d+)\./,1),e.supportsUnifiedPlan=t.RTCRtpTransceiver&&"currentDirection"in t.RTCRtpTransceiver.prototype;else return e.browser="Not a supported browser.",e;return e}function R0(t){return Object.prototype.toString.call(t)==="[object Object]"}function zR(t){return R0(t)?Object.keys(t).reduce(function(e,n){var r=R0(t[n]),i=r?zR(t[n]):t[n],s=r&&!Object.keys(i).length;return i===void 0||s?e:Object.assign(e,lH({},n,i))},{}):t}function $u(t,e,n){!e||n.has(e.id)||(n.set(e.id,e),Object.keys(e).forEach(function(r){r.endsWith("Id")?$u(t,t.get(e[r]),n):r.endsWith("Ids")&&e[r].forEach(function(i){$u(t,t.get(i),n)})}))}function yH(t,e,n){var r=n?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;var s=[];return t.forEach(function(o){o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(function(o){t.forEach(function(a){a.type===r&&a.trackId===o.id&&$u(t,a,i)})}),i}Object.defineProperty(jR,"__esModule",{value:!0});var vH=jR.shimGetUserMedia=TH,wH=EH(In);function qR(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(qR=function(r){return r?n:e})(t)}function EH(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||fi(t)!=="object"&&typeof t!="function")return{default:t};var n=qR(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function fi(t){"@babel/helpers - typeof";return fi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fi(t)}var S0=wH.log;function TH(t,e){var n=t&&t.navigator;if(n.mediaDevices){var r=function(c){if(fi(c)!=="object"||c.mandatory||c.optional)return c;var l={};return Object.keys(c).forEach(function(u){if(!(u==="require"||u==="advanced"||u==="mediaSource")){var h=fi(c[u])==="object"?c[u]:{ideal:c[u]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);var p=function(y,v){return y?y+v.charAt(0).toUpperCase()+v.slice(1):v==="deviceId"?"sourceId":v};if(h.ideal!==void 0){l.optional=l.optional||[];var m={};typeof h.ideal=="number"?(m[p("min",u)]=h.ideal,l.optional.push(m),m={},m[p("max",u)]=h.ideal,l.optional.push(m)):(m[p("",u)]=h.ideal,l.optional.push(m))}h.exact!==void 0&&typeof h.exact!="number"?(l.mandatory=l.mandatory||{},l.mandatory[p("",u)]=h.exact):["min","max"].forEach(function(y){h[y]!==void 0&&(l.mandatory=l.mandatory||{},l.mandatory[p(y,u)]=h[y])})}}),c.advanced&&(l.optional=(l.optional||[]).concat(c.advanced)),l},i=function(c,l){if(e.version>=61)return l(c);if(c=JSON.parse(JSON.stringify(c)),c&&fi(c.audio)==="object"){var u=function(y,v,I){v in y&&!(I in y)&&(y[I]=y[v],delete y[v])};c=JSON.parse(JSON.stringify(c)),u(c.audio,"autoGainControl","googAutoGainControl"),u(c.audio,"noiseSuppression","googNoiseSuppression"),c.audio=r(c.audio)}if(c&&fi(c.video)==="object"){var h=c.video.facingMode;h=h&&(fi(h)==="object"?h:{ideal:h});var p=e.version<66;if(h&&(h.exact==="user"||h.exact==="environment"||h.ideal==="user"||h.ideal==="environment")&&!(n.mediaDevices.getSupportedConstraints&&n.mediaDevices.getSupportedConstraints().facingMode&&!p)){delete c.video.facingMode;var m;if(h.exact==="environment"||h.ideal==="environment"?m=["back","rear"]:(h.exact==="user"||h.ideal==="user")&&(m=["front"]),m)return n.mediaDevices.enumerateDevices().then(function(y){y=y.filter(function(I){return I.kind==="videoinput"});var v=y.find(function(I){return m.some(function(A){return I.label.toLowerCase().includes(A)})});return!v&&y.length&&m.includes("back")&&(v=y[y.length-1]),v&&(c.video.deviceId=h.exact?{exact:v.deviceId}:{ideal:v.deviceId}),c.video=r(c.video),S0("chrome: "+JSON.stringify(c)),l(c)})}c.video=r(c.video)}return S0("chrome: "+JSON.stringify(c)),l(c)},s=function(c){return e.version>=64?c:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[c.name]||c.name,message:c.message,constraint:c.constraint||c.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}},o=function(c,l,u){i(c,function(h){n.webkitGetUserMedia(h,l,function(p){u&&u(s(p))})})};if(n.getUserMedia=o.bind(n),n.mediaDevices.getUserMedia){var a=n.mediaDevices.getUserMedia.bind(n.mediaDevices);n.mediaDevices.getUserMedia=function(c){return i(c,function(l){return a(l).then(function(u){if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(function(h){h.stop()}),new DOMException("","NotFoundError");return u},function(u){return Promise.reject(s(u))})})}}}}var KR={};Object.defineProperty(KR,"__esModule",{value:!0});var bH=KR.shimGetUserMedia=CH,IH=AH(In);function GR(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(GR=function(r){return r?n:e})(t)}function AH(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||no(t)!=="object"&&typeof t!="function")return{default:t};var n=GR(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function no(t){"@babel/helpers - typeof";return no=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},no(t)}function CH(t,e){var n=t&&t.navigator,r=t&&t.MediaStreamTrack;if(n.getUserMedia=function(c,l,u){IH.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),n.mediaDevices.getUserMedia(c).then(l,u)},!(e.version>55&&"autoGainControl"in n.mediaDevices.getSupportedConstraints())){var i=function(c,l,u){l in c&&!(u in c)&&(c[u]=c[l],delete c[l])},s=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(c){return no(c)==="object"&&no(c.audio)==="object"&&(c=JSON.parse(JSON.stringify(c)),i(c.audio,"autoGainControl","mozAutoGainControl"),i(c.audio,"noiseSuppression","mozNoiseSuppression")),s(c)},r&&r.prototype.getSettings){var o=r.prototype.getSettings;r.prototype.getSettings=function(){var c=o.apply(this,arguments);return i(c,"mozAutoGainControl","autoGainControl"),i(c,"mozNoiseSuppression","noiseSuppression"),c}}if(r&&r.prototype.applyConstraints){var a=r.prototype.applyConstraints;r.prototype.applyConstraints=function(c){return this.kind==="audio"&&no(c)==="object"&&(c=JSON.parse(JSON.stringify(c)),i(c,"autoGainControl","mozAutoGainControl"),i(c,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[c])}}}}var Sr={};Object.defineProperty(Sr,"__esModule",{value:!0});Sr.shimAudioContext=LH;Sr.shimCallbacksAPI=NH;Sr.shimConstraints=JR;Sr.shimCreateOfferLegacy=MH;var RH=Sr.shimGetUserMedia=OH;Sr.shimLocalStreamsAPI=PH;Sr.shimRTCIceServerUrls=xH;Sr.shimRemoteStreamsAPI=kH;Sr.shimTrackEventTransceiver=DH;var QR=SH(In);function YR(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(YR=function(r){return r?n:e})(t)}function SH(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||Oi(t)!=="object"&&typeof t!="function")return{default:t};var n=YR(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function Oi(t){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oi(t)}function PH(t){if(!(Oi(t)!=="object"||!t.RTCPeerConnection)){if("getLocalStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in t.RTCPeerConnection.prototype)){var e=t.RTCPeerConnection.prototype.addTrack;t.RTCPeerConnection.prototype.addStream=function(n){var r=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(function(i){return e.call(r,i,n)}),n.getVideoTracks().forEach(function(i){return e.call(r,i,n)})},t.RTCPeerConnection.prototype.addTrack=function(n){for(var r=this,i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return s&&s.forEach(function(a){r._localStreams?r._localStreams.includes(a)||r._localStreams.push(a):r._localStreams=[a]}),e.apply(this,arguments)}}"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(n){var r=this;this._localStreams||(this._localStreams=[]);var i=this._localStreams.indexOf(n);if(i!==-1){this._localStreams.splice(i,1);var s=n.getTracks();this.getSenders().forEach(function(o){s.includes(o.track)&&r.removeTrack(o)})}})}}function kH(t){if(!(Oi(t)!=="object"||!t.RTCPeerConnection)&&("getRemoteStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in t.RTCPeerConnection.prototype))){Object.defineProperty(t.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(n){var r=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=n),this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(function(s){if(r._remoteStreams||(r._remoteStreams=[]),!r._remoteStreams.includes(s)){r._remoteStreams.push(s);var o=new Event("addstream");o.stream=s,r.dispatchEvent(o)}})})}});var e=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){var n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(function(i){if(n._remoteStreams||(n._remoteStreams=[]),!(n._remoteStreams.indexOf(i)>=0)){n._remoteStreams.push(i);var s=new Event("addstream");s.stream=i,n.dispatchEvent(s)}})}),e.apply(n,arguments)}}}function NH(t){if(!(Oi(t)!=="object"||!t.RTCPeerConnection)){var e=t.RTCPeerConnection.prototype,n=e.createOffer,r=e.createAnswer,i=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(c,l){var u=arguments.length>=2?arguments[2]:arguments[0],h=n.apply(this,[u]);return l?(h.then(c,l),Promise.resolve()):h},e.createAnswer=function(c,l){var u=arguments.length>=2?arguments[2]:arguments[0],h=r.apply(this,[u]);return l?(h.then(c,l),Promise.resolve()):h};var a=function(c,l,u){var h=i.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h};e.setLocalDescription=a,a=function(c,l,u){var h=s.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.setRemoteDescription=a,a=function(c,l,u){var h=o.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.addIceCandidate=a}}function OH(t){var e=t&&t.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){var n=e.mediaDevices,r=n.getUserMedia.bind(n);e.mediaDevices.getUserMedia=function(i){return r(JR(i))}}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(i,s,o){e.mediaDevices.getUserMedia(i).then(s,o)}).bind(e))}function JR(t){return t&&t.video!==void 0?Object.assign({},t,{video:QR.compactObject(t.video)}):t}function xH(t){if(t.RTCPeerConnection){var e=t.RTCPeerConnection;t.RTCPeerConnection=function(n,r){if(n&&n.iceServers){for(var i=[],s=0;s<n.iceServers.length;s++){var o=n.iceServers[s];o.urls===void 0&&o.url?(QR.deprecated("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,i.push(o)):i.push(n.iceServers[s])}n.iceServers=i}return new e(n,r)},t.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(t.RTCPeerConnection,"generateCertificate",{get:function(){return e.generateCertificate}})}}function DH(t){Oi(t)==="object"&&t.RTCTrackEvent&&"receiver"in t.RTCTrackEvent.prototype&&!("transceiver"in t.RTCTrackEvent.prototype)&&Object.defineProperty(t.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function MH(t){var e=t.RTCPeerConnection.prototype.createOffer;t.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);var r=this.getTransceivers().find(function(s){return s.receiver.track.kind==="audio"});n.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);var i=this.getTransceivers().find(function(s){return s.receiver.track.kind==="video"});n.offerToReceiveVideo===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveVideo===!0&&!i&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function LH(t){Oi(t)!=="object"||t.AudioContext||(t.AudioContext=t.webkitAudioContext)}const $H=t=>{let e=!1,n;return(...r)=>(e||(n=t(r),e=!0),n)};function Lr(t,e){if(t===!1)throw new Error(e??"assertion failure")}const VH=$H(()=>{const t=cH(window);switch(t.browser){case"chrome":vH(window,t);break;case"firefox":bH(window,t);break;case"safari":RH(window,t);break;default:throw new UR}});let Vr={isActive:!1};function ff(){if(Vr.isActive){Vr.videoEl.src="",Vr.videoEl.srcObject=null,Vr.videoEl.load();for(const t of Vr.stream.getTracks())Vr.stream.removeTrack(t),t.stop();Vr={isActive:!1}}}async function FH(t,{constraints:e,torch:n}){var r,i;if(window.isSecureContext!==!0)throw new nH;if(((r=navigator==null?void 0:navigator.mediaDevices)==null?void 0:r.getUserMedia)===void 0)throw new UR;VH();const s=await navigator.mediaDevices.getUserMedia({audio:!1,video:e});if(t.srcObject!==void 0?t.srcObject=s:t.mozSrcObject!==void 0?t.mozSrcObject=s:window.URL.createObjectURL?t.src=window.URL.createObjectURL(s):window.webkitURL?t.src=window.webkitURL.createObjectURL(s):t.src=s.id,await Promise.race([FR(t,"loadeddata"),C0(3e3).then(()=>{throw new rH})]),await C0(500),n){const[a]=s.getVideoTracks();a.getCapabilities().torch?a.applyConstraints({advanced:[{torch:!0}]}):console.warn("device does not support torch capability")}Vr={videoEl:t,stream:s,isActive:!0};const[o]=Vr.stream.getVideoTracks();return((i=o==null?void 0:o.getCapabilities)==null?void 0:i.call(o))??{}}const UH={class:"qrcode-stream-wrapper"},BH={class:"qrcode-stream-overlay"},jH=sr({__name:"QrcodeStream",props:{constraints:{type:Object,default(){return{facingMode:"environment"}}},formats:{type:Array,default:()=>["qr_code"]},paused:{type:Boolean,default:!1},torch:{type:Boolean,default:!1},track:{type:Function}},emits:["detect","camera-on","camera-off","error"],setup(t,{emit:e}){const n=t,r=ct(),i=ct(),s=ct(),o=ct(!1),a=ct(!1);gm(()=>{a.value=!0}),Zu(()=>{ff()});const c=en(()=>({torch:n.torch,constraints:n.constraints,shouldStream:a.value&&!n.paused}));Hr(c,async m=>{const y=s.value;Lr(y!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus video element should always be defined.");const v=r.value;Lr(v!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus canvas should always be defined.");const I=v.getContext("2d");if(Lr(I!==null,"if cavnas is defined, canvas 2d context should also be non-null"),m.shouldStream)try{const A=await FH(y,m);a.value?(o.value=!0,e("camera-on",A)):ff()}catch(A){e("error",A)}else v.width=y.videoWidth,v.height=y.videoHeight,I.drawImage(y,0,0,y.videoWidth,y.videoHeight),ff(),o.value=!1,e("camera-off")},{deep:!0});const{formats:l}=mk(n);Hr(l,m=>{a.value&&iH(m)});const u=en(()=>c.value.shouldStream&&o.value);Hr(u,m=>{if(m){Lr(r.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus pause frame canvas is defined"),h(r.value),Lr(i.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus tracking canvas is defined"),h(i.value);const y=()=>n.track===void 0?500:40;Lr(s.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus video element is defined"),sH(s.value,{detectHandler:v=>e("detect",v),formats:n.formats,locateHandler:p,minDelay:y()})}});const h=m=>{const y=m.getContext("2d");Lr(y!==null,"canvas 2d context should always be non-null"),y.clearRect(0,0,m.width,m.height)},p=m=>{const y=i.value;Lr(y!==void 0,"onLocate handler should only be called when component is mounted. Thus tracking canvas is always defined.");const v=s.value;if(Lr(v!==void 0,"onLocate handler should only be called when component is mounted. Thus video element is always defined."),m.length===0||n.track===void 0)h(y);else{const I=v.offsetWidth,A=v.offsetHeight,k=v.videoWidth,N=v.videoHeight,P=Math.max(I/k,A/N),j=k*P,W=N*P,ce=j/k,ge=W/N,qe=(I-j)/2,Se=(A-W)/2,ht=({x:ln,y:He})=>({x:Math.floor(ln*ce),y:Math.floor(He*ge)}),Ft=({x:ln,y:He})=>({x:Math.floor(ln+qe),y:Math.floor(He+Se)}),Qe=m.map(ln=>{const{boundingBox:He,cornerPoints:Ve}=ln,{x:be,y:An}=Ft(ht({x:He.x,y:He.y})),{x:It,y:At}=ht({x:He.width,y:He.height});return{...ln,cornerPoints:Ve.map(Ct=>Ft(ht(Ct))),boundingBox:DOMRectReadOnly.fromRect({x:be,y:An,width:It,height:At})}});y.width=v.offsetWidth,y.height=v.offsetHeight;const kr=y.getContext("2d");n.track(Qe,kr)}};return(m,y)=>(gt(),yn("div",UH,[Xe("video",{ref_key:"videoRef",ref:s,class:qu([{"qrcode-stream-camera--hidden":!u.value},"qrcode-stream-camera"]),autoplay:"",muted:"",playsinline:""},null,2),Mk(Xe("canvas",{ref_key:"pauseFrameRef",ref:r,class:"qrcode-stream-camera"},null,512),[[GN,!u.value]]),Xe("canvas",{ref_key:"trackingLayerRef",ref:i,class:"qrcode-stream-overlay"},null,512),Xe("div",BH,[kE(m.$slots,"default",{},void 0,!0)])]))}}),HH=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},XR=HH(jH,[["__scopeId","data-v-dfa4038c"]]),WH=sr({__name:"QrcodeCapture",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect"],setup(t,{emit:e}){const n=t,r=i=>{if(!(!(i.target instanceof HTMLInputElement)||!i.target.files))for(const s of Array.from(i.target.files))BR(s,n.formats).then(o=>{e("detect",o)})};return(i,s)=>(gt(),yn("input",{onChange:r,type:"file",name:"image",accept:"image/*",capture:"environment",multiple:""},null,32))}}),zH=["onDrop"],qH=sr({__name:"QrcodeDropZone",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect","dragover","error"],setup(t,{emit:e}){const n=t,r=async o=>{try{const a=await o;e("detect",a)}catch(a){e("error",a)}},i=o=>{e("dragover",o)},s=({dataTransfer:o})=>{if(!o)return;i(!1);const a=[...Array.from(o.files)],c=o.getData("text/uri-list");a.forEach(l=>{r(BR(l))}),c!==""&&r(aH(c,n.formats))};return(o,a)=>(gt(),yn("div",{onDrop:il(s,["prevent","stop"]),onDragenter:a[0]||(a[0]=il(c=>i(!0),["prevent","stop"])),onDragleave:a[1]||(a[1]=il(c=>i(!1),["prevent","stop"])),onDragover:a[2]||(a[2]=il(()=>{},["prevent","stop"]))},[kE(o.$slots,"default")],40,zH))}});function KH(t){t.component("qrcode-stream",XR),t.component("qrcode-capture",WH),t.component("qrcode-drop-zone",qH)}const GH={install:KH};let Vu=null;typeof window<"u"?Vu=window.Vue:typeof global<"u"&&(Vu=global.Vue);Vu&&Vu.use(GH);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fi=t=>e=>typeof e=="function"?((n,r)=>(customElements.define(n,r),r))(t,e):((n,r)=>{const{kind:i,elements:s}=r;return{kind:i,elements:s,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const QH=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},YH=(t,e,n)=>{e.constructor.createProperty(n,t)};function Ue(t){return(e,n)=>n!==void 0?YH(t,e,n):QH(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ui(t){return Ue({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ZR=({finisher:t,descriptor:e})=>(n,r)=>{var i;if(r===void 0){const s=(i=n.originalKey)!==null&&i!==void 0?i:n.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(n.key)}:{...n,key:s};return t!=null&&(o.finisher=function(a){t(a,s)}),o}{const s=n.constructor;e!==void 0&&Object.defineProperty(n,r,e(r)),t==null||t(s,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wn(t,e){return ZR({descriptor:n=>{const r={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const i=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var s,o;return this[i]===void 0&&(this[i]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&o!==void 0?o:null),this[i]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pf;const JH=((pf=window.HTMLSlotElement)===null||pf===void 0?void 0:pf.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function XH(t){const{slot:e,selector:n}=t??{};return ZR({descriptor:r=>({get(){var i;const s="slot"+(e?`[name=${e}]`:":not([name])"),o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(s),a=o!=null?JH(o,t):[];return n?a.filter(c=>c.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fl=window,__=Fl.ShadowRoot&&(Fl.ShadyCSS===void 0||Fl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,y_=Symbol(),P0=new WeakMap;let eS=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==y_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(__&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=P0.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&P0.set(n,e))}return e}toString(){return this.cssText}};const ZH=t=>new eS(typeof t=="string"?t:t+"",void 0,y_),or=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new eS(n,t,y_)},e5=(t,e)=>{__?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),i=Fl.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},k0=__?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return ZH(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mf;const Fu=window,N0=Fu.trustedTypes,t5=N0?N0.emptyScript:"",O0=Fu.reactiveElementPolyfillSupport,jp={toAttribute(t,e){switch(e){case Boolean:t=t?t5:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},tS=(t,e)=>e!==t&&(e==e||t==t),gf={attribute:!0,type:String,converter:jp,reflect:!1,hasChanged:tS},Hp="finalized";let Bs=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=gf){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){const s=this[e];this[n]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||gf}static finalize(){if(this.hasOwnProperty(Hp))return!1;this[Hp]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(k0(i))}else e!==void 0&&n.push(k0(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return e5(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=gf){var i;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:jp).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,n){var r;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:jp;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||tS)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Bs[Hp]=!0,Bs.elementProperties=new Map,Bs.elementStyles=[],Bs.shadowRootOptions={mode:"open"},O0==null||O0({ReactiveElement:Bs}),((mf=Fu.reactiveElementVersions)!==null&&mf!==void 0?mf:Fu.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _f;const Uu=window,Ro=Uu.trustedTypes,x0=Ro?Ro.createPolicy("lit-html",{createHTML:t=>t}):void 0,Wp="$lit$",pi=`lit$${(Math.random()+"").slice(9)}$`,nS="?"+pi,n5=`<${nS}>`,Ts=document,pc=()=>Ts.createComment(""),mc=t=>t===null||typeof t!="object"&&typeof t!="function",rS=Array.isArray,r5=t=>rS(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",yf=`[ 	
\f\r]`,ca=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D0=/-->/g,M0=/>/g,zi=RegExp(`>|${yf}(?:([^\\s"'>=/]+)(${yf}*=${yf}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),L0=/'/g,$0=/"/g,iS=/^(?:script|style|textarea|title)$/i,i5=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),mt=i5(1),bs=Symbol.for("lit-noChange"),ye=Symbol.for("lit-nothing"),V0=new WeakMap,rs=Ts.createTreeWalker(Ts,129,null,!1);function sS(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return x0!==void 0?x0.createHTML(e):e}const s5=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=ca;for(let a=0;a<n;a++){const c=t[a];let l,u,h=-1,p=0;for(;p<c.length&&(o.lastIndex=p,u=o.exec(c),u!==null);)p=o.lastIndex,o===ca?u[1]==="!--"?o=D0:u[1]!==void 0?o=M0:u[2]!==void 0?(iS.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=zi):u[3]!==void 0&&(o=zi):o===zi?u[0]===">"?(o=i??ca,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?zi:u[3]==='"'?$0:L0):o===$0||o===L0?o=zi:o===D0||o===M0?o=ca:(o=zi,i=void 0);const m=o===zi&&t[a+1].startsWith("/>")?" ":"";s+=o===ca?c+n5:h>=0?(r.push(l),c.slice(0,h)+Wp+c.slice(h)+pi+m):c+pi+(h===-2?(r.push(void 0),a):m)}return[sS(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class gc{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=e.length-1,c=this.parts,[l,u]=s5(e,n);if(this.el=gc.createElement(l,r),rs.currentNode=this.el.content,n===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(i=rs.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const p of i.getAttributeNames())if(p.endsWith(Wp)||p.startsWith(pi)){const m=u[o++];if(h.push(p),m!==void 0){const y=i.getAttribute(m.toLowerCase()+Wp).split(pi),v=/([.?@])?(.*)/.exec(m);c.push({type:1,index:s,name:v[2],strings:y,ctor:v[1]==="."?a5:v[1]==="?"?l5:v[1]==="@"?u5:ed})}else c.push({type:6,index:s})}for(const p of h)i.removeAttribute(p)}if(iS.test(i.tagName)){const h=i.textContent.split(pi),p=h.length-1;if(p>0){i.textContent=Ro?Ro.emptyScript:"";for(let m=0;m<p;m++)i.append(h[m],pc()),rs.nextNode(),c.push({type:2,index:++s});i.append(h[p],pc())}}}else if(i.nodeType===8)if(i.data===nS)c.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(pi,h+1))!==-1;)c.push({type:7,index:s}),h+=pi.length-1}s++}}static createElement(e,n){const r=Ts.createElement("template");return r.innerHTML=e,r}}function So(t,e,n=t,r){var i,s,o,a;if(e===bs)return e;let c=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const l=mc(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((s=c==null?void 0:c._$AO)===null||s===void 0||s.call(c,!1),l===void 0?c=void 0:(c=new l(t),c._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=c:n._$Cl=c),c!==void 0&&(e=So(t,c._$AS(t,e.values),c,r)),e}class o5{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Ts).importNode(r,!0);rs.currentNode=s;let o=rs.nextNode(),a=0,c=0,l=i[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new Wc(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new h5(o,this,e)),this._$AV.push(u),l=i[++c]}a!==(l==null?void 0:l.index)&&(o=rs.nextNode(),a++)}return rs.currentNode=Ts,s}v(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class Wc{constructor(e,n,r,i){var s;this.type=2,this._$AH=ye,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=So(this,e,n),mc(e)?e===ye||e==null||e===""?(this._$AH!==ye&&this._$AR(),this._$AH=ye):e!==this._$AH&&e!==bs&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):r5(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ye&&mc(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ts.createTextNode(e)),this._$AH=e}g(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=gc.createElement(sS(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new o5(s,this),a=o.u(this.options);o.v(r),this.$(a),this._$AH=o}}_$AC(e){let n=V0.get(e.strings);return n===void 0&&V0.set(e.strings,n=new gc(e)),n}T(e){rS(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new Wc(this.k(pc()),this.k(pc()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class ed{constructor(e,n,r,i,s){this.type=1,this._$AH=ye,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ye}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=So(this,e,n,0),o=!mc(e)||e!==this._$AH&&e!==bs,o&&(this._$AH=e);else{const a=e;let c,l;for(e=s[0],c=0;c<s.length-1;c++)l=So(this,a[r+c],n,c),l===bs&&(l=this._$AH[c]),o||(o=!mc(l)||l!==this._$AH[c]),l===ye?e=ye:e!==ye&&(e+=(l??"")+s[c+1]),this._$AH[c]=l}o&&!i&&this.j(e)}j(e){e===ye?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class a5 extends ed{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ye?void 0:e}}const c5=Ro?Ro.emptyScript:"";class l5 extends ed{constructor(){super(...arguments),this.type=4}j(e){e&&e!==ye?this.element.setAttribute(this.name,c5):this.element.removeAttribute(this.name)}}class u5 extends ed{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){var r;if((e=(r=So(this,e,n,0))!==null&&r!==void 0?r:ye)===bs)return;const i=this._$AH,s=e===ye&&i!==ye||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==ye&&(i===ye||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class h5{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){So(this,e)}}const F0=Uu.litHtmlPolyfillSupport;F0==null||F0(gc,Wc),((_f=Uu.litHtmlVersions)!==null&&_f!==void 0?_f:Uu.litHtmlVersions=[]).push("2.8.0");const d5=(t,e,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=s._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new Wc(e.insertBefore(pc(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vf,wf;let On=class extends Bs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=d5(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return bs}};On.finalized=!0,On._$litElement$=!0,(vf=globalThis.litElementHydrateSupport)===null||vf===void 0||vf.call(globalThis,{LitElement:On});const U0=globalThis.litElementPolyfillSupport;U0==null||U0({LitElement:On});((wf=globalThis.litElementVersions)!==null&&wf!==void 0?wf:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class f5 extends On{render(){return mt`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const p5=or`:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let zp=class extends f5{};zp.styles=[p5];zp=te([Fi("md-icon")],zp);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const m5=or`:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-shape: var(--md-filled-icon-button-container-shape, 9999px);--_container-size: var(--md-filled-icon-button-container-size, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-icon-button-toggle-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-icon-color: var(--md-filled-icon-button-toggle-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-state-layer-color: var(--md-filled-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-icon-color: var(--md-filled-icon-button-toggle-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-icon-color: var(--md-filled-icon-button-toggle-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-state-layer-color: var(--md-filled-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var( --md-filled-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-icon-button-container-shape-end-start, var(--_container-shape) )}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled:not(:disabled){color:var(--_toggle-icon-color)}.toggle-filled:not(:disabled):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled:not(:disabled):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled:not(:disabled):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}/*# sourceMappingURL=filled-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const oS=Symbol("attachableController");let Ul;Ul=new MutationObserver(t=>{var e;for(const n of t)(e=n.target[oS])==null||e.hostConnected()});class aS{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}constructor(e,n){this.host=e,this.onControlChange=n,this.currentControl=null,e.addController(this),e[oS]=this,Ul==null||Ul.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const g5=["focusin","focusout","pointerdown"];class v_ extends On{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new aS(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}handleEvent(e){var n;if(!e[B0]){switch(e.type){default:return;case"focusin":this.visible=((n=this.control)==null?void 0:n.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[B0]=!0}}onControlChange(e,n){for(const r of g5)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}te([Ue({type:Boolean,reflect:!0})],v_.prototype,"visible",void 0);te([Ue({type:Boolean,reflect:!0})],v_.prototype,"inward",void 0);const B0=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const _5=or`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let qp=class extends v_{};qp.styles=[_5];qp=te([Fi("md-focus-ring")],qp);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y5={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},v5=t=>(...e)=>({_$litDirective$:t,values:e});let w5=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Po=v5(class extends w5{constructor(t){var e;if(super(t),t.type!==y5.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,r;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((n=this.nt)===null||n===void 0)&&n.has(s))&&this.it.add(s);return this.render(e)}const i=t.element.classList;this.it.forEach(s=>{s in e||(i.remove(s),this.it.delete(s))});for(const s in e){const o=!!e[s];o===this.it.has(s)||!((r=this.nt)===null||r===void 0)&&r.has(s)||(o?(i.add(s),this.it.add(s)):(i.remove(s),this.it.delete(s)))}return bs}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const _c={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const E5=450,j0=225,T5=.2,b5=10,I5=75,A5=.35,C5="::after",R5="forwards";var dn;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(dn||(dn={}));const S5=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],P5=150;class zc extends On{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=dn.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new aS(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}render(){const e={hovered:this.hovered,pressed:this.pressed};return mt`<div class="surface ${Po(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==dn.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===dn.HOLDING){this.state=dn.WAITING_FOR_CLICK;return}if(this.state===dn.TOUCH_DELAY){this.state=dn.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=dn.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=dn.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,P5)}),this.state===dn.TOUCH_DELAY&&(this.state=dn.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===dn.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===dn.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:n}=this.getBoundingClientRect(),r=Math.max(e,n),i=Math.max(A5*r,I5),s=Math.floor(r*T5),a=Math.sqrt(n**2+e**2)+b5;this.initialSize=s,this.rippleScale=`${(a+i)/s}`,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(e){const{scrollX:n,scrollY:r}=window,{left:i,top:s}=this.getBoundingClientRect(),o=n+i,a=r+s,{pageX:c,pageY:l}=e;return{x:c-o,y:l-a}}getTranslationCoordinates(e){const{height:n,width:r}=this.getBoundingClientRect(),i={x:(r-this.initialSize)/2,y:(n-this.initialSize)/2};let s;return e instanceof PointerEvent?s=this.getNormalizedPointerEventCoords(e):s={x:r/2,y:n/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:i}}startPressAnimation(e){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:n,endPoint:r}=this.getTranslationCoordinates(e),i=`${n.x}px, ${n.y}px`,s=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${s}) scale(${this.rippleScale})`]},{pseudoElement:C5,duration:E5,easing:_c.STANDARD,fill:R5})}async endPressAnimation(){this.state=dn.INACTIVE;const e=this.growAnimation,n=(e==null?void 0:e.currentTime)??1/0;if(n>=j0){this.pressed=!1;return}await new Promise(r=>{setTimeout(r,j0-n)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const n=e.buttons===1;return this.isTouch(e)||n}inBounds({x:e,y:n}){const{top:r,left:i,bottom:s,right:o}=this.getBoundingClientRect();return e>=i&&e<=o&&n>=r&&n<=s}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,n){for(const r of S5)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}}te([Ue({type:Boolean,reflect:!0})],zc.prototype,"disabled",void 0);te([Ui()],zc.prototype,"hovered",void 0);te([Ui()],zc.prototype,"pressed",void 0);te([Wn(".surface")],zc.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const k5=or`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Kp=class extends zc{};Kp.styles=[k5];Kp=te([Fi("md-ripple")],Kp);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cS=Symbol.for(""),N5=t=>{if((t==null?void 0:t.r)===cS)return t==null?void 0:t._$litStatic$},Bu=(t,...e)=>({_$litStatic$:e.reduce((n,r,i)=>n+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[i+1],t[0]),r:cS}),H0=new Map,O5=t=>(e,...n)=>{const r=n.length;let i,s;const o=[],a=[];let c,l=0,u=!1;for(;l<r;){for(c=e[l];l<r&&(s=n[l],(i=N5(s))!==void 0);)c+=i+e[++l],u=!0;l!==r&&a.push(s),o.push(c),l++}if(l===r&&o.push(e[r]),u){const h=o.join("$$lit$$");(e=H0.get(h))===void 0&&(o.raw=o,H0.set(h,e=o)),n=a}return t(e,...n)},lS=O5(mt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const uS=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];uS.map(hS);function hS(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function td(t){for(const e of uS)t.createProperty(e,{attribute:hS(e),reflect:!0});t.addInitializer(e=>{const n={hostConnected(){e.setAttribute("role","presentation")}};e.addController(n)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ko=Symbol("internals");/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function dS(t){t.addInitializer(e=>{const n=e;n.addEventListener("click",async r=>{const{type:i,[ko]:s}=n,{form:o}=s;if(!(!o||i==="button")&&(await new Promise(a=>{a()}),!r.defaultPrevented)){if(i==="reset"){o.reset();return}o.addEventListener("submit",a=>{Object.defineProperty(a,"submitter",{configurable:!0,enumerable:!0,get:()=>n})},{capture:!0,once:!0}),s.setFormValue(n.value),o.requestSubmit()}})})}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function W0(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var fS;class mn extends On{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=W0(this,this.flipIconInRtl),this[fS]=this.attachInternals()}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[ko].form}get labels(){return this[ko].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?Bu`div`:Bu`button`,{ariaLabel:n,ariaHasPopup:r,ariaExpanded:i}=this,s=n&&this.ariaLabelSelected,o=s?ye:this.selected;let a=ye;return this.href||(a=s&&this.selected?this.ariaLabelSelected:n),lS`<${e}
        class="icon-button ${Po(this.getRenderClasses())}"
        id="button"
        aria-label="${a||ye}"
        aria-haspopup="${!this.href&&r||ye}"
        aria-expanded="${!this.href&&i||ye}"
        aria-pressed="${o}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?ye:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():ye}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return mt`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||ye}"
        aria-label="${e||ye}"
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return mt`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return mt`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`}renderTouchTarget(){return mt`<span class="touch"></span>`}renderFocusRing(){return mt`<md-focus-ring part="focus-ring" for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return mt`<md-ripple
      for=${this.href?"link":ye}
      ?disabled="${!this.href&&this.disabled}"
    ></md-ripple>`}connectedCallback(){this.flipIcon=W0(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){!this.toggle||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}fS=ko;td(mn),dS(mn);mn.formAssociated=!0;mn.shadowRootOptions={mode:"open",delegatesFocus:!0};te([Ue({type:Boolean,reflect:!0})],mn.prototype,"disabled",void 0);te([Ue({type:Boolean,attribute:"flip-icon-in-rtl"})],mn.prototype,"flipIconInRtl",void 0);te([Ue()],mn.prototype,"href",void 0);te([Ue()],mn.prototype,"target",void 0);te([Ue({attribute:"aria-label-selected"})],mn.prototype,"ariaLabelSelected",void 0);te([Ue({type:Boolean})],mn.prototype,"toggle",void 0);te([Ue({type:Boolean,reflect:!0})],mn.prototype,"selected",void 0);te([Ue()],mn.prototype,"type",void 0);te([Ue()],mn.prototype,"value",void 0);te([Ui()],mn.prototype,"flipIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const x5=or`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-size))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Gp=class extends mn{getRenderClasses(){return{...super.getRenderClasses(),filled:!0,"toggle-filled":this.toggle}}};Gp.styles=[x5,m5];Gp=te([Fi("md-filled-icon-button")],Gp);const D5={class:"qrScanner"},M5=Xe("md-icon",null," replay ",-1),L5=[M5],$5=sr({__name:"ScanQr",emits:["codeFound"],setup(t,{emit:e}){const n=ct(!0),r=ct(!1);ct();const i="vibrate"in navigator;function s(a){a.length>=1&&(i&&navigator.vibrate(200),r.value=!0,e("codeFound",a[0].rawValue))}function o(){n.value=!1}return(a,c)=>(gt(),yn("div",D5,[Dt(Et(XR),{onDetect:s,constraints:{facingMode:"environment"},onCameraOn:o,paused:r.value},{default:zl(()=>[n.value?(gt(),yn("div",{key:0,class:"loading-indicator","on:cameraOn":o},"Caricamento...",32)):ss("",!0)]),_:1},8,["paused"]),r.value?(gt(),yn("md-filled-icon-button",{key:0,class:"restartButton",onClick:c[0]||(c[0]=l=>r.value=!1)},L5)):ss("",!0)]))}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class nd extends On{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}te([Ue({type:Boolean,reflect:!0})],nd.prototype,"inset",void 0);te([Ue({type:Boolean,reflect:!0,attribute:"inset-start"})],nd.prototype,"insetStart",void 0);te([Ue({type:Boolean,reflect:!0,attribute:"inset-end"})],nd.prototype,"insetEnd",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const V5=or`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Qp=class extends nd{};Qp.styles=[V5];Qp=te([Fi("md-divider")],Qp);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function F5(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(n);return r||e.preventDefault(),r}function pS(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function mS(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!U5(t)}function U5(t){const e=Yp;return e&&(t.preventDefault(),t.stopImmediatePropagation()),B5(),e}let Yp=!1;async function B5(){Yp=!0,await null,Yp=!1}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const j5={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:_c.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:_c.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},H5={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:_c.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:_c.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class yt extends On{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>j5,this.getCloseAnimation=()=>H5,this.isOpen=!1,this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.addEventListener("submit",this.handleSubmit)}async show(){var i;const{dialog:e,container:n}=this;if(!e||!n||e.open)return;if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(i=this.querySelector("[autofocus]"))==null||i.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened"))}async close(e=this.returnValue){const{dialog:n,container:r}=this;if(!n||!r||!n.open)return;const i=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=i;return}await this.animateDialog(this.getCloseAnimation()),n.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),n={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:r}=this;return mt`
      <div class="scrim"></div>
      <dialog
        class=${Po(n)}
        aria-label=${r||ye}
        aria-labelledby=${this.hasHeadline?"headline":ye}
        role=${this.type==="alert"?"alertdialog":ye}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||ye}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||ye}>
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
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const n of e)this.handleAnchorIntersection(n)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const n=e.target,{submitter:r}=e;n.method!=="dialog"||!r||this.close(r.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;const n=!F5(this,e);e.preventDefault(),!n&&this.close()}async animateDialog(e){const{dialog:n,scrim:r,container:i,headline:s,content:o,actions:a}=this;if(!n||!r||!i||!s||!o||!a)return;const{container:c,dialog:l,scrim:u,headline:h,content:p,actions:m}=e,y=[[n,l??[]],[r,u??[]],[i,c??[]],[s,h??[]],[o,p??[]],[a,m??[]]],v=[];for(const[I,A]of y)for(const k of A)v.push(I.animate(...k));await Promise.all(v.map(I=>I.finished))}handleHeadlineChange(e){const n=e.target;this.hasHeadline=n.assignedElements().length>0}handleActionsChange(e){const n=e.target;this.hasActions=n.assignedElements().length>0}handleIconChange(e){const n=e.target;this.hasIcon=n.assignedElements().length>0}handleAnchorIntersection(e){const{target:n,isIntersecting:r}=e;n===this.topAnchor&&(this.isAtScrollTop=r),n===this.bottomAnchor&&(this.isAtScrollBottom=r)}}td(yt);yt.shadowRootOptions={...On.shadowRootOptions,delegatesFocus:!0};te([Ue({type:Boolean})],yt.prototype,"open",null);te([Ue({attribute:!1})],yt.prototype,"returnValue",void 0);te([Ue()],yt.prototype,"type",void 0);te([Wn("dialog")],yt.prototype,"dialog",void 0);te([Wn(".scrim")],yt.prototype,"scrim",void 0);te([Wn(".container")],yt.prototype,"container",void 0);te([Wn(".headline")],yt.prototype,"headline",void 0);te([Wn(".content")],yt.prototype,"content",void 0);te([Wn(".actions")],yt.prototype,"actions",void 0);te([Ui()],yt.prototype,"isAtScrollTop",void 0);te([Ui()],yt.prototype,"isAtScrollBottom",void 0);te([Wn(".scroller")],yt.prototype,"scroller",void 0);te([Wn(".top.anchor")],yt.prototype,"topAnchor",void 0);te([Wn(".bottom.anchor")],yt.prototype,"bottomAnchor",void 0);te([Ui()],yt.prototype,"hasHeadline",void 0);te([Ui()],yt.prototype,"hasActions",void 0);te([Ui()],yt.prototype,"hasIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const W5=or`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-type: var(--md-dialog-headline-type, var(--md-sys-typescale-headline-small, 400 1.5rem / 2rem var(--md-ref-typeface-brand, Roboto)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-dialog-supporting-text-type, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font:var(--_headline-type);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;display:flex;gap:8px;margin:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);margin-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;margin-top:16px}.scrollable slot[name=headline]::slotted(*){margin-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){margin-top:8px}.container{border-radius:inherit;display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);content:"";inset:0;position:absolute}.scroller{flex:1;overflow:hidden;z-index:0}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font:var(--_supporting-text-type);position:relative}slot[name=content]::slotted(*){margin:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){display:flex;gap:8px;justify-content:flex-end;margin:16px 24px 24px}.has-actions slot[name=content]::slotted(*){margin-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Jp=class extends yt{};Jp.styles=[W5];Jp=te([Fi("md-dialog")],Jp);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const z5=or`:host{display:inline-flex;height:var(--_container-height);outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:var(--_label-text-type);color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var gS;class bn extends On{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[ko].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this[gS]=this.attachInternals(),this.handleActivationClick=e=>{!mS(e)||!this.buttonElement||(this.focus(),pS(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){const e=this.disabled&&!this.href,n=this.href?Bu`a`:Bu`button`,{ariaLabel:r,ariaHasPopup:i,ariaExpanded:s}=this;return lS`
      <${n}
        class="button ${Po(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${r||ye}"
        aria-haspopup="${i||ye}"
        aria-expanded="${s||ye}"
        href=${this.href||ye}
        target=${this.target||ye}
      >${this.renderContent()}</${n}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){var r,i;const e=this.disabled&&!this.href,n=mt`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return mt`
      ${(r=this.renderElevation)==null?void 0:r.call(this)}
      ${(i=this.renderOutline)==null?void 0:i.call(this)}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${e}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?ye:n}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?n:ye}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}gS=ko;td(bn),dS(bn);bn.formAssociated=!0;bn.shadowRootOptions={mode:"open",delegatesFocus:!0};te([Ue({type:Boolean,reflect:!0})],bn.prototype,"disabled",void 0);te([Ue()],bn.prototype,"href",void 0);te([Ue()],bn.prototype,"target",void 0);te([Ue({type:Boolean,attribute:"trailing-icon"})],bn.prototype,"trailingIcon",void 0);te([Ue({type:Boolean,attribute:"has-icon"})],bn.prototype,"hasIcon",void 0);te([Ue()],bn.prototype,"type",void 0);te([Ue()],bn.prototype,"value",void 0);te([Wn(".button")],bn.prototype,"buttonElement",void 0);te([XH({slot:"icon",flatten:!0})],bn.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class q5 extends bn{}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const K5=or`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-text-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Xp=class extends q5{};Xp.styles=[z5,K5];Xp=te([Fi("md-text-button")],Xp);const G5=["open"],Q5=Xe("div",{slot:"headline"},"Conferma identità",-1),Y5={key:0,slot:"content",id:"form-id",method:"dialog"},J5=["open"],X5=Xe("div",{slot:"headline"},"Codice non trovato",-1),Z5={key:0,slot:"content",id:"form-id",method:"dialog"},eW={slot:"actions"},tW=sr({__name:"Scanner",setup(t){const e=ct(),n=ct(),r=ct(!1),i=ct(!1);async function s(c){n.value=c;const l=await BC(Dl(Ll,`codes/${c}`),{once:!0}).promise.value;if(!l){i.value=!0;return}e.value=en(()=>l.user),r.value=!0}function o(){r.value=!1;const c=e.value.value;vj(Dl(Ll,`scans/${new Date().getTime()}`),{code:n.value,timestamp:new Date,username:c.username,userRef:Dl(Ll,`users/${c.id}`)})}function a(){r.value=!1}return(c,l)=>(gt(),yn($n,null,[Dt($5,{onCodeFound:s}),Xe("md-dialog",{onClose:l[0]||(l[0]=u=>r.value=!1),class:"removeDialog",type:"alert",open:r.value},[Q5,e.value&&e.value.value?(gt(),yn("form",Y5,[Xe("div",null," Il codice corrisponde a: "+X_(e.value.value.username),1)])):ss("",!0),Xe("div",{slot:"actions"},[Xe("md-text-button",{form:"form-id",value:"cancel",onClick:a},"Annulla"),Xe("md-text-button",{form:"form-id",value:"confirm",onClick:o},"Conferma")])],40,G5),Xe("md-dialog",{onClose:l[2]||(l[2]=u=>i.value=!1),class:"removeDialog",type:"alert",open:i.value},[X5,n.value?(gt(),yn("form",Z5,[Xe("div",null," Il codice non corrisponde a nessun utente. Contatta gli sviluppatori con il seguente codice: "+X_(n.value),1)])):ss("",!0),Xe("div",eW,[Xe("md-text-button",{form:"form-id",value:"congirm",onClick:l[1]||(l[1]=u=>i.value=!1)},"Ok")])],40,J5)],64))}}),nW=t=>(Ck("data-v-27e31cd3"),t=t(),Rk(),t),rW=["src"],iW=nW(()=>Xe("img",{class:"accountImage",src:"https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/llwijg0ncg0pyknjcmnk",alt:""},null,-1)),sW=sr({__name:"AccountImage",setup(t){var r;const e=Fm(),n=ct((r=e.value)==null?void 0:r.providerData[0].photoURL);return(i,s)=>{const o=qk("RouterLink");return gt(),yn("div",null,[Et(e)?(gt(),io(o,{key:0,to:"/myAccount"},{default:zl(()=>[Xe("img",{class:"accountImage",src:n.value,referrerpolicy:"no-referrer",alt:""},null,8,rW)]),_:1})):(gt(),io(o,{key:1,to:"/myAccount"},{default:zl(()=>[iW]),_:1}))])}}});const oW=iR(sW,[["__scopeId","data-v-27e31cd3"]]);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const aW=or`@media(forced-colors: active){:host{--md-switch-disabled-selected-icon-color: GrayText;--md-switch-disabled-selected-icon-opacity: 1;--md-switch-disabled-selected-track-color: GrayText;--md-switch-disabled-track-opacity: 1;--md-switch-disabled-handle-color: GrayText;--md-switch-disabled-handle-opacity: 1;--md-switch-disabled-icon-color: Canvas;--md-switch-disabled-icon-opacity: 1;--md-switch-selected-focus-track-color: ButtonText;--md-switch-selected-hover-track-color: ButtonText;--md-switch-selected-icon-color: ButtonText;--md-switch-selected-hover-icon-color: ButtonText;--md-switch-selected-focus-icon-color: ButtonText;--md-switch-selected-pressed-icon-color: ButtonText;--md-switch-selected-pressed-track-color: ButtonText;--md-switch-selected-track-color: ButtonText;--md-switch-focus-handle-color: ButtonText;--md-switch-handle-color: ButtonText;--md-switch-hover-handle-color: ButtonText;--md-switch-icon-color: Canvas;--md-switch-hover-icon-color: Canvas;--md-switch-focus-icon-color: Canvas;--md-switch-pressed-icon-color: Canvas;--md-switch-pressed-handle-color: ButtonText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Pr extends On{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.disabled=!1,this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.value="on",this.internals=this.attachInternals(),this.addEventListener("click",e=>{var n;mS(e)&&((n=this.button)==null||n.focus(),this.button!=null&&pS(this.button))})}update(e){const n=String(this.selected);this.internals.setFormValue(this.selected?this.value:null,n),super.update(e)}render(){return mt`
      <button
        id="switch"
        type="button"
        class="switch ${Po(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label=${this.ariaLabel||ye}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <md-focus-ring part="focus-ring"></md-focus-ring>
        <span class="track">
          ${this.renderHandle()}
        </span>
      </button>
    `}getRenderClasses(){return{"switch--selected":this.selected,"switch--unselected":!this.selected}}renderHandle(){const e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return mt`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${Po(e)}">
          ${this.shouldShowIcons()?this.renderIcons():mt``}
        </span>
      </span>
    `}renderIcons(){return mt`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?mt``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return mt`
      <svg class="icon icon--on" viewBox="0 0 24 24">
        <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z"/>
      </svg>
    `}renderOffIcon(){return mt`
      <svg class="icon icon--off" viewBox="0 0 24 24">
        <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"/>
      </svg>
    `}renderTouchTarget(){return mt`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleClick(){this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected=e==="true"}}td(Pr);Pr.shadowRootOptions={mode:"open",delegatesFocus:!0};Pr.formAssociated=!0;te([Ue({type:Boolean,reflect:!0})],Pr.prototype,"disabled",void 0);te([Ue({type:Boolean})],Pr.prototype,"selected",void 0);te([Ue({type:Boolean})],Pr.prototype,"icons",void 0);te([Ue({type:Boolean,attribute:"show-only-selected-icon"})],Pr.prototype,"showOnlySelectedIcon",void 0);te([Wn("button")],Pr.prototype,"button",void 0);te([Ue()],Pr.prototype,"value",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const cW=or`:host{--_disabled-selected-handle-color: var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));--_disabled-selected-handle-opacity: var(--md-switch-disabled-selected-handle-opacity, 1);--_disabled-selected-icon-color: var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-switch-disabled-selected-icon-opacity, 0.38);--_disabled-selected-track-color: var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-track-opacity: var(--md-switch-disabled-track-opacity, 0.12);--_handle-shape: var(--md-switch-handle-shape, 9999px);--_pressed-handle-height: var(--md-switch-pressed-handle-height, 28px);--_pressed-handle-width: var(--md-switch-pressed-handle-width, 28px);--_selected-focus-handle-color: var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-focus-icon-color: var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-focus-track-color: var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4));--_selected-handle-color: var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff));--_selected-handle-height: var(--md-switch-selected-handle-height, 24px);--_selected-handle-width: var(--md-switch-selected-handle-width, 24px);--_selected-hover-handle-color: var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-hover-icon-color: var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-hover-state-layer-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--_selected-hover-track-color: var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4));--_selected-icon-color: var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-icon-size: var(--md-switch-selected-icon-size, 16px);--_selected-pressed-handle-color: var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-pressed-icon-color: var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-pressed-state-layer-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12);--_selected-pressed-track-color: var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4));--_selected-track-color: var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4));--_state-layer-shape: var(--md-switch-state-layer-shape, 9999px);--_state-layer-size: var(--md-switch-state-layer-size, 40px);--_track-height: var(--md-switch-track-height, 32px);--_track-outline-width: var(--md-switch-track-outline-width, 2px);--_track-shape: var(--md-switch-track-shape, 9999px);--_track-width: var(--md-switch-track-width, 52px);--_with-icon-handle-height: var(--md-switch-with-icon-handle-height, 24px);--_with-icon-handle-width: var(--md-switch-with-icon-handle-width, 24px);--_disabled-handle-color: var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-opacity: var(--md-switch-disabled-handle-opacity, 0.38);--_disabled-icon-color: var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-icon-opacity: var(--md-switch-disabled-icon-opacity, 0.38);--_disabled-track-color: var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-track-outline-color: var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-handle-color: var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color: var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-color: var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-outline-color: var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-color: var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e));--_handle-height: var(--md-switch-handle-height, 16px);--_handle-width: var(--md-switch-handle-width, 16px);--_hover-handle-color: var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-state-layer-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--_hover-track-color: var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-track-outline-color: var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e));--_icon-color: var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_icon-size: var(--md-switch-icon-size, 16px);--_pressed-handle-color: var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-state-layer-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12);--_pressed-track-color: var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-track-outline-color: var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e));--_track-color: var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-outline-color: var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-shape-start-start: var( --md-switch-handle-shape-start-start, var(--_handle-shape) );--_handle-shape-start-end: var( --md-switch-handle-shape-start-end, var(--_handle-shape) );--_handle-shape-end-end: var( --md-switch-handle-shape-end-end, var(--_handle-shape) );--_handle-shape-end-start: var( --md-switch-handle-shape-end-start, var(--_handle-shape) );--_track-shape-start-start: var( --md-switch-track-shape-start-start, var(--_track-shape) );--_track-shape-start-end: var( --md-switch-track-shape-start-end, var(--_track-shape) );--_track-shape-end-end: var( --md-switch-track-shape-end-end, var(--_track-shape) );--_track-shape-end-start: var( --md-switch-track-shape-end-start, var(--_track-shape) );display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_track-height))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--_track-shape-start-start);--md-focus-ring-shape-start-end: var(--_track-shape-start-end);--md-focus-ring-shape-end-end: var(--_track-shape-end-end);--md-focus-ring-shape-end-start: var(--_track-shape-end-start)}.switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;padding:0;position:relative;width:var(--_track-width);height:var(--_track-height);border-start-start-radius:var(--_track-shape-start-start);border-start-end-radius:var(--_track-shape-start-end);border-end-end-radius:var(--_track-shape-end-end);border-end-start-radius:var(--_track-shape-end-start)}.touch{position:absolute;height:48px;width:100%}:host([touch-target=none]) .touch{display:none}.switch:disabled{cursor:default;pointer-events:none}.switch:disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.switch:disabled .track::before{background-clip:content-box}.switch--selected:disabled .track{background-clip:border-box}.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.switch:disabled .track::before,.switch:disabled .track::after{transition:none;opacity:var(--_disabled-track-opacity)}.switch--selected .track::before{background-color:var(--_selected-track-color)}.switch--selected:hover .track::before{background-color:var(--_selected-hover-track-color)}.switch--selected:focus-within .track::before{background-color:var(--_selected-focus-track-color)}.switch--selected:active .track::before{background-color:var(--_selected-pressed-track-color)}.switch--selected:disabled .track::before{background-color:var(--_disabled-selected-track-color)}.switch--unselected .track::before{background-color:var(--_track-color);border-color:var(--_track-outline-color);border-style:solid;border-width:var(--_track-outline-width)}.switch--unselected:hover .track::before{background-color:var(--_hover-track-color);border-color:var(--_hover-track-outline-color)}.switch--unselected:focus-visible .track::before{background-color:var(--_focus-track-color);border-color:var(--_focus-track-outline-color)}.switch--unselected:active .track::before{background-color:var(--_pressed-track-color);border-color:var(--_pressed-track-outline-color)}.switch--unselected:disabled .track::before{background-color:var(--_disabled-track-color);border-color:var(--_disabled-track-outline-color)}.handle-container{display:grid;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.switch--selected .handle-container{margin-inline-start:calc(var(--_track-width) - var(--_track-height))}.switch--unselected .handle-container{margin-inline-end:calc(var(--_track-width) - var(--_track-height))}.switch:disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--_handle-shape-start-start);border-start-end-radius:var(--_handle-shape-start-end);border-end-end-radius:var(--_handle-shape-end-end);border-end-start-radius:var(--_handle-shape-end-start);height:var(--_handle-height);width:var(--_handle-width);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.switch:disabled .handle,.switch:disabled .handle::before{transition:none}.switch--selected .handle{height:var(--_selected-handle-height);width:var(--_selected-handle-width)}.handle.with-icon{height:var(--_with-icon-handle-height);width:var(--_with-icon-handle-width)}.switch--selected:enabled:active .handle,.switch--unselected:enabled:active .handle{height:var(--_pressed-handle-height);width:var(--_pressed-handle-width);transition-timing-function:linear;transition-duration:100ms}.switch--selected .handle::before{background-color:var(--_selected-handle-color)}.switch--selected:hover .handle::before{background-color:var(--_selected-hover-handle-color)}.switch--selected:focus-within .handle::before{background-color:var(--_selected-focus-handle-color)}.switch--selected:active .handle::before{background-color:var(--_selected-pressed-handle-color)}.switch--selected:disabled .handle::before{background-color:var(--_disabled-selected-handle-color);opacity:var(--_disabled-selected-handle-opacity)}.switch--unselected .handle::before{background-color:var(--_handle-color)}.switch--unselected:hover .handle::before{background-color:var(--_hover-handle-color)}.switch--unselected:focus-within .handle::before{background-color:var(--_focus-handle-color)}.switch--unselected:active .handle::before{background-color:var(--_pressed-handle-color)}.switch--unselected:disabled .handle::before{background-color:var(--_disabled-handle-color);opacity:var(--_disabled-handle-opacity)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.switch--selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.switch--unselected md-ripple{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.switch:disabled .icon{transition:none}.switch--selected .icon--on,.switch--unselected .icon--off{opacity:1}.switch--unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--_icon-size);height:var(--_icon-size);fill:var(--_icon-color)}.switch--unselected:hover .icon--off{fill:var(--_hover-icon-color)}.switch--unselected:focus-within .icon--off{fill:var(--_focus-icon-color)}.switch--unselected:active .icon--off{fill:var(--_pressed-icon-color)}.switch--unselected:disabled .icon--off{fill:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.icon--on{width:var(--_selected-icon-size);height:var(--_selected-icon-size);fill:var(--_selected-icon-color)}.switch--selected:hover .icon--on{fill:var(--_selected-hover-icon-color)}.switch--selected:focus-within .icon--on{fill:var(--_selected-focus-icon-color)}.switch--selected:active .icon--on{fill:var(--_selected-pressed-icon-color)}.switch--selected:disabled .icon--on{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=switch-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Zp=class extends Pr{};Zp.styles=[cW,aW];Zp=te([Fi("md-switch")],Zp);const lW={key:1,class:"section"},uW={class:"scanner"},hW=Xe("div",{class:"text"}," Scansiona un codice e conferma l'identità per timbrare ",-1),dW={key:2,class:"section"},fW={class:"code"},pW=Xe("div",{class:"text"}," Questo è il tuo codice, mostralo per timbrare ",-1),mW=sr({__name:"HomeView",setup(t){var a;const e=Fm(),n=BC(Dl(Ll,`users/${(a=e.value)==null?void 0:a.uid}`)),r=en(()=>{var c;return((c=n.value)==null?void 0:c.role)==="scanner"}),i=en(()=>{var c;return(c=n.value)==null?void 0:c.actualCode}),s=ct(window.innerWidth),o=()=>s.value=window.innerWidth;return window.addEventListener("resize",o),Zu(()=>window.removeEventListener("resize",o)),(c,l)=>(gt(),yn("main",null,[s.value<900||!Et(e)?(gt(),io(oW,{key:0})):ss("",!0),r.value?(gt(),yn("div",lW,[Xe("div",uW,[Dt(tW)]),hW])):ss("",!0),!r.value&&i.value?(gt(),yn("div",dW,[Xe("div",fW,[Dt(Z6,{codeString:i.value},null,8,["codeString"])]),pW])):ss("",!0)]))}});const _S=rx({history:wO("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!0},component:mW},{path:"/login",name:"login",component:()=>o0(()=>import("./LoginView-c8798d19.js"),["assets/LoginView-c8798d19.js","assets/filled-button-2daeef8d.js","assets/LoginView-82260fdb.css"])},{path:"/myAccount",name:"myAccount",meta:{requiresAuth:!0},component:()=>o0(()=>import("./UserView-27545e1f.js"),["assets/UserView-27545e1f.js","assets/filled-button-2daeef8d.js","assets/UserView-da84faf4.css"])}]});_S.beforeEach(async t=>{if(t.meta.requiresAuth&&!await P2())return{path:"/login",query:{redirect:t.fullPath}}});const rd=JN(i6);rd.use(tO());rd.use(_S);rd.use(r6,{firebaseApp:g_,modules:[n6()]});rd.mount("#app");export{gW as $,ye as A,gt as B,Ck as C,d5 as D,_c as E,Rk as F,yW as G,wW as H,vj as I,Dl as J,Ll as K,vW as L,iR as M,bn as N,z5 as O,ui as P,gm as Q,IW as R,mN as S,bs as T,TW as U,bW as V,Fm as W,Et as X,Dt as Y,$n as Z,te as _,or as a,BC as a0,kW as a1,PW as a2,io as a3,EW as a4,v5 as b,w5 as c,y5 as d,Fi as e,lS as f,F5 as g,Bu as h,Wn as i,sr as j,ct as k,XH as l,yn as m,Ue as n,Po as o,Xe as p,il as q,td as r,On as s,Ui as t,NW as u,_W as v,Mk as w,mt as x,X_ as y,ss as z};
