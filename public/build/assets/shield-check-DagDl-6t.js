import{j as s,r as n}from"./app-B-YAoStL.js";function E({className:t="h-9",light:e=!1}){const o=e?"#FFFFFF":"#075985",r=e?"#38BDF8":"#0284C7";return s.jsx("div",{className:`inline-flex flex-col items-center justify-center select-none ${t}`,children:s.jsxs("svg",{viewBox:"0 0 320 75",className:"h-full w-auto",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsxs("g",{stroke:o,strokeWidth:"7",strokeLinecap:"round",fill:"none",children:[s.jsx("path",{d:"M 28 12 A 22 22 0 0 0 28 52"}),s.jsx("path",{d:"M 38 12 A 22 22 0 0 1 38 52"})]}),s.jsx("path",{d:"M 68 52 V 12 L 86 38 L 104 12 V 52",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),s.jsx("path",{d:"M 124 12 L 140 34 V 52 M 156 12 L 140 34",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),s.jsx("path",{d:"M 174 52 L 194 12 L 214 52",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),s.jsx("text",{x:"121",y:"71",textAnchor:"middle",fill:r,fontSize:"16",fontWeight:"700",letterSpacing:"9",fontFamily:"'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif",children:"INVEST"})]})})}/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(...t)=>t.filter((e,o,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,r)=>r?r.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t=>{const e=y(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},A=n.createContext({}),S=()=>n.useContext(A),v=n.forwardRef(({color:t,size:e,strokeWidth:o,absoluteStrokeWidth:r,className:i="",children:a,iconNode:f,...d},k)=>{const{size:c=24,strokeWidth:u=2,absoluteStrokeWidth:p=!1,color:m="currentColor",className:C=""}=S()??{},L=r??p?Number(o??u)*24/Number(e??c):o??u;return n.createElement("svg",{ref:k,...l,width:e??c??l.width,height:e??c??l.height,stroke:t??m,strokeWidth:L,className:x("lucide",C,i),...!a&&!W(d)&&{"aria-hidden":"true"},...d},[...f.map(([w,j])=>n.createElement(w,j)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=(t,e)=>{const o=n.forwardRef(({className:r,...i},a)=>n.createElement(v,{ref:a,iconNode:e,className:x(`lucide-${g(h(t))}`,`lucide-${t}`,r),...i}));return o.displayName=h(t),o};/**
 * @license lucide-react v1.29.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],N=F("shield-check",b);export{E as O,N as S,F as c};
