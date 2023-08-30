(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Gp(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Je={},js=[],Jn=()=>{},v1=()=>!1,w1=/^on[^a-z]/,Fu=t=>w1.test(t),Qp=t=>t.startsWith("onUpdate:"),Dt=Object.assign,Yp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},E1=Object.prototype.hasOwnProperty,Ne=(t,e)=>E1.call(t,e),le=Array.isArray,Hs=t=>Uu(t)==="[object Map]",B0=t=>Uu(t)==="[object Set]",ye=t=>typeof t=="function",Tt=t=>typeof t=="string",Jp=t=>typeof t=="symbol",ot=t=>t!==null&&typeof t=="object",j0=t=>ot(t)&&ye(t.then)&&ye(t.catch),H0=Object.prototype.toString,Uu=t=>H0.call(t),T1=t=>Uu(t).slice(8,-1),W0=t=>Uu(t)==="[object Object]",Xp=t=>Tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wl=Gp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},I1=/-(\w)/g,vr=Bu(t=>t.replace(I1,(e,n)=>n?n.toUpperCase():"")),b1=/\B([A-Z])/g,Ro=Bu(t=>t.replace(b1,"-$1").toLowerCase()),ju=Bu(t=>t.charAt(0).toUpperCase()+t.slice(1)),hd=Bu(t=>t?`on${ju(t)}`:""),Ma=(t,e)=>!Object.is(t,e),El=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_f=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let K_;const yf=()=>K_||(K_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zp(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Tt(r)?S1(r):Zp(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Tt(t))return t;if(ot(t))return t}}const A1=/;(?![^(]*\))/g,C1=/:([^]+)/,R1=/\/\*[^]*?\*\//g;function S1(t){const e={};return t.replace(R1,"").split(A1).forEach(n=>{if(n){const r=n.split(C1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Hu(t){let e="";if(Tt(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Hu(t[n]);r&&(e+=r+" ")}else if(ot(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const P1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",k1=Gp(P1);function z0(t){return!!t||t===""}const G_=t=>Tt(t)?t:t==null?"":le(t)||ot(t)&&(t.toString===H0||!ye(t.toString))?JSON.stringify(t,q0,2):String(t),q0=(t,e)=>e&&e.__v_isRef?q0(t,e.value):Hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:B0(e)?{[`Set(${e.size})`]:[...e.values()]}:ot(e)&&!le(e)&&!W0(e)?String(e):e;let bn;class K0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bn,!e&&bn&&(this.index=(bn.scopes||(bn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bn;try{return bn=this,e()}finally{bn=n}}}on(){bn=this}off(){bn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function G0(t){return new K0(t)}function N1(t,e=bn){e&&e.active&&e.effects.push(t)}function Q0(){return bn}function O1(t){bn&&bn.cleanups.push(t)}const em=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Y0=t=>(t.w&Ii)>0,J0=t=>(t.n&Ii)>0,x1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ii},D1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Y0(i)&&!J0(i)?i.delete(t):e[n++]=i,i.w&=~Ii,i.n&=~Ii}e.length=n}},Ul=new WeakMap;let oa=0,Ii=1;const vf=30;let zn;const ts=Symbol(""),wf=Symbol("");class tm{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,N1(this,r)}run(){if(!this.active)return this.fn();let e=zn,n=gi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=zn,zn=this,gi=!0,Ii=1<<++oa,oa<=vf?x1(this):Q_(this),this.fn()}finally{oa<=vf&&D1(this),Ii=1<<--oa,zn=this.parent,gi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){zn===this?this.deferStop=!0:this.active&&(Q_(this),this.onStop&&this.onStop(),this.active=!1)}}function Q_(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gi=!0;const X0=[];function So(){X0.push(gi),gi=!1}function Po(){const t=X0.pop();gi=t===void 0?!0:t}function yn(t,e,n){if(gi&&zn){let r=Ul.get(t);r||Ul.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=em()),Z0(i)}}function Z0(t,e){let n=!1;oa<=vf?J0(t)||(t.n|=Ii,n=!Y0(t)):n=!t.has(zn),n&&(t.add(zn),zn.deps.push(t))}function zr(t,e,n,r,i,s){const o=Ul.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&le(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":le(t)?Xp(n)&&a.push(o.get("length")):(a.push(o.get(ts)),Hs(t)&&a.push(o.get(wf)));break;case"delete":le(t)||(a.push(o.get(ts)),Hs(t)&&a.push(o.get(wf)));break;case"set":Hs(t)&&a.push(o.get(ts));break}if(a.length===1)a[0]&&Ef(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ef(em(c))}}function Ef(t,e){const n=le(t)?t:[...t];for(const r of n)r.computed&&Y_(r);for(const r of n)r.computed||Y_(r)}function Y_(t,e){(t!==zn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function M1(t,e){var n;return(n=Ul.get(t))==null?void 0:n.get(e)}const L1=Gp("__proto__,__v_isRef,__isVue"),eE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jp)),V1=nm(),$1=nm(!1,!0),F1=nm(!0),J_=U1();function U1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Le(this);for(let s=0,o=this.length;s<o;s++)yn(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Le)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){So();const r=Le(this)[e].apply(this,n);return Po(),r}}),t}function B1(t){const e=Le(this);return yn(e,"has",t),e.hasOwnProperty(t)}function nm(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?rk:sE:e?iE:rE).get(r))return r;const o=le(r);if(!t){if(o&&Ne(J_,i))return Reflect.get(J_,i,s);if(i==="hasOwnProperty")return B1}const a=Reflect.get(r,i,s);return(Jp(i)?eE.has(i):L1(i))||(t||yn(r,"get",i),e)?a:Ot(a)?o&&Xp(i)?a:a.value:ot(a)?t?aE(a):zu(a):a}}const j1=tE(),H1=tE(!0);function tE(t=!1){return function(n,r,i,s){let o=n[r];if(to(o)&&Ot(o)&&!Ot(i))return!1;if(!t&&(!Bl(i)&&!to(i)&&(o=Le(o),i=Le(i)),!le(n)&&Ot(o)&&!Ot(i)))return o.value=i,!0;const a=le(n)&&Xp(r)?Number(r)<n.length:Ne(n,r),c=Reflect.set(n,r,i,s);return n===Le(s)&&(a?Ma(i,o)&&zr(n,"set",r,i):zr(n,"add",r,i)),c}}function W1(t,e){const n=Ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&zr(t,"delete",e,void 0),r}function z1(t,e){const n=Reflect.has(t,e);return(!Jp(e)||!eE.has(e))&&yn(t,"has",e),n}function q1(t){return yn(t,"iterate",le(t)?"length":ts),Reflect.ownKeys(t)}const nE={get:V1,set:j1,deleteProperty:W1,has:z1,ownKeys:q1},K1={get:F1,set(t,e){return!0},deleteProperty(t,e){return!0}},G1=Dt({},nE,{get:$1,set:H1}),rm=t=>t,Wu=t=>Reflect.getPrototypeOf(t);function Yc(t,e,n=!1,r=!1){t=t.__v_raw;const i=Le(t),s=Le(e);n||(e!==s&&yn(i,"get",e),yn(i,"get",s));const{has:o}=Wu(i),a=r?rm:n?am:La;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Jc(t,e=!1){const n=this.__v_raw,r=Le(n),i=Le(t);return e||(t!==i&&yn(r,"has",t),yn(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Xc(t,e=!1){return t=t.__v_raw,!e&&yn(Le(t),"iterate",ts),Reflect.get(t,"size",t)}function X_(t){t=Le(t);const e=Le(this);return Wu(e).has.call(e,t)||(e.add(t),zr(e,"add",t,t)),this}function Z_(t,e){e=Le(e);const n=Le(this),{has:r,get:i}=Wu(n);let s=r.call(n,t);s||(t=Le(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Ma(e,o)&&zr(n,"set",t,e):zr(n,"add",t,e),this}function ey(t){const e=Le(this),{has:n,get:r}=Wu(e);let i=n.call(e,t);i||(t=Le(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&zr(e,"delete",t,void 0),s}function ty(){const t=Le(this),e=t.size!==0,n=t.clear();return e&&zr(t,"clear",void 0,void 0),n}function Zc(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Le(o),c=e?rm:t?am:La;return!t&&yn(a,"iterate",ts),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function el(t,e,n){return function(...r){const i=this.__v_raw,s=Le(i),o=Hs(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?rm:e?am:La;return!e&&yn(s,"iterate",c?wf:ts),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function ni(t){return function(...e){return t==="delete"?!1:this}}function Q1(){const t={get(s){return Yc(this,s)},get size(){return Xc(this)},has:Jc,add:X_,set:Z_,delete:ey,clear:ty,forEach:Zc(!1,!1)},e={get(s){return Yc(this,s,!1,!0)},get size(){return Xc(this)},has:Jc,add:X_,set:Z_,delete:ey,clear:ty,forEach:Zc(!1,!0)},n={get(s){return Yc(this,s,!0)},get size(){return Xc(this,!0)},has(s){return Jc.call(this,s,!0)},add:ni("add"),set:ni("set"),delete:ni("delete"),clear:ni("clear"),forEach:Zc(!0,!1)},r={get(s){return Yc(this,s,!0,!0)},get size(){return Xc(this,!0)},has(s){return Jc.call(this,s,!0)},add:ni("add"),set:ni("set"),delete:ni("delete"),clear:ni("clear"),forEach:Zc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=el(s,!1,!1),n[s]=el(s,!0,!1),e[s]=el(s,!1,!0),r[s]=el(s,!0,!0)}),[t,n,e,r]}const[Y1,J1,X1,Z1]=Q1();function im(t,e){const n=e?t?Z1:X1:t?J1:Y1;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Ne(n,i)&&i in r?n:r,i,s)}const ek={get:im(!1,!1)},tk={get:im(!1,!0)},nk={get:im(!0,!1)},rE=new WeakMap,iE=new WeakMap,sE=new WeakMap,rk=new WeakMap;function ik(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sk(t){return t.__v_skip||!Object.isExtensible(t)?0:ik(T1(t))}function zu(t){return to(t)?t:sm(t,!1,nE,ek,rE)}function oE(t){return sm(t,!1,G1,tk,iE)}function aE(t){return sm(t,!0,K1,nk,sE)}function sm(t,e,n,r,i){if(!ot(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=sk(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Ws(t){return to(t)?Ws(t.__v_raw):!!(t&&t.__v_isReactive)}function to(t){return!!(t&&t.__v_isReadonly)}function Bl(t){return!!(t&&t.__v_isShallow)}function cE(t){return Ws(t)||to(t)}function Le(t){const e=t&&t.__v_raw;return e?Le(e):t}function om(t){return Fl(t,"__v_skip",!0),t}const La=t=>ot(t)?zu(t):t,am=t=>ot(t)?aE(t):t;function lE(t){gi&&zn&&(t=Le(t),Z0(t.dep||(t.dep=em())))}function uE(t,e){t=Le(t);const n=t.dep;n&&Ef(n)}function Ot(t){return!!(t&&t.__v_isRef===!0)}function ct(t){return dE(t,!1)}function hE(t){return dE(t,!0)}function dE(t,e){return Ot(t)?t:new ok(t,e)}class ok{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Le(e),this._value=n?e:La(e)}get value(){return lE(this),this._value}set value(e){const n=this.__v_isShallow||Bl(e)||to(e);e=n?e:Le(e),Ma(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:La(e),uE(this))}}function vt(t){return Ot(t)?t.value:t}const ak={get:(t,e,n)=>vt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ot(i)&&!Ot(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function fE(t){return Ws(t)?t:new Proxy(t,ak)}function ck(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=uk(t,n);return e}class lk{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return M1(Le(this._object),this._key)}}function uk(t,e,n){const r=t[e];return Ot(r)?r:new lk(t,e,n)}class hk{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new tm(e,()=>{this._dirty||(this._dirty=!0,uE(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Le(this);return lE(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function dk(t,e,n=!1){let r,i;const s=ye(t);return s?(r=t,i=Jn):(r=t.get,i=t.set),new hk(r,i,s||!i,n)}function _i(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){qu(s,e,n)}return i}function Xn(t,e,n,r){if(ye(t)){const s=_i(t,e,n,r);return s&&j0(s)&&s.catch(o=>{qu(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Xn(t[s],e,n,r));return i}function qu(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){_i(c,null,10,[t,o,a]);return}}fk(t,n,i,r)}function fk(t,e,n,r=!0){console.error(t)}let Va=!1,Tf=!1;const Xt=[];let cr=0;const zs=[];let Mr=null,zi=0;const pE=Promise.resolve();let cm=null;function mE(t){const e=cm||pE;return t?e.then(this?t.bind(this):t):e}function pk(t){let e=cr+1,n=Xt.length;for(;e<n;){const r=e+n>>>1;$a(Xt[r])<t?e=r+1:n=r}return e}function lm(t){(!Xt.length||!Xt.includes(t,Va&&t.allowRecurse?cr+1:cr))&&(t.id==null?Xt.push(t):Xt.splice(pk(t.id),0,t),gE())}function gE(){!Va&&!Tf&&(Tf=!0,cm=pE.then(yE))}function mk(t){const e=Xt.indexOf(t);e>cr&&Xt.splice(e,1)}function gk(t){le(t)?zs.push(...t):(!Mr||!Mr.includes(t,t.allowRecurse?zi+1:zi))&&zs.push(t),gE()}function ny(t,e=Va?cr+1:0){for(;e<Xt.length;e++){const n=Xt[e];n&&n.pre&&(Xt.splice(e,1),e--,n())}}function _E(t){if(zs.length){const e=[...new Set(zs)];if(zs.length=0,Mr){Mr.push(...e);return}for(Mr=e,Mr.sort((n,r)=>$a(n)-$a(r)),zi=0;zi<Mr.length;zi++)Mr[zi]();Mr=null,zi=0}}const $a=t=>t.id==null?1/0:t.id,_k=(t,e)=>{const n=$a(t)-$a(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function yE(t){Tf=!1,Va=!0,Xt.sort(_k);const e=Jn;try{for(cr=0;cr<Xt.length;cr++){const n=Xt[cr];n&&n.active!==!1&&_i(n,null,14)}}finally{cr=0,Xt.length=0,_E(),Va=!1,cm=null,(Xt.length||zs.length)&&yE()}}function yk(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Je;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||Je;p&&(i=n.map(m=>Tt(m)?m.trim():m)),h&&(i=n.map(_f))}let a,c=r[a=hd(e)]||r[a=hd(vr(e))];!c&&s&&(c=r[a=hd(Ro(e))]),c&&Xn(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xn(l,t,6,i)}}function vE(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ye(t)){const c=l=>{const u=vE(l,e,!0);u&&(a=!0,Dt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(ot(t)&&r.set(t,null),null):(le(s)?s.forEach(c=>o[c]=null):Dt(o,s),ot(t)&&r.set(t,o),o)}function Ku(t,e){return!t||!Fu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,Ro(e))||Ne(t,e))}let jt=null,Gu=null;function jl(t){const e=jt;return jt=t,Gu=t&&t.type.__scopeId||null,e}function vk(t){Gu=t}function wk(){Gu=null}function Hl(t,e=jt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&fy(-1);const s=jl(e);let o;try{o=t(...i)}finally{jl(s),r._d&&fy(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dd(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:m,ctx:y,inheritAttrs:v}=t;let b,A;const k=jl(t);try{if(n.shapeFlag&4){const P=i||r;b=ar(u.call(P,P,h,s,m,p,y)),A=c}else{const P=e;b=ar(P.length>1?P(s,{attrs:c,slots:a,emit:l}):P(s,null)),A=e.props?c:Ek(c)}}catch(P){wa.length=0,qu(P,t,1),b=xt(bi)}let N=b;if(A&&v!==!1){const P=Object.keys(A),{shapeFlag:j}=N;P.length&&j&7&&(o&&P.some(Qp)&&(A=Tk(A,o)),N=ro(N,A))}return n.dirs&&(N=ro(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),b=N,jl(k),b}const Ek=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fu(n))&&((e||(e={}))[n]=t[n]);return e},Tk=(t,e)=>{const n={};for(const r in t)(!Qp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ik(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ry(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!Ku(l,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ry(r,o,l):!0:!!o;return!1}function ry(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Ku(n,s))return!0}return!1}function bk({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ak=t=>t.__isSuspense;function Ck(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):gk(t)}const tl={};function Br(t,e,n){return wE(t,e,n)}function wE(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Je){var a;const c=Q0()===((a=kt)==null?void 0:a.scope)?kt:null;let l,u=!1,h=!1;if(Ot(t)?(l=()=>t.value,u=Bl(t)):Ws(t)?(l=()=>t,r=!0):le(t)?(h=!0,u=t.some(P=>Ws(P)||Bl(P)),l=()=>t.map(P=>{if(Ot(P))return P.value;if(Ws(P))return Ki(P);if(ye(P))return _i(P,c,2)})):ye(t)?e?l=()=>_i(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Xn(t,c,3,[m])}:l=Jn,e&&r){const P=l;l=()=>Ki(P())}let p,m=P=>{p=k.onStop=()=>{_i(P,c,4)}},y;if(Ua)if(m=Jn,e?n&&Xn(e,c,3,[l(),h?[]:void 0,m]):l(),i==="sync"){const P=wN();y=P.__watcherHandles||(P.__watcherHandles=[])}else return Jn;let v=h?new Array(t.length).fill(tl):tl;const b=()=>{if(k.active)if(e){const P=k.run();(r||u||(h?P.some((j,W)=>Ma(j,v[W])):Ma(P,v)))&&(p&&p(),Xn(e,c,3,[P,v===tl?void 0:h&&v[0]===tl?[]:v,m]),v=P)}else k.run()};b.allowRecurse=!!e;let A;i==="sync"?A=b:i==="post"?A=()=>mn(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),A=()=>lm(b));const k=new tm(l,A);e?n?b():v=k.run():i==="post"?mn(k.run.bind(k),c&&c.suspense):k.run();const N=()=>{k.stop(),c&&c.scope&&Yp(c.scope.effects,k)};return y&&y.push(N),N}function Rk(t,e,n){const r=this.proxy,i=Tt(t)?t.includes(".")?EE(r,t):()=>r[t]:t.bind(r,r);let s;ye(e)?s=e:(s=e.handler,n=e);const o=kt;io(this);const a=wE(i,s.bind(r),n);return o?io(o):ns(),a}function EE(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Ki(t,e){if(!ot(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ot(t))Ki(t.value,e);else if(le(t))for(let n=0;n<t.length;n++)Ki(t[n],e);else if(B0(t)||Hs(t))t.forEach(n=>{Ki(n,e)});else if(W0(t))for(const n in t)Ki(t[n],e);return t}function Sk(t,e){const n=jt;if(n===null)return t;const r=Zu(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Je]=e[s];o&&(ye(o)&&(o={mounted:o,updated:o}),o.deep&&Ki(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ui(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(So(),Xn(c,n,8,[t.el,a,t,e]),Po())}}function ir(t,e){return ye(t)?(()=>Dt({name:t.name},e,{setup:t}))():t}const ya=t=>!!t.type.__asyncLoader,TE=t=>t.type.__isKeepAlive;function Pk(t,e){IE(t,"a",e)}function kk(t,e){IE(t,"da",e)}function IE(t,e,n=kt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Qu(e,r,n),n){let i=n.parent;for(;i&&i.parent;)TE(i.parent.vnode)&&Nk(r,e,n,i),i=i.parent}}function Nk(t,e,n,r){const i=Qu(e,t,r,!0);Yu(()=>{Yp(r[e],i)},n)}function Qu(t,e,n=kt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;So(),io(n);const a=Xn(e,n,t,o);return ns(),Po(),a});return r?i.unshift(s):i.push(s),s}}const Jr=t=>(e,n=kt)=>(!Ua||t==="sp")&&Qu(t,(...r)=>e(...r),n),Ok=Jr("bm"),um=Jr("m"),xk=Jr("bu"),Dk=Jr("u"),Mk=Jr("bum"),Yu=Jr("um"),bE=Jr("sp"),Lk=Jr("rtg"),Vk=Jr("rtc");function $k(t,e=kt){Qu("ec",t,e)}const AE="components";function Fk(t,e){return Bk(AE,t,!0,e)||t}const Uk=Symbol.for("v-ndc");function Bk(t,e,n=!0,r=!1){const i=jt||kt;if(i){const s=i.type;if(t===AE){const a=_N(s,!1);if(a&&(a===e||a===vr(e)||a===ju(vr(e))))return s}const o=iy(i[t]||s[t],e)||iy(i.appContext[t],e);return!o&&r?s:o}}function iy(t,e){return t&&(t[e]||t[vr(e)]||t[ju(vr(e))])}function sW(t,e,n,r){let i;const s=n&&n[r];if(le(t)||Tt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(ot(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function CE(t,e,n={},r,i){if(jt.isCE||jt.parent&&ya(jt.parent)&&jt.parent.isCE)return e!=="default"&&(n.name=e),xt("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),Et();const o=s&&RE(s(n)),a=no(Mn,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function RE(t){return t.some(e=>ql(e)?!(e.type===bi||e.type===Mn&&!RE(e.children)):!0)?t:null}const If=t=>t?FE(t)?Zu(t)||t.proxy:If(t.parent):null,va=Dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>If(t.parent),$root:t=>If(t.root),$emit:t=>t.emit,$options:t=>hm(t),$forceUpdate:t=>t.f||(t.f=()=>lm(t.update)),$nextTick:t=>t.n||(t.n=mE.bind(t.proxy)),$watch:t=>Rk.bind(t)}),fd=(t,e)=>t!==Je&&!t.__isScriptSetup&&Ne(t,e),jk={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(fd(r,e))return o[e]=1,r[e];if(i!==Je&&Ne(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&Ne(l,e))return o[e]=3,s[e];if(n!==Je&&Ne(n,e))return o[e]=4,n[e];bf&&(o[e]=0)}}const u=va[e];let h,p;if(u)return e==="$attrs"&&yn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Je&&Ne(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Ne(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return fd(i,e)?(i[e]=n,!0):r!==Je&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Je&&Ne(t,o)||fd(e,o)||(a=s[0])&&Ne(a,o)||Ne(r,o)||Ne(va,o)||Ne(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sy(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let bf=!0;function Hk(t){const e=hm(t),n=t.proxy,r=t.ctx;bf=!1,e.beforeCreate&&oy(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:y,activated:v,deactivated:b,beforeDestroy:A,beforeUnmount:k,destroyed:N,unmounted:P,render:j,renderTracked:W,renderTriggered:ae,errorCaptured:ge,serverPrefetch:ze,expose:Re,inheritAttrs:ht,components:$t,directives:Ge,filters:Sr}=e;if(l&&Wk(l,r,null),o)for(const Ve in o){const Te=o[Ve];ye(Te)&&(r[Ve]=Te.bind(n))}if(i){const Ve=i.call(n,n);ot(Ve)&&(t.data=zu(Ve))}if(bf=!0,s)for(const Ve in s){const Te=s[Ve],Tn=ye(Te)?Te.bind(n,n):ye(Te.get)?Te.get.bind(n,n):Jn,It=!ye(Te)&&ye(Te.set)?Te.set.bind(n):Jn,bt=Zt({get:Tn,set:It});Object.defineProperty(r,Ve,{enumerable:!0,configurable:!0,get:()=>bt.value,set:At=>bt.value=At})}if(a)for(const Ve in a)SE(a[Ve],r,n,Ve);if(c){const Ve=ye(c)?c.call(n):c;Reflect.ownKeys(Ve).forEach(Te=>{Tl(Te,Ve[Te])})}u&&oy(u,t,"c");function je(Ve,Te){le(Te)?Te.forEach(Tn=>Ve(Tn.bind(n))):Te&&Ve(Te.bind(n))}if(je(Ok,h),je(um,p),je(xk,m),je(Dk,y),je(Pk,v),je(kk,b),je($k,ge),je(Vk,W),je(Lk,ae),je(Mk,k),je(Yu,P),je(bE,ze),le(Re))if(Re.length){const Ve=t.exposed||(t.exposed={});Re.forEach(Te=>{Object.defineProperty(Ve,Te,{get:()=>n[Te],set:Tn=>n[Te]=Tn})})}else t.exposed||(t.exposed={});j&&t.render===Jn&&(t.render=j),ht!=null&&(t.inheritAttrs=ht),$t&&(t.components=$t),Ge&&(t.directives=Ge)}function Wk(t,e,n=Jn){le(t)&&(t=Af(t));for(const r in t){const i=t[r];let s;ot(i)?"default"in i?s=Rn(i.from||r,i.default,!0):s=Rn(i.from||r):s=Rn(i),Ot(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function oy(t,e,n){Xn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function SE(t,e,n,r){const i=r.includes(".")?EE(n,r):()=>n[r];if(Tt(t)){const s=e[t];ye(s)&&Br(i,s)}else if(ye(t))Br(i,t.bind(n));else if(ot(t))if(le(t))t.forEach(s=>SE(s,e,n,r));else{const s=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(s)&&Br(i,s,t)}}function hm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>Wl(c,l,o,!0)),Wl(c,e,o)),ot(e)&&s.set(e,c),c}function Wl(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Wl(t,s,n,!0),i&&i.forEach(o=>Wl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=zk[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const zk={data:ay,props:cy,emits:cy,methods:aa,computed:aa,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:aa,directives:aa,watch:Kk,provide:ay,inject:qk};function ay(t,e){return e?t?function(){return Dt(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function qk(t,e){return aa(Af(t),Af(e))}function Af(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function un(t,e){return t?[...new Set([].concat(t,e))]:e}function aa(t,e){return t?Dt(Object.create(null),t,e):e}function cy(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:Dt(Object.create(null),sy(t),sy(e??{})):e}function Kk(t,e){if(!t)return e;if(!e)return t;const n=Dt(Object.create(null),t);for(const r in e)n[r]=un(t[r],e[r]);return n}function PE(){return{app:null,config:{isNativeTag:v1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gk=0;function Qk(t,e){return function(r,i=null){ye(r)||(r=Dt({},r)),i!=null&&!ot(i)&&(i=null);const s=PE(),o=new Set;let a=!1;const c=s.app={_uid:Gk++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:EN,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&ye(l.install)?(o.add(l),l.install(c,...u)):ye(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const p=xt(r,i);return p.appContext=s,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Zu(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){zl=c;try{return l()}finally{zl=null}}};return c}}let zl=null;function Tl(t,e){if(kt){let n=kt.provides;const r=kt.parent&&kt.parent.provides;r===n&&(n=kt.provides=Object.create(r)),n[t]=e}}function Rn(t,e,n=!1){const r=kt||jt;if(r||zl){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:zl._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ye(e)?e.call(r&&r.proxy):e}}function Yk(t,e,n,r=!1){const i={},s={};Fl(s,Xu,1),t.propsDefaults=Object.create(null),kE(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:oE(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Jk(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Le(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Ku(t.emitsOptions,p))continue;const m=e[p];if(c)if(Ne(s,p))m!==s[p]&&(s[p]=m,l=!0);else{const y=vr(p);i[y]=Cf(c,a,y,m,t,!1)}else m!==s[p]&&(s[p]=m,l=!0)}}}else{kE(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!Ne(e,h)&&((u=Ro(h))===h||!Ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Cf(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Ne(e,h))&&(delete s[h],l=!0)}l&&zr(t,"set","$attrs")}function kE(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(wl(c))continue;const l=e[c];let u;i&&Ne(i,u=vr(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ku(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=Le(n),l=a||Je;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Cf(i,c,h,l[h],t,!Ne(l,h))}}return o}function Cf(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ye(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(io(i),r=l[n]=c.call(null,e),ns())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Ro(n))&&(r=!0))}return r}function NE(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ye(t)){const u=h=>{c=!0;const[p,m]=NE(h,e,!0);Dt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return ot(t)&&r.set(t,js),js;if(le(s))for(let u=0;u<s.length;u++){const h=vr(s[u]);ly(h)&&(o[h]=Je)}else if(s)for(const u in s){const h=vr(u);if(ly(h)){const p=s[u],m=o[h]=le(p)||ye(p)?{type:p}:Dt({},p);if(m){const y=dy(Boolean,m.type),v=dy(String,m.type);m[0]=y>-1,m[1]=v<0||y<v,(y>-1||Ne(m,"default"))&&a.push(h)}}}const l=[o,a];return ot(t)&&r.set(t,l),l}function ly(t){return t[0]!=="$"}function uy(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function hy(t,e){return uy(t)===uy(e)}function dy(t,e){return le(e)?e.findIndex(n=>hy(n,t)):ye(e)&&hy(e,t)?0:-1}const OE=t=>t[0]==="_"||t==="$stable",dm=t=>le(t)?t.map(ar):[ar(t)],Xk=(t,e,n)=>{if(e._n)return e;const r=Hl((...i)=>dm(e(...i)),n);return r._c=!1,r},xE=(t,e,n)=>{const r=t._ctx;for(const i in t){if(OE(i))continue;const s=t[i];if(ye(s))e[i]=Xk(i,s,r);else if(s!=null){const o=dm(s);e[i]=()=>o}}},DE=(t,e)=>{const n=dm(e);t.slots.default=()=>n},Zk=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Le(e),Fl(e,"_",n)):xE(e,t.slots={})}else t.slots={},e&&DE(t,e);Fl(t.slots,Xu,1)},eN=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Je;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Dt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,xE(e,i)),o=e}else e&&(DE(t,e),o={default:1});if(s)for(const a in i)!OE(a)&&!(a in o)&&delete i[a]};function Rf(t,e,n,r,i=!1){if(le(t)){t.forEach((p,m)=>Rf(p,e&&(le(e)?e[m]:e),n,r,i));return}if(ya(r)&&!i)return;const s=r.shapeFlag&4?Zu(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Je?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Tt(l)?(u[l]=null,Ne(h,l)&&(h[l]=null)):Ot(l)&&(l.value=null)),ye(c))_i(c,a,12,[o,u]);else{const p=Tt(c),m=Ot(c);if(p||m){const y=()=>{if(t.f){const v=p?Ne(h,c)?h[c]:u[c]:c.value;i?le(v)&&Yp(v,s):le(v)?v.includes(s)||v.push(s):p?(u[c]=[s],Ne(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Ne(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,mn(y,n)):y()}}}const mn=Ck;function tN(t){return nN(t)}function nN(t,e){const n=yf();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=Jn,insertStaticContent:y}=t,v=(w,E,C,O=null,M=null,L=null,Q=!1,H=null,z=!!E.dynamicChildren)=>{if(w===E)return;w&&!Yo(w,E)&&(O=x(w),At(w,M,L,!0),w=null),E.patchFlag===-2&&(z=!1,E.dynamicChildren=null);const{type:V,ref:ne,shapeFlag:X}=E;switch(V){case Ju:b(w,E,C,O);break;case bi:A(w,E,C,O);break;case pd:w==null&&k(E,C,O,Q);break;case Mn:$t(w,E,C,O,M,L,Q,H,z);break;default:X&1?j(w,E,C,O,M,L,Q,H,z):X&6?Ge(w,E,C,O,M,L,Q,H,z):(X&64||X&128)&&V.process(w,E,C,O,M,L,Q,H,z,q)}ne!=null&&M&&Rf(ne,w&&w.ref,L,E||w,!E)},b=(w,E,C,O)=>{if(w==null)r(E.el=a(E.children),C,O);else{const M=E.el=w.el;E.children!==w.children&&l(M,E.children)}},A=(w,E,C,O)=>{w==null?r(E.el=c(E.children||""),C,O):E.el=w.el},k=(w,E,C,O)=>{[w.el,w.anchor]=y(w.children,E,C,O,w.el,w.anchor)},N=({el:w,anchor:E},C,O)=>{let M;for(;w&&w!==E;)M=p(w),r(w,C,O),w=M;r(E,C,O)},P=({el:w,anchor:E})=>{let C;for(;w&&w!==E;)C=p(w),i(w),w=C;i(E)},j=(w,E,C,O,M,L,Q,H,z)=>{Q=Q||E.type==="svg",w==null?W(E,C,O,M,L,Q,H,z):ze(w,E,M,L,Q,H,z)},W=(w,E,C,O,M,L,Q,H)=>{let z,V;const{type:ne,props:X,shapeFlag:re,transition:he,dirs:ve}=w;if(z=w.el=o(w.type,L,X&&X.is,X),re&8?u(z,w.children):re&16&&ge(w.children,z,null,O,M,L&&ne!=="foreignObject",Q,H),ve&&Ui(w,null,O,"created"),ae(z,w,w.scopeId,Q,O),X){for(const Ue in X)Ue!=="value"&&!wl(Ue)&&s(z,Ue,null,X[Ue],L,w.children,O,M,_t);"value"in X&&s(z,"value",null,X.value),(V=X.onVnodeBeforeMount)&&or(V,O,w)}ve&&Ui(w,null,O,"beforeMount");const qe=(!M||M&&!M.pendingBranch)&&he&&!he.persisted;qe&&he.beforeEnter(z),r(z,E,C),((V=X&&X.onVnodeMounted)||qe||ve)&&mn(()=>{V&&or(V,O,w),qe&&he.enter(z),ve&&Ui(w,null,O,"mounted")},M)},ae=(w,E,C,O,M)=>{if(C&&m(w,C),O)for(let L=0;L<O.length;L++)m(w,O[L]);if(M){let L=M.subTree;if(E===L){const Q=M.vnode;ae(w,Q,Q.scopeId,Q.slotScopeIds,M.parent)}}},ge=(w,E,C,O,M,L,Q,H,z=0)=>{for(let V=z;V<w.length;V++){const ne=w[V]=H?si(w[V]):ar(w[V]);v(null,ne,E,C,O,M,L,Q,H)}},ze=(w,E,C,O,M,L,Q)=>{const H=E.el=w.el;let{patchFlag:z,dynamicChildren:V,dirs:ne}=E;z|=w.patchFlag&16;const X=w.props||Je,re=E.props||Je;let he;C&&Bi(C,!1),(he=re.onVnodeBeforeUpdate)&&or(he,C,E,w),ne&&Ui(E,w,C,"beforeUpdate"),C&&Bi(C,!0);const ve=M&&E.type!=="foreignObject";if(V?Re(w.dynamicChildren,V,H,C,O,ve,L):Q||Te(w,E,H,null,C,O,ve,L,!1),z>0){if(z&16)ht(H,E,X,re,C,O,M);else if(z&2&&X.class!==re.class&&s(H,"class",null,re.class,M),z&4&&s(H,"style",X.style,re.style,M),z&8){const qe=E.dynamicProps;for(let Ue=0;Ue<qe.length;Ue++){const Qe=qe[Ue],pn=X[Qe],xn=re[Qe];(xn!==pn||Qe==="value")&&s(H,Qe,pn,xn,M,w.children,C,O,_t)}}z&1&&w.children!==E.children&&u(H,E.children)}else!Q&&V==null&&ht(H,E,X,re,C,O,M);((he=re.onVnodeUpdated)||ne)&&mn(()=>{he&&or(he,C,E,w),ne&&Ui(E,w,C,"updated")},O)},Re=(w,E,C,O,M,L,Q)=>{for(let H=0;H<E.length;H++){const z=w[H],V=E[H],ne=z.el&&(z.type===Mn||!Yo(z,V)||z.shapeFlag&70)?h(z.el):C;v(z,V,ne,null,O,M,L,Q,!0)}},ht=(w,E,C,O,M,L,Q)=>{if(C!==O){if(C!==Je)for(const H in C)!wl(H)&&!(H in O)&&s(w,H,C[H],null,Q,E.children,M,L,_t);for(const H in O){if(wl(H))continue;const z=O[H],V=C[H];z!==V&&H!=="value"&&s(w,H,V,z,Q,E.children,M,L,_t)}"value"in O&&s(w,"value",C.value,O.value)}},$t=(w,E,C,O,M,L,Q,H,z)=>{const V=E.el=w?w.el:a(""),ne=E.anchor=w?w.anchor:a("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:he}=E;he&&(H=H?H.concat(he):he),w==null?(r(V,C,O),r(ne,C,O),ge(E.children,C,ne,M,L,Q,H,z)):X>0&&X&64&&re&&w.dynamicChildren?(Re(w.dynamicChildren,re,C,M,L,Q,H),(E.key!=null||M&&E===M.subTree)&&ME(w,E,!0)):Te(w,E,C,ne,M,L,Q,H,z)},Ge=(w,E,C,O,M,L,Q,H,z)=>{E.slotScopeIds=H,w==null?E.shapeFlag&512?M.ctx.activate(E,C,O,Q,z):Sr(E,C,O,M,L,Q,z):cn(w,E,z)},Sr=(w,E,C,O,M,L,Q)=>{const H=w.component=dN(w,O,M);if(TE(w)&&(H.ctx.renderer=q),fN(H),H.asyncDep){if(M&&M.registerDep(H,je),!w.el){const z=H.subTree=xt(bi);A(null,z,E,C)}return}je(H,w,E,C,M,L,Q)},cn=(w,E,C)=>{const O=E.component=w.component;if(Ik(w,E,C))if(O.asyncDep&&!O.asyncResolved){Ve(O,E,C);return}else O.next=E,mk(O.update),O.update();else E.el=w.el,O.vnode=E},je=(w,E,C,O,M,L,Q)=>{const H=()=>{if(w.isMounted){let{next:ne,bu:X,u:re,parent:he,vnode:ve}=w,qe=ne,Ue;Bi(w,!1),ne?(ne.el=ve.el,Ve(w,ne,Q)):ne=ve,X&&El(X),(Ue=ne.props&&ne.props.onVnodeBeforeUpdate)&&or(Ue,he,ne,ve),Bi(w,!0);const Qe=dd(w),pn=w.subTree;w.subTree=Qe,v(pn,Qe,h(pn.el),x(pn),w,M,L),ne.el=Qe.el,qe===null&&bk(w,Qe.el),re&&mn(re,M),(Ue=ne.props&&ne.props.onVnodeUpdated)&&mn(()=>or(Ue,he,ne,ve),M)}else{let ne;const{el:X,props:re}=E,{bm:he,m:ve,parent:qe}=w,Ue=ya(E);if(Bi(w,!1),he&&El(he),!Ue&&(ne=re&&re.onVnodeBeforeMount)&&or(ne,qe,E),Bi(w,!0),X&&xe){const Qe=()=>{w.subTree=dd(w),xe(X,w.subTree,w,M,null)};Ue?E.type.__asyncLoader().then(()=>!w.isUnmounted&&Qe()):Qe()}else{const Qe=w.subTree=dd(w);v(null,Qe,C,O,w,M,L),E.el=Qe.el}if(ve&&mn(ve,M),!Ue&&(ne=re&&re.onVnodeMounted)){const Qe=E;mn(()=>or(ne,qe,Qe),M)}(E.shapeFlag&256||qe&&ya(qe.vnode)&&qe.vnode.shapeFlag&256)&&w.a&&mn(w.a,M),w.isMounted=!0,E=C=O=null}},z=w.effect=new tm(H,()=>lm(V),w.scope),V=w.update=()=>z.run();V.id=w.uid,Bi(w,!0),V()},Ve=(w,E,C)=>{E.component=w;const O=w.vnode.props;w.vnode=E,w.next=null,Jk(w,E.props,O,C),eN(w,E.children,C),So(),ny(),Po()},Te=(w,E,C,O,M,L,Q,H,z=!1)=>{const V=w&&w.children,ne=w?w.shapeFlag:0,X=E.children,{patchFlag:re,shapeFlag:he}=E;if(re>0){if(re&128){It(V,X,C,O,M,L,Q,H,z);return}else if(re&256){Tn(V,X,C,O,M,L,Q,H,z);return}}he&8?(ne&16&&_t(V,M,L),X!==V&&u(C,X)):ne&16?he&16?It(V,X,C,O,M,L,Q,H,z):_t(V,M,L,!0):(ne&8&&u(C,""),he&16&&ge(X,C,O,M,L,Q,H,z))},Tn=(w,E,C,O,M,L,Q,H,z)=>{w=w||js,E=E||js;const V=w.length,ne=E.length,X=Math.min(V,ne);let re;for(re=0;re<X;re++){const he=E[re]=z?si(E[re]):ar(E[re]);v(w[re],he,C,null,M,L,Q,H,z)}V>ne?_t(w,M,L,!0,!1,X):ge(E,C,O,M,L,Q,H,z,X)},It=(w,E,C,O,M,L,Q,H,z)=>{let V=0;const ne=E.length;let X=w.length-1,re=ne-1;for(;V<=X&&V<=re;){const he=w[V],ve=E[V]=z?si(E[V]):ar(E[V]);if(Yo(he,ve))v(he,ve,C,null,M,L,Q,H,z);else break;V++}for(;V<=X&&V<=re;){const he=w[X],ve=E[re]=z?si(E[re]):ar(E[re]);if(Yo(he,ve))v(he,ve,C,null,M,L,Q,H,z);else break;X--,re--}if(V>X){if(V<=re){const he=re+1,ve=he<ne?E[he].el:O;for(;V<=re;)v(null,E[V]=z?si(E[V]):ar(E[V]),C,ve,M,L,Q,H,z),V++}}else if(V>re)for(;V<=X;)At(w[V],M,L,!0),V++;else{const he=V,ve=V,qe=new Map;for(V=ve;V<=re;V++){const zt=E[V]=z?si(E[V]):ar(E[V]);zt.key!=null&&qe.set(zt.key,V)}let Ue,Qe=0;const pn=re-ve+1;let xn=!1,Pr=0;const In=new Array(pn);for(V=0;V<pn;V++)In[V]=0;for(V=he;V<=X;V++){const zt=w[V];if(Qe>=pn){At(zt,M,L,!0);continue}let ln;if(zt.key!=null)ln=qe.get(zt.key);else for(Ue=ve;Ue<=re;Ue++)if(In[Ue-ve]===0&&Yo(zt,E[Ue])){ln=Ue;break}ln===void 0?At(zt,M,L,!0):(In[ln-ve]=V+1,ln>=Pr?Pr=ln:xn=!0,v(zt,E[ln],C,null,M,L,Q,H,z),Qe++)}const $i=xn?rN(In):js;for(Ue=$i.length-1,V=pn-1;V>=0;V--){const zt=ve+V,ln=E[zt],sr=zt+1<ne?E[zt+1].el:O;In[V]===0?v(null,ln,C,sr,M,L,Q,H,z):xn&&(Ue<0||V!==$i[Ue]?bt(ln,C,sr,2):Ue--)}}},bt=(w,E,C,O,M=null)=>{const{el:L,type:Q,transition:H,children:z,shapeFlag:V}=w;if(V&6){bt(w.component.subTree,E,C,O);return}if(V&128){w.suspense.move(E,C,O);return}if(V&64){Q.move(w,E,C,q);return}if(Q===Mn){r(L,E,C);for(let X=0;X<z.length;X++)bt(z[X],E,C,O);r(w.anchor,E,C);return}if(Q===pd){N(w,E,C);return}if(O!==2&&V&1&&H)if(O===0)H.beforeEnter(L),r(L,E,C),mn(()=>H.enter(L),M);else{const{leave:X,delayLeave:re,afterLeave:he}=H,ve=()=>r(L,E,C),qe=()=>{X(L,()=>{ve(),he&&he()})};re?re(L,ve,qe):qe()}else r(L,E,C)},At=(w,E,C,O=!1,M=!1)=>{const{type:L,props:Q,ref:H,children:z,dynamicChildren:V,shapeFlag:ne,patchFlag:X,dirs:re}=w;if(H!=null&&Rf(H,null,C,w,!0),ne&256){E.ctx.deactivate(w);return}const he=ne&1&&re,ve=!ya(w);let qe;if(ve&&(qe=Q&&Q.onVnodeBeforeUnmount)&&or(qe,E,w),ne&6)Ps(w.component,C,O);else{if(ne&128){w.suspense.unmount(C,O);return}he&&Ui(w,null,E,"beforeUnmount"),ne&64?w.type.remove(w,E,C,M,q,O):V&&(L!==Mn||X>0&&X&64)?_t(V,E,C,!1,!0):(L===Mn&&X&384||!M&&ne&16)&&_t(z,E,C),O&&Zr(w)}(ve&&(qe=Q&&Q.onVnodeUnmounted)||he)&&mn(()=>{qe&&or(qe,E,w),he&&Ui(w,null,E,"unmounted")},C)},Zr=w=>{const{type:E,el:C,anchor:O,transition:M}=w;if(E===Mn){Hn(C,O);return}if(E===pd){P(w);return}const L=()=>{i(C),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(w.shapeFlag&1&&M&&!M.persisted){const{leave:Q,delayLeave:H}=M,z=()=>Q(C,L);H?H(w.el,L,z):z()}else L()},Hn=(w,E)=>{let C;for(;w!==E;)C=p(w),i(w),w=C;i(E)},Ps=(w,E,C)=>{const{bum:O,scope:M,update:L,subTree:Q,um:H}=w;O&&El(O),M.stop(),L&&(L.active=!1,At(Q,w,E,C)),H&&mn(H,E),mn(()=>{w.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},_t=(w,E,C,O=!1,M=!1,L=0)=>{for(let Q=L;Q<w.length;Q++)At(w[Q],E,C,O,M)},x=w=>w.shapeFlag&6?x(w.component.subTree):w.shapeFlag&128?w.suspense.next():p(w.anchor||w.el),J=(w,E,C)=>{w==null?E._vnode&&At(E._vnode,null,null,!0):v(E._vnode||null,w,E,null,null,null,C),ny(),_E(),E._vnode=w},q={p:v,um:At,m:bt,r:Zr,mt:Sr,mc:ge,pc:Te,pbc:Re,n:x,o:t};let te,xe;return e&&([te,xe]=e(q)),{render:J,hydrate:te,createApp:Qk(J,te)}}function Bi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ME(t,e,n=!1){const r=t.children,i=e.children;if(le(r)&&le(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=si(i[s]),a.el=o.el),n||ME(o,a)),a.type===Ju&&(a.el=o.el)}}function rN(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const iN=t=>t.__isTeleport,Mn=Symbol.for("v-fgt"),Ju=Symbol.for("v-txt"),bi=Symbol.for("v-cmt"),pd=Symbol.for("v-stc"),wa=[];let Kn=null;function Et(t=!1){wa.push(Kn=t?null:[])}function sN(){wa.pop(),Kn=wa[wa.length-1]||null}let Fa=1;function fy(t){Fa+=t}function LE(t){return t.dynamicChildren=Fa>0?Kn||js:null,sN(),Fa>0&&Kn&&Kn.push(t),t}function Sn(t,e,n,r,i,s){return LE(it(t,e,n,r,i,s,!0))}function no(t,e,n,r,i){return LE(xt(t,e,n,r,i,!0))}function ql(t){return t?t.__v_isVNode===!0:!1}function Yo(t,e){return t.type===e.type&&t.key===e.key}const Xu="__vInternal",VE=({key:t})=>t??null,Il=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Tt(t)||Ot(t)||ye(t)?{i:jt,r:t,k:e,f:!!n}:t:null);function it(t,e=null,n=null,r=0,i=null,s=t===Mn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&VE(e),ref:e&&Il(e),scopeId:Gu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:jt};return a?(fm(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Tt(n)?8:16),Fa>0&&!o&&Kn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Kn.push(c),c}const xt=oN;function oN(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Uk)&&(t=bi),ql(t)){const a=ro(t,e,!0);return n&&fm(a,n),Fa>0&&!s&&Kn&&(a.shapeFlag&6?Kn[Kn.indexOf(t)]=a:Kn.push(a)),a.patchFlag|=-2,a}if(yN(t)&&(t=t.__vccOpts),e){e=aN(e);let{class:a,style:c}=e;a&&!Tt(a)&&(e.class=Hu(a)),ot(c)&&(cE(c)&&!le(c)&&(c=Dt({},c)),e.style=Zp(c))}const o=Tt(t)?1:Ak(t)?128:iN(t)?64:ot(t)?4:ye(t)?2:0;return it(t,e,n,r,i,o,s,!0)}function aN(t){return t?cE(t)||Xu in t?Dt({},t):t:null}function ro(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?lN(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&VE(a),ref:e&&e.ref?n&&i?le(i)?i.concat(Il(e)):[i,Il(e)]:Il(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mn?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ro(t.ssContent),ssFallback:t.ssFallback&&ro(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function cN(t=" ",e=0){return xt(Ju,null,t,e)}function qs(t="",e=!1){return e?(Et(),no(bi,null,t)):xt(bi,null,t)}function ar(t){return t==null||typeof t=="boolean"?xt(bi):le(t)?xt(Mn,null,t.slice()):typeof t=="object"?si(t):xt(Ju,null,String(t))}function si(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ro(t)}function fm(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),fm(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Xu in e)?e._ctx=jt:i===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:jt},n=32):(e=String(e),r&64?(n=16,e=[cN(e)]):n=8);t.children=e,t.shapeFlag|=n}function lN(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Hu([e.class,r.class]));else if(i==="style")e.style=Zp([e.style,r.style]);else if(Fu(i)){const s=e[i],o=r[i];o&&s!==o&&!(le(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function or(t,e,n,r=null){Xn(t,e,7,[n,r])}const uN=PE();let hN=0;function dN(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||uN,s={uid:hN++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new K0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:NE(r,i),emitsOptions:vE(r,i),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:r.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=yk.bind(null,s),t.ce&&t.ce(s),s}let kt=null;const $E=()=>kt||jt;let pm,Ns,py="__VUE_INSTANCE_SETTERS__";(Ns=yf()[py])||(Ns=yf()[py]=[]),Ns.push(t=>kt=t),pm=t=>{Ns.length>1?Ns.forEach(e=>e(t)):Ns[0](t)};const io=t=>{pm(t),t.scope.on()},ns=()=>{kt&&kt.scope.off(),pm(null)};function FE(t){return t.vnode.shapeFlag&4}let Ua=!1;function fN(t,e=!1){Ua=e;const{props:n,children:r}=t.vnode,i=FE(t);Yk(t,n,i,e),Zk(t,r);const s=i?pN(t,e):void 0;return Ua=!1,s}function pN(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=om(new Proxy(t.ctx,jk));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?gN(t):null;io(t),So();const s=_i(r,t,0,[t.props,i]);if(Po(),ns(),j0(s)){if(s.then(ns,ns),e)return s.then(o=>{my(t,o,e)}).catch(o=>{qu(o,t,0)});t.asyncDep=s}else my(t,s,e)}else UE(t,e)}function my(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ot(e)&&(t.setupState=fE(e)),UE(t,n)}let gy;function UE(t,e,n){const r=t.type;if(!t.render){if(!e&&gy&&!r.render){const i=r.template||hm(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Dt(Dt({isCustomElement:s,delimiters:a},o),c);r.render=gy(i,l)}}t.render=r.render||Jn}io(t),So(),Hk(t),Po(),ns()}function mN(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return yn(t,"get","$attrs"),e[n]}}))}function gN(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return mN(t)},slots:t.slots,emit:t.emit,expose:e}}function Zu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fE(om(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in va)return va[n](t)},has(e,n){return n in e||n in va}}))}function _N(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function yN(t){return ye(t)&&"__vccOpts"in t}const Zt=(t,e)=>dk(t,e,Ua);function BE(t,e,n){const r=arguments.length;return r===2?ot(e)&&!le(e)?ql(e)?xt(t,null,[e]):xt(t,e):xt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ql(n)&&(n=[n]),xt(t,e,n))}const vN=Symbol.for("v-scx"),wN=()=>Rn(vN),EN="3.3.4",TN="http://www.w3.org/2000/svg",qi=typeof document<"u"?document:null,_y=qi&&qi.createElement("template"),IN={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?qi.createElementNS(TN,t):qi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>qi.createTextNode(t),createComment:t=>qi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{_y.innerHTML=r?`<svg>${t}</svg>`:t;const a=_y.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function bN(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function AN(t,e,n){const r=t.style,i=Tt(n);if(n&&!i){if(e&&!Tt(e))for(const s in e)n[s]==null&&Sf(r,s,"");for(const s in n)Sf(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const yy=/\s*!important$/;function Sf(t,e,n){if(le(n))n.forEach(r=>Sf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=CN(t,e);yy.test(n)?t.setProperty(Ro(r),n.replace(yy,""),"important"):t[r]=n}}const vy=["Webkit","Moz","ms"],md={};function CN(t,e){const n=md[e];if(n)return n;let r=vr(e);if(r!=="filter"&&r in t)return md[e]=r;r=ju(r);for(let i=0;i<vy.length;i++){const s=vy[i]+r;if(s in t)return md[e]=s}return e}const wy="http://www.w3.org/1999/xlink";function RN(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wy,e.slice(6,e.length)):t.setAttributeNS(wy,e,n);else{const s=k1(e);n==null||s&&!z0(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function SN(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=z0(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Ds(t,e,n,r){t.addEventListener(e,n,r)}function PN(t,e,n,r){t.removeEventListener(e,n,r)}function kN(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=NN(e);if(r){const l=s[e]=DN(r,i);Ds(t,a,l,c)}else o&&(PN(t,a,o,c),s[e]=void 0)}}const Ey=/(?:Once|Passive|Capture)$/;function NN(t){let e;if(Ey.test(t)){e={};let r;for(;r=t.match(Ey);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ro(t.slice(2)),e]}let gd=0;const ON=Promise.resolve(),xN=()=>gd||(ON.then(()=>gd=0),gd=Date.now());function DN(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xn(MN(r,n.value),e,5,[r])};return n.value=t,n.attached=xN(),n}function MN(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Ty=/^on[a-z]/,LN=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?bN(t,r,i):e==="style"?AN(t,n,r):Fu(e)?Qp(e)||kN(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):VN(t,e,r,i))?SN(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),RN(t,e,r,i))};function VN(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ty.test(e)&&ye(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ty.test(e)&&Tt(n)?!1:e in t}const Iy=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>El(e,n):e};function $N(t){t.target.composing=!0}function by(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const oW={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Iy(i);const s=r||i.props&&i.props.type==="number";Ds(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=_f(a)),t._assign(a)}),n&&Ds(t,"change",()=>{t.value=t.value.trim()}),e||(Ds(t,"compositionstart",$N),Ds(t,"compositionend",by),Ds(t,"change",by))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Iy(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&_f(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},FN=["ctrl","shift","alt","meta"],UN={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>FN.some(n=>t[`${n}Key`]&&!e.includes(n))},nl=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=UN[e[i]];if(s&&s(n,e))return}return t(n,...r)},BN={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Jo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Jo(t,!0),r.enter(t)):r.leave(t,()=>{Jo(t,!1)}):Jo(t,e))},beforeUnmount(t,{value:e}){Jo(t,e)}};function Jo(t,e){t.style.display=e?t._vod:"none"}const jN=Dt({patchProp:LN},IN);let Ay;function HN(){return Ay||(Ay=tN(jN))}const WN=(...t)=>{const e=HN().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=zN(r);if(!i)return;const s=e._component;!ye(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function zN(t){return Tt(t)?document.querySelector(t):t}var qN=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const KN=Symbol();var Cy;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Cy||(Cy={}));function GN(){const t=G0(!0),e=t.run(()=>ct({}));let n=[],r=[];const i=om({install(s){i._a=s,s.provide(KN,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!qN?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ms=typeof window<"u";function QN(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const He=Object.assign;function _d(t,e){const n={};for(const r in e){const i=e[r];n[r]=tr(i)?i.map(t):t(i)}return n}const Ea=()=>{},tr=Array.isArray,YN=/\/$/,JN=t=>t.replace(YN,"");function yd(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=tO(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function XN(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ry(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ZN(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&so(e.matched[r],n.matched[i])&&jE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function so(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!eO(t[n],e[n]))return!1;return!0}function eO(t,e){return tr(t)?Sy(t,e):tr(e)?Sy(e,t):t===e}function Sy(t,e){return tr(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function tO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ba;(function(t){t.pop="pop",t.push="push"})(Ba||(Ba={}));var Ta;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ta||(Ta={}));function nO(t){if(!t)if(Ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),JN(t)}const rO=/^[^#]+#/;function iO(t,e){return t.replace(rO,"#")+e}function sO(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const eh=()=>({left:window.pageXOffset,top:window.pageYOffset});function oO(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=sO(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Py(t,e){return(history.state?history.state.position-e:-1)+t}const Pf=new Map;function aO(t,e){Pf.set(t,e)}function cO(t){const e=Pf.get(t);return Pf.delete(t),e}let lO=()=>location.protocol+"//"+location.host;function HE(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Ry(c,"")}return Ry(n,t)+r+i}function uO(t,e,n,r){let i=[],s=[],o=null;const a=({state:p})=>{const m=HE(t,location),y=n.value,v=e.value;let b=0;if(p){if(n.value=m,e.value=p,o&&o===y){o=null;return}b=v?p.position-v.position:0}else r(m);i.forEach(A=>{A(n.value,y,{delta:b,type:Ba.pop,direction:b?b>0?Ta.forward:Ta.back:Ta.unknown})})};function c(){o=n.value}function l(p){i.push(p);const m=()=>{const y=i.indexOf(p);y>-1&&i.splice(y,1)};return s.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(He({},p.state,{scroll:eh()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function ky(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?eh():null}}function hO(t){const{history:e,location:n}=window,r={value:HE(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:lO()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=He({},e.state,ky(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=He({},i.value,e.state,{forward:c,scroll:eh()});s(u.current,u,!0);const h=He({},ky(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function dO(t){t=nO(t);const e=hO(t),n=uO(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=He({location:"",base:t,go:r,createHref:iO.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function fO(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),dO(t)}function pO(t){return typeof t=="string"||t&&typeof t=="object"}function WE(t){return typeof t=="string"||typeof t=="symbol"}const ri={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zE=Symbol("");var Ny;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ny||(Ny={}));function oo(t,e){return He(new Error,{type:t,[zE]:!0},e)}function xr(t,e){return t instanceof Error&&zE in t&&(e==null||!!(t.type&e))}const Oy="[^/]+?",mO={sensitive:!1,strict:!1,start:!0,end:!0},gO=/[.+*?^${}()[\]/\\]/g;function _O(t,e){const n=He({},mO,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const p=l[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(i+="/"),i+=p.value.replace(gO,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:v,optional:b,regexp:A}=p;s.push({name:y,repeatable:v,optional:b});const k=A||Oy;if(k!==Oy){m+=10;try{new RegExp(`(${k})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+P.message)}}let N=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(N=b&&l.length<2?`(?:/${N})`:"/"+N),b&&(N+="?"),i+=N,m+=20,b&&(m+=-8),v&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",y=s[p-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:v,optional:b}=m,A=y in l?l[y]:"";if(tr(A)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=tr(A)?A.join("/"):A;if(!k)if(b)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function yO(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function vO(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=yO(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(xy(r))return 1;if(xy(i))return-1}return i.length-r.length}function xy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wO={type:0,value:""},EO=/[a-zA-Z0-9_]/;function TO(t){if(!t)return[[]];if(t==="/")return[[wO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:EO.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function IO(t,e,n){const r=_O(TO(t.path),n),i=He(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function bO(t,e){const n=[],r=new Map;e=Ly({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,p){const m=!p,y=AO(u);y.aliasOf=p&&p.record;const v=Ly(e,u),b=[y];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of N)b.push(He({},y,{components:p?p.record.components:y.components,path:P,aliasOf:p?p.record:y}))}let A,k;for(const N of b){const{path:P}=N;if(h&&P[0]!=="/"){const j=h.record.path,W=j[j.length-1]==="/"?"":"/";N.path=h.record.path+(P&&W+P)}if(A=IO(N,h,v),p?p.alias.push(A):(k=k||A,k!==A&&k.alias.push(A),m&&u.name&&!My(A)&&o(u.name)),y.children){const j=y.children;for(let W=0;W<j.length;W++)s(j[W],A,p&&p.children[W])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return k?()=>{o(k)}:Ea}function o(u){if(WE(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&vO(u,n[h])>=0&&(u.record.path!==n[h].record.path||!qE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!My(u)&&r.set(u.record.name,u)}function l(u,h){let p,m={},y,v;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw oo(1,{location:u});v=p.record.name,m=He(Dy(h.params,p.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Dy(u.params,p.keys.map(k=>k.name))),y=p.stringify(m)}else if("path"in u)y=u.path,p=n.find(k=>k.re.test(y)),p&&(m=p.parse(y),v=p.record.name);else{if(p=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!p)throw oo(1,{location:u,currentLocation:h});v=p.record.name,m=He({},h.params,u.params),y=p.stringify(m)}const b=[];let A=p;for(;A;)b.unshift(A.record),A=A.parent;return{name:v,path:y,params:m,matched:b,meta:RO(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Dy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function AO(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:CO(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function CO(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function My(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function RO(t){return t.reduce((e,n)=>He(e,n.meta),{})}function Ly(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function qE(t,e){return e.children.some(n=>n===t||qE(t,n))}const KE=/#/g,SO=/&/g,PO=/\//g,kO=/=/g,NO=/\?/g,GE=/\+/g,OO=/%5B/g,xO=/%5D/g,QE=/%5E/g,DO=/%60/g,YE=/%7B/g,MO=/%7C/g,JE=/%7D/g,LO=/%20/g;function mm(t){return encodeURI(""+t).replace(MO,"|").replace(OO,"[").replace(xO,"]")}function VO(t){return mm(t).replace(YE,"{").replace(JE,"}").replace(QE,"^")}function kf(t){return mm(t).replace(GE,"%2B").replace(LO,"+").replace(KE,"%23").replace(SO,"%26").replace(DO,"`").replace(YE,"{").replace(JE,"}").replace(QE,"^")}function $O(t){return kf(t).replace(kO,"%3D")}function FO(t){return mm(t).replace(KE,"%23").replace(NO,"%3F")}function UO(t){return t==null?"":FO(t).replace(PO,"%2F")}function Kl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function BO(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(GE," "),o=s.indexOf("="),a=Kl(o<0?s:s.slice(0,o)),c=o<0?null:Kl(s.slice(o+1));if(a in e){let l=e[a];tr(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Vy(t){let e="";for(let n in t){const r=t[n];if(n=$O(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(tr(r)?r.map(s=>s&&kf(s)):[r&&kf(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function jO(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=tr(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const HO=Symbol(""),$y=Symbol(""),th=Symbol(""),gm=Symbol(""),Nf=Symbol("");function Xo(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function oi(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(oo(4,{from:n,to:e})):h instanceof Error?a(h):pO(h)?a(oo(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function vd(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(WO(a)){const l=(a.__vccOpts||a)[e];l&&i.push(oi(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=QN(l)?l.default:l;s.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&oi(p,n,r,s,o)()}))}}return i}function WO(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fy(t){const e=Rn(th),n=Rn(gm),r=Zt(()=>e.resolve(vt(t.to))),i=Zt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(so.bind(null,u));if(p>-1)return p;const m=Uy(c[l-2]);return l>1&&Uy(u)===m&&h[h.length-1].path!==m?h.findIndex(so.bind(null,c[l-2])):p}),s=Zt(()=>i.value>-1&&GO(n.params,r.value.params)),o=Zt(()=>i.value>-1&&i.value===n.matched.length-1&&jE(n.params,r.value.params));function a(c={}){return KO(c)?e[vt(t.replace)?"replace":"push"](vt(t.to)).catch(Ea):Promise.resolve()}return{route:r,href:Zt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const zO=ir({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fy,setup(t,{slots:e}){const n=zu(Fy(t)),{options:r}=Rn(th),i=Zt(()=>({[By(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[By(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:BE("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),qO=zO;function KO(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function GO(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!tr(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Uy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const By=(t,e,n)=>t??e??n,QO=ir({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Rn(Nf),i=Zt(()=>t.route||r.value),s=Rn($y,0),o=Zt(()=>{let l=vt(s);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Zt(()=>i.value.matched[o.value]);Tl($y,Zt(()=>o.value+1)),Tl(HO,a),Tl(Nf,i);const c=ct();return Br(()=>[c.value,a.value,t.name],([l,u,h],[p,m,y])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!so(u,m)||!p)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return jy(n.default,{Component:p,route:l});const m=h.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,b=BE(p,He({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return jy(n.default,{Component:b,route:l})||b}}});function jy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const XE=QO;function YO(t){const e=bO(t.routes,t),n=t.parseQuery||BO,r=t.stringifyQuery||Vy,i=t.history,s=Xo(),o=Xo(),a=Xo(),c=hE(ri);let l=ri;Ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_d.bind(null,x=>""+x),h=_d.bind(null,UO),p=_d.bind(null,Kl);function m(x,J){let q,te;return WE(x)?(q=e.getRecordMatcher(x),te=J):te=x,e.addRoute(te,q)}function y(x){const J=e.getRecordMatcher(x);J&&e.removeRoute(J)}function v(){return e.getRoutes().map(x=>x.record)}function b(x){return!!e.getRecordMatcher(x)}function A(x,J){if(J=He({},J||c.value),typeof x=="string"){const C=yd(n,x,J.path),O=e.resolve({path:C.path},J),M=i.createHref(C.fullPath);return He(C,O,{params:p(O.params),hash:Kl(C.hash),redirectedFrom:void 0,href:M})}let q;if("path"in x)q=He({},x,{path:yd(n,x.path,J.path).path});else{const C=He({},x.params);for(const O in C)C[O]==null&&delete C[O];q=He({},x,{params:h(C)}),J.params=h(J.params)}const te=e.resolve(q,J),xe=x.hash||"";te.params=u(p(te.params));const w=XN(r,He({},x,{hash:VO(xe),path:te.path})),E=i.createHref(w);return He({fullPath:w,hash:xe,query:r===Vy?jO(x.query):x.query||{}},te,{redirectedFrom:void 0,href:E})}function k(x){return typeof x=="string"?yd(n,x,c.value.path):He({},x)}function N(x,J){if(l!==x)return oo(8,{from:J,to:x})}function P(x){return ae(x)}function j(x){return P(He(k(x),{replace:!0}))}function W(x){const J=x.matched[x.matched.length-1];if(J&&J.redirect){const{redirect:q}=J;let te=typeof q=="function"?q(x):q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=k(te):{path:te},te.params={}),He({query:x.query,hash:x.hash,params:"path"in te?{}:x.params},te)}}function ae(x,J){const q=l=A(x),te=c.value,xe=x.state,w=x.force,E=x.replace===!0,C=W(q);if(C)return ae(He(k(C),{state:typeof C=="object"?He({},xe,C.state):xe,force:w,replace:E}),J||q);const O=q;O.redirectedFrom=J;let M;return!w&&ZN(r,te,q)&&(M=oo(16,{to:O,from:te}),bt(te,te,!0,!1)),(M?Promise.resolve(M):Re(O,te)).catch(L=>xr(L)?xr(L,2)?L:It(L):Te(L,O,te)).then(L=>{if(L){if(xr(L,2))return ae(He({replace:E},k(L.to),{state:typeof L.to=="object"?He({},xe,L.to.state):xe,force:w}),J||O)}else L=$t(O,te,!0,E,xe);return ht(O,te,L),L})}function ge(x,J){const q=N(x,J);return q?Promise.reject(q):Promise.resolve()}function ze(x){const J=Hn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(x):x()}function Re(x,J){let q;const[te,xe,w]=JO(x,J);q=vd(te.reverse(),"beforeRouteLeave",x,J);for(const C of te)C.leaveGuards.forEach(O=>{q.push(oi(O,x,J))});const E=ge.bind(null,x,J);return q.push(E),_t(q).then(()=>{q=[];for(const C of s.list())q.push(oi(C,x,J));return q.push(E),_t(q)}).then(()=>{q=vd(xe,"beforeRouteUpdate",x,J);for(const C of xe)C.updateGuards.forEach(O=>{q.push(oi(O,x,J))});return q.push(E),_t(q)}).then(()=>{q=[];for(const C of w)if(C.beforeEnter)if(tr(C.beforeEnter))for(const O of C.beforeEnter)q.push(oi(O,x,J));else q.push(oi(C.beforeEnter,x,J));return q.push(E),_t(q)}).then(()=>(x.matched.forEach(C=>C.enterCallbacks={}),q=vd(w,"beforeRouteEnter",x,J),q.push(E),_t(q))).then(()=>{q=[];for(const C of o.list())q.push(oi(C,x,J));return q.push(E),_t(q)}).catch(C=>xr(C,8)?C:Promise.reject(C))}function ht(x,J,q){a.list().forEach(te=>ze(()=>te(x,J,q)))}function $t(x,J,q,te,xe){const w=N(x,J);if(w)return w;const E=J===ri,C=Ms?history.state:{};q&&(te||E?i.replace(x.fullPath,He({scroll:E&&C&&C.scroll},xe)):i.push(x.fullPath,xe)),c.value=x,bt(x,J,q,E),It()}let Ge;function Sr(){Ge||(Ge=i.listen((x,J,q)=>{if(!Ps.listening)return;const te=A(x),xe=W(te);if(xe){ae(He(xe,{replace:!0}),te).catch(Ea);return}l=te;const w=c.value;Ms&&aO(Py(w.fullPath,q.delta),eh()),Re(te,w).catch(E=>xr(E,12)?E:xr(E,2)?(ae(E.to,te).then(C=>{xr(C,20)&&!q.delta&&q.type===Ba.pop&&i.go(-1,!1)}).catch(Ea),Promise.reject()):(q.delta&&i.go(-q.delta,!1),Te(E,te,w))).then(E=>{E=E||$t(te,w,!1),E&&(q.delta&&!xr(E,8)?i.go(-q.delta,!1):q.type===Ba.pop&&xr(E,20)&&i.go(-1,!1)),ht(te,w,E)}).catch(Ea)}))}let cn=Xo(),je=Xo(),Ve;function Te(x,J,q){It(x);const te=je.list();return te.length?te.forEach(xe=>xe(x,J,q)):console.error(x),Promise.reject(x)}function Tn(){return Ve&&c.value!==ri?Promise.resolve():new Promise((x,J)=>{cn.add([x,J])})}function It(x){return Ve||(Ve=!x,Sr(),cn.list().forEach(([J,q])=>x?q(x):J()),cn.reset()),x}function bt(x,J,q,te){const{scrollBehavior:xe}=t;if(!Ms||!xe)return Promise.resolve();const w=!q&&cO(Py(x.fullPath,0))||(te||!q)&&history.state&&history.state.scroll||null;return mE().then(()=>xe(x,J,w)).then(E=>E&&oO(E)).catch(E=>Te(E,x,J))}const At=x=>i.go(x);let Zr;const Hn=new Set,Ps={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:b,getRoutes:v,resolve:A,options:t,push:P,replace:j,go:At,back:()=>At(-1),forward:()=>At(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:je.add,isReady:Tn,install(x){const J=this;x.component("RouterLink",qO),x.component("RouterView",XE),x.config.globalProperties.$router=J,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>vt(c)}),Ms&&!Zr&&c.value===ri&&(Zr=!0,P(i.location).catch(xe=>{}));const q={};for(const xe in ri)Object.defineProperty(q,xe,{get:()=>c.value[xe],enumerable:!0});x.provide(th,J),x.provide(gm,oE(q)),x.provide(Nf,c);const te=x.unmount;Hn.add(x),x.unmount=function(){Hn.delete(x),Hn.size<1&&(l=ri,Ge&&Ge(),Ge=null,c.value=ri,Zr=!1,Ve=!1),te()}}};function _t(x){return x.reduce((J,q)=>J.then(()=>ze(q)),Promise.resolve())}return Ps}function JO(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>so(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>so(l,c))||i.push(c))}return[n,r,i]}function XO(){return Rn(th)}function ZO(){return Rn(gm)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=function(t,e){if(!t)throw ko(e)},ko=function(t){return new Error("Firebase Database ("+ZE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ex=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ex(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new tx;const p=s<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tT=function(t){const e=eT(t);return nh.encodeByteArray(e,!0)},Gl=function(t){return tT(t).replace(/\./g,"")},Ql=function(t){try{return nh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t){return nT(void 0,t)}function nT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rx(n)||(t[n]=nT(t[n],e[n]));return t}function rx(t){return t!=="__proto__"}/**
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
 */function ix(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sx=()=>ix().__FIREBASE_DEFAULTS__,ox=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ax=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ql(t[1]);return e&&JSON.parse(e)},_m=()=>{try{return sx()||ox()||ax()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rT=t=>{var e,n;return(n=(e=_m())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cx=t=>{const e=rT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iT=()=>{var t;return(t=_m())===null||t===void 0?void 0:t.config},sT=t=>{var e;return(e=_m())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function lx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gl(JSON.stringify(n)),Gl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ym(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(on())}function oT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ux(){const t=on();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cT(){return ZE.NODE_ADMIN===!0}function vm(){try{return typeof indexedDB=="object"}catch{return!1}}function lT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function hx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dx,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bn(i,a,r)}}function fx(t,e){return t.replace(px,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const px=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){return JSON.parse(t)}function Bt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ha(Ql(s[0])||""),n=Ha(Ql(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},mx=function(t){const e=uT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},gx=function(t){const e=uT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ao(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Of(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Wa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Hy(s)&&Hy(o)){if(!Wa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ca(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function la(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const p=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):h<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const p=(i<<5|i>>>27)+l+c+u+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function yx(t,e){const n=new vx(t,e);return n.subscribe.bind(n)}class vx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wd),i.error===void 0&&(i.error=wd),i.complete===void 0&&(i.complete=wd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wd(){}function Ex(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,K(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Ix=1e3,bx=2,Ax=4*60*60*1e3,Cx=.5;function Wy(t,e=Ix,n=bx){const r=e*Math.pow(n,t),i=Math.round(Cx*r*(Math.random()-.5)*2);return Math.min(Ax,r+i)}/**
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
 */function Mt(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hi="[DEFAULT]";/**
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
 */class Rx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ja;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Px(e))try{this.getOrInitializeService({instanceIdentifier:Hi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hi){return this.instances.has(e)}getOptions(e=Hi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hi){return this.component?this.component.multipleInstances?e:Hi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sx(t){return t===Hi?void 0:t}function Px(t){return t.instantiationMode==="EAGER"}/**
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
 */class kx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const Nx={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},Ox=Oe.INFO,xx={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},Dx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oo{constructor(e){this.name=e,this._logLevel=Ox,this._logHandler=Dx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const Mx=(t,e)=>e.some(n=>t instanceof n);let zy,qy;function Lx(){return zy||(zy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vx(){return qy||(qy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hT=new WeakMap,xf=new WeakMap,dT=new WeakMap,Ed=new WeakMap,wm=new WeakMap;function $x(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hT.set(n,t)}).catch(()=>{}),wm.set(e,t),e}function Fx(t){if(xf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xf.set(t,e)}let Df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ux(t){Df=t(Df)}function Bx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Td(this),e,...n);return dT.set(r,e.sort?e.sort():[e]),yi(r)}:Vx().includes(t)?function(...e){return t.apply(Td(this),e),yi(hT.get(this))}:function(...e){return yi(t.apply(Td(this),e))}}function jx(t){return typeof t=="function"?Bx(t):(t instanceof IDBTransaction&&Fx(t),Mx(t,Lx())?new Proxy(t,Df):t)}function yi(t){if(t instanceof IDBRequest)return $x(t);if(Ed.has(t))return Ed.get(t);const e=jx(t);return e!==t&&(Ed.set(t,e),wm.set(e,t)),e}const Td=t=>wm.get(t);function Hx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yi(o);return r&&o.addEventListener("upgradeneeded",c=>{r(yi(o.result),c.oldVersion,c.newVersion,yi(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Wx=["get","getKey","getAll","getAllKeys","count"],zx=["put","add","delete","clear"],Id=new Map;function Ky(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Id.get(e))return Id.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Wx.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Id.set(e,s),s}Ux(t=>({...t,get:(e,n,r)=>Ky(e,n)||t.get(e,n,r),has:(e,n)=>!!Ky(e,n)||t.has(e,n)}));/**
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
 */class qx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mf="@firebase/app",Gy="0.9.17";/**
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
 */const os=new Oo("@firebase/app"),Gx="@firebase/app-compat",Qx="@firebase/analytics-compat",Yx="@firebase/analytics",Jx="@firebase/app-check-compat",Xx="@firebase/app-check",Zx="@firebase/auth",eD="@firebase/auth-compat",tD="@firebase/database",nD="@firebase/database-compat",rD="@firebase/functions",iD="@firebase/functions-compat",sD="@firebase/installations",oD="@firebase/installations-compat",aD="@firebase/messaging",cD="@firebase/messaging-compat",lD="@firebase/performance",uD="@firebase/performance-compat",hD="@firebase/remote-config",dD="@firebase/remote-config-compat",fD="@firebase/storage",pD="@firebase/storage-compat",mD="@firebase/firestore",gD="@firebase/firestore-compat",_D="firebase",yD="10.3.0";/**
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
 */const Lf="[DEFAULT]",vD={[Mf]:"fire-core",[Gx]:"fire-core-compat",[Yx]:"fire-analytics",[Qx]:"fire-analytics-compat",[Xx]:"fire-app-check",[Jx]:"fire-app-check-compat",[Zx]:"fire-auth",[eD]:"fire-auth-compat",[tD]:"fire-rtdb",[nD]:"fire-rtdb-compat",[rD]:"fire-fn",[iD]:"fire-fn-compat",[sD]:"fire-iid",[oD]:"fire-iid-compat",[aD]:"fire-fcm",[cD]:"fire-fcm-compat",[lD]:"fire-perf",[uD]:"fire-perf-compat",[hD]:"fire-rc",[dD]:"fire-rc-compat",[fD]:"fire-gcs",[pD]:"fire-gcs-compat",[mD]:"fire-fst",[gD]:"fire-fst-compat","fire-js":"fire-js",[_D]:"fire-js-all"};/**
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
 */const Jl=new Map,Vf=new Map;function wD(t,e){try{t.container.addComponent(e)}catch(n){os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(Vf.has(e))return os.debug(`There were multiple attempts to register component ${e}.`),!1;Vf.set(e,t);for(const n of Jl.values())wD(n,t);return!0}function ws(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ED={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vi=new Ni("app","Firebase",ED);/**
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
 */class TD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vi.create("app-deleted",{appName:this._name})}}/**
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
 */const Oi=yD;function fT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vi.create("bad-app-name",{appName:String(i)});if(n||(n=iT()),!n)throw vi.create("no-options");const s=Jl.get(i);if(s){if(Wa(n,s.options)&&Wa(r,s.config))return s;throw vi.create("duplicate-app",{appName:i})}const o=new kx(i);for(const c of Vf.values())o.addComponent(c);const a=new TD(n,r,o);return Jl.set(i,a),a}function ih(t=Lf){const e=Jl.get(t);if(!e&&t===Lf&&iT())return fT();if(!e)throw vi.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let i=(r=vD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),os.warn(a.join(" "));return}vn(new fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ID="firebase-heartbeat-database",bD=1,za="firebase-heartbeat-store";let bd=null;function pT(){return bd||(bd=Hx(ID,bD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(za)}}}).catch(t=>{throw vi.create("idb-open",{originalErrorMessage:t.message})})),bd}async function AD(t){try{return await(await pT()).transaction(za).objectStore(za).get(mT(t))}catch(e){if(e instanceof Bn)os.warn(e.message);else{const n=vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});os.warn(n.message)}}}async function Qy(t,e){try{const r=(await pT()).transaction(za,"readwrite");await r.objectStore(za).put(e,mT(t)),await r.done}catch(n){if(n instanceof Bn)os.warn(n.message);else{const r=vi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});os.warn(r.message)}}}function mT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const CD=1024,RD=30*24*60*60*1e3;class SD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=RD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yy(),{heartbeatsToSend:n,unsentEntries:r}=PD(this._heartbeatsCache.heartbeats),i=Gl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Yy(){return new Date().toISOString().substring(0,10)}function PD(t,e=CD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vm()?lT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await AD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jy(t){return Gl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ND(t){vn(new fn("platform-logger",e=>new qx(e),"PRIVATE")),vn(new fn("heartbeat",e=>new SD(e),"PRIVATE")),Ht(Mf,Gy,t),Ht(Mf,Gy,"esm2017"),Ht("fire-js","")}ND("");function Em(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ue(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}function Xy(t){return t!==void 0&&t.enterprise!==void 0}class OD{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function gT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xD=gT,_T=new Ni("auth","Firebase",gT());/**
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
 */const Xl=new Oo("@firebase/auth");function DD(t,...e){Xl.logLevel<=Oe.WARN&&Xl.warn(`Auth (${Oi}): ${t}`,...e)}function bl(t,...e){Xl.logLevel<=Oe.ERROR&&Xl.error(`Auth (${Oi}): ${t}`,...e)}/**
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
 */function Fn(t,...e){throw Tm(t,...e)}function mr(t,...e){return Tm(t,...e)}function yT(t,e,n){const r=Object.assign(Object.assign({},xD()),{[e]:n});return new Ni("auth","Firebase",r).create(e,{appName:t.name})}function vT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Fn(t,"argument-error"),yT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _T.create(t,...e)}function de(t,e,...n){if(!t)throw Tm(e,...n)}function Vr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bl(e),new Error(e)}function qr(t,e){t||Vr(e)}/**
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
 */function $f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MD(){return Zy()==="http:"||Zy()==="https:"}function Zy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function LD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MD()||oT()||"connection"in navigator)?navigator.onLine:!0}function VD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gc{constructor(e,n){this.shortDelay=e,this.longDelay=n,qr(n>e,"Short delay should be less than long delay!"),this.isMobile=ym()||aT()}get(){return LD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Im(t,e){qr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $D={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FD=new gc(3e4,6e4);function Es(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xi(t,e,n,r,i={}){return ET(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=No(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),wT.fetch()(TT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ET(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$D),e);try{const i=new UD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw rl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw rl(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw yT(t,u,l);Fn(t,u)}}catch(i){if(i instanceof Bn)throw i;Fn(t,"network-request-failed",{message:String(i)})}}async function _c(t,e,n,r,i={}){const s=await xi(t,e,n,r,i);return"mfaPendingCredential"in s&&Fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function TT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Im(t.config,i):`${t.config.apiScheme}://${i}`}class UD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mr(this.auth,"network-request-failed")),FD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mr(t,e,r);return i.customData._tokenResponse=n,i}async function BD(t,e){return xi(t,"GET","/v2/recaptchaConfig",Es(t,e))}/**
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
 */async function jD(t,e){return xi(t,"POST","/v1/accounts:delete",e)}async function HD(t,e){return xi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ia(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WD(t,e=!1){const n=Mt(t),r=await n.getIdToken(e),i=bm(r);de(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ia(Ad(i.auth_time)),issuedAtTime:Ia(Ad(i.iat)),expirationTime:Ia(Ad(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ad(t){return Number(t)*1e3}function bm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ql(n);return i?JSON.parse(i):(bl("Failed to decode base64 JWT payload"),null)}catch(i){return bl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zD(t){const e=bm(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&qD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class KD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class IT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ia(this.lastLoginAt),this.creationTime=Ia(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await co(t,HD(n,{idToken:r}));de(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?YD(s.providerUserInfo):[],a=QD(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new IT(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function GD(t){const e=Mt(t);await Zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function YD(t){return t.map(e=>{var{providerId:n}=e,r=Em(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function JD(t,e){const n=await ET(t,{},async()=>{const r=No({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=TT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class qa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return de(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qa;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(de(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(de(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qa,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
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
 */function ii(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Em(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new IT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await co(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WD(this,e)}reload(){return GD(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await co(this,jD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:P,isAnonymous:j,providerData:W,stsTokenManager:ae}=n;de(N&&ae,e,"internal-error");const ge=qa.fromJSON(this.name,ae);de(typeof N=="string",e,"internal-error"),ii(h,e.name),ii(p,e.name),de(typeof P=="boolean",e,"internal-error"),de(typeof j=="boolean",e,"internal-error"),ii(m,e.name),ii(y,e.name),ii(v,e.name),ii(b,e.name),ii(A,e.name),ii(k,e.name);const ze=new rs({uid:N,auth:e,email:p,emailVerified:P,displayName:h,isAnonymous:j,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:ge,createdAt:A,lastLoginAt:k});return W&&Array.isArray(W)&&(ze.providerData=W.map(Re=>Object.assign({},Re))),b&&(ze._redirectEventId=b),ze}static async _fromIdTokenResponse(e,n,r=!1){const i=new qa;i.updateFromServerResponse(n);const s=new rs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zl(s),s}}/**
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
 */const ev=new Map;function $r(t){qr(t instanceof Function,"Expected a class definition");let e=ev.get(t);return e?(qr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ev.set(t,e),e)}/**
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
 */class bT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bT.type="NONE";const tv=bT;/**
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
 */function Al(t,e,n){return`firebase:${t}:${e}:${n}`}class Ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Al(this.userKey,i.apiKey,s),this.fullPersistenceKey=Al("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ks($r(tv),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||$r(tv);const o=Al(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=rs._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ks(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ks(s,e,r))}}/**
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
 */function nv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(RT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(AT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(PT(e))return"Blackberry";if(kT(e))return"Webos";if(Am(e))return"Safari";if((e.includes("chrome/")||CT(e))&&!e.includes("edge/"))return"Chrome";if(ST(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function AT(t=on()){return/firefox\//i.test(t)}function Am(t=on()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function CT(t=on()){return/crios\//i.test(t)}function RT(t=on()){return/iemobile/i.test(t)}function ST(t=on()){return/android/i.test(t)}function PT(t=on()){return/blackberry/i.test(t)}function kT(t=on()){return/webos/i.test(t)}function sh(t=on()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XD(t=on()){var e;return sh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZD(){return ux()&&document.documentMode===10}function NT(t=on()){return sh(t)||ST(t)||kT(t)||PT(t)||/windows phone/i.test(t)||RT(t)}function eM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function OT(t,e=[]){let n;switch(t){case"Browser":n=nv(on());break;case"Worker":n=`${nv(on())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${r}`}/**
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
 */class tM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nM(t,e={}){return xi(t,"GET","/v2/passwordPolicy",Es(t,e))}/**
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
 */const rM=6;class iM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class sM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rv(this),this.idTokenSubscription=new rv(this),this.beforeStateQueue=new tM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_T,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$r(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Mt(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nM(this),n=new iM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$r(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[$r(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ir(t){return Mt(t)}class rv{constructor(e){this.auth=e,this.observer=null,this.addObserver=yx(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function oM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",oM().appendChild(r)})}function aM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cM="https://www.google.com/recaptcha/enterprise.js?render=",lM="recaptcha-enterprise",uM="NO_RECAPTCHA";class hM{constructor(e){this.type=lM,this.auth=Ir(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{BD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new OD(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Xy(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(uM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Xy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}xT(cM+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function eu(t,e,n,r=!1){const i=new hM(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function dM(t,e){const n=ws(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wa(s,e??{}))return i;Fn(i,"already-initialized")}return n.initialize({options:e})}function fM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($r);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pM(t,e,n){const r=Ir(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=DT(e),{host:o,port:a}=mM(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gM()}function DT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mM(t){const e=DT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:iv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:iv(o)}}}function iv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Cm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,n){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function _M(t,e){return xi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Cd(t,e){return _c(t,"POST","/v1/accounts:signInWithPassword",Es(t,e))}/**
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
 */async function yM(t,e){return _c(t,"POST","/v1/accounts:signInWithEmailLink",Es(t,e))}async function vM(t,e){return _c(t,"POST","/v1/accounts:signInWithEmailLink",Es(t,e))}/**
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
 */class Ka extends Cm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ka(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ka(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await eu(e,r,"signInWithPassword");return Cd(e,i)}else return Cd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await eu(e,r,"signInWithPassword");return Cd(e,s)}else return Promise.reject(i)});case"emailLink":return yM(e,{email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return _M(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vM(e,{idToken:n,email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gs(t,e){return _c(t,"POST","/v1/accounts:signInWithIdp",Es(t,e))}/**
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
 */const wM="http://localhost";class as extends Cm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Em(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new as(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gs(e,n)}buildRequest(){const e={requestUri:wM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=No(n)}return e}}/**
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
 */function EM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TM(t){const e=ca(la(t)).link,n=e?ca(la(e)).deep_link_id:null,r=ca(la(t)).deep_link_id;return(r?ca(la(r)).link:null)||r||n||e||t}class Rm{constructor(e){var n,r,i,s,o,a;const c=ca(la(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=EM((i=c.mode)!==null&&i!==void 0?i:null);de(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=TM(e);try{return new Rm(n)}catch{return null}}}/**
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
 */class xo{constructor(){this.providerId=xo.PROVIDER_ID}static credential(e,n){return Ka._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rm.parseLink(n);return de(r,"argument-error"),Ka._fromEmailAndCode(e,r.code,r.tenantId)}}xo.PROVIDER_ID="password";xo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class oh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yc extends oh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ai extends yc{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";ai.PROVIDER_ID="facebook.com";/**
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
 */class ci extends yc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ci.credential(n,r)}catch{return null}}}ci.GOOGLE_SIGN_IN_METHOD="google.com";ci.PROVIDER_ID="google.com";/**
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
 */class li extends yc{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.GITHUB_SIGN_IN_METHOD="github.com";li.PROVIDER_ID="github.com";/**
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
 */class ui extends yc{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ui.credential(n,r)}catch{return null}}}ui.TWITTER_SIGN_IN_METHOD="twitter.com";ui.PROVIDER_ID="twitter.com";/**
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
 */async function Rd(t,e){return _c(t,"POST","/v1/accounts:signUp",Es(t,e))}/**
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
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await rs._fromIdTokenResponse(e,r,i),o=sv(r);return new cs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sv(r);return new cs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class tu extends Bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tu(e,n,r,i)}}function MT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tu._fromErrorAndOperation(t,s,e,r):s})}async function IM(t,e,n=!1){const r=await co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cs._forOperation(t,"link",r)}/**
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
 */async function bM(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await co(t,MT(r,i,e,t),n);de(s.idToken,r,"internal-error");const o=bm(s.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),cs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Fn(r,"user-mismatch"),s}}/**
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
 */async function LT(t,e,n=!1){const r="signIn",i=await MT(t,r,e),s=await cs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function AM(t,e){return LT(Ir(t),e)}/**
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
 */async function VT(t){const e=Ir(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aW(t,e,n){var r;const i=Ir(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await eu(i,s,"signUpPassword");o=Rd(i,l)}else o=Rd(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await eu(i,s,"signUpPassword");return Rd(i,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&VT(t),l}),c=await cs._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function cW(t,e,n){return AM(Mt(t),xo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&VT(t),r})}/**
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
 */async function CM(t,e){return xi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function lW(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Mt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await co(r,CM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function $T(t,e,n,r){return Mt(t).onIdTokenChanged(e,n,r)}function RM(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}function uW(t){return Mt(t).signOut()}const nu="__sak";/**
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
 */class FT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nu,"1"),this.storage.removeItem(nu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function SM(){const t=on();return Am(t)||sh(t)}const PM=1e3,kM=10;class UT extends FT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SM()&&eM(),this.fallbackToPolling=NT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ZD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}UT.type="LOCAL";const NM=UT;/**
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
 */class BT extends FT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}BT.type="SESSION";const jT=BT;/**
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
 */function OM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ah{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ah(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await OM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ah.receivers=[];/**
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
 */function Sm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Sm("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gr(){return window}function DM(t){gr().location.href=t}/**
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
 */function HT(){return typeof gr().WorkerGlobalScope<"u"&&typeof gr().importScripts=="function"}async function MM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VM(){return HT()?self:null}/**
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
 */const WT="firebaseLocalStorageDb",$M=1,ru="firebaseLocalStorage",zT="fbase_key";class vc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ch(t,e){return t.transaction([ru],e?"readwrite":"readonly").objectStore(ru)}function FM(){const t=indexedDB.deleteDatabase(WT);return new vc(t).toPromise()}function Ff(){const t=indexedDB.open(WT,$M);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ru,{keyPath:zT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ru)?e(r):(r.close(),await FM(),e(await Ff()))})})}async function ov(t,e,n){const r=ch(t,!0).put({[zT]:e,value:n});return new vc(r).toPromise()}async function UM(t,e){const n=ch(t,!1).get(e),r=await new vc(n).toPromise();return r===void 0?null:r.value}function av(t,e){const n=ch(t,!0).delete(e);return new vc(n).toPromise()}const BM=800,jM=3;class qT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ff(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return HT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ah._getInstance(VM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MM(),!this.activeServiceWorker)return;this.sender=new xM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ff();return await ov(e,nu,"1"),await av(e,nu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ov(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>av(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ch(i,!1).getAll();return new vc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qT.type="LOCAL";const HM=qT;new gc(3e4,6e4);/**
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
 */function Pm(t,e){return e?$r(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class km extends Cm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WM(t){return LT(t.auth,new km(t),t.bypassAuthState)}function zM(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),bM(n,new km(t),t.bypassAuthState)}async function qM(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),IM(n,new km(t),t.bypassAuthState)}/**
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
 */class KT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WM;case"linkViaPopup":case"linkViaRedirect":return qM;case"reauthViaPopup":case"reauthViaRedirect":return zM;default:Fn(this.auth,"internal-error")}}resolve(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KM=new gc(2e3,1e4);async function hW(t,e,n){const r=Ir(t);vT(t,e,oh);const i=Pm(r,n);return new Gi(r,"signInViaPopup",e,i).executeNotNull()}class Gi extends KT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gi.currentPopupAction&&Gi.currentPopupAction.cancel(),Gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){qr(this.filter.length===1,"Popup operations only handle one event");const e=Sm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KM.get())};e()}}Gi.currentPopupAction=null;/**
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
 */const GM="pendingRedirect",Cl=new Map;class QM extends KT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cl.get(this.auth._key());if(!e){try{const r=await YM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cl.set(this.auth._key(),e)}return this.bypassAuthState||Cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YM(t,e){const n=QT(e),r=GT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function JM(t,e){return GT(t)._set(QT(e),"true")}function XM(t,e){Cl.set(t._key(),e)}function GT(t){return $r(t._redirectPersistence)}function QT(t){return Al(GM,t.config.apiKey,t.name)}/**
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
 */function dW(t,e,n){return ZM(t,e,n)}async function ZM(t,e,n){const r=Ir(t);vT(t,e,oh),await r._initializationPromise;const i=Pm(r,n);return await JM(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function fW(t,e){return await Ir(t)._initializationPromise,YT(t,e,!1)}async function YT(t,e,n=!1){const r=Ir(t),i=Pm(r,e),o=await new QM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const eL=10*60*1e3;class tL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!JT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eL&&this.cachedEventUids.clear(),this.cachedEventUids.has(cv(e))}saveEventToCache(e){this.cachedEventUids.add(cv(e)),this.lastProcessedEventTime=Date.now()}}function cv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function JT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return JT(t);default:return!1}}/**
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
 */async function rL(t,e={}){return xi(t,"GET","/v1/projects",e)}/**
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
 */const iL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sL=/^https?/;async function oL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rL(t);for(const n of e)try{if(aL(n))return}catch{}Fn(t,"unauthorized-domain")}function aL(t){const e=$f(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sL.test(n))return!1;if(iL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const cL=new gc(3e4,6e4);function lv(){const t=gr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lL(t){return new Promise((e,n)=>{var r,i,s;function o(){lv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lv(),n(mr(t,"network-request-failed"))},timeout:cL.get()})}if(!((i=(r=gr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gr().gapi)===null||s===void 0)&&s.load)o();else{const a=aM("iframefcb");return gr()[a]=()=>{gapi.load?o():n(mr(t,"network-request-failed"))},xT(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Rl=null,e})}let Rl=null;function uL(t){return Rl=Rl||lL(t),Rl}/**
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
 */const hL=new gc(5e3,15e3),dL="__/auth/iframe",fL="emulator/auth/iframe",pL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gL(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Im(e,fL):`https://${t.config.authDomain}/${dL}`,r={apiKey:e.apiKey,appName:t.name,v:Oi},i=mL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${No(r).slice(1)}`}async function _L(t){const e=await uL(t),n=gr().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:gL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mr(t,"network-request-failed"),a=gr().setTimeout(()=>{s(o)},hL.get());function c(){gr().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const yL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vL=500,wL=600,EL="_blank",TL="http://localhost";class uv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IL(t,e,n,r=vL,i=wL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yL),{width:r.toString(),height:i.toString(),top:s,left:o}),l=on().toLowerCase();n&&(a=CT(l)?EL:n),AT(l)&&(e=e||TL,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(XD(l)&&a!=="_self")return bL(e||"",a),new uv(null);const h=window.open(e||"",a,u);de(h,t,"popup-blocked");try{h.focus()}catch{}return new uv(h)}function bL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const AL="__/auth/handler",CL="emulator/auth/handler",RL=encodeURIComponent("fac");async function hv(t,e,n,r,i,s){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Oi,eventId:i};if(e instanceof oh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Of(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof yc){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${RL}=${encodeURIComponent(c)}`:"";return`${SL(t)}?${No(a).slice(1)}${l}`}function SL({config:t}){return t.emulator?Im(t,CL):`https://${t.authDomain}/${AL}`}/**
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
 */const Sd="webStorageSupport";class PL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jT,this._completeRedirectFn=YT,this._overrideRedirectResult=XM}async _openPopup(e,n,r,i){var s;qr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await hv(e,n,r,$f(),i);return IL(e,o,Sm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hv(e,n,r,$f(),i);return DM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _L(e),r=new tL(e);return n.register("authEvent",i=>(de(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sd,{type:Sd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sd];o!==void 0&&n(!!o),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return NT()||Am()||sh()}}const kL=PL;var dv="@firebase/auth",fv="1.3.0";/**
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
 */class NL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xL(t){vn(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OT(t)},l=new sM(r,i,s,c);return fM(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vn(new fn("auth-internal",e=>{const n=Ir(e.getProvider("auth").getImmediate());return(r=>new NL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(dv,fv,OL(t)),Ht(dv,fv,"esm2017")}/**
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
 */const DL=5*60,ML=sT("authIdTokenMaxAge")||DL;let pv=null;const LL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ML)return;const i=n==null?void 0:n.token;pv!==i&&(pv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function XT(t=ih()){const e=ws(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dM(t,{popupRedirectResolver:kL,persistence:[HM,NM,jT]}),r=sT("authTokenSyncURL");if(r){const s=LL(r);RM(n,s,()=>s(n.currentUser)),$T(n,o=>s(o))}const i=rT("auth");return i&&pM(n,`http://${i}`),n}xL("Browser");/**
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
 */const VL=new Map,$L={activated:!1,tokenObservers:[]};function nr(t){return VL.get(t)||Object.assign({},$L)}const mv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class FL{constructor(e,n,r,i,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ja,await UL(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ja,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function UL(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const BL={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},iu=new Ni("appCheck","AppCheck",BL);function ZT(t){if(!nr(t).activated)throw iu.create("use-before-activation",{appName:t.name})}/**
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
 */const jL="firebase-app-check-database",HL=1,Uf="firebase-app-check-store";let il=null;function WL(){return il||(il=new Promise((t,e)=>{try{const n=indexedDB.open(jL,HL);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var i;e(iu.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Uf,{keyPath:"compositeKey"})}}}catch(n){e(iu.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),il)}function zL(t,e){return qL(KL(t),e)}async function qL(t,e){const r=(await WL()).transaction(Uf,"readwrite"),s=r.objectStore(Uf).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=c=>{o()},r.onerror=c=>{var l;a(iu.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function KL(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Bf=new Oo("@firebase/app-check");function gv(t,e){return vm()?zL(t,e).catch(n=>{Bf.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const GL={error:"UNKNOWN_ERROR"};function QL(t){return nh.encodeString(JSON.stringify(t),!1)}async function jf(t,e=!1){const n=t.app;ZT(n);const r=nr(n);let i=r.token,s;if(i&&!ua(i)&&(r.token=void 0,i=void 0),!i){const c=await r.cachedTokenPromise;c&&(ua(c)?i=c:await gv(n,void 0))}if(!e&&i&&ua(i))return{token:i.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await nr(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Bf.warn(c.message):Bf.error(c),s=c}let a;return i?s?ua(i)?a={token:i.token,internalError:s}:a=yv(s):(a={token:i.token},r.token=i,await gv(n,i)):a=yv(s),o&&ZL(n,a),a}async function YL(t){const e=t.app;ZT(e);const{provider:n}=nr(e);{const{token:r}=await n.getToken();return{token:r}}}function JL(t,e,n,r){const{app:i}=t,s=nr(i),o={next:n,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&ua(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),_v(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>_v(t))}function eI(t,e){const n=nr(t),r=n.tokenObservers.filter(i=>i.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function _v(t){const{app:e}=t,n=nr(e);let r=n.tokenRefresher;r||(r=XL(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function XL(t){const{app:e}=t;return new FL(async()=>{const n=nr(e);let r;if(n.token?r=await jf(t,!0):r=await jf(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=nr(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},mv.RETRIAL_MIN_WAIT,mv.RETRIAL_MAX_WAIT)}function ZL(t,e){const n=nr(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function ua(t){return t.expireTimeMillis-Date.now()>0}function yv(t){return{token:QL(GL),error:t}}/**
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
 */class e2{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=nr(this.app);for(const n of e)eI(this.app,n.next);return Promise.resolve()}}function t2(t,e){return new e2(t,e)}function n2(t){return{getToken:e=>jf(t,e),getLimitedUseToken:()=>YL(t),addTokenListener:e=>JL(t,"INTERNAL",e),removeTokenListener:e=>eI(t.app,e)}}const r2="@firebase/app-check",i2="0.8.0",s2="app-check",vv="app-check-internal";function o2(){vn(new fn(s2,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return t2(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(vv).initialize()})),vn(new fn(vv,t=>{const e=t.getProvider("app-check").getImmediate();return n2(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ht(r2,i2)}o2();var a2="firebase",c2="10.3.0";/**
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
 */Ht(a2,c2,"app");const tI=Symbol("firebaseApp");function wc(t){return $E()&&Rn(tI,null)||ih(t)}const ur=()=>{},l2=typeof window<"u";function Nm(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function u2(t,e,n){const r=(""+e).split("."),i=r.pop(),s=r.reduce((o,a)=>o&&o[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(i),1,n):s[i]=n}function Ts(t){return!!t&&typeof t=="object"}const h2=Object.prototype;function d2(t){return Ts(t)&&Object.getPrototypeOf(t)===h2}function Om(t){return Ts(t)&&t.type==="document"}function f2(t){return Ts(t)&&t.type==="collection"}function p2(t){return Om(t)||f2(t)}function m2(t){return Ts(t)&&t.type==="query"}function g2(t){return Ts(t)&&"ref"in t}function _2(t){return Ts(t)&&typeof t.bucket=="string"}function y2(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const v2=Symbol.for("v-scx");function w2(){return!!Rn(v2,0)}const sl=new WeakMap;function E2(t,e){if(!sl.has(t)){const n=G0(!0);sl.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),sl.delete(t)}}return sl.get(t)}const nI=new WeakMap;function xm(t){return nI.get(wc(t))}const ol=new WeakMap;function rI(t){const e=wc(t);if(!ol.has(e)){let n;const i=[new Promise(s=>{n=s}),s=>{ol.set(e,s),n(s.value)}];ol.set(e,i)}return ol.get(e)}function T2(t){const e=rI(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function I2(t,e){const n=XT(e);$T(n,r=>{const i=rI();t.value=r,Array.isArray(i)&&i[1](t)})}const wv="@firebase/database",Ev="1.0.1";/**
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
 */let iI="";function b2(t){iI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Bt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ha(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new A2(e)}}catch{}return new C2},Qi=sI("localStorage"),Hf=sI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new Oo("@firebase/database"),R2=function(){let t=1;return function(){return t++}}(),oI=function(t){const e=Tx(t),n=new _x;n.update(e);const r=n.digest();return nh.encodeByteArray(r)},Ec=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ec.apply(null,r):typeof r=="object"?e+=Bt(r):e+=r,e+=" "}return e};let is=null,Tv=!0;const S2=function(t,e){K(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Qs.logLevel=Oe.VERBOSE,is=Qs.log.bind(Qs),e&&Hf.set("logging_enabled",!0)):typeof t=="function"?is=t:(is=null,Hf.remove("logging_enabled"))},Qt=function(...t){if(Tv===!0&&(Tv=!1,is===null&&Hf.get("logging_enabled")===!0&&S2(!0)),is){const e=Ec.apply(null,t);is(e)}},Tc=function(t){return function(...e){Qt(t,...e)}},Wf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ec(...t);Qs.error(e)},ls=function(...t){const e=`FIREBASE FATAL ERROR: ${Ec(...t)}`;throw Qs.error(e),new Error(e)},Pn=function(...t){const e="FIREBASE WARNING: "+Ec(...t);Qs.warn(e)},P2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},aI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},k2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},lo="[MIN_NAME]",us="[MAX_NAME]",Do=function(t,e){if(t===e)return 0;if(t===lo||e===us)return-1;if(e===lo||t===us)return 1;{const n=Iv(t),r=Iv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},N2=function(t,e){return t===e?0:t<e?-1:1},Zo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Bt(e))},Dm=function(t){if(typeof t!="object"||t===null)return Bt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Bt(e[r]),n+=":",n+=Dm(t[e[r]]);return n+="}",n},cI=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Un(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const lI=function(t){K(!aI(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,c;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let p=parseInt(u.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),h=h+p}return h.toLowerCase()},O2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},x2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},D2=new RegExp("^-?(0*)\\d{1,10}$"),M2=-2147483648,L2=2147483647,Iv=function(t){if(D2.test(t)){const e=Number(t);if(e>=M2&&e<=L2)return e}return null},Ic=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pn("Exception was thrown by user callback.",n),e},Math.floor(0))}},V2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ba=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class $2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Pn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pn(e)}}class zf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="5",uI="v",hI="s",dI="r",fI="f",pI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,mI="ls",gI="p",qf="ac",_I="websocket",yI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n,r,i,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function B2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function vI(t,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let r;if(e===_I)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===yI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);B2(t)&&(n.ns=t.namespace);const i=[];return Un(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(){this.counters_={}}incrementCounter(e,n=1){Xr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd={},kd={};function Lm(t){const e=t.toString();return Pd[e]||(Pd[e]=new j2),Pd[e]}function H2(t,e){const n=t.toString();return kd[n]||(kd[n]=e()),kd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ic(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv="start",z2="close",q2="pLPCommand",K2="pRTLPCB",wI="id",EI="pw",TI="ser",G2="cb",Q2="seg",Y2="ts",J2="d",X2="dframe",II=1870,bI=30,Z2=II-bI,eV=25e3,tV=3e4;class Fs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tc(e),this.stats_=Lm(n),this.urlFn=c=>(this.appCheckToken&&(c[qf]=this.appCheckToken),vI(n,yI,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new W2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tV)),k2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vm((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bv)this.id=a,this.password=c;else if(o===z2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[bv]="t",r[TI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[G2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[uI]=Mm,this.transportSessionId&&(r[hI]=this.transportSessionId),this.lastSessionId&&(r[mI]=this.lastSessionId),this.applicationId&&(r[gI]=this.applicationId),this.appCheckToken&&(r[qf]=this.appCheckToken),typeof location<"u"&&location.hostname&&pI.test(location.hostname)&&(r[dI]=fI);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fs.forceAllow_=!0}static forceDisallow(){Fs.forceDisallow_=!0}static isAvailable(){return Fs.forceAllow_?!0:!Fs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!O2()&&!x2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Bt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=tT(n),i=cI(r,Z2);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[X2]="t",r[wI]=e,r[EI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Bt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=R2(),window[q2+this.uniqueCallbackIdentifier]=e,window[K2+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Qt("frame writing exception"),a.stack&&Qt(a.stack),Qt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wI]=this.myID,e[EI]=this.myPW,e[TI]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+bI+r.length<=II;){const o=this.pendingSegs.shift();r=r+"&"+Q2+i+"="+o.seg+"&"+Y2+i+"="+o.ts+"&"+J2+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(eV)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Qt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV=16384,rV=45e3;let su=null;typeof MozWebSocket<"u"?su=MozWebSocket:typeof WebSocket<"u"&&(su=WebSocket);class qn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tc(this.connId),this.stats_=Lm(n),this.connURL=qn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[uI]=Mm,typeof location<"u"&&location.hostname&&pI.test(location.hostname)&&(o[dI]=fI),n&&(o[hI]=n),r&&(o[mI]=r),i&&(o[qf]=i),s&&(o[gI]=s),vI(e,_I,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qi.set("previous_websocket_failure",!0);try{let r;cT(),this.mySock=new su(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){qn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&su!==null&&!qn.forceDisallow_}static previouslyFailed(){return Qi.isInMemoryStorage||Qi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ha(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Bt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cI(n,nV);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qn.responsesRequiredToBeHealthy=2;qn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fs,qn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=qn&&qn.isAvailable();let r=n&&!qn.previouslyFailed();if(e.webSocketOnly&&(n||Pn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[qn];else{const i=this.transports_=[];for(const s of Ga.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ga.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ga.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV=6e4,sV=5e3,oV=10*1024,aV=100*1024,Nd="t",Av="d",cV="s",Cv="r",lV="e",Rv="o",Sv="a",Pv="n",kv="p",uV="h";class hV{constructor(e,n,r,i,s,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tc("c:"+this.id+":"),this.transportManager_=new Ga(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ba(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>oV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nd in e){const n=e[Nd];n===Sv?this.upgradeIfSecondaryHealthy_():n===Cv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zo("t",e),r=Zo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zo("t",e),r=Zo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zo(Nd,e);if(Av in e){const r=e[Av];if(n===uV){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Pv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===cV?this.onConnectionShutdown_(r):n===Cv?this.onReset_(r):n===lV?Wf("Server Error: "+r):n===Rv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mm!==r&&Pn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ba(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ba(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends CI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ym()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ou}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=32,Ov=768;class tt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ke(){return new tt("")}function Ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ai(t){return t.pieces_.length-t.pieceNum_}function Xe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new tt(t.pieces_,e)}function RI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function dV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function SI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function PI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new tt(e,0)}function Nt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof tt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new tt(n,0)}function Ee(t){return t.pieceNum_>=t.pieces_.length}function $n(t,e){const n=Ae(t),r=Ae(e);if(n===null)return e;if(n===r)return $n(Xe(t),Xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function kI(t,e){if(Ai(t)!==Ai(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Gn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ai(t)>Ai(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class fV{constructor(e,n){this.errorPrefix_=n,this.parts_=SI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=rh(this.parts_[r]);NI(this)}}function pV(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=rh(e),NI(t)}function mV(t){const e=t.parts_.pop();t.byteLength_-=rh(e),t.parts_.length>0&&(t.byteLength_-=1)}function NI(t){if(t.byteLength_>Ov)throw new Error(t.errorPrefix_+"has a key path longer than "+Ov+" bytes ("+t.byteLength_+").");if(t.parts_.length>Nv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Nv+") or object contains a cycle "+Wi(t))}function Wi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m extends CI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new $m}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=1e3,gV=60*5*1e3,xv=30*1e3,_V=1.3,yV=3e4,vV="server_kill",Dv=3;class jr extends AI{constructor(e,n,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=jr.nextPersistentConnectionId_++,this.log_=Tc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ea,this.maxReconnectDelay_=gV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!cT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$m.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ou.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Bt(s)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ja,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;jr.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xr(e,"w")){const r=ao(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=mx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Bt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Wf("Unrecognized action received from server: "+Bt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ea,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ea,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yV&&(this.reconnectDelay_=ea),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_V)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(h){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,p]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Qt("getToken() completed but was canceled"):(Qt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,a=new hV(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Pn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(vV)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Pn(h),c())}}}interrupt(e){Qt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Of(this.interruptReasons_)&&(this.reconnectDelay_=ea,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Dm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new tt(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Qt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dv&&(this.reconnectDelay_=xv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+iI.replace(/\./g,"-")]=1,ym()?e["framework.cordova"]=1:aT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ou.getInstance().currentlyOnline();return Of(this.interruptReasons_)&&e}}jr.nextPersistentConnectionId_=0;jr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ce(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ce(lo,e),i=new Ce(lo,n);return this.compare(r,i)!==0}minPost(){return Ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al;class OI extends lh{static get __EMPTY_NODE(){return al}static set __EMPTY_NODE(e){al=e}compare(e,n){return Do(e.name,n.name)}isDefinedOn(e){throw ko("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ce.MIN}maxPost(){return new Ce(us,al)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new Ce(e,al)}toString(){return".key"}}const Ys=new OI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},An=class ha{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ha.RED,this.left=i??hr.EMPTY_NODE,this.right=s??hr.EMPTY_NODE}copy(e,n,r,i,s){return new ha(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return hr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return hr.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ha.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ha.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};An.RED=!0;An.BLACK=!1;class wV{copy(e,n,r,i,s){return this}insert(e,n,r){return new An(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let hr=class Sl{constructor(e,n=Sl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Sl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,An.BLACK,null,null))}remove(e){return new Sl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,An.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new cl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new cl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new cl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new cl(this.root_,null,this.comparator_,!0,e)}};hr.EMPTY_NODE=new wV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EV(t,e){return Do(t.name,e.name)}function Fm(t,e){return Do(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kf;function TV(t){Kf=t}const xI=function(t){return typeof t=="number"?"number:"+lI(t):"string:"+t},DI=function(t){if(t.isLeafNode()){const e=t.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xr(e,".sv"),"Priority must be a string or number.")}else K(t===Kf||t.isEmpty(),"priority of unexpected type.");K(t===Kf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mv;class St{constructor(e,n=St.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),DI(this.priorityNode_)}static set __childrenNodeConstructor(e){Mv=e}static get __childrenNodeConstructor(){return Mv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new St(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:St.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ee(e)?this:Ae(e)===".priority"?this.priorityNode_:St.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:St.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(K(r!==".priority"||Ai(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,St.__childrenNodeConstructor.EMPTY_NODE.updateChild(Xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=lI(this.value_):e+=this.value_,this.lazyHash_=oI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===St.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof St.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=St.VALUE_TYPE_ORDER.indexOf(n),s=St.VALUE_TYPE_ORDER.indexOf(r);return K(i>=0,"Unknown leaf type: "+n),K(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}St.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MI,LI;function IV(t){MI=t}function bV(t){LI=t}class AV extends lh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Do(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ce.MIN}maxPost(){return new Ce(us,new St("[PRIORITY-POST]",LI))}makePost(e,n){const r=MI(e);return new Ce(n,new St("[PRIORITY-POST]",r))}toString(){return".priority"}}const tn=new AV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CV=Math.log(2);class RV{constructor(e){const n=s=>parseInt(Math.log(s)/CV,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const au=function(t,e,n,r){t.sort(e);const i=function(c,l){const u=l-c;let h,p;if(u===0)return null;if(u===1)return h=t[c],p=n?n(h):h,new An(p,h.node,An.BLACK,null,null);{const m=parseInt(u/2,10)+c,y=i(c,m),v=i(m+1,l);return h=t[m],p=n?n(h):h,new An(p,h.node,An.BLACK,y,v)}},s=function(c){let l=null,u=null,h=t.length;const p=function(y,v){const b=h-y,A=h;h-=y;const k=i(b+1,A),N=t[b],P=n?n(N):N;m(new An(P,N.node,v,null,k))},m=function(y){l?(l.left=y,l=y):(u=y,l=y)};for(let y=0;y<c.count;++y){const v=c.nextBitIsOne(),b=Math.pow(2,c.count-(y+1));v?p(b,An.BLACK):(p(b,An.BLACK),p(b,An.RED))}return u},o=new RV(t.length),a=s(o);return new hr(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Od;const Os={};class Fr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return K(Os&&tn,"ChildrenNode.ts has not been loaded"),Od=Od||new Fr({".priority":Os},{".priority":tn}),Od}get(e){const n=ao(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof hr?n:null}hasIndex(e){return Xr(this.indexSet_,e.toString())}addIndex(e,n){K(e!==Ys,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Ce.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=au(r,e.getCompare()):a=Os;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Fr(u,l)}addToIndexes(e,n){const r=Yl(this.indexes_,(i,s)=>{const o=ao(this.indexSet_,s);if(K(o,"Missing index implementation for "+s),i===Os)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Ce.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),au(a,o.getCompare())}else return Os;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new Ce(e.name,a))),c.insert(e,e.node)}});return new Fr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Yl(this.indexes_,i=>{if(i===Os)return i;{const s=n.get(e.name);return s?i.remove(new Ce(e.name,s)):i}});return new Fr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta;class Be{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&DI(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ta||(ta=new Be(new hr(Fm),null,Fr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ta}updatePriority(e){return this.children_.isEmpty()?this:new Be(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ta:n}}getChild(e){const n=Ae(e);return n===null?this:this.getImmediateChild(n).getChild(Xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ce(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ta:this.priorityNode_;return new Be(i,o,s)}}updateChild(e,n){const r=Ae(e);if(r===null)return n;{K(Ae(e)!==".priority"||Ai(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Xe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(tn,(o,a)=>{n[o]=a.val(e),r++,s&&Be.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xI(this.getPriority().val())+":"),this.forEachChild(tn,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":oI(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Ce(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ce(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bc?-1:0}withIndex(e){if(e===Ys||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Be(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ys||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(tn),i=n.getIterator(tn);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ys?null:this.indexMap_.get(e.toString())}}Be.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class SV extends Be{constructor(){super(new hr(Fm),Be.EMPTY_NODE,Fr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Be.EMPTY_NODE}isEmpty(){return!1}}const bc=new SV;Object.defineProperties(Ce,{MIN:{value:new Ce(lo,Be.EMPTY_NODE)},MAX:{value:new Ce(us,bc)}});OI.__EMPTY_NODE=Be.EMPTY_NODE;St.__childrenNodeConstructor=Be;TV(bc);bV(bc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PV=!0;function Yt(t,e=null){if(t===null)return Be.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new St(n,Yt(e))}if(!(t instanceof Array)&&PV){const n=[];let r=!1;if(Un(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Yt(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new Ce(o,c)))}}),n.length===0)return Be.EMPTY_NODE;const s=au(n,EV,o=>o.name,Fm);if(r){const o=au(n,tn.getCompare());return new Be(s,Yt(e),new Fr({".priority":o},{".priority":tn}))}else return new Be(s,Yt(e),Fr.Default)}else{let n=Be.EMPTY_NODE;return Un(t,(r,i)=>{if(Xr(t,r)&&r.substring(0,1)!=="."){const s=Yt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Yt(e))}}IV(Yt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV extends lh{constructor(e){super(),this.indexPath_=e,K(!Ee(e)&&Ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Do(e.name,n.name):s}makePost(e,n){const r=Yt(e),i=Be.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ce(n,i)}maxPost(){const e=Be.EMPTY_NODE.updateChild(this.indexPath_,bc);return new Ce(us,e)}toString(){return SI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV extends lh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Do(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ce.MIN}maxPost(){return Ce.MAX}makePost(e,n){const r=Yt(e);return new Ce(n,r)}toString(){return".value"}}const OV=new NV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xV(t){return{type:"value",snapshotNode:t}}function DV(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function MV(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Lv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function LV(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=tn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:lo}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:us}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===tn}copy(){const e=new Um;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Vv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===tn?n="$priority":t.index_===OV?n="$value":t.index_===Ys?n="$key":(K(t.index_ instanceof kV,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Bt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Bt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Bt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Bt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Bt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $v(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==tn&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends AI{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Tc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=cu.getListenId_(e,r),a={};this.listens_[o]=a;const c=Vv(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(s,h,!1,r),ao(this.listens_,o)===a){let p;l?l===401?p="permission_denied":p="rest_error:"+l:p="ok",i(p,null)}})}unlisten(e,n){const r=cu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Vv(e._queryParams),r=e._path.toString(),i=new ja;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+No(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ha(a.responseText)}catch{Pn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&Pn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(){this.rootNode_=Be.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(){return{value:null,children:new Map}}function VI(t,e,n){if(Ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ae(e);t.children.has(r)||t.children.set(r,lu());const i=t.children.get(r);e=Xe(e),VI(i,e,n)}}function Gf(t,e,n){t.value!==null?n(e,t.value):$V(t,(r,i)=>{const s=new tt(e.toString()+"/"+r);Gf(i,s,n)})}function $V(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Un(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=10*1e3,UV=30*1e3,BV=5*60*1e3;class jV{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new FV(e);const r=Fv+(UV-Fv)*Math.random();ba(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Un(e,(i,s)=>{s>0&&Xr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ba(this.reportStats_.bind(this),Math.floor(Math.random()*2*BV))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dr;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dr||(dr={}));function $I(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function FI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function UI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=dr.ACK_USER_WRITE,this.source=$I()}operationForChild(e){if(Ee(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new tt(e));return new uu(Ke(),n,this.revert)}}else return K(Ae(this.path)===e,"operationForChild called for unrelated child."),new uu(Xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=dr.OVERWRITE}operationForChild(e){return Ee(this.path)?new hs(this.source,Ke(),this.snap.getImmediateChild(e)):new hs(this.source,Xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=dr.MERGE}operationForChild(e){if(Ee(this.path)){const n=this.children.subtree(new tt(e));return n.isEmpty()?null:n.value?new hs(this.source,Ke(),n.value):new Qa(this.source,Ke(),n)}else return K(Ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qa(this.source,Xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function HV(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(LV(o.childName,o.snapshotNode))}),na(t,i,"child_removed",e,r,n),na(t,i,"child_added",e,r,n),na(t,i,"child_moved",s,r,n),na(t,i,"child_changed",e,r,n),na(t,i,"value",e,r,n),i}function na(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,c)=>zV(t,a,c)),o.forEach(a=>{const c=WV(t,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function WV(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zV(t,e,n){if(e.childName==null||n.childName==null)throw ko("Should only compare child_ events.");const r=new Ce(e.childName,e.snapshotNode),i=new Ce(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t,e){return{eventCache:t,serverCache:e}}function Aa(t,e,n,r){return BI(new Bm(e,n,r),t.serverCache)}function jI(t,e,n,r){return BI(t.eventCache,new Bm(e,n,r))}function Qf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ds(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xd;const qV=()=>(xd||(xd=new hr(N2)),xd);class Ye{constructor(e,n=qV()){this.value=e,this.children=n}static fromObject(e){let n=new Ye(null);return Un(e,(r,i)=>{n=n.set(new tt(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ke(),value:this.value};if(Ee(e))return null;{const r=Ae(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Xe(e),n);return s!=null?{path:Nt(new tt(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ee(e))return this;{const n=Ae(e),r=this.children.get(n);return r!==null?r.subtree(Xe(e)):new Ye(null)}}set(e,n){if(Ee(e))return new Ye(n,this.children);{const r=Ae(e),s=(this.children.get(r)||new Ye(null)).set(Xe(e),n),o=this.children.insert(r,s);return new Ye(this.value,o)}}remove(e){if(Ee(e))return this.children.isEmpty()?new Ye(null):new Ye(null,this.children);{const n=Ae(e),r=this.children.get(n);if(r){const i=r.remove(Xe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ye(null):new Ye(this.value,s)}else return this}}get(e){if(Ee(e))return this.value;{const n=Ae(e),r=this.children.get(n);return r?r.get(Xe(e)):null}}setTree(e,n){if(Ee(e))return n;{const r=Ae(e),s=(this.children.get(r)||new Ye(null)).setTree(Xe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ye(this.value,o)}}fold(e){return this.fold_(Ke(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Nt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ke(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Ee(e))return null;{const s=Ae(e),o=this.children.get(s);return o?o.findOnPath_(Xe(e),Nt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ke(),n)}foreachOnPath_(e,n,r){if(Ee(e))return this;{this.value&&r(n,this.value);const i=Ae(e),s=this.children.get(i);return s?s.foreachOnPath_(Xe(e),Nt(n,i),r):new Ye(null)}}foreach(e){this.foreach_(Ke(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Nt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.writeTree_=e}static empty(){return new Zn(new Ye(null))}}function Ca(t,e,n){if(Ee(e))return new Zn(new Ye(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=$n(i,e);return s=s.updateChild(o,n),new Zn(t.writeTree_.set(i,s))}else{const i=new Ye(n),s=t.writeTree_.setTree(e,i);return new Zn(s)}}}function Uv(t,e,n){let r=t;return Un(n,(i,s)=>{r=Ca(r,Nt(e,i),s)}),r}function Bv(t,e){if(Ee(e))return Zn.empty();{const n=t.writeTree_.setTree(e,new Ye(null));return new Zn(n)}}function Yf(t,e){return Is(t,e)!=null}function Is(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($n(n.path,e)):null}function jv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(tn,(r,i)=>{e.push(new Ce(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Ce(r,i.value))}),e}function wi(t,e){if(Ee(e))return t;{const n=Is(t,e);return n!=null?new Zn(new Ye(n)):new Zn(t.writeTree_.subtree(e))}}function Jf(t){return t.writeTree_.isEmpty()}function uo(t,e){return HI(Ke(),t.writeTree_,e)}function HI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(K(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=HI(Nt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Nt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t,e){return QI(e,t)}function KV(t,e,n,r,i){K(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ca(t.visibleWrites,e,n)),t.lastWriteId=r}function GV(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function QV(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&YV(a,r.path)?i=!1:Gn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return JV(t),!0;if(r.snap)t.visibleWrites=Bv(t.visibleWrites,r.path);else{const a=r.children;Un(a,c=>{t.visibleWrites=Bv(t.visibleWrites,Nt(r.path,c))})}return!0}else return!1}function YV(t,e){if(t.snap)return Gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Gn(Nt(t.path,n),e))return!0;return!1}function JV(t){t.visibleWrites=zI(t.allWrites,XV,Ke()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function XV(t){return t.visible}function zI(t,e,n){let r=Zn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Gn(n,o)?(a=$n(n,o),r=Ca(r,a,s.snap)):Gn(o,n)&&(a=$n(o,n),r=Ca(r,Ke(),s.snap.getChild(a)));else if(s.children){if(Gn(n,o))a=$n(n,o),r=Uv(r,a,s.children);else if(Gn(o,n))if(a=$n(o,n),Ee(a))r=Uv(r,Ke(),s.children);else{const c=ao(s.children,Ae(a));if(c){const l=c.getChild(Xe(a));r=Ca(r,Ke(),l)}}}else throw ko("WriteRecord should have .snap or .children")}}return r}function qI(t,e,n,r,i){if(!r&&!i){const s=Is(t.visibleWrites,e);if(s!=null)return s;{const o=wi(t.visibleWrites,e);if(Jf(o))return n;if(n==null&&!Yf(o,Ke()))return null;{const a=n||Be.EMPTY_NODE;return uo(o,a)}}}else{const s=wi(t.visibleWrites,e);if(!i&&Jf(s))return n;if(!i&&n==null&&!Yf(s,Ke()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(Gn(l.path,e)||Gn(e,l.path))},a=zI(t.allWrites,o,e),c=n||Be.EMPTY_NODE;return uo(a,c)}}}function ZV(t,e,n){let r=Be.EMPTY_NODE;const i=Is(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(tn,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=wi(t.visibleWrites,e);return n.forEachChild(tn,(o,a)=>{const c=uo(wi(s,new tt(o)),a);r=r.updateImmediateChild(o,c)}),jv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=wi(t.visibleWrites,e);return jv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function e$(t,e,n,r,i){K(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Nt(e,n);if(Yf(t.visibleWrites,s))return null;{const o=wi(t.visibleWrites,s);return Jf(o)?i.getChild(n):uo(o,i.getChild(n))}}function t$(t,e,n,r){const i=Nt(e,n),s=Is(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=wi(t.visibleWrites,i);return uo(o,r.getNode().getImmediateChild(n))}else return null}function n$(t,e){return Is(t.visibleWrites,e)}function r$(t,e,n,r,i,s,o){let a;const c=wi(t.visibleWrites,e),l=Is(c,Ke());if(l!=null)a=l;else if(n!=null)a=uo(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=p.getNext();for(;m&&u.length<i;)h(m,r)!==0&&u.push(m),m=p.getNext();return u}else return[]}function i$(){return{visibleWrites:Zn.empty(),allWrites:[],lastWriteId:-1}}function Xf(t,e,n,r){return qI(t.writeTree,t.treePath,e,n,r)}function KI(t,e){return ZV(t.writeTree,t.treePath,e)}function Hv(t,e,n,r){return e$(t.writeTree,t.treePath,e,n,r)}function hu(t,e){return n$(t.writeTree,Nt(t.treePath,e))}function s$(t,e,n,r,i,s){return r$(t.writeTree,t.treePath,e,n,r,i,s)}function jm(t,e,n){return t$(t.writeTree,t.treePath,e,n)}function GI(t,e){return QI(Nt(t.treePath,e),t.writeTree)}function QI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o${constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Lv(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,MV(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,DV(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Lv(r,e.snapshotNode,i.oldSnap));else throw ko("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const YI=new a$;class Hm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Bm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ds(this.viewCache_),s=s$(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function c$(t,e){K(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function l$(t,e,n,r,i){const s=new o$;let o,a;if(n.type===dr.OVERWRITE){const l=n;l.source.fromUser?o=Zf(t,e,l.path,l.snap,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Ee(l.path),o=du(t,e,l.path,l.snap,r,i,a,s))}else if(n.type===dr.MERGE){const l=n;l.source.fromUser?o=h$(t,e,l.path,l.children,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ep(t,e,l.path,l.children,r,i,a,s))}else if(n.type===dr.ACK_USER_WRITE){const l=n;l.revert?o=p$(t,e,l.path,r,i,s):o=d$(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===dr.LISTEN_COMPLETE)o=f$(t,e,n.path,r,s);else throw ko("Unknown operation type: "+n.type);const c=s.getChanges();return u$(e,o,c),{viewCache:o,changes:c}}function u$(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Qf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(xV(Qf(e)))}}function JI(t,e,n,r,i,s){const o=e.eventCache;if(hu(r,n)!=null)return e;{let a,c;if(Ee(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=ds(e),u=l instanceof Be?l:Be.EMPTY_NODE,h=KI(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const l=Xf(r,ds(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=Ae(n);if(l===".priority"){K(Ai(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Hv(r,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Xe(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const p=Hv(r,n,o.getNode(),c);p!=null?h=o.getNode().getImmediateChild(l).updateChild(u,p):h=o.getNode().getImmediateChild(l)}else h=jm(r,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,s):a=o.getNode()}}return Aa(e,a,o.isFullyInitialized()||Ee(n),t.filter.filtersNodes())}}function du(t,e,n,r,i,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(Ee(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),m,null)}else{const m=Ae(n);if(!c.isCompleteForPath(n)&&Ai(n)>1)return e;const y=Xe(n),b=c.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?l=u.updatePriority(c.getNode(),b):l=u.updateChild(c.getNode(),m,b,y,YI,null)}const h=jI(e,l,c.isFullyInitialized()||Ee(n),u.filtersNodes()),p=new Hm(i,h,s);return JI(t,h,n,i,p,a)}function Zf(t,e,n,r,i,s,o){const a=e.eventCache;let c,l;const u=new Hm(i,e,s);if(Ee(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Aa(e,l,!0,t.filter.filtersNodes());else{const h=Ae(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),c=Aa(e,l,a.isFullyInitialized(),a.isFiltered());else{const p=Xe(n),m=a.getNode().getImmediateChild(h);let y;if(Ee(p))y=r;else{const v=u.getCompleteChild(h);v!=null?RI(p)===".priority"&&v.getChild(PI(p)).isEmpty()?y=v:y=v.updateChild(p,r):y=Be.EMPTY_NODE}if(m.equals(y))c=e;else{const v=t.filter.updateChild(a.getNode(),h,y,p,u,o);c=Aa(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Wv(t,e){return t.eventCache.isCompleteForChild(e)}function h$(t,e,n,r,i,s,o){let a=e;return r.foreach((c,l)=>{const u=Nt(n,c);Wv(e,Ae(u))&&(a=Zf(t,a,u,l,i,s,o))}),r.foreach((c,l)=>{const u=Nt(n,c);Wv(e,Ae(u))||(a=Zf(t,a,u,l,i,s,o))}),a}function zv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ep(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;Ee(n)?l=r:l=new Ye(null).setTree(n,r);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,p)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),y=zv(t,m,p);c=du(t,c,new tt(h),y,i,s,o,a)}}),l.children.inorderTraversal((h,p)=>{const m=!e.serverCache.isCompleteForChild(h)&&p.value===null;if(!u.hasChild(h)&&!m){const y=e.serverCache.getNode().getImmediateChild(h),v=zv(t,y,p);c=du(t,c,new tt(h),v,i,s,o,a)}}),c}function d$(t,e,n,r,i,s,o){if(hu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(Ee(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return du(t,e,n,c.getNode().getChild(n),i,s,a,o);if(Ee(n)){let l=new Ye(null);return c.getNode().forEachChild(Ys,(u,h)=>{l=l.set(new tt(u),h)}),ep(t,e,n,l,i,s,a,o)}else return e}else{let l=new Ye(null);return r.foreach((u,h)=>{const p=Nt(n,u);c.isCompleteForPath(p)&&(l=l.set(u,c.getNode().getChild(p)))}),ep(t,e,n,l,i,s,a,o)}}function f$(t,e,n,r,i){const s=e.serverCache,o=jI(e,s.getNode(),s.isFullyInitialized()||Ee(n),s.isFiltered());return JI(t,o,n,r,YI,i)}function p$(t,e,n,r,i,s){let o;if(hu(r,n)!=null)return e;{const a=new Hm(r,e,i),c=e.eventCache.getNode();let l;if(Ee(n)||Ae(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Xf(r,ds(e));else{const h=e.serverCache.getNode();K(h instanceof Be,"serverChildren would be complete if leaf node"),u=KI(r,h)}u=u,l=t.filter.updateFullNode(c,u,s)}else{const u=Ae(n);let h=jm(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Xe(n),a,s):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,Be.EMPTY_NODE,Xe(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xf(r,ds(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||hu(r,Ke())!=null,Aa(e,l,o,t.filter.filtersNodes())}}function m$(t,e){const n=ds(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ee(e)&&!n.getImmediateChild(Ae(e)).isEmpty())?n.getChild(e):null}function qv(t,e,n,r){e.type===dr.MERGE&&e.source.queryId!==null&&(K(ds(t.viewCache_),"We should always have a full cache before handling merges"),K(Qf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=l$(t.processor_,i,e,n,r);return c$(t.processor_,s.viewCache),K(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,g$(t,s.changes,s.viewCache.eventCache.getNode(),null)}function g$(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return HV(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kv;function _$(t){K(!Kv,"__referenceConstructor has already been defined"),Kv=t}function Wm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return K(s!=null,"SyncTree gave us an op for an invalid query."),qv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(qv(o,e,n,r));return s}}function zm(t,e){let n=null;for(const r of t.views.values())n=n||m$(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gv;function y$(t){K(!Gv,"__referenceConstructor has already been defined"),Gv=t}class Qv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ye(null),this.pendingWriteTree_=i$(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function v$(t,e,n,r,i){return KV(t.pendingWriteTree_,e,n,r,i),i?hh(t,new hs($I(),e,n)):[]}function Us(t,e,n=!1){const r=GV(t.pendingWriteTree_,e);if(QV(t.pendingWriteTree_,e)){let s=new Ye(null);return r.snap!=null?s=s.set(Ke(),!0):Un(r.children,o=>{s=s.set(new tt(o),!0)}),hh(t,new uu(r.path,s,n))}else return[]}function uh(t,e,n){return hh(t,new hs(FI(),e,n))}function w$(t,e,n){const r=Ye.fromObject(n);return hh(t,new Qa(FI(),e,r))}function E$(t,e,n,r){const i=tb(t,r);if(i!=null){const s=nb(i),o=s.path,a=s.queryId,c=$n(o,e),l=new hs(UI(a),c,n);return rb(t,o,l)}else return[]}function T$(t,e,n,r){const i=tb(t,r);if(i){const s=nb(i),o=s.path,a=s.queryId,c=$n(o,e),l=Ye.fromObject(n),u=new Qa(UI(a),c,l);return rb(t,o,u)}else return[]}function XI(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=$n(o,e),l=zm(a,c);if(l)return l});return qI(i,e,s,n,!0)}function hh(t,e){return ZI(e,t.syncPointTree_,null,WI(t.pendingWriteTree_,Ke()))}function ZI(t,e,n,r){if(Ee(t.path))return eb(t,e,n,r);{const i=e.get(Ke());n==null&&i!=null&&(n=zm(i,Ke()));let s=[];const o=Ae(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=GI(r,o);s=s.concat(ZI(a,c,l,u))}return i&&(s=s.concat(Wm(i,t,r,n))),s}}function eb(t,e,n,r){const i=e.get(Ke());n==null&&i!=null&&(n=zm(i,Ke()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=GI(r,o),u=t.operationForChild(o);u&&(s=s.concat(eb(u,a,c,l)))}),i&&(s=s.concat(Wm(i,t,r,n))),s}function tb(t,e){return t.tagToQueryMap.get(e)}function nb(t){const e=t.indexOf("$");return K(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new tt(t.substr(0,e))}}function rb(t,e,n){const r=t.syncPointTree_.get(e);K(r,"Missing sync point for query tag that we're tracking");const i=WI(t.pendingWriteTree_,e);return Wm(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qm(n)}node(){return this.node_}}class Km{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Nt(this.path_,e);return new Km(this.syncTree_,n)}node(){return XI(this.syncTree_,this.path_)}}const I$=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yv=function(t,e,n){if(!t||typeof t!="object")return t;if(K(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return b$(t[".sv"],e,n);if(typeof t[".sv"]=="object")return A$(t[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},b$=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+t)}},A$=function(t,e,n){t.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&K(!1,"Unexpected increment value: "+r);const i=e.node();if(K(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},C$=function(t,e,n,r){return Gm(e,new Km(n,t),r)},R$=function(t,e,n){return Gm(t,new qm(e),n)};function Gm(t,e,n){const r=t.getPriority().val(),i=Yv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Yv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new St(a,Yt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new St(i))),o.forEachChild(tn,(a,c)=>{const l=Gm(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ym(t,e){let n=e instanceof tt?e:new tt(e),r=t,i=Ae(n);for(;i!==null;){const s=ao(r.node.children,i)||{children:{},childCount:0};r=new Qm(i,r,s),n=Xe(n),i=Ae(n)}return r}function Mo(t){return t.node.value}function ib(t,e){t.node.value=e,tp(t)}function sb(t){return t.node.childCount>0}function S$(t){return Mo(t)===void 0&&!sb(t)}function dh(t,e){Un(t.node.children,(n,r)=>{e(new Qm(n,t,r))})}function ob(t,e,n,r){n&&!r&&e(t),dh(t,i=>{ob(i,e,!0,r)}),n&&r&&e(t)}function P$(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ac(t){return new tt(t.parent===null?t.name:Ac(t.parent)+"/"+t.name)}function tp(t){t.parent!==null&&k$(t.parent,t.name,t)}function k$(t,e,n){const r=S$(n),i=Xr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,tp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,tp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N$=/[\[\].#$\/\u0000-\u001F\u007F]/,O$=/[\[\].#$\u0000-\u001F\u007F]/,Dd=10*1024*1024,ab=function(t){return typeof t=="string"&&t.length!==0&&!N$.test(t)},x$=function(t){return typeof t=="string"&&t.length!==0&&!O$.test(t)},D$=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),x$(t)},cb=function(t,e,n){const r=n instanceof tt?new fV(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wi(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wi(r)+" with contents = "+e.toString());if(aI(e))throw new Error(t+"contains "+e.toString()+" "+Wi(r));if(typeof e=="string"&&e.length>Dd/3&&rh(e)>Dd)throw new Error(t+"contains a string greater than "+Dd+" utf8 bytes "+Wi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Un(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ab(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pV(r,o),cb(t,a,r),mV(r)}),i&&s)throw new Error(t+' contains ".value" child '+Wi(r)+" in addition to actual children.")}},M$=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ab(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!D$(n))throw new Error(Ex(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L${constructor(){this.eventLists_=[],this.recursionDepth_=0}}function V$(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!kI(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function bs(t,e,n){V$(t,n),$$(t,r=>Gn(r,e)||Gn(e,r))}function $$(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(F$(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function F$(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();is&&Qt("event: "+n.toString()),Ic(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U$="repo_interrupt",B$=25;class j${constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new L$,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=lu(),this.transactionQueueTree_=new Qm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function H$(t,e,n){if(t.stats_=Lm(t.repoInfo_),t.forceRestClient_||V2())t.server_=new cu(t.repoInfo_,(r,i,s,o)=>{Jv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Bt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new jr(t.repoInfo_,e,(r,i,s,o)=>{Jv(t,r,i,s,o)},r=>{Xv(t,r)},r=>{z$(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=H2(t.repoInfo_,()=>new jV(t.stats_,t.server_)),t.infoData_=new VV,t.infoSyncTree_=new Qv({startListening:(r,i,s,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=uh(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Jm(t,"connected",!1),t.serverSyncTree_=new Qv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);bs(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function W$(t){const n=t.infoData_.getNode(new tt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function lb(t){return I$({timestamp:W$(t)})}function Jv(t,e,n,r,i){t.dataUpdateCount++;const s=new tt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const c=Yl(n,l=>Yt(l));o=T$(t.serverSyncTree_,s,c,i)}else{const c=Yt(n);o=E$(t.serverSyncTree_,s,c,i)}else if(r){const c=Yl(n,l=>Yt(l));o=w$(t.serverSyncTree_,s,c)}else{const c=Yt(n);o=uh(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=Zm(t,s)),bs(t.eventQueue_,a,o)}function Xv(t,e){Jm(t,"connected",e),e===!1&&K$(t)}function z$(t,e){Un(e,(n,r)=>{Jm(t,n,r)})}function Jm(t,e,n){const r=new tt("/.info/"+e),i=Yt(n);t.infoData_.updateSnapshot(r,i);const s=uh(t.infoSyncTree_,r,i);bs(t.eventQueue_,r,s)}function q$(t){return t.nextWriteId_++}function K$(t){ub(t,"onDisconnectEvents");const e=lb(t),n=lu();Gf(t.onDisconnect_,Ke(),(i,s)=>{const o=C$(i,s,t.serverSyncTree_,e);VI(n,i,o)});let r=[];Gf(n,Ke(),(i,s)=>{r=r.concat(uh(t.serverSyncTree_,i,s));const o=J$(t,i);Zm(t,o)}),t.onDisconnect_=lu(),bs(t.eventQueue_,Ke(),r)}function G$(t){t.persistentConnection_&&t.persistentConnection_.interrupt(U$)}function ub(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Qt(n,...e)}function hb(t,e,n){return XI(t.serverSyncTree_,e,n)||Be.EMPTY_NODE}function Xm(t,e=t.transactionQueueTree_){if(e||fh(t,e),Mo(e)){const n=fb(t,e);K(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Q$(t,Ac(e),n)}else sb(e)&&dh(e,n=>{Xm(t,n)})}function Q$(t,e,n){const r=n.map(l=>l.currentWriteId),i=hb(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];K(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=$n(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{ub(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let p=0;p<n.length;p++)n[p].status=2,u=u.concat(Us(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&h.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();fh(t,Ym(t.transactionQueueTree_,e)),Xm(t,t.transactionQueueTree_),bs(t.eventQueue_,e,u);for(let p=0;p<h.length;p++)Ic(h[p])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Pn("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}Zm(t,e)}},o)}function Zm(t,e){const n=db(t,e),r=Ac(n),i=fb(t,n);return Y$(t,i,r),r}function Y$(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=$n(n,c.path);let u=!1,h;if(K(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Us(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=B$)u=!0,h="maxretry",i=i.concat(Us(t.serverSyncTree_,c.currentWriteId,!0));else{const p=hb(t,c.path,o);c.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){cb("transaction failed: Data returned ",m,c.path);let y=Yt(m);typeof m=="object"&&m!=null&&Xr(m,".priority")||(y=y.updatePriority(p.getPriority()));const b=c.currentWriteId,A=lb(t),k=R$(y,p,A);c.currentOutputSnapshotRaw=y,c.currentOutputSnapshotResolved=k,c.currentWriteId=q$(t),o.splice(o.indexOf(b),1),i=i.concat(v$(t.serverSyncTree_,c.path,k,c.currentWriteId,c.applyLocally)),i=i.concat(Us(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",i=i.concat(Us(t.serverSyncTree_,c.currentWriteId,!0))}bs(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}fh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ic(r[a]);Xm(t,t.transactionQueueTree_)}function db(t,e){let n,r=t.transactionQueueTree_;for(n=Ae(e);n!==null&&Mo(r)===void 0;)r=Ym(r,n),e=Xe(e),n=Ae(e);return r}function fb(t,e){const n=[];return pb(t,e,n),n.sort((r,i)=>r.order-i.order),n}function pb(t,e,n){const r=Mo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);dh(e,i=>{pb(t,i,n)})}function fh(t,e){const n=Mo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ib(e,n.length>0?n:void 0)}dh(e,r=>{fh(t,r)})}function J$(t,e){const n=Ac(db(t,e)),r=Ym(t.transactionQueueTree_,e);return P$(r,i=>{Md(t,i)}),Md(t,r),ob(r,i=>{Md(t,i)}),n}function Md(t,e){const n=Mo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(K(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(K(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Us(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ib(e,void 0):n.length=s+1,bs(t.eventQueue_,Ac(e),i);for(let o=0;o<r.length;o++)Ic(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X$(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Z$(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pn(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zv=function(t,e){const n=eF(t),r=n.namespace;n.domain==="firebase.com"&&ls(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ls("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||P2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new U2(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new tt(n.pathString)}},eF=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=X$(t.substring(u,h)));const p=Z$(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const m=e.slice(0,l);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class eg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Ee(this._path)?null:RI(this._path)}get ref(){return new Lo(this._repo,this._path)}get _queryIdentifier(){const e=$v(this._queryParams),n=Dm(e);return n==="{}"?"default":n}get _queryObject(){return $v(this._queryParams)}isEqual(e){if(e=Mt(e),!(e instanceof eg))return!1;const n=this._repo===e._repo,r=kI(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dV(this._path)}}class Lo extends eg{constructor(e,n){super(e,n,new Um,!1)}get parent(){const e=PI(this._path);return e===null?null:new Lo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}_$(Lo);y$(Lo);/**
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
 */const tF="FIREBASE_DATABASE_EMULATOR_HOST",np={};let nF=!1;function rF(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ls("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zv(s,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[tF]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=Zv(s,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new zf(zf.OWNER):new F2(t.name,t.options,e);M$("Invalid Firebase Database URL",o),Ee(o.path)||ls("Database URL must point to the root of a Firebase Database (not including a child path).");const h=sF(a,t,u,new $2(t.name,n));return new oF(h,t)}function iF(t,e){const n=np[e];(!n||n[t.key]!==t)&&ls(`Database ${e}(${t.repoInfo_}) has already been deleted.`),G$(t),delete n[t.key]}function sF(t,e,n,r){let i=np[e.name];i||(i={},np[e.name]=i);let s=i[t.toURLString()];return s&&ls("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new j$(t,nF,n,r),i[t.toURLString()]=s,s}class oF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(H$(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lo(this._repo,Ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(iF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ls("Cannot call "+e+" on a deleted database.")}}/**
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
 */function aF(t){b2(Oi),vn(new fn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return rF(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ht(wv,Ev,t),Ht(wv,Ev,"esm2017")}jr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};aF();var cF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,tg=tg||{},pe=cF||self;function ph(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Cc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function lF(t){return Object.prototype.hasOwnProperty.call(t,Ld)&&t[Ld]||(t[Ld]=++uF)}var Ld="closure_uid_"+(1e9*Math.random()>>>0),uF=0;function hF(t,e,n){return t.call.apply(t.bind,arguments)}function dF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function nn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nn=hF:nn=dF,nn.apply(null,arguments)}function ll(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Vt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Di(){this.s=this.s,this.o=this.o}var fF=0;Di.prototype.s=!1;Di.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fF!=0)&&lF(this)};Di.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mb=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ng(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ew(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ph(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function rn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rn.prototype.h=function(){this.defaultPrevented=!0};var pF=function(){if(!pe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{pe.addEventListener("test",()=>{},e),pe.removeEventListener("test",()=>{},e)}catch{}return t}();function Ya(t){return/^[\s\xa0]*$/.test(t)}function mh(){var t=pe.navigator;return t&&(t=t.userAgent)?t:""}function lr(t){return mh().indexOf(t)!=-1}function rg(t){return rg[" "](t),t}rg[" "]=function(){};function mF(t,e){var n=aU;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var gF=lr("Opera"),ho=lr("Trident")||lr("MSIE"),gb=lr("Edge"),rp=gb||ho,_b=lr("Gecko")&&!(mh().toLowerCase().indexOf("webkit")!=-1&&!lr("Edge"))&&!(lr("Trident")||lr("MSIE"))&&!lr("Edge"),_F=mh().toLowerCase().indexOf("webkit")!=-1&&!lr("Edge");function yb(){var t=pe.document;return t?t.documentMode:void 0}var ip;e:{var Vd="",$d=function(){var t=mh();if(_b)return/rv:([^\);]+)(\)|;)/.exec(t);if(gb)return/Edge\/([\d\.]+)/.exec(t);if(ho)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_F)return/WebKit\/(\S+)/.exec(t);if(gF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($d&&(Vd=$d?$d[1]:""),ho){var Fd=yb();if(Fd!=null&&Fd>parseFloat(Vd)){ip=String(Fd);break e}}ip=Vd}var sp;if(pe.document&&ho){var tw=yb();sp=tw||parseInt(ip,10)||void 0}else sp=void 0;var yF=sp;function Ja(t,e){if(rn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(_b){e:{try{rg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:vF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ja.$.h.call(this)}}Vt(Ja,rn);var vF={2:"touch",3:"pen",4:"mouse"};Ja.prototype.h=function(){Ja.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Rc="closure_listenable_"+(1e6*Math.random()|0),wF=0;function EF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++wF,this.fa=this.ia=!1}function gh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ig(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function TF(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function vb(t){const e={};for(const n in t)e[n]=t[n];return e}const nw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<nw.length;s++)n=nw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _h(t){this.src=t,this.g={},this.h=0}_h.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ap(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new EF(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function op(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=mb(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(gh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ap(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var sg="closure_lm_"+(1e6*Math.random()|0),Ud={};function Eb(t,e,n,r,i){if(r&&r.once)return Ib(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Eb(t,e[s],n,r,i);return null}return n=cg(n),t&&t[Rc]?t.O(e,n,Cc(r)?!!r.capture:!!r,i):Tb(t,e,n,!1,r,i)}function Tb(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Cc(i)?!!i.capture:!!i,a=ag(t);if(a||(t[sg]=a=new _h(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=IF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)pF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ab(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function IF(){function t(n){return e.call(t.src,t.listener,n)}const e=bF;return t}function Ib(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ib(t,e[s],n,r,i);return null}return n=cg(n),t&&t[Rc]?t.P(e,n,Cc(r)?!!r.capture:!!r,i):Tb(t,e,n,!0,r,i)}function bb(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)bb(t,e[s],n,r,i);else r=Cc(r)?!!r.capture:!!r,n=cg(n),t&&t[Rc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ap(s,n,r,i),-1<n&&(gh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ag(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ap(e,n,r,i)),(n=-1<t?e[t]:null)&&og(n))}function og(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Rc])op(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ab(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ag(e))?(op(n,t),n.h==0&&(n.src=null,e[sg]=null)):gh(t)}}}function Ab(t){return t in Ud?Ud[t]:Ud[t]="on"+t}function bF(t,e){if(t.fa)t=!0;else{e=new Ja(e,this);var n=t.listener,r=t.la||t.src;t.ia&&og(t),t=n.call(r,e)}return t}function ag(t){return t=t[sg],t instanceof _h?t:null}var Bd="__closure_events_fn_"+(1e9*Math.random()>>>0);function cg(t){return typeof t=="function"?t:(t[Bd]||(t[Bd]=function(e){return t.handleEvent(e)}),t[Bd])}function Lt(){Di.call(this),this.i=new _h(this),this.S=this,this.J=null}Vt(Lt,Di);Lt.prototype[Rc]=!0;Lt.prototype.removeEventListener=function(t,e,n,r){bb(this,t,e,n,r)};function Wt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new rn(e,t);else if(e instanceof rn)e.target=e.target||t;else{var i=e;e=new rn(r,t),wb(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ul(o,r,!0,e)&&i}if(o=e.g=t,i=ul(o,r,!0,e)&&i,i=ul(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ul(o,r,!1,e)&&i}Lt.prototype.N=function(){if(Lt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)gh(n[r]);delete t.g[e],t.h--}}this.J=null};Lt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Lt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ul(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&op(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var lg=pe.JSON.stringify;class AF{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function CF(){var t=ug;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class RF{constructor(){this.h=this.g=null}add(e,n){const r=Cb.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Cb=new AF(()=>new SF,t=>t.reset());class SF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function PF(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function kF(t){pe.setTimeout(()=>{throw t},0)}let Xa,Za=!1,ug=new RF,Rb=()=>{const t=pe.Promise.resolve(void 0);Xa=()=>{t.then(NF)}};var NF=()=>{for(var t;t=CF();){try{t.h.call(t.g)}catch(n){kF(n)}var e=Cb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Za=!1};function yh(t,e){Lt.call(this),this.h=t||1,this.g=e||pe,this.j=nn(this.qb,this),this.l=Date.now()}Vt(yh,Lt);G=yh.prototype;G.ga=!1;G.T=null;G.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Wt(this,"tick"),this.ga&&(hg(this),this.start()))}};G.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}G.N=function(){yh.$.N.call(this),hg(this),delete this.g};function dg(t,e,n){if(typeof t=="function")n&&(t=nn(t,n));else if(t&&typeof t.handleEvent=="function")t=nn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:pe.setTimeout(t,e||0)}function Sb(t){t.g=dg(()=>{t.g=null,t.i&&(t.i=!1,Sb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class OF extends Di{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Sb(this)}N(){super.N(),this.g&&(pe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ec(t){Di.call(this),this.h=t,this.g={}}Vt(ec,Di);var rw=[];function Pb(t,e,n,r){Array.isArray(n)||(n&&(rw[0]=n.toString()),n=rw);for(var i=0;i<n.length;i++){var s=Eb(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function kb(t){ig(t.g,function(e,n){this.g.hasOwnProperty(n)&&og(e)},t),t.g={}}ec.prototype.N=function(){ec.$.N.call(this),kb(this)};ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vh(){this.g=!0}vh.prototype.Ea=function(){this.g=!1};function xF(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function DF(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Bs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+LF(t,n)+(r?" "+r:"")})}function MF(t,e){t.info(function(){return"TIMEOUT: "+e})}vh.prototype.info=function(){};function LF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return lg(n)}catch{return e}}var As={},iw=null;function wh(){return iw=iw||new Lt}As.Ta="serverreachability";function Nb(t){rn.call(this,As.Ta,t)}Vt(Nb,rn);function tc(t){const e=wh();Wt(e,new Nb(e))}As.STAT_EVENT="statevent";function Ob(t,e){rn.call(this,As.STAT_EVENT,t),this.stat=e}Vt(Ob,rn);function dn(t){const e=wh();Wt(e,new Ob(e,t))}As.Ua="timingevent";function xb(t,e){rn.call(this,As.Ua,t),this.size=e}Vt(xb,rn);function Sc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return pe.setTimeout(function(){t()},e)}var Eh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Db={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fg(){}fg.prototype.h=null;function sw(t){return t.h||(t.h=t.i())}function Mb(){}var Pc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pg(){rn.call(this,"d")}Vt(pg,rn);function mg(){rn.call(this,"c")}Vt(mg,rn);var cp;function Th(){}Vt(Th,fg);Th.prototype.g=function(){return new XMLHttpRequest};Th.prototype.i=function(){return{}};cp=new Th;function kc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ec(this),this.P=VF,t=rp?125:void 0,this.V=new yh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Lb}function Lb(){this.i=null,this.g="",this.h=!1}var VF=45e3,lp={},fu={};G=kc.prototype;G.setTimeout=function(t){this.P=t};function up(t,e,n){t.L=1,t.v=bh(Kr(e)),t.s=n,t.S=!0,Vb(t,null)}function Vb(t,e){t.G=Date.now(),Nc(t),t.A=Kr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),zb(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Lb,t.g=dA(t.l,n?e:null,!t.s),0<t.O&&(t.M=new OF(nn(t.Pa,t,t.g),t.O)),Pb(t.U,t.g,"readystatechange",t.nb),e=t.I?vb(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),tc(),xF(t.j,t.u,t.A,t.m,t.W,t.s)}G.nb=function(t){t=t.target;const e=this.M;e&&fr(t)==3?e.l():this.Pa(t)};G.Pa=function(t){try{if(t==this.g)e:{const u=fr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||rp||this.g&&(this.h.h||this.g.ja()||lw(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?tc(3):tc(2)),Ih(this);var n=this.g.da();this.ca=n;t:if($b(this)){var r=lw(this.g);t="";var i=r.length,s=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yi(this),Ra(this);var o="";break t}this.h.i=new pe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,DF(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ya(a)){var l=a;break t}}l=null}if(n=l)Bs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hp(this,n);else{this.i=!1,this.o=3,dn(12),Yi(this),Ra(this);break e}}this.S?(Fb(this,u,o),rp&&this.i&&u==3&&(Pb(this.U,this.V,"tick",this.mb),this.V.start())):(Bs(this.j,this.m,o,null),hp(this,o)),u==4&&Yi(this),this.i&&!this.J&&(u==4?cA(this.l,this):(this.i=!1,Nc(this)))}else iU(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dn(12)):(this.o=0,dn(13)),Yi(this),Ra(this)}}}catch{}finally{}};function $b(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Fb(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=$F(t,n),i==fu){e==4&&(t.o=4,dn(14),r=!1),Bs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==lp){t.o=4,dn(15),Bs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Bs(t.j,t.m,i,null),hp(t,i);$b(t)&&i!=fu&&i!=lp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Eg(e),e.M=!0,dn(11))):(Bs(t.j,t.m,n,"[Invalid Chunked Response]"),Yi(t),Ra(t))}G.mb=function(){if(this.g){var t=fr(this.g),e=this.g.ja();this.C<e.length&&(Ih(this),Fb(this,t,e),this.i&&t!=4&&Nc(this))}};function $F(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?fu:(n=Number(e.substring(n,r)),isNaN(n)?lp:(r+=1,r+n>e.length?fu:(e=e.slice(r,r+n),t.C=r+n,e)))}G.cancel=function(){this.J=!0,Yi(this)};function Nc(t){t.Y=Date.now()+t.P,Ub(t,t.P)}function Ub(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Sc(nn(t.lb,t),e)}function Ih(t){t.B&&(pe.clearTimeout(t.B),t.B=null)}G.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(MF(this.j,this.A),this.L!=2&&(tc(),dn(17)),Yi(this),this.o=2,Ra(this)):Ub(this,this.Y-t)};function Ra(t){t.l.H==0||t.J||cA(t.l,t)}function Yi(t){Ih(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,hg(t.V),kb(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function hp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||dp(n.i,t))){if(!t.K&&dp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)gu(n),Sh(n);else break e;wg(n),dn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Sc(nn(n.ib,n),6e3));if(1>=Gb(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ji(n,11)}else if((t.K||n.g==t)&&gu(n),!Ya(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(gg(s,s.h),s.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ze(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=hA(r,r.J?r.pa:null,r.Y),o.K){Qb(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Ih(a),Nc(a)),r.g=o}else oA(r);0<n.j.length&&Ph(n)}else l[0]!="stop"&&l[0]!="close"||Ji(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ji(n,7):vg(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}tc(4)}catch{}}function FF(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ph(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function UF(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ph(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Bb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ph(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=UF(t),r=FF(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var jb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ss(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ss){this.h=t.h,pu(this,t.j),this.s=t.s,this.g=t.g,mu(this,t.m),this.l=t.l;var e=t.i,n=new nc;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ow(this,n),this.o=t.o}else t&&(e=String(t).match(jb))?(this.h=!1,pu(this,e[1]||"",!0),this.s=da(e[2]||""),this.g=da(e[3]||"",!0),mu(this,e[4]),this.l=da(e[5]||"",!0),ow(this,e[6]||"",!0),this.o=da(e[7]||"")):(this.h=!1,this.i=new nc(null,this.h))}ss.prototype.toString=function(){var t=[],e=this.j;e&&t.push(fa(e,aw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(fa(e,aw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(fa(n,n.charAt(0)=="/"?WF:HF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",fa(n,qF)),t.join("")};function Kr(t){return new ss(t)}function pu(t,e,n){t.j=n?da(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function mu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ow(t,e,n){e instanceof nc?(t.i=e,KF(t.i,t.h)):(n||(e=fa(e,zF)),t.i=new nc(e,t.h))}function Ze(t,e,n){t.i.set(e,n)}function bh(t){return Ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function da(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,jF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function jF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var aw=/[#\/\?@]/g,HF=/[#\?:]/g,WF=/[#\?]/g,zF=/[#\?@]/g,qF=/#/g;function nc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mi(t){t.g||(t.g=new Map,t.h=0,t.i&&BF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=nc.prototype;G.add=function(t,e){Mi(this),this.i=null,t=Vo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hb(t,e){Mi(t),e=Vo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Wb(t,e){return Mi(t),e=Vo(t,e),t.g.has(e)}G.forEach=function(t,e){Mi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};G.ta=function(){Mi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};G.Z=function(t){Mi(this);let e=[];if(typeof t=="string")Wb(this,t)&&(e=e.concat(this.g.get(Vo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return Mi(this),this.i=null,t=Vo(this,t),Wb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function zb(t,e,n){Hb(t,e),0<n.length&&(t.i=null,t.g.set(Vo(t,e),ng(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Vo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function KF(t,e){e&&!t.j&&(Mi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Hb(this,r),zb(this,i,n))},t)),t.j=e}var GF=class{constructor(t,e){this.g=t,this.map=e}};function qb(t){this.l=t||QF,pe.PerformanceNavigationTiming?(t=pe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(pe.g&&pe.g.Ka&&pe.g.Ka()&&pe.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QF=10;function Kb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gb(t){return t.h?1:t.g?t.g.size:0}function dp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function gg(t,e){t.g?t.g.add(e):t.h=e}function Qb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qb.prototype.cancel=function(){if(this.i=Yb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Yb(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ng(t.i)}var YF=class{stringify(t){return pe.JSON.stringify(t,void 0)}parse(t){return pe.JSON.parse(t,void 0)}};function JF(){this.g=new YF}function XF(t,e,n){const r=n||"";try{Bb(t,function(i,s){let o=i;Cc(i)&&(o=lg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ZF(t,e){const n=new vh;if(pe.Image){const r=new Image;r.onload=ll(hl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ll(hl,n,r,"TestLoadImage: error",!1,e),r.onabort=ll(hl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ll(hl,n,r,"TestLoadImage: timeout",!1,e),pe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function hl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ah(t){this.l=t.fc||null,this.j=t.ob||!1}Vt(Ah,fg);Ah.prototype.g=function(){return new Ch(this.l,this.j)};Ah.prototype.i=function(t){return function(){return t}}({});function Ch(t,e){Lt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=_g,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Vt(Ch,Lt);var _g=0;G=Ch.prototype;G.open=function(t,e){if(this.readyState!=_g)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,rc(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||pe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oc(this)),this.readyState=_g};G.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,rc(this)),this.g&&(this.readyState=3,rc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof pe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jb(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Jb(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}G.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Oc(this):rc(this),this.readyState==3&&Jb(this)}};G.Za=function(t){this.g&&(this.response=this.responseText=t,Oc(this))};G.Ya=function(t){this.g&&(this.response=t,Oc(this))};G.ka=function(){this.g&&Oc(this)};function Oc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,rc(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function rc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ch.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eU=pe.JSON.parse;function lt(t){Lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Xb,this.L=this.M=!1}Vt(lt,Lt);var Xb="",tU=/^https?$/i,nU=["POST","PUT"];G=lt.prototype;G.Oa=function(t){this.M=t};G.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():cp.g(),this.C=this.u?sw(this.u):sw(cp),this.g.onreadystatechange=nn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){cw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=pe.FormData&&t instanceof pe.FormData,!(0<=mb(nU,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{tA(this),0<this.B&&((this.L=rU(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nn(this.ua,this)):this.A=dg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){cw(this,s)}};function rU(t){return ho&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.ua=function(){typeof tg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Wt(this,"timeout"),this.abort(8))};function cw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Zb(t),Rh(t)}function Zb(t){t.F||(t.F=!0,Wt(t,"complete"),Wt(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Wt(this,"complete"),Wt(this,"abort"),Rh(this))};G.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rh(this,!0)),lt.$.N.call(this)};G.La=function(){this.s||(this.G||this.v||this.l?eA(this):this.kb())};G.kb=function(){eA(this)};function eA(t){if(t.h&&typeof tg<"u"&&(!t.C[1]||fr(t)!=4||t.da()!=2)){if(t.v&&fr(t)==4)dg(t.La,0,t);else if(Wt(t,"readystatechange"),fr(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(jb)[1]||null;!i&&pe.self&&pe.self.location&&(i=pe.self.location.protocol.slice(0,-1)),r=!tU.test(i?i.toLowerCase():"")}n=r}if(n)Wt(t,"complete"),Wt(t,"success");else{t.m=6;try{var s=2<fr(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Zb(t)}}finally{Rh(t)}}}}function Rh(t,e){if(t.g){tA(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Wt(t,"ready");try{n.onreadystatechange=r}catch{}}}function tA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(pe.clearTimeout(t.A),t.A=null)}G.isActive=function(){return!!this.g};function fr(t){return t.g?t.g.readyState:0}G.da=function(){try{return 2<fr(this)?this.g.status:-1}catch{return-1}};G.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eU(e)}};function lw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Xb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function iU(t){const e={};t=(t.g&&2<=fr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ya(t[r]))continue;var n=PF(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}TF(e,function(r){return r.join(", ")})}G.Ia=function(){return this.m};G.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nA(t){let e="";return ig(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function yg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=nA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ze(t,e,n))}function ra(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rA(t){this.Ga=0,this.j=[],this.l=new vh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ra("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ra("baseRetryDelayMs",5e3,t),this.hb=ra("retryDelaySeedMs",1e4,t),this.eb=ra("forwardChannelMaxRetries",2,t),this.xa=ra("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new qb(t&&t.concurrentRequestLimit),this.Ja=new JF,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}G=rA.prototype;G.ra=8;G.H=1;function vg(t){if(iA(t),t.H==3){var e=t.W++,n=Kr(t.I);if(Ze(n,"SID",t.K),Ze(n,"RID",e),Ze(n,"TYPE","terminate"),xc(t,n),e=new kc(t,t.l,e),e.L=2,e.v=bh(Kr(n)),n=!1,pe.navigator&&pe.navigator.sendBeacon)try{n=pe.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&pe.Image&&(new Image().src=e.v,n=!0),n||(e.g=dA(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Nc(e)}uA(t)}function Sh(t){t.g&&(Eg(t),t.g.cancel(),t.g=null)}function iA(t){Sh(t),t.u&&(pe.clearTimeout(t.u),t.u=null),gu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&pe.clearTimeout(t.m),t.m=null)}function Ph(t){if(!Kb(t.i)&&!t.m){t.m=!0;var e=t.Na;Xa||Rb(),Za||(Xa(),Za=!0),ug.add(e,t),t.C=0}}function sU(t,e){return Gb(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Sc(nn(t.Na,t,e),lA(t,t.C)),t.C++,!0)}G.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new kc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=vb(s),wb(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=sA(this,i,e),n=Kr(this.I),Ze(n,"RID",t),Ze(n,"CVER",22),this.F&&Ze(n,"X-HTTP-Session-Id",this.F),xc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(nA(s)))+"&"+e:this.o&&yg(n,this.o,s)),gg(this.i,i),this.bb&&Ze(n,"TYPE","init"),this.P?(Ze(n,"$req",e),Ze(n,"SID","null"),i.aa=!0,up(i,n,null)):up(i,n,e),this.H=2}}else this.H==3&&(t?uw(this,t):this.j.length==0||Kb(this.i)||uw(this))};function uw(t,e){var n;e?n=e.m:n=t.W++;const r=Kr(t.I);Ze(r,"SID",t.K),Ze(r,"RID",n),Ze(r,"AID",t.V),xc(t,r),t.o&&t.s&&yg(r,t.o,t.s),n=new kc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=sA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),gg(t.i,n),up(n,r,e)}function xc(t,e){t.na&&ig(t.na,function(n,r){Ze(e,r,n)}),t.h&&Bb({},function(n,r){Ze(e,r,n)})}function sA(t,e,n){n=Math.min(t.j.length,n);var r=t.h?nn(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{XF(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function oA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Xa||Rb(),Za||(Xa(),Za=!0),ug.add(e,t),t.A=0}}function wg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Sc(nn(t.Ma,t),lA(t,t.A)),t.A++,!0)}G.Ma=function(){if(this.u=null,aA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Sc(nn(this.jb,this),t)}};G.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,dn(10),Sh(this),aA(this))};function Eg(t){t.B!=null&&(pe.clearTimeout(t.B),t.B=null)}function aA(t){t.g=new kc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Kr(t.wa);Ze(e,"RID","rpc"),Ze(e,"SID",t.K),Ze(e,"AID",t.V),Ze(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ze(e,"TO",t.qa),Ze(e,"TYPE","xmlhttp"),xc(t,e),t.o&&t.s&&yg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=bh(Kr(e)),n.s=null,n.S=!0,Vb(n,t)}G.ib=function(){this.v!=null&&(this.v=null,Sh(this),wg(this),dn(19))};function gu(t){t.v!=null&&(pe.clearTimeout(t.v),t.v=null)}function cA(t,e){var n=null;if(t.g==e){gu(t),Eg(t),t.g=null;var r=2}else if(dp(t.i,e))n=e.F,Qb(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=wh(),Wt(r,new xb(r,n)),Ph(t)}else oA(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&sU(t,e)||r==2&&wg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ji(t,5);break;case 4:Ji(t,10);break;case 3:Ji(t,6);break;default:Ji(t,2)}}}function lA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ji(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=nn(t.pb,t);n||(n=new ss("//www.google.com/images/cleardot.gif"),pe.location&&pe.location.protocol=="http"||pu(n,"https"),bh(n)),ZF(n.toString(),r)}else dn(2);t.H=0,t.h&&t.h.za(e),uA(t),iA(t)}G.pb=function(t){t?(this.l.info("Successfully pinged google.com"),dn(2)):(this.l.info("Failed to ping google.com"),dn(1))};function uA(t){if(t.H=0,t.ma=[],t.h){const e=Yb(t.i);(e.length!=0||t.j.length!=0)&&(ew(t.ma,e),ew(t.ma,t.j),t.i.i.length=0,ng(t.j),t.j.length=0),t.h.ya()}}function hA(t,e,n){var r=n instanceof ss?Kr(n):new ss(n);if(r.g!="")e&&(r.g=e+"."+r.g),mu(r,r.m);else{var i=pe.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ss(null);r&&pu(s,r),e&&(s.g=e),i&&mu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ze(r,n,e),Ze(r,"VER",t.ra),xc(t,r),r}function dA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new lt(new Ah({ob:!0})):new lt(t.va),e.Oa(t.J),e}G.isActive=function(){return!!this.h&&this.h.isActive(this)};function fA(){}G=fA.prototype;G.Ba=function(){};G.Aa=function(){};G.za=function(){};G.ya=function(){};G.isActive=function(){return!0};G.Va=function(){};function _u(){if(ho&&!(10<=Number(yF)))throw Error("Environmental error: no available transport.")}_u.prototype.g=function(t,e){return new Nn(t,e)};function Nn(t,e){Lt.call(this),this.g=new rA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ya(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ya(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $o(this)}Vt(Nn,Lt);Nn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;dn(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=hA(t,null,t.Y),Ph(t)};Nn.prototype.close=function(){vg(this.g)};Nn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=lg(t),t=n);e.j.push(new GF(e.fb++,t)),e.H==3&&Ph(e)};Nn.prototype.N=function(){this.g.h=null,delete this.j,vg(this.g),delete this.g,Nn.$.N.call(this)};function pA(t){pg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Vt(pA,pg);function mA(){mg.call(this),this.status=1}Vt(mA,mg);function $o(t){this.g=t}Vt($o,fA);$o.prototype.Ba=function(){Wt(this.g,"a")};$o.prototype.Aa=function(t){Wt(this.g,new pA(t))};$o.prototype.za=function(t){Wt(this.g,new mA)};$o.prototype.ya=function(){Wt(this.g,"b")};function oU(){this.blockSize=-1}function rr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Vt(rr,oU);rr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function jd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}rr.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)jd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){jd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){jd(this,r),i=0;break}}this.h=i,this.i+=e};rr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function We(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var aU={};function Tg(t){return-128<=t&&128>t?mF(t,function(e){return new We([e|0],0>e?-1:0)}):new We([t|0],0>t?-1:0)}function pr(t){if(isNaN(t)||!isFinite(t))return Js;if(0>t)return Ut(pr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=fp;return new We(e,0)}function gA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ut(gA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pr(Math.pow(e,8)),r=Js,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=pr(Math.pow(e,s)),r=r.R(s).add(pr(o))):(r=r.R(n),r=r.add(pr(o)))}return r}var fp=4294967296,Js=Tg(0),pp=Tg(1),hw=Tg(16777216);G=We.prototype;G.ea=function(){if(Ln(this))return-Ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:fp+r)*e,e*=fp}return t};G.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ur(this))return"0";if(Ln(this))return"-"+Ut(this).toString(t);for(var e=pr(Math.pow(t,6)),n=this,r="";;){var i=vu(n,e).g;n=yu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Ur(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};G.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ur(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ln(t){return t.h==-1}G.X=function(t){return t=yu(this,t),Ln(t)?-1:Ur(t)?0:1};function Ut(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new We(n,~t.h).add(pp)}G.abs=function(){return Ln(this)?Ut(this):this};G.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new We(n,n[n.length-1]&-2147483648?-1:0)};function yu(t,e){return t.add(Ut(e))}G.R=function(t){if(Ur(this)||Ur(t))return Js;if(Ln(this))return Ln(t)?Ut(this).R(Ut(t)):Ut(Ut(this).R(t));if(Ln(t))return Ut(this.R(Ut(t)));if(0>this.X(hw)&&0>t.X(hw))return pr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,dl(n,2*r+2*i),n[2*r+2*i+1]+=s*c,dl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,dl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,dl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new We(n,0)};function dl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ia(t,e){this.g=t,this.h=e}function vu(t,e){if(Ur(e))throw Error("division by zero");if(Ur(t))return new ia(Js,Js);if(Ln(t))return e=vu(Ut(t),e),new ia(Ut(e.g),Ut(e.h));if(Ln(e))return e=vu(t,Ut(e)),new ia(Ut(e.g),e.h);if(30<t.g.length){if(Ln(t)||Ln(e))throw Error("slowDivide_ only works with positive integers.");for(var n=pp,r=e;0>=r.X(t);)n=dw(n),r=dw(r);var i=xs(n,1),s=xs(r,1);for(r=xs(r,2),n=xs(n,2);!Ur(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=xs(r,1),n=xs(n,1)}return e=yu(t,i.R(e)),new ia(i,e)}for(i=Js;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=pr(n),o=s.R(e);Ln(o)||0<o.X(t);)n-=r,s=pr(n),o=s.R(e);Ur(s)&&(s=pp),i=i.add(s),t=yu(t,o)}return new ia(i,t)}G.gb=function(t){return vu(this,t).h};G.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new We(n,this.h&t.h)};G.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new We(n,this.h|t.h)};G.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new We(n,this.h^t.h)};function dw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new We(n,t.h)}function xs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new We(i,t.h)}_u.prototype.createWebChannel=_u.prototype.g;Nn.prototype.send=Nn.prototype.u;Nn.prototype.open=Nn.prototype.m;Nn.prototype.close=Nn.prototype.close;Eh.NO_ERROR=0;Eh.TIMEOUT=8;Eh.HTTP_ERROR=6;Db.COMPLETE="complete";Mb.EventType=Pc;Pc.OPEN="a";Pc.CLOSE="b";Pc.ERROR="c";Pc.MESSAGE="d";Lt.prototype.listen=Lt.prototype.O;lt.prototype.listenOnce=lt.prototype.P;lt.prototype.getLastError=lt.prototype.Sa;lt.prototype.getLastErrorCode=lt.prototype.Ia;lt.prototype.getStatus=lt.prototype.da;lt.prototype.getResponseJson=lt.prototype.Wa;lt.prototype.getResponseText=lt.prototype.ja;lt.prototype.send=lt.prototype.ha;lt.prototype.setWithCredentials=lt.prototype.Oa;rr.prototype.digest=rr.prototype.l;rr.prototype.reset=rr.prototype.reset;rr.prototype.update=rr.prototype.j;We.prototype.add=We.prototype.add;We.prototype.multiply=We.prototype.R;We.prototype.modulo=We.prototype.gb;We.prototype.compare=We.prototype.X;We.prototype.toNumber=We.prototype.ea;We.prototype.toString=We.prototype.toString;We.prototype.getBits=We.prototype.D;We.fromNumber=pr;We.fromString=gA;var cU=function(){return new _u},lU=function(){return wh()},Hd=Eh,uU=Db,hU=As,fw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},fl=Mb,dU=lt,fU=rr,Xs=We;const pw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Gt.UNAUTHENTICATED=new Gt(null),Gt.GOOGLE_CREDENTIALS=new Gt("google-credentials-uid"),Gt.FIRST_PARTY=new Gt("first-party-uid"),Gt.MOCK_USER=new Gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Oo("@firebase/firestore");function mw(){return fs.logLevel}function ee(t,...e){if(fs.logLevel<=Oe.DEBUG){const n=e.map(Ig);fs.debug(`Firestore (${Fo}): ${t}`,...n)}}function Gr(t,...e){if(fs.logLevel<=Oe.ERROR){const n=e.map(Ig);fs.error(`Firestore (${Fo}): ${t}`,...n)}}function fo(t,...e){if(fs.logLevel<=Oe.WARN){const n=e.map(Ig);fs.warn(`Firestore (${Fo}): ${t}`,...n)}}function Ig(t){if(typeof t=="string")return t;try{/**
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
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: `+t;throw Gr(e),new Error(e)}function et(t,e){t||fe()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Gt.UNAUTHENTICATED))}shutdown(){}}class mU{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gU{constructor(e){this.t=e,this.currentUser=Gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Hr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Hr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(et(typeof r.accessToken=="string"),new _A(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string"),new Gt(e)}}class _U{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yU{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new _U(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vU{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wU{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(et(typeof n.token=="string"),this.R=n.token,new vU(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function EU(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=EU(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function $e(t,e){return t<e?-1:t>e?1:0}function po(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new mt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$e(this.nanoseconds,e.nanoseconds):$e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new me(e)}static min(){return new me(new mt(0,0))}static max(){return new me(new mt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ic.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ic?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class st extends ic{construct(e,n,r){return new st(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new st(n)}static emptyPath(){return new st([])}}const TU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class en extends ic{construct(e,n,r){return new en(e,n,r)}static isValidIdentifier(e){return TU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),en.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new en(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ie($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ie($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new en(n)}static emptyPath(){return new en([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(st.fromString(e))}static fromName(e){return new oe(st.fromString(e).popFirst(5))}static empty(){return new oe(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new st(e.slice()))}}function IU(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=me.fromTimestamp(r===1e9?new mt(n+1,0):new mt(n,r));return new Ci(i,oe.empty(),e)}function bU(t){return new Ci(t.readTime,t.key,-1)}class Ci{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ci(me.min(),oe.empty(),-1)}static max(){return new Ci(me.max(),oe.empty(),-1)}}function AU(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:$e(t.largestBatchId,e.largestBatchId))}/**
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
 */const CU="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RU{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==CU)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Mc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}bg.ae=-1;function kh(t){return t==null}function wu(t){return t===0&&1/t==-1/0}function SU(t){return typeof t=="number"&&Number.isInteger(t)&&!wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Uo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){this.comparator=e,this.root=n||Ft.EMPTY}insert(e,n){return new at(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pl(this.root,e,this.comparator,!0)}}class pl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ft.RED,this.left=i??Ft.EMPTY,this.right=s??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ft(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _w(this.data.getIterator())}getIteratorFrom(e){return new _w(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof sn)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new sn(this.comparator);return n.data=e,n}}class _w{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qn{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new Qn([])}unionWith(e){let n=new sn(en.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return po(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class wA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class an{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new wA("Invalid base64 string: "+s):s}}(e);return new an(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new an(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}an.EMPTY_BYTE_STRING=new an("");const PU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(t){if(et(!!t),typeof t=="string"){let e=0;const n=PU.exec(t);if(et(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pt(t.seconds),nanos:pt(t.nanos)}}function pt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ps(t){return typeof t=="string"?an.fromBase64String(t):an.fromUint8Array(t)}/**
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
 */function Ag(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cg(t){const e=t.mapValue.fields.__previous_value__;return Ag(e)?Cg(e):e}function sc(t){const e=Ri(t.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kU{constructor(e,n,r,i,s,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class oc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ml={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ag(t)?4:NU(t)?9007199254740991:10:fe()}function wr(t,e){if(t===e)return!0;const n=ms(t);if(n!==ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sc(t).isEqual(sc(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ri(i.timestampValue),a=Ri(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ps(i.bytesValue).isEqual(ps(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return pt(i.geoPointValue.latitude)===pt(s.geoPointValue.latitude)&&pt(i.geoPointValue.longitude)===pt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return pt(i.integerValue)===pt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=pt(i.doubleValue),a=pt(s.doubleValue);return o===a?wu(o)===wu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return po(t.arrayValue.values||[],e.arrayValue.values||[],wr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(gw(o)!==gw(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!wr(o[c],a[c])))return!1;return!0}(t,e);default:return fe()}}function ac(t,e){return(t.values||[]).find(n=>wr(n,e))!==void 0}function mo(t,e){if(t===e)return 0;const n=ms(t),r=ms(e);if(n!==r)return $e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return $e(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=pt(s.integerValue||s.doubleValue),c=pt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return yw(t.timestampValue,e.timestampValue);case 4:return yw(sc(t),sc(e));case 5:return $e(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ps(s),c=ps(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=$e(a[l],c[l]);if(u!==0)return u}return $e(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=$e(pt(s.latitude),pt(o.latitude));return a!==0?a:$e(pt(s.longitude),pt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=mo(a[l],c[l]);if(u)return u}return $e(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ml.mapValue&&o===ml.mapValue)return 0;if(s===ml.mapValue)return 1;if(o===ml.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const p=$e(c[h],u[h]);if(p!==0)return p;const m=mo(a[c[h]],l[u[h]]);if(m!==0)return m}return $e(c.length,u.length)}(t.mapValue,e.mapValue);default:throw fe()}}function yw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return $e(t,e);const n=Ri(t),r=Ri(e),i=$e(n.seconds,r.seconds);return i!==0?i:$e(n.nanos,r.nanos)}function go(t){return mp(t)}function mp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ri(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ps(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=mp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${mp(n.fields[o])}`;return i+"}"}(t.mapValue):fe()}function gp(t){return!!t&&"integerValue"in t}function Rg(t){return!!t&&"arrayValue"in t}function vw(t){return!!t&&"nullValue"in t}function ww(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pl(t){return!!t&&"mapValue"in t}function Sa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Uo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Sa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Sa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NU(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.value=e}static empty(){return new Vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sa(n)}setAll(e){let n=en.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Sa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Uo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Vn(Sa(this.value))}}function EA(t){const e=[];return Uo(t.fields,(n,r)=>{const i=new en([n]);if(Pl(r)){const s=EA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Jt(e,0,me.min(),me.min(),me.min(),Vn.empty(),0)}static newFoundDocument(e,n,r,i){return new Jt(e,1,n,me.min(),r,i,0)}static newNoDocument(e,n){return new Jt(e,2,n,me.min(),me.min(),Vn.empty(),0)}static newUnknownDocument(e,n){return new Jt(e,3,n,me.min(),me.min(),Vn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Eu{constructor(e,n){this.position=e,this.inclusive=n}}function Ew(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=mo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Pa{constructor(e,n="asc"){this.field=e,this.dir=n}}function OU(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class TA{}class wt extends TA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DU(e,n,r):n==="array-contains"?new VU(e,r):n==="in"?new $U(e,r):n==="not-in"?new FU(e,r):n==="array-contains-any"?new UU(e,r):new wt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MU(e,r):new LU(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(mo(n,this.value)):n!==null&&ms(this.value)===ms(n)&&this.matchesComparison(mo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Er extends TA{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Er(e,n)}matches(e){return IA(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function IA(t){return t.op==="and"}function bA(t){return xU(t)&&IA(t)}function xU(t){for(const e of t.filters)if(e instanceof Er)return!1;return!0}function _p(t){if(t instanceof wt)return t.field.canonicalString()+t.op.toString()+go(t.value);if(bA(t))return t.filters.map(e=>_p(e)).join(",");{const e=t.filters.map(n=>_p(n)).join(",");return`${t.op}(${e})`}}function AA(t,e){return t instanceof wt?function(r,i){return i instanceof wt&&r.op===i.op&&r.field.isEqual(i.field)&&wr(r.value,i.value)}(t,e):t instanceof Er?function(r,i){return i instanceof Er&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&AA(o,i.filters[a]),!0):!1}(t,e):void fe()}function CA(t){return t instanceof wt?function(n){return`${n.field.canonicalString()} ${n.op} ${go(n.value)}`}(t):t instanceof Er?function(n){return n.op.toString()+" {"+n.getFilters().map(CA).join(" ,")+"}"}(t):"Filter"}class DU extends wt{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class MU extends wt{constructor(e,n){super(e,"in",n),this.keys=RA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LU extends wt{constructor(e,n){super(e,"not-in",n),this.keys=RA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function RA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class VU extends wt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rg(n)&&ac(n.arrayValue,this.value)}}class $U extends wt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ac(this.value.arrayValue,n)}}class FU extends wt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ac(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ac(this.value.arrayValue,n)}}class UU extends wt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ac(this.value.arrayValue,r))}}/**
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
 */class BU{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Iw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BU(t,e,n,r,i,s,o)}function Sg(t){const e=_e(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_p(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),kh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>go(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>go(r)).join(",")),e.he=n}return e.he}function Pg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OU(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!AA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tw(t.startAt,e.startAt)&&Tw(t.endAt,e.endAt)}function yp(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function jU(t,e,n,r,i,s,o,a){return new Nh(t,e,n,r,i,s,o,a)}function Oh(t){return new Nh(t)}function bw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HU(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function WU(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function zU(t){return t.collectionGroup!==null}function ka(t){const e=_e(t);if(e.Pe===null){e.Pe=[];const n=WU(e),r=HU(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Pa(n)),e.Pe.push(new Pa(en.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Pa(en.keyField(),s))}}}return e.Pe}function Qr(t){const e=_e(t);return e.Ie||(e.Ie=qU(e,ka(t))),e.Ie}function qU(t,e){if(t.limitType==="F")return Iw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pa(i.field,s)});const n=t.endAt?new Eu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Eu(t.startAt.position,t.startAt.inclusive):null;return Iw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vp(t,e,n){return new Nh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xh(t,e){return Pg(Qr(t),Qr(e))&&t.limitType===e.limitType}function SA(t){return`${Sg(Qr(t))}|lt:${t.limitType}`}function wp(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>CA(i)).join(", ")}]`),kh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>go(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>go(i)).join(",")),`Target(${r})`}(Qr(t))}; limitType=${t.limitType})`}function Dh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):oe.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ka(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=Ew(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ka(r),i)||r.endAt&&!function(o,a,c){const l=Ew(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ka(r),i))}(t,e)}function KU(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function PA(t){return(e,n)=>{let r=!1;for(const i of ka(t)){const s=GU(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function GU(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?mo(c,l):fe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Uo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return vA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QU=new at(oe.comparator);function Yr(){return QU}const kA=new at(oe.comparator);function pa(...t){let e=kA;for(const n of t)e=e.insert(n.key,n);return e}function NA(t){let e=kA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xi(){return Na()}function OA(){return Na()}function Na(){return new Bo(t=>t.toString(),(t,e)=>t.isEqual(e))}const YU=new at(oe.comparator),JU=new sn(oe.comparator);function we(...t){let e=JU;for(const n of t)e=e.add(n);return e}const XU=new sn($e);function ZU(){return XU}/**
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
 */function xA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wu(e)?"-0":e}}function DA(t){return{integerValue:""+t}}function e4(t,e){return SU(e)?DA(e):xA(t,e)}/**
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
 */class Mh{constructor(){this._=void 0}}function t4(t,e,n){return t instanceof Tu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ag(s)&&(s=Cg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof cc?LA(t,e):t instanceof lc?VA(t,e):function(i,s){const o=MA(i,s),a=Aw(o)+Aw(i.Ee);return gp(o)&&gp(i.Ee)?DA(a):xA(i.serializer,a)}(t,e)}function n4(t,e,n){return t instanceof cc?LA(t,e):t instanceof lc?VA(t,e):n}function MA(t,e){return t instanceof Iu?function(r){return gp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Tu extends Mh{}class cc extends Mh{constructor(e){super(),this.elements=e}}function LA(t,e){const n=$A(e);for(const r of t.elements)n.some(i=>wr(i,r))||n.push(r);return{arrayValue:{values:n}}}class lc extends Mh{constructor(e){super(),this.elements=e}}function VA(t,e){let n=$A(e);for(const r of t.elements)n=n.filter(i=>!wr(i,r));return{arrayValue:{values:n}}}class Iu extends Mh{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Aw(t){return pt(t.integerValue||t.doubleValue)}function $A(t){return Rg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function r4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof cc&&i instanceof cc||r instanceof lc&&i instanceof lc?po(r.elements,i.elements,wr):r instanceof Iu&&i instanceof Iu?wr(r.Ee,i.Ee):r instanceof Tu&&i instanceof Tu}(t.transform,e.transform)}class i4{constructor(e,n){this.version=e,this.transformResults=n}}class Wr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wr}static exists(e){return new Wr(void 0,e)}static updateTime(e){return new Wr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lh{}function FA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new BA(t.key,Wr.none()):new Lc(t.key,t.data,Wr.none());{const n=t.data,r=Vn.empty();let i=new sn(en.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cs(t.key,r,new Qn(i.toArray()),Wr.none())}}function s4(t,e,n){t instanceof Lc?function(i,s,o){const a=i.value.clone(),c=Rw(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Cs?function(i,s,o){if(!kl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Rw(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(UA(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oa(t,e,n,r){return t instanceof Lc?function(s,o,a,c){if(!kl(s.precondition,o))return a;const l=s.value.clone(),u=Sw(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cs?function(s,o,a,c){if(!kl(s.precondition,o))return a;const l=Sw(s.fieldTransforms,c,o),u=o.data;return u.setAll(UA(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return kl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function o4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=MA(r.transform,i||null);s!=null&&(n===null&&(n=Vn.empty()),n.set(r.field,s))}return n||null}function Cw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&po(r,i,(s,o)=>r4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Lc extends Lh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cs extends Lh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function UA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rw(t,e,n){const r=new Map;et(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,n4(o,a,n[i]))}return r}function Sw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,t4(s,o,e))}return r}class BA extends Lh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class a4 extends Lh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&s4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=OA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=FA(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&po(this.mutations,e.mutations,(n,r)=>Cw(n,r))&&po(this.baseMutations,e.baseMutations,(n,r)=>Cw(n,r))}}class kg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){et(e.mutations.length===r.length);let i=function(){return YU}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new kg(e,n,r,i)}}/**
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
 */class l4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class u4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,be;function h4(t){switch(t){default:return fe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function jA(t){if(t===void 0)return Gr("GRPC error has no .code"),$.UNKNOWN;switch(t){case ft.OK:return $.OK;case ft.CANCELLED:return $.CANCELLED;case ft.UNKNOWN:return $.UNKNOWN;case ft.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ft.INTERNAL:return $.INTERNAL;case ft.UNAVAILABLE:return $.UNAVAILABLE;case ft.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ft.NOT_FOUND:return $.NOT_FOUND;case ft.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ft.ABORTED:return $.ABORTED;case ft.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ft.DATA_LOSS:return $.DATA_LOSS;default:return fe()}}(be=ft||(ft={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function d4(){return new TextEncoder}/**
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
 */const f4=new Xs([4294967295,4294967295],0);function Pw(t){const e=d4().encode(t),n=new fU;return n.update(e),new Uint8Array(n.digest())}function kw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Xs([n,r],0),new Xs([i,s],0)]}class Ng{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ma(`Invalid padding: ${n}`);if(r<0)throw new ma(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ma(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ma(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Xs.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(Xs.fromNumber(r)));return i.compare(f4)===1&&(i=new Xs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Pw(e),[r,i]=kw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ng(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Pw(e),[r,i]=kw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Vc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Vh(me.min(),i,new at($e),Yr(),we())}}class Vc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Vc(r,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class HA{constructor(e,n){this.targetId=e,this.ye=n}}class WA{constructor(e,n,r=an.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Nw{constructor(){this.we=0,this.Se=xw(),this.be=an.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=we(),n=we(),r=we();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:fe()}}),new Vc(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=xw()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class p4{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Yr(),this.Ue=Ow(),this.We=new at($e)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(yp(s))if(r===0){const o=new oe(s.path);this.je(n,o,Jt.newNoDocument(o,me.min()))}else et(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ps(r).toUint8Array()}catch(c){if(c instanceof wA)return fo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ng(o,i,s)}catch(c){return fo(c instanceof ma?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&yp(a.target)){const c=new oe(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,Jt.newNoDocument(c,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=we();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Vh(e,n,this.We,this.$e,r);return this.$e=Yr(),this.Ue=Ow(),this.We=new at($e),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Nw,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new sn($e),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Nw),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Ow(){return new at(oe.comparator)}function xw(){return new at(oe.comparator)}const m4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),g4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_4=(()=>({and:"AND",or:"OR"}))();class y4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ep(t,e){return t.useProto3Json||kh(e)?e:{value:e}}function bu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function v4(t,e){return bu(t,e.toTimestamp())}function _r(t){return et(!!t),me.fromTimestamp(function(n){const r=Ri(n);return new mt(r.seconds,r.nanos)}(t))}function Og(t,e){return function(r){return new st(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function qA(t){const e=st.fromString(t);return et(YA(e)),e}function Tp(t,e){return Og(t.databaseId,e.path)}function Wd(t,e){const n=qA(e);if(n.get(1)!==t.databaseId.projectId)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(KA(n))}function Ip(t,e){return Og(t.databaseId,e)}function w4(t){const e=qA(t);return e.length===4?st.emptyPath():KA(e)}function bp(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KA(t){return et(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dw(t,e,n){return{name:Tp(t,e),fields:n.value.mapValue.fields}}function E4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(et(u===void 0||typeof u=="string"),an.fromBase64String(u||"")):(et(u===void 0||u instanceof Uint8Array),an.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?$.UNKNOWN:jA(l.code);return new ie(u,l.message||"")}(o);n=new WA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wd(t,r.document.name),s=_r(r.document.updateTime),o=r.document.createTime?_r(r.document.createTime):me.min(),a=new Vn({mapValue:{fields:r.document.fields}}),c=Jt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Nl(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wd(t,r.document),s=r.readTime?_r(r.readTime):me.min(),o=Jt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Nl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wd(t,r.document),s=r.removedTargetIds||[];n=new Nl([],s,i,null)}else{if(!("filter"in e))return fe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new u4(i,s),a=r.targetId;n=new HA(a,o)}}return n}function T4(t,e){let n;if(e instanceof Lc)n={update:Dw(t,e.key,e.value)};else if(e instanceof BA)n={delete:Tp(t,e.key)};else if(e instanceof Cs)n={update:Dw(t,e.key,e.data),updateMask:N4(e.fieldMask)};else{if(!(e instanceof a4))return fe();n={verify:Tp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Tu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof cc)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof lc)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Iu)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw fe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:v4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:fe()}(t,e.precondition)),n}function I4(t,e){return t&&t.length>0?(et(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?_r(i.updateTime):_r(s);return o.isEqual(me.min())&&(o=_r(s)),new i4(o,i.transformResults||[])}(n,e))):[]}function b4(t,e){return{documents:[Ip(t,e.path)]}}function A4(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ip(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ip(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return QA(Er.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Ls(h.field),direction:S4(h.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ep(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function C4(t){let e=w4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){et(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const p=GA(h);return p instanceof Er&&bA(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(y){return new Pa(Vs(y.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,kh(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,m=h.values||[];return new Eu(m,p)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const p=!h.before,m=h.values||[];return new Eu(m,p)}(n.endAt)),jU(e,i,o,s,a,"F",c,l)}function R4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Vs(n.unaryFilter.field);return wt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Vs(n.unaryFilter.field);return wt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Vs(n.unaryFilter.field);return wt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vs(n.unaryFilter.field);return wt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return wt.create(Vs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Er.create(n.compositeFilter.filters.map(r=>GA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function S4(t){return m4[t]}function P4(t){return g4[t]}function k4(t){return _4[t]}function Ls(t){return{fieldPath:t.canonicalString()}}function Vs(t){return en.fromServerFormat(t.fieldPath)}function QA(t){return t instanceof wt?function(n){if(n.op==="=="){if(ww(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NAN"}};if(vw(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ww(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NAN"}};if(vw(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ls(n.field),op:P4(n.op),value:n.value}}}(t):t instanceof Er?function(n){const r=n.getFilters().map(i=>QA(i));return r.length===1?r[0]:{compositeFilter:{op:k4(n.op),filters:r}}}(t):fe()}function N4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,r,i,s=me.min(),o=me.min(),a=an.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new fi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(e){this.ht=e}}function x4(t){const e=C4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vp(e,e.limit,"L"):e}/**
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
 */class D4{constructor(){this._n=new M4}addToCollectionParentIndex(e,n){return this._n.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ci.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ci.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class M4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new sn(st.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new sn(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new _o(0)}static Bn(){return new _o(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(){this.changes=new Bo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class V4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Oa(r.mutation,i,Qn.empty(),mt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const i=Xi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=pa();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Yr();const o=Na(),a=function(){return Na()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Cs)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Oa(u.mutation,l,u.mutation.getFieldMask(),mt.now())):o.set(l.key,Qn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new V4(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Na();let i=new at((o,a)=>o-a),s=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Qn.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||we()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=OA();u.forEach(p=>{if(!s.has(p)){const m=FA(n.get(p),r.get(p));m!==null&&h.set(p,m),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return oe.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zU(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(Xi());let a=-1,c=s;return o.next(l=>B.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?B.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,we())).next(u=>({batchId:a,changes:NA(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let i=pa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=pa();return this.indexManager.getCollectionParents(e,i).next(o=>B.forEach(o,a=>{const c=function(u,h){return new Nh(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Jt.newInvalidDocument(l)))});let o=pa();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Oa(l.mutation,c,Qn.empty(),mt.now()),Dh(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class F4{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return B.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:_r(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:x4(i.bundledQuery),readTime:_r(i.readTime)}}(n)),B.resolve()}}/**
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
 */class U4{constructor(){this.overlays=new at(oe.comparator),this.hr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xi();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=Xi(),s=n.length+1,o=new oe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new at((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=Xi(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Xi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return B.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new l4(n,r));let s=this.hr.get(n);s===void 0&&(s=we(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.Pr=new sn(Pt.Ir),this.Tr=new sn(Pt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Pt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Pt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new oe(new st([])),r=new Pt(n,e),i=new Pt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new oe(new st([])),r=new Pt(n,e),i=new Pt(n,e+1);let s=we();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return oe.comparator(e.key,n.key)||$e(e.pr,n.pr)}static Er(e,n){return $e(e.pr,n.pr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new sn(Pt.Ir)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new c4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Pt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pt(n,0),i=new Pt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new sn($e);return n.forEach(i=>{const s=new Pt(i,0),o=new Pt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),B.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;oe.isDocumentKey(s)||(s=s.child(""));const o=new Pt(new oe(s),0);let a=new sn($e);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.pr)),!0)},o),B.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){et(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return B.forEach(n.mutations,i=>{const s=new Pt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Pt(n,0),i=this.wr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e){this.Cr=e,this.docs=function(){return new at(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(e,n){let r=Yr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Jt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yr();const o=n.path,a=new oe(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||AU(bU(u),r)<=0||(i.has(u.key)||Dh(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){fe()}Fr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new H4(this)}getSize(e){return B.resolve(this.size)}}class H4 extends L4{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(e){this.persistence=e,this.Mr=new Bo(n=>Sg(n),Pg),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.Or=0,this.Nr=new xg,this.targetCount=0,this.Br=_o.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),B.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new _o(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.qn(n),B.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(e,n){this.Lr={},this.overlays={},this.kr=new bg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new W4(this),this.indexManager=new D4,this.remoteDocumentCache=function(i){return new j4(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new O4(n),this.$r=new F4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new U4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new B4(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const i=new q4(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return B.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class q4 extends RU{constructor(e){super(),this.currentSequenceNumber=e}}class Dg{constructor(e){this.persistence=e,this.zr=new xg,this.jr=null}static Hr(e){return new Dg(e)}get Jr(){if(this.jr)return this.jr;throw fe()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),B.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Jr,r=>{const i=oe.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,me.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return B.or([()=>B.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=we(),i=we();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mg(e,n.fromCache,r,i)}}/**
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
 */class K4{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Wi(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.zi(e,n))}Wi(e,n){if(bw(n))return B.resolve(null);let r=Qr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vp(n,null,"F"),r=Qr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=we(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.Hi(n,l,o,c.readTime)?this.Wi(e,vp(n,null,"F")):this.Ji(e,l,n,c)}))})))}Gi(e,n,r,i){return bw(n)||i.isEqual(me.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.Hi(n,o,r,i)?this.zi(e,n):(mw()<=Oe.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wp(n)),this.Ji(e,o,n,IU(i,-1)))})}ji(e,n){let r=new sn(PA(e));return n.forEach((i,s)=>{Dh(e,s)&&(r=r.add(s))}),r}Hi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}zi(e,n){return mw()<=Oe.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",wp(n)),this.Ui.getDocumentsMatchingQuery(e,n,Ci.min())}Ji(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class G4{constructor(e,n,r,i){this.persistence=e,this.Yi=n,this.serializer=i,this.Zi=new at($e),this.Xi=new Bo(s=>Sg(s),Pg),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $4(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function Q4(t,e,n,r){return new G4(t,e,n,r)}async function JA(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=we();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({rs:l,removedBatchIds:o,addedBatchIds:a}))})})}function Y4(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,p=h.keys();let m=B.resolve();return p.forEach(y=>{m=m.next(()=>u.getEntry(c,y)).next(v=>{const b=l.docVersions.get(y);et(b!==null),v.version.compareTo(b)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=we();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function XA(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function J4(t,e){const n=_e(t),r=e.snapshotVersion;let i=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});i=n.Zi;const a=[];e.targetChanges.forEach((u,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,u.addedDocuments,h)));let m=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(an.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),i=i.insert(h,m),function(v,b,A){return v.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(p,m,u)&&a.push(n.Qr.updateTargetData(s,m))});let c=Yr(),l=we();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(X4(s,o,e.documentUpdates).next(u=>{c=u.ss,l=u.os})),!r.isEqual(me.min())){const u=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return B.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Zi=i,s))}function X4(t,e,n){let r=we(),i=we();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yr();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(me.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ss:o,os:i}})}function Z4(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eB(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new fi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Zi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Ap(t,e,n){const r=_e(t),i=r.Zi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Mc(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(i.target)}function Mw(t,e,n){const r=_e(t);let i=me.min(),s=we();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=_e(c),p=h.Xi.get(u);return p!==void 0?B.resolve(h.Zi.get(p)):h.Qr.getTargetData(l,u)}(r,o,Qr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?i:me.min(),n?s:we())).next(a=>(tB(r,KU(e),a),{documents:a,_s:s})))}function tB(t,e,n){let r=t.es.get(e)||me.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.es.set(e,r)}class Lw{constructor(){this.activeTargetIds=ZU()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nB{constructor(){this.Ys=new Lw,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new Lw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rB{Xs(e){}shutdown(){}}/**
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
 */class Vw{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gl=null;function zd(){return gl===null?gl=function(){return 268435456+Math.round(2147483648*Math.random())}():gl++,"0x"+gl.toString(16)}/**
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
 */const iB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="WebChannelConnection";class oB extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${i}/databases/${s}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get mo(){return!1}fo(n,r,i,s,o){const a=zd(),c=this.po(n,r);ee("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(l,s,o),this.wo(n,c,l,i).then(u=>(ee("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw fo("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}So(n,r,i,s,o,a){return this.fo(n,r,i,s,o)}yo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}po(n,r){const i=iB[n];return`${this.Ao}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,i){const s=zd();return new Promise((o,a)=>{const c=new dU;c.setWithCredentials(!0),c.listenOnce(uU.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Hd.NO_ERROR:const u=c.getResponseJson();ee(Kt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Hd.TIMEOUT:ee(Kt,`RPC '${e}' ${s} timed out`),a(new ie($.DEADLINE_EXCEEDED,"Request time out"));break;case Hd.HTTP_ERROR:const h=c.getStatus();if(ee(Kt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const y=function(b){const A=b.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(A)>=0?A:$.UNKNOWN}(m.status);a(new ie(y,m.message))}else a(new ie($.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ie($.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{ee(Kt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);ee(Kt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}bo(e,n,r){const i=zd(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cU(),a=lU(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");ee(Kt,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let p=!1,m=!1;const y=new sB({_o:b=>{m?ee(Kt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(p||(ee(Kt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),ee(Kt,`RPC '${e}' stream ${i} sending:`,b),h.send(b))},ao:()=>h.close()}),v=(b,A,k)=>{b.listen(A,N=>{try{k(N)}catch(P){setTimeout(()=>{throw P},0)}})};return v(h,fl.EventType.OPEN,()=>{m||ee(Kt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,fl.EventType.CLOSE,()=>{m||(m=!0,ee(Kt,`RPC '${e}' stream ${i} transport closed`),y.To())}),v(h,fl.EventType.ERROR,b=>{m||(m=!0,fo(Kt,`RPC '${e}' stream ${i} transport errored:`,b),y.To(new ie($.UNAVAILABLE,"The operation could not be completed")))}),v(h,fl.EventType.MESSAGE,b=>{var A;if(!m){const k=b.data[0];et(!!k);const N=k,P=N.error||((A=N[0])===null||A===void 0?void 0:A.error);if(P){ee(Kt,`RPC '${e}' stream ${i} received error:`,P);const j=P.status;let W=function(ze){const Re=ft[ze];if(Re!==void 0)return jA(Re)}(j),ae=P.message;W===void 0&&(W=$.INTERNAL,ae="Unknown error status: "+j+" with message "+P.message),m=!0,y.To(new ie(W,ae)),h.close()}else ee(Kt,`RPC '${e}' stream ${i} received:`,k),y.Eo(k)}}),v(a,hU.STAT_EVENT,b=>{b.stat===fw.PROXY?ee(Kt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===fw.NOPROXY&&ee(Kt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Io()},0),y}}function qd(){return typeof document<"u"?document:null}/**
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
 */function $h(t){return new y4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,n-r);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,r,i,s,o,a,c){this.oi=e,this.ko=r,this.qo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new ZA(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Gr(n.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Qo===n&&this.n_(r,i)},r=>{e(()=>{const i=new ie($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(i)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(i=>{r(()=>this.r_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aB extends eC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=E4(this.serializer,e),r=function(s){if(!("targetChange"in s))return me.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?_r(o.readTime):me.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=bp(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=yp(c)?{documents:b4(s,c)}:{query:A4(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zA(s,o.resumeToken);const l=Ep(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(me.min())>0){a.readTime=bu(s,o.snapshotVersion.toTimestamp());const l=Ep(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=R4(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=bp(this.serializer),n.removeTarget=e,this.Yo(n)}}class cB extends eC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(et(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=I4(e.writeResults,e.commitTime),r=_r(e.commitTime);return this.listener.l_(r,n)}return et(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=bp(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>T4(this.serializer,r))};this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lB extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.I_=!1}T_(){if(this.I_)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie($.UNKNOWN,i.toString())})}So(e,n,r,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie($.UNKNOWN,s.toString())})}terminate(){this.I_=!0}}class uB{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(Gr(n),this.R_=!1):ee("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hB{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=s,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{Rs(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=_e(c);l.S_.add(4),await $c(l),l.v_.set("Unknown"),l.S_.delete(4),await Fh(l)}(this))})}),this.v_=new uB(r,i)}}async function Fh(t){if(Rs(t))for(const e of t.b_)await e(!0)}async function $c(t){for(const e of t.b_)await e(!1)}function tC(t,e){const n=_e(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),$g(n)?Vg(n):jo(n).Go()&&Lg(n,e))}function nC(t,e){const n=_e(t),r=jo(n);n.w_.delete(e),r.Go()&&rC(n,e),n.w_.size===0&&(r.Go()?r.Ho():Rs(n)&&n.v_.set("Unknown"))}function Lg(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}jo(t).o_(e)}function rC(t,e){t.C_.Le(e),jo(t).__(e)}function Vg(t){t.C_=new p4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),jo(t).start(),t.v_.V_()}function $g(t){return Rs(t)&&!jo(t).Wo()&&t.w_.size>0}function Rs(t){return _e(t).S_.size===0}function iC(t){t.C_=void 0}async function dB(t){t.w_.forEach((e,n)=>{Lg(t,e)})}async function fB(t,e){iC(t),$g(t)?(t.v_.g_(e),Vg(t)):t.v_.set("Unknown")}async function pB(t,e,n){if(t.v_.set("Online"),e instanceof WA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.w_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.w_.delete(a),i.C_.removeTarget(a))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Au(t,r)}else if(e instanceof Nl?t.C_.Ge(e):e instanceof HA?t.C_.Xe(e):t.C_.He(e),!n.isEqual(me.min()))try{const r=await XA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.C_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.w_.get(l);u&&s.w_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.w_.get(c);if(!u)return;s.w_.set(c,u.withResumeToken(an.EMPTY_BYTE_STRING,u.snapshotVersion)),rC(s,c);const h=new fi(u.target,c,l,u.sequenceNumber);Lg(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await Au(t,r)}}async function Au(t,e,n){if(!Mc(e))throw e;t.S_.add(1),await $c(t),t.v_.set("Offline"),n||(n=()=>XA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await Fh(t)})}function sC(t,e){return e().catch(n=>Au(t,n,e))}async function Uh(t){const e=_e(t),n=Si(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;mB(e);)try{const i=await Z4(e.localStore,r);if(i===null){e.y_.length===0&&n.Ho();break}r=i.batchId,gB(e,i)}catch(i){await Au(e,i)}oC(e)&&aC(e)}function mB(t){return Rs(t)&&t.y_.length<10}function gB(t,e){t.y_.push(e);const n=Si(t);n.Go()&&n.u_&&n.c_(e.mutations)}function oC(t){return Rs(t)&&!Si(t).Wo()&&t.y_.length>0}function aC(t){Si(t).start()}async function _B(t){Si(t).P_()}async function yB(t){const e=Si(t);for(const n of t.y_)e.c_(n.mutations)}async function vB(t,e,n){const r=t.y_.shift(),i=kg.from(r,e,n);await sC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Uh(t)}async function wB(t,e){e&&Si(t).u_&&await async function(r,i){if(function(o){return h4(o)&&o!==$.ABORTED}(i.code)){const s=r.y_.shift();Si(r).jo(),await sC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Uh(r)}}(t,e),oC(t)&&aC(t)}async function $w(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Rs(n);n.S_.add(3),await $c(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await Fh(n)}async function EB(t,e){const n=_e(t);e?(n.S_.delete(2),await Fh(n)):e||(n.S_.add(2),await $c(n),n.v_.set("Unknown"))}function jo(t){return t.F_||(t.F_=function(n,r,i){const s=_e(n);return s.T_(),new aB(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:dB.bind(null,t),lo:fB.bind(null,t),s_:pB.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),$g(t)?Vg(t):t.v_.set("Unknown")):(await t.F_.stop(),iC(t))})),t.F_}function Si(t){return t.M_||(t.M_=function(n,r,i){const s=_e(n);return s.T_(),new cB(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:_B.bind(null,t),lo:wB.bind(null,t),h_:yB.bind(null,t),l_:vB.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await Uh(t)):(await t.M_.stop(),t.y_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Fg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ug(t,e){if(Gr("AsyncQueue",`${e}: ${t}`),Mc(t))return new ie($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=pa(),this.sortedSet=new at(this.comparator)}static emptySet(e){return new Zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this.x_=new at(oe.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):fe():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class yo{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new yo(e,n,Zs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TB{constructor(){this.N_=void 0,this.listeners=[]}}class IB{constructor(){this.queries=new Bo(e=>SA(e),xh),this.onlineState="Unknown",this.B_=new Set}}async function Bg(t,e){const n=_e(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new TB),i)try{s.N_=await n.onListen(r)}catch(o){const a=Ug(o,`Initialization of query '${wp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.L_(n.onlineState),s.N_&&e.k_(s.N_)&&Hg(n)}async function jg(t,e){const n=_e(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function bB(t,e){const n=_e(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.k_(i)&&(r=!0);o.N_=i}}r&&Hg(n)}function AB(t,e,n){const r=_e(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Hg(t){t.B_.forEach(e=>{e.next()})}class Wg{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new yo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.key=e}}class lC{constructor(e){this.key=e}}class CB{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=we(),this.mutatedKeys=we(),this.ia=PA(e),this.sa=new Zs(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new Fw,i=n?n.sa:this.sa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const p=i.get(u),m=Dh(this.query,h)?h:null,y=!!p&&this.mutatedKeys.has(p.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;p&&m?p.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),b=!0):this.ua(p,m)||(r.track({type:2,doc:m}),b=!0,(c&&this.ia(m,c)>0||l&&this.ia(m,l)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),b=!0):p&&!m&&(r.track({type:1,doc:p}),b=!0,(c||l)&&(a=!0)),b&&(m?(o=o.add(m),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{sa:o,aa:r,Hi:a,mutatedKeys:s}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const s=e.aa.O_();s.sort((l,u)=>function(p,m){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return y(p)-y(m)}(l.type,u.type)||this.ia(l.doc,u.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,s.length!==0||c?{snapshot:new yo(this.query,e.sa,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new Fw,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=we(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new lC(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new cC(r))}),n}Ia(e){this.ta=e._s,this.ra=we();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return yo.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class RB{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class SB{constructor(e){this.key=e,this.Ea=!1}}class PB{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new Bo(a=>SA(a),xh),this.Ra=new Map,this.Va=new Set,this.ma=new at(oe.comparator),this.fa=new Map,this.ga=new xg,this.pa={},this.ya=new Map,this.wa=_o.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function kB(t,e){const n=UB(t);let r,i;const s=n.Aa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const o=await eB(n.localStore,Qr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await NB(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&tC(n.remoteStore,o)}return i}async function NB(t,e,n,r,i){t.ba=(h,p,m)=>async function(v,b,A,k){let N=b.view._a(A);N.Hi&&(N=await Mw(v.localStore,b.query,!1).then(({documents:W})=>b.view._a(W,N)));const P=k&&k.targetChanges.get(b.targetId),j=b.view.applyChanges(N,v.isPrimaryClient,P);return Bw(v,b.targetId,j.ha),j.snapshot}(t,h,p,m);const s=await Mw(t.localStore,e,!0),o=new CB(e,s._s),a=o._a(s.documents),c=Vc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Bw(t,n,l.ha);const u=new RB(e,n,o);return t.Aa.set(e,u),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),l.snapshot}async function OB(t,e){const n=_e(t),r=n.Aa.get(e),i=n.Ra.get(r.targetId);if(i.length>1)return n.Ra.set(r.targetId,i.filter(s=>!xh(s,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ap(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),nC(n.remoteStore,r.targetId),Cp(n,r.targetId)}).catch(Dc)):(Cp(n,r.targetId),await Ap(n.localStore,r.targetId,!0))}async function xB(t,e,n){const r=BB(t);try{const i=await function(o,a){const c=_e(o),l=mt.now(),u=a.reduce((m,y)=>m.add(y.key),we());let h,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=Yr(),v=we();return c.ts.getEntries(m,u).next(b=>{y=b,y.forEach((A,k)=>{k.isValidDocument()||(v=v.add(A))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,y)).next(b=>{h=b;const A=[];for(const k of a){const N=o4(k,h.get(k.key).overlayedDocument);N!=null&&A.push(new Cs(k.key,N,EA(N.value.mapValue),Wr.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,A,a)}).next(b=>{p=b;const A=b.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(m,b.batchId,A)})}).then(()=>({batchId:p.batchId,changes:NA(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.pa[o.currentUser.toKey()];l||(l=new at($e)),l=l.insert(a,c),o.pa[o.currentUser.toKey()]=l}(r,i.batchId,n),await Fc(r,i.changes),await Uh(r.remoteStore)}catch(i){const s=Ug(i,"Failed to persist write");n.reject(s)}}async function uC(t,e){const n=_e(t);try{const r=await J4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fa.get(s);o&&(et(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ea=!0:i.modifiedDocuments.size>0?et(o.Ea):i.removedDocuments.size>0&&(et(o.Ea),o.Ea=!1))}),await Fc(n,r,e)}catch(r){await Dc(r)}}function Uw(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Aa.forEach((s,o)=>{const a=o.view.L_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=_e(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const p of h.listeners)p.L_(a)&&(l=!0)}),l&&Hg(c)}(r.eventManager,e),i.length&&r.da.s_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DB(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fa.get(e),s=i&&i.key;if(s){let o=new at(oe.comparator);o=o.insert(s,Jt.newNoDocument(s,me.min()));const a=we().add(s),c=new Vh(me.min(),new Map,new at($e),o,a);await uC(r,c),r.ma=r.ma.remove(s),r.fa.delete(e),zg(r)}else await Ap(r.localStore,e,!1).then(()=>Cp(r,e,n)).catch(Dc)}async function MB(t,e){const n=_e(t),r=e.batch.batchId;try{const i=await Y4(n.localStore,e);dC(n,r,null),hC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fc(n,i)}catch(i){await Dc(i)}}async function LB(t,e,n){const r=_e(t);try{const i=await function(o,a){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(et(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);dC(r,e,n),hC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fc(r,i)}catch(i){await Dc(i)}}function hC(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function dC(t,e,n){const r=_e(t);let i=r.pa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pa[r.currentUser.toKey()]=i}}function Cp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||fC(t,r)})}function fC(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(nC(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),zg(t))}function Bw(t,e,n){for(const r of n)r instanceof cC?(t.ga.addReference(r.key,e),VB(t,r)):r instanceof lC?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||fC(t,r.key)):fe()}function VB(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Va.add(r),zg(t))}function zg(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new oe(st.fromString(e)),r=t.wa.next();t.fa.set(r,new SB(n)),t.ma=t.ma.insert(n,r),tC(t.remoteStore,new fi(Qr(Oh(n.path)),r,"TargetPurposeLimboResolution",bg.ae))}}async function Fc(t,e,n){const r=_e(t),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,c)=>{o.push(r.ba(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Mg.Ki(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.da.s_(i),await async function(c,l){const u=_e(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>B.forEach(l,p=>B.forEach(p.qi,m=>u.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>B.forEach(p.Qi,m=>u.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!Mc(h))throw h;ee("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const p=h.targetId;if(!h.fromCache){const m=u.Zi.get(p),y=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(y);u.Zi=u.Zi.insert(p,v)}}}(r.localStore,s))}async function $B(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await JA(n.localStore,e);n.currentUser=e,function(s,o){s.ya.forEach(a=>{a.forEach(c=>{c.reject(new ie($.CANCELLED,o))})}),s.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fc(n,r.rs)}}function FB(t,e){const n=_e(t),r=n.fa.get(e);if(r&&r.Ea)return we().add(r.key);{let i=we();const s=n.Ra.get(e);if(!s)return i;for(const o of s){const a=n.Aa.get(o);i=i.unionWith(a.view.oa)}return i}}function UB(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FB.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DB.bind(null,e),e.da.s_=bB.bind(null,e.eventManager),e.da.Da=AB.bind(null,e.eventManager),e}function BB(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MB.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LB.bind(null,e),e}class jw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=$h(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Q4(this.persistence,new K4,e.initialUser,this.serializer)}createPersistence(e){return new z4(Dg.Hr,this.serializer)}createSharedClientState(e){return new nB}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jB{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$B.bind(null,this.syncEngine),await EB(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IB}()}createDatastore(e){const n=$h(e.databaseInfo.databaseId),r=function(s){return new oB(s)}(e.databaseInfo);return function(s,o,a,c){return new lB(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new hB(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Uw(this.syncEngine,n,0),function(){return Vw.v()?new Vw:new rB}())}createSyncEngine(e,n){return function(i,s,o,a,c,l,u){const h=new PB(i,s,o,a,c,l);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=_e(n);ee("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await $c(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
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
 */class qg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):Gr("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HB{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Gt.UNAUTHENTICATED,this.clientId=yA.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ee("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ee("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ug(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kd(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await JA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zB(t);ee("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>$w(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>$w(e.remoteStore,s)),t._onlineComponents=e}function WB(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function zB(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!WB(n))throw n;fo("Error using user provided cache. Falling back to memory cache: "+n),await Kd(t,new jw)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Kd(t,new jw);return t._offlineComponents}async function pC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Hw(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Hw(t,new jB))),t._onlineComponents}function qB(t){return pC(t).then(e=>e.syncEngine)}async function Cu(t){const e=await pC(t),n=e.eventManager;return n.onListen=kB.bind(null,e.syncEngine),n.onUnlisten=OB.bind(null,e.syncEngine),n}function KB(t,e,n={}){const r=new Hr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new qg({next:p=>{o.enqueueAndForget(()=>jg(s,h));const m=p.docs.has(a);!m&&p.fromCache?l.reject(new ie($.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&c&&c.source==="server"?l.reject(new ie($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new Wg(Oh(a.path),u,{includeMetadataChanges:!0,z_:!0});return Bg(s,h)}(await Cu(t),t.asyncQueue,e,n,r)),r.promise}function GB(t,e,n={}){const r=new Hr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new qg({next:p=>{o.enqueueAndForget(()=>jg(s,h)),p.fromCache&&c.source==="server"?l.reject(new ie($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new Wg(a,u,{includeMetadataChanges:!0,z_:!0});return Bg(s,h)}(await Cu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function mC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ww=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t,e,n){if(!n)throw new ie($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QB(t,e,n,r){if(e===!0&&r===!0)throw new ie($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zw(t){if(!oe.isDocumentKey(t))throw new ie($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qw(t){if(oe.isDocumentKey(t))throw new ie($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function yr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kg(t);throw new ie($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Kw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QB("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pU;switch(r.type){case"firstParty":return new yU(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ww.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Ww.delete(n),r.terminate())}(this),Promise.resolve()}}function YB(t,e,n,r={}){var i;const s=(t=yr(t,Bh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Gt.MOCK_USER;else{a=lx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new ie($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Gt(l)}t._authCredentials=new mU(new _A(a,c))}}/**
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
 */class Uc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Uc(this.firestore,e,this._query)}}class gn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gn(this.firestore,e,this._key)}}class Ei extends Uc{constructor(e,n,r){super(e,n,Oh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gn(this.firestore,null,new oe(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function yW(t,e,...n){if(t=Mt(t),gC("collection","path",e),t instanceof Bh){const r=st.fromString(e,...n);return qw(r),new Ei(t,null,r)}{if(!(t instanceof gn||t instanceof Ei))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return qw(r),new Ei(t.firestore,null,r)}}function Ol(t,e,...n){if(t=Mt(t),arguments.length===1&&(e=yA.V()),gC("doc","path",e),t instanceof Bh){const r=st.fromString(e,...n);return zw(r),new gn(t,null,new oe(r))}{if(!(t instanceof gn||t instanceof Ei))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return zw(r),new gn(t.firestore,t instanceof Ei?t.converter:null,new oe(r))}}/**
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
 */class JB{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new ZA(this,"async_queue_retry"),this.tu=()=>{const n=qd();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=qd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=qd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Hr;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!Mc(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Gr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const i=Fg.createAndSchedule(this,e,n,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&fe()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function Gw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class vo extends Bh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new JB}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_C(this),this._firestoreClient.terminate()}}function XB(t,e){const n=typeof t=="object"?t:ih(),r=typeof t=="string"?t:e||"(default)",i=ws(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cx("firestore");s&&YB(i,...s)}return i}function jh(t){return t._firestoreClient||_C(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _C(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,l,u){return new kU(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,mC(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new HB(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class wo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wo(an.fromBase64String(e))}catch(n){throw new ie($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wo(an.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yC{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $e(this._lat,e._lat)||$e(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZB=/^__.*__$/;class ej{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Lc(e,this.data,n,this.fieldTransforms)}}function vC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class Qg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.cu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new Qg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.Tu(e),i}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.cu(),i}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return Ru(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(vC(this.lu)&&ZB.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class tj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$h(e)}mu(e,n,r,i=!1){return new Qg({lu:e,methodName:n,Vu:r,path:en.emptyPath(),Iu:!1,Ru:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nj(t){const e=t._freezeSettings(),n=$h(t._databaseId);return new tj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rj(t,e,n,r,i,s={}){const o=t.mu(s.merge||s.mergeFields?2:0,e,n,i);IC("Data must be an object, but it was:",o,r);const a=EC(r,o);let c,l;if(s.merge)c=new Qn(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const p=ij(e,h,n);if(!o.contains(p))throw new ie($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);oj(u,p)||u.push(p)}c=new Qn(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ej(new Vn(a),c,l)}function wC(t,e){if(TC(t=Mt(t)))return IC("Unsupported field value:",e,t),EC(t,e);if(t instanceof yC)return function(r,i){if(!vC(i.lu))throw i.Au(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Au(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=wC(a,i.du(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return e4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=mt.fromDate(r);return{timestampValue:bu(i.serializer,s)}}if(r instanceof mt){const s=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bu(i.serializer,s)}}if(r instanceof Hh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wo)return{bytesValue:zA(i.serializer,r._byteString)};if(r instanceof gn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Og(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Au(`Unsupported field value: ${Kg(r)}`)}(t,e)}function EC(t,e){const n={};return vA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Uo(t,(r,i)=>{const s=wC(i,e.Pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function TC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof Hh||t instanceof wo||t instanceof gn||t instanceof yC)}function IC(t,e,n){if(!TC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Kg(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function ij(t,e,n){if((e=Mt(e))instanceof Gg)return e._internalPath;if(typeof e=="string")return bC(t,e);throw Ru("Field path arguments must be of type string or ",t,!1,void 0,n)}const sj=new RegExp("[~\\*/\\[\\]]");function bC(t,e,n){if(e.search(sj)>=0)throw Ru(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gg(...e.split("."))._internalPath}catch{throw Ru(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ru(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ie($.INVALID_ARGUMENT,a+t+c)}function oj(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class AC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(CC("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class aj extends AC{data(){return super.data()}}function CC(t,e){return typeof e=="string"?bC(t,e):e instanceof Gg?e._internalPath:e._delegate._internalPath}/**
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
 */function RC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cj{convertValue(e,n="none"){switch(ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw fe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Uo(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Hh(pt(e.latitude),pt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sc(e));default:return null}}convertTimestamp(e){const n=Ri(e);return new mt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=st.fromString(e);et(YA(r));const i=new oc(r.get(1),r.get(3)),s=new oe(r.popFirst(5));return i.isEqual(n)||Gr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function lj(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ga{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class SC extends AC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(CC("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xl extends SC{data(e={}){return super.data(e)}}class PC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ga(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xl(this._firestore,this._userDataWriter,r.key,r,new ga(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new xl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ga(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new xl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ga(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:uj(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}/**
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
 */function kC(t){t=yr(t,gn);const e=yr(t.firestore,vo);return KB(jh(e),t._key).then(n=>NC(e,t,n))}class Yg extends cj{constructor(e){super(),this.firestore=e}convertBytes(e){return new wo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gn(this.firestore,null,n)}}function hj(t){t=yr(t,Uc);const e=yr(t.firestore,vo),n=jh(e),r=new Yg(e);return RC(t._query),GB(n,t._query).then(i=>new PC(e,r,t,i))}function dj(t,e,n){t=yr(t,gn);const r=yr(t.firestore,vo),i=lj(t.converter,e,n);return fj(r,[rj(nj(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Wr.none())])}function Jg(t,...e){var n,r,i;t=Mt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Gw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Gw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof gn)l=yr(t.firestore,vo),u=Oh(t._key.path),c={next:h=>{e[o]&&e[o](NC(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=yr(t,Uc);l=yr(h.firestore,vo),u=h._query;const p=new Yg(l);c={next:m=>{e[o]&&e[o](new PC(l,p,h,m))},error:e[o+1],complete:e[o+2]},RC(t._query)}return function(p,m,y,v){const b=new qg(v),A=new Wg(m,b,y);return p.asyncQueue.enqueueAndForget(async()=>Bg(await Cu(p),A)),()=>{b.Ma(),p.asyncQueue.enqueueAndForget(async()=>jg(await Cu(p),A))}}(jh(l),u,a,c)}function fj(t,e){return function(r,i){const s=new Hr;return r.asyncQueue.enqueueAndForget(async()=>xB(await qB(r),i,s)),s.promise}(jh(t),e)}function NC(t,e,n){const r=n.docs.get(e._key),i=new Yg(t);return new SC(t,i,e._key,r,new ga(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Fo=i})(Oi),vn(new fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new vo(new gU(r.getProvider("auth-internal")),new wU(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new ie($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oc(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ht(pw,"4.1.2",e),Ht(pw,"4.1.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC="firebasestorage.googleapis.com",pj="storageBucket",mj=2*60*1e3,gj=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Bn{constructor(e,n,r=0){super(Gd(e),`Firebase Storage: ${n} (${Gd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,br.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tr||(Tr={}));function Gd(t){return"storage/"+t}function _j(){const t="An unknown error occurred, please check the error payload for server response.";return new br(Tr.UNKNOWN,t)}function yj(){return new br(Tr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vj(){return new br(Tr.CANCELED,"User canceled the upload/download.")}function wj(t){return new br(Tr.INVALID_URL,"Invalid URL '"+t+"'.")}function Ej(t){return new br(Tr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Qw(t){return new br(Tr.INVALID_ARGUMENT,t)}function xC(){return new br(Tr.APP_DELETED,"The Firebase app was deleted.")}function Tj(t){return new br(Tr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Yn.makeFromUrl(e,n)}catch{return new Yn(e,"")}if(r.path==="")return r;throw Ej(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${i}/o${p}`,"i"),y={bucket:1,path:3},v=n===OC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",A=new RegExp(`^https?://${v}/${i}/${b}`,"i"),N=[{regex:a,indices:c,postModify:s},{regex:m,indices:y,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<N.length;P++){const j=N[P],W=j.regex.exec(e);if(W){const ae=W[j.indices.bucket];let ge=W[j.indices.path];ge||(ge=""),r=new Yn(ae,ge),j.postModify(r);break}}if(r==null)throw wj(e);return r}}class Ij{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bj(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...b){l||(l=!0,e.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,t(m,c())},b)}function p(){s&&clearTimeout(s)}function m(b,...A){if(l){p();return}if(b){p(),u.call(null,b,...A);return}if(c()||o){p(),u.call(null,b,...A);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let y=!1;function v(b){y||(y=!0,p(),!l&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function Aj(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cj(t){return t!==void 0}function Yw(t,e,n,r){if(r<e)throw Qw(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Qw(`Invalid value for '${t}'. Expected ${n} or less.`)}function Rj(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Su;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Su||(Su={}));/**
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
 */function Sj(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pj{constructor(e,n,r,i,s,o,a,c,l,u,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new _l(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Su.NO_ERROR,c=s.getStatus();if(!a||Sj(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Su.ABORT;r(!1,new _l(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new _l(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Cj(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=_j();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?xC():vj();o(c)}else{const c=yj();o(c)}};this.canceled_?n(!1,new _l(!1,null,!0)):this.backoffId_=bj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Aj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _l{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function kj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Nj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Oj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Dj(t,e,n,r,i,s,o=!0){const a=Rj(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Oj(l,e),kj(l,n),Nj(l,s),xj(l,r),new Pj(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Lj(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Pu{constructor(e,n){this._service=e,n instanceof Yn?this._location=n:this._location=Yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Pu(e,n)}get root(){const e=new Yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Lj(this._location.path)}get storage(){return this._service}get parent(){const e=Mj(this._location.path);if(e===null)return null;const n=new Yn(this._location.bucket,e);return new Pu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Tj(e)}}function Jw(t,e){const n=e==null?void 0:e[pj];return n==null?null:Yn.makeFromBucketSpec(n,t)}class Vj{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=OC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mj,this._maxUploadRetryTime=gj,this._requests=new Set,i!=null?this._bucket=Yn.makeFromBucketSpec(i,this._host):this._bucket=Jw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yn.makeFromBucketSpec(this._url,e):this._bucket=Jw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Pu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Ij(xC());{const o=Dj(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Xw="@firebase/storage",Zw="0.11.2";/**
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
 */const $j="storage";function Fj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Vj(n,r,i,e,Oi)}function Uj(){vn(new fn($j,Fj,"PUBLIC").setMultipleInstances(!0)),Ht(Xw,Zw,""),Ht(Xw,Zw,"esm2017")}Uj();const Qd=new WeakMap;function DC(t,e){return Qd.has(e)||Qd.set(e,t||{f:{},r:{},s:{},u:{}}),Qd.get(e)}function Bj(t,e,n,r){if(!t)return n;const[i,s]=MC(t);if(!i)return n;const o=DC(void 0,r)[i]||{},a=e||s;return a&&a in o?o[a]:n}function jj(t,e,n,r){if(!t)return;const[i,s]=MC(t);if(!i)return;const o=DC(void 0,r)[i],a=e||s;if(a)return n.then(c=>{o[a]=c}).catch(ur),a}function MC(t){return p2(t)||m2(t)?["f",t.path]:g2(t)?["r",t.toString()]:_2(t)?["s",t.toString()]:[]}const Yd=new WeakMap;function Hj(t,e,n){const r=wc();Yd.has(r)||Yd.set(r,new Map);const i=Yd.get(r),s=jj(e,n,t,r);return s&&i.set(s,t),s?()=>i.delete(s):ur}const Wj={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Rp(t,e,n,r){if(!d2(t))return[t,{}];const i=[{},{}],s=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,p]=u;Object.getOwnPropertyNames(a).forEach(m=>{const y=Object.getOwnPropertyDescriptor(a,m);y&&!y.enumerable&&Object.defineProperty(h,m,y)});for(const m in a){const y=a[m];if(y==null||y instanceof Date||y instanceof mt||y instanceof Hh)h[m]=y;else if(Om(y)){const v=l+m;h[m]=v in n?c[m]:y.path,p[v]=y.converter?y:y.withConverter(r.converter)}else if(Array.isArray(y)){h[m]=Array(y.length);for(let v=0;v<y.length;v++){const b=y[v];b&&b.path in s&&(h[m][v]=s[b.path])}o(y,c[m]||h[m],l+m+".",[h[m],p])}else Ts(y)?(h[m]={},o(y,c[m],l+m+".",[h[m],p])):h[m]=y}}return o(t,e,"",i),i}const Xg={reset:!1,wait:!0,maxRefDepth:2,converter:Wj,snapshotOptions:{serverTimestamps:"estimate"}};function ku(t){for(const e in t)t[e].unsub()}function Sp(t,e,n,r,i,s,o,a,c){const[l,u]=Rp(r.data(t.snapshotOptions),Nm(e,n),i,t);s.set(e,n,l),Pp(t,e,n,i,u,s,o,a,c)}function zj({ref:t,target:e,path:n,depth:r,resolve:i,reject:s,ops:o},a){const c=Object.create(null);let l=ur;return a.once?kC(t).then(u=>{u.exists()?Sp(a,e,n,u,c,o,r,i,s):(o.set(e,n,null),i())}).catch(s):l=Jg(t,u=>{u.exists()?Sp(a,e,n,u,c,o,r,i,s):(o.set(e,n,null),i())},s),()=>{l(),ku(c)}}function Pp(t,e,n,r,i,s,o,a,c){const l=Object.keys(i);if(Object.keys(r).filter(v=>l.indexOf(v)<0).forEach(v=>{r[v].unsub(),delete r[v]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const p=l.length,m=Object.create(null);function y(v){v in m&&++h>=p&&a(n)}l.forEach(v=>{const b=r[v],A=i[v],k=`${n}.${v}`;if(m[k]=!0,b)if(b.path!==A.path)b.unsub();else return;r[v]={data:()=>Nm(e,k),unsub:zj({ref:A,target:e,path:k,depth:o,ops:s,resolve:y.bind(null,k),reject:c},t),path:A.path}})}function qj(t,e,n,r,i,s){const o=Object.assign({},Xg,s),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let p=ct(l?[]:t.value);l||n.set(t,h,[]);const m=r;let y,v=ur;const b=[],A={added:({newIndex:N,doc:P})=>{b.splice(N,0,Object.create(null));const j=b[N],[W,ae]=Rp(P.data(c),void 0,j,o);n.add(vt(p),N,W),Pp(o,p,`${h}.${N}`,j,ae,n,0,r.bind(null,P),i)},modified:({oldIndex:N,newIndex:P,doc:j})=>{const W=vt(p),ae=b[N],ge=W[N],[ze,Re]=Rp(j.data(c),ge,ae,o);b.splice(P,0,ae),n.remove(W,N),n.add(W,P,ze),Pp(o,p,`${h}.${P}`,ae,Re,n,0,r,i)},removed:({oldIndex:N})=>{const P=vt(p);n.remove(P,N),ku(b.splice(N,1)[0])}};function k(N){const P=N.docChanges(a);if(!y&&P.length){y=!0;let j=0;const W=P.length,ae=Object.create(null);for(let ge=0;ge<W;ge++)ae[P[ge].doc.id]=!0;r=ge=>{ge&&ge.id in ae&&++j>=W&&(l&&(n.set(t,h,vt(p)),p=t),m(vt(p)),r=ur)}}P.forEach(j=>{A[j.type](j)}),P.length||(l&&(n.set(t,h,vt(p)),p=t),r(vt(p)))}return u?hj(e).then(k).catch(i):v=Jg(e,k,i),N=>{if(v(),N){const P=typeof N=="function"?N():[];n.set(t,h,P)}b.forEach(ku)}}function Kj(t,e,n,r,i,s){const o=Object.assign({},Xg,s),a="value",c=Object.create(null);r=y2(r,()=>Nm(t,a));let l=ur;function u(h){h.exists()?Sp(o,t,a,h,c,n,0,r,i):(n.set(t,a,null),r(null))}return o.once?kC(e).then(u).catch(i):l=Jg(e,u,i),h=>{if(l(),h){const p=typeof h=="function"?h():null;n.set(t,a,p)}ku(c)}}const e0=Symbol();function LC(t,e){let n=ur;const r=Object.assign({},Xg,e),i=vt(t),s=r.target||ct();w2()&&(r.once=!0);const o=Bj(i,r.ssrKey,e0,wc()),a=o!==e0;a&&(s.value=o);let c=!a;const l=ct(!1),u=ct(),h=hE(),p=Q0();let m=ur;function y(){let A=vt(t);const k=new Promise((N,P)=>{if(n(r.reset),!A)return n=ur,N(null);l.value=c,c=!0,A.converter||(A=A.withConverter(r.converter)),n=(Om(A)?Kj:qj)(s,A,Gj,N,P,r)}).catch(N=>(h.value===k&&(u.value=N),Promise.reject(N))).finally(()=>{h.value===k&&(l.value=!1)});h.value=k}let v=ur;Ot(t)&&(v=Br(t,y)),y(),i&&(m=Hj(h.value,i,r.ssrKey)),$E()&&bE(()=>h.value),p&&O1(b);function b(A=r.reset){v(),m(),n(A)}return Object.defineProperties(s,{error:{get:()=>u},data:{get:()=>s},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>b}})}const Gj={set:(t,e,n)=>u2(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function vW(t,e){return LC(t,{target:ct([]),...e})}function VC(t,e){return LC(t,e)}function Qj(t){return(e,n)=>{const r=E2(e,n).run(()=>ct(t));nI.set(e,r),I2(r,e)}}function wW(t){return l2?XT(wc(t)):null}function Yj(t,{firebaseApp:e,modules:n=[]}){t.provide(tI,e);for(const r of n)r(e,t)}const Jj=ir({__name:"App",setup(t){const e=xm(),n=XO(),r=ZO();return Br(e,async(i,s)=>{if(!i&&s&&r.meta.requiresAuth)return n.push({name:"login"});if(i&&typeof r.query.redirect=="string")return n.push(r.query.redirect)}),(i,s)=>(Et(),no(vt(XE)))}}),Xj="modulepreload",Zj=function(t){return"/"+t},t0={},n0=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Zj(s),s in t0)return;t0[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Xj,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var e6=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},$C={},On={};let Zg;const t6=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];On.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};On.getSymbolTotalCodewords=function(e){return t6[e]};On.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};On.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Zg=e};On.isKanjiModeEnabled=function(){return typeof Zg<"u"};On.toSJIS=function(e){return Zg(e)};var Wh={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(Wh);function FC(){this.buffer=[],this.length=0}FC.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var n6=FC;function Bc(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}Bc.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};Bc.prototype.get=function(t,e){return this.data[t*this.size+e]};Bc.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};Bc.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var r6=Bc,UC={};(function(t){const e=On.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,s=e(r),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],s=t.getRowColCoords(r),o=s.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([s[a],s[c]]);return i}})(UC);var BC={};const i6=On.getSymbolSize,r0=7;BC.getPositions=function(e){const n=i6(e);return[[0,0],[n-r0,0],[0,n-r0]]};var jC={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,c=0,l=null,u=null;for(let h=0;h<s;h++){a=c=0,l=u=null;for(let p=0;p<s;p++){let m=i.get(h,p);m===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=m,a=1),m=i.get(p,h),m===u?c++:(c>=5&&(o+=e.N1+(c-5)),u=m,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},t.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let c=0;c<s-1;c++){const l=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},t.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,c=0;for(let l=0;l<s;l++){a=c=0;for(let u=0;u<s;u++)a=a<<1&2047|i.get(l,u),u>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&o++}return o*e.N3},t.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let c=0;c<o;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function n(r,i,s){switch(r){case t.Patterns.PATTERN000:return(i+s)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return s%3===0;case t.Patterns.PATTERN011:return(i+s)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case t.Patterns.PATTERN101:return i*s%2+i*s%3===0;case t.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case t.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)s.isReserved(c,a)||s.xor(c,a,n(i,c,a))},t.getBestMask=function(i,s){const o=Object.keys(t.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){s(l),t.applyMask(l,i);const u=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(l,i),u<c&&(c=u,a=l)}return a}})(jC);var zh={};const pi=Wh,yl=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],vl=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];zh.getBlocksCount=function(e,n){switch(n){case pi.L:return yl[(e-1)*4+0];case pi.M:return yl[(e-1)*4+1];case pi.Q:return yl[(e-1)*4+2];case pi.H:return yl[(e-1)*4+3];default:return}};zh.getTotalCodewordsCount=function(e,n){switch(n){case pi.L:return vl[(e-1)*4+0];case pi.M:return vl[(e-1)*4+1];case pi.Q:return vl[(e-1)*4+2];case pi.H:return vl[(e-1)*4+3];default:return}};var HC={},qh={};const xa=new Uint8Array(512),Nu=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)xa[n]=e,Nu[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)xa[n]=xa[n-255]})();qh.log=function(e){if(e<1)throw new Error("log("+e+")");return Nu[e]};qh.exp=function(e){return xa[e]};qh.mul=function(e,n){return e===0||n===0?0:xa[Nu[e]+Nu[n]]};(function(t){const e=qh;t.mul=function(r,i){const s=new Uint8Array(r.length+i.length-1);for(let o=0;o<r.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=e.mul(r[o],i[a]);return s},t.mod=function(r,i){let s=new Uint8Array(r);for(;s.length-i.length>=0;){const o=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let s=0;s<r;s++)i=t.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(HC);const WC=HC;function e_(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}e_.prototype.initialize=function(e){this.degree=e,this.genPoly=WC.generateECPolynomial(this.degree)};e_.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=WC.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(r,i),s}return r};var s6=e_,zC={},Li={},t_={};t_.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Ar={};const qC="[0-9]+",o6="[A-Z $%*+\\-./:]+";let uc="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";uc=uc.replace(/u/g,"\\u");const a6="(?:(?![A-Z0-9 $%*+\\-./:]|"+uc+`)(?:.|[\r
]))+`;Ar.KANJI=new RegExp(uc,"g");Ar.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Ar.BYTE=new RegExp(a6,"g");Ar.NUMERIC=new RegExp(qC,"g");Ar.ALPHANUMERIC=new RegExp(o6,"g");const c6=new RegExp("^"+uc+"$"),l6=new RegExp("^"+qC+"$"),u6=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Ar.testKanji=function(e){return c6.test(e)};Ar.testNumeric=function(e){return l6.test(e)};Ar.testAlphanumeric=function(e){return u6.test(e)};(function(t){const e=t_,n=Ar;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},t.getBestModeForData=function(s){return n.testNumeric(s)?t.NUMERIC:n.testAlphanumeric(s)?t.ALPHANUMERIC:n.testKanji(s)?t.KANJI:t.BYTE},t.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},t.isValid=function(s){return s&&s.bit&&s.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(s,o){if(t.isValid(s))return s;try{return r(s)}catch{return o}}})(Li);(function(t){const e=On,n=zh,r=Wh,i=Li,s=t_,o=7973,a=e.getBCHDigit(o);function c(p,m,y){for(let v=1;v<=40;v++)if(m<=t.getCapacity(v,y,p))return v}function l(p,m){return i.getCharCountIndicator(p,m)+4}function u(p,m){let y=0;return p.forEach(function(v){const b=l(v.mode,m);y+=b+v.getBitsLength()}),y}function h(p,m){for(let y=1;y<=40;y++)if(u(p,y)<=t.getCapacity(y,m,i.MIXED))return y}t.from=function(m,y){return s.isValid(m)?parseInt(m,10):y},t.getCapacity=function(m,y,v){if(!s.isValid(m))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=i.BYTE);const b=e.getSymbolTotalCodewords(m),A=n.getTotalCodewordsCount(m,y),k=(b-A)*8;if(v===i.MIXED)return k;const N=k-l(v,m);switch(v){case i.NUMERIC:return Math.floor(N/10*3);case i.ALPHANUMERIC:return Math.floor(N/11*2);case i.KANJI:return Math.floor(N/13);case i.BYTE:default:return Math.floor(N/8)}},t.getBestVersionForData=function(m,y){let v;const b=r.from(y,r.M);if(Array.isArray(m)){if(m.length>1)return h(m,b);if(m.length===0)return 1;v=m[0]}else v=m;return c(v.mode,v.getLength(),b)},t.getEncodedBits=function(m){if(!s.isValid(m)||m<7)throw new Error("Invalid QR Code version");let y=m<<12;for(;e.getBCHDigit(y)-a>=0;)y^=o<<e.getBCHDigit(y)-a;return m<<12|y}})(zC);var KC={};const kp=On,GC=1335,h6=21522,i0=kp.getBCHDigit(GC);KC.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;kp.getBCHDigit(i)-i0>=0;)i^=GC<<kp.getBCHDigit(i)-i0;return(r<<10|i)^h6};var QC={};const d6=Li;function Eo(t){this.mode=d6.NUMERIC,this.data=t.toString()}Eo.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Eo.prototype.getLength=function(){return this.data.length};Eo.prototype.getBitsLength=function(){return Eo.getBitsLength(this.data.length)};Eo.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const s=this.data.length-n;s>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,s*3+1))};var f6=Eo;const p6=Li,Jd=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function To(t){this.mode=p6.ALPHANUMERIC,this.data=t}To.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};To.prototype.getLength=function(){return this.data.length};To.prototype.getBitsLength=function(){return To.getBitsLength(this.data.length)};To.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=Jd.indexOf(this.data[n])*45;r+=Jd.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(Jd.indexOf(this.data[n]),6)};var m6=To,g6=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var s=e.charCodeAt(i);if(s>=55296&&s<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(s=(s-55296)*1024+o-56320+65536,i+=1)}if(s<128){n.push(s);continue}if(s<2048){n.push(s>>6|192),n.push(s&63|128);continue}if(s<55296||s>=57344&&s<65536){n.push(s>>12|224),n.push(s>>6&63|128),n.push(s&63|128);continue}if(s>=65536&&s<=1114111){n.push(s>>18|240),n.push(s>>12&63|128),n.push(s>>6&63|128),n.push(s&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const _6=g6,y6=Li;function Io(t){this.mode=y6.BYTE,typeof t=="string"&&(t=_6(t)),this.data=new Uint8Array(t)}Io.getBitsLength=function(e){return e*8};Io.prototype.getLength=function(){return this.data.length};Io.prototype.getBitsLength=function(){return Io.getBitsLength(this.data.length)};Io.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var v6=Io;const w6=Li,E6=On;function bo(t){this.mode=w6.KANJI,this.data=t}bo.getBitsLength=function(e){return e*13};bo.prototype.getLength=function(){return this.data.length};bo.prototype.getBitsLength=function(){return bo.getBitsLength(this.data.length)};bo.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=E6.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var T6=bo,YC={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var s={},o={};o[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var c,l,u,h,p,m,y,v,b;!a.empty();){c=a.pop(),l=c.value,h=c.cost,p=n[l]||{};for(u in p)p.hasOwnProperty(u)&&(m=p[u],y=h+m,v=o[u],b=typeof o[u]>"u",(b||v>y)&&(o[u]=y,a.push(u,y),s[u]=l))}if(typeof i<"u"&&typeof o[i]>"u"){var A=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(A)}return s},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],s=r;s;)i.push(s),n[s],s=n[s];return i.reverse(),i},find_path:function(n,r,i){var s=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},s;n=n||{};for(s in r)r.hasOwnProperty(s)&&(i[s]=r[s]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(YC);var I6=YC.exports;(function(t){const e=Li,n=f6,r=m6,i=v6,s=T6,o=Ar,a=On,c=I6;function l(A){return unescape(encodeURIComponent(A)).length}function u(A,k,N){const P=[];let j;for(;(j=A.exec(N))!==null;)P.push({data:j[0],index:j.index,mode:k,length:j[0].length});return P}function h(A){const k=u(o.NUMERIC,e.NUMERIC,A),N=u(o.ALPHANUMERIC,e.ALPHANUMERIC,A);let P,j;return a.isKanjiModeEnabled()?(P=u(o.BYTE,e.BYTE,A),j=u(o.KANJI,e.KANJI,A)):(P=u(o.BYTE_KANJI,e.BYTE,A),j=[]),k.concat(N,P,j).sort(function(ae,ge){return ae.index-ge.index}).map(function(ae){return{data:ae.data,mode:ae.mode,length:ae.length}})}function p(A,k){switch(k){case e.NUMERIC:return n.getBitsLength(A);case e.ALPHANUMERIC:return r.getBitsLength(A);case e.KANJI:return s.getBitsLength(A);case e.BYTE:return i.getBitsLength(A)}}function m(A){return A.reduce(function(k,N){const P=k.length-1>=0?k[k.length-1]:null;return P&&P.mode===N.mode?(k[k.length-1].data+=N.data,k):(k.push(N),k)},[])}function y(A){const k=[];for(let N=0;N<A.length;N++){const P=A[N];switch(P.mode){case e.NUMERIC:k.push([P,{data:P.data,mode:e.ALPHANUMERIC,length:P.length},{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.ALPHANUMERIC:k.push([P,{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.KANJI:k.push([P,{data:P.data,mode:e.BYTE,length:l(P.data)}]);break;case e.BYTE:k.push([{data:P.data,mode:e.BYTE,length:l(P.data)}])}}return k}function v(A,k){const N={},P={start:{}};let j=["start"];for(let W=0;W<A.length;W++){const ae=A[W],ge=[];for(let ze=0;ze<ae.length;ze++){const Re=ae[ze],ht=""+W+ze;ge.push(ht),N[ht]={node:Re,lastCount:0},P[ht]={};for(let $t=0;$t<j.length;$t++){const Ge=j[$t];N[Ge]&&N[Ge].node.mode===Re.mode?(P[Ge][ht]=p(N[Ge].lastCount+Re.length,Re.mode)-p(N[Ge].lastCount,Re.mode),N[Ge].lastCount+=Re.length):(N[Ge]&&(N[Ge].lastCount=Re.length),P[Ge][ht]=p(Re.length,Re.mode)+4+e.getCharCountIndicator(Re.mode,k))}}j=ge}for(let W=0;W<j.length;W++)P[j[W]].end=0;return{map:P,table:N}}function b(A,k){let N;const P=e.getBestModeForData(A);if(N=e.from(k,P),N!==e.BYTE&&N.bit<P.bit)throw new Error('"'+A+'" cannot be encoded with mode '+e.toString(N)+`.
 Suggested mode is: `+e.toString(P));switch(N===e.KANJI&&!a.isKanjiModeEnabled()&&(N=e.BYTE),N){case e.NUMERIC:return new n(A);case e.ALPHANUMERIC:return new r(A);case e.KANJI:return new s(A);case e.BYTE:return new i(A)}}t.fromArray=function(k){return k.reduce(function(N,P){return typeof P=="string"?N.push(b(P,null)):P.data&&N.push(b(P.data,P.mode)),N},[])},t.fromString=function(k,N){const P=h(k,a.isKanjiModeEnabled()),j=y(P),W=v(j,N),ae=c.find_path(W.map,"start","end"),ge=[];for(let ze=1;ze<ae.length-1;ze++)ge.push(W.table[ae[ze]].node);return t.fromArray(m(ge))},t.rawSplit=function(k){return t.fromArray(h(k,a.isKanjiModeEnabled()))}})(QC);const Kh=On,Xd=Wh,b6=n6,A6=r6,C6=UC,R6=BC,Np=jC,Op=zh,S6=s6,Ou=zC,P6=KC,k6=Li,Zd=QC;function N6(t,e){const n=t.size,r=R6.getPositions(e);for(let i=0;i<r.length;i++){const s=r[i][0],o=r[i][1];for(let a=-1;a<=7;a++)if(!(s+a<=-1||n<=s+a))for(let c=-1;c<=7;c++)o+c<=-1||n<=o+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(s+a,o+c,!0,!0):t.set(s+a,o+c,!1,!0))}}function O6(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function x6(t,e){const n=C6.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],s=n[r][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?t.set(i+o,s+a,!0,!0):t.set(i+o,s+a,!1,!0)}}function D6(t,e){const n=t.size,r=Ou.getEncodedBits(e);let i,s,o;for(let a=0;a<18;a++)i=Math.floor(a/3),s=a%3+n-8-3,o=(r>>a&1)===1,t.set(i,s,o,!0),t.set(s,i,o,!0)}function ef(t,e,n){const r=t.size,i=P6.getEncodedBits(e,n);let s,o;for(s=0;s<15;s++)o=(i>>s&1)===1,s<6?t.set(s,8,o,!0):s<8?t.set(s+1,8,o,!0):t.set(r-15+s,8,o,!0),s<8?t.set(8,r-s-1,o,!0):s<9?t.set(8,15-s-1+1,o,!0):t.set(8,15-s-1,o,!0);t.set(r-8,8,1,!0)}function M6(t,e){const n=t.size;let r=-1,i=n-1,s=7,o=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(i,a-c)){let l=!1;o<e.length&&(l=(e[o]>>>s&1)===1),t.set(i,a-c,l),s--,s===-1&&(o++,s=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function L6(t,e,n){const r=new b6;n.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),k6.getCharCountIndicator(c.mode,t)),c.write(r)});const i=Kh.getSymbolTotalCodewords(t),s=Op.getTotalCodewordsCount(t,e),o=(i-s)*8;for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(o-r.getLengthInBits())/8;for(let c=0;c<a;c++)r.put(c%2?17:236,8);return V6(r,t,e)}function V6(t,e,n){const r=Kh.getSymbolTotalCodewords(e),i=Op.getTotalCodewordsCount(e,n),s=r-i,o=Op.getBlocksCount(e,n),a=r%o,c=o-a,l=Math.floor(r/o),u=Math.floor(s/o),h=u+1,p=l-u,m=new S6(p);let y=0;const v=new Array(o),b=new Array(o);let A=0;const k=new Uint8Array(t.buffer);for(let ae=0;ae<o;ae++){const ge=ae<c?u:h;v[ae]=k.slice(y,y+ge),b[ae]=m.encode(v[ae]),y+=ge,A=Math.max(A,ge)}const N=new Uint8Array(r);let P=0,j,W;for(j=0;j<A;j++)for(W=0;W<o;W++)j<v[W].length&&(N[P++]=v[W][j]);for(j=0;j<p;j++)for(W=0;W<o;W++)N[P++]=b[W][j];return N}function $6(t,e,n,r){let i;if(Array.isArray(t))i=Zd.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const u=Zd.rawSplit(t);l=Ou.getBestVersionForData(u,n)}i=Zd.fromString(t,l||40)}else throw new Error("Invalid data");const s=Ou.getBestVersionForData(i,n);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const o=L6(e,n,i),a=Kh.getSymbolSize(e),c=new A6(a);return N6(c,e),O6(c),x6(c,e),ef(c,n,0),e>=7&&D6(c,e),M6(c,o),isNaN(r)&&(r=Np.getBestMask(c,ef.bind(null,c,n))),Np.applyMask(r,c),ef(c,n,r),{modules:c,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}$C.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=Xd.M,i,s;return typeof n<"u"&&(r=Xd.from(n.errorCorrectionLevel,Xd.M),i=Ou.from(n.version),s=Np.from(n.maskPattern),n.toSJISFunc&&Kh.setToSJISFunction(n.toSJISFunc)),$6(e,i,r,s)};var JC={},n_={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(s){return[s,s]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,s=r.width&&r.width>=21?r.width:void 0,o=r.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const s=t.getScale(r,i);return Math.floor((r+i.margin*2)*s)},t.qrToImageData=function(r,i,s){const o=i.modules.size,a=i.modules.data,c=t.getScale(o,s),l=Math.floor((o+s.margin*2)*c),u=s.margin*c,h=[s.color.light,s.color.dark];for(let p=0;p<l;p++)for(let m=0;m<l;m++){let y=(p*l+m)*4,v=s.color.light;if(p>=u&&m>=u&&p<l-u&&m<l-u){const b=Math.floor((p-u)/c),A=Math.floor((m-u)/c);v=h[a[b*o+A]?1:0]}r[y++]=v.r,r[y++]=v.g,r[y++]=v.b,r[y]=v.a}}})(n_);(function(t){const e=n_;function n(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(s,o,a){let c=a,l=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=r()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),h=l.getContext("2d"),p=h.createImageData(u,u);return e.qrToImageData(p.data,s,c),n(h,l,u),h.putImageData(p,0,0),l},t.renderToDataURL=function(s,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=t.render(s,o,c),u=c.type||"image/png",h=c.rendererOpts||{};return l.toDataURL(u,h.quality)}})(JC);var XC={};const F6=n_;function s0(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function tf(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function U6(t,e,n){let r="",i=0,s=!1,o=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!s&&(s=!0),t[a]?(o++,a>0&&c>0&&t[a-1]||(r+=s?tf("M",c+n,.5+l+n):tf("m",i,0),i=0,s=!1),c+1<e&&t[a+1]||(r+=tf("h",o),o=0)):i++}return r}XC.render=function(e,n,r){const i=F6.getOptions(n),s=e.modules.size,o=e.modules.data,a=s+i.margin*2,c=i.color.light.a?"<path "+s0(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+s0(i.color.dark,"stroke")+' d="'+U6(o,s,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,p),p};const B6=e6,xp=$C,ZC=JC,j6=XC;function r_(t,e,n,r,i){const s=[].slice.call(arguments,1),o=s.length,a=typeof s[o-1]=="function";if(!a&&!B6())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(i=n,n=e,e=r=void 0):o===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(n=e,e=r=void 0):o===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(c,l){try{const u=xp.create(n,r);c(t(u,e,r))}catch(u){l(u)}})}try{const c=xp.create(n,r);i(null,t(c,e,r))}catch(c){i(c)}}xp.create;var H6=r_.bind(null,ZC.render);r_.bind(null,ZC.renderToDataURL);r_.bind(null,function(t,e,n){return j6.render(t,n)});const W6={class:"qrcode"},z6=ir({__name:"QrCode",props:{codeString:{}},setup(t){const e=t,n=ct(null);return um(()=>{H6(n.value,e.codeString,{color:{dark:getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-on-background"),light:getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-background")},scale:10})}),(r,i)=>(Et(),Sn("div",W6,[it("canvas",{ref_key:"canvas",ref:n},null,512)]))}});const eR=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},q6=eR(z6,[["__scopeId","data-v-8d05d72b"]]),K6=(t,e)=>e.some(n=>t instanceof n);let o0,a0;function G6(){return o0||(o0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Q6(){return a0||(a0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tR=new WeakMap,Dp=new WeakMap,nR=new WeakMap,nf=new WeakMap,i_=new WeakMap;function Y6(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ti(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tR.set(n,t)}).catch(()=>{}),i_.set(e,t),e}function J6(t){if(Dp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dp.set(t,e)}let Mp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nR.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ti(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function X6(t){Mp=t(Mp)}function Z6(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rf(this),e,...n);return nR.set(r,e.sort?e.sort():[e]),Ti(r)}:Q6().includes(t)?function(...e){return t.apply(rf(this),e),Ti(tR.get(this))}:function(...e){return Ti(t.apply(rf(this),e))}}function e9(t){return typeof t=="function"?Z6(t):(t instanceof IDBTransaction&&J6(t),K6(t,G6())?new Proxy(t,Mp):t)}function Ti(t){if(t instanceof IDBRequest)return Y6(t);if(nf.has(t))return nf.get(t);const e=e9(t);return e!==t&&(nf.set(t,e),i_.set(e,t)),e}const rf=t=>i_.get(t);function t9(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ti(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ti(o.result),c.oldVersion,c.newVersion,Ti(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const n9=["get","getKey","getAll","getAllKeys","count"],r9=["put","add","delete","clear"],sf=new Map;function c0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sf.get(e))return sf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=r9.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||n9.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return sf.set(e,s),s}X6(t=>({...t,get:(e,n,r)=>c0(e,n)||t.get(e,n,r),has:(e,n)=>!!c0(e,n)||t.has(e,n)}));const rR="@firebase/installations",s_="0.6.4";/**
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
 */const iR=1e4,sR=`w:${s_}`,oR="FIS_v2",i9="https://firebaseinstallations.googleapis.com/v1",s9=60*60*1e3,o9="installations",a9="Installations";/**
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
 */const c9={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gs=new Ni(o9,a9,c9);function aR(t){return t instanceof Bn&&t.code.includes("request-failed")}/**
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
 */function cR({projectId:t}){return`${i9}/projects/${t}/installations`}function lR(t){return{token:t.token,requestStatus:2,expiresIn:u9(t.expiresIn),creationTime:Date.now()}}async function uR(t,e){const r=(await e.json()).error;return gs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function hR({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function l9(t,{refreshToken:e}){const n=hR(t);return n.append("Authorization",h9(e)),n}async function dR(t){const e=await t();return e.status>=500&&e.status<600?t():e}function u9(t){return Number(t.replace("s","000"))}function h9(t){return`${oR} ${t}`}/**
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
 */async function d9({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=cR(t),i=hR(t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:oR,appId:t.appId,sdkVersion:sR},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await dR(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:lR(l.authToken)}}else throw await uR("Create Installation",c)}/**
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
 */function fR(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function f9(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const p9=/^[cdef][\w-]{21}$/,Lp="";function m9(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=g9(t);return p9.test(n)?n:Lp}catch{return Lp}}function g9(t){return f9(t).substr(0,22)}/**
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
 */function Gh(t){return`${t.appName}!${t.appId}`}/**
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
 */const pR=new Map;function mR(t,e){const n=Gh(t);gR(n,e),_9(n,e)}function gR(t,e){const n=pR.get(t);if(n)for(const r of n)r(e)}function _9(t,e){const n=y9();n&&n.postMessage({key:t,fid:e}),v9()}let Zi=null;function y9(){return!Zi&&"BroadcastChannel"in self&&(Zi=new BroadcastChannel("[Firebase] FID Change"),Zi.onmessage=t=>{gR(t.data.key,t.data.fid)}),Zi}function v9(){pR.size===0&&Zi&&(Zi.close(),Zi=null)}/**
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
 */const w9="firebase-installations-database",E9=1,_s="firebase-installations-store";let of=null;function o_(){return of||(of=t9(w9,E9,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_s)}}})),of}async function xu(t,e){const n=Gh(t),i=(await o_()).transaction(_s,"readwrite"),s=i.objectStore(_s),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&mR(t,e.fid),e}async function _R(t){const e=Gh(t),r=(await o_()).transaction(_s,"readwrite");await r.objectStore(_s).delete(e),await r.done}async function Qh(t,e){const n=Gh(t),i=(await o_()).transaction(_s,"readwrite"),s=i.objectStore(_s),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&mR(t,a.fid),a}/**
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
 */async function a_(t){let e;const n=await Qh(t.appConfig,r=>{const i=T9(r),s=I9(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Lp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function T9(t){const e=t||{fid:m9(),registrationStatus:0};return yR(e)}function I9(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(gs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=b9(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:A9(t)}:{installationEntry:e}}async function b9(t,e){try{const n=await d9(t,e);return xu(t.appConfig,n)}catch(n){throw aR(n)&&n.customData.serverCode===409?await _R(t.appConfig):await xu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function A9(t){let e=await l0(t.appConfig);for(;e.registrationStatus===1;)await fR(100),e=await l0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await a_(t);return r||n}return e}function l0(t){return Qh(t,e=>{if(!e)throw gs.create("installation-not-found");return yR(e)})}function yR(t){return C9(t)?{fid:t.fid,registrationStatus:0}:t}function C9(t){return t.registrationStatus===1&&t.registrationTime+iR<Date.now()}/**
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
 */async function R9({appConfig:t,heartbeatServiceProvider:e},n){const r=S9(t,n),i=l9(t,n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:sR,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await dR(()=>fetch(r,a));if(c.ok){const l=await c.json();return lR(l)}else throw await uR("Generate Auth Token",c)}function S9(t,{fid:e}){return`${cR(t)}/${e}/authTokens:generate`}/**
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
 */async function c_(t,e=!1){let n;const r=await Qh(t.appConfig,s=>{if(!vR(s))throw gs.create("not-registered");const o=s.authToken;if(!e&&N9(o))return s;if(o.requestStatus===1)return n=P9(t,e),s;{if(!navigator.onLine)throw gs.create("app-offline");const a=x9(s);return n=k9(t,a),a}});return n?await n:r.authToken}async function P9(t,e){let n=await u0(t.appConfig);for(;n.authToken.requestStatus===1;)await fR(100),n=await u0(t.appConfig);const r=n.authToken;return r.requestStatus===0?c_(t,e):r}function u0(t){return Qh(t,e=>{if(!vR(e))throw gs.create("not-registered");const n=e.authToken;return D9(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function k9(t,e){try{const n=await R9(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await xu(t.appConfig,r),n}catch(n){if(aR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _R(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xu(t.appConfig,r)}throw n}}function vR(t){return t!==void 0&&t.registrationStatus===2}function N9(t){return t.requestStatus===2&&!O9(t)}function O9(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+s9}function x9(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function D9(t){return t.requestStatus===1&&t.requestTime+iR<Date.now()}/**
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
 */async function M9(t){const e=t,{installationEntry:n,registrationPromise:r}=await a_(e);return r?r.catch(console.error):c_(e).catch(console.error),n.fid}/**
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
 */async function L9(t,e=!1){const n=t;return await V9(n),(await c_(n,e)).token}async function V9(t){const{registrationPromise:e}=await a_(t);e&&await e}/**
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
 */function $9(t){if(!t||!t.options)throw af("App Configuration");if(!t.name)throw af("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw af(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function af(t){return gs.create("missing-app-config-values",{valueName:t})}/**
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
 */const wR="installations",F9="installations-internal",U9=t=>{const e=t.getProvider("app").getImmediate(),n=$9(e),r=ws(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},B9=t=>{const e=t.getProvider("app").getImmediate(),n=ws(e,wR).getImmediate();return{getId:()=>M9(n),getToken:i=>L9(n,i)}};function j9(){vn(new fn(wR,U9,"PUBLIC")),vn(new fn(F9,B9,"PRIVATE"))}j9();Ht(rR,s_);Ht(rR,s_,"esm2017");/**
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
 */const Du="analytics",H9="firebase_id",W9="origin",z9=60*1e3,q9="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",l_="https://www.googletagmanager.com/gtag/js";/**
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
 */const _n=new Oo("@firebase/analytics");/**
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
 */const K9={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kn=new Ni("analytics","Analytics",K9);/**
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
 */function G9(t){if(!t.startsWith(l_)){const e=kn.create("invalid-gtag-resource",{gtagURL:t});return _n.warn(e.message),""}return t}function ER(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Q9(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Y9(t,e){const n=Q9("firebase-js-sdk-policy",{createScriptURL:G9}),r=document.createElement("script"),i=`${l_}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function J9(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function X9(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await ER(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){_n.error(a)}t("config",i,s)}async function Z9(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await ER(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){_n.error(s)}}function e3(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await Z9(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await X9(t,e,n,r,a,c)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){_n.error(a)}}return i}function t3(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=e3(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function n3(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(l_)&&n.src.includes(t))return n;return null}/**
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
 */const r3=30,i3=1e3;class s3{constructor(e={},n=i3){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const TR=new s3;function o3(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function a3(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:o3(r)},s=q9.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw kn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function c3(t,e=TR,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw kn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw kn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new h3;return setTimeout(async()=>{a.abort()},n!==void 0?n:z9),IR({appId:r,apiKey:i,measurementId:s},o,a,e)}async function IR(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=TR){var s;const{appId:o,measurementId:a}=t;try{await l3(r,e)}catch(c){if(a)return _n.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await a3(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!u3(l)){if(i.deleteThrottleMetadata(o),a)return _n.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?Wy(n,i.intervalMillis,r3):Wy(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),_n.debug(`Calling attemptFetch again in ${u} millis`),IR(t,h,r,i)}}function l3(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(kn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function u3(t){if(!(t instanceof Bn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class h3{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function d3(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function f3(){if(vm())try{await lT()}catch(t){return _n.warn(kn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return _n.warn(kn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function p3(t,e,n,r,i,s,o){var a;const c=c3(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&_n.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>_n.error(m)),e.push(c);const l=f3().then(m=>{if(m)return r.getId()}),[u,h]=await Promise.all([c,l]);n3(s)||Y9(s,u.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[W9]="firebase",p.update=!0,h!=null&&(p[H9]=h),i("config",u.measurementId,p),u.measurementId}/**
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
 */class m3{constructor(e){this.app=e}_delete(){return delete Da[this.app.options.appId],Promise.resolve()}}let Da={},h0=[];const d0={};let cf="dataLayer",g3="gtag",f0,bR,p0=!1;function _3(){const t=[];if(oT()&&t.push("This is a browser extension environment."),hx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=kn.create("invalid-analytics-context",{errorInfo:e});_n.warn(n.message)}}function y3(t,e,n){_3();const r=t.options.appId;if(!r)throw kn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_n.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kn.create("no-api-key");if(Da[r]!=null)throw kn.create("already-exists",{id:r});if(!p0){J9(cf);const{wrappedGtag:s,gtagCore:o}=t3(Da,h0,d0,cf,g3);bR=s,f0=o,p0=!0}return Da[r]=p3(t,h0,d0,e,f0,cf,n),new m3(t)}function v3(t=ih()){t=Mt(t);const e=ws(t,Du);return e.isInitialized()?e.getImmediate():w3(t)}function w3(t,e={}){const n=ws(t,Du);if(n.isInitialized()){const i=n.getImmediate();if(Wa(e,n.getOptions()))return i;throw kn.create("already-initialized")}return n.initialize({options:e})}function E3(t,e,n,r){t=Mt(t),d3(bR,Da[t.app.options.appId],e,n,r).catch(i=>_n.error(i))}const m0="@firebase/analytics",g0="0.10.0";function T3(){vn(new fn(Du,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return y3(r,i,n)},"PUBLIC")),vn(new fn("analytics-internal",t,"PRIVATE")),Ht(m0,g0),Ht(m0,g0,"esm2017");function t(e){try{const n=e.getProvider(Du).getImmediate();return{logEvent:(r,i,s)=>E3(n,r,i,s)}}catch(n){throw kn.create("interop-component-reg-failed",{reason:n})}}}T3();const I3={apiKey:"AIzaSyBBi5IzyoAfCGZPdIjY_Unn13awXzMY3QQ",authDomain:"presenzapp.firebaseapp.com",projectId:"presenzapp",storageBucket:"presenzapp.appspot.com",messagingSenderId:"121965141290",appId:"1:121965141290:web:5bda310c5531b4849b9253",measurementId:"G-X4JEPSW9DH"},u_=fT(I3),Dl=XB(u_);v3(u_);var AR=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},b3=(t,e,n)=>(AR(t,e,"read from private field"),n?n.call(t):e.get(t)),A3=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},C3=(t,e,n,r)=>(AR(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);const _0=["aztec","code_128","code_39","code_93","codabar","data_matrix","ean_13","ean_8","itf","pdf417","qr_code","upc_a","upc_e","unknown"];function R3(t){if(CR(t))return{width:t.naturalWidth,height:t.naturalHeight};if(RR(t))return{width:t.width.baseVal.value,height:t.height.baseVal.value};if(SR(t))return{width:t.videoWidth,height:t.videoHeight};if(S3(t))return{width:t.width,height:t.height};if(PR(t))return{width:t.width,height:t.height};if(P3(t))return{width:t.width,height:t.height};if(kR(t))return{width:t.displayWidth,height:t.displayHeight};throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.")}function CR(t){try{return t instanceof HTMLImageElement}catch{return!1}}function RR(t){try{return t instanceof SVGImageElement}catch{return!1}}function SR(t){try{return t instanceof HTMLVideoElement}catch{return!1}}function S3(t){try{return t instanceof HTMLCanvasElement}catch{return!1}}function PR(t){try{return t instanceof ImageBitmap}catch{return!1}}function P3(t){try{return t instanceof OffscreenCanvas}catch{return!1}}function kR(t){try{return t instanceof VideoFrame}catch{return!1}}function k3(t){try{return t instanceof Blob}catch{return!1}}function N3(t){try{return t instanceof ImageData}catch{return!1}}function O3(t,e){try{const n=new OffscreenCanvas(t,e);if(n.getContext("2d")instanceof OffscreenCanvasRenderingContext2D)return n;throw void 0}catch{const r=document.createElement("canvas");return r.width=t,r.height=e,r}}async function NR(t){if(CR(t)&&!await M3(t))throw new DOMException("Failed to load or decode HTMLImageElement.","InvalidStateError");if(RR(t)&&!await L3(t))throw new DOMException("Failed to load or decode SVGImageElement.","InvalidStateError");if(kR(t)&&V3(t))throw new DOMException("VideoFrame is closed.","InvalidStateError");if(SR(t)&&(t.readyState===0||t.readyState===1))throw new DOMException("Invalid element or state.","InvalidStateError");if(PR(t)&&F3(t))throw new DOMException("The image source is detached.","InvalidStateError");const{width:e,height:n}=R3(t);if(e===0||n===0)return null;const r=O3(e,n).getContext("2d");r.drawImage(t,0,0);try{return r.getImageData(0,0,e,n)}catch{throw new DOMException("Source would taint origin.","SecurityError")}}async function x3(t){let e;try{e=await createImageBitmap(t)}catch{throw new DOMException("Failed to load or decode Blob.","InvalidStateError")}return await NR(e)}async function D3(t){if(k3(t))return await x3(t);if(N3(t)){if($3(t))throw new DOMException("The image data has been detached.","InvalidStateError");return t}return await NR(t)}async function M3(t){try{return await t.decode(),!0}catch{return!1}}async function L3(t){var e;try{return await((e=t.decode)==null?void 0:e.call(t)),!0}catch{return!1}}function V3(t){return t.format===null}function $3(t){return t.data.buffer.byteLength===0}function F3(t){return t.width===0&&t.height===0}function y0(t,e){return t instanceof DOMException?new DOMException(`${e}: ${t.message}`,t.name):t instanceof Error?new t.constructor(`${e}: ${t.message}`):new Error(`${e}: ${t}`)}const v0=t=>{let e;const n=new Set,r=(o,a)=>{const c=typeof o=="function"?o(e):o;if(!Object.is(c,e)){const l=e;e=a??typeof c!="object"?c:Object.assign({},e,c),n.forEach(u=>u(e,l))}},i=()=>e,s={setState:r,getState:i,subscribe:o=>(n.add(o),()=>n.delete(o)),destroy:()=>{n.clear()}};return e=t(r,i,s),s},U3=t=>t?v0(t):v0,B3={locateFile:(t,e)=>{var n;const r=(n=t.match(/_(.+?)\.wasm$/))==null?void 0:n[1];return r?`https://cdn.jsdelivr.net/npm/@sec-ant/zxing-wasm@2.1.3/dist/${r}/${t}`:e+t}},_a=U3()(()=>({zxingModuleWeakMap:new WeakMap,zxingModuleOverrides:B3}));function OR(t,e=_a.getState().zxingModuleOverrides){const{zxingModuleWeakMap:n}=_a.getState(),r=n.get(t);if(r&&Object.is(e,_a.getState().zxingModuleOverrides))return r;{_a.setState({zxingModuleOverrides:e});const i=t(e);return n.set(t,i),i}}const w0=["Aztec","Codabar","Code128","Code39","Code93","DataBar","DataBarExpanded","DataMatrix","EAN-13","EAN-8","ITF","Linear-Codes","Matrix-Codes","MaxiCode","MicroQRCode","None","PDF417","QRCode","UPC-A","UPC-E"],mi={tryHarder:!0,formats:[],maxSymbols:255};async function j3(t,{tryHarder:e=mi.tryHarder,formats:n=mi.formats,maxSymbols:r=mi.maxSymbols}=mi,i){const s=await OR(i,_a.getState().zxingModuleOverrides),{data:o,width:a,height:c,data:{byteLength:l}}=t,u=s._malloc(l);s.HEAP8.set(o,u);const h=s.readBarcodesFromPixmap(u,a,c,e,H3(n),r);s._free(u);const p=[];for(let m=0;m<h.size();++m){const y=h.get(m);p.push({...y,format:W3(y.format)})}return p}function H3(t){return t.join("|")}function W3(t){const e=E0(t);let n=0,r=w0.length-1;for(;n<=r;){const i=Math.floor((n+r)/2),s=w0[i],o=E0(s);if(o===e)return s;o<e?n=i+1:r=i-1}return"None"}function E0(t){return t.toLowerCase().replace(/_-\[\]/g,"")}var xR=(()=>{var t=import.meta.url;return function(e={}){var n=e,r,i;n.ready=new Promise((d,f)=>{r=d,i=f});var s=Object.assign({},n),o="./this.program",a=typeof window=="object",c=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var l="";function u(d){return n.locateFile?n.locateFile(d,l):l+d}var h;(a||c)&&(c?l=self.location.href:typeof document<"u"&&document.currentScript&&(l=document.currentScript.src),t&&(l=t),l.indexOf("blob:")!==0?l=l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):l="",c&&(h=d=>{var f=new XMLHttpRequest;return f.open("GET",d,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)})),n.print||console.log.bind(console);var p=n.printErr||console.error.bind(console);Object.assign(n,s),s=null,n.arguments&&n.arguments,n.thisProgram&&(o=n.thisProgram),n.quit&&n.quit;var m;n.wasmBinary&&(m=n.wasmBinary),n.noExitRuntime,typeof WebAssembly!="object"&&Hn("no native wasm support detected");var y,v,b=!1,A,k,N,P,j,W,ae,ge;function ze(){var d=y.buffer;n.HEAP8=A=new Int8Array(d),n.HEAP16=N=new Int16Array(d),n.HEAP32=j=new Int32Array(d),n.HEAPU8=k=new Uint8Array(d),n.HEAPU16=P=new Uint16Array(d),n.HEAPU32=W=new Uint32Array(d),n.HEAPF32=ae=new Float32Array(d),n.HEAPF64=ge=new Float64Array(d)}var Re,ht=[],$t=[],Ge=[];function Sr(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)Ve(n.preRun.shift());E(ht)}function cn(){E($t)}function je(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)Tn(n.postRun.shift());E(Ge)}function Ve(d){ht.unshift(d)}function Te(d){$t.unshift(d)}function Tn(d){Ge.unshift(d)}var It=0,bt=null;function At(d){It++,n.monitorRunDependencies&&n.monitorRunDependencies(It)}function Zr(d){if(It--,n.monitorRunDependencies&&n.monitorRunDependencies(It),It==0&&bt){var f=bt;bt=null,f()}}function Hn(d){n.onAbort&&n.onAbort(d),d="Aborted("+d+")",p(d),b=!0,d+=". Build with -sASSERTIONS for more info.";var f=new WebAssembly.RuntimeError(d);throw i(f),f}var Ps="data:application/octet-stream;base64,";function _t(d){return d.startsWith(Ps)}var x;n.locateFile?(x="zxing_reader.wasm",_t(x)||(x=u(x))):x=new URL("/reader/zxing_reader.wasm",self.location).href;function J(d){if(d==x&&m)return new Uint8Array(m);if(h)return h(d);throw"both async and sync fetching of the wasm failed"}function q(d){return!m&&(a||c)&&typeof fetch=="function"?fetch(d,{credentials:"same-origin"}).then(f=>{if(!f.ok)throw"failed to load wasm binary file at '"+d+"'";return f.arrayBuffer()}).catch(()=>J(d)):Promise.resolve().then(()=>J(d))}function te(d,f,g){return q(d).then(_=>WebAssembly.instantiate(_,f)).then(_=>_).then(g,_=>{p("failed to asynchronously prepare wasm: "+_),Hn(_)})}function xe(d,f,g,_){return!d&&typeof WebAssembly.instantiateStreaming=="function"&&!_t(f)&&typeof fetch=="function"?fetch(f,{credentials:"same-origin"}).then(T=>{var I=WebAssembly.instantiateStreaming(T,g);return I.then(_,function(R){return p("wasm streaming compile failed: "+R),p("falling back to ArrayBuffer instantiation"),te(f,g,_)})}):te(f,g,_)}function w(){var d={a:UP};function f(_,T){var I=_.exports;return v=I,y=v.qa,ze(),Re=v.ua,Te(v.ra),Zr(),I}At();function g(_){f(_.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(d,f)}catch(_){p("Module.instantiateWasm callback failed with error: "+_),i(_)}return xe(m,x,d,g).catch(i),{}}var E=d=>{for(;d.length>0;)d.shift()(n)},C=[],O=0;function M(d){var f=new H(d);return f.get_caught()||(f.set_caught(!0),O--),f.set_rethrown(!1),C.push(f),B_(f.excPtr),f.get_exception_ptr()}var L=0;function Q(){Ie(0,0);var d=C.pop();U_(d.excPtr),L=0}function H(d){this.excPtr=d,this.ptr=d-24,this.set_type=function(f){W[this.ptr+4>>2]=f},this.get_type=function(){return W[this.ptr+4>>2]},this.set_destructor=function(f){W[this.ptr+8>>2]=f},this.get_destructor=function(){return W[this.ptr+8>>2]},this.set_caught=function(f){f=f?1:0,A[this.ptr+12>>0]=f},this.get_caught=function(){return A[this.ptr+12>>0]!=0},this.set_rethrown=function(f){f=f?1:0,A[this.ptr+13>>0]=f},this.get_rethrown=function(){return A[this.ptr+13>>0]!=0},this.init=function(f,g){this.set_adjusted_ptr(0),this.set_type(f),this.set_destructor(g)},this.set_adjusted_ptr=function(f){W[this.ptr+16>>2]=f},this.get_adjusted_ptr=function(){return W[this.ptr+16>>2]},this.get_exception_ptr=function(){var f=H_(this.get_type());if(f)return W[this.excPtr>>2];var g=this.get_adjusted_ptr();return g!==0?g:this.excPtr}}function z(d){throw L||(L=d),L}var V=d=>{var f=L;if(!f)return Qo(0),0;var g=new H(f);g.set_adjusted_ptr(f);var _=g.get_type();if(!_)return Qo(0),f;for(var T in d){var I=d[T];if(I===0||I===_)break;var R=g.ptr+16;if(j_(I,_,R))return Qo(I),f}return Qo(_),f},ne=()=>V([]),X=d=>V([d]),re=(d,f)=>V([d,f]);function he(d){var f=new H(d).get_exception_ptr();return f}function ve(){var d=C.pop();d||Hn("no exception to throw");var f=d.excPtr;throw d.get_rethrown()||(C.push(d),d.set_rethrown(!0),d.set_caught(!1),O++),L=f,L}function qe(d,f,g){var _=new H(d);throw _.init(f,g),L=d,O++,L}function Ue(){return O}var Qe={};function pn(d){for(;d.length;){var f=d.pop(),g=d.pop();g(f)}}function xn(d){return this.fromWireType(j[d>>2])}var Pr={},In={},$i={},zt=void 0;function ln(d){throw new zt(d)}function sr(d,f,g){d.forEach(function(S){$i[S]=f});function _(S){var D=g(S);D.length!==d.length&&ln("Mismatched type converter count");for(var F=0;F<d.length;++F)kr(d[F],D[F])}var T=new Array(f.length),I=[],R=0;f.forEach((S,D)=>{In.hasOwnProperty(S)?T[D]=In[S]:(I.push(S),Pr.hasOwnProperty(S)||(Pr[S]=[]),Pr[S].push(()=>{T[D]=In[S],++R,R===I.length&&_(T)}))}),I.length===0&&_(T)}var hS=function(d){var f=Qe[d];delete Qe[d];var g=f.rawConstructor,_=f.rawDestructor,T=f.fields,I=T.map(R=>R.getterReturnType).concat(T.map(R=>R.setterArgumentType));sr([d],I,R=>{var S={};return T.forEach((D,F)=>{var Y=D.fieldName,se=R[F],ce=D.getter,ke=D.getterContext,nt=R[F+T.length],Ct=D.setter,rt=D.setterContext;S[Y]={read:Rt=>se.fromWireType(ce(ke,Rt)),write:(Rt,U)=>{var Z=[];Ct(rt,Rt,nt.toWireType(Z,U)),pn(Z)}}}),[{name:f.name,fromWireType:function(D){var F={};for(var Y in S)F[Y]=S[Y].read(D);return _(D),F},toWireType:function(D,F){for(var Y in S)if(!(Y in F))throw new TypeError(`Missing field: "${Y}"`);var se=g();for(Y in S)S[Y].write(se,F[Y]);return D!==null&&D.push(_,se),se},argPackAdvance:8,readValueFromPointer:xn,destructorFunction:_}]})};function dS(d,f,g,_,T){}function ed(d){switch(d){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${d}`)}}function fS(){for(var d=new Array(256),f=0;f<256;++f)d[f]=String.fromCharCode(f);g_=d}var g_=void 0;function qt(d){for(var f="",g=d;k[g];)f+=g_[k[g++]];return f}var ks=void 0;function De(d){throw new ks(d)}function pS(d,f,g={}){var _=f.name;if(d||De(`type "${_}" must have a positive integer typeid pointer`),In.hasOwnProperty(d)){if(g.ignoreDuplicateRegistrations)return;De(`Cannot register type '${_}' twice`)}if(In[d]=f,delete $i[d],Pr.hasOwnProperty(d)){var T=Pr[d];delete Pr[d],T.forEach(I=>I())}}function kr(d,f,g={}){if(!("argPackAdvance"in f))throw new TypeError("registerType registeredInstance requires argPackAdvance");return pS(d,f,g)}function mS(d,f,g,_,T){var I=ed(g);f=qt(f),kr(d,{name:f,fromWireType:function(R){return!!R},toWireType:function(R,S){return S?_:T},argPackAdvance:8,readValueFromPointer:function(R){var S;if(g===1)S=A;else if(g===2)S=N;else if(g===4)S=j;else throw new TypeError("Unknown boolean type size: "+f);return this.fromWireType(S[R>>I])},destructorFunction:null})}function gS(d){if(!(this instanceof ei)||!(d instanceof ei))return!1;for(var f=this.$$.ptrType.registeredClass,g=this.$$.ptr,_=d.$$.ptrType.registeredClass,T=d.$$.ptr;f.baseClass;)g=f.upcast(g),f=f.baseClass;for(;_.baseClass;)T=_.upcast(T),_=_.baseClass;return f===_&&g===T}function _S(d){return{count:d.count,deleteScheduled:d.deleteScheduled,preservePointerOnDelete:d.preservePointerOnDelete,ptr:d.ptr,ptrType:d.ptrType,smartPtr:d.smartPtr,smartPtrType:d.smartPtrType}}function td(d){function f(g){return g.$$.ptrType.registeredClass.name}De(f(d)+" instance already deleted")}var nd=!1;function __(d){}function yS(d){d.smartPtr?d.smartPtrType.rawDestructor(d.smartPtr):d.ptrType.registeredClass.rawDestructor(d.ptr)}function y_(d){d.count.value-=1;var f=d.count.value===0;f&&yS(d)}function v_(d,f,g){if(f===g)return d;if(g.baseClass===void 0)return null;var _=v_(d,f,g.baseClass);return _===null?null:g.downcast(_)}var w_={};function vS(){return Object.keys(qo).length}function wS(){var d=[];for(var f in qo)qo.hasOwnProperty(f)&&d.push(qo[f]);return d}var Wo=[];function rd(){for(;Wo.length;){var d=Wo.pop();d.$$.deleteScheduled=!1,d.delete()}}var zo=void 0;function ES(d){zo=d,Wo.length&&zo&&zo(rd)}function TS(){n.getInheritedInstanceCount=vS,n.getLiveInheritedInstances=wS,n.flushPendingDeletes=rd,n.setDelayFunction=ES}var qo={};function IS(d,f){for(f===void 0&&De("ptr should not be undefined");d.baseClass;)f=d.upcast(f),d=d.baseClass;return f}function bS(d,f){return f=IS(d,f),qo[f]}function Wc(d,f){(!f.ptrType||!f.ptr)&&ln("makeClassHandle requires ptr and ptrType");var g=!!f.smartPtrType,_=!!f.smartPtr;return g!==_&&ln("Both smartPtrType and smartPtr must be specified"),f.count={value:1},Ko(Object.create(d,{$$:{value:f}}))}function AS(d){var f=this.getPointee(d);if(!f)return this.destructor(d),null;var g=bS(this.registeredClass,f);if(g!==void 0){if(g.$$.count.value===0)return g.$$.ptr=f,g.$$.smartPtr=d,g.clone();var _=g.clone();return this.destructor(d),_}function T(){return this.isSmartPointer?Wc(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:f,smartPtrType:this,smartPtr:d}):Wc(this.registeredClass.instancePrototype,{ptrType:this,ptr:d})}var I=this.registeredClass.getActualType(f),R=w_[I];if(!R)return T.call(this);var S;this.isConst?S=R.constPointerType:S=R.pointerType;var D=v_(f,this.registeredClass,S.registeredClass);return D===null?T.call(this):this.isSmartPointer?Wc(S.registeredClass.instancePrototype,{ptrType:S,ptr:D,smartPtrType:this,smartPtr:d}):Wc(S.registeredClass.instancePrototype,{ptrType:S,ptr:D})}var Ko=function(d){return typeof FinalizationRegistry>"u"?(Ko=f=>f,d):(nd=new FinalizationRegistry(f=>{y_(f.$$)}),Ko=f=>{var g=f.$$,_=!!g.smartPtr;if(_){var T={$$:g};nd.register(f,T,f)}return f},__=f=>nd.unregister(f),Ko(d))};function CS(){if(this.$$.ptr||td(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var d=Ko(Object.create(Object.getPrototypeOf(this),{$$:{value:_S(this.$$)}}));return d.$$.count.value+=1,d.$$.deleteScheduled=!1,d}function RS(){this.$$.ptr||td(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&De("Object already scheduled for deletion"),__(this),y_(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function SS(){return!this.$$.ptr}function PS(){return this.$$.ptr||td(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&De("Object already scheduled for deletion"),Wo.push(this),Wo.length===1&&zo&&zo(rd),this.$$.deleteScheduled=!0,this}function kS(){ei.prototype.isAliasOf=gS,ei.prototype.clone=CS,ei.prototype.delete=RS,ei.prototype.isDeleted=SS,ei.prototype.deleteLater=PS}function ei(){}var NS=48,OS=57;function E_(d){if(d===void 0)return"_unknown";d=d.replace(/[^a-zA-Z0-9_]/g,"$");var f=d.charCodeAt(0);return f>=NS&&f<=OS?`_${d}`:d}function T_(d,f){return d=E_(d),{[d]:function(){return f.apply(this,arguments)}}[d]}function I_(d,f,g){if(d[f].overloadTable===void 0){var _=d[f];d[f]=function(){return d[f].overloadTable.hasOwnProperty(arguments.length)||De(`Function '${g}' called with an invalid number of arguments (${arguments.length}) - expects one of (${d[f].overloadTable})!`),d[f].overloadTable[arguments.length].apply(this,arguments)},d[f].overloadTable=[],d[f].overloadTable[_.argCount]=_}}function b_(d,f,g){n.hasOwnProperty(d)?((g===void 0||n[d].overloadTable!==void 0&&n[d].overloadTable[g]!==void 0)&&De(`Cannot register public name '${d}' twice`),I_(n,d,d),n.hasOwnProperty(g)&&De(`Cannot register multiple overloads of a function with the same number of arguments (${g})!`),n[d].overloadTable[g]=f):(n[d]=f,g!==void 0&&(n[d].numArguments=g))}function xS(d,f,g,_,T,I,R,S){this.name=d,this.constructor=f,this.instancePrototype=g,this.rawDestructor=_,this.baseClass=T,this.getActualType=I,this.upcast=R,this.downcast=S,this.pureVirtualFunctions=[]}function id(d,f,g){for(;f!==g;)f.upcast||De(`Expected null or instance of ${g.name}, got an instance of ${f.name}`),d=f.upcast(d),f=f.baseClass;return d}function DS(d,f){if(f===null)return this.isReference&&De(`null is not a valid ${this.name}`),0;f.$$||De(`Cannot pass "${ad(f)}" as a ${this.name}`),f.$$.ptr||De(`Cannot pass deleted object as a pointer of type ${this.name}`);var g=f.$$.ptrType.registeredClass,_=id(f.$$.ptr,g,this.registeredClass);return _}function MS(d,f){var g;if(f===null)return this.isReference&&De(`null is not a valid ${this.name}`),this.isSmartPointer?(g=this.rawConstructor(),d!==null&&d.push(this.rawDestructor,g),g):0;f.$$||De(`Cannot pass "${ad(f)}" as a ${this.name}`),f.$$.ptr||De(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&f.$$.ptrType.isConst&&De(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);var _=f.$$.ptrType.registeredClass;if(g=id(f.$$.ptr,_,this.registeredClass),this.isSmartPointer)switch(f.$$.smartPtr===void 0&&De("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:f.$$.smartPtrType===this?g=f.$$.smartPtr:De(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:g=f.$$.smartPtr;break;case 2:if(f.$$.smartPtrType===this)g=f.$$.smartPtr;else{var T=f.clone();g=this.rawShare(g,ti.toHandle(function(){T.delete()})),d!==null&&d.push(this.rawDestructor,g)}break;default:De("Unsupporting sharing policy")}return g}function LS(d,f){if(f===null)return this.isReference&&De(`null is not a valid ${this.name}`),0;f.$$||De(`Cannot pass "${ad(f)}" as a ${this.name}`),f.$$.ptr||De(`Cannot pass deleted object as a pointer of type ${this.name}`),f.$$.ptrType.isConst&&De(`Cannot convert argument of type ${f.$$.ptrType.name} to parameter type ${this.name}`);var g=f.$$.ptrType.registeredClass,_=id(f.$$.ptr,g,this.registeredClass);return _}function VS(d){return this.rawGetPointee&&(d=this.rawGetPointee(d)),d}function $S(d){this.rawDestructor&&this.rawDestructor(d)}function FS(d){d!==null&&d.delete()}function US(){Nr.prototype.getPointee=VS,Nr.prototype.destructor=$S,Nr.prototype.argPackAdvance=8,Nr.prototype.readValueFromPointer=xn,Nr.prototype.deleteObject=FS,Nr.prototype.fromWireType=AS}function Nr(d,f,g,_,T,I,R,S,D,F,Y){this.name=d,this.registeredClass=f,this.isReference=g,this.isConst=_,this.isSmartPointer=T,this.pointeeType=I,this.sharingPolicy=R,this.rawGetPointee=S,this.rawConstructor=D,this.rawShare=F,this.rawDestructor=Y,!T&&f.baseClass===void 0?_?(this.toWireType=DS,this.destructorFunction=null):(this.toWireType=LS,this.destructorFunction=null):this.toWireType=MS}function A_(d,f,g){n.hasOwnProperty(d)||ln("Replacing nonexistant public symbol"),n[d].overloadTable!==void 0&&g!==void 0?n[d].overloadTable[g]=f:(n[d]=f,n[d].argCount=g)}var BS=(d,f,g)=>{var _=n["dynCall_"+d];return g&&g.length?_.apply(null,[f].concat(g)):_.call(null,f)},zc=[],Me=d=>{var f=zc[d];return f||(d>=zc.length&&(zc.length=d+1),zc[d]=f=Re.get(d)),f},jS=(d,f,g)=>{if(d.includes("j"))return BS(d,f,g);var _=Me(f).apply(null,g);return _},HS=(d,f)=>{var g=[];return function(){return g.length=0,Object.assign(g,arguments),jS(d,f,g)}};function Wn(d,f){d=qt(d);function g(){return d.includes("j")?HS(d,f):Me(f)}var _=g();return typeof _!="function"&&De(`unknown function pointer with signature ${d}: ${f}`),_}function WS(d,f){var g=T_(f,function(_){this.name=f,this.message=_;var T=new Error(_).stack;T!==void 0&&(this.stack=this.toString()+`
`+T.replace(/^Error(:[^\n]*)?\n/,""))});return g.prototype=Object.create(d.prototype),g.prototype.constructor=g,g.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},g}var C_=void 0;function R_(d){var f=F_(d),g=qt(f);return Or(f),g}function qc(d,f){var g=[],_={};function T(I){if(!_[I]&&!In[I]){if($i[I]){$i[I].forEach(T);return}g.push(I),_[I]=!0}}throw f.forEach(T),new C_(`${d}: `+g.map(R_).join([", "]))}function zS(d,f,g,_,T,I,R,S,D,F,Y,se,ce){Y=qt(Y),I=Wn(T,I),S&&(S=Wn(R,S)),F&&(F=Wn(D,F)),ce=Wn(se,ce);var ke=E_(Y);b_(ke,function(){qc(`Cannot construct ${Y} due to unbound types`,[_])}),sr([d,f,g],_?[_]:[],function(nt){nt=nt[0];var Ct,rt;_?(Ct=nt.registeredClass,rt=Ct.instancePrototype):rt=ei.prototype;var Rt=T_(ke,function(){if(Object.getPrototypeOf(this)!==U)throw new ks("Use 'new' to construct "+Y);if(Z.constructor_body===void 0)throw new ks(Y+" has no accessible constructor");var Qc=Z.constructor_body[arguments.length];if(Qc===void 0)throw new ks(`Tried to invoke ctor of ${Y} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(Z.constructor_body).toString()}) parameters instead!`);return Qc.apply(this,arguments)}),U=Object.create(rt,{constructor:{value:Rt}});Rt.prototype=U;var Z=new xS(Y,Rt,U,ce,Ct,I,S,F);Z.baseClass&&(Z.baseClass.__derivedClasses===void 0&&(Z.baseClass.__derivedClasses=[]),Z.baseClass.__derivedClasses.push(Z));var dt=new Nr(Y,Z,!0,!1,!1),yt=new Nr(Y+"*",Z,!1,!1,!1),Fi=new Nr(Y+" const*",Z,!1,!0,!1);return w_[d]={pointerType:yt,constPointerType:Fi},A_(ke,Rt),[dt,yt,Fi]})}function sd(d,f){for(var g=[],_=0;_<d;_++)g.push(W[f+_*4>>2]);return g}function od(d,f,g,_,T,I){var R=f.length;R<2&&De("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var S=f[1]!==null&&g!==null,D=!1,F=1;F<f.length;++F)if(f[F]!==null&&f[F].destructorFunction===void 0){D=!0;break}var Y=f[0].name!=="void",se=R-2,ce=new Array(se),ke=[],nt=[];return function(){arguments.length!==se&&De(`function ${d} called with ${arguments.length} arguments, expected ${se} args!`),nt.length=0;var Ct;ke.length=S?2:1,ke[0]=T,S&&(Ct=f[1].toWireType(nt,this),ke[1]=Ct);for(var rt=0;rt<se;++rt)ce[rt]=f[rt+2].toWireType(nt,arguments[rt]),ke.push(ce[rt]);var Rt=_.apply(null,ke);function U(Z){if(D)pn(nt);else for(var dt=S?1:2;dt<f.length;dt++){var yt=dt===1?Ct:ce[dt-2];f[dt].destructorFunction!==null&&f[dt].destructorFunction(yt)}if(Y)return f[0].fromWireType(Z)}return U(Rt)}}function qS(d,f,g,_,T,I){var R=sd(f,g);T=Wn(_,T),sr([],[d],function(S){S=S[0];var D=`constructor ${S.name}`;if(S.registeredClass.constructor_body===void 0&&(S.registeredClass.constructor_body=[]),S.registeredClass.constructor_body[f-1]!==void 0)throw new ks(`Cannot register multiple constructors with identical number of parameters (${f-1}) for class '${S.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return S.registeredClass.constructor_body[f-1]=()=>{qc(`Cannot construct ${S.name} due to unbound types`,R)},sr([],R,function(F){return F.splice(1,0,null),S.registeredClass.constructor_body[f-1]=od(D,F,null,T,I),[]}),[]})}function KS(d,f,g,_,T,I,R,S,D){var F=sd(g,_);f=qt(f),I=Wn(T,I),sr([],[d],function(Y){Y=Y[0];var se=`${Y.name}.${f}`;f.startsWith("@@")&&(f=Symbol[f.substring(2)]),S&&Y.registeredClass.pureVirtualFunctions.push(f);function ce(){qc(`Cannot call ${se} due to unbound types`,F)}var ke=Y.registeredClass.instancePrototype,nt=ke[f];return nt===void 0||nt.overloadTable===void 0&&nt.className!==Y.name&&nt.argCount===g-2?(ce.argCount=g-2,ce.className=Y.name,ke[f]=ce):(I_(ke,f,se),ke[f].overloadTable[g-2]=ce),sr([],F,function(Ct){var rt=od(se,Ct,Y,I,R);return ke[f].overloadTable===void 0?(rt.argCount=g-2,ke[f]=rt):ke[f].overloadTable[g-2]=rt,[]}),[]})}function GS(){Object.assign(S_.prototype,{get(d){return this.allocated[d]},has(d){return this.allocated[d]!==void 0},allocate(d){var f=this.freelist.pop()||this.allocated.length;return this.allocated[f]=d,f},free(d){this.allocated[d]=void 0,this.freelist.push(d)}})}function S_(){this.allocated=[void 0],this.freelist=[]}var Dn=new S_;function P_(d){d>=Dn.reserved&&--Dn.get(d).refcount===0&&Dn.free(d)}function QS(){for(var d=0,f=Dn.reserved;f<Dn.allocated.length;++f)Dn.allocated[f]!==void 0&&++d;return d}function YS(){Dn.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),Dn.reserved=Dn.allocated.length,n.count_emval_handles=QS}var ti={toValue:d=>(d||De("Cannot use deleted val. handle = "+d),Dn.get(d).value),toHandle:d=>{switch(d){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Dn.allocate({refcount:1,value:d})}}};function JS(d,f){f=qt(f),kr(d,{name:f,fromWireType:function(g){var _=ti.toValue(g);return P_(g),_},toWireType:function(g,_){return ti.toHandle(_)},argPackAdvance:8,readValueFromPointer:xn,destructorFunction:null})}function ad(d){if(d===null)return"null";var f=typeof d;return f==="object"||f==="array"||f==="function"?d.toString():""+d}function XS(d,f){switch(f){case 2:return function(g){return this.fromWireType(ae[g>>2])};case 3:return function(g){return this.fromWireType(ge[g>>3])};default:throw new TypeError("Unknown float type: "+d)}}function ZS(d,f,g){var _=ed(g);f=qt(f),kr(d,{name:f,fromWireType:function(T){return T},toWireType:function(T,I){return I},argPackAdvance:8,readValueFromPointer:XS(f,_),destructorFunction:null})}function eP(d,f,g,_,T,I,R){var S=sd(f,g);d=qt(d),T=Wn(_,T),b_(d,function(){qc(`Cannot call ${d} due to unbound types`,S)},f-1),sr([],S,function(D){var F=[D[0],null].concat(D.slice(1));return A_(d,od(d,F,null,T,I),f-1),[]})}function tP(d,f,g){switch(f){case 0:return g?function(_){return A[_]}:function(_){return k[_]};case 1:return g?function(_){return N[_>>1]}:function(_){return P[_>>1]};case 2:return g?function(_){return j[_>>2]}:function(_){return W[_>>2]};default:throw new TypeError("Unknown integer type: "+d)}}function nP(d,f,g,_,T){f=qt(f);var I=ed(g),R=se=>se;if(_===0){var S=32-8*g;R=se=>se<<S>>>S}var D=f.includes("unsigned"),F=(se,ce)=>{},Y;D?Y=function(se,ce){return F(ce,this.name),ce>>>0}:Y=function(se,ce){return F(ce,this.name),ce},kr(d,{name:f,fromWireType:R,toWireType:Y,argPackAdvance:8,readValueFromPointer:tP(f,I,_!==0),destructorFunction:null})}function rP(d,f,g){var _=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],T=_[f];function I(R){R=R>>2;var S=W,D=S[R],F=S[R+1];return new T(S.buffer,F,D)}g=qt(g),kr(d,{name:g,fromWireType:I,argPackAdvance:8,readValueFromPointer:I},{ignoreDuplicateRegistrations:!0})}var k_=(d,f,g,_)=>{if(!(_>0))return 0;for(var T=g,I=g+_-1,R=0;R<d.length;++R){var S=d.charCodeAt(R);if(S>=55296&&S<=57343){var D=d.charCodeAt(++R);S=65536+((S&1023)<<10)|D&1023}if(S<=127){if(g>=I)break;f[g++]=S}else if(S<=2047){if(g+1>=I)break;f[g++]=192|S>>6,f[g++]=128|S&63}else if(S<=65535){if(g+2>=I)break;f[g++]=224|S>>12,f[g++]=128|S>>6&63,f[g++]=128|S&63}else{if(g+3>=I)break;f[g++]=240|S>>18,f[g++]=128|S>>12&63,f[g++]=128|S>>6&63,f[g++]=128|S&63}}return f[g]=0,g-T},iP=(d,f,g)=>k_(d,k,f,g),N_=d=>{for(var f=0,g=0;g<d.length;++g){var _=d.charCodeAt(g);_<=127?f++:_<=2047?f+=2:_>=55296&&_<=57343?(f+=4,++g):f+=3}return f},O_=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,sP=(d,f,g)=>{for(var _=f+g,T=f;d[T]&&!(T>=_);)++T;if(T-f>16&&d.buffer&&O_)return O_.decode(d.subarray(f,T));for(var I="";f<T;){var R=d[f++];if(!(R&128)){I+=String.fromCharCode(R);continue}var S=d[f++]&63;if((R&224)==192){I+=String.fromCharCode((R&31)<<6|S);continue}var D=d[f++]&63;if((R&240)==224?R=(R&15)<<12|S<<6|D:R=(R&7)<<18|S<<12|D<<6|d[f++]&63,R<65536)I+=String.fromCharCode(R);else{var F=R-65536;I+=String.fromCharCode(55296|F>>10,56320|F&1023)}}return I},cd=(d,f)=>d?sP(k,d,f):"";function oP(d,f){f=qt(f);var g=f==="std::string";kr(d,{name:f,fromWireType:function(_){var T=W[_>>2],I=_+4,R;if(g)for(var S=I,D=0;D<=T;++D){var F=I+D;if(D==T||k[F]==0){var Y=F-S,se=cd(S,Y);R===void 0?R=se:(R+=String.fromCharCode(0),R+=se),S=F+1}}else{for(var ce=new Array(T),D=0;D<T;++D)ce[D]=String.fromCharCode(k[I+D]);R=ce.join("")}return Or(_),R},toWireType:function(_,T){T instanceof ArrayBuffer&&(T=new Uint8Array(T));var I,R=typeof T=="string";R||T instanceof Uint8Array||T instanceof Uint8ClampedArray||T instanceof Int8Array||De("Cannot pass non-string to std::string"),g&&R?I=N_(T):I=T.length;var S=ud(4+I+1),D=S+4;if(W[S>>2]=I,g&&R)iP(T,D,I+1);else if(R)for(var F=0;F<I;++F){var Y=T.charCodeAt(F);Y>255&&(Or(D),De("String has UTF-16 code units that do not fit in 8 bits")),k[D+F]=Y}else for(var F=0;F<I;++F)k[D+F]=T[F];return _!==null&&_.push(Or,S),S},argPackAdvance:8,readValueFromPointer:xn,destructorFunction:function(_){Or(_)}})}var x_=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,aP=(d,f)=>{for(var g=d,_=g>>1,T=_+f/2;!(_>=T)&&P[_];)++_;if(g=_<<1,g-d>32&&x_)return x_.decode(k.subarray(d,g));for(var I="",R=0;!(R>=f/2);++R){var S=N[d+R*2>>1];if(S==0)break;I+=String.fromCharCode(S)}return I},cP=(d,f,g)=>{if(g===void 0&&(g=2147483647),g<2)return 0;g-=2;for(var _=f,T=g<d.length*2?g/2:d.length,I=0;I<T;++I){var R=d.charCodeAt(I);N[f>>1]=R,f+=2}return N[f>>1]=0,f-_},lP=d=>d.length*2,uP=(d,f)=>{for(var g=0,_="";!(g>=f/4);){var T=j[d+g*4>>2];if(T==0)break;if(++g,T>=65536){var I=T-65536;_+=String.fromCharCode(55296|I>>10,56320|I&1023)}else _+=String.fromCharCode(T)}return _},hP=(d,f,g)=>{if(g===void 0&&(g=2147483647),g<4)return 0;for(var _=f,T=_+g-4,I=0;I<d.length;++I){var R=d.charCodeAt(I);if(R>=55296&&R<=57343){var S=d.charCodeAt(++I);R=65536+((R&1023)<<10)|S&1023}if(j[f>>2]=R,f+=4,f+4>T)break}return j[f>>2]=0,f-_},dP=d=>{for(var f=0,g=0;g<d.length;++g){var _=d.charCodeAt(g);_>=55296&&_<=57343&&++g,f+=4}return f},fP=function(d,f,g){g=qt(g);var _,T,I,R,S;f===2?(_=aP,T=cP,R=lP,I=()=>P,S=1):f===4&&(_=uP,T=hP,R=dP,I=()=>W,S=2),kr(d,{name:g,fromWireType:function(D){for(var F=W[D>>2],Y=I(),se,ce=D+4,ke=0;ke<=F;++ke){var nt=D+4+ke*f;if(ke==F||Y[nt>>S]==0){var Ct=nt-ce,rt=_(ce,Ct);se===void 0?se=rt:(se+=String.fromCharCode(0),se+=rt),ce=nt+f}}return Or(D),se},toWireType:function(D,F){typeof F!="string"&&De(`Cannot pass non-string to C++ string type ${g}`);var Y=R(F),se=ud(4+Y+f);return W[se>>2]=Y>>S,T(F,se+4,Y+f),D!==null&&D.push(Or,se),se},argPackAdvance:8,readValueFromPointer:xn,destructorFunction:function(D){Or(D)}})};function pP(d,f,g,_,T,I){Qe[d]={name:qt(f),rawConstructor:Wn(g,_),rawDestructor:Wn(T,I),fields:[]}}function mP(d,f,g,_,T,I,R,S,D,F){Qe[d].fields.push({fieldName:qt(f),getterReturnType:g,getter:Wn(_,T),getterContext:I,setterArgumentType:R,setter:Wn(S,D),setterContext:F})}function gP(d,f){f=qt(f),kr(d,{isVoid:!0,name:f,argPackAdvance:0,fromWireType:function(){},toWireType:function(g,_){}})}var _P={};function yP(d){var f=_P[d];return f===void 0?qt(d):f}function D_(){if(typeof globalThis=="object")return globalThis;function d(f){f.$$$embind_global$$$=f;var g=typeof $$$embind_global$$$=="object"&&f.$$$embind_global$$$==f;return g||delete f.$$$embind_global$$$,g}if(typeof $$$embind_global$$$=="object"||(typeof global=="object"&&d(global)?$$$embind_global$$$=global:typeof self=="object"&&d(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function vP(d){return d===0?ti.toHandle(D_()):(d=yP(d),ti.toHandle(D_()[d]))}function wP(d){d>4&&(Dn.get(d).refcount+=1)}function M_(d,f){var g=In[d];return g===void 0&&De(f+" has unknown type "+R_(d)),g}function EP(d){var f=new Array(d+1);return function(g,_,T){f[0]=g;for(var I=0;I<d;++I){var R=M_(W[_+I*4>>2],"parameter "+I);f[I+1]=R.readValueFromPointer(T),T+=R.argPackAdvance}var S=new(g.bind.apply(g,f));return ti.toHandle(S)}}var L_={};function TP(d,f,g,_){d=ti.toValue(d);var T=L_[f];return T||(T=EP(f),L_[f]=T),T(d,g,_)}function IP(d,f){d=M_(d,"_emval_take_value");var g=d.readValueFromPointer(f);return ti.toHandle(g)}var bP=()=>{Hn("")},AP=(d,f,g)=>k.copyWithin(d,f,f+g),CP=()=>2147483648,RP=d=>{var f=y.buffer,g=d-f.byteLength+65535>>>16;try{return y.grow(g),ze(),1}catch{}},SP=d=>{var f=k.length;d>>>=0;var g=CP();if(d>g)return!1;for(var _=(D,F)=>D+(F-D%F)%F,T=1;T<=4;T*=2){var I=f*(1+.2/T);I=Math.min(I,d+100663296);var R=Math.min(g,_(Math.max(d,I),65536)),S=RP(R);if(S)return!0}return!1},ld={},PP=()=>o||"./this.program",Go=()=>{if(!Go.strings){var d=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:d,_:PP()};for(var g in ld)ld[g]===void 0?delete f[g]:f[g]=ld[g];var _=[];for(var g in f)_.push(`${g}=${f[g]}`);Go.strings=_}return Go.strings},kP=(d,f)=>{for(var g=0;g<d.length;++g)A[f++>>0]=d.charCodeAt(g);A[f>>0]=0},NP=(d,f)=>{var g=0;return Go().forEach(function(_,T){var I=f+g;W[d+T*4>>2]=I,kP(_,I),g+=_.length+1}),0},OP=(d,f)=>{var g=Go();W[d>>2]=g.length;var _=0;return g.forEach(function(T){_+=T.length+1}),W[f>>2]=_,0};function xP(d){return d}var Kc=d=>d%4===0&&(d%100!==0||d%400===0),DP=(d,f)=>{for(var g=0,_=0;_<=f;g+=d[_++]);return g},V_=[31,29,31,30,31,30,31,31,30,31,30,31],$_=[31,28,31,30,31,30,31,31,30,31,30,31],MP=(d,f)=>{for(var g=new Date(d.getTime());f>0;){var _=Kc(g.getFullYear()),T=g.getMonth(),I=(_?V_:$_)[T];if(f>I-g.getDate())f-=I-g.getDate()+1,g.setDate(1),T<11?g.setMonth(T+1):(g.setMonth(0),g.setFullYear(g.getFullYear()+1));else return g.setDate(g.getDate()+f),g}return g};function LP(d,f,g){var _=g>0?g:N_(d)+1,T=new Array(_),I=k_(d,T,0,T.length);return f&&(T.length=I),T}var VP=(d,f)=>{A.set(d,f)},$P=(d,f,g,_)=>{var T=j[_+40>>2],I={tm_sec:j[_>>2],tm_min:j[_+4>>2],tm_hour:j[_+8>>2],tm_mday:j[_+12>>2],tm_mon:j[_+16>>2],tm_year:j[_+20>>2],tm_wday:j[_+24>>2],tm_yday:j[_+28>>2],tm_isdst:j[_+32>>2],tm_gmtoff:j[_+36>>2],tm_zone:T?cd(T):""},R=cd(g),S={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var D in S)R=R.replace(new RegExp(D,"g"),S[D]);var F=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Y=["January","February","March","April","May","June","July","August","September","October","November","December"];function se(U,Z,dt){for(var yt=typeof U=="number"?U.toString():U||"";yt.length<Z;)yt=dt[0]+yt;return yt}function ce(U,Z){return se(U,Z,"0")}function ke(U,Z){function dt(Fi){return Fi<0?-1:Fi>0?1:0}var yt;return(yt=dt(U.getFullYear()-Z.getFullYear()))===0&&(yt=dt(U.getMonth()-Z.getMonth()))===0&&(yt=dt(U.getDate()-Z.getDate())),yt}function nt(U){switch(U.getDay()){case 0:return new Date(U.getFullYear()-1,11,29);case 1:return U;case 2:return new Date(U.getFullYear(),0,3);case 3:return new Date(U.getFullYear(),0,2);case 4:return new Date(U.getFullYear(),0,1);case 5:return new Date(U.getFullYear()-1,11,31);case 6:return new Date(U.getFullYear()-1,11,30)}}function Ct(U){var Z=MP(new Date(U.tm_year+1900,0,1),U.tm_yday),dt=new Date(Z.getFullYear(),0,4),yt=new Date(Z.getFullYear()+1,0,4),Fi=nt(dt),Qc=nt(yt);return ke(Fi,Z)<=0?ke(Qc,Z)<=0?Z.getFullYear()+1:Z.getFullYear():Z.getFullYear()-1}var rt={"%a":U=>F[U.tm_wday].substring(0,3),"%A":U=>F[U.tm_wday],"%b":U=>Y[U.tm_mon].substring(0,3),"%B":U=>Y[U.tm_mon],"%C":U=>{var Z=U.tm_year+1900;return ce(Z/100|0,2)},"%d":U=>ce(U.tm_mday,2),"%e":U=>se(U.tm_mday,2," "),"%g":U=>Ct(U).toString().substring(2),"%G":U=>Ct(U),"%H":U=>ce(U.tm_hour,2),"%I":U=>{var Z=U.tm_hour;return Z==0?Z=12:Z>12&&(Z-=12),ce(Z,2)},"%j":U=>ce(U.tm_mday+DP(Kc(U.tm_year+1900)?V_:$_,U.tm_mon-1),3),"%m":U=>ce(U.tm_mon+1,2),"%M":U=>ce(U.tm_min,2),"%n":()=>`
`,"%p":U=>U.tm_hour>=0&&U.tm_hour<12?"AM":"PM","%S":U=>ce(U.tm_sec,2),"%t":()=>"	","%u":U=>U.tm_wday||7,"%U":U=>{var Z=U.tm_yday+7-U.tm_wday;return ce(Math.floor(Z/7),2)},"%V":U=>{var Z=Math.floor((U.tm_yday+7-(U.tm_wday+6)%7)/7);if((U.tm_wday+371-U.tm_yday-2)%7<=2&&Z++,Z){if(Z==53){var dt=(U.tm_wday+371-U.tm_yday)%7;dt!=4&&(dt!=3||!Kc(U.tm_year))&&(Z=1)}}else{Z=52;var yt=(U.tm_wday+7-U.tm_yday-1)%7;(yt==4||yt==5&&Kc(U.tm_year%400-1))&&Z++}return ce(Z,2)},"%w":U=>U.tm_wday,"%W":U=>{var Z=U.tm_yday+7-(U.tm_wday+6)%7;return ce(Math.floor(Z/7),2)},"%y":U=>(U.tm_year+1900).toString().substring(2),"%Y":U=>U.tm_year+1900,"%z":U=>{var Z=U.tm_gmtoff,dt=Z>=0;return Z=Math.abs(Z)/60,Z=Z/60*100+Z%60,(dt?"+":"-")+("0000"+Z).slice(-4)},"%Z":U=>U.tm_zone,"%%":()=>"%"};R=R.replace(/%%/g,"\0\0");for(var D in rt)R.includes(D)&&(R=R.replace(new RegExp(D,"g"),rt[D](I)));R=R.replace(/\0\0/g,"%");var Rt=LP(R,!1);return Rt.length>f?0:(VP(Rt,d),Rt.length-1)},FP=(d,f,g,_,T)=>$P(d,f,g,_);zt=n.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},fS(),ks=n.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},kS(),TS(),US(),C_=n.UnboundTypeError=WS(Error,"UnboundTypeError"),GS(),YS();var UP={q:M,u:Q,a:ne,h:X,l:re,I:he,P:ve,n:qe,ba:Ue,d:z,oa:hS,Y:dS,fa:mS,na:zS,ma:qS,D:KS,ea:JS,W:ZS,J:eP,w:nP,s:rP,V:oP,L:fP,Q:pP,pa:mP,ga:gP,U:P_,la:vP,R:wP,ia:TP,ka:IP,K:bP,da:AP,ca:SP,$:NP,aa:OP,H:s1,T:p1,B:a1,p:n1,b:BP,C:i1,ha:l1,c:qP,j:GP,i:WP,x:o1,O:r1,v:e1,G:h1,N:d1,A:c1,F:m1,Z:_1,X:y1,k:KP,f:zP,e:HP,g:jP,M:f1,m:ZP,o:QP,S:YP,t:XP,ja:t1,y:u1,r:JP,E:g1,z:xP,_:FP};w();var Or=n._free=d=>(Or=n._free=v.sa)(d),ud=n._malloc=d=>(ud=n._malloc=v.ta)(d),F_=d=>(F_=v.va)(d);n.__embind_initialize_bindings=()=>(n.__embind_initialize_bindings=v.wa)();var Ie=(d,f)=>(Ie=v.xa)(d,f),Qo=d=>(Qo=v.ya)(d),Se=()=>(Se=v.za)(),Pe=d=>(Pe=v.Aa)(d),U_=d=>(U_=v.Ba)(d),B_=d=>(B_=v.Ca)(d),j_=(d,f,g)=>(j_=v.Da)(d,f,g),H_=d=>(H_=v.Ea)(d);n.dynCall_viijii=(d,f,g,_,T,I,R)=>(n.dynCall_viijii=v.Fa)(d,f,g,_,T,I,R);var W_=n.dynCall_jiii=(d,f,g,_)=>(W_=n.dynCall_jiii=v.Ga)(d,f,g,_),z_=n.dynCall_jiiii=(d,f,g,_,T)=>(z_=n.dynCall_jiiii=v.Ha)(d,f,g,_,T);n.dynCall_iiiiij=(d,f,g,_,T,I,R)=>(n.dynCall_iiiiij=v.Ia)(d,f,g,_,T,I,R),n.dynCall_iiiiijj=(d,f,g,_,T,I,R,S,D)=>(n.dynCall_iiiiijj=v.Ja)(d,f,g,_,T,I,R,S,D),n.dynCall_iiiiiijj=(d,f,g,_,T,I,R,S,D,F)=>(n.dynCall_iiiiiijj=v.Ka)(d,f,g,_,T,I,R,S,D,F);function BP(d,f){var g=Se();try{return Me(d)(f)}catch(_){if(Pe(g),_!==_+0)throw _;Ie(1,0)}}function jP(d,f,g,_){var T=Se();try{Me(d)(f,g,_)}catch(I){if(Pe(T),I!==I+0)throw I;Ie(1,0)}}function HP(d,f,g){var _=Se();try{Me(d)(f,g)}catch(T){if(Pe(_),T!==T+0)throw T;Ie(1,0)}}function WP(d,f,g,_,T){var I=Se();try{return Me(d)(f,g,_,T)}catch(R){if(Pe(I),R!==R+0)throw R;Ie(1,0)}}function zP(d,f){var g=Se();try{Me(d)(f)}catch(_){if(Pe(g),_!==_+0)throw _;Ie(1,0)}}function qP(d,f,g){var _=Se();try{return Me(d)(f,g)}catch(T){if(Pe(_),T!==T+0)throw T;Ie(1,0)}}function KP(d){var f=Se();try{Me(d)()}catch(g){if(Pe(f),g!==g+0)throw g;Ie(1,0)}}function GP(d,f,g,_){var T=Se();try{return Me(d)(f,g,_)}catch(I){if(Pe(T),I!==I+0)throw I;Ie(1,0)}}function QP(d,f,g,_,T,I){var R=Se();try{Me(d)(f,g,_,T,I)}catch(S){if(Pe(R),S!==S+0)throw S;Ie(1,0)}}function YP(d,f,g,_,T,I,R){var S=Se();try{Me(d)(f,g,_,T,I,R)}catch(D){if(Pe(S),D!==D+0)throw D;Ie(1,0)}}function JP(d,f,g,_,T,I,R,S,D,F,Y){var se=Se();try{Me(d)(f,g,_,T,I,R,S,D,F,Y)}catch(ce){if(Pe(se),ce!==ce+0)throw ce;Ie(1,0)}}function XP(d,f,g,_,T,I,R,S){var D=Se();try{Me(d)(f,g,_,T,I,R,S)}catch(F){if(Pe(D),F!==F+0)throw F;Ie(1,0)}}function ZP(d,f,g,_,T){var I=Se();try{Me(d)(f,g,_,T)}catch(R){if(Pe(I),R!==R+0)throw R;Ie(1,0)}}function e1(d,f,g,_,T,I,R){var S=Se();try{return Me(d)(f,g,_,T,I,R)}catch(D){if(Pe(S),D!==D+0)throw D;Ie(1,0)}}function t1(d,f,g,_,T,I,R,S,D){var F=Se();try{Me(d)(f,g,_,T,I,R,S,D)}catch(Y){if(Pe(F),Y!==Y+0)throw Y;Ie(1,0)}}function n1(d){var f=Se();try{return Me(d)()}catch(g){if(Pe(f),g!==g+0)throw g;Ie(1,0)}}function r1(d,f,g,_,T,I,R){var S=Se();try{return Me(d)(f,g,_,T,I,R)}catch(D){if(Pe(S),D!==D+0)throw D;Ie(1,0)}}function i1(d,f,g,_){var T=Se();try{return Me(d)(f,g,_)}catch(I){if(Pe(T),I!==I+0)throw I;Ie(1,0)}}function s1(d,f,g,_){var T=Se();try{return Me(d)(f,g,_)}catch(I){if(Pe(T),I!==I+0)throw I;Ie(1,0)}}function o1(d,f,g,_,T,I){var R=Se();try{return Me(d)(f,g,_,T,I)}catch(S){if(Pe(R),S!==S+0)throw S;Ie(1,0)}}function a1(d,f,g,_,T,I){var R=Se();try{return Me(d)(f,g,_,T,I)}catch(S){if(Pe(R),S!==S+0)throw S;Ie(1,0)}}function c1(d,f,g,_,T,I,R,S,D,F){var Y=Se();try{return Me(d)(f,g,_,T,I,R,S,D,F)}catch(se){if(Pe(Y),se!==se+0)throw se;Ie(1,0)}}function l1(d,f,g){var _=Se();try{return Me(d)(f,g)}catch(T){if(Pe(_),T!==T+0)throw T;Ie(1,0)}}function u1(d,f,g,_,T,I,R,S,D,F){var Y=Se();try{Me(d)(f,g,_,T,I,R,S,D,F)}catch(se){if(Pe(Y),se!==se+0)throw se;Ie(1,0)}}function h1(d,f,g,_,T,I,R,S){var D=Se();try{return Me(d)(f,g,_,T,I,R,S)}catch(F){if(Pe(D),F!==F+0)throw F;Ie(1,0)}}function d1(d,f,g,_,T,I,R,S,D){var F=Se();try{return Me(d)(f,g,_,T,I,R,S,D)}catch(Y){if(Pe(F),Y!==Y+0)throw Y;Ie(1,0)}}function f1(d,f,g,_,T,I,R){var S=Se();try{Me(d)(f,g,_,T,I,R)}catch(D){if(Pe(S),D!==D+0)throw D;Ie(1,0)}}function p1(d,f,g,_){var T=Se();try{return Me(d)(f,g,_)}catch(I){if(Pe(T),I!==I+0)throw I;Ie(1,0)}}function m1(d,f,g,_,T,I,R,S,D,F,Y,se){var ce=Se();try{return Me(d)(f,g,_,T,I,R,S,D,F,Y,se)}catch(ke){if(Pe(ce),ke!==ke+0)throw ke;Ie(1,0)}}function g1(d,f,g,_,T,I,R,S,D,F,Y,se,ce,ke,nt,Ct){var rt=Se();try{Me(d)(f,g,_,T,I,R,S,D,F,Y,se,ce,ke,nt,Ct)}catch(Rt){if(Pe(rt),Rt!==Rt+0)throw Rt;Ie(1,0)}}function _1(d,f,g,_){var T=Se();try{return W_(d,f,g,_)}catch(I){if(Pe(T),I!==I+0)throw I;Ie(1,0)}}function y1(d,f,g,_,T){var I=Se();try{return z_(d,f,g,_,T)}catch(R){if(Pe(I),R!==R+0)throw R;Ie(1,0)}}var Gc;bt=function d(){Gc||q_(),Gc||(bt=d)};function q_(){if(It>0||(Sr(),It>0))return;function d(){Gc||(Gc=!0,n.calledRun=!0,!b&&(cn(),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),je()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),d()},1)):d()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return q_(),e.ready}})();function z3(t){return OR(xR,t)}async function q3(t,{tryHarder:e=mi.tryHarder,formats:n=mi.formats,maxSymbols:r=mi.maxSymbols}=mi){return j3(t,{tryHarder:e,formats:n,maxSymbols:r},xR)}const DR=new Map([["aztec","Aztec"],["code_128","Code128"],["code_39","Code39"],["code_93","Code93"],["codabar","Codabar"],["data_matrix","DataMatrix"],["ean_13","EAN-13"],["ean_8","EAN-8"],["itf","ITF"],["pdf417","PDF417"],["qr_code","QRCode"],["upc_a","UPC-A"],["upc_e","UPC-E"]]);function K3(t){for(const[e,n]of DR)if(t===n)return e;return"unknown"}var Ml;class Yh{constructor(e={}){A3(this,Ml,void 0);var n;try{const r=(n=e==null?void 0:e.formats)==null?void 0:n.filter(i=>i!=="unknown");if((r==null?void 0:r.length)===0)throw new TypeError("Hint option provided, but is empty.");r==null||r.forEach(i=>{if(!_0.includes(i))throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${i}' is not a valid enum value of type BarcodeFormat.`)}),z3().catch(()=>{}),C3(this,Ml,r??[])}catch(r){throw y0(r,"Failed to construct 'BarcodeDetector'")}}static async getSupportedFormats(){return _0.filter(e=>e!=="unknown")}async detect(e){try{const n=await D3(e);if(n===null)return[];let r;try{r=await q3(n,{tryHarder:!0,formats:b3(this,Ml).map(i=>DR.get(i))})}catch{throw new DOMException("Barcode detection service unavailable. Use 'setZXingModuleOverrides' in offline or strict CSP environments.","NotSupportedError")}return r.map(i=>{const{topLeft:{x:s,y:o},topRight:{x:a,y:c},bottomLeft:{x:l,y:u},bottomRight:{x:h,y:p}}=i.position,m=Math.min(s,a,l,h),y=Math.min(o,c,u,p),v=Math.max(s,a,l,h),b=Math.max(o,c,u,p);return{boundingBox:new DOMRectReadOnly(m,y,v-m,b-y),rawValue:new TextDecoder().decode(i.bytes),format:K3(i.format),cornerPoints:[{x:s,y:o},{x:a,y:c},{x:h,y:p},{x:l,y:u}]}})}catch(n){throw y0(n,"Failed to execute 'detect' on 'BarcodeDetector'")}}}Ml=new WeakMap;const MR=(t,e,n="error")=>{let r,i;const s=new Promise((o,a)=>{r=o,i=a,t.addEventListener(e,r),t.addEventListener(n,i)});return s.finally(()=>{t.removeEventListener(e,r),t.removeEventListener(n,i)}),s},T0=t=>new Promise(e=>setTimeout(e,t));class G3 extends Error{constructor(){super("can't process cross-origin image"),this.name="DropImageFetchError"}}class LR extends Error{constructor(){super("this browser has no Stream API support"),this.name="StreamApiNotSupportedError"}}class Q3 extends Error{constructor(){super("camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP."),this.name="InsecureContextError"}}class Y3 extends Error{constructor(){super("Loading camera stream timed out after 3 seconds. If you are on iOS in PWA mode, this is a known issue (see https://github.com/gruhn/vue-qrcode-reader/issues/298)"),this.name="StreamLoadTimeoutError"}}let Vp;const J3=t=>{Vp=new Yh({formats:t})},X3=async(t,{detectHandler:e,locateHandler:n,minDelay:r,formats:i})=>{Vp=new Yh({formats:i});const s=o=>async a=>{if(t.readyState>1){const{lastScanned:c,contentBefore:l,lastScanHadContent:u}=o;if(a-c<r)window.requestAnimationFrame(s(o));else{const h=await Vp.detect(t),p=h.some(v=>!l.includes(v.rawValue));p&&e(h);const m=h.length>0;m&&n(h),!m&&u&&n(h);const y={lastScanned:a,lastScanHadContent:m,contentBefore:p?h.map(v=>v.rawValue):l};window.requestAnimationFrame(s(y))}}};s({lastScanned:performance.now(),contentBefore:[],lastScanHadContent:!1})(performance.now())},Z3=async t=>{if(t.startsWith("http")&&t.includes(location.host)===!1)throw new G3;const e=document.createElement("img");return e.src=t,await MR(e,"load"),e},VR=async(t,e=["qr_code"])=>await new Yh({formats:e}).detect(t),eH=async(t,e=["qr_code"])=>{const n=new Yh({formats:e}),r=await Z3(t);return await n.detect(r)};var $R={},En={};Object.defineProperty(En,"__esModule",{value:!0});En.compactObject=BR;En.deprecated=lH;var tH=En.detectBrowser=uH;En.disableLog=oH;En.disableWarnings=aH;En.extractVersion=Ll;En.filterStats=hH;En.log=cH;En.walkStats=Mu;En.wrapPeerConnectionEvent=sH;function nH(t,e,n){return e=rH(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rH(t){var e=iH(t,"string");return Pi(e)==="symbol"?e:String(e)}function iH(t,e){if(Pi(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Pi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Pi(t){"@babel/helpers - typeof";return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pi(t)}var FR=!0,UR=!0;function Ll(t,e,n){var r=t.match(e);return r&&r.length>=n&&parseInt(r[n],10)}function sH(t,e,n){if(t.RTCPeerConnection){var r=t.RTCPeerConnection.prototype,i=r.addEventListener;r.addEventListener=function(o,a){if(o!==e)return i.apply(this,arguments);var c=function(l){var u=n(l);u&&(a.handleEvent?a.handleEvent(u):a(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,c),i.apply(this,[o,c])};var s=r.removeEventListener;r.removeEventListener=function(o,a){if(o!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(a))return s.apply(this,arguments);var c=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[o,c])},Object.defineProperty(r,"on"+e,{get:function(){return this["_on"+e]},set:function(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}}function oH(t){return typeof t!="boolean"?new Error("Argument type: "+Pi(t)+". Please use a boolean."):(FR=t,t?"adapter.js logging disabled":"adapter.js logging enabled")}function aH(t){return typeof t!="boolean"?new Error("Argument type: "+Pi(t)+". Please use a boolean."):(UR=!t,"adapter.js deprecation warnings "+(t?"disabled":"enabled"))}function cH(){if((typeof window>"u"?"undefined":Pi(window))==="object"){if(FR)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function lH(t,e){UR&&console.warn(t+" is deprecated, please use "+e+" instead.")}function uH(t){var e={browser:null,version:null};if(typeof t>"u"||!t.navigator)return e.browser="Not a browser.",e;var n=t.navigator;if(n.mozGetUserMedia)e.browser="firefox",e.version=Ll(n.userAgent,/Firefox\/(\d+)\./,1);else if(n.webkitGetUserMedia||t.isSecureContext===!1&&t.webkitRTCPeerConnection)e.browser="chrome",e.version=Ll(n.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.RTCPeerConnection&&n.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=Ll(n.userAgent,/AppleWebKit\/(\d+)\./,1),e.supportsUnifiedPlan=t.RTCRtpTransceiver&&"currentDirection"in t.RTCRtpTransceiver.prototype;else return e.browser="Not a supported browser.",e;return e}function I0(t){return Object.prototype.toString.call(t)==="[object Object]"}function BR(t){return I0(t)?Object.keys(t).reduce(function(e,n){var r=I0(t[n]),i=r?BR(t[n]):t[n],s=r&&!Object.keys(i).length;return i===void 0||s?e:Object.assign(e,nH({},n,i))},{}):t}function Mu(t,e,n){!e||n.has(e.id)||(n.set(e.id,e),Object.keys(e).forEach(function(r){r.endsWith("Id")?Mu(t,t.get(e[r]),n):r.endsWith("Ids")&&e[r].forEach(function(i){Mu(t,t.get(i),n)})}))}function hH(t,e,n){var r=n?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;var s=[];return t.forEach(function(o){o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(function(o){t.forEach(function(a){a.type===r&&a.trackId===o.id&&Mu(t,a,i)})}),i}Object.defineProperty($R,"__esModule",{value:!0});var dH=$R.shimGetUserMedia=mH,fH=pH(En);function jR(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(jR=function(r){return r?n:e})(t)}function pH(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||hi(t)!=="object"&&typeof t!="function")return{default:t};var n=jR(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function hi(t){"@babel/helpers - typeof";return hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hi(t)}var b0=fH.log;function mH(t,e){var n=t&&t.navigator;if(n.mediaDevices){var r=function(c){if(hi(c)!=="object"||c.mandatory||c.optional)return c;var l={};return Object.keys(c).forEach(function(u){if(!(u==="require"||u==="advanced"||u==="mediaSource")){var h=hi(c[u])==="object"?c[u]:{ideal:c[u]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);var p=function(y,v){return y?y+v.charAt(0).toUpperCase()+v.slice(1):v==="deviceId"?"sourceId":v};if(h.ideal!==void 0){l.optional=l.optional||[];var m={};typeof h.ideal=="number"?(m[p("min",u)]=h.ideal,l.optional.push(m),m={},m[p("max",u)]=h.ideal,l.optional.push(m)):(m[p("",u)]=h.ideal,l.optional.push(m))}h.exact!==void 0&&typeof h.exact!="number"?(l.mandatory=l.mandatory||{},l.mandatory[p("",u)]=h.exact):["min","max"].forEach(function(y){h[y]!==void 0&&(l.mandatory=l.mandatory||{},l.mandatory[p(y,u)]=h[y])})}}),c.advanced&&(l.optional=(l.optional||[]).concat(c.advanced)),l},i=function(c,l){if(e.version>=61)return l(c);if(c=JSON.parse(JSON.stringify(c)),c&&hi(c.audio)==="object"){var u=function(y,v,b){v in y&&!(b in y)&&(y[b]=y[v],delete y[v])};c=JSON.parse(JSON.stringify(c)),u(c.audio,"autoGainControl","googAutoGainControl"),u(c.audio,"noiseSuppression","googNoiseSuppression"),c.audio=r(c.audio)}if(c&&hi(c.video)==="object"){var h=c.video.facingMode;h=h&&(hi(h)==="object"?h:{ideal:h});var p=e.version<66;if(h&&(h.exact==="user"||h.exact==="environment"||h.ideal==="user"||h.ideal==="environment")&&!(n.mediaDevices.getSupportedConstraints&&n.mediaDevices.getSupportedConstraints().facingMode&&!p)){delete c.video.facingMode;var m;if(h.exact==="environment"||h.ideal==="environment"?m=["back","rear"]:(h.exact==="user"||h.ideal==="user")&&(m=["front"]),m)return n.mediaDevices.enumerateDevices().then(function(y){y=y.filter(function(b){return b.kind==="videoinput"});var v=y.find(function(b){return m.some(function(A){return b.label.toLowerCase().includes(A)})});return!v&&y.length&&m.includes("back")&&(v=y[y.length-1]),v&&(c.video.deviceId=h.exact?{exact:v.deviceId}:{ideal:v.deviceId}),c.video=r(c.video),b0("chrome: "+JSON.stringify(c)),l(c)})}c.video=r(c.video)}return b0("chrome: "+JSON.stringify(c)),l(c)},s=function(c){return e.version>=64?c:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[c.name]||c.name,message:c.message,constraint:c.constraint||c.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}},o=function(c,l,u){i(c,function(h){n.webkitGetUserMedia(h,l,function(p){u&&u(s(p))})})};if(n.getUserMedia=o.bind(n),n.mediaDevices.getUserMedia){var a=n.mediaDevices.getUserMedia.bind(n.mediaDevices);n.mediaDevices.getUserMedia=function(c){return i(c,function(l){return a(l).then(function(u){if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(function(h){h.stop()}),new DOMException("","NotFoundError");return u},function(u){return Promise.reject(s(u))})})}}}}var HR={};Object.defineProperty(HR,"__esModule",{value:!0});var gH=HR.shimGetUserMedia=vH,_H=yH(En);function WR(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(WR=function(r){return r?n:e})(t)}function yH(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||eo(t)!=="object"&&typeof t!="function")return{default:t};var n=WR(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function eo(t){"@babel/helpers - typeof";return eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},eo(t)}function vH(t,e){var n=t&&t.navigator,r=t&&t.MediaStreamTrack;if(n.getUserMedia=function(c,l,u){_H.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),n.mediaDevices.getUserMedia(c).then(l,u)},!(e.version>55&&"autoGainControl"in n.mediaDevices.getSupportedConstraints())){var i=function(c,l,u){l in c&&!(u in c)&&(c[u]=c[l],delete c[l])},s=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(c){return eo(c)==="object"&&eo(c.audio)==="object"&&(c=JSON.parse(JSON.stringify(c)),i(c.audio,"autoGainControl","mozAutoGainControl"),i(c.audio,"noiseSuppression","mozNoiseSuppression")),s(c)},r&&r.prototype.getSettings){var o=r.prototype.getSettings;r.prototype.getSettings=function(){var c=o.apply(this,arguments);return i(c,"mozAutoGainControl","autoGainControl"),i(c,"mozNoiseSuppression","noiseSuppression"),c}}if(r&&r.prototype.applyConstraints){var a=r.prototype.applyConstraints;r.prototype.applyConstraints=function(c){return this.kind==="audio"&&eo(c)==="object"&&(c=JSON.parse(JSON.stringify(c)),i(c,"autoGainControl","mozAutoGainControl"),i(c,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[c])}}}}var Cr={};Object.defineProperty(Cr,"__esModule",{value:!0});Cr.shimAudioContext=PH;Cr.shimCallbacksAPI=bH;Cr.shimConstraints=KR;Cr.shimCreateOfferLegacy=SH;var wH=Cr.shimGetUserMedia=AH;Cr.shimLocalStreamsAPI=TH;Cr.shimRTCIceServerUrls=CH;Cr.shimRemoteStreamsAPI=IH;Cr.shimTrackEventTransceiver=RH;var zR=EH(En);function qR(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(qR=function(r){return r?n:e})(t)}function EH(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||ki(t)!=="object"&&typeof t!="function")return{default:t};var n=qR(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function ki(t){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ki(t)}function TH(t){if(!(ki(t)!=="object"||!t.RTCPeerConnection)){if("getLocalStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in t.RTCPeerConnection.prototype)){var e=t.RTCPeerConnection.prototype.addTrack;t.RTCPeerConnection.prototype.addStream=function(n){var r=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(function(i){return e.call(r,i,n)}),n.getVideoTracks().forEach(function(i){return e.call(r,i,n)})},t.RTCPeerConnection.prototype.addTrack=function(n){for(var r=this,i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return s&&s.forEach(function(a){r._localStreams?r._localStreams.includes(a)||r._localStreams.push(a):r._localStreams=[a]}),e.apply(this,arguments)}}"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(n){var r=this;this._localStreams||(this._localStreams=[]);var i=this._localStreams.indexOf(n);if(i!==-1){this._localStreams.splice(i,1);var s=n.getTracks();this.getSenders().forEach(function(o){s.includes(o.track)&&r.removeTrack(o)})}})}}function IH(t){if(!(ki(t)!=="object"||!t.RTCPeerConnection)&&("getRemoteStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in t.RTCPeerConnection.prototype))){Object.defineProperty(t.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(n){var r=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=n),this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(function(s){if(r._remoteStreams||(r._remoteStreams=[]),!r._remoteStreams.includes(s)){r._remoteStreams.push(s);var o=new Event("addstream");o.stream=s,r.dispatchEvent(o)}})})}});var e=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){var n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(function(i){if(n._remoteStreams||(n._remoteStreams=[]),!(n._remoteStreams.indexOf(i)>=0)){n._remoteStreams.push(i);var s=new Event("addstream");s.stream=i,n.dispatchEvent(s)}})}),e.apply(n,arguments)}}}function bH(t){if(!(ki(t)!=="object"||!t.RTCPeerConnection)){var e=t.RTCPeerConnection.prototype,n=e.createOffer,r=e.createAnswer,i=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(c,l){var u=arguments.length>=2?arguments[2]:arguments[0],h=n.apply(this,[u]);return l?(h.then(c,l),Promise.resolve()):h},e.createAnswer=function(c,l){var u=arguments.length>=2?arguments[2]:arguments[0],h=r.apply(this,[u]);return l?(h.then(c,l),Promise.resolve()):h};var a=function(c,l,u){var h=i.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h};e.setLocalDescription=a,a=function(c,l,u){var h=s.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.setRemoteDescription=a,a=function(c,l,u){var h=o.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.addIceCandidate=a}}function AH(t){var e=t&&t.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){var n=e.mediaDevices,r=n.getUserMedia.bind(n);e.mediaDevices.getUserMedia=function(i){return r(KR(i))}}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(i,s,o){e.mediaDevices.getUserMedia(i).then(s,o)}).bind(e))}function KR(t){return t&&t.video!==void 0?Object.assign({},t,{video:zR.compactObject(t.video)}):t}function CH(t){if(t.RTCPeerConnection){var e=t.RTCPeerConnection;t.RTCPeerConnection=function(n,r){if(n&&n.iceServers){for(var i=[],s=0;s<n.iceServers.length;s++){var o=n.iceServers[s];o.urls===void 0&&o.url?(zR.deprecated("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,i.push(o)):i.push(n.iceServers[s])}n.iceServers=i}return new e(n,r)},t.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(t.RTCPeerConnection,"generateCertificate",{get:function(){return e.generateCertificate}})}}function RH(t){ki(t)==="object"&&t.RTCTrackEvent&&"receiver"in t.RTCTrackEvent.prototype&&!("transceiver"in t.RTCTrackEvent.prototype)&&Object.defineProperty(t.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function SH(t){var e=t.RTCPeerConnection.prototype.createOffer;t.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);var r=this.getTransceivers().find(function(s){return s.receiver.track.kind==="audio"});n.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);var i=this.getTransceivers().find(function(s){return s.receiver.track.kind==="video"});n.offerToReceiveVideo===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveVideo===!0&&!i&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function PH(t){ki(t)!=="object"||t.AudioContext||(t.AudioContext=t.webkitAudioContext)}const kH=t=>{let e=!1,n;return(...r)=>(e||(n=t(r),e=!0),n)};function Dr(t,e){if(t===!1)throw new Error(e??"assertion failure")}const NH=kH(()=>{const t=tH(window);switch(t.browser){case"chrome":dH(window,t);break;case"firefox":gH(window,t);break;case"safari":wH(window,t);break;default:throw new LR}});let Lr={isActive:!1};function lf(){if(Lr.isActive){Lr.videoEl.src="",Lr.videoEl.srcObject=null,Lr.videoEl.load();for(const t of Lr.stream.getTracks())Lr.stream.removeTrack(t),t.stop();Lr={isActive:!1}}}async function OH(t,{constraints:e,torch:n}){var r,i;if(window.isSecureContext!==!0)throw new Q3;if(((r=navigator==null?void 0:navigator.mediaDevices)==null?void 0:r.getUserMedia)===void 0)throw new LR;NH();const s=await navigator.mediaDevices.getUserMedia({audio:!1,video:e});if(t.srcObject!==void 0?t.srcObject=s:t.mozSrcObject!==void 0?t.mozSrcObject=s:window.URL.createObjectURL?t.src=window.URL.createObjectURL(s):window.webkitURL?t.src=window.webkitURL.createObjectURL(s):t.src=s.id,await Promise.race([MR(t,"loadeddata"),T0(3e3).then(()=>{throw new Y3})]),await T0(500),n){const[a]=s.getVideoTracks();a.getCapabilities().torch?a.applyConstraints({advanced:[{torch:!0}]}):console.warn("device does not support torch capability")}Lr={videoEl:t,stream:s,isActive:!0};const[o]=Lr.stream.getVideoTracks();return((i=o==null?void 0:o.getCapabilities)==null?void 0:i.call(o))??{}}const xH={class:"qrcode-stream-wrapper"},DH={class:"qrcode-stream-overlay"},MH=ir({__name:"QrcodeStream",props:{constraints:{type:Object,default(){return{facingMode:"environment"}}},formats:{type:Array,default:()=>["qr_code"]},paused:{type:Boolean,default:!1},torch:{type:Boolean,default:!1},track:{type:Function}},emits:["detect","camera-on","camera-off","error"],setup(t,{emit:e}){const n=t,r=ct(),i=ct(),s=ct(),o=ct(!1),a=ct(!1);um(()=>{a.value=!0}),Yu(()=>{lf()});const c=Zt(()=>({torch:n.torch,constraints:n.constraints,shouldStream:a.value&&!n.paused}));Br(c,async m=>{const y=s.value;Dr(y!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus video element should always be defined.");const v=r.value;Dr(v!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus canvas should always be defined.");const b=v.getContext("2d");if(Dr(b!==null,"if cavnas is defined, canvas 2d context should also be non-null"),m.shouldStream)try{const A=await OH(y,m);a.value?(o.value=!0,e("camera-on",A)):lf()}catch(A){e("error",A)}else v.width=y.videoWidth,v.height=y.videoHeight,b.drawImage(y,0,0,y.videoWidth,y.videoHeight),lf(),o.value=!1,e("camera-off")},{deep:!0});const{formats:l}=ck(n);Br(l,m=>{a.value&&J3(m)});const u=Zt(()=>c.value.shouldStream&&o.value);Br(u,m=>{if(m){Dr(r.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus pause frame canvas is defined"),h(r.value),Dr(i.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus tracking canvas is defined"),h(i.value);const y=()=>n.track===void 0?500:40;Dr(s.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus video element is defined"),X3(s.value,{detectHandler:v=>e("detect",v),formats:n.formats,locateHandler:p,minDelay:y()})}});const h=m=>{const y=m.getContext("2d");Dr(y!==null,"canvas 2d context should always be non-null"),y.clearRect(0,0,m.width,m.height)},p=m=>{const y=i.value;Dr(y!==void 0,"onLocate handler should only be called when component is mounted. Thus tracking canvas is always defined.");const v=s.value;if(Dr(v!==void 0,"onLocate handler should only be called when component is mounted. Thus video element is always defined."),m.length===0||n.track===void 0)h(y);else{const b=v.offsetWidth,A=v.offsetHeight,k=v.videoWidth,N=v.videoHeight,P=Math.max(b/k,A/N),j=k*P,W=N*P,ae=j/k,ge=W/N,ze=(b-j)/2,Re=(A-W)/2,ht=({x:cn,y:je})=>({x:Math.floor(cn*ae),y:Math.floor(je*ge)}),$t=({x:cn,y:je})=>({x:Math.floor(cn+ze),y:Math.floor(je+Re)}),Ge=m.map(cn=>{const{boundingBox:je,cornerPoints:Ve}=cn,{x:Te,y:Tn}=$t(ht({x:je.x,y:je.y})),{x:It,y:bt}=ht({x:je.width,y:je.height});return{...cn,cornerPoints:Ve.map(At=>$t(ht(At))),boundingBox:DOMRectReadOnly.fromRect({x:Te,y:Tn,width:It,height:bt})}});y.width=v.offsetWidth,y.height=v.offsetHeight;const Sr=y.getContext("2d");n.track(Ge,Sr)}};return(m,y)=>(Et(),Sn("div",xH,[it("video",{ref_key:"videoRef",ref:s,class:Hu([{"qrcode-stream-camera--hidden":!u.value},"qrcode-stream-camera"]),autoplay:"",muted:"",playsinline:""},null,2),Sk(it("canvas",{ref_key:"pauseFrameRef",ref:r,class:"qrcode-stream-camera"},null,512),[[BN,!u.value]]),it("canvas",{ref_key:"trackingLayerRef",ref:i,class:"qrcode-stream-overlay"},null,512),it("div",DH,[CE(m.$slots,"default",{},void 0,!0)])]))}}),LH=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},GR=LH(MH,[["__scopeId","data-v-dfa4038c"]]),VH=ir({__name:"QrcodeCapture",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect"],setup(t,{emit:e}){const n=t,r=i=>{if(!(!(i.target instanceof HTMLInputElement)||!i.target.files))for(const s of Array.from(i.target.files))VR(s,n.formats).then(o=>{e("detect",o)})};return(i,s)=>(Et(),Sn("input",{onChange:r,type:"file",name:"image",accept:"image/*",capture:"environment",multiple:""},null,32))}}),$H=["onDrop"],FH=ir({__name:"QrcodeDropZone",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect","dragover","error"],setup(t,{emit:e}){const n=t,r=async o=>{try{const a=await o;e("detect",a)}catch(a){e("error",a)}},i=o=>{e("dragover",o)},s=({dataTransfer:o})=>{if(!o)return;i(!1);const a=[...Array.from(o.files)],c=o.getData("text/uri-list");a.forEach(l=>{r(VR(l))}),c!==""&&r(eH(c,n.formats))};return(o,a)=>(Et(),Sn("div",{onDrop:nl(s,["prevent","stop"]),onDragenter:a[0]||(a[0]=nl(c=>i(!0),["prevent","stop"])),onDragleave:a[1]||(a[1]=nl(c=>i(!1),["prevent","stop"])),onDragover:a[2]||(a[2]=nl(()=>{},["prevent","stop"]))},[CE(o.$slots,"default")],40,$H))}});function UH(t){t.component("qrcode-stream",GR),t.component("qrcode-capture",VH),t.component("qrcode-drop-zone",FH)}const BH={install:UH};let Lu=null;typeof window<"u"?Lu=window.Vue:typeof global<"u"&&(Lu=global.Vue);Lu&&Lu.use(BH);const jH={class:"qrScanner"},HH=ir({__name:"ScanQr",emits:["codeFound"],setup(t,{emit:e}){const n=ct(!0);ct();function r(s){s.length>=1&&e("codeFound",s[0].rawValue)}function i(){n.value=!1}return(s,o)=>(Et(),Sn("div",jH,[xt(vt(GR),{onDetect:r,constraints:{facingMode:"environment"},onCameraOn:i},{default:Hl(()=>[n.value?(Et(),Sn("div",{key:0,class:"loading-indicator","on:cameraOn":i},"Caricamento...",32)):qs("",!0)]),_:1})]))}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ho=t=>e=>typeof e=="function"?((n,r)=>(customElements.define(n,r),r))(t,e):((n,r)=>{const{kind:i,elements:s}=r;return{kind:i,elements:s,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const WH=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},zH=(t,e,n)=>{e.constructor.createProperty(n,t)};function ut(t){return(e,n)=>n!==void 0?zH(t,e,n):WH(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ss(t){return ut({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const QR=({finisher:t,descriptor:e})=>(n,r)=>{var i;if(r===void 0){const s=(i=n.originalKey)!==null&&i!==void 0?i:n.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(n.key)}:{...n,key:s};return t!=null&&(o.finisher=function(a){t(a,s)}),o}{const s=n.constructor;e!==void 0&&Object.defineProperty(n,r,e(r)),t==null||t(s,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function jn(t,e){return QR({descriptor:n=>{const r={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const i=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var s,o;return this[i]===void 0&&(this[i]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&o!==void 0?o:null),this[i]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var uf;const qH=((uf=window.HTMLSlotElement)===null||uf===void 0?void 0:uf.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function KH(t){const{slot:e,selector:n}=t??{};return QR({descriptor:r=>({get(){var i;const s="slot"+(e?`[name=${e}]`:":not([name])"),o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(s),a=o!=null?qH(o,t):[];return n?a.filter(c=>c.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vl=window,h_=Vl.ShadowRoot&&(Vl.ShadyCSS===void 0||Vl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d_=Symbol(),A0=new WeakMap;let YR=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==d_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(h_&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=A0.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&A0.set(n,e))}return e}toString(){return this.cssText}};const GH=t=>new YR(typeof t=="string"?t:t+"",void 0,d_),Vi=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new YR(n,t,d_)},QH=(t,e)=>{h_?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),i=Vl.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},C0=h_?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return GH(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hf;const Vu=window,R0=Vu.trustedTypes,YH=R0?R0.emptyScript:"",S0=Vu.reactiveElementPolyfillSupport,$p={toAttribute(t,e){switch(e){case Boolean:t=t?YH:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},JR=(t,e)=>e!==t&&(e==e||t==t),df={attribute:!0,type:String,converter:$p,reflect:!1,hasChanged:JR},Fp="finalized";let $s=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=df){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){const s=this[e];this[n]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||df}static finalize(){if(this.hasOwnProperty(Fp))return!1;this[Fp]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(C0(i))}else e!==void 0&&n.push(C0(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return QH(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=df){var i;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:$p).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,n){var r;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:$p;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||JR)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};$s[Fp]=!0,$s.elementProperties=new Map,$s.elementStyles=[],$s.shadowRootOptions={mode:"open"},S0==null||S0({ReactiveElement:$s}),((hf=Vu.reactiveElementVersions)!==null&&hf!==void 0?hf:Vu.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ff;const $u=window,Ao=$u.trustedTypes,P0=Ao?Ao.createPolicy("lit-html",{createHTML:t=>t}):void 0,Up="$lit$",di=`lit$${(Math.random()+"").slice(9)}$`,XR="?"+di,JH=`<${XR}>`,ys=document,hc=()=>ys.createComment(""),dc=t=>t===null||typeof t!="object"&&typeof t!="function",ZR=Array.isArray,XH=t=>ZR(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",pf=`[ 	
\f\r]`,sa=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k0=/-->/g,N0=/>/g,ji=RegExp(`>|${pf}(?:([^\\s"'>=/]+)(${pf}*=${pf}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),O0=/'/g,x0=/"/g,eS=/^(?:script|style|textarea|title)$/i,ZH=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Cn=ZH(1),vs=Symbol.for("lit-noChange"),Fe=Symbol.for("lit-nothing"),D0=new WeakMap,es=ys.createTreeWalker(ys,129,null,!1);function tS(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return P0!==void 0?P0.createHTML(e):e}const e5=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=sa;for(let a=0;a<n;a++){const c=t[a];let l,u,h=-1,p=0;for(;p<c.length&&(o.lastIndex=p,u=o.exec(c),u!==null);)p=o.lastIndex,o===sa?u[1]==="!--"?o=k0:u[1]!==void 0?o=N0:u[2]!==void 0?(eS.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=ji):u[3]!==void 0&&(o=ji):o===ji?u[0]===">"?(o=i??sa,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?ji:u[3]==='"'?x0:O0):o===x0||o===O0?o=ji:o===k0||o===N0?o=sa:(o=ji,i=void 0);const m=o===ji&&t[a+1].startsWith("/>")?" ":"";s+=o===sa?c+JH:h>=0?(r.push(l),c.slice(0,h)+Up+c.slice(h)+di+m):c+di+(h===-2?(r.push(void 0),a):m)}return[tS(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class fc{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=e.length-1,c=this.parts,[l,u]=e5(e,n);if(this.el=fc.createElement(l,r),es.currentNode=this.el.content,n===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(i=es.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const p of i.getAttributeNames())if(p.endsWith(Up)||p.startsWith(di)){const m=u[o++];if(h.push(p),m!==void 0){const y=i.getAttribute(m.toLowerCase()+Up).split(di),v=/([.?@])?(.*)/.exec(m);c.push({type:1,index:s,name:v[2],strings:y,ctor:v[1]==="."?n5:v[1]==="?"?i5:v[1]==="@"?s5:Jh})}else c.push({type:6,index:s})}for(const p of h)i.removeAttribute(p)}if(eS.test(i.tagName)){const h=i.textContent.split(di),p=h.length-1;if(p>0){i.textContent=Ao?Ao.emptyScript:"";for(let m=0;m<p;m++)i.append(h[m],hc()),es.nextNode(),c.push({type:2,index:++s});i.append(h[p],hc())}}}else if(i.nodeType===8)if(i.data===XR)c.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(di,h+1))!==-1;)c.push({type:7,index:s}),h+=di.length-1}s++}}static createElement(e,n){const r=ys.createElement("template");return r.innerHTML=e,r}}function Co(t,e,n=t,r){var i,s,o,a;if(e===vs)return e;let c=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const l=dc(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((s=c==null?void 0:c._$AO)===null||s===void 0||s.call(c,!1),l===void 0?c=void 0:(c=new l(t),c._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=c:n._$Cl=c),c!==void 0&&(e=Co(t,c._$AS(t,e.values),c,r)),e}class t5{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:ys).importNode(r,!0);es.currentNode=s;let o=es.nextNode(),a=0,c=0,l=i[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new jc(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new o5(o,this,e)),this._$AV.push(u),l=i[++c]}a!==(l==null?void 0:l.index)&&(o=es.nextNode(),a++)}return es.currentNode=ys,s}v(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class jc{constructor(e,n,r,i){var s;this.type=2,this._$AH=Fe,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Co(this,e,n),dc(e)?e===Fe||e==null||e===""?(this._$AH!==Fe&&this._$AR(),this._$AH=Fe):e!==this._$AH&&e!==vs&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):XH(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Fe&&dc(this._$AH)?this._$AA.nextSibling.data=e:this.$(ys.createTextNode(e)),this._$AH=e}g(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=fc.createElement(tS(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new t5(s,this),a=o.u(this.options);o.v(r),this.$(a),this._$AH=o}}_$AC(e){let n=D0.get(e.strings);return n===void 0&&D0.set(e.strings,n=new fc(e)),n}T(e){ZR(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new jc(this.k(hc()),this.k(hc()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Jh{constructor(e,n,r,i,s){this.type=1,this._$AH=Fe,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Fe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=Co(this,e,n,0),o=!dc(e)||e!==this._$AH&&e!==vs,o&&(this._$AH=e);else{const a=e;let c,l;for(e=s[0],c=0;c<s.length-1;c++)l=Co(this,a[r+c],n,c),l===vs&&(l=this._$AH[c]),o||(o=!dc(l)||l!==this._$AH[c]),l===Fe?e=Fe:e!==Fe&&(e+=(l??"")+s[c+1]),this._$AH[c]=l}o&&!i&&this.j(e)}j(e){e===Fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class n5 extends Jh{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Fe?void 0:e}}const r5=Ao?Ao.emptyScript:"";class i5 extends Jh{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Fe?this.element.setAttribute(this.name,r5):this.element.removeAttribute(this.name)}}class s5 extends Jh{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){var r;if((e=(r=Co(this,e,n,0))!==null&&r!==void 0?r:Fe)===vs)return;const i=this._$AH,s=e===Fe&&i!==Fe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Fe&&(i===Fe||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class o5{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Co(this,e)}}const M0=$u.litHtmlPolyfillSupport;M0==null||M0(fc,jc),((ff=$u.litHtmlVersions)!==null&&ff!==void 0?ff:$u.litHtmlVersions=[]).push("2.8.0");const a5=(t,e,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=s._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new jc(e.insertBefore(hc(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mf,gf;let er=class extends $s{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=a5(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return vs}};er.finalized=!0,er._$litElement$=!0,(mf=globalThis.litElementHydrateSupport)===null||mf===void 0||mf.call(globalThis,{LitElement:er});const L0=globalThis.litElementPolyfillSupport;L0==null||L0({LitElement:er});((gf=globalThis.litElementVersions)!==null&&gf!==void 0?gf:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xh extends er{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}ue([ut({type:Boolean,reflect:!0})],Xh.prototype,"inset",void 0);ue([ut({type:Boolean,reflect:!0,attribute:"inset-start"})],Xh.prototype,"insetStart",void 0);ue([ut({type:Boolean,reflect:!0,attribute:"inset-end"})],Xh.prototype,"insetEnd",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const c5=Vi`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Bp=class extends Xh{};Bp.styles=[c5];Bp=ue([Ho("md-divider")],Bp);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l5={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},u5=t=>(...e)=>({_$litDirective$:t,values:e});let h5=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pc=u5(class extends h5{constructor(t){var e;if(super(t),t.type!==l5.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,r;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((n=this.nt)===null||n===void 0)&&n.has(s))&&this.it.add(s);return this.render(e)}const i=t.element.classList;this.it.forEach(s=>{s in e||(i.remove(s),this.it.delete(s))});for(const s in e){const o=!!e[s];o===this.it.has(s)||!((r=this.nt)===null||r===void 0)&&r.has(s)||(o?(i.add(s),this.it.add(s)):(i.remove(s),this.it.delete(s)))}return vs}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const nS=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];nS.map(rS);function rS(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function f_(t){for(const e of nS)t.createProperty(e,{attribute:rS(e),reflect:!0});t.addInitializer(e=>{const n={hostConnected(){e.setAttribute("role","presentation")}};e.addController(n)})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function d5(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(n);return r||e.preventDefault(),r}function iS(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function sS(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!f5(t)}function f5(t){const e=jp;return e&&(t.preventDefault(),t.stopImmediatePropagation()),p5(),e}let jp=!1;async function p5(){jp=!0,await null,jp=!1}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const mc={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const m5={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:mc.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:mc.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},g5={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:mc.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:mc.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class gt extends er{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>m5,this.getCloseAnimation=()=>g5,this.isOpen=!1,this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.addEventListener("submit",this.handleSubmit)}async show(){var i;const{dialog:e,container:n}=this;if(!e||!n||e.open)return;if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(i=this.querySelector("[autofocus]"))==null||i.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened"))}async close(e=this.returnValue){const{dialog:n,container:r}=this;if(!n||!r||!n.open)return;const i=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=i;return}await this.animateDialog(this.getCloseAnimation()),n.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),n={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:r}=this;return Cn`
      <div class="scrim"></div>
      <dialog
        class=${pc(n)}
        aria-label=${r||Fe}
        aria-labelledby=${this.hasHeadline?"headline":Fe}
        role=${this.type==="alert"?"alertdialog":Fe}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||Fe}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||Fe}>
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
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const n of e)this.handleAnchorIntersection(n)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const n=e.target,{submitter:r}=e;n.method!=="dialog"||!r||this.close(r.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;const n=!d5(this,e);e.preventDefault(),!n&&this.close()}async animateDialog(e){const{dialog:n,scrim:r,container:i,headline:s,content:o,actions:a}=this;if(!n||!r||!i||!s||!o||!a)return;const{container:c,dialog:l,scrim:u,headline:h,content:p,actions:m}=e,y=[[n,l??[]],[r,u??[]],[i,c??[]],[s,h??[]],[o,p??[]],[a,m??[]]],v=[];for(const[b,A]of y)for(const k of A)v.push(b.animate(...k));await Promise.all(v.map(b=>b.finished))}handleHeadlineChange(e){const n=e.target;this.hasHeadline=n.assignedElements().length>0}handleActionsChange(e){const n=e.target;this.hasActions=n.assignedElements().length>0}handleIconChange(e){const n=e.target;this.hasIcon=n.assignedElements().length>0}handleAnchorIntersection(e){const{target:n,isIntersecting:r}=e;n===this.topAnchor&&(this.isAtScrollTop=r),n===this.bottomAnchor&&(this.isAtScrollBottom=r)}}f_(gt);gt.shadowRootOptions={...er.shadowRootOptions,delegatesFocus:!0};ue([ut({type:Boolean})],gt.prototype,"open",null);ue([ut({attribute:!1})],gt.prototype,"returnValue",void 0);ue([ut()],gt.prototype,"type",void 0);ue([jn("dialog")],gt.prototype,"dialog",void 0);ue([jn(".scrim")],gt.prototype,"scrim",void 0);ue([jn(".container")],gt.prototype,"container",void 0);ue([jn(".headline")],gt.prototype,"headline",void 0);ue([jn(".content")],gt.prototype,"content",void 0);ue([jn(".actions")],gt.prototype,"actions",void 0);ue([Ss()],gt.prototype,"isAtScrollTop",void 0);ue([Ss()],gt.prototype,"isAtScrollBottom",void 0);ue([jn(".scroller")],gt.prototype,"scroller",void 0);ue([jn(".top.anchor")],gt.prototype,"topAnchor",void 0);ue([jn(".bottom.anchor")],gt.prototype,"bottomAnchor",void 0);ue([Ss()],gt.prototype,"hasHeadline",void 0);ue([Ss()],gt.prototype,"hasActions",void 0);ue([Ss()],gt.prototype,"hasIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const _5=Vi`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-type: var(--md-dialog-headline-type, var(--md-sys-typescale-headline-small, 400 1.5rem / 2rem var(--md-ref-typeface-brand, Roboto)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-dialog-supporting-text-type, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font:var(--_headline-type);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;display:flex;gap:8px;margin:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);margin-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;margin-top:16px}.scrollable slot[name=headline]::slotted(*){margin-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){margin-top:8px}.container{border-radius:inherit;display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);content:"";inset:0;position:absolute}.scroller{flex:1;overflow:hidden;z-index:0}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font:var(--_supporting-text-type);position:relative}slot[name=content]::slotted(*){margin:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){display:flex;gap:8px;justify-content:flex-end;margin:16px 24px 24px}.has-actions slot[name=content]::slotted(*){margin-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Hp=class extends gt{};Hp.styles=[_5];Hp=ue([Ho("md-dialog")],Hp);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const y5=Vi`:host{display:inline-flex;height:var(--_container-height);outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:var(--_label-text-type);color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const oS=Symbol("attachableController");let $l;$l=new MutationObserver(t=>{var e;for(const n of t)(e=n.target[oS])==null||e.hostConnected()});class aS{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}constructor(e,n){this.host=e,this.onControlChange=n,this.currentControl=null,e.addController(this),e[oS]=this,$l==null||$l.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const v5=["focusin","focusout","pointerdown"];class p_ extends er{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new aS(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}handleEvent(e){var n;if(!e[V0]){switch(e.type){default:return;case"focusin":this.visible=((n=this.control)==null?void 0:n.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[V0]=!0}}onControlChange(e,n){for(const r of v5)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}ue([ut({type:Boolean,reflect:!0})],p_.prototype,"visible",void 0);ue([ut({type:Boolean,reflect:!0})],p_.prototype,"inward",void 0);const V0=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const w5=Vi`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Wp=class extends p_{};Wp.styles=[w5];Wp=ue([Ho("md-focus-ring")],Wp);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const E5=450,$0=225,T5=.2,I5=10,b5=75,A5=.35,C5="::after",R5="forwards";var hn;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(hn||(hn={}));const S5=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],P5=150;class Hc extends er{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=hn.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new aS(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}render(){const e={hovered:this.hovered,pressed:this.pressed};return Cn`<div class="surface ${pc(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==hn.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===hn.HOLDING){this.state=hn.WAITING_FOR_CLICK;return}if(this.state===hn.TOUCH_DELAY){this.state=hn.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=hn.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=hn.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,P5)}),this.state===hn.TOUCH_DELAY&&(this.state=hn.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===hn.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===hn.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:n}=this.getBoundingClientRect(),r=Math.max(e,n),i=Math.max(A5*r,b5),s=Math.floor(r*T5),a=Math.sqrt(n**2+e**2)+I5;this.initialSize=s,this.rippleScale=`${(a+i)/s}`,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(e){const{scrollX:n,scrollY:r}=window,{left:i,top:s}=this.getBoundingClientRect(),o=n+i,a=r+s,{pageX:c,pageY:l}=e;return{x:c-o,y:l-a}}getTranslationCoordinates(e){const{height:n,width:r}=this.getBoundingClientRect(),i={x:(r-this.initialSize)/2,y:(n-this.initialSize)/2};let s;return e instanceof PointerEvent?s=this.getNormalizedPointerEventCoords(e):s={x:r/2,y:n/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:i}}startPressAnimation(e){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:n,endPoint:r}=this.getTranslationCoordinates(e),i=`${n.x}px, ${n.y}px`,s=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${s}) scale(${this.rippleScale})`]},{pseudoElement:C5,duration:E5,easing:mc.STANDARD,fill:R5})}async endPressAnimation(){this.state=hn.INACTIVE;const e=this.growAnimation,n=(e==null?void 0:e.currentTime)??1/0;if(n>=$0){this.pressed=!1;return}await new Promise(r=>{setTimeout(r,$0-n)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const n=e.buttons===1;return this.isTouch(e)||n}inBounds({x:e,y:n}){const{top:r,left:i,bottom:s,right:o}=this.getBoundingClientRect();return e>=i&&e<=o&&n>=r&&n<=s}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,n){for(const r of S5)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}}ue([ut({type:Boolean,reflect:!0})],Hc.prototype,"disabled",void 0);ue([Ss()],Hc.prototype,"hovered",void 0);ue([Ss()],Hc.prototype,"pressed",void 0);ue([jn(".surface")],Hc.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const k5=Vi`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let zp=class extends Hc{};zp.styles=[k5];zp=ue([Ho("md-ripple")],zp);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cS=Symbol.for(""),N5=t=>{if((t==null?void 0:t.r)===cS)return t==null?void 0:t._$litStatic$},F0=(t,...e)=>({_$litStatic$:e.reduce((n,r,i)=>n+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[i+1],t[0]),r:cS}),U0=new Map,O5=t=>(e,...n)=>{const r=n.length;let i,s;const o=[],a=[];let c,l=0,u=!1;for(;l<r;){for(c=e[l];l<r&&(s=n[l],(i=N5(s))!==void 0);)c+=i+e[++l],u=!0;l!==r&&a.push(s),o.push(c),l++}if(l===r&&o.push(e[r]),u){const h=o.join("$$lit$$");(e=U0.get(h))===void 0&&(o.raw=o,U0.set(h,e=o)),n=a}return t(e,...n)},x5=O5(Cn);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const m_=Symbol("internals");/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function D5(t){t.addInitializer(e=>{const n=e;n.addEventListener("click",async r=>{const{type:i,[m_]:s}=n,{form:o}=s;if(!(!o||i==="button")&&(await new Promise(a=>{a()}),!r.defaultPrevented)){if(i==="reset"){o.reset();return}o.addEventListener("submit",a=>{Object.defineProperty(a,"submitter",{configurable:!0,enumerable:!0,get:()=>n})},{capture:!0,once:!0}),s.setFormValue(n.value),o.requestSubmit()}})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var lS;class wn extends er{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[m_].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this[lS]=this.attachInternals(),this.handleActivationClick=e=>{!sS(e)||!this.buttonElement||(this.focus(),iS(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){const e=this.disabled&&!this.href,n=this.href?F0`a`:F0`button`,{ariaLabel:r,ariaHasPopup:i,ariaExpanded:s}=this;return x5`
      <${n}
        class="button ${pc(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${r||Fe}"
        aria-haspopup="${i||Fe}"
        aria-expanded="${s||Fe}"
        href=${this.href||Fe}
        target=${this.target||Fe}
      >${this.renderContent()}</${n}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){var r,i;const e=this.disabled&&!this.href,n=Cn`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return Cn`
      ${(r=this.renderElevation)==null?void 0:r.call(this)}
      ${(i=this.renderOutline)==null?void 0:i.call(this)}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${e}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?Fe:n}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?n:Fe}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}lS=m_;f_(wn),D5(wn);wn.formAssociated=!0;wn.shadowRootOptions={mode:"open",delegatesFocus:!0};ue([ut({type:Boolean,reflect:!0})],wn.prototype,"disabled",void 0);ue([ut()],wn.prototype,"href",void 0);ue([ut()],wn.prototype,"target",void 0);ue([ut({type:Boolean,attribute:"trailing-icon"})],wn.prototype,"trailingIcon",void 0);ue([ut({type:Boolean,attribute:"has-icon"})],wn.prototype,"hasIcon",void 0);ue([ut()],wn.prototype,"type",void 0);ue([ut()],wn.prototype,"value",void 0);ue([jn(".button")],wn.prototype,"buttonElement",void 0);ue([KH({slot:"icon",flatten:!0})],wn.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class M5 extends wn{}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const L5=Vi`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-text-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let qp=class extends M5{};qp.styles=[y5,L5];qp=ue([Ho("md-text-button")],qp);const V5=["open"],$5=it("div",{slot:"headline"},"Conferma identità",-1),F5={key:0,slot:"content",id:"form-id",method:"dialog"},U5=["open"],B5=it("div",{slot:"headline"},"Codice non trovato",-1),j5={key:0,slot:"content",id:"form-id",method:"dialog"},H5={slot:"actions"},W5=ir({__name:"Scanner",setup(t){const e=ct(),n=ct(),r=ct(!1),i=ct(!1);async function s(c){n.value=c;const l=await VC(Ol(Dl,`codes/${c}`),{once:!0}).promise.value;if(!l){i.value=!0;return}e.value=Zt(()=>l.user),r.value=!0}function o(){r.value=!1;const c=e.value.value;dj(Ol(Dl,`scans/${new Date().getTime()}`),{code:n.value,timestamp:new Date,username:c.username,userRef:Ol(Dl,`users/${c.id}`)})}function a(){r.value=!1}return(c,l)=>(Et(),Sn(Mn,null,[xt(HH,{onCodeFound:s}),it("md-dialog",{onClose:l[0]||(l[0]=u=>r.value=!1),class:"removeDialog",type:"alert",open:r.value},[$5,e.value&&e.value.value?(Et(),Sn("form",F5,[it("div",null," Il codice corrisponde a: "+G_(e.value.value.username),1)])):qs("",!0),it("div",{slot:"actions"},[it("md-text-button",{form:"form-id",value:"cancel",onClick:a},"Annulla"),it("md-text-button",{form:"form-id",value:"confirm",onClick:o},"Conferma")])],40,V5),it("md-dialog",{onClose:l[2]||(l[2]=u=>i.value=!1),class:"removeDialog",type:"alert",open:i.value},[B5,n.value?(Et(),Sn("form",j5,[it("div",null," Il codice non corrisponde a nessun utente. Contatta gli sviluppatori con il seguente codice: "+G_(n.value),1)])):qs("",!0),it("div",H5,[it("md-text-button",{form:"form-id",value:"congirm",onClick:l[1]||(l[1]=u=>i.value=!1)},"Ok")])],40,U5)],64))}}),z5=t=>(vk("data-v-27e31cd3"),t=t(),wk(),t),q5=["src"],K5=z5(()=>it("img",{class:"accountImage",src:"https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/llwijg0ncg0pyknjcmnk",alt:""},null,-1)),G5=ir({__name:"AccountImage",setup(t){var r;const e=xm(),n=ct((r=e.value)==null?void 0:r.providerData[0].photoURL);return(i,s)=>{const o=Fk("RouterLink");return Et(),Sn("div",null,[vt(e)?(Et(),no(o,{key:0,to:"/myAccount"},{default:Hl(()=>[it("img",{class:"accountImage",src:n.value,referrerpolicy:"no-referrer",alt:""},null,8,q5)]),_:1})):(Et(),no(o,{key:1,to:"/myAccount"},{default:Hl(()=>[K5]),_:1}))])}}});const Q5=eR(G5,[["__scopeId","data-v-27e31cd3"]]);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Y5=Vi`@media(forced-colors: active){:host{--md-switch-disabled-selected-icon-color: GrayText;--md-switch-disabled-selected-icon-opacity: 1;--md-switch-disabled-selected-track-color: GrayText;--md-switch-disabled-track-opacity: 1;--md-switch-disabled-handle-color: GrayText;--md-switch-disabled-handle-opacity: 1;--md-switch-disabled-icon-color: Canvas;--md-switch-disabled-icon-opacity: 1;--md-switch-selected-focus-track-color: ButtonText;--md-switch-selected-hover-track-color: ButtonText;--md-switch-selected-icon-color: ButtonText;--md-switch-selected-hover-icon-color: ButtonText;--md-switch-selected-focus-icon-color: ButtonText;--md-switch-selected-pressed-icon-color: ButtonText;--md-switch-selected-pressed-track-color: ButtonText;--md-switch-selected-track-color: ButtonText;--md-switch-focus-handle-color: ButtonText;--md-switch-handle-color: ButtonText;--md-switch-hover-handle-color: ButtonText;--md-switch-icon-color: Canvas;--md-switch-hover-icon-color: Canvas;--md-switch-focus-icon-color: Canvas;--md-switch-pressed-icon-color: Canvas;--md-switch-pressed-handle-color: ButtonText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Rr extends er{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.disabled=!1,this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.value="on",this.internals=this.attachInternals(),this.addEventListener("click",e=>{var n;sS(e)&&((n=this.button)==null||n.focus(),this.button!=null&&iS(this.button))})}update(e){const n=String(this.selected);this.internals.setFormValue(this.selected?this.value:null,n),super.update(e)}render(){return Cn`
      <button
        id="switch"
        type="button"
        class="switch ${pc(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label=${this.ariaLabel||Fe}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <md-focus-ring part="focus-ring"></md-focus-ring>
        <span class="track">
          ${this.renderHandle()}
        </span>
      </button>
    `}getRenderClasses(){return{"switch--selected":this.selected,"switch--unselected":!this.selected}}renderHandle(){const e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return Cn`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${pc(e)}">
          ${this.shouldShowIcons()?this.renderIcons():Cn``}
        </span>
      </span>
    `}renderIcons(){return Cn`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?Cn``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return Cn`
      <svg class="icon icon--on" viewBox="0 0 24 24">
        <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z"/>
      </svg>
    `}renderOffIcon(){return Cn`
      <svg class="icon icon--off" viewBox="0 0 24 24">
        <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"/>
      </svg>
    `}renderTouchTarget(){return Cn`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleClick(){this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected=e==="true"}}f_(Rr);Rr.shadowRootOptions={mode:"open",delegatesFocus:!0};Rr.formAssociated=!0;ue([ut({type:Boolean,reflect:!0})],Rr.prototype,"disabled",void 0);ue([ut({type:Boolean})],Rr.prototype,"selected",void 0);ue([ut({type:Boolean})],Rr.prototype,"icons",void 0);ue([ut({type:Boolean,attribute:"show-only-selected-icon"})],Rr.prototype,"showOnlySelectedIcon",void 0);ue([jn("button")],Rr.prototype,"button",void 0);ue([ut()],Rr.prototype,"value",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const J5=Vi`:host{--_disabled-selected-handle-color: var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));--_disabled-selected-handle-opacity: var(--md-switch-disabled-selected-handle-opacity, 1);--_disabled-selected-icon-color: var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-switch-disabled-selected-icon-opacity, 0.38);--_disabled-selected-track-color: var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-track-opacity: var(--md-switch-disabled-track-opacity, 0.12);--_handle-shape: var(--md-switch-handle-shape, 9999px);--_pressed-handle-height: var(--md-switch-pressed-handle-height, 28px);--_pressed-handle-width: var(--md-switch-pressed-handle-width, 28px);--_selected-focus-handle-color: var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-focus-icon-color: var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-focus-track-color: var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4));--_selected-handle-color: var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff));--_selected-handle-height: var(--md-switch-selected-handle-height, 24px);--_selected-handle-width: var(--md-switch-selected-handle-width, 24px);--_selected-hover-handle-color: var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-hover-icon-color: var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-hover-state-layer-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--_selected-hover-track-color: var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4));--_selected-icon-color: var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-icon-size: var(--md-switch-selected-icon-size, 16px);--_selected-pressed-handle-color: var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-pressed-icon-color: var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-pressed-state-layer-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12);--_selected-pressed-track-color: var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4));--_selected-track-color: var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4));--_state-layer-shape: var(--md-switch-state-layer-shape, 9999px);--_state-layer-size: var(--md-switch-state-layer-size, 40px);--_track-height: var(--md-switch-track-height, 32px);--_track-outline-width: var(--md-switch-track-outline-width, 2px);--_track-shape: var(--md-switch-track-shape, 9999px);--_track-width: var(--md-switch-track-width, 52px);--_with-icon-handle-height: var(--md-switch-with-icon-handle-height, 24px);--_with-icon-handle-width: var(--md-switch-with-icon-handle-width, 24px);--_disabled-handle-color: var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-opacity: var(--md-switch-disabled-handle-opacity, 0.38);--_disabled-icon-color: var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-icon-opacity: var(--md-switch-disabled-icon-opacity, 0.38);--_disabled-track-color: var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-track-outline-color: var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-handle-color: var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color: var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-color: var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-outline-color: var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-color: var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e));--_handle-height: var(--md-switch-handle-height, 16px);--_handle-width: var(--md-switch-handle-width, 16px);--_hover-handle-color: var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-state-layer-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--_hover-track-color: var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-track-outline-color: var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e));--_icon-color: var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_icon-size: var(--md-switch-icon-size, 16px);--_pressed-handle-color: var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-state-layer-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12);--_pressed-track-color: var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-track-outline-color: var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e));--_track-color: var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-outline-color: var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-shape-start-start: var( --md-switch-handle-shape-start-start, var(--_handle-shape) );--_handle-shape-start-end: var( --md-switch-handle-shape-start-end, var(--_handle-shape) );--_handle-shape-end-end: var( --md-switch-handle-shape-end-end, var(--_handle-shape) );--_handle-shape-end-start: var( --md-switch-handle-shape-end-start, var(--_handle-shape) );--_track-shape-start-start: var( --md-switch-track-shape-start-start, var(--_track-shape) );--_track-shape-start-end: var( --md-switch-track-shape-start-end, var(--_track-shape) );--_track-shape-end-end: var( --md-switch-track-shape-end-end, var(--_track-shape) );--_track-shape-end-start: var( --md-switch-track-shape-end-start, var(--_track-shape) );display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_track-height))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--_track-shape-start-start);--md-focus-ring-shape-start-end: var(--_track-shape-start-end);--md-focus-ring-shape-end-end: var(--_track-shape-end-end);--md-focus-ring-shape-end-start: var(--_track-shape-end-start)}.switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;padding:0;position:relative;width:var(--_track-width);height:var(--_track-height);border-start-start-radius:var(--_track-shape-start-start);border-start-end-radius:var(--_track-shape-start-end);border-end-end-radius:var(--_track-shape-end-end);border-end-start-radius:var(--_track-shape-end-start)}.touch{position:absolute;height:48px;width:100%}:host([touch-target=none]) .touch{display:none}.switch:disabled{cursor:default;pointer-events:none}.switch:disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.switch:disabled .track::before{background-clip:content-box}.switch--selected:disabled .track{background-clip:border-box}.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.switch:disabled .track::before,.switch:disabled .track::after{transition:none;opacity:var(--_disabled-track-opacity)}.switch--selected .track::before{background-color:var(--_selected-track-color)}.switch--selected:hover .track::before{background-color:var(--_selected-hover-track-color)}.switch--selected:focus-within .track::before{background-color:var(--_selected-focus-track-color)}.switch--selected:active .track::before{background-color:var(--_selected-pressed-track-color)}.switch--selected:disabled .track::before{background-color:var(--_disabled-selected-track-color)}.switch--unselected .track::before{background-color:var(--_track-color);border-color:var(--_track-outline-color);border-style:solid;border-width:var(--_track-outline-width)}.switch--unselected:hover .track::before{background-color:var(--_hover-track-color);border-color:var(--_hover-track-outline-color)}.switch--unselected:focus-visible .track::before{background-color:var(--_focus-track-color);border-color:var(--_focus-track-outline-color)}.switch--unselected:active .track::before{background-color:var(--_pressed-track-color);border-color:var(--_pressed-track-outline-color)}.switch--unselected:disabled .track::before{background-color:var(--_disabled-track-color);border-color:var(--_disabled-track-outline-color)}.handle-container{display:grid;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.switch--selected .handle-container{margin-inline-start:calc(var(--_track-width) - var(--_track-height))}.switch--unselected .handle-container{margin-inline-end:calc(var(--_track-width) - var(--_track-height))}.switch:disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--_handle-shape-start-start);border-start-end-radius:var(--_handle-shape-start-end);border-end-end-radius:var(--_handle-shape-end-end);border-end-start-radius:var(--_handle-shape-end-start);height:var(--_handle-height);width:var(--_handle-width);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.switch:disabled .handle,.switch:disabled .handle::before{transition:none}.switch--selected .handle{height:var(--_selected-handle-height);width:var(--_selected-handle-width)}.handle.with-icon{height:var(--_with-icon-handle-height);width:var(--_with-icon-handle-width)}.switch--selected:enabled:active .handle,.switch--unselected:enabled:active .handle{height:var(--_pressed-handle-height);width:var(--_pressed-handle-width);transition-timing-function:linear;transition-duration:100ms}.switch--selected .handle::before{background-color:var(--_selected-handle-color)}.switch--selected:hover .handle::before{background-color:var(--_selected-hover-handle-color)}.switch--selected:focus-within .handle::before{background-color:var(--_selected-focus-handle-color)}.switch--selected:active .handle::before{background-color:var(--_selected-pressed-handle-color)}.switch--selected:disabled .handle::before{background-color:var(--_disabled-selected-handle-color);opacity:var(--_disabled-selected-handle-opacity)}.switch--unselected .handle::before{background-color:var(--_handle-color)}.switch--unselected:hover .handle::before{background-color:var(--_hover-handle-color)}.switch--unselected:focus-within .handle::before{background-color:var(--_focus-handle-color)}.switch--unselected:active .handle::before{background-color:var(--_pressed-handle-color)}.switch--unselected:disabled .handle::before{background-color:var(--_disabled-handle-color);opacity:var(--_disabled-handle-opacity)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.switch--selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.switch--unselected md-ripple{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.switch:disabled .icon{transition:none}.switch--selected .icon--on,.switch--unselected .icon--off{opacity:1}.switch--unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--_icon-size);height:var(--_icon-size);fill:var(--_icon-color)}.switch--unselected:hover .icon--off{fill:var(--_hover-icon-color)}.switch--unselected:focus-within .icon--off{fill:var(--_focus-icon-color)}.switch--unselected:active .icon--off{fill:var(--_pressed-icon-color)}.switch--unselected:disabled .icon--off{fill:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.icon--on{width:var(--_selected-icon-size);height:var(--_selected-icon-size);fill:var(--_selected-icon-color)}.switch--selected:hover .icon--on{fill:var(--_selected-hover-icon-color)}.switch--selected:focus-within .icon--on{fill:var(--_selected-focus-icon-color)}.switch--selected:active .icon--on{fill:var(--_selected-pressed-icon-color)}.switch--selected:disabled .icon--on{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=switch-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Kp=class extends Rr{};Kp.styles=[J5,Y5];Kp=ue([Ho("md-switch")],Kp);const X5={key:1,class:"section"},Z5={class:"scanner"},eW=it("div",{class:"text"}," Scansiona un codice e conferma l'identità per timbrare ",-1),tW={key:2,class:"section"},nW={class:"code"},rW=it("div",{class:"text"}," Questo è il tuo codice, mostralo per timbrare ",-1),iW=ir({__name:"HomeView",setup(t){var a;const e=xm(),n=VC(Ol(Dl,`users/${(a=e.value)==null?void 0:a.uid}`)),r=Zt(()=>{var c;return((c=n.value)==null?void 0:c.role)==="scanner"}),i=Zt(()=>{var c;return(c=n.value)==null?void 0:c.actualCode}),s=ct(window.innerWidth),o=()=>s.value=window.innerWidth;return window.addEventListener("resize",o),Yu(()=>window.removeEventListener("resize",o)),(c,l)=>(Et(),Sn("main",null,[s.value<900||!vt(e)?(Et(),no(Q5,{key:0})):qs("",!0),r.value?(Et(),Sn("div",X5,[it("div",Z5,[xt(W5)]),eW])):qs("",!0),!r.value&&i.value?(Et(),Sn("div",tW,[it("div",nW,[xt(q6,{codeString:i.value},null,8,["codeString"])]),rW])):qs("",!0)]))}});const uS=YO({history:fO("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!0},component:iW},{path:"/login",name:"login",component:()=>n0(()=>import("./LoginView-acda3dcf.js"),["assets/LoginView-acda3dcf.js","assets/filled-button-ddbd1f5a.js","assets/LoginView-82260fdb.css"])},{path:"/myAccount",name:"myAccount",meta:{requiresAuth:!0},component:()=>n0(()=>import("./UserView-b386e6a7.js"),["assets/UserView-b386e6a7.js","assets/filled-button-ddbd1f5a.js","assets/UserView-da84faf4.css"])}]});uS.beforeEach(async t=>{if(t.meta.requiresAuth&&!await T2())return{path:"/login",query:{redirect:t.fullPath}}});const Zh=WN(Jj);Zh.use(GN());Zh.use(uS);Zh.use(Yj,{firebaseApp:u_,modules:[Qj()]});Zh.mount("#app");export{sW as $,Fe as A,Et as B,vk as C,a5 as D,mc as E,wk as F,aW as G,lW as H,dj as I,Ol as J,Dl as K,cW as L,eR as M,wn as N,y5 as O,ci as P,um as Q,fW as R,cN as S,vs as T,hW as U,dW as V,xm as W,vt as X,xt as Y,Mn as Z,ue as _,Vi as a,VC as a0,vW as a1,yW as a2,no as a3,uW as a4,u5 as b,h5 as c,l5 as d,Ho as e,x5 as f,d5 as g,F0 as h,jn as i,ir as j,ct as k,KH as l,Sn as m,ut as n,pc as o,it as p,nl as q,f_ as r,er as s,Ss as t,wW as u,oW as v,Sk as w,Cn as x,G_ as y,qs as z};
