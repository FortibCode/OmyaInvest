import{j as d,r}from"./app-DRcBKyRs.js";const L="/images/omya-invest-logo.png",A="/images/omya-invest-logo-light.png";function $({className:t="h-9",light:e=!1,alt:o="OMYA INVEST"}){return d.jsx("span",{className:`inline-flex items-center justify-center select-none ${t}`,children:d.jsx("img",{src:e?A:L,alt:o,draggable:!1,className:"h-full w-auto object-contain"})})}/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(...t)=>t.filter((e,o,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,s)=>s?s.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=t=>{const e=j(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},S=r.createContext({}),W=()=>r.useContext(S),v=r.forwardRef(({color:t,size:e,strokeWidth:o,absoluteStrokeWidth:s,className:n="",children:a,iconNode:p,...l},C)=>{const{size:c=24,strokeWidth:u=2,absoluteStrokeWidth:g=!1,color:f="currentColor",className:x=""}=W()??{},k=s??g?Number(o??u)*24/Number(e??c):o??u;return r.createElement("svg",{ref:C,...i,width:e??c??i.width,height:e??c??i.height,stroke:t??f,strokeWidth:k,className:h("lucide",x,n),...!a&&!O(l)&&{"aria-hidden":"true"},...l},[...p.map(([w,y])=>r.createElement(w,y)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=(t,e)=>{const o=r.forwardRef(({className:s,...n},a)=>r.createElement(v,{ref:a,iconNode:e,className:h(`lucide-${b(m(t))}`,`lucide-${t}`,s),...n}));return o.displayName=m(t),o};/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],I=E("shield-check",N);export{$ as O,I as S,E as c};
