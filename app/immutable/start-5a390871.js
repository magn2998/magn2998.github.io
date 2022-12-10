import{S as ot,i as st,s as it,a as lt,e as F,c as ct,b as M,g as he,t as V,d as pe,f as B,h as J,j as ft,o as $e,k as ut,l as dt,m as ht,n as Ee,p as C,q as pt,r as mt,u as gt,v as H,w as W,x as Ne,y as Y,z as X,A as le}from"./chunks/index-6df32495.js";import{S as rt,I as q,g as We,f as Ye,a as ke,b as ce,s as K,i as Xe,c as de,P as Ze,d as _t,e as wt,h as yt}from"./chunks/singletons-8e7001b1.js";function bt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function vt(r){return r.split("%25").map(decodeURI).join("%25")}function Et(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const kt=["href","pathname","search","searchParams","toString","toJSON"];function St(r,e){const n=new URL(r);for(const i of kt){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return Rt(n),n}function Rt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Ot="/__data.json";function It(r){return r.replace(/\/$/,"")+Ot}function Lt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ee.delete(Ue(r)),me(r,e));const ee=new Map;function $t(r,e){const n=Ue(r,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:s,...u}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ee.set(n,{body:s,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,u))}return me(r,e)}function Pt(r,e,n){if(ee.size>0){const i=Ue(r,n),s=ee.get(i);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);ee.delete(i)}}return me(e,n)}function Ue(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Lt(e.body)}"]`),i}const jt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Ut(r).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((g,p)=>{if(p%2){if(g.startsWith("x+"))return Se(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return Se(String.fromCharCode(...g.slice(2).split("-").map(P=>parseInt(P,16))));const _=jt.exec(g);if(!_)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,S,U,T]=_;return e.push({name:U,matcher:T,optional:!!y,rest:!!S,chained:S?p===1&&t[0]==="":!1}),S?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return Se(g)}).join("")}).join("")}/?$`),params:e}}function Nt(r){return!/^\([^)]+\)$/.test(r)}function Ut(r){return r.slice(1).split("/").filter(Nt)}function Tt(r,e,n){const i={},s=r.slice(1);let u="";for(let t=0;t<e.length;t+=1){const f=e[t];let g=s[t];if(f.chained&&f.rest&&u&&(g=g?u+"/"+g:u),u="",g===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](g)){if(f.optional&&f.chained){let p=s.indexOf(void 0,t);if(p===-1){const _=e[t+1];if((_==null?void 0:_.rest)&&_.chained)u=g;else return}for(;p>=t;)s[p]=s[p-1],p-=1;continue}return}i[f.name]=g}}if(!u)return i}function Se(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt(r,e,n,i){const s=new Set(e);return Object.entries(n).map(([f,[g,p,_]])=>{const{pattern:y,params:S}=At(f),U={id:f,exec:T=>{const P=y.exec(T);if(P)return Tt(P,S,i)},errors:[1,..._||[]].map(T=>r[T]),layouts:[0,...p||[]].map(t),leaf:u(g)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function u(f){const g=f<0;return g&&(f=~f),[g,r[f]]}function t(f){return f===void 0?f:[s.has(f),r[f]]}}function Ct(r){let e,n,i;var s=r[0][0];function u(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=H(s,u(r))),{c(){e&&W(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,f){e&&Y(e,t,f),M(t,n,f),i=!0},p(t,f){const g={};if(f&4&&(g.data=t[2]),f&2&&(g.form=t[1]),s!==(s=t[0][0])){if(e){he();const p=e;V(p.$$.fragment,1,0,()=>{X(p,1)}),pe()}s?(e=H(s,u(t)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&X(e,t)}}}function qt(r){let e,n,i;var s=r[0][0];function u(t){return{props:{data:t[2],$$slots:{default:[Ft]},$$scope:{ctx:t}}}}return s&&(e=H(s,u(r))),{c(){e&&W(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,f){e&&Y(e,t,f),M(t,n,f),i=!0},p(t,f){const g={};if(f&4&&(g.data=t[2]),f&523&&(g.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){he();const p=e;V(p.$$.fragment,1,0,()=>{X(p,1)}),pe()}s?(e=H(s,u(t)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&X(e,t)}}}function Ft(r){let e,n,i;var s=r[0][1];function u(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=H(s,u(r))),{c(){e&&W(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,f){e&&Y(e,t,f),M(t,n,f),i=!0},p(t,f){const g={};if(f&8&&(g.data=t[3]),f&2&&(g.form=t[1]),s!==(s=t[0][1])){if(e){he();const p=e;V(p.$$.fragment,1,0,()=>{X(p,1)}),pe()}s?(e=H(s,u(t)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&X(e,t)}}}function Qe(r){let e,n=r[5]&&xe(r);return{c(){e=ut("div"),n&&n.c(),this.h()},l(i){e=dt(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ht(e);n&&n.l(s),s.forEach(J),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(i,s){M(i,e,s),n&&n.m(e,null)},p(i,s){i[5]?n?n.p(i,s):(n=xe(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&J(e),n&&n.d()}}}function xe(r){let e;return{c(){e=pt(r[6])},l(n){e=mt(n,r[6])},m(n,i){M(n,e,i)},p(n,i){i&64&&gt(e,n[6])},d(n){n&&J(e)}}}function Vt(r){let e,n,i,s,u;const t=[qt,Ct],f=[];function g(_,y){return _[0][1]?0:1}e=g(r),n=f[e]=t[e](r);let p=r[4]&&Qe(r);return{c(){n.c(),i=lt(),p&&p.c(),s=F()},l(_){n.l(_),i=ct(_),p&&p.l(_),s=F()},m(_,y){f[e].m(_,y),M(_,i,y),p&&p.m(_,y),M(_,s,y),u=!0},p(_,[y]){let S=e;e=g(_),e===S?f[e].p(_,y):(he(),V(f[S],1,1,()=>{f[S]=null}),pe(),n=f[e],n?n.p(_,y):(n=f[e]=t[e](_),n.c()),B(n,1),n.m(i.parentNode,i)),_[4]?p?p.p(_,y):(p=Qe(_),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i(_){u||(B(n),u=!0)},o(_){V(n),u=!1},d(_){f[e].d(_),_&&J(i),p&&p.d(_),_&&J(s)}}}function Bt(r,e,n){let{stores:i}=e,{page:s}=e,{components:u}=e,{form:t}=e,{data_0:f=null}=e,{data_1:g=null}=e;ft(i.page.notify);let p=!1,_=!1,y=null;return $e(()=>{const S=i.page.subscribe(()=>{p&&(n(5,_=!0),n(6,y=document.title||"untitled page"))});return n(4,p=!0),S}),r.$$set=S=>{"stores"in S&&n(7,i=S.stores),"page"in S&&n(8,s=S.page),"components"in S&&n(0,u=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,g=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&i.page.set(s)},[u,t,f,g,p,_,y,i,s]}class Jt extends ot{constructor(e){super(),st(this,e,Bt,Vt,it,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Gt="modulepreload",Kt=function(r,e){return new URL(r,e).href},et={},Re=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=Kt(u,i),u in et)return;et[u]=!0;const t=u.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!i)for(let _=s.length-1;_>=0;_--){const y=s[_];if(y.href===u&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Gt,t||(p.as="script",p.crossOrigin=""),p.href=u,document.head.appendChild(p),t)return new Promise((_,y)=>{p.addEventListener("load",_),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},Mt={},ge=[()=>Re(()=>import("./chunks/0-93286708.js"),["./chunks/0-93286708.js","./components/layout.svelte-e469abde.js","./chunks/index-6df32495.js"],import.meta.url),()=>Re(()=>import("./chunks/1-2ea82151.js"),["./chunks/1-2ea82151.js","./components/error.svelte-dbd64a83.js","./chunks/index-6df32495.js","./chunks/singletons-8e7001b1.js"],import.meta.url),()=>Re(()=>import("./chunks/2-54407007.js"),["./chunks/2-54407007.js","./chunks/page-da46b06b.js","./components/pages/page.svelte-0e018e2d.js","./chunks/index-6df32495.js","./assets/page-2ee9d92b.css"],import.meta.url)],zt=[],Ht={"/":[2]},Wt={handleError:({error:r})=>{console.error(r)}};class Pe{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class tt{constructor(e,n){this.status=e,this.location=n}}async function Yt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,s])=>[i,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Xt=-1,Zt=-2,Qt=-3,xt=-4,en=-5,tn=-6;function nn(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(s,u=!1){if(s===Xt)return;if(s===Qt)return NaN;if(s===xt)return 1/0;if(s===en)return-1/0;if(s===tn)return-0;if(u)throw new Error("Invalid input");if(s in n)return n[s];const t=e[s];if(!t||typeof t!="object")n[s]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[s]=new Date(t[1]);break;case"Set":const g=new Set;n[s]=g;for(let y=1;y<t.length;y+=1)g.add(i(t[y]));break;case"Map":const p=new Map;n[s]=p;for(let y=1;y<t.length;y+=2)p.set(i(t[y]),i(t[y+1]));break;case"RegExp":n[s]=new RegExp(t[1],t[2]);break;case"Object":n[s]=Object(t[1]);break;case"BigInt":n[s]=BigInt(t[1]);break;case"null":const _=Object.create(null);n[s]=_;for(let y=1;y<t.length;y+=2)_[t[y]]=i(t[y+1]);break}else{const f=new Array(t.length);n[s]=f;for(let g=0;g<t.length;g+=1){const p=t[g];p!==Zt&&(f[g]=i(p))}}else{const f={};n[s]=f;for(const g in t){const p=t[g];f[g]=i(p)}}return n[s]}return i(0)}const Oe=Dt(ge,zt,Ht,Mt),je=ge[0],Ae=ge[1];je();Ae();let te={};try{te=JSON.parse(sessionStorage[rt])}catch{}function Ie(r){te[r]=de()}function rn({target:r,base:e}){var Me;const n=document.documentElement,i=[];let s=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,g=!1,p=!0,_=!1,y=!1,S=!1,U=!1,T,P=(Me=history.state)==null?void 0:Me[q];P||(P=Date.now(),history.replaceState({...history.state,[q]:P},"",location.href));const _e=te[P];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let G,Te,ne;async function De(){ne=ne||Promise.resolve(),await ne,ne=null;const a=new URL(location.href),o=oe(a,!0);s=null,await qe(o,a,[])}async function we(a,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:h={},invalidateAll:d=!1},m,v){return typeof a=="string"&&(a=new URL(a,We(document))),se({url:a,scroll:o?de():null,keepfocus:l,redirect_chain:m,details:{state:h,replaceState:c},nav_token:v,accepted:()=>{d&&(U=!0)},blocked:()=>{},type:"goto"})}async function Ce(a){const o=oe(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return s={id:o.id,promise:Be(o).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function re(...a){const c=Oe.filter(l=>a.some(h=>l.exec(h))).map(l=>Promise.all([...l.layouts,l.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(c)}async function qe(a,o,c,l,h={},d){var v,b;Te=h;let m=a&&await Be(a);if(m||(m=await Ke(o,{id:null},await x(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,Te!==h)return!1;if(m.type==="redirect")if(c.length>10||c.includes(o.pathname))m=await ae({status:500,error:await x(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return we(new URL(m.location,o).href,{},[...c,o.pathname],h),!1;else((b=(v=m.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await K.updated.check()&&await ie(o);if(i.length=0,U=!1,_=!0,l&&l.details){const{details:w}=l,O=w.replaceState?0:1;w.state[q]=P+=O,history[w.replaceState?"replaceState":"pushState"](w.state,"",o)}if(s=null,g){t=m.state,m.props.page&&(m.props.page.url=o);const w=ue();T.$set(m.props),w()}else Fe(m);if(l){const{scroll:w,keepfocus:O}=l;if(O||Le(),await le(),p){const I=o.hash&&document.getElementById(o.hash.slice(1));w?scrollTo(w.x,w.y):I?I.scrollIntoView():scrollTo(0,0)}}else await le();p=!0,m.props.page&&(G=m.props.page),d&&d(),_=!1}function Fe(a){var h;t=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),G=a.props.page;const c=ue();T=new Jt({target:r,props:{...a.props,stores:K},hydrate:!0}),c();const l={from:null,to:fe("to",{params:t.params,route:{id:((h=t.route)==null?void 0:h.id)??null},url:new URL(location.href)}),willUnload:!1,type:"enter"};u.after_navigate.forEach(d=>d(l)),g=!0}async function Z({url:a,params:o,branch:c,status:l,error:h,route:d,form:m}){const v=c.filter(Boolean);let b="never";for(const R of c)(R==null?void 0:R.slash)!==void 0&&(b=R.slash);a.pathname=bt(a.pathname,b),a.search=a.search;const w={type:"loaded",state:{url:a,params:o,branch:c,error:h,route:d},props:{components:v.map(R=>R.node.component)}};m!==void 0&&(w.props.form=m);let O={},I=!G;for(let R=0;R<v.length;R+=1){const E=v[R];O={...O,...E.data},(I||!t.branch.some(j=>j===E))&&(w.props[`data_${R}`]=O,I=I||Object.keys(E.data??{}).length>0)}if(I||(I=Object.keys(G.data).length!==Object.keys(O).length),!t.url||a.href!==t.url.href||t.error!==h||m!==void 0||I){w.props.page={error:h,params:o,route:d,status:l,url:new URL(a),form:m??null,data:I?O:G.data},Object.defineProperty(w.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const R=(E,j)=>{Object.defineProperty(w.props.page,E,{get:()=>{throw new Error(`$page.${E} has been replaced by $page.url.${j}`)}})};R("origin","origin"),R("path","pathname"),R("query","searchParams")}return w}async function ye({loader:a,parent:o,url:c,params:l,route:h,server_data_node:d}){var w,O,I;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await a();if((w=b.shared)!=null&&w.load){let D=function(...E){for(const j of E){const{href:N}=new URL(j,c);v.dependencies.add(N)}};const R={route:{get id(){return v.route=!0,h.id}},params:new Proxy(l,{get:(E,j)=>(v.params.add(j),E[j])}),data:(d==null?void 0:d.data)??null,url:St(c,()=>{v.url=!0}),async fetch(E,j){let N;E instanceof Request?(N=E.url,j={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...j}):N=E;const k=new URL(N,c).href;return D(k),g?Pt(N,k,j):$t(N,j)},setHeaders:()=>{},depends:D,parent(){return v.parent=!0,o()}};Object.defineProperties(R,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),m=await b.shared.load.call(null,R)??null,m=m?await Yt(m):null}return{node:b,loader:a,server:d,shared:(O=b.shared)!=null&&O.load?{type:"data",data:m,uses:v}:null,data:m??(d==null?void 0:d.data)??null,slash:((I=b.shared)==null?void 0:I.trailingSlash)??(d==null?void 0:d.slash)}}function Ve(a,o,c,l,h){if(U)return!0;if(!l)return!1;if(l.parent&&a||l.route&&o||l.url&&c)return!0;for(const d of l.params)if(h[d]!==t.params[d])return!0;for(const d of l.dependencies)if(i.some(m=>m(new URL(d))))return!0;return!1}function be(a,o){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?o??null:null}async function Be({id:a,invalidating:o,url:c,params:l,route:h}){if((s==null?void 0:s.id)===a)return s.promise;const{errors:d,layouts:m,leaf:v}=h,b=[...m,v];d.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const O=t.url?a!==t.url.pathname+t.url.search:!1,I=t.route?a!==t.route.id:!1,D=b.reduce((k,$,A)=>{var Q;const L=t.branch[A],z=!!($!=null&&$[0])&&((L==null?void 0:L.loader)!==$[1]||Ve(k.some(Boolean),I,O,(Q=L.server)==null?void 0:Q.uses,l));return k.push(z),k},[]);if(D.some(Boolean)){try{w=await nt(c,D)}catch(k){return ae({status:500,error:await x(k,{url:c,params:l,route:{id:h.id}}),url:c,route:h})}if(w.type==="redirect")return w}const R=w==null?void 0:w.nodes;let E=!1;const j=b.map(async(k,$)=>{var Q;if(!k)return;const A=t.branch[$],L=R==null?void 0:R[$];if((!L||L.type==="skip")&&k[1]===(A==null?void 0:A.loader)&&!Ve(E,I,O,(Q=A.shared)==null?void 0:Q.uses,l))return A;if(E=!0,(L==null?void 0:L.type)==="error")throw L;return ye({loader:k[1],url:c,params:l,route:h,parent:async()=>{var He;const ze={};for(let ve=0;ve<$;ve+=1)Object.assign(ze,(He=await j[ve])==null?void 0:He.data);return ze},server_data_node:be(L===void 0&&k[0]?{type:"skip"}:L??null,A==null?void 0:A.server)})});for(const k of j)k.catch(()=>{});const N=[];for(let k=0;k<b.length;k+=1)if(b[k])try{N.push(await j[k])}catch($){if($ instanceof tt)return{type:"redirect",location:$.location};let A=500,L;R!=null&&R.includes($)?(A=$.status??A,L=$.error):$ instanceof Pe?(A=$.status,L=$.body):L=await x($,{params:l,url:c,route:{id:h.id}});const z=await Je(k,N,d);return z?await Z({url:c,params:l,branch:N.slice(0,z.idx).concat(z.node),status:A,error:L,route:h}):await Ke(c,{id:h.id},L,A)}else N.push(void 0);return await Z({url:c,params:l,branch:N,status:200,error:null,route:h,form:o?void 0:null})}async function Je(a,o,c){for(;a--;)if(c[a]){let l=a;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,shared:null}}}catch{continue}}}async function ae({status:a,error:o,url:c,route:l}){const h={},d=await je();let m=null;if(d.server)try{const w=await nt(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;m=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ie(c)}const v=await ye({loader:je,url:c,params:h,route:l,parent:()=>Promise.resolve({}),server_data_node:be(m)}),b={node:await Ae(),loader:Ae,shared:null,server:null,data:null};return await Z({url:c,params:h,branch:[v,b],status:a,error:o,route:null})}function oe(a,o){if(Xe(a,e))return;const c=vt(a.pathname.slice(e.length)||"/");for(const l of Oe){const h=l.exec(c);if(h)return{id:a.pathname+a.search,invalidating:o,route:l,params:Et(h),url:a}}}function Ge({url:a,type:o,intent:c,delta:l}){var v,b;let h=!1;const d={from:fe("from",{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url}),to:fe("to",{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:a}),willUnload:!c,type:o};l!==void 0&&(d.delta=l);const m={...d,cancel:()=>{h=!0}};return y||u.before_navigate.forEach(w=>w(m)),h?null:d}async function se({url:a,scroll:o,keepfocus:c,redirect_chain:l,details:h,type:d,delta:m,nav_token:v,accepted:b,blocked:w}){const O=oe(a,!1),I=Ge({url:a,type:d,delta:m,intent:O});if(!I){w();return}Ie(P),b(),y=!0,g&&K.navigating.set(I),await qe(O,a,l,{scroll:o,keepfocus:c,details:h},v,()=>{y=!1,u.after_navigate.forEach(D=>D(I)),K.navigating.set(null)})}async function Ke(a,o,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await ae({status:l,error:c,url:a,route:o}):await ie(a)}function ie(a){return location.href=a.href,new Promise(()=>{})}function at(){let a;n.addEventListener("mousemove",d=>{const m=d.target;clearTimeout(a),a=setTimeout(()=>{l(m,2)},20)});function o(d){l(d.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(d=>{for(const m of d)m.isIntersecting&&(re(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(d,m){const v=Ye(d,n);if(!v)return;const{url:b,external:w}=ke(v,e);if(w)return;const O=ce(v);O.reload||(m<=O.preload_data?Ce(b):m<=O.preload_code&&re(b.pathname))}function h(){c.disconnect();for(const d of n.querySelectorAll("a")){const{url:m,external:v}=ke(d,e);if(v)continue;const b=ce(d);b.reload||(b.preload_code===Ze.viewport&&c.observe(d),b.preload_code===Ze.eager&&re(m.pathname))}}u.after_navigate.push(h),h()}return{after_navigate:a=>{$e(()=>(u.after_navigate.push(a),()=>{const o=u.after_navigate.indexOf(a);u.after_navigate.splice(o,1)}))},before_navigate:a=>{$e(()=>(u.before_navigate.push(a),()=>{const o=u.before_navigate.indexOf(a);u.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(_||!g)&&(p=!1)},goto:(a,o={})=>{if("keepfocus"in o&&!("keepFocus"in o))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in o&&!("noScroll"in o))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return we(a,o,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")i.push(a);else{const{href:o}=new URL(a,location.href);i.push(c=>c.href===o)}return De()},invalidateAll:()=>(U=!0,De()),preload_data:async a=>{const o=new URL(a,We(document));await Ce(o)},preload_code:re,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const h=await Je(t.branch.length,c,l.errors);if(h){const d=await Z({url:o,params:t.params,branch:c.slice(0,h.idx).concat(h.node),status:500,error:a.error,route:l});t=d.state;const m=ue();T.$set(d.props),m(),le().then(Le)}}else if(a.type==="redirect")we(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...G,form:a.data,status:a.status}},c=ue();T.$set(o),c(),a.type==="success"&&le().then(Le)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!y){const h={from:fe("from",{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(d=>d(h))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ie(P);try{sessionStorage[rt]=JSON.stringify(te)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||at(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Ye(o.composedPath()[0],n);if(!c)return;const{url:l,external:h,has:d}=ke(c,e),m=ce(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||d.download)return;if(h||m.reload){Ge({url:l,type:"link"})||o.preventDefault(),y=!0;return}const[b,w]=l.href.split("#");if(w!==void 0&&b===location.href.split("#")[0]){S=!0,Ie(P),t.url=l,K.page.set({...G,url:l}),K.page.notify();return}se({url:l,scroll:m.noscroll?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var b;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const d=new URL(((b=o.submitter)==null?void 0:b.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(Xe(d,e))return;const{noscroll:m,reload:v}=ce(o.target);v||(o.preventDefault(),o.stopPropagation(),d.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:d,scroll:m?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[q]){if(o.state[q]===P)return;const l=o.state[q]-P;se({url:new URL(location.href),scroll:te[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=o.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[q]:++P},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&K.navigating.set(null)})},_hydrate:async({status:a=200,error:o,node_ids:c,params:l,route:h,data:d,form:m})=>{f=!0;const v=new URL(location.href);({params:l={},route:h={id:null}}=oe(v,!1)||{});let b;try{const w=c.map(async(O,I)=>{const D=d[I];return ye({loader:ge[O],url:v,params:l,route:h,parent:async()=>{const R={};for(let E=0;E<I;E+=1)Object.assign(R,(await w[E]).data);return R},server_data_node:be(D)})});b=await Z({url:v,params:l,branch:await Promise.all(w),status:a,error:o,form:m,route:Oe.find(({id:O})=>O===h.id)??null})}catch(w){if(w instanceof tt){await ie(new URL(w.location,location.href));return}b=await ae({status:w instanceof Pe?w.status:500,error:await x(w,{url:v,params:l,route:h}),url:v,route:h})}Fe(b)}}}async function nt(r,e){var u;const n=new URL(r);n.pathname=It(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await me(n.href),s=await i.json();if(!i.ok)throw new Error(s);return(u=s.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=nn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function x(r,e){return r instanceof Pe?r.body:Wt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}const an=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(r,e){for(const n of an)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function ue(){return()=>{}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function ln({env:r,hydrate:e,paths:n,target:i,version:s}){_t(n),yt(s);const u=rn({target:i,base:n.base});wt({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{ln as start};
