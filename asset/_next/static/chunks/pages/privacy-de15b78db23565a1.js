(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915,44],{813:function(e,t,r){"use strict";var i=r(4836);t.Z=void 0;var n=i(r(4938)),o=r(5893),a=(0,n.default)((0,o.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");t.Z=a},7720:function(e,t,r){"use strict";var i=r(3366),n=r(7462),o=r(7294),a=r(512),l=r(4780),s=r(1796),c=r(948),d=r(1657),h=r(5097),u=r(5893);let p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],useUtilityClasses=e=>{let{absolute:t,children:r,classes:i,flexItem:n,light:o,orientation:a,textAlign:s,variant:c}=e;return(0,l.Z)({root:["root",t&&"absolute",c,o&&"light","vertical"===a&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===a&&"withChildrenVertical","right"===s&&"vertical"!==a&&"textAlignRight","left"===s&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]},h.V,i)},g=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:e})=>(0,n.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}}),({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}}),({ownerState:e})=>(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),m=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),f=o.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:l,className:s,component:c=l?"div":"hr",flexItem:h=!1,light:f=!1,orientation:x="horizontal",role:v="hr"!==c?"separator":void 0,textAlign:b="center",variant:y="fullWidth"}=r,Z=(0,i.Z)(r,p),w=(0,n.Z)({},r,{absolute:o,component:c,flexItem:h,light:f,orientation:x,role:v,textAlign:b,variant:y}),j=useUtilityClasses(w);return(0,u.jsx)(g,(0,n.Z)({as:c,className:(0,a.Z)(j.root,s),role:v,ref:t,ownerState:w},Z,{children:l?(0,u.jsx)(m,{className:j.wrapper,ownerState:w,children:l}):null}))});f.muiSkipListHighlight=!0,t.Z=f},8850:function(e,t,r){"use strict";var i=r(3366),n=r(7462),o=r(7294),a=r(512),l=r(4780),s=r(2905),c=r(8216),d=r(1657),h=r(7224),u=r(948),p=r(5893);let g=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],useUtilityClasses=e=>{let{color:t,variant:r,classes:i,size:o}=e,a={root:["root",r,`size${(0,c.Z)(o)}`,"inherit"===t?"colorInherit":t]},s=(0,l.Z)(a,h.N,i);return(0,n.Z)({},i,s)},m=(0,u.ZP)(s.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`size${(0,c.Z)(r.size)}`],"inherit"===r.color&&t.colorInherit,t[(0,c.Z)(r.size)],t[r.color]]}})(({theme:e,ownerState:t})=>{var r,i;return(0,n.Z)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:null==(r=(i=e.palette).getContrastText)?void 0:r.call(i,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${h.Z.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},"small"===t.size&&{width:40,height:40},"medium"===t.size&&{width:48,height:48},"extended"===t.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===t.variant&&"small"===t.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===t.variant&&"medium"===t.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===t.color&&{color:"inherit"})},({theme:e,ownerState:t})=>(0,n.Z)({},"inherit"!==t.color&&"default"!==t.color&&null!=(e.vars||e).palette[t.color]&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}}),({theme:e})=>({[`&.${h.Z.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),f=o.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiFab"}),{children:o,className:l,color:s="default",component:c="button",disabled:h=!1,disableFocusRipple:u=!1,focusVisibleClassName:f,size:x="large",variant:v="circular"}=r,b=(0,i.Z)(r,g),y=(0,n.Z)({},r,{color:s,component:c,disabled:h,disableFocusRipple:u,size:x,variant:v}),Z=useUtilityClasses(y);return(0,p.jsx)(m,(0,n.Z)({className:(0,a.Z)(Z.root,l),component:c,disabled:h,focusRipple:!u,focusVisibleClassName:(0,a.Z)(Z.focusVisible,f),ownerState:y,ref:t},b,{classes:Z,children:o}))});t.Z=f},7224:function(e,t,r){"use strict";r.d(t,{N:function(){return getFabUtilityClass}});var i=r(1588),n=r(4867);function getFabUtilityClass(e){return(0,n.Z)("MuiFab",e)}let o=(0,i.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]);t.Z=o},8298:function(e,t,r){"use strict";r.d(t,{Z:function(){return useScrollTrigger}});var i=r(7462),n=r(3366),o=r(7294);let a=["getTrigger","target"];function defaultTrigger(e,t){let{disableHysteresis:r=!1,threshold:i=100,target:n}=t,o=e.current;return n&&(e.current=void 0!==n.pageYOffset?n.pageYOffset:n.scrollTop),(!!r||void 0===o||!(e.current<o))&&e.current>i}let l="undefined"!=typeof window?window:null;function useScrollTrigger(e={}){let{getTrigger:t=defaultTrigger,target:r=l}=e,s=(0,n.Z)(e,a),c=o.useRef(),[d,h]=o.useState(()=>t(c,s));return o.useEffect(()=>{let handleScroll=()=>{h(t(c,(0,i.Z)({target:r},s)))};return handleScroll(),r.addEventListener("scroll",handleScroll,{passive:!0}),()=>{r.removeEventListener("scroll",handleScroll,{passive:!0})}},[r,t,JSON.stringify(s)]),d}},3030:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return r(1069)}])},9044:function(e,t,r){"use strict";r.r(t);var i=r(5893);r(7294);var n=r(7357),o=r(5582),a=r(3972),l=r(7786),s=r(2734),c=r(8298),d=r(6628),h=r(8850),u=r(813),p=r(4080);let g={links:[{title:"Privacy",url:"/privacy"},{title:"Terms",url:"/terms"},{title:"Contact",url:"mailto:"+p.e.email}]};function ScrollTop(e){let{children:t}=e,r=(0,c.Z)({disableHysteresis:!0,threshold:100});return(0,i.jsx)(d.Z,{in:r,timeout:500,children:(0,i.jsx)(n.Z,{onClick:e=>{let t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");if(t){let e={block:"center",behavior:"smooth"};setTimeout(()=>{t.scrollIntoView(e)},150)}},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:t})})}function Copyright(){return(0,i.jsxs)(a.Z,{variant:"subtitle2",align:"center",color:"#202124",gutterBottom:!0,children:["Copyright \xa9 ",(0,i.jsx)(l.Z,{color:"inherit",href:p.e.url,underline:"hover",children:p.e.title})," ",new Date().getFullYear(),"."]})}t.default=function(e){let t=(0,s.Z)(),{links:r}=g;return(0,i.jsxs)("footer",{children:[(0,i.jsx)(ScrollTop,{...e,children:(0,i.jsx)(h.Z,{size:"small","aria-label":"scroll back to top",sx:{bgcolor:"#FF9966","&:hover":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[8]},"&:active":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[12]}},children:(0,i.jsx)(u.Z,{})})}),(0,i.jsx)(n.Z,{component:"footer",sx:{bgcolor:"#f2f2f2",pt:2,pb:1},children:(0,i.jsxs)(o.Z,{maxWidth:"lg",children:[(0,i.jsx)(Copyright,{}),(0,i.jsx)(a.Z,{variant:"subtitle2",align:"center",component:"p",sx:{display:"flex",justifyContent:"center",gap:t.spacing(1)},children:r.map(e=>(0,i.jsx)(l.Z,{href:e.url,underline:"hover",color:"#202124",children:e.title},e.title))})]})})]})}},3454:function(e,t,r){"use strict";var i=r(5893),n=r(7294),o=r(948),a=r(1796),l=r(2734),s=r(9206),c=r(7357),d=r(3808),h=r(4799),u=r(3972),p=r(4486),g=r(326),m=r(5582),f=r(9397),x=r(3931),v=r(2761),b=r(8543),y=r(7952),Z=r(5889),w=r(1987),j=r(8889),C=r(3468),k=r(534),S=r(1163),P=r(9880),z=r(4080);let F={sections:[{title:"Foodie",url:z.e.url+"/topic/Foodie",iconComponent:(0,i.jsx)(j.Z,{fontSize:"medium"})},{title:"Guide",url:z.e.url+"/topic/Guide",iconComponent:(0,i.jsx)(C.Z,{fontSize:"medium"})},{title:"Attractions",url:z.e.url+"/topic/Attractions",iconComponent:(0,i.jsx)(k.Z,{fontSize:"medium"})}]},W={min:2,max:64},T={url:z.e.logoSmallLightUrl,description:"".concat(z.e.title," Logo")},L=(0,o.ZP)("div")(e=>{let{theme:t}=e;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:(0,a.Fq)(t.palette.common.white,.45),"&:hover":{backgroundColor:(0,a.Fq)(t.palette.common.white,.55)},marginLeft:0,width:"100%",[t.breakpoints.up("sm")]:{marginLeft:t.spacing(1),width:"auto"}}}),R=(0,o.ZP)("div")(e=>{let{theme:t}=e;return{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}),I=(0,o.ZP)(b.ZP)(e=>{let{theme:t}=e;return{color:"inherit",width:"100%","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),[t.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}},"&:not(:placeholder-shown)":{height:"100%"}}}});t.Z=function(){let e=(0,l.Z)(),t=(0,S.useRouter)(),{sections:r}=F,[o,a]=n.useState(!1),[b,j]=n.useState(null),[C,k]=n.useState(""),[B,N]=n.useState(),M=n.useRef(null);n.useEffect(()=>{M.current&&N(M.current.offsetWidth)},[M]);let handleCloseNavMenu=()=>{j(null),a(!1)},handleKeyPress=e=>{"Enter"!==e.key||!(0,P.Ej)(C,W.min,W.max)||(0,P.FU)(C)||t.push("/search?k=".concat(C)).then(()=>{handleCloseNavMenu(),k("")})},A=z.e.title;return(0,i.jsx)("header",{children:(0,i.jsx)(s.Z,{position:"sticky",sx:{background:"linear-gradient(to left, #B57EDC, #FF9966)"},children:(0,i.jsx)(m.Z,{maxWidth:"false",ref:M,children:(0,i.jsxs)(d.Z,{disableGutters:!0,variant:"dense",children:[(0,i.jsx)(y.Z,{src:T.url,alt:T.description,sx:{width:24,height:24,display:{xs:"none",md:"flex"},mr:1,ml:-1}}),(0,i.jsx)(u.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontWeight:"bold",letterSpacing:".1rem",wordSpacing:".1rem",color:"inherit",textDecoration:"none"},children:A}),(0,i.jsxs)(c.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[(0,i.jsx)(h.Z,{size:"large","aria-label":"App Bar Menu Icon","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e=>{j(e.currentTarget),a(!0)},color:"inherit",sx:{paddingLeft:0},children:(0,i.jsx)(g.Z,{})}),(0,i.jsx)(p.Z,{id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:o,onClose:handleCloseNavMenu,BackdropComponent:Z.Z,BackdropProps:{onClick:()=>{j(null),a(!1)}},PaperProps:{style:{width:"100%",maxWidth:B}},sx:{display:{xs:"block",md:"none","& .MuiList-root":{paddingTop:0,paddingBottom:0}}},children:(0,i.jsx)(w.Z,{sx:{backgroundColor:"#FFE4B5"},children:(0,i.jsx)(x.Z,{children:(0,i.jsxs)(L,{sx:{mt:e.spacing(1),mb:e.spacing(1)},children:[(0,i.jsx)(R,{children:(0,i.jsx)(v.Z,{sx:{color:"#8B4513"}})}),(0,i.jsx)(I,{id:"search-input-xs",placeholder:"Search…",inputProps:{"aria-label":"search",maxLength:W.max},value:C,onChange:e=>k(e.target.value),onKeyPress:handleKeyPress})]})},"search")})}),(0,i.jsx)("a",{href:z.e.url,style:{display:"flex",alignItems:"center"},children:(0,i.jsx)(y.Z,{src:T.url,alt:T.description,sx:{width:30,height:30,display:{xs:"flex",md:"none"}}})}),r.map(t=>(0,i.jsxs)(f.Z,{onClick:handleCloseNavMenu,href:t.url,target:"_self",sx:{my:1,color:"white",display:"flex",flexDirection:"column",alignItems:"center",textDecoration:"underline",fontWeight:"bold",fontSize:"clamp(0.6rem, 4vw, 0.7rem)",[e.breakpoints.up("md")]:{marginLeft:e.spacing(4)}},children:[t.iconComponent,t.title]},t.title))]}),(0,i.jsx)(c.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"},justifyContent:"flex-start"},children:r.map(t=>(0,i.jsxs)(f.Z,{onClick:handleCloseNavMenu,href:t.url,target:"_self",sx:{my:1,color:"white",display:"flex",flexDirection:"column",alignItems:"center",textDecoration:"underline",fontWeight:"bold",fontSize:"clamp(0.6rem, 4vw, 0.7rem)",[e.breakpoints.up("md")]:{marginLeft:e.spacing(4)}},children:[t.iconComponent,t.title]},t.title))}),(0,i.jsxs)(L,{sx:{display:{xs:"none",md:"flex"}},children:[(0,i.jsx)(R,{children:(0,i.jsx)(v.Z,{})}),(0,i.jsx)(I,{id:"search-input-md",placeholder:"Search…",inputProps:{"aria-label":"search",maxLength:W.max},value:C,onChange:e=>k(e.target.value),onKeyPress:handleKeyPress})]})]})})})})}},1069:function(e,t,r){"use strict";r.r(t);var i=r(5893);r(7294);var n=r(5582),o=r(3972),a=r(7720),l=r(7786),s=r(9008),c=r.n(s),d=r(9044),h=r(3454),u=r(2734),p=r(4080);t.default=()=>{let e=(0,u.Z)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c(),{children:(0,i.jsx)("title",{children:"Privacy Policy | "+p.e.title})}),(0,i.jsxs)(n.Z,{maxWidth:"lg",children:[(0,i.jsx)("div",{id:"back-to-top-anchor"}),(0,i.jsx)(h.Z,{}),(0,i.jsxs)("main",{children:[(0,i.jsx)(o.Z,{variant:"h5",component:"h1",fontWeight:"bold",gutterBottom:!0,marginTop:e.spacing(3),children:"Privacy Policy"}),(0,i.jsx)(a.Z,{}),(0,i.jsxs)(o.Z,{variant:"subtitle1",paragraph:!0,marginTop:e.spacing(1),children:["Welcome to"," ",(0,i.jsx)(l.Z,{href:p.e.url,children:p.e.title}),". We highly value your privacy and are committed to protecting your personal information on our website. Please read this privacy policy carefully before using our website."]}),(0,i.jsx)(o.Z,{variant:"h6",gutterBottom:!0,children:(0,i.jsx)("strong",{children:"1. Information Collection"})}),(0,i.jsx)(o.Z,{paragraph:!0,children:"Our website currently does not collect any personally identifiable information. We only record general information related to website traffic and performance, such as visitors' IP addresses, browser types, and visit times. This information is used for analyzing website traffic and improving user experience."}),(0,i.jsx)(o.Z,{variant:"h6",gutterBottom:!0,children:(0,i.jsx)("strong",{children:"2. Cookies and Tracking Technologies"})}),(0,i.jsx)(o.Z,{paragraph:!0,children:"We may use Cookies and similar tracking technologies to enhance user experience and analyze website traffic. This information will only be used for internal analysis and will not be used to identify individual users."}),(0,i.jsx)(o.Z,{variant:"h6",gutterBottom:!0,children:(0,i.jsx)("strong",{children:"3. Third-Party Links"})}),(0,i.jsx)(o.Z,{paragraph:!0,children:"Our website may contain links to third-party websites. Please note that we are not responsible for the privacy practices of these websites, and your visit to these links will be subject to the privacy policy of the respective websites."}),(0,i.jsx)(o.Z,{variant:"h6",gutterBottom:!0,children:(0,i.jsx)("strong",{children:"4. Security"})}),(0,i.jsx)(o.Z,{paragraph:!0,children:"We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure."}),(0,i.jsx)(o.Z,{variant:"h6",gutterBottom:!0,children:(0,i.jsx)("strong",{children:"5. Privacy of Minors"})}),(0,i.jsx)(o.Z,{paragraph:!0,children:"Our website does not contain adult content and is designed to provide information about travel in Japan for a general audience. However, we still value the privacy protection of minors. We recommend that parents or guardians provide supervision and guidance when minors use our website."}),(0,i.jsx)(o.Z,{paragraph:!0,children:"If you are a minor, please use our website under the supervision of a parent or guardian. We do not intentionally collect personal information from minors. If you are a parent or guardian and are concerned that your child has provided personal information, please contact us so that we can take necessary steps to delete such information."}),(0,i.jsx)(o.Z,{variant:"h6",gutterBottom:!0,children:(0,i.jsx)("strong",{children:"6. Changes to Privacy Policy"})}),(0,i.jsx)(o.Z,{paragraph:!0,children:"We reserve the right to modify this privacy policy at any time. Any changes will be posted on this page and become effective."}),(0,i.jsx)(o.Z,{variant:"h6",gutterBottom:!0,children:(0,i.jsx)("strong",{children:"7. Contact Us"})}),(0,i.jsxs)(o.Z,{paragraph:!0,children:["If you have any questions or concerns about our privacy policy, please contact us via email at"," ",(0,i.jsx)(l.Z,{href:"mailto:"+p.e.email,children:p.e.email}),"."]}),(0,i.jsx)(a.Z,{sx:{mb:1}}),(0,i.jsx)(o.Z,{variant:"caption",color:"textSecondary",children:"Effective Date: 2023-12-12"})]})]}),(0,i.jsx)(d.default,{})]})}},9880:function(e,t,r){"use strict";function matchLengthRange(e,t,r){return!!e&&""!==e.trim()&&e.length>=t&&e.length<=r}function containsIllegalCharacter(e){let t=/[\u4e00-\u9fa5]/.test(e),r=/[a-zA-Z]/.test(e),i=/(http|https):\/\/\S+/.test(e),n=/\S+@\S+\.\S+/.test(e),o=/<[a-z][\s\S]*>/i.test(e);return t||!r||i||n||o}r.d(t,{Ej:function(){return matchLengthRange},FU:function(){return containsIllegalCharacter}})}},function(e){e.O(0,[672,774,888,179],function(){return e(e.s=3030)}),_N_E=e.O()}]);