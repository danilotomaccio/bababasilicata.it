(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Rp(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Qe={},xs=[],Hn=()=>{},KP=()=>!1,GP=/^on[^a-z]/,Iu=t=>GP.test(t),Sp=t=>t.startsWith("onUpdate:"),Ct=Object.assign,Pp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},QP=Object.prototype.hasOwnProperty,ke=(t,e)=>QP.call(t,e),fe=Array.isArray,Ls=t=>bu(t)==="[object Map]",pE=t=>bu(t)==="[object Set]",_e=t=>typeof t=="function",Rt=t=>typeof t=="string",kp=t=>typeof t=="symbol",nt=t=>t!==null&&typeof t=="object",mE=t=>nt(t)&&_e(t.then)&&_e(t.catch),gE=Object.prototype.toString,bu=t=>gE.call(t),YP=t=>bu(t).slice(8,-1),_E=t=>bu(t)==="[object Object]",Np=t=>Rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ll=Rp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Au=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},JP=/-(\w)/g,lr=Au(t=>t.replace(JP,(e,n)=>n?n.toUpperCase():"")),XP=/\B([A-Z])/g,yo=Au(t=>t.replace(XP,"-$1").toLowerCase()),Cu=Au(t=>t.charAt(0).toUpperCase()+t.slice(1)),zh=Au(t=>t?`on${Cu(t)}`:""),ba=(t,e)=>!Object.is(t,e),qh=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ZP=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let C_;const Jd=()=>C_||(C_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Op(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Rt(r)?r1(r):Op(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Rt(t))return t;if(nt(t))return t}}const e1=/;(?![^(]*\))/g,t1=/:([^]+)/,n1=/\/\*[^]*?\*\//g;function r1(t){const e={};return t.replace(n1,"").split(e1).forEach(n=>{if(n){const r=n.split(t1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ru(t){let e="";if(Rt(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=Ru(t[n]);r&&(e+=r+" ")}else if(nt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const i1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s1=Rp(i1);function yE(t){return!!t||t===""}const o1=t=>Rt(t)?t:t==null?"":fe(t)||nt(t)&&(t.toString===gE||!_e(t.toString))?JSON.stringify(t,vE,2):String(t),vE=(t,e)=>e&&e.__v_isRef?vE(t,e.value):Ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:pE(e)?{[`Set(${e.size})`]:[...e.values()]}:nt(e)&&!fe(e)&&!_E(e)?String(e):e;let wn;class wE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wn,!e&&wn&&(this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=wn;try{return wn=this,e()}finally{wn=n}}}on(){wn=this}off(){wn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function EE(t){return new wE(t)}function a1(t,e=wn){e&&e.active&&e.effects.push(t)}function TE(){return wn}function c1(t){wn&&wn.cleanups.push(t)}const Dp=t=>{const e=new Set(t);return e.w=0,e.n=0,e},IE=t=>(t.w&vi)>0,bE=t=>(t.n&vi)>0,l1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=vi},u1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];IE(i)&&!bE(i)?i.delete(t):e[n++]=i,i.w&=~vi,i.n&=~vi}e.length=n}},Al=new WeakMap;let Yo=0,vi=1;const Xd=30;let Vn;const Yi=Symbol(""),Zd=Symbol("");class Mp{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,a1(this,r)}run(){if(!this.active)return this.fn();let e=Vn,n=hi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Vn,Vn=this,hi=!0,vi=1<<++Yo,Yo<=Xd?l1(this):R_(this),this.fn()}finally{Yo<=Xd&&u1(this),vi=1<<--Yo,Vn=this.parent,hi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Vn===this?this.deferStop=!0:this.active&&(R_(this),this.onStop&&this.onStop(),this.active=!1)}}function R_(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let hi=!0;const AE=[];function vo(){AE.push(hi),hi=!1}function wo(){const t=AE.pop();hi=t===void 0?!0:t}function mn(t,e,n){if(hi&&Vn){let r=Al.get(t);r||Al.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Dp()),CE(i)}}function CE(t,e){let n=!1;Yo<=Xd?bE(t)||(t.n|=vi,n=!IE(t)):n=!t.has(Vn),n&&(t.add(Vn),Vn.deps.push(t))}function Vr(t,e,n,r,i,s){const o=Al.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&fe(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":fe(t)?Np(n)&&a.push(o.get("length")):(a.push(o.get(Yi)),Ls(t)&&a.push(o.get(Zd)));break;case"delete":fe(t)||(a.push(o.get(Yi)),Ls(t)&&a.push(o.get(Zd)));break;case"set":Ls(t)&&a.push(o.get(Yi));break}if(a.length===1)a[0]&&ef(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ef(Dp(c))}}function ef(t,e){const n=fe(t)?t:[...t];for(const r of n)r.computed&&S_(r);for(const r of n)r.computed||S_(r)}function S_(t,e){(t!==Vn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function h1(t,e){var n;return(n=Al.get(t))==null?void 0:n.get(e)}const d1=Rp("__proto__,__v_isRef,__isVue"),RE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kp)),f1=xp(),p1=xp(!1,!0),m1=xp(!0),P_=g1();function g1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=xe(this);for(let s=0,o=this.length;s<o;s++)mn(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(xe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){vo();const r=xe(this)[e].apply(this,n);return wo(),r}}),t}function _1(t){const e=xe(this);return mn(e,"has",t),e.hasOwnProperty(t)}function xp(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?D1:OE:e?NE:kE).get(r))return r;const o=fe(r);if(!t){if(o&&ke(P_,i))return Reflect.get(P_,i,s);if(i==="hasOwnProperty")return _1}const a=Reflect.get(r,i,s);return(kp(i)?RE.has(i):d1(i))||(t||mn(r,"get",i),e)?a:At(a)?o&&Np(i)?a:a.value:nt(a)?t?ME(a):Pu(a):a}}const y1=SE(),v1=SE(!0);function SE(t=!1){return function(n,r,i,s){let o=n[r];if(Ks(o)&&At(o)&&!At(i))return!1;if(!t&&(!Cl(i)&&!Ks(i)&&(o=xe(o),i=xe(i)),!fe(n)&&At(o)&&!At(i)))return o.value=i,!0;const a=fe(n)&&Np(r)?Number(r)<n.length:ke(n,r),c=Reflect.set(n,r,i,s);return n===xe(s)&&(a?ba(i,o)&&Vr(n,"set",r,i):Vr(n,"add",r,i)),c}}function w1(t,e){const n=ke(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Vr(t,"delete",e,void 0),r}function E1(t,e){const n=Reflect.has(t,e);return(!kp(e)||!RE.has(e))&&mn(t,"has",e),n}function T1(t){return mn(t,"iterate",fe(t)?"length":Yi),Reflect.ownKeys(t)}const PE={get:f1,set:y1,deleteProperty:w1,has:E1,ownKeys:T1},I1={get:m1,set(t,e){return!0},deleteProperty(t,e){return!0}},b1=Ct({},PE,{get:p1,set:v1}),Lp=t=>t,Su=t=>Reflect.getPrototypeOf(t);function $c(t,e,n=!1,r=!1){t=t.__v_raw;const i=xe(t),s=xe(e);n||(e!==s&&mn(i,"get",e),mn(i,"get",s));const{has:o}=Su(i),a=r?Lp:n?Up:Aa;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Uc(t,e=!1){const n=this.__v_raw,r=xe(n),i=xe(t);return e||(t!==i&&mn(r,"has",t),mn(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Bc(t,e=!1){return t=t.__v_raw,!e&&mn(xe(t),"iterate",Yi),Reflect.get(t,"size",t)}function k_(t){t=xe(t);const e=xe(this);return Su(e).has.call(e,t)||(e.add(t),Vr(e,"add",t,t)),this}function N_(t,e){e=xe(e);const n=xe(this),{has:r,get:i}=Su(n);let s=r.call(n,t);s||(t=xe(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?ba(e,o)&&Vr(n,"set",t,e):Vr(n,"add",t,e),this}function O_(t){const e=xe(this),{has:n,get:r}=Su(e);let i=n.call(e,t);i||(t=xe(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Vr(e,"delete",t,void 0),s}function D_(){const t=xe(this),e=t.size!==0,n=t.clear();return e&&Vr(t,"clear",void 0,void 0),n}function jc(t,e){return function(r,i){const s=this,o=s.__v_raw,a=xe(o),c=e?Lp:t?Up:Aa;return!t&&mn(a,"iterate",Yi),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Hc(t,e,n){return function(...r){const i=this.__v_raw,s=xe(i),o=Ls(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?Lp:e?Up:Aa;return!e&&mn(s,"iterate",c?Zd:Yi),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function Yr(t){return function(...e){return t==="delete"?!1:this}}function A1(){const t={get(s){return $c(this,s)},get size(){return Bc(this)},has:Uc,add:k_,set:N_,delete:O_,clear:D_,forEach:jc(!1,!1)},e={get(s){return $c(this,s,!1,!0)},get size(){return Bc(this)},has:Uc,add:k_,set:N_,delete:O_,clear:D_,forEach:jc(!1,!0)},n={get(s){return $c(this,s,!0)},get size(){return Bc(this,!0)},has(s){return Uc.call(this,s,!0)},add:Yr("add"),set:Yr("set"),delete:Yr("delete"),clear:Yr("clear"),forEach:jc(!0,!1)},r={get(s){return $c(this,s,!0,!0)},get size(){return Bc(this,!0)},has(s){return Uc.call(this,s,!0)},add:Yr("add"),set:Yr("set"),delete:Yr("delete"),clear:Yr("clear"),forEach:jc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Hc(s,!1,!1),n[s]=Hc(s,!0,!1),e[s]=Hc(s,!1,!0),r[s]=Hc(s,!0,!0)}),[t,n,e,r]}const[C1,R1,S1,P1]=A1();function Vp(t,e){const n=e?t?P1:S1:t?R1:C1;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ke(n,i)&&i in r?n:r,i,s)}const k1={get:Vp(!1,!1)},N1={get:Vp(!1,!0)},O1={get:Vp(!0,!1)},kE=new WeakMap,NE=new WeakMap,OE=new WeakMap,D1=new WeakMap;function M1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function x1(t){return t.__v_skip||!Object.isExtensible(t)?0:M1(YP(t))}function Pu(t){return Ks(t)?t:Fp(t,!1,PE,k1,kE)}function DE(t){return Fp(t,!1,b1,N1,NE)}function ME(t){return Fp(t,!0,I1,O1,OE)}function Fp(t,e,n,r,i){if(!nt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=x1(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Vs(t){return Ks(t)?Vs(t.__v_raw):!!(t&&t.__v_isReactive)}function Ks(t){return!!(t&&t.__v_isReadonly)}function Cl(t){return!!(t&&t.__v_isShallow)}function xE(t){return Vs(t)||Ks(t)}function xe(t){const e=t&&t.__v_raw;return e?xe(e):t}function $p(t){return bl(t,"__v_skip",!0),t}const Aa=t=>nt(t)?Pu(t):t,Up=t=>nt(t)?ME(t):t;function LE(t){hi&&Vn&&(t=xe(t),CE(t.dep||(t.dep=Dp())))}function VE(t,e){t=xe(t);const n=t.dep;n&&ef(n)}function At(t){return!!(t&&t.__v_isRef===!0)}function Wt(t){return $E(t,!1)}function FE(t){return $E(t,!0)}function $E(t,e){return At(t)?t:new L1(t,e)}class L1{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:xe(e),this._value=n?e:Aa(e)}get value(){return LE(this),this._value}set value(e){const n=this.__v_isShallow||Cl(e)||Ks(e);e=n?e:xe(e),ba(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Aa(e),VE(this))}}function Nt(t){return At(t)?t.value:t}const V1={get:(t,e,n)=>Nt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return At(i)&&!At(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function UE(t){return Vs(t)?t:new Proxy(t,V1)}function F1(t){const e=fe(t)?new Array(t.length):{};for(const n in t)e[n]=U1(t,n);return e}class $1{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return h1(xe(this._object),this._key)}}function U1(t,e,n){const r=t[e];return At(r)?r:new $1(t,e,n)}class B1{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Mp(e,()=>{this._dirty||(this._dirty=!0,VE(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=xe(this);return LE(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function j1(t,e,n=!1){let r,i;const s=_e(t);return s?(r=t,i=Hn):(r=t.get,i=t.set),new B1(r,i,s||!i,n)}function di(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){ku(s,e,n)}return i}function Wn(t,e,n,r){if(_e(t)){const s=di(t,e,n,r);return s&&mE(s)&&s.catch(o=>{ku(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Wn(t[s],e,n,r));return i}function ku(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){di(c,null,10,[t,o,a]);return}}H1(t,n,i,r)}function H1(t,e,n,r=!0){console.error(t)}let Ca=!1,tf=!1;const zt=[];let Zn=0;const Fs=[];let Sr=null,Ui=0;const BE=Promise.resolve();let Bp=null;function jE(t){const e=Bp||BE;return t?e.then(this?t.bind(this):t):e}function W1(t){let e=Zn+1,n=zt.length;for(;e<n;){const r=e+n>>>1;Ra(zt[r])<t?e=r+1:n=r}return e}function jp(t){(!zt.length||!zt.includes(t,Ca&&t.allowRecurse?Zn+1:Zn))&&(t.id==null?zt.push(t):zt.splice(W1(t.id),0,t),HE())}function HE(){!Ca&&!tf&&(tf=!0,Bp=BE.then(zE))}function z1(t){const e=zt.indexOf(t);e>Zn&&zt.splice(e,1)}function q1(t){fe(t)?Fs.push(...t):(!Sr||!Sr.includes(t,t.allowRecurse?Ui+1:Ui))&&Fs.push(t),HE()}function M_(t,e=Ca?Zn+1:0){for(;e<zt.length;e++){const n=zt[e];n&&n.pre&&(zt.splice(e,1),e--,n())}}function WE(t){if(Fs.length){const e=[...new Set(Fs)];if(Fs.length=0,Sr){Sr.push(...e);return}for(Sr=e,Sr.sort((n,r)=>Ra(n)-Ra(r)),Ui=0;Ui<Sr.length;Ui++)Sr[Ui]();Sr=null,Ui=0}}const Ra=t=>t.id==null?1/0:t.id,K1=(t,e)=>{const n=Ra(t)-Ra(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zE(t){tf=!1,Ca=!0,zt.sort(K1);const e=Hn;try{for(Zn=0;Zn<zt.length;Zn++){const n=zt[Zn];n&&n.active!==!1&&di(n,null,14)}}finally{Zn=0,zt.length=0,WE(),Ca=!1,Bp=null,(zt.length||Fs.length)&&zE()}}function G1(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Qe;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||Qe;p&&(i=n.map(m=>Rt(m)?m.trim():m)),h&&(i=n.map(ZP))}let a,c=r[a=zh(e)]||r[a=zh(lr(e))];!c&&s&&(c=r[a=zh(yo(e))]),c&&Wn(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Wn(l,t,6,i)}}function qE(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!_e(t)){const c=l=>{const u=qE(l,e,!0);u&&(a=!0,Ct(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(nt(t)&&r.set(t,null),null):(fe(s)?s.forEach(c=>o[c]=null):Ct(o,s),nt(t)&&r.set(t,o),o)}function Nu(t,e){return!t||!Iu(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,yo(e))||ke(t,e))}let Mt=null,Ou=null;function Rl(t){const e=Mt;return Mt=t,Ou=t&&t.type.__scopeId||null,e}function rW(t){Ou=t}function iW(){Ou=null}function KE(t,e=Mt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&z_(-1);const s=Rl(e);let o;try{o=t(...i)}finally{Rl(s),r._d&&z_(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Kh(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:m,ctx:y,inheritAttrs:v}=t;let b,A;const k=Rl(t);try{if(n.shapeFlag&4){const P=i||r;b=Xn(u.call(P,P,h,s,m,p,y)),A=c}else{const P=e;b=Xn(P.length>1?P(s,{attrs:c,slots:a,emit:l}):P(s,null)),A=e.props?c:Q1(c)}}catch(P){la.length=0,ku(P,t,1),b=Gt(wi)}let N=b;if(A&&v!==!1){const P=Object.keys(A),{shapeFlag:j}=N;P.length&&j&7&&(o&&P.some(Sp)&&(A=Y1(A,o)),N=Gs(N,A))}return n.dirs&&(N=Gs(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),b=N,Rl(k),b}const Q1=t=>{let e;for(const n in t)(n==="class"||n==="style"||Iu(n))&&((e||(e={}))[n]=t[n]);return e},Y1=(t,e)=>{const n={};for(const r in t)(!Sp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function J1(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?x_(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!Nu(l,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?x_(r,o,l):!0:!!o;return!1}function x_(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Nu(n,s))return!0}return!1}function X1({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Z1=t=>t.__isSuspense;function ek(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):q1(t)}const Wc={};function fi(t,e,n){return GE(t,e,n)}function GE(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Qe){var a;const c=TE()===((a=It)==null?void 0:a.scope)?It:null;let l,u=!1,h=!1;if(At(t)?(l=()=>t.value,u=Cl(t)):Vs(t)?(l=()=>t,r=!0):fe(t)?(h=!0,u=t.some(P=>Vs(P)||Cl(P)),l=()=>t.map(P=>{if(At(P))return P.value;if(Vs(P))return ji(P);if(_e(P))return di(P,c,2)})):_e(t)?e?l=()=>di(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Wn(t,c,3,[m])}:l=Hn,e&&r){const P=l;l=()=>ji(P())}let p,m=P=>{p=k.onStop=()=>{di(P,c,4)}},y;if(ka)if(m=Hn,e?n&&Wn(e,c,3,[l(),h?[]:void 0,m]):l(),i==="sync"){const P=Kk();y=P.__watcherHandles||(P.__watcherHandles=[])}else return Hn;let v=h?new Array(t.length).fill(Wc):Wc;const b=()=>{if(k.active)if(e){const P=k.run();(r||u||(h?P.some((j,W)=>ba(j,v[W])):ba(P,v)))&&(p&&p(),Wn(e,c,3,[P,v===Wc?void 0:h&&v[0]===Wc?[]:v,m]),v=P)}else k.run()};b.allowRecurse=!!e;let A;i==="sync"?A=b:i==="post"?A=()=>hn(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),A=()=>jp(b));const k=new Mp(l,A);e?n?b():v=k.run():i==="post"?hn(k.run.bind(k),c&&c.suspense):k.run();const N=()=>{k.stop(),c&&c.scope&&Pp(c.scope.effects,k)};return y&&y.push(N),N}function tk(t,e,n){const r=this.proxy,i=Rt(t)?t.includes(".")?QE(r,t):()=>r[t]:t.bind(r,r);let s;_e(e)?s=e:(s=e.handler,n=e);const o=It;Qs(this);const a=GE(i,s.bind(r),n);return o?Qs(o):Ji(),a}function QE(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function ji(t,e){if(!nt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),At(t))ji(t.value,e);else if(fe(t))for(let n=0;n<t.length;n++)ji(t[n],e);else if(pE(t)||Ls(t))t.forEach(n=>{ji(n,e)});else if(_E(t))for(const n in t)ji(t[n],e);return t}function nk(t,e){const n=Mt;if(n===null)return t;const r=Lu(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Qe]=e[s];o&&(_e(o)&&(o={mounted:o,updated:o}),o.deep&&ji(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function xi(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(vo(),Wn(c,n,8,[t.el,a,t,e]),wo())}}function fr(t,e){return _e(t)?(()=>Ct({name:t.name},e,{setup:t}))():t}const aa=t=>!!t.type.__asyncLoader,YE=t=>t.type.__isKeepAlive;function rk(t,e){JE(t,"a",e)}function ik(t,e){JE(t,"da",e)}function JE(t,e,n=It){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Du(e,r,n),n){let i=n.parent;for(;i&&i.parent;)YE(i.parent.vnode)&&sk(r,e,n,i),i=i.parent}}function sk(t,e,n,r){const i=Du(e,t,r,!0);Wp(()=>{Pp(r[e],i)},n)}function Du(t,e,n=It,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;vo(),Qs(n);const a=Wn(e,n,t,o);return Ji(),wo(),a});return r?i.unshift(s):i.push(s),s}}const Wr=t=>(e,n=It)=>(!ka||t==="sp")&&Du(t,(...r)=>e(...r),n),ok=Wr("bm"),Hp=Wr("m"),ak=Wr("bu"),ck=Wr("u"),lk=Wr("bum"),Wp=Wr("um"),XE=Wr("sp"),uk=Wr("rtg"),hk=Wr("rtc");function dk(t,e=It){Du("ec",t,e)}const ZE="components";function sW(t,e){return pk(ZE,t,!0,e)||t}const fk=Symbol.for("v-ndc");function pk(t,e,n=!0,r=!1){const i=Mt||It;if(i){const s=i.type;if(t===ZE){const a=Wk(s,!1);if(a&&(a===e||a===lr(e)||a===Cu(lr(e))))return s}const o=L_(i[t]||s[t],e)||L_(i.appContext[t],e);return!o&&r?s:o}}function L_(t,e){return t&&(t[e]||t[lr(e)]||t[Cu(lr(e))])}function e0(t,e,n={},r,i){if(Mt.isCE||Mt.parent&&aa(Mt.parent)&&Mt.parent.isCE)return e!=="default"&&(n.name=e),Gt("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),fn();const o=s&&t0(s(n)),a=Pa(Rn,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function t0(t){return t.some(e=>kl(e)?!(e.type===wi||e.type===Rn&&!t0(e.children)):!0)?t:null}const nf=t=>t?p0(t)?Lu(t)||t.proxy:nf(t.parent):null,ca=Ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nf(t.parent),$root:t=>nf(t.root),$emit:t=>t.emit,$options:t=>zp(t),$forceUpdate:t=>t.f||(t.f=()=>jp(t.update)),$nextTick:t=>t.n||(t.n=jE.bind(t.proxy)),$watch:t=>tk.bind(t)}),Gh=(t,e)=>t!==Qe&&!t.__isScriptSetup&&ke(t,e),mk={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Gh(r,e))return o[e]=1,r[e];if(i!==Qe&&ke(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ke(l,e))return o[e]=3,s[e];if(n!==Qe&&ke(n,e))return o[e]=4,n[e];rf&&(o[e]=0)}}const u=ca[e];let h,p;if(u)return e==="$attrs"&&mn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Qe&&ke(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,ke(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Gh(i,e)?(i[e]=n,!0):r!==Qe&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Qe&&ke(t,o)||Gh(e,o)||(a=s[0])&&ke(a,o)||ke(r,o)||ke(ca,o)||ke(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function V_(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rf=!0;function gk(t){const e=zp(t),n=t.proxy,r=t.ctx;rf=!1,e.beforeCreate&&F_(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:y,activated:v,deactivated:b,beforeDestroy:A,beforeUnmount:k,destroyed:N,unmounted:P,render:j,renderTracked:W,renderTriggered:oe,errorCaptured:me,serverPrefetch:He,expose:Ce,inheritAttrs:st,components:kt,directives:qe,filters:vr}=e;if(l&&_k(l,r,null),o)for(const Le in o){const Ee=o[Le];_e(Ee)&&(r[Le]=Ee.bind(n))}if(i){const Le=i.call(n,n);nt(Le)&&(t.data=Pu(Le))}if(rf=!0,s)for(const Le in s){const Ee=s[Le],yn=_e(Ee)?Ee.bind(n,n):_e(Ee.get)?Ee.get.bind(n,n):Hn,mt=!_e(Ee)&&_e(Ee.set)?Ee.set.bind(n):Hn,gt=qt({get:yn,set:mt});Object.defineProperty(r,Le,{enumerable:!0,configurable:!0,get:()=>gt.value,set:_t=>gt.value=_t})}if(a)for(const Le in a)n0(a[Le],r,n,Le);if(c){const Le=_e(c)?c.call(n):c;Reflect.ownKeys(Le).forEach(Ee=>{ul(Ee,Le[Ee])})}u&&F_(u,t,"c");function Ue(Le,Ee){fe(Ee)?Ee.forEach(yn=>Le(yn.bind(n))):Ee&&Le(Ee.bind(n))}if(Ue(ok,h),Ue(Hp,p),Ue(ak,m),Ue(ck,y),Ue(rk,v),Ue(ik,b),Ue(dk,me),Ue(hk,W),Ue(uk,oe),Ue(lk,k),Ue(Wp,P),Ue(XE,He),fe(Ce))if(Ce.length){const Le=t.exposed||(t.exposed={});Ce.forEach(Ee=>{Object.defineProperty(Le,Ee,{get:()=>n[Ee],set:yn=>n[Ee]=yn})})}else t.exposed||(t.exposed={});j&&t.render===Hn&&(t.render=j),st!=null&&(t.inheritAttrs=st),kt&&(t.components=kt),qe&&(t.directives=qe)}function _k(t,e,n=Hn){fe(t)&&(t=sf(t));for(const r in t){const i=t[r];let s;nt(i)?"default"in i?s=zn(i.from||r,i.default,!0):s=zn(i.from||r):s=zn(i),At(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function F_(t,e,n){Wn(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function n0(t,e,n,r){const i=r.includes(".")?QE(n,r):()=>n[r];if(Rt(t)){const s=e[t];_e(s)&&fi(i,s)}else if(_e(t))fi(i,t.bind(n));else if(nt(t))if(fe(t))t.forEach(s=>n0(s,e,n,r));else{const s=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(s)&&fi(i,s,t)}}function zp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>Sl(c,l,o,!0)),Sl(c,e,o)),nt(e)&&s.set(e,c),c}function Sl(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Sl(t,s,n,!0),i&&i.forEach(o=>Sl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=yk[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yk={data:$_,props:U_,emits:U_,methods:Jo,computed:Jo,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:Jo,directives:Jo,watch:wk,provide:$_,inject:vk};function $_(t,e){return e?t?function(){return Ct(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function vk(t,e){return Jo(sf(t),sf(e))}function sf(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rn(t,e){return t?[...new Set([].concat(t,e))]:e}function Jo(t,e){return t?Ct(Object.create(null),t,e):e}function U_(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:Ct(Object.create(null),V_(t),V_(e??{})):e}function wk(t,e){if(!t)return e;if(!e)return t;const n=Ct(Object.create(null),t);for(const r in e)n[r]=rn(t[r],e[r]);return n}function r0(){return{app:null,config:{isNativeTag:KP,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ek=0;function Tk(t,e){return function(r,i=null){_e(r)||(r=Ct({},r)),i!=null&&!nt(i)&&(i=null);const s=r0(),o=new Set;let a=!1;const c=s.app={_uid:Ek++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Gk,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&_e(l.install)?(o.add(l),l.install(c,...u)):_e(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const p=Gt(r,i);return p.appContext=s,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Lu(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){Pl=c;try{return l()}finally{Pl=null}}};return c}}let Pl=null;function ul(t,e){if(It){let n=It.provides;const r=It.parent&&It.parent.provides;r===n&&(n=It.provides=Object.create(r)),n[t]=e}}function zn(t,e,n=!1){const r=It||Mt;if(r||Pl){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Pl._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}function Ik(t,e,n,r=!1){const i={},s={};bl(s,xu,1),t.propsDefaults=Object.create(null),i0(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:DE(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function bk(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=xe(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Nu(t.emitsOptions,p))continue;const m=e[p];if(c)if(ke(s,p))m!==s[p]&&(s[p]=m,l=!0);else{const y=lr(p);i[y]=of(c,a,y,m,t,!1)}else m!==s[p]&&(s[p]=m,l=!0)}}}else{i0(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!ke(e,h)&&((u=yo(h))===h||!ke(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=of(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!ke(e,h))&&(delete s[h],l=!0)}l&&Vr(t,"set","$attrs")}function i0(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ll(c))continue;const l=e[c];let u;i&&ke(i,u=lr(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Nu(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=xe(n),l=a||Qe;for(let u=0;u<s.length;u++){const h=s[u];n[h]=of(i,c,h,l[h],t,!ke(l,h))}}return o}function of(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ke(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Qs(i),r=l[n]=c.call(null,e),Ji())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===yo(n))&&(r=!0))}return r}function s0(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!_e(t)){const u=h=>{c=!0;const[p,m]=s0(h,e,!0);Ct(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return nt(t)&&r.set(t,xs),xs;if(fe(s))for(let u=0;u<s.length;u++){const h=lr(s[u]);B_(h)&&(o[h]=Qe)}else if(s)for(const u in s){const h=lr(u);if(B_(h)){const p=s[u],m=o[h]=fe(p)||_e(p)?{type:p}:Ct({},p);if(m){const y=W_(Boolean,m.type),v=W_(String,m.type);m[0]=y>-1,m[1]=v<0||y<v,(y>-1||ke(m,"default"))&&a.push(h)}}}const l=[o,a];return nt(t)&&r.set(t,l),l}function B_(t){return t[0]!=="$"}function j_(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function H_(t,e){return j_(t)===j_(e)}function W_(t,e){return fe(e)?e.findIndex(n=>H_(n,t)):_e(e)&&H_(e,t)?0:-1}const o0=t=>t[0]==="_"||t==="$stable",qp=t=>fe(t)?t.map(Xn):[Xn(t)],Ak=(t,e,n)=>{if(e._n)return e;const r=KE((...i)=>qp(e(...i)),n);return r._c=!1,r},a0=(t,e,n)=>{const r=t._ctx;for(const i in t){if(o0(i))continue;const s=t[i];if(_e(s))e[i]=Ak(i,s,r);else if(s!=null){const o=qp(s);e[i]=()=>o}}},c0=(t,e)=>{const n=qp(e);t.slots.default=()=>n},Ck=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=xe(e),bl(e,"_",n)):a0(e,t.slots={})}else t.slots={},e&&c0(t,e);bl(t.slots,xu,1)},Rk=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Qe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ct(i,e),!n&&a===1&&delete i._):(s=!e.$stable,a0(e,i)),o=e}else e&&(c0(t,e),o={default:1});if(s)for(const a in i)!o0(a)&&!(a in o)&&delete i[a]};function af(t,e,n,r,i=!1){if(fe(t)){t.forEach((p,m)=>af(p,e&&(fe(e)?e[m]:e),n,r,i));return}if(aa(r)&&!i)return;const s=r.shapeFlag&4?Lu(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Qe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Rt(l)?(u[l]=null,ke(h,l)&&(h[l]=null)):At(l)&&(l.value=null)),_e(c))di(c,a,12,[o,u]);else{const p=Rt(c),m=At(c);if(p||m){const y=()=>{if(t.f){const v=p?ke(h,c)?h[c]:u[c]:c.value;i?fe(v)&&Pp(v,s):fe(v)?v.includes(s)||v.push(s):p?(u[c]=[s],ke(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,ke(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,hn(y,n)):y()}}}const hn=ek;function Sk(t){return Pk(t)}function Pk(t,e){const n=Jd();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=Hn,insertStaticContent:y}=t,v=(w,E,C,O=null,x=null,L=null,Q=!1,H=null,z=!!E.dynamicChildren)=>{if(w===E)return;w&&!Uo(w,E)&&(O=D(w),_t(w,x,L,!0),w=null),E.patchFlag===-2&&(z=!1,E.dynamicChildren=null);const{type:V,ref:ne,shapeFlag:X}=E;switch(V){case Mu:b(w,E,C,O);break;case wi:A(w,E,C,O);break;case Qh:w==null&&k(E,C,O,Q);break;case Rn:kt(w,E,C,O,x,L,Q,H,z);break;default:X&1?j(w,E,C,O,x,L,Q,H,z):X&6?qe(w,E,C,O,x,L,Q,H,z):(X&64||X&128)&&V.process(w,E,C,O,x,L,Q,H,z,q)}ne!=null&&x&&af(ne,w&&w.ref,L,E||w,!E)},b=(w,E,C,O)=>{if(w==null)r(E.el=a(E.children),C,O);else{const x=E.el=w.el;E.children!==w.children&&l(x,E.children)}},A=(w,E,C,O)=>{w==null?r(E.el=c(E.children||""),C,O):E.el=w.el},k=(w,E,C,O)=>{[w.el,w.anchor]=y(w.children,E,C,O,w.el,w.anchor)},N=({el:w,anchor:E},C,O)=>{let x;for(;w&&w!==E;)x=p(w),r(w,C,O),w=x;r(E,C,O)},P=({el:w,anchor:E})=>{let C;for(;w&&w!==E;)C=p(w),i(w),w=C;i(E)},j=(w,E,C,O,x,L,Q,H,z)=>{Q=Q||E.type==="svg",w==null?W(E,C,O,x,L,Q,H,z):He(w,E,x,L,Q,H,z)},W=(w,E,C,O,x,L,Q,H)=>{let z,V;const{type:ne,props:X,shapeFlag:re,transition:le,dirs:ye}=w;if(z=w.el=o(w.type,L,X&&X.is,X),re&8?u(z,w.children):re&16&&me(w.children,z,null,O,x,L&&ne!=="foreignObject",Q,H),ye&&xi(w,null,O,"created"),oe(z,w,w.scopeId,Q,O),X){for(const Fe in X)Fe!=="value"&&!ll(Fe)&&s(z,Fe,null,X[Fe],L,w.children,O,x,ht);"value"in X&&s(z,"value",null,X.value),(V=X.onVnodeBeforeMount)&&Jn(V,O,w)}ye&&xi(w,null,O,"beforeMount");const We=(!x||x&&!x.pendingBranch)&&le&&!le.persisted;We&&le.beforeEnter(z),r(z,E,C),((V=X&&X.onVnodeMounted)||We||ye)&&hn(()=>{V&&Jn(V,O,w),We&&le.enter(z),ye&&xi(w,null,O,"mounted")},x)},oe=(w,E,C,O,x)=>{if(C&&m(w,C),O)for(let L=0;L<O.length;L++)m(w,O[L]);if(x){let L=x.subTree;if(E===L){const Q=x.vnode;oe(w,Q,Q.scopeId,Q.slotScopeIds,x.parent)}}},me=(w,E,C,O,x,L,Q,H,z=0)=>{for(let V=z;V<w.length;V++){const ne=w[V]=H?Zr(w[V]):Xn(w[V]);v(null,ne,E,C,O,x,L,Q,H)}},He=(w,E,C,O,x,L,Q)=>{const H=E.el=w.el;let{patchFlag:z,dynamicChildren:V,dirs:ne}=E;z|=w.patchFlag&16;const X=w.props||Qe,re=E.props||Qe;let le;C&&Li(C,!1),(le=re.onVnodeBeforeUpdate)&&Jn(le,C,E,w),ne&&xi(E,w,C,"beforeUpdate"),C&&Li(C,!0);const ye=x&&E.type!=="foreignObject";if(V?Ce(w.dynamicChildren,V,H,C,O,ye,L):Q||Ee(w,E,H,null,C,O,ye,L,!1),z>0){if(z&16)st(H,E,X,re,C,O,x);else if(z&2&&X.class!==re.class&&s(H,"class",null,re.class,x),z&4&&s(H,"style",X.style,re.style,x),z&8){const We=E.dynamicProps;for(let Fe=0;Fe<We.length;Fe++){const Ke=We[Fe],un=X[Ke],An=re[Ke];(An!==un||Ke==="value")&&s(H,Ke,un,An,x,w.children,C,O,ht)}}z&1&&w.children!==E.children&&u(H,E.children)}else!Q&&V==null&&st(H,E,X,re,C,O,x);((le=re.onVnodeUpdated)||ne)&&hn(()=>{le&&Jn(le,C,E,w),ne&&xi(E,w,C,"updated")},O)},Ce=(w,E,C,O,x,L,Q)=>{for(let H=0;H<E.length;H++){const z=w[H],V=E[H],ne=z.el&&(z.type===Rn||!Uo(z,V)||z.shapeFlag&70)?h(z.el):C;v(z,V,ne,null,O,x,L,Q,!0)}},st=(w,E,C,O,x,L,Q)=>{if(C!==O){if(C!==Qe)for(const H in C)!ll(H)&&!(H in O)&&s(w,H,C[H],null,Q,E.children,x,L,ht);for(const H in O){if(ll(H))continue;const z=O[H],V=C[H];z!==V&&H!=="value"&&s(w,H,V,z,Q,E.children,x,L,ht)}"value"in O&&s(w,"value",C.value,O.value)}},kt=(w,E,C,O,x,L,Q,H,z)=>{const V=E.el=w?w.el:a(""),ne=E.anchor=w?w.anchor:a("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:le}=E;le&&(H=H?H.concat(le):le),w==null?(r(V,C,O),r(ne,C,O),me(E.children,C,ne,x,L,Q,H,z)):X>0&&X&64&&re&&w.dynamicChildren?(Ce(w.dynamicChildren,re,C,x,L,Q,H),(E.key!=null||x&&E===x.subTree)&&l0(w,E,!0)):Ee(w,E,C,ne,x,L,Q,H,z)},qe=(w,E,C,O,x,L,Q,H,z)=>{E.slotScopeIds=H,w==null?E.shapeFlag&512?x.ctx.activate(E,C,O,Q,z):vr(E,C,O,x,L,Q,z):tn(w,E,z)},vr=(w,E,C,O,x,L,Q)=>{const H=w.component=$k(w,O,x);if(YE(w)&&(H.ctx.renderer=q),Uk(H),H.asyncDep){if(x&&x.registerDep(H,Ue),!w.el){const z=H.subTree=Gt(wi);A(null,z,E,C)}return}Ue(H,w,E,C,x,L,Q)},tn=(w,E,C)=>{const O=E.component=w.component;if(J1(w,E,C))if(O.asyncDep&&!O.asyncResolved){Le(O,E,C);return}else O.next=E,z1(O.update),O.update();else E.el=w.el,O.vnode=E},Ue=(w,E,C,O,x,L,Q)=>{const H=()=>{if(w.isMounted){let{next:ne,bu:X,u:re,parent:le,vnode:ye}=w,We=ne,Fe;Li(w,!1),ne?(ne.el=ye.el,Le(w,ne,Q)):ne=ye,X&&qh(X),(Fe=ne.props&&ne.props.onVnodeBeforeUpdate)&&Jn(Fe,le,ne,ye),Li(w,!0);const Ke=Kh(w),un=w.subTree;w.subTree=Ke,v(un,Ke,h(un.el),D(un),w,x,L),ne.el=Ke.el,We===null&&X1(w,Ke.el),re&&hn(re,x),(Fe=ne.props&&ne.props.onVnodeUpdated)&&hn(()=>Jn(Fe,le,ne,ye),x)}else{let ne;const{el:X,props:re}=E,{bm:le,m:ye,parent:We}=w,Fe=aa(E);if(Li(w,!1),le&&qh(le),!Fe&&(ne=re&&re.onVnodeBeforeMount)&&Jn(ne,We,E),Li(w,!0),X&&Oe){const Ke=()=>{w.subTree=Kh(w),Oe(X,w.subTree,w,x,null)};Fe?E.type.__asyncLoader().then(()=>!w.isUnmounted&&Ke()):Ke()}else{const Ke=w.subTree=Kh(w);v(null,Ke,C,O,w,x,L),E.el=Ke.el}if(ye&&hn(ye,x),!Fe&&(ne=re&&re.onVnodeMounted)){const Ke=E;hn(()=>Jn(ne,We,Ke),x)}(E.shapeFlag&256||We&&aa(We.vnode)&&We.vnode.shapeFlag&256)&&w.a&&hn(w.a,x),w.isMounted=!0,E=C=O=null}},z=w.effect=new Mp(H,()=>jp(V),w.scope),V=w.update=()=>z.run();V.id=w.uid,Li(w,!0),V()},Le=(w,E,C)=>{E.component=w;const O=w.vnode.props;w.vnode=E,w.next=null,bk(w,E.props,O,C),Rk(w,E.children,C),vo(),M_(),wo()},Ee=(w,E,C,O,x,L,Q,H,z=!1)=>{const V=w&&w.children,ne=w?w.shapeFlag:0,X=E.children,{patchFlag:re,shapeFlag:le}=E;if(re>0){if(re&128){mt(V,X,C,O,x,L,Q,H,z);return}else if(re&256){yn(V,X,C,O,x,L,Q,H,z);return}}le&8?(ne&16&&ht(V,x,L),X!==V&&u(C,X)):ne&16?le&16?mt(V,X,C,O,x,L,Q,H,z):ht(V,x,L,!0):(ne&8&&u(C,""),le&16&&me(X,C,O,x,L,Q,H,z))},yn=(w,E,C,O,x,L,Q,H,z)=>{w=w||xs,E=E||xs;const V=w.length,ne=E.length,X=Math.min(V,ne);let re;for(re=0;re<X;re++){const le=E[re]=z?Zr(E[re]):Xn(E[re]);v(w[re],le,C,null,x,L,Q,H,z)}V>ne?ht(w,x,L,!0,!1,X):me(E,C,O,x,L,Q,H,z,X)},mt=(w,E,C,O,x,L,Q,H,z)=>{let V=0;const ne=E.length;let X=w.length-1,re=ne-1;for(;V<=X&&V<=re;){const le=w[V],ye=E[V]=z?Zr(E[V]):Xn(E[V]);if(Uo(le,ye))v(le,ye,C,null,x,L,Q,H,z);else break;V++}for(;V<=X&&V<=re;){const le=w[X],ye=E[re]=z?Zr(E[re]):Xn(E[re]);if(Uo(le,ye))v(le,ye,C,null,x,L,Q,H,z);else break;X--,re--}if(V>X){if(V<=re){const le=re+1,ye=le<ne?E[le].el:O;for(;V<=re;)v(null,E[V]=z?Zr(E[V]):Xn(E[V]),C,ye,x,L,Q,H,z),V++}}else if(V>re)for(;V<=X;)_t(w[V],x,L,!0),V++;else{const le=V,ye=V,We=new Map;for(V=ye;V<=re;V++){const Vt=E[V]=z?Zr(E[V]):Xn(E[V]);Vt.key!=null&&We.set(Vt.key,V)}let Fe,Ke=0;const un=re-ye+1;let An=!1,wr=0;const vn=new Array(un);for(V=0;V<un;V++)vn[V]=0;for(V=le;V<=X;V++){const Vt=w[V];if(Ke>=un){_t(Vt,x,L,!0);continue}let nn;if(Vt.key!=null)nn=We.get(Vt.key);else for(Fe=ye;Fe<=re;Fe++)if(vn[Fe-ye]===0&&Uo(Vt,E[Fe])){nn=Fe;break}nn===void 0?_t(Vt,x,L,!0):(vn[nn-ye]=V+1,nn>=wr?wr=nn:An=!0,v(Vt,E[nn],C,null,x,L,Q,H,z),Ke++)}const Di=An?kk(vn):xs;for(Fe=Di.length-1,V=un-1;V>=0;V--){const Vt=ye+V,nn=E[Vt],Yn=Vt+1<ne?E[Vt+1].el:O;vn[V]===0?v(null,nn,C,Yn,x,L,Q,H,z):An&&(Fe<0||V!==Di[Fe]?gt(nn,C,Yn,2):Fe--)}}},gt=(w,E,C,O,x=null)=>{const{el:L,type:Q,transition:H,children:z,shapeFlag:V}=w;if(V&6){gt(w.component.subTree,E,C,O);return}if(V&128){w.suspense.move(E,C,O);return}if(V&64){Q.move(w,E,C,q);return}if(Q===Rn){r(L,E,C);for(let X=0;X<z.length;X++)gt(z[X],E,C,O);r(w.anchor,E,C);return}if(Q===Qh){N(w,E,C);return}if(O!==2&&V&1&&H)if(O===0)H.beforeEnter(L),r(L,E,C),hn(()=>H.enter(L),x);else{const{leave:X,delayLeave:re,afterLeave:le}=H,ye=()=>r(L,E,C),We=()=>{X(L,()=>{ye(),le&&le()})};re?re(L,ye,We):We()}else r(L,E,C)},_t=(w,E,C,O=!1,x=!1)=>{const{type:L,props:Q,ref:H,children:z,dynamicChildren:V,shapeFlag:ne,patchFlag:X,dirs:re}=w;if(H!=null&&af(H,null,C,w,!0),ne&256){E.ctx.deactivate(w);return}const le=ne&1&&re,ye=!aa(w);let We;if(ye&&(We=Q&&Q.onVnodeBeforeUnmount)&&Jn(We,E,w),ne&6)Is(w.component,C,O);else{if(ne&128){w.suspense.unmount(C,O);return}le&&xi(w,null,E,"beforeUnmount"),ne&64?w.type.remove(w,E,C,x,q,O):V&&(L!==Rn||X>0&&X&64)?ht(V,E,C,!1,!0):(L===Rn&&X&384||!x&&ne&16)&&ht(z,E,C),O&&Kr(w)}(ye&&(We=Q&&Q.onVnodeUnmounted)||le)&&hn(()=>{We&&Jn(We,E,w),le&&xi(w,null,E,"unmounted")},C)},Kr=w=>{const{type:E,el:C,anchor:O,transition:x}=w;if(E===Rn){xn(C,O);return}if(E===Qh){P(w);return}const L=()=>{i(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(w.shapeFlag&1&&x&&!x.persisted){const{leave:Q,delayLeave:H}=x,z=()=>Q(C,L);H?H(w.el,L,z):z()}else L()},xn=(w,E)=>{let C;for(;w!==E;)C=p(w),i(w),w=C;i(E)},Is=(w,E,C)=>{const{bum:O,scope:x,update:L,subTree:Q,um:H}=w;O&&qh(O),x.stop(),L&&(L.active=!1,_t(Q,w,E,C)),H&&hn(H,E),hn(()=>{w.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},ht=(w,E,C,O=!1,x=!1,L=0)=>{for(let Q=L;Q<w.length;Q++)_t(w[Q],E,C,O,x)},D=w=>w.shapeFlag&6?D(w.component.subTree):w.shapeFlag&128?w.suspense.next():p(w.anchor||w.el),J=(w,E,C)=>{w==null?E._vnode&&_t(E._vnode,null,null,!0):v(E._vnode||null,w,E,null,null,null,C),M_(),WE(),E._vnode=w},q={p:v,um:_t,m:gt,r:Kr,mt:vr,mc:me,pc:Ee,pbc:Ce,n:D,o:t};let te,Oe;return e&&([te,Oe]=e(q)),{render:J,hydrate:te,createApp:Tk(J,te)}}function Li({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function l0(t,e,n=!1){const r=t.children,i=e.children;if(fe(r)&&fe(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Zr(i[s]),a.el=o.el),n||l0(o,a)),a.type===Mu&&(a.el=o.el)}}function kk(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Nk=t=>t.__isTeleport,Rn=Symbol.for("v-fgt"),Mu=Symbol.for("v-txt"),wi=Symbol.for("v-cmt"),Qh=Symbol.for("v-stc"),la=[];let $n=null;function fn(t=!1){la.push($n=t?null:[])}function Ok(){la.pop(),$n=la[la.length-1]||null}let Sa=1;function z_(t){Sa+=t}function u0(t){return t.dynamicChildren=Sa>0?$n||xs:null,Ok(),Sa>0&&$n&&$n.push(t),t}function Fr(t,e,n,r,i,s){return u0(ai(t,e,n,r,i,s,!0))}function Pa(t,e,n,r,i){return u0(Gt(t,e,n,r,i,!0))}function kl(t){return t?t.__v_isVNode===!0:!1}function Uo(t,e){return t.type===e.type&&t.key===e.key}const xu="__vInternal",h0=({key:t})=>t??null,hl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Rt(t)||At(t)||_e(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function ai(t,e=null,n=null,r=0,i=null,s=t===Rn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&h0(e),ref:e&&hl(e),scopeId:Ou,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Mt};return a?(Kp(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Rt(n)?8:16),Sa>0&&!o&&$n&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&$n.push(c),c}const Gt=Dk;function Dk(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===fk)&&(t=wi),kl(t)){const a=Gs(t,e,!0);return n&&Kp(a,n),Sa>0&&!s&&$n&&(a.shapeFlag&6?$n[$n.indexOf(t)]=a:$n.push(a)),a.patchFlag|=-2,a}if(zk(t)&&(t=t.__vccOpts),e){e=Mk(e);let{class:a,style:c}=e;a&&!Rt(a)&&(e.class=Ru(a)),nt(c)&&(xE(c)&&!fe(c)&&(c=Ct({},c)),e.style=Op(c))}const o=Rt(t)?1:Z1(t)?128:Nk(t)?64:nt(t)?4:_e(t)?2:0;return ai(t,e,n,r,i,o,s,!0)}function Mk(t){return t?xE(t)||xu in t?Ct({},t):t:null}function Gs(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Lk(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&h0(a),ref:e&&e.ref?n&&i?fe(i)?i.concat(hl(e)):[i,hl(e)]:hl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rn?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gs(t.ssContent),ssFallback:t.ssFallback&&Gs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function xk(t=" ",e=0){return Gt(Mu,null,t,e)}function d0(t="",e=!1){return e?(fn(),Pa(wi,null,t)):Gt(wi,null,t)}function Xn(t){return t==null||typeof t=="boolean"?Gt(wi):fe(t)?Gt(Rn,null,t.slice()):typeof t=="object"?Zr(t):Gt(Mu,null,String(t))}function Zr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gs(t)}function Kp(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Kp(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(xu in e)?e._ctx=Mt:i===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),r&64?(n=16,e=[xk(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lk(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Ru([e.class,r.class]));else if(i==="style")e.style=Op([e.style,r.style]);else if(Iu(i)){const s=e[i],o=r[i];o&&s!==o&&!(fe(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Jn(t,e,n,r=null){Wn(t,e,7,[n,r])}const Vk=r0();let Fk=0;function $k(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Vk,s={uid:Fk++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new wE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:s0(r,i),emitsOptions:qE(r,i),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:r.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=G1.bind(null,s),t.ce&&t.ce(s),s}let It=null;const f0=()=>It||Mt;let Gp,As,q_="__VUE_INSTANCE_SETTERS__";(As=Jd()[q_])||(As=Jd()[q_]=[]),As.push(t=>It=t),Gp=t=>{As.length>1?As.forEach(e=>e(t)):As[0](t)};const Qs=t=>{Gp(t),t.scope.on()},Ji=()=>{It&&It.scope.off(),Gp(null)};function p0(t){return t.vnode.shapeFlag&4}let ka=!1;function Uk(t,e=!1){ka=e;const{props:n,children:r}=t.vnode,i=p0(t);Ik(t,n,i,e),Ck(t,r);const s=i?Bk(t,e):void 0;return ka=!1,s}function Bk(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=$p(new Proxy(t.ctx,mk));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Hk(t):null;Qs(t),vo();const s=di(r,t,0,[t.props,i]);if(wo(),Ji(),mE(s)){if(s.then(Ji,Ji),e)return s.then(o=>{K_(t,o,e)}).catch(o=>{ku(o,t,0)});t.asyncDep=s}else K_(t,s,e)}else m0(t,e)}function K_(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:nt(e)&&(t.setupState=UE(e)),m0(t,n)}let G_;function m0(t,e,n){const r=t.type;if(!t.render){if(!e&&G_&&!r.render){const i=r.template||zp(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ct(Ct({isCustomElement:s,delimiters:a},o),c);r.render=G_(i,l)}}t.render=r.render||Hn}Qs(t),vo(),gk(t),wo(),Ji()}function jk(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mn(t,"get","$attrs"),e[n]}}))}function Hk(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return jk(t)},slots:t.slots,emit:t.emit,expose:e}}function Lu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(UE($p(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ca)return ca[n](t)},has(e,n){return n in e||n in ca}}))}function Wk(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function zk(t){return _e(t)&&"__vccOpts"in t}const qt=(t,e)=>j1(t,e,ka);function g0(t,e,n){const r=arguments.length;return r===2?nt(e)&&!fe(e)?kl(e)?Gt(t,null,[e]):Gt(t,e):Gt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&kl(n)&&(n=[n]),Gt(t,e,n))}const qk=Symbol.for("v-scx"),Kk=()=>zn(qk),Gk="3.3.4",Qk="http://www.w3.org/2000/svg",Bi=typeof document<"u"?document:null,Q_=Bi&&Bi.createElement("template"),Yk={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Bi.createElementNS(Qk,t):Bi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Bi.createTextNode(t),createComment:t=>Bi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Q_.innerHTML=r?`<svg>${t}</svg>`:t;const a=Q_.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jk(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Xk(t,e,n){const r=t.style,i=Rt(n);if(n&&!i){if(e&&!Rt(e))for(const s in e)n[s]==null&&cf(r,s,"");for(const s in n)cf(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Y_=/\s*!important$/;function cf(t,e,n){if(fe(n))n.forEach(r=>cf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Zk(t,e);Y_.test(n)?t.setProperty(yo(r),n.replace(Y_,""),"important"):t[r]=n}}const J_=["Webkit","Moz","ms"],Yh={};function Zk(t,e){const n=Yh[e];if(n)return n;let r=lr(e);if(r!=="filter"&&r in t)return Yh[e]=r;r=Cu(r);for(let i=0;i<J_.length;i++){const s=J_[i]+r;if(s in t)return Yh[e]=s}return e}const X_="http://www.w3.org/1999/xlink";function eN(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(X_,e.slice(6,e.length)):t.setAttributeNS(X_,e,n);else{const s=s1(e);n==null||s&&!yE(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function tN(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=yE(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function nN(t,e,n,r){t.addEventListener(e,n,r)}function rN(t,e,n,r){t.removeEventListener(e,n,r)}function iN(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=sN(e);if(r){const l=s[e]=cN(r,i);nN(t,a,l,c)}else o&&(rN(t,a,o,c),s[e]=void 0)}}const Z_=/(?:Once|Passive|Capture)$/;function sN(t){let e;if(Z_.test(t)){e={};let r;for(;r=t.match(Z_);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):yo(t.slice(2)),e]}let Jh=0;const oN=Promise.resolve(),aN=()=>Jh||(oN.then(()=>Jh=0),Jh=Date.now());function cN(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Wn(lN(r,n.value),e,5,[r])};return n.value=t,n.attached=aN(),n}function lN(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const ey=/^on[a-z]/,uN=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?Jk(t,r,i):e==="style"?Xk(t,n,r):Iu(e)?Sp(e)||iN(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hN(t,e,r,i))?tN(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),eN(t,e,r,i))};function hN(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ey.test(e)&&_e(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ey.test(e)&&Rt(n)?!1:e in t}const dN=["ctrl","shift","alt","meta"],fN={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>dN.some(n=>t[`${n}Key`]&&!e.includes(n))},zc=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=fN[e[i]];if(s&&s(n,e))return}return t(n,...r)},pN={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Bo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Bo(t,!0),r.enter(t)):r.leave(t,()=>{Bo(t,!1)}):Bo(t,e))},beforeUnmount(t,{value:e}){Bo(t,e)}};function Bo(t,e){t.style.display=e?t._vod:"none"}const mN=Ct({patchProp:uN},Yk);let ty;function gN(){return ty||(ty=Sk(mN))}const _N=(...t)=>{const e=gN().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=yN(r);if(!i)return;const s=e._component;!_e(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function yN(t){return Rt(t)?document.querySelector(t):t}var vN=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const wN=Symbol();var ny;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ny||(ny={}));function EN(){const t=EE(!0),e=t.run(()=>Wt({}));let n=[],r=[];const i=$p({install(s){i._a=s,s.provide(wN,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!vN?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ss=typeof window<"u";function TN(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Be=Object.assign;function Xh(t,e){const n={};for(const r in e){const i=e[r];n[r]=Kn(i)?i.map(t):t(i)}return n}const ua=()=>{},Kn=Array.isArray,IN=/\/$/,bN=t=>t.replace(IN,"");function Zh(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=SN(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function AN(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ry(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function CN(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Ys(e.matched[r],n.matched[i])&&_0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!RN(t[n],e[n]))return!1;return!0}function RN(t,e){return Kn(t)?iy(t,e):Kn(e)?iy(e,t):t===e}function iy(t,e){return Kn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function SN(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Na;(function(t){t.pop="pop",t.push="push"})(Na||(Na={}));var ha;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ha||(ha={}));function PN(t){if(!t)if(Ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bN(t)}const kN=/^[^#]+#/;function NN(t,e){return t.replace(kN,"#")+e}function ON(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Vu=()=>({left:window.pageXOffset,top:window.pageYOffset});function DN(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=ON(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function sy(t,e){return(history.state?history.state.position-e:-1)+t}const lf=new Map;function MN(t,e){lf.set(t,e)}function xN(t){const e=lf.get(t);return lf.delete(t),e}let LN=()=>location.protocol+"//"+location.host;function y0(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),ry(c,"")}return ry(n,t)+r+i}function VN(t,e,n,r){let i=[],s=[],o=null;const a=({state:p})=>{const m=y0(t,location),y=n.value,v=e.value;let b=0;if(p){if(n.value=m,e.value=p,o&&o===y){o=null;return}b=v?p.position-v.position:0}else r(m);i.forEach(A=>{A(n.value,y,{delta:b,type:Na.pop,direction:b?b>0?ha.forward:ha.back:ha.unknown})})};function c(){o=n.value}function l(p){i.push(p);const m=()=>{const y=i.indexOf(p);y>-1&&i.splice(y,1)};return s.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(Be({},p.state,{scroll:Vu()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function oy(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Vu():null}}function FN(t){const{history:e,location:n}=window,r={value:y0(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:LN()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=Be({},e.state,oy(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=Be({},i.value,e.state,{forward:c,scroll:Vu()});s(u.current,u,!0);const h=Be({},oy(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function $N(t){t=PN(t);const e=FN(t),n=VN(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Be({location:"",base:t,go:r,createHref:NN.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function UN(t){return typeof t=="string"||t&&typeof t=="object"}function v0(t){return typeof t=="string"||typeof t=="symbol"}const Jr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},w0=Symbol("");var ay;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ay||(ay={}));function Js(t,e){return Be(new Error,{type:t,[w0]:!0},e)}function br(t,e){return t instanceof Error&&w0 in t&&(e==null||!!(t.type&e))}const cy="[^/]+?",BN={sensitive:!1,strict:!1,start:!0,end:!0},jN=/[.+*?^${}()[\]/\\]/g;function HN(t,e){const n=Be({},BN,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const p=l[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(i+="/"),i+=p.value.replace(jN,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:v,optional:b,regexp:A}=p;s.push({name:y,repeatable:v,optional:b});const k=A||cy;if(k!==cy){m+=10;try{new RegExp(`(${k})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+P.message)}}let N=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(N=b&&l.length<2?`(?:/${N})`:"/"+N),b&&(N+="?"),i+=N,m+=20,b&&(m+=-8),v&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",y=s[p-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:v,optional:b}=m,A=y in l?l[y]:"";if(Kn(A)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=Kn(A)?A.join("/"):A;if(!k)if(b)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function WN(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function zN(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=WN(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(ly(r))return 1;if(ly(i))return-1}return i.length-r.length}function ly(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qN={type:0,value:""},KN=/[a-zA-Z0-9_]/;function GN(t){if(!t)return[[]];if(t==="/")return[[qN]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:KN.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function QN(t,e,n){const r=HN(GN(t.path),n),i=Be(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function YN(t,e){const n=[],r=new Map;e=dy({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,p){const m=!p,y=JN(u);y.aliasOf=p&&p.record;const v=dy(e,u),b=[y];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of N)b.push(Be({},y,{components:p?p.record.components:y.components,path:P,aliasOf:p?p.record:y}))}let A,k;for(const N of b){const{path:P}=N;if(h&&P[0]!=="/"){const j=h.record.path,W=j[j.length-1]==="/"?"":"/";N.path=h.record.path+(P&&W+P)}if(A=QN(N,h,v),p?p.alias.push(A):(k=k||A,k!==A&&k.alias.push(A),m&&u.name&&!hy(A)&&o(u.name)),y.children){const j=y.children;for(let W=0;W<j.length;W++)s(j[W],A,p&&p.children[W])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return k?()=>{o(k)}:ua}function o(u){if(v0(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&zN(u,n[h])>=0&&(u.record.path!==n[h].record.path||!E0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!hy(u)&&r.set(u.record.name,u)}function l(u,h){let p,m={},y,v;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Js(1,{location:u});v=p.record.name,m=Be(uy(h.params,p.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&uy(u.params,p.keys.map(k=>k.name))),y=p.stringify(m)}else if("path"in u)y=u.path,p=n.find(k=>k.re.test(y)),p&&(m=p.parse(y),v=p.record.name);else{if(p=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!p)throw Js(1,{location:u,currentLocation:h});v=p.record.name,m=Be({},h.params,u.params),y=p.stringify(m)}const b=[];let A=p;for(;A;)b.unshift(A.record),A=A.parent;return{name:v,path:y,params:m,matched:b,meta:ZN(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function uy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function JN(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:XN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function XN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function hy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ZN(t){return t.reduce((e,n)=>Be(e,n.meta),{})}function dy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function E0(t,e){return e.children.some(n=>n===t||E0(t,n))}const T0=/#/g,eO=/&/g,tO=/\//g,nO=/=/g,rO=/\?/g,I0=/\+/g,iO=/%5B/g,sO=/%5D/g,b0=/%5E/g,oO=/%60/g,A0=/%7B/g,aO=/%7C/g,C0=/%7D/g,cO=/%20/g;function Qp(t){return encodeURI(""+t).replace(aO,"|").replace(iO,"[").replace(sO,"]")}function lO(t){return Qp(t).replace(A0,"{").replace(C0,"}").replace(b0,"^")}function uf(t){return Qp(t).replace(I0,"%2B").replace(cO,"+").replace(T0,"%23").replace(eO,"%26").replace(oO,"`").replace(A0,"{").replace(C0,"}").replace(b0,"^")}function uO(t){return uf(t).replace(nO,"%3D")}function hO(t){return Qp(t).replace(T0,"%23").replace(rO,"%3F")}function dO(t){return t==null?"":hO(t).replace(tO,"%2F")}function Nl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function fO(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(I0," "),o=s.indexOf("="),a=Nl(o<0?s:s.slice(0,o)),c=o<0?null:Nl(s.slice(o+1));if(a in e){let l=e[a];Kn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function fy(t){let e="";for(let n in t){const r=t[n];if(n=uO(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Kn(r)?r.map(s=>s&&uf(s)):[r&&uf(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function pO(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Kn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const mO=Symbol(""),py=Symbol(""),Yp=Symbol(""),R0=Symbol(""),hf=Symbol("");function jo(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ei(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Js(4,{from:n,to:e})):h instanceof Error?a(h):UN(h)?a(Js(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function ed(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(gO(a)){const l=(a.__vccOpts||a)[e];l&&i.push(ei(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=TN(l)?l.default:l;s.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&ei(p,n,r,s,o)()}))}}return i}function gO(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function my(t){const e=zn(Yp),n=zn(R0),r=qt(()=>e.resolve(Nt(t.to))),i=qt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(Ys.bind(null,u));if(p>-1)return p;const m=gy(c[l-2]);return l>1&&gy(u)===m&&h[h.length-1].path!==m?h.findIndex(Ys.bind(null,c[l-2])):p}),s=qt(()=>i.value>-1&&wO(n.params,r.value.params)),o=qt(()=>i.value>-1&&i.value===n.matched.length-1&&_0(n.params,r.value.params));function a(c={}){return vO(c)?e[Nt(t.replace)?"replace":"push"](Nt(t.to)).catch(ua):Promise.resolve()}return{route:r,href:qt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const _O=fr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:my,setup(t,{slots:e}){const n=Pu(my(t)),{options:r}=zn(Yp),i=qt(()=>({[_y(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_y(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:g0("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),yO=_O;function vO(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wO(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Kn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function gy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _y=(t,e,n)=>t??e??n,EO=fr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zn(hf),i=qt(()=>t.route||r.value),s=zn(py,0),o=qt(()=>{let l=Nt(s);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=qt(()=>i.value.matched[o.value]);ul(py,qt(()=>o.value+1)),ul(mO,a),ul(hf,i);const c=Wt();return fi(()=>[c.value,a.value,t.name],([l,u,h],[p,m,y])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Ys(u,m)||!p)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return yy(n.default,{Component:p,route:l});const m=h.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,b=g0(p,Be({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return yy(n.default,{Component:b,route:l})||b}}});function yy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const S0=EO;function TO(t){const e=YN(t.routes,t),n=t.parseQuery||fO,r=t.stringifyQuery||fy,i=t.history,s=jo(),o=jo(),a=jo(),c=FE(Jr);let l=Jr;Ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xh.bind(null,D=>""+D),h=Xh.bind(null,dO),p=Xh.bind(null,Nl);function m(D,J){let q,te;return v0(D)?(q=e.getRecordMatcher(D),te=J):te=D,e.addRoute(te,q)}function y(D){const J=e.getRecordMatcher(D);J&&e.removeRoute(J)}function v(){return e.getRoutes().map(D=>D.record)}function b(D){return!!e.getRecordMatcher(D)}function A(D,J){if(J=Be({},J||c.value),typeof D=="string"){const C=Zh(n,D,J.path),O=e.resolve({path:C.path},J),x=i.createHref(C.fullPath);return Be(C,O,{params:p(O.params),hash:Nl(C.hash),redirectedFrom:void 0,href:x})}let q;if("path"in D)q=Be({},D,{path:Zh(n,D.path,J.path).path});else{const C=Be({},D.params);for(const O in C)C[O]==null&&delete C[O];q=Be({},D,{params:h(C)}),J.params=h(J.params)}const te=e.resolve(q,J),Oe=D.hash||"";te.params=u(p(te.params));const w=AN(r,Be({},D,{hash:lO(Oe),path:te.path})),E=i.createHref(w);return Be({fullPath:w,hash:Oe,query:r===fy?pO(D.query):D.query||{}},te,{redirectedFrom:void 0,href:E})}function k(D){return typeof D=="string"?Zh(n,D,c.value.path):Be({},D)}function N(D,J){if(l!==D)return Js(8,{from:J,to:D})}function P(D){return oe(D)}function j(D){return P(Be(k(D),{replace:!0}))}function W(D){const J=D.matched[D.matched.length-1];if(J&&J.redirect){const{redirect:q}=J;let te=typeof q=="function"?q(D):q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=k(te):{path:te},te.params={}),Be({query:D.query,hash:D.hash,params:"path"in te?{}:D.params},te)}}function oe(D,J){const q=l=A(D),te=c.value,Oe=D.state,w=D.force,E=D.replace===!0,C=W(q);if(C)return oe(Be(k(C),{state:typeof C=="object"?Be({},Oe,C.state):Oe,force:w,replace:E}),J||q);const O=q;O.redirectedFrom=J;let x;return!w&&CN(r,te,q)&&(x=Js(16,{to:O,from:te}),gt(te,te,!0,!1)),(x?Promise.resolve(x):Ce(O,te)).catch(L=>br(L)?br(L,2)?L:mt(L):Ee(L,O,te)).then(L=>{if(L){if(br(L,2))return oe(Be({replace:E},k(L.to),{state:typeof L.to=="object"?Be({},Oe,L.to.state):Oe,force:w}),J||O)}else L=kt(O,te,!0,E,Oe);return st(O,te,L),L})}function me(D,J){const q=N(D,J);return q?Promise.reject(q):Promise.resolve()}function He(D){const J=xn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(D):D()}function Ce(D,J){let q;const[te,Oe,w]=IO(D,J);q=ed(te.reverse(),"beforeRouteLeave",D,J);for(const C of te)C.leaveGuards.forEach(O=>{q.push(ei(O,D,J))});const E=me.bind(null,D,J);return q.push(E),ht(q).then(()=>{q=[];for(const C of s.list())q.push(ei(C,D,J));return q.push(E),ht(q)}).then(()=>{q=ed(Oe,"beforeRouteUpdate",D,J);for(const C of Oe)C.updateGuards.forEach(O=>{q.push(ei(O,D,J))});return q.push(E),ht(q)}).then(()=>{q=[];for(const C of w)if(C.beforeEnter)if(Kn(C.beforeEnter))for(const O of C.beforeEnter)q.push(ei(O,D,J));else q.push(ei(C.beforeEnter,D,J));return q.push(E),ht(q)}).then(()=>(D.matched.forEach(C=>C.enterCallbacks={}),q=ed(w,"beforeRouteEnter",D,J),q.push(E),ht(q))).then(()=>{q=[];for(const C of o.list())q.push(ei(C,D,J));return q.push(E),ht(q)}).catch(C=>br(C,8)?C:Promise.reject(C))}function st(D,J,q){a.list().forEach(te=>He(()=>te(D,J,q)))}function kt(D,J,q,te,Oe){const w=N(D,J);if(w)return w;const E=J===Jr,C=Ss?history.state:{};q&&(te||E?i.replace(D.fullPath,Be({scroll:E&&C&&C.scroll},Oe)):i.push(D.fullPath,Oe)),c.value=D,gt(D,J,q,E),mt()}let qe;function vr(){qe||(qe=i.listen((D,J,q)=>{if(!Is.listening)return;const te=A(D),Oe=W(te);if(Oe){oe(Be(Oe,{replace:!0}),te).catch(ua);return}l=te;const w=c.value;Ss&&MN(sy(w.fullPath,q.delta),Vu()),Ce(te,w).catch(E=>br(E,12)?E:br(E,2)?(oe(E.to,te).then(C=>{br(C,20)&&!q.delta&&q.type===Na.pop&&i.go(-1,!1)}).catch(ua),Promise.reject()):(q.delta&&i.go(-q.delta,!1),Ee(E,te,w))).then(E=>{E=E||kt(te,w,!1),E&&(q.delta&&!br(E,8)?i.go(-q.delta,!1):q.type===Na.pop&&br(E,20)&&i.go(-1,!1)),st(te,w,E)}).catch(ua)}))}let tn=jo(),Ue=jo(),Le;function Ee(D,J,q){mt(D);const te=Ue.list();return te.length?te.forEach(Oe=>Oe(D,J,q)):console.error(D),Promise.reject(D)}function yn(){return Le&&c.value!==Jr?Promise.resolve():new Promise((D,J)=>{tn.add([D,J])})}function mt(D){return Le||(Le=!D,vr(),tn.list().forEach(([J,q])=>D?q(D):J()),tn.reset()),D}function gt(D,J,q,te){const{scrollBehavior:Oe}=t;if(!Ss||!Oe)return Promise.resolve();const w=!q&&xN(sy(D.fullPath,0))||(te||!q)&&history.state&&history.state.scroll||null;return jE().then(()=>Oe(D,J,w)).then(E=>E&&DN(E)).catch(E=>Ee(E,D,J))}const _t=D=>i.go(D);let Kr;const xn=new Set,Is={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:b,getRoutes:v,resolve:A,options:t,push:P,replace:j,go:_t,back:()=>_t(-1),forward:()=>_t(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Ue.add,isReady:yn,install(D){const J=this;D.component("RouterLink",yO),D.component("RouterView",S0),D.config.globalProperties.$router=J,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Nt(c)}),Ss&&!Kr&&c.value===Jr&&(Kr=!0,P(i.location).catch(Oe=>{}));const q={};for(const Oe in Jr)Object.defineProperty(q,Oe,{get:()=>c.value[Oe],enumerable:!0});D.provide(Yp,J),D.provide(R0,DE(q)),D.provide(hf,c);const te=D.unmount;xn.add(D),D.unmount=function(){xn.delete(D),xn.size<1&&(l=Jr,qe&&qe(),qe=null,c.value=Jr,Kr=!1,Le=!1),te()}}};function ht(D){return D.reduce((J,q)=>J.then(()=>He(q)),Promise.resolve())}return Is}function IO(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ys(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ys(l,c))||i.push(c))}return[n,r,i]}const bO=fr({__name:"App",setup(t){return(e,n)=>(fn(),Pa(Nt(S0)))}}),AO="modulepreload",CO=function(t){return"/"+t},vy={},RO=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=CO(s),s in vy)return;vy[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":AO,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var SO=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},P0={},bn={};let Jp;const PO=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];bn.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};bn.getSymbolTotalCodewords=function(e){return PO[e]};bn.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};bn.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Jp=e};bn.isKanjiModeEnabled=function(){return typeof Jp<"u"};bn.toSJIS=function(e){return Jp(e)};var Fu={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(Fu);function k0(){this.buffer=[],this.length=0}k0.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var kO=k0;function ic(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}ic.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};ic.prototype.get=function(t,e){return this.data[t*this.size+e]};ic.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};ic.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var NO=ic,N0={};(function(t){const e=bn.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,s=e(r),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],s=t.getRowColCoords(r),o=s.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([s[a],s[c]]);return i}})(N0);var O0={};const OO=bn.getSymbolSize,wy=7;O0.getPositions=function(e){const n=OO(e);return[[0,0],[n-wy,0],[0,n-wy]]};var D0={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,c=0,l=null,u=null;for(let h=0;h<s;h++){a=c=0,l=u=null;for(let p=0;p<s;p++){let m=i.get(h,p);m===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=m,a=1),m=i.get(p,h),m===u?c++:(c>=5&&(o+=e.N1+(c-5)),u=m,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},t.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let c=0;c<s-1;c++){const l=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},t.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,c=0;for(let l=0;l<s;l++){a=c=0;for(let u=0;u<s;u++)a=a<<1&2047|i.get(l,u),u>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&o++}return o*e.N3},t.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let c=0;c<o;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function n(r,i,s){switch(r){case t.Patterns.PATTERN000:return(i+s)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return s%3===0;case t.Patterns.PATTERN011:return(i+s)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case t.Patterns.PATTERN101:return i*s%2+i*s%3===0;case t.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case t.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)s.isReserved(c,a)||s.xor(c,a,n(i,c,a))},t.getBestMask=function(i,s){const o=Object.keys(t.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){s(l),t.applyMask(l,i);const u=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(l,i),u<c&&(c=u,a=l)}return a}})(D0);var $u={};const ci=Fu,qc=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Kc=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];$u.getBlocksCount=function(e,n){switch(n){case ci.L:return qc[(e-1)*4+0];case ci.M:return qc[(e-1)*4+1];case ci.Q:return qc[(e-1)*4+2];case ci.H:return qc[(e-1)*4+3];default:return}};$u.getTotalCodewordsCount=function(e,n){switch(n){case ci.L:return Kc[(e-1)*4+0];case ci.M:return Kc[(e-1)*4+1];case ci.Q:return Kc[(e-1)*4+2];case ci.H:return Kc[(e-1)*4+3];default:return}};var M0={},Uu={};const da=new Uint8Array(512),Ol=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)da[n]=e,Ol[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)da[n]=da[n-255]})();Uu.log=function(e){if(e<1)throw new Error("log("+e+")");return Ol[e]};Uu.exp=function(e){return da[e]};Uu.mul=function(e,n){return e===0||n===0?0:da[Ol[e]+Ol[n]]};(function(t){const e=Uu;t.mul=function(r,i){const s=new Uint8Array(r.length+i.length-1);for(let o=0;o<r.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=e.mul(r[o],i[a]);return s},t.mod=function(r,i){let s=new Uint8Array(r);for(;s.length-i.length>=0;){const o=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let s=0;s<r;s++)i=t.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(M0);const x0=M0;function Xp(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Xp.prototype.initialize=function(e){this.degree=e,this.genPoly=x0.generateECPolynomial(this.degree)};Xp.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=x0.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(r,i),s}return r};var DO=Xp,L0={},Ri={},Zp={};Zp.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var pr={};const V0="[0-9]+",MO="[A-Z $%*+\\-./:]+";let Oa="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Oa=Oa.replace(/u/g,"\\u");const xO="(?:(?![A-Z0-9 $%*+\\-./:]|"+Oa+`)(?:.|[\r
]))+`;pr.KANJI=new RegExp(Oa,"g");pr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");pr.BYTE=new RegExp(xO,"g");pr.NUMERIC=new RegExp(V0,"g");pr.ALPHANUMERIC=new RegExp(MO,"g");const LO=new RegExp("^"+Oa+"$"),VO=new RegExp("^"+V0+"$"),FO=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");pr.testKanji=function(e){return LO.test(e)};pr.testNumeric=function(e){return VO.test(e)};pr.testAlphanumeric=function(e){return FO.test(e)};(function(t){const e=Zp,n=pr;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},t.getBestModeForData=function(s){return n.testNumeric(s)?t.NUMERIC:n.testAlphanumeric(s)?t.ALPHANUMERIC:n.testKanji(s)?t.KANJI:t.BYTE},t.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},t.isValid=function(s){return s&&s.bit&&s.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(s,o){if(t.isValid(s))return s;try{return r(s)}catch{return o}}})(Ri);(function(t){const e=bn,n=$u,r=Fu,i=Ri,s=Zp,o=7973,a=e.getBCHDigit(o);function c(p,m,y){for(let v=1;v<=40;v++)if(m<=t.getCapacity(v,y,p))return v}function l(p,m){return i.getCharCountIndicator(p,m)+4}function u(p,m){let y=0;return p.forEach(function(v){const b=l(v.mode,m);y+=b+v.getBitsLength()}),y}function h(p,m){for(let y=1;y<=40;y++)if(u(p,y)<=t.getCapacity(y,m,i.MIXED))return y}t.from=function(m,y){return s.isValid(m)?parseInt(m,10):y},t.getCapacity=function(m,y,v){if(!s.isValid(m))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=i.BYTE);const b=e.getSymbolTotalCodewords(m),A=n.getTotalCodewordsCount(m,y),k=(b-A)*8;if(v===i.MIXED)return k;const N=k-l(v,m);switch(v){case i.NUMERIC:return Math.floor(N/10*3);case i.ALPHANUMERIC:return Math.floor(N/11*2);case i.KANJI:return Math.floor(N/13);case i.BYTE:default:return Math.floor(N/8)}},t.getBestVersionForData=function(m,y){let v;const b=r.from(y,r.M);if(Array.isArray(m)){if(m.length>1)return h(m,b);if(m.length===0)return 1;v=m[0]}else v=m;return c(v.mode,v.getLength(),b)},t.getEncodedBits=function(m){if(!s.isValid(m)||m<7)throw new Error("Invalid QR Code version");let y=m<<12;for(;e.getBCHDigit(y)-a>=0;)y^=o<<e.getBCHDigit(y)-a;return m<<12|y}})(L0);var F0={};const df=bn,$0=1335,$O=21522,Ey=df.getBCHDigit($0);F0.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;df.getBCHDigit(i)-Ey>=0;)i^=$0<<df.getBCHDigit(i)-Ey;return(r<<10|i)^$O};var U0={};const UO=Ri;function Xs(t){this.mode=UO.NUMERIC,this.data=t.toString()}Xs.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Xs.prototype.getLength=function(){return this.data.length};Xs.prototype.getBitsLength=function(){return Xs.getBitsLength(this.data.length)};Xs.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const s=this.data.length-n;s>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,s*3+1))};var BO=Xs;const jO=Ri,td=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Zs(t){this.mode=jO.ALPHANUMERIC,this.data=t}Zs.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Zs.prototype.getLength=function(){return this.data.length};Zs.prototype.getBitsLength=function(){return Zs.getBitsLength(this.data.length)};Zs.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=td.indexOf(this.data[n])*45;r+=td.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(td.indexOf(this.data[n]),6)};var HO=Zs,WO=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var s=e.charCodeAt(i);if(s>=55296&&s<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(s=(s-55296)*1024+o-56320+65536,i+=1)}if(s<128){n.push(s);continue}if(s<2048){n.push(s>>6|192),n.push(s&63|128);continue}if(s<55296||s>=57344&&s<65536){n.push(s>>12|224),n.push(s>>6&63|128),n.push(s&63|128);continue}if(s>=65536&&s<=1114111){n.push(s>>18|240),n.push(s>>12&63|128),n.push(s>>6&63|128),n.push(s&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const zO=WO,qO=Ri;function eo(t){this.mode=qO.BYTE,typeof t=="string"&&(t=zO(t)),this.data=new Uint8Array(t)}eo.getBitsLength=function(e){return e*8};eo.prototype.getLength=function(){return this.data.length};eo.prototype.getBitsLength=function(){return eo.getBitsLength(this.data.length)};eo.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var KO=eo;const GO=Ri,QO=bn;function to(t){this.mode=GO.KANJI,this.data=t}to.getBitsLength=function(e){return e*13};to.prototype.getLength=function(){return this.data.length};to.prototype.getBitsLength=function(){return to.getBitsLength(this.data.length)};to.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=QO.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var YO=to,B0={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var s={},o={};o[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var c,l,u,h,p,m,y,v,b;!a.empty();){c=a.pop(),l=c.value,h=c.cost,p=n[l]||{};for(u in p)p.hasOwnProperty(u)&&(m=p[u],y=h+m,v=o[u],b=typeof o[u]>"u",(b||v>y)&&(o[u]=y,a.push(u,y),s[u]=l))}if(typeof i<"u"&&typeof o[i]>"u"){var A=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(A)}return s},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],s=r;s;)i.push(s),n[s],s=n[s];return i.reverse(),i},find_path:function(n,r,i){var s=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},s;n=n||{};for(s in r)r.hasOwnProperty(s)&&(i[s]=r[s]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(B0);var JO=B0.exports;(function(t){const e=Ri,n=BO,r=HO,i=KO,s=YO,o=pr,a=bn,c=JO;function l(A){return unescape(encodeURIComponent(A)).length}function u(A,k,N){const P=[];let j;for(;(j=A.exec(N))!==null;)P.push({data:j[0],index:j.index,mode:k,length:j[0].length});return P}function h(A){const k=u(o.NUMERIC,e.NUMERIC,A),N=u(o.ALPHANUMERIC,e.ALPHANUMERIC,A);let P,j;return a.isKanjiModeEnabled()?(P=u(o.BYTE,e.BYTE,A),j=u(o.KANJI,e.KANJI,A)):(P=u(o.BYTE_KANJI,e.BYTE,A),j=[]),k.concat(N,P,j).sort(function(oe,me){return oe.index-me.index}).map(function(oe){return{data:oe.data,mode:oe.mode,length:oe.length}})}function p(A,k){switch(k){case e.NUMERIC:return n.getBitsLength(A);case e.ALPHANUMERIC:return r.getBitsLength(A);case e.KANJI:return s.getBitsLength(A);case e.BYTE:return i.getBitsLength(A)}}function m(A){return A.reduce(function(k,N){const P=k.length-1>=0?k[k.length-1]:null;return P&&P.mode===N.mode?(k[k.length-1].data+=N.data,k):(k.push(N),k)},[])}function y(A){const k=[];for(let N=0;N<A.length;N++){const P=A[N];switch(P.mode){case e.NUMERIC:k.push([P,{data:P.data,mode:e.ALPHANUMERIC,length:P.length},{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.ALPHANUMERIC:k.push([P,{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.KANJI:k.push([P,{data:P.data,mode:e.BYTE,length:l(P.data)}]);break;case e.BYTE:k.push([{data:P.data,mode:e.BYTE,length:l(P.data)}])}}return k}function v(A,k){const N={},P={start:{}};let j=["start"];for(let W=0;W<A.length;W++){const oe=A[W],me=[];for(let He=0;He<oe.length;He++){const Ce=oe[He],st=""+W+He;me.push(st),N[st]={node:Ce,lastCount:0},P[st]={};for(let kt=0;kt<j.length;kt++){const qe=j[kt];N[qe]&&N[qe].node.mode===Ce.mode?(P[qe][st]=p(N[qe].lastCount+Ce.length,Ce.mode)-p(N[qe].lastCount,Ce.mode),N[qe].lastCount+=Ce.length):(N[qe]&&(N[qe].lastCount=Ce.length),P[qe][st]=p(Ce.length,Ce.mode)+4+e.getCharCountIndicator(Ce.mode,k))}}j=me}for(let W=0;W<j.length;W++)P[j[W]].end=0;return{map:P,table:N}}function b(A,k){let N;const P=e.getBestModeForData(A);if(N=e.from(k,P),N!==e.BYTE&&N.bit<P.bit)throw new Error('"'+A+'" cannot be encoded with mode '+e.toString(N)+`.
 Suggested mode is: `+e.toString(P));switch(N===e.KANJI&&!a.isKanjiModeEnabled()&&(N=e.BYTE),N){case e.NUMERIC:return new n(A);case e.ALPHANUMERIC:return new r(A);case e.KANJI:return new s(A);case e.BYTE:return new i(A)}}t.fromArray=function(k){return k.reduce(function(N,P){return typeof P=="string"?N.push(b(P,null)):P.data&&N.push(b(P.data,P.mode)),N},[])},t.fromString=function(k,N){const P=h(k,a.isKanjiModeEnabled()),j=y(P),W=v(j,N),oe=c.find_path(W.map,"start","end"),me=[];for(let He=1;He<oe.length-1;He++)me.push(W.table[oe[He]].node);return t.fromArray(m(me))},t.rawSplit=function(k){return t.fromArray(h(k,a.isKanjiModeEnabled()))}})(U0);const Bu=bn,nd=Fu,XO=kO,ZO=NO,eD=N0,tD=O0,ff=D0,pf=$u,nD=DO,Dl=L0,rD=F0,iD=Ri,rd=U0;function sD(t,e){const n=t.size,r=tD.getPositions(e);for(let i=0;i<r.length;i++){const s=r[i][0],o=r[i][1];for(let a=-1;a<=7;a++)if(!(s+a<=-1||n<=s+a))for(let c=-1;c<=7;c++)o+c<=-1||n<=o+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(s+a,o+c,!0,!0):t.set(s+a,o+c,!1,!0))}}function oD(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function aD(t,e){const n=eD.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],s=n[r][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?t.set(i+o,s+a,!0,!0):t.set(i+o,s+a,!1,!0)}}function cD(t,e){const n=t.size,r=Dl.getEncodedBits(e);let i,s,o;for(let a=0;a<18;a++)i=Math.floor(a/3),s=a%3+n-8-3,o=(r>>a&1)===1,t.set(i,s,o,!0),t.set(s,i,o,!0)}function id(t,e,n){const r=t.size,i=rD.getEncodedBits(e,n);let s,o;for(s=0;s<15;s++)o=(i>>s&1)===1,s<6?t.set(s,8,o,!0):s<8?t.set(s+1,8,o,!0):t.set(r-15+s,8,o,!0),s<8?t.set(8,r-s-1,o,!0):s<9?t.set(8,15-s-1+1,o,!0):t.set(8,15-s-1,o,!0);t.set(r-8,8,1,!0)}function lD(t,e){const n=t.size;let r=-1,i=n-1,s=7,o=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(i,a-c)){let l=!1;o<e.length&&(l=(e[o]>>>s&1)===1),t.set(i,a-c,l),s--,s===-1&&(o++,s=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function uD(t,e,n){const r=new XO;n.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),iD.getCharCountIndicator(c.mode,t)),c.write(r)});const i=Bu.getSymbolTotalCodewords(t),s=pf.getTotalCodewordsCount(t,e),o=(i-s)*8;for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(o-r.getLengthInBits())/8;for(let c=0;c<a;c++)r.put(c%2?17:236,8);return hD(r,t,e)}function hD(t,e,n){const r=Bu.getSymbolTotalCodewords(e),i=pf.getTotalCodewordsCount(e,n),s=r-i,o=pf.getBlocksCount(e,n),a=r%o,c=o-a,l=Math.floor(r/o),u=Math.floor(s/o),h=u+1,p=l-u,m=new nD(p);let y=0;const v=new Array(o),b=new Array(o);let A=0;const k=new Uint8Array(t.buffer);for(let oe=0;oe<o;oe++){const me=oe<c?u:h;v[oe]=k.slice(y,y+me),b[oe]=m.encode(v[oe]),y+=me,A=Math.max(A,me)}const N=new Uint8Array(r);let P=0,j,W;for(j=0;j<A;j++)for(W=0;W<o;W++)j<v[W].length&&(N[P++]=v[W][j]);for(j=0;j<p;j++)for(W=0;W<o;W++)N[P++]=b[W][j];return N}function dD(t,e,n,r){let i;if(Array.isArray(t))i=rd.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const u=rd.rawSplit(t);l=Dl.getBestVersionForData(u,n)}i=rd.fromString(t,l||40)}else throw new Error("Invalid data");const s=Dl.getBestVersionForData(i,n);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const o=uD(e,n,i),a=Bu.getSymbolSize(e),c=new ZO(a);return sD(c,e),oD(c),aD(c,e),id(c,n,0),e>=7&&cD(c,e),lD(c,o),isNaN(r)&&(r=ff.getBestMask(c,id.bind(null,c,n))),ff.applyMask(r,c),id(c,n,r),{modules:c,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}P0.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=nd.M,i,s;return typeof n<"u"&&(r=nd.from(n.errorCorrectionLevel,nd.M),i=Dl.from(n.version),s=ff.from(n.maskPattern),n.toSJISFunc&&Bu.setToSJISFunction(n.toSJISFunc)),dD(e,i,r,s)};var j0={},em={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(s){return[s,s]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,s=r.width&&r.width>=21?r.width:void 0,o=r.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const s=t.getScale(r,i);return Math.floor((r+i.margin*2)*s)},t.qrToImageData=function(r,i,s){const o=i.modules.size,a=i.modules.data,c=t.getScale(o,s),l=Math.floor((o+s.margin*2)*c),u=s.margin*c,h=[s.color.light,s.color.dark];for(let p=0;p<l;p++)for(let m=0;m<l;m++){let y=(p*l+m)*4,v=s.color.light;if(p>=u&&m>=u&&p<l-u&&m<l-u){const b=Math.floor((p-u)/c),A=Math.floor((m-u)/c);v=h[a[b*o+A]?1:0]}r[y++]=v.r,r[y++]=v.g,r[y++]=v.b,r[y]=v.a}}})(em);(function(t){const e=em;function n(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(s,o,a){let c=a,l=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=r()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),h=l.getContext("2d"),p=h.createImageData(u,u);return e.qrToImageData(p.data,s,c),n(h,l,u),h.putImageData(p,0,0),l},t.renderToDataURL=function(s,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=t.render(s,o,c),u=c.type||"image/png",h=c.rendererOpts||{};return l.toDataURL(u,h.quality)}})(j0);var H0={};const fD=em;function Ty(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function sd(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function pD(t,e,n){let r="",i=0,s=!1,o=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!s&&(s=!0),t[a]?(o++,a>0&&c>0&&t[a-1]||(r+=s?sd("M",c+n,.5+l+n):sd("m",i,0),i=0,s=!1),c+1<e&&t[a+1]||(r+=sd("h",o),o=0)):i++}return r}H0.render=function(e,n,r){const i=fD.getOptions(n),s=e.modules.size,o=e.modules.data,a=s+i.margin*2,c=i.color.light.a?"<path "+Ty(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+Ty(i.color.dark,"stroke")+' d="'+pD(o,s,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,p),p};const mD=SO,mf=P0,W0=j0,gD=H0;function tm(t,e,n,r,i){const s=[].slice.call(arguments,1),o=s.length,a=typeof s[o-1]=="function";if(!a&&!mD())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(i=n,n=e,e=r=void 0):o===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(n=e,e=r=void 0):o===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(c,l){try{const u=mf.create(n,r);c(t(u,e,r))}catch(u){l(u)}})}try{const c=mf.create(n,r);i(null,t(c,e,r))}catch(c){i(c)}}mf.create;var _D=tm.bind(null,W0.render);tm.bind(null,W0.renderToDataURL);tm.bind(null,function(t,e,n){return gD.render(t,n)});const yD=fr({__name:"QrCode",props:{codeString:{}},setup(t){const e=t,n=Wt(null);return Hp(()=>{_D(n.value,e.codeString)}),(r,i)=>(fn(),Fr("div",null,[ai("canvas",{ref_key:"canvas",ref:n},null,512)]))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=function(t,e){if(!t)throw Eo(e)},Eo=function(t){return new Error("Firebase Database ("+z0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ju={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(q0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new wD;const p=s<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const K0=function(t){const e=q0(t);return ju.encodeByteArray(e,!0)},Ml=function(t){return K0(t).replace(/\./g,"")},xl=function(t){try{return ju.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(t){return G0(void 0,t)}function G0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!TD(n)||(t[n]=G0(t[n],e[n]));return t}function TD(t){return t!=="__proto__"}/**
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
 */function ID(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bD=()=>ID().__FIREBASE_DEFAULTS__,AD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xl(t[1]);return e&&JSON.parse(e)},nm=()=>{try{return bD()||AD()||CD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Q0=t=>{var e,n;return(n=(e=nm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RD=t=>{const e=Q0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Y0=()=>{var t;return(t=nm())===null||t===void 0?void 0:t.config},J0=t=>{var e;return(e=nm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function SD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ml(JSON.stringify(n)),Ml(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function X0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Z0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PD(){const t=Zt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eT(){return z0.NODE_ADMIN===!0}function im(){try{return typeof indexedDB=="object"}catch{return!1}}function tT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function kD(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ND,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?OD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,a,r)}}function OD(t,e){return t.replace(DD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const DD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t){return JSON.parse(t)}function Dt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ma(xl(s[0])||""),n=Ma(xl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},MD=function(t){const e=nT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},xD=function(t){const e=nT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function no(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ll(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Vl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Iy(s)&&Iy(o)){if(!Vl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Iy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const p=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):h<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const p=(i<<5|i>>>27)+l+c+u+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function VD(t,e){const n=new FD(t,e);return n.subscribe.bind(n)}class FD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$D(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=od),i.error===void 0&&(i.error=od),i.complete===void 0&&(i.complete=od);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $D(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function od(){}function UD(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,K(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Hu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const jD=1e3,HD=2,WD=4*60*60*1e3,zD=.5;function by(t,e=jD,n=HD){const r=e*Math.pow(n,t),i=Math.round(zD*r*(Math.random()-.5)*2);return Math.min(WD,r+i)}/**
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
 */function an(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fi="[DEFAULT]";/**
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
 */class qD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Da;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GD(e))try{this.getOrInitializeService({instanceIdentifier:Fi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fi){return this.instances.has(e)}getOptions(e=Fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fi){return this.component?this.component.multipleInstances?e:Fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KD(t){return t===Fi?void 0:t}function GD(t){return t.instantiationMode==="EAGER"}/**
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
 */class QD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ne||(Ne={}));const YD={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},JD=Ne.INFO,XD={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},ZD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=XD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Io{constructor(e){this.name=e,this._logLevel=JD,this._logHandler=ZD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const eM=(t,e)=>e.some(n=>t instanceof n);let Ay,Cy;function tM(){return Ay||(Ay=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nM(){return Cy||(Cy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rT=new WeakMap,_f=new WeakMap,iT=new WeakMap,ad=new WeakMap,sm=new WeakMap;function rM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rT.set(n,t)}).catch(()=>{}),sm.set(e,t),e}function iM(t){if(_f.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_f.set(t,e)}let yf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _f.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sM(t){yf=t(yf)}function oM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cd(this),e,...n);return iT.set(r,e.sort?e.sort():[e]),pi(r)}:nM().includes(t)?function(...e){return t.apply(cd(this),e),pi(rT.get(this))}:function(...e){return pi(t.apply(cd(this),e))}}function aM(t){return typeof t=="function"?oM(t):(t instanceof IDBTransaction&&iM(t),eM(t,tM())?new Proxy(t,yf):t)}function pi(t){if(t instanceof IDBRequest)return rM(t);if(ad.has(t))return ad.get(t);const e=aM(t);return e!==t&&(ad.set(t,e),sm.set(e,t)),e}const cd=t=>sm.get(t);function cM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=pi(o);return r&&o.addEventListener("upgradeneeded",c=>{r(pi(o.result),c.oldVersion,c.newVersion,pi(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const lM=["get","getKey","getAll","getAllKeys","count"],uM=["put","add","delete","clear"],ld=new Map;function Ry(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ld.get(e))return ld.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=uM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lM.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return ld.set(e,s),s}sM(t=>({...t,get:(e,n,r)=>Ry(e,n)||t.get(e,n,r),has:(e,n)=>!!Ry(e,n)||t.has(e,n)}));/**
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
 */class hM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vf="@firebase/app",Sy="0.9.17";/**
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
 */const ns=new Io("@firebase/app"),fM="@firebase/app-compat",pM="@firebase/analytics-compat",mM="@firebase/analytics",gM="@firebase/app-check-compat",_M="@firebase/app-check",yM="@firebase/auth",vM="@firebase/auth-compat",wM="@firebase/database",EM="@firebase/database-compat",TM="@firebase/functions",IM="@firebase/functions-compat",bM="@firebase/installations",AM="@firebase/installations-compat",CM="@firebase/messaging",RM="@firebase/messaging-compat",SM="@firebase/performance",PM="@firebase/performance-compat",kM="@firebase/remote-config",NM="@firebase/remote-config-compat",OM="@firebase/storage",DM="@firebase/storage-compat",MM="@firebase/firestore",xM="@firebase/firestore-compat",LM="firebase",VM="10.3.0";/**
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
 */const wf="[DEFAULT]",FM={[vf]:"fire-core",[fM]:"fire-core-compat",[mM]:"fire-analytics",[pM]:"fire-analytics-compat",[_M]:"fire-app-check",[gM]:"fire-app-check-compat",[yM]:"fire-auth",[vM]:"fire-auth-compat",[wM]:"fire-rtdb",[EM]:"fire-rtdb-compat",[TM]:"fire-fn",[IM]:"fire-fn-compat",[bM]:"fire-iid",[AM]:"fire-iid-compat",[CM]:"fire-fcm",[RM]:"fire-fcm-compat",[SM]:"fire-perf",[PM]:"fire-perf-compat",[kM]:"fire-rc",[NM]:"fire-rc-compat",[OM]:"fire-gcs",[DM]:"fire-gcs-compat",[MM]:"fire-fst",[xM]:"fire-fst-compat","fire-js":"fire-js",[LM]:"fire-js-all"};/**
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
 */const Fl=new Map,Ef=new Map;function $M(t,e){try{t.container.addComponent(e)}catch(n){ns.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gn(t){const e=t.name;if(Ef.has(e))return ns.debug(`There were multiple attempts to register component ${e}.`),!1;Ef.set(e,t);for(const n of Fl.values())$M(n,t);return!0}function sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const UM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mi=new Si("app","Firebase",UM);/**
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
 */class BM{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
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
 */const Pi=VM;function sT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mi.create("bad-app-name",{appName:String(i)});if(n||(n=Y0()),!n)throw mi.create("no-options");const s=Fl.get(i);if(s){if(Vl(n,s.options)&&Vl(r,s.config))return s;throw mi.create("duplicate-app",{appName:i})}const o=new QD(i);for(const c of Ef.values())o.addComponent(c);const a=new BM(n,r,o);return Fl.set(i,a),a}function om(t=wf){const e=Fl.get(t);if(!e&&t===wf&&Y0())return sT();if(!e)throw mi.create("no-app",{appName:t});return e}function xt(t,e,n){var r;let i=(r=FM[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ns.warn(a.join(" "));return}gn(new cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const jM="firebase-heartbeat-database",HM=1,xa="firebase-heartbeat-store";let ud=null;function oT(){return ud||(ud=cM(jM,HM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xa)}}}).catch(t=>{throw mi.create("idb-open",{originalErrorMessage:t.message})})),ud}async function WM(t){try{return await(await oT()).transaction(xa).objectStore(xa).get(aT(t))}catch(e){if(e instanceof Mn)ns.warn(e.message);else{const n=mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ns.warn(n.message)}}}async function Py(t,e){try{const r=(await oT()).transaction(xa,"readwrite");await r.objectStore(xa).put(e,aT(t)),await r.done}catch(n){if(n instanceof Mn)ns.warn(n.message);else{const r=mi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ns.warn(r.message)}}}function aT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zM=1024,qM=30*24*60*60*1e3;class KM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ky();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=qM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ky(),{heartbeatsToSend:n,unsentEntries:r}=GM(this._heartbeatsCache.heartbeats),i=Ml(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ky(){return new Date().toISOString().substring(0,10)}function GM(t,e=zM){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ny(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ny(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class QM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return im()?tT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await WM(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Py(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Py(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ny(t){return Ml(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function YM(t){gn(new cn("platform-logger",e=>new hM(e),"PRIVATE")),gn(new cn("heartbeat",e=>new KM(e),"PRIVATE")),xt(vf,Sy,t),xt(vf,Sy,"esm2017"),xt("fire-js","")}YM("");var JM="firebase",XM="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(JM,XM,"app");const ZM=(t,e)=>e.some(n=>t instanceof n);let Oy,Dy;function ex(){return Oy||(Oy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tx(){return Dy||(Dy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cT=new WeakMap,Tf=new WeakMap,lT=new WeakMap,hd=new WeakMap,am=new WeakMap;function nx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cT.set(n,t)}).catch(()=>{}),am.set(e,t),e}function rx(t){if(Tf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Tf.set(t,e)}let If={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ix(t){If=t(If)}function sx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dd(this),e,...n);return lT.set(r,e.sort?e.sort():[e]),gi(r)}:tx().includes(t)?function(...e){return t.apply(dd(this),e),gi(cT.get(this))}:function(...e){return gi(t.apply(dd(this),e))}}function ox(t){return typeof t=="function"?sx(t):(t instanceof IDBTransaction&&rx(t),ZM(t,ex())?new Proxy(t,If):t)}function gi(t){if(t instanceof IDBRequest)return nx(t);if(hd.has(t))return hd.get(t);const e=ox(t);return e!==t&&(hd.set(t,e),am.set(e,t)),e}const dd=t=>am.get(t);function ax(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=gi(o);return r&&o.addEventListener("upgradeneeded",c=>{r(gi(o.result),c.oldVersion,c.newVersion,gi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const cx=["get","getKey","getAll","getAllKeys","count"],lx=["put","add","delete","clear"],fd=new Map;function My(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fd.get(e))return fd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cx.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return fd.set(e,s),s}ix(t=>({...t,get:(e,n,r)=>My(e,n)||t.get(e,n,r),has:(e,n)=>!!My(e,n)||t.has(e,n)}));const uT="@firebase/installations",cm="0.6.4";/**
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
 */const hT=1e4,dT=`w:${cm}`,fT="FIS_v2",ux="https://firebaseinstallations.googleapis.com/v1",hx=60*60*1e3,dx="installations",fx="Installations";/**
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
 */const px={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},rs=new Si(dx,fx,px);function pT(t){return t instanceof Mn&&t.code.includes("request-failed")}/**
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
 */function mT({projectId:t}){return`${ux}/projects/${t}/installations`}function gT(t){return{token:t.token,requestStatus:2,expiresIn:gx(t.expiresIn),creationTime:Date.now()}}async function _T(t,e){const r=(await e.json()).error;return rs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function yT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function mx(t,{refreshToken:e}){const n=yT(t);return n.append("Authorization",_x(e)),n}async function vT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function gx(t){return Number(t.replace("s","000"))}function _x(t){return`${fT} ${t}`}/**
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
 */async function yx({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=mT(t),i=yT(t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:fT,appId:t.appId,sdkVersion:dT},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await vT(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:gT(l.authToken)}}else throw await _T("Create Installation",c)}/**
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
 */function wT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function vx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wx=/^[cdef][\w-]{21}$/,bf="";function Ex(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Tx(t);return wx.test(n)?n:bf}catch{return bf}}function Tx(t){return vx(t).substr(0,22)}/**
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
 */function Wu(t){return`${t.appName}!${t.appId}`}/**
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
 */const ET=new Map;function TT(t,e){const n=Wu(t);IT(n,e),Ix(n,e)}function IT(t,e){const n=ET.get(t);if(n)for(const r of n)r(e)}function Ix(t,e){const n=bx();n&&n.postMessage({key:t,fid:e}),Ax()}let Hi=null;function bx(){return!Hi&&"BroadcastChannel"in self&&(Hi=new BroadcastChannel("[Firebase] FID Change"),Hi.onmessage=t=>{IT(t.data.key,t.data.fid)}),Hi}function Ax(){ET.size===0&&Hi&&(Hi.close(),Hi=null)}/**
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
 */const Cx="firebase-installations-database",Rx=1,is="firebase-installations-store";let pd=null;function lm(){return pd||(pd=ax(Cx,Rx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(is)}}})),pd}async function $l(t,e){const n=Wu(t),i=(await lm()).transaction(is,"readwrite"),s=i.objectStore(is),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&TT(t,e.fid),e}async function bT(t){const e=Wu(t),r=(await lm()).transaction(is,"readwrite");await r.objectStore(is).delete(e),await r.done}async function zu(t,e){const n=Wu(t),i=(await lm()).transaction(is,"readwrite"),s=i.objectStore(is),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&TT(t,a.fid),a}/**
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
 */async function um(t){let e;const n=await zu(t.appConfig,r=>{const i=Sx(r),s=Px(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===bf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Sx(t){const e=t||{fid:Ex(),registrationStatus:0};return AT(e)}function Px(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(rs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=kx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Nx(t)}:{installationEntry:e}}async function kx(t,e){try{const n=await yx(t,e);return $l(t.appConfig,n)}catch(n){throw pT(n)&&n.customData.serverCode===409?await bT(t.appConfig):await $l(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Nx(t){let e=await xy(t.appConfig);for(;e.registrationStatus===1;)await wT(100),e=await xy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await um(t);return r||n}return e}function xy(t){return zu(t,e=>{if(!e)throw rs.create("installation-not-found");return AT(e)})}function AT(t){return Ox(t)?{fid:t.fid,registrationStatus:0}:t}function Ox(t){return t.registrationStatus===1&&t.registrationTime+hT<Date.now()}/**
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
 */async function Dx({appConfig:t,heartbeatServiceProvider:e},n){const r=Mx(t,n),i=mx(t,n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:dT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await vT(()=>fetch(r,a));if(c.ok){const l=await c.json();return gT(l)}else throw await _T("Generate Auth Token",c)}function Mx(t,{fid:e}){return`${mT(t)}/${e}/authTokens:generate`}/**
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
 */async function hm(t,e=!1){let n;const r=await zu(t.appConfig,s=>{if(!CT(s))throw rs.create("not-registered");const o=s.authToken;if(!e&&Vx(o))return s;if(o.requestStatus===1)return n=xx(t,e),s;{if(!navigator.onLine)throw rs.create("app-offline");const a=$x(s);return n=Lx(t,a),a}});return n?await n:r.authToken}async function xx(t,e){let n=await Ly(t.appConfig);for(;n.authToken.requestStatus===1;)await wT(100),n=await Ly(t.appConfig);const r=n.authToken;return r.requestStatus===0?hm(t,e):r}function Ly(t){return zu(t,e=>{if(!CT(e))throw rs.create("not-registered");const n=e.authToken;return Ux(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Lx(t,e){try{const n=await Dx(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await $l(t.appConfig,r),n}catch(n){if(pT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await bT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $l(t.appConfig,r)}throw n}}function CT(t){return t!==void 0&&t.registrationStatus===2}function Vx(t){return t.requestStatus===2&&!Fx(t)}function Fx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+hx}function $x(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ux(t){return t.requestStatus===1&&t.requestTime+hT<Date.now()}/**
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
 */async function Bx(t){const e=t,{installationEntry:n,registrationPromise:r}=await um(e);return r?r.catch(console.error):hm(e).catch(console.error),n.fid}/**
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
 */async function jx(t,e=!1){const n=t;return await Hx(n),(await hm(n,e)).token}async function Hx(t){const{registrationPromise:e}=await um(t);e&&await e}/**
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
 */function Wx(t){if(!t||!t.options)throw md("App Configuration");if(!t.name)throw md("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw md(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function md(t){return rs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="installations",zx="installations-internal",qx=t=>{const e=t.getProvider("app").getImmediate(),n=Wx(e),r=sc(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Kx=t=>{const e=t.getProvider("app").getImmediate(),n=sc(e,RT).getImmediate();return{getId:()=>Bx(n),getToken:i=>jx(n,i)}};function Gx(){gn(new cn(RT,qx,"PUBLIC")),gn(new cn(zx,Kx,"PRIVATE"))}Gx();xt(uT,cm);xt(uT,cm,"esm2017");/**
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
 */const Vy="analytics",Qx="firebase_id",Yx="origin",Jx=60*1e3,Xx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",dm="https://www.googletagmanager.com/gtag/js";/**
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
 */const pn=new Io("@firebase/analytics");/**
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
 */const Zx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nn=new Si("analytics","Analytics",Zx);/**
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
 */function eL(t){if(!t.startsWith(dm)){const e=Nn.create("invalid-gtag-resource",{gtagURL:t});return pn.warn(e.message),""}return t}function ST(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function tL(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function nL(t,e){const n=tL("firebase-js-sdk-policy",{createScriptURL:eL}),r=document.createElement("script"),i=`${dm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function rL(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function iL(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await ST(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){pn.error(a)}t("config",i,s)}async function sL(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await ST(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){pn.error(s)}}function oL(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await sL(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await iL(t,e,n,r,a,c)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){pn.error(a)}}return i}function aL(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=oL(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function cL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(dm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL=30,uL=1e3;class hL{constructor(e={},n=uL){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const PT=new hL;function dL(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function fL(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:dL(r)},s=Xx.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Nn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function pL(t,e=PT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Nn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Nn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new _L;return setTimeout(async()=>{a.abort()},n!==void 0?n:Jx),kT({appId:r,apiKey:i,measurementId:s},o,a,e)}async function kT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=PT){var s;const{appId:o,measurementId:a}=t;try{await mL(r,e)}catch(c){if(a)return pn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await fL(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!gL(l)){if(i.deleteThrottleMetadata(o),a)return pn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?by(n,i.intervalMillis,lL):by(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),pn.debug(`Calling attemptFetch again in ${u} millis`),kT(t,h,r,i)}}function mL(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Nn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gL(t){if(!(t instanceof Mn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class _L{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function yL(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vL(){if(im())try{await tT()}catch(t){return pn.warn(Nn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return pn.warn(Nn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wL(t,e,n,r,i,s,o){var a;const c=pL(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&pn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>pn.error(m)),e.push(c);const l=vL().then(m=>{if(m)return r.getId()}),[u,h]=await Promise.all([c,l]);cL(s)||nL(s,u.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[Yx]="firebase",p.update=!0,h!=null&&(p[Qx]=h),i("config",u.measurementId,p),u.measurementId}/**
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
 */class EL{constructor(e){this.app=e}_delete(){return delete fa[this.app.options.appId],Promise.resolve()}}let fa={},Fy=[];const $y={};let gd="dataLayer",TL="gtag",Uy,NT,By=!1;function IL(){const t=[];if(X0()&&t.push("This is a browser extension environment."),kD()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Nn.create("invalid-analytics-context",{errorInfo:e});pn.warn(n.message)}}function bL(t,e,n){IL();const r=t.options.appId;if(!r)throw Nn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)pn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nn.create("no-api-key");if(fa[r]!=null)throw Nn.create("already-exists",{id:r});if(!By){rL(gd);const{wrappedGtag:s,gtagCore:o}=aL(fa,Fy,$y,gd,TL);NT=s,Uy=o,By=!0}return fa[r]=wL(t,Fy,$y,e,Uy,gd,n),new EL(t)}function AL(t,e,n,r){t=an(t),yL(NT,fa[t.app.options.appId],e,n,r).catch(i=>pn.error(i))}const jy="@firebase/analytics",Hy="0.10.0";function CL(){gn(new cn(Vy,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return bL(r,i,n)},"PUBLIC")),gn(new cn("analytics-internal",t,"PRIVATE")),xt(jy,Hy),xt(jy,Hy,"esm2017");function t(e){try{const n=e.getProvider(Vy).getImmediate();return{logEvent:(r,i,s)=>AL(n,r,i,s)}}catch(n){throw Nn.create("interop-component-reg-failed",{reason:n})}}}CL();var RL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,fm=fm||{},de=RL||self;function qu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function oc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function SL(t){return Object.prototype.hasOwnProperty.call(t,_d)&&t[_d]||(t[_d]=++PL)}var _d="closure_uid_"+(1e9*Math.random()>>>0),PL=0;function kL(t,e,n){return t.call.apply(t.bind,arguments)}function NL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Yt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Yt=kL:Yt=NL,Yt.apply(null,arguments)}function Gc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Pt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ki(){this.s=this.s,this.o=this.o}var OL=0;ki.prototype.s=!1;ki.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),OL!=0)&&SL(this)};ki.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const OT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Wy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(qu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Jt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Jt.prototype.h=function(){this.defaultPrevented=!0};var DL=function(){if(!de.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{de.addEventListener("test",()=>{},e),de.removeEventListener("test",()=>{},e)}catch{}return t}();function La(t){return/^[\s\xa0]*$/.test(t)}function Ku(){var t=de.navigator;return t&&(t=t.userAgent)?t:""}function er(t){return Ku().indexOf(t)!=-1}function mm(t){return mm[" "](t),t}mm[" "]=function(){};function ML(t,e){var n=C2;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var xL=er("Opera"),ro=er("Trident")||er("MSIE"),DT=er("Edge"),Af=DT||ro,MT=er("Gecko")&&!(Ku().toLowerCase().indexOf("webkit")!=-1&&!er("Edge"))&&!(er("Trident")||er("MSIE"))&&!er("Edge"),LL=Ku().toLowerCase().indexOf("webkit")!=-1&&!er("Edge");function xT(){var t=de.document;return t?t.documentMode:void 0}var Cf;e:{var yd="",vd=function(){var t=Ku();if(MT)return/rv:([^\);]+)(\)|;)/.exec(t);if(DT)return/Edge\/([\d\.]+)/.exec(t);if(ro)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(LL)return/WebKit\/(\S+)/.exec(t);if(xL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(vd&&(yd=vd?vd[1]:""),ro){var wd=xT();if(wd!=null&&wd>parseFloat(yd)){Cf=String(wd);break e}}Cf=yd}var Rf;if(de.document&&ro){var zy=xT();Rf=zy||parseInt(Cf,10)||void 0}else Rf=void 0;var VL=Rf;function Va(t,e){if(Jt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(MT){e:{try{mm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:FL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Va.$.h.call(this)}}Pt(Va,Jt);var FL={2:"touch",3:"pen",4:"mouse"};Va.prototype.h=function(){Va.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ac="closure_listenable_"+(1e6*Math.random()|0),$L=0;function UL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++$L,this.fa=this.ia=!1}function Gu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function gm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function BL(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function LT(t){const e={};for(const n in t)e[n]=t[n];return e}const qy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function VT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<qy.length;s++)n=qy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Qu(t){this.src=t,this.g={},this.h=0}Qu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Pf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new UL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Sf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=OT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Gu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var _m="closure_lm_"+(1e6*Math.random()|0),Ed={};function FT(t,e,n,r,i){if(r&&r.once)return UT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)FT(t,e[s],n,r,i);return null}return n=wm(n),t&&t[ac]?t.O(e,n,oc(r)?!!r.capture:!!r,i):$T(t,e,n,!1,r,i)}function $T(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=oc(i)?!!i.capture:!!i,a=vm(t);if(a||(t[_m]=a=new Qu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=jL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)DL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(jT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jL(){function t(n){return e.call(t.src,t.listener,n)}const e=HL;return t}function UT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)UT(t,e[s],n,r,i);return null}return n=wm(n),t&&t[ac]?t.P(e,n,oc(r)?!!r.capture:!!r,i):$T(t,e,n,!0,r,i)}function BT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)BT(t,e[s],n,r,i);else r=oc(r)?!!r.capture:!!r,n=wm(n),t&&t[ac]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Pf(s,n,r,i),-1<n&&(Gu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=vm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pf(e,n,r,i)),(n=-1<t?e[t]:null)&&ym(n))}function ym(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ac])Sf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(jT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vm(e))?(Sf(n,t),n.h==0&&(n.src=null,e[_m]=null)):Gu(t)}}}function jT(t){return t in Ed?Ed[t]:Ed[t]="on"+t}function HL(t,e){if(t.fa)t=!0;else{e=new Va(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ym(t),t=n.call(r,e)}return t}function vm(t){return t=t[_m],t instanceof Qu?t:null}var Td="__closure_events_fn_"+(1e9*Math.random()>>>0);function wm(t){return typeof t=="function"?t:(t[Td]||(t[Td]=function(e){return t.handleEvent(e)}),t[Td])}function St(){ki.call(this),this.i=new Qu(this),this.S=this,this.J=null}Pt(St,ki);St.prototype[ac]=!0;St.prototype.removeEventListener=function(t,e,n,r){BT(this,t,e,n,r)};function Lt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Jt(e,t);else if(e instanceof Jt)e.target=e.target||t;else{var i=e;e=new Jt(r,t),VT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Qc(o,r,!0,e)&&i}if(o=e.g=t,i=Qc(o,r,!0,e)&&i,i=Qc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Qc(o,r,!1,e)&&i}St.prototype.N=function(){if(St.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Gu(n[r]);delete t.g[e],t.h--}}this.J=null};St.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};St.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Qc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Sf(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Em=de.JSON.stringify;class WL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function zL(){var t=Tm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qL{constructor(){this.h=this.g=null}add(e,n){const r=HT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var HT=new WL(()=>new KL,t=>t.reset());class KL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function GL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function QL(t){de.setTimeout(()=>{throw t},0)}let Fa,$a=!1,Tm=new qL,WT=()=>{const t=de.Promise.resolve(void 0);Fa=()=>{t.then(YL)}};var YL=()=>{for(var t;t=zL();){try{t.h.call(t.g)}catch(n){QL(n)}var e=HT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$a=!1};function Yu(t,e){St.call(this),this.h=t||1,this.g=e||de,this.j=Yt(this.qb,this),this.l=Date.now()}Pt(Yu,St);G=Yu.prototype;G.ga=!1;G.T=null;G.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Lt(this,"tick"),this.ga&&(Im(this),this.start()))}};G.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Im(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}G.N=function(){Yu.$.N.call(this),Im(this),delete this.g};function bm(t,e,n){if(typeof t=="function")n&&(t=Yt(t,n));else if(t&&typeof t.handleEvent=="function")t=Yt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:de.setTimeout(t,e||0)}function zT(t){t.g=bm(()=>{t.g=null,t.i&&(t.i=!1,zT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class JL extends ki{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zT(this)}N(){super.N(),this.g&&(de.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ua(t){ki.call(this),this.h=t,this.g={}}Pt(Ua,ki);var Ky=[];function qT(t,e,n,r){Array.isArray(n)||(n&&(Ky[0]=n.toString()),n=Ky);for(var i=0;i<n.length;i++){var s=FT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function KT(t){gm(t.g,function(e,n){this.g.hasOwnProperty(n)&&ym(e)},t),t.g={}}Ua.prototype.N=function(){Ua.$.N.call(this),KT(this)};Ua.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ju(){this.g=!0}Ju.prototype.Ea=function(){this.g=!1};function XL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ZL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Os(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+t2(t,n)+(r?" "+r:"")})}function e2(t,e){t.info(function(){return"TIMEOUT: "+e})}Ju.prototype.info=function(){};function t2(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Em(n)}catch{return e}}var gs={},Gy=null;function Xu(){return Gy=Gy||new St}gs.Ta="serverreachability";function GT(t){Jt.call(this,gs.Ta,t)}Pt(GT,Jt);function Ba(t){const e=Xu();Lt(e,new GT(e))}gs.STAT_EVENT="statevent";function QT(t,e){Jt.call(this,gs.STAT_EVENT,t),this.stat=e}Pt(QT,Jt);function on(t){const e=Xu();Lt(e,new QT(e,t))}gs.Ua="timingevent";function YT(t,e){Jt.call(this,gs.Ua,t),this.size=e}Pt(YT,Jt);function cc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return de.setTimeout(function(){t()},e)}var Zu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},JT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Am(){}Am.prototype.h=null;function Qy(t){return t.h||(t.h=t.i())}function XT(){}var lc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Cm(){Jt.call(this,"d")}Pt(Cm,Jt);function Rm(){Jt.call(this,"c")}Pt(Rm,Jt);var kf;function eh(){}Pt(eh,Am);eh.prototype.g=function(){return new XMLHttpRequest};eh.prototype.i=function(){return{}};kf=new eh;function uc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ua(this),this.P=n2,t=Af?125:void 0,this.V=new Yu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ZT}function ZT(){this.i=null,this.g="",this.h=!1}var n2=45e3,Nf={},Ul={};G=uc.prototype;G.setTimeout=function(t){this.P=t};function Of(t,e,n){t.L=1,t.v=nh($r(e)),t.s=n,t.S=!0,eI(t,null)}function eI(t,e){t.G=Date.now(),hc(t),t.A=$r(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),cI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ZT,t.g=PI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new JL(Yt(t.Pa,t,t.g),t.O)),qT(t.U,t.g,"readystatechange",t.nb),e=t.I?LT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ba(),XL(t.j,t.u,t.A,t.m,t.W,t.s)}G.nb=function(t){t=t.target;const e=this.M;e&&tr(t)==3?e.l():this.Pa(t)};G.Pa=function(t){try{if(t==this.g)e:{const u=tr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Af||this.g&&(this.h.h||this.g.ja()||Zy(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ba(3):Ba(2)),th(this);var n=this.g.da();this.ca=n;t:if(tI(this)){var r=Zy(this.g);t="";var i=r.length,s=tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wi(this),pa(this);var o="";break t}this.h.i=new de.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ZL(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!La(a)){var l=a;break t}}l=null}if(n=l)Os(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Df(this,n);else{this.i=!1,this.o=3,on(12),Wi(this),pa(this);break e}}this.S?(nI(this,u,o),Af&&this.i&&u==3&&(qT(this.U,this.V,"tick",this.mb),this.V.start())):(Os(this.j,this.m,o,null),Df(this,o)),u==4&&Wi(this),this.i&&!this.J&&(u==4?AI(this.l,this):(this.i=!1,hc(this)))}else I2(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,on(12)):(this.o=0,on(13)),Wi(this),pa(this)}}}catch{}finally{}};function tI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function nI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=r2(t,n),i==Ul){e==4&&(t.o=4,on(14),r=!1),Os(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Nf){t.o=4,on(15),Os(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Os(t.j,t.m,i,null),Df(t,i);tI(t)&&i!=Ul&&i!=Nf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,on(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dm(e),e.M=!0,on(11))):(Os(t.j,t.m,n,"[Invalid Chunked Response]"),Wi(t),pa(t))}G.mb=function(){if(this.g){var t=tr(this.g),e=this.g.ja();this.C<e.length&&(th(this),nI(this,t,e),this.i&&t!=4&&hc(this))}};function r2(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ul:(n=Number(e.substring(n,r)),isNaN(n)?Nf:(r+=1,r+n>e.length?Ul:(e=e.slice(r,r+n),t.C=r+n,e)))}G.cancel=function(){this.J=!0,Wi(this)};function hc(t){t.Y=Date.now()+t.P,rI(t,t.P)}function rI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=cc(Yt(t.lb,t),e)}function th(t){t.B&&(de.clearTimeout(t.B),t.B=null)}G.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(e2(this.j,this.A),this.L!=2&&(Ba(),on(17)),Wi(this),this.o=2,pa(this)):rI(this,this.Y-t)};function pa(t){t.l.H==0||t.J||AI(t.l,t)}function Wi(t){th(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Im(t.V),KT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Df(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Mf(n.i,t))){if(!t.K&&Mf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Hl(n),oh(n);else break e;Om(n),on(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=cc(Yt(n.ib,n),6e3));if(1>=hI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else zi(n,11)}else if((t.K||n.g==t)&&Hl(n),!La(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Sm(s,s.h),s.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Je(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=SI(r,r.J?r.pa:null,r.Y),o.K){dI(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(th(a),hc(a)),r.g=o}else II(r);0<n.j.length&&ah(n)}else l[0]!="stop"&&l[0]!="close"||zi(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?zi(n,7):Nm(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ba(4)}catch{}}function i2(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function s2(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function iI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=s2(t),r=i2(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var sI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function o2(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Xi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Xi){this.h=t.h,Bl(this,t.j),this.s=t.s,this.g=t.g,jl(this,t.m),this.l=t.l;var e=t.i,n=new ja;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Yy(this,n),this.o=t.o}else t&&(e=String(t).match(sI))?(this.h=!1,Bl(this,e[1]||"",!0),this.s=ea(e[2]||""),this.g=ea(e[3]||"",!0),jl(this,e[4]),this.l=ea(e[5]||"",!0),Yy(this,e[6]||"",!0),this.o=ea(e[7]||"")):(this.h=!1,this.i=new ja(null,this.h))}Xi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ta(e,Jy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ta(e,Jy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ta(n,n.charAt(0)=="/"?l2:c2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ta(n,h2)),t.join("")};function $r(t){return new Xi(t)}function Bl(t,e,n){t.j=n?ea(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Yy(t,e,n){e instanceof ja?(t.i=e,d2(t.i,t.h)):(n||(e=ta(e,u2)),t.i=new ja(e,t.h))}function Je(t,e,n){t.i.set(e,n)}function nh(t){return Je(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ea(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ta(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,a2),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function a2(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jy=/[#\/\?@]/g,c2=/[#\?:]/g,l2=/[#\?]/g,u2=/[#\?@]/g,h2=/#/g;function ja(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ni(t){t.g||(t.g=new Map,t.h=0,t.i&&o2(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=ja.prototype;G.add=function(t,e){Ni(this),this.i=null,t=bo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function oI(t,e){Ni(t),e=bo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function aI(t,e){return Ni(t),e=bo(t,e),t.g.has(e)}G.forEach=function(t,e){Ni(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};G.ta=function(){Ni(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};G.Z=function(t){Ni(this);let e=[];if(typeof t=="string")aI(this,t)&&(e=e.concat(this.g.get(bo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return Ni(this),this.i=null,t=bo(this,t),aI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function cI(t,e,n){oI(t,e),0<n.length&&(t.i=null,t.g.set(bo(t,e),pm(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function bo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function d2(t,e){e&&!t.j&&(Ni(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(oI(this,r),cI(this,i,n))},t)),t.j=e}var f2=class{constructor(t,e){this.g=t,this.map=e}};function lI(t){this.l=t||p2,de.PerformanceNavigationTiming?(t=de.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(de.g&&de.g.Ka&&de.g.Ka()&&de.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var p2=10;function uI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hI(t){return t.h?1:t.g?t.g.size:0}function Mf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sm(t,e){t.g?t.g.add(e):t.h=e}function dI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}lI.prototype.cancel=function(){if(this.i=fI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return pm(t.i)}var m2=class{stringify(t){return de.JSON.stringify(t,void 0)}parse(t){return de.JSON.parse(t,void 0)}};function g2(){this.g=new m2}function _2(t,e,n){const r=n||"";try{iI(t,function(i,s){let o=i;oc(i)&&(o=Em(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function y2(t,e){const n=new Ju;if(de.Image){const r=new Image;r.onload=Gc(Yc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Gc(Yc,n,r,"TestLoadImage: error",!1,e),r.onabort=Gc(Yc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Gc(Yc,n,r,"TestLoadImage: timeout",!1,e),de.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Yc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function rh(t){this.l=t.fc||null,this.j=t.ob||!1}Pt(rh,Am);rh.prototype.g=function(){return new ih(this.l,this.j)};rh.prototype.i=function(t){return function(){return t}}({});function ih(t,e){St.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Pm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pt(ih,St);var Pm=0;G=ih.prototype;G.open=function(t,e){if(this.readyState!=Pm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ha(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||de).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,dc(this)),this.readyState=Pm};G.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ha(this)),this.g&&(this.readyState=3,Ha(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof de.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function pI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}G.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?dc(this):Ha(this),this.readyState==3&&pI(this)}};G.Za=function(t){this.g&&(this.response=this.responseText=t,dc(this))};G.Ya=function(t){this.g&&(this.response=t,dc(this))};G.ka=function(){this.g&&dc(this)};function dc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ha(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ha(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ih.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var v2=de.JSON.parse;function it(t){St.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=mI,this.L=this.M=!1}Pt(it,St);var mI="",w2=/^https?$/i,E2=["POST","PUT"];G=it.prototype;G.Oa=function(t){this.M=t};G.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():kf.g(),this.C=this.u?Qy(this.u):Qy(kf),this.g.onreadystatechange=Yt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Xy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=de.FormData&&t instanceof de.FormData,!(0<=OT(E2,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{yI(this),0<this.B&&((this.L=T2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Yt(this.ua,this)):this.A=bm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Xy(this,s)}};function T2(t){return ro&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.ua=function(){typeof fm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Lt(this,"timeout"),this.abort(8))};function Xy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gI(t),sh(t)}function gI(t){t.F||(t.F=!0,Lt(t,"complete"),Lt(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Lt(this,"complete"),Lt(this,"abort"),sh(this))};G.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sh(this,!0)),it.$.N.call(this)};G.La=function(){this.s||(this.G||this.v||this.l?_I(this):this.kb())};G.kb=function(){_I(this)};function _I(t){if(t.h&&typeof fm<"u"&&(!t.C[1]||tr(t)!=4||t.da()!=2)){if(t.v&&tr(t)==4)bm(t.La,0,t);else if(Lt(t,"readystatechange"),tr(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(sI)[1]||null;!i&&de.self&&de.self.location&&(i=de.self.location.protocol.slice(0,-1)),r=!w2.test(i?i.toLowerCase():"")}n=r}if(n)Lt(t,"complete"),Lt(t,"success");else{t.m=6;try{var s=2<tr(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",gI(t)}}finally{sh(t)}}}}function sh(t,e){if(t.g){yI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Lt(t,"ready");try{n.onreadystatechange=r}catch{}}}function yI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(de.clearTimeout(t.A),t.A=null)}G.isActive=function(){return!!this.g};function tr(t){return t.g?t.g.readyState:0}G.da=function(){try{return 2<tr(this)?this.g.status:-1}catch{return-1}};G.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),v2(e)}};function Zy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case mI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function I2(t){const e={};t=(t.g&&2<=tr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(La(t[r]))continue;var n=GL(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}BL(e,function(r){return r.join(", ")})}G.Ia=function(){return this.m};G.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vI(t){let e="";return gm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function km(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Je(t,e,n))}function Ho(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wI(t){this.Ga=0,this.j=[],this.l=new Ju,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ho("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ho("baseRetryDelayMs",5e3,t),this.hb=Ho("retryDelaySeedMs",1e4,t),this.eb=Ho("forwardChannelMaxRetries",2,t),this.xa=Ho("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new lI(t&&t.concurrentRequestLimit),this.Ja=new g2,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}G=wI.prototype;G.ra=8;G.H=1;function Nm(t){if(EI(t),t.H==3){var e=t.W++,n=$r(t.I);if(Je(n,"SID",t.K),Je(n,"RID",e),Je(n,"TYPE","terminate"),fc(t,n),e=new uc(t,t.l,e),e.L=2,e.v=nh($r(n)),n=!1,de.navigator&&de.navigator.sendBeacon)try{n=de.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&de.Image&&(new Image().src=e.v,n=!0),n||(e.g=PI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),hc(e)}RI(t)}function oh(t){t.g&&(Dm(t),t.g.cancel(),t.g=null)}function EI(t){oh(t),t.u&&(de.clearTimeout(t.u),t.u=null),Hl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&de.clearTimeout(t.m),t.m=null)}function ah(t){if(!uI(t.i)&&!t.m){t.m=!0;var e=t.Na;Fa||WT(),$a||(Fa(),$a=!0),Tm.add(e,t),t.C=0}}function b2(t,e){return hI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=cc(Yt(t.Na,t,e),CI(t,t.C)),t.C++,!0)}G.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new uc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=LT(s),VT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=TI(this,i,e),n=$r(this.I),Je(n,"RID",t),Je(n,"CVER",22),this.F&&Je(n,"X-HTTP-Session-Id",this.F),fc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(vI(s)))+"&"+e:this.o&&km(n,this.o,s)),Sm(this.i,i),this.bb&&Je(n,"TYPE","init"),this.P?(Je(n,"$req",e),Je(n,"SID","null"),i.aa=!0,Of(i,n,null)):Of(i,n,e),this.H=2}}else this.H==3&&(t?ev(this,t):this.j.length==0||uI(this.i)||ev(this))};function ev(t,e){var n;e?n=e.m:n=t.W++;const r=$r(t.I);Je(r,"SID",t.K),Je(r,"RID",n),Je(r,"AID",t.V),fc(t,r),t.o&&t.s&&km(r,t.o,t.s),n=new uc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=TI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Sm(t.i,n),Of(n,r,e)}function fc(t,e){t.na&&gm(t.na,function(n,r){Je(e,r,n)}),t.h&&iI({},function(n,r){Je(e,r,n)})}function TI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Yt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{_2(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function II(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Fa||WT(),$a||(Fa(),$a=!0),Tm.add(e,t),t.A=0}}function Om(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=cc(Yt(t.Ma,t),CI(t,t.A)),t.A++,!0)}G.Ma=function(){if(this.u=null,bI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=cc(Yt(this.jb,this),t)}};G.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,on(10),oh(this),bI(this))};function Dm(t){t.B!=null&&(de.clearTimeout(t.B),t.B=null)}function bI(t){t.g=new uc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=$r(t.wa);Je(e,"RID","rpc"),Je(e,"SID",t.K),Je(e,"AID",t.V),Je(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Je(e,"TO",t.qa),Je(e,"TYPE","xmlhttp"),fc(t,e),t.o&&t.s&&km(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=nh($r(e)),n.s=null,n.S=!0,eI(n,t)}G.ib=function(){this.v!=null&&(this.v=null,oh(this),Om(this),on(19))};function Hl(t){t.v!=null&&(de.clearTimeout(t.v),t.v=null)}function AI(t,e){var n=null;if(t.g==e){Hl(t),Dm(t),t.g=null;var r=2}else if(Mf(t.i,e))n=e.F,dI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Xu(),Lt(r,new YT(r,n)),ah(t)}else II(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&b2(t,e)||r==2&&Om(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zi(t,5);break;case 4:zi(t,10);break;case 3:zi(t,6);break;default:zi(t,2)}}}function CI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function zi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Yt(t.pb,t);n||(n=new Xi("//www.google.com/images/cleardot.gif"),de.location&&de.location.protocol=="http"||Bl(n,"https"),nh(n)),y2(n.toString(),r)}else on(2);t.H=0,t.h&&t.h.za(e),RI(t),EI(t)}G.pb=function(t){t?(this.l.info("Successfully pinged google.com"),on(2)):(this.l.info("Failed to ping google.com"),on(1))};function RI(t){if(t.H=0,t.ma=[],t.h){const e=fI(t.i);(e.length!=0||t.j.length!=0)&&(Wy(t.ma,e),Wy(t.ma,t.j),t.i.i.length=0,pm(t.j),t.j.length=0),t.h.ya()}}function SI(t,e,n){var r=n instanceof Xi?$r(n):new Xi(n);if(r.g!="")e&&(r.g=e+"."+r.g),jl(r,r.m);else{var i=de.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Xi(null);r&&Bl(s,r),e&&(s.g=e),i&&jl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Je(r,n,e),Je(r,"VER",t.ra),fc(t,r),r}function PI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new it(new rh({ob:!0})):new it(t.va),e.Oa(t.J),e}G.isActive=function(){return!!this.h&&this.h.isActive(this)};function kI(){}G=kI.prototype;G.Ba=function(){};G.Aa=function(){};G.za=function(){};G.ya=function(){};G.isActive=function(){return!0};G.Va=function(){};function Wl(){if(ro&&!(10<=Number(VL)))throw Error("Environmental error: no available transport.")}Wl.prototype.g=function(t,e){return new In(t,e)};function In(t,e){St.call(this),this.g=new wI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!La(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!La(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ao(this)}Pt(In,St);In.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;on(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=SI(t,null,t.Y),ah(t)};In.prototype.close=function(){Nm(this.g)};In.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Em(t),t=n);e.j.push(new f2(e.fb++,t)),e.H==3&&ah(e)};In.prototype.N=function(){this.g.h=null,delete this.j,Nm(this.g),delete this.g,In.$.N.call(this)};function NI(t){Cm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pt(NI,Cm);function OI(){Rm.call(this),this.status=1}Pt(OI,Rm);function Ao(t){this.g=t}Pt(Ao,kI);Ao.prototype.Ba=function(){Lt(this.g,"a")};Ao.prototype.Aa=function(t){Lt(this.g,new NI(t))};Ao.prototype.za=function(t){Lt(this.g,new OI)};Ao.prototype.ya=function(){Lt(this.g,"b")};function A2(){this.blockSize=-1}function Gn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Pt(Gn,A2);Gn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Id(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Gn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Id(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Id(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Id(this,r),i=0;break}}this.h=i,this.i+=e};Gn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function je(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var C2={};function Mm(t){return-128<=t&&128>t?ML(t,function(e){return new je([e|0],0>e?-1:0)}):new je([t|0],0>t?-1:0)}function nr(t){if(isNaN(t)||!isFinite(t))return $s;if(0>t)return Ot(nr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=xf;return new je(e,0)}function DI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ot(DI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=nr(Math.pow(e,8)),r=$s,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=nr(Math.pow(e,s)),r=r.R(s).add(nr(o))):(r=r.R(n),r=r.add(nr(o)))}return r}var xf=4294967296,$s=Mm(0),Lf=Mm(1),tv=Mm(16777216);G=je.prototype;G.ea=function(){if(Sn(this))return-Ot(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:xf+r)*e,e*=xf}return t};G.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kr(this))return"0";if(Sn(this))return"-"+Ot(this).toString(t);for(var e=nr(Math.pow(t,6)),n=this,r="";;){var i=ql(n,e).g;n=zl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,kr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};G.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function kr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Sn(t){return t.h==-1}G.X=function(t){return t=zl(this,t),Sn(t)?-1:kr(t)?0:1};function Ot(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new je(n,~t.h).add(Lf)}G.abs=function(){return Sn(this)?Ot(this):this};G.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new je(n,n[n.length-1]&-2147483648?-1:0)};function zl(t,e){return t.add(Ot(e))}G.R=function(t){if(kr(this)||kr(t))return $s;if(Sn(this))return Sn(t)?Ot(this).R(Ot(t)):Ot(Ot(this).R(t));if(Sn(t))return Ot(this.R(Ot(t)));if(0>this.X(tv)&&0>t.X(tv))return nr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,Jc(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Jc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Jc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Jc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new je(n,0)};function Jc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Wo(t,e){this.g=t,this.h=e}function ql(t,e){if(kr(e))throw Error("division by zero");if(kr(t))return new Wo($s,$s);if(Sn(t))return e=ql(Ot(t),e),new Wo(Ot(e.g),Ot(e.h));if(Sn(e))return e=ql(t,Ot(e)),new Wo(Ot(e.g),e.h);if(30<t.g.length){if(Sn(t)||Sn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Lf,r=e;0>=r.X(t);)n=nv(n),r=nv(r);var i=Cs(n,1),s=Cs(r,1);for(r=Cs(r,2),n=Cs(n,2);!kr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Cs(r,1),n=Cs(n,1)}return e=zl(t,i.R(e)),new Wo(i,e)}for(i=$s;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=nr(n),o=s.R(e);Sn(o)||0<o.X(t);)n-=r,s=nr(n),o=s.R(e);kr(s)&&(s=Lf),i=i.add(s),t=zl(t,o)}return new Wo(i,t)}G.gb=function(t){return ql(this,t).h};G.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new je(n,this.h&t.h)};G.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new je(n,this.h|t.h)};G.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new je(n,this.h^t.h)};function nv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new je(n,t.h)}function Cs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new je(i,t.h)}Wl.prototype.createWebChannel=Wl.prototype.g;In.prototype.send=In.prototype.u;In.prototype.open=In.prototype.m;In.prototype.close=In.prototype.close;Zu.NO_ERROR=0;Zu.TIMEOUT=8;Zu.HTTP_ERROR=6;JT.COMPLETE="complete";XT.EventType=lc;lc.OPEN="a";lc.CLOSE="b";lc.ERROR="c";lc.MESSAGE="d";St.prototype.listen=St.prototype.O;it.prototype.listenOnce=it.prototype.P;it.prototype.getLastError=it.prototype.Sa;it.prototype.getLastErrorCode=it.prototype.Ia;it.prototype.getStatus=it.prototype.da;it.prototype.getResponseJson=it.prototype.Wa;it.prototype.getResponseText=it.prototype.ja;it.prototype.send=it.prototype.ha;it.prototype.setWithCredentials=it.prototype.Oa;Gn.prototype.digest=Gn.prototype.l;Gn.prototype.reset=Gn.prototype.reset;Gn.prototype.update=Gn.prototype.j;je.prototype.add=je.prototype.add;je.prototype.multiply=je.prototype.R;je.prototype.modulo=je.prototype.gb;je.prototype.compare=je.prototype.X;je.prototype.toNumber=je.prototype.ea;je.prototype.toString=je.prototype.toString;je.prototype.getBits=je.prototype.D;je.fromNumber=nr;je.fromString=DI;var R2=function(){return new Wl},S2=function(){return Xu()},bd=Zu,P2=JT,k2=gs,rv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Xc=XT,N2=it,O2=Gn,Us=je;const iv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Io("@firebase/firestore");function sv(){return ss.logLevel}function ee(t,...e){if(ss.logLevel<=Ne.DEBUG){const n=e.map(xm);ss.debug(`Firestore (${Co}): ${t}`,...n)}}function Ur(t,...e){if(ss.logLevel<=Ne.ERROR){const n=e.map(xm);ss.error(`Firestore (${Co}): ${t}`,...n)}}function io(t,...e){if(ss.logLevel<=Ne.WARN){const n=e.map(xm);ss.warn(`Firestore (${Co}): ${t}`,...n)}}function xm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+t;throw Ur(e),new Error(e)}function Xe(t,e){t||he()}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ut.UNAUTHENTICATED))}shutdown(){}}class M2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class x2{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Mr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Xe(typeof r.accessToken=="string"),new MI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string"),new Ut(e)}}class L2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class V2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new L2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Xe(typeof n.token=="string"),this.R=n.token,new F2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=U2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ve(t,e){return t<e?-1:t>e?1:0}function so(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new se(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new lt(0,0))}static max(){return new pe(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class rt extends Wa{construct(e,n,r){return new rt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new rt(n)}static emptyPath(){return new rt([])}}const B2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends Wa{construct(e,n,r){return new Kt(e,n,r)}static isValidIdentifier(e){return B2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Kt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new se(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new se(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new se(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kt(n)}static emptyPath(){return new Kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(rt.fromString(e))}static fromName(e){return new ae(rt.fromString(e).popFirst(5))}static empty(){return new ae(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return rt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new rt(e.slice()))}}function j2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Ei(i,ae.empty(),e)}function H2(t){return new Ei(t.readTime,t.key,-1)}class Ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ei(pe.min(),ae.empty(),-1)}static max(){return new Ei(pe.max(),ae.empty(),-1)}}function W2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==z2)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function mc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Lm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Lm.ae=-1;function ch(t){return t==null}function Kl(t){return t===0&&1/t==-1/0}function K2(t){return typeof t=="number"&&Number.isInteger(t)&&!Kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ro(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ut=class Vf{constructor(e,n){this.comparator=e,this.root=n||_i.EMPTY}insert(e,n){return new Vf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_i.BLACK,null,null))}remove(e){return new Vf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_i.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zc(this.root,e,this.comparator,!0)}},Zc=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},_i=class Cr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Cr.RED,this.left=i??Cr.EMPTY,this.right=s??Cr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Cr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Cr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Cr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Cr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Cr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}};_i.EMPTY=null,_i.RED=!0,_i.BLACK=!1;_i.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,i,s){return this}insert(e,n,r){return new _i(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new av(this.data.getIterator())}getIteratorFrom(e){return new av(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xt(this.comparator);return n.data=e,n}}class av{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.fields=e,e.sort(Kt.comparator)}static empty(){return new Un([])}unionWith(e){let n=new Xt(Kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return so(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class VI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new VI("Invalid base64 string: "+s):s}}(e);return new en(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new en(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const G2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(t){if(Xe(!!t),typeof t=="string"){let e=0;const n=G2.exec(t);if(Xe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?en.fromBase64String(t):en.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fm(t){const e=t.mapValue.fields.__previous_value__;return Vm(e)?Fm(e):e}function za(t){const e=Ti(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e,n,r,i,s,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class qa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function as(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vm(t)?4:Y2(t)?9007199254740991:10:he()}function ur(t,e){if(t===e)return!0;const n=as(t);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return za(t).isEqual(za(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ti(i.timestampValue),a=Ti(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return os(i.bytesValue).isEqual(os(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ct(i.geoPointValue.latitude)===ct(s.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ct(i.integerValue)===ct(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ct(i.doubleValue),a=ct(s.doubleValue);return o===a?Kl(o)===Kl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return so(t.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ov(o)!==ov(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ur(o[c],a[c])))return!1;return!0}(t,e);default:return he()}}function Ka(t,e){return(t.values||[]).find(n=>ur(n,e))!==void 0}function oo(t,e){if(t===e)return 0;const n=as(t),r=as(e);if(n!==r)return Ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ve(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ct(s.integerValue||s.doubleValue),c=ct(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return cv(t.timestampValue,e.timestampValue);case 4:return cv(za(t),za(e));case 5:return Ve(t.stringValue,e.stringValue);case 6:return function(s,o){const a=os(s),c=os(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=Ve(a[l],c[l]);if(u!==0)return u}return Ve(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ve(ct(s.latitude),ct(o.latitude));return a!==0?a:Ve(ct(s.longitude),ct(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=oo(a[l],c[l]);if(u)return u}return Ve(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===el.mapValue&&o===el.mapValue)return 0;if(s===el.mapValue)return 1;if(o===el.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const p=Ve(c[h],u[h]);if(p!==0)return p;const m=oo(a[c[h]],l[u[h]]);if(m!==0)return m}return Ve(c.length,u.length)}(t.mapValue,e.mapValue);default:throw he()}}function cv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ve(t,e);const n=Ti(t),r=Ti(e),i=Ve(n.seconds,r.seconds);return i!==0?i:Ve(n.nanos,r.nanos)}function ao(t){return Ff(t)}function Ff(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ti(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return os(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ff(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ff(n.fields[o])}`;return i+"}"}(t.mapValue):he()}function $f(t){return!!t&&"integerValue"in t}function $m(t){return!!t&&"arrayValue"in t}function lv(t){return!!t&&"nullValue"in t}function uv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dl(t){return!!t&&"mapValue"in t}function ma(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ro(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ma(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ma(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Y2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.value=e}static empty(){return new Pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ma(n)}setAll(e){let n=Kt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ma(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];dl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ro(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pn(ma(this.value))}}function FI(t){const e=[];return Ro(t.fields,(n,r)=>{const i=new Kt([n]);if(dl(r)){const s=FI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Bt(e,0,pe.min(),pe.min(),pe.min(),Pn.empty(),0)}static newFoundDocument(e,n,r,i){return new Bt(e,1,n,pe.min(),r,i,0)}static newNoDocument(e,n){return new Bt(e,2,n,pe.min(),pe.min(),Pn.empty(),0)}static newUnknownDocument(e,n){return new Bt(e,3,n,pe.min(),pe.min(),Pn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gl{constructor(e,n){this.position=e,this.inclusive=n}}function hv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=oo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ur(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ga{constructor(e,n="asc"){this.field=e,this.dir=n}}function J2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $I{}class pt extends $I{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Z2(e,n,r):n==="array-contains"?new nV(e,r):n==="in"?new rV(e,r):n==="not-in"?new iV(e,r):n==="array-contains-any"?new sV(e,r):new pt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eV(e,r):new tV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(oo(n,this.value)):n!==null&&as(this.value)===as(n)&&this.matchesComparison(oo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class hr extends $I{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new hr(e,n)}matches(e){return UI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function UI(t){return t.op==="and"}function BI(t){return X2(t)&&UI(t)}function X2(t){for(const e of t.filters)if(e instanceof hr)return!1;return!0}function Uf(t){if(t instanceof pt)return t.field.canonicalString()+t.op.toString()+ao(t.value);if(BI(t))return t.filters.map(e=>Uf(e)).join(",");{const e=t.filters.map(n=>Uf(n)).join(",");return`${t.op}(${e})`}}function jI(t,e){return t instanceof pt?function(r,i){return i instanceof pt&&r.op===i.op&&r.field.isEqual(i.field)&&ur(r.value,i.value)}(t,e):t instanceof hr?function(r,i){return i instanceof hr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&jI(o,i.filters[a]),!0):!1}(t,e):void he()}function HI(t){return t instanceof pt?function(n){return`${n.field.canonicalString()} ${n.op} ${ao(n.value)}`}(t):t instanceof hr?function(n){return n.op.toString()+" {"+n.getFilters().map(HI).join(" ,")+"}"}(t):"Filter"}class Z2 extends pt{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class eV extends pt{constructor(e,n){super(e,"in",n),this.keys=WI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tV extends pt{constructor(e,n){super(e,"not-in",n),this.keys=WI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class nV extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $m(n)&&Ka(n.arrayValue,this.value)}}class rV extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ka(this.value.arrayValue,n)}}class iV extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ka(this.value.arrayValue,n)}}class sV extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$m(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ka(this.value.arrayValue,r))}}/**
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
 */class oV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function fv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new oV(t,e,n,r,i,s,o)}function Um(t){const e=ge(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Uf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ch(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ao(r)).join(",")),e.he=n}return e.he}function Bm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!J2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dv(t.startAt,e.startAt)&&dv(t.endAt,e.endAt)}function Bf(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function aV(t,e,n,r,i,s,o,a){return new lh(t,e,n,r,i,s,o,a)}function uh(t){return new lh(t)}function pv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cV(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function lV(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function uV(t){return t.collectionGroup!==null}function _a(t){const e=ge(t);if(e.Pe===null){e.Pe=[];const n=lV(e),r=cV(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new ga(n)),e.Pe.push(new ga(Kt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ga(Kt.keyField(),s))}}}return e.Pe}function Br(t){const e=ge(t);return e.Ie||(e.Ie=hV(e,_a(t))),e.Ie}function hV(t,e){if(t.limitType==="F")return fv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ga(i.field,s)});const n=t.endAt?new Gl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gl(t.startAt.position,t.startAt.inclusive):null;return fv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jf(t,e,n){return new lh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hh(t,e){return Bm(Br(t),Br(e))&&t.limitType===e.limitType}function zI(t){return`${Um(Br(t))}|lt:${t.limitType}`}function Hf(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>HI(i)).join(", ")}]`),ch(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ao(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ao(i)).join(",")),`Target(${r})`}(Br(t))}; limitType=${t.limitType})`}function dh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ae.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of _a(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=hv(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,_a(r),i)||r.endAt&&!function(o,a,c){const l=hv(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,_a(r),i))}(t,e)}function dV(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qI(t){return(e,n)=>{let r=!1;for(const i of _a(t)){const s=fV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fV(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?oo(c,l):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ro(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return LI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV=new ut(ae.comparator);function jr(){return pV}const KI=new ut(ae.comparator);function na(...t){let e=KI;for(const n of t)e=e.insert(n.key,n);return e}function GI(t){let e=KI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qi(){return ya()}function QI(){return ya()}function ya(){return new So(t=>t.toString(),(t,e)=>t.isEqual(e))}const mV=new ut(ae.comparator),gV=new Xt(ae.comparator);function ve(...t){let e=gV;for(const n of t)e=e.add(n);return e}const _V=new Xt(Ve);function yV(){return _V}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(e)?"-0":e}}function JI(t){return{integerValue:""+t}}function vV(t,e){return K2(e)?JI(e):YI(t,e)}/**
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
 */class fh{constructor(){this._=void 0}}function wV(t,e,n){return t instanceof Ql?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Vm(s)&&(s=Fm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ga?ZI(t,e):t instanceof Qa?eb(t,e):function(i,s){const o=XI(i,s),a=mv(o)+mv(i.Ee);return $f(o)&&$f(i.Ee)?JI(a):YI(i.serializer,a)}(t,e)}function EV(t,e,n){return t instanceof Ga?ZI(t,e):t instanceof Qa?eb(t,e):n}function XI(t,e){return t instanceof Yl?function(r){return $f(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ql extends fh{}class Ga extends fh{constructor(e){super(),this.elements=e}}function ZI(t,e){const n=tb(e);for(const r of t.elements)n.some(i=>ur(i,r))||n.push(r);return{arrayValue:{values:n}}}class Qa extends fh{constructor(e){super(),this.elements=e}}function eb(t,e){let n=tb(e);for(const r of t.elements)n=n.filter(i=>!ur(i,r));return{arrayValue:{values:n}}}class Yl extends fh{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function mv(t){return ct(t.integerValue||t.doubleValue)}function tb(t){return $m(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function TV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ga&&i instanceof Ga||r instanceof Qa&&i instanceof Qa?so(r.elements,i.elements,ur):r instanceof Yl&&i instanceof Yl?ur(r.Ee,i.Ee):r instanceof Ql&&i instanceof Ql}(t.transform,e.transform)}class IV{constructor(e,n){this.version=e,this.transformResults=n}}class xr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xr}static exists(e){return new xr(void 0,e)}static updateTime(e){return new xr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ph{}function nb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ib(t.key,xr.none()):new gc(t.key,t.data,xr.none());{const n=t.data,r=Pn.empty();let i=new Xt(Kt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _s(t.key,r,new Un(i.toArray()),xr.none())}}function bV(t,e,n){t instanceof gc?function(i,s,o){const a=i.value.clone(),c=_v(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof _s?function(i,s,o){if(!fl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=_v(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(rb(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function va(t,e,n,r){return t instanceof gc?function(s,o,a,c){if(!fl(s.precondition,o))return a;const l=s.value.clone(),u=yv(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof _s?function(s,o,a,c){if(!fl(s.precondition,o))return a;const l=yv(s.fieldTransforms,c,o),u=o.data;return u.setAll(rb(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return fl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function AV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=XI(r.transform,i||null);s!=null&&(n===null&&(n=Pn.empty()),n.set(r.field,s))}return n||null}function gv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&so(r,i,(s,o)=>TV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class gc extends ph{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _s extends ph{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function rb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _v(t,e,n){const r=new Map;Xe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,EV(o,a,n[i]))}return r}function yv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,wV(s,o,e))}return r}class ib extends ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CV extends ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&bV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=va(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=va(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=QI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=nb(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&so(this.mutations,e.mutations,(n,r)=>gv(n,r))&&so(this.baseMutations,e.baseMutations,(n,r)=>gv(n,r))}}class jm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Xe(e.mutations.length===r.length);let i=function(){return mV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new jm(e,n,r,i)}}/**
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
 */class SV{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class PV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,Ie;function kV(t){switch(t){default:return he();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function sb(t){if(t===void 0)return Ur("GRPC error has no .code"),F.UNKNOWN;switch(t){case at.OK:return F.OK;case at.CANCELLED:return F.CANCELLED;case at.UNKNOWN:return F.UNKNOWN;case at.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case at.INTERNAL:return F.INTERNAL;case at.UNAVAILABLE:return F.UNAVAILABLE;case at.UNAUTHENTICATED:return F.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case at.NOT_FOUND:return F.NOT_FOUND;case at.ALREADY_EXISTS:return F.ALREADY_EXISTS;case at.PERMISSION_DENIED:return F.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case at.ABORTED:return F.ABORTED;case at.OUT_OF_RANGE:return F.OUT_OF_RANGE;case at.UNIMPLEMENTED:return F.UNIMPLEMENTED;case at.DATA_LOSS:return F.DATA_LOSS;default:return he()}}(Ie=at||(at={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function NV(){return new TextEncoder}/**
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
 */const OV=new Us([4294967295,4294967295],0);function vv(t){const e=NV().encode(t),n=new O2;return n.update(e),new Uint8Array(n.digest())}function wv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Us([n,r],0),new Us([i,s],0)]}class Hm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ra(`Invalid padding: ${n}`);if(r<0)throw new ra(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ra(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ra(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Us.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(Us.fromNumber(r)));return i.compare(OV)===1&&(i=new Us([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=vv(e),[r,i]=wv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Hm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=vv(e),[r,i]=wv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,_c.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mh(pe.min(),i,new ut(Ve),jr(),ve())}}class _c{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _c(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class ob{constructor(e,n){this.targetId=e,this.ye=n}}class ab{constructor(e,n,r=en.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ev{constructor(){this.we=0,this.Se=Iv(),this.be=en.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=ve(),n=ve(),r=ve();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:he()}}),new _c(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=Iv()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class DV{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=jr(),this.Ue=Tv(),this.We=new ut(Ve)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Bf(s))if(r===0){const o=new ae(s.path);this.je(n,o,Bt.newNoDocument(o,pe.min()))}else Xe(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=os(r).toUint8Array()}catch(c){if(c instanceof VI)return io("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Hm(o,i,s)}catch(c){return io(c instanceof ra?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Bf(a.target)){const c=new ae(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,Bt.newNoDocument(c,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=ve();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new mh(e,n,this.We,this.$e,r);return this.$e=jr(),this.Ue=Tv(),this.We=new ut(Ve),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Ev,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Xt(Ve),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Ev),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Tv(){return new ut(ae.comparator)}function Iv(){return new ut(ae.comparator)}const MV=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xV=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LV=(()=>({and:"AND",or:"OR"}))();class VV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wf(t,e){return t.useProto3Json||ch(e)?e:{value:e}}function Jl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function FV(t,e){return Jl(t,e.toTimestamp())}function sr(t){return Xe(!!t),pe.fromTimestamp(function(n){const r=Ti(n);return new lt(r.seconds,r.nanos)}(t))}function Wm(t,e){return function(r){return new rt(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function lb(t){const e=rt.fromString(t);return Xe(fb(e)),e}function zf(t,e){return Wm(t.databaseId,e.path)}function Ad(t,e){const n=lb(e);if(n.get(1)!==t.databaseId.projectId)throw new se(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(ub(n))}function qf(t,e){return Wm(t.databaseId,e)}function $V(t){const e=lb(t);return e.length===4?rt.emptyPath():ub(e)}function Kf(t){return new rt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ub(t){return Xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bv(t,e,n){return{name:zf(t,e),fields:n.value.mapValue.fields}}function UV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Xe(u===void 0||typeof u=="string"),en.fromBase64String(u||"")):(Xe(u===void 0||u instanceof Uint8Array),en.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?F.UNKNOWN:sb(l.code);return new se(u,l.message||"")}(o);n=new ab(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ad(t,r.document.name),s=sr(r.document.updateTime),o=r.document.createTime?sr(r.document.createTime):pe.min(),a=new Pn({mapValue:{fields:r.document.fields}}),c=Bt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new pl(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ad(t,r.document),s=r.readTime?sr(r.readTime):pe.min(),o=Bt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new pl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ad(t,r.document),s=r.removedTargetIds||[];n=new pl([],s,i,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new PV(i,s),a=r.targetId;n=new ob(a,o)}}return n}function BV(t,e){let n;if(e instanceof gc)n={update:bv(t,e.key,e.value)};else if(e instanceof ib)n={delete:zf(t,e.key)};else if(e instanceof _s)n={update:bv(t,e.key,e.data),updateMask:YV(e.fieldMask)};else{if(!(e instanceof CV))return he();n={verify:zf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ql)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ga)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Qa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Yl)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:FV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:he()}(t,e.precondition)),n}function jV(t,e){return t&&t.length>0?(Xe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?sr(i.updateTime):sr(s);return o.isEqual(pe.min())&&(o=sr(s)),new IV(o,i.transformResults||[])}(n,e))):[]}function HV(t,e){return{documents:[qf(t,e.path)]}}function WV(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=qf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=qf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return db(hr.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Ps(h.field),direction:KV(h.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Wf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function zV(t){let e=$V(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Xe(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const p=hb(h);return p instanceof hr&&BI(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(y){return new ga(ks(y.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,ch(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,m=h.values||[];return new Gl(m,p)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const p=!h.before,m=h.values||[];return new Gl(m,p)}(n.endAt)),aV(e,i,o,s,a,"F",c,l)}function qV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ks(n.unaryFilter.field);return pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ks(n.unaryFilter.field);return pt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ks(n.unaryFilter.field);return pt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ks(n.unaryFilter.field);return pt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return pt.create(ks(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hr.create(n.compositeFilter.filters.map(r=>hb(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function KV(t){return MV[t]}function GV(t){return xV[t]}function QV(t){return LV[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function ks(t){return Kt.fromServerFormat(t.fieldPath)}function db(t){return t instanceof pt?function(n){if(n.op==="=="){if(uv(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(lv(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(uv(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(lv(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:GV(n.op),value:n.value}}}(t):t instanceof hr?function(n){const r=n.getFilters().map(i=>db(i));return r.length===1?r[0]:{compositeFilter:{op:QV(n.op),filters:r}}}(t):he()}function YV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r,i,s=pe.min(),o=pe.min(),a=en.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(e){this.ht=e}}function XV(t){const e=zV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jf(e,e.limit,"L"):e}/**
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
 */class ZV{constructor(){this._n=new eF}addToCollectionParentIndex(e,n){return this._n.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ei.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class eF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Xt(rt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Xt(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new co(0)}static Bn(){return new co(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(){this.changes=new So(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&va(r.mutation,i,Un.empty(),lt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const i=qi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=na();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=jr();const o=ya(),a=function(){return ya()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof _s)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),va(u.mutation,l,u.mutation.getFieldMask(),lt.now())):o.set(l.key,Un.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new nF(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ya();let i=new ut((o,a)=>o-a),s=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Un.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||ve()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=QI();u.forEach(p=>{if(!s.has(p)){const m=nb(n.get(p),r.get(p));m!==null&&h.set(p,m),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return ae.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uV(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(qi());let a=-1,c=s;return o.next(l=>B.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?B.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,ve())).next(u=>({batchId:a,changes:GI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let i=na();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=na();return this.indexManager.getCollectionParents(e,i).next(o=>B.forEach(o,a=>{const c=function(u,h){return new lh(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Bt.newInvalidDocument(l)))});let o=na();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&va(l.mutation,c,Un.empty(),lt.now()),dh(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return B.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:sr(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:XV(i.bundledQuery),readTime:sr(i.readTime)}}(n)),B.resolve()}}/**
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
 */class sF{constructor(){this.overlays=new ut(ae.comparator),this.hr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qi();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=qi(),s=n.length+1,o=new ae(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ut((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=qi(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=qi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return B.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SV(n,r));let s=this.hr.get(n);s===void 0&&(s=ve(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.Pr=new Xt(Et.Ir),this.Tr=new Xt(Et.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Et(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Et(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ae(new rt([])),r=new Et(n,e),i=new Et(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ae(new rt([])),r=new Et(n,e),i=new Et(n,e+1);let s=ve();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Et(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Et{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ae.comparator(e.key,n.key)||Ve(e.pr,n.pr)}static Er(e,n){return Ve(e.pr,n.pr)||ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Xt(Et.Ir)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RV(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Et(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Et(n,0),i=new Et(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xt(Ve);return n.forEach(i=>{const s=new Et(i,0),o=new Et(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),B.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ae.isDocumentKey(s)||(s=s.child(""));const o=new Et(new ae(s),0);let a=new Xt(Ve);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.pr)),!0)},o),B.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Xe(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return B.forEach(n.mutations,i=>{const s=new Et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Et(n,0),i=this.wr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{constructor(e){this.Cr=e,this.docs=function(){return new ut(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Bt.newInvalidDocument(n))}getEntries(e,n){let r=jr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Bt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=jr();const o=n.path,a=new ae(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||W2(H2(u),r)<=0||(i.has(u.key)||dh(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){he()}Fr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cF(this)}getSize(e){return B.resolve(this.size)}}class cF extends tF{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(e){this.persistence=e,this.Mr=new So(n=>Um(n),Bm),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Or=0,this.Nr=new zm,this.targetCount=0,this.Br=co.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),B.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new co(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.qn(n),B.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uF{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Lm(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new lF(this),this.indexManager=new ZV,this.remoteDocumentCache=function(i){return new aF(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new JV(n),this.$r=new iF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new oF(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const i=new hF(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return B.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class hF extends q2{constructor(e){super(),this.currentSequenceNumber=e}}class qm{constructor(e){this.persistence=e,this.zr=new zm,this.jr=null}static Hr(e){return new qm(e)}get Jr(){if(this.jr)return this.jr;throw he()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),B.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Jr,r=>{const i=ae.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,pe.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return B.or([()=>B.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ve(),i=ve();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Km(e,n.fromCache,r,i)}}/**
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
 */class dF{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Wi(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.zi(e,n))}Wi(e,n){if(pv(n))return B.resolve(null);let r=Br(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=jf(n,null,"F"),r=Br(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ve(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.Hi(n,l,o,c.readTime)?this.Wi(e,jf(n,null,"F")):this.Ji(e,l,n,c)}))})))}Gi(e,n,r,i){return pv(n)||i.isEqual(pe.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.Hi(n,o,r,i)?this.zi(e,n):(sv()<=Ne.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hf(n)),this.Ji(e,o,n,j2(i,-1)))})}ji(e,n){let r=new Xt(qI(e));return n.forEach((i,s)=>{dh(e,s)&&(r=r.add(s))}),r}Hi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}zi(e,n){return sv()<=Ne.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Hf(n)),this.Ui.getDocumentsMatchingQuery(e,n,Ei.min())}Ji(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(e,n,r,i){this.persistence=e,this.Yi=n,this.serializer=i,this.Zi=new ut(Ve),this.Xi=new So(s=>Um(s),Bm),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rF(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function pF(t,e,n,r){return new fF(t,e,n,r)}async function pb(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ve();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({rs:l,removedBatchIds:o,addedBatchIds:a}))})})}function mF(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,p=h.keys();let m=B.resolve();return p.forEach(y=>{m=m.next(()=>u.getEntry(c,y)).next(v=>{const b=l.docVersions.get(y);Xe(b!==null),v.version.compareTo(b)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ve();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function mb(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function gF(t,e){const n=ge(t),r=e.snapshotVersion;let i=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});i=n.Zi;const a=[];e.targetChanges.forEach((u,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,u.addedDocuments,h)));let m=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(en.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),i=i.insert(h,m),function(v,b,A){return v.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(p,m,u)&&a.push(n.Qr.updateTargetData(s,m))});let c=jr(),l=ve();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(_F(s,o,e.documentUpdates).next(u=>{c=u.ss,l=u.os})),!r.isEqual(pe.min())){const u=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return B.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Zi=i,s))}function _F(t,e,n){let r=ve(),i=ve();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=jr();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ss:o,os:i}})}function yF(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vF(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new li(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Zi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Gf(t,e,n){const r=ge(t),i=r.Zi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!mc(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(i.target)}function Av(t,e,n){const r=ge(t);let i=pe.min(),s=ve();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=ge(c),p=h.Xi.get(u);return p!==void 0?B.resolve(h.Zi.get(p)):h.Qr.getTargetData(l,u)}(r,o,Br(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?i:pe.min(),n?s:ve())).next(a=>(wF(r,dV(e),a),{documents:a,_s:s})))}function wF(t,e,n){let r=t.es.get(e)||pe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.es.set(e,r)}class Cv{constructor(){this.activeTargetIds=yV()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EF{constructor(){this.Ys=new Cv,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new Cv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class TF{Xs(e){}shutdown(){}}/**
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
 */class Rv{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tl=null;function Cd(){return tl===null?tl=function(){return 268435456+Math.round(2147483648*Math.random())}():tl++,"0x"+tl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bF{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="WebChannelConnection";class AF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${i}/databases/${s}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get mo(){return!1}fo(n,r,i,s,o){const a=Cd(),c=this.po(n,r);ee("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(l,s,o),this.wo(n,c,l,i).then(u=>(ee("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw io("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}So(n,r,i,s,o,a){return this.fo(n,r,i,s,o)}yo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Co}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}po(n,r){const i=IF[n];return`${this.Ao}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,i){const s=Cd();return new Promise((o,a)=>{const c=new N2;c.setWithCredentials(!0),c.listenOnce(P2.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case bd.NO_ERROR:const u=c.getResponseJson();ee($t,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case bd.TIMEOUT:ee($t,`RPC '${e}' ${s} timed out`),a(new se(F.DEADLINE_EXCEEDED,"Request time out"));break;case bd.HTTP_ERROR:const h=c.getStatus();if(ee($t,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const y=function(b){const A=b.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(A)>=0?A:F.UNKNOWN}(m.status);a(new se(y,m.message))}else a(new se(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new se(F.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{ee($t,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);ee($t,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}bo(e,n,r){const i=Cd(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=R2(),a=S2(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");ee($t,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let p=!1,m=!1;const y=new bF({_o:b=>{m?ee($t,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(p||(ee($t,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),ee($t,`RPC '${e}' stream ${i} sending:`,b),h.send(b))},ao:()=>h.close()}),v=(b,A,k)=>{b.listen(A,N=>{try{k(N)}catch(P){setTimeout(()=>{throw P},0)}})};return v(h,Xc.EventType.OPEN,()=>{m||ee($t,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Xc.EventType.CLOSE,()=>{m||(m=!0,ee($t,`RPC '${e}' stream ${i} transport closed`),y.To())}),v(h,Xc.EventType.ERROR,b=>{m||(m=!0,io($t,`RPC '${e}' stream ${i} transport errored:`,b),y.To(new se(F.UNAVAILABLE,"The operation could not be completed")))}),v(h,Xc.EventType.MESSAGE,b=>{var A;if(!m){const k=b.data[0];Xe(!!k);const N=k,P=N.error||((A=N[0])===null||A===void 0?void 0:A.error);if(P){ee($t,`RPC '${e}' stream ${i} received error:`,P);const j=P.status;let W=function(He){const Ce=at[He];if(Ce!==void 0)return sb(Ce)}(j),oe=P.message;W===void 0&&(W=F.INTERNAL,oe="Unknown error status: "+j+" with message "+P.message),m=!0,y.To(new se(W,oe)),h.close()}else ee($t,`RPC '${e}' stream ${i} received:`,k),y.Eo(k)}}),v(a,k2.STAT_EVENT,b=>{b.stat===rv.PROXY?ee($t,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===rv.NOPROXY&&ee($t,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Io()},0),y}}function Rd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t){return new VV(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,n-r);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n,r,i,s,o,a,c){this.oi=e,this.ko=r,this.qo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new gb(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Ur(n.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Qo===n&&this.n_(r,i)},r=>{e(()=>{const i=new se(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(i)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(i=>{r(()=>this.r_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CF extends _b{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=UV(this.serializer,e),r=function(s){if(!("targetChange"in s))return pe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?sr(o.readTime):pe.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=Kf(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Bf(c)?{documents:HV(s,c)}:{query:WV(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=cb(s,o.resumeToken);const l=Wf(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(pe.min())>0){a.readTime=Jl(s,o.snapshotVersion.toTimestamp());const l=Wf(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=qV(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=Kf(this.serializer),n.removeTarget=e,this.Yo(n)}}class RF extends _b{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(Xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=jV(e.writeResults,e.commitTime),r=sr(e.commitTime);return this.listener.l_(r,n)}return Xe(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=Kf(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>BV(this.serializer,r))};this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.I_=!1}T_(){if(this.I_)throw new se(F.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se(F.UNKNOWN,i.toString())})}So(e,n,r,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new se(F.UNKNOWN,s.toString())})}terminate(){this.I_=!0}}class PF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(Ur(n),this.R_=!1):ee("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=s,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{ys(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ge(c);l.S_.add(4),await yc(l),l.v_.set("Unknown"),l.S_.delete(4),await _h(l)}(this))})}),this.v_=new PF(r,i)}}async function _h(t){if(ys(t))for(const e of t.b_)await e(!0)}async function yc(t){for(const e of t.b_)await e(!1)}function yb(t,e){const n=ge(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),Ym(n)?Qm(n):Po(n).Go()&&Gm(n,e))}function vb(t,e){const n=ge(t),r=Po(n);n.w_.delete(e),r.Go()&&wb(n,e),n.w_.size===0&&(r.Go()?r.Ho():ys(n)&&n.v_.set("Unknown"))}function Gm(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Po(t).o_(e)}function wb(t,e){t.C_.Le(e),Po(t).__(e)}function Qm(t){t.C_=new DV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Po(t).start(),t.v_.V_()}function Ym(t){return ys(t)&&!Po(t).Wo()&&t.w_.size>0}function ys(t){return ge(t).S_.size===0}function Eb(t){t.C_=void 0}async function NF(t){t.w_.forEach((e,n)=>{Gm(t,e)})}async function OF(t,e){Eb(t),Ym(t)?(t.v_.g_(e),Qm(t)):t.v_.set("Unknown")}async function DF(t,e,n){if(t.v_.set("Online"),e instanceof ab&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.w_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.w_.delete(a),i.C_.removeTarget(a))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xl(t,r)}else if(e instanceof pl?t.C_.Ge(e):e instanceof ob?t.C_.Xe(e):t.C_.He(e),!n.isEqual(pe.min()))try{const r=await mb(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.C_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.w_.get(l);u&&s.w_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.w_.get(c);if(!u)return;s.w_.set(c,u.withResumeToken(en.EMPTY_BYTE_STRING,u.snapshotVersion)),wb(s,c);const h=new li(u.target,c,l,u.sequenceNumber);Gm(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await Xl(t,r)}}async function Xl(t,e,n){if(!mc(e))throw e;t.S_.add(1),await yc(t),t.v_.set("Offline"),n||(n=()=>mb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await _h(t)})}function Tb(t,e){return e().catch(n=>Xl(t,n,e))}async function yh(t){const e=ge(t),n=Ii(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;MF(e);)try{const i=await yF(e.localStore,r);if(i===null){e.y_.length===0&&n.Ho();break}r=i.batchId,xF(e,i)}catch(i){await Xl(e,i)}Ib(e)&&bb(e)}function MF(t){return ys(t)&&t.y_.length<10}function xF(t,e){t.y_.push(e);const n=Ii(t);n.Go()&&n.u_&&n.c_(e.mutations)}function Ib(t){return ys(t)&&!Ii(t).Wo()&&t.y_.length>0}function bb(t){Ii(t).start()}async function LF(t){Ii(t).P_()}async function VF(t){const e=Ii(t);for(const n of t.y_)e.c_(n.mutations)}async function FF(t,e,n){const r=t.y_.shift(),i=jm.from(r,e,n);await Tb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await yh(t)}async function $F(t,e){e&&Ii(t).u_&&await async function(r,i){if(function(o){return kV(o)&&o!==F.ABORTED}(i.code)){const s=r.y_.shift();Ii(r).jo(),await Tb(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await yh(r)}}(t,e),Ib(t)&&bb(t)}async function Sv(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=ys(n);n.S_.add(3),await yc(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await _h(n)}async function UF(t,e){const n=ge(t);e?(n.S_.delete(2),await _h(n)):e||(n.S_.add(2),await yc(n),n.v_.set("Unknown"))}function Po(t){return t.F_||(t.F_=function(n,r,i){const s=ge(n);return s.T_(),new CF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:NF.bind(null,t),lo:OF.bind(null,t),s_:DF.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),Ym(t)?Qm(t):t.v_.set("Unknown")):(await t.F_.stop(),Eb(t))})),t.F_}function Ii(t){return t.M_||(t.M_=function(n,r,i){const s=ge(n);return s.T_(),new RF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:LF.bind(null,t),lo:$F.bind(null,t),h_:VF.bind(null,t),l_:FF.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await yh(t)):(await t.M_.stop(),t.y_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Jm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xm(t,e){if(Ur("AsyncQueue",`${e}: ${t}`),mc(t))return new se(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=na(),this.sortedSet=new ut(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(){this.x_=new ut(ae.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):he():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class lo{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new lo(e,n,Bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BF{constructor(){this.N_=void 0,this.listeners=[]}}class jF{constructor(){this.queries=new So(e=>zI(e),hh),this.onlineState="Unknown",this.B_=new Set}}async function Zm(t,e){const n=ge(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new BF),i)try{s.N_=await n.onListen(r)}catch(o){const a=Xm(o,`Initialization of query '${Hf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.L_(n.onlineState),s.N_&&e.k_(s.N_)&&tg(n)}async function eg(t,e){const n=ge(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function HF(t,e){const n=ge(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.k_(i)&&(r=!0);o.N_=i}}r&&tg(n)}function WF(t,e,n){const r=ge(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function tg(t){t.B_.forEach(e=>{e.next()})}class ng{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.key=e}}class Cb{constructor(e){this.key=e}}class zF{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=ve(),this.mutatedKeys=ve(),this.ia=qI(e),this.sa=new Bs(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new Pv,i=n?n.sa:this.sa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const p=i.get(u),m=dh(this.query,h)?h:null,y=!!p&&this.mutatedKeys.has(p.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;p&&m?p.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),b=!0):this.ua(p,m)||(r.track({type:2,doc:m}),b=!0,(c&&this.ia(m,c)>0||l&&this.ia(m,l)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),b=!0):p&&!m&&(r.track({type:1,doc:p}),b=!0,(c||l)&&(a=!0)),b&&(m?(o=o.add(m),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{sa:o,aa:r,Hi:a,mutatedKeys:s}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const s=e.aa.O_();s.sort((l,u)=>function(p,m){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return y(p)-y(m)}(l.type,u.type)||this.ia(l.doc,u.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,s.length!==0||c?{snapshot:new lo(this.query,e.sa,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new Pv,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=ve(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new Cb(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new Ab(r))}),n}Ia(e){this.ta=e._s,this.ra=ve();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return lo.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class qF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class KF{constructor(e){this.key=e,this.Ea=!1}}class GF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new So(a=>zI(a),hh),this.Ra=new Map,this.Va=new Set,this.ma=new ut(ae.comparator),this.fa=new Map,this.ga=new zm,this.pa={},this.ya=new Map,this.wa=co.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function QF(t,e){const n=s$(t);let r,i;const s=n.Aa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const o=await vF(n.localStore,Br(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await YF(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&yb(n.remoteStore,o)}return i}async function YF(t,e,n,r,i){t.ba=(h,p,m)=>async function(v,b,A,k){let N=b.view._a(A);N.Hi&&(N=await Av(v.localStore,b.query,!1).then(({documents:W})=>b.view._a(W,N)));const P=k&&k.targetChanges.get(b.targetId),j=b.view.applyChanges(N,v.isPrimaryClient,P);return Nv(v,b.targetId,j.ha),j.snapshot}(t,h,p,m);const s=await Av(t.localStore,e,!0),o=new zF(e,s._s),a=o._a(s.documents),c=_c.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Nv(t,n,l.ha);const u=new qF(e,n,o);return t.Aa.set(e,u),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),l.snapshot}async function JF(t,e){const n=ge(t),r=n.Aa.get(e),i=n.Ra.get(r.targetId);if(i.length>1)return n.Ra.set(r.targetId,i.filter(s=>!hh(s,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),vb(n.remoteStore,r.targetId),Qf(n,r.targetId)}).catch(pc)):(Qf(n,r.targetId),await Gf(n.localStore,r.targetId,!0))}async function XF(t,e,n){const r=o$(t);try{const i=await function(o,a){const c=ge(o),l=lt.now(),u=a.reduce((m,y)=>m.add(y.key),ve());let h,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=jr(),v=ve();return c.ts.getEntries(m,u).next(b=>{y=b,y.forEach((A,k)=>{k.isValidDocument()||(v=v.add(A))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,y)).next(b=>{h=b;const A=[];for(const k of a){const N=AV(k,h.get(k.key).overlayedDocument);N!=null&&A.push(new _s(k.key,N,FI(N.value.mapValue),xr.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,A,a)}).next(b=>{p=b;const A=b.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(m,b.batchId,A)})}).then(()=>({batchId:p.batchId,changes:GI(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.pa[o.currentUser.toKey()];l||(l=new ut(Ve)),l=l.insert(a,c),o.pa[o.currentUser.toKey()]=l}(r,i.batchId,n),await vc(r,i.changes),await yh(r.remoteStore)}catch(i){const s=Xm(i,"Failed to persist write");n.reject(s)}}async function Rb(t,e){const n=ge(t);try{const r=await gF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fa.get(s);o&&(Xe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ea=!0:i.modifiedDocuments.size>0?Xe(o.Ea):i.removedDocuments.size>0&&(Xe(o.Ea),o.Ea=!1))}),await vc(n,r,e)}catch(r){await pc(r)}}function kv(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Aa.forEach((s,o)=>{const a=o.view.L_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=ge(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const p of h.listeners)p.L_(a)&&(l=!0)}),l&&tg(c)}(r.eventManager,e),i.length&&r.da.s_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ZF(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fa.get(e),s=i&&i.key;if(s){let o=new ut(ae.comparator);o=o.insert(s,Bt.newNoDocument(s,pe.min()));const a=ve().add(s),c=new mh(pe.min(),new Map,new ut(Ve),o,a);await Rb(r,c),r.ma=r.ma.remove(s),r.fa.delete(e),rg(r)}else await Gf(r.localStore,e,!1).then(()=>Qf(r,e,n)).catch(pc)}async function e$(t,e){const n=ge(t),r=e.batch.batchId;try{const i=await mF(n.localStore,e);Pb(n,r,null),Sb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vc(n,i)}catch(i){await pc(i)}}async function t$(t,e,n){const r=ge(t);try{const i=await function(o,a){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Xe(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Pb(r,e,n),Sb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await vc(r,i)}catch(i){await pc(i)}}function Sb(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function Pb(t,e,n){const r=ge(t);let i=r.pa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pa[r.currentUser.toKey()]=i}}function Qf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||kb(t,r)})}function kb(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(vb(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),rg(t))}function Nv(t,e,n){for(const r of n)r instanceof Ab?(t.ga.addReference(r.key,e),n$(t,r)):r instanceof Cb?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||kb(t,r.key)):he()}function n$(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Va.add(r),rg(t))}function rg(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new ae(rt.fromString(e)),r=t.wa.next();t.fa.set(r,new KF(n)),t.ma=t.ma.insert(n,r),yb(t.remoteStore,new li(Br(uh(n.path)),r,"TargetPurposeLimboResolution",Lm.ae))}}async function vc(t,e,n){const r=ge(t),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,c)=>{o.push(r.ba(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Km.Ki(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.da.s_(i),await async function(c,l){const u=ge(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>B.forEach(l,p=>B.forEach(p.qi,m=>u.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>B.forEach(p.Qi,m=>u.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!mc(h))throw h;ee("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const p=h.targetId;if(!h.fromCache){const m=u.Zi.get(p),y=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(y);u.Zi=u.Zi.insert(p,v)}}}(r.localStore,s))}async function r$(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await pb(n.localStore,e);n.currentUser=e,function(s,o){s.ya.forEach(a=>{a.forEach(c=>{c.reject(new se(F.CANCELLED,o))})}),s.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vc(n,r.rs)}}function i$(t,e){const n=ge(t),r=n.fa.get(e);if(r&&r.Ea)return ve().add(r.key);{let i=ve();const s=n.Ra.get(e);if(!s)return i;for(const o of s){const a=n.Aa.get(o);i=i.unionWith(a.view.oa)}return i}}function s$(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=i$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZF.bind(null,e),e.da.s_=HF.bind(null,e.eventManager),e.da.Da=WF.bind(null,e.eventManager),e}function o$(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=e$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=t$.bind(null,e),e}class Ov{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=gh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return pF(this.persistence,new dF,e.initialUser,this.serializer)}createPersistence(e){return new uF(qm.Hr,this.serializer)}createSharedClientState(e){return new EF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class a${async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=r$.bind(null,this.syncEngine),await UF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jF}()}createDatastore(e){const n=gh(e.databaseInfo.databaseId),r=function(s){return new AF(s)}(e.databaseInfo);return function(s,o,a,c){return new SF(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new kF(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>kv(this.syncEngine,n,0),function(){return Rv.v()?new Rv:new TF}())}createSyncEngine(e,n){return function(i,s,o,a,c,l,u){const h=new GF(i,s,o,a,c,l);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ge(n);ee("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await yc(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ig{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ut.UNAUTHENTICATED,this.clientId=xI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ee("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ee("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new se(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sd(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await pb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Dv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await u$(t);ee("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Sv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Sv(e.remoteStore,s)),t._onlineComponents=e}function l$(t){return t.name==="FirebaseError"?t.code===F.FAILED_PRECONDITION||t.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function u$(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Sd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!l$(n))throw n;io("Error using user provided cache. Falling back to memory cache: "+n),await Sd(t,new Ov)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Sd(t,new Ov);return t._offlineComponents}async function Nb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Dv(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Dv(t,new a$))),t._onlineComponents}function h$(t){return Nb(t).then(e=>e.syncEngine)}async function Zl(t){const e=await Nb(t),n=e.eventManager;return n.onListen=QF.bind(null,e.syncEngine),n.onUnlisten=JF.bind(null,e.syncEngine),n}function d$(t,e,n={}){const r=new Mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new ig({next:p=>{o.enqueueAndForget(()=>eg(s,h));const m=p.docs.has(a);!m&&p.fromCache?l.reject(new se(F.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&c&&c.source==="server"?l.reject(new se(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new ng(uh(a.path),u,{includeMetadataChanges:!0,z_:!0});return Zm(s,h)}(await Zl(t),t.asyncQueue,e,n,r)),r.promise}function f$(t,e,n={}){const r=new Mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new ig({next:p=>{o.enqueueAndForget(()=>eg(s,h)),p.fromCache&&c.source==="server"?l.reject(new se(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new ng(a,u,{includeMetadataChanges:!0,z_:!0});return Zm(s,h)}(await Zl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Ob(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p$(t,e,n){if(!n)throw new se(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function m$(t,e,n,r){if(e===!0&&r===!0)throw new se(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xv(t){if(!ae.isDocumentKey(t))throw new se(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sg(t);throw new se(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new se(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}m$("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ob((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class og{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new se(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new se(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new D2;switch(r.type){case"firstParty":return new V2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mv.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Mv.delete(n),r.terminate())}(this),Promise.resolve()}}function g$(t,e,n,r={}){var i;const s=(t=or(t,og))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ut.MOCK_USER;else{a=SD(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new se(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ut(l)}t._authCredentials=new M2(new MI(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wc(this.firestore,e,this._query)}}class En{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ya(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new En(this.firestore,e,this._key)}}class Ya extends wc{constructor(e,n,r){super(e,n,uh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new En(this.firestore,null,new ae(e))}withConverter(e){return new Ya(this.firestore,e,this._path)}}function Db(t,e,...n){if(t=an(t),arguments.length===1&&(e=xI.V()),p$("doc","path",e),t instanceof og){const r=rt.fromString(e,...n);return xv(r),new En(t,null,new ae(r))}{if(!(t instanceof En||t instanceof Ya))throw new se(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(rt.fromString(e,...n));return xv(r),new En(t.firestore,t instanceof Ya?t.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _${constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new gb(this,"async_queue_retry"),this.tu=()=>{const n=Rd();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=Rd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=Rd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Mr;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!mc(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ur("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const i=Jm.createAndSchedule(this,e,n,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&he()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function Vv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class uo extends og{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new _$}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mb(this),this._firestoreClient.terminate()}}function y$(t,e){const n=typeof t=="object"?t:om(),r=typeof t=="string"?t:e||"(default)",i=sc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=RD("firestore");s&&g$(i,...s)}return i}function vh(t){return t._firestoreClient||Mb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Mb(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,l,u){return new Q2(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ob(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new c$(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ho(en.fromBase64String(e))}catch(n){throw new se(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ho(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v$=/^__.*__$/;class w${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _s(e,this.data,this.fieldMask,n,this.fieldTransforms):new gc(e,this.data,n,this.fieldTransforms)}}function Lb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class cg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.cu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new cg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.Tu(e),i}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.cu(),i}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return eu(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(Lb(this.lu)&&v$.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class E${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gh(e)}mu(e,n,r,i=!1){return new cg({lu:e,methodName:n,Vu:r,path:Kt.emptyPath(),Iu:!1,Ru:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function T$(t){const e=t._freezeSettings(),n=gh(t._databaseId);return new E$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function I$(t,e,n,r,i,s={}){const o=t.mu(s.merge||s.mergeFields?2:0,e,n,i);Ub("Data must be an object, but it was:",o,r);const a=Fb(r,o);let c,l;if(s.merge)c=new Un(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const p=b$(e,h,n);if(!o.contains(p))throw new se(F.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);C$(u,p)||u.push(p)}c=new Un(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new w$(new Pn(a),c,l)}function Vb(t,e){if($b(t=an(t)))return Ub("Unsupported field value:",e,t),Fb(t,e);if(t instanceof xb)return function(r,i){if(!Lb(i.lu))throw i.Au(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Au(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Vb(a,i.du(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=an(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vV(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=lt.fromDate(r);return{timestampValue:Jl(i.serializer,s)}}if(r instanceof lt){const s=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jl(i.serializer,s)}}if(r instanceof wh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ho)return{bytesValue:cb(i.serializer,r._byteString)};if(r instanceof En){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Au(`Unsupported field value: ${sg(r)}`)}(t,e)}function Fb(t,e){const n={};return LI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ro(t,(r,i)=>{const s=Vb(i,e.Pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $b(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof wh||t instanceof ho||t instanceof En||t instanceof xb)}function Ub(t,e,n){if(!$b(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=sg(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function b$(t,e,n){if((e=an(e))instanceof ag)return e._internalPath;if(typeof e=="string")return Bb(t,e);throw eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const A$=new RegExp("[~\\*/\\[\\]]");function Bb(t,e,n){if(e.search(A$)>=0)throw eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ag(...e.split("."))._internalPath}catch{throw eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new se(F.INVALID_ARGUMENT,a+t+c)}function C$(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new En(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new R$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class R$ extends jb{data(){return super.data()}}function Hb(t,e){return typeof e=="string"?Bb(t,e):e instanceof ag?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new se(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class S${convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ro(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new wh(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(za(e));default:return null}}convertTimestamp(e){const n=Ti(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=rt.fromString(e);Xe(fb(r));const i=new qa(r.get(1),r.get(3)),s=new ae(r.popFirst(5));return i.isEqual(n)||Ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P$(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zb extends jb{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hb("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ml extends zb{data(e={}){return super.data(e)}}class qb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ia(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ml(this._firestore,this._userDataWriter,r.key,r,new ia(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new ml(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ia(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new ml(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ia(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:k$(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function k$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t){t=or(t,En);const e=or(t.firestore,uo);return d$(vh(e),t._key).then(n=>Gb(e,t,n))}class lg extends S${constructor(e){super(),this.firestore=e}convertBytes(e){return new ho(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new En(this.firestore,null,n)}}function N$(t){t=or(t,wc);const e=or(t.firestore,uo),n=vh(e),r=new lg(e);return Wb(t._query),f$(n,t._query).then(i=>new qb(e,r,t,i))}function uW(t,e,n){t=or(t,En);const r=or(t.firestore,uo),i=P$(t.converter,e,n);return O$(r,[I$(T$(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xr.none())])}function ug(t,...e){var n,r,i;t=an(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Vv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof En)l=or(t.firestore,uo),u=uh(t._key.path),c={next:h=>{e[o]&&e[o](Gb(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=or(t,wc);l=or(h.firestore,uo),u=h._query;const p=new lg(l);c={next:m=>{e[o]&&e[o](new qb(l,p,h,m))},error:e[o+1],complete:e[o+2]},Wb(t._query)}return function(p,m,y,v){const b=new ig(v),A=new ng(m,b,y);return p.asyncQueue.enqueueAndForget(async()=>Zm(await Zl(p),A)),()=>{b.Ma(),p.asyncQueue.enqueueAndForget(async()=>eg(await Zl(p),A))}}(vh(l),u,a,c)}function O$(t,e){return function(r,i){const s=new Mr;return r.asyncQueue.enqueueAndForget(async()=>XF(await h$(r),i,s)),s.promise}(vh(t),e)}function Gb(t,e,n){const r=n.docs.get(e._key),i=new lg(t);return new zb(t,i,e._key,r,new ia(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Co=i})(Pi),gn(new cn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new uo(new x2(r.getProvider("auth-internal")),new $2(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new se(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qa(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),xt(iv,"4.1.2",e),xt(iv,"4.1.2","esm2017")})();const D$={apiKey:"AIzaSyBBi5IzyoAfCGZPdIjY_Unn13awXzMY3QQ",authDomain:"presenzapp.firebaseapp.com",projectId:"presenzapp",storageBucket:"presenzapp.appspot.com",messagingSenderId:"121965141290",appId:"1:121965141290:web:5bda310c5531b4849b9253",measurementId:"G-X4JEPSW9DH"},Qb=sT(D$),Yb=y$(Qb);var Jb=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},M$=(t,e,n)=>(Jb(t,e,"read from private field"),n?n.call(t):e.get(t)),x$=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},L$=(t,e,n,r)=>(Jb(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);const Fv=["aztec","code_128","code_39","code_93","codabar","data_matrix","ean_13","ean_8","itf","pdf417","qr_code","upc_a","upc_e","unknown"];function V$(t){if(Xb(t))return{width:t.naturalWidth,height:t.naturalHeight};if(Zb(t))return{width:t.width.baseVal.value,height:t.height.baseVal.value};if(eA(t))return{width:t.videoWidth,height:t.videoHeight};if(F$(t))return{width:t.width,height:t.height};if(tA(t))return{width:t.width,height:t.height};if($$(t))return{width:t.width,height:t.height};if(nA(t))return{width:t.displayWidth,height:t.displayHeight};throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.")}function Xb(t){try{return t instanceof HTMLImageElement}catch{return!1}}function Zb(t){try{return t instanceof SVGImageElement}catch{return!1}}function eA(t){try{return t instanceof HTMLVideoElement}catch{return!1}}function F$(t){try{return t instanceof HTMLCanvasElement}catch{return!1}}function tA(t){try{return t instanceof ImageBitmap}catch{return!1}}function $$(t){try{return t instanceof OffscreenCanvas}catch{return!1}}function nA(t){try{return t instanceof VideoFrame}catch{return!1}}function U$(t){try{return t instanceof Blob}catch{return!1}}function B$(t){try{return t instanceof ImageData}catch{return!1}}function j$(t,e){try{const n=new OffscreenCanvas(t,e);if(n.getContext("2d")instanceof OffscreenCanvasRenderingContext2D)return n;throw void 0}catch{const r=document.createElement("canvas");return r.width=t,r.height=e,r}}async function rA(t){if(Xb(t)&&!await z$(t))throw new DOMException("Failed to load or decode HTMLImageElement.","InvalidStateError");if(Zb(t)&&!await q$(t))throw new DOMException("Failed to load or decode SVGImageElement.","InvalidStateError");if(nA(t)&&K$(t))throw new DOMException("VideoFrame is closed.","InvalidStateError");if(eA(t)&&(t.readyState===0||t.readyState===1))throw new DOMException("Invalid element or state.","InvalidStateError");if(tA(t)&&Q$(t))throw new DOMException("The image source is detached.","InvalidStateError");const{width:e,height:n}=V$(t);if(e===0||n===0)return null;const r=j$(e,n).getContext("2d");r.drawImage(t,0,0);try{return r.getImageData(0,0,e,n)}catch{throw new DOMException("Source would taint origin.","SecurityError")}}async function H$(t){let e;try{e=await createImageBitmap(t)}catch{throw new DOMException("Failed to load or decode Blob.","InvalidStateError")}return await rA(e)}async function W$(t){if(U$(t))return await H$(t);if(B$(t)){if(G$(t))throw new DOMException("The image data has been detached.","InvalidStateError");return t}return await rA(t)}async function z$(t){try{return await t.decode(),!0}catch{return!1}}async function q$(t){var e;try{return await((e=t.decode)==null?void 0:e.call(t)),!0}catch{return!1}}function K$(t){return t.format===null}function G$(t){return t.data.buffer.byteLength===0}function Q$(t){return t.width===0&&t.height===0}function $v(t,e){return t instanceof DOMException?new DOMException(`${e}: ${t.message}`,t.name):t instanceof Error?new t.constructor(`${e}: ${t.message}`):new Error(`${e}: ${t}`)}const Uv=t=>{let e;const n=new Set,r=(o,a)=>{const c=typeof o=="function"?o(e):o;if(!Object.is(c,e)){const l=e;e=a??typeof c!="object"?c:Object.assign({},e,c),n.forEach(u=>u(e,l))}},i=()=>e,s={setState:r,getState:i,subscribe:o=>(n.add(o),()=>n.delete(o)),destroy:()=>{n.clear()}};return e=t(r,i,s),s},Y$=t=>t?Uv(t):Uv,J$={locateFile:(t,e)=>{var n;const r=(n=t.match(/_(.+?)\.wasm$/))==null?void 0:n[1];return r?`https://cdn.jsdelivr.net/npm/@sec-ant/zxing-wasm@2.1.3/dist/${r}/${t}`:e+t}},sa=Y$()(()=>({zxingModuleWeakMap:new WeakMap,zxingModuleOverrides:J$}));function iA(t,e=sa.getState().zxingModuleOverrides){const{zxingModuleWeakMap:n}=sa.getState(),r=n.get(t);if(r&&Object.is(e,sa.getState().zxingModuleOverrides))return r;{sa.setState({zxingModuleOverrides:e});const i=t(e);return n.set(t,i),i}}const Bv=["Aztec","Codabar","Code128","Code39","Code93","DataBar","DataBarExpanded","DataMatrix","EAN-13","EAN-8","ITF","Linear-Codes","Matrix-Codes","MaxiCode","MicroQRCode","None","PDF417","QRCode","UPC-A","UPC-E"],ui={tryHarder:!0,formats:[],maxSymbols:255};async function X$(t,{tryHarder:e=ui.tryHarder,formats:n=ui.formats,maxSymbols:r=ui.maxSymbols}=ui,i){const s=await iA(i,sa.getState().zxingModuleOverrides),{data:o,width:a,height:c,data:{byteLength:l}}=t,u=s._malloc(l);s.HEAP8.set(o,u);const h=s.readBarcodesFromPixmap(u,a,c,e,Z$(n),r);s._free(u);const p=[];for(let m=0;m<h.size();++m){const y=h.get(m);p.push({...y,format:eU(y.format)})}return p}function Z$(t){return t.join("|")}function eU(t){const e=jv(t);let n=0,r=Bv.length-1;for(;n<=r;){const i=Math.floor((n+r)/2),s=Bv[i],o=jv(s);if(o===e)return s;o<e?n=i+1:r=i-1}return"None"}function jv(t){return t.toLowerCase().replace(/_-\[\]/g,"")}var sA=(()=>{var t=import.meta.url;return function(e={}){var n=e,r,i;n.ready=new Promise((d,f)=>{r=d,i=f});var s=Object.assign({},n),o="./this.program",a=typeof window=="object",c=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var l="";function u(d){return n.locateFile?n.locateFile(d,l):l+d}var h;(a||c)&&(c?l=self.location.href:typeof document<"u"&&document.currentScript&&(l=document.currentScript.src),t&&(l=t),l.indexOf("blob:")!==0?l=l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):l="",c&&(h=d=>{var f=new XMLHttpRequest;return f.open("GET",d,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)})),n.print||console.log.bind(console);var p=n.printErr||console.error.bind(console);Object.assign(n,s),s=null,n.arguments&&n.arguments,n.thisProgram&&(o=n.thisProgram),n.quit&&n.quit;var m;n.wasmBinary&&(m=n.wasmBinary),n.noExitRuntime,typeof WebAssembly!="object"&&xn("no native wasm support detected");var y,v,b=!1,A,k,N,P,j,W,oe,me;function He(){var d=y.buffer;n.HEAP8=A=new Int8Array(d),n.HEAP16=N=new Int16Array(d),n.HEAP32=j=new Int32Array(d),n.HEAPU8=k=new Uint8Array(d),n.HEAPU16=P=new Uint16Array(d),n.HEAPU32=W=new Uint32Array(d),n.HEAPF32=oe=new Float32Array(d),n.HEAPF64=me=new Float64Array(d)}var Ce,st=[],kt=[],qe=[];function vr(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)Le(n.preRun.shift());E(st)}function tn(){E(kt)}function Ue(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)yn(n.postRun.shift());E(qe)}function Le(d){st.unshift(d)}function Ee(d){kt.unshift(d)}function yn(d){qe.unshift(d)}var mt=0,gt=null;function _t(d){mt++,n.monitorRunDependencies&&n.monitorRunDependencies(mt)}function Kr(d){if(mt--,n.monitorRunDependencies&&n.monitorRunDependencies(mt),mt==0&&gt){var f=gt;gt=null,f()}}function xn(d){n.onAbort&&n.onAbort(d),d="Aborted("+d+")",p(d),b=!0,d+=". Build with -sASSERTIONS for more info.";var f=new WebAssembly.RuntimeError(d);throw i(f),f}var Is="data:application/octet-stream;base64,";function ht(d){return d.startsWith(Is)}var D;n.locateFile?(D="zxing_reader.wasm",ht(D)||(D=u(D))):D=new URL("/reader/zxing_reader.wasm",self.location).href;function J(d){if(d==D&&m)return new Uint8Array(m);if(h)return h(d);throw"both async and sync fetching of the wasm failed"}function q(d){return!m&&(a||c)&&typeof fetch=="function"?fetch(d,{credentials:"same-origin"}).then(f=>{if(!f.ok)throw"failed to load wasm binary file at '"+d+"'";return f.arrayBuffer()}).catch(()=>J(d)):Promise.resolve().then(()=>J(d))}function te(d,f,g){return q(d).then(_=>WebAssembly.instantiate(_,f)).then(_=>_).then(g,_=>{p("failed to asynchronously prepare wasm: "+_),xn(_)})}function Oe(d,f,g,_){return!d&&typeof WebAssembly.instantiateStreaming=="function"&&!ht(f)&&typeof fetch=="function"?fetch(f,{credentials:"same-origin"}).then(T=>{var I=WebAssembly.instantiateStreaming(T,g);return I.then(_,function(R){return p("wasm streaming compile failed: "+R),p("falling back to ArrayBuffer instantiation"),te(f,g,_)})}):te(f,g,_)}function w(){var d={a:pP};function f(_,T){var I=_.exports;return v=I,y=v.qa,He(),Ce=v.ua,Ee(v.ra),Kr(),I}_t();function g(_){f(_.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(d,f)}catch(_){p("Module.instantiateWasm callback failed with error: "+_),i(_)}return Oe(m,D,d,g).catch(i),{}}var E=d=>{for(;d.length>0;)d.shift()(n)},C=[],O=0;function x(d){var f=new H(d);return f.get_caught()||(f.set_caught(!0),O--),f.set_rethrown(!1),C.push(f),w_(f.excPtr),f.get_exception_ptr()}var L=0;function Q(){Te(0,0);var d=C.pop();v_(d.excPtr),L=0}function H(d){this.excPtr=d,this.ptr=d-24,this.set_type=function(f){W[this.ptr+4>>2]=f},this.get_type=function(){return W[this.ptr+4>>2]},this.set_destructor=function(f){W[this.ptr+8>>2]=f},this.get_destructor=function(){return W[this.ptr+8>>2]},this.set_caught=function(f){f=f?1:0,A[this.ptr+12>>0]=f},this.get_caught=function(){return A[this.ptr+12>>0]!=0},this.set_rethrown=function(f){f=f?1:0,A[this.ptr+13>>0]=f},this.get_rethrown=function(){return A[this.ptr+13>>0]!=0},this.init=function(f,g){this.set_adjusted_ptr(0),this.set_type(f),this.set_destructor(g)},this.set_adjusted_ptr=function(f){W[this.ptr+16>>2]=f},this.get_adjusted_ptr=function(){return W[this.ptr+16>>2]},this.get_exception_ptr=function(){var f=T_(this.get_type());if(f)return W[this.excPtr>>2];var g=this.get_adjusted_ptr();return g!==0?g:this.excPtr}}function z(d){throw L||(L=d),L}var V=d=>{var f=L;if(!f)return $o(0),0;var g=new H(f);g.set_adjusted_ptr(f);var _=g.get_type();if(!_)return $o(0),f;for(var T in d){var I=d[T];if(I===0||I===_)break;var R=g.ptr+16;if(E_(I,_,R))return $o(I),f}return $o(_),f},ne=()=>V([]),X=d=>V([d]),re=(d,f)=>V([d,f]);function le(d){var f=new H(d).get_exception_ptr();return f}function ye(){var d=C.pop();d||xn("no exception to throw");var f=d.excPtr;throw d.get_rethrown()||(C.push(d),d.set_rethrown(!0),d.set_caught(!1),O++),L=f,L}function We(d,f,g){var _=new H(d);throw _.init(f,g),L=d,O++,L}function Fe(){return O}var Ke={};function un(d){for(;d.length;){var f=d.pop(),g=d.pop();g(f)}}function An(d){return this.fromWireType(j[d>>2])}var wr={},vn={},Di={},Vt=void 0;function nn(d){throw new Vt(d)}function Yn(d,f,g){d.forEach(function(S){Di[S]=f});function _(S){var M=g(S);M.length!==d.length&&nn("Mismatched type converter count");for(var $=0;$<d.length;++$)Er(d[$],M[$])}var T=new Array(f.length),I=[],R=0;f.forEach((S,M)=>{vn.hasOwnProperty(S)?T[M]=vn[S]:(I.push(S),wr.hasOwnProperty(S)||(wr[S]=[]),wr[S].push(()=>{T[M]=vn[S],++R,R===I.length&&_(T)}))}),I.length===0&&_(T)}var $R=function(d){var f=Ke[d];delete Ke[d];var g=f.rawConstructor,_=f.rawDestructor,T=f.fields,I=T.map(R=>R.getterReturnType).concat(T.map(R=>R.setterArgumentType));Yn([d],I,R=>{var S={};return T.forEach((M,$)=>{var Y=M.fieldName,ie=R[$],ce=M.getter,Pe=M.getterContext,et=R[$+T.length],yt=M.setter,tt=M.setterContext;S[Y]={read:vt=>ie.fromWireType(ce(Pe,vt)),write:(vt,U)=>{var Z=[];yt(tt,vt,et.toWireType(Z,U)),un(Z)}}}),[{name:f.name,fromWireType:function(M){var $={};for(var Y in S)$[Y]=S[Y].read(M);return _(M),$},toWireType:function(M,$){for(var Y in S)if(!(Y in $))throw new TypeError(`Missing field: "${Y}"`);var ie=g();for(Y in S)S[Y].write(ie,$[Y]);return M!==null&&M.push(_,ie),ie},argPackAdvance:8,readValueFromPointer:An,destructorFunction:_}]})};function UR(d,f,g,_,T){}function Mh(d){switch(d){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${d}`)}}function BR(){for(var d=new Array(256),f=0;f<256;++f)d[f]=String.fromCharCode(f);Qg=d}var Qg=void 0;function Ft(d){for(var f="",g=d;k[g];)f+=Qg[k[g++]];return f}var bs=void 0;function De(d){throw new bs(d)}function jR(d,f,g={}){var _=f.name;if(d||De(`type "${_}" must have a positive integer typeid pointer`),vn.hasOwnProperty(d)){if(g.ignoreDuplicateRegistrations)return;De(`Cannot register type '${_}' twice`)}if(vn[d]=f,delete Di[d],wr.hasOwnProperty(d)){var T=wr[d];delete wr[d],T.forEach(I=>I())}}function Er(d,f,g={}){if(!("argPackAdvance"in f))throw new TypeError("registerType registeredInstance requires argPackAdvance");return jR(d,f,g)}function HR(d,f,g,_,T){var I=Mh(g);f=Ft(f),Er(d,{name:f,fromWireType:function(R){return!!R},toWireType:function(R,S){return S?_:T},argPackAdvance:8,readValueFromPointer:function(R){var S;if(g===1)S=A;else if(g===2)S=N;else if(g===4)S=j;else throw new TypeError("Unknown boolean type size: "+f);return this.fromWireType(S[R>>I])},destructorFunction:null})}function WR(d){if(!(this instanceof Gr)||!(d instanceof Gr))return!1;for(var f=this.$$.ptrType.registeredClass,g=this.$$.ptr,_=d.$$.ptrType.registeredClass,T=d.$$.ptr;f.baseClass;)g=f.upcast(g),f=f.baseClass;for(;_.baseClass;)T=_.upcast(T),_=_.baseClass;return f===_&&g===T}function zR(d){return{count:d.count,deleteScheduled:d.deleteScheduled,preservePointerOnDelete:d.preservePointerOnDelete,ptr:d.ptr,ptrType:d.ptrType,smartPtr:d.smartPtr,smartPtrType:d.smartPtrType}}function xh(d){function f(g){return g.$$.ptrType.registeredClass.name}De(f(d)+" instance already deleted")}var Lh=!1;function Yg(d){}function qR(d){d.smartPtr?d.smartPtrType.rawDestructor(d.smartPtr):d.ptrType.registeredClass.rawDestructor(d.ptr)}function Jg(d){d.count.value-=1;var f=d.count.value===0;f&&qR(d)}function Xg(d,f,g){if(f===g)return d;if(g.baseClass===void 0)return null;var _=Xg(d,f,g.baseClass);return _===null?null:g.downcast(_)}var Zg={};function KR(){return Object.keys(Lo).length}function GR(){var d=[];for(var f in Lo)Lo.hasOwnProperty(f)&&d.push(Lo[f]);return d}var Mo=[];function Vh(){for(;Mo.length;){var d=Mo.pop();d.$$.deleteScheduled=!1,d.delete()}}var xo=void 0;function QR(d){xo=d,Mo.length&&xo&&xo(Vh)}function YR(){n.getInheritedInstanceCount=KR,n.getLiveInheritedInstances=GR,n.flushPendingDeletes=Vh,n.setDelayFunction=QR}var Lo={};function JR(d,f){for(f===void 0&&De("ptr should not be undefined");d.baseClass;)f=d.upcast(f),d=d.baseClass;return f}function XR(d,f){return f=JR(d,f),Lo[f]}function Dc(d,f){(!f.ptrType||!f.ptr)&&nn("makeClassHandle requires ptr and ptrType");var g=!!f.smartPtrType,_=!!f.smartPtr;return g!==_&&nn("Both smartPtrType and smartPtr must be specified"),f.count={value:1},Vo(Object.create(d,{$$:{value:f}}))}function ZR(d){var f=this.getPointee(d);if(!f)return this.destructor(d),null;var g=XR(this.registeredClass,f);if(g!==void 0){if(g.$$.count.value===0)return g.$$.ptr=f,g.$$.smartPtr=d,g.clone();var _=g.clone();return this.destructor(d),_}function T(){return this.isSmartPointer?Dc(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:f,smartPtrType:this,smartPtr:d}):Dc(this.registeredClass.instancePrototype,{ptrType:this,ptr:d})}var I=this.registeredClass.getActualType(f),R=Zg[I];if(!R)return T.call(this);var S;this.isConst?S=R.constPointerType:S=R.pointerType;var M=Xg(f,this.registeredClass,S.registeredClass);return M===null?T.call(this):this.isSmartPointer?Dc(S.registeredClass.instancePrototype,{ptrType:S,ptr:M,smartPtrType:this,smartPtr:d}):Dc(S.registeredClass.instancePrototype,{ptrType:S,ptr:M})}var Vo=function(d){return typeof FinalizationRegistry>"u"?(Vo=f=>f,d):(Lh=new FinalizationRegistry(f=>{Jg(f.$$)}),Vo=f=>{var g=f.$$,_=!!g.smartPtr;if(_){var T={$$:g};Lh.register(f,T,f)}return f},Yg=f=>Lh.unregister(f),Vo(d))};function eS(){if(this.$$.ptr||xh(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var d=Vo(Object.create(Object.getPrototypeOf(this),{$$:{value:zR(this.$$)}}));return d.$$.count.value+=1,d.$$.deleteScheduled=!1,d}function tS(){this.$$.ptr||xh(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&De("Object already scheduled for deletion"),Yg(this),Jg(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function nS(){return!this.$$.ptr}function rS(){return this.$$.ptr||xh(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&De("Object already scheduled for deletion"),Mo.push(this),Mo.length===1&&xo&&xo(Vh),this.$$.deleteScheduled=!0,this}function iS(){Gr.prototype.isAliasOf=WR,Gr.prototype.clone=eS,Gr.prototype.delete=tS,Gr.prototype.isDeleted=nS,Gr.prototype.deleteLater=rS}function Gr(){}var sS=48,oS=57;function e_(d){if(d===void 0)return"_unknown";d=d.replace(/[^a-zA-Z0-9_]/g,"$");var f=d.charCodeAt(0);return f>=sS&&f<=oS?`_${d}`:d}function t_(d,f){return d=e_(d),{[d]:function(){return f.apply(this,arguments)}}[d]}function n_(d,f,g){if(d[f].overloadTable===void 0){var _=d[f];d[f]=function(){return d[f].overloadTable.hasOwnProperty(arguments.length)||De(`Function '${g}' called with an invalid number of arguments (${arguments.length}) - expects one of (${d[f].overloadTable})!`),d[f].overloadTable[arguments.length].apply(this,arguments)},d[f].overloadTable=[],d[f].overloadTable[_.argCount]=_}}function r_(d,f,g){n.hasOwnProperty(d)?((g===void 0||n[d].overloadTable!==void 0&&n[d].overloadTable[g]!==void 0)&&De(`Cannot register public name '${d}' twice`),n_(n,d,d),n.hasOwnProperty(g)&&De(`Cannot register multiple overloads of a function with the same number of arguments (${g})!`),n[d].overloadTable[g]=f):(n[d]=f,g!==void 0&&(n[d].numArguments=g))}function aS(d,f,g,_,T,I,R,S){this.name=d,this.constructor=f,this.instancePrototype=g,this.rawDestructor=_,this.baseClass=T,this.getActualType=I,this.upcast=R,this.downcast=S,this.pureVirtualFunctions=[]}function Fh(d,f,g){for(;f!==g;)f.upcast||De(`Expected null or instance of ${g.name}, got an instance of ${f.name}`),d=f.upcast(d),f=f.baseClass;return d}function cS(d,f){if(f===null)return this.isReference&&De(`null is not a valid ${this.name}`),0;f.$$||De(`Cannot pass "${Bh(f)}" as a ${this.name}`),f.$$.ptr||De(`Cannot pass deleted object as a pointer of type ${this.name}`);var g=f.$$.ptrType.registeredClass,_=Fh(f.$$.ptr,g,this.registeredClass);return _}function lS(d,f){var g;if(f===null)return this.isReference&&De(`null is not a valid ${this.name}`),this.isSmartPointer?(g=this.rawConstructor(),d!==null&&d.push(this.rawDestructor,g),g):0;f.$$||De(`Cannot pass "${Bh(f)}" as a ${this.name}`),f.$$.ptr||De(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&f.$$.ptrType.isConst&&De(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);var _=f.$$.ptrType.registeredClass;if(g=Fh(f.$$.ptr,_,this.registeredClass),this.isSmartPointer)switch(f.$$.smartPtr===void 0&&De("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:f.$$.smartPtrType===this?g=f.$$.smartPtr:De(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:g=f.$$.smartPtr;break;case 2:if(f.$$.smartPtrType===this)g=f.$$.smartPtr;else{var T=f.clone();g=this.rawShare(g,Qr.toHandle(function(){T.delete()})),d!==null&&d.push(this.rawDestructor,g)}break;default:De("Unsupporting sharing policy")}return g}function uS(d,f){if(f===null)return this.isReference&&De(`null is not a valid ${this.name}`),0;f.$$||De(`Cannot pass "${Bh(f)}" as a ${this.name}`),f.$$.ptr||De(`Cannot pass deleted object as a pointer of type ${this.name}`),f.$$.ptrType.isConst&&De(`Cannot convert argument of type ${f.$$.ptrType.name} to parameter type ${this.name}`);var g=f.$$.ptrType.registeredClass,_=Fh(f.$$.ptr,g,this.registeredClass);return _}function hS(d){return this.rawGetPointee&&(d=this.rawGetPointee(d)),d}function dS(d){this.rawDestructor&&this.rawDestructor(d)}function fS(d){d!==null&&d.delete()}function pS(){Tr.prototype.getPointee=hS,Tr.prototype.destructor=dS,Tr.prototype.argPackAdvance=8,Tr.prototype.readValueFromPointer=An,Tr.prototype.deleteObject=fS,Tr.prototype.fromWireType=ZR}function Tr(d,f,g,_,T,I,R,S,M,$,Y){this.name=d,this.registeredClass=f,this.isReference=g,this.isConst=_,this.isSmartPointer=T,this.pointeeType=I,this.sharingPolicy=R,this.rawGetPointee=S,this.rawConstructor=M,this.rawShare=$,this.rawDestructor=Y,!T&&f.baseClass===void 0?_?(this.toWireType=cS,this.destructorFunction=null):(this.toWireType=uS,this.destructorFunction=null):this.toWireType=lS}function i_(d,f,g){n.hasOwnProperty(d)||nn("Replacing nonexistant public symbol"),n[d].overloadTable!==void 0&&g!==void 0?n[d].overloadTable[g]=f:(n[d]=f,n[d].argCount=g)}var mS=(d,f,g)=>{var _=n["dynCall_"+d];return g&&g.length?_.apply(null,[f].concat(g)):_.call(null,f)},Mc=[],Me=d=>{var f=Mc[d];return f||(d>=Mc.length&&(Mc.length=d+1),Mc[d]=f=Ce.get(d)),f},gS=(d,f,g)=>{if(d.includes("j"))return mS(d,f,g);var _=Me(f).apply(null,g);return _},_S=(d,f)=>{var g=[];return function(){return g.length=0,Object.assign(g,arguments),gS(d,f,g)}};function Ln(d,f){d=Ft(d);function g(){return d.includes("j")?_S(d,f):Me(f)}var _=g();return typeof _!="function"&&De(`unknown function pointer with signature ${d}: ${f}`),_}function yS(d,f){var g=t_(f,function(_){this.name=f,this.message=_;var T=new Error(_).stack;T!==void 0&&(this.stack=this.toString()+`
`+T.replace(/^Error(:[^\n]*)?\n/,""))});return g.prototype=Object.create(d.prototype),g.prototype.constructor=g,g.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},g}var s_=void 0;function o_(d){var f=y_(d),g=Ft(f);return Ir(f),g}function xc(d,f){var g=[],_={};function T(I){if(!_[I]&&!vn[I]){if(Di[I]){Di[I].forEach(T);return}g.push(I),_[I]=!0}}throw f.forEach(T),new s_(`${d}: `+g.map(o_).join([", "]))}function vS(d,f,g,_,T,I,R,S,M,$,Y,ie,ce){Y=Ft(Y),I=Ln(T,I),S&&(S=Ln(R,S)),$&&($=Ln(M,$)),ce=Ln(ie,ce);var Pe=e_(Y);r_(Pe,function(){xc(`Cannot construct ${Y} due to unbound types`,[_])}),Yn([d,f,g],_?[_]:[],function(et){et=et[0];var yt,tt;_?(yt=et.registeredClass,tt=yt.instancePrototype):tt=Gr.prototype;var vt=t_(Pe,function(){if(Object.getPrototypeOf(this)!==U)throw new bs("Use 'new' to construct "+Y);if(Z.constructor_body===void 0)throw new bs(Y+" has no accessible constructor");var Fc=Z.constructor_body[arguments.length];if(Fc===void 0)throw new bs(`Tried to invoke ctor of ${Y} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(Z.constructor_body).toString()}) parameters instead!`);return Fc.apply(this,arguments)}),U=Object.create(tt,{constructor:{value:vt}});vt.prototype=U;var Z=new aS(Y,vt,U,ce,yt,I,S,$);Z.baseClass&&(Z.baseClass.__derivedClasses===void 0&&(Z.baseClass.__derivedClasses=[]),Z.baseClass.__derivedClasses.push(Z));var ot=new Tr(Y,Z,!0,!1,!1),dt=new Tr(Y+"*",Z,!1,!1,!1),Mi=new Tr(Y+" const*",Z,!1,!0,!1);return Zg[d]={pointerType:dt,constPointerType:Mi},i_(Pe,vt),[ot,dt,Mi]})}function $h(d,f){for(var g=[],_=0;_<d;_++)g.push(W[f+_*4>>2]);return g}function Uh(d,f,g,_,T,I){var R=f.length;R<2&&De("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var S=f[1]!==null&&g!==null,M=!1,$=1;$<f.length;++$)if(f[$]!==null&&f[$].destructorFunction===void 0){M=!0;break}var Y=f[0].name!=="void",ie=R-2,ce=new Array(ie),Pe=[],et=[];return function(){arguments.length!==ie&&De(`function ${d} called with ${arguments.length} arguments, expected ${ie} args!`),et.length=0;var yt;Pe.length=S?2:1,Pe[0]=T,S&&(yt=f[1].toWireType(et,this),Pe[1]=yt);for(var tt=0;tt<ie;++tt)ce[tt]=f[tt+2].toWireType(et,arguments[tt]),Pe.push(ce[tt]);var vt=_.apply(null,Pe);function U(Z){if(M)un(et);else for(var ot=S?1:2;ot<f.length;ot++){var dt=ot===1?yt:ce[ot-2];f[ot].destructorFunction!==null&&f[ot].destructorFunction(dt)}if(Y)return f[0].fromWireType(Z)}return U(vt)}}function wS(d,f,g,_,T,I){var R=$h(f,g);T=Ln(_,T),Yn([],[d],function(S){S=S[0];var M=`constructor ${S.name}`;if(S.registeredClass.constructor_body===void 0&&(S.registeredClass.constructor_body=[]),S.registeredClass.constructor_body[f-1]!==void 0)throw new bs(`Cannot register multiple constructors with identical number of parameters (${f-1}) for class '${S.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return S.registeredClass.constructor_body[f-1]=()=>{xc(`Cannot construct ${S.name} due to unbound types`,R)},Yn([],R,function($){return $.splice(1,0,null),S.registeredClass.constructor_body[f-1]=Uh(M,$,null,T,I),[]}),[]})}function ES(d,f,g,_,T,I,R,S,M){var $=$h(g,_);f=Ft(f),I=Ln(T,I),Yn([],[d],function(Y){Y=Y[0];var ie=`${Y.name}.${f}`;f.startsWith("@@")&&(f=Symbol[f.substring(2)]),S&&Y.registeredClass.pureVirtualFunctions.push(f);function ce(){xc(`Cannot call ${ie} due to unbound types`,$)}var Pe=Y.registeredClass.instancePrototype,et=Pe[f];return et===void 0||et.overloadTable===void 0&&et.className!==Y.name&&et.argCount===g-2?(ce.argCount=g-2,ce.className=Y.name,Pe[f]=ce):(n_(Pe,f,ie),Pe[f].overloadTable[g-2]=ce),Yn([],$,function(yt){var tt=Uh(ie,yt,Y,I,R);return Pe[f].overloadTable===void 0?(tt.argCount=g-2,Pe[f]=tt):Pe[f].overloadTable[g-2]=tt,[]}),[]})}function TS(){Object.assign(a_.prototype,{get(d){return this.allocated[d]},has(d){return this.allocated[d]!==void 0},allocate(d){var f=this.freelist.pop()||this.allocated.length;return this.allocated[f]=d,f},free(d){this.allocated[d]=void 0,this.freelist.push(d)}})}function a_(){this.allocated=[void 0],this.freelist=[]}var Cn=new a_;function c_(d){d>=Cn.reserved&&--Cn.get(d).refcount===0&&Cn.free(d)}function IS(){for(var d=0,f=Cn.reserved;f<Cn.allocated.length;++f)Cn.allocated[f]!==void 0&&++d;return d}function bS(){Cn.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),Cn.reserved=Cn.allocated.length,n.count_emval_handles=IS}var Qr={toValue:d=>(d||De("Cannot use deleted val. handle = "+d),Cn.get(d).value),toHandle:d=>{switch(d){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Cn.allocate({refcount:1,value:d})}}};function AS(d,f){f=Ft(f),Er(d,{name:f,fromWireType:function(g){var _=Qr.toValue(g);return c_(g),_},toWireType:function(g,_){return Qr.toHandle(_)},argPackAdvance:8,readValueFromPointer:An,destructorFunction:null})}function Bh(d){if(d===null)return"null";var f=typeof d;return f==="object"||f==="array"||f==="function"?d.toString():""+d}function CS(d,f){switch(f){case 2:return function(g){return this.fromWireType(oe[g>>2])};case 3:return function(g){return this.fromWireType(me[g>>3])};default:throw new TypeError("Unknown float type: "+d)}}function RS(d,f,g){var _=Mh(g);f=Ft(f),Er(d,{name:f,fromWireType:function(T){return T},toWireType:function(T,I){return I},argPackAdvance:8,readValueFromPointer:CS(f,_),destructorFunction:null})}function SS(d,f,g,_,T,I,R){var S=$h(f,g);d=Ft(d),T=Ln(_,T),r_(d,function(){xc(`Cannot call ${d} due to unbound types`,S)},f-1),Yn([],S,function(M){var $=[M[0],null].concat(M.slice(1));return i_(d,Uh(d,$,null,T,I),f-1),[]})}function PS(d,f,g){switch(f){case 0:return g?function(_){return A[_]}:function(_){return k[_]};case 1:return g?function(_){return N[_>>1]}:function(_){return P[_>>1]};case 2:return g?function(_){return j[_>>2]}:function(_){return W[_>>2]};default:throw new TypeError("Unknown integer type: "+d)}}function kS(d,f,g,_,T){f=Ft(f);var I=Mh(g),R=ie=>ie;if(_===0){var S=32-8*g;R=ie=>ie<<S>>>S}var M=f.includes("unsigned"),$=(ie,ce)=>{},Y;M?Y=function(ie,ce){return $(ce,this.name),ce>>>0}:Y=function(ie,ce){return $(ce,this.name),ce},Er(d,{name:f,fromWireType:R,toWireType:Y,argPackAdvance:8,readValueFromPointer:PS(f,I,_!==0),destructorFunction:null})}function NS(d,f,g){var _=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],T=_[f];function I(R){R=R>>2;var S=W,M=S[R],$=S[R+1];return new T(S.buffer,$,M)}g=Ft(g),Er(d,{name:g,fromWireType:I,argPackAdvance:8,readValueFromPointer:I},{ignoreDuplicateRegistrations:!0})}var l_=(d,f,g,_)=>{if(!(_>0))return 0;for(var T=g,I=g+_-1,R=0;R<d.length;++R){var S=d.charCodeAt(R);if(S>=55296&&S<=57343){var M=d.charCodeAt(++R);S=65536+((S&1023)<<10)|M&1023}if(S<=127){if(g>=I)break;f[g++]=S}else if(S<=2047){if(g+1>=I)break;f[g++]=192|S>>6,f[g++]=128|S&63}else if(S<=65535){if(g+2>=I)break;f[g++]=224|S>>12,f[g++]=128|S>>6&63,f[g++]=128|S&63}else{if(g+3>=I)break;f[g++]=240|S>>18,f[g++]=128|S>>12&63,f[g++]=128|S>>6&63,f[g++]=128|S&63}}return f[g]=0,g-T},OS=(d,f,g)=>l_(d,k,f,g),u_=d=>{for(var f=0,g=0;g<d.length;++g){var _=d.charCodeAt(g);_<=127?f++:_<=2047?f+=2:_>=55296&&_<=57343?(f+=4,++g):f+=3}return f},h_=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,DS=(d,f,g)=>{for(var _=f+g,T=f;d[T]&&!(T>=_);)++T;if(T-f>16&&d.buffer&&h_)return h_.decode(d.subarray(f,T));for(var I="";f<T;){var R=d[f++];if(!(R&128)){I+=String.fromCharCode(R);continue}var S=d[f++]&63;if((R&224)==192){I+=String.fromCharCode((R&31)<<6|S);continue}var M=d[f++]&63;if((R&240)==224?R=(R&15)<<12|S<<6|M:R=(R&7)<<18|S<<12|M<<6|d[f++]&63,R<65536)I+=String.fromCharCode(R);else{var $=R-65536;I+=String.fromCharCode(55296|$>>10,56320|$&1023)}}return I},jh=(d,f)=>d?DS(k,d,f):"";function MS(d,f){f=Ft(f);var g=f==="std::string";Er(d,{name:f,fromWireType:function(_){var T=W[_>>2],I=_+4,R;if(g)for(var S=I,M=0;M<=T;++M){var $=I+M;if(M==T||k[$]==0){var Y=$-S,ie=jh(S,Y);R===void 0?R=ie:(R+=String.fromCharCode(0),R+=ie),S=$+1}}else{for(var ce=new Array(T),M=0;M<T;++M)ce[M]=String.fromCharCode(k[I+M]);R=ce.join("")}return Ir(_),R},toWireType:function(_,T){T instanceof ArrayBuffer&&(T=new Uint8Array(T));var I,R=typeof T=="string";R||T instanceof Uint8Array||T instanceof Uint8ClampedArray||T instanceof Int8Array||De("Cannot pass non-string to std::string"),g&&R?I=u_(T):I=T.length;var S=Wh(4+I+1),M=S+4;if(W[S>>2]=I,g&&R)OS(T,M,I+1);else if(R)for(var $=0;$<I;++$){var Y=T.charCodeAt($);Y>255&&(Ir(M),De("String has UTF-16 code units that do not fit in 8 bits")),k[M+$]=Y}else for(var $=0;$<I;++$)k[M+$]=T[$];return _!==null&&_.push(Ir,S),S},argPackAdvance:8,readValueFromPointer:An,destructorFunction:function(_){Ir(_)}})}var d_=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,xS=(d,f)=>{for(var g=d,_=g>>1,T=_+f/2;!(_>=T)&&P[_];)++_;if(g=_<<1,g-d>32&&d_)return d_.decode(k.subarray(d,g));for(var I="",R=0;!(R>=f/2);++R){var S=N[d+R*2>>1];if(S==0)break;I+=String.fromCharCode(S)}return I},LS=(d,f,g)=>{if(g===void 0&&(g=2147483647),g<2)return 0;g-=2;for(var _=f,T=g<d.length*2?g/2:d.length,I=0;I<T;++I){var R=d.charCodeAt(I);N[f>>1]=R,f+=2}return N[f>>1]=0,f-_},VS=d=>d.length*2,FS=(d,f)=>{for(var g=0,_="";!(g>=f/4);){var T=j[d+g*4>>2];if(T==0)break;if(++g,T>=65536){var I=T-65536;_+=String.fromCharCode(55296|I>>10,56320|I&1023)}else _+=String.fromCharCode(T)}return _},$S=(d,f,g)=>{if(g===void 0&&(g=2147483647),g<4)return 0;for(var _=f,T=_+g-4,I=0;I<d.length;++I){var R=d.charCodeAt(I);if(R>=55296&&R<=57343){var S=d.charCodeAt(++I);R=65536+((R&1023)<<10)|S&1023}if(j[f>>2]=R,f+=4,f+4>T)break}return j[f>>2]=0,f-_},US=d=>{for(var f=0,g=0;g<d.length;++g){var _=d.charCodeAt(g);_>=55296&&_<=57343&&++g,f+=4}return f},BS=function(d,f,g){g=Ft(g);var _,T,I,R,S;f===2?(_=xS,T=LS,R=VS,I=()=>P,S=1):f===4&&(_=FS,T=$S,R=US,I=()=>W,S=2),Er(d,{name:g,fromWireType:function(M){for(var $=W[M>>2],Y=I(),ie,ce=M+4,Pe=0;Pe<=$;++Pe){var et=M+4+Pe*f;if(Pe==$||Y[et>>S]==0){var yt=et-ce,tt=_(ce,yt);ie===void 0?ie=tt:(ie+=String.fromCharCode(0),ie+=tt),ce=et+f}}return Ir(M),ie},toWireType:function(M,$){typeof $!="string"&&De(`Cannot pass non-string to C++ string type ${g}`);var Y=R($),ie=Wh(4+Y+f);return W[ie>>2]=Y>>S,T($,ie+4,Y+f),M!==null&&M.push(Ir,ie),ie},argPackAdvance:8,readValueFromPointer:An,destructorFunction:function(M){Ir(M)}})};function jS(d,f,g,_,T,I){Ke[d]={name:Ft(f),rawConstructor:Ln(g,_),rawDestructor:Ln(T,I),fields:[]}}function HS(d,f,g,_,T,I,R,S,M,$){Ke[d].fields.push({fieldName:Ft(f),getterReturnType:g,getter:Ln(_,T),getterContext:I,setterArgumentType:R,setter:Ln(S,M),setterContext:$})}function WS(d,f){f=Ft(f),Er(d,{isVoid:!0,name:f,argPackAdvance:0,fromWireType:function(){},toWireType:function(g,_){}})}var zS={};function qS(d){var f=zS[d];return f===void 0?Ft(d):f}function f_(){if(typeof globalThis=="object")return globalThis;function d(f){f.$$$embind_global$$$=f;var g=typeof $$$embind_global$$$=="object"&&f.$$$embind_global$$$==f;return g||delete f.$$$embind_global$$$,g}if(typeof $$$embind_global$$$=="object"||(typeof global=="object"&&d(global)?$$$embind_global$$$=global:typeof self=="object"&&d(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function KS(d){return d===0?Qr.toHandle(f_()):(d=qS(d),Qr.toHandle(f_()[d]))}function GS(d){d>4&&(Cn.get(d).refcount+=1)}function p_(d,f){var g=vn[d];return g===void 0&&De(f+" has unknown type "+o_(d)),g}function QS(d){var f=new Array(d+1);return function(g,_,T){f[0]=g;for(var I=0;I<d;++I){var R=p_(W[_+I*4>>2],"parameter "+I);f[I+1]=R.readValueFromPointer(T),T+=R.argPackAdvance}var S=new(g.bind.apply(g,f));return Qr.toHandle(S)}}var m_={};function YS(d,f,g,_){d=Qr.toValue(d);var T=m_[f];return T||(T=QS(f),m_[f]=T),T(d,g,_)}function JS(d,f){d=p_(d,"_emval_take_value");var g=d.readValueFromPointer(f);return Qr.toHandle(g)}var XS=()=>{xn("")},ZS=(d,f,g)=>k.copyWithin(d,f,f+g),eP=()=>2147483648,tP=d=>{var f=y.buffer,g=d-f.byteLength+65535>>>16;try{return y.grow(g),He(),1}catch{}},nP=d=>{var f=k.length;d>>>=0;var g=eP();if(d>g)return!1;for(var _=(M,$)=>M+($-M%$)%$,T=1;T<=4;T*=2){var I=f*(1+.2/T);I=Math.min(I,d+100663296);var R=Math.min(g,_(Math.max(d,I),65536)),S=tP(R);if(S)return!0}return!1},Hh={},rP=()=>o||"./this.program",Fo=()=>{if(!Fo.strings){var d=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:d,_:rP()};for(var g in Hh)Hh[g]===void 0?delete f[g]:f[g]=Hh[g];var _=[];for(var g in f)_.push(`${g}=${f[g]}`);Fo.strings=_}return Fo.strings},iP=(d,f)=>{for(var g=0;g<d.length;++g)A[f++>>0]=d.charCodeAt(g);A[f>>0]=0},sP=(d,f)=>{var g=0;return Fo().forEach(function(_,T){var I=f+g;W[d+T*4>>2]=I,iP(_,I),g+=_.length+1}),0},oP=(d,f)=>{var g=Fo();W[d>>2]=g.length;var _=0;return g.forEach(function(T){_+=T.length+1}),W[f>>2]=_,0};function aP(d){return d}var Lc=d=>d%4===0&&(d%100!==0||d%400===0),cP=(d,f)=>{for(var g=0,_=0;_<=f;g+=d[_++]);return g},g_=[31,29,31,30,31,30,31,31,30,31,30,31],__=[31,28,31,30,31,30,31,31,30,31,30,31],lP=(d,f)=>{for(var g=new Date(d.getTime());f>0;){var _=Lc(g.getFullYear()),T=g.getMonth(),I=(_?g_:__)[T];if(f>I-g.getDate())f-=I-g.getDate()+1,g.setDate(1),T<11?g.setMonth(T+1):(g.setMonth(0),g.setFullYear(g.getFullYear()+1));else return g.setDate(g.getDate()+f),g}return g};function uP(d,f,g){var _=g>0?g:u_(d)+1,T=new Array(_),I=l_(d,T,0,T.length);return f&&(T.length=I),T}var hP=(d,f)=>{A.set(d,f)},dP=(d,f,g,_)=>{var T=j[_+40>>2],I={tm_sec:j[_>>2],tm_min:j[_+4>>2],tm_hour:j[_+8>>2],tm_mday:j[_+12>>2],tm_mon:j[_+16>>2],tm_year:j[_+20>>2],tm_wday:j[_+24>>2],tm_yday:j[_+28>>2],tm_isdst:j[_+32>>2],tm_gmtoff:j[_+36>>2],tm_zone:T?jh(T):""},R=jh(g),S={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var M in S)R=R.replace(new RegExp(M,"g"),S[M]);var $=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Y=["January","February","March","April","May","June","July","August","September","October","November","December"];function ie(U,Z,ot){for(var dt=typeof U=="number"?U.toString():U||"";dt.length<Z;)dt=ot[0]+dt;return dt}function ce(U,Z){return ie(U,Z,"0")}function Pe(U,Z){function ot(Mi){return Mi<0?-1:Mi>0?1:0}var dt;return(dt=ot(U.getFullYear()-Z.getFullYear()))===0&&(dt=ot(U.getMonth()-Z.getMonth()))===0&&(dt=ot(U.getDate()-Z.getDate())),dt}function et(U){switch(U.getDay()){case 0:return new Date(U.getFullYear()-1,11,29);case 1:return U;case 2:return new Date(U.getFullYear(),0,3);case 3:return new Date(U.getFullYear(),0,2);case 4:return new Date(U.getFullYear(),0,1);case 5:return new Date(U.getFullYear()-1,11,31);case 6:return new Date(U.getFullYear()-1,11,30)}}function yt(U){var Z=lP(new Date(U.tm_year+1900,0,1),U.tm_yday),ot=new Date(Z.getFullYear(),0,4),dt=new Date(Z.getFullYear()+1,0,4),Mi=et(ot),Fc=et(dt);return Pe(Mi,Z)<=0?Pe(Fc,Z)<=0?Z.getFullYear()+1:Z.getFullYear():Z.getFullYear()-1}var tt={"%a":U=>$[U.tm_wday].substring(0,3),"%A":U=>$[U.tm_wday],"%b":U=>Y[U.tm_mon].substring(0,3),"%B":U=>Y[U.tm_mon],"%C":U=>{var Z=U.tm_year+1900;return ce(Z/100|0,2)},"%d":U=>ce(U.tm_mday,2),"%e":U=>ie(U.tm_mday,2," "),"%g":U=>yt(U).toString().substring(2),"%G":U=>yt(U),"%H":U=>ce(U.tm_hour,2),"%I":U=>{var Z=U.tm_hour;return Z==0?Z=12:Z>12&&(Z-=12),ce(Z,2)},"%j":U=>ce(U.tm_mday+cP(Lc(U.tm_year+1900)?g_:__,U.tm_mon-1),3),"%m":U=>ce(U.tm_mon+1,2),"%M":U=>ce(U.tm_min,2),"%n":()=>`
`,"%p":U=>U.tm_hour>=0&&U.tm_hour<12?"AM":"PM","%S":U=>ce(U.tm_sec,2),"%t":()=>"	","%u":U=>U.tm_wday||7,"%U":U=>{var Z=U.tm_yday+7-U.tm_wday;return ce(Math.floor(Z/7),2)},"%V":U=>{var Z=Math.floor((U.tm_yday+7-(U.tm_wday+6)%7)/7);if((U.tm_wday+371-U.tm_yday-2)%7<=2&&Z++,Z){if(Z==53){var ot=(U.tm_wday+371-U.tm_yday)%7;ot!=4&&(ot!=3||!Lc(U.tm_year))&&(Z=1)}}else{Z=52;var dt=(U.tm_wday+7-U.tm_yday-1)%7;(dt==4||dt==5&&Lc(U.tm_year%400-1))&&Z++}return ce(Z,2)},"%w":U=>U.tm_wday,"%W":U=>{var Z=U.tm_yday+7-(U.tm_wday+6)%7;return ce(Math.floor(Z/7),2)},"%y":U=>(U.tm_year+1900).toString().substring(2),"%Y":U=>U.tm_year+1900,"%z":U=>{var Z=U.tm_gmtoff,ot=Z>=0;return Z=Math.abs(Z)/60,Z=Z/60*100+Z%60,(ot?"+":"-")+("0000"+Z).slice(-4)},"%Z":U=>U.tm_zone,"%%":()=>"%"};R=R.replace(/%%/g,"\0\0");for(var M in tt)R.includes(M)&&(R=R.replace(new RegExp(M,"g"),tt[M](I)));R=R.replace(/\0\0/g,"%");var vt=uP(R,!1);return vt.length>f?0:(hP(vt,d),vt.length-1)},fP=(d,f,g,_,T)=>dP(d,f,g,_);Vt=n.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},BR(),bs=n.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},iS(),YR(),pS(),s_=n.UnboundTypeError=yS(Error,"UnboundTypeError"),TS(),bS();var pP={q:x,u:Q,a:ne,h:X,l:re,I:le,P:ye,n:We,ba:Fe,d:z,oa:$R,Y:UR,fa:HR,na:vS,ma:wS,D:ES,ea:AS,W:RS,J:SS,w:kS,s:NS,V:MS,L:BS,Q:jS,pa:HS,ga:WS,U:c_,la:KS,R:GS,ia:YS,ka:JS,K:XS,da:ZS,ca:nP,$:sP,aa:oP,H:DP,T:jP,B:xP,p:kP,b:mP,C:OP,ha:VP,c:wP,j:TP,i:yP,x:MP,O:NP,v:SP,G:$P,N:UP,A:LP,F:HP,Z:zP,X:qP,k:EP,f:vP,e:_P,g:gP,M:BP,m:RP,o:IP,S:bP,t:CP,ja:PP,y:FP,r:AP,E:WP,z:aP,_:fP};w();var Ir=n._free=d=>(Ir=n._free=v.sa)(d),Wh=n._malloc=d=>(Wh=n._malloc=v.ta)(d),y_=d=>(y_=v.va)(d);n.__embind_initialize_bindings=()=>(n.__embind_initialize_bindings=v.wa)();var Te=(d,f)=>(Te=v.xa)(d,f),$o=d=>($o=v.ya)(d),Re=()=>(Re=v.za)(),Se=d=>(Se=v.Aa)(d),v_=d=>(v_=v.Ba)(d),w_=d=>(w_=v.Ca)(d),E_=(d,f,g)=>(E_=v.Da)(d,f,g),T_=d=>(T_=v.Ea)(d);n.dynCall_viijii=(d,f,g,_,T,I,R)=>(n.dynCall_viijii=v.Fa)(d,f,g,_,T,I,R);var I_=n.dynCall_jiii=(d,f,g,_)=>(I_=n.dynCall_jiii=v.Ga)(d,f,g,_),b_=n.dynCall_jiiii=(d,f,g,_,T)=>(b_=n.dynCall_jiiii=v.Ha)(d,f,g,_,T);n.dynCall_iiiiij=(d,f,g,_,T,I,R)=>(n.dynCall_iiiiij=v.Ia)(d,f,g,_,T,I,R),n.dynCall_iiiiijj=(d,f,g,_,T,I,R,S,M)=>(n.dynCall_iiiiijj=v.Ja)(d,f,g,_,T,I,R,S,M),n.dynCall_iiiiiijj=(d,f,g,_,T,I,R,S,M,$)=>(n.dynCall_iiiiiijj=v.Ka)(d,f,g,_,T,I,R,S,M,$);function mP(d,f){var g=Re();try{return Me(d)(f)}catch(_){if(Se(g),_!==_+0)throw _;Te(1,0)}}function gP(d,f,g,_){var T=Re();try{Me(d)(f,g,_)}catch(I){if(Se(T),I!==I+0)throw I;Te(1,0)}}function _P(d,f,g){var _=Re();try{Me(d)(f,g)}catch(T){if(Se(_),T!==T+0)throw T;Te(1,0)}}function yP(d,f,g,_,T){var I=Re();try{return Me(d)(f,g,_,T)}catch(R){if(Se(I),R!==R+0)throw R;Te(1,0)}}function vP(d,f){var g=Re();try{Me(d)(f)}catch(_){if(Se(g),_!==_+0)throw _;Te(1,0)}}function wP(d,f,g){var _=Re();try{return Me(d)(f,g)}catch(T){if(Se(_),T!==T+0)throw T;Te(1,0)}}function EP(d){var f=Re();try{Me(d)()}catch(g){if(Se(f),g!==g+0)throw g;Te(1,0)}}function TP(d,f,g,_){var T=Re();try{return Me(d)(f,g,_)}catch(I){if(Se(T),I!==I+0)throw I;Te(1,0)}}function IP(d,f,g,_,T,I){var R=Re();try{Me(d)(f,g,_,T,I)}catch(S){if(Se(R),S!==S+0)throw S;Te(1,0)}}function bP(d,f,g,_,T,I,R){var S=Re();try{Me(d)(f,g,_,T,I,R)}catch(M){if(Se(S),M!==M+0)throw M;Te(1,0)}}function AP(d,f,g,_,T,I,R,S,M,$,Y){var ie=Re();try{Me(d)(f,g,_,T,I,R,S,M,$,Y)}catch(ce){if(Se(ie),ce!==ce+0)throw ce;Te(1,0)}}function CP(d,f,g,_,T,I,R,S){var M=Re();try{Me(d)(f,g,_,T,I,R,S)}catch($){if(Se(M),$!==$+0)throw $;Te(1,0)}}function RP(d,f,g,_,T){var I=Re();try{Me(d)(f,g,_,T)}catch(R){if(Se(I),R!==R+0)throw R;Te(1,0)}}function SP(d,f,g,_,T,I,R){var S=Re();try{return Me(d)(f,g,_,T,I,R)}catch(M){if(Se(S),M!==M+0)throw M;Te(1,0)}}function PP(d,f,g,_,T,I,R,S,M){var $=Re();try{Me(d)(f,g,_,T,I,R,S,M)}catch(Y){if(Se($),Y!==Y+0)throw Y;Te(1,0)}}function kP(d){var f=Re();try{return Me(d)()}catch(g){if(Se(f),g!==g+0)throw g;Te(1,0)}}function NP(d,f,g,_,T,I,R){var S=Re();try{return Me(d)(f,g,_,T,I,R)}catch(M){if(Se(S),M!==M+0)throw M;Te(1,0)}}function OP(d,f,g,_){var T=Re();try{return Me(d)(f,g,_)}catch(I){if(Se(T),I!==I+0)throw I;Te(1,0)}}function DP(d,f,g,_){var T=Re();try{return Me(d)(f,g,_)}catch(I){if(Se(T),I!==I+0)throw I;Te(1,0)}}function MP(d,f,g,_,T,I){var R=Re();try{return Me(d)(f,g,_,T,I)}catch(S){if(Se(R),S!==S+0)throw S;Te(1,0)}}function xP(d,f,g,_,T,I){var R=Re();try{return Me(d)(f,g,_,T,I)}catch(S){if(Se(R),S!==S+0)throw S;Te(1,0)}}function LP(d,f,g,_,T,I,R,S,M,$){var Y=Re();try{return Me(d)(f,g,_,T,I,R,S,M,$)}catch(ie){if(Se(Y),ie!==ie+0)throw ie;Te(1,0)}}function VP(d,f,g){var _=Re();try{return Me(d)(f,g)}catch(T){if(Se(_),T!==T+0)throw T;Te(1,0)}}function FP(d,f,g,_,T,I,R,S,M,$){var Y=Re();try{Me(d)(f,g,_,T,I,R,S,M,$)}catch(ie){if(Se(Y),ie!==ie+0)throw ie;Te(1,0)}}function $P(d,f,g,_,T,I,R,S){var M=Re();try{return Me(d)(f,g,_,T,I,R,S)}catch($){if(Se(M),$!==$+0)throw $;Te(1,0)}}function UP(d,f,g,_,T,I,R,S,M){var $=Re();try{return Me(d)(f,g,_,T,I,R,S,M)}catch(Y){if(Se($),Y!==Y+0)throw Y;Te(1,0)}}function BP(d,f,g,_,T,I,R){var S=Re();try{Me(d)(f,g,_,T,I,R)}catch(M){if(Se(S),M!==M+0)throw M;Te(1,0)}}function jP(d,f,g,_){var T=Re();try{return Me(d)(f,g,_)}catch(I){if(Se(T),I!==I+0)throw I;Te(1,0)}}function HP(d,f,g,_,T,I,R,S,M,$,Y,ie){var ce=Re();try{return Me(d)(f,g,_,T,I,R,S,M,$,Y,ie)}catch(Pe){if(Se(ce),Pe!==Pe+0)throw Pe;Te(1,0)}}function WP(d,f,g,_,T,I,R,S,M,$,Y,ie,ce,Pe,et,yt){var tt=Re();try{Me(d)(f,g,_,T,I,R,S,M,$,Y,ie,ce,Pe,et,yt)}catch(vt){if(Se(tt),vt!==vt+0)throw vt;Te(1,0)}}function zP(d,f,g,_){var T=Re();try{return I_(d,f,g,_)}catch(I){if(Se(T),I!==I+0)throw I;Te(1,0)}}function qP(d,f,g,_,T){var I=Re();try{return b_(d,f,g,_,T)}catch(R){if(Se(I),R!==R+0)throw R;Te(1,0)}}var Vc;gt=function d(){Vc||A_(),Vc||(gt=d)};function A_(){if(mt>0||(vr(),mt>0))return;function d(){Vc||(Vc=!0,n.calledRun=!0,!b&&(tn(),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),Ue()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),d()},1)):d()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return A_(),e.ready}})();function tU(t){return iA(sA,t)}async function nU(t,{tryHarder:e=ui.tryHarder,formats:n=ui.formats,maxSymbols:r=ui.maxSymbols}=ui){return X$(t,{tryHarder:e,formats:n,maxSymbols:r},sA)}const oA=new Map([["aztec","Aztec"],["code_128","Code128"],["code_39","Code39"],["code_93","Code93"],["codabar","Codabar"],["data_matrix","DataMatrix"],["ean_13","EAN-13"],["ean_8","EAN-8"],["itf","ITF"],["pdf417","PDF417"],["qr_code","QRCode"],["upc_a","UPC-A"],["upc_e","UPC-E"]]);function rU(t){for(const[e,n]of oA)if(t===n)return e;return"unknown"}var gl;class Eh{constructor(e={}){x$(this,gl,void 0);var n;try{const r=(n=e==null?void 0:e.formats)==null?void 0:n.filter(i=>i!=="unknown");if((r==null?void 0:r.length)===0)throw new TypeError("Hint option provided, but is empty.");r==null||r.forEach(i=>{if(!Fv.includes(i))throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${i}' is not a valid enum value of type BarcodeFormat.`)}),tU().catch(()=>{}),L$(this,gl,r??[])}catch(r){throw $v(r,"Failed to construct 'BarcodeDetector'")}}static async getSupportedFormats(){return Fv.filter(e=>e!=="unknown")}async detect(e){try{const n=await W$(e);if(n===null)return[];let r;try{r=await nU(n,{tryHarder:!0,formats:M$(this,gl).map(i=>oA.get(i))})}catch{throw new DOMException("Barcode detection service unavailable. Use 'setZXingModuleOverrides' in offline or strict CSP environments.","NotSupportedError")}return r.map(i=>{const{topLeft:{x:s,y:o},topRight:{x:a,y:c},bottomLeft:{x:l,y:u},bottomRight:{x:h,y:p}}=i.position,m=Math.min(s,a,l,h),y=Math.min(o,c,u,p),v=Math.max(s,a,l,h),b=Math.max(o,c,u,p);return{boundingBox:new DOMRectReadOnly(m,y,v-m,b-y),rawValue:new TextDecoder().decode(i.bytes),format:rU(i.format),cornerPoints:[{x:s,y:o},{x:a,y:c},{x:h,y:p},{x:l,y:u}]}})}catch(n){throw $v(n,"Failed to execute 'detect' on 'BarcodeDetector'")}}}gl=new WeakMap;const aA=(t,e,n="error")=>{let r,i;const s=new Promise((o,a)=>{r=o,i=a,t.addEventListener(e,r),t.addEventListener(n,i)});return s.finally(()=>{t.removeEventListener(e,r),t.removeEventListener(n,i)}),s},Hv=t=>new Promise(e=>setTimeout(e,t));class iU extends Error{constructor(){super("can't process cross-origin image"),this.name="DropImageFetchError"}}class cA extends Error{constructor(){super("this browser has no Stream API support"),this.name="StreamApiNotSupportedError"}}class sU extends Error{constructor(){super("camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP."),this.name="InsecureContextError"}}class oU extends Error{constructor(){super("Loading camera stream timed out after 3 seconds. If you are on iOS in PWA mode, this is a known issue (see https://github.com/gruhn/vue-qrcode-reader/issues/298)"),this.name="StreamLoadTimeoutError"}}let Yf;const aU=t=>{Yf=new Eh({formats:t})},cU=async(t,{detectHandler:e,locateHandler:n,minDelay:r,formats:i})=>{Yf=new Eh({formats:i});const s=o=>async a=>{if(t.readyState>1){const{lastScanned:c,contentBefore:l,lastScanHadContent:u}=o;if(a-c<r)window.requestAnimationFrame(s(o));else{const h=await Yf.detect(t),p=h.some(v=>!l.includes(v.rawValue));p&&e(h);const m=h.length>0;m&&n(h),!m&&u&&n(h);const y={lastScanned:a,lastScanHadContent:m,contentBefore:p?h.map(v=>v.rawValue):l};window.requestAnimationFrame(s(y))}}};s({lastScanned:performance.now(),contentBefore:[],lastScanHadContent:!1})(performance.now())},lU=async t=>{if(t.startsWith("http")&&t.includes(location.host)===!1)throw new iU;const e=document.createElement("img");return e.src=t,await aA(e,"load"),e},lA=async(t,e=["qr_code"])=>await new Eh({formats:e}).detect(t),uU=async(t,e=["qr_code"])=>{const n=new Eh({formats:e}),r=await lU(t);return await n.detect(r)};var uA={},_n={};Object.defineProperty(_n,"__esModule",{value:!0});_n.compactObject=fA;_n.deprecated=vU;var hU=_n.detectBrowser=wU;_n.disableLog=gU;_n.disableWarnings=_U;_n.extractVersion=_l;_n.filterStats=EU;_n.log=yU;_n.walkStats=tu;_n.wrapPeerConnectionEvent=mU;function dU(t,e,n){return e=fU(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fU(t){var e=pU(t,"string");return bi(e)==="symbol"?e:String(e)}function pU(t,e){if(bi(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(bi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function bi(t){"@babel/helpers - typeof";return bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bi(t)}var hA=!0,dA=!0;function _l(t,e,n){var r=t.match(e);return r&&r.length>=n&&parseInt(r[n],10)}function mU(t,e,n){if(t.RTCPeerConnection){var r=t.RTCPeerConnection.prototype,i=r.addEventListener;r.addEventListener=function(o,a){if(o!==e)return i.apply(this,arguments);var c=function(l){var u=n(l);u&&(a.handleEvent?a.handleEvent(u):a(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,c),i.apply(this,[o,c])};var s=r.removeEventListener;r.removeEventListener=function(o,a){if(o!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(a))return s.apply(this,arguments);var c=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[o,c])},Object.defineProperty(r,"on"+e,{get:function(){return this["_on"+e]},set:function(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}}function gU(t){return typeof t!="boolean"?new Error("Argument type: "+bi(t)+". Please use a boolean."):(hA=t,t?"adapter.js logging disabled":"adapter.js logging enabled")}function _U(t){return typeof t!="boolean"?new Error("Argument type: "+bi(t)+". Please use a boolean."):(dA=!t,"adapter.js deprecation warnings "+(t?"disabled":"enabled"))}function yU(){if((typeof window>"u"?"undefined":bi(window))==="object"){if(hA)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function vU(t,e){dA&&console.warn(t+" is deprecated, please use "+e+" instead.")}function wU(t){var e={browser:null,version:null};if(typeof t>"u"||!t.navigator)return e.browser="Not a browser.",e;var n=t.navigator;if(n.mozGetUserMedia)e.browser="firefox",e.version=_l(n.userAgent,/Firefox\/(\d+)\./,1);else if(n.webkitGetUserMedia||t.isSecureContext===!1&&t.webkitRTCPeerConnection)e.browser="chrome",e.version=_l(n.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.RTCPeerConnection&&n.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=_l(n.userAgent,/AppleWebKit\/(\d+)\./,1),e.supportsUnifiedPlan=t.RTCRtpTransceiver&&"currentDirection"in t.RTCRtpTransceiver.prototype;else return e.browser="Not a supported browser.",e;return e}function Wv(t){return Object.prototype.toString.call(t)==="[object Object]"}function fA(t){return Wv(t)?Object.keys(t).reduce(function(e,n){var r=Wv(t[n]),i=r?fA(t[n]):t[n],s=r&&!Object.keys(i).length;return i===void 0||s?e:Object.assign(e,dU({},n,i))},{}):t}function tu(t,e,n){!e||n.has(e.id)||(n.set(e.id,e),Object.keys(e).forEach(function(r){r.endsWith("Id")?tu(t,t.get(e[r]),n):r.endsWith("Ids")&&e[r].forEach(function(i){tu(t,t.get(i),n)})}))}function EU(t,e,n){var r=n?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;var s=[];return t.forEach(function(o){o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(function(o){t.forEach(function(a){a.type===r&&a.trackId===o.id&&tu(t,a,i)})}),i}Object.defineProperty(uA,"__esModule",{value:!0});var TU=uA.shimGetUserMedia=AU,IU=bU(_n);function pA(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(pA=function(r){return r?n:e})(t)}function bU(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||ti(t)!=="object"&&typeof t!="function")return{default:t};var n=pA(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function ti(t){"@babel/helpers - typeof";return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ti(t)}var zv=IU.log;function AU(t,e){var n=t&&t.navigator;if(n.mediaDevices){var r=function(c){if(ti(c)!=="object"||c.mandatory||c.optional)return c;var l={};return Object.keys(c).forEach(function(u){if(!(u==="require"||u==="advanced"||u==="mediaSource")){var h=ti(c[u])==="object"?c[u]:{ideal:c[u]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);var p=function(y,v){return y?y+v.charAt(0).toUpperCase()+v.slice(1):v==="deviceId"?"sourceId":v};if(h.ideal!==void 0){l.optional=l.optional||[];var m={};typeof h.ideal=="number"?(m[p("min",u)]=h.ideal,l.optional.push(m),m={},m[p("max",u)]=h.ideal,l.optional.push(m)):(m[p("",u)]=h.ideal,l.optional.push(m))}h.exact!==void 0&&typeof h.exact!="number"?(l.mandatory=l.mandatory||{},l.mandatory[p("",u)]=h.exact):["min","max"].forEach(function(y){h[y]!==void 0&&(l.mandatory=l.mandatory||{},l.mandatory[p(y,u)]=h[y])})}}),c.advanced&&(l.optional=(l.optional||[]).concat(c.advanced)),l},i=function(c,l){if(e.version>=61)return l(c);if(c=JSON.parse(JSON.stringify(c)),c&&ti(c.audio)==="object"){var u=function(y,v,b){v in y&&!(b in y)&&(y[b]=y[v],delete y[v])};c=JSON.parse(JSON.stringify(c)),u(c.audio,"autoGainControl","googAutoGainControl"),u(c.audio,"noiseSuppression","googNoiseSuppression"),c.audio=r(c.audio)}if(c&&ti(c.video)==="object"){var h=c.video.facingMode;h=h&&(ti(h)==="object"?h:{ideal:h});var p=e.version<66;if(h&&(h.exact==="user"||h.exact==="environment"||h.ideal==="user"||h.ideal==="environment")&&!(n.mediaDevices.getSupportedConstraints&&n.mediaDevices.getSupportedConstraints().facingMode&&!p)){delete c.video.facingMode;var m;if(h.exact==="environment"||h.ideal==="environment"?m=["back","rear"]:(h.exact==="user"||h.ideal==="user")&&(m=["front"]),m)return n.mediaDevices.enumerateDevices().then(function(y){y=y.filter(function(b){return b.kind==="videoinput"});var v=y.find(function(b){return m.some(function(A){return b.label.toLowerCase().includes(A)})});return!v&&y.length&&m.includes("back")&&(v=y[y.length-1]),v&&(c.video.deviceId=h.exact?{exact:v.deviceId}:{ideal:v.deviceId}),c.video=r(c.video),zv("chrome: "+JSON.stringify(c)),l(c)})}c.video=r(c.video)}return zv("chrome: "+JSON.stringify(c)),l(c)},s=function(c){return e.version>=64?c:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[c.name]||c.name,message:c.message,constraint:c.constraint||c.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}},o=function(c,l,u){i(c,function(h){n.webkitGetUserMedia(h,l,function(p){u&&u(s(p))})})};if(n.getUserMedia=o.bind(n),n.mediaDevices.getUserMedia){var a=n.mediaDevices.getUserMedia.bind(n.mediaDevices);n.mediaDevices.getUserMedia=function(c){return i(c,function(l){return a(l).then(function(u){if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(function(h){h.stop()}),new DOMException("","NotFoundError");return u},function(u){return Promise.reject(s(u))})})}}}}var mA={};Object.defineProperty(mA,"__esModule",{value:!0});var CU=mA.shimGetUserMedia=PU,RU=SU(_n);function gA(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(gA=function(r){return r?n:e})(t)}function SU(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||js(t)!=="object"&&typeof t!="function")return{default:t};var n=gA(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function js(t){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},js(t)}function PU(t,e){var n=t&&t.navigator,r=t&&t.MediaStreamTrack;if(n.getUserMedia=function(c,l,u){RU.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),n.mediaDevices.getUserMedia(c).then(l,u)},!(e.version>55&&"autoGainControl"in n.mediaDevices.getSupportedConstraints())){var i=function(c,l,u){l in c&&!(u in c)&&(c[u]=c[l],delete c[l])},s=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(c){return js(c)==="object"&&js(c.audio)==="object"&&(c=JSON.parse(JSON.stringify(c)),i(c.audio,"autoGainControl","mozAutoGainControl"),i(c.audio,"noiseSuppression","mozNoiseSuppression")),s(c)},r&&r.prototype.getSettings){var o=r.prototype.getSettings;r.prototype.getSettings=function(){var c=o.apply(this,arguments);return i(c,"mozAutoGainControl","autoGainControl"),i(c,"mozNoiseSuppression","noiseSuppression"),c}}if(r&&r.prototype.applyConstraints){var a=r.prototype.applyConstraints;r.prototype.applyConstraints=function(c){return this.kind==="audio"&&js(c)==="object"&&(c=JSON.parse(JSON.stringify(c)),i(c,"autoGainControl","mozAutoGainControl"),i(c,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[c])}}}}var mr={};Object.defineProperty(mr,"__esModule",{value:!0});mr.shimAudioContext=$U;mr.shimCallbacksAPI=MU;mr.shimConstraints=vA;mr.shimCreateOfferLegacy=FU;var kU=mr.shimGetUserMedia=xU;mr.shimLocalStreamsAPI=OU;mr.shimRTCIceServerUrls=LU;mr.shimRemoteStreamsAPI=DU;mr.shimTrackEventTransceiver=VU;var _A=NU(_n);function yA(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(yA=function(r){return r?n:e})(t)}function NU(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||Ai(t)!=="object"&&typeof t!="function")return{default:t};var n=yA(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function Ai(t){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ai(t)}function OU(t){if(!(Ai(t)!=="object"||!t.RTCPeerConnection)){if("getLocalStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in t.RTCPeerConnection.prototype)){var e=t.RTCPeerConnection.prototype.addTrack;t.RTCPeerConnection.prototype.addStream=function(n){var r=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(function(i){return e.call(r,i,n)}),n.getVideoTracks().forEach(function(i){return e.call(r,i,n)})},t.RTCPeerConnection.prototype.addTrack=function(n){for(var r=this,i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return s&&s.forEach(function(a){r._localStreams?r._localStreams.includes(a)||r._localStreams.push(a):r._localStreams=[a]}),e.apply(this,arguments)}}"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(n){var r=this;this._localStreams||(this._localStreams=[]);var i=this._localStreams.indexOf(n);if(i!==-1){this._localStreams.splice(i,1);var s=n.getTracks();this.getSenders().forEach(function(o){s.includes(o.track)&&r.removeTrack(o)})}})}}function DU(t){if(!(Ai(t)!=="object"||!t.RTCPeerConnection)&&("getRemoteStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in t.RTCPeerConnection.prototype))){Object.defineProperty(t.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(n){var r=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=n),this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(function(s){if(r._remoteStreams||(r._remoteStreams=[]),!r._remoteStreams.includes(s)){r._remoteStreams.push(s);var o=new Event("addstream");o.stream=s,r.dispatchEvent(o)}})})}});var e=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){var n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(function(i){if(n._remoteStreams||(n._remoteStreams=[]),!(n._remoteStreams.indexOf(i)>=0)){n._remoteStreams.push(i);var s=new Event("addstream");s.stream=i,n.dispatchEvent(s)}})}),e.apply(n,arguments)}}}function MU(t){if(!(Ai(t)!=="object"||!t.RTCPeerConnection)){var e=t.RTCPeerConnection.prototype,n=e.createOffer,r=e.createAnswer,i=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(c,l){var u=arguments.length>=2?arguments[2]:arguments[0],h=n.apply(this,[u]);return l?(h.then(c,l),Promise.resolve()):h},e.createAnswer=function(c,l){var u=arguments.length>=2?arguments[2]:arguments[0],h=r.apply(this,[u]);return l?(h.then(c,l),Promise.resolve()):h};var a=function(c,l,u){var h=i.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h};e.setLocalDescription=a,a=function(c,l,u){var h=s.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.setRemoteDescription=a,a=function(c,l,u){var h=o.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.addIceCandidate=a}}function xU(t){var e=t&&t.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){var n=e.mediaDevices,r=n.getUserMedia.bind(n);e.mediaDevices.getUserMedia=function(i){return r(vA(i))}}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(i,s,o){e.mediaDevices.getUserMedia(i).then(s,o)}).bind(e))}function vA(t){return t&&t.video!==void 0?Object.assign({},t,{video:_A.compactObject(t.video)}):t}function LU(t){if(t.RTCPeerConnection){var e=t.RTCPeerConnection;t.RTCPeerConnection=function(n,r){if(n&&n.iceServers){for(var i=[],s=0;s<n.iceServers.length;s++){var o=n.iceServers[s];o.urls===void 0&&o.url?(_A.deprecated("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,i.push(o)):i.push(n.iceServers[s])}n.iceServers=i}return new e(n,r)},t.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(t.RTCPeerConnection,"generateCertificate",{get:function(){return e.generateCertificate}})}}function VU(t){Ai(t)==="object"&&t.RTCTrackEvent&&"receiver"in t.RTCTrackEvent.prototype&&!("transceiver"in t.RTCTrackEvent.prototype)&&Object.defineProperty(t.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function FU(t){var e=t.RTCPeerConnection.prototype.createOffer;t.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);var r=this.getTransceivers().find(function(s){return s.receiver.track.kind==="audio"});n.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);var i=this.getTransceivers().find(function(s){return s.receiver.track.kind==="video"});n.offerToReceiveVideo===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveVideo===!0&&!i&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function $U(t){Ai(t)!=="object"||t.AudioContext||(t.AudioContext=t.webkitAudioContext)}const UU=t=>{let e=!1,n;return(...r)=>(e||(n=t(r),e=!0),n)};function Ar(t,e){if(t===!1)throw new Error(e??"assertion failure")}const BU=UU(()=>{const t=hU(window);switch(t.browser){case"chrome":TU(window,t);break;case"firefox":CU(window,t);break;case"safari":kU(window,t);break;default:throw new cA}});let Pr={isActive:!1};function Pd(){if(Pr.isActive){Pr.videoEl.src="",Pr.videoEl.srcObject=null,Pr.videoEl.load();for(const t of Pr.stream.getTracks())Pr.stream.removeTrack(t),t.stop();Pr={isActive:!1}}}async function jU(t,{constraints:e,torch:n}){var r,i;if(window.isSecureContext!==!0)throw new sU;if(((r=navigator==null?void 0:navigator.mediaDevices)==null?void 0:r.getUserMedia)===void 0)throw new cA;BU();const s=await navigator.mediaDevices.getUserMedia({audio:!1,video:e});if(t.srcObject!==void 0?t.srcObject=s:t.mozSrcObject!==void 0?t.mozSrcObject=s:window.URL.createObjectURL?t.src=window.URL.createObjectURL(s):window.webkitURL?t.src=window.webkitURL.createObjectURL(s):t.src=s.id,await Promise.race([aA(t,"loadeddata"),Hv(3e3).then(()=>{throw new oU})]),await Hv(500),n){const[a]=s.getVideoTracks();a.getCapabilities().torch?a.applyConstraints({advanced:[{torch:!0}]}):console.warn("device does not support torch capability")}Pr={videoEl:t,stream:s,isActive:!0};const[o]=Pr.stream.getVideoTracks();return((i=o==null?void 0:o.getCapabilities)==null?void 0:i.call(o))??{}}const HU={class:"qrcode-stream-wrapper"},WU={class:"qrcode-stream-overlay"},zU=fr({__name:"QrcodeStream",props:{constraints:{type:Object,default(){return{facingMode:"environment"}}},formats:{type:Array,default:()=>["qr_code"]},paused:{type:Boolean,default:!1},torch:{type:Boolean,default:!1},track:{type:Function}},emits:["detect","camera-on","camera-off","error"],setup(t,{emit:e}){const n=t,r=Wt(),i=Wt(),s=Wt(),o=Wt(!1),a=Wt(!1);Hp(()=>{a.value=!0}),Wp(()=>{Pd()});const c=qt(()=>({torch:n.torch,constraints:n.constraints,shouldStream:a.value&&!n.paused}));fi(c,async m=>{const y=s.value;Ar(y!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus video element should always be defined.");const v=r.value;Ar(v!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus canvas should always be defined.");const b=v.getContext("2d");if(Ar(b!==null,"if cavnas is defined, canvas 2d context should also be non-null"),m.shouldStream)try{const A=await jU(y,m);a.value?(o.value=!0,e("camera-on",A)):Pd()}catch(A){e("error",A)}else v.width=y.videoWidth,v.height=y.videoHeight,b.drawImage(y,0,0,y.videoWidth,y.videoHeight),Pd(),o.value=!1,e("camera-off")},{deep:!0});const{formats:l}=F1(n);fi(l,m=>{a.value&&aU(m)});const u=qt(()=>c.value.shouldStream&&o.value);fi(u,m=>{if(m){Ar(r.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus pause frame canvas is defined"),h(r.value),Ar(i.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus tracking canvas is defined"),h(i.value);const y=()=>n.track===void 0?500:40;Ar(s.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus video element is defined"),cU(s.value,{detectHandler:v=>e("detect",v),formats:n.formats,locateHandler:p,minDelay:y()})}});const h=m=>{const y=m.getContext("2d");Ar(y!==null,"canvas 2d context should always be non-null"),y.clearRect(0,0,m.width,m.height)},p=m=>{const y=i.value;Ar(y!==void 0,"onLocate handler should only be called when component is mounted. Thus tracking canvas is always defined.");const v=s.value;if(Ar(v!==void 0,"onLocate handler should only be called when component is mounted. Thus video element is always defined."),m.length===0||n.track===void 0)h(y);else{const b=v.offsetWidth,A=v.offsetHeight,k=v.videoWidth,N=v.videoHeight,P=Math.max(b/k,A/N),j=k*P,W=N*P,oe=j/k,me=W/N,He=(b-j)/2,Ce=(A-W)/2,st=({x:tn,y:Ue})=>({x:Math.floor(tn*oe),y:Math.floor(Ue*me)}),kt=({x:tn,y:Ue})=>({x:Math.floor(tn+He),y:Math.floor(Ue+Ce)}),qe=m.map(tn=>{const{boundingBox:Ue,cornerPoints:Le}=tn,{x:Ee,y:yn}=kt(st({x:Ue.x,y:Ue.y})),{x:mt,y:gt}=st({x:Ue.width,y:Ue.height});return{...tn,cornerPoints:Le.map(_t=>kt(st(_t))),boundingBox:DOMRectReadOnly.fromRect({x:Ee,y:yn,width:mt,height:gt})}});y.width=v.offsetWidth,y.height=v.offsetHeight;const vr=y.getContext("2d");n.track(qe,vr)}};return(m,y)=>(fn(),Fr("div",HU,[ai("video",{ref_key:"videoRef",ref:s,class:Ru([{"qrcode-stream-camera--hidden":!u.value},"qrcode-stream-camera"]),autoplay:"",muted:"",playsinline:""},null,2),nk(ai("canvas",{ref_key:"pauseFrameRef",ref:r,class:"qrcode-stream-camera"},null,512),[[pN,!u.value]]),ai("canvas",{ref_key:"trackingLayerRef",ref:i,class:"qrcode-stream-overlay"},null,512),ai("div",WU,[e0(m.$slots,"default",{},void 0,!0)])]))}}),qU=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},wA=qU(zU,[["__scopeId","data-v-dfa4038c"]]),KU=fr({__name:"QrcodeCapture",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect"],setup(t,{emit:e}){const n=t,r=i=>{if(!(!(i.target instanceof HTMLInputElement)||!i.target.files))for(const s of Array.from(i.target.files))lA(s,n.formats).then(o=>{e("detect",o)})};return(i,s)=>(fn(),Fr("input",{onChange:r,type:"file",name:"image",accept:"image/*",capture:"environment",multiple:""},null,32))}}),GU=["onDrop"],QU=fr({__name:"QrcodeDropZone",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect","dragover","error"],setup(t,{emit:e}){const n=t,r=async o=>{try{const a=await o;e("detect",a)}catch(a){e("error",a)}},i=o=>{e("dragover",o)},s=({dataTransfer:o})=>{if(!o)return;i(!1);const a=[...Array.from(o.files)],c=o.getData("text/uri-list");a.forEach(l=>{r(lA(l))}),c!==""&&r(uU(c,n.formats))};return(o,a)=>(fn(),Fr("div",{onDrop:zc(s,["prevent","stop"]),onDragenter:a[0]||(a[0]=zc(c=>i(!0),["prevent","stop"])),onDragleave:a[1]||(a[1]=zc(c=>i(!1),["prevent","stop"])),onDragover:a[2]||(a[2]=zc(()=>{},["prevent","stop"]))},[e0(o.$slots,"default")],40,GU))}});function YU(t){t.component("qrcode-stream",wA),t.component("qrcode-capture",KU),t.component("qrcode-drop-zone",QU)}const JU={install:YU};let nu=null;typeof window<"u"?nu=window.Vue:typeof global<"u"&&(nu=global.Vue);nu&&nu.use(JU);const XU={class:"qrScanner"},ZU=fr({__name:"ScanQr",emits:["codeFound"],setup(t,{emit:e}){const n=Wt(!0);Wt();function r(s){s.length>=1&&e("codeFound",s[0].rawValue)}function i(){n.value=!1}return(s,o)=>(fn(),Fr("div",XU,[Gt(Nt(wA),{onDetect:r,constraints:{facingMode:"environment"},onCameraOn:i},{default:KE(()=>[n.value?(fn(),Fr("div",{key:0,class:"loading-indicator","on:cameraOn":i},"Caricamento...",32)):d0("",!0)]),_:1})]))}});function hg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ln(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}function qv(t){return t!==void 0&&t.enterprise!==void 0}class e4{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function EA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const t4=EA,TA=new Si("auth","Firebase",EA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=new Io("@firebase/auth");function n4(t,...e){ru.logLevel<=Ne.WARN&&ru.warn(`Auth (${Pi}): ${t}`,...e)}function yl(t,...e){ru.logLevel<=Ne.ERROR&&ru.error(`Auth (${Pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,...e){throw dg(t,...e)}function ar(t,...e){return dg(t,...e)}function IA(t,e,n){const r=Object.assign(Object.assign({},t4()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function bA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&On(t,"argument-error"),IA(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return TA.create(t,...e)}function ue(t,e,...n){if(!t)throw dg(e,...n)}function Nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yl(e),new Error(e)}function Hr(t,e){t||Nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function r4(){return Kv()==="http:"||Kv()==="https:"}function Kv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(r4()||X0()||"connection"in navigator)?navigator.onLine:!0}function s4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hr(n>e,"Short delay should be less than long delay!"),this.isMobile=rm()||Z0()}get(){return i4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t,e){Hr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=new Ec(3e4,6e4);function vs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oi(t,e,n,r,i={}){return CA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=To(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),AA.fetch()(RA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function CA(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},o4),e);try{const i=new c4(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw nl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw nl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw nl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw nl(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw IA(t,u,l);On(t,u)}}catch(i){if(i instanceof Mn)throw i;On(t,"network-request-failed",{message:String(i)})}}async function Tc(t,e,n,r,i={}){const s=await Oi(t,e,n,r,i);return"mfaPendingCredential"in s&&On(t,"multi-factor-auth-required",{_serverResponse:s}),s}function RA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?fg(t.config,i):`${t.config.apiScheme}://${i}`}class c4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ar(this.auth,"network-request-failed")),a4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ar(t,e,r);return i.customData._tokenResponse=n,i}async function l4(t,e){return Oi(t,"GET","/v2/recaptchaConfig",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u4(t,e){return Oi(t,"POST","/v1/accounts:delete",e)}async function h4(t,e){return Oi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function d4(t,e=!1){const n=an(t),r=await n.getIdToken(e),i=pg(r);ue(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wa(kd(i.auth_time)),issuedAtTime:wa(kd(i.iat)),expirationTime:wa(kd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kd(t){return Number(t)*1e3}function pg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yl("JWT malformed, contained fewer than 3 sections"),null;try{const i=xl(n);return i?JSON.parse(i):(yl("Failed to decode base64 JWT payload"),null)}catch(i){return yl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function f4(t){const e=pg(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&p4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function p4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wa(this.lastLoginAt),this.creationTime=wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function iu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await fo(t,h4(n,{idToken:r}));ue(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?y4(s.providerUserInfo):[],a=_4(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new SA(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function g4(t){const e=an(t);await iu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function y4(t){return t.map(e=>{var{providerId:n}=e,r=hg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v4(t,e){const n=await CA(t,{},async()=>{const r=To({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=RA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",AA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):f4(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ue(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await v4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ja;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ue(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ue(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ja,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=hg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new m4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new SA(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fo(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return d4(this,e)}reload(){return g4(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await iu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fo(this,u4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:P,isAnonymous:j,providerData:W,stsTokenManager:oe}=n;ue(N&&oe,e,"internal-error");const me=Ja.fromJSON(this.name,oe);ue(typeof N=="string",e,"internal-error"),Xr(h,e.name),Xr(p,e.name),ue(typeof P=="boolean",e,"internal-error"),ue(typeof j=="boolean",e,"internal-error"),Xr(m,e.name),Xr(y,e.name),Xr(v,e.name),Xr(b,e.name),Xr(A,e.name),Xr(k,e.name);const He=new Zi({uid:N,auth:e,email:p,emailVerified:P,displayName:h,isAnonymous:j,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:me,createdAt:A,lastLoginAt:k});return W&&Array.isArray(W)&&(He.providerData=W.map(Ce=>Object.assign({},Ce))),b&&(He._redirectEventId=b),He}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ja;i.updateFromServerResponse(n);const s=new Zi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await iu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=new Map;function Or(t){Hr(t instanceof Function,"Expected a class definition");let e=Gv.get(t);return e?(Hr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gv.set(t,e),e)}/**
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
 */class PA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}PA.type="NONE";const Qv=PA;/**
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
 */function vl(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vl(this.userKey,i.apiKey,s),this.fullPersistenceKey=vl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hs(Or(Qv),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Or(Qv);const o=vl(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Zi._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Hs(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Hs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(OA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(MA(e))return"Blackberry";if(xA(e))return"Webos";if(mg(e))return"Safari";if((e.includes("chrome/")||NA(e))&&!e.includes("edge/"))return"Chrome";if(DA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kA(t=Zt()){return/firefox\//i.test(t)}function mg(t=Zt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NA(t=Zt()){return/crios\//i.test(t)}function OA(t=Zt()){return/iemobile/i.test(t)}function DA(t=Zt()){return/android/i.test(t)}function MA(t=Zt()){return/blackberry/i.test(t)}function xA(t=Zt()){return/webos/i.test(t)}function Th(t=Zt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function w4(t=Zt()){var e;return Th(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function E4(){return PD()&&document.documentMode===10}function LA(t=Zt()){return Th(t)||DA(t)||xA(t)||MA(t)||/windows phone/i.test(t)||OA(t)}function T4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t,e=[]){let n;switch(t){case"Browser":n=Yv(Zt());break;case"Worker":n=`${Yv(Zt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${r}`}/**
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
 */class I4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function b4(t,e={}){return Oi(t,"GET","/v2/passwordPolicy",vs(t,e))}/**
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
 */const A4=6;class C4{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:A4,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jv(this),this.idTokenSubscription=new Jv(this),this.beforeStateQueue=new I4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await iu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=s4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?an(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await b4(this),n=new C4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Or(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[Or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&n4(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gr(t){return an(t)}class Jv{constructor(e){this.auth=e,this.observer=null,this.addObserver=VD(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function FA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ar("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",S4().appendChild(r)})}function P4(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const k4="https://www.google.com/recaptcha/enterprise.js?render=",N4="recaptcha-enterprise",O4="NO_RECAPTCHA";class D4{constructor(e){this.type=N4,this.auth=gr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{l4(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new e4(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;qv(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(O4)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&qv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}FA(k4+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function su(t,e,n,r=!1){const i=new D4(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M4(t,e){const n=sc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vl(s,e??{}))return i;On(i,"already-initialized")}return n.initialize({options:e})}function x4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function L4(t,e,n){const r=gr(t);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=$A(e),{host:o,port:a}=V4(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||F4()}function $A(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function V4(t){const e=$A(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xv(o)}}}function Xv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function F4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nr("not implemented")}_getIdTokenResponse(e){return Nr("not implemented")}_linkToIdToken(e,n){return Nr("not implemented")}_getReauthenticationResolver(e){return Nr("not implemented")}}async function $4(t,e){return Oi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nd(t,e){return Tc(t,"POST","/v1/accounts:signInWithPassword",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U4(t,e){return Tc(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}async function B4(t,e){return Tc(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends gg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await su(e,r,"signInWithPassword");return Nd(e,i)}else return Nd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await su(e,r,"signInWithPassword");return Nd(e,s)}else return Promise.reject(i)});case"emailLink":return U4(e,{email:this._email,oobCode:this._password});default:On(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return $4(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return B4(e,{idToken:n,email:this._email,oobCode:this._password});default:On(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t,e){return Tc(t,"POST","/v1/accounts:signInWithIdp",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j4="http://localhost";class cs extends gg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=hg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ws(e,n)}buildRequest(){const e={requestUri:j4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=To(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H4(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function W4(t){const e=Xo(Zo(t)).link,n=e?Xo(Zo(e)).deep_link_id:null,r=Xo(Zo(t)).deep_link_id;return(r?Xo(Zo(r)).link:null)||r||n||e||t}class _g{constructor(e){var n,r,i,s,o,a;const c=Xo(Zo(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=H4((i=c.mode)!==null&&i!==void 0?i:null);ue(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=W4(e);try{return new _g(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.providerId=ko.PROVIDER_ID}static credential(e,n){return Xa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_g.parseLink(n);return ue(r,"argument-error"),Xa._fromEmailAndCode(e,r.code,r.tenantId)}}ko.PROVIDER_ID="password";ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ic extends Ih{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Ic{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";ni.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Ic{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cs._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ri.credential(n,r)}catch{return null}}}ri.GOOGLE_SIGN_IN_METHOD="google.com";ri.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Ic{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.GITHUB_SIGN_IN_METHOD="github.com";ii.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Ic{constructor(){super("twitter.com")}static credential(e,n){return cs._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return si.credential(n,r)}catch{return null}}}si.TWITTER_SIGN_IN_METHOD="twitter.com";si.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Od(t,e){return Tc(t,"POST","/v1/accounts:signUp",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zi._fromIdTokenResponse(e,r,i),o=Zv(r);return new ls({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zv(r);return new ls({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends Mn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ou.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ou(e,n,r,i)}}function UA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ou._fromErrorAndOperation(t,s,e,r):s})}async function z4(t,e,n=!1){const r=await fo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",r)}/**
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
 */async function q4(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await fo(t,UA(r,i,e,t),n);ue(s.idToken,r,"internal-error");const o=pg(s.idToken);ue(o,r,"internal-error");const{sub:a}=o;return ue(t.uid===a,r,"user-mismatch"),ls._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&On(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e,n=!1){const r="signIn",i=await UA(t,r,e),s=await ls._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function K4(t,e){return BA(gr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t){const e=gr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hW(t,e,n){var r;const i=gr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await su(i,s,"signUpPassword");o=Od(i,l)}else o=Od(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await su(i,s,"signUpPassword");return Od(i,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&jA(t),l}),c=await ls._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function dW(t,e,n){return K4(an(t),ko.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jA(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G4(t,e){return Oi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fW(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=an(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await fo(r,G4(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function HA(t,e,n,r){return an(t).onIdTokenChanged(e,n,r)}function Q4(t,e,n){return an(t).beforeAuthStateChanged(e,n)}const au="__sak";/**
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
 */class WA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(au,"1"),this.storage.removeItem(au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y4(){const t=Zt();return mg(t)||Th(t)}const J4=1e3,X4=10;class zA extends WA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Y4()&&T4(),this.fallbackToPolling=LA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);E4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,X4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},J4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zA.type="LOCAL";const Z4=zA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA extends WA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qA.type="SESSION";const KA=qA;/**
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
 */function eB(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await eB(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tB{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=yg("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return window}function nB(t){cr().location.href=t}/**
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
 */function GA(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function rB(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iB(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sB(){return GA()?self:null}/**
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
 */const QA="firebaseLocalStorageDb",oB=1,cu="firebaseLocalStorage",YA="fbase_key";class bc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ah(t,e){return t.transaction([cu],e?"readwrite":"readonly").objectStore(cu)}function aB(){const t=indexedDB.deleteDatabase(QA);return new bc(t).toPromise()}function Xf(){const t=indexedDB.open(QA,oB);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cu,{keyPath:YA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cu)?e(r):(r.close(),await aB(),e(await Xf()))})})}async function ew(t,e,n){const r=Ah(t,!0).put({[YA]:e,value:n});return new bc(r).toPromise()}async function cB(t,e){const n=Ah(t,!1).get(e),r=await new bc(n).toPromise();return r===void 0?null:r.value}function tw(t,e){const n=Ah(t,!0).delete(e);return new bc(n).toPromise()}const lB=800,uB=3;class JA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uB)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bh._getInstance(sB()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rB(),!this.activeServiceWorker)return;this.sender=new tB(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iB()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xf();return await ew(e,au,"1"),await tw(e,au),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ew(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cB(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ah(i,!1).getAll();return new bc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lB)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JA.type="LOCAL";const hB=JA;new Ec(3e4,6e4);/**
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
 */function vg(t,e){return e?Or(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wg extends gg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dB(t){return BA(t.auth,new wg(t),t.bypassAuthState)}function fB(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),q4(n,new wg(t),t.bypassAuthState)}async function pB(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),z4(n,new wg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dB;case"linkViaPopup":case"linkViaRedirect":return pB;case"reauthViaPopup":case"reauthViaRedirect":return fB;default:On(this.auth,"internal-error")}}resolve(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mB=new Ec(2e3,1e4);async function pW(t,e,n){const r=gr(t);bA(t,e,Ih);const i=vg(r,n);return new Ki(r,"signInViaPopup",e,i).executeNotNull()}class Ki extends XA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ki.currentPopupAction&&Ki.currentPopupAction.cancel(),Ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Hr(this.filter.length===1,"Popup operations only handle one event");const e=yg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mB.get())};e()}}Ki.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gB="pendingRedirect",wl=new Map;class _B extends XA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wl.get(this.auth._key());if(!e){try{const r=await yB(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wl.set(this.auth._key(),e)}return this.bypassAuthState||wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yB(t,e){const n=eC(e),r=ZA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function vB(t,e){return ZA(t)._set(eC(e),"true")}function wB(t,e){wl.set(t._key(),e)}function ZA(t){return Or(t._redirectPersistence)}function eC(t){return vl(gB,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mW(t,e,n){return EB(t,e,n)}async function EB(t,e,n){const r=gr(t);bA(t,e,Ih),await r._initializationPromise;const i=vg(r,n);return await vB(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function gW(t,e){return await gr(t)._initializationPromise,tC(t,e,!1)}async function tC(t,e,n=!1){const r=gr(t),i=vg(r,e),o=await new _B(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TB=10*60*1e3;class IB{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bB(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ar(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TB&&this.cachedEventUids.clear(),this.cachedEventUids.has(nw(e))}saveEventToCache(e){this.cachedEventUids.add(nw(e)),this.lastProcessedEventTime=Date.now()}}function nw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bB(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AB(t,e={}){return Oi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CB=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RB=/^https?/;async function SB(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AB(t);for(const n of e)try{if(PB(n))return}catch{}On(t,"unauthorized-domain")}function PB(t){const e=Jf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RB.test(n))return!1;if(CB.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const kB=new Ec(3e4,6e4);function rw(){const t=cr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NB(t){return new Promise((e,n)=>{var r,i,s;function o(){rw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rw(),n(ar(t,"network-request-failed"))},timeout:kB.get()})}if(!((i=(r=cr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cr().gapi)===null||s===void 0)&&s.load)o();else{const a=P4("iframefcb");return cr()[a]=()=>{gapi.load?o():n(ar(t,"network-request-failed"))},FA(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw El=null,e})}let El=null;function OB(t){return El=El||NB(t),El}/**
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
 */const DB=new Ec(5e3,15e3),MB="__/auth/iframe",xB="emulator/auth/iframe",LB={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FB(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fg(e,xB):`https://${t.config.authDomain}/${MB}`,r={apiKey:e.apiKey,appName:t.name,v:Pi},i=VB.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${To(r).slice(1)}`}async function $B(t){const e=await OB(t),n=cr().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:FB(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LB,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ar(t,"network-request-failed"),a=cr().setTimeout(()=>{s(o)},DB.get());function c(){cr().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const UB={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BB=500,jB=600,HB="_blank",WB="http://localhost";class iw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zB(t,e,n,r=BB,i=jB){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},UB),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Zt().toLowerCase();n&&(a=NA(l)?HB:n),kA(l)&&(e=e||WB,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(w4(l)&&a!=="_self")return qB(e||"",a),new iw(null);const h=window.open(e||"",a,u);ue(h,t,"popup-blocked");try{h.focus()}catch{}return new iw(h)}function qB(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const KB="__/auth/handler",GB="emulator/auth/handler",QB=encodeURIComponent("fac");async function sw(t,e,n,r,i,s){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pi,eventId:i};if(e instanceof Ih){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Ic){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${QB}=${encodeURIComponent(c)}`:"";return`${YB(t)}?${To(a).slice(1)}${l}`}function YB({config:t}){return t.emulator?fg(t,GB):`https://${t.authDomain}/${KB}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="webStorageSupport";class JB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KA,this._completeRedirectFn=tC,this._overrideRedirectResult=wB}async _openPopup(e,n,r,i){var s;Hr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sw(e,n,r,Jf(),i);return zB(e,o,yg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await sw(e,n,r,Jf(),i);return nB(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $B(e),r=new IB(e);return n.register("authEvent",i=>(ue(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dd,{type:Dd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dd];o!==void 0&&n(!!o),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SB(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return LA()||mg()||Th()}}const XB=JB;var ow="@firebase/auth",aw="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZB{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ej(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tj(t){gn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VA(t)},l=new R4(r,i,s,c);return x4(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gn(new cn("auth-internal",e=>{const n=gr(e.getProvider("auth").getImmediate());return(r=>new ZB(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(ow,aw,ej(t)),xt(ow,aw,"esm2017")}/**
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
 */const nj=5*60,rj=J0("authIdTokenMaxAge")||nj;let cw=null;const ij=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rj)return;const i=n==null?void 0:n.token;cw!==i&&(cw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rC(t=om()){const e=sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=M4(t,{popupRedirectResolver:XB,persistence:[hB,Z4,KA]}),r=J0("authTokenSyncURL");if(r){const s=ij(r);Q4(n,s,()=>s(n.currentUser)),HA(n,o=>s(o))}const i=Q0("auth");return i&&L4(n,`http://${i}`),n}tj("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sj=new Map,oj={activated:!1,tokenObservers:[]};function Qn(t){return sj.get(t)||Object.assign({},oj)}const lw={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e,n,r,i,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Da,await cj(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Da,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function cj(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lj={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},lu=new Si("appCheck","AppCheck",lj);function iC(t){if(!Qn(t).activated)throw lu.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uj="firebase-app-check-database",hj=1,Zf="firebase-app-check-store";let rl=null;function dj(){return rl||(rl=new Promise((t,e)=>{try{const n=indexedDB.open(uj,hj);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var i;e(lu.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Zf,{keyPath:"compositeKey"})}}}catch(n){e(lu.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),rl)}function fj(t,e){return pj(mj(t),e)}async function pj(t,e){const r=(await dj()).transaction(Zf,"readwrite"),s=r.objectStore(Zf).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=c=>{o()},r.onerror=c=>{var l;a(lu.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function mj(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new Io("@firebase/app-check");function uw(t,e){return im()?fj(t,e).catch(n=>{ep.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gj={error:"UNKNOWN_ERROR"};function _j(t){return ju.encodeString(JSON.stringify(t),!1)}async function tp(t,e=!1){const n=t.app;iC(n);const r=Qn(n);let i=r.token,s;if(i&&!oa(i)&&(r.token=void 0,i=void 0),!i){const c=await r.cachedTokenPromise;c&&(oa(c)?i=c:await uw(n,void 0))}if(!e&&i&&oa(i))return{token:i.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await Qn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?ep.warn(c.message):ep.error(c),s=c}let a;return i?s?oa(i)?a={token:i.token,internalError:s}:a=dw(s):(a={token:i.token},r.token=i,await uw(n,i)):a=dw(s),o&&Ej(n,a),a}async function yj(t){const e=t.app;iC(e);const{provider:n}=Qn(e);{const{token:r}=await n.getToken();return{token:r}}}function vj(t,e,n,r){const{app:i}=t,s=Qn(i),o={next:n,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&oa(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),hw(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>hw(t))}function sC(t,e){const n=Qn(t),r=n.tokenObservers.filter(i=>i.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function hw(t){const{app:e}=t,n=Qn(e);let r=n.tokenRefresher;r||(r=wj(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function wj(t){const{app:e}=t;return new aj(async()=>{const n=Qn(e);let r;if(n.token?r=await tp(t,!0):r=await tp(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Qn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},lw.RETRIAL_MIN_WAIT,lw.RETRIAL_MAX_WAIT)}function Ej(t,e){const n=Qn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function oa(t){return t.expireTimeMillis-Date.now()>0}function dw(t){return{token:_j(gj),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tj{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Qn(this.app);for(const n of e)sC(this.app,n.next);return Promise.resolve()}}function Ij(t,e){return new Tj(t,e)}function bj(t){return{getToken:e=>tp(t,e),getLimitedUseToken:()=>yj(t),addTokenListener:e=>vj(t,"INTERNAL",e),removeTokenListener:e=>sC(t.app,e)}}const Aj="@firebase/app-check",Cj="0.8.0",Rj="app-check",fw="app-check-internal";function Sj(){gn(new cn(Rj,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Ij(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(fw).initialize()})),gn(new cn(fw,t=>{const e=t.getProvider("app-check").getImmediate();return bj(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),xt(Aj,Cj)}Sj();const oC=Symbol("firebaseApp");function Ac(t){return f0()&&zn(oC,null)||om(t)}const rr=()=>{},Pj=typeof window<"u";function Eg(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function kj(t,e,n){const r=(""+e).split("."),i=r.pop(),s=r.reduce((o,a)=>o&&o[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(i),1,n):s[i]=n}function ws(t){return!!t&&typeof t=="object"}const Nj=Object.prototype;function Oj(t){return ws(t)&&Object.getPrototypeOf(t)===Nj}function Tg(t){return ws(t)&&t.type==="document"}function Dj(t){return ws(t)&&t.type==="collection"}function Mj(t){return Tg(t)||Dj(t)}function xj(t){return ws(t)&&t.type==="query"}function Lj(t){return ws(t)&&"ref"in t}function Vj(t){return ws(t)&&typeof t.bucket=="string"}function Fj(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const $j=Symbol.for("v-scx");function Uj(){return!!zn($j,0)}const il=new WeakMap;function Bj(t,e){if(!il.has(t)){const n=EE(!0);il.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),il.delete(t)}}return il.get(t)}const aC=new WeakMap;function jj(t){return aC.get(Ac(t))}const sl=new WeakMap;function cC(t){const e=Ac(t);if(!sl.has(e)){let n;const i=[new Promise(s=>{n=s}),s=>{sl.set(e,s),n(s.value)}];sl.set(e,i)}return sl.get(e)}function Hj(t){const e=cC(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function Wj(t,e){const n=rC(e);HA(n,r=>{const i=cC();t.value=r,Array.isArray(i)&&i[1](t)})}const pw="@firebase/database",mw="1.0.1";/**
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
 */let lC="";function zj(t){lC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qj{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Dt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ma(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kj{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new qj(e)}}catch{}return new Kj},Gi=uC("localStorage"),np=uC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Io("@firebase/database"),Gj=function(){let t=1;return function(){return t++}}(),hC=function(t){const e=BD(t),n=new LD;n.update(e);const r=n.digest();return ju.encodeByteArray(r)},Cc=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Cc.apply(null,r):typeof r=="object"?e+=Dt(r):e+=r,e+=" "}return e};let es=null,gw=!0;const Qj=function(t,e){K(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(zs.logLevel=Ne.VERBOSE,es=zs.log.bind(zs),e&&np.set("logging_enabled",!0)):typeof t=="function"?es=t:(es=null,np.remove("logging_enabled"))},jt=function(...t){if(gw===!0&&(gw=!1,es===null&&np.get("logging_enabled")===!0&&Qj(!0)),es){const e=Cc.apply(null,t);es(e)}},Rc=function(t){return function(...e){jt(t,...e)}},rp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Cc(...t);zs.error(e)},us=function(...t){const e=`FIREBASE FATAL ERROR: ${Cc(...t)}`;throw zs.error(e),new Error(e)},Tn=function(...t){const e="FIREBASE WARNING: "+Cc(...t);zs.warn(e)},Yj=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Tn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Jj=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},po="[MIN_NAME]",hs="[MAX_NAME]",No=function(t,e){if(t===e)return 0;if(t===po||e===hs)return-1;if(e===po||t===hs)return 1;{const n=_w(t),r=_w(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Xj=function(t,e){return t===e?0:t<e?-1:1},zo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Dt(e))},Ig=function(t){if(typeof t!="object"||t===null)return Dt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Dt(e[r]),n+=":",n+=Ig(t[e[r]]);return n+="}",n},fC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Dn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pC=function(t){K(!dC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,c;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let p=parseInt(u.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),h=h+p}return h.toLowerCase()},Zj=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},e6=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},t6=new RegExp("^-?(0*)\\d{1,10}$"),n6=-2147483648,r6=2147483647,_w=function(t){if(t6.test(t)){const e=Number(t);if(e>=n6&&e<=r6)return e}return null},Sc=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Tn("Exception was thrown by user callback.",n),e},Math.floor(0))}},i6=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ea=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class s6{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Tn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o6{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tn(e)}}class ip{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ip.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="5",mC="v",gC="s",_C="r",yC="f",vC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wC="ls",EC="p",sp="ac",TC="websocket",IC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(e,n,r,i,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function c6(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bC(t,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let r;if(e===TC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===IC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);c6(t)&&(n.ns=t.namespace);const i=[];return Dn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(){this.counters_={}}incrementCounter(e,n=1){zr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ED(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md={},xd={};function Ag(t){const e=t.toString();return Md[e]||(Md[e]=new l6),Md[e]}function u6(t,e){const n=t.toString();return xd[n]||(xd[n]=e()),xd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h6{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Sc(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="start",d6="close",f6="pLPCommand",p6="pRTLPCB",AC="id",CC="pw",RC="ser",m6="cb",g6="seg",_6="ts",y6="d",v6="dframe",SC=1870,PC=30,w6=SC-PC,E6=25e3,T6=3e4;class Ds{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rc(e),this.stats_=Ag(n),this.urlFn=c=>(this.appCheckToken&&(c[sp]=this.appCheckToken),bC(n,IC,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new h6(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(T6)),Jj(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cg((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===yw)this.id=a,this.password=c;else if(o===d6)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[yw]="t",r[RC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[m6]=this.scriptTagHolder.uniqueCallbackIdentifier),r[mC]=bg,this.transportSessionId&&(r[gC]=this.transportSessionId),this.lastSessionId&&(r[wC]=this.lastSessionId),this.applicationId&&(r[EC]=this.applicationId),this.appCheckToken&&(r[sp]=this.appCheckToken),typeof location<"u"&&location.hostname&&vC.test(location.hostname)&&(r[_C]=yC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ds.forceAllow_=!0}static forceDisallow(){Ds.forceDisallow_=!0}static isAvailable(){return Ds.forceAllow_?!0:!Ds.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Zj()&&!e6()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=K0(n),i=fC(r,w6);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[v6]="t",r[AC]=e,r[CC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Dt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Cg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Gj(),window[f6+this.uniqueCallbackIdentifier]=e,window[p6+this.uniqueCallbackIdentifier]=n,this.myIFrame=Cg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){jt("frame writing exception"),a.stack&&jt(a.stack),jt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||jt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[AC]=this.myID,e[CC]=this.myPW,e[RC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+PC+r.length<=SC;){const o=this.pendingSegs.shift();r=r+"&"+g6+i+"="+o.seg+"&"+_6+i+"="+o.ts+"&"+y6+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(E6)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{jt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I6=16384,b6=45e3;let uu=null;typeof MozWebSocket<"u"?uu=MozWebSocket:typeof WebSocket<"u"&&(uu=WebSocket);class Fn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rc(this.connId),this.stats_=Ag(n),this.connURL=Fn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[mC]=bg,typeof location<"u"&&location.hostname&&vC.test(location.hostname)&&(o[_C]=yC),n&&(o[gC]=n),r&&(o[wC]=r),i&&(o[sp]=i),s&&(o[EC]=s),bC(e,TC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gi.set("previous_websocket_failure",!0);try{let r;eT(),this.mySock=new uu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Fn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&uu!==null&&!Fn.forceDisallow_}static previouslyFailed(){return Gi.isInMemoryStorage||Gi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ma(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=fC(n,I6);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(b6))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Fn.responsesRequiredToBeHealthy=2;Fn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ds,Fn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Fn&&Fn.isAvailable();let r=n&&!Fn.previouslyFailed();if(e.webSocketOnly&&(n||Tn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Fn];else{const i=this.transports_=[];for(const s of Za.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Za.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Za.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A6=6e4,C6=5e3,R6=10*1024,S6=100*1024,Ld="t",vw="d",P6="s",ww="r",k6="e",Ew="o",Tw="a",Iw="n",bw="p",N6="h";class O6{constructor(e,n,r,i,s,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rc("c:"+this.id+":"),this.transportManager_=new Za(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ea(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>S6?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>R6?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ld in e){const n=e[Ld];n===Tw?this.upgradeIfSecondaryHealthy_():n===ww?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ew&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zo("t",e),r=zo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Tw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Iw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zo("t",e),r=zo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zo(Ld,e);if(vw in e){const r=e[vw];if(n===N6){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Iw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===P6?this.onConnectionShutdown_(r):n===ww?this.onReset_(r):n===k6?rp("Server Error: "+r):n===Ew?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bg!==r&&Tn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ea(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(A6))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ea(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(C6))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu extends NC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hu}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=32,Cw=768;class Ze{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ze(){return new Ze("")}function be(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ci(t){return t.pieces_.length-t.pieceNum_}function Ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ze(t.pieces_,e)}function OC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function D6(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function DC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function MC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ze(e,0)}function bt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ze)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ze(n,0)}function we(t){return t.pieceNum_>=t.pieces_.length}function kn(t,e){const n=be(t),r=be(e);if(n===null)return e;if(n===r)return kn(Ye(t),Ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xC(t,e){if(Ci(t)!==Ci(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Bn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ci(t)>Ci(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class M6{constructor(e,n){this.errorPrefix_=n,this.parts_=DC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Hu(this.parts_[r]);LC(this)}}function x6(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Hu(e),LC(t)}function L6(t){const e=t.parts_.pop();t.byteLength_-=Hu(e),t.parts_.length>0&&(t.byteLength_-=1)}function LC(t){if(t.byteLength_>Cw)throw new Error(t.errorPrefix_+"has a key path longer than "+Cw+" bytes ("+t.byteLength_+").");if(t.parts_.length>Aw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Aw+") or object contains a cycle "+$i(t))}function $i(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends NC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Rg}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=1e3,V6=60*5*1e3,Rw=30*1e3,F6=1.3,$6=3e4,U6="server_kill",Sw=3;class Lr extends kC{constructor(e,n,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Lr.nextPersistentConnectionId_++,this.log_=Rc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qo,this.maxReconnectDelay_=V6,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!eT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Dt(s)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Da,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;Lr.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zr(e,"w")){const r=no(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Tn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=MD(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Dt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):rp("Unrecognized action received from server: "+Dt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$6&&(this.reconnectDelay_=qo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*F6)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(h){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,p]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?jt("getToken() completed but was canceled"):(jt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,a=new O6(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Tn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(U6)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Tn(h),c())}}}interrupt(e){jt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){jt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gf(this.interruptReasons_)&&(this.reconnectDelay_=qo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ig(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ze(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){jt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sw&&(this.reconnectDelay_=Rw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){jt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+lC.replace(/\./g,"-")]=1,rm()?e["framework.cordova"]=1:Z0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hu.getInstance().currentlyOnline();return gf(this.interruptReasons_)&&e}}Lr.nextPersistentConnectionId_=0;Lr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ae(po,e),i=new Ae(po,n);return this.compare(r,i)!==0}minPost(){return Ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol;class VC extends Ch{static get __EMPTY_NODE(){return ol}static set __EMPTY_NODE(e){ol=e}compare(e,n){return No(e.name,n.name)}isDefinedOn(e){throw Eo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ae.MIN}maxPost(){return new Ae(hs,ol)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new Ae(e,ol)}toString(){return".key"}}const qs=new VC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Tt.RED,this.left=i??dn.EMPTY_NODE,this.right=s??dn.EMPTY_NODE}copy(e,n,r,i,s){return new Tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return dn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return dn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Tt.RED=!0;Tt.BLACK=!1;class B6{copy(e,n,r,i,s){return this}insert(e,n,r){return new Tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class dn{constructor(e,n=dn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new dn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Tt.BLACK,null,null))}remove(e){return new dn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Tt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new al(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new al(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new al(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new al(this.root_,null,this.comparator_,!0,e)}}dn.EMPTY_NODE=new B6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j6(t,e){return No(t.name,e.name)}function Sg(t,e){return No(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let op;function H6(t){op=t}const FC=function(t){return typeof t=="number"?"number:"+pC(t):"string:"+t},$C=function(t){if(t.isLeafNode()){const e=t.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zr(e,".sv"),"Priority must be a string or number.")}else K(t===op||t.isEmpty(),"priority of unexpected type.");K(t===op||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pw;class wt{constructor(e,n=wt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$C(this.priorityNode_)}static set __childrenNodeConstructor(e){Pw=e}static get __childrenNodeConstructor(){return Pw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new wt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:wt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return we(e)?this:be(e)===".priority"?this.priorityNode_:wt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:wt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=be(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(K(r!==".priority"||Ci(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,wt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+FC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pC(this.value_):e+=this.value_,this.lazyHash_=hC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===wt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof wt.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=wt.VALUE_TYPE_ORDER.indexOf(n),s=wt.VALUE_TYPE_ORDER.indexOf(r);return K(i>=0,"Unknown leaf type: "+n),K(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}wt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UC,BC;function W6(t){UC=t}function z6(t){BC=t}class q6 extends Ch{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?No(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ae.MIN}maxPost(){return new Ae(hs,new wt("[PRIORITY-POST]",BC))}makePost(e,n){const r=UC(e);return new Ae(n,new wt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Qt=new q6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K6=Math.log(2);class G6{constructor(e){const n=s=>parseInt(Math.log(s)/K6,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const du=function(t,e,n,r){t.sort(e);const i=function(c,l){const u=l-c;let h,p;if(u===0)return null;if(u===1)return h=t[c],p=n?n(h):h,new Tt(p,h.node,Tt.BLACK,null,null);{const m=parseInt(u/2,10)+c,y=i(c,m),v=i(m+1,l);return h=t[m],p=n?n(h):h,new Tt(p,h.node,Tt.BLACK,y,v)}},s=function(c){let l=null,u=null,h=t.length;const p=function(y,v){const b=h-y,A=h;h-=y;const k=i(b+1,A),N=t[b],P=n?n(N):N;m(new Tt(P,N.node,v,null,k))},m=function(y){l?(l.left=y,l=y):(u=y,l=y)};for(let y=0;y<c.count;++y){const v=c.nextBitIsOne(),b=Math.pow(2,c.count-(y+1));v?p(b,Tt.BLACK):(p(b,Tt.BLACK),p(b,Tt.RED))}return u},o=new G6(t.length),a=s(o);return new dn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vd;const Rs={};class Dr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return K(Rs&&Qt,"ChildrenNode.ts has not been loaded"),Vd=Vd||new Dr({".priority":Rs},{".priority":Qt}),Vd}get(e){const n=no(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof dn?n:null}hasIndex(e){return zr(this.indexSet_,e.toString())}addIndex(e,n){K(e!==qs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Ae.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=du(r,e.getCompare()):a=Rs;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Dr(u,l)}addToIndexes(e,n){const r=Ll(this.indexes_,(i,s)=>{const o=no(this.indexSet_,s);if(K(o,"Missing index implementation for "+s),i===Rs)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Ae.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),du(a,o.getCompare())}else return Rs;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new Ae(e.name,a))),c.insert(e,e.node)}});return new Dr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ll(this.indexes_,i=>{if(i===Rs)return i;{const s=n.get(e.name);return s?i.remove(new Ae(e.name,s)):i}});return new Dr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;class $e{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&$C(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ko||(Ko=new $e(new dn(Sg),null,Dr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ko}updatePriority(e){return this.children_.isEmpty()?this:new $e(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ko:n}}getChild(e){const n=be(e);return n===null?this:this.getImmediateChild(n).getChild(Ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ae(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ko:this.priorityNode_;return new $e(i,o,s)}}updateChild(e,n){const r=be(e);if(r===null)return n;{K(be(e)!==".priority"||Ci(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ye(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Qt,(o,a)=>{n[o]=a.val(e),r++,s&&$e.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+FC(this.getPriority().val())+":"),this.forEachChild(Qt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":hC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Ae(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ae.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ae.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pc?-1:0}withIndex(e){if(e===qs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $e(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===qs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Qt),i=n.getIterator(Qt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qs?null:this.indexMap_.get(e.toString())}}$e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Q6 extends $e{constructor(){super(new dn(Sg),$e.EMPTY_NODE,Dr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $e.EMPTY_NODE}isEmpty(){return!1}}const Pc=new Q6;Object.defineProperties(Ae,{MIN:{value:new Ae(po,$e.EMPTY_NODE)},MAX:{value:new Ae(hs,Pc)}});VC.__EMPTY_NODE=$e.EMPTY_NODE;wt.__childrenNodeConstructor=$e;H6(Pc);z6(Pc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y6=!0;function Ht(t,e=null){if(t===null)return $e.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new wt(n,Ht(e))}if(!(t instanceof Array)&&Y6){const n=[];let r=!1;if(Dn(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Ht(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new Ae(o,c)))}}),n.length===0)return $e.EMPTY_NODE;const s=du(n,j6,o=>o.name,Sg);if(r){const o=du(n,Qt.getCompare());return new $e(s,Ht(e),new Dr({".priority":o},{".priority":Qt}))}else return new $e(s,Ht(e),Dr.Default)}else{let n=$e.EMPTY_NODE;return Dn(t,(r,i)=>{if(zr(t,r)&&r.substring(0,1)!=="."){const s=Ht(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ht(e))}}W6(Ht);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J6 extends Ch{constructor(e){super(),this.indexPath_=e,K(!we(e)&&be(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?No(e.name,n.name):s}makePost(e,n){const r=Ht(e),i=$e.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ae(n,i)}maxPost(){const e=$e.EMPTY_NODE.updateChild(this.indexPath_,Pc);return new Ae(hs,e)}toString(){return DC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X6 extends Ch{compare(e,n){const r=e.node.compareTo(n.node);return r===0?No(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ae.MIN}maxPost(){return Ae.MAX}makePost(e,n){const r=Ht(e);return new Ae(n,r)}toString(){return".value"}}const Z6=new X6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e9(t){return{type:"value",snapshotNode:t}}function t9(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function n9(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function kw(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function r9(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:po}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qt}copy(){const e=new Pg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Qt?n="$priority":t.index_===Z6?n="$value":t.index_===qs?n="$key":(K(t.index_ instanceof J6,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Dt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Dt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Dt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Dt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Dt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ow(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Qt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends kC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Rc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=fu.getListenId_(e,r),a={};this.listens_[o]=a;const c=Nw(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(s,h,!1,r),no(this.listens_,o)===a){let p;l?l===401?p="permission_denied":p="rest_error:"+l:p="ok",i(p,null)}})}unlisten(e,n){const r=fu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Nw(e._queryParams),r=e._path.toString(),i=new Da;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+To(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ma(a.responseText)}catch{Tn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&Tn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(){this.rootNode_=$e.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(){return{value:null,children:new Map}}function jC(t,e,n){if(we(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=be(e);t.children.has(r)||t.children.set(r,pu());const i=t.children.get(r);e=Ye(e),jC(i,e,n)}}function ap(t,e,n){t.value!==null?n(e,t.value):s9(t,(r,i)=>{const s=new Ze(e.toString()+"/"+r);ap(i,s,n)})}function s9(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Dn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=10*1e3,a9=30*1e3,c9=5*60*1e3;class l9{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new o9(e);const r=Dw+(a9-Dw)*Math.random();Ea(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Dn(e,(i,s)=>{s>0&&zr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ea(this.reportStats_.bind(this),Math.floor(Math.random()*2*c9))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ir;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ir||(ir={}));function HC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function WC(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zC(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ir.ACK_USER_WRITE,this.source=HC()}operationForChild(e){if(we(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ze(e));return new mu(ze(),n,this.revert)}}else return K(be(this.path)===e,"operationForChild called for unrelated child."),new mu(Ye(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ir.OVERWRITE}operationForChild(e){return we(this.path)?new ds(this.source,ze(),this.snap.getImmediateChild(e)):new ds(this.source,Ye(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ir.MERGE}operationForChild(e){if(we(this.path)){const n=this.children.subtree(new Ze(e));return n.isEmpty()?null:n.value?new ds(this.source,ze(),n.value):new ec(this.source,ze(),n)}else return K(be(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ec(this.source,Ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(we(e))return this.isFullyInitialized()&&!this.filtered_;const n=be(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function u9(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(r9(o.childName,o.snapshotNode))}),Go(t,i,"child_removed",e,r,n),Go(t,i,"child_added",e,r,n),Go(t,i,"child_moved",s,r,n),Go(t,i,"child_changed",e,r,n),Go(t,i,"value",e,r,n),i}function Go(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,c)=>d9(t,a,c)),o.forEach(a=>{const c=h9(t,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function h9(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function d9(t,e,n){if(e.childName==null||n.childName==null)throw Eo("Should only compare child_ events.");const r=new Ae(e.childName,e.snapshotNode),i=new Ae(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t,e){return{eventCache:t,serverCache:e}}function Ta(t,e,n,r){return qC(new kg(e,n,r),t.serverCache)}function KC(t,e,n,r){return qC(t.eventCache,new kg(e,n,r))}function cp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function fs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd;const f9=()=>(Fd||(Fd=new dn(Xj)),Fd);class Ge{constructor(e,n=f9()){this.value=e,this.children=n}static fromObject(e){let n=new Ge(null);return Dn(e,(r,i)=>{n=n.set(new Ze(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ze(),value:this.value};if(we(e))return null;{const r=be(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ye(e),n);return s!=null?{path:bt(new Ze(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(we(e))return this;{const n=be(e),r=this.children.get(n);return r!==null?r.subtree(Ye(e)):new Ge(null)}}set(e,n){if(we(e))return new Ge(n,this.children);{const r=be(e),s=(this.children.get(r)||new Ge(null)).set(Ye(e),n),o=this.children.insert(r,s);return new Ge(this.value,o)}}remove(e){if(we(e))return this.children.isEmpty()?new Ge(null):new Ge(null,this.children);{const n=be(e),r=this.children.get(n);if(r){const i=r.remove(Ye(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ge(null):new Ge(this.value,s)}else return this}}get(e){if(we(e))return this.value;{const n=be(e),r=this.children.get(n);return r?r.get(Ye(e)):null}}setTree(e,n){if(we(e))return n;{const r=be(e),s=(this.children.get(r)||new Ge(null)).setTree(Ye(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ge(this.value,o)}}fold(e){return this.fold_(ze(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(bt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ze(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(we(e))return null;{const s=be(e),o=this.children.get(s);return o?o.findOnPath_(Ye(e),bt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ze(),n)}foreachOnPath_(e,n,r){if(we(e))return this;{this.value&&r(n,this.value);const i=be(e),s=this.children.get(i);return s?s.foreachOnPath_(Ye(e),bt(n,i),r):new Ge(null)}}foreach(e){this.foreach_(ze(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(bt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.writeTree_=e}static empty(){return new qn(new Ge(null))}}function Ia(t,e,n){if(we(e))return new qn(new Ge(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=kn(i,e);return s=s.updateChild(o,n),new qn(t.writeTree_.set(i,s))}else{const i=new Ge(n),s=t.writeTree_.setTree(e,i);return new qn(s)}}}function Mw(t,e,n){let r=t;return Dn(n,(i,s)=>{r=Ia(r,bt(e,i),s)}),r}function xw(t,e){if(we(e))return qn.empty();{const n=t.writeTree_.setTree(e,new Ge(null));return new qn(n)}}function lp(t,e){return Es(t,e)!=null}function Es(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(kn(n.path,e)):null}function Lw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Qt,(r,i)=>{e.push(new Ae(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Ae(r,i.value))}),e}function yi(t,e){if(we(e))return t;{const n=Es(t,e);return n!=null?new qn(new Ge(n)):new qn(t.writeTree_.subtree(e))}}function up(t){return t.writeTree_.isEmpty()}function mo(t,e){return GC(ze(),t.writeTree_,e)}function GC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(K(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=GC(bt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(bt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t,e){return eR(e,t)}function p9(t,e,n,r,i){K(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ia(t.visibleWrites,e,n)),t.lastWriteId=r}function m9(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function g9(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&_9(a,r.path)?i=!1:Bn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return y9(t),!0;if(r.snap)t.visibleWrites=xw(t.visibleWrites,r.path);else{const a=r.children;Dn(a,c=>{t.visibleWrites=xw(t.visibleWrites,bt(r.path,c))})}return!0}else return!1}function _9(t,e){if(t.snap)return Bn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Bn(bt(t.path,n),e))return!0;return!1}function y9(t){t.visibleWrites=YC(t.allWrites,v9,ze()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function v9(t){return t.visible}function YC(t,e,n){let r=qn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Bn(n,o)?(a=kn(n,o),r=Ia(r,a,s.snap)):Bn(o,n)&&(a=kn(o,n),r=Ia(r,ze(),s.snap.getChild(a)));else if(s.children){if(Bn(n,o))a=kn(n,o),r=Mw(r,a,s.children);else if(Bn(o,n))if(a=kn(o,n),we(a))r=Mw(r,ze(),s.children);else{const c=no(s.children,be(a));if(c){const l=c.getChild(Ye(a));r=Ia(r,ze(),l)}}}else throw Eo("WriteRecord should have .snap or .children")}}return r}function JC(t,e,n,r,i){if(!r&&!i){const s=Es(t.visibleWrites,e);if(s!=null)return s;{const o=yi(t.visibleWrites,e);if(up(o))return n;if(n==null&&!lp(o,ze()))return null;{const a=n||$e.EMPTY_NODE;return mo(o,a)}}}else{const s=yi(t.visibleWrites,e);if(!i&&up(s))return n;if(!i&&n==null&&!lp(s,ze()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(Bn(l.path,e)||Bn(e,l.path))},a=YC(t.allWrites,o,e),c=n||$e.EMPTY_NODE;return mo(a,c)}}}function w9(t,e,n){let r=$e.EMPTY_NODE;const i=Es(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Qt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=yi(t.visibleWrites,e);return n.forEachChild(Qt,(o,a)=>{const c=mo(yi(s,new Ze(o)),a);r=r.updateImmediateChild(o,c)}),Lw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=yi(t.visibleWrites,e);return Lw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function E9(t,e,n,r,i){K(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=bt(e,n);if(lp(t.visibleWrites,s))return null;{const o=yi(t.visibleWrites,s);return up(o)?i.getChild(n):mo(o,i.getChild(n))}}function T9(t,e,n,r){const i=bt(e,n),s=Es(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=yi(t.visibleWrites,i);return mo(o,r.getNode().getImmediateChild(n))}else return null}function I9(t,e){return Es(t.visibleWrites,e)}function b9(t,e,n,r,i,s,o){let a;const c=yi(t.visibleWrites,e),l=Es(c,ze());if(l!=null)a=l;else if(n!=null)a=mo(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=p.getNext();for(;m&&u.length<i;)h(m,r)!==0&&u.push(m),m=p.getNext();return u}else return[]}function A9(){return{visibleWrites:qn.empty(),allWrites:[],lastWriteId:-1}}function hp(t,e,n,r){return JC(t.writeTree,t.treePath,e,n,r)}function XC(t,e){return w9(t.writeTree,t.treePath,e)}function Vw(t,e,n,r){return E9(t.writeTree,t.treePath,e,n,r)}function gu(t,e){return I9(t.writeTree,bt(t.treePath,e))}function C9(t,e,n,r,i,s){return b9(t.writeTree,t.treePath,e,n,r,i,s)}function Ng(t,e,n){return T9(t.writeTree,t.treePath,e,n)}function ZC(t,e){return eR(bt(t.treePath,e),t.writeTree)}function eR(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R9{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,kw(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,n9(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,t9(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,kw(r,e.snapshotNode,i.oldSnap));else throw Eo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S9{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const tR=new S9;class Og{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new kg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ng(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fs(this.viewCache_),s=C9(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function P9(t,e){K(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function k9(t,e,n,r,i){const s=new R9;let o,a;if(n.type===ir.OVERWRITE){const l=n;l.source.fromUser?o=dp(t,e,l.path,l.snap,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!we(l.path),o=_u(t,e,l.path,l.snap,r,i,a,s))}else if(n.type===ir.MERGE){const l=n;l.source.fromUser?o=O9(t,e,l.path,l.children,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=fp(t,e,l.path,l.children,r,i,a,s))}else if(n.type===ir.ACK_USER_WRITE){const l=n;l.revert?o=x9(t,e,l.path,r,i,s):o=D9(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===ir.LISTEN_COMPLETE)o=M9(t,e,n.path,r,s);else throw Eo("Unknown operation type: "+n.type);const c=s.getChanges();return N9(e,o,c),{viewCache:o,changes:c}}function N9(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=cp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(e9(cp(e)))}}function nR(t,e,n,r,i,s){const o=e.eventCache;if(gu(r,n)!=null)return e;{let a,c;if(we(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=fs(e),u=l instanceof $e?l:$e.EMPTY_NODE,h=XC(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const l=hp(r,fs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=be(n);if(l===".priority"){K(Ci(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Vw(r,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ye(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const p=Vw(r,n,o.getNode(),c);p!=null?h=o.getNode().getImmediateChild(l).updateChild(u,p):h=o.getNode().getImmediateChild(l)}else h=Ng(r,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,s):a=o.getNode()}}return Ta(e,a,o.isFullyInitialized()||we(n),t.filter.filtersNodes())}}function _u(t,e,n,r,i,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(we(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),m,null)}else{const m=be(n);if(!c.isCompleteForPath(n)&&Ci(n)>1)return e;const y=Ye(n),b=c.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?l=u.updatePriority(c.getNode(),b):l=u.updateChild(c.getNode(),m,b,y,tR,null)}const h=KC(e,l,c.isFullyInitialized()||we(n),u.filtersNodes()),p=new Og(i,h,s);return nR(t,h,n,i,p,a)}function dp(t,e,n,r,i,s,o){const a=e.eventCache;let c,l;const u=new Og(i,e,s);if(we(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Ta(e,l,!0,t.filter.filtersNodes());else{const h=be(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),c=Ta(e,l,a.isFullyInitialized(),a.isFiltered());else{const p=Ye(n),m=a.getNode().getImmediateChild(h);let y;if(we(p))y=r;else{const v=u.getCompleteChild(h);v!=null?OC(p)===".priority"&&v.getChild(MC(p)).isEmpty()?y=v:y=v.updateChild(p,r):y=$e.EMPTY_NODE}if(m.equals(y))c=e;else{const v=t.filter.updateChild(a.getNode(),h,y,p,u,o);c=Ta(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Fw(t,e){return t.eventCache.isCompleteForChild(e)}function O9(t,e,n,r,i,s,o){let a=e;return r.foreach((c,l)=>{const u=bt(n,c);Fw(e,be(u))&&(a=dp(t,a,u,l,i,s,o))}),r.foreach((c,l)=>{const u=bt(n,c);Fw(e,be(u))||(a=dp(t,a,u,l,i,s,o))}),a}function $w(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function fp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;we(n)?l=r:l=new Ge(null).setTree(n,r);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,p)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),y=$w(t,m,p);c=_u(t,c,new Ze(h),y,i,s,o,a)}}),l.children.inorderTraversal((h,p)=>{const m=!e.serverCache.isCompleteForChild(h)&&p.value===null;if(!u.hasChild(h)&&!m){const y=e.serverCache.getNode().getImmediateChild(h),v=$w(t,y,p);c=_u(t,c,new Ze(h),v,i,s,o,a)}}),c}function D9(t,e,n,r,i,s,o){if(gu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(we(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return _u(t,e,n,c.getNode().getChild(n),i,s,a,o);if(we(n)){let l=new Ge(null);return c.getNode().forEachChild(qs,(u,h)=>{l=l.set(new Ze(u),h)}),fp(t,e,n,l,i,s,a,o)}else return e}else{let l=new Ge(null);return r.foreach((u,h)=>{const p=bt(n,u);c.isCompleteForPath(p)&&(l=l.set(u,c.getNode().getChild(p)))}),fp(t,e,n,l,i,s,a,o)}}function M9(t,e,n,r,i){const s=e.serverCache,o=KC(e,s.getNode(),s.isFullyInitialized()||we(n),s.isFiltered());return nR(t,o,n,r,tR,i)}function x9(t,e,n,r,i,s){let o;if(gu(r,n)!=null)return e;{const a=new Og(r,e,i),c=e.eventCache.getNode();let l;if(we(n)||be(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=hp(r,fs(e));else{const h=e.serverCache.getNode();K(h instanceof $e,"serverChildren would be complete if leaf node"),u=XC(r,h)}u=u,l=t.filter.updateFullNode(c,u,s)}else{const u=be(n);let h=Ng(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Ye(n),a,s):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,$e.EMPTY_NODE,Ye(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hp(r,fs(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||gu(r,ze())!=null,Ta(e,l,o,t.filter.filtersNodes())}}function L9(t,e){const n=fs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!we(e)&&!n.getImmediateChild(be(e)).isEmpty())?n.getChild(e):null}function Uw(t,e,n,r){e.type===ir.MERGE&&e.source.queryId!==null&&(K(fs(t.viewCache_),"We should always have a full cache before handling merges"),K(cp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=k9(t.processor_,i,e,n,r);return P9(t.processor_,s.viewCache),K(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,V9(t,s.changes,s.viewCache.eventCache.getNode(),null)}function V9(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return u9(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bw;function F9(t){K(!Bw,"__referenceConstructor has already been defined"),Bw=t}function Dg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return K(s!=null,"SyncTree gave us an op for an invalid query."),Uw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Uw(o,e,n,r));return s}}function Mg(t,e){let n=null;for(const r of t.views.values())n=n||L9(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jw;function $9(t){K(!jw,"__referenceConstructor has already been defined"),jw=t}class Hw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ge(null),this.pendingWriteTree_=A9(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function U9(t,e,n,r,i){return p9(t.pendingWriteTree_,e,n,r,i),i?Sh(t,new ds(HC(),e,n)):[]}function Ms(t,e,n=!1){const r=m9(t.pendingWriteTree_,e);if(g9(t.pendingWriteTree_,e)){let s=new Ge(null);return r.snap!=null?s=s.set(ze(),!0):Dn(r.children,o=>{s=s.set(new Ze(o),!0)}),Sh(t,new mu(r.path,s,n))}else return[]}function Rh(t,e,n){return Sh(t,new ds(WC(),e,n))}function B9(t,e,n){const r=Ge.fromObject(n);return Sh(t,new ec(WC(),e,r))}function j9(t,e,n,r){const i=oR(t,r);if(i!=null){const s=aR(i),o=s.path,a=s.queryId,c=kn(o,e),l=new ds(zC(a),c,n);return cR(t,o,l)}else return[]}function H9(t,e,n,r){const i=oR(t,r);if(i){const s=aR(i),o=s.path,a=s.queryId,c=kn(o,e),l=Ge.fromObject(n),u=new ec(zC(a),c,l);return cR(t,o,u)}else return[]}function rR(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=kn(o,e),l=Mg(a,c);if(l)return l});return JC(i,e,s,n,!0)}function Sh(t,e){return iR(e,t.syncPointTree_,null,QC(t.pendingWriteTree_,ze()))}function iR(t,e,n,r){if(we(t.path))return sR(t,e,n,r);{const i=e.get(ze());n==null&&i!=null&&(n=Mg(i,ze()));let s=[];const o=be(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=ZC(r,o);s=s.concat(iR(a,c,l,u))}return i&&(s=s.concat(Dg(i,t,r,n))),s}}function sR(t,e,n,r){const i=e.get(ze());n==null&&i!=null&&(n=Mg(i,ze()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=ZC(r,o),u=t.operationForChild(o);u&&(s=s.concat(sR(u,a,c,l)))}),i&&(s=s.concat(Dg(i,t,r,n))),s}function oR(t,e){return t.tagToQueryMap.get(e)}function aR(t){const e=t.indexOf("$");return K(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ze(t.substr(0,e))}}function cR(t,e,n){const r=t.syncPointTree_.get(e);K(r,"Missing sync point for query tag that we're tracking");const i=QC(t.pendingWriteTree_,e);return Dg(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xg(n)}node(){return this.node_}}class Lg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=bt(this.path_,e);return new Lg(this.syncTree_,n)}node(){return rR(this.syncTree_,this.path_)}}const W9=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ww=function(t,e,n){if(!t||typeof t!="object")return t;if(K(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return z9(t[".sv"],e,n);if(typeof t[".sv"]=="object")return q9(t[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},z9=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+t)}},q9=function(t,e,n){t.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&K(!1,"Unexpected increment value: "+r);const i=e.node();if(K(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},K9=function(t,e,n,r){return Vg(e,new Lg(n,t),r)},G9=function(t,e,n){return Vg(t,new xg(e),n)};function Vg(t,e,n){const r=t.getPriority().val(),i=Ww(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Ww(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new wt(a,Ht(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new wt(i))),o.forEachChild(Qt,(a,c)=>{const l=Vg(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function $g(t,e){let n=e instanceof Ze?e:new Ze(e),r=t,i=be(n);for(;i!==null;){const s=no(r.node.children,i)||{children:{},childCount:0};r=new Fg(i,r,s),n=Ye(n),i=be(n)}return r}function Oo(t){return t.node.value}function lR(t,e){t.node.value=e,pp(t)}function uR(t){return t.node.childCount>0}function Q9(t){return Oo(t)===void 0&&!uR(t)}function Ph(t,e){Dn(t.node.children,(n,r)=>{e(new Fg(n,t,r))})}function hR(t,e,n,r){n&&!r&&e(t),Ph(t,i=>{hR(i,e,!0,r)}),n&&r&&e(t)}function Y9(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function kc(t){return new Ze(t.parent===null?t.name:kc(t.parent)+"/"+t.name)}function pp(t){t.parent!==null&&J9(t.parent,t.name,t)}function J9(t,e,n){const r=Q9(n),i=zr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,pp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,pp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X9=/[\[\].#$\/\u0000-\u001F\u007F]/,Z9=/[\[\].#$\u0000-\u001F\u007F]/,$d=10*1024*1024,dR=function(t){return typeof t=="string"&&t.length!==0&&!X9.test(t)},e3=function(t){return typeof t=="string"&&t.length!==0&&!Z9.test(t)},t3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),e3(t)},fR=function(t,e,n){const r=n instanceof Ze?new M6(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$i(r));if(typeof e=="function")throw new Error(t+"contains a function "+$i(r)+" with contents = "+e.toString());if(dC(e))throw new Error(t+"contains "+e.toString()+" "+$i(r));if(typeof e=="string"&&e.length>$d/3&&Hu(e)>$d)throw new Error(t+"contains a string greater than "+$d+" utf8 bytes "+$i(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Dn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!dR(o)))throw new Error(t+" contains an invalid key ("+o+") "+$i(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);x6(r,o),fR(t,a,r),L6(r)}),i&&s)throw new Error(t+' contains ".value" child '+$i(r)+" in addition to actual children.")}},n3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!t3(n))throw new Error(UD(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function i3(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!xC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ts(t,e,n){i3(t,n),s3(t,r=>Bn(r,e)||Bn(e,r))}function s3(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(o3(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function o3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();es&&jt("event: "+n.toString()),Sc(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a3="repo_interrupt",c3=25;class l3{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new r3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pu(),this.transactionQueueTree_=new Fg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function u3(t,e,n){if(t.stats_=Ag(t.repoInfo_),t.forceRestClient_||i6())t.server_=new fu(t.repoInfo_,(r,i,s,o)=>{zw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Dt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Lr(t.repoInfo_,e,(r,i,s,o)=>{zw(t,r,i,s,o)},r=>{qw(t,r)},r=>{d3(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=u6(t.repoInfo_,()=>new l9(t.stats_,t.server_)),t.infoData_=new i9,t.infoSyncTree_=new Hw({startListening:(r,i,s,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Rh(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ug(t,"connected",!1),t.serverSyncTree_=new Hw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);Ts(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function h3(t){const n=t.infoData_.getNode(new Ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function pR(t){return W9({timestamp:h3(t)})}function zw(t,e,n,r,i){t.dataUpdateCount++;const s=new Ze(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const c=Ll(n,l=>Ht(l));o=H9(t.serverSyncTree_,s,c,i)}else{const c=Ht(n);o=j9(t.serverSyncTree_,s,c,i)}else if(r){const c=Ll(n,l=>Ht(l));o=B9(t.serverSyncTree_,s,c)}else{const c=Ht(n);o=Rh(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=jg(t,s)),Ts(t.eventQueue_,a,o)}function qw(t,e){Ug(t,"connected",e),e===!1&&p3(t)}function d3(t,e){Dn(e,(n,r)=>{Ug(t,n,r)})}function Ug(t,e,n){const r=new Ze("/.info/"+e),i=Ht(n);t.infoData_.updateSnapshot(r,i);const s=Rh(t.infoSyncTree_,r,i);Ts(t.eventQueue_,r,s)}function f3(t){return t.nextWriteId_++}function p3(t){mR(t,"onDisconnectEvents");const e=pR(t),n=pu();ap(t.onDisconnect_,ze(),(i,s)=>{const o=K9(i,s,t.serverSyncTree_,e);jC(n,i,o)});let r=[];ap(n,ze(),(i,s)=>{r=r.concat(Rh(t.serverSyncTree_,i,s));const o=y3(t,i);jg(t,o)}),t.onDisconnect_=pu(),Ts(t.eventQueue_,ze(),r)}function m3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(a3)}function mR(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),jt(n,...e)}function gR(t,e,n){return rR(t.serverSyncTree_,e,n)||$e.EMPTY_NODE}function Bg(t,e=t.transactionQueueTree_){if(e||kh(t,e),Oo(e)){const n=yR(t,e);K(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&g3(t,kc(e),n)}else uR(e)&&Ph(e,n=>{Bg(t,n)})}function g3(t,e,n){const r=n.map(l=>l.currentWriteId),i=gR(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];K(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=kn(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{mR(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let p=0;p<n.length;p++)n[p].status=2,u=u.concat(Ms(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&h.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();kh(t,$g(t.transactionQueueTree_,e)),Bg(t,t.transactionQueueTree_),Ts(t.eventQueue_,e,u);for(let p=0;p<h.length;p++)Sc(h[p])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Tn("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}jg(t,e)}},o)}function jg(t,e){const n=_R(t,e),r=kc(n),i=yR(t,n);return _3(t,i,r),r}function _3(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=kn(n,c.path);let u=!1,h;if(K(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Ms(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=c3)u=!0,h="maxretry",i=i.concat(Ms(t.serverSyncTree_,c.currentWriteId,!0));else{const p=gR(t,c.path,o);c.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){fR("transaction failed: Data returned ",m,c.path);let y=Ht(m);typeof m=="object"&&m!=null&&zr(m,".priority")||(y=y.updatePriority(p.getPriority()));const b=c.currentWriteId,A=pR(t),k=G9(y,p,A);c.currentOutputSnapshotRaw=y,c.currentOutputSnapshotResolved=k,c.currentWriteId=f3(t),o.splice(o.indexOf(b),1),i=i.concat(U9(t.serverSyncTree_,c.path,k,c.currentWriteId,c.applyLocally)),i=i.concat(Ms(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",i=i.concat(Ms(t.serverSyncTree_,c.currentWriteId,!0))}Ts(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}kh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Sc(r[a]);Bg(t,t.transactionQueueTree_)}function _R(t,e){let n,r=t.transactionQueueTree_;for(n=be(e);n!==null&&Oo(r)===void 0;)r=$g(r,n),e=Ye(e),n=be(e);return r}function yR(t,e){const n=[];return vR(t,e,n),n.sort((r,i)=>r.order-i.order),n}function vR(t,e,n){const r=Oo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ph(e,i=>{vR(t,i,n)})}function kh(t,e){const n=Oo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,lR(e,n.length>0?n:void 0)}Ph(e,r=>{kh(t,r)})}function y3(t,e){const n=kc(_R(t,e)),r=$g(t.transactionQueueTree_,e);return Y9(r,i=>{Ud(t,i)}),Ud(t,r),hR(r,i=>{Ud(t,i)}),n}function Ud(t,e){const n=Oo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(K(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(K(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ms(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?lR(e,void 0):n.length=s+1,Ts(t.eventQueue_,kc(e),i);for(let o=0;o<r.length;o++)Sc(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v3(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function w3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Tn(`Invalid query segment '${n}' in query '${t}'`)}return e}const Kw=function(t,e){const n=E3(t),r=n.namespace;n.domain==="firebase.com"&&us(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&us("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Yj();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new a6(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ze(n.pathString)}},E3=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=v3(t.substring(u,h)));const p=w3(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const m=e.slice(0,l);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return we(this._path)?null:OC(this._path)}get ref(){return new Do(this._repo,this._path)}get _queryIdentifier(){const e=Ow(this._queryParams),n=Ig(e);return n==="{}"?"default":n}get _queryObject(){return Ow(this._queryParams)}isEqual(e){if(e=an(e),!(e instanceof Hg))return!1;const n=this._repo===e._repo,r=xC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+D6(this._path)}}class Do extends Hg{constructor(e,n){super(e,n,new Pg,!1)}get parent(){const e=MC(this._path);return e===null?null:new Do(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}F9(Do);$9(Do);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T3="FIREBASE_DATABASE_EMULATOR_HOST",mp={};let I3=!1;function b3(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||us("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),jt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Kw(s,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[T3]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=Kw(s,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new ip(ip.OWNER):new o6(t.name,t.options,e);n3("Invalid Firebase Database URL",o),we(o.path)||us("Database URL must point to the root of a Firebase Database (not including a child path).");const h=C3(a,t,u,new s6(t.name,n));return new R3(h,t)}function A3(t,e){const n=mp[e];(!n||n[t.key]!==t)&&us(`Database ${e}(${t.repoInfo_}) has already been deleted.`),m3(t),delete n[t.key]}function C3(t,e,n,r){let i=mp[e.name];i||(i={},mp[e.name]=i);let s=i[t.toURLString()];return s&&us("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new l3(t,I3,n,r),i[t.toURLString()]=s,s}class R3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(u3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Do(this._repo,ze())),this._rootInternal}_delete(){return this._rootInternal!==null&&(A3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&us("Cannot call "+e+" on a deleted database.")}}/**
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
 */function S3(t){zj(Pi),gn(new cn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return b3(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),xt(pw,mw,t),xt(pw,mw,"esm2017")}Lr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Lr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};S3();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="firebasestorage.googleapis.com",P3="storageBucket",k3=2*60*1e3,N3=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Mn{constructor(e,n,r=0){super(Bd(e),`Firebase Storage: ${n} (${Bd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_r.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var dr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(dr||(dr={}));function Bd(t){return"storage/"+t}function O3(){const t="An unknown error occurred, please check the error payload for server response.";return new _r(dr.UNKNOWN,t)}function D3(){return new _r(dr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function M3(){return new _r(dr.CANCELED,"User canceled the upload/download.")}function x3(t){return new _r(dr.INVALID_URL,"Invalid URL '"+t+"'.")}function L3(t){return new _r(dr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Gw(t){return new _r(dr.INVALID_ARGUMENT,t)}function ER(){return new _r(dr.APP_DELETED,"The Firebase app was deleted.")}function V3(t){return new _r(dr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jn.makeFromUrl(e,n)}catch{return new jn(e,"")}if(r.path==="")return r;throw L3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${i}/o${p}`,"i"),y={bucket:1,path:3},v=n===wR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",A=new RegExp(`^https?://${v}/${i}/${b}`,"i"),N=[{regex:a,indices:c,postModify:s},{regex:m,indices:y,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<N.length;P++){const j=N[P],W=j.regex.exec(e);if(W){const oe=W[j.indices.bucket];let me=W[j.indices.path];me||(me=""),r=new jn(oe,me),j.postModify(r);break}}if(r==null)throw x3(e);return r}}class F3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $3(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...b){l||(l=!0,e.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,t(m,c())},b)}function p(){s&&clearTimeout(s)}function m(b,...A){if(l){p();return}if(b){p(),u.call(null,b,...A);return}if(c()||o){p(),u.call(null,b,...A);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let y=!1;function v(b){y||(y=!0,p(),!l&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function U3(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B3(t){return t!==void 0}function Qw(t,e,n,r){if(r<e)throw Gw(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Gw(`Invalid value for '${t}'. Expected ${n} or less.`)}function j3(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yu||(yu={}));/**
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
 */function H3(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W3{constructor(e,n,r,i,s,o,a,c,l,u,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new cl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===yu.NO_ERROR,c=s.getStatus();if(!a||H3(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===yu.ABORT;r(!1,new cl(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new cl(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());B3(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=O3();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?ER():M3();o(c)}else{const c=D3();o(c)}};this.canceled_?n(!1,new cl(!1,null,!0)):this.backoffId_=$3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&U3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class cl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function z3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function q3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function K3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function G3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Q3(t,e,n,r,i,s,o=!0){const a=j3(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return K3(l,e),z3(l,n),q3(l,s),G3(l,r),new W3(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function J3(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class vu{constructor(e,n){this._service=e,n instanceof jn?this._location=n:this._location=jn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vu(e,n)}get root(){const e=new jn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return J3(this._location.path)}get storage(){return this._service}get parent(){const e=Y3(this._location.path);if(e===null)return null;const n=new jn(this._location.bucket,e);return new vu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw V3(e)}}function Yw(t,e){const n=e==null?void 0:e[P3];return n==null?null:jn.makeFromBucketSpec(n,t)}class X3{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=wR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=k3,this._maxUploadRetryTime=N3,this._requests=new Set,i!=null?this._bucket=jn.makeFromBucketSpec(i,this._host):this._bucket=Yw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jn.makeFromBucketSpec(this._url,e):this._bucket=Yw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new F3(ER());{const o=Q3(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Jw="@firebase/storage",Xw="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z3="storage";function eH(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new X3(n,r,i,e,Pi)}function tH(){gn(new cn(Z3,eH,"PUBLIC").setMultipleInstances(!0)),xt(Jw,Xw,""),xt(Jw,Xw,"esm2017")}tH();const jd=new WeakMap;function TR(t,e){return jd.has(e)||jd.set(e,t||{f:{},r:{},s:{},u:{}}),jd.get(e)}function nH(t,e,n,r){if(!t)return n;const[i,s]=IR(t);if(!i)return n;const o=TR(void 0,r)[i]||{},a=e||s;return a&&a in o?o[a]:n}function rH(t,e,n,r){if(!t)return;const[i,s]=IR(t);if(!i)return;const o=TR(void 0,r)[i],a=e||s;if(a)return n.then(c=>{o[a]=c}).catch(rr),a}function IR(t){return Mj(t)||xj(t)?["f",t.path]:Lj(t)?["r",t.toString()]:Vj(t)?["s",t.toString()]:[]}const Hd=new WeakMap;function iH(t,e,n){const r=Ac();Hd.has(r)||Hd.set(r,new Map);const i=Hd.get(r),s=rH(e,n,t,r);return s&&i.set(s,t),s?()=>i.delete(s):rr}const sH={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function gp(t,e,n,r){if(!Oj(t))return[t,{}];const i=[{},{}],s=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,p]=u;Object.getOwnPropertyNames(a).forEach(m=>{const y=Object.getOwnPropertyDescriptor(a,m);y&&!y.enumerable&&Object.defineProperty(h,m,y)});for(const m in a){const y=a[m];if(y==null||y instanceof Date||y instanceof lt||y instanceof wh)h[m]=y;else if(Tg(y)){const v=l+m;h[m]=v in n?c[m]:y.path,p[v]=y.converter?y:y.withConverter(r.converter)}else if(Array.isArray(y)){h[m]=Array(y.length);for(let v=0;v<y.length;v++){const b=y[v];b&&b.path in s&&(h[m][v]=s[b.path])}o(y,c[m]||h[m],l+m+".",[h[m],p])}else ws(y)?(h[m]={},o(y,c[m],l+m+".",[h[m],p])):h[m]=y}}return o(t,e,"",i),i}const Wg={reset:!1,wait:!0,maxRefDepth:2,converter:sH,snapshotOptions:{serverTimestamps:"estimate"}};function wu(t){for(const e in t)t[e].unsub()}function _p(t,e,n,r,i,s,o,a,c){const[l,u]=gp(r.data(t.snapshotOptions),Eg(e,n),i,t);s.set(e,n,l),yp(t,e,n,i,u,s,o,a,c)}function oH({ref:t,target:e,path:n,depth:r,resolve:i,reject:s,ops:o},a){const c=Object.create(null);let l=rr;return a.once?Kb(t).then(u=>{u.exists()?_p(a,e,n,u,c,o,r,i,s):(o.set(e,n,null),i())}).catch(s):l=ug(t,u=>{u.exists()?_p(a,e,n,u,c,o,r,i,s):(o.set(e,n,null),i())},s),()=>{l(),wu(c)}}function yp(t,e,n,r,i,s,o,a,c){const l=Object.keys(i);if(Object.keys(r).filter(v=>l.indexOf(v)<0).forEach(v=>{r[v].unsub(),delete r[v]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const p=l.length,m=Object.create(null);function y(v){v in m&&++h>=p&&a(n)}l.forEach(v=>{const b=r[v],A=i[v],k=`${n}.${v}`;if(m[k]=!0,b)if(b.path!==A.path)b.unsub();else return;r[v]={data:()=>Eg(e,k),unsub:oH({ref:A,target:e,path:k,depth:o,ops:s,resolve:y.bind(null,k),reject:c},t),path:A.path}})}function aH(t,e,n,r,i,s){const o=Object.assign({},Wg,s),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let p=Wt(l?[]:t.value);l||n.set(t,h,[]);const m=r;let y,v=rr;const b=[],A={added:({newIndex:N,doc:P})=>{b.splice(N,0,Object.create(null));const j=b[N],[W,oe]=gp(P.data(c),void 0,j,o);n.add(Nt(p),N,W),yp(o,p,`${h}.${N}`,j,oe,n,0,r.bind(null,P),i)},modified:({oldIndex:N,newIndex:P,doc:j})=>{const W=Nt(p),oe=b[N],me=W[N],[He,Ce]=gp(j.data(c),me,oe,o);b.splice(P,0,oe),n.remove(W,N),n.add(W,P,He),yp(o,p,`${h}.${P}`,oe,Ce,n,0,r,i)},removed:({oldIndex:N})=>{const P=Nt(p);n.remove(P,N),wu(b.splice(N,1)[0])}};function k(N){const P=N.docChanges(a);if(!y&&P.length){y=!0;let j=0;const W=P.length,oe=Object.create(null);for(let me=0;me<W;me++)oe[P[me].doc.id]=!0;r=me=>{me&&me.id in oe&&++j>=W&&(l&&(n.set(t,h,Nt(p)),p=t),m(Nt(p)),r=rr)}}P.forEach(j=>{A[j.type](j)}),P.length||(l&&(n.set(t,h,Nt(p)),p=t),r(Nt(p)))}return u?N$(e).then(k).catch(i):v=ug(e,k,i),N=>{if(v(),N){const P=typeof N=="function"?N():[];n.set(t,h,P)}b.forEach(wu)}}function cH(t,e,n,r,i,s){const o=Object.assign({},Wg,s),a="value",c=Object.create(null);r=Fj(r,()=>Eg(t,a));let l=rr;function u(h){h.exists()?_p(o,t,a,h,c,n,0,r,i):(n.set(t,a,null),r(null))}return o.once?Kb(e).then(u).catch(i):l=ug(e,u,i),h=>{if(l(),h){const p=typeof h=="function"?h():null;n.set(t,a,p)}wu(c)}}const Zw=Symbol();function lH(t,e){let n=rr;const r=Object.assign({},Wg,e),i=Nt(t),s=r.target||Wt();Uj()&&(r.once=!0);const o=nH(i,r.ssrKey,Zw,Ac()),a=o!==Zw;a&&(s.value=o);let c=!a;const l=Wt(!1),u=Wt(),h=FE(),p=TE();let m=rr;function y(){let A=Nt(t);const k=new Promise((N,P)=>{if(n(r.reset),!A)return n=rr,N(null);l.value=c,c=!0,A.converter||(A=A.withConverter(r.converter)),n=(Tg(A)?cH:aH)(s,A,uH,N,P,r)}).catch(N=>(h.value===k&&(u.value=N),Promise.reject(N))).finally(()=>{h.value===k&&(l.value=!1)});h.value=k}let v=rr;At(t)&&(v=fi(t,y)),y(),i&&(m=iH(h.value,i,r.ssrKey)),f0()&&XE(()=>h.value),p&&c1(b);function b(A=r.reset){v(),m(),n(A)}return Object.defineProperties(s,{error:{get:()=>u},data:{get:()=>s},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>b}})}const uH={set:(t,e,n)=>kj(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function bR(t,e){return lH(t,e)}function hH(t){return(e,n)=>{const r=Bj(e,n).run(()=>Wt(t));aC.set(e,r),Wj(r,e)}}function _W(t){return Pj?rC(Ac(t)):null}function dH(t,{firebaseApp:e,modules:n=[]}){t.provide(oC,e);for(const r of n)r(e,t)}const fH={key:0,class:"userData"},pH=fr({__name:"Scanner",setup(t){const e=Wt();function n(r){const i=bR(Db(Yb,`codes/${r}`),{once:!0});e.value=qt(()=>{var s;return(s=i.value)==null?void 0:s.user})}return(r,i)=>(fn(),Fr(Rn,null,[Gt(ZU,{"on-code-found":n}),e.value?(fn(),Fr("div",fH,o1(e.value.username),1)):d0("",!0)],64))}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zg=t=>e=>typeof e=="function"?((n,r)=>(customElements.define(n,r),r))(t,e):((n,r)=>{const{kind:i,elements:s}=r;return{kind:i,elements:s,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mH=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},gH=(t,e,n)=>{e.constructor.createProperty(n,t)};function qr(t){return(e,n)=>n!==void 0?gH(t,e,n):mH(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function AR(t){return qr({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const CR=({finisher:t,descriptor:e})=>(n,r)=>{var i;if(r===void 0){const s=(i=n.originalKey)!==null&&i!==void 0?i:n.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(n.key)}:{...n,key:s};return t!=null&&(o.finisher=function(a){t(a,s)}),o}{const s=n.constructor;e!==void 0&&Object.defineProperty(n,r,e(r)),t==null||t(s,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function RR(t,e){return CR({descriptor:n=>{const r={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const i=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var s,o;return this[i]===void 0&&(this[i]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&o!==void 0?o:null),this[i]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wd;const _H=((Wd=window.HTMLSlotElement)===null||Wd===void 0?void 0:Wd.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function yW(t){const{slot:e,selector:n}=t??{};return CR({descriptor:r=>({get(){var i;const s="slot"+(e?`[name=${e}]`:":not([name])"),o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(s),a=o!=null?_H(o,t):[];return n?a.filter(c=>c.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tl=window,qg=Tl.ShadowRoot&&(Tl.ShadyCSS===void 0||Tl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kg=Symbol(),eE=new WeakMap;let SR=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Kg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(qg&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=eE.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&eE.set(n,e))}return e}toString(){return this.cssText}};const yH=t=>new SR(typeof t=="string"?t:t+"",void 0,Kg),Nh=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new SR(n,t,Kg)},vH=(t,e)=>{qg?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),i=Tl.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},tE=qg?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return yH(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zd;const Eu=window,nE=Eu.trustedTypes,wH=nE?nE.emptyScript:"",rE=Eu.reactiveElementPolyfillSupport,vp={toAttribute(t,e){switch(e){case Boolean:t=t?wH:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},PR=(t,e)=>e!==t&&(e==e||t==t),qd={attribute:!0,type:String,converter:vp,reflect:!1,hasChanged:PR},wp="finalized";let Ns=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=qd){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){const s=this[e];this[n]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||qd}static finalize(){if(this.hasOwnProperty(wp))return!1;this[wp]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(tE(i))}else e!==void 0&&n.push(tE(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return vH(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=qd){var i;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:vp).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,n){var r;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:vp;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||PR)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ns[wp]=!0,Ns.elementProperties=new Map,Ns.elementStyles=[],Ns.shadowRootOptions={mode:"open"},rE==null||rE({ReactiveElement:Ns}),((zd=Eu.reactiveElementVersions)!==null&&zd!==void 0?zd:Eu.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kd;const Tu=window,go=Tu.trustedTypes,iE=go?go.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ep="$lit$",oi=`lit$${(Math.random()+"").slice(9)}$`,kR="?"+oi,EH=`<${kR}>`,ps=document,tc=()=>ps.createComment(""),nc=t=>t===null||typeof t!="object"&&typeof t!="function",NR=Array.isArray,TH=t=>NR(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Gd=`[ 	
\f\r]`,Qo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sE=/-->/g,oE=/>/g,Vi=RegExp(`>|${Gd}(?:([^\\s"'>=/]+)(${Gd}*=${Gd}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),aE=/'/g,cE=/"/g,OR=/^(?:script|style|textarea|title)$/i,IH=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Rr=IH(1),ms=Symbol.for("lit-noChange"),ft=Symbol.for("lit-nothing"),lE=new WeakMap,Qi=ps.createTreeWalker(ps,129,null,!1);function DR(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return iE!==void 0?iE.createHTML(e):e}const bH=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=Qo;for(let a=0;a<n;a++){const c=t[a];let l,u,h=-1,p=0;for(;p<c.length&&(o.lastIndex=p,u=o.exec(c),u!==null);)p=o.lastIndex,o===Qo?u[1]==="!--"?o=sE:u[1]!==void 0?o=oE:u[2]!==void 0?(OR.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=Vi):u[3]!==void 0&&(o=Vi):o===Vi?u[0]===">"?(o=i??Qo,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?Vi:u[3]==='"'?cE:aE):o===cE||o===aE?o=Vi:o===sE||o===oE?o=Qo:(o=Vi,i=void 0);const m=o===Vi&&t[a+1].startsWith("/>")?" ":"";s+=o===Qo?c+EH:h>=0?(r.push(l),c.slice(0,h)+Ep+c.slice(h)+oi+m):c+oi+(h===-2?(r.push(void 0),a):m)}return[DR(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class rc{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=e.length-1,c=this.parts,[l,u]=bH(e,n);if(this.el=rc.createElement(l,r),Qi.currentNode=this.el.content,n===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(i=Qi.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const p of i.getAttributeNames())if(p.endsWith(Ep)||p.startsWith(oi)){const m=u[o++];if(h.push(p),m!==void 0){const y=i.getAttribute(m.toLowerCase()+Ep).split(oi),v=/([.?@])?(.*)/.exec(m);c.push({type:1,index:s,name:v[2],strings:y,ctor:v[1]==="."?CH:v[1]==="?"?SH:v[1]==="@"?PH:Oh})}else c.push({type:6,index:s})}for(const p of h)i.removeAttribute(p)}if(OR.test(i.tagName)){const h=i.textContent.split(oi),p=h.length-1;if(p>0){i.textContent=go?go.emptyScript:"";for(let m=0;m<p;m++)i.append(h[m],tc()),Qi.nextNode(),c.push({type:2,index:++s});i.append(h[p],tc())}}}else if(i.nodeType===8)if(i.data===kR)c.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(oi,h+1))!==-1;)c.push({type:7,index:s}),h+=oi.length-1}s++}}static createElement(e,n){const r=ps.createElement("template");return r.innerHTML=e,r}}function _o(t,e,n=t,r){var i,s,o,a;if(e===ms)return e;let c=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const l=nc(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((s=c==null?void 0:c._$AO)===null||s===void 0||s.call(c,!1),l===void 0?c=void 0:(c=new l(t),c._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=c:n._$Cl=c),c!==void 0&&(e=_o(t,c._$AS(t,e.values),c,r)),e}class AH{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:ps).importNode(r,!0);Qi.currentNode=s;let o=Qi.nextNode(),a=0,c=0,l=i[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new Nc(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new kH(o,this,e)),this._$AV.push(u),l=i[++c]}a!==(l==null?void 0:l.index)&&(o=Qi.nextNode(),a++)}return Qi.currentNode=ps,s}v(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class Nc{constructor(e,n,r,i){var s;this.type=2,this._$AH=ft,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=_o(this,e,n),nc(e)?e===ft||e==null||e===""?(this._$AH!==ft&&this._$AR(),this._$AH=ft):e!==this._$AH&&e!==ms&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):TH(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ft&&nc(this._$AH)?this._$AA.nextSibling.data=e:this.$(ps.createTextNode(e)),this._$AH=e}g(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=rc.createElement(DR(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new AH(s,this),a=o.u(this.options);o.v(r),this.$(a),this._$AH=o}}_$AC(e){let n=lE.get(e.strings);return n===void 0&&lE.set(e.strings,n=new rc(e)),n}T(e){NR(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new Nc(this.k(tc()),this.k(tc()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Oh{constructor(e,n,r,i,s){this.type=1,this._$AH=ft,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ft}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=_o(this,e,n,0),o=!nc(e)||e!==this._$AH&&e!==ms,o&&(this._$AH=e);else{const a=e;let c,l;for(e=s[0],c=0;c<s.length-1;c++)l=_o(this,a[r+c],n,c),l===ms&&(l=this._$AH[c]),o||(o=!nc(l)||l!==this._$AH[c]),l===ft?e=ft:e!==ft&&(e+=(l??"")+s[c+1]),this._$AH[c]=l}o&&!i&&this.j(e)}j(e){e===ft?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class CH extends Oh{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ft?void 0:e}}const RH=go?go.emptyScript:"";class SH extends Oh{constructor(){super(...arguments),this.type=4}j(e){e&&e!==ft?this.element.setAttribute(this.name,RH):this.element.removeAttribute(this.name)}}class PH extends Oh{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){var r;if((e=(r=_o(this,e,n,0))!==null&&r!==void 0?r:ft)===ms)return;const i=this._$AH,s=e===ft&&i!==ft||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==ft&&(i===ft||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class kH{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){_o(this,e)}}const uE=Tu.litHtmlPolyfillSupport;uE==null||uE(rc,Nc),((Kd=Tu.litHtmlVersions)!==null&&Kd!==void 0?Kd:Tu.litHtmlVersions=[]).push("2.8.0");const NH=(t,e,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=s._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new Nc(e.insertBefore(tc(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qd,Yd;class ts extends Ns{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=NH(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ms}}ts.finalized=!0,ts._$litElement$=!0,(Qd=globalThis.litElementHydrateSupport)===null||Qd===void 0||Qd.call(globalThis,{LitElement:ts});const hE=globalThis.litElementPolyfillSupport;hE==null||hE({LitElement:ts});((Yd=globalThis.litElementVersions)!==null&&Yd!==void 0?Yd:globalThis.litElementVersions=[]).push("3.3.3");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const OH=Nh`@media(forced-colors: active){:host{--md-switch-disabled-selected-icon-color: GrayText;--md-switch-disabled-selected-icon-opacity: 1;--md-switch-disabled-selected-track-color: GrayText;--md-switch-disabled-track-opacity: 1;--md-switch-disabled-handle-color: GrayText;--md-switch-disabled-handle-opacity: 1;--md-switch-disabled-icon-color: Canvas;--md-switch-disabled-icon-opacity: 1;--md-switch-selected-focus-track-color: ButtonText;--md-switch-selected-hover-track-color: ButtonText;--md-switch-selected-icon-color: ButtonText;--md-switch-selected-hover-icon-color: ButtonText;--md-switch-selected-focus-icon-color: ButtonText;--md-switch-selected-pressed-icon-color: ButtonText;--md-switch-selected-pressed-track-color: ButtonText;--md-switch-selected-track-color: ButtonText;--md-switch-focus-handle-color: ButtonText;--md-switch-handle-color: ButtonText;--md-switch-hover-handle-color: ButtonText;--md-switch-icon-color: Canvas;--md-switch-hover-icon-color: Canvas;--md-switch-focus-icon-color: Canvas;--md-switch-pressed-icon-color: Canvas;--md-switch-pressed-handle-color: ButtonText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const MR=Symbol("attachableController");let Il;Il=new MutationObserver(t=>{var e;for(const n of t)(e=n.target[MR])==null||e.hostConnected()});class xR{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}constructor(e,n){this.host=e,this.onControlChange=n,this.currentControl=null,e.addController(this),e[MR]=this,Il==null||Il.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const DH=["focusin","focusout","pointerdown"];class Gg extends ts{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new xR(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}handleEvent(e){var n;if(!e[dE]){switch(e.type){default:return;case"focusin":this.visible=((n=this.control)==null?void 0:n.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[dE]=!0}}onControlChange(e,n){for(const r of DH)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}ln([qr({type:Boolean,reflect:!0})],Gg.prototype,"visible",void 0);ln([qr({type:Boolean,reflect:!0})],Gg.prototype,"inward",void 0);const dE=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const MH=Nh`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Tp=class extends Gg{};Tp.styles=[MH];Tp=ln([zg("md-focus-ring")],Tp);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xH={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},LH=t=>(...e)=>({_$litDirective$:t,values:e});class VH{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ip=LH(class extends VH{constructor(t){var e;if(super(t),t.type!==xH.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,r;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((n=this.nt)===null||n===void 0)&&n.has(s))&&this.it.add(s);return this.render(e)}const i=t.element.classList;this.it.forEach(s=>{s in e||(i.remove(s),this.it.delete(s))});for(const s in e){const o=!!e[s];o===this.it.has(s)||!((r=this.nt)===null||r===void 0)&&r.has(s)||(o?(i.add(s),this.it.add(s)):(i.remove(s),this.it.delete(s)))}return ms}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const FH={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $H=450,fE=225,UH=.2,BH=10,jH=75,HH=.35,WH="::after",zH="forwards";var sn;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(sn||(sn={}));const qH=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],KH=150;class Oc extends ts{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=sn.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new xR(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}render(){const e={hovered:this.hovered,pressed:this.pressed};return Rr`<div class="surface ${Ip(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==sn.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===sn.HOLDING){this.state=sn.WAITING_FOR_CLICK;return}if(this.state===sn.TOUCH_DELAY){this.state=sn.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=sn.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=sn.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,KH)}),this.state===sn.TOUCH_DELAY&&(this.state=sn.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===sn.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===sn.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:n}=this.getBoundingClientRect(),r=Math.max(e,n),i=Math.max(HH*r,jH),s=Math.floor(r*UH),a=Math.sqrt(n**2+e**2)+BH;this.initialSize=s,this.rippleScale=`${(a+i)/s}`,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(e){const{scrollX:n,scrollY:r}=window,{left:i,top:s}=this.getBoundingClientRect(),o=n+i,a=r+s,{pageX:c,pageY:l}=e;return{x:c-o,y:l-a}}getTranslationCoordinates(e){const{height:n,width:r}=this.getBoundingClientRect(),i={x:(r-this.initialSize)/2,y:(n-this.initialSize)/2};let s;return e instanceof PointerEvent?s=this.getNormalizedPointerEventCoords(e):s={x:r/2,y:n/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:i}}startPressAnimation(e){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:n,endPoint:r}=this.getTranslationCoordinates(e),i=`${n.x}px, ${n.y}px`,s=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${s}) scale(${this.rippleScale})`]},{pseudoElement:WH,duration:$H,easing:FH.STANDARD,fill:zH})}async endPressAnimation(){this.state=sn.INACTIVE;const e=this.growAnimation,n=(e==null?void 0:e.currentTime)??1/0;if(n>=fE){this.pressed=!1;return}await new Promise(r=>{setTimeout(r,fE-n)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const n=e.buttons===1;return this.isTouch(e)||n}inBounds({x:e,y:n}){const{top:r,left:i,bottom:s,right:o}=this.getBoundingClientRect();return e>=i&&e<=o&&n>=r&&n<=s}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,n){for(const r of qH)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}}ln([qr({type:Boolean,reflect:!0})],Oc.prototype,"disabled",void 0);ln([AR()],Oc.prototype,"hovered",void 0);ln([AR()],Oc.prototype,"pressed",void 0);ln([RR(".surface")],Oc.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const GH=Nh`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let bp=class extends Oc{};bp.styles=[GH];bp=ln([zg("md-ripple")],bp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const LR=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];LR.map(VR);function VR(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function QH(t){for(const e of LR)t.createProperty(e,{attribute:VR(e),reflect:!0});t.addInitializer(e=>{const n={hostConnected(){e.setAttribute("role","presentation")}};e.addController(n)})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function IW(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(n);return r||e.preventDefault(),r}function YH(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function JH(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!XH(t)}function XH(t){const e=Ap;return e&&(t.preventDefault(),t.stopImmediatePropagation()),ZH(),e}let Ap=!1;async function ZH(){Ap=!0,await null,Ap=!1}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class yr extends ts{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.disabled=!1,this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.value="on",this.internals=this.attachInternals(),this.addEventListener("click",e=>{var n;JH(e)&&((n=this.button)==null||n.focus(),this.button!=null&&YH(this.button))})}update(e){const n=String(this.selected);this.internals.setFormValue(this.selected?this.value:null,n),super.update(e)}render(){return Rr`
      <button
        id="switch"
        type="button"
        class="switch ${Ip(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label=${this.ariaLabel||ft}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <md-focus-ring part="focus-ring"></md-focus-ring>
        <span class="track">
          ${this.renderHandle()}
        </span>
      </button>
    `}getRenderClasses(){return{"switch--selected":this.selected,"switch--unselected":!this.selected}}renderHandle(){const e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return Rr`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${Ip(e)}">
          ${this.shouldShowIcons()?this.renderIcons():Rr``}
        </span>
      </span>
    `}renderIcons(){return Rr`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?Rr``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return Rr`
      <svg class="icon icon--on" viewBox="0 0 24 24">
        <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z"/>
      </svg>
    `}renderOffIcon(){return Rr`
      <svg class="icon icon--off" viewBox="0 0 24 24">
        <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"/>
      </svg>
    `}renderTouchTarget(){return Rr`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleClick(){this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected=e==="true"}}QH(yr);yr.shadowRootOptions={mode:"open",delegatesFocus:!0};yr.formAssociated=!0;ln([qr({type:Boolean,reflect:!0})],yr.prototype,"disabled",void 0);ln([qr({type:Boolean})],yr.prototype,"selected",void 0);ln([qr({type:Boolean})],yr.prototype,"icons",void 0);ln([qr({type:Boolean,attribute:"show-only-selected-icon"})],yr.prototype,"showOnlySelectedIcon",void 0);ln([RR("button")],yr.prototype,"button",void 0);ln([qr()],yr.prototype,"value",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const eW=Nh`:host{--_disabled-selected-handle-color: var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));--_disabled-selected-handle-opacity: var(--md-switch-disabled-selected-handle-opacity, 1);--_disabled-selected-icon-color: var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-switch-disabled-selected-icon-opacity, 0.38);--_disabled-selected-track-color: var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-track-opacity: var(--md-switch-disabled-track-opacity, 0.12);--_handle-shape: var(--md-switch-handle-shape, 9999px);--_pressed-handle-height: var(--md-switch-pressed-handle-height, 28px);--_pressed-handle-width: var(--md-switch-pressed-handle-width, 28px);--_selected-focus-handle-color: var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-focus-icon-color: var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-focus-track-color: var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4));--_selected-handle-color: var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff));--_selected-handle-height: var(--md-switch-selected-handle-height, 24px);--_selected-handle-width: var(--md-switch-selected-handle-width, 24px);--_selected-hover-handle-color: var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-hover-icon-color: var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-hover-state-layer-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--_selected-hover-track-color: var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4));--_selected-icon-color: var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-icon-size: var(--md-switch-selected-icon-size, 16px);--_selected-pressed-handle-color: var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-pressed-icon-color: var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-pressed-state-layer-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12);--_selected-pressed-track-color: var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4));--_selected-track-color: var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4));--_state-layer-shape: var(--md-switch-state-layer-shape, 9999px);--_state-layer-size: var(--md-switch-state-layer-size, 40px);--_track-height: var(--md-switch-track-height, 32px);--_track-outline-width: var(--md-switch-track-outline-width, 2px);--_track-shape: var(--md-switch-track-shape, 9999px);--_track-width: var(--md-switch-track-width, 52px);--_with-icon-handle-height: var(--md-switch-with-icon-handle-height, 24px);--_with-icon-handle-width: var(--md-switch-with-icon-handle-width, 24px);--_disabled-handle-color: var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-opacity: var(--md-switch-disabled-handle-opacity, 0.38);--_disabled-icon-color: var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-icon-opacity: var(--md-switch-disabled-icon-opacity, 0.38);--_disabled-track-color: var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-track-outline-color: var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-handle-color: var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color: var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-color: var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-outline-color: var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-color: var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e));--_handle-height: var(--md-switch-handle-height, 16px);--_handle-width: var(--md-switch-handle-width, 16px);--_hover-handle-color: var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-state-layer-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--_hover-track-color: var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-track-outline-color: var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e));--_icon-color: var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_icon-size: var(--md-switch-icon-size, 16px);--_pressed-handle-color: var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-state-layer-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12);--_pressed-track-color: var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-track-outline-color: var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e));--_track-color: var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-outline-color: var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-shape-start-start: var( --md-switch-handle-shape-start-start, var(--_handle-shape) );--_handle-shape-start-end: var( --md-switch-handle-shape-start-end, var(--_handle-shape) );--_handle-shape-end-end: var( --md-switch-handle-shape-end-end, var(--_handle-shape) );--_handle-shape-end-start: var( --md-switch-handle-shape-end-start, var(--_handle-shape) );--_track-shape-start-start: var( --md-switch-track-shape-start-start, var(--_track-shape) );--_track-shape-start-end: var( --md-switch-track-shape-start-end, var(--_track-shape) );--_track-shape-end-end: var( --md-switch-track-shape-end-end, var(--_track-shape) );--_track-shape-end-start: var( --md-switch-track-shape-end-start, var(--_track-shape) );display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_track-height))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--_track-shape-start-start);--md-focus-ring-shape-start-end: var(--_track-shape-start-end);--md-focus-ring-shape-end-end: var(--_track-shape-end-end);--md-focus-ring-shape-end-start: var(--_track-shape-end-start)}.switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;padding:0;position:relative;width:var(--_track-width);height:var(--_track-height);border-start-start-radius:var(--_track-shape-start-start);border-start-end-radius:var(--_track-shape-start-end);border-end-end-radius:var(--_track-shape-end-end);border-end-start-radius:var(--_track-shape-end-start)}.touch{position:absolute;height:48px;width:100%}:host([touch-target=none]) .touch{display:none}.switch:disabled{cursor:default;pointer-events:none}.switch:disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.switch:disabled .track::before{background-clip:content-box}.switch--selected:disabled .track{background-clip:border-box}.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.switch:disabled .track::before,.switch:disabled .track::after{transition:none;opacity:var(--_disabled-track-opacity)}.switch--selected .track::before{background-color:var(--_selected-track-color)}.switch--selected:hover .track::before{background-color:var(--_selected-hover-track-color)}.switch--selected:focus-within .track::before{background-color:var(--_selected-focus-track-color)}.switch--selected:active .track::before{background-color:var(--_selected-pressed-track-color)}.switch--selected:disabled .track::before{background-color:var(--_disabled-selected-track-color)}.switch--unselected .track::before{background-color:var(--_track-color);border-color:var(--_track-outline-color);border-style:solid;border-width:var(--_track-outline-width)}.switch--unselected:hover .track::before{background-color:var(--_hover-track-color);border-color:var(--_hover-track-outline-color)}.switch--unselected:focus-visible .track::before{background-color:var(--_focus-track-color);border-color:var(--_focus-track-outline-color)}.switch--unselected:active .track::before{background-color:var(--_pressed-track-color);border-color:var(--_pressed-track-outline-color)}.switch--unselected:disabled .track::before{background-color:var(--_disabled-track-color);border-color:var(--_disabled-track-outline-color)}.handle-container{display:grid;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.switch--selected .handle-container{margin-inline-start:calc(var(--_track-width) - var(--_track-height))}.switch--unselected .handle-container{margin-inline-end:calc(var(--_track-width) - var(--_track-height))}.switch:disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--_handle-shape-start-start);border-start-end-radius:var(--_handle-shape-start-end);border-end-end-radius:var(--_handle-shape-end-end);border-end-start-radius:var(--_handle-shape-end-start);height:var(--_handle-height);width:var(--_handle-width);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.switch:disabled .handle,.switch:disabled .handle::before{transition:none}.switch--selected .handle{height:var(--_selected-handle-height);width:var(--_selected-handle-width)}.handle.with-icon{height:var(--_with-icon-handle-height);width:var(--_with-icon-handle-width)}.switch--selected:enabled:active .handle,.switch--unselected:enabled:active .handle{height:var(--_pressed-handle-height);width:var(--_pressed-handle-width);transition-timing-function:linear;transition-duration:100ms}.switch--selected .handle::before{background-color:var(--_selected-handle-color)}.switch--selected:hover .handle::before{background-color:var(--_selected-hover-handle-color)}.switch--selected:focus-within .handle::before{background-color:var(--_selected-focus-handle-color)}.switch--selected:active .handle::before{background-color:var(--_selected-pressed-handle-color)}.switch--selected:disabled .handle::before{background-color:var(--_disabled-selected-handle-color);opacity:var(--_disabled-selected-handle-opacity)}.switch--unselected .handle::before{background-color:var(--_handle-color)}.switch--unselected:hover .handle::before{background-color:var(--_hover-handle-color)}.switch--unselected:focus-within .handle::before{background-color:var(--_focus-handle-color)}.switch--unselected:active .handle::before{background-color:var(--_pressed-handle-color)}.switch--unselected:disabled .handle::before{background-color:var(--_disabled-handle-color);opacity:var(--_disabled-handle-opacity)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.switch--selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.switch--unselected md-ripple{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.switch:disabled .icon{transition:none}.switch--selected .icon--on,.switch--unselected .icon--off{opacity:1}.switch--unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--_icon-size);height:var(--_icon-size);fill:var(--_icon-color)}.switch--unselected:hover .icon--off{fill:var(--_hover-icon-color)}.switch--unselected:focus-within .icon--off{fill:var(--_focus-icon-color)}.switch--unselected:active .icon--off{fill:var(--_pressed-icon-color)}.switch--unselected:disabled .icon--off{fill:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.icon--on{width:var(--_selected-icon-size);height:var(--_selected-icon-size);fill:var(--_selected-icon-color)}.switch--selected:hover .icon--on{fill:var(--_selected-hover-icon-color)}.switch--selected:focus-within .icon--on{fill:var(--_selected-focus-icon-color)}.switch--selected:active .icon--on{fill:var(--_selected-pressed-icon-color)}.switch--selected:disabled .icon--on{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=switch-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Cp=class extends yr{};Cp.styles=[eW,OH];Cp=ln([zg("md-switch")],Cp);const tW={class:"section"},nW=fr({__name:"HomeView",setup(t){var s;const e=jj(),n=bR(Db(Yb,`users/${(s=e.value)==null?void 0:s.uid}`)),r=qt(()=>{var o;return((o=n.value)==null?void 0:o.role)==="scanner"}),i=qt(()=>{var o;return(o=n.value)==null?void 0:o.actualCode});return(o,a)=>(fn(),Fr("main",null,[ai("div",tW,[!r.value&&i.value?(fn(),Pa(yD,{key:0,codeString:i.value},null,8,["codeString"])):(fn(),Pa(pH,{key:1}))])]))}});const FR=TO({history:$N("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!0},component:nW},{path:"/login",name:"login",component:()=>RO(()=>import("./LoginView-e08418d4.js"),["assets/LoginView-e08418d4.js","assets/LoginView-3097d488.css"])}]});FR.beforeEach(async t=>{if(t.meta.requiresAuth&&!await Hj())return{path:"/login",query:{redirect:t.fullPath}}});const Dh=_N(bO);Dh.use(EN());Dh.use(FR);Dh.use(dH,{firebaseApp:Qb,modules:[hH()]});Dh.mount("#app");export{ft as A,o1 as B,d0 as C,NH as D,FH as E,xk as F,rW as G,iW as H,hW as I,fW as J,uW as K,Db as L,Yb as M,dW as N,ri as O,Hp as P,gW as Q,Pa as R,pW as S,ms as T,mW as U,jj as V,Nt as W,ln as _,Nh as a,LH as b,VH as c,xH as d,zg as e,IW as f,JH as g,YH as h,RR as i,fr as j,Wt as k,yW as l,sW as m,qr as n,Ip as o,fn as p,Fr as q,QH as r,ts as s,AR as t,_W as u,ai as v,Gt as w,Rr as x,KE as y,zc as z};
