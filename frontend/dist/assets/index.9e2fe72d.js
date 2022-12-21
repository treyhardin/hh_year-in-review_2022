(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Lr={};function d_(r){Lr.context=r}const p_=(r,e)=>r===e,m_=Symbol("solid-track"),fl={equals:p_};let Cp=Lp;const gr=1,hl=2,Ap={owned:null,cleanups:null,context:null,owner:null};var Zt=null;let Br=null,It=null,Qt=null,ki=null,Yu=0;function Za(r,e){const t=It,n=Zt,i=r.length===0,s=i?Ap:{owned:null,cleanups:null,context:null,owner:e||n},a=i?r:()=>r(()=>ao(()=>Ku(s)));Zt=s,It=null;try{return Jo(a,!0)}finally{It=t,Zt=n}}function _r(r,e){e=e?Object.assign({},fl,e):fl;const t={value:r,observers:null,observerSlots:null,comparator:e.equals||void 0},n=i=>(typeof i=="function"&&(i=i(t.value)),Dp(t,i));return[Rp.bind(t),n]}function et(r,e,t){const n=Zu(r,e,!1,gr);Ko(n)}function g_(r,e,t){Cp=y_;const n=Zu(r,e,!1,gr);n.user=!0,ki?ki.push(n):Ko(n)}function Pp(r,e,t){t=t?Object.assign({},fl,t):fl;const n=Zu(r,e,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=t.equals||void 0,Ko(n),Rp.bind(n)}function ao(r){const e=It;It=null;try{return r()}finally{It=e}}function Yn(r){g_(()=>ao(r))}function __(r){return Zt===null||(Zt.cleanups===null?Zt.cleanups=[r]:Zt.cleanups.push(r)),r}function Rp(){const r=Br;if(this.sources&&(this.state||r))if(this.state===gr||r)Ko(this);else{const e=Qt;Qt=null,Jo(()=>pl(this),!1),Qt=e}if(It){const e=this.observers?this.observers.length:0;It.sources?(It.sources.push(this),It.sourceSlots.push(e)):(It.sources=[this],It.sourceSlots=[e]),this.observers?(this.observers.push(It),this.observerSlots.push(It.sources.length-1)):(this.observers=[It],this.observerSlots=[It.sources.length-1])}return this.value}function Dp(r,e,t){let n=r.value;return(!r.comparator||!r.comparator(n,e))&&(r.value=e,r.observers&&r.observers.length&&Jo(()=>{for(let i=0;i<r.observers.length;i+=1){const s=r.observers[i],a=Br&&Br.running;a&&Br.disposed.has(s),(a&&!s.tState||!a&&!s.state)&&(s.pure?Qt.push(s):ki.push(s),s.observers&&Ip(s)),a||(s.state=gr)}if(Qt.length>1e6)throw Qt=[],new Error},!1)),e}function Ko(r){if(!r.fn)return;Ku(r);const e=Zt,t=It,n=Yu;It=Zt=r,v_(r,r.value,n),It=t,Zt=e}function v_(r,e,t){let n;try{n=r.fn(e)}catch(i){r.pure&&(r.state=gr),Op(i)}(!r.updatedAt||r.updatedAt<=t)&&(r.updatedAt!=null&&"observers"in r?Dp(r,n):r.value=n,r.updatedAt=t)}function Zu(r,e,t,n=gr,i){const s={fn:r,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:Zt,context:null,pure:t};return Zt===null||Zt!==Ap&&(Zt.owned?Zt.owned.push(s):Zt.owned=[s]),s}function dl(r){const e=Br;if(r.state===0||e)return;if(r.state===hl||e)return pl(r);if(r.suspense&&ao(r.suspense.inFallback))return r.suspense.effects.push(r);const t=[r];for(;(r=r.owner)&&(!r.updatedAt||r.updatedAt<Yu);)(r.state||e)&&t.push(r);for(let n=t.length-1;n>=0;n--)if(r=t[n],r.state===gr||e)Ko(r);else if(r.state===hl||e){const i=Qt;Qt=null,Jo(()=>pl(r,t[0]),!1),Qt=i}}function Jo(r,e){if(Qt)return r();let t=!1;e||(Qt=[]),ki?t=!0:ki=[],Yu++;try{const n=r();return x_(t),n}catch(n){Qt||(ki=null),Op(n)}}function x_(r){if(Qt&&(Lp(Qt),Qt=null),r)return;const e=ki;ki=null,e.length&&Jo(()=>Cp(e),!1)}function Lp(r){for(let e=0;e<r.length;e++)dl(r[e])}function y_(r){let e,t=0;for(e=0;e<r.length;e++){const n=r[e];n.user?r[t++]=n:dl(n)}for(Lr.context&&d_(),e=0;e<t;e++)dl(r[e])}function pl(r,e){const t=Br;r.state=0;for(let n=0;n<r.sources.length;n+=1){const i=r.sources[n];i.sources&&(i.state===gr||t?i!==e&&dl(i):(i.state===hl||t)&&pl(i,e))}}function Ip(r){const e=Br;for(let t=0;t<r.observers.length;t+=1){const n=r.observers[t];(!n.state||e)&&(n.state=hl,n.pure?Qt.push(n):ki.push(n),n.observers&&Ip(n))}}function Ku(r){let e;if(r.sources)for(;r.sources.length;){const t=r.sources.pop(),n=r.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),a=t.observerSlots.pop();n<i.length&&(s.sourceSlots[a]=n,i[n]=s,t.observerSlots[n]=a)}}if(r.owned){for(e=0;e<r.owned.length;e++)Ku(r.owned[e]);r.owned=null}if(r.cleanups){for(e=0;e<r.cleanups.length;e++)r.cleanups[e]();r.cleanups=null}r.state=0,r.context=null}function b_(r){return r instanceof Error||typeof r=="string"?r:new Error("Unknown error")}function Op(r){throw r=b_(r),r}const S_=Symbol("fallback");function Zf(r){for(let e=0;e<r.length;e++)r[e]()}function w_(r,e,t={}){let n=[],i=[],s=[],a=0,o=e.length>1?[]:null;return __(()=>Zf(s)),()=>{let l=r()||[],c,u;return l[m_],ao(()=>{let h=l.length,p,g,d,m,_,T,S,b,x;if(h===0)a!==0&&(Zf(s),s=[],n=[],i=[],a=0,o&&(o=[])),t.fallback&&(n=[S_],i[0]=Za(y=>(s[0]=y,t.fallback())),a=1);else if(a===0){for(i=new Array(h),u=0;u<h;u++)n[u]=l[u],i[u]=Za(f);a=h}else{for(d=new Array(h),m=new Array(h),o&&(_=new Array(h)),T=0,S=Math.min(a,h);T<S&&n[T]===l[T];T++);for(S=a-1,b=h-1;S>=T&&b>=T&&n[S]===l[b];S--,b--)d[b]=i[S],m[b]=s[S],o&&(_[b]=o[S]);for(p=new Map,g=new Array(b+1),u=b;u>=T;u--)x=l[u],c=p.get(x),g[u]=c===void 0?-1:c,p.set(x,u);for(c=T;c<=S;c++)x=n[c],u=p.get(x),u!==void 0&&u!==-1?(d[u]=i[c],m[u]=s[c],o&&(_[u]=o[c]),u=g[u],p.set(x,u)):s[c]();for(u=T;u<h;u++)u in d?(i[u]=d[u],s[u]=m[u],o&&(o[u]=_[u],o[u](u))):i[u]=Za(f);i=i.slice(0,a=h),n=l.slice(0)}return i});function f(h){if(s[u]=h,o){const[p,g]=_r(u);return o[u]=g,e(l[u],p)}return e(l[u])}}}function mt(r,e){return ao(()=>r(e||{}))}function Qo(r){const e="fallback"in r&&{fallback:()=>r.fallback};return Pp(w_(()=>r.each,r.children,e||void 0))}function M_(r,e,t){let n=t.length,i=e.length,s=n,a=0,o=0,l=e[i-1].nextSibling,c=null;for(;a<i||o<s;){if(e[a]===t[o]){a++,o++;continue}for(;e[i-1]===t[s-1];)i--,s--;if(i===a){const u=s<n?o?t[o-1].nextSibling:t[s-o]:l;for(;o<s;)r.insertBefore(t[o++],u)}else if(s===o)for(;a<i;)(!c||!c.has(e[a]))&&e[a].remove(),a++;else if(e[a]===t[s-1]&&t[o]===e[i-1]){const u=e[--i].nextSibling;r.insertBefore(t[o++],e[a++].nextSibling),r.insertBefore(t[--s],u),e[i]=t[s]}else{if(!c){c=new Map;let f=o;for(;f<s;)c.set(t[f],f++)}const u=c.get(e[a]);if(u!=null)if(o<u&&u<s){let f=a,h=1,p;for(;++f<i&&f<s&&!((p=c.get(e[f]))==null||p!==u+h);)h++;if(h>u-o){const g=e[a];for(;o<u;)r.insertBefore(t[o++],g)}else r.replaceChild(t[o++],e[a++])}else a++;else e[a++].remove()}}}function T_(r,e,t,n={}){let i;return Za(s=>{i=s,e===document?r():rt(e,r(),e.firstChild?null:void 0,t)},n.owner),()=>{i(),e.textContent=""}}function Mt(r,e,t){const n=document.createElement("template");n.innerHTML=r;let i=n.content.firstChild;return t&&(i=i.firstChild),i}function li(r,e,t){t==null?r.removeAttribute(e):r.setAttribute(e,t)}function Ee(r,e){e==null?r.removeAttribute("class"):r.className=e}function bt(r,e,t){return ao(()=>r(e,t))}function rt(r,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return ml(r,e,n,t);et(i=>ml(r,e(),i,t),n)}function ml(r,e,t,n,i){for(Lr.context&&!t&&(t=[...r.childNodes]);typeof t=="function";)t=t();if(e===t)return t;const s=typeof e,a=n!==void 0;if(r=a&&t[0]&&t[0].parentNode||r,s==="string"||s==="number"){if(Lr.context)return t;if(s==="number"&&(e=e.toString()),a){let o=t[0];o&&o.nodeType===3?o.data=e:o=document.createTextNode(e),t=ls(r,t,n,o)}else t!==""&&typeof t=="string"?t=r.firstChild.data=e:t=r.textContent=e}else if(e==null||s==="boolean"){if(Lr.context)return t;t=ls(r,t,n)}else{if(s==="function")return et(()=>{let o=e();for(;typeof o=="function";)o=o();t=ml(r,o,t,n)}),()=>t;if(Array.isArray(e)){const o=[],l=t&&Array.isArray(t);if(ou(o,e,t,i))return et(()=>t=ml(r,o,t,n,!0)),()=>t;if(Lr.context){if(!o.length)return t;for(let c=0;c<o.length;c++)if(o[c].parentNode)return t=o}if(o.length===0){if(t=ls(r,t,n),a)return t}else l?t.length===0?Kf(r,o,n):M_(r,t,o):(t&&ls(r),Kf(r,o));t=o}else if(e instanceof Node){if(Lr.context&&e.parentNode)return t=a?[e]:e;if(Array.isArray(t)){if(a)return t=ls(r,t,n,e);ls(r,t,null,e)}else t==null||t===""||!r.firstChild?r.appendChild(e):r.replaceChild(e,r.firstChild);t=e}}return t}function ou(r,e,t,n){let i=!1;for(let s=0,a=e.length;s<a;s++){let o=e[s],l=t&&t[s];if(o instanceof Node)r.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=ou(r,o,l)||i;else if(typeof o=="function")if(n){for(;typeof o=="function";)o=o();i=ou(r,Array.isArray(o)?o:[o],Array.isArray(l)?l:[l])||i}else r.push(o),i=!0;else{const c=String(o);l&&l.nodeType===3&&l.data===c?r.push(l):r.push(document.createTextNode(c))}}return i}function Kf(r,e,t=null){for(let n=0,i=e.length;n<i;n++)r.insertBefore(e[n],t)}function ls(r,e,t,n){if(t===void 0)return r.textContent="";const i=n||document.createTextNode("");if(e.length){let s=!1;for(let a=e.length-1;a>=0;a--){const o=e[a];if(i!==o){const l=o.parentNode===r;!s&&!a?l?r.replaceChild(i,o):r.insertBefore(i,t):l&&o.remove()}else s=!0}}else r.insertBefore(i,t);return[i]}const E_={};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ju="146",C_=0,Jf=1,A_=2,Fp=1,P_=2,So=3,Xs=0,$n=1,nr=2,cr=0,Vs=1,Qf=2,eh=3,th=4,R_=5,Rs=100,D_=101,L_=102,nh=103,ih=104,I_=200,O_=201,F_=202,N_=203,Np=204,Up=205,U_=206,z_=207,k_=208,B_=209,V_=210,G_=0,H_=1,W_=2,au=3,$_=4,q_=5,j_=6,X_=7,zp=0,kp=1,Y_=2,Bi=0,Z_=1,K_=2,J_=3,Bp=4,Q_=5,Vp=300,Ys=301,Zs=302,lu=303,cu=304,Al=306,uu=1e3,si=1001,fu=1002,hn=1003,rh=1004,sh=1005,zn=1006,e0=1007,Pl=1008,Yr=1009,t0=1010,n0=1011,Gp=1012,i0=1013,Fr=1014,Nr=1015,Vo=1016,r0=1017,s0=1018,Gs=1020,o0=1021,a0=1022,oi=1023,l0=1024,c0=1025,Vr=1026,Ks=1027,u0=1028,f0=1029,h0=1030,d0=1031,p0=1033,Zl=33776,Kl=33777,Jl=33778,Ql=33779,oh=35840,ah=35841,lh=35842,ch=35843,m0=36196,uh=37492,fh=37496,hh=37808,dh=37809,ph=37810,mh=37811,gh=37812,_h=37813,vh=37814,xh=37815,yh=37816,bh=37817,Sh=37818,wh=37819,Mh=37820,Th=37821,Eh=36492,Zr=3e3,pt=3001,g0=3200,_0=3201,v0=0,x0=1,Li="srgb",Ur="srgb-linear",ec=7680,y0=519,Ch=35044,Ah="300 es",hu=1035;class lo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=Math.PI/180,Ph=180/Math.PI;function ea(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[r&255]+Xt[r>>8&255]+Xt[r>>16&255]+Xt[r>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Tn(r,e,t){return Math.max(e,Math.min(t,r))}function b0(r,e){return(r%e+e)%e}function nc(r,e,t){return(1-t)*r+t*e}function Rh(r){return(r&r-1)===0&&r!==0}function du(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ca(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vn{constructor(){Vn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],d=i[0],m=i[3],_=i[6],T=i[1],S=i[4],b=i[7],x=i[2],y=i[5],w=i[8];return s[0]=a*d+o*T+l*x,s[3]=a*m+o*S+l*y,s[6]=a*_+o*b+l*w,s[1]=c*d+u*T+f*x,s[4]=c*m+u*S+f*y,s[7]=c*_+u*b+f*w,s[2]=h*d+p*T+g*x,s[5]=h*m+p*S+g*y,s[8]=h*_+p*b+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,g=t*f+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(i*c-u*n)*d,e[2]=(o*n-i*a)*d,e[3]=h*d,e[4]=(u*t-i*l)*d,e[5]=(i*s-o*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(a*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Hp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Go(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ka(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ic={[Li]:{[Ur]:Gr},[Ur]:{[Li]:Ka}},Kn={legacyMode:!0,get workingColorSpace(){return Ur},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(ic[e]&&ic[e][t]!==void 0){const n=ic[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lt={r:0,g:0,b:0},Jn={h:0,s:0,l:0},ua={h:0,s:0,l:0};function rc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function fa(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class xt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ur){return this.r=e,this.g=t,this.b=n,Kn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ur){if(e=b0(e,1),t=Tn(t,0,1),n=Tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=rc(a,s,e+1/3),this.g=rc(a,s,e),this.b=rc(a,s,e-1/3)}return Kn.toWorkingColorSpace(this,i),this}setStyle(e,t=Li){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Kn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Kn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Kn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Kn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Li){const n=Wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}copyLinearToSRGB(e){return this.r=Ka(e.r),this.g=Ka(e.g),this.b=Ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Li){return Kn.fromWorkingColorSpace(fa(this,Lt),e),Tn(Lt.r*255,0,255)<<16^Tn(Lt.g*255,0,255)<<8^Tn(Lt.b*255,0,255)<<0}getHexString(e=Li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ur){Kn.fromWorkingColorSpace(fa(this,Lt),t);const n=Lt.r,i=Lt.g,s=Lt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ur){return Kn.fromWorkingColorSpace(fa(this,Lt),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Li){return Kn.fromWorkingColorSpace(fa(this,Lt),e),e!==Li?`color(${e} ${Lt.r} ${Lt.g} ${Lt.b})`:`rgb(${Lt.r*255|0},${Lt.g*255|0},${Lt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Jn),Jn.h+=e,Jn.s+=t,Jn.l+=n,this.setHSL(Jn.h,Jn.s,Jn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(ua);const n=nc(Jn.h,ua.h,t),i=nc(Jn.s,ua.s,t),s=nc(Jn.l,ua.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}xt.NAMES=Wp;let cs;class $p{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=Go("canvas")),cs.width=e.width,cs.height=e.height;const n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Go("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Gr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gr(t[n]/255)*255):t[n]=Gr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class qp{constructor(e=null){this.isSource=!0,this.uuid=ea(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(sc(i[a].image)):s.push(sc(i[a]))}else s=sc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function sc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$p.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let S0=0;class ui extends lo{constructor(e=ui.DEFAULT_IMAGE,t=ui.DEFAULT_MAPPING,n=si,i=si,s=zn,a=Pl,o=oi,l=Yr,c=1,u=Zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=ea(),this.name="",this.source=new qp(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uu:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case fu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uu:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case fu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=Vp;class $t{constructor(e=0,t=0,n=0,i=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(p+1)/2,x=(_+1)/2,y=(u+h)/4,w=(f+d)/4,v=(g+m)/4;return S>b&&S>x?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=y/n,s=w/n):b>x?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=y/i,s=v/i):x<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(x),n=w/s,i=v/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-d)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kr extends lo{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ui(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jp extends ui{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class w0 extends ui{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ta{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[a+0],p=s[a+1],g=s[a+2],d=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==p||u!==g){let m=1-o;const _=l*h+c*p+u*g+f*d,T=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const x=Math.sqrt(S),y=Math.atan2(x,_*T);m=Math.sin(m*y)/x,o=Math.sin(o*y)/x}const b=o*T;if(l=l*m+h*b,c=c*m+p*b,u=u*m+g*b,f=f*m+d*b,m===1-o){const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-o*p,e[t+2]=c*g+u*p+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,n=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,f=l*i+s*n-a*t,h=-s*t-a*n-o*i;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oc.copy(this).projectOnVector(e),this.sub(oc)}reflect(e){return this.sub(oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oc=new Z,Dh=new ta;class na{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Sr.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Sr)}else n.boundingBox===null&&n.computeBoundingBox(),ac.copy(n.boundingBox),ac.applyMatrix4(e.matrixWorld),this.union(ac);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sr),Sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),ha.subVectors(this.max,po),us.subVectors(e.a,po),fs.subVectors(e.b,po),hs.subVectors(e.c,po),Wi.subVectors(fs,us),$i.subVectors(hs,fs),wr.subVectors(us,hs);let t=[0,-Wi.z,Wi.y,0,-$i.z,$i.y,0,-wr.z,wr.y,Wi.z,0,-Wi.x,$i.z,0,-$i.x,wr.z,0,-wr.x,-Wi.y,Wi.x,0,-$i.y,$i.x,0,-wr.y,wr.x,0];return!lc(t,us,fs,hs,ha)||(t=[1,0,0,0,1,0,0,0,1],!lc(t,us,fs,hs,ha))?!1:(da.crossVectors(Wi,$i),t=[da.x,da.y,da.z],lc(t,us,fs,hs,ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Sr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Sr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Sr=new Z,ac=new na,us=new Z,fs=new Z,hs=new Z,Wi=new Z,$i=new Z,wr=new Z,po=new Z,ha=new Z,da=new Z,Mr=new Z;function lc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Mr.fromArray(r,s);const o=i.x*Math.abs(Mr.x)+i.y*Math.abs(Mr.y)+i.z*Math.abs(Mr.z),l=e.dot(Mr),c=t.dot(Mr),u=n.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const M0=new na,mo=new Z,cc=new Z;class Qu{constructor(e=new Z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):M0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const t=mo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(mo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(cc)),this.expandByPoint(mo.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new Z,uc=new Z,pa=new Z,qi=new Z,fc=new Z,ma=new Z,hc=new Z;class T0{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.direction).multiplyScalar(t).add(this.origin),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uc.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(uc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(pa),o=qi.dot(this.direction),l=-qi.dot(pa),c=qi.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(pa).multiplyScalar(h).add(uc),p}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,i,s){fc.subVectors(t,e),ma.subVectors(n,e),hc.crossVectors(fc,ma);let a=this.direction.dot(hc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot(ma.crossVectors(qi,ma));if(l<0)return null;const c=o*this.direction.dot(fc.cross(qi));if(c<0||l+c>a)return null;const u=-o*qi.dot(hc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,u,f,h,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,g=o*u,d=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-d*c,t[9]=-o*l,t[2]=d-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h+d*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=d+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h-d*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=d-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,g=o*u,d=o*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,g=o*l,d=o*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=a*l,p=a*c,g=o*l,d=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=a*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E0,e,C0)}lookAt(e,t,n){const i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),ji.crossVectors(n,yn),ji.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),ji.crossVectors(n,yn)),ji.normalize(),ga.crossVectors(yn,ji),i[0]=ji.x,i[4]=ga.x,i[8]=yn.x,i[1]=ji.y,i[5]=ga.y,i[9]=yn.y,i[2]=ji.z,i[6]=ga.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],T=n[3],S=n[7],b=n[11],x=n[15],y=i[0],w=i[4],v=i[8],M=i[12],R=i[1],I=i[5],G=i[9],U=i[13],L=i[2],z=i[6],H=i[10],$=i[14],V=i[3],F=i[7],P=i[11],se=i[15];return s[0]=a*y+o*R+l*L+c*V,s[4]=a*w+o*I+l*z+c*F,s[8]=a*v+o*G+l*H+c*P,s[12]=a*M+o*U+l*$+c*se,s[1]=u*y+f*R+h*L+p*V,s[5]=u*w+f*I+h*z+p*F,s[9]=u*v+f*G+h*H+p*P,s[13]=u*M+f*U+h*$+p*se,s[2]=g*y+d*R+m*L+_*V,s[6]=g*w+d*I+m*z+_*F,s[10]=g*v+d*G+m*H+_*P,s[14]=g*M+d*U+m*$+_*se,s[3]=T*y+S*R+b*L+x*V,s[7]=T*w+S*I+b*z+x*F,s[11]=T*v+S*G+b*H+x*P,s[15]=T*M+S*U+b*$+x*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+s*l*f-i*c*f-s*o*h+n*c*h+i*o*p-n*l*p)+d*(+t*l*p-t*c*h+s*a*h-i*a*p+i*c*u-s*l*u)+m*(+t*c*f-t*o*p-s*a*f+n*a*p+s*o*u-n*c*u)+_*(-i*o*u-t*l*f+t*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],T=f*m*c-d*h*c+d*l*p-o*m*p-f*l*_+o*h*_,S=g*h*c-u*m*c-g*l*p+a*m*p+u*l*_-a*h*_,b=u*d*c-g*f*c+g*o*p-a*d*p-u*o*_+a*f*_,x=g*f*l-u*d*l-g*o*h+a*d*h+u*o*m-a*f*m,y=t*T+n*S+i*b+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=T*w,e[1]=(d*h*s-f*m*s-d*i*p+n*m*p+f*i*_-n*h*_)*w,e[2]=(o*m*s-d*l*s+d*i*c-n*m*c-o*i*_+n*l*_)*w,e[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*p-n*l*p)*w,e[4]=S*w,e[5]=(u*m*s-g*h*s+g*i*p-t*m*p-u*i*_+t*h*_)*w,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*_-t*l*_)*w,e[7]=(a*h*s-u*l*s+u*i*c-t*h*c-a*i*p+t*l*p)*w,e[8]=b*w,e[9]=(g*f*s-u*d*s-g*n*p+t*d*p+u*n*_-t*f*_)*w,e[10]=(a*d*s-g*o*s+g*n*c-t*d*c-a*n*_+t*o*_)*w,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*p-t*o*p)*w,e[12]=x*w,e[13]=(u*d*i-g*f*i+g*n*h-t*d*h-u*n*m+t*f*m)*w,e[14]=(g*o*i-a*d*i-g*n*l+t*d*l+a*n*m-t*o*m)*w,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*h+t*o*h)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,g=s*f,d=a*u,m=a*f,_=o*f,T=l*c,S=l*u,b=l*f,x=n.x,y=n.y,w=n.z;return i[0]=(1-(d+_))*x,i[1]=(p+b)*x,i[2]=(g-S)*x,i[3]=0,i[4]=(p-b)*y,i[5]=(1-(h+_))*y,i[6]=(m+T)*y,i[7]=0,i[8]=(g+S)*w,i[9]=(m-T)*w,i[10]=(1-(h+d))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ds.set(i[0],i[1],i[2]).length();const a=ds.set(i[4],i[5],i[6]).length(),o=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Qn.copy(this);const c=1/s,u=1/a,f=1/o;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,t.setFromRotationMatrix(Qn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),f=(t+e)*l,h=(n+i)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ds=new Z,Qn=new qt,E0=new Z(0,0,0),C0=new Z(1,1,1),ji=new Z,ga=new Z,yn=new Z,Lh=new qt,Ih=new ta;class ia{constructor(e=0,t=0,n=0,i=ia.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ia.DefaultOrder="XYZ";ia.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Xp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let A0=0;const Oh=new Z,ps=new ta,Ai=new qt,_a=new Z,go=new Z,P0=new Z,R0=new ta,Fh=new Z(1,0,0),Nh=new Z(0,1,0),Uh=new Z(0,0,1),D0={type:"added"},zh={type:"removed"};class An extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DefaultUp.clone();const e=new Z,t=new ia,n=new ta,i=new Z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qt},normalMatrix:{value:new Vn}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=An.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=An.DefaultMatrixWorldAutoUpdate,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Fh,e)}rotateY(e){return this.rotateOnAxis(Nh,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Oh.copy(e).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fh,e)}translateY(e){return this.translateOnAxis(Nh,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_a.copy(e):_a.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(go,_a,this.up):Ai.lookAt(_a,go,this.up),this.quaternion.setFromRotationMatrix(Ai),i&&(Ai.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Ai),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(D0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(zh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,P0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,R0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}An.DefaultUp=new Z(0,1,0);An.DefaultMatrixAutoUpdate=!0;An.DefaultMatrixWorldAutoUpdate=!0;const ei=new Z,Pi=new Z,dc=new Z,Ri=new Z,ms=new Z,gs=new Z,kh=new Z,pc=new Z,mc=new Z,gc=new Z;class Fi{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ei.subVectors(i,t),Pi.subVectors(n,t),dc.subVectors(e,t);const a=ei.dot(ei),o=ei.dot(Pi),l=ei.dot(dc),c=Pi.dot(Pi),u=Pi.dot(dc),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ri),Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ri),l.set(0,0),l.addScaledVector(s,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),Pi.subVectors(e,t),ei.cross(Pi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ei.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Fi.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ms.subVectors(i,n),gs.subVectors(s,n),pc.subVectors(e,n);const l=ms.dot(pc),c=gs.dot(pc);if(l<=0&&c<=0)return t.copy(n);mc.subVectors(e,i);const u=ms.dot(mc),f=gs.dot(mc);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ms,a);gc.subVectors(e,s);const p=ms.dot(gc),g=gs.dot(gc);if(g>=0&&p<=g)return t.copy(s);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(gs,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return kh.subVectors(s,i),o=(f-u)/(f-u+(p-g)),t.copy(i).addScaledVector(kh,o);const _=1/(m+d+h);return a=d*_,o=h*_,t.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let L0=0;class Rl extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Vs,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Np,this.blendDst=Up,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=au,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ec,this.stencilZFail=ec,this.stencilZPass=ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==Xs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ef extends Rl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new Z,va=new dt;class vi{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ch,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ca(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ca(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ca(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ca(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ch&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Yp extends vi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zp extends vi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xi extends vi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let I0=0;const Fn=new qt,_c=new An,_s=new Z,bn=new na,_o=new na,zt=new Z;class vr extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hp(e)?Zp:Yp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_o.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(bn.min,_o.min),bn.expandByPoint(zt),zt.addVectors(bn.max,_o.max),bn.expandByPoint(zt)):(bn.expandByPoint(_o.min),bn.expandByPoint(_o.max))}bn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)zt.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),zt.add(_s)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new Z,u[R]=new Z;const f=new Z,h=new Z,p=new Z,g=new dt,d=new dt,m=new dt,_=new Z,T=new Z;function S(R,I,G){f.fromArray(i,R*3),h.fromArray(i,I*3),p.fromArray(i,G*3),g.fromArray(a,R*2),d.fromArray(a,I*2),m.fromArray(a,G*2),h.sub(f),p.sub(f),d.sub(g),m.sub(g);const U=1/(d.x*m.y-m.x*d.y);!isFinite(U)||(_.copy(h).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(U),T.copy(p).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(U),c[R].add(_),c[I].add(_),c[G].add(_),u[R].add(T),u[I].add(T),u[G].add(T))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let R=0,I=b.length;R<I;++R){const G=b[R],U=G.start,L=G.count;for(let z=U,H=U+L;z<H;z+=3)S(n[z+0],n[z+1],n[z+2])}const x=new Z,y=new Z,w=new Z,v=new Z;function M(R){w.fromArray(s,R*3),v.copy(w);const I=c[R];x.copy(I),x.sub(w.multiplyScalar(w.dot(I))).normalize(),y.crossVectors(v,I);const U=y.dot(u[R])<0?-1:1;l[R*4]=x.x,l[R*4+1]=x.y,l[R*4+2]=x.z,l[R*4+3]=U}for(let R=0,I=b.length;R<I;++R){const G=b[R],U=G.start,L=G.count;for(let z=U,H=U+L;z<H;z+=3)M(n[z+0]),M(n[z+1]),M(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new Z,s=new Z,a=new Z,o=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),d=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){o.isInterleavedBufferAttribute?p=l[d]*o.data.stride+o.offset:p=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[p++]}return new vi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new qt,vs=new T0,vc=new Qu,Xi=new Z,Yi=new Z,Zi=new Z,xc=new Z,yc=new Z,bc=new Z,xa=new Z,ya=new Z,ba=new Z,Sa=new dt,wa=new dt,Ma=new dt,Sc=new Z,Ta=new Z;class ai extends An{constructor(e=new vr,t=new ef){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(s),e.ray.intersectsSphere(vc)===!1)||(Bh.copy(s).invert(),vs.copy(e.ray).applyMatrix4(Bh),n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let d=0,m=p.length;d<m;d++){const _=p[d],T=i[_.materialIndex],S=Math.max(_.start,g.start),b=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let x=S,y=b;x<y;x+=3){const w=o.getX(x),v=o.getX(x+1),M=o.getX(x+2);a=Ea(this,T,e,vs,l,c,u,f,h,w,v,M),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),m=Math.min(o.count,g.start+g.count);for(let _=d,T=m;_<T;_+=3){const S=o.getX(_),b=o.getX(_+1),x=o.getX(_+2);a=Ea(this,i,e,vs,l,c,u,f,h,S,b,x),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,m=p.length;d<m;d++){const _=p[d],T=i[_.materialIndex],S=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let x=S,y=b;x<y;x+=3){const w=x,v=x+1,M=x+2;a=Ea(this,T,e,vs,l,c,u,f,h,w,v,M),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let _=d,T=m;_<T;_+=3){const S=_,b=_+1,x=_+2;a=Ea(this,i,e,vs,l,c,u,f,h,S,b,x),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function O0(r,e,t,n,i,s,a,o){let l;if(e.side===$n?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==nr,o),l===null)return null;Ta.copy(o),Ta.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:r}}function Ea(r,e,t,n,i,s,a,o,l,c,u,f){Xi.fromBufferAttribute(i,c),Yi.fromBufferAttribute(i,u),Zi.fromBufferAttribute(i,f);const h=r.morphTargetInfluences;if(s&&h){xa.set(0,0,0),ya.set(0,0,0),ba.set(0,0,0);for(let g=0,d=s.length;g<d;g++){const m=h[g],_=s[g];m!==0&&(xc.fromBufferAttribute(_,c),yc.fromBufferAttribute(_,u),bc.fromBufferAttribute(_,f),a?(xa.addScaledVector(xc,m),ya.addScaledVector(yc,m),ba.addScaledVector(bc,m)):(xa.addScaledVector(xc.sub(Xi),m),ya.addScaledVector(yc.sub(Yi),m),ba.addScaledVector(bc.sub(Zi),m)))}Xi.add(xa),Yi.add(ya),Zi.add(ba)}r.isSkinnedMesh&&(r.boneTransform(c,Xi),r.boneTransform(u,Yi),r.boneTransform(f,Zi));const p=O0(r,e,t,n,Xi,Yi,Zi,Sc);if(p){o&&(Sa.fromBufferAttribute(o,c),wa.fromBufferAttribute(o,u),Ma.fromBufferAttribute(o,f),p.uv=Fi.getUV(Sc,Xi,Yi,Zi,Sa,wa,Ma,new dt)),l&&(Sa.fromBufferAttribute(l,c),wa.fromBufferAttribute(l,u),Ma.fromBufferAttribute(l,f),p.uv2=Fi.getUV(Sc,Xi,Yi,Zi,Sa,wa,Ma,new dt));const g={a:c,b:u,c:f,normal:new Z,materialIndex:0};Fi.getNormal(Xi,Yi,Zi,g.normal),p.face=g}return p}class ra extends vr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new xi(c,3)),this.setAttribute("normal",new xi(u,3)),this.setAttribute("uv",new xi(f,2));function g(d,m,_,T,S,b,x,y,w,v,M){const R=b/w,I=x/v,G=b/2,U=x/2,L=y/2,z=w+1,H=v+1;let $=0,V=0;const F=new Z;for(let P=0;P<H;P++){const se=P*I-U;for(let oe=0;oe<z;oe++){const le=oe*R-G;F[d]=le*T,F[m]=se*S,F[_]=L,c.push(F.x,F.y,F.z),F[d]=0,F[m]=0,F[_]=y>0?1:-1,u.push(F.x,F.y,F.z),f.push(oe/w),f.push(1-P/v),$+=1}}for(let P=0;P<v;P++)for(let se=0;se<w;se++){const oe=h+se+z*P,le=h+se+z*(P+1),he=h+(se+1)+z*(P+1),Oe=h+(se+1)+z*P;l.push(oe,le,Oe),l.push(le,he,Oe),V+=6}o.addGroup(p,V,M),p+=V,h+=$}}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function rn(r){const e={};for(let t=0;t<r.length;t++){const n=Js(r[t]);for(const i in n)e[i]=n[i]}return e}function F0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const N0={clone:Js,merge:rn};var U0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jr extends Rl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U0,this.fragmentShader=z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=F0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kp extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kn extends Kp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=90,ys=1;class k0 extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new kn(xs,ys,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new Z(1,0,0)),this.add(i);const s=new kn(xs,ys,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new Z(-1,0,0)),this.add(s);const a=new kn(xs,ys,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new Z(0,1,0)),this.add(a);const o=new kn(xs,ys,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new Z(0,-1,0)),this.add(o);const l=new kn(xs,ys,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new Z(0,0,1)),this.add(l);const c=new kn(xs,ys,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new Z(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Bi,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class tf extends ui{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class B0 extends Kr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new tf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ra(5,5,5),s=new Jr({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$n,blending:cr});s.uniforms.tEquirect.value=t;const a=new ai(i,s),o=t.minFilter;return t.minFilter===Pl&&(t.minFilter=zn),new k0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const wc=new Z,V0=new Z,G0=new Vn;class Cr{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wc.subVectors(n,t).cross(V0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(wc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||G0.getNormalMatrix(e),i=this.coplanarPoint(wc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Qu,Ca=new Z;class Jp{constructor(e=new Cr,t=new Cr,n=new Cr,i=new Cr,s=new Cr,a=new Cr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],T=n[14],S=n[15];return t[0].setComponents(o-i,f-l,d-h,S-m).normalize(),t[1].setComponents(o+i,f+l,d+h,S+m).normalize(),t[2].setComponents(o+s,f+c,d+p,S+_).normalize(),t[3].setComponents(o-s,f-c,d-p,S-_).normalize(),t[4].setComponents(o-a,f-u,d-g,S-T).normalize(),t[5].setComponents(o+a,f+u,d+g,S+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ca.x=i.normal.x>0?e.max.x:e.min.x,Ca.y=i.normal.y>0?e.max.y:e.min.y,Ca.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function H0(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;r.bindBuffer(f,c),p.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class nf extends vr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const T=_*h-a;for(let S=0;S<c;S++){const b=S*f-s;g.push(b,-T,0),d.push(0,0,1),m.push(S/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let T=0;T<o;T++){const S=T+c*_,b=T+c*(_+1),x=T+1+c*(_+1),y=T+1+c*_;p.push(S,b,y),p.push(b,x,y)}this.setIndex(p),this.setAttribute("position",new xi(g,3)),this.setAttribute("normal",new xi(d,3)),this.setAttribute("uv",new xi(m,2))}static fromJSON(e){return new nf(e.width,e.height,e.widthSegments,e.heightSegments)}}var W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,j0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0="vec3 transformed = vec3( position );",K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Q0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ev=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,uv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gv="gl_FragColor = linearToOutputTexel( gl_FragColor );",_v=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Av=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Lv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Iv=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ov=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,zv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,kv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$v=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,rx=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Mx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ax=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ix=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ox=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Fx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Nx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ux=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,zx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,kx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Bx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ey=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ny=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ay=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_y=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,yy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ze={alphamap_fragment:W0,alphamap_pars_fragment:$0,alphatest_fragment:q0,alphatest_pars_fragment:j0,aomap_fragment:X0,aomap_pars_fragment:Y0,begin_vertex:Z0,beginnormal_vertex:K0,bsdfs:J0,iridescence_fragment:Q0,bumpmap_pars_fragment:ev,clipping_planes_fragment:tv,clipping_planes_pars_fragment:nv,clipping_planes_pars_vertex:iv,clipping_planes_vertex:rv,color_fragment:sv,color_pars_fragment:ov,color_pars_vertex:av,color_vertex:lv,common:cv,cube_uv_reflection_fragment:uv,defaultnormal_vertex:fv,displacementmap_pars_vertex:hv,displacementmap_vertex:dv,emissivemap_fragment:pv,emissivemap_pars_fragment:mv,encodings_fragment:gv,encodings_pars_fragment:_v,envmap_fragment:vv,envmap_common_pars_fragment:xv,envmap_pars_fragment:yv,envmap_pars_vertex:bv,envmap_physical_pars_fragment:Iv,envmap_vertex:Sv,fog_vertex:wv,fog_pars_vertex:Mv,fog_fragment:Tv,fog_pars_fragment:Ev,gradientmap_pars_fragment:Cv,lightmap_fragment:Av,lightmap_pars_fragment:Pv,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Dv,lights_pars_begin:Lv,lights_toon_fragment:Ov,lights_toon_pars_fragment:Fv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Uv,lights_physical_fragment:zv,lights_physical_pars_fragment:kv,lights_fragment_begin:Bv,lights_fragment_maps:Vv,lights_fragment_end:Gv,logdepthbuf_fragment:Hv,logdepthbuf_pars_fragment:Wv,logdepthbuf_pars_vertex:$v,logdepthbuf_vertex:qv,map_fragment:jv,map_pars_fragment:Xv,map_particle_fragment:Yv,map_particle_pars_fragment:Zv,metalnessmap_fragment:Kv,metalnessmap_pars_fragment:Jv,morphcolor_vertex:Qv,morphnormal_vertex:ex,morphtarget_pars_vertex:tx,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:rx,normal_pars_fragment:sx,normal_pars_vertex:ox,normal_vertex:ax,normalmap_pars_fragment:lx,clearcoat_normal_fragment_begin:cx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:fx,iridescence_pars_fragment:hx,output_fragment:dx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:gx,dithering_fragment:_x,dithering_pars_fragment:vx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:yx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:Sx,shadowmap_vertex:wx,shadowmask_pars_fragment:Mx,skinbase_vertex:Tx,skinning_pars_vertex:Ex,skinning_vertex:Cx,skinnormal_vertex:Ax,specularmap_fragment:Px,specularmap_pars_fragment:Rx,tonemapping_fragment:Dx,tonemapping_pars_fragment:Lx,transmission_fragment:Ix,transmission_pars_fragment:Ox,uv_pars_fragment:Fx,uv_pars_vertex:Nx,uv_vertex:Ux,uv2_pars_fragment:zx,uv2_pars_vertex:kx,uv2_vertex:Bx,worldpos_vertex:Vx,background_vert:Gx,background_frag:Hx,backgroundCube_vert:Wx,backgroundCube_frag:$x,cube_vert:qx,cube_frag:jx,depth_vert:Xx,depth_frag:Yx,distanceRGBA_vert:Zx,distanceRGBA_frag:Kx,equirect_vert:Jx,equirect_frag:Qx,linedashed_vert:ey,linedashed_frag:ty,meshbasic_vert:ny,meshbasic_frag:iy,meshlambert_vert:ry,meshlambert_frag:sy,meshmatcap_vert:oy,meshmatcap_frag:ay,meshnormal_vert:ly,meshnormal_frag:cy,meshphong_vert:uy,meshphong_frag:fy,meshphysical_vert:hy,meshphysical_frag:dy,meshtoon_vert:py,meshtoon_frag:my,points_vert:gy,points_frag:_y,shadow_vert:vy,shadow_frag:xy,sprite_vert:yy,sprite_frag:by},we={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Vn},uv2Transform:{value:new Vn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vn}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vn}}},di={basic:{uniforms:rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:rn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:rn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:rn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:rn([we.points,we.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:rn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:rn([we.common,we.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:rn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:rn([we.sprite,we.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Vn},t2D:{value:null}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:rn([we.common,we.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:rn([we.lights,we.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};di.physical={uniforms:rn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new dt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};function Sy(r,e,t,n,i,s,a){const o=new xt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,_){let T=!1,S=_.isScene===!0?_.background:null;S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S));const b=r.xr,x=b.getSession&&b.getSession();x&&x.environmentBlendMode==="additive"&&(S=null),S===null?d(o,l):S&&S.isColor&&(d(S,1),T=!0),(r.autoClear||T)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Al)?(u===void 0&&(u=new ai(new ra(1,1,1),new Jr({name:"BackgroundCubeMaterial",uniforms:Js(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(f!==S||h!==S.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ai(new nf(2,2),new Jr({name:"BackgroundMaterial",uniforms:Js(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){n.buffers.color.setClear(m.r,m.g,m.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(o,l)},render:g}}function wy(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(L,z,H,$,V){let F=!1;if(a){const P=d($,H,z);c!==P&&(c=P,p(c.object)),F=_(L,$,H,V),F&&T(L,$,H,V)}else{const P=z.wireframe===!0;(c.geometry!==$.id||c.program!==H.id||c.wireframe!==P)&&(c.geometry=$.id,c.program=H.id,c.wireframe=P,F=!0)}V!==null&&t.update(V,34963),(F||u)&&(u=!1,v(L,z,H,$),V!==null&&r.bindBuffer(34963,t.get(V).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function d(L,z,H){const $=H.wireframe===!0;let V=o[L.id];V===void 0&&(V={},o[L.id]=V);let F=V[z.id];F===void 0&&(F={},V[z.id]=F);let P=F[$];return P===void 0&&(P=m(h()),F[$]=P),P}function m(L){const z=[],H=[],$=[];for(let V=0;V<i;V++)z[V]=0,H[V]=0,$[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:$,object:L,attributes:{},index:null}}function _(L,z,H,$){const V=c.attributes,F=z.attributes;let P=0;const se=H.getAttributes();for(const oe in se)if(se[oe].location>=0){const he=V[oe];let Oe=F[oe];if(Oe===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(Oe=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(Oe=L.instanceColor)),he===void 0||he.attribute!==Oe||Oe&&he.data!==Oe.data)return!0;P++}return c.attributesNum!==P||c.index!==$}function T(L,z,H,$){const V={},F=z.attributes;let P=0;const se=H.getAttributes();for(const oe in se)if(se[oe].location>=0){let he=F[oe];he===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(he=L.instanceColor));const Oe={};Oe.attribute=he,he&&he.data&&(Oe.data=he.data),V[oe]=Oe,P++}c.attributes=V,c.attributesNum=P,c.index=$}function S(){const L=c.newAttributes;for(let z=0,H=L.length;z<H;z++)L[z]=0}function b(L){x(L,0)}function x(L,z){const H=c.newAttributes,$=c.enabledAttributes,V=c.attributeDivisors;H[L]=1,$[L]===0&&(r.enableVertexAttribArray(L),$[L]=1),V[L]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),V[L]=z)}function y(){const L=c.newAttributes,z=c.enabledAttributes;for(let H=0,$=z.length;H<$;H++)z[H]!==L[H]&&(r.disableVertexAttribArray(H),z[H]=0)}function w(L,z,H,$,V,F){n.isWebGL2===!0&&(H===5124||H===5125)?r.vertexAttribIPointer(L,z,H,V,F):r.vertexAttribPointer(L,z,H,$,V,F)}function v(L,z,H,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const V=$.attributes,F=H.getAttributes(),P=z.defaultAttributeValues;for(const se in F){const oe=F[se];if(oe.location>=0){let le=V[se];if(le===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),le!==void 0){const he=le.normalized,Oe=le.itemSize,J=t.get(le);if(J===void 0)continue;const We=J.buffer,De=J.type,Be=J.bytesPerElement;if(le.isInterleavedBufferAttribute){const ge=le.data,Ge=ge.stride,be=le.offset;if(ge.isInstancedInterleavedBuffer){for(let Ce=0;Ce<oe.locationSize;Ce++)x(oe.location+Ce,ge.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ce=0;Ce<oe.locationSize;Ce++)b(oe.location+Ce);r.bindBuffer(34962,We);for(let Ce=0;Ce<oe.locationSize;Ce++)w(oe.location+Ce,Oe/oe.locationSize,De,he,Ge*Be,(be+Oe/oe.locationSize*Ce)*Be)}else{if(le.isInstancedBufferAttribute){for(let ge=0;ge<oe.locationSize;ge++)x(oe.location+ge,le.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<oe.locationSize;ge++)b(oe.location+ge);r.bindBuffer(34962,We);for(let ge=0;ge<oe.locationSize;ge++)w(oe.location+ge,Oe/oe.locationSize,De,he,Oe*Be,Oe/oe.locationSize*ge*Be)}}else if(P!==void 0){const he=P[se];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(oe.location,he);break;case 3:r.vertexAttrib3fv(oe.location,he);break;case 4:r.vertexAttrib4fv(oe.location,he);break;default:r.vertexAttrib1fv(oe.location,he)}}}}y()}function M(){G();for(const L in o){const z=o[L];for(const H in z){const $=z[H];for(const V in $)g($[V].object),delete $[V];delete z[H]}delete o[L]}}function R(L){if(o[L.id]===void 0)return;const z=o[L.id];for(const H in z){const $=z[H];for(const V in $)g($[V].object),delete $[V];delete z[H]}delete o[L.id]}function I(L){for(const z in o){const H=o[z];if(H[L.id]===void 0)continue;const $=H[L.id];for(const V in $)g($[V].object),delete $[V];delete H[L.id]}}function G(){U(),u=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:G,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:b,disableUnusedAttributes:y}}function My(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(i)h=r,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Ty(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),m=r.getParameter(36347),_=r.getParameter(36348),T=r.getParameter(36349),S=h>0,b=a||e.has("OES_texture_float"),x=S&&b,y=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:y}}function Ey(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Cr,o=new Vn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,p){const g=f.length!==0||h||n!==0||i;return i=h,t=u(f,p,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,p){const g=f.clippingPlanes,d=f.clipIntersection,m=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,S=T*4;let b=_.clippingState||null;l.value=b,b=u(g,h,S,p);for(let x=0;x!==S;++x)b[x]=t[x];_.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const d=f!==null?f.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<_)&&(m=new Float32Array(_));for(let S=0,b=p;S!==d;++S,b+=4)a.copy(f[S]).applyMatrix4(T,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function Cy(r){let e=new WeakMap;function t(a,o){return o===lu?a.mapping=Ys:o===cu&&(a.mapping=Zs),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===lu||o===cu)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new B0(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ay extends Kp{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Os=4,Vh=[.125,.215,.35,.446,.526,.582],Ir=20,Mc=new Ay,Gh=new xt;let Tc=null;const Ar=(1+Math.sqrt(5))/2,Ss=1/Ar,Hh=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,Ar,Ss),new Z(0,Ar,-Ss),new Z(Ss,0,Ar),new Z(-Ss,0,Ar),new Z(Ar,Ss,0),new Z(-Ar,Ss,0)];class Wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Tc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc),e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Vo,format:oi,encoding:Zr,depthBuffer:!1},i=$h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Py(s)),this._blurMaterial=Ry(s,e,t)}return i}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,n,i){const o=new kn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Gh),u.toneMapping=Bi,u.autoClear=!1;const p=new ef({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),g=new ai(new ra,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(Gh),d=!0);for(let _=0;_<6;_++){const T=_%3;T===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):T===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const S=this._cubeSize;Aa(i,T*S,_>2?S:0,S,S),u.setRenderTarget(i),d&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ys||e.mapping===Zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ai(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Aa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Mc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Hh[(i-1)%Hh.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ai(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):Ir;m>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const _=[];let T=0;for(let w=0;w<Ir;++w){const v=w/d,M=Math.exp(-v*v/2);_.push(M),w===0?T+=M:w<m&&(T+=2*M)}for(let w=0;w<_.length;w++)_[w]=_[w]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const b=this._sizeLods[i],x=3*b*(i>S-Os?i-S+Os:0),y=4*(this._cubeSize-b);Aa(t,x,y,3*b,2*b),l.setRenderTarget(t),l.render(f,Mc)}}function Py(r){const e=[],t=[],n=[];let i=r;const s=r-Os+1+Vh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Os?l=Vh[a-r+Os-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,d=3,m=2,_=1,T=new Float32Array(d*g*p),S=new Float32Array(m*g*p),b=new Float32Array(_*g*p);for(let y=0;y<p;y++){const w=y%3*2/3-1,v=y>2?0:-1,M=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];T.set(M,d*g*y),S.set(h,m*g*y);const R=[y,y,y,y,y,y];b.set(R,_*g*y)}const x=new vr;x.setAttribute("position",new vi(T,d)),x.setAttribute("uv",new vi(S,m)),x.setAttribute("faceIndex",new vi(b,_)),e.push(x),i>Os&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $h(r,e,t){const n=new Kr(r,e,t);return n.texture.mapping=Al,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Aa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ry(r,e,t){const n=new Float32Array(Ir),i=new Z(0,1,0);return new Jr({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function qh(){return new Jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function jh(){return new Jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function rf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dy(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===lu||l===cu,u=l===Ys||l===Zs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Wh(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Wh(r));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ly(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Iy(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let d=0;if(p!==null){const T=p.array;d=p.version;for(let S=0,b=T.length;S<b;S+=3){const x=T[S+0],y=T[S+1],w=T[S+2];h.push(x,y,y,w,w,x)}}else{const T=g.array;d=g.version;for(let S=0,b=T.length/3-1;S<b;S+=3){const x=S+0,y=S+1,w=S+2;h.push(x,y,y,w,w,x)}}const m=new(Hp(h)?Zp:Yp)(h,1);m.version=d;const _=s.get(f);_&&e.remove(_),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Oy(r,e,t,n){const i=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,p){r.drawElements(s,p,o,h*l),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let d,m;if(i)d=r,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,p,o,h*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Fy(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ny(r,e){return r[0]-e[0]}function Uy(r,e){return Math.abs(e[1])-Math.abs(r[1])}function zy(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new $t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==m){let H=function(){L.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var g=H;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let R=0;b===!0&&(R=1),x===!0&&(R=2),y===!0&&(R=3);let I=u.attributes.position.count*R,G=1;I>e.maxTextureSize&&(G=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const U=new Float32Array(I*G*4*m),L=new jp(U,I,G,m);L.type=Nr,L.needsUpdate=!0;const z=R*4;for(let $=0;$<m;$++){const V=w[$],F=v[$],P=M[$],se=I*G*4*$;for(let oe=0;oe<V.count;oe++){const le=oe*z;b===!0&&(a.fromBufferAttribute(V,oe),U[se+le+0]=a.x,U[se+le+1]=a.y,U[se+le+2]=a.z,U[se+le+3]=0),x===!0&&(a.fromBufferAttribute(F,oe),U[se+le+4]=a.x,U[se+le+5]=a.y,U[se+le+6]=a.z,U[se+le+7]=0),y===!0&&(a.fromBufferAttribute(P,oe),U[se+le+8]=a.x,U[se+le+9]=a.y,U[se+le+10]=a.z,U[se+le+11]=P.itemSize===4?a.w:1)}}_={count:m,texture:L,size:new dt(I,G)},s.set(u,_),u.addEventListener("dispose",H)}let T=0;for(let b=0;b<p.length;b++)T+=p[b];const S=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",p),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const d=p===void 0?0:p.length;let m=n[u.id];if(m===void 0||m.length!==d){m=[];for(let x=0;x<d;x++)m[x]=[x,0];n[u.id]=m}for(let x=0;x<d;x++){const y=m[x];y[0]=x,y[1]=p[x]}m.sort(Uy);for(let x=0;x<8;x++)x<d&&m[x][1]?(o[x][0]=m[x][0],o[x][1]=m[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Ny);const _=u.morphAttributes.position,T=u.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const y=o[x],w=y[0],v=y[1];w!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+x)!==_[w]&&u.setAttribute("morphTarget"+x,_[w]),T&&u.getAttribute("morphNormal"+x)!==T[w]&&u.setAttribute("morphNormal"+x,T[w]),i[x]=v,S+=v):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),T&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const b=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",b),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function ky(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const em=new ui,tm=new jp,nm=new w0,im=new tf,Xh=[],Yh=[],Zh=new Float32Array(16),Kh=new Float32Array(9),Jh=new Float32Array(4);function co(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Xh[i];if(s===void 0&&(s=new Float32Array(i),Xh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Dl(r,e){let t=Yh[e];t===void 0&&(t=new Int32Array(e),Yh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function By(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Vy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function Gy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function Hy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function Wy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Jh.set(n),r.uniformMatrix2fv(this.addr,!1,Jh),Ut(t,n)}}function $y(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Kh.set(n),r.uniformMatrix3fv(this.addr,!1,Kh),Ut(t,n)}}function qy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Zh.set(n),r.uniformMatrix4fv(this.addr,!1,Zh),Ut(t,n)}}function jy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function Yy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function Zy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function Ky(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Jy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function Qy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function tb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||em,i)}function nb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nm,i)}function ib(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||im,i)}function rb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tm,i)}function sb(r){switch(r){case 5126:return By;case 35664:return Vy;case 35665:return Gy;case 35666:return Hy;case 35674:return Wy;case 35675:return $y;case 35676:return qy;case 5124:case 35670:return jy;case 35667:case 35671:return Xy;case 35668:case 35672:return Yy;case 35669:case 35673:return Zy;case 5125:return Ky;case 36294:return Jy;case 36295:return Qy;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return rb}}function ob(r,e){r.uniform1fv(this.addr,e)}function ab(r,e){const t=co(e,this.size,2);r.uniform2fv(this.addr,t)}function lb(r,e){const t=co(e,this.size,3);r.uniform3fv(this.addr,t)}function cb(r,e){const t=co(e,this.size,4);r.uniform4fv(this.addr,t)}function ub(r,e){const t=co(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function fb(r,e){const t=co(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function hb(r,e){const t=co(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function db(r,e){r.uniform1iv(this.addr,e)}function pb(r,e){r.uniform2iv(this.addr,e)}function mb(r,e){r.uniform3iv(this.addr,e)}function gb(r,e){r.uniform4iv(this.addr,e)}function _b(r,e){r.uniform1uiv(this.addr,e)}function vb(r,e){r.uniform2uiv(this.addr,e)}function xb(r,e){r.uniform3uiv(this.addr,e)}function yb(r,e){r.uniform4uiv(this.addr,e)}function bb(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||em,s[a])}function Sb(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||nm,s[a])}function wb(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||im,s[a])}function Mb(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||tm,s[a])}function Tb(r){switch(r){case 5126:return ob;case 35664:return ab;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return fb;case 35676:return hb;case 5124:case 35670:return db;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return _b;case 36294:return vb;case 36295:return xb;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Mb}}class Eb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=sb(t.type)}}class Cb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Tb(t.type)}}class Ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function Qh(r,e){r.seq.push(e),r.map[e.id]=e}function Pb(r,e,t){const n=r.name,i=n.length;for(Ec.lastIndex=0;;){const s=Ec.exec(n),a=Ec.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Qh(t,c===void 0?new Eb(o,r,e):new Cb(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new Ab(o),Qh(t,f)),t=f}}}class Ja{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Pb(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ed(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Rb=0;function Db(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Lb(r){switch(r){case Zr:return["Linear","( value )"];case pt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function td(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Db(r.getShaderSource(e),a)}else return i}function Ib(r,e){const t=Lb(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ob(r,e){let t;switch(e){case Z_:t="Linear";break;case K_:t="Reinhard";break;case J_:t="OptimizedCineon";break;case Bp:t="ACESFilmic";break;case Q_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fb(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wo).join(`
`)}function Nb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ub(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function wo(r){return r!==""}function nd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function id(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(r){return r.replace(zb,kb)}function kb(r,e){const t=Ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return pu(t)}const Bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(r){return r.replace(Bb,Vb)}function Vb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function sd(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===P_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===So&&(e="SHADOWMAP_TYPE_VSM"),e}function Hb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ys:case Zs:e="ENVMAP_TYPE_CUBE";break;case Al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function $b(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zp:e="ENVMAP_BLENDING_MULTIPLY";break;case kp:e="ENVMAP_BLENDING_MIX";break;case Y_:e="ENVMAP_BLENDING_ADD";break}return e}function qb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jb(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Gb(t),c=Hb(t),u=Wb(t),f=$b(t),h=qb(t),p=t.isWebGL2?"":Fb(t),g=Nb(s),d=i.createProgram();let m,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(wo).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(wo).join(`
`),_.length>0&&(_+=`
`)):(m=[sd(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),_=[p,sd(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Bi?Ob("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.encodings_pars_fragment,Ib("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),a=pu(a),a=nd(a,t),a=id(a,t),o=pu(o),o=nd(o,t),o=id(o,t),a=rd(a),o=rd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=T+m+a,b=T+_+o,x=ed(i,35633,S),y=ed(i,35632,b);if(i.attachShader(d,x),i.attachShader(d,y),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const M=i.getProgramInfoLog(d).trim(),R=i.getShaderInfoLog(x).trim(),I=i.getShaderInfoLog(y).trim();let G=!0,U=!0;if(i.getProgramParameter(d,35714)===!1){G=!1;const L=td(i,x,"vertex"),z=td(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+M+`
`+L+`
`+z)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||I==="")&&(U=!1);U&&(this.diagnostics={runnable:G,programLog:M,vertexShader:{log:R,prefix:m},fragmentShader:{log:I,prefix:_}})}i.deleteShader(x),i.deleteShader(y);let w;this.getUniforms=function(){return w===void 0&&(w=new Ja(i,d)),w};let v;return this.getAttributes=function(){return v===void 0&&(v=Ub(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Rb++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=x,this.fragmentShader=y,this}let Xb=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zb(e),t.set(e,n)),n}}class Zb{constructor(e){this.id=Xb++,this.code=e,this.usedTimes=0}}function Kb(r,e,t,n,i,s,a){const o=new Xp,l=new Yb,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,M,R,I,G){const U=I.fog,L=G.geometry,z=v.isMeshStandardMaterial?I.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),$=!!H&&H.mapping===Al?H.image.height:null,V=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const F=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,P=F!==void 0?F.length:0;let se=0;L.morphAttributes.position!==void 0&&(se=1),L.morphAttributes.normal!==void 0&&(se=2),L.morphAttributes.color!==void 0&&(se=3);let oe,le,he,Oe;if(V){const Ge=di[V];oe=Ge.vertexShader,le=Ge.fragmentShader}else oe=v.vertexShader,le=v.fragmentShader,l.update(v),he=l.getVertexShaderID(v),Oe=l.getFragmentShaderID(v);const J=r.getRenderTarget(),We=v.alphaTest>0,De=v.clearcoat>0,Be=v.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:v.type,vertexShader:oe,fragmentShader:le,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:Oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:h,outputEncoding:J===null?r.outputEncoding:J.isXRRenderTarget===!0?J.texture.encoding:Zr,map:!!v.map,matcap:!!v.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:$,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===x0,tangentSpaceNormalMap:v.normalMapType===v0,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===pt,clearcoat:De,clearcoatMap:De&&!!v.clearcoatMap,clearcoatRoughnessMap:De&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:De&&!!v.clearcoatNormalMap,iridescence:Be,iridescenceMap:Be&&!!v.iridescenceMap,iridescenceThicknessMap:Be&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Vs,alphaMap:!!v.alphaMap,alphaTest:We,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!L.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!U,useFog:v.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Bi,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===nr,flipSided:v.side===$n,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)M.push(R),M.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(_(M,v),T(M,v),M.push(r.outputEncoding)),M.push(v.customProgramCacheKey),M.join()}function _(v,M){v.push(M.precision),v.push(M.outputEncoding),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.combine),v.push(M.vertexUvs),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function T(v,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.map&&o.enable(4),M.matcap&&o.enable(5),M.envMap&&o.enable(6),M.lightMap&&o.enable(7),M.aoMap&&o.enable(8),M.emissiveMap&&o.enable(9),M.bumpMap&&o.enable(10),M.normalMap&&o.enable(11),M.objectSpaceNormalMap&&o.enable(12),M.tangentSpaceNormalMap&&o.enable(13),M.clearcoat&&o.enable(14),M.clearcoatMap&&o.enable(15),M.clearcoatRoughnessMap&&o.enable(16),M.clearcoatNormalMap&&o.enable(17),M.iridescence&&o.enable(18),M.iridescenceMap&&o.enable(19),M.iridescenceThicknessMap&&o.enable(20),M.displacementMap&&o.enable(21),M.specularMap&&o.enable(22),M.roughnessMap&&o.enable(23),M.metalnessMap&&o.enable(24),M.gradientMap&&o.enable(25),M.alphaMap&&o.enable(26),M.alphaTest&&o.enable(27),M.vertexColors&&o.enable(28),M.vertexAlphas&&o.enable(29),M.vertexUvs&&o.enable(30),M.vertexTangents&&o.enable(31),M.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.physicallyCorrectLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.specularIntensityMap&&o.enable(15),M.specularColorMap&&o.enable(16),M.transmission&&o.enable(17),M.transmissionMap&&o.enable(18),M.thicknessMap&&o.enable(19),M.sheen&&o.enable(20),M.sheenColorMap&&o.enable(21),M.sheenRoughnessMap&&o.enable(22),M.decodeVideoTexture&&o.enable(23),M.opaque&&o.enable(24),v.push(o.mask)}function S(v){const M=g[v.type];let R;if(M){const I=di[M];R=N0.clone(I.uniforms)}else R=v.uniforms;return R}function b(v,M){let R;for(let I=0,G=c.length;I<G;I++){const U=c[I];if(U.cacheKey===M){R=U,++R.usedTimes;break}}return R===void 0&&(R=new jb(r,M,v,s),c.push(R)),R}function x(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),v.destroy()}}function y(v){l.remove(v)}function w(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:S,acquireProgram:b,releaseProgram:x,releaseShaderCache:y,programs:c,dispose:w}}function Jb(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Qb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function od(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ad(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,p,g,d,m){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:d,group:m},r[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=m),e++,_}function o(f,h,p,g,d,m){const _=a(f,h,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(f,h,p,g,d,m){const _=a(f,h,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||Qb),n.length>1&&n.sort(h||od),i.length>1&&i.sort(h||od)}function u(){for(let f=e,h=r.length;f<h;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function e1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new ad,r.set(n,[a])):i>=s.length?(a=new ad,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function t1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new xt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[e.id]=t,t}}}function n1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let i1=0;function r1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function s1(r,e){const t=new t1,n=n1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new Z);const s=new Z,a=new qt,o=new qt;function l(u,f){let h=0,p=0,g=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let d=0,m=0,_=0,T=0,S=0,b=0,x=0,y=0,w=0,v=0;u.sort(r1);const M=f!==!0?Math.PI:1;for(let I=0,G=u.length;I<G;I++){const U=u[I],L=U.color,z=U.intensity,H=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=L.r*z*M,p+=L.g*z*M,g+=L.b*z*M;else if(U.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(U.sh.coefficients[V],z);else if(U.isDirectionalLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const F=U.shadow,P=n.get(U);P.shadowBias=F.bias,P.shadowNormalBias=F.normalBias,P.shadowRadius=F.radius,P.shadowMapSize=F.mapSize,i.directionalShadow[d]=P,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=U.shadow.matrix,b++}i.directional[d]=V,d++}else if(U.isSpotLight){const V=t.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(L).multiplyScalar(z*M),V.distance=H,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,i.spot[_]=V;const F=U.shadow;if(U.map&&(i.spotLightMap[w]=U.map,w++,F.updateMatrices(U),U.castShadow&&v++),i.spotLightMatrix[_]=F.matrix,U.castShadow){const P=n.get(U);P.shadowBias=F.bias,P.shadowNormalBias=F.normalBias,P.shadowRadius=F.radius,P.shadowMapSize=F.mapSize,i.spotShadow[_]=P,i.spotShadowMap[_]=$,y++}_++}else if(U.isRectAreaLight){const V=t.get(U);V.color.copy(L).multiplyScalar(z),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),i.rectArea[T]=V,T++}else if(U.isPointLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*M),V.distance=U.distance,V.decay=U.decay,U.castShadow){const F=U.shadow,P=n.get(U);P.shadowBias=F.bias,P.shadowNormalBias=F.normalBias,P.shadowRadius=F.radius,P.shadowMapSize=F.mapSize,P.shadowCameraNear=F.camera.near,P.shadowCameraFar=F.camera.far,i.pointShadow[m]=P,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=U.shadow.matrix,x++}i.point[m]=V,m++}else if(U.isHemisphereLight){const V=t.get(U);V.skyColor.copy(U.color).multiplyScalar(z*M),V.groundColor.copy(U.groundColor).multiplyScalar(z*M),i.hemi[S]=V,S++}}T>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==T||R.hemiLength!==S||R.numDirectionalShadows!==b||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==w)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=T,i.point.length=m,i.hemi.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+w-v,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=v,R.directionalLength=d,R.pointLength=m,R.spotLength=_,R.rectAreaLength=T,R.hemiLength=S,R.numDirectionalShadows=b,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=w,i.version=i1++)}function c(u,f){let h=0,p=0,g=0,d=0,m=0;const _=f.matrixWorldInverse;for(let T=0,S=u.length;T<S;T++){const b=u[T];if(b.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),h++}else if(b.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const x=i.rectArea[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),o.identity(),a.copy(b.matrixWorld),a.premultiply(_),o.extractRotation(a),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),d++}else if(b.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),p++}else if(b.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function ld(r,e){const t=new s1(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function o1(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new ld(r,e),t.set(s,[l])):a>=o.length?(l=new ld(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class a1 extends Rl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l1 extends Rl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function f1(r,e,t){let n=new Jp;const i=new dt,s=new dt,a=new $t,o=new a1({depthPacking:_0}),l=new l1,c={},u=t.maxTextureSize,f={0:$n,1:Xs,2:nr},h=new Jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:c1,fragmentShader:u1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new vr;g.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new ai(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fp,this.render=function(b,x,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=r.getRenderTarget(),v=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),R=r.state;R.setBlending(cr),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let I=0,G=b.length;I<G;I++){const U=b[I],L=U.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const z=L.getFrameExtents();if(i.multiply(z),s.copy(L.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/z.x),i.x=s.x*z.x,L.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/z.y),i.y=s.y*z.y,L.mapSize.y=s.y)),L.map===null){const $=this.type!==So?{minFilter:hn,magFilter:hn}:{};L.map=new Kr(i.x,i.y,$),L.map.texture.name=U.name+".shadowMap",L.camera.updateProjectionMatrix()}r.setRenderTarget(L.map),r.clear();const H=L.getViewportCount();for(let $=0;$<H;$++){const V=L.getViewport($);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),R.viewport(a),L.updateMatrices(U,$),n=L.getFrustum(),S(x,y,L.camera,U,this.type)}L.isPointLightShadow!==!0&&this.type===So&&_(L,y),L.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(w,v,M)};function _(b,x){const y=e.update(d);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Kr(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(x,null,y,h,d,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(x,null,y,p,d,null)}function T(b,x,y,w,v,M){let R=null;const I=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0?R=I:R=y.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const G=R.uuid,U=x.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let z=L[U];z===void 0&&(z=R.clone(),L[U]=z),R=z}return R.visible=x.visible,R.wireframe=x.wireframe,M===So?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:f[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaTest,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(y.matrixWorld),R.nearDistance=w,R.farDistance=v),R}function S(b,x,y,w,v){if(b.visible===!1)return;if(b.layers.test(x.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===So)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const I=e.update(b),G=b.material;if(Array.isArray(G)){const U=I.groups;for(let L=0,z=U.length;L<z;L++){const H=U[L],$=G[H.materialIndex];if($&&$.visible){const V=T(b,$,w,y.near,y.far,v);r.renderBufferDirect(y,null,I,V,b,H)}}}else if(G.visible){const U=T(b,G,w,y.near,y.far,v);r.renderBufferDirect(y,null,I,U,b,null)}}const R=b.children;for(let I=0,G=R.length;I<G;I++)S(R[I],x,y,w,v)}}function h1(r,e,t){const n=t.isWebGL2;function i(){let O=!1;const j=new $t;let ae=null;const xe=new $t(0,0,0,0);return{setMask:function(Re){ae!==Re&&!O&&(r.colorMask(Re,Re,Re,Re),ae=Re)},setLocked:function(Re){O=Re},setClear:function(Re,je,lt,Ye,Fe){Fe===!0&&(Re*=Ye,je*=Ye,lt*=Ye),j.set(Re,je,lt,Ye),xe.equals(j)===!1&&(r.clearColor(Re,je,lt,Ye),xe.copy(j))},reset:function(){O=!1,ae=null,xe.set(-1,0,0,0)}}}function s(){let O=!1,j=null,ae=null,xe=null;return{setTest:function(Re){Re?We(2929):De(2929)},setMask:function(Re){j!==Re&&!O&&(r.depthMask(Re),j=Re)},setFunc:function(Re){if(ae!==Re){switch(Re){case G_:r.depthFunc(512);break;case H_:r.depthFunc(519);break;case W_:r.depthFunc(513);break;case au:r.depthFunc(515);break;case $_:r.depthFunc(514);break;case q_:r.depthFunc(518);break;case j_:r.depthFunc(516);break;case X_:r.depthFunc(517);break;default:r.depthFunc(515)}ae=Re}},setLocked:function(Re){O=Re},setClear:function(Re){xe!==Re&&(r.clearDepth(Re),xe=Re)},reset:function(){O=!1,j=null,ae=null,xe=null}}}function a(){let O=!1,j=null,ae=null,xe=null,Re=null,je=null,lt=null,Ye=null,Fe=null;return{setTest:function(Y){O||(Y?We(2960):De(2960))},setMask:function(Y){j!==Y&&!O&&(r.stencilMask(Y),j=Y)},setFunc:function(Y,ve,pe){(ae!==Y||xe!==ve||Re!==pe)&&(r.stencilFunc(Y,ve,pe),ae=Y,xe=ve,Re=pe)},setOp:function(Y,ve,pe){(je!==Y||lt!==ve||Ye!==pe)&&(r.stencilOp(Y,ve,pe),je=Y,lt=ve,Ye=pe)},setLocked:function(Y){O=Y},setClear:function(Y){Fe!==Y&&(r.clearStencil(Y),Fe=Y)},reset:function(){O=!1,j=null,ae=null,xe=null,Re=null,je=null,lt=null,Ye=null,Fe=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,d=[],m=null,_=!1,T=null,S=null,b=null,x=null,y=null,w=null,v=null,M=!1,R=null,I=null,G=null,U=null,L=null;const z=r.getParameter(35661);let H=!1,$=0;const V=r.getParameter(7938);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=$>=2);let F=null,P={};const se=r.getParameter(3088),oe=r.getParameter(2978),le=new $t().fromArray(se),he=new $t().fromArray(oe);function Oe(O,j,ae){const xe=new Uint8Array(4),Re=r.createTexture();r.bindTexture(O,Re),r.texParameteri(O,10241,9728),r.texParameteri(O,10240,9728);for(let je=0;je<ae;je++)r.texImage2D(j+je,0,6408,1,1,0,6408,5121,xe);return Re}const J={};J[3553]=Oe(3553,3553,1),J[34067]=Oe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),We(2929),l.setFunc(au),N(!1),D(Jf),We(2884),ce(cr);function We(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function De(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function Be(O,j){return p[O]!==j?(r.bindFramebuffer(O,j),p[O]=j,n&&(O===36009&&(p[36160]=j),O===36160&&(p[36009]=j)),!0):!1}function ge(O,j){let ae=d,xe=!1;if(O)if(ae=g.get(j),ae===void 0&&(ae=[],g.set(j,ae)),O.isWebGLMultipleRenderTargets){const Re=O.texture;if(ae.length!==Re.length||ae[0]!==36064){for(let je=0,lt=Re.length;je<lt;je++)ae[je]=36064+je;ae.length=Re.length,xe=!0}}else ae[0]!==36064&&(ae[0]=36064,xe=!0);else ae[0]!==1029&&(ae[0]=1029,xe=!0);xe&&(t.isWebGL2?r.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Ge(O){return m!==O?(r.useProgram(O),m=O,!0):!1}const be={[Rs]:32774,[D_]:32778,[L_]:32779};if(n)be[nh]=32775,be[ih]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(be[nh]=O.MIN_EXT,be[ih]=O.MAX_EXT)}const Ce={[I_]:0,[O_]:1,[F_]:768,[Np]:770,[V_]:776,[k_]:774,[U_]:772,[N_]:769,[Up]:771,[B_]:775,[z_]:773};function ce(O,j,ae,xe,Re,je,lt,Ye){if(O===cr){_===!0&&(De(3042),_=!1);return}if(_===!1&&(We(3042),_=!0),O!==R_){if(O!==T||Ye!==M){if((S!==Rs||y!==Rs)&&(r.blendEquation(32774),S=Rs,y=Rs),Ye)switch(O){case Vs:r.blendFuncSeparate(1,771,1,771);break;case Qf:r.blendFunc(1,1);break;case eh:r.blendFuncSeparate(0,769,0,1);break;case th:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Vs:r.blendFuncSeparate(770,771,1,771);break;case Qf:r.blendFunc(770,1);break;case eh:r.blendFuncSeparate(0,769,0,1);break;case th:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,x=null,w=null,v=null,T=O,M=Ye}return}Re=Re||j,je=je||ae,lt=lt||xe,(j!==S||Re!==y)&&(r.blendEquationSeparate(be[j],be[Re]),S=j,y=Re),(ae!==b||xe!==x||je!==w||lt!==v)&&(r.blendFuncSeparate(Ce[ae],Ce[xe],Ce[je],Ce[lt]),b=ae,x=xe,w=je,v=lt),T=O,M=null}function ie(O,j){O.side===nr?De(2884):We(2884);let ae=O.side===$n;j&&(ae=!ae),N(ae),O.blending===Vs&&O.transparent===!1?ce(cr):ce(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const xe=O.stencilWrite;c.setTest(xe),xe&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),q(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?We(32926):De(32926)}function N(O){R!==O&&(O?r.frontFace(2304):r.frontFace(2305),R=O)}function D(O){O!==C_?(We(2884),O!==I&&(O===Jf?r.cullFace(1029):O===A_?r.cullFace(1028):r.cullFace(1032))):De(2884),I=O}function re(O){O!==G&&(H&&r.lineWidth(O),G=O)}function q(O,j,ae){O?(We(32823),(U!==j||L!==ae)&&(r.polygonOffset(j,ae),U=j,L=ae)):De(32823)}function Se(O){O?We(3089):De(3089)}function ue(O){O===void 0&&(O=33984+z-1),F!==O&&(r.activeTexture(O),F=O)}function C(O,j,ae){ae===void 0&&(F===null?ae=33984+z-1:ae=F);let xe=P[ae];xe===void 0&&(xe={type:void 0,texture:void 0},P[ae]=xe),(xe.type!==O||xe.texture!==j)&&(F!==ae&&(r.activeTexture(ae),F=ae),r.bindTexture(O,j||J[O]),xe.type=O,xe.texture=j)}function E(){const O=P[F];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function k(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(O){le.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),le.copy(O))}function Ae(O){he.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),he.copy(O))}function fe(O,j){let ae=f.get(j);ae===void 0&&(ae=new WeakMap,f.set(j,ae));let xe=ae.get(O);xe===void 0&&(xe=r.getUniformBlockIndex(j,O.name),ae.set(O,xe))}function $e(O,j){const xe=f.get(j).get(O);u.get(O)!==xe&&(r.uniformBlockBinding(j,xe,O.__bindingPointIndex),u.set(O,xe))}function Ve(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},F=null,P={},p={},g=new WeakMap,d=[],m=null,_=!1,T=null,S=null,b=null,x=null,y=null,w=null,v=null,M=!1,R=null,I=null,G=null,U=null,L=null,le.set(0,0,r.canvas.width,r.canvas.height),he.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:We,disable:De,bindFramebuffer:Be,drawBuffers:ge,useProgram:Ge,setBlending:ce,setMaterial:ie,setFlipSided:N,setCullFace:D,setLineWidth:re,setPolygonOffset:q,setScissorTest:Se,activeTexture:ue,bindTexture:C,unbindTexture:E,compressedTexImage2D:k,compressedTexImage3D:ee,texImage2D:Te,texImage3D:_e,updateUBOMapping:fe,uniformBlockBinding:$e,texStorage2D:Q,texStorage3D:ye,texSubImage2D:K,texSubImage3D:te,compressedTexSubImage2D:de,compressedTexSubImage3D:me,scissor:Pe,viewport:Ae,reset:Ve}}function d1(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(C,E){return _?new OffscreenCanvas(C,E):Go("canvas")}function S(C,E,k,ee){let K=1;if((C.width>ee||C.height>ee)&&(K=ee/Math.max(C.width,C.height)),K<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const te=E?du:Math.floor,de=te(K*C.width),me=te(K*C.height);d===void 0&&(d=T(de,me));const Q=k?T(de,me):d;return Q.width=de,Q.height=me,Q.getContext("2d").drawImage(C,0,0,de,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+de+"x"+me+")."),Q}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function b(C){return Rh(C.width)&&Rh(C.height)}function x(C){return o?!1:C.wrapS!==si||C.wrapT!==si||C.minFilter!==hn&&C.minFilter!==zn}function y(C,E){return C.generateMipmaps&&E&&C.minFilter!==hn&&C.minFilter!==zn}function w(C){r.generateMipmap(C)}function v(C,E,k,ee,K=!1){if(o===!1)return E;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let te=E;return E===6403&&(k===5126&&(te=33326),k===5131&&(te=33325),k===5121&&(te=33321)),E===33319&&(k===5126&&(te=33328),k===5131&&(te=33327),k===5121&&(te=33323)),E===6408&&(k===5126&&(te=34836),k===5131&&(te=34842),k===5121&&(te=ee===pt&&K===!1?35907:32856),k===32819&&(te=32854),k===32820&&(te=32855)),(te===33325||te===33326||te===33327||te===33328||te===34842||te===34836)&&e.get("EXT_color_buffer_float"),te}function M(C,E,k){return y(C,k)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function R(C){return C===hn||C===rh||C===sh?9728:9729}function I(C){const E=C.target;E.removeEventListener("dispose",I),U(E),E.isVideoTexture&&g.delete(E)}function G(C){const E=C.target;E.removeEventListener("dispose",G),z(E)}function U(C){const E=n.get(C);if(E.__webglInit===void 0)return;const k=C.source,ee=m.get(k);if(ee){const K=ee[E.__cacheKey];K.usedTimes--,K.usedTimes===0&&L(C),Object.keys(ee).length===0&&m.delete(k)}n.remove(C)}function L(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const k=C.source,ee=m.get(k);delete ee[E.__cacheKey],a.memory.textures--}function z(C){const E=C.texture,k=n.get(C),ee=n.get(E);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)r.deleteFramebuffer(k.__webglFramebuffer[K]),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[K]);else{if(r.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let K=0;K<k.__webglColorRenderbuffer.length;K++)k.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[K]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let K=0,te=E.length;K<te;K++){const de=n.get(E[K]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(E[K])}n.remove(E),n.remove(C)}let H=0;function $(){H=0}function V(){const C=H;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),H+=1,C}function F(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.encoding),E.join()}function P(C,E){const k=n.get(C);if(C.isVideoTexture&&Se(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(k,C,E);return}}t.bindTexture(3553,k.__webglTexture,33984+E)}function se(C,E){const k=n.get(C);if(C.version>0&&k.__version!==C.version){De(k,C,E);return}t.bindTexture(35866,k.__webglTexture,33984+E)}function oe(C,E){const k=n.get(C);if(C.version>0&&k.__version!==C.version){De(k,C,E);return}t.bindTexture(32879,k.__webglTexture,33984+E)}function le(C,E){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Be(k,C,E);return}t.bindTexture(34067,k.__webglTexture,33984+E)}const he={[uu]:10497,[si]:33071,[fu]:33648},Oe={[hn]:9728,[rh]:9984,[sh]:9986,[zn]:9729,[e0]:9985,[Pl]:9987};function J(C,E,k){if(k?(r.texParameteri(C,10242,he[E.wrapS]),r.texParameteri(C,10243,he[E.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,he[E.wrapR]),r.texParameteri(C,10240,Oe[E.magFilter]),r.texParameteri(C,10241,Oe[E.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(E.wrapS!==si||E.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,R(E.magFilter)),r.texParameteri(C,10241,R(E.minFilter)),E.minFilter!==hn&&E.minFilter!==zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(E.type===Nr&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Vo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function We(C,E){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",I));const ee=E.source;let K=m.get(ee);K===void 0&&(K={},m.set(ee,K));const te=F(E);if(te!==C.__cacheKey){K[te]===void 0&&(K[te]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[te].usedTimes++;const de=K[C.__cacheKey];de!==void 0&&(K[C.__cacheKey].usedTimes--,de.usedTimes===0&&L(E)),C.__cacheKey=te,C.__webglTexture=K[te].texture}return k}function De(C,E,k){let ee=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=35866),E.isData3DTexture&&(ee=32879);const K=We(C,E),te=E.source;t.bindTexture(ee,C.__webglTexture,33984+k);const de=n.get(te);if(te.version!==de.__version||K===!0){t.activeTexture(33984+k),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const me=x(E)&&b(E.image)===!1;let Q=S(E.image,me,!1,u);Q=ue(E,Q);const ye=b(Q)||o,Te=s.convert(E.format,E.encoding);let _e=s.convert(E.type),Pe=v(E.internalFormat,Te,_e,E.encoding,E.isVideoTexture);J(ee,E,ye);let Ae;const fe=E.mipmaps,$e=o&&E.isVideoTexture!==!0,Ve=de.__version===void 0||K===!0,O=M(E,Q,ye);if(E.isDepthTexture)Pe=6402,o?E.type===Nr?Pe=36012:E.type===Fr?Pe=33190:E.type===Gs?Pe=35056:Pe=33189:E.type===Nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Vr&&Pe===6402&&E.type!==Gp&&E.type!==Fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Fr,_e=s.convert(E.type)),E.format===Ks&&Pe===6402&&(Pe=34041,E.type!==Gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Gs,_e=s.convert(E.type))),Ve&&($e?t.texStorage2D(3553,1,Pe,Q.width,Q.height):t.texImage2D(3553,0,Pe,Q.width,Q.height,0,Te,_e,null));else if(E.isDataTexture)if(fe.length>0&&ye){$e&&Ve&&t.texStorage2D(3553,O,Pe,fe[0].width,fe[0].height);for(let j=0,ae=fe.length;j<ae;j++)Ae=fe[j],$e?t.texSubImage2D(3553,j,0,0,Ae.width,Ae.height,Te,_e,Ae.data):t.texImage2D(3553,j,Pe,Ae.width,Ae.height,0,Te,_e,Ae.data);E.generateMipmaps=!1}else $e?(Ve&&t.texStorage2D(3553,O,Pe,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Q.width,Q.height,Te,_e,Q.data)):t.texImage2D(3553,0,Pe,Q.width,Q.height,0,Te,_e,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$e&&Ve&&t.texStorage3D(35866,O,Pe,fe[0].width,fe[0].height,Q.depth);for(let j=0,ae=fe.length;j<ae;j++)Ae=fe[j],E.format!==oi?Te!==null?$e?t.compressedTexSubImage3D(35866,j,0,0,0,Ae.width,Ae.height,Q.depth,Te,Ae.data,0,0):t.compressedTexImage3D(35866,j,Pe,Ae.width,Ae.height,Q.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(35866,j,0,0,0,Ae.width,Ae.height,Q.depth,Te,_e,Ae.data):t.texImage3D(35866,j,Pe,Ae.width,Ae.height,Q.depth,0,Te,_e,Ae.data)}else{$e&&Ve&&t.texStorage2D(3553,O,Pe,fe[0].width,fe[0].height);for(let j=0,ae=fe.length;j<ae;j++)Ae=fe[j],E.format!==oi?Te!==null?$e?t.compressedTexSubImage2D(3553,j,0,0,Ae.width,Ae.height,Te,Ae.data):t.compressedTexImage2D(3553,j,Pe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(3553,j,0,0,Ae.width,Ae.height,Te,_e,Ae.data):t.texImage2D(3553,j,Pe,Ae.width,Ae.height,0,Te,_e,Ae.data)}else if(E.isDataArrayTexture)$e?(Ve&&t.texStorage3D(35866,O,Pe,Q.width,Q.height,Q.depth),t.texSubImage3D(35866,0,0,0,0,Q.width,Q.height,Q.depth,Te,_e,Q.data)):t.texImage3D(35866,0,Pe,Q.width,Q.height,Q.depth,0,Te,_e,Q.data);else if(E.isData3DTexture)$e?(Ve&&t.texStorage3D(32879,O,Pe,Q.width,Q.height,Q.depth),t.texSubImage3D(32879,0,0,0,0,Q.width,Q.height,Q.depth,Te,_e,Q.data)):t.texImage3D(32879,0,Pe,Q.width,Q.height,Q.depth,0,Te,_e,Q.data);else if(E.isFramebufferTexture){if(Ve)if($e)t.texStorage2D(3553,O,Pe,Q.width,Q.height);else{let j=Q.width,ae=Q.height;for(let xe=0;xe<O;xe++)t.texImage2D(3553,xe,Pe,j,ae,0,Te,_e,null),j>>=1,ae>>=1}}else if(fe.length>0&&ye){$e&&Ve&&t.texStorage2D(3553,O,Pe,fe[0].width,fe[0].height);for(let j=0,ae=fe.length;j<ae;j++)Ae=fe[j],$e?t.texSubImage2D(3553,j,0,0,Te,_e,Ae):t.texImage2D(3553,j,Pe,Te,_e,Ae);E.generateMipmaps=!1}else $e?(Ve&&t.texStorage2D(3553,O,Pe,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Te,_e,Q)):t.texImage2D(3553,0,Pe,Te,_e,Q);y(E,ye)&&w(ee),de.__version=te.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Be(C,E,k){if(E.image.length!==6)return;const ee=We(C,E),K=E.source;t.bindTexture(34067,C.__webglTexture,33984+k);const te=n.get(K);if(K.version!==te.__version||ee===!0){t.activeTexture(33984+k),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const de=E.isCompressedTexture||E.image[0].isCompressedTexture,me=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let j=0;j<6;j++)!de&&!me?Q[j]=S(E.image[j],!1,!0,c):Q[j]=me?E.image[j].image:E.image[j],Q[j]=ue(E,Q[j]);const ye=Q[0],Te=b(ye)||o,_e=s.convert(E.format,E.encoding),Pe=s.convert(E.type),Ae=v(E.internalFormat,_e,Pe,E.encoding),fe=o&&E.isVideoTexture!==!0,$e=te.__version===void 0||ee===!0;let Ve=M(E,ye,Te);J(34067,E,Te);let O;if(de){fe&&$e&&t.texStorage2D(34067,Ve,Ae,ye.width,ye.height);for(let j=0;j<6;j++){O=Q[j].mipmaps;for(let ae=0;ae<O.length;ae++){const xe=O[ae];E.format!==oi?_e!==null?fe?t.compressedTexSubImage2D(34069+j,ae,0,0,xe.width,xe.height,_e,xe.data):t.compressedTexImage2D(34069+j,ae,Ae,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?t.texSubImage2D(34069+j,ae,0,0,xe.width,xe.height,_e,Pe,xe.data):t.texImage2D(34069+j,ae,Ae,xe.width,xe.height,0,_e,Pe,xe.data)}}}else{O=E.mipmaps,fe&&$e&&(O.length>0&&Ve++,t.texStorage2D(34067,Ve,Ae,Q[0].width,Q[0].height));for(let j=0;j<6;j++)if(me){fe?t.texSubImage2D(34069+j,0,0,0,Q[j].width,Q[j].height,_e,Pe,Q[j].data):t.texImage2D(34069+j,0,Ae,Q[j].width,Q[j].height,0,_e,Pe,Q[j].data);for(let ae=0;ae<O.length;ae++){const Re=O[ae].image[j].image;fe?t.texSubImage2D(34069+j,ae+1,0,0,Re.width,Re.height,_e,Pe,Re.data):t.texImage2D(34069+j,ae+1,Ae,Re.width,Re.height,0,_e,Pe,Re.data)}}else{fe?t.texSubImage2D(34069+j,0,0,0,_e,Pe,Q[j]):t.texImage2D(34069+j,0,Ae,_e,Pe,Q[j]);for(let ae=0;ae<O.length;ae++){const xe=O[ae];fe?t.texSubImage2D(34069+j,ae+1,0,0,_e,Pe,xe.image[j]):t.texImage2D(34069+j,ae+1,Ae,_e,Pe,xe.image[j])}}}y(E,Te)&&w(34067),te.__version=K.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ge(C,E,k,ee,K){const te=s.convert(k.format,k.encoding),de=s.convert(k.type),me=v(k.internalFormat,te,de,k.encoding);n.get(E).__hasExternalTextures||(K===32879||K===35866?t.texImage3D(K,0,me,E.width,E.height,E.depth,0,te,de,null):t.texImage2D(K,0,me,E.width,E.height,0,te,de,null)),t.bindFramebuffer(36160,C),q(E)?h.framebufferTexture2DMultisampleEXT(36160,ee,K,n.get(k).__webglTexture,0,re(E)):(K===3553||K>=34069&&K<=34074)&&r.framebufferTexture2D(36160,ee,K,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ge(C,E,k){if(r.bindRenderbuffer(36161,C),E.depthBuffer&&!E.stencilBuffer){let ee=33189;if(k||q(E)){const K=E.depthTexture;K&&K.isDepthTexture&&(K.type===Nr?ee=36012:K.type===Fr&&(ee=33190));const te=re(E);q(E)?h.renderbufferStorageMultisampleEXT(36161,te,ee,E.width,E.height):r.renderbufferStorageMultisample(36161,te,ee,E.width,E.height)}else r.renderbufferStorage(36161,ee,E.width,E.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(E.depthBuffer&&E.stencilBuffer){const ee=re(E);k&&q(E)===!1?r.renderbufferStorageMultisample(36161,ee,35056,E.width,E.height):q(E)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,E.width,E.height):r.renderbufferStorage(36161,34041,E.width,E.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{const ee=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let K=0;K<ee.length;K++){const te=ee[K],de=s.convert(te.format,te.encoding),me=s.convert(te.type),Q=v(te.internalFormat,de,me,te.encoding),ye=re(E);k&&q(E)===!1?r.renderbufferStorageMultisample(36161,ye,Q,E.width,E.height):q(E)?h.renderbufferStorageMultisampleEXT(36161,ye,Q,E.width,E.height):r.renderbufferStorage(36161,Q,E.width,E.height)}}r.bindRenderbuffer(36161,null)}function be(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),P(E.depthTexture,0);const ee=n.get(E.depthTexture).__webglTexture,K=re(E);if(E.depthTexture.format===Vr)q(E)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,K):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(E.depthTexture.format===Ks)q(E)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,K):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function Ce(C){const E=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");be(E.__webglFramebuffer,C)}else if(k){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=r.createRenderbuffer(),Ge(E.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Ge(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function ce(C,E,k){const ee=n.get(C);E!==void 0&&ge(ee.__webglFramebuffer,C,C.texture,36064,3553),k!==void 0&&Ce(C)}function ie(C){const E=C.texture,k=n.get(C),ee=n.get(E);C.addEventListener("dispose",G),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=E.version,a.memory.textures++);const K=C.isWebGLCubeRenderTarget===!0,te=C.isWebGLMultipleRenderTargets===!0,de=b(C)||o;if(K){k.__webglFramebuffer=[];for(let me=0;me<6;me++)k.__webglFramebuffer[me]=r.createFramebuffer()}else{if(k.__webglFramebuffer=r.createFramebuffer(),te)if(i.drawBuffers){const me=C.texture;for(let Q=0,ye=me.length;Q<ye;Q++){const Te=n.get(me[Q]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&q(C)===!1){const me=te?E:[E];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let Q=0;Q<me.length;Q++){const ye=me[Q];k.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(36161,k.__webglColorRenderbuffer[Q]);const Te=s.convert(ye.format,ye.encoding),_e=s.convert(ye.type),Pe=v(ye.internalFormat,Te,_e,ye.encoding,C.isXRRenderTarget===!0),Ae=re(C);r.renderbufferStorageMultisample(36161,Ae,Pe,C.width,C.height),r.framebufferRenderbuffer(36160,36064+Q,36161,k.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(36161,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ge(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(K){t.bindTexture(34067,ee.__webglTexture),J(34067,E,de);for(let me=0;me<6;me++)ge(k.__webglFramebuffer[me],C,E,36064,34069+me);y(E,de)&&w(34067),t.unbindTexture()}else if(te){const me=C.texture;for(let Q=0,ye=me.length;Q<ye;Q++){const Te=me[Q],_e=n.get(Te);t.bindTexture(3553,_e.__webglTexture),J(3553,Te,de),ge(k.__webglFramebuffer,C,Te,36064+Q,3553),y(Te,de)&&w(3553)}t.unbindTexture()}else{let me=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?me=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,ee.__webglTexture),J(me,E,de),ge(k.__webglFramebuffer,C,E,36064,me),y(E,de)&&w(me),t.unbindTexture()}C.depthBuffer&&Ce(C)}function N(C){const E=b(C)||o,k=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,K=k.length;ee<K;ee++){const te=k[ee];if(y(te,E)){const de=C.isWebGLCubeRenderTarget?34067:3553,me=n.get(te).__webglTexture;t.bindTexture(de,me),w(de),t.unbindTexture()}}}function D(C){if(o&&C.samples>0&&q(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],k=C.width,ee=C.height;let K=16384;const te=[],de=C.stencilBuffer?33306:36096,me=n.get(C),Q=C.isWebGLMultipleRenderTargets===!0;if(Q)for(let ye=0;ye<E.length;ye++)t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ye,36161,null),t.bindFramebuffer(36160,me.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ye,3553,null,0);t.bindFramebuffer(36008,me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,me.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){te.push(36064+ye),C.depthBuffer&&te.push(de);const Te=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Te===!1&&(C.depthBuffer&&(K|=256),C.stencilBuffer&&(K|=1024)),Q&&r.framebufferRenderbuffer(36008,36064,36161,me.__webglColorRenderbuffer[ye]),Te===!0&&(r.invalidateFramebuffer(36008,[de]),r.invalidateFramebuffer(36009,[de])),Q){const _e=n.get(E[ye]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,_e,0)}r.blitFramebuffer(0,0,k,ee,0,0,k,ee,K,9728),p&&r.invalidateFramebuffer(36008,te)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Q)for(let ye=0;ye<E.length;ye++){t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ye,36161,me.__webglColorRenderbuffer[ye]);const Te=n.get(E[ye]).__webglTexture;t.bindFramebuffer(36160,me.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ye,3553,Te,0)}t.bindFramebuffer(36009,me.__webglMultisampledFramebuffer)}}function re(C){return Math.min(f,C.samples)}function q(C){const E=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Se(C){const E=a.render.frame;g.get(C)!==E&&(g.set(C,E),C.update())}function ue(C,E){const k=C.encoding,ee=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===hu||k!==Zr&&(k===pt?o===!1?e.has("EXT_sRGB")===!0&&ee===oi?(C.format=hu,C.minFilter=zn,C.generateMipmaps=!1):E=$p.sRGBToLinear(E):(ee!==oi||K!==Yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),E}this.allocateTextureUnit=V,this.resetTextureUnits=$,this.setTexture2D=P,this.setTexture2DArray=se,this.setTexture3D=oe,this.setTextureCube=le,this.rebindTextures=ce,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=q}function p1(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===Yr)return 5121;if(s===r0)return 32819;if(s===s0)return 32820;if(s===t0)return 5120;if(s===n0)return 5122;if(s===Gp)return 5123;if(s===i0)return 5124;if(s===Fr)return 5125;if(s===Nr)return 5126;if(s===Vo)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===o0)return 6406;if(s===oi)return 6408;if(s===l0)return 6409;if(s===c0)return 6410;if(s===Vr)return 6402;if(s===Ks)return 34041;if(s===u0)return 6403;if(s===a0)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===hu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===f0)return 36244;if(s===h0)return 33319;if(s===d0)return 33320;if(s===p0)return 36249;if(s===Zl||s===Kl||s===Jl||s===Ql)if(a===pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Zl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ql)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Zl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ql)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===oh||s===ah||s===lh||s===ch)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===oh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ah)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ch)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===m0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===uh||s===fh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===uh)return a===pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===fh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hh||s===dh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===yh||s===bh||s===Sh||s===wh||s===Mh||s===Th)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===hh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ph)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===mh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===gh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_h)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Th)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Eh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Eh)return a===pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Gs?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class m1 extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mo extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g1={type:"move"};class Cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n);if(c.joints[d.jointName]===void 0){const T=new Mo;T.matrixAutoUpdate=!1,T.visible=!1,c.joints[d.jointName]=T,c.add(T)}const _=c.joints[d.jointName];m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class _1 extends ui{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Vr,u!==Vr&&u!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vr&&(n=Fr),n===void 0&&u===Ks&&(n=Gs),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1}}class v1 extends lo{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,p=null;const g=t.getContextAttributes();let d=null,m=null;const _=[],T=[],S=new kn;S.layers.enable(1),S.viewport=new $t;const b=new kn;b.layers.enable(2),b.viewport=new $t;const x=[S,b],y=new m1;y.layers.enable(1),y.layers.enable(2);let w=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let P=_[F];return P===void 0&&(P=new Cc,_[F]=P),P.getTargetRaySpace()},this.getControllerGrip=function(F){let P=_[F];return P===void 0&&(P=new Cc,_[F]=P),P.getGripSpace()},this.getHand=function(F){let P=_[F];return P===void 0&&(P=new Cc,_[F]=P),P.getHandSpace()};function M(F){const P=T.indexOf(F.inputSource);if(P===-1)return;const se=_[P];se!==void 0&&se.dispatchEvent({type:F.type,data:F.inputSource})}function R(){i.removeEventListener("select",M),i.removeEventListener("selectstart",M),i.removeEventListener("selectend",M),i.removeEventListener("squeeze",M),i.removeEventListener("squeezestart",M),i.removeEventListener("squeezeend",M),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",I);for(let F=0;F<_.length;F++){const P=T[F];P!==null&&(T[F]=null,_[F].disconnect(P))}w=null,v=null,e.setRenderTarget(d),h=null,f=null,u=null,i=null,m=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",M),i.addEventListener("selectstart",M),i.addEventListener("selectend",M),i.addEventListener("squeeze",M),i.addEventListener("squeezestart",M),i.addEventListener("squeezeend",M),i.addEventListener("end",R),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const P={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,P),i.updateRenderState({baseLayer:h}),m=new Kr(h.framebufferWidth,h.framebufferHeight,{format:oi,type:Yr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let P=null,se=null,oe=null;g.depth&&(oe=g.stencil?35056:33190,P=g.stencil?Ks:Vr,se=g.stencil?Gs:Fr);const le={colorFormat:32856,depthFormat:oe,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(le),i.updateRenderState({layers:[f]}),m=new Kr(f.textureWidth,f.textureHeight,{format:oi,type:Yr,depthTexture:new _1(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const he=e.properties.get(m);he.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(F){for(let P=0;P<F.removed.length;P++){const se=F.removed[P],oe=T.indexOf(se);oe>=0&&(T[oe]=null,_[oe].dispatchEvent({type:"disconnected",data:se}))}for(let P=0;P<F.added.length;P++){const se=F.added[P];let oe=T.indexOf(se);if(oe===-1){for(let he=0;he<_.length;he++)if(he>=T.length){T.push(se),oe=he;break}else if(T[he]===null){T[he]=se,oe=he;break}if(oe===-1)break}const le=_[oe];le&&le.dispatchEvent({type:"connected",data:se})}}const G=new Z,U=new Z;function L(F,P,se){G.setFromMatrixPosition(P.matrixWorld),U.setFromMatrixPosition(se.matrixWorld);const oe=G.distanceTo(U),le=P.projectionMatrix.elements,he=se.projectionMatrix.elements,Oe=le[14]/(le[10]-1),J=le[14]/(le[10]+1),We=(le[9]+1)/le[5],De=(le[9]-1)/le[5],Be=(le[8]-1)/le[0],ge=(he[8]+1)/he[0],Ge=Oe*Be,be=Oe*ge,Ce=oe/(-Be+ge),ce=Ce*-Be;P.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ce),F.translateZ(Ce),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const ie=Oe+Ce,N=J+Ce,D=Ge-ce,re=be+(oe-ce),q=We*J/N*ie,Se=De*J/N*ie;F.projectionMatrix.makePerspective(D,re,q,Se,ie,N)}function z(F,P){P===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(P.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;y.near=b.near=S.near=F.near,y.far=b.far=S.far=F.far,(w!==y.near||v!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,v=y.far);const P=F.parent,se=y.cameras;z(y,P);for(let le=0;le<se.length;le++)z(se[le],P);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),F.matrix.copy(y.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const oe=F.children;for(let le=0,he=oe.length;le<he;le++)oe[le].updateMatrixWorld(!0);se.length===2?L(y,S,b):y.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(F){f!==null&&(f.fixedFoveation=F),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=F)};let H=null;function $(F,P){if(c=P.getViewerPose(l||a),p=P,c!==null){const se=c.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let oe=!1;se.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let le=0;le<se.length;le++){const he=se[le];let Oe=null;if(h!==null)Oe=h.getViewport(he);else{const We=u.getViewSubImage(f,he);Oe=We.viewport,le===0&&(e.setRenderTargetTextures(m,We.colorTexture,f.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(m))}let J=x[le];J===void 0&&(J=new kn,J.layers.enable(le),J.viewport=new $t,x[le]=J),J.matrix.fromArray(he.transform.matrix),J.projectionMatrix.fromArray(he.projectionMatrix),J.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),le===0&&y.matrix.copy(J.matrix),oe===!0&&y.cameras.push(J)}}for(let se=0;se<_.length;se++){const oe=T[se],le=_[se];oe!==null&&le!==void 0&&le.update(oe,P,l||a)}H&&H(F,P),p=null}const V=new Qp;V.setAnimationLoop($),this.setAnimationLoop=function(F){H=F},this.dispose=function(){}}}function x1(r,e){function t(d,m){d.fogColor.value.copy(m.color),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,T,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(d,m):m.isMeshToonMaterial?(i(d,m),u(d,m)):m.isMeshPhongMaterial?(i(d,m),c(d,m)):m.isMeshStandardMaterial?(i(d,m),f(d,m),m.isMeshPhysicalMaterial&&h(d,m,S)):m.isMeshMatcapMaterial?(i(d,m),p(d,m)):m.isMeshDepthMaterial?i(d,m):m.isMeshDistanceMaterial?(i(d,m),g(d,m)):m.isMeshNormalMaterial?i(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?o(d,m,_,T):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===$n&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===$n&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const b=r.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let T;m.map?T=m.map:m.specularMap?T=m.specularMap:m.displacementMap?T=m.displacementMap:m.normalMap?T=m.normalMap:m.bumpMap?T=m.bumpMap:m.roughnessMap?T=m.roughnessMap:m.metalnessMap?T=m.metalnessMap:m.alphaMap?T=m.alphaMap:m.emissiveMap?T=m.emissiveMap:m.clearcoatMap?T=m.clearcoatMap:m.clearcoatNormalMap?T=m.clearcoatNormalMap:m.clearcoatRoughnessMap?T=m.clearcoatRoughnessMap:m.iridescenceMap?T=m.iridescenceMap:m.iridescenceThicknessMap?T=m.iridescenceThicknessMap:m.specularIntensityMap?T=m.specularIntensityMap:m.specularColorMap?T=m.specularColorMap:m.transmissionMap?T=m.transmissionMap:m.thicknessMap?T=m.thicknessMap:m.sheenColorMap?T=m.sheenColorMap:m.sheenRoughnessMap&&(T=m.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),d.uvTransform.value.copy(T.matrix));let S;m.aoMap?S=m.aoMap:m.lightMap&&(S=m.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uv2Transform.value.copy(S.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function o(d,m,_,T){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=T*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let S;m.map?S=m.map:m.alphaMap&&(S=m.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function h(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===$n&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function y1(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(T,S){const b=S.program;n.uniformBlockBinding(T,b)}function c(T,S){let b=i[T.id];b===void 0&&(g(T),b=u(T),i[T.id]=b,T.addEventListener("dispose",m));const x=S.program;n.updateUBOMapping(T,x);const y=e.render.frame;s[T.id]!==y&&(h(T),s[T.id]=y)}function u(T){const S=f();T.__bindingPointIndex=S;const b=r.createBuffer(),x=T.__size,y=T.usage;return r.bindBuffer(35345,b),r.bufferData(35345,x,y),r.bindBuffer(35345,null),r.bindBufferBase(35345,S,b),b}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const S=i[T.id],b=T.uniforms,x=T.__cache;r.bindBuffer(35345,S);for(let y=0,w=b.length;y<w;y++){const v=b[y];if(p(v,y,x)===!0){const M=v.value,R=v.__offset;typeof M=="number"?(v.__data[0]=M,r.bufferSubData(35345,R,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):M.toArray(v.__data),r.bufferSubData(35345,R,v.__data))}}r.bindBuffer(35345,null)}function p(T,S,b){const x=T.value;if(b[S]===void 0)return typeof x=="number"?b[S]=x:b[S]=x.clone(),!0;if(typeof x=="number"){if(b[S]!==x)return b[S]=x,!0}else{const y=b[S];if(y.equals(x)===!1)return y.copy(x),!0}return!1}function g(T){const S=T.uniforms;let b=0;const x=16;let y=0;for(let w=0,v=S.length;w<v;w++){const M=S[w],R=d(M);if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=b,w>0){y=b%x;const I=x-y;y!==0&&I-R.boundary<0&&(b+=x-y,M.__offset=b)}b+=R.storage}return y=b%x,y>0&&(b+=x-y),T.__size=b,T.__cache={},this}function d(T){const S=T.value,b={boundary:0,storage:0};return typeof S=="number"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(T){const S=T.target;S.removeEventListener("dispose",m);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function _(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:l,update:c,dispose:_}}function b1(){const r=Go("canvas");return r.style.display="block",r}function rm(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:b1(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Zr,this.physicallyCorrectLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let m=!1,_=0,T=0,S=null,b=-1,x=null;const y=new $t,w=new $t;let v=null,M=e.width,R=e.height,I=1,G=null,U=null;const L=new $t(0,0,M,R),z=new $t(0,0,M,R);let H=!1;const $=new Jp;let V=!1,F=!1,P=null;const se=new qt,oe=new dt,le=new Z,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return S===null?I:1}let J=t;function We(A,W){for(let X=0;X<A.length;X++){const B=A[X],ne=e.getContext(B,W);if(ne!==null)return ne}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ju}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",fe,!1),J===null){const W=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&W.shift(),J=We(W,A),J===null)throw We(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let De,Be,ge,Ge,be,Ce,ce,ie,N,D,re,q,Se,ue,C,E,k,ee,K,te,de,me,Q,ye;function Te(){De=new Ly(J),Be=new Ty(J,De,r),De.init(Be),me=new p1(J,De,Be),ge=new h1(J,De,Be),Ge=new Fy,be=new Jb,Ce=new d1(J,De,ge,be,Be,me,Ge),ce=new Cy(d),ie=new Dy(d),N=new H0(J,Be),Q=new wy(J,De,N,Be),D=new Iy(J,N,Ge,Q),re=new ky(J,D,N,Ge),K=new zy(J,Be,Ce),E=new Ey(be),q=new Kb(d,ce,ie,De,Be,Q,E),Se=new x1(d,be),ue=new e1,C=new o1(De,Be),ee=new Sy(d,ce,ie,ge,re,u,a),k=new f1(d,re,Be),ye=new y1(J,Ge,Be,ge),te=new My(J,De,Ge,Be),de=new Oy(J,De,Ge,Be),Ge.programs=q.programs,d.capabilities=Be,d.extensions=De,d.properties=be,d.renderLists=ue,d.shadowMap=k,d.state=ge,d.info=Ge}Te();const _e=new v1(d,J);this.xr=_e,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const A=De.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=De.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(A){A!==void 0&&(I=A,this.setSize(M,R,!1))},this.getSize=function(A){return A.set(M,R)},this.setSize=function(A,W,X){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=A,R=W,e.width=Math.floor(A*I),e.height=Math.floor(W*I),X!==!1&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(M*I,R*I).floor()},this.setDrawingBufferSize=function(A,W,X){M=A,R=W,I=X,e.width=Math.floor(A*X),e.height=Math.floor(W*X),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,W,X,B){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,W,X,B),ge.viewport(y.copy(L).multiplyScalar(I).floor())},this.getScissor=function(A){return A.copy(z)},this.setScissor=function(A,W,X,B){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,W,X,B),ge.scissor(w.copy(z).multiplyScalar(I).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(A){ge.setScissorTest(H=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(A=!0,W=!0,X=!0){let B=0;A&&(B|=16384),W&&(B|=256),X&&(B|=1024),J.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),ue.dispose(),C.dispose(),be.dispose(),ce.dispose(),ie.dispose(),re.dispose(),Q.dispose(),ye.dispose(),q.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",xe),_e.removeEventListener("sessionend",Re),P&&(P.dispose(),P=null),je.stop()};function Pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const A=Ge.autoReset,W=k.enabled,X=k.autoUpdate,B=k.needsUpdate,ne=k.type;Te(),Ge.autoReset=A,k.enabled=W,k.autoUpdate=X,k.needsUpdate=B,k.type=ne}function fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $e(A){const W=A.target;W.removeEventListener("dispose",$e),Ve(W)}function Ve(A){O(A),be.remove(A)}function O(A){const W=be.get(A).programs;W!==void 0&&(W.forEach(function(X){q.releaseProgram(X)}),A.isShaderMaterial&&q.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,X,B,ne,Me){W===null&&(W=he);const Ie=ne.isMesh&&ne.matrixWorld.determinant()<0,Ne=ot(A,W,X,B,ne);ge.setMaterial(B,Ie);let qe=X.index;const Ke=X.attributes.position;if(qe===null){if(Ke===void 0||Ke.count===0)return}else if(qe.count===0)return;let Ue=1;B.wireframe===!0&&(qe=D.getWireframeAttribute(X),Ue=2),Q.setup(ne,B,Ne,X,qe);let ze,st=te;qe!==null&&(ze=N.get(qe),st=de,st.setIndex(ze));const Zn=qe!==null?qe.count:Ke.count,Ti=X.drawRange.start*Ue,In=X.drawRange.count*Ue,jt=Me!==null?Me.start*Ue:0,ct=Me!==null?Me.count*Ue:1/0,as=Math.max(Ti,jt),Ct=Math.min(Zn,Ti+In,jt+ct)-1,On=Math.max(0,Ct-as+1);if(On!==0){if(ne.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*Oe()),st.setMode(1)):st.setMode(4);else if(ne.isLine){let Hi=B.linewidth;Hi===void 0&&(Hi=1),ge.setLineWidth(Hi*Oe()),ne.isLineSegments?st.setMode(1):ne.isLineLoop?st.setMode(2):st.setMode(3)}else ne.isPoints?st.setMode(0):ne.isSprite&&st.setMode(4);if(ne.isInstancedMesh)st.renderInstances(as,On,ne.count);else if(X.isInstancedBufferGeometry){const Hi=Math.min(X.instanceCount,X._maxInstanceCount);st.renderInstances(as,On,Hi)}else st.render(as,On)}},this.compile=function(A,W){function X(B,ne,Me){B.transparent===!0&&B.side===nr?(B.side=$n,B.needsUpdate=!0,pe(B,ne,Me),B.side=Xs,B.needsUpdate=!0,pe(B,ne,Me),B.side=nr):pe(B,ne,Me)}h=C.get(A),h.init(),g.push(h),A.traverseVisible(function(B){B.isLight&&B.layers.test(W.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights(d.physicallyCorrectLights),A.traverse(function(B){const ne=B.material;if(ne)if(Array.isArray(ne))for(let Me=0;Me<ne.length;Me++){const Ie=ne[Me];X(Ie,A,B)}else X(ne,A,B)}),g.pop(),h=null};let j=null;function ae(A){j&&j(A)}function xe(){je.stop()}function Re(){je.start()}const je=new Qp;je.setAnimationLoop(ae),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(A){j=A,_e.setAnimationLoop(A),A===null?je.stop():je.start()},_e.addEventListener("sessionstart",xe),_e.addEventListener("sessionend",Re),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(W),W=_e.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,W,S),h=C.get(A,g.length),h.init(),g.push(h),se.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$.setFromProjectionMatrix(se),F=this.localClippingEnabled,V=E.init(this.clippingPlanes,F,W),f=ue.get(A,p.length),f.init(),p.push(f),lt(A,W,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(G,U),V===!0&&E.beginShadows();const X=h.state.shadowsArray;if(k.render(X,A,W),V===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,A),h.setupLights(d.physicallyCorrectLights),W.isArrayCamera){const B=W.cameras;for(let ne=0,Me=B.length;ne<Me;ne++){const Ie=B[ne];Ye(f,A,Ie,Ie.viewport)}}else Ye(f,A,W);S!==null&&(Ce.updateMultisampleRenderTarget(S),Ce.updateRenderTargetMipmap(S)),A.isScene===!0&&A.onAfterRender(d,A,W),Q.resetDefaultState(),b=-1,x=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function lt(A,W,X,B){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){B&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(se);const Ie=re.update(A),Ne=A.material;Ne.visible&&f.push(A,Ie,Ne,X,le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ge.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ge.render.frame),!A.frustumCulled||$.intersectsObject(A))){B&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(se);const Ie=re.update(A),Ne=A.material;if(Array.isArray(Ne)){const qe=Ie.groups;for(let Ke=0,Ue=qe.length;Ke<Ue;Ke++){const ze=qe[Ke],st=Ne[ze.materialIndex];st&&st.visible&&f.push(A,Ie,st,X,le.z,ze)}}else Ne.visible&&f.push(A,Ie,Ne,X,le.z,null)}}const Me=A.children;for(let Ie=0,Ne=Me.length;Ie<Ne;Ie++)lt(Me[Ie],W,X,B)}function Ye(A,W,X,B){const ne=A.opaque,Me=A.transmissive,Ie=A.transparent;h.setupLightsView(X),Me.length>0&&Fe(ne,W,X),B&&ge.viewport(y.copy(B)),ne.length>0&&Y(ne,W,X),Me.length>0&&Y(Me,W,X),Ie.length>0&&Y(Ie,W,X),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Fe(A,W,X){const B=Be.isWebGL2;P===null&&(P=new Kr(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?Vo:Yr,minFilter:Pl,samples:B&&s===!0?4:0})),d.getDrawingBufferSize(oe),B?P.setSize(oe.x,oe.y):P.setSize(du(oe.x),du(oe.y));const ne=d.getRenderTarget();d.setRenderTarget(P),d.clear();const Me=d.toneMapping;d.toneMapping=Bi,Y(A,W,X),d.toneMapping=Me,Ce.updateMultisampleRenderTarget(P),Ce.updateRenderTargetMipmap(P),d.setRenderTarget(ne)}function Y(A,W,X){const B=W.isScene===!0?W.overrideMaterial:null;for(let ne=0,Me=A.length;ne<Me;ne++){const Ie=A[ne],Ne=Ie.object,qe=Ie.geometry,Ke=B===null?Ie.material:B,Ue=Ie.group;Ne.layers.test(X.layers)&&ve(Ne,W,X,qe,Ke,Ue)}}function ve(A,W,X,B,ne,Me){A.onBeforeRender(d,W,X,B,ne,Me),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(d,W,X,B,A,Me),ne.transparent===!0&&ne.side===nr?(ne.side=$n,ne.needsUpdate=!0,d.renderBufferDirect(X,W,B,ne,A,Me),ne.side=Xs,ne.needsUpdate=!0,d.renderBufferDirect(X,W,B,ne,A,Me),ne.side=nr):d.renderBufferDirect(X,W,B,ne,A,Me),A.onAfterRender(d,W,X,B,ne,Me)}function pe(A,W,X){W.isScene!==!0&&(W=he);const B=be.get(A),ne=h.state.lights,Me=h.state.shadowsArray,Ie=ne.state.version,Ne=q.getParameters(A,ne.state,Me,W,X),qe=q.getProgramCacheKey(Ne);let Ke=B.programs;B.environment=A.isMeshStandardMaterial?W.environment:null,B.fog=W.fog,B.envMap=(A.isMeshStandardMaterial?ie:ce).get(A.envMap||B.environment),Ke===void 0&&(A.addEventListener("dispose",$e),Ke=new Map,B.programs=Ke);let Ue=Ke.get(qe);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===Ie)return Le(A,Ne),Ue}else Ne.uniforms=q.getUniforms(A),A.onBuild(X,Ne,d),A.onBeforeCompile(Ne,d),Ue=q.acquireProgram(Ne,qe),Ke.set(qe,Ue),B.uniforms=Ne.uniforms;const ze=B.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=E.uniform),Le(A,Ne),B.needsLights=ut(A),B.lightsStateVersion=Ie,B.needsLights&&(ze.ambientLightColor.value=ne.state.ambient,ze.lightProbe.value=ne.state.probe,ze.directionalLights.value=ne.state.directional,ze.directionalLightShadows.value=ne.state.directionalShadow,ze.spotLights.value=ne.state.spot,ze.spotLightShadows.value=ne.state.spotShadow,ze.rectAreaLights.value=ne.state.rectArea,ze.ltc_1.value=ne.state.rectAreaLTC1,ze.ltc_2.value=ne.state.rectAreaLTC2,ze.pointLights.value=ne.state.point,ze.pointLightShadows.value=ne.state.pointShadow,ze.hemisphereLights.value=ne.state.hemi,ze.directionalShadowMap.value=ne.state.directionalShadowMap,ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ze.spotShadowMap.value=ne.state.spotShadowMap,ze.spotLightMatrix.value=ne.state.spotLightMatrix,ze.spotLightMap.value=ne.state.spotLightMap,ze.pointShadowMap.value=ne.state.pointShadowMap,ze.pointShadowMatrix.value=ne.state.pointShadowMatrix);const st=Ue.getUniforms(),Zn=Ja.seqWithValue(st.seq,ze);return B.currentProgram=Ue,B.uniformsList=Zn,Ue}function Le(A,W){const X=be.get(A);X.outputEncoding=W.outputEncoding,X.instancing=W.instancing,X.skinning=W.skinning,X.morphTargets=W.morphTargets,X.morphNormals=W.morphNormals,X.morphColors=W.morphColors,X.morphTargetsCount=W.morphTargetsCount,X.numClippingPlanes=W.numClippingPlanes,X.numIntersection=W.numClipIntersection,X.vertexAlphas=W.vertexAlphas,X.vertexTangents=W.vertexTangents,X.toneMapping=W.toneMapping}function ot(A,W,X,B,ne){W.isScene!==!0&&(W=he),Ce.resetTextureUnits();const Me=W.fog,Ie=B.isMeshStandardMaterial?W.environment:null,Ne=S===null?d.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Zr,qe=(B.isMeshStandardMaterial?ie:ce).get(B.envMap||Ie),Ke=B.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ue=!!B.normalMap&&!!X.attributes.tangent,ze=!!X.morphAttributes.position,st=!!X.morphAttributes.normal,Zn=!!X.morphAttributes.color,Ti=B.toneMapped?d.toneMapping:Bi,In=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,jt=In!==void 0?In.length:0,ct=be.get(B),as=h.state.lights;if(V===!0&&(F===!0||A!==x)){const vn=A===x&&B.id===b;E.setState(B,A,vn)}let Ct=!1;B.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==as.state.version||ct.outputEncoding!==Ne||ne.isInstancedMesh&&ct.instancing===!1||!ne.isInstancedMesh&&ct.instancing===!0||ne.isSkinnedMesh&&ct.skinning===!1||!ne.isSkinnedMesh&&ct.skinning===!0||ct.envMap!==qe||B.fog===!0&&ct.fog!==Me||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==E.numPlanes||ct.numIntersection!==E.numIntersection)||ct.vertexAlphas!==Ke||ct.vertexTangents!==Ue||ct.morphTargets!==ze||ct.morphNormals!==st||ct.morphColors!==Zn||ct.toneMapping!==Ti||Be.isWebGL2===!0&&ct.morphTargetsCount!==jt)&&(Ct=!0):(Ct=!0,ct.__version=B.version);let On=ct.currentProgram;Ct===!0&&(On=pe(B,W,ne));let Hi=!1,ho=!1,jl=!1;const tn=On.getUniforms(),br=ct.uniforms;if(ge.useProgram(On.program)&&(Hi=!0,ho=!0,jl=!0),B.id!==b&&(b=B.id,ho=!0),Hi||x!==A){if(tn.setValue(J,"projectionMatrix",A.projectionMatrix),Be.logarithmicDepthBuffer&&tn.setValue(J,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),x!==A&&(x=A,ho=!0,jl=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const vn=tn.map.cameraPosition;vn!==void 0&&vn.setValue(J,le.setFromMatrixPosition(A.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&tn.setValue(J,"isOrthographic",A.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||ne.isSkinnedMesh)&&tn.setValue(J,"viewMatrix",A.matrixWorldInverse)}if(ne.isSkinnedMesh){tn.setOptional(J,ne,"bindMatrix"),tn.setOptional(J,ne,"bindMatrixInverse");const vn=ne.skeleton;vn&&(Be.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),tn.setValue(J,"boneTexture",vn.boneTexture,Ce),tn.setValue(J,"boneTextureSize",vn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xl=X.morphAttributes;if((Xl.position!==void 0||Xl.normal!==void 0||Xl.color!==void 0&&Be.isWebGL2===!0)&&K.update(ne,X,B,On),(ho||ct.receiveShadow!==ne.receiveShadow)&&(ct.receiveShadow=ne.receiveShadow,tn.setValue(J,"receiveShadow",ne.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(br.envMap.value=qe,br.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ho&&(tn.setValue(J,"toneMappingExposure",d.toneMappingExposure),ct.needsLights&&He(br,jl),Me&&B.fog===!0&&Se.refreshFogUniforms(br,Me),Se.refreshMaterialUniforms(br,B,I,R,P),Ja.upload(J,ct.uniformsList,br,Ce)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ja.upload(J,ct.uniformsList,br,Ce),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&tn.setValue(J,"center",ne.center),tn.setValue(J,"modelViewMatrix",ne.modelViewMatrix),tn.setValue(J,"normalMatrix",ne.normalMatrix),tn.setValue(J,"modelMatrix",ne.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const vn=B.uniformsGroups;for(let Yl=0,h_=vn.length;Yl<h_;Yl++)if(Be.isWebGL2){const Yf=vn[Yl];ye.update(Yf,On),ye.bind(Yf,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function He(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ut(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(A,W,X){be.get(A.texture).__webglTexture=W,be.get(A.depthTexture).__webglTexture=X;const B=be.get(A);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=X===void 0,B.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){const X=be.get(A);X.__webglFramebuffer=W,X.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,X=0){S=A,_=W,T=X;let B=!0,ne=null,Me=!1,Ie=!1;if(A){const qe=be.get(A);qe.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),B=!1):qe.__webglFramebuffer===void 0?Ce.setupRenderTarget(A):qe.__hasExternalTextures&&Ce.rebindTextures(A,be.get(A.texture).__webglTexture,be.get(A.depthTexture).__webglTexture);const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ie=!0);const Ue=be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ne=Ue[W],Me=!0):Be.isWebGL2&&A.samples>0&&Ce.useMultisampledRTT(A)===!1?ne=be.get(A).__webglMultisampledFramebuffer:ne=Ue,y.copy(A.viewport),w.copy(A.scissor),v=A.scissorTest}else y.copy(L).multiplyScalar(I).floor(),w.copy(z).multiplyScalar(I).floor(),v=H;if(ge.bindFramebuffer(36160,ne)&&Be.drawBuffers&&B&&ge.drawBuffers(A,ne),ge.viewport(y),ge.scissor(w),ge.setScissorTest(v),Me){const qe=be.get(A.texture);J.framebufferTexture2D(36160,36064,34069+W,qe.__webglTexture,X)}else if(Ie){const qe=be.get(A.texture),Ke=W||0;J.framebufferTextureLayer(36160,36064,qe.__webglTexture,X||0,Ke)}b=-1},this.readRenderTargetPixels=function(A,W,X,B,ne,Me,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){ge.bindFramebuffer(36160,Ne);try{const qe=A.texture,Ke=qe.format,Ue=qe.type;if(Ke!==oi&&me.convert(Ke)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ue===Vo&&(De.has("EXT_color_buffer_half_float")||Be.isWebGL2&&De.has("EXT_color_buffer_float"));if(Ue!==Yr&&me.convert(Ue)!==J.getParameter(35738)&&!(Ue===Nr&&(Be.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-B&&X>=0&&X<=A.height-ne&&J.readPixels(W,X,B,ne,me.convert(Ke),me.convert(Ue),Me)}finally{const qe=S!==null?be.get(S).__webglFramebuffer:null;ge.bindFramebuffer(36160,qe)}}},this.copyFramebufferToTexture=function(A,W,X=0){const B=Math.pow(2,-X),ne=Math.floor(W.image.width*B),Me=Math.floor(W.image.height*B);Ce.setTexture2D(W,0),J.copyTexSubImage2D(3553,X,0,0,A.x,A.y,ne,Me),ge.unbindTexture()},this.copyTextureToTexture=function(A,W,X,B=0){const ne=W.image.width,Me=W.image.height,Ie=me.convert(X.format),Ne=me.convert(X.type);Ce.setTexture2D(X,0),J.pixelStorei(37440,X.flipY),J.pixelStorei(37441,X.premultiplyAlpha),J.pixelStorei(3317,X.unpackAlignment),W.isDataTexture?J.texSubImage2D(3553,B,A.x,A.y,ne,Me,Ie,Ne,W.image.data):W.isCompressedTexture?J.compressedTexSubImage2D(3553,B,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,Ie,W.mipmaps[0].data):J.texSubImage2D(3553,B,A.x,A.y,Ie,Ne,W.image),B===0&&X.generateMipmaps&&J.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(A,W,X,B,ne=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=A.max.x-A.min.x+1,Ie=A.max.y-A.min.y+1,Ne=A.max.z-A.min.z+1,qe=me.convert(B.format),Ke=me.convert(B.type);let Ue;if(B.isData3DTexture)Ce.setTexture3D(B,0),Ue=32879;else if(B.isDataArrayTexture)Ce.setTexture2DArray(B,0),Ue=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,B.flipY),J.pixelStorei(37441,B.premultiplyAlpha),J.pixelStorei(3317,B.unpackAlignment);const ze=J.getParameter(3314),st=J.getParameter(32878),Zn=J.getParameter(3316),Ti=J.getParameter(3315),In=J.getParameter(32877),jt=X.isCompressedTexture?X.mipmaps[0]:X.image;J.pixelStorei(3314,jt.width),J.pixelStorei(32878,jt.height),J.pixelStorei(3316,A.min.x),J.pixelStorei(3315,A.min.y),J.pixelStorei(32877,A.min.z),X.isDataTexture||X.isData3DTexture?J.texSubImage3D(Ue,ne,W.x,W.y,W.z,Me,Ie,Ne,qe,Ke,jt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Ue,ne,W.x,W.y,W.z,Me,Ie,Ne,qe,jt.data)):J.texSubImage3D(Ue,ne,W.x,W.y,W.z,Me,Ie,Ne,qe,Ke,jt),J.pixelStorei(3314,ze),J.pixelStorei(32878,st),J.pixelStorei(3316,Zn),J.pixelStorei(3315,Ti),J.pixelStorei(32877,In),ne===0&&B.generateMipmaps&&J.generateMipmap(Ue),ge.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ce.setTextureCube(A,0):A.isData3DTexture?Ce.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ce.setTexture2DArray(A,0):Ce.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){_=0,T=0,S=null,ge.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class S1 extends rm{}S1.prototype.isWebGL1Renderer=!0;class w1 extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class sf extends vr{constructor(e=1,t=.4,n=8,i=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new Z,f=new Z,h=new Z;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const d=g/i*s,m=p/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(d),f.y=(e+t*Math.cos(m))*Math.sin(d),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(d),u.y=e*Math.sin(d),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const d=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,_=(i+1)*(p-1)+g,T=(i+1)*p+g;a.push(d,m,T),a.push(m,_,T)}this.setIndex(a),this.setAttribute("position",new xi(o,3)),this.setAttribute("normal",new xi(l,3)),this.setAttribute("uv",new xi(c,2))}static fromJSON(e){return new sf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}const cd={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class M1{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const T1=new M1;class sm{constructor(e){this.manager=e!==void 0?e:T1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class E1 extends sm{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=cd.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Go("img");function l(){u(),cd.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class C1 extends sm{constructor(e){super(e)}load(e,t,n,i){const s=new tf,a=new E1(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ju}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ju);function Ii(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function om(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qs={duration:.5,overwrite:!1,delay:0},of,pn,Rt,Gn=1e8,ft=1/Gn,mu=Math.PI*2,A1=mu/4,P1=0,am=Math.sqrt,R1=Math.cos,D1=Math.sin,Bt=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},Vi=function(e){return typeof e=="number"},af=function(e){return typeof e>"u"},wi=function(e){return typeof e=="object"},mn=function(e){return e!==!1},lm=function(){return typeof window<"u"},Pa=function(e){return wt(e)||Bt(e)},cm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},en=Array.isArray,gu=/(?:-?\.?\d|\.)+/gi,um=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ac=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fm=/[+-]=-?[.\d]+/,hm=/[^,'"\[\]\s]+/gi,L1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,vt,Un,_u,lf,Dn={},gl={},dm,pm=function(e){return(gl=Qr(e,Dn))&&Ln},cf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},_l=function(e,t){return!t&&console.warn(e)},mm=function(e,t){return e&&(Dn[e]=t)&&gl&&(gl[e]=t)||Dn},Ho=function(){return 0},I1={suppressEvents:!0,isStart:!0,kill:!1},Qa={suppressEvents:!0,kill:!1},O1={suppressEvents:!0},uf={},ur=[],vu={},gm,Mn={},Pc={},ud=30,el=[],ff="",hf=function(e){var t=e[0],n,i;if(wi(t)||wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=el.length;i--&&!el[i].targetTest(t););n=el[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new zm(e[i],n)))||e.splice(i,1);return e},Hr=function(e){return e._gsap||hf(Hn(e))[0]._gsap},_m=function(e,t,n){return(n=e[t])&&wt(n)?e[t]():af(n)&&e.getAttribute&&e.getAttribute(t)||n},gn=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},Hs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},F1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},vl=function(){var e=ur.length,t=ur.slice(0),n,i;for(vu={},ur.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vm=function(e,t,n,i){ur.length&&vl(),e.render(t,n,i||pn&&t<0&&(e._initted||e._startAt)),ur.length&&vl()},xm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(hm).length<2?t:Bt(e)?e.trim():e},ym=function(e){return e},jn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},N1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Qr=function(e,t){for(var n in t)e[n]=t[n];return e},fd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=wi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},xl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Do=function(e){var t=e.parent||vt,n=e.keyframes?N1(en(e.keyframes)):jn;if(mn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},U1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},bm=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ll=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},dr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Wr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},z1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xu=function(e,t,n,i){return e._startAt&&(pn?e._startAt.revert(Qa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},k1=function r(e){return!e||e._ts&&r(e.parent)},hd=function(e){return e._repeat?eo(e._tTime,e=e.duration()+e._rDelay)*e:0},eo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},yl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Il=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},Ol=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Il(e),n._dirty||Wr(n,e)),e},Sm=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=yl(e.rawTime(),t),(!t._dur||sa(0,t.totalDuration(),n)-t._tTime>ft)&&t.render(n,!0)),Wr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ft}},mi=function(e,t,n,i){return t.parent&&dr(t),t._start=Wt((Vi(n)?n:n||e!==vt?Nn(e,n,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bm(e,t,"_first","_last",e._sort?"_start":0),yu(t)||(e._recent=t),i||Sm(e,t),e._ts<0&&Ol(e,e._tTime),e},wm=function(e,t){return(Dn.ScrollTrigger||cf("scrollTrigger",t))&&Dn.ScrollTrigger.create(t,e)},Mm=function(e,t,n,i,s){if(pf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gm!==En.frame)return ur.push(e),e._lazy=[s,i],1},B1=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},yu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},V1=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&B1(e)&&!(!e._initted&&yu(e))||(e._ts<0||e._dp._ts<0)&&!yu(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=sa(0,e._tDur,t),u=eo(l,o),e._yoyo&&u&1&&(a=1-a),u!==eo(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||pn||i||e._zTime===ft||!t&&e._zTime){if(!e._initted&&Mm(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?ft:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&xu(e,t,n,!0),e._onUpdate&&!n&&Wn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&dr(e,1),!n&&!pn&&(Wn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},G1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},to=function(e,t,n,i){var s=e._repeat,a=Wt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Wt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Ol(e,e._tTime=e._tDur*o),e.parent&&Il(e),n||Wr(e.parent,e),e},dd=function(e){return e instanceof dn?Wr(e):to(e,e._dur)},H1={_start:0,endTime:Ho,totalDuration:Ho},Nn=function r(e,t,n){var i=e.labels,s=e._recent||H1,a=e.duration()>=Gn?s.endTime(!1):e._dur,o,l,c;return Bt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(en(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Lo=function(e,t,n){var i=Vi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=mn(l.vars.inherit)&&l.parent;a.immediateRender=mn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ot(t[0],a,t[s+1])},xr=function(e,t){return e||e===0?t(e):t},sa=function(e,t,n){return n<e?e:n>t?t:n},Kt=function(e,t){return!Bt(e)||!(t=L1.exec(e))?"":t[1]},W1=function(e,t,n){return xr(n,function(i){return sa(e,t,i)})},bu=[].slice,Tm=function(e,t){return e&&wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wi(e[0]))&&!e.nodeType&&e!==Un},$1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Bt(i)&&!t||Tm(i,1)?(s=n).push.apply(s,Hn(i)):n.push(i)})||n},Hn=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):Bt(e)&&!n&&(_u||!no())?bu.call((t||lf).querySelectorAll(e),0):en(e)?$1(e,n):Tm(e)?bu.call(e,0):e?[e]:[]},Su=function(e){return e=Hn(e)[0]||_l("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Hn(t,n.querySelectorAll?n:n===e?_l("Invalid scope")||lf.createElement("div"):e)}},Em=function(e){return e.sort(function(){return .5-Math.random()})},Cm=function(e){if(wt(e))return e;var t=wi(e)?e:{each:e},n=$r(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return Bt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,p,g){var d=(g||t).length,m=a[d],_,T,S,b,x,y,w,v,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Gn])[1],!M){for(w=-Gn;w<(w=g[M++].getBoundingClientRect().left)&&M<d;);M--}for(m=a[d]=[],_=l?Math.min(M,d)*u-.5:i%M,T=M===Gn?0:l?d*f/M-.5:i/M|0,w=0,v=Gn,y=0;y<d;y++)S=y%M-_,b=T-(y/M|0),m[y]=x=c?Math.abs(c==="y"?b:S):am(S*S+b*b),x>w&&(w=x),x<v&&(v=x);i==="random"&&Em(m),m.max=w-v,m.min=v,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(M>d?d-1:c?c==="y"?d/M:M:Math.max(M,d/M))||0)*(i==="edges"?-1:1),m.b=d<0?s-d:s,m.u=Kt(t.amount||t.each)||0,n=n&&d<0?Fm(n):n}return d=(m[h]-m.min)/m.max||0,Wt(m.b+(n?n(d):d)*m.v)+m.u}},wu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Wt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Vi(n)?0:Kt(n))}},Am=function(e,t){var n=en(e),i,s;return!n&&wi(e)&&(i=n=e.radius||Gn,e.values?(e=Hn(e.values),(s=!Vi(e[0]))&&(i*=i)):e=wu(e.increment)),xr(t,n?wt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Gn,u=0,f=e.length,h,p;f--;)s?(h=e[f].x-o,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||Vi(a)?u:u+Kt(a)}:wu(e))},Pm=function(e,t,n,i){return xr(en(e)?!t:n===!0?!!(n=0):!i,function(){return en(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},q1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},j1=function(e,t){return function(n){return e(parseFloat(n))+(t||Kt(n))}},X1=function(e,t,n){return Dm(e,t,0,1,n)},Rm=function(e,t,n){return xr(n,function(i){return e[~~t(i)]})},Y1=function r(e,t,n){var i=t-e;return en(e)?Rm(e,r(0,e.length),t):xr(n,function(s){return(i+(s-e)%i)%i+e})},Z1=function r(e,t,n){var i=t-e,s=i*2;return en(e)?Rm(e,r(0,e.length-1),t):xr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Wo=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?hm:gu),n+=e.substr(t,i-t)+Pm(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Dm=function(e,t,n,i,s){var a=t-e,o=i-n;return xr(s,function(l){return n+((l-e)/a*o||0)})},K1=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Bt(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(en(e)&&!en(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=t}else i||(e=Qr(en(e)?[]:{},e));if(!u){for(l in t)df.call(o,e,l,"get",t[l]);s=function(g){return _f(g,o)||(a?e.p:e)}}}return xr(n,s)},pd=function(e,t,n){var i=e.labels,s=Gn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Wn=function(e,t,n){var i=e.vars,s=i[t],a=Rt,o=e._ctx,l,c,u;if(!!s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ur.length&&vl(),o&&(Rt=o),u=l?s.apply(c,l):s.call(c),Rt=a,u},To=function(e){return dr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pn),e.progress()<1&&Wn(e,"onInterrupt"),e},Ns,J1=function(e){e=!e.name&&e.default||e;var t=e.name,n=wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ho,render:_f,add:df,kill:pS,modifier:dS,rawVars:0},a={targetTest:0,get:0,getSetter:gf,aliases:{},register:0};if(no(),e!==i){if(Mn[t])return;jn(i,jn(xl(e,s),a)),Qr(i.prototype,Qr(s,xl(e,a))),Mn[i.prop=t]=i,e.targetTest&&(el.push(i),uf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}mm(t,i),e.register&&e.register(Ln,i,_n)},ht=255,Eo={aqua:[0,ht,ht],lime:[0,ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ht],navy:[0,0,128],white:[ht,ht,ht],olive:[128,128,0],yellow:[ht,ht,0],orange:[ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ht,0,0],pink:[ht,192,203],cyan:[0,ht,ht],transparent:[ht,ht,ht,0]},Rc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ht+.5|0},Lm=function(e,t,n){var i=e?Vi(e)?[e>>16,e>>8&ht,e&ht]:0:Eo.black,s,a,o,l,c,u,f,h,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Eo[e])i=Eo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ht,i&ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ht,e&ht]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(gu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Rc(l+1/3,s,a),i[1]=Rc(l,s,a),i[2]=Rc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(um),n&&i.length<4&&(i[3]=1),i}else i=e.match(gu)||Eo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/ht,a=i[1]/ht,o=i[2]/ht,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===s?(a-o)/p+(a<o?6:0):f===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Im=function(e){var t=[],n=[],i=-1;return e.split(fr).forEach(function(s){var a=s.match(Fs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},md=function(e,t,n){var i="",s=(e+i).match(fr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Lm(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Im(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(fr,"1").split(Fs),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(fr),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},fr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Eo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Q1=/hsl[a]?\(/,Om=function(e){var t=e.join(" "),n;if(fr.lastIndex=0,fr.test(t))return n=Q1.test(t),e[1]=md(e[1],n),e[0]=md(e[0],n,Im(e[1])),!0},$o,En=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,p,g=function d(m){var _=r()-i,T=m===!0,S,b,x,y;if(_>e&&(n+=_-t),i+=_,x=i-n,S=x-a,(S>0||T)&&(y=++f.frame,h=x-f.time*1e3,f.time=x=x/1e3,a+=S+(S>=s?4:s-S),b=1),T||(l=c(d)),b)for(p=0;p<o.length;p++)o[p](x,h,y,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){dm&&(!_u&&lm()&&(Un=_u=window,lf=Un.document||{},Dn.gsap=Ln,(Un.gsapVersions||(Un.gsapVersions=[])).push(Ln.version),pm(gl||Un.GreenSockGlobals||!Un.gsap&&Un||{}),u=Un.requestAnimationFrame),l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},$o=1,g(2))},sleep:function(){(u?Un.cancelAnimationFrame:clearTimeout)(l),$o=0,c=Ho},lagSmoothing:function(m,_){e=m||1/ft,t=Math.min(_,e,0)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,_,T){var S=_?function(b,x,y,w){m(b,x,y,w),f.remove(S)}:m;return f.remove(m),o[T?"unshift":"push"](S),no(),S},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&p>=_&&p--},_listeners:o},f}(),no=function(){return!$o&&En.wake()},it={},eS=/^[\d.\-M][\d.\-,\s]/,tS=/["']/g,nS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(tS,"").trim():+c,i=l.substr(o+1).trim();return t},iS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},rS=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[nS(t[1])]:iS(e).split(",").map(xm)):it._CE&&eS.test(e)?it._CE("",e):n},Fm=function(e){return function(t){return 1-e(1-t)}},Nm=function r(e,t){for(var n=e._first,i;n;)n instanceof dn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},$r=function(e,t){return e&&(wt(e)?e:it[e]||rS(e))||t},ss=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return gn(e,function(o){it[o]=Dn[o]=s,it[a=o.toLowerCase()]=n;for(var l in s)it[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[o+"."+l]=s[l]}),s},Um=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Dc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/mu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*D1((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Um(o);return s=mu/s,l.config=function(c,u){return r(e,c,u)},l},Lc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Um(n);return i.config=function(s){return r(e,s)},i};gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ss(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;ss("Elastic",Dc("in"),Dc("out"),Dc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ss("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ss("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ss("Circ",function(r){return-(am(1-r*r)-1)});ss("Sine",function(r){return r===1?1:-R1(r*A1)+1});ss("Back",Lc("in"),Lc("out"),Lc());it.SteppedEase=it.steps=Dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ft;return function(o){return((i*sa(0,a,o)|0)+s)*n}}};Qs.ease=it["quad.out"];gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ff+=r+","+r+"Params,"});var zm=function(e,t){this.id=P1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_m,this.set=t?t.getSetter:gf},io=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,to(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),$o||En.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,to(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(no(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ol(this,n),!s._dp||s.parent||Sm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ft||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),vm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?eo(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?yl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ft?0:this._rts,this.totalTime(sa(-this._delay,this._tDur,i),!0),Il(this),z1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(no(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?yl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=O1);var i=pn;return pn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,dd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,dd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Nn(this,n),mn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,mn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ft)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=wt(n)?n:ym,o=function(){var c=i.then;i.then=null,wt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){To(this)},r}();jn(io.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var dn=function(r){om(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=mn(n.sortChildren),vt&&mi(n.parent||vt,Ii(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&wm(Ii(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Lo(0,arguments,this),this},t.from=function(i,s,a){return Lo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Lo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Do(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ot(i,s,Nn(this,a),1),this},t.call=function(i,s,a){return mi(this,Ot.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ot(i,a,Nn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Do(a).immediateRender=mn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,Do(o).immediateRender=mn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Wt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,p,g,d,m,_,T,S,b,x,y,w;if(this!==vt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,b=this._start,S=this._ts,_=!S,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(y=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Wt(u%m),u===l?(d=this._repeat,h=c):(d=~~(u/m),d&&d===u/m&&(h=c,d--),h>c&&(h=c)),x=eo(this._tTime,m),!o&&this._tTime&&x!==d&&(x=d),y&&d&1&&(h=c-h,w=1),d!==x&&!this._lock){var v=y&&x&1,M=v===(y&&d&1);if(d<x&&(v=!v),o=v?0:c,this._lock=1,this.render(o||(w?0:Wt(d*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Nm(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=G1(this,Wt(o),Wt(h)),T&&(u-=h-(h=T._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&(Wn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&T!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,a),h!==this._time||!this._ts&&!_){T=0,g&&(u+=this._zTime=-ft);break}}p=g}else{p=this._last;for(var R=i<0?i:h;p;){if(g=p._prev,(p._act||R<=p._end)&&p._ts&&T!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(R-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(R-p._start)*p._ts,s,a||pn&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!_){T=0,g&&(u+=this._zTime=R?-ft:ft);break}}p=g}}if(T&&!s&&(this.pause(),T.render(h>=o?0:-ft)._zTime=h>=o?1:-1,this._ts))return this._start=b,Il(this),this.render(i,s,a);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&dr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Wn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Vi(s)||(s=Nn(this,s,i)),!(i instanceof io)){if(en(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Bt(i))return this.addLabel(i,s);if(wt(i))i=Ot.delayedCall(0,i);else return this}return this!==i?mi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Gn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ot?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Bt(i)?this.removeLabel(i):wt(i)?this.killTweensOf(i):(Ll(this,i),i===this._recent&&(this._recent=this._last),Wr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(En.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Nn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Ot.delayedCall(0,s||Ho,a);return o.data="isPause",this._hasPause=1,mi(this,o,Nn(this,i))},t.removePause=function(i){var s=this._first;for(i=Nn(this,i);s;)s._start===i&&s.data==="isPause"&&dr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ir!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Hn(i),l=this._first,c=Vi(s),u;l;)l instanceof Ot?F1(l._targets,o)&&(c?(!ir||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Nn(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=Ot.to(a,jn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ft,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&to(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,jn({startAt:{time:Nn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),pd(this,Nn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),pd(this,Nn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ft)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Wr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Wr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Gn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,mi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;to(a,a===vt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(vt._ts&&(vm(vt,yl(i,vt)),gm=En.frame),En.frame>=ud){ud+=Pn.autoSleep||120;var s=vt._first;if((!s||!s._ts)&&Pn.autoSleep&&En._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||En.sleep()}}},e}(io);jn(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var sS=function(e,t,n,i,s,a,o){var l=new _n(this._pt,e,t,0,1,Wm,null,s),c=0,u=0,f,h,p,g,d,m,_,T;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Wo(i)),a&&(T=[n,i],a(T,e,t),n=T[0],i=T[1]),h=n.match(Ac)||[];f=Ac.exec(i);)g=f[0],d=i.substring(c,f.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?Hs(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Ac.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(fm.test(i)||_)&&(l.e=0),this._pt=l,l},df=function(e,t,n,i,s,a,o,l,c,u){wt(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:wt(f)?c?e[t.indexOf("set")||!wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=wt(f)?c?uS:Gm:mf,g;if(Bt(i)&&(~i.indexOf("random(")&&(i=Wo(i)),i.charAt(1)==="="&&(g=Hs(h,i)+(Kt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Mu)return!isNaN(h*i)&&i!==""?(g=new _n(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?hS:Hm,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&cf(t,i),sS.call(this,e,t,h,i,p,l||Pn.stringFilter,c))},oS=function(e,t,n,i,s){if(wt(e)&&(e=Io(e,s,t,n,i)),!wi(e)||e.style&&e.nodeType||en(e)||cm(e))return Bt(e)?Io(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Io(e[o],s,t,n,i);return a},km=function(e,t,n,i,s,a){var o,l,c,u;if(Mn[e]&&(o=new Mn[e]).init(s,o.rawVars?t[e]:oS(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new _n(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ns))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ir,Mu,pf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,p=i.yoyoEase,g=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,T=e._targets,S=e.parent,b=S&&S.data==="nested"?S.vars.targets:T,x=e._overwrite==="auto"&&!of,y=e.timeline,w,v,M,R,I,G,U,L,z,H,$,V,F;if(y&&(!g||!s)&&(s="none"),e._ease=$r(s,Qs.ease),e._yEase=p?Fm($r(p===!0?s:p,Qs.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!y&&!!i.runBackwards,!y||g&&!i.stagger){if(L=T[0]?Hr(T[0]).harness:0,V=L&&i[L.prop],w=xl(i,uf),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&m?Qa:I1),_._lazy=0),a){if(dr(e._startAt=Ot.set(T,jn({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:mn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},a))),e._startAt._dp=0,t<0&&(pn||!o&&!d)&&e._startAt.revert(Qa),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(o=!1),M=jn({overwrite:!1,data:"isFromStart",lazy:o&&mn(l),immediateRender:o,stagger:0,parent:S},w),V&&(M[L.prop]=V),dr(e._startAt=Ot.set(T,M)),e._startAt._dp=0,t<0&&(pn?e._startAt.revert(Qa):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ft,ft);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&mn(l)||l&&!m,v=0;v<T.length;v++){if(I=T[v],U=I._gsap||hf(T)[v]._gsap,e._ptLookup[v]=H={},vu[U.id]&&ur.length&&vl(),$=b===T?v:b.indexOf(I),L&&(z=new L).init(I,V||w,e,$,b)!==!1&&(e._pt=R=new _n(e._pt,I,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(P){H[P]=R}),z.priority&&(G=1)),!L||V)for(M in w)Mn[M]&&(z=km(M,w,e,$,I,b))?z.priority&&(G=1):H[M]=R=df.call(e,I,M,"get",w[M],$,b,0,i.stringFilter);e._op&&e._op[v]&&e.kill(I,e._op[v]),x&&e._pt&&(ir=e,vt.killTweensOf(I,H,e.globalTime(t)),F=!e.parent,ir=0),e._pt&&l&&(vu[U.id]=1)}G&&$m(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,g&&t<=0&&y.render(Gn,!0,!0)},aS=function(e,t,n,i,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Mu=1,e.vars[t]="+=0",pf(e,o),Mu=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Et(n)+Kt(u.e)),u.b&&(u.b=c.s+Kt(u.b))},lS=function(e,t){var n=e[0]?Hr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Qr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},cS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(en(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Io=function(e,t,n,i,s){return wt(e)?e.call(t,n,i,s):Bt(e)&&~e.indexOf("random(")?Wo(e):e},Bm=ff+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vm={};gn(Bm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Vm[r]=1});var Ot=function(r){om(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Do(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,T=i.parent||vt,S=(en(n)||cm(n)?Vi(n[0]):"length"in i)?[n]:Hn(n),b,x,y,w,v,M,R,I;if(o._targets=S.length?hf(S):_l("GSAP target "+n+" not found. https://greensock.com",!Pn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||h||Pa(c)||Pa(u)){if(i=o.vars,b=o.timeline=new dn({data:"nested",defaults:d||{},targets:T&&T.data==="nested"?T.vars.targets:S}),b.kill(),b.parent=b._dp=Ii(o),b._start=0,h||Pa(c)||Pa(u)){if(w=S.length,R=h&&Cm(h),wi(h))for(v in h)~Bm.indexOf(v)&&(I||(I={}),I[v]=h[v]);for(x=0;x<w;x++)y=xl(i,Vm),y.stagger=0,_&&(y.yoyoEase=_),I&&Qr(y,I),M=S[x],y.duration=+Io(c,Ii(o),x,M,S),y.delay=(+Io(u,Ii(o),x,M,S)||0)-o._delay,!h&&w===1&&y.delay&&(o._delay=u=y.delay,o._start+=u,y.delay=0),b.to(M,y,R?R(x,M,S):0),b._ease=it.none;b.duration()?c=u=0:o.timeline=0}else if(g){Do(jn(b.vars.defaults,{ease:"none"})),b._ease=$r(g.ease||i.ease||"none");var G=0,U,L,z;if(en(g))g.forEach(function(H){return b.to(S,H,">")}),b.duration();else{y={};for(v in g)v==="ease"||v==="easeEach"||cS(v,g[v],y,g.easeEach);for(v in y)for(U=y[v].sort(function(H,$){return H.t-$.t}),G=0,x=0;x<U.length;x++)L=U[x],z={ease:L.e,duration:(L.t-(x?U[x-1].t:0))/100*c},z[v]=L.v,b.to(S,z,G),G+=z.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return p===!0&&!of&&(ir=Ii(o),vt.killTweensOf(S),ir=0),mi(T,Ii(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===Wt(T._time)&&mn(f)&&k1(Ii(o))&&T.data!=="nested")&&(o._tTime=-ft,o.render(Math.max(0,-u)||0)),m&&wm(Ii(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-ft&&!u?l:i<ft?0:i,h,p,g,d,m,_,T,S,b;if(!c)V1(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,S=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,s,a);if(h=Wt(f%d),f===l?(g=this._repeat,h=c):(g=~~(f/d),g&&g===f/d&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(b=this._yEase,h=c-h),m=eo(this._tTime,d),h===o&&!a&&this._initted)return this._tTime=f,this;g!==m&&(S&&this._yEase&&Nm(S,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(Wt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Mm(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(b||this._ease)(h/c),this._from&&(this.ratio=T=1-T),h&&!o&&!s&&(Wn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(T,p.d),p=p._next;S&&S.render(i<0?i:!h&&_?-ft:S._dur*S._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&xu(this,i,s,a),Wn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&xu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&dr(this,1),!s&&!(u&&!o)&&(f||o||_)&&(Wn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o){$o||En.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||pf(this,l),c=this._ease(l/this._dur),aS(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(Ol(this,0),this.parent||bm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?To(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ir&&ir.vars.overwrite!==!0)._first||To(this),this.parent&&a!==this.timeline.totalDuration()&&to(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Hn(i):o,c=this._ptLookup,u=this._pt,f,h,p,g,d,m,_;if((!s||s==="all")&&U1(o,l))return s==="all"&&(this._pt=0),To(this);for(f=this._op=this._op||[],s!=="all"&&(Bt(s)&&(d={},gn(s,function(T){return d[T]=1}),s=d),s=lS(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){h=c[_],s==="all"?(f[_]=s,g=h,p={}):(p=f[_]=f[_]||{},g=s);for(d in g)m=h&&h[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Ll(this,m,"_pt"),delete h[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&To(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Lo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Lo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return vt.killTweensOf(i,s,a)},e}(io);jn(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});gn("staggerTo,staggerFrom,staggerFromTo",function(r){Ot[r]=function(){var e=new dn,t=bu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var mf=function(e,t,n){return e[t]=n},Gm=function(e,t,n){return e[t](n)},uS=function(e,t,n,i){return e[t](i.fp,n)},fS=function(e,t,n){return e.setAttribute(t,n)},gf=function(e,t){return wt(e[t])?Gm:af(e[t])&&e.setAttribute?fS:mf},Hm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Wm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},_f=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},dS=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},pS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ll(this,t,"_pt"):t.dep||(n=1),t=i;return!n},mS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},$m=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},_n=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Hm,this.d=l||this,this.set=c||mf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=mS,this.m=n,this.mt=s,this.tween=i},r}();gn(ff+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return uf[r]=1});Dn.TweenMax=Dn.TweenLite=Ot;Dn.TimelineLite=Dn.TimelineMax=dn;vt=new dn({sortChildren:!1,defaults:Qs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pn.stringFilter=Om;var ro=[],tl={},gS=[],gd=0,Ic=function(e){return(tl[e]||gS).map(function(t){return t()})},Tu=function(){var e=Date.now(),t=[];e-gd>2&&(Ic("matchMediaInit"),ro.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Un.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Ic("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),gd=e,Ic("matchMedia"))},qm=function(){function r(t,n){this.selector=n&&Su(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){wt(n)&&(s=i,i=n,n=wt);var a=this,o=function(){var c=Rt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Su(s)),Rt=a,f=i.apply(a,arguments),wt(f)&&a._r.push(f),Rt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===wt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=Rt;Rt=null,n(this),Rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ot&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof io)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=ro.indexOf(this);~o&&ro.splice(o,1)}},e.revert=function(n){this.kill(n||{})},r}(),_S=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){wi(n)||(n={matches:n});var a=new qm(0,s||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Un.matchMedia(n[c]),l&&(ro.indexOf(a)<0&&ro.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Tu):l.addEventListener("change",Tu)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),bl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return J1(i)})},timeline:function(e){return new dn(e)},getTweensOf:function(e,t){return vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Bt(e)&&(e=Hn(e)[0]);var s=Hr(e||{}).get,a=n?ym:xm;return n==="native"&&(n=""),e&&(t?a((Mn[t]&&Mn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Mn[o]&&Mn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Hn(e),e.length>1){var i=e.map(function(u){return Ln.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=Mn[t],o=Hr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Ns._pt=0,f.init(e,n?u+n:u,Ns,0,[e]),f.render(1,f),Ns._pt&&_f(1,Ns)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Ln.to(e,Qr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$r(e.ease,Qs.ease)),fd(Qs,e||{})},config:function(e){return fd(Pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Mn[o]&&!Dn[o]&&_l(t+" effect requires "+o+" plugin.")}),Pc[t]=function(o,l,c){return n(Hn(o),jn(l||{},s),c)},a&&(dn.prototype[t]=function(o,l,c){return this.add(Pc[t](o,wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=$r(t)},parseEase:function(e,t){return arguments.length?$r(e,t):it},getById:function(e){return vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new dn(e),i,s;for(n.smoothChildTiming=mn(e.smoothChildTiming),vt.remove(n),n._dp=0,n._time=n._tTime=vt._time,i=vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ot&&i.vars.onComplete===i._targets[0]))&&mi(n,i,i._start-i._delay),i=s;return mi(vt,n,0),n},context:function(e,t){return e?new qm(e,t):Rt},matchMedia:function(e){return new _S(e)},matchMediaRefresh:function(){return ro.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Tu()},addEventListener:function(e,t){var n=tl[e]||(tl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=tl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Y1,wrapYoyo:Z1,distribute:Cm,random:Pm,snap:Am,normalize:X1,getUnit:Kt,clamp:W1,splitColor:Lm,toArray:Hn,selector:Su,mapRange:Dm,pipe:q1,unitize:j1,interpolate:K1,shuffle:Em},install:pm,effects:Pc,ticker:En,updateRoot:dn.updateRoot,plugins:Mn,globalTimeline:vt,core:{PropTween:_n,globals:mm,Tween:Ot,Timeline:dn,Animation:io,getCache:Hr,_removeLinkedListItem:Ll,reverting:function(){return pn},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return of=e}}};gn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return bl[r]=Ot[r]});En.add(dn.updateRoot);Ns=bl.to({},{duration:0});var vS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},xS=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=vS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Oc=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Bt(s)&&(l={},gn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}xS(o,s)}}}},Ln=bl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Oc("roundProps",wu),Oc("modifiers"),Oc("snap",Am))||bl;Ot.version=dn.version=Ln.version="3.11.3";dm=1;lm()&&no();it.Power0;it.Power1;it.Power2;it.Power3;var qo=it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _d,rr,Ws,vf,zr,vd,xf,yS=function(){return typeof window<"u"},Gi={},Pr=180/Math.PI,$s=Math.PI/180,ws=Math.atan2,xd=1e8,yf=/([A-Z])/g,bS=/(left|right|width|margin|padding|x)/i,SS=/[\s,\(]\S/,Ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Eu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},TS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ES=function(e,t,n){return e.style[t]=n},CS=function(e,t,n){return e.style.setProperty(t,n)},AS=function(e,t,n){return e._gsap[t]=n},PS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},RS=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},DS=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},yt="transform",ci=yt+"Origin",LS=function(e,t){var n=this,i=this.target,s=i.style;if(e in Gi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Oi(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Oi(i,e)),this.props.indexOf(yt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ci,t,"")),e=yt}(s||t)&&this.props.push(e,t,s[e])},Ym=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},IS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(yf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=xf(),s&&!s.isStart&&!n[yt]&&(Ym(n),i.uncache=1)}},Zm=function(e,t){var n={target:e,props:[],revert:IS,save:LS};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Km,Cu=function(e,t){var n=rr.createElementNS?rr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):rr.createElement(e);return n.style?n:rr.createElement(e)},yi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(yf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,so(t)||t,1)||""},yd="O,Moz,ms,Ms,Webkit".split(","),so=function(e,t,n){var i=t||zr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(yd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?yd[a]:"")+e},Au=function(){yS()&&window.document&&(_d=window,rr=_d.document,Ws=rr.documentElement,zr=Cu("div")||{style:{}},Cu("div"),yt=so(yt),ci=yt+"Origin",zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Km=!!so("perspective"),xf=Ln.core.reverting,vf=1)},Fc=function r(e){var t=Cu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Ws.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ws.removeChild(t),this.style.cssText=s,a},bd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Jm=function(e){var t;try{t=e.getBBox()}catch{t=Fc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Fc||(t=Fc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+bd(e,["x","cx","x1"])||0,y:+bd(e,["y","cy","y1"])||0,width:0,height:0}:t},Qm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jm(e))},jo=function(e,t){if(t){var n=e.style;t in Gi&&t!==ci&&(t=yt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(yf,"-$1").toLowerCase())):n.removeAttribute(t)}},sr=function(e,t,n,i,s,a){var o=new _n(e._pt,t,n,0,1,a?Xm:jm);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Sd={deg:1,rad:1,turn:1},OS={grid:1,flex:1},pr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=zr.style,l=bS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",p=i==="%",g,d,m,_;return i===a||!s||Sd[i]||Sd[a]?s:(a!=="px"&&!h&&(s=r(e,t,n,"px")),_=e.getCTM&&Qm(e),(p||a==="%")&&(Gi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],Et(p?s/g*f:s/100*g)):(o[l?"width":"height"]=f+(h?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===rr||!d.appendChild)&&(d=rr.body),m=d._gsap,m&&p&&m.width&&l&&m.time===En.time&&!m.uncache?Et(s/m.width*f):((p||a==="%")&&!OS[yi(d,"display")]&&(o.position=yi(e,"position")),d===e&&(o.position="static"),d.appendChild(zr),g=zr[u],d.removeChild(zr),o.position="absolute",l&&p&&(m=Hr(d),m.time=En.time,m.width=d[u]),Et(h?g*s/f:g&&s?f/g*s:0))))},Oi=function(e,t,n,i){var s;return vf||Au(),t in Ui&&t!=="transform"&&(t=Ui[t],~t.indexOf(",")&&(t=t.split(",")[0])),Gi[t]&&t!=="transform"?(s=Yo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:wl(yi(e,ci))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Sl[t]&&Sl[t](e,t,n)||yi(e,t)||_m(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?pr(e,t,s,n)+n:s},FS=function(e,t,n,i){if(!n||n==="none"){var s=so(t,e,1),a=s&&yi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=yi(e,"borderTopColor"))}var o=new _n(this._pt,e.style,t,0,1,Wm),l=0,c=0,u,f,h,p,g,d,m,_,T,S,b,x;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=yi(e,t)||i,e.style[t]=n),u=[n,i],Om(u),n=u[0],i=u[1],h=n.match(Fs)||[],x=i.match(Fs)||[],x.length){for(;f=Fs.exec(i);)m=f[0],T=i.substring(l,f.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(d=h[c++]||"")&&(p=parseFloat(d)||0,b=d.substr((p+"").length),m.charAt(1)==="="&&(m=Hs(p,m)+b),_=parseFloat(m),S=m.substr((_+"").length),l=Fs.lastIndex-S.length,S||(S=S||Pn.units[t]||b,l===i.length&&(i+=S,o.e+=S)),b!==S&&(p=pr(e,t,d,S)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Xm:jm;return fm.test(i)&&(o.e=0),this._pt=o,o},wd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},NS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=wd[n]||n,t[1]=wd[i]||i,t.join(" ")},US=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Gi[o]&&(l=1,o=o==="transformOrigin"?ci:yt),jo(n,o);l&&(jo(n,yt),a&&(a.svg&&n.removeAttribute("transform"),Yo(n,1),a.uncache=1,Ym(i)))}},Sl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new _n(e._pt,t,n,0,0,US);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Xo=[1,0,0,1,0,0],eg={},tg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Md=function(e){var t=yi(e,yt);return tg(t)?Xo:t.substr(7).match(um).map(Et)},bf=function(e,t){var n=e._gsap||Hr(e),i=e.style,s=Md(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xo:s):(s===Xo&&!e.offsetParent&&e!==Ws&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Ws.appendChild(e)),s=Md(e),l?i.display=l:jo(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ws.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Pu=function(e,t,n,i,s,a){var o=e._gsap,l=s||bf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],T=l[5],S=t.split(" "),b=parseFloat(S[0])||0,x=parseFloat(S[1])||0,y,w,v,M;n?l!==Xo&&(w=p*m-g*d)&&(v=b*(m/w)+x*(-d/w)+(d*T-m*_)/w,M=b*(-g/w)+x*(p/w)-(p*T-g*_)/w,b=v,x=M):(y=Jm(e),b=y.x+(~S[0].indexOf("%")?b/100*y.width:b),x=y.y+(~(S[1]||S[0]).indexOf("%")?x/100*y.height:x)),i||i!==!1&&o.smooth?(_=b-c,T=x-u,o.xOffset=f+(_*p+T*d)-_,o.yOffset=h+(_*g+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=x,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ci]="0px 0px",a&&(sr(a,o,"xOrigin",c,b),sr(a,o,"yOrigin",u,x),sr(a,o,"xOffset",f,o.xOffset),sr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+x)},Yo=function(e,t){var n=e._gsap||new zm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=yi(e,ci)||"0",u,f,h,p,g,d,m,_,T,S,b,x,y,w,v,M,R,I,G,U,L,z,H,$,V,F,P,se,oe,le,he,Oe;return u=f=h=d=m=_=T=S=b=0,p=g=1,n.svg=!!(e.getCTM&&Qm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),i.scale=i.rotate=i.translate="none"),w=bf(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Pu(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,w)),x=n.xOrigin||0,y=n.yOrigin||0,w!==Xo&&(I=w[0],G=w[1],U=w[2],L=w[3],u=z=w[4],f=H=w[5],w.length===6?(p=Math.sqrt(I*I+G*G),g=Math.sqrt(L*L+U*U),d=I||G?ws(G,I)*Pr:0,T=U||L?ws(U,L)*Pr+d:0,T&&(g*=Math.abs(Math.cos(T*$s))),n.svg&&(u-=x-(x*I+y*U),f-=y-(x*G+y*L))):(Oe=w[6],le=w[7],P=w[8],se=w[9],oe=w[10],he=w[11],u=w[12],f=w[13],h=w[14],v=ws(Oe,oe),m=v*Pr,v&&(M=Math.cos(-v),R=Math.sin(-v),$=z*M+P*R,V=H*M+se*R,F=Oe*M+oe*R,P=z*-R+P*M,se=H*-R+se*M,oe=Oe*-R+oe*M,he=le*-R+he*M,z=$,H=V,Oe=F),v=ws(-U,oe),_=v*Pr,v&&(M=Math.cos(-v),R=Math.sin(-v),$=I*M-P*R,V=G*M-se*R,F=U*M-oe*R,he=L*R+he*M,I=$,G=V,U=F),v=ws(G,I),d=v*Pr,v&&(M=Math.cos(v),R=Math.sin(v),$=I*M+G*R,V=z*M+H*R,G=G*M-I*R,H=H*M-z*R,I=$,z=V),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=Et(Math.sqrt(I*I+G*G+U*U)),g=Et(Math.sqrt(H*H+Oe*Oe)),v=ws(z,H),T=Math.abs(v)>2e-4?v*Pr:0,b=he?1/(he<0?-he:he):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!tg(yi(e,yt)),$&&e.setAttribute("transform",$))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(p*=-1,T+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Et(p),n.scaleY=Et(g),n.rotation=Et(d)+o,n.rotationX=Et(m)+o,n.rotationY=Et(_)+o,n.skewX=T+o,n.skewY=S+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ci]=wl(c)),n.xOffset=n.yOffset=0,n.force3D=Pn.force3D,n.renderTransform=n.svg?kS:Km?ng:zS,n.uncache=0,n},wl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Nc=function(e,t,n){var i=Kt(t);return Et(parseFloat(t)+parseFloat(pr(e,"x",n+"px",i)))+i},zS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ng(e,t)},Tr="0deg",vo="0px",Er=") ",ng=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,T=n.target,S=n.zOrigin,b="",x=_==="auto"&&e&&e!==1||_===!0;if(S&&(f!==Tr||u!==Tr)){var y=parseFloat(u)*$s,w=Math.sin(y),v=Math.cos(y),M;y=parseFloat(f)*$s,M=Math.cos(y),a=Nc(T,a,w*M*-S),o=Nc(T,o,-Math.sin(y)*-S),l=Nc(T,l,v*M*-S+S)}m!==vo&&(b+="perspective("+m+Er),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(x||a!==vo||o!==vo||l!==vo)&&(b+=l!==vo||x?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Er),c!==Tr&&(b+="rotate("+c+Er),u!==Tr&&(b+="rotateY("+u+Er),f!==Tr&&(b+="rotateX("+f+Er),(h!==Tr||p!==Tr)&&(b+="skew("+h+", "+p+Er),(g!==1||d!==1)&&(b+="scale("+g+", "+d+Er),T.style[yt]=b||"translate(0, 0)"},kS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,T=n.forceCSS,S=parseFloat(a),b=parseFloat(o),x,y,w,v,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=$s,c*=$s,x=Math.cos(l)*f,y=Math.sin(l)*f,w=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=$s,M=Math.tan(c-u),M=Math.sqrt(1+M*M),w*=M,v*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),x*=M,y*=M)),x=Et(x),y=Et(y),w=Et(w),v=Et(v)):(x=f,v=h,y=w=0),(S&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(S=pr(p,"x",a,"px"),b=pr(p,"y",o,"px")),(g||d||m||_)&&(S=Et(S+g-(g*x+d*w)+m),b=Et(b+d-(g*y+d*v)+_)),(i||s)&&(M=p.getBBox(),S=Et(S+i/100*M.width),b=Et(b+s/100*M.height)),M="matrix("+x+","+y+","+w+","+v+","+S+","+b+")",p.setAttribute("transform",M),T&&(p.style[yt]=M)},BS=function(e,t,n,i,s){var a=360,o=Bt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Pr:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*xd)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*xd)%a-~~(c/a)*a)),e._pt=h=new _n(e._pt,t,n,i,c,wS),h.e=u,h.u="deg",e._props.push(n),h},Td=function(e,t){for(var n in t)e[n]=t[n];return e},VS=function(e,t,n){var i=Td({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[yt]=t,o=Yo(n,1),jo(n,yt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[yt],a[yt]=t,o=Yo(n,1),a[yt]=c);for(l in Gi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=Kt(c),g=Kt(u),f=p!==g?pr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new _n(e._pt,o,l,f,h-f,Eu),e._pt.u=g||0,e._props.push(l));Td(o,i)};gn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Sl[e>1?"border"+r:r]=function(o,l,c,u,f){var h,p;if(arguments.length<4)return h=a.map(function(g){return Oi(o,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(g,d){return p[g]=h[d]=h[d]||h[(d-1)/2|0]}),o.init(l,p,f)}});var ig={name:"css",register:Au,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,p,g,d,m,_,T,S,b,x,y,w,v;vf||Au(),this.styles=this.styles||Zm(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Mn[d]&&km(d,t,n,i,e,s)))){if(p=typeof u,g=Sl[d],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Wo(u)),g)g(this,e,d,u,n)&&(w=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",fr.lastIndex=0,fr.test(c)||(m=Kt(c),_=Kt(u)),_?m!==_&&(c=pr(e,d,c,_)+_):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,d),a.push(d),v.push(d,0,o[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,s):l[d],Bt(c)&&~c.indexOf("random(")&&(c=Wo(c)),Kt(c+"")||(c+=Pn.units[d]||Kt(Oi(e,d))||""),(c+"").charAt(1)==="="&&(c=Oi(e,d))):c=Oi(e,d),h=parseFloat(c),T=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),f=parseFloat(u),d in Ui&&(d==="autoAlpha"&&(h===1&&Oi(e,"visibility")==="hidden"&&f&&(h=0),v.push("visibility",0,o.visibility),sr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=Ui[d],~d.indexOf(",")&&(d=d.split(",")[0]))),S=d in Gi,S){if(this.styles.save(d),b||(x=e._gsap,x.renderTransform&&!t.parseTransform||Yo(e,t.parseTransform),y=t.smoothOrigin!==!1&&x.smooth,b=this._pt=new _n(this._pt,o,yt,0,1,x.renderTransform,x,0,-1),b.dep=1),d==="scale")this._pt=new _n(this._pt,x,"scaleY",h,(T?Hs(h,T+f):f)-h||0,Eu),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(ci,0,o[ci]),u=NS(u),x.svg?Pu(e,u,0,y,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==x.zOrigin&&sr(this,x,"zOrigin",x.zOrigin,_),sr(this,o,d,wl(c),wl(u)));continue}else if(d==="svgOrigin"){Pu(e,u,1,y,0,this);continue}else if(d in eg){BS(this,x,d,h,T?Hs(h,T+u):u);continue}else if(d==="smoothOrigin"){sr(this,x,"smooth",x.smooth,u);continue}else if(d==="force3D"){x[d]=u;continue}else if(d==="transform"){VS(this,u,e);continue}}else d in o||(d=so(d)||d);if(S||(f||f===0)&&(h||h===0)&&!SS.test(u)&&d in o)m=(c+"").substr((h+"").length),f||(f=0),_=Kt(u)||(d in Pn.units?Pn.units[d]:m),m!==_&&(h=pr(e,d,c,_)),this._pt=new _n(this._pt,S?x:o,d,h,(T?Hs(h,T+f):f)-h,!S&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?TS:Eu),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=MS);else if(d in o)FS.call(this,e,d,c,T?T+u:u);else if(d in e)this.add(e,d,c||e[d],T?T+u:u,i,s);else{cf(d,u);continue}S||(d in o?v.push(d,0,o[d]):v.push(d,1,c||e[d])),a.push(d)}}w&&$m(this)},render:function(e,t){if(t.tween._time||!xf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Oi,aliases:Ui,getSetter:function(e,t,n){var i=Ui[t];return i&&i.indexOf(",")<0&&(t=i),t in Gi&&t!==ci&&(e._gsap.x||Oi(e,"x"))?n&&vd===n?t==="scale"?PS:AS:(vd=n||{})&&(t==="scale"?RS:DS):e.style&&!af(e.style[t])?ES:~t.indexOf("-")?CS:gf(e,t)},core:{_removeProperty:jo,_getMatrix:bf}};Ln.utils.checkPrefix=so;Ln.core.getStyleSaver=Zm;(function(r,e,t,n){var i=gn(r+","+e+","+t,function(s){Gi[s]=1});gn(e,function(s){Pn.units[s]="deg",eg[s]=1}),Ui[i[13]]=r+","+e,gn(n,function(s){var a=s.split(":");Ui[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Pn.units[r]="px"});Ln.registerPlugin(ig);var gt=Ln.registerPlugin(ig)||Ln;gt.core.Tween;const GS="_hero_1bdlx_1",HS="_heroInner_1bdlx_5",WS="_heroText_1bdlx_13",$S="_heroNumbersWrapper_1bdlx_18",qS="_heroNumbers_1bdlx_18",jS="_heroNumber_1bdlx_18",XS="_ringsModel_1bdlx_38",YS="_fixed_1bdlx_50",Di={hero:GS,heroInner:HS,heroText:WS,heroNumbersWrapper:$S,heroNumbers:qS,heroNumber:jS,ringsModel:XS,fixed:YS};function Ed(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ZS(r,e,t){return e&&Ed(r.prototype,e),t&&Ed(r,t),r}/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jt,Ru,Cn,or,ar,qs,rg,Rr,Oo,sg,zi,ni,og=function(){return Jt||typeof window<"u"&&(Jt=window.gsap)&&Jt.registerPlugin&&Jt},ag=1,Us=[],nt=[],bi=[],Fo=Date.now,Du=function(e,t){return t},KS=function(){var e=Oo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,bi),nt=n,bi=i,Du=function(a,o){return t[a](o)}},hr=function(e,t){return~bi.indexOf(e)&&bi[bi.indexOf(e)+1][t]},No=function(e){return!!~sg.indexOf(e)},cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},nn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ra="scrollLeft",Da="scrollTop",Lu=function(){return zi&&zi.isPressed||nt.cache++},Ml=function(e,t){var n=function i(s){if(s||s===0){ag&&(Cn.history.scrollRestoration="manual");var a=zi&&zi.isPressed;s=i.v=Math.round(s)||(zi&&zi.iOS?1:0),e(s),i.cacheID=nt.cache,a&&Du("ss",s)}else(t||nt.cache!==i.cacheID||Du("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},an={s:Ra,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ml(function(r){return arguments.length?Cn.scrollTo(r,Ft.sc()):Cn.pageXOffset||or[Ra]||ar[Ra]||qs[Ra]||0})},Ft={s:Da,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:an,sc:Ml(function(r){return arguments.length?Cn.scrollTo(an.sc(),r):Cn.pageYOffset||or[Da]||ar[Da]||qs[Da]||0})},fn=function(e){return Jt.utils.toArray(e)[0]||(typeof e=="string"&&Jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},mr=function(e,t){var n=t.s,i=t.sc;No(e)&&(e=or.scrollingElement||ar);var s=nt.indexOf(e),a=i===Ft.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+a]||e.addEventListener("scroll",Lu);var o=nt[s+a],l=o||(nt[s+a]=Ml(hr(e,n),!0)||(No(e)?i:Ml(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Jt.getProperty(e,"scrollBehavior")==="smooth"),l},Iu=function(e,t,n){var i=e,s=e,a=Fo(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,d){var m=Fo();d||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},h=function(g){var d=o,m=s,_=Fo();return(g||g===0)&&g!==i&&u(g),a===o||_-o>c?0:(i+(n?m:-m))/((n?_:a)-d)*1e3};return{update:u,reset:f,getVelocity:h}},xo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Cd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},lg=function(){Oo=Jt.core.globals().ScrollTrigger,Oo&&Oo.core&&KS()},cg=function(e){return Jt=e||og(),Jt&&typeof document<"u"&&document.body&&(Cn=window,or=document,ar=or.documentElement,qs=or.body,sg=[Cn,or,ar,qs],Jt.utils.clamp,Rr="onpointerenter"in qs?"pointer":"mouse",rg=Dt.isTouch=Cn.matchMedia&&Cn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Cn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ni=Dt.eventTypes=("ontouchstart"in ar?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ar?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ag=0},500),lg(),Ru=1),Ru};an.op=Ft;nt.cache=0;var Dt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ru||cg(Jt)||console.warn("Please gsap.registerPlugin(Observer)"),Oo||lg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,d=n.event,m=n.onDragStart,_=n.onDragEnd,T=n.onDrag,S=n.onPress,b=n.onRelease,x=n.onRight,y=n.onLeft,w=n.onUp,v=n.onDown,M=n.onChangeX,R=n.onChangeY,I=n.onChange,G=n.onToggleX,U=n.onToggleY,L=n.onHover,z=n.onHoverEnd,H=n.onMove,$=n.ignoreCheck,V=n.isNormalizer,F=n.onGestureStart,P=n.onGestureEnd,se=n.onWheel,oe=n.onEnable,le=n.onDisable,he=n.onClick,Oe=n.scrollSpeed,J=n.capture,We=n.allowClicks,De=n.lockAxis,Be=n.onLockAxis;this.target=o=fn(o)||ar,this.vars=n,p&&(p=Jt.utils.toArray(p)),i=i||1e-9,s=s||0,g=g||1,Oe=Oe||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Cn.getComputedStyle(qs).lineHeight)||22);var ge,Ge,be,Ce,ce,ie,N,D=this,re=0,q=0,Se=mr(o,an),ue=mr(o,Ft),C=Se(),E=ue(),k=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ni[0]==="pointerdown",ee=No(o),K=o.ownerDocument||or,te=[0,0,0],de=[0,0,0],me=0,Q=function(){return me=Fo()},ye=function(Y,ve){return(D.event=Y)&&p&&~p.indexOf(Y.target)||ve&&k&&Y.pointerType!=="touch"||$&&$(Y,ve)},Te=function(){D._vx.reset(),D._vy.reset(),Ge.pause(),f&&f(D)},_e=function(){var Y=D.deltaX=Cd(te),ve=D.deltaY=Cd(de),pe=Math.abs(Y)>=i,Le=Math.abs(ve)>=i;I&&(pe||Le)&&I(D,Y,ve,te,de),pe&&(x&&D.deltaX>0&&x(D),y&&D.deltaX<0&&y(D),M&&M(D),G&&D.deltaX<0!=re<0&&G(D),re=D.deltaX,te[0]=te[1]=te[2]=0),Le&&(v&&D.deltaY>0&&v(D),w&&D.deltaY<0&&w(D),R&&R(D),U&&D.deltaY<0!=q<0&&U(D),q=D.deltaY,de[0]=de[1]=de[2]=0),(Ce||be)&&(H&&H(D),be&&(T(D),be=!1),Ce=!1),ie&&!(ie=!1)&&Be&&Be(D),ce&&(se(D),ce=!1),ge=0},Pe=function(Y,ve,pe){te[pe]+=Y,de[pe]+=ve,D._vx.update(Y),D._vy.update(ve),c?ge||(ge=requestAnimationFrame(_e)):_e()},Ae=function(Y,ve){De&&!N&&(D.axis=N=Math.abs(Y)>Math.abs(ve)?"x":"y",ie=!0),N!=="y"&&(te[2]+=Y,D._vx.update(Y,!0)),N!=="x"&&(de[2]+=ve,D._vy.update(ve,!0)),c?ge||(ge=requestAnimationFrame(_e)):_e()},fe=function(Y){if(!ye(Y,1)){Y=xo(Y,u);var ve=Y.clientX,pe=Y.clientY,Le=ve-D.x,ot=pe-D.y,He=D.isDragging;D.x=ve,D.y=pe,(He||Math.abs(D.startX-ve)>=s||Math.abs(D.startY-pe)>=s)&&(T&&(be=!0),He||(D.isDragging=!0),Ae(Le,ot),He||m&&m(D))}},$e=D.onPress=function(Fe){ye(Fe,1)||(D.axis=N=null,Ge.pause(),D.isPressed=!0,Fe=xo(Fe),re=q=0,D.startX=D.x=Fe.clientX,D.startY=D.y=Fe.clientY,D._vx.reset(),D._vy.reset(),cn(V?o:K,ni[1],fe,u,!0),D.deltaX=D.deltaY=0,S&&S(D))},Ve=function(Y){if(!ye(Y,1)){nn(V?o:K,ni[1],fe,!0);var ve=D.isDragging&&(Math.abs(D.x-D.startX)>3||Math.abs(D.y-D.startY)>3),pe=xo(Y);ve||(D._vx.reset(),D._vy.reset(),u&&We&&Jt.delayedCall(.08,function(){if(Fo()-me>300&&!Y.defaultPrevented){if(Y.target.click)Y.target.click();else if(K.createEvent){var Le=K.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,Cn,1,pe.screenX,pe.screenY,pe.clientX,pe.clientY,!1,!1,!1,!1,0,null),Y.target.dispatchEvent(Le)}}})),D.isDragging=D.isGesturing=D.isPressed=!1,f&&!V&&Ge.restart(!0),_&&ve&&_(D),b&&b(D,ve)}},O=function(Y){return Y.touches&&Y.touches.length>1&&(D.isGesturing=!0)&&F(Y,D.isDragging)},j=function(){return(D.isGesturing=!1)||P(D)},ae=function(Y){if(!ye(Y)){var ve=Se(),pe=ue();Pe((ve-C)*Oe,(pe-E)*Oe,1),C=ve,E=pe,f&&Ge.restart(!0)}},xe=function(Y){if(!ye(Y)){Y=xo(Y,u),se&&(ce=!0);var ve=(Y.deltaMode===1?l:Y.deltaMode===2?Cn.innerHeight:1)*g;Pe(Y.deltaX*ve,Y.deltaY*ve,0),f&&!V&&Ge.restart(!0)}},Re=function(Y){if(!ye(Y)){var ve=Y.clientX,pe=Y.clientY,Le=ve-D.x,ot=pe-D.y;D.x=ve,D.y=pe,Ce=!0,(Le||ot)&&Ae(Le,ot)}},je=function(Y){D.event=Y,L(D)},lt=function(Y){D.event=Y,z(D)},Ye=function(Y){return ye(Y)||xo(Y,u)&&he(D)};Ge=D._dc=Jt.delayedCall(h||.25,Te).pause(),D.deltaX=D.deltaY=0,D._vx=Iu(0,50,!0),D._vy=Iu(0,50,!0),D.scrollX=Se,D.scrollY=ue,D.isDragging=D.isGesturing=D.isPressed=!1,D.enable=function(Fe){return D.isEnabled||(cn(ee?K:o,"scroll",Lu),a.indexOf("scroll")>=0&&cn(ee?K:o,"scroll",ae,u,J),a.indexOf("wheel")>=0&&cn(o,"wheel",xe,u,J),(a.indexOf("touch")>=0&&rg||a.indexOf("pointer")>=0)&&(cn(o,ni[0],$e,u,J),cn(K,ni[2],Ve),cn(K,ni[3],Ve),We&&cn(o,"click",Q,!1,!0),he&&cn(o,"click",Ye),F&&cn(K,"gesturestart",O),P&&cn(K,"gestureend",j),L&&cn(o,Rr+"enter",je),z&&cn(o,Rr+"leave",lt),H&&cn(o,Rr+"move",Re)),D.isEnabled=!0,Fe&&Fe.type&&$e(Fe),oe&&oe(D)),D},D.disable=function(){D.isEnabled&&(Us.filter(function(Fe){return Fe!==D&&No(Fe.target)}).length||nn(ee?K:o,"scroll",Lu),D.isPressed&&(D._vx.reset(),D._vy.reset(),nn(V?o:K,ni[1],fe,!0)),nn(ee?K:o,"scroll",ae,J),nn(o,"wheel",xe,J),nn(o,ni[0],$e,J),nn(K,ni[2],Ve),nn(K,ni[3],Ve),nn(o,"click",Q,!0),nn(o,"click",Ye),nn(K,"gesturestart",O),nn(K,"gestureend",j),nn(o,Rr+"enter",je),nn(o,Rr+"leave",lt),nn(o,Rr+"move",Re),D.isEnabled=D.isPressed=D.isDragging=!1,le&&le(D))},D.kill=function(){D.disable();var Fe=Us.indexOf(D);Fe>=0&&Us.splice(Fe,1),zi===D&&(zi=0)},Us.push(D),V&&No(o)&&(zi=D),D.enable(d)},ZS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Dt.version="3.11.3";Dt.create=function(r){return new Dt(r)};Dt.register=cg;Dt.getAll=function(){return Us.slice()};Dt.getById=function(r){return Us.filter(function(e){return e.vars.id===r})[0]};og()&&Jt.registerPlugin(Dt);/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ke,Ds,tt,_t,gi,St,ug,Tl,El,zs,nl,La,Yt,Fl,Ou,sn,Ad,Pd,Ls,fg,Uc,hg,Sn,dg,pg,mg,Qi,Fu,Sf,zc,Ia=1,on=Date.now,kc=on(),qn=0,Oa=0,Rd=function(){return Fl=1},Dd=function(){return Fl=0},hi=function(e){return e},Co=function(e){return Math.round(e*1e5)/1e5||0},gg=function(){return typeof window<"u"},_g=function(){return ke||gg()&&(ke=window.gsap)&&ke.registerPlugin&&ke},es=function(e){return!!~ug.indexOf(e)},vg=function(e){return hr(e,"getBoundingClientRect")||(es(e)?function(){return ll.width=tt.innerWidth,ll.height=tt.innerHeight,ll}:function(){return Ni(e)})},JS=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=hr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?tt["inner"+s]:e["client"+s])||0}},QS=function(e,t){return!t||~bi.indexOf(e)?vg(e):function(){return ll}},lr=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return(n="scroll"+i)&&(a=hr(e,n))?a()-vg(e)()[s]:es(e)?(gi[n]||St[n])-(tt["inner"+i]||gi["client"+i]||St["client"+i]):e[n]-e["offset"+i]},Fa=function(e,t){for(var n=0;n<Ls.length;n+=3)(!t||~t.indexOf(Ls[n+1]))&&e(Ls[n],Ls[n+1],Ls[n+2])},ii=function(e){return typeof e=="string"},ln=function(e){return typeof e=="function"},Ao=function(e){return typeof e=="number"},il=function(e){return typeof e=="object"},yo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Bc=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ms=Math.abs,xg="left",yg="top",wf="right",Mf="bottom",qr="width",jr="height",Uo="Right",zo="Left",ko="Top",Bo="Bottom",Tt="padding",Bn="margin",oo="Width",Tf="Height",Gt="px",_i=function(e){return tt.getComputedStyle(e)},ew=function(e){var t=_i(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ld=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ni=function(e,t){var n=t&&_i(e)[Ou]!=="matrix(1, 0, 0, 1, 0, 0)"&&ke.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Nu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},bg=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},tw=function(e){return function(t){return ke.utils.snap(bg(e),t)}},Ef=function(e){var t=ke.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},nw=function(e){return function(t,n){return Ef(bg(e))(t,n.direction)}},Na=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Ht=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},kt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ua=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},Id={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},za={toggleActions:"play",anticipatePin:0},Cl={top:0,left:0,center:.5,bottom:1,right:1},rl=function(e,t){if(ii(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Cl?Cl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ka=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,p=s.fontWeight,g=_t.createElement("div"),d=es(n)||hr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=d?St:n,T=e.indexOf("start")!==-1,S=T?c:u,b="border-color:"+S+";font-size:"+f+";color:"+S+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((m||l)&&d?"fixed;":"absolute;"),(m||l||!d)&&(b+=(i===Ft?wf:Mf)+":"+(a+parseFloat(h))+"px;"),o&&(b+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=T,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],sl(g,0,i,T),g},sl=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+oo]=1,s["border"+o+oo]=0,s[n.p]=t+"px",ke.set(e,s)},Je=[],Uu={},Zo,Od=function(){return on()-qn>34&&(Zo||(Zo=requestAnimationFrame(is)))},Ts=function(){(!Sn||!Sn.isPressed||Sn.startX>St.clientWidth)&&(nt.cache++,Sn?Zo||(Zo=requestAnimationFrame(is)):is(),qn||ns("scrollStart"),qn=on())},Vc=function(){mg=tt.innerWidth,pg=tt.innerHeight},Po=function(){nt.cache++,!Yt&&!hg&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!dg||mg!==tt.innerWidth||Math.abs(tt.innerHeight-pg)>tt.innerHeight*.25)&&Tl.restart(!0)},ts={},iw=[],Sg=function r(){return kt(Xe,"scrollEnd",r)||kr(!0)},ns=function(e){return ts[e]&&ts[e].map(function(t){return t()})||iw},wn=[],wg=function(e){for(var t=0;t<wn.length;t+=5)(!e||wn[t+4]&&wn[t+4].query===e)&&(wn[t].style.cssText=wn[t+1],wn[t].getBBox&&wn[t].setAttribute("transform",wn[t+2]||""),wn[t+3].uncache=1)},Cf=function(e,t){var n;for(sn=0;sn<Je.length;sn++)n=Je[sn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&wg(t),t||ns("revert")},Mg=function(e,t){nt.cache++,(t||!ri)&&nt.forEach(function(n){return ln(n)&&n.cacheID++&&(n.rec=0)}),ii(e)&&(tt.history.scrollRestoration=Sf=e)},ri,Xr=0,Fd,rw=function(){if(Fd!==Xr){var e=Fd=Xr;requestAnimationFrame(function(){return e===Xr&&kr(!0)})}},kr=function(e,t){if(qn&&!e){Ht(Xe,"scrollEnd",Sg);return}ri=Xe.isRefreshing=!0,nt.forEach(function(i){return ln(i)&&i.cacheID++&&(i.rec=i())});var n=ns("refreshInit");fg&&Xe.sort(),t||Cf(),nt.forEach(function(i){ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Je.slice(0).forEach(function(i){return i.refresh()}),Je.forEach(function(i,s){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-o),i.revert(!1,1)}}),Je.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,lr(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Mg(Sf,1),Tl.pause(),Xr++,is(2),Je.forEach(function(i){return ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),ri=Xe.isRefreshing=!1,ns("refresh")},Nd=0,ol=1,Or,is=function(e){if(!ri||e===2){Xe.isUpdating=!0,Or&&Or.update(0);var t=Je.length,n=on(),i=n-kc>=50,s=t&&Je[0].scroll();if(ol=Nd>s?-1:1,Nd=s,i&&(qn&&!Fl&&n-qn>200&&(qn=0,ns("scrollEnd")),nl=kc,kc=n),ol<0){for(sn=t;sn-- >0;)Je[sn]&&Je[sn].update(0,i);ol=1}else for(sn=0;sn<t;sn++)Je[sn]&&Je[sn].update(0,i);Xe.isUpdating=!1}Zo=0},zu=[xg,yg,Mf,wf,Bn+Bo,Bn+Uo,Bn+ko,Bn+zo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],al=zu.concat([qr,jr,"boxSizing","max"+oo,"max"+Tf,"position",Bn,Tt,Tt+ko,Tt+Uo,Tt+Bo,Tt+zo]),sw=function(e,t,n){js(n);var i=e._gsap;if(i.spacerIsNative)js(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Gc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=zu.length,a=t.style,o=e.style,l;s--;)l=zu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Mf]=o[wf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[qr]=Nu(e,an)+Gt,a[jr]=Nu(e,Ft)+Gt,a[Tt]=o[Bn]=o[yg]=o[xg]="0",js(i),o[qr]=o["max"+oo]=n[qr],o[jr]=o["max"+Tf]=n[jr],o[Tt]=n[Tt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ow=/([A-Z])/g,js=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||ke.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(ow,"-$1").toLowerCase())}},Ba=function(e){for(var t=al.length,n=e.style,i=[],s=0;s<t;s++)i.push(al[s],n[al[s]]);return i.t=e,i},aw=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},ll={left:0,top:0},Ud=function(e,t,n,i,s,a,o,l,c,u,f,h,p){ln(e)&&(e=e(l)),ii(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?rl("0"+e.substr(3),n):0));var g=p?p.time():0,d,m,_;if(p&&p.seek(0),Ao(e))o&&sl(o,n,i,!0);else{ln(t)&&(t=t(l));var T=(e||"0").split(" "),S,b,x,y;_=fn(t)||St,S=Ni(_)||{},(!S||!S.left&&!S.top)&&_i(_).display==="none"&&(y=_.style.display,_.style.display="block",S=Ni(_),y?_.style.display=y:_.style.removeProperty("display")),b=rl(T[0],S[i.d]),x=rl(T[1]||"0",n),e=S[i.p]-c[i.p]-u+b+s-x,o&&sl(o,x,i,n-x<20||o._isStart&&x>20),n-=n-x}if(a){var w=e+n,v=a._isStart;d="scroll"+i.d2,sl(a,w,i,v&&w>20||!v&&(f?Math.max(St[d],gi[d]):a.parentNode[d])<=w+1),f&&(c=Ni(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Gt))}return p&&_&&(d=Ni(_),p.seek(h),m=Ni(_),p._caScrollDist=d[i.p]-m[i.p],e=e/p._caScrollDist*h),p&&p.seek(g),p?e:Math.round(e)},lw=/(webkit|moz|length|cssText|inset)/i,zd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===St){e._stOrig=s.cssText,o=_i(e);for(a in o)!+a&&!lw.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;ke.core.getCache(e).uncache=1,t.appendChild(e)}},kd=function(e,t){var n=mr(e,t),i="_scroll"+t.p2,s,a,o=function l(c,u,f,h,p){var g=l.tween,d=u.onComplete,m={};return f=f||n(),p=h&&p||0,h=h||c-f,g&&g.kill(),s=Math.round(f),u[i]=c,u.modifiers=m,m[i]=function(_){return _=Math.round(n()),_!==s&&_!==a&&Math.abs(_-s)>3&&Math.abs(_-a)>3?(g.kill(),l.tween=0):_=f+h*g.ratio+p*g.ratio*g.ratio,a=s,s=Math.round(_)},u.onComplete=function(){l.tween=0,d&&d.call(g)},g=l.tween=ke.to(e,u),g};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},Ht(e,"wheel",n.wheelHandler),o},Xe=function(){function r(t,n){Ds||r.register(ke)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Oa){this.update=this.refresh=this.kill=hi;return}n=Ld(ii(n)||Ao(n)||n.nodeType?{trigger:n}:n,za);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,p=s.pin,g=s.pinSpacing,d=s.invalidateOnRefresh,m=s.anticipatePin,_=s.onScrubComplete,T=s.onSnapComplete,S=s.once,b=s.snap,x=s.pinReparent,y=s.pinSpacer,w=s.containerAnimation,v=s.fastScrollEnd,M=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?an:Ft,I=!f&&f!==0,G=fn(n.scroller||tt),U=ke.core.getCache(G),L=es(G),z=("pinType"in n?n.pinType:hr(G,"pinType")||L&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=I&&n.toggleActions.split(" "),V="markers"in n?n.markers:za.markers,F=L?0:parseFloat(_i(G)["border"+R.p2+oo])||0,P=this,se=n.onRefreshInit&&function(){return n.onRefreshInit(P)},oe=JS(G,L,R),le=QS(G,L),he=0,Oe=0,J=mr(G,R),We,De,Be,ge,Ge,be,Ce,ce,ie,N,D,re,q,Se,ue,C,E,k,ee,K,te,de,me,Q,ye,Te,_e,Pe,Ae,fe,$e,Ve,O,j,ae,xe,Re,je;if(Fu(P),P._dir=R,m*=45,P.scroller=G,P.scroll=w?w.time.bind(w):J,ge=J(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(fg=1,n.refreshPriority===-9999&&(Or=P)),U.tweenScroll=U.tweenScroll||{top:kd(G,Ft),left:kd(G,an)},P.tweenTo=We=U.tweenScroll[R.p],P.scrubDuration=function(Y){$e=Ao(Y)&&Y,$e?fe?fe.duration(Y):fe=ke.to(i,{ease:"expo",totalProgress:"+=0.001",duration:$e,paused:!0,onComplete:function(){return _&&_(P)}}):(fe&&fe.progress(1).kill(),fe=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),Pe=0,l||(l=i.vars.id)),Je.push(P),b&&((!il(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in St.style&&ke.set(L?[St,gi]:G,{scrollBehavior:"auto"}),nt.forEach(function(Y){return ln(Y)&&Y.target===(L?_t.scrollingElement||gi:G)&&(Y.smooth=!1)}),Be=ln(b.snapTo)?b.snapTo:b.snapTo==="labels"?tw(i):b.snapTo==="labelsDirectional"?nw(i):b.directional!==!1?function(Y,ve){return Ef(b.snapTo)(Y,on()-Oe<500?0:ve.direction)}:ke.utils.snap(b.snapTo),Ve=b.duration||{min:.1,max:2},Ve=il(Ve)?zs(Ve.min,Ve.max):zs(Ve,Ve),O=ke.delayedCall(b.delay||$e/2||.1,function(){var Y=J(),ve=on()-Oe<500,pe=We.tween;if((ve||Math.abs(P.getVelocity())<10)&&!pe&&!Fl&&he!==Y){var Le=(Y-be)/q,ot=i&&!I?i.totalProgress():Le,He=ve?0:(ot-Ae)/(on()-nl)*1e3||0,ut=ke.utils.clamp(-Le,1-Le,Ms(He/2)*He/.185),A=Le+(b.inertia===!1?0:ut),W=zs(0,1,Be(A,P)),X=Math.round(be+W*q),B=b,ne=B.onStart,Me=B.onInterrupt,Ie=B.onComplete;if(Y<=Ce&&Y>=be&&X!==Y){if(pe&&!pe._initted&&pe.data<=Ms(X-Y))return;b.inertia===!1&&(ut=W-Le),We(X,{duration:Ve(Ms(Math.max(Ms(A-ot),Ms(W-ot))*.185/He/.05||0)),ease:b.ease||"power3",data:Ms(X-Y),onInterrupt:function(){return O.restart(!0)&&Me&&Me(P)},onComplete:function(){P.update(),he=J(),Pe=Ae=i&&!I?i.totalProgress():P.progress,T&&T(P),Ie&&Ie(P)}},Y,ut*q,X-Y-ut*q),ne&&ne(P,We.tween)}}else P.isActive&&he!==Y&&O.restart(!0)}).pause()),l&&(Uu[l]=P),h=P.trigger=fn(h||p),je=h&&h._gsap&&h._gsap.stRevert,je&&(je=je(P)),p=p===!0?h:fn(p),ii(o)&&(o={targets:h,className:o}),p&&(g===!1||g===Bn||(g=!g&&p.parentNode&&p.parentNode.style&&_i(p.parentNode).display==="flex"?!1:Tt),P.pin=p,De=ke.core.getCache(p),De.spacer?Se=De.pinState:(y&&(y=fn(y),y&&!y.nodeType&&(y=y.current||y.nativeElement),De.spacerIsNative=!!y,y&&(De.spacerState=Ba(y))),De.spacer=E=y||_t.createElement("div"),E.classList.add("pin-spacer"),l&&E.classList.add("pin-spacer-"+l),De.pinState=Se=Ba(p)),n.force3D!==!1&&ke.set(p,{force3D:!0}),P.spacer=E=De.spacer,_e=_i(p),me=_e[g+R.os2],ee=ke.getProperty(p),K=ke.quickSetter(p,R.a,Gt),Gc(p,E,_e),C=Ba(p)),V){re=il(V)?Ld(V,Id):Id,N=ka("scroller-start",l,G,R,re,0),D=ka("scroller-end",l,G,R,re,0,N),k=N["offset"+R.op.d2];var lt=fn(hr(G,"content")||G);ce=this.markerStart=ka("start",l,lt,R,re,k,0,w),ie=this.markerEnd=ka("end",l,lt,R,re,k,0,w),w&&(Re=ke.quickSetter([ce,ie],R.a,Gt)),!z&&!(bi.length&&hr(G,"fixedMarkers")===!0)&&(ew(L?St:G),ke.set([N,D],{force3D:!0}),ye=ke.quickSetter(N,R.a,Gt),Te=ke.quickSetter(D,R.a,Gt))}if(w){var Ye=w.vars.onUpdate,Fe=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),Ye&&Ye.apply(Fe||[])})}P.previous=function(){return Je[Je.indexOf(P)-1]},P.next=function(){return Je[Je.indexOf(P)+1]},P.revert=function(Y,ve){if(!ve)return P.kill(!0);var pe=Y!==!1||!P.enabled,Le=Yt;pe!==P.isReverted&&(pe&&(ae=Math.max(J(),P.scroll.rec||0),j=P.progress,xe=i&&i.progress()),ce&&[ce,ie,N,D].forEach(function(ot){return ot.style.display=pe?"none":"block"}),pe&&(Yt=1,P.update(pe)),p&&(pe?sw(p,E,Se):(!x||!P.isActive)&&Gc(p,E,_i(p),Q)),pe||P.update(pe),Yt=Le,P.isReverted=pe)},P.refresh=function(Y,ve){if(!((Yt||!P.enabled)&&!ve)){if(p&&Y&&qn){Ht(r,"scrollEnd",Sg);return}!ri&&se&&se(P),Yt=1,Oe=on(),We.tween&&(We.tween.kill(),We.tween=0),fe&&fe.pause(),d&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;for(var pe=oe(),Le=le(),ot=w?w.duration():lr(G,R),He=0,ut=0,A=n.end,W=n.endTrigger||h,X=n.start||(n.start===0||!h?0:p?"0 0":"0 100%"),B=P.pinnedContainer=n.pinnedContainer&&fn(n.pinnedContainer),ne=h&&Math.max(0,Je.indexOf(P))||0,Me=ne,Ie,Ne,qe,Ke,Ue,ze,st,Zn,Ti,In;Me--;)ze=Je[Me],ze.end||ze.refresh(0,1)||(Yt=1),st=ze.pin,st&&(st===h||st===p)&&!ze.isReverted&&(In||(In=[]),In.unshift(ze),ze.revert(!0,!0)),ze!==Je[Me]&&(ne--,Me--);for(ln(X)&&(X=X(P)),be=Ud(X,h,pe,R,J(),ce,N,P,Le,F,z,ot,w)||(p?-.001:0),ln(A)&&(A=A(P)),ii(A)&&!A.indexOf("+=")&&(~A.indexOf(" ")?A=(ii(X)?X.split(" ")[0]:"")+A:(He=rl(A.substr(2),pe),A=ii(X)?X:be+He,W=h)),Ce=Math.max(be,Ud(A||(W?"100% 0":ot),W,pe,R,J()+He,ie,D,P,Le,F,z,ot,w))||-.001,q=Ce-be||(be-=.01)&&.001,He=0,Me=ne;Me--;)ze=Je[Me],st=ze.pin,st&&ze.start-ze._pinPush<=be&&!w&&ze.end>0&&(Ie=ze.end-ze.start,(st===h&&ze.start-ze._pinPush<be||st===B)&&!Ao(X)&&(He+=Ie*(1-ze.progress)),st===p&&(ut+=Ie));if(be+=He,Ce+=He,P._pinPush=ut,ce&&He&&(Ie={},Ie[R.a]="+="+He,B&&(Ie[R.p]="-="+J()),ke.set([ce,ie],Ie)),p)Ie=_i(p),Ke=R===Ft,qe=J(),te=parseFloat(ee(R.a))+ut,!ot&&Ce>1&&((L?St:G).style["overflow-"+R.a]="scroll"),Gc(p,E,Ie),C=Ba(p),Ne=Ni(p,!0),Zn=z&&mr(G,Ke?an:Ft)(),g&&(Q=[g+R.os2,q+ut+Gt],Q.t=E,Me=g===Tt?Nu(p,R)+q+ut:0,Me&&Q.push(R.d,Me+Gt),js(Q),B&&Je.forEach(function(jt){jt.pin===B&&jt.vars.pinSpacing!==!1&&(jt._subPinOffset=!0)}),z&&J(ae)),z&&(Ue={top:Ne.top+(Ke?qe-be:Zn)+Gt,left:Ne.left+(Ke?Zn:qe-be)+Gt,boxSizing:"border-box",position:"fixed"},Ue[qr]=Ue["max"+oo]=Math.ceil(Ne.width)+Gt,Ue[jr]=Ue["max"+Tf]=Math.ceil(Ne.height)+Gt,Ue[Bn]=Ue[Bn+ko]=Ue[Bn+Uo]=Ue[Bn+Bo]=Ue[Bn+zo]="0",Ue[Tt]=Ie[Tt],Ue[Tt+ko]=Ie[Tt+ko],Ue[Tt+Uo]=Ie[Tt+Uo],Ue[Tt+Bo]=Ie[Tt+Bo],Ue[Tt+zo]=Ie[Tt+zo],ue=aw(Se,Ue,x),ri&&J(0)),i?(Ti=i._initted,Uc(1),i.render(i.duration(),!0,!0),de=ee(R.a)-te+q+ut,q!==de&&z&&ue.splice(ue.length-2,2),i.render(0,!0,!0),Ti||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Uc(0)):de=q;else if(h&&J()&&!w)for(Ne=h.parentNode;Ne&&Ne!==St;)Ne._pinOffset&&(be-=Ne._pinOffset,Ce-=Ne._pinOffset),Ne=Ne.parentNode;In&&In.forEach(function(jt){return jt.revert(!1,!0)}),P.start=be,P.end=Ce,ge=Ge=ri?ae:J(),!w&&!ri&&(ge<ae&&J(ae),P.scroll.rec=0),P.revert(!1,!0),O&&(he=-1,P.isActive&&J(be+q*j),O.restart(!0)),Yt=0,i&&I&&(i._initted||xe)&&i.progress()!==xe&&i.progress(xe,!0).render(i.time(),!0,!0),(j!==P.progress||w)&&(i&&!I&&i.totalProgress(j,!0),P.progress=(ge-be)/q===j?0:j),p&&g&&(E._pinOffset=Math.round(P.progress*de)),u&&!ri&&u(P)}},P.getVelocity=function(){return(J()-Ge)/(on()-nl)*1e3||0},P.endAnimation=function(){yo(P.callbackAnimation),i&&(fe?fe.progress(1):i.paused()?I||yo(i,P.direction<0,1):yo(i,i.reversed()))},P.labelToScroll=function(Y){return i&&i.labels&&(be||P.refresh()||be)+i.labels[Y]/i.duration()*q||0},P.getTrailing=function(Y){var ve=Je.indexOf(P),pe=P.direction>0?Je.slice(0,ve).reverse():Je.slice(ve+1);return(ii(Y)?pe.filter(function(Le){return Le.vars.preventOverlaps===Y}):pe).filter(function(Le){return P.direction>0?Le.end<=be:Le.start>=Ce})},P.update=function(Y,ve,pe){if(!(w&&!pe&&!Y)){var Le=ri?ae:P.scroll(),ot=Y?0:(Le-be)/q,He=ot<0?0:ot>1?1:ot||0,ut=P.progress,A,W,X,B,ne,Me,Ie,Ne;if(ve&&(Ge=ge,ge=w?J():Le,b&&(Ae=Pe,Pe=i&&!I?i.totalProgress():He)),m&&!He&&p&&!Yt&&!Ia&&qn&&be<Le+(Le-Ge)/(on()-nl)*m&&(He=1e-4),He!==ut&&P.enabled){if(A=P.isActive=!!He&&He<1,W=!!ut&&ut<1,Me=A!==W,ne=Me||!!He!=!!ut,P.direction=He>ut?1:-1,P.progress=He,ne&&!Yt&&(X=He&&!ut?0:He===1?1:ut===1?2:3,I&&(B=!Me&&$[X+1]!=="none"&&$[X+1]||$[X],Ne=i&&(B==="complete"||B==="reset"||B in i))),M&&(Me||Ne)&&(Ne||f||!i)&&(ln(M)?M(P):P.getTrailing(M).forEach(function(ze){return ze.endAnimation()})),I||(fe&&!Yt&&!Ia?((w||Or&&Or!==P)&&fe.render(fe._dp._time-fe._start),fe.resetTo?fe.resetTo("totalProgress",He,i._tTime/i._tDur):(fe.vars.totalProgress=He,fe.invalidate().restart())):i&&i.totalProgress(He,!!Yt)),p){if(Y&&g&&(E.style[g+R.os2]=me),!z)K(Co(te+de*He));else if(ne){if(Ie=!Y&&He>ut&&Ce+1>Le&&Le+1>=lr(G,R),x)if(!Y&&(A||Ie)){var qe=Ni(p,!0),Ke=Le-be;zd(p,St,qe.top+(R===Ft?Ke:0)+Gt,qe.left+(R===Ft?0:Ke)+Gt)}else zd(p,E);js(A||Ie?ue:C),de!==q&&He<1&&A||K(te+(He===1&&!Ie?de:0))}}b&&!We.tween&&!Yt&&!Ia&&O.restart(!0),o&&(Me||S&&He&&(He<1||!zc))&&El(o.targets).forEach(function(ze){return ze.classList[A||S?"add":"remove"](o.className)}),a&&!I&&!Y&&a(P),ne&&!Yt?(I&&(Ne&&(B==="complete"?i.pause().totalProgress(1):B==="reset"?i.restart(!0).pause():B==="restart"?i.restart(!0):i[B]()),a&&a(P)),(Me||!zc)&&(c&&Me&&Bc(P,c),H[X]&&Bc(P,H[X]),S&&(He===1?P.kill(!1,1):H[X]=0),Me||(X=He===1?1:3,H[X]&&Bc(P,H[X]))),v&&!A&&Math.abs(P.getVelocity())>(Ao(v)?v:2500)&&(yo(P.callbackAnimation),fe?fe.progress(1):yo(i,B==="reverse"?1:!He,1))):I&&a&&!Yt&&a(P)}if(Te){var Ue=w?Le/w.duration()*(w._caScrollDist||0):Le;ye(Ue+(N._isFlipped?1:0)),Te(Ue)}Re&&Re(-Le/w.duration()*(w._caScrollDist||0))}},P.enable=function(Y,ve){P.enabled||(P.enabled=!0,Ht(G,"resize",Po),Ht(L?_t:G,"scroll",Ts),se&&Ht(r,"refreshInit",se),Y!==!1&&(P.progress=j=0,ge=Ge=he=J()),ve!==!1&&P.refresh())},P.getTween=function(Y){return Y&&We?We.tween:fe},P.setPositions=function(Y,ve){p&&(te+=Y-be,de+=ve-Y-q,g===Tt&&P.adjustPinSpacing(ve-Y-q)),P.start=be=Y,P.end=Ce=ve,q=ve-Y,P.update()},P.adjustPinSpacing=function(Y){if(Q){var ve=Q.indexOf(R.d)+1;Q[ve]=parseFloat(Q[ve])+Y+Gt,Q[1]=parseFloat(Q[1])+Y+Gt,js(Q)}},P.disable=function(Y,ve){if(P.enabled&&(Y!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,ve||fe&&fe.pause(),ae=0,De&&(De.uncache=1),se&&kt(r,"refreshInit",se),O&&(O.pause(),We.tween&&We.tween.kill()&&(We.tween=0)),!L)){for(var pe=Je.length;pe--;)if(Je[pe].scroller===G&&Je[pe]!==P)return;kt(G,"resize",Po),kt(G,"scroll",Ts)}},P.kill=function(Y,ve){P.disable(Y,ve),fe&&!ve&&fe.kill(),l&&delete Uu[l];var pe=Je.indexOf(P);pe>=0&&Je.splice(pe,1),pe===sn&&ol>0&&sn--,pe=0,Je.forEach(function(Le){return Le.scroller===P.scroller&&(pe=1)}),pe||ri||(P.scroll.rec=0),i&&(i.scrollTrigger=null,Y&&i.revert({kill:!1}),ve||i.kill()),ce&&[ce,ie,N,D].forEach(function(Le){return Le.parentNode&&Le.parentNode.removeChild(Le)}),Or===P&&(Or=0),p&&(De&&(De.uncache=1),pe=0,Je.forEach(function(Le){return Le.pin===p&&pe++}),pe||(De.spacer=0)),n.onKill&&n.onKill(P)},P.enable(!1,!1),je&&je(P),!i||!i.add||q?P.refresh():ke.delayedCall(.01,function(){return be||Ce||P.refresh()})&&(q=.01)&&(be=Ce=0),p&&rw()},r.register=function(n){return Ds||(ke=n||_g(),gg()&&window.document&&r.enable(),Ds=Oa),Ds},r.defaults=function(n){if(n)for(var i in n)za[i]=n[i];return za},r.disable=function(n,i){Oa=0,Je.forEach(function(a){return a[i?"kill":"disable"](n)}),kt(tt,"wheel",Ts),kt(_t,"scroll",Ts),clearInterval(La),kt(_t,"touchcancel",hi),kt(St,"touchstart",hi),Na(kt,_t,"pointerdown,touchstart,mousedown",Rd),Na(kt,_t,"pointerup,touchend,mouseup",Dd),Tl.kill(),Fa(kt);for(var s=0;s<nt.length;s+=3)Ua(kt,nt[s],nt[s+1]),Ua(kt,nt[s],nt[s+2])},r.enable=function(){if(tt=window,_t=document,gi=_t.documentElement,St=_t.body,ke&&(El=ke.utils.toArray,zs=ke.utils.clamp,Fu=ke.core.context||hi,Uc=ke.core.suppressOverwrites||hi,Sf=tt.history.scrollRestoration||"auto",ke.core.globals("ScrollTrigger",r),St)){Oa=1,Dt.register(ke),r.isTouch=Dt.isTouch,Qi=Dt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ht(tt,"wheel",Ts),ug=[tt,_t,gi,St],ke.matchMedia?(r.matchMedia=function(l){var c=ke.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},ke.addEventListener("matchMediaInit",function(){return Cf()}),ke.addEventListener("matchMediaRevert",function(){return wg()}),ke.addEventListener("matchMedia",function(){kr(0,1),ns("matchMedia")}),ke.matchMedia("(orientation: portrait)",function(){return Vc(),Vc})):console.warn("Requires GSAP 3.11.0 or later"),Vc(),Ht(_t,"scroll",Ts);var n=St.style,i=n.borderTopStyle,s=ke.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Ni(St),Ft.m=Math.round(a.top+Ft.sc())||0,an.m=Math.round(a.left+an.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),La=setInterval(Od,250),ke.delayedCall(.5,function(){return Ia=0}),Ht(_t,"touchcancel",hi),Ht(St,"touchstart",hi),Na(Ht,_t,"pointerdown,touchstart,mousedown",Rd),Na(Ht,_t,"pointerup,touchend,mouseup",Dd),Ou=ke.utils.checkPrefix("transform"),al.push(Ou),Ds=on(),Tl=ke.delayedCall(.2,kr).pause(),Ls=[_t,"visibilitychange",function(){var l=tt.innerWidth,c=tt.innerHeight;_t.hidden?(Ad=l,Pd=c):(Ad!==l||Pd!==c)&&Po()},_t,"DOMContentLoaded",kr,tt,"load",kr,tt,"resize",Po],Fa(Ht),Je.forEach(function(l){return l.enable(0,1)}),o=0;o<nt.length;o+=3)Ua(kt,nt[o],nt[o+1]),Ua(kt,nt[o],nt[o+2])}},r.config=function(n){"limitCallbacks"in n&&(zc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(La)||(La=i)&&setInterval(Od,i),"ignoreMobileResize"in n&&(dg=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Fa(kt)||Fa(Ht,n.autoRefreshEvents||"none"),hg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=fn(n),a=nt.indexOf(s),o=es(s);~a&&nt.splice(a,o?6:2),i&&(o?bi.unshift(tt,i,St,i,gi,i):bi.unshift(s,i))},r.clearMatchMedia=function(n){Je.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(ii(n)?fn(n):n).getBoundingClientRect(),o=a[s?qr:jr]*i||0;return s?a.right-o>0&&a.left+o<tt.innerWidth:a.bottom-o>0&&a.top+o<tt.innerHeight},r.positionInViewport=function(n,i,s){ii(n)&&(n=fn(n));var a=n.getBoundingClientRect(),o=a[s?qr:jr],l=i==null?o/2:i in Cl?Cl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/tt.innerWidth:(a.top+l)/tt.innerHeight},r.killAll=function(n){if(Je.forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ts.killAll||[];ts={},i.forEach(function(s){return s()})}},r}();Xe.version="3.11.3";Xe.saveStyles=function(r){return r?El(r).forEach(function(e){if(e&&e.style){var t=wn.indexOf(e);t>=0&&wn.splice(t,5),wn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ke.core.getCache(e),Fu())}}):wn};Xe.revert=function(r,e){return Cf(!r,e)};Xe.create=function(r,e){return new Xe(r,e)};Xe.refresh=function(r){return r?Po():(Ds||Xe.register())&&kr(!0)};Xe.update=is;Xe.clearScrollMemory=Mg;Xe.maxScroll=function(r,e){return lr(r,e?an:Ft)};Xe.getScrollFunc=function(r,e){return mr(fn(r),e?an:Ft)};Xe.getById=function(r){return Uu[r]};Xe.getAll=function(){return Je.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Xe.isScrolling=function(){return!!qn};Xe.snapDirectional=Ef;Xe.addEventListener=function(r,e){var t=ts[r]||(ts[r]=[]);~t.indexOf(e)||t.push(e)};Xe.removeEventListener=function(r,e){var t=ts[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Xe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],p=ke.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||p.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&p.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&ln(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return ln(s)&&(s=s(),Ht(Xe,"refresh",function(){return s=e.batchMax()})),El(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Xe.create(c))}),t};var Bd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Hc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Dt.isTouch?" pinch-zoom":""):"none",e===gi&&r(St,t)},Vd={auto:1,scroll:1},cw=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||ke.core.getCache(s),o=on(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s.scrollHeight<=s.clientHeight;)s=s.parentNode;a._isScroll=s&&!es(s)&&s!==n&&(Vd[(l=_i(s)).overflowY]||Vd[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Tg=function(e,t,n,i){return Dt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&cw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ht(_t,Dt.eventTypes[0],Hd,!1,!0)},onDisable:function(){return kt(_t,Dt.eventTypes[0],Hd,!0)}})},uw=/(input|label|select|textarea)/i,Gd,Hd=function(e){var t=uw.test(e.target.tagName);(t||Gd)&&(e._gsapAllow=!0,Gd=t)},fw=function(e){il(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a,o,l=fn(e.target)||gi,c=ke.core.globals().ScrollSmoother,u=c&&c.get(),f=Qi&&(e.content&&fn(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),h=mr(l,Ft),p=mr(l,an),g=1,d=(Dt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,m=0,_=ln(i)?function(){return i(a)}:function(){return i||2.8},T,S,b=Tg(l,e.type,!0,s),x=function(){return S=!1},y=hi,w=hi,v=function(){o=lr(l,Ft),w=zs(Qi?1:0,o),n&&(y=zs(0,lr(l,an))),T=Xr},M=function(){f._gsap.y=Co(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},R=function(){if(S){requestAnimationFrame(x);var $=Co(a.deltaY/2),V=w(h.v-$);if(f&&V!==h.v+h.offset){h.offset=V-h.v;var F=Co((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+F+", 0, 1)",f._gsap.y=F+"px",h.cacheID=nt.cache,is()}return!0}h.offset&&M(),S=!0},I,G,U,L,z=function(){v(),I.isActive()&&I.vars.scrollY>o&&(h()>o?I.progress(1)&&h(o):I.resetTo("scrollY",o))};return f&&ke.set(f,{y:"+=0"}),e.ignoreCheck=function(H){return Qi&&H.type==="touchmove"&&R()||g>1.05&&H.type!=="touchstart"||a.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){var H=g;g=Co((tt.visualViewport&&tt.visualViewport.scale||1)/d),I.pause(),H!==g&&Hc(l,g>1.01?!0:n?!1:"x"),G=p(),U=h(),v(),T=Xr},e.onRelease=e.onGestureStart=function(H,$){if(h.offset&&M(),!$)L.restart(!0);else{nt.cache++;var V=_(),F,P;n&&(F=p(),P=F+V*.05*-H.velocityX/.227,V*=Bd(p,F,P,lr(l,an)),I.vars.scrollX=y(P)),F=h(),P=F+V*.05*-H.velocityY/.227,V*=Bd(h,F,P,lr(l,Ft)),I.vars.scrollY=w(P),I.invalidate().duration(V).play(.01),(Qi&&I.vars.scrollY>=o||F>=o-1)&&ke.to({},{onUpdate:z,duration:V})}},e.onWheel=function(){I._ts&&I.pause(),on()-m>1e3&&(T=0,m=on())},e.onChange=function(H,$,V,F,P){if(Xr!==T&&v(),$&&n&&p(y(F[2]===$?G+(H.startX-H.x):p()+$-F[1])),V){h.offset&&M();var se=P[2]===V,oe=se?U+H.startY-H.y:h()+V-P[1],le=w(oe);se&&oe!==le&&(U+=le-oe),h(le)}(V||$)&&is()},e.onEnable=function(){Hc(l,n?!1:"x"),Xe.addEventListener("refresh",z),Ht(tt,"resize",z),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){Hc(l,!0),kt(tt,"resize",z),Xe.removeEventListener("refresh",z),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Dt(e),a.iOS=Qi,Qi&&!h()&&h(1),Qi&&ke.ticker.add(hi),L=a._dc,I=ke.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:L.vars.onComplete}),a};Xe.sort=function(r){return Je.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Xe.observe=function(r){return new Dt(r)};Xe.normalizeScroll=function(r){if(typeof r>"u")return Sn;if(r===!0&&Sn)return Sn.enable();if(r===!1)return Sn&&Sn.kill();var e=r instanceof Dt?r:fw(r);return Sn&&Sn.target===e.target&&Sn.kill(),es(e.target)&&(Sn=e),e};Xe.core={_getVelocityProp:Iu,_inputObserver:Tg,_scrollers:nt,_proxies:bi,bridge:{ss:function(){qn||ns("scrollStart"),qn=on()},ref:function(){return Yt}}};_g()&&ke.registerPlugin(Xe);gt.registerPlugin(Xe);const uo=(r,e)=>{let t=document.documentElement;Xe.create({trigger:r,start:"top top+=100",end:"bottom center",onEnter:()=>gt.to(t,{"--page-color":e}),onEnterBack:()=>gt.to(t,{"--page-color":e})})},hw=Mt('<section><div class="container"><div><div><p>Just like that, another year is behind us \u2014 and what a year it\u2019s been. We\u2019re celebrating with a look back at the projects, events, and growth that have kept us busy over the past year.</p></div><div><div><svg viewBox="0 0 229 357" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M0.539062 356.309V329.309C37.8724 299.642 70.0391 272.475 97.0391 247.809C124.372 223.142 145.372 199.475 160.039 176.809C175.039 153.809 182.539 129.975 182.539 105.309C182.539 82.6419 176.039 64.8086 163.039 51.8086C150.372 38.8086 133.206 32.3086 111.539 32.3086C95.2057 32.3086 81.3724 35.8086 70.0391 42.8086C58.7057 49.8086 50.2057 59.1419 44.5391 70.8086C38.8724 82.1419 36.0391 94.8086 36.0391 108.809H1.03906C1.03906 86.4753 5.87239 67.3086 15.5391 51.3086C25.2057 34.9753 38.3724 22.4752 55.0391 13.8086C71.7057 4.80859 90.5391 0.308594 111.539 0.308594C145.206 0.308594 171.372 9.80859 190.039 28.8086C209.039 47.8086 218.539 73.1419 218.539 104.809C218.539 126.142 213.872 146.642 204.539 166.309C195.539 185.642 183.206 204.475 167.539 222.809C152.206 240.809 134.872 258.309 115.539 275.309C96.5391 291.975 76.8724 308.309 56.5391 324.309H228.039V356.309H0.539062Z" fill="currentColor"></path></g></svg><div id="threejs-canvas"></div><svg viewBox="0 0 229 357" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M0.539062 356.309V329.309C37.8724 299.642 70.0391 272.475 97.0391 247.809C124.372 223.142 145.372 199.475 160.039 176.809C175.039 153.809 182.539 129.975 182.539 105.309C182.539 82.6419 176.039 64.8086 163.039 51.8086C150.372 38.8086 133.206 32.3086 111.539 32.3086C95.2057 32.3086 81.3724 35.8086 70.0391 42.8086C58.7057 49.8086 50.2057 59.1419 44.5391 70.8086C38.8724 82.1419 36.0391 94.8086 36.0391 108.809H1.03906C1.03906 86.4753 5.87239 67.3086 15.5391 51.3086C25.2057 34.9753 38.3724 22.4752 55.0391 13.8086C71.7057 4.80859 90.5391 0.308594 111.539 0.308594C145.206 0.308594 171.372 9.80859 190.039 28.8086C209.039 47.8086 218.539 73.1419 218.539 104.809C218.539 126.142 213.872 146.642 204.539 166.309C195.539 185.642 183.206 204.475 167.539 222.809C152.206 240.809 134.872 258.309 115.539 275.309C96.5391 291.975 76.8724 308.309 56.5391 324.309H228.039V356.309H0.539062Z" fill="currentColor"></path></g></svg><svg viewBox="0 0 229 357" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M0.539062 356.309V329.309C37.8724 299.642 70.0391 272.475 97.0391 247.809C124.372 223.142 145.372 199.475 160.039 176.809C175.039 153.809 182.539 129.975 182.539 105.309C182.539 82.6419 176.039 64.8086 163.039 51.8086C150.372 38.8086 133.206 32.3086 111.539 32.3086C95.2057 32.3086 81.3724 35.8086 70.0391 42.8086C58.7057 49.8086 50.2057 59.1419 44.5391 70.8086C38.8724 82.1419 36.0391 94.8086 36.0391 108.809H1.03906C1.03906 86.4753 5.87239 67.3086 15.5391 51.3086C25.2057 34.9753 38.3724 22.4752 55.0391 13.8086C71.7057 4.80859 90.5391 0.308594 111.539 0.308594C145.206 0.308594 171.372 9.80859 190.039 28.8086C209.039 47.8086 218.539 73.1419 218.539 104.809C218.539 126.142 213.872 146.642 204.539 166.309C195.539 185.642 183.206 204.475 167.539 222.809C152.206 240.809 134.872 258.309 115.539 275.309C96.5391 291.975 76.8724 308.309 56.5391 324.309H228.039V356.309H0.539062Z" fill="currentColor"></path></g></svg></div></div></div></div></section>');function dw(){let r,e,t,n,i,s,a;Yn(()=>{o(),u(),f()});function o(){r=new kn(45,a.offsetWidth/a.offsetHeight,.25,20),r.position.set(0,0,3),e=new w1,t=new rm({antialias:!0,alpha:!0}),t.setPixelRatio(window.devicePixelRatio),t.setSize(a.offsetWidth,a.offsetHeight),t.domElement.style.position="absolute",t.domElement.style.top="0",t.domElement.style.right="0",t.domElement.style.bottom="0",t.domElement.style.left="0",t.toneMapping=Bp,t.toneMappingExposure=1,t.outputEncoding=pt,a.appendChild(t.domElement);const g=new C1().load(["https://uploads-ssl.webflow.com/636d6c4870b0b8576f95af5a/6373dffdbb8f6f1b257ef702_posx.jpg","https://uploads-ssl.webflow.com/636d6c4870b0b8576f95af5a/6373dffd670562b9fd36ff11_negx.jpg","https://uploads-ssl.webflow.com/636d6c4870b0b8576f95af5a/6373dffda5d981d9e0cc72a3_posy.jpg","https://uploads-ssl.webflow.com/636d6c4870b0b8576f95af5a/6373dffe72627483ca29a8a5_negy.jpg","https://uploads-ssl.webflow.com/636d6c4870b0b8576f95af5a/6373dffd27e2263c957b59d5_posz.jpg","https://uploads-ssl.webflow.com/636d6c4870b0b8576f95af5a/6373dffc5e071ec13081ee31_negz.jpg"]);g.encoding=pt;const d=new sf(1,.05,16,100),m=new ef({color:0,combine:kp,envMap:g,reflectivity:.9}),_=.5;n=new ai(d,m),n.scale.x=.77,n.position.x=_*-1,i=new ai(d,m),i.scale.x=.77,i.position.x=0,s=new ai(d,m),s.scale.x=.77,s.position.x=_*1;const T=new Mo;T.add(n),T.add(i),T.add(s),e.add(T),m.envMap=g,m.needsUpdate=!0,window.addEventListener("resize",l),window.addEventListener("mousemove",c)}function l(){r.aspect=a.offsetWidth/a.offsetHeight,r.updateProjectionMatrix(),t.setSize(a.offsetWidth,a.offsetHeight),u()}function c(g){const m=g.clientX/window.innerWidth*2-1,_=g.clientY/window.innerHeight*2-1;gt.to(n.rotation,{duration:2,delay:.2,ease:"power4.out",x:_*.5,y:m*.5}),gt.to(i.rotation,{duration:2,delay:.1,ease:"power4.out",x:_*.5,y:m*.5}),gt.to(s.rotation,{duration:2,delay:0,ease:"power4.out",x:_*.5,y:m*.5})}function u(){t.render(e,r)}function f(){requestAnimationFrame(f),u()}const h=g=>{window.addEventListener("load",()=>{gt.from(g,{y:"-200%",duration:1.2,ease:qo.easeOut})})},p=g=>{window.addEventListener("load",()=>{gt.from(g,{y:"10%",skewY:2,opacity:0,duration:1.2,ease:qo.easeOut})})};return(()=>{const g=hw.cloneNode(!0),d=g.firstChild,m=d.firstChild,_=m.firstChild,T=_.nextSibling,S=T.firstChild,b=S.firstChild,x=b.nextSibling,y=x.nextSibling,w=y.nextSibling;bt(M=>uo(M,"var(--page-color-default"),g),bt(M=>h(M),_),bt(M=>p(M),T);const v=a;return typeof v=="function"?bt(v,x):a=x,et(M=>{const R=Di.hero,I=Di.heroInner,G=Di.heroText,U=Di.heroNumbersWrapper,L=Di.heroNumbers,z=Di.heroNumber,H=Di.ringsModel,$=Di.heroNumber,V=Di.heroNumber;return R!==M._v$&&Ee(g,M._v$=R),I!==M._v$2&&Ee(m,M._v$2=I),G!==M._v$3&&Ee(_,M._v$3=G),U!==M._v$4&&Ee(T,M._v$4=U),L!==M._v$5&&Ee(S,M._v$5=L),z!==M._v$6&&li(b,"class",M._v$6=z),H!==M._v$7&&Ee(x,M._v$7=H),$!==M._v$8&&li(y,"class",M._v$8=$),V!==M._v$9&&li(w,"class",M._v$9=V),M},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),g})()}const pw="_launchesSection_1otca_1",mw="_stickyWrapper_1otca_11",gw="_activeProjectTitle_1otca_32",Wd={launchesSection:pw,stickyWrapper:mw,activeProjectTitle:gw};var Xn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var $d=Object.getOwnPropertySymbols,_w=Object.prototype.hasOwnProperty,vw=Object.prototype.propertyIsEnumerable;function xw(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function yw(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Vt=yw()?Object.assign:function(r,e){for(var t,n=xw(r),i,s=1;s<arguments.length;s++){t=Object(arguments[s]);for(var a in t)_w.call(t,a)&&(n[a]=t[a]);if($d){i=$d(t);for(var o=0;o<i.length;o++)vw.call(t,i[o])&&(n[i[o]]=t[i[o]])}}return n},Af={},Pf={},os={},Nl={};Object.defineProperty(Nl,"__esModule",{value:!0});function bw(r){return typeof r=="function"}Nl.isFunction=bw;var Ul={},oa={};Object.defineProperty(oa,"__esModule",{value:!0});var Wc=!1;oa.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(r){if(r){var e=new Error;console.warn(`DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: 
`+e.stack)}else Wc&&console.log("RxJS: Back to a better error behavior. Thank you. <3");Wc=r},get useDeprecatedSynchronousErrorHandling(){return Wc}};var zl={};Object.defineProperty(zl,"__esModule",{value:!0});function Sw(r){setTimeout(function(){throw r},0)}zl.hostReportError=Sw;Object.defineProperty(Ul,"__esModule",{value:!0});var ww=oa,Mw=zl;Ul.empty={closed:!0,next:function(r){},error:function(r){if(ww.config.useDeprecatedSynchronousErrorHandling)throw r;Mw.hostReportError(r)},complete:function(){}};var Rf={},Df={};Object.defineProperty(Df,"__esModule",{value:!0});Df.isArray=function(){return Array.isArray||function(r){return r&&typeof r.length=="number"}}();var Lf={};Object.defineProperty(Lf,"__esModule",{value:!0});function Tw(r){return r!==null&&typeof r=="object"}Lf.isObject=Tw;var If={};Object.defineProperty(If,"__esModule",{value:!0});var Ew=function(){function r(e){return Error.call(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(t,n){return n+1+") "+t.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e,this}return r.prototype=Object.create(Error.prototype),r}();If.UnsubscriptionError=Ew;Object.defineProperty(Rf,"__esModule",{value:!0});var Cw=Df,Aw=Lf,Pw=Nl,cl=If,Rw=function(){function r(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}return r.prototype.unsubscribe=function(){var e;if(!this.closed){var t=this,n=t._parentOrParents,i=t._ctorUnsubscribe,s=t._unsubscribe,a=t._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof r)n.remove(this);else if(n!==null)for(var o=0;o<n.length;++o){var l=n[o];l.remove(this)}if(Pw.isFunction(s)){i&&(this._unsubscribe=void 0);try{s.call(this)}catch(f){e=f instanceof cl.UnsubscriptionError?qd(f.errors):[f]}}if(Cw.isArray(a))for(var o=-1,c=a.length;++o<c;){var u=a[o];if(Aw.isObject(u))try{u.unsubscribe()}catch(h){e=e||[],h instanceof cl.UnsubscriptionError?e=e.concat(qd(h.errors)):e.push(h)}}if(e)throw new cl.UnsubscriptionError(e)}},r.prototype.add=function(e){var t=e;if(!e)return r.EMPTY;switch(typeof e){case"function":t=new r(e);case"object":if(t===this||t.closed||typeof t.unsubscribe!="function")return t;if(this.closed)return t.unsubscribe(),t;if(!(t instanceof r)){var n=t;t=new r,t._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var i=t._parentOrParents;if(i===null)t._parentOrParents=this;else if(i instanceof r){if(i===this)return t;t._parentOrParents=[i,this]}else if(i.indexOf(this)===-1)i.push(this);else return t;var s=this._subscriptions;return s===null?this._subscriptions=[t]:s.push(t),t},r.prototype.remove=function(e){var t=this._subscriptions;if(t){var n=t.indexOf(e);n!==-1&&t.splice(n,1)}},r.EMPTY=function(e){return e.closed=!0,e}(new r),r}();Rf.Subscription=Rw;function qd(r){return r.reduce(function(e,t){return e.concat(t instanceof cl.UnsubscriptionError?t.errors:t)},[])}var Of={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.rxSubscriber=function(){return typeof Symbol=="function"?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),r.$$rxSubscriber=r.rxSubscriber})(Of);var Eg=Xn&&Xn.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)i.hasOwnProperty(s)&&(n[s]=i[s])},r(e,t)};return function(e,t){r(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();Object.defineProperty(os,"__esModule",{value:!0});var jd=Nl,ku=Ul,Dw=Rf,Lw=Of,Es=oa,Va=zl,Cg=function(r){Eg(e,r);function e(t,n,i){var s=r.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=ku.empty;break;case 1:if(!t){s.destination=ku.empty;break}if(typeof t=="object"){t instanceof e?(s.syncErrorThrowable=t.syncErrorThrowable,s.destination=t,t.add(s)):(s.syncErrorThrowable=!0,s.destination=new Bu(s,t));break}default:s.syncErrorThrowable=!0,s.destination=new Bu(s,t,n,i);break}return s}return e.prototype[Lw.rxSubscriber]=function(){return this},e.create=function(t,n,i){var s=new e(t,n,i);return s.syncErrorThrowable=!1,s},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(Dw.Subscription);os.Subscriber=Cg;var Bu=function(r){Eg(e,r);function e(t,n,i,s){var a=r.call(this)||this;a._parentSubscriber=t;var o,l=a;return jd.isFunction(n)?o=n:n&&(o=n.next,i=n.error,s=n.complete,n!==ku.empty&&(l=Object.create(n),jd.isFunction(l.unsubscribe)&&a.add(l.unsubscribe.bind(l)),l.unsubscribe=a.unsubscribe.bind(a))),a._context=l,a._next=o,a._error=i,a._complete=s,a}return e.prototype.next=function(t){if(!this.isStopped&&this._next){var n=this._parentSubscriber;!Es.config.useDeprecatedSynchronousErrorHandling||!n.syncErrorThrowable?this.__tryOrUnsub(this._next,t):this.__tryOrSetError(n,this._next,t)&&this.unsubscribe()}},e.prototype.error=function(t){if(!this.isStopped){var n=this._parentSubscriber,i=Es.config.useDeprecatedSynchronousErrorHandling;if(this._error)!i||!n.syncErrorThrowable?(this.__tryOrUnsub(this._error,t),this.unsubscribe()):(this.__tryOrSetError(n,this._error,t),this.unsubscribe());else if(n.syncErrorThrowable)i?(n.syncErrorValue=t,n.syncErrorThrown=!0):Va.hostReportError(t),this.unsubscribe();else{if(this.unsubscribe(),i)throw t;Va.hostReportError(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var n=this._parentSubscriber;if(this._complete){var i=function(){return t._complete.call(t._context)};!Es.config.useDeprecatedSynchronousErrorHandling||!n.syncErrorThrowable?(this.__tryOrUnsub(i),this.unsubscribe()):(this.__tryOrSetError(n,i),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,n){try{t.call(this._context,n)}catch(i){if(this.unsubscribe(),Es.config.useDeprecatedSynchronousErrorHandling)throw i;Va.hostReportError(i)}},e.prototype.__tryOrSetError=function(t,n,i){if(!Es.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{n.call(this._context,i)}catch(s){return Es.config.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=s,t.syncErrorThrown=!0,!0):(Va.hostReportError(s),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(Cg);os.SafeSubscriber=Bu;Object.defineProperty(Pf,"__esModule",{value:!0});var Iw=os;function Ow(r){for(;r;){var e=r,t=e.closed,n=e.destination,i=e.isStopped;if(t||i)return!1;n&&n instanceof Iw.Subscriber?r=n:r=null}return!0}Pf.canReportError=Ow;var Ff={};Object.defineProperty(Ff,"__esModule",{value:!0});var $c=os,Xd=Of,Fw=Ul;function Nw(r,e,t){if(r){if(r instanceof $c.Subscriber)return r;if(r[Xd.rxSubscriber])return r[Xd.rxSubscriber]()}return!r&&!e&&!t?new $c.Subscriber(Fw.empty):new $c.Subscriber(r,e,t)}Ff.toSubscriber=Nw;var Nf={};Object.defineProperty(Nf,"__esModule",{value:!0});Nf.observable=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();var kl={},Uf={};Object.defineProperty(Uf,"__esModule",{value:!0});function Uw(r){return r}Uf.identity=Uw;Object.defineProperty(kl,"__esModule",{value:!0});var zw=Uf;function kw(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return Ag(r)}kl.pipe=kw;function Ag(r){return r.length===0?zw.identity:r.length===1?r[0]:function(t){return r.reduce(function(n,i){return i(n)},t)}}kl.pipeFromArray=Ag;Object.defineProperty(Af,"__esModule",{value:!0});var Bw=Pf,Vw=Ff,Gw=Nf,Hw=kl,ul=oa,Ww=function(){function r(e){this._isScalar=!1,e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,n){var i=this.operator,s=Vw.toSubscriber(e,t,n);if(i?s.add(i.call(s,this.source)):s.add(this.source||ul.config.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),ul.config.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){ul.config.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),Bw.canReportError(e)?e.error(t):console.warn(t)}},r.prototype.forEach=function(e,t){var n=this;return t=Yd(t),new t(function(i,s){var a;a=n.subscribe(function(o){try{e(o)}catch(l){s(l),a&&a.unsubscribe()}},s,i)})},r.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},r.prototype[Gw.observable]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?this:Hw.pipeFromArray(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=Yd(e),new e(function(n,i){var s;t.subscribe(function(a){return s=a},function(a){return i(a)},function(){return n(s)})})},r.create=function(e){return new r(e)},r}();Af.Observable=Ww;function Yd(r){if(r||(r=ul.config.Promise||Promise),!r)throw new Error("no Promise impl found");return r}var zf={},$w=Xn&&Xn.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)i.hasOwnProperty(s)&&(n[s]=i[s])},r(e,t)};return function(e,t){r(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();Object.defineProperty(zf,"__esModule",{value:!0});var qw=os;function jw(r,e){return function(n){return n.lift(new Xw(r,e))}}zf.filter=jw;var Xw=function(){function r(e,t){this.predicate=e,this.thisArg=t}return r.prototype.call=function(e,t){return t.subscribe(new Yw(e,this.predicate,this.thisArg))},r}(),Yw=function(r){$w(e,r);function e(t,n,i){var s=r.call(this,t)||this;return s.predicate=n,s.thisArg=i,s.count=0,s}return e.prototype._next=function(t){var n;try{n=this.predicate.call(this.thisArg,t,this.count++)}catch(i){this.destination.error(i);return}n&&this.destination.next(t)},e}(qw.Subscriber),Bl={},Zw=Xn&&Xn.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)i.hasOwnProperty(s)&&(n[s]=i[s])},r(e,t)};return function(e,t){r(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();Object.defineProperty(Bl,"__esModule",{value:!0});var Kw=os;function Jw(r,e){return function(n){if(typeof r!="function")throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new Pg(r,e))}}Bl.map=Jw;var Pg=function(){function r(e,t){this.project=e,this.thisArg=t}return r.prototype.call=function(e,t){return t.subscribe(new Qw(e,this.project,this.thisArg))},r}();Bl.MapOperator=Pg;var Qw=function(r){Zw(e,r);function e(t,n,i){var s=r.call(this,t)||this;return s.project=n,s.count=0,s.thisArg=i||s,s}return e.prototype._next=function(t){var n;try{n=this.project.call(this.thisArg,t,this.count++)}catch(i){this.destination.error(i);return}this.destination.next(n)},e}(Kw.Subscriber),eM=Af,tM=eM.Observable,nM=zf,iM=nM.filter,rM=Bl,sM=rM.map,aa={Observable:tM,filter:iM,map:sM},Rg=function(e){if(typeof e=="string"||Array.isArray(e))return{id:e};if(e&&e.query)return"params"in e?{query:e.query,params:e.params}:{query:e.query};var t=["* Document ID (<docId>)","* Array of document IDs","* Object containing `query`"].join(`
`);throw new Error(`Unknown selection - must be one of:

`.concat(t))},yr={};(function(r){function e(i){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},e(i)}var t=["image","file"],n=["before","after","replace"];r.dataset=function(i){if(!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(i))throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters")},r.projectId=function(i){if(!/^[-a-z0-9]+$/i.test(i))throw new Error("`projectId` can only contain only a-z, 0-9 and dashes")},r.validateAssetType=function(i){if(t.indexOf(i)===-1)throw new Error("Invalid asset type: ".concat(i,". Must be one of ").concat(t.join(", ")))},r.validateObject=function(i,s){if(s===null||e(s)!=="object"||Array.isArray(s))throw new Error("".concat(i,"() takes an object of properties"))},r.requireDocumentId=function(i,s){if(!s._id)throw new Error("".concat(i,'() requires that the document contains an ID ("_id" property)'));r.validateDocumentId(i,s._id)},r.validateDocumentId=function(i,s){if(typeof s!="string"||!/^[a-z0-9_.-]+$/i.test(s))throw new Error("".concat(i,'(): "').concat(s,'" is not a valid document ID'))},r.validateInsert=function(i,s,a){var o="insert(at, selector, items)";if(n.indexOf(i)===-1){var l=n.map(function(c){return'"'.concat(c,'"')}).join(", ");throw new Error("".concat(o,' takes an "at"-argument which is one of: ').concat(l))}if(typeof s!="string")throw new Error("".concat(o,' takes a "selector"-argument which must be a string'));if(!Array.isArray(a))throw new Error("".concat(o,' takes an "items"-argument which must be an array'))},r.hasDataset=function(i){if(!i.dataset)throw new Error("`dataset` must be provided to perform queries");return i.dataset||""},r.requestTag=function(i){if(typeof i!="string"||!/^[a-z0-9._-]{1,75}$/i.test(i))throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");return i}})(yr);function qc(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var er=Vt,oM=Rg,Dg=yr,jc=Dg.validateObject,aM=Dg.validateInsert;function Vu(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;this.selection=r,this.operations=er({},e),this.client=t}er(Vu.prototype,{clone:function(){return new Vu(this.selection,er({},this.operations),this.client)},set:function(e){return this._assign("set",e)},diffMatchPatch:function(e){return jc("diffMatchPatch",e),this._assign("diffMatchPatch",e)},unset:function(e){if(!Array.isArray(e))throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");return this.operations=er({},this.operations,{unset:e}),this},setIfMissing:function(e){return this._assign("setIfMissing",e)},replace:function(e){return jc("replace",e),this._set("set",{$:e})},inc:function(e){return this._assign("inc",e)},dec:function(e){return this._assign("dec",e)},insert:function(e,t,n){var i;return aM(e,t,n),this._assign("insert",(i={},qc(i,e,t),qc(i,"items",n),i))},append:function(e,t){return this.insert("after","".concat(e,"[-1]"),t)},prepend:function(e,t){return this.insert("before","".concat(e,"[0]"),t)},splice:function(e,t,n,i){var s=typeof n>"u"||n===-1,a=t<0?t-1:t,o=s?-1:Math.max(0,t+n),l=a<0&&o>=0?"":o,c="".concat(e,"[").concat(a,":").concat(l,"]");return this.insert("replace",c,i||[])},ifRevisionId:function(e){return this.operations.ifRevisionID=e,this},serialize:function(){return er(oM(this.selection),this.operations)},toJSON:function(){return this.serialize()},commit:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.client)throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");var t=typeof this.selection=="string",n=er({returnFirst:t,returnDocuments:!0},e);return this.client.mutate({patch:this.serialize()},n)},reset:function(){return this.operations={},this},_set:function(e,t){return this._assign(e,t,!1)},_assign:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return jc(e,t),this.operations=er({},this.operations,qc({},e,er({},n&&this.operations[e]||{},t))),this}});var kf=Vu;function Zd(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Xc=Vt,Cs=yr,Yc=kf,lM={returnDocuments:!1};function Gu(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0;this.trxId=t,this.operations=r,this.client=e}Xc(Gu.prototype,{clone:function(){return new Gu(this.operations.slice(0),this.client,this.trxId)},create:function(e){return Cs.validateObject("create",e),this._add({create:e})},createIfNotExists:function(e){var t="createIfNotExists";return Cs.validateObject(t,e),Cs.requireDocumentId(t,e),this._add(Zd({},t,e))},createOrReplace:function(e){var t="createOrReplace";return Cs.validateObject(t,e),Cs.requireDocumentId(t,e),this._add(Zd({},t,e))},delete:function(e){return Cs.validateDocumentId("delete",e),this._add({delete:{id:e}})},patch:function(e,t){var n=typeof t=="function",i=e instanceof Yc;if(i)return this._add({patch:e.serialize()});if(n){var s=t(new Yc(e,{},this.client));if(!(s instanceof Yc))throw new Error("function passed to `patch()` must return the patch");return this._add({patch:s.serialize()})}return this._add({patch:Xc({id:e},t)})},transactionId:function(e){return e?(this.trxId=e,this):this.trxId},serialize:function(){return this.operations.slice()},toJSON:function(){return this.serialize()},commit:function(e){if(!this.client)throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");return this.client.mutate(this.serialize(),Xc({transactionId:this.trxId},lM,e||{}))},reset:function(){return this.operations=[],this},_add:function(e){return this.operations.push(e),this}});var Lg=Gu,cM=["tag"];function uM(r,e){if(r==null)return{};var t=fM(r,e),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(i=0;i<s.length;i++)n=s[i],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,n)||(t[n]=r[n]))}return t}function fM(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,s;for(s=0;s<n.length;s++)i=n[s],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}var As=encodeURIComponent,Ig=function(r){var e=r.query,t=r.params,n=t===void 0?{}:t,i=r.options,s=i===void 0?{}:i,a=s.tag,o=uM(s,cM),l="query=".concat(As(e)),c=a?"?tag=".concat(As(a),"&").concat(l):"?".concat(l),u=Object.keys(n).reduce(function(f,h){return"".concat(f,"&").concat(As("$".concat(h)),"=").concat(As(JSON.stringify(n[h])))},c);return Object.keys(o).reduce(function(f,h){return s[h]?"".concat(f,"&").concat(As(h),"=").concat(As(s[h])):f},u)},Hu={exports:{}};/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */(function(r,e){(function(t){var n=t.setTimeout,i=t.clearTimeout,s=t.XMLHttpRequest,a=t.XDomainRequest,o=t.ActiveXObject,l=t.EventSource,c=t.document,u=t.Promise,f=t.fetch,h=t.Response,p=t.TextDecoder,g=t.TextEncoder,d=t.AbortController;if(typeof window<"u"&&typeof c<"u"&&!("readyState"in c)&&c.body==null&&(c.readyState="loading",window.addEventListener("load",function(N){c.readyState="complete"},!1)),s==null&&o!=null&&(s=function(){return new o("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(N){function D(){}return D.prototype=N,new D}),Date.now||(Date.now=function(){return new Date().getTime()}),d==null){var m=f;f=function(N,D){var re=D.signal;return m(N,{headers:D.headers,credentials:D.credentials,cache:D.cache}).then(function(q){var Se=q.body.getReader();return re._reader=Se,re._aborted&&re._reader.cancel(),{status:q.status,statusText:q.statusText,headers:q.headers,body:{getReader:function(){return Se}}}})},d=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function _(){this.bitsNeeded=0,this.codePoint=0}_.prototype.decode=function(N){function D(ee,K,te){if(te===1)return ee>=128>>K&&ee<<K<=2047;if(te===2)return ee>=2048>>K&&ee<<K<=55295||ee>=57344>>K&&ee<<K<=65535;if(te===3)return ee>=65536>>K&&ee<<K<=1114111;throw new Error}function re(ee,K){if(ee===6*1)return K>>6>15?3:K>31?2:1;if(ee===6*2)return K>15?3:2;if(ee===6*3)return 3;throw new Error}for(var q=65533,Se="",ue=this.bitsNeeded,C=this.codePoint,E=0;E<N.length;E+=1){var k=N[E];ue!==0&&(k<128||k>191||!D(C<<6|k&63,ue-6,re(ue,C)))&&(ue=0,C=q,Se+=String.fromCharCode(C)),ue===0?(k>=0&&k<=127?(ue=0,C=k):k>=192&&k<=223?(ue=6*1,C=k&31):k>=224&&k<=239?(ue=6*2,C=k&15):k>=240&&k<=247?(ue=6*3,C=k&7):(ue=0,C=q),ue!==0&&!D(C,ue,re(ue,C))&&(ue=0,C=q)):(ue-=6,C=C<<6|k&63),ue===0&&(C<=65535?Se+=String.fromCharCode(C):(Se+=String.fromCharCode(55296+(C-65535-1>>10)),Se+=String.fromCharCode(56320+(C-65535-1&1023))))}return this.bitsNeeded=ue,this.codePoint=C,Se};var T=function(){try{return new p().decode(new g().encode("test"),{stream:!0})==="test"}catch(N){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+N)}return!1};(p==null||g==null||!T())&&(p=_);var S=function(){};function b(N){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=S,this.onload=S,this.onerror=S,this.onreadystatechange=S,this._contentType="",this._xhr=N,this._sendTimeout=0,this._abort=S}b.prototype.open=function(N,D){this._abort(!0);var re=this,q=this._xhr,Se=1,ue=0;this._abort=function(te){re._sendTimeout!==0&&(i(re._sendTimeout),re._sendTimeout=0),(Se===1||Se===2||Se===3)&&(Se=4,q.onload=S,q.onerror=S,q.onabort=S,q.onprogress=S,q.onreadystatechange=S,q.abort(),ue!==0&&(i(ue),ue=0),te||(re.readyState=4,re.onabort(null),re.onreadystatechange())),Se=0};var C=function(){if(Se===1){var te=0,de="",me=void 0;if("contentType"in q)te=200,de="OK",me=q.contentType;else try{te=q.status,de=q.statusText,me=q.getResponseHeader("Content-Type")}catch{te=0,de="",me=void 0}te!==0&&(Se=2,re.readyState=2,re.status=te,re.statusText=de,re._contentType=me,re.onreadystatechange())}},E=function(){if(C(),Se===2||Se===3){Se=3;var te="";try{te=q.responseText}catch{}re.readyState=3,re.responseText=te,re.onprogress()}},k=function(te,de){if((de==null||de.preventDefault==null)&&(de={preventDefault:S}),E(),Se===1||Se===2||Se===3){if(Se=4,ue!==0&&(i(ue),ue=0),re.readyState=4,te==="load")re.onload(de);else if(te==="error")re.onerror(de);else if(te==="abort")re.onabort(de);else throw new TypeError;re.onreadystatechange()}},ee=function(te){q!=null&&(q.readyState===4?(!("onload"in q)||!("onerror"in q)||!("onabort"in q))&&k(q.responseText===""?"error":"load",te):q.readyState===3?"onprogress"in q||E():q.readyState===2&&C())},K=function(){ue=n(function(){K()},500),q.readyState===3&&E()};"onload"in q&&(q.onload=function(te){k("load",te)}),"onerror"in q&&(q.onerror=function(te){k("error",te)}),"onabort"in q&&(q.onabort=function(te){k("abort",te)}),"onprogress"in q&&(q.onprogress=E),"onreadystatechange"in q&&(q.onreadystatechange=function(te){ee(te)}),("contentType"in q||!("ontimeout"in s.prototype))&&(D+=(D.indexOf("?")===-1?"?":"&")+"padding=true"),q.open(N,D,!0),"readyState"in q&&(ue=n(function(){K()},0))},b.prototype.abort=function(){this._abort(!1)},b.prototype.getResponseHeader=function(N){return this._contentType},b.prototype.setRequestHeader=function(N,D){var re=this._xhr;"setRequestHeader"in re&&re.setRequestHeader(N,D)},b.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},b.prototype.send=function(){if((!("ontimeout"in s.prototype)||!("sendAsBinary"in s.prototype)&&!("mozAnon"in s.prototype))&&c!=null&&c.readyState!=null&&c.readyState!=="complete"){var N=this;N._sendTimeout=n(function(){N._sendTimeout=0,N.send()},4);return}var D=this._xhr;"withCredentials"in D&&(D.withCredentials=this.withCredentials);try{D.send(void 0)}catch(re){throw re}};function x(N){return N.replace(/[A-Z]/g,function(D){return String.fromCharCode(D.charCodeAt(0)+32)})}function y(N){for(var D=Object.create(null),re=N.split(`\r
`),q=0;q<re.length;q+=1){var Se=re[q],ue=Se.split(": "),C=ue.shift(),E=ue.join(": ");D[x(C)]=E}this._map=D}y.prototype.get=function(N){return this._map[x(N)]},s!=null&&s.HEADERS_RECEIVED==null&&(s.HEADERS_RECEIVED=2);function w(){}w.prototype.open=function(N,D,re,q,Se,ue,C){N.open("GET",Se);var E=0;N.onprogress=function(){var ee=N.responseText,K=ee.slice(E);E+=K.length,re(K)},N.onerror=function(ee){ee.preventDefault(),q(new Error("NetworkError"))},N.onload=function(){q(null)},N.onabort=function(){q(null)},N.onreadystatechange=function(){if(N.readyState===s.HEADERS_RECEIVED){var ee=N.status,K=N.statusText,te=N.getResponseHeader("Content-Type"),de=N.getAllResponseHeaders();D(ee,K,te,new y(de))}},N.withCredentials=ue;for(var k in C)Object.prototype.hasOwnProperty.call(C,k)&&N.setRequestHeader(k,C[k]);return N.send(),N};function v(N){this._headers=N}v.prototype.get=function(N){return this._headers.get(N)};function M(){}M.prototype.open=function(N,D,re,q,Se,ue,C){var E=null,k=new d,ee=k.signal,K=new p;return f(Se,{headers:C,credentials:ue?"include":"same-origin",signal:ee,cache:"no-store"}).then(function(te){return E=te.body.getReader(),D(te.status,te.statusText,te.headers.get("Content-Type"),new v(te.headers)),new u(function(de,me){var Q=function(){E.read().then(function(ye){if(ye.done)de(void 0);else{var Te=K.decode(ye.value,{stream:!0});re(Te),Q()}}).catch(function(ye){me(ye)})};Q()})}).catch(function(te){if(te.name!=="AbortError")return te}).then(function(te){q(te)}),{abort:function(){E?.cancel(),k.abort()}}};function R(){this._listeners=Object.create(null)}function I(N){n(function(){throw N},0)}R.prototype.dispatchEvent=function(N){N.target=this;var D=this._listeners[N.type];if(D!=null)for(var re=D.length,q=0;q<re;q+=1){var Se=D[q];try{typeof Se.handleEvent=="function"?Se.handleEvent(N):Se.call(this,N)}catch(ue){I(ue)}}},R.prototype.addEventListener=function(N,D){N=String(N);var re=this._listeners,q=re[N];q==null&&(q=[],re[N]=q);for(var Se=!1,ue=0;ue<q.length;ue+=1)q[ue]===D&&(Se=!0);Se||q.push(D)},R.prototype.removeEventListener=function(N,D){N=String(N);var re=this._listeners,q=re[N];if(q!=null){for(var Se=[],ue=0;ue<q.length;ue+=1)q[ue]!==D&&Se.push(q[ue]);Se.length===0?delete re[N]:re[N]=Se}};function G(N){this.type=N,this.target=void 0}function U(N,D){G.call(this,N),this.data=D.data,this.lastEventId=D.lastEventId}U.prototype=Object.create(G.prototype);function L(N,D){G.call(this,N),this.status=D.status,this.statusText=D.statusText,this.headers=D.headers}L.prototype=Object.create(G.prototype);function z(N,D){G.call(this,N),this.error=D.error}z.prototype=Object.create(G.prototype);var H=-1,$=0,V=1,F=2,P=-1,se=0,oe=1,le=2,he=3,Oe=/^text\/event\-stream(;.*)?$/i,J=1e3,We=18e6,De=function(N,D){var re=N==null?D:parseInt(N,10);return re!==re&&(re=D),Be(re)},Be=function(N){return Math.min(Math.max(N,J),We)},ge=function(N,D,re){try{typeof D=="function"&&D.call(N,re)}catch(q){I(q)}};function Ge(N,D){R.call(this),D=D||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,ce(this,N,D)}function be(){return s!=null&&"withCredentials"in s.prototype||a==null?new s:new a}var Ce=f!=null&&h!=null&&"body"in h.prototype;function ce(N,D,re){D=String(D);var q=Boolean(re.withCredentials),Se=re.lastEventIdQueryParameterName||"lastEventId",ue=Be(1e3),C=De(re.heartbeatTimeout,45e3),E="",k=ue,ee=!1,K=0,te=re.headers||{},de=re.Transport,me=Ce&&de==null?void 0:new b(de!=null?new de:be()),Q=de!=null&&typeof de!="string"?new de:me==null?new M:new w,ye=void 0,Te=0,_e=H,Pe="",Ae="",fe="",$e="",Ve=se,O=0,j=0,ae=function(Ye,Fe,Y,ve){if(_e===$)if(Ye===200&&Y!=null&&Oe.test(Y)){_e=V,ee=Date.now(),k=ue,N.readyState=V;var pe=new L("open",{status:Ye,statusText:Fe,headers:ve});N.dispatchEvent(pe),ge(N,N.onopen,pe)}else{var Le="";Ye!==200?(Fe&&(Fe=Fe.replace(/\s+/g," ")),Le="EventSource's response has a status "+Ye+" "+Fe+" that is not 200. Aborting the connection."):Le="EventSource's response has a Content-Type specifying an unsupported type: "+(Y==null?"-":Y.replace(/\s+/g," "))+". Aborting the connection.",je();var pe=new L("error",{status:Ye,statusText:Fe,headers:ve});N.dispatchEvent(pe),ge(N,N.onerror,pe),console.error(Le)}},xe=function(Ye){if(_e===V){for(var Fe=-1,Y=0;Y<Ye.length;Y+=1){var ve=Ye.charCodeAt(Y);(ve===`
`.charCodeAt(0)||ve==="\r".charCodeAt(0))&&(Fe=Y)}var pe=(Fe!==-1?$e:"")+Ye.slice(0,Fe+1);$e=(Fe===-1?$e:"")+Ye.slice(Fe+1),Ye!==""&&(ee=Date.now(),K+=Ye.length);for(var Le=0;Le<pe.length;Le+=1){var ve=pe.charCodeAt(Le);if(Ve===P&&ve===`
`.charCodeAt(0))Ve=se;else if(Ve===P&&(Ve=se),ve==="\r".charCodeAt(0)||ve===`
`.charCodeAt(0)){if(Ve!==se){Ve===oe&&(j=Le+1);var ot=pe.slice(O,j-1),He=pe.slice(j+(j<Le&&pe.charCodeAt(j)===" ".charCodeAt(0)?1:0),Le);ot==="data"?(Pe+=`
`,Pe+=He):ot==="id"?Ae=He:ot==="event"?fe=He:ot==="retry"?(ue=De(He,ue),k=ue):ot==="heartbeatTimeout"&&(C=De(He,C),Te!==0&&(i(Te),Te=n(function(){lt()},C)))}if(Ve===se){if(Pe!==""){E=Ae,fe===""&&(fe="message");var ut=new U(fe,{data:Pe.slice(1),lastEventId:Ae});if(N.dispatchEvent(ut),fe==="open"?ge(N,N.onopen,ut):fe==="message"?ge(N,N.onmessage,ut):fe==="error"&&ge(N,N.onerror,ut),_e===F)return}Pe="",fe=""}Ve=ve==="\r".charCodeAt(0)?P:se}else Ve===se&&(O=Le,Ve=oe),Ve===oe?ve===":".charCodeAt(0)&&(j=Le+1,Ve=le):Ve===le&&(Ve=he)}}},Re=function(Ye){if(_e===V||_e===$){_e=H,Te!==0&&(i(Te),Te=0),Te=n(function(){lt()},k),k=Be(Math.min(ue*16,k*2)),N.readyState=$;var Fe=new z("error",{error:Ye});N.dispatchEvent(Fe),ge(N,N.onerror,Fe),Ye!=null&&console.error(Ye)}},je=function(){_e=F,ye!=null&&(ye.abort(),ye=void 0),Te!==0&&(i(Te),Te=0),N.readyState=F},lt=function(){if(Te=0,_e!==H){if(!ee&&ye!=null)Re(new Error("No activity within "+C+" milliseconds. "+(_e===$?"No response received.":K+" chars received.")+" Reconnecting.")),ye!=null&&(ye.abort(),ye=void 0);else{var Ye=Math.max((ee||Date.now())+C-Date.now(),1);ee=!1,Te=n(function(){lt()},Ye)}return}ee=!1,K=0,Te=n(function(){lt()},C),_e=$,Pe="",fe="",Ae=E,$e="",O=0,j=0,Ve=se;var Fe=D;if(D.slice(0,5)!=="data:"&&D.slice(0,5)!=="blob:"&&E!==""){var Y=D.indexOf("?");Fe=Y===-1?D:D.slice(0,Y+1)+D.slice(Y+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(He,ut){return ut===Se?"":He}),Fe+=(D.indexOf("?")===-1?"?":"&")+Se+"="+encodeURIComponent(E)}var ve=N.withCredentials,pe={};pe.Accept="text/event-stream";var Le=N.headers;if(Le!=null)for(var ot in Le)Object.prototype.hasOwnProperty.call(Le,ot)&&(pe[ot]=Le[ot]);try{ye=Q.open(me,ae,xe,Re,Fe,ve,pe)}catch(He){throw je(),He}};N.url=D,N.readyState=$,N.withCredentials=q,N.headers=te,N._close=je,lt()}Ge.prototype=Object.create(R.prototype),Ge.prototype.CONNECTING=$,Ge.prototype.OPEN=V,Ge.prototype.CLOSED=F,Ge.prototype.close=function(){this._close()},Ge.CONNECTING=$,Ge.OPEN=V,Ge.CLOSED=F,Ge.prototype.withCredentials=void 0;var ie=l;s!=null&&(l==null||!("withCredentials"in l.prototype))&&(ie=Ge),function(N){{var D=N(e);D!==void 0&&(r.exports=D)}}(function(N){N.EventSourcePolyfill=Ge,N.NativeEventSource=l,N.EventSource=ie})})(typeof globalThis>"u"?typeof window<"u"?window:typeof self<"u"?self:Xn:globalThis)})(Hu,Hu.exports);var hM=Hu.exports,dM=hM.EventSourcePolyfill,pM=function(r,e){return e.reduce(function(t,n){return typeof r[n]>"u"||(t[n]=r[n]),t},{})},mM=function(r,e){return Object.keys(e).concat(Object.keys(r)).reduce(function(t,n){return t[n]=typeof r[n]>"u"?e[n]:r[n],t},{})};function Kd(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function Jd(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Kd(Object(t),!0).forEach(function(n){gM(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Kd(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function gM(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var _M=Vt,vM=aa,Qd=vM.Observable,xM=dM,yM=pM,bM=mM,SM=Ig,wM=16e3-1200,ep=xM,MM=["includePreviousRevision","includeResult","visibility","effectFormat","tag"],TM={includeResult:!0},EM=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=this.clientConfig,s=i.url,a=i.token,o=i.withCredentials,l=i.requestTagPrefix,c=n.tag&&l?[l,n.tag].join("."):n.tag,u=Jd(Jd({},bM(n,TM)),{},{tag:c}),f=yM(u,MM),h=SM({query:e,params:t,options:f,tag:c}),p="".concat(s).concat(this.getDataUrl("listen",h));if(p.length>wM)return new Qd(function(_){return _.error(new Error("Query too large for listener"))});var g=u.events?u.events:["mutation"],d=g.indexOf("reconnect")!==-1,m={};return(a||o)&&(m.withCredentials=!0),a&&(m.headers={Authorization:"Bearer ".concat(a)}),new Qd(function(_){var T=I(),S,b=!1;function x(){b||(R(),!b&&T.readyState===ep.CLOSED&&(M(),clearTimeout(S),S=setTimeout(G,100)))}function y(L){_.error(CM(L))}function w(L){var z=Og(L);return z instanceof Error?_.error(z):_.next(z)}function v(L){b=!0,M(),_.complete()}function M(){T.removeEventListener("error",x,!1),T.removeEventListener("channelError",y,!1),T.removeEventListener("disconnect",v,!1),g.forEach(function(L){return T.removeEventListener(L,w,!1)}),T.close()}function R(){d&&_.next({type:"reconnect"})}function I(){var L=new ep(p,m);return L.addEventListener("error",x,!1),L.addEventListener("channelError",y,!1),L.addEventListener("disconnect",v,!1),g.forEach(function(z){return L.addEventListener(z,w,!1)}),L}function G(){T=I()}function U(){b=!0,M()}return U})};function Og(r){try{var e=r.data&&JSON.parse(r.data)||{};return _M({type:r.type},e)}catch(t){return t}}function CM(r){if(r instanceof Error)return r;var e=Og(r);return e instanceof Error?e:new Error(AM(e))}function AM(r){return r.error?r.error.description?r.error.description:typeof r.error=="string"?r.error:JSON.stringify(r.error,null,2):r.message||"Unknown listener error"}function tp(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var PM=Vt,Fg=aa,bo=Fg.map,Zc=Fg.filter,Kc=yr,RM=Rg,DM=Ig,np=Lg,ip=kf,LM=EM,IM=function(e,t){var n=typeof e>"u"?t:e;return e===!1?void 0:n},OM=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{dryRun:e.dryRun,returnIds:!0,returnDocuments:IM(e.returnDocuments,!0),visibility:e.visibility||"sync",autoGenerateArrayKeys:e.autoGenerateArrayKeys,skipCrossDatasetReferenceValidation:e.skipCrossDatasetReferenceValidation}},Jc=function(e){return e.type==="response"},FM=function(e){return e.body},NM=function(e,t){return e.reduce(function(n,i){return n[t(i)]=i,n},Object.create(null))},Ga=function(e){return e.toPromise()},UM=11264,zM={listen:LM,getDataUrl:function(e,t){var n=this.clientConfig,i=Kc.hasDataset(n),s="/".concat(e,"/").concat(i),a=t?"".concat(s,"/").concat(t):s;return"/data".concat(a).replace(/\/($|\?)/,"$1")},fetch:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.filterResponse===!1?function(a){return a}:function(a){return a.result},s=this._dataRequest("query",{query:e,params:t},n).pipe(bo(i));return this.isPromiseAPI()?Ga(s):s},getDocument:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n={uri:this.getDataUrl("doc",e),json:!0,tag:t.tag},i=this._requestObservable(n).pipe(Zc(Jc),bo(function(s){return s.body.documents&&s.body.documents[0]}));return this.isPromiseAPI()?Ga(i):i},getDocuments:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n={uri:this.getDataUrl("doc",e.join(",")),json:!0,tag:t.tag},i=this._requestObservable(n).pipe(Zc(Jc),bo(function(s){var a=NM(s.body.documents||[],function(o){return o._id});return e.map(function(o){return a[o]||null})}));return this.isPromiseAPI()?Ga(i):i},create:function(e,t){return this._create(e,"create",t)},createIfNotExists:function(e,t){return Kc.requireDocumentId("createIfNotExists",e),this._create(e,"createIfNotExists",t)},createOrReplace:function(e,t){return Kc.requireDocumentId("createOrReplace",e),this._create(e,"createOrReplace",t)},patch:function(e,t){return new ip(e,t,this)},delete:function(e,t){return this.dataRequest("mutate",{mutations:[{delete:RM(e)}]},t)},mutate:function(e,t){var n=e instanceof ip||e instanceof np?e.serialize():e,i=Array.isArray(n)?n:[n],s=t&&t.transactionId;return this.dataRequest("mutate",{mutations:i,transactionId:s},t)},transaction:function(e){return new np(e,this)},dataRequest:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=this._dataRequest(e,t,n);return this.isPromiseAPI()?Ga(i):i},_dataRequest:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=e==="mutate",s=e==="query",a=!i&&DM(t),o=!i&&a.length<UM,l=o?a:"",c=n.returnFirst,u=n.timeout,f=n.token,h=n.tag,p=n.headers,g=this.getDataUrl(e,l),d={method:o?"GET":"POST",uri:g,json:!0,body:o?void 0:t,query:i&&OM(n),timeout:u,headers:p,token:f,tag:h,canUseCdn:s};return this._requestObservable(d).pipe(Zc(Jc),bo(FM),bo(function(m){if(!i)return m;var _=m.results||[];if(n.returnDocuments)return c?_[0]&&_[0].document:_.map(function(b){return b.document});var T=c?"documentId":"documentIds",S=c?_[0]&&_[0].id:_.map(function(b){return b.id});return tp({transactionId:m.transactionId,results:_},T,S)}))},_create:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=tp({},t,e),s=PM({returnFirst:!0,returnDocuments:!0},n);return this.dataRequest("mutate",{mutations:[i]},s)}},kM=Vt,BM=yr;function Ng(r){this.request=r.request.bind(r)}kM(Ng.prototype,{create:function(e,t){return this._modify("PUT",e,t)},edit:function(e,t){return this._modify("PATCH",e,t)},delete:function(e){return this._modify("DELETE",e)},list:function(){return this.request({uri:"/datasets"})},_modify:function(e,t,n){return BM.dataset(t),this.request({method:e,uri:"/datasets/".concat(t),body:n})}});var VM=Ng,GM=Vt;function Ug(r){this.client=r}GM(Ug.prototype,{list:function(){return this.client.request({uri:"/projects"})},getById:function(e){return this.client.request({uri:"/projects/".concat(e)})}});var HM=Ug,WM=function(r){var e=[];for(var t in r)r.hasOwnProperty(t)&&e.push("".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(r[t])));return e.length>0?"?".concat(e.join("&")):""};function $M(r,e){return YM(r)||XM(r,e)||jM(r,e)||qM()}function qM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jM(r,e){if(!!r){if(typeof r=="string")return rp(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return rp(r,e)}}function rp(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function XM(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],i=!0,s=!1,a,o;try{for(t=t.call(r);!(i=(a=t.next()).done)&&(n.push(a.value),!(e&&n.length===e));i=!0);}catch(l){s=!0,o=l}finally{try{!i&&t.return!=null&&t.return()}finally{if(s)throw o}}return n}}function YM(r){if(Array.isArray(r))return r}var zg=Vt,kg=aa,ZM=kg.map,KM=kg.filter,JM=WM,Ha=yr;function Bg(r){this.client=r}function QM(r,e){return typeof window>"u"||!(e instanceof window.File)?r:zg({filename:r.preserveFilename===!1?void 0:e.name,contentType:e.type},r)}zg(Bg.prototype,{upload:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Ha.validateAssetType(e);var i=n.extract||void 0;i&&!i.length&&(i=["none"]);var s=Ha.hasDataset(this.client.clientConfig),a=e==="image"?"images":"files",o=QM(n,t),l=o.tag,c=o.label,u=o.title,f=o.description,h=o.creditLine,p=o.filename,g=o.source,d={label:c,title:u,description:f,filename:p,meta:i,creditLine:h};g&&(d.sourceId=g.id,d.sourceName=g.name,d.sourceUrl=g.url);var m=this.client._requestObservable({tag:l,method:"POST",timeout:o.timeout||0,uri:"/assets/".concat(a,"/").concat(s),headers:o.contentType?{"Content-Type":o.contentType}:{},query:d,body:t});return this.client.isPromiseAPI()?m.pipe(KM(function(_){return _.type==="response"}),ZM(function(_){return _.body.document})).toPromise():m},delete:function(e,t){console.warn("client.assets.delete() is deprecated, please use client.delete(<document-id>)");var n=t||"";return/^(image|file)-/.test(n)?e._id&&(n=e._id):n="".concat(e,"-").concat(n),Ha.hasDataset(this.client.clientConfig),this.client.delete(n)},getImageUrl:function(e,t){var n=e._ref||e;if(typeof n!="string")throw new Error("getImageUrl() needs either an object with a _ref, or a string with an asset document ID");if(!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(n))throw new Error('Unsupported asset ID "'.concat(n,'". URL generation only works for auto-generated IDs.'));var i=n.split("-"),s=$M(i,4),a=s[1],o=s[2],l=s[3];Ha.hasDataset(this.client.clientConfig);var c=this.client.clientConfig,u=c.projectId,f=c.dataset,h=t?JM(t):"";return"https://cdn.sanity.io/images/".concat(u,"/").concat(f,"/").concat(a,"-").concat(o,".").concat(l).concat(h)}});var e2=Bg,t2=Vt;function Vg(r){this.client=r}t2(Vg.prototype,{getById:function(e){return this.client.request({uri:"/users/".concat(e)})}});var n2=Vg,i2=Vt;function Gg(r){this.client=r}i2(Gg.prototype,{getLoginProviders:function(){return this.client.request({uri:"/auth/providers"})},logout:function(){return this.client.request({uri:"/auth/logout",method:"POST"})}});var r2=Gg,Hg={exports:{}},s2=function(){var e=[];return{subscribe:t,publish:n};function t(i){return e.push(i),function(){var a=e.indexOf(i);a>-1&&e.splice(a,1)}}function n(){for(var i=0;i<e.length;i++)e[i].apply(null,arguments)}},o2=function(r){var e=function(n,i){for(var s=n==="onError",a=i,o=arguments.length,l=new Array(o>2?o-2:0),c=2;c<o;c++)l[c-2]=arguments[c];for(var u=0;u<r[n].length;u++){var f=r[n][u];if(a=f.apply(void 0,[a].concat(l)),s&&!a)break}return a};return e},a2=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0},Bf={},l2=Object.prototype.hasOwnProperty,c2;function sp(r){try{return decodeURIComponent(r.replace(/\+/g," "))}catch{return null}}function op(r){try{return encodeURIComponent(r)}catch{return null}}function u2(r){for(var e=/([^=?#&]+)=?([^&]*)/g,t={},n;n=e.exec(r);){var i=sp(n[1]),s=sp(n[2]);i===null||s===null||i in t||(t[i]=s)}return t}function f2(r,e){e=e||"";var t=[],n,i;typeof e!="string"&&(e="?");for(i in r)if(l2.call(r,i)){if(n=r[i],!n&&(n===null||n===c2||isNaN(n))&&(n=""),i=op(i),n=op(n),i===null||n===null)continue;t.push(i+"="+n)}return t.length?e+t.join("&"):""}Bf.stringify=f2;Bf.parse=u2;var Wg=a2,Vl=Bf,h2=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,$g=/[\n\r\t]/g,d2=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,qg=/:\d+$/,p2=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,m2=/^[a-zA-Z]:/;function Vf(r){return(r||"").toString().replace(h2,"")}var Wu=[["#","hash"],["?","query"],function(e,t){return Si(t.protocol)?e.replace(/\\/g,"/"):e},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],ap={hash:1,query:1};function jg(r){var e;typeof window<"u"?e=window:typeof Xn<"u"?e=Xn:typeof self<"u"?e=self:e={};var t=e.location||{};r=r||t;var n={},i=typeof r,s;if(r.protocol==="blob:")n=new Mi(unescape(r.pathname),{});else if(i==="string"){n=new Mi(r,{});for(s in ap)delete n[s]}else if(i==="object"){for(s in r)s in ap||(n[s]=r[s]);n.slashes===void 0&&(n.slashes=d2.test(r.href))}return n}function Si(r){return r==="file:"||r==="ftp:"||r==="http:"||r==="https:"||r==="ws:"||r==="wss:"}function Xg(r,e){r=Vf(r),r=r.replace($g,""),e=e||{};var t=p2.exec(r),n=t[1]?t[1].toLowerCase():"",i=!!t[2],s=!!t[3],a=0,o;return i?s?(o=t[2]+t[3]+t[4],a=t[2].length+t[3].length):(o=t[2]+t[4],a=t[2].length):s?(o=t[3]+t[4],a=t[3].length):o=t[4],n==="file:"?a>=2&&(o=o.slice(2)):Si(n)?o=t[4]:n?i&&(o=o.slice(2)):a>=2&&Si(e.protocol)&&(o=t[4]),{protocol:n,slashes:i||Si(n),slashesCount:a,rest:o}}function g2(r,e){if(r==="")return e;for(var t=(e||"/").split("/").slice(0,-1).concat(r.split("/")),n=t.length,i=t[n-1],s=!1,a=0;n--;)t[n]==="."?t.splice(n,1):t[n]===".."?(t.splice(n,1),a++):a&&(n===0&&(s=!0),t.splice(n,1),a--);return s&&t.unshift(""),(i==="."||i==="..")&&t.push(""),t.join("/")}function Mi(r,e,t){if(r=Vf(r),r=r.replace($g,""),!(this instanceof Mi))return new Mi(r,e,t);var n,i,s,a,o,l,c=Wu.slice(),u=typeof e,f=this,h=0;for(u!=="object"&&u!=="string"&&(t=e,e=null),t&&typeof t!="function"&&(t=Vl.parse),e=jg(e),i=Xg(r||"",e),n=!i.protocol&&!i.slashes,f.slashes=i.slashes||n&&e.slashes,f.protocol=i.protocol||e.protocol||"",r=i.rest,(i.protocol==="file:"&&(i.slashesCount!==2||m2.test(r))||!i.slashes&&(i.protocol||i.slashesCount<2||!Si(f.protocol)))&&(c[3]=[/(.*)/,"pathname"]);h<c.length;h++){if(a=c[h],typeof a=="function"){r=a(r,f);continue}s=a[0],l=a[1],s!==s?f[l]=r:typeof s=="string"?(o=s==="@"?r.lastIndexOf(s):r.indexOf(s),~o&&(typeof a[2]=="number"?(f[l]=r.slice(0,o),r=r.slice(o+a[2])):(f[l]=r.slice(o),r=r.slice(0,o)))):(o=s.exec(r))&&(f[l]=o[1],r=r.slice(0,o.index)),f[l]=f[l]||n&&a[3]&&e[l]||"",a[4]&&(f[l]=f[l].toLowerCase())}t&&(f.query=t(f.query)),n&&e.slashes&&f.pathname.charAt(0)!=="/"&&(f.pathname!==""||e.pathname!=="")&&(f.pathname=g2(f.pathname,e.pathname)),f.pathname.charAt(0)!=="/"&&Si(f.protocol)&&(f.pathname="/"+f.pathname),Wg(f.port,f.protocol)||(f.host=f.hostname,f.port=""),f.username=f.password="",f.auth&&(o=f.auth.indexOf(":"),~o?(f.username=f.auth.slice(0,o),f.username=encodeURIComponent(decodeURIComponent(f.username)),f.password=f.auth.slice(o+1),f.password=encodeURIComponent(decodeURIComponent(f.password))):f.username=encodeURIComponent(decodeURIComponent(f.auth)),f.auth=f.password?f.username+":"+f.password:f.username),f.origin=f.protocol!=="file:"&&Si(f.protocol)&&f.host?f.protocol+"//"+f.host:"null",f.href=f.toString()}function _2(r,e,t){var n=this;switch(r){case"query":typeof e=="string"&&e.length&&(e=(t||Vl.parse)(e)),n[r]=e;break;case"port":n[r]=e,Wg(e,n.protocol)?e&&(n.host=n.hostname+":"+e):(n.host=n.hostname,n[r]="");break;case"hostname":n[r]=e,n.port&&(e+=":"+n.port),n.host=e;break;case"host":n[r]=e,qg.test(e)?(e=e.split(":"),n.port=e.pop(),n.hostname=e.join(":")):(n.hostname=e,n.port="");break;case"protocol":n.protocol=e.toLowerCase(),n.slashes=!t;break;case"pathname":case"hash":if(e){var i=r==="pathname"?"/":"#";n[r]=e.charAt(0)!==i?i+e:e}else n[r]=e;break;case"username":case"password":n[r]=encodeURIComponent(e);break;case"auth":var s=e.indexOf(":");~s?(n.username=e.slice(0,s),n.username=encodeURIComponent(decodeURIComponent(n.username)),n.password=e.slice(s+1),n.password=encodeURIComponent(decodeURIComponent(n.password))):n.username=encodeURIComponent(decodeURIComponent(e))}for(var a=0;a<Wu.length;a++){var o=Wu[a];o[4]&&(n[o[1]]=n[o[1]].toLowerCase())}return n.auth=n.password?n.username+":"+n.password:n.username,n.origin=n.protocol!=="file:"&&Si(n.protocol)&&n.host?n.protocol+"//"+n.host:"null",n.href=n.toString(),n}function v2(r){(!r||typeof r!="function")&&(r=Vl.stringify);var e,t=this,n=t.host,i=t.protocol;i&&i.charAt(i.length-1)!==":"&&(i+=":");var s=i+(t.protocol&&t.slashes||Si(t.protocol)?"//":"");return t.username?(s+=t.username,t.password&&(s+=":"+t.password),s+="@"):t.password?(s+=":"+t.password,s+="@"):t.protocol!=="file:"&&Si(t.protocol)&&!n&&t.pathname!=="/"&&(s+="@"),(n[n.length-1]===":"||qg.test(t.hostname)&&!t.port)&&(n+=":"),s+=n+t.pathname,e=typeof t.query=="object"?r(t.query):t.query,e&&(s+=e.charAt(0)!=="?"?"?"+e:e),t.hash&&(s+=t.hash),s}Mi.prototype={set:_2,toString:v2};Mi.extractProtocol=Xg;Mi.location=jg;Mi.trimLeft=Vf;Mi.qs=Vl;var x2=Mi,Qc=Vt,y2=x2,b2=typeof navigator>"u"?!1:navigator.product==="ReactNative",S2=Object.prototype.hasOwnProperty,$u={timeout:b2?6e4:12e4},w2=function(r){var e=typeof r=="string"?Qc({url:r},$u):Qc({},$u,r),t=y2(e.url,{},!0);return e.timeout=Yg(e.timeout),e.query&&(t.query=Qc({},t.query,T2(e.query))),e.method=e.body&&!e.method?"POST":(e.method||"GET").toUpperCase(),e.url=t.toString(M2),e};function M2(r){var e=[];for(var t in r)S2.call(r,t)&&n(t,r[t]);return e.length?e.join("&"):"";function n(i,s){Array.isArray(s)?s.forEach(function(a){return n(i,a)}):e.push([i,s].map(encodeURIComponent).join("="))}}function Yg(r){if(r===!1||r===0)return!1;if(r.connect||r.socket)return r;var e=Number(r);return isNaN(e)?Yg($u.timeout):{connect:e,socket:e}}function T2(r){var e={};for(var t in r)r[t]!==void 0&&(e[t]=r[t]);return e}var E2=/^https?:\/\//i,C2=function(r){if(!E2.test(r.url))throw new Error('"'.concat(r.url,'" is not a valid URL'))},Zg={exports:{}},lp=/^(?:(?:(?:([^:\/#\?]+:)?(?:(?:\/\/)((?:((?:[^:@\/#\?]+)(?:\:(?:[^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/,A2={regex:lp,parse:function(r){var e=lp.exec(r);return e?{protocol:(e[1]||"").toLowerCase()||void 0,hostname:(e[5]||"").toLowerCase()||void 0,port:e[6]||void 0}:{}}},cp=A2,P2=function(r,e,t){if(r===e)return!0;var n=cp.parse(r,!1,!0),i=cp.parse(e,!1,!0),s=n.port|0||(n.protocol==="https"?443:80),a=i.port|0||(i.protocol==="https"?443:80),o={proto:n.protocol===i.protocol,hostname:n.hostname===i.hostname,port:s===a};return o.proto&&o.hostname&&(o.port||t)},eu=function(r){return r.replace(/^\s+|\s+$/g,"")},R2=function(r){return Object.prototype.toString.call(r)==="[object Array]"},D2=function(r){if(!r)return{};for(var e={},t=eu(r).split(`
`),n=0;n<t.length;n++){var i=t[n],s=i.indexOf(":"),a=eu(i.slice(0,s)).toLowerCase(),o=eu(i.slice(s+1));typeof e[a]>"u"?e[a]=o:R2(e[a])?e[a].push(o):e[a]=[e[a],o]}return e};function fo(){this.readyState=0}fo.prototype.open=function(r,e){this._method=r,this._url=e,this._resHeaders="",this.readyState=1,this.onreadystatechange()};fo.prototype.abort=function(){this._controller&&this._controller.abort()};fo.prototype.getAllResponseHeaders=function(){return this._resHeaders};fo.prototype.setRequestHeader=function(r,e){this._headers=this._headers||{},this._headers[r]=e};fo.prototype.send=function(r){var e=this,t=this._controller=typeof AbortController=="function"&&new AbortController,n=this.responseType!=="arraybuffer",i={method:this._method,headers:this._headers,signal:t&&t.signal,body:r};typeof window<"u"&&(i.credentials=this.withCredentials?"include":"omit"),fetch(this._url,i).then(function(s){return s.headers.forEach(function(a,o){e._resHeaders+="".concat(o,": ").concat(a,`\r
`)}),e.status=s.status,e.statusText=s.statusText,e.readyState=3,n?s.text():s.arrayBuffer()}).then(function(s){n?e.responseText=s:e.response=s,e.readyState=4,e.onreadystatechange()}).catch(function(s){if(s.name==="AbortError"){e.onabort();return}e.onerror(s)})};var L2=fo,I2=P2,O2=D2,up=L2,F2=function(){},tr=typeof window>"u"?void 0:window,fp=tr?"xhr":"fetch",Gl=typeof XMLHttpRequest=="function"?XMLHttpRequest:F2,N2="withCredentials"in new Gl,U2=typeof XDomainRequest>"u"?void 0:XDomainRequest,Kg=N2?Gl:U2;tr||(Gl=up,Kg=up);var z2=function(r,e){var t=r.options,n=r.applyMiddleware("finalizeOptions",t),i={},s=tr&&tr.location&&!I2(tr.location.href,n.url),a=r.applyMiddleware("interceptRequest",void 0,{adapter:fp,context:r});if(a){var o=setTimeout(e,0,null,a),l=function(){return clearTimeout(o)};return{abort:l}}var c=s?new Kg:new Gl,u=tr&&tr.XDomainRequest&&c instanceof tr.XDomainRequest,f=n.headers,h=n.timeout,p=!1,g=!1,d=!1;c.onerror=y,c.ontimeout=y,c.onabort=function(){x(!0),p=!0},c.onprogress=function(){};var m=u?"onload":"onreadystatechange";if(c[m]=function(){b(),!(p||c.readyState!==4&&!u)&&c.status!==0&&v()},c.open(n.method,n.url,!0),c.withCredentials=!!n.withCredentials,f&&c.setRequestHeader)for(var _ in f)f.hasOwnProperty(_)&&c.setRequestHeader(_,f[_]);else if(f&&u)throw new Error("Headers cannot be set on an XDomainRequest object");return n.rawBody&&(c.responseType="arraybuffer"),r.applyMiddleware("onRequest",{options:n,adapter:fp,request:c,context:r}),c.send(n.body||null),h&&(i.connect=setTimeout(function(){return S("ETIMEDOUT")},h.connect)),{abort:T};function T(){p=!0,c&&c.abort()}function S(M){d=!0,c.abort();var R=new Error(M==="ESOCKETTIMEDOUT"?"Socket timed out on request to ".concat(n.url):"Connection timed out on request to ".concat(n.url));R.code=M,r.channels.error.publish(R)}function b(){!h||(x(),i.socket=setTimeout(function(){return S("ESOCKETTIMEDOUT")},h.socket))}function x(M){(M||p||c.readyState>=2&&i.connect)&&clearTimeout(i.connect),i.socket&&clearTimeout(i.socket)}function y(M){if(!g){x(!0),g=!0,c=null;var R=M||new Error("Network error while attempting to reach ".concat(n.url));R.isNetworkError=!0,R.request=n,e(R)}}function w(){var M=c.status,R=c.statusText;if(u&&M===void 0)M=200;else{if(M>12e3&&M<12156)return y();M=c.status===1223?204:c.status,R=c.status===1223?"No Content":R}return{body:c.response||c.responseText,url:n.url,method:n.method,headers:u?{}:O2(c.getAllResponseHeaders()),statusCode:M,statusMessage:R}}function v(){if(!(p||g||d)){if(c.status===0){y(new Error("Unknown XHR error"));return}x(),g=!0,e(null,w())}}};(function(r){r.exports=z2})(Zg);var k2=s2,B2=o2,V2=w2,G2=C2,H2=Zg.exports,W2=["request","response","progress","error","abort"],hp=["processOptions","validateOptions","interceptRequest","finalizeOptions","onRequest","onResponse","onError","onReturn","onHeaders"],$2=function r(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H2,n=[],i=hp.reduce(function(a,o){return a[o]=a[o]||[],a},{processOptions:[V2],validateOptions:[G2]});function s(a){var o=W2.reduce(function(d,m){return d[m]=k2(),d},{}),l=B2(i),c=l("processOptions",a);l("validateOptions",c);var u={options:c,channels:o,applyMiddleware:l},f=null,h=o.request.subscribe(function(d){f=t(d,function(m,_){return g(m,_,d)})});o.abort.subscribe(function(){h(),f&&f.abort()});var p=l("onReturn",o,u);return p===o&&o.request.publish(u),p;function g(d,m,_){var T=d,S=m;if(!T)try{S=l("onResponse",m,_)}catch(b){S=null,T=b}T=T&&l("onError",T,_),T?o.error.publish(T):S&&o.response.publish(S)}}return s.use=function(o){if(!o)throw new Error("Tried to add middleware that resolved to falsey value");if(typeof o=="function")throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");if(o.onReturn&&i.onReturn.length>0)throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");return hp.forEach(function(l){o[l]&&i[l].push(o[l])}),n.push(o),s},s.clone=function(){return r(n)},e.forEach(s.use),s};(function(r){r.exports=$2})(Hg);var Is={exports:{}};typeof globalThis<"u"?Is.exports=globalThis:typeof window<"u"?Is.exports=window:typeof Xn<"u"?Is.exports=Xn:typeof self<"u"?Is.exports=self:Is.exports={};var q2=Is.exports,dp=Vt,j2=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.implementation||q2.Observable;if(!e)throw new Error("`Observable` is not available in global scope, and no implementation was passed");return{onReturn:function(n,i){return new e(function(s){return n.error.subscribe(function(a){return s.error(a)}),n.progress.subscribe(function(a){return s.next(dp({type:"progress"},a))}),n.response.subscribe(function(a){s.next(dp({type:"response"},a)),s.complete()}),n.request.publish(i),function(){return n.abort.publish()}})}}};/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var X2=function(e){return e!=null&&typeof e=="object"&&Array.isArray(e)===!1};/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var Y2=X2;function pp(r){return Y2(r)===!0&&Object.prototype.toString.call(r)==="[object Object]"}var Z2=function(e){var t,n;return!(pp(e)===!1||(t=e.constructor,typeof t!="function")||(n=t.prototype,pp(n)===!1)||n.hasOwnProperty("isPrototypeOf")===!1)};function qu(r){return qu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qu(r)}var mp=Vt,K2=Z2,J2=["boolean","string","number"],Q2=function(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)},e3=function(){return{processOptions:function(e){var t=e.body;if(!t)return e;var n=typeof t.pipe=="function",i=!n&&!Q2(t)&&(J2.indexOf(qu(t))!==-1||Array.isArray(t)||K2(t));return i?mp({},e,{body:JSON.stringify(e.body),headers:mp({},e.headers,{"Content-Type":"application/json"})}):e}}},tu=Vt,t3=function(r){return{onResponse:function(t){var n=t.headers["content-type"]||"",i=r&&r.force||n.indexOf("application/json")!==-1;return!t.body||!n||!i?t:tu({},t,{body:n3(t.body)})},processOptions:function(t){return tu({},t,{headers:tu({Accept:"application/json"},t.headers)})}}};function n3(r){try{return JSON.parse(r)}catch(e){throw e.message="Failed to parsed response body as JSON: ".concat(e.message),e}}var Jg={exports:{}},i3=function(){return{onRequest:function(e){if(e.adapter!=="xhr")return;var t=e.request,n=e.context;"upload"in t&&"onprogress"in t.upload&&(t.upload.onprogress=i("upload")),"onprogress"in t&&(t.onprogress=i("download"));function i(s){return function(a){var o=a.lengthComputable?a.loaded/a.total*100:-1;n.channels.progress.publish({stage:s,percent:o,total:a.total,loaded:a.loaded,lengthComputable:a.lengthComputable})}}}}};(function(r){r.exports=i3})(Jg);var Gf={},ju={exports:{}};(function(r,e){var t=typeof Reflect<"u"?Reflect.construct:void 0,n=Object.defineProperty,i=Error.captureStackTrace;i===void 0&&(i=function(c){var u=new Error;n(c,"stack",{configurable:!0,get:function(){var h=u.stack;return n(this,"stack",{configurable:!0,value:h,writable:!0}),h},set:function(h){n(c,"stack",{configurable:!0,value:h,writable:!0})}})});function s(l){l!==void 0&&n(this,"message",{configurable:!0,value:l,writable:!0});var c=this.constructor.name;c!==void 0&&c!==this.name&&n(this,"name",{configurable:!0,value:c,writable:!0}),i(this,this.constructor)}s.prototype=Object.create(Error.prototype,{constructor:{configurable:!0,value:s,writable:!0}});var a=function(){function l(u,f){return n(u,"name",{configurable:!0,value:f})}try{var c=function(){};if(l(c,"foo"),c.name==="foo")return l}catch{}}();function o(l,c){if(c==null||c===Error)c=s;else if(typeof c!="function")throw new TypeError("super_ should be a function");var u;if(typeof l=="string")u=l,l=t!==void 0?function(){return t(c,arguments,this.constructor)}:function(){c.apply(this,arguments)},a!==void 0&&(a(l,u),u=void 0);else if(typeof l!="function")throw new TypeError("constructor should be either a string or a function");l.super_=l.super=c;var f={constructor:{configurable:!0,value:l,writable:!0}};return u!==void 0&&(f.name={configurable:!0,value:u,writable:!0}),l.prototype=Object.create(c.prototype,f),l}e=r.exports=o,e.BaseError=s})(ju,ju.exports);var Qg=ju.exports,e_=Vt;function Hf(r){var e=t_(r);Hf.super.call(this,e.message),e_(this,e)}function Wf(r){var e=t_(r);Wf.super.call(this,e.message),e_(this,e)}function t_(r){var e=r.body,t={response:r,statusCode:r.statusCode,responseBody:s3(e,r)};return e.error&&e.message?(t.message="".concat(e.error," - ").concat(e.message),t):e.error&&e.error.description?(t.message=e.error.description,t.details=e.error,t):(t.message=e.error||e.message||r3(r),t)}function r3(r){var e=r.statusMessage?" ".concat(r.statusMessage):"";return"".concat(r.method,"-request to ").concat(r.url," resulted in HTTP ").concat(r.statusCode).concat(e)}function s3(r,e){var t=(e.headers["content-type"]||"").toLowerCase(),n=t.indexOf("application/json")!==-1;return n?JSON.stringify(r,null,2):r}Qg(Hf);Qg(Wf);Gf.ClientError=Hf;Gf.ServerError=Wf;var o3=[],a3=Hg.exports,l3=Vt,c3=j2,u3=e3,f3=t3,h3=Jg.exports,d3=aa,p3=d3.Observable,n_=Gf,i_=n_.ClientError,r_=n_.ServerError,m3={onResponse:function(e){if(e.statusCode>=500)throw new r_(e);if(e.statusCode>=400)throw new i_(e);return e}},g3={onResponse:function(e){var t=e.headers["x-sanity-warning"],n=Array.isArray(t)?t:[t];return n.filter(Boolean).forEach(function(i){return console.warn(i)}),e}},_3=o3,v3=_3.concat([g3,u3(),f3(),h3(),m3,c3({implementation:p3})]),s_=a3(v3);function Hl(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:s_;return e(l3({maxRedirects:0},r))}Hl.defaultRequester=s_;Hl.ClientError=i_;Hl.ServerError=r_;var x3=Hl,gp=Vt,y3="X-Sanity-Project-ID",b3=function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t={},n=e.token||r.token;n&&(t.Authorization="Bearer ".concat(n)),!e.useGlobalApi&&!r.useProjectHostname&&r.projectId&&(t[y3]=r.projectId);var i=Boolean(typeof e.withCredentials>"u"?r.token||r.withCredentials:e.withCredentials),s=typeof e.timeout>"u"?r.timeout:e.timeout;return gp({},e,{headers:gp({},t,e.headers||{}),timeout:typeof s>"u"?5*60*1e3:s,proxy:e.proxy||r.proxy,json:!0,withCredentials:i})},o_={},S3="https://docs.sanity.io/help/",a_=function(e){return S3+e},Wl={},w3=function(r){var e=!1,t;return function(){return e||(t=r.apply(void 0,arguments),e=!0),t}},$f=a_,M3=w3,qf=function(e){return M3(function(){for(var t,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=console).warn.apply(t,[e.join(" ")].concat(i))})};Wl.printCdnWarning=qf(["You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and","cheaper. Think about it! For more info, see ".concat($f("js-client-cdn-configuration"),"."),"To hide this warning, please set the `useCdn` option to either `true` or `false` when creating","the client."]);Wl.printBrowserTokenWarning=qf(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.","See ".concat($f("js-client-browser-token")," for more information and how to hide this warning.")]);Wl.printNoApiVersionSpecifiedWarning=qf(["Using the Sanity client without specifying an API version is deprecated.","See ".concat($f("js-client-api-version"))]);(function(r){var e=Vt,t=a_,n=yr,i=Wl,s="apicdn.sanity.io",a={apiHost:"https://api.sanity.io",apiVersion:"1",useProjectHostname:!0,isPromiseAPI:!0},o=["localhost","127.0.0.1","0.0.0.0"],l=function(u){return o.indexOf(u)!==-1};r.defaultConfig=a,r.initConfig=function(c,u){var f=e({},u,c);f.apiVersion||i.printNoApiVersionSpecifiedWarning();var h=e({},a,f),p=h.useProjectHostname;if(typeof Promise>"u"){var g=t("js-client-promise-polyfill");throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(g))}if(p&&!h.projectId)throw new Error("Configuration must contain `projectId`");var d=typeof window<"u"&&window.location&&window.location.hostname,m=d&&l(window.location.hostname);d&&m&&h.token&&h.ignoreBrowserTokenWarning!==!0?i.printBrowserTokenWarning():typeof h.useCdn>"u"&&i.printCdnWarning(),p&&n.projectId(h.projectId),h.dataset&&n.dataset(h.dataset),"requestTagPrefix"in h&&(h.requestTagPrefix=h.requestTagPrefix?n.requestTag(h.requestTagPrefix).replace(/\.+$/,""):void 0),h.apiVersion="".concat(h.apiVersion).replace(/^v/,""),h.isDefaultApi=h.apiHost===a.apiHost,h.useCdn=Boolean(h.useCdn)&&!h.withCredentials,r.validateApiVersion(h.apiVersion);var _=h.apiHost.split("://",2),T=_[0],S=_[1],b=h.isDefaultApi?s:S;return h.useProjectHostname?(h.url="".concat(T,"://").concat(h.projectId,".").concat(S,"/v").concat(h.apiVersion),h.cdnUrl="".concat(T,"://").concat(h.projectId,".").concat(b,"/v").concat(h.apiVersion)):(h.url="".concat(h.apiHost,"/v").concat(h.apiVersion),h.cdnUrl=h.url),h},r.validateApiVersion=function(u){if(!(u==="1"||u==="X")){var f=new Date(u),h=/^\d{4}-\d{2}-\d{2}$/.test(u)&&f instanceof Date&&f.getTime()>0;if(!h)throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`")}}})(o_);function _p(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function nu(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?_p(Object(t),!0).forEach(function(n){T3(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):_p(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function T3(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var ks=Vt,jf=aa,E3=jf.Observable,C3=jf.map,A3=jf.filter,P3=kf,R3=Lg,D3=zM,L3=VM,I3=HM,O3=e2,F3=n2,N3=r2,$l=x3,U3=b3,l_=o_,z3=l_.defaultConfig,k3=l_.initConfig,B3=yr,V3=function(e){return e.toPromise()};function Rn(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:z3;if(!(this instanceof Rn))return new Rn(r);if(this.config(r),this.assets=new O3(this),this.datasets=new L3(this),this.projects=new I3(this),this.users=new F3(this),this.auth=new N3(this),this.clientConfig.isPromiseAPI){var e=ks({},this.clientConfig,{isPromiseAPI:!1});this.observable=new Rn(e)}}ks(Rn.prototype,D3);ks(Rn.prototype,{clone:function(){return new Rn(this.config())},config:function(e){if(typeof e>"u")return ks({},this.clientConfig);if(this.clientConfig&&this.clientConfig.allowReconfigure===!1)throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");if(this.observable){var t=ks({},e,{isPromiseAPI:!1});this.observable.config(t)}return this.clientConfig=k3(e,this.clientConfig||{}),this},withConfig:function(e){return new Rn(nu(nu({},this.config()),e))},getUrl:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=t?this.clientConfig.cdnUrl:this.clientConfig.url;return"".concat(n,"/").concat(e.replace(/^\//,""))},isPromiseAPI:function(){return this.clientConfig.isPromiseAPI},_requestObservable:function(e){var t=this,n=e.url||e.uri,i=typeof e.canUseCdn>"u"?["GET","HEAD"].indexOf(e.method||"GET")>=0&&n.indexOf("/data/")===0:e.canUseCdn,s=this.clientConfig.useCdn&&i,a=e.tag&&this.clientConfig.requestTagPrefix?[this.clientConfig.requestTagPrefix,e.tag].join("."):e.tag||this.clientConfig.requestTagPrefix;a&&(e.query=nu({tag:B3.requestTag(a)},e.query));var o=U3(this.clientConfig,ks({},e,{url:this.getUrl(n,s)}));return new E3(function(l){return $l(o,t.clientConfig.requester).subscribe(l)})},request:function(e){var t=this._requestObservable(e).pipe(A3(function(n){return n.type==="response"}),C3(function(n){return n.body}));return this.isPromiseAPI()?V3(t):t}});Rn.Patch=P3;Rn.Transaction=R3;Rn.ClientError=$l.ClientError;Rn.ServerError=$l.ServerError;Rn.requester=$l.defaultRequester;var G3=Rn;const la=G3({projectId:"e4i5hioy",dataset:"production",apiVersion:"2021-03-25",token:"skWuxyjDoP9ueKwiEbMqPMJCHI2epw0bTmCr81GtEcxzPRBiwn0vaagHnOdbwoFNv8ByjWa7oZvOh0FbMNwT4dIXLmnkVEifgmbDrstuYlVg4y0Gjj5JDk1bAiavnINS0V1rWZ4aHfN8fXSp2o65vjINskHmoP0OqhzgJHbX4UFg7ELw6htB",useCdn:!0}),H3="_sectionTitleWrapper_xvl3d_1",W3="_right_xvl3d_13",$3="_left_xvl3d_18",q3="_center_xvl3d_23",j3="_sectionTitleWrapperText_xvl3d_30",X3="_sectionTitle_xvl3d_1",Y3="_sectionLabel_xvl3d_46",Z3="_tickerTextWrapper_xvl3d_53",K3="_tickerText_xvl3d_53",Ki={sectionTitleWrapper:H3,right:W3,left:$3,center:q3,sectionTitleWrapperText:j3,sectionTitle:X3,sectionLabel:Y3,tickerTextWrapper:Z3,tickerText:K3},J3=Mt("<div><div><p></p></div><div><div><p></p><p></p><p></p><p></p><p></p></div></div></div>");gt.registerPlugin(Xe);function ql(r){let e;return Yn(()=>{switch(r.alignment){case"right":gt.fromTo(e,{x:"100%"},{x:"0%",scrollTrigger:{trigger:r.container,start:"top top",end:"bottom bottom",pin:e}});break;case"left":gt.fromTo(e,{x:"-100%"},{x:"0%",scrollTrigger:{trigger:r.container,start:"top top",end:"bottom bottom",pin:e}});break;case"center":gt.fromTo(e,{},{scrollTrigger:{trigger:r.container,start:"top center",end:"bottom bottom",pin:e}});break}}),(()=>{const t=J3.cloneNode(!0),n=t.firstChild,i=n.firstChild,s=n.nextSibling,a=s.firstChild,o=a.firstChild,l=o.nextSibling,c=l.nextSibling,u=c.nextSibling,f=u.nextSibling,h=e;return typeof h=="function"?bt(h,t):e=t,rt(i,()=>r.title),rt(o,()=>r.label),rt(l,()=>r.label),rt(c,()=>r.label),rt(u,()=>r.label),rt(f,()=>r.label),et(p=>{const g=r.textTitle?`${Ki.sectionTitleWrapper} ${Ki.sectionTitleWrapperText} ${Ki[r.alignment]}`:`${Ki.sectionTitleWrapper} ${Ki[r.alignment]}`,d=Ki.sectionTitle,m=r.textTitle?"h2":"h1",_=Ki.sectionLabel,T=Ki.tickerTextWrapper,S=r.textTitle?"utility":"h3",b=r.textTitle?"utility":"h3",x=r.textTitle?"utility":"h3",y=r.textTitle?"utility":"h3",w=r.textTitle?"utility":"h3";return g!==p._v$&&Ee(t,p._v$=g),d!==p._v$2&&Ee(n,p._v$2=d),m!==p._v$3&&Ee(i,p._v$3=m),_!==p._v$4&&Ee(s,p._v$4=_),T!==p._v$5&&Ee(a,p._v$5=T),S!==p._v$6&&Ee(o,p._v$6=S),b!==p._v$7&&Ee(l,p._v$7=b),x!==p._v$8&&Ee(c,p._v$8=x),y!==p._v$9&&Ee(u,p._v$9=y),w!==p._v$10&&Ee(f,p._v$10=w),p},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),t})()}const Q3="_projectCard_ofp90_2",eT="_projectCardInner_ofp90_5",tT="_projectImage_ofp90_10",nT="_projectTitle_ofp90_15",Wa={projectCard:Q3,projectCardInner:eT,projectImage:tT,projectTitle:nT},iT=Mt('<div><div><img><div><p class="utility"></p></div></div></div>');function rT(r){gt.registerPlugin(Xe);let e,t;return Yn(()=>{IE().effects(e,{lag:.3});const n=6,i=(Math.random()*2-1)*n,s=100,a=(window.innerWidth-s*2)/r.totalProjects*r.currentIndex-s,o=(window.innerHeight-s*2)/r.totalProjects*r.currentIndex-s;gt.fromTo(e,{rotate:i,x:a+100},{x:a,scrollTrigger:{trigger:e,start:`top top+=${o}`,end:"bottom bottom",endTrigger:r.container,pin:e,pinSpacer:!0,scrub:!0}}),Xe.create({trigger:e,start:"top center",end:"top top",endTrigger:r.container,onEnter:()=>{vp(r.name)},onEnterBack:()=>{vp(r.name)}})}),(()=>{const n=iT.cloneNode(!0),i=n.firstChild,s=i.firstChild,a=s.nextSibling,o=a.firstChild,l=e;typeof l=="function"?bt(l,n):e=n;const c=t;return typeof c=="function"?bt(c,i):t=i,rt(o,()=>r.name),et(u=>{const f=Wa.projectCard,h=Wa.projectCardInner,p=Wa.projectImage,g=r.imageUrl,d=Wa.projectTitle;return f!==u._v$&&Ee(n,u._v$=f),h!==u._v$2&&Ee(i,u._v$2=h),p!==u._v$3&&Ee(s,u._v$3=p),g!==u._v$4&&li(s,"src",u._v$4=g),d!==u._v$5&&Ee(a,u._v$5=d),u},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),n})()}const sT=Mt("<section><div></div></section>"),[oT,vp]=_r("Project");function aT(){let r,e;gt.registerPlugin(Xe);const[t,n]=_r();return(()=>{la.fetch('*[_type == "project"]{name, "imageUrl": image.asset->url}',{}).then(s=>{n(s)}).catch(s=>{console.log(s)})})(),Yn(()=>{uo(r,"var(--color-ink)"),Xe.create({trigger:e,start:"top top",end:"bottom bottom",pin:e,endTrigger:r})}),(()=>{const s=sT.cloneNode(!0),a=s.firstChild,o=r;typeof o=="function"?bt(o,s):r=s,rt(s,mt(ql,{title:"16",label:"Projects Launched",alignment:"right",container:r}),a);const l=e;return typeof l=="function"?bt(l,a):e=a,rt(a,oT),rt(s,mt(Qo,{get each(){return t()},children:(c,u)=>mt(rT,{get name(){return c.name},get imageUrl(){return c.imageUrl},get currentIndex(){return u()},get totalProjects(){return t().length},container:r})}),null),et(c=>{const u=Wd.launchesSection,f=Wd.activeProjectTitle;return u!==c._v$&&Ee(s,c._v$=u),f!==c._v$2&&Ee(a,c._v$2=f),c},{_v$:void 0,_v$2:void 0}),s})()}const lT="_teamMemberCard_y1miy_1",cT="_teamMemberName_y1miy_12",uT="_teamMemberTitle_y1miy_16",fT="_teamMemberImage_y1miy_20",hT="_textCircle_y1miy_27",$a={teamMemberCard:lT,teamMemberName:cT,teamMemberTitle:uT,teamMemberImage:fT,textCircle:hT},dT=Mt("<div><img><p></p><p></p></div>");function pT(r){let e;return Yn(()=>{let t=50;gt.from(e,{x:`${(Math.random()-.5)*2*t}%`,y:`${(Math.random()-.5)*2*t}%`,opacity:0,ease:qo.easeOut,duration:1,scrollTrigger:{trigger:e,start:"top bottom-=100",end:"bottom center",scrub:!0}})}),(()=>{const t=dT.cloneNode(!0),n=t.firstChild,i=n.nextSibling,s=i.nextSibling,a=e;return typeof a=="function"?bt(a,t):e=t,rt(i,()=>r.name),rt(s,()=>r.title),et(o=>{const l=$a.teamMemberCard,c=$a.teamMemberImage,u=r.imageUrl,f=`${$a.teamMemberName} h3`,h=`${$a.teamMemberTitle} utility`;return l!==o._v$&&Ee(t,o._v$=l),c!==o._v$2&&Ee(n,o._v$2=c),u!==o._v$3&&li(n,"src",o._v$3=u),f!==o._v$4&&Ee(i,o._v$4=f),h!==o._v$5&&Ee(s,o._v$5=h),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),t})()}const mT="_team_1fnff_1",gT="_teamMembersWrapper_1fnff_7",xp={team:mT,teamMembersWrapper:gT};var c_={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(Xn,function(){var t="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function n(y){var w=y.split("-"),v=w[1],M=w[2],R=w[3];if(!v||!M||!R)throw new Error("Malformed asset _ref '"+y+`'. Expected an id like "`+t+'".');var I=M.split("x"),G=I[0],U=I[1],L=+G,z=+U,H=isFinite(L)&&isFinite(z);if(!H)throw new Error("Malformed asset _ref '"+y+`'. Expected an id like "`+t+'".');return{id:v,width:L,height:z,format:R}}var i=function(y){var w=y;return w?typeof w._ref=="string":!1},s=function(y){var w=y;return w?typeof w._id=="string":!1},a=function(y){var w=y;return w&&w.asset?typeof w.asset.url=="string":!1};function o(y){if(!y)return null;var w;if(typeof y=="string"&&l(y))w={asset:{_ref:c(y)}};else if(typeof y=="string")w={asset:{_ref:y}};else if(i(y))w={asset:y};else if(s(y))w={asset:{_ref:y._id||""}};else if(a(y))w={asset:{_ref:c(y.asset.url)}};else if(typeof y.asset=="object")w=y;else return null;var v=y;return v.crop&&(w.crop=v.crop),v.hotspot&&(w.hotspot=v.hotspot),u(w)}function l(y){return/^https?:\/\//.test(""+y)}function c(y){var w=y.split("/").slice(-1);return("image-"+w[0]).replace(/\.([a-z]+)$/,"-$1")}function u(y){if(y.crop&&y.hotspot)return y;var w=Object.assign({},y);return w.crop||(w.crop={left:0,top:0,bottom:0,right:0}),w.hotspot||(w.hotspot={x:.5,y:.5,height:1,width:1}),w}var f=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function h(y){var w=Object.assign({},y||{}),v=w.source;delete w.source;var M=o(v);if(!M)throw new Error("Unable to resolve image URL from source ("+JSON.stringify(v)+")");var R=M.asset._ref||M.asset._id||"",I=n(R),G=Math.round(M.crop.left*I.width),U=Math.round(M.crop.top*I.height),L={left:G,top:U,width:Math.round(I.width-M.crop.right*I.width-G),height:Math.round(I.height-M.crop.bottom*I.height-U)},z=M.hotspot.height*I.height/2,H=M.hotspot.width*I.width/2,$=M.hotspot.x*I.width,V=M.hotspot.y*I.height,F={left:$-H,top:V-z,right:$+H,bottom:V+z};return w.rect||w.focalPoint||w.ignoreImageParams||w.crop||(w=Object.assign({},w,g({crop:L,hotspot:F},w))),p(Object.assign({},w,{asset:I}))}function p(y){var w=y.baseUrl||"https://cdn.sanity.io",v=y.asset.id+"-"+y.asset.width+"x"+y.asset.height+"."+y.asset.format,M=w+"/images/"+y.projectId+"/"+y.dataset+"/"+v,R=[];if(y.rect){var I=y.rect,G=I.left,U=I.top,L=I.width,z=I.height,H=G!==0||U!==0||z!==y.asset.height||L!==y.asset.width;H&&R.push("rect="+G+","+U+","+L+","+z)}y.bg&&R.push("bg="+y.bg),y.focalPoint&&(R.push("fp-x="+y.focalPoint.x),R.push("fp-y="+y.focalPoint.y));var $=[y.flipHorizontal&&"h",y.flipVertical&&"v"].filter(Boolean).join("");return $&&R.push("flip="+$),f.forEach(function(V){var F=V[0],P=V[1];typeof y[F]<"u"?R.push(P+"="+encodeURIComponent(y[F])):typeof y[P]<"u"&&R.push(P+"="+encodeURIComponent(y[P]))}),R.length===0?M:M+"?"+R.join("&")}function g(y,w){var v,M=w.width,R=w.height;if(!(M&&R))return{width:M,height:R,rect:y.crop};var I=y.crop,G=y.hotspot,U=M/R,L=I.width/I.height;if(L>U){var z=Math.round(I.height),H=Math.round(z*U),$=Math.max(0,Math.round(I.top)),V=Math.round((G.right-G.left)/2+G.left),F=Math.max(0,Math.round(V-H/2));F<I.left?F=I.left:F+H>I.left+I.width&&(F=I.left+I.width-H),v={left:F,top:$,width:H,height:z}}else{var P=I.width,se=Math.round(P/U),oe=Math.max(0,Math.round(I.left)),le=Math.round((G.bottom-G.top)/2+G.top),he=Math.max(0,Math.round(le-se/2));he<I.top?he=I.top:he+se>I.top+I.height&&(he=I.top+I.height-se),v={left:oe,top:he,width:P,height:se}}return{width:M,height:R,rect:v}}var d=["clip","crop","fill","fillmax","max","scale","min"],m=["top","bottom","left","right","center","focalpoint","entropy"],_=["format"];function T(y){return y?typeof y.clientConfig=="object":!1}function S(y){for(var w=f,v=0,M=w;v<M.length;v+=1){var R=M[v],I=R[0],G=R[1];if(y===I||y===G)return I}return y}function b(y){var w=y;if(T(w)){var v=w.clientConfig,M=v.apiHost,R=v.projectId,I=v.dataset,G=M||"https://api.sanity.io";return new x(null,{baseUrl:G.replace(/^https:\/\/api\./,"https://cdn."),projectId:R,dataset:I})}return new x(null,y)}var x=function(w,v){this.options=w?Object.assign({},w.options||{},v||{}):Object.assign({},v||{})};return x.prototype.withOptions=function(w){var v=w.baseUrl||this.options.baseUrl,M={baseUrl:v};for(var R in w)if(w.hasOwnProperty(R)){var I=S(R);M[I]=w[R]}return new x(this,Object.assign({},{baseUrl:v},M))},x.prototype.image=function(w){return this.withOptions({source:w})},x.prototype.dataset=function(w){return this.withOptions({dataset:w})},x.prototype.projectId=function(w){return this.withOptions({projectId:w})},x.prototype.bg=function(w){return this.withOptions({bg:w})},x.prototype.dpr=function(w){return this.withOptions(w&&w!==1?{dpr:w}:{})},x.prototype.width=function(w){return this.withOptions({width:w})},x.prototype.height=function(w){return this.withOptions({height:w})},x.prototype.focalPoint=function(w,v){return this.withOptions({focalPoint:{x:w,y:v}})},x.prototype.maxWidth=function(w){return this.withOptions({maxWidth:w})},x.prototype.minWidth=function(w){return this.withOptions({minWidth:w})},x.prototype.maxHeight=function(w){return this.withOptions({maxHeight:w})},x.prototype.minHeight=function(w){return this.withOptions({minHeight:w})},x.prototype.size=function(w,v){return this.withOptions({width:w,height:v})},x.prototype.blur=function(w){return this.withOptions({blur:w})},x.prototype.sharpen=function(w){return this.withOptions({sharpen:w})},x.prototype.rect=function(w,v,M,R){return this.withOptions({rect:{left:w,top:v,width:M,height:R}})},x.prototype.format=function(w){return this.withOptions({format:w})},x.prototype.invert=function(w){return this.withOptions({invert:w})},x.prototype.orientation=function(w){return this.withOptions({orientation:w})},x.prototype.quality=function(w){return this.withOptions({quality:w})},x.prototype.forceDownload=function(w){return this.withOptions({download:w})},x.prototype.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},x.prototype.flipVertical=function(){return this.withOptions({flipVertical:!0})},x.prototype.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},x.prototype.fit=function(w){if(d.indexOf(w)===-1)throw new Error('Invalid fit mode "'+w+'"');return this.withOptions({fit:w})},x.prototype.crop=function(w){if(m.indexOf(w)===-1)throw new Error('Invalid crop mode "'+w+'"');return this.withOptions({crop:w})},x.prototype.saturation=function(w){return this.withOptions({saturation:w})},x.prototype.auto=function(w){if(_.indexOf(w)===-1)throw new Error('Invalid auto mode "'+w+'"');return this.withOptions({auto:w})},x.prototype.pad=function(w){return this.withOptions({pad:w})},x.prototype.url=function(){return h(this.options)},x.prototype.toString=function(){return this.url()},b})})(c_);const _T=c_.exports,vT=_T(la);function Xf(r){return r?vT.image(r):null}const xT=Mt("<section><div></div></section>");function yT(){let r;const[t,n]=_r();return(()=>{la.fetch('*[_type == "team"]{name, title, image, "imageUrl": image.asset->url}',{}).then(s=>{n(s)}).catch(s=>{console.log(s)})})(),Yn(()=>{uo(r,"var(--color-blue)")}),(()=>{const s=xT.cloneNode(!0),a=s.firstChild,o=r;return typeof o=="function"?bt(o,s):r=s,rt(s,mt(ql,{title:"18",label:"New Team Members",container:r,alignment:"left"}),a),rt(a,mt(Qo,{get each(){return t()},children:l=>mt(pT,{get name(){return l.name},get title(){return l.title},container:r,get imageUrl(){return Xf(l.image).width(800).height(800).url()}})})),et(l=>{const c=xp.team,u=xp.teamMembersWrapper;return c!==l._v$&&Ee(s,l._v$=c),u!==l._v$2&&Ee(a,l._v$2=u),l},{_v$:void 0,_v$2:void 0}),s})()}const bT="_events_10ew3_1",ST={events:bT},wT="_eventItem_1l7bj_1",MT="_eventImagesWrapper_1l7bj_10",TT="_eventImages_1l7bj_10",ET="_eventImage_1l7bj_10",qa={eventItem:wT,eventImagesWrapper:MT,eventImages:TT,eventImage:ET},CT=Mt("<div><div><div></div></div></div>"),AT=Mt("<img>");function PT(r){gt.registerPlugin(Xe);let e,t;return Yn(()=>{e.style.minHeight=`${r.images.length*100}vh`,gt.to(t,{x:window.innerWidth+t.offsetWidth*-1,ease:"linear",scrollTrigger:{trigger:e,start:"top top",end:"bottom bottom",scrub:!0,pin:t}})}),(()=>{const n=CT.cloneNode(!0),i=n.firstChild,s=i.firstChild,a=e;typeof a=="function"?bt(a,n):e=n,rt(n,mt(ql,{get title(){return r.name},get label(){return r.location},textTitle:!0,get alignment(){return r.indexEven?"right":"left"},container:e}),i);const o=t;return typeof o=="function"?bt(o,s):t=s,rt(s,mt(Qo,{get each(){return r.images},children:l=>(()=>{const c=AT.cloneNode(!0);return et(u=>{const f=qa.eventImage,h=Xf(l).url(),p=l.alt;return f!==u._v$4&&Ee(c,u._v$4=f),h!==u._v$5&&li(c,"src",u._v$5=h),p!==u._v$6&&li(c,"alt",u._v$6=p),u},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),c})()})),et(l=>{const c=qa.eventItem,u=qa.eventImagesWrapper,f=qa.eventImages;return c!==l._v$&&Ee(n,l._v$=c),u!==l._v$2&&Ee(i,l._v$2=u),f!==l._v$3&&Ee(s,l._v$3=f),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})()}const RT=Mt("<section></section>");function DT(){let r;const[e,t]=_r();return(()=>{la.fetch('*[_type == "event"]{title, location, images}',{}).then(i=>{t(i)}).catch(i=>{console.log(i)})})(),Yn(()=>{uo(r,"var(--color-offwhite")}),(()=>{const i=RT.cloneNode(!0),s=r;return typeof s=="function"?bt(s,i):r=i,rt(i,mt(Qo,{get each(){return e()},children:(a,o)=>mt(PT,{get name(){return a.title},get location(){return a.location},get images(){return a.images},container:r,get indexEven(){return o()%2==0}})})),et(()=>Ee(i,ST.events)),i})()}const LT="_recognition_s9ukz_1",IT="_recognitionWrapper_s9ukz_7",yp={recognition:LT,recognitionWrapper:IT},OT="_recognitionItem_5vsxc_1",FT="_recognitionText_5vsxc_17",NT="_recognitionProject_5vsxc_22",UT="_recognitionAward_5vsxc_26",zT="_recognitionPublication_5vsxc_30",kT="_recognitionImage_5vsxc_34",Ps={recognitionItem:OT,recognitionText:FT,recognitionProject:NT,recognitionAward:UT,recognitionPublication:zT,recognitionImage:kT},BT=Mt("<div><p></p><img><div><p></p><p></p></div></div>");function VT(r){let e;return(()=>{const t=BT.cloneNode(!0),n=t.firstChild,i=n.nextSibling,s=i.nextSibling,a=s.firstChild,o=a.nextSibling,l=e;return typeof l=="function"?bt(l,t):e=t,rt(n,()=>r.publication),rt(a,()=>r.project),rt(o,()=>r.award),et(c=>{const u=Ps.recognitionItem,f=`${Ps.recognitionPublication} utility`,h=Ps.recognitionImage,p=Xf(r.image).width(800).url(),g=r.alt,d=Ps.recognitionText,m=`${Ps.recognitionProject} h3`,_=`${Ps.recognitionAward}`;return u!==c._v$&&Ee(t,c._v$=u),f!==c._v$2&&Ee(n,c._v$2=f),h!==c._v$3&&Ee(i,c._v$3=h),p!==c._v$4&&li(i,"src",c._v$4=p),g!==c._v$5&&li(i,"alt",c._v$5=g),d!==c._v$6&&Ee(s,c._v$6=d),m!==c._v$7&&Ee(a,c._v$7=m),_!==c._v$8&&Ee(o,c._v$8=_),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),t})()}const GT=Mt("<section><div></div></section>");function HT(){let r;const[e,t]=_r();return(()=>{la.fetch('*[_type == "recognition"]{project, award, publication, image}',{}).then(i=>{t(i)}).catch(i=>{console.log(i)})})(),Yn(()=>{uo(r,"var(--color-red)")}),(()=>{const i=GT.cloneNode(!0),s=i.firstChild,a=r;return typeof a=="function"?bt(a,i):r=i,rt(i,mt(ql,{title:"15",label:"Design & Dev Awards",alignment:"center",container:r}),s),rt(s,mt(Qo,{get each(){return e()},children:o=>mt(VT,{get project(){return o.project},get award(){return o.award},get publication(){return o.publication},get image(){return o.image}})})),et(o=>{const l=yp.recognition,c=yp.recognitionWrapper;return l!==o._v$&&Ee(i,o._v$=l),c!==o._v$2&&Ee(s,o._v$2=c),o},{_v$:void 0,_v$2:void 0}),i})()}const WT="_contact_1z2vk_1",$T="_logo_1z2vk_10",qT="_contactText_1z2vk_15",iu={contact:WT,logo:$T,contactText:qT},jT=Mt('<section><svg viewBox="0 0 408 307" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M323.806 153.476C323.806 93.6759 296.595 39.1744 254.266 14.1945C265.352 9.40037 276.942 6.87715 288.532 6.87715C317.759 6.87715 345.223 22.2688 366.136 50.2765C387.048 78.2843 398.638 114.871 398.638 153.476C398.638 192.081 387.048 228.668 366.136 256.676C345.223 284.684 317.507 300.075 288.532 300.075C276.942 300.075 265.352 297.552 254.266 292.758C296.595 267.778 323.806 213.277 323.806 153.476ZM209.417 254.91C228.818 226.902 239.4 190.82 239.4 153.476C239.4 116.133 228.818 80.0505 209.417 52.0428L209.669 51.5381C209.921 51.0335 210.173 50.5289 210.677 50.2765C221.007 36.3988 233.101 25.549 246.203 18.2316C259.305 25.8013 271.399 36.3988 281.729 50.2765C302.642 78.2843 314.232 114.871 314.232 153.476C314.232 192.081 302.642 228.668 281.729 256.676C271.399 270.554 259.305 281.403 246.203 288.721C233.101 281.151 221.007 270.554 210.677 256.676C210.425 256.171 209.921 255.667 209.669 255.414L209.417 254.91ZM204.126 262.227C214.204 275.095 225.542 285.188 238.392 292.758C227.306 297.552 215.716 300.075 204.126 300.075C192.536 300.075 180.946 297.552 169.859 292.758C182.457 285.188 194.048 274.843 204.126 262.227ZM198.331 51.5381L198.583 52.0428C179.182 80.0505 168.6 116.133 168.6 153.476C168.6 190.82 179.182 226.902 198.583 254.91L198.331 255.414C198.079 255.919 197.575 256.424 197.323 256.676C186.993 270.554 174.899 281.403 161.797 288.721C148.695 281.151 136.601 270.554 126.271 256.676C105.358 228.668 93.7678 192.081 93.7678 153.476C93.7678 114.871 105.358 78.2843 126.271 50.2765C136.601 36.3988 148.695 25.549 161.797 18.2316C174.899 25.549 186.993 36.3988 197.323 50.2765C197.827 50.7812 198.079 51.0335 198.331 51.5381ZM204.126 44.7255C194.048 31.857 182.709 21.7641 169.859 14.1945C180.946 9.40037 192.536 6.87715 204.126 6.87715C215.716 6.87715 227.306 9.40037 238.392 14.1945C225.542 21.7641 213.952 32.1093 204.126 44.7255ZM229.826 153.476C229.826 187.287 220.755 220.594 204.126 246.835C187.497 220.342 178.426 187.287 178.426 153.476C178.426 119.665 187.497 86.3586 204.126 60.1171C220.755 86.3586 229.826 119.665 229.826 153.476ZM84.4453 153.476C84.4453 213.277 111.657 267.778 153.986 292.758C142.9 297.552 131.31 300.075 119.72 300.075C90.4923 300.075 63.0288 284.684 42.1162 256.676C21.2036 228.668 9.61351 192.081 9.61351 153.476C9.61351 114.871 21.2036 78.2843 42.1162 50.2765C63.0288 22.2688 90.4923 6.87715 119.72 6.87715C131.31 6.87715 142.9 9.40037 153.986 14.1945C111.657 39.1744 84.4453 93.6759 84.4453 153.476ZM288.532 0.0644531C273.919 0.0644531 259.809 3.34464 246.455 9.90501C232.849 3.34464 218.739 0.0644531 204.378 0.0644531C189.764 0.0644531 175.654 3.34464 162.301 9.90501C148.695 3.34464 134.585 0.0644531 120.224 0.0644531C53.7063 0.0644531 0.0390625 68.9484 0.0390625 153.476C0.0390625 238.004 53.7063 306.888 119.72 306.888C134.333 306.888 148.443 303.608 161.797 297.047C175.403 303.608 189.512 306.888 203.874 306.888C218.488 306.888 232.597 303.608 245.951 297.047C259.557 303.608 273.667 306.888 288.028 306.888C354.041 306.888 407.709 238.004 407.709 153.476C407.709 68.9484 354.545 0.0644531 288.532 0.0644531Z" fill="currentColor"></path></svg><p>Wishing a happy new year to you & yours.</p></section>'),[Xu,ja]=_r();function XT(){let r;return Yn(()=>{Xe.create({trigger:r,start:"top top+=100",onEnter:()=>ja(!0),onEnterBack:()=>ja(!0),onLeave:()=>ja(!1),onLeaveBack:()=>ja(!1)}),uo(r,"var(--page-color-default")}),(()=>{const e=jT.cloneNode(!0),t=e.firstChild,n=t.nextSibling,i=r;return typeof i=="function"?bt(i,e):r=e,et(s=>{const a=iu.contact,o=iu.logo,l=`${iu.contactText} h2`;return a!==s._v$&&Ee(e,s._v$=a),o!==s._v$2&&li(t,"class",s._v$2=o),l!==s._v$3&&Ee(n,s._v$3=l),s},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})()}const YT="_navigation_kkzsm_1",ZT="_navigationInner_kkzsm_10",KT="_pageEnd_kkzsm_24",JT="_scrollProgress_kkzsm_30",QT="_navLink_kkzsm_47",eE="_ticker_kkzsm_1",Pt={navigation:YT,navigationInner:ZT,pageEnd:KT,scrollProgress:JT,navLink:QT,ticker:eE},tE=Mt("<nav><div><div></div></div></nav>"),ti=Mt('<a href="">Get in Touch &#183;</a>'),nE=Mt('<a href="">Work</a>'),iE=Mt('<a href="">Team</a>'),rE=Mt('<a href="">Events</a>'),sE=Mt('<a href="">Recognition</a>');function oE(){let r,e;return Yn(()=>{window.addEventListener("load",()=>{gt.from(r,{y:"100%",duration:.8,delay:.2,ease:qo.easeOut})}),window.addEventListener("scroll",()=>{let t=document.documentElement,n=document.body,i=Math.floor((t.scrollTop||n.scrollTop)/((t.scrollHeight||n.scrollHeight)-t.clientHeight)*100);e.style.setProperty("--scroll",i),Xu()?r.classList.add(Pt.pageEnd):r.classList.remove(Pt.pageEnd)})}),(()=>{const t=tE.cloneNode(!0),n=t.firstChild,i=n.firstChild,s=r;typeof s=="function"?bt(s,t):r=t,rt(n,(()=>{const o=Pp(()=>!!Xu());return()=>o()?[(()=>{const l=ti.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})(),(()=>{const l=ti.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})(),(()=>{const l=ti.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})(),(()=>{const l=ti.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})(),(()=>{const l=ti.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})(),(()=>{const l=ti.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})(),(()=>{const l=ti.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})(),(()=>{const l=ti.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})(),(()=>{const l=ti.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})(),(()=>{const l=ti.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})(),(()=>{const l=ti.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})()]:[(()=>{const l=nE.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})(),(()=>{const l=iE.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})(),(()=>{const l=rE.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})(),(()=>{const l=sE.cloneNode(!0);return et(()=>Ee(l,`${Pt.navLink} utility`)),l})()]})(),i);const a=e;return typeof a=="function"?bt(a,i):e=i,et(o=>{const l=Pt.navigation,c=Pt.navigationInner,u=Pt.scrollProgress;return l!==o._v$&&Ee(t,o._v$=l),c!==o._v$2&&Ee(n,o._v$2=c),u!==o._v$3&&Ee(i,o._v$3=u),o},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()}const aE="_brandWrapper_uzuv7_1",lE="_logo_uzuv7_17",cE="_contact_uzuv7_22",ru={brandWrapper:aE,logo:lE,contact:cE},uE=Mt('<div><a href="#" target="_blank">Half Helix</a><a href="#" target="_blank">Get in Touch</a></div>');function fE(){let r;return Yn(()=>{window.addEventListener("load",()=>{gt.from(r,{y:"100%",duration:.8,ease:qo.easeOut})}),window.addEventListener("scroll",()=>{Xu()?gt.to(r,{y:"100%",opacity:0}):gt.to(r,{y:"0%",opacity:1})})}),(()=>{const e=uE.cloneNode(!0),t=e.firstChild,n=t.nextSibling,i=r;return typeof i=="function"?bt(i,e):r=e,et(s=>{const a=ru.brandWrapper,o=`${ru.logo} h3`,l=`${ru.contact}`;return a!==s._v$&&Ee(e,s._v$=a),o!==s._v$2&&Ee(t,s._v$2=o),l!==s._v$3&&Ee(n,s._v$3=l),s},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})()}function bp(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function hE(r,e,t){return e&&bp(r.prototype,e),t&&bp(r,t),r}/*!
 * ScrollSmoother 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var at,Xa,un,Bs,Ro,fi,Dr,Sp,Qe,pi,Ya,wp,Mp,Tp,Ep,u_=function(){return typeof window<"u"},f_=function(){return at||u_()&&(at=window.gsap)&&at.registerPlugin&&at},dE=function(e){return Math.round(e*1e5)/1e5||0},pE=function(e,t){var n=e.parentNode||Ro,i=e.getBoundingClientRect(),s=n.getBoundingClientRect(),a=s.top-i.top,o=s.bottom-i.bottom,l=(Math.abs(a)>Math.abs(o)?a:o)/(1-t),c=-l*t,u,f;return l>0&&(u=s.height/(un.innerHeight+s.height),f=u===.5?s.height*2:Math.min(s.height,-l*u/(2*u-1))*2*(t||1),c+=t?-f*t:-f/2,l+=f),{change:l,offset:c}},mE=function(e){var t=Bs.querySelector(".ScrollSmoother-wrapper");return t||(t=Bs.createElement("div"),t.classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t},rs=function(){function r(e){var t=this;Xa||r.register(at)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},pi&&pi.kill(),pi=this,Tp(this);var n=e,i=n.smoothTouch,s=n.onUpdate,a=n.onStop,o=n.smooth,l=n.onFocusIn,c=n.normalizeScroll,u,f,h,p,g,d,m,_,T,S,b,x,y,w=this,v=typeof ResizeObserver<"u"&&e.autoResize!==!1&&new ResizeObserver(function(){return Qe.isRefreshing||Ep.restart(!0)}),M=e.effectsPrefix||"",R=Qe.getScrollFunc(un),I=Qe.isTouch===1?i===!0?.8:parseFloat(i)||0:o===0||o===!1?0:parseFloat(o)||.8,G=0,U=0,L=1,z=wp(0),H=function(){return z.update(-G)},$={y:0},V=function(){return u.style.overflow="visible"},F,P=function(ie){ie.update();var N=ie.getTween();N&&(N.pause(),N._time=N._dur,N._tTime=N._tDur),F=!1,ie.animation.progress(ie.progress,!0)},se=function(ie,N){(ie!==G&&!S||N)&&(I&&(u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+ie+", 0, 1)",u._gsap.y=ie+"px"),U=ie-G,G=ie,Qe.isUpdating||Qe.update())},oe=function(ie){return arguments.length?(ie<0&&(ie=0),$.y=-ie,F=!0,S?G=-ie:se(-ie),Qe.isRefreshing?p.update():R(ie),this):-G},le,he=function(ie){f.scrollTop=0,!(ie.target.contains&&ie.target.contains(f)||l&&l(t,ie)===!1)&&(Qe.isInViewport(ie.target)||ie.target===le||t.scrollTo(ie.target,!1,"center center"),le=ie.target)},Oe=function(ie,N){var D,re,q,Se;g.forEach(function(ue){D=ue.pins,Se=ue.markers,ie.forEach(function(C){ue.trigger&&C.trigger&&ue!==C&&(C.trigger===ue.trigger||C.pinnedContainer===ue.trigger||ue.trigger.contains(C.trigger))&&(re=C.start,q=(re-ue.start-ue.offset)/ue.ratio-(re-ue.start),D.forEach(function(E){return q-=E.distance/ue.ratio-E.distance}),C.setPositions(re+q,C.end+q),C.markerStart&&Se.push(at.quickSetter([C.markerStart,C.markerEnd],"y","px")),C.pin&&C.end>0&&(q=C.end-C.start,D.push({start:C.start,end:C.end,distance:q,trig:C}),ue.setPositions(ue.start,ue.end+q),ue.vars.onRefresh(ue)))})})},J=function(){V(),requestAnimationFrame(V),g&&(g.forEach(function(ie){var N=ie.start,D=ie.auto?Math.min(Qe.maxScroll(ie.scroller),ie.end):N+(ie.end-N)/ie.ratio,re=(D-ie.end)/2;N-=re,D-=re,ie.offset=re||1e-4,ie.pins.length=0,ie.setPositions(Math.min(N,D),Math.max(N,D)),ie.vars.onRefresh(ie)}),Oe(Qe.sort())),z.reset()},We=function(){return Qe.addEventListener("refresh",J)},De=function(){return g&&g.forEach(function(ie){return ie.vars.onRefresh(ie)})},Be=function(){return g&&g.forEach(function(ie){return ie.vars.onRefreshInit(ie)}),De},ge=function(ie,N,D,re){return function(){var q=typeof N=="function"?N(D,re):N;return q||q===0||(q=re.getAttribute("data-"+M+ie)||(ie==="speed"?1:0)),re.setAttribute("data-"+M+ie,q),q==="auto"?q:parseFloat(q)}},Ge=function(ie,N,D,re){var q=ge("speed",N,re,ie),Se=ge("lag",D,re,ie),ue=at.getProperty(ie,"y"),C=ie._gsap,E,k,ee,K,te,de,me=function(){N=q(),D=Se(),E=parseFloat(N)||1,ee=N==="auto",te=ee?0:.5,K&&K.kill(),K=D&&at.to(ie,{ease:Ya,overwrite:!1,y:"+=0",duration:D}),k&&(k.ratio=E,k.autoSpeed=ee)},Q=function(){C.y=ue+"px",C.renderTransform(1),me()},ye=[],Te=[],_e=0,Pe=function(fe){if(ee){Q();var $e=pE(ie,Sp(0,1,-fe.start/(fe.end-fe.start)));_e=$e.change,de=$e.offset}else _e=(fe.end-fe.start)*(1-E),de=0;ye.forEach(function(Ve){return _e-=Ve.distance*(1-E)}),fe.vars.onUpdate(fe),K&&K.progress(1)};return me(),(E!==1||ee||K)&&(k=Qe.create({trigger:ee?ie.parentNode:ie,scroller:f,scrub:!0,refreshPriority:-999,onRefreshInit:Q,onRefresh:Pe,onKill:function(fe){var $e=g.indexOf(fe);$e>=0&&g.splice($e,1),Q()},onUpdate:function(fe){var $e=ue+_e*(fe.progress-te),Ve=ye.length,O=0,j,ae,xe;if(fe.offset){if(Ve){for(ae=-G,xe=fe.end;Ve--;){if(j=ye[Ve],j.trig.isActive||ae>=j.start&&ae<=j.end){K&&(j.trig.progress+=j.trig.direction<0?.001:-.001,j.trig.update(0,0,1),K.resetTo("y",parseFloat(C.y),-U,!0),L&&K.progress(1));return}ae>j.end&&(O+=j.distance),xe-=j.distance}$e=ue+O+_e*((at.utils.clamp(fe.start,fe.end,ae)-fe.start-O)/(xe-fe.start)-te)}$e=dE($e+de),Te.length&&!ee&&Te.forEach(function(Re){return Re($e-O)}),K?(K.resetTo("y",$e,-U,!0),L&&K.progress(1)):(C.y=$e+"px",C.renderTransform(1))}}}),Pe(k),at.core.getCache(k.trigger).stRevert=Be,k.startY=ue,k.pins=ye,k.markers=Te,k.ratio=E,k.autoSpeed=ee,ie.style.willChange="transform"),k};We(),Qe.addEventListener("killAll",We),at.delayedCall(.5,function(){return L=0}),this.scrollTop=oe,this.scrollTo=function(ce,ie,N){var D=at.utils.clamp(0,Qe.maxScroll(un),isNaN(ce)?t.offset(ce,N):+ce);ie?S?at.to(t,{duration:I,scrollTop:D,overwrite:"auto",ease:Ya}):R(D):oe(D)},this.offset=function(ce,ie){ce=Dr(ce)[0];var N=ce.style.cssText,D=Qe.create({trigger:ce,start:ie||"top top"}),re;return g&&Oe([D]),re=D.start,D.kill(!1),ce.style.cssText=N,at.core.getCache(ce).uncache=1,re};function be(){return h=u.clientHeight,u.style.overflow="visible",fi.style.height=h+"px",h-un.innerHeight}this.content=function(ce){if(arguments.length){var ie=Dr(ce||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||fi.children[0];return ie!==u&&(u=ie,T=u.getAttribute("style")||"",v&&v.observe(u),at.set(u,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),I||at.set(u,{clearProps:"transform"})),this}return u},this.wrapper=function(ce){return arguments.length?(f=Dr(ce||"#smooth-wrapper")[0]||mE(u),_=f.getAttribute("style")||"",be(),at.set(f,I?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):f},this.effects=function(ce,ie){var N;if(g||(g=[]),!ce)return g.slice(0);ce=Dr(ce),ce.forEach(function(E){for(var k=g.length;k--;)g[k].trigger===E&&g[k].kill()}),ie=ie||{};var D=ie,re=D.speed,q=D.lag,Se=[],ue,C;for(ue=0;ue<ce.length;ue++)C=Ge(ce[ue],re,q,ue),C&&Se.push(C);return(N=g).push.apply(N,Se),Se},this.sections=function(ce,ie){var N;if(d||(d=[]),!ce)return d.slice(0);var D=Dr(ce).map(function(re){return Qe.create({trigger:re,start:"top 120%",end:"bottom -20%",onToggle:function(Se){re.style.opacity=Se.isActive?"1":"0",re.style.pointerEvents=Se.isActive?"all":"none"}})});return ie&&ie.add?(N=d).push.apply(N,D):d=D.slice(0),D},this.content(e.content),this.wrapper(e.wrapper),this.render=function(ce){return se(ce||ce===0?ce:G)},this.getVelocity=function(){return z.getVelocity(-G)},Qe.scrollerProxy(f,{scrollTop:oe,scrollHeight:function(){return be()&&fi.scrollHeight},fixedMarkers:e.fixedMarkers!==!1&&!!I,content:u,getBoundingClientRect:function(){return{top:0,left:0,width:un.innerWidth,height:un.innerHeight}}}),Qe.defaults({scroller:f});var Ce=Qe.getAll().filter(function(ce){return ce.scroller===un||ce.scroller===f});Ce.forEach(function(ce){return ce.revert(!0)}),p=Qe.create({animation:at.fromTo($,{y:0},{y:function(){return-be()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(this._dur){var ie=F;ie&&(P(p),$.y=G),se($.y,ie),H(),s&&!S&&s(w)}}}),onRefreshInit:function(ie){if(g){var N=Qe.getAll().filter(function(re){return!!re.pin});g.forEach(function(re){re.vars.pinnedContainer||N.forEach(function(q){if(q.pin.contains(re.trigger)){var Se=re.vars;Se.pinnedContainer=q.pin,re.vars=null,re.init(Se,re.animation)}})})}var D=ie.getTween();y=D&&D._end>D._dp._time,x=G,$.y=0,I&&(f.style.pointerEvents="none",f.scrollTop=0,setTimeout(function(){return f.style.removeProperty("pointer-events")},50))},onRefresh:function(ie){ie.animation.invalidate(),ie.setPositions(ie.start,be()),y||P(ie),$.y=-R(),se($.y),L||ie.animation.progress(at.utils.clamp(0,1,x/-ie.end)),y&&(ie.progress-=.001,ie.update())},id:"ScrollSmoother",scroller:un,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:be,onScrubComplete:function(){z.reset(),a&&a(t)},scrub:I||!0}),this.smooth=function(ce){return arguments.length&&(I=ce||0),arguments.length?p.scrubDuration(ce):p.getTween()?p.getTween().duration():0},p.getTween()&&(p.getTween().vars.ease=e.ease||Ya),this.scrollTrigger=p,e.effects&&this.effects(e.effects===!0?"[data-"+M+"speed], [data-"+M+"lag]":e.effects,{}),e.sections&&this.sections(e.sections===!0?"[data-section]":e.sections),Ce.forEach(function(ce){ce.vars.scroller=f,ce.init(ce.vars,ce.animation)}),this.paused=function(ce,ie){return arguments.length?(!!S!==ce&&(ce?(p.getTween()&&p.getTween().pause(),R(-G),z.reset(),b=Qe.normalizeScroll(),b&&b.disable(),S=Qe.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return oe(-G)}}),S.nested=Mp(Ro,"wheel,touch,scroll",!0,ie!==!1)):(S.nested.kill(),S.kill(),S=0,b&&b.enable(),p.progress=(-G-p.start)/(p.end-p.start),P(p))),this):!!S},this.kill=this.revert=function(){t.paused(!1),P(p),p.kill();for(var ce=(g||[]).concat(d||[]),ie=ce.length;ie--;)ce[ie].kill();Qe.scrollerProxy(f),Qe.removeEventListener("killAll",We),Qe.removeEventListener("refresh",J),f.style.cssText=_,u.style.cssText=T;var N=Qe.defaults({});N&&N.scroller===f&&Qe.defaults({scroller:un}),t.normalizer&&Qe.normalizeScroll(!1),clearInterval(m),pi=null,v&&v.disconnect(),fi.style.removeProperty("height"),un.removeEventListener("focusin",he)},this.refresh=function(ce,ie){return p.refresh(ce,ie)},c&&(this.normalizer=Qe.normalizeScroll(c===!0?{debounce:!0,content:!I&&u}:c)),Qe.config(e),"overscrollBehavior"in un.getComputedStyle(fi)&&at.set([fi,Ro],{overscrollBehavior:"none"}),"scrollBehavior"in un.getComputedStyle(fi)&&at.set([fi,Ro],{scrollBehavior:"auto"}),un.addEventListener("focusin",he),m=setInterval(H,250),Bs.readyState==="loading"||requestAnimationFrame(function(){return Qe.refresh()})}return r.register=function(t){return Xa||(at=t||f_(),u_()&&window.document&&(un=window,Bs=document,Ro=Bs.documentElement,fi=Bs.body),at&&(Dr=at.utils.toArray,Sp=at.utils.clamp,Ya=at.parseEase("expo"),Tp=at.core.context||function(){},Ep=at.delayedCall(.2,function(){return Qe.isRefreshing||pi&&pi.refresh()}).pause(),Qe=at.core.globals().ScrollTrigger,at.core.globals("ScrollSmoother",r),fi&&Qe&&(wp=Qe.core._getVelocityProp,Mp=Qe.core._inputObserver,r.refresh=Qe.refresh,Xa=1))),Xa},hE(r,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),r}();rs.version="3.11.3";rs.create=function(r){return pi&&r&&pi.content()===Dr(r.content)[0]?pi:new rs(r)};rs.get=function(){return pi};f_()&&at.registerPlugin(rs);const gE="_preloader_1r04k_1",_E="_loaded_1r04k_14",vE="_icon_1r04k_21",su={preloader:gE,loaded:_E,icon:vE},xE=Mt('<div><svg viewBox="0 0 132 108" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56.71 67.0352C25.9421 67.0352 1 75.8881 1 86.8142C1 97.7402 25.9421 106.599 56.71 106.599M56.71 93.4072C25.9421 93.4072 1 84.5543 1 73.6282C1 62.7022 25.9421 53.8492 56.71 53.8492M56.71 53.8492C25.9421 53.8492 1 44.9963 1 34.0702C1 23.1442 25.9421 14.2852 56.71 14.2852C97.7379 14.2852 131 26.0972 131 40.6632C131 55.2293 97.7379 67.0412 56.71 67.0412C25.9421 67.0412 1 58.1823 1 47.2562C1 36.3302 25.9421 27.4772 56.71 27.4772C97.7379 27.4772 131 39.2831 131 53.8492C131 68.4153 97.7379 80.2272 56.71 80.2272C25.9421 80.2272 1 71.3683 1 60.4482C1 49.5282 25.9421 40.6632 56.71 40.6632C97.7379 40.6632 131 52.4752 131 67.0412C131 81.6073 97.7379 93.4132 56.71 93.4132M56.71 53.8492C97.7379 53.8492 131 42.0433 131 27.4772C131 12.9112 97.7379 1.09921 56.71 1.09921" stroke="currentColor" stroke-miterlimit="10"></path></svg></div>');function yE(){let r;return window.addEventListener("load",()=>{r&&r.classList.add(su.loaded)}),(()=>{const e=xE.cloneNode(!0),t=e.firstChild,n=r;return typeof n=="function"?bt(n,e):r=e,et(i=>{const s=su.preloader,a=su.icon;return s!==i._v$&&Ee(e,i._v$=s),a!==i._v$2&&li(t,"class",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),e})()}const bE="_blob_1vuep_1",SE="_blobInner_1vuep_16",wE="_blobArea_1vuep_23",ME="_blobElement1_1vuep_31",TE="_blob1_1vuep_1",EE="_blobElement2_1vuep_36",CE="_blob2_1vuep_1",AE="_blobElement3_1vuep_41",PE="_blob3_1vuep_1",Ji={blob:bE,blobInner:SE,blobArea:wE,blobElement1:ME,blob1:TE,blobElement2:EE,blob2:CE,blobElement3:AE,blob3:PE},RE=Mt("<div><div><div></div><div></div><div></div></div></div>");function DE(){const r=e=>{};return(()=>{const e=RE.cloneNode(!0),t=e.firstChild,n=t.firstChild,i=n.nextSibling,s=i.nextSibling;return bt(a=>r(),e),et(a=>{const o=Ji.blob,l=Ji.blobInner,c=`${Ji.blobArea} ${Ji.blobElement1}`,u=`${Ji.blobArea} ${Ji.blobElement2}`,f=`${Ji.blobArea} ${Ji.blobElement3}`;return o!==a._v$&&Ee(e,a._v$=o),l!==a._v$2&&Ee(t,a._v$2=l),c!==a._v$3&&Ee(n,a._v$3=c),u!==a._v$4&&Ee(i,a._v$4=u),f!==a._v$5&&Ee(s,a._v$5=f),a},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),e})()}const LE=Mt('<div><div id="smooth-wrapper"><div id="smooth-content"></div></div></div>'),[IE,OE]=_r("");function FE(){gt.registerPlugin(Xe,rs);const r=e=>{let t=rs.create({smooth:1,effects:!0,smoothTouch:.1,content:e});OE(t)};return(()=>{const e=LE.cloneNode(!0),t=e.firstChild,n=t.firstChild;return rt(e,mt(yE,{}),t),rt(e,mt(DE,{}),t),rt(e,mt(fE,{}),t),rt(e,mt(oE,{}),t),bt(i=>r(i),n),rt(n,mt(dw,{}),null),rt(n,mt(aT,{}),null),rt(n,mt(yT,{}),null),rt(n,mt(DT,{}),null),rt(n,mt(HT,{}),null),rt(n,mt(XT,{}),null),et(()=>Ee(e,E_.App)),e})()}T_(()=>mt(FE,{}),document.getElementById("root"));
