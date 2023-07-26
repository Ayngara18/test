"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{4813:(y,v,i)=>{i.d(v,{c:()=>r});var u=i(6953),c=i(2613),d=i(8077);const r=(n,s)=>{let t,e;const g=(a,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(a,p);E&&s(E)?E!==t&&(o(),l(E,w)):o()},l=(a,p)=>{t=a,e||(e=t);const w=t;(0,u.w)(()=>w.classList.add("ion-activated")),p()},o=(a=!1)=>{if(!t)return;const p=t;(0,u.w)(()=>p.classList.remove("ion-activated")),a&&e!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>g(a.currentX,a.currentY,c.a),onMove:a=>g(a.currentX,a.currentY,c.b),onEnd:()=>{o(!0),(0,c.h)(),e=void 0}})}},9920:(y,v,i)=>{i.d(v,{g:()=>c});var u=i(7643);const c=()=>{if(void 0!==u.w)return u.w.Capacitor}},278:(y,v,i)=>{i.d(v,{g:()=>u});const u=(s,t,e,g,l)=>d(s[1],t[1],e[1],g[1],l).map(o=>c(s[0],t[0],e[0],g[0],o)),c=(s,t,e,g,l)=>l*(3*t*Math.pow(l-1,2)+l*(-3*e*l+3*e+g*l))-s*Math.pow(l-1,3),d=(s,t,e,g,l)=>n((g-=l)-3*(e-=l)+3*(t-=l)-(s-=l),3*e-6*t+3*s,3*t-3*s,s).filter(a=>a>=0&&a<=1),n=(s,t,e,g)=>{if(0===s)return((s,t,e)=>{const g=t*t-4*s*e;return g<0?[]:[(-t+Math.sqrt(g))/(2*s),(-t-Math.sqrt(g))/(2*s)]})(t,e,g);const l=(3*(e/=s)-(t/=s)*t)/3,o=(2*t*t*t-9*t*e+27*(g/=s))/27;if(0===l)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-l),-Math.sqrt(-l)];const a=Math.pow(o/2,2)+Math.pow(l/3,3);if(0===a)return[Math.pow(o/2,.5)-t/3];if(a>0)return[Math.pow(-o/2+Math.sqrt(a),1/3)-Math.pow(o/2+Math.sqrt(a),1/3)-t/3];const p=Math.sqrt(Math.pow(-l/3,3)),w=Math.acos(-o/(2*Math.sqrt(Math.pow(-l/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-t/3,E*Math.cos((w+2*Math.PI)/3)-t/3,E*Math.cos((w+4*Math.PI)/3)-t/3]}},1776:(y,v,i)=>{i.d(v,{i:()=>u});const u=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3433:(y,v,i)=>{i.r(v),i.d(v,{startFocusVisible:()=>r});const u="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=n=>{let s=[],t=!0;const e=n?n.shadowRoot:document,g=n||document.body,l=M=>{s.forEach(f=>f.classList.remove(u)),M.forEach(f=>f.classList.add(u)),s=M},o=()=>{t=!1,l([])},a=M=>{t=d.includes(M.key),t||l([])},p=M=>{if(t&&void 0!==M.composedPath){const f=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));l(f)}},w=()=>{e.activeElement===g&&l([])};return e.addEventListener("keydown",a),e.addEventListener("focusin",p),e.addEventListener("focusout",w),e.addEventListener("touchstart",o,{passive:!0}),e.addEventListener("mousedown",o),{destroy:()=>{e.removeEventListener("keydown",a),e.removeEventListener("focusin",p),e.removeEventListener("focusout",w),e.removeEventListener("touchstart",o),e.removeEventListener("mousedown",o)},setFocus:l}}},2587:(y,v,i)=>{i.d(v,{c:()=>c});var u=i(544);const c=s=>{const t=s;let e;return{hasLegacyControl:()=>{if(void 0===e){const l=void 0!==t.label||d(t),o=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,a=(0,u.h)(t);e=!0===t.legacy||!l&&!o&&null!==a}return e}}},d=s=>null!==s.shadowRoot&&!!(r.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||n.includes(s.tagName)&&""!==s.textContent),r=["ION-RANGE"],n=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},2613:(y,v,i)=>{i.d(v,{I:()=>c,a:()=>t,b:()=>e,c:()=>s,d:()=>l,h:()=>g});var u=i(9920),c=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(c||{});const r={getEngine(){const o=window.TapticEngine;if(o)return o;const a=(0,u.g)();return null!=a&&a.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,u.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,u.g)(),impact(o){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?o.style:o.style.toLowerCase();a.impact({style:p})},notification(o){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?o.type:o.type.toLowerCase();a.notification({type:p})},selection(){const o=this.isCapacitor()?c.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},n=()=>r.available(),s=()=>{n()&&r.selection()},t=()=>{n()&&r.selectionStart()},e=()=>{n()&&r.selectionChanged()},g=()=>{n()&&r.selectionEnd()},l=o=>{n()&&r.impact(o)}},9993:(y,v,i)=>{i.d(v,{a:()=>u,b:()=>p,c:()=>t,d:()=>w,e:()=>D,f:()=>s,g:()=>E,h:()=>d,i:()=>c,j:()=>O,k:()=>C,l:()=>e,m:()=>o,n:()=>M,o:()=>l,p:()=>n,q:()=>r,r:()=>_,s:()=>h,t:()=>a,u:()=>f,v:()=>m,w:()=>g});const u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4435:(y,v,i)=>{i.d(v,{I:()=>s,a:()=>l,b:()=>n,c:()=>p,d:()=>E,f:()=>o,g:()=>g,i:()=>e,p:()=>w,r:()=>M,s:()=>a});var u=i(5861),c=i(544),d=i(7690);const n="ion-content",s=".ion-content-scroll-host",t=`${n}, ${s}`,e=f=>"ION-CONTENT"===f.tagName,g=function(){var f=(0,u.Z)(function*(m){return e(m)?(yield new Promise(_=>(0,c.c)(m,_)),m.getScrollElement()):m});return function(_){return f.apply(this,arguments)}}(),l=f=>f.querySelector(s)||f.querySelector(t),o=f=>f.closest(t),a=(f,m)=>e(f)?f.scrollToTop(m):Promise.resolve(f.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),p=(f,m,_,O)=>e(f)?f.scrollByPoint(m,_,O):Promise.resolve(f.scrollBy({top:_,left:m,behavior:O>0?"smooth":"auto"})),w=f=>(0,d.b)(f,n),E=f=>{if(e(f)){const _=f.scrollY;return f.scrollY=!1,_}return f.style.setProperty("overflow","hidden"),!0},M=(f,m)=>{e(f)?f.scrollY=m:f.style.removeProperty("overflow")}},1685:(y,v,i)=>{i.d(v,{c:()=>r,g:()=>n});var u=i(7643),c=i(544),d=i(7690);const r=(t,e,g)=>{let l,o;void 0!==u.w&&"MutationObserver"in u.w&&(l=new MutationObserver(E=>{for(const M of E)for(const f of M.addedNodes)if(f.nodeType===Node.ELEMENT_NODE&&f.slot===e)return g(),void(0,c.r)(()=>a(f))}),l.observe(t,{childList:!0}));const a=E=>{var M;o&&(o.disconnect(),o=void 0),o=new MutationObserver(f=>{g();for(const m of f)for(const _ of m.removedNodes)_.nodeType===Node.ELEMENT_NODE&&_.slot===e&&w()}),o.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},w=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{l&&(l.disconnect(),l=void 0),w()}}},n=(t,e,g)=>{const l=null==t?0:t.toString().length,o=s(l,e);if(void 0===g)return o;try{return g(l,e)}catch(a){return(0,d.a)("Exception in provided `counterFormatter`.",a),o}},s=(t,e)=>`${t} / ${e}`},3701:(y,v,i)=>{i.r(v),i.d(v,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>f,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>l,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>o,trackViewportChanges:()=>O});var u=i(3812);i(9920),i(7643);const r="ionKeyboardDidShow",n="ionKeyboardDidHide";let t={},e={},g=!1;const l=()=>{t={},e={},g=!1},o=h=>{if(u.K.getEngine())a(h);else{if(!h.visualViewport)return;e=C(h.visualViewport),h.visualViewport.onresize=()=>{O(h),E()||M(h)?p(h):f(h)&&w(h)}}},a=h=>{h.addEventListener("keyboardDidShow",D=>p(h,D)),h.addEventListener("keyboardDidHide",()=>w(h))},p=(h,D)=>{m(h,D),g=!0},w=h=>{_(h),g=!1},E=()=>!g&&t.width===e.width&&(t.height-e.height)*e.scale>150,M=h=>g&&!f(h),f=h=>g&&e.height===h.innerHeight,m=(h,D)=>{const L=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:h.innerHeight-e.height}});h.dispatchEvent(L)},_=h=>{const D=new CustomEvent(n);h.dispatchEvent(D)},O=h=>{t=Object.assign({},e),e=C(h.visualViewport)},C=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},3812:(y,v,i)=>{i.d(v,{K:()=>r,a:()=>d});var u=i(9920),c=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(c||{}),d=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(d||{});const r={getEngine(){const n=(0,u.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(s=>{if(s.code!==c.Unimplemented)throw s}):Promise.resolve(void 0)}}},2930:(y,v,i)=>{i.d(v,{c:()=>s});var u=i(5861),c=i(7643),d=i(3812);const r=t=>{if(void 0===c.d||t===d.a.None||void 0===t)return null;const e=c.d.querySelector("ion-app");return null!=e?e:c.d.body},n=t=>{const e=r(t);return null===e?0:e.clientHeight},s=function(){var t=(0,u.Z)(function*(e){let g,l,o,a;const p=function(){var m=(0,u.Z)(function*(){const _=yield d.K.getResizeMode(),O=void 0===_?void 0:_.mode;g=()=>{void 0===a&&(a=n(O)),o=!0,w(o,O)},l=()=>{o=!1,w(o,O)},null==c.w||c.w.addEventListener("keyboardWillShow",g),null==c.w||c.w.addEventListener("keyboardWillHide",l)});return function(){return m.apply(this,arguments)}}(),w=(m,_)=>{e&&e(m,E(_))},E=m=>{if(0===a||a===n(m))return;const _=r(m);return null!==_?new Promise(O=>{const h=new ResizeObserver(()=>{_.clientHeight===a&&(h.disconnect(),O())});h.observe(_)}):void 0};return yield p(),{init:p,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",g),null==c.w||c.w.removeEventListener("keyboardWillHide",l),g=l=void 0},isKeyboardVisible:()=>o}});return function(g){return t.apply(this,arguments)}}()},9718:(y,v,i)=>{i.d(v,{c:()=>d});var u=i(7643),c=i(544);const d=(r,n,s)=>{let t;const e=()=>!(void 0===n()||void 0!==r.label||null===s()),l=()=>{const a=n();if(void 0===a)return;if(!e())return void a.style.removeProperty("width");const p=s().scrollWidth;if(0===p&&null===a.offsetParent&&void 0!==u.w&&"IntersectionObserver"in u.w){if(void 0!==t)return;const w=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(l(),w.disconnect(),t=void 0)},{threshold:.01,root:r});w.observe(a)}else a.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{e()&&(0,c.r)(()=>{l()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},1173:(y,v,i)=>{i.d(v,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(d,r,n)=>{const s=d*r/n-d+"ms",t=2*Math.PI*r/n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(d,r,n)=>{const s=r/n,t=d*s-d+"ms",e=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,r,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":d*r/n-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":d*r/n-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,r,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":d*r/n-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":d*r/n-d+"ms"}})}}},4666:(y,v,i)=>{i.r(v),i.d(v,{createSwipeBackGesture:()=>n});var u=i(544),c=i(1776),d=i(8077);i(4587);const n=(s,t,e,g,l)=>{const o=s.ownerDocument.defaultView;let a=(0,c.i)(s);const w=_=>a?-_.deltaX:_.deltaX;return(0,d.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:_=>(a=(0,c.i)(s),(_=>{const{startX:C}=_;return a?C>=o.innerWidth-50:C<=50})(_)&&t()),onStart:e,onMove:_=>{const C=w(_)/o.innerWidth;g(C)},onEnd:_=>{const O=w(_),C=o.innerWidth,h=O/C,D=(_=>a?-_.velocityX:_.velocityX)(_),L=D>=0&&(D>.2||O>C/2),P=(L?1-h:h)*C;let x=0;if(P>5){const T=P/Math.abs(D);x=Math.min(T,540)}l(L,h<=0?.01:(0,u.l)(0,h,.9999),x)}})}},8639:(y,v,i)=>{i.d(v,{w:()=>u});const u=(r,n,s)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{s(c(e,n))});return t.observe(r,{childList:!0,subtree:!0}),t},c=(r,n)=>{let s;return r.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)s=d(t.addedNodes[e],n)||s}),s},d=(r,n)=>1!==r.nodeType?void 0:(r.tagName===n.toUpperCase()?[r]:Array.from(r.querySelectorAll(n))).find(t=>t.value===r.value)},4281:(y,v,i)=>{i.d(v,{Z:()=>c});var u=i(6689);let c=(()=>{class d{}return d.\u0275fac=function(n){return new(n||d)},d.\u0275cmp=u.Xpm({type:d,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(n,s){1&n&&(u.TgZ(0,"div",0)(1,"strong"),u._uU(2),u.qZA(),u.TgZ(3,"p"),u._uU(4,"Explore "),u.TgZ(5,"a",1),u._uU(6,"UI Components"),u.qZA()()()),2&n&&(u.xp6(2),u.Oqu(s.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),d})()},3554:(y,v,i)=>{i.d(v,{e:()=>n});var u=i(6814),c=i(95),d=i(5548),r=i(6689);let n=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[u.ez,c.u5,d.Pc]}),s})()}}]);