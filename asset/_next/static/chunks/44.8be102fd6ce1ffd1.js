"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{813:function(e,r,t){var o=t(4836);r.Z=void 0;var i=o(t(4938)),l=t(5893),a=(0,i.default)((0,l.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");r.Z=a},8850:function(e,r,t){var o=t(3366),i=t(7462),l=t(7294),a=t(512),n=t(4780),s=t(2905),c=t(8216),d=t(1657),u=t(7224),h=t(948),g=t(5893);let p=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],useUtilityClasses=e=>{let{color:r,variant:t,classes:o,size:l}=e,a={root:["root",t,`size${(0,c.Z)(l)}`,"inherit"===r?"colorInherit":r]},s=(0,n.Z)(a,u.N,o);return(0,i.Z)({},o,s)},b=(0,h.ZP)(s.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,h.FO)(e)||"classes"===e,overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],r[`size${(0,c.Z)(t.size)}`],"inherit"===t.color&&r.colorInherit,r[(0,c.Z)(t.size)],r[t.color]]}})(({theme:e,ownerState:r})=>{var t,o;return(0,i.Z)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:null==(t=(o=e.palette).getContrastText)?void 0:t.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${u.Z.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},"small"===r.size&&{width:40,height:40},"medium"===r.size&&{width:48,height:48},"extended"===r.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===r.variant&&"small"===r.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===r.variant&&"medium"===r.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===r.color&&{color:"inherit"})},({theme:e,ownerState:r})=>(0,i.Z)({},"inherit"!==r.color&&"default"!==r.color&&null!=(e.vars||e).palette[r.color]&&{color:(e.vars||e).palette[r.color].contrastText,backgroundColor:(e.vars||e).palette[r.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[r.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[r.color].main}}}),({theme:e})=>({[`&.${u.Z.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),v=l.forwardRef(function(e,r){let t=(0,d.Z)({props:e,name:"MuiFab"}),{children:l,className:n,color:s="default",component:c="button",disabled:u=!1,disableFocusRipple:h=!1,focusVisibleClassName:v,size:f="large",variant:m="circular"}=t,x=(0,o.Z)(t,p),Z=(0,i.Z)({},t,{color:s,component:c,disabled:u,disableFocusRipple:h,size:f,variant:m}),w=useUtilityClasses(Z);return(0,g.jsx)(b,(0,i.Z)({className:(0,a.Z)(w.root,n),component:c,disabled:u,focusRipple:!h,focusVisibleClassName:(0,a.Z)(w.focusVisible,v),ownerState:Z,ref:r},x,{classes:w,children:l}))});r.Z=v},7224:function(e,r,t){t.d(r,{N:function(){return getFabUtilityClass}});var o=t(1588),i=t(4867);function getFabUtilityClass(e){return(0,i.Z)("MuiFab",e)}let l=(0,o.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]);r.Z=l},8298:function(e,r,t){t.d(r,{Z:function(){return useScrollTrigger}});var o=t(7462),i=t(3366),l=t(7294);let a=["getTrigger","target"];function defaultTrigger(e,r){let{disableHysteresis:t=!1,threshold:o=100,target:i}=r,l=e.current;return i&&(e.current=void 0!==i.pageYOffset?i.pageYOffset:i.scrollTop),(!!t||void 0===l||!(e.current<l))&&e.current>o}let n="undefined"!=typeof window?window:null;function useScrollTrigger(e={}){let{getTrigger:r=defaultTrigger,target:t=n}=e,s=(0,i.Z)(e,a),c=l.useRef(),[d,u]=l.useState(()=>r(c,s));return l.useEffect(()=>{let handleScroll=()=>{u(r(c,(0,o.Z)({target:t},s)))};return handleScroll(),t.addEventListener("scroll",handleScroll,{passive:!0}),()=>{t.removeEventListener("scroll",handleScroll,{passive:!0})}},[t,r,JSON.stringify(s)]),d}},9044:function(e,r,t){t.r(r);var o=t(5893);t(7294);var i=t(7357),l=t(5582),a=t(3972),n=t(7786),s=t(2734),c=t(8298),d=t(6628),u=t(8850),h=t(813),g=t(4080);let p={links:[{title:"Privacy",url:"/privacy"},{title:"Terms",url:"/terms"},{title:"Contact",url:"mailto:"+g.e.email}]};function ScrollTop(e){let{children:r}=e,t=(0,c.Z)({disableHysteresis:!0,threshold:100});return(0,o.jsx)(d.Z,{in:t,timeout:500,children:(0,o.jsx)(i.Z,{onClick:e=>{let r=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");if(r){let e={block:"center",behavior:"smooth"};setTimeout(()=>{r.scrollIntoView(e)},150)}},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:r})})}function Copyright(){return(0,o.jsxs)(a.Z,{variant:"subtitle2",align:"center",color:"#202124",gutterBottom:!0,children:["Copyright \xa9 ",(0,o.jsx)(n.Z,{color:"inherit",href:g.e.url,underline:"hover",children:g.e.title})," ",new Date().getFullYear(),"."]})}r.default=function(e){let r=(0,s.Z)(),{links:t}=p;return(0,o.jsxs)("footer",{children:[(0,o.jsx)(ScrollTop,{...e,children:(0,o.jsx)(u.Z,{size:"small","aria-label":"scroll back to top",sx:{bgcolor:"#FF9966","&:hover":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[8]},"&:active":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[12]}},children:(0,o.jsx)(h.Z,{})})}),(0,o.jsx)(i.Z,{component:"footer",sx:{bgcolor:"#f2f2f2",pt:2,pb:1},children:(0,o.jsxs)(l.Z,{maxWidth:"lg",children:[(0,o.jsx)(Copyright,{}),(0,o.jsx)(a.Z,{variant:"subtitle2",align:"center",component:"p",sx:{display:"flex",justifyContent:"center",gap:r.spacing(1)},children:t.map(e=>(0,o.jsx)(n.Z,{href:e.url,underline:"hover",color:"#202124",children:e.title},e.title))})]})})]})}}}]);