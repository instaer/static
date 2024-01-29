(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603,44],{813:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var o=n(r(4938)),i=r(5893),a=(0,o.default)((0,i.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");t.Z=a},8850:function(e,t,r){"use strict";var n=r(3366),o=r(7462),i=r(7294),a=r(512),s=r(4780),l=r(2905),c=r(8216),d=r(1657),h=r(7224),u=r(948),p=r(5893);let x=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],useUtilityClasses=e=>{let{color:t,variant:r,classes:n,size:i}=e,a={root:["root",r,`size${(0,c.Z)(i)}`,"inherit"===t?"colorInherit":t]},l=(0,s.Z)(a,h.N,n);return(0,o.Z)({},n,l)},m=(0,u.ZP)(l.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`size${(0,c.Z)(r.size)}`],"inherit"===r.color&&t.colorInherit,t[(0,c.Z)(r.size)],t[r.color]]}})(({theme:e,ownerState:t})=>{var r,n;return(0,o.Z)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:null==(r=(n=e.palette).getContrastText)?void 0:r.call(n,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${h.Z.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},"small"===t.size&&{width:40,height:40},"medium"===t.size&&{width:48,height:48},"extended"===t.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===t.variant&&"small"===t.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===t.variant&&"medium"===t.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===t.color&&{color:"inherit"})},({theme:e,ownerState:t})=>(0,o.Z)({},"inherit"!==t.color&&"default"!==t.color&&null!=(e.vars||e).palette[t.color]&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}}),({theme:e})=>({[`&.${h.Z.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),g=i.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiFab"}),{children:i,className:s,color:l="default",component:c="button",disabled:h=!1,disableFocusRipple:u=!1,focusVisibleClassName:g,size:f="large",variant:b="circular"}=r,v=(0,n.Z)(r,x),y=(0,o.Z)({},r,{color:l,component:c,disabled:h,disableFocusRipple:u,size:f,variant:b}),Z=useUtilityClasses(y);return(0,p.jsx)(m,(0,o.Z)({className:(0,a.Z)(Z.root,s),component:c,disabled:h,focusRipple:!u,focusVisibleClassName:(0,a.Z)(Z.focusVisible,g),ownerState:y,ref:t},v,{classes:Z,children:i}))});t.Z=g},7224:function(e,t,r){"use strict";r.d(t,{N:function(){return getFabUtilityClass}});var n=r(1588),o=r(4867);function getFabUtilityClass(e){return(0,o.Z)("MuiFab",e)}let i=(0,n.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]);t.Z=i},8298:function(e,t,r){"use strict";r.d(t,{Z:function(){return useScrollTrigger}});var n=r(7462),o=r(3366),i=r(7294);let a=["getTrigger","target"];function defaultTrigger(e,t){let{disableHysteresis:r=!1,threshold:n=100,target:o}=t,i=e.current;return o&&(e.current=void 0!==o.pageYOffset?o.pageYOffset:o.scrollTop),(!!r||void 0===i||!(e.current<i))&&e.current>n}let s="undefined"!=typeof window?window:null;function useScrollTrigger(e={}){let{getTrigger:t=defaultTrigger,target:r=s}=e,l=(0,o.Z)(e,a),c=i.useRef(),[d,h]=i.useState(()=>t(c,l));return i.useEffect(()=>{let handleScroll=()=>{h(t(c,(0,n.Z)({target:r},l)))};return handleScroll(),r.addEventListener("scroll",handleScroll,{passive:!0}),()=>{r.removeEventListener("scroll",handleScroll,{passive:!0})}},[r,t,JSON.stringify(l)]),d}},2774:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r(1832)}])},1370:function(e,t,r){"use strict";var n=r(5893);r(7294);var o=r(3972),i=r(2623),a=r(1623),s=r(8492),l=r(4781),c=r(2734),d=r(541),h=r(5675),u=r.n(h);t.Z=function(e){let t=(0,c.Z)(),{item:r}=e,h="/article/".concat(r.urlName),p=r.title.length>60?"".concat(r.title.slice(0,57),"..."):r.title,x=r.summary.length>140?"".concat(r.summary.slice(0,137),"..."):r.summary;return(0,n.jsx)(a.Z,{component:"a",href:h,sx:{mb:4},children:(0,n.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,n.jsxs)(s.Z,{sx:{flex:1,height:{xs:170,sm:227}},children:[(0,n.jsx)(o.Z,{component:"h2",variant:"h6",marginBottom:t.spacing(3),children:p}),(0,n.jsx)(o.Z,{variant:"subtitle2",gutterBottom:!0,sx:{fontSize:"0.9rem","@media (min-width:600px)":{fontSize:"0.9rem"},[t.breakpoints.down("sm")]:{display:"none"},[t.breakpoints.up("md")]:{fontSize:"1.1rem"}},children:x}),(0,n.jsx)(d.Z,{variant:"outlined",label:"Continue reading...",size:"small",sx:{fontSize:t.typography.body2.fontSize,[t.breakpoints.down("sm")]:{display:"none"}}})]}),(0,n.jsx)(l.Z,{sx:{position:"relative",pt:"1rem",pb:"0.5rem",pr:"0.5rem",width:{xs:120,sm:160},height:{xs:160,sm:213},display:{xs:"block",sm:"block"}},children:(0,n.jsx)(u(),{src:r.coverImageUrl,alt:r.title,width:160,height:213,style:{objectFit:"cover",maxWidth:"100%",maxHeight:"100%"}})})]})})}},9044:function(e,t,r){"use strict";r.r(t);var n=r(5893);r(7294);var o=r(7357),i=r(5582),a=r(3972),s=r(7786),l=r(2734),c=r(8298),d=r(6628),h=r(8850),u=r(813),p=r(4080);let x={links:[{title:"Privacy",url:"/privacy"},{title:"Terms",url:"/terms"},{title:"Contact",url:"mailto:"+p.e.email}]};function ScrollTop(e){let{children:t}=e,r=(0,c.Z)({disableHysteresis:!0,threshold:100});return(0,n.jsx)(d.Z,{in:r,timeout:500,children:(0,n.jsx)(o.Z,{onClick:e=>{let t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");if(t){let e={block:"center",behavior:"smooth"};setTimeout(()=>{t.scrollIntoView(e)},150)}},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:t})})}function Copyright(){return(0,n.jsxs)(a.Z,{variant:"subtitle2",align:"center",color:"#202124",gutterBottom:!0,children:["Copyright \xa9 ",(0,n.jsx)(s.Z,{color:"inherit",href:p.e.url,underline:"hover",children:p.e.title})," ",new Date().getFullYear(),"."]})}t.default=function(e){let t=(0,l.Z)(),{links:r}=x;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ScrollTop,{...e,children:(0,n.jsx)(h.Z,{size:"small","aria-label":"scroll back to top",sx:{bgcolor:"#FF9966","&:hover":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[8]},"&:active":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[12]}},children:(0,n.jsx)(u.Z,{})})}),(0,n.jsx)(o.Z,{component:"footer",sx:{bgcolor:"#f2f2f2",pt:2,pb:1},children:(0,n.jsxs)(i.Z,{maxWidth:"lg",children:[(0,n.jsx)(Copyright,{}),(0,n.jsx)(a.Z,{variant:"subtitle2",align:"center",component:"p",sx:{display:"flex",justifyContent:"center",gap:t.spacing(1)},children:r.map(e=>(0,n.jsx)(s.Z,{href:e.url,underline:"hover",color:"#202124",children:e.title},e.title))})]})})]})}},3454:function(e,t,r){"use strict";var n=r(5893),o=r(7294),i=r(948),a=r(1796),s=r(2734),l=r(9206),c=r(7357),d=r(3808),h=r(4799),u=r(3972),p=r(4486),x=r(326),m=r(5582),g=r(9397),f=r(3931),b=r(2761),v=r(8543),y=r(7952),Z=r(5889),j=r(1987),w=r(4721),S=r(1163),k=r(9880),C=r(4080);let F={sections:[{title:"ABOUT US",url:"/about",iconComponent:(0,n.jsx)(w.Z,{fontSize:"inherit"})}]},P={min:2,max:64},z={url:C.e.logoSmallLightUrl,description:"".concat(C.e.title," Logo")},E=(0,i.ZP)("div")(e=>{let{theme:t}=e;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:(0,a.Fq)(t.palette.common.white,.45),"&:hover":{backgroundColor:(0,a.Fq)(t.palette.common.white,.55)},marginLeft:0,width:"100%",[t.breakpoints.up("sm")]:{marginLeft:t.spacing(1),width:"auto"}}}),R=(0,i.ZP)("div")(e=>{let{theme:t}=e;return{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}),N=(0,i.ZP)(v.ZP)(e=>{let{theme:t}=e;return{color:"inherit",width:"100%","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),[t.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}},"&:not(:placeholder-shown)":{height:"100%"}}}});t.Z=function(){let e=(0,s.Z)(),t=(0,S.useRouter)(),{sections:r}=F,[i,a]=o.useState(!1),[v,w]=o.useState(null),[T,L]=o.useState(""),[W,M]=o.useState(),B=o.useRef(null);o.useEffect(()=>{B.current&&M(B.current.offsetWidth)},[B]);let handleCloseNavMenu=()=>{w(null),a(!1)},handleKeyPress=e=>{"Enter"!==e.key||!(0,k.Ej)(T,P.min,P.max)||(0,k.FU)(T)||t.push("/search?k=".concat(T)).then(()=>{handleCloseNavMenu(),L("")})},I=C.e.title;return(0,n.jsx)(l.Z,{position:"sticky",sx:{background:"linear-gradient(to left, #B57EDC, #FF9966)"},children:(0,n.jsx)(m.Z,{maxWidth:"false",ref:B,children:(0,n.jsxs)(d.Z,{disableGutters:!0,children:[(0,n.jsx)(y.Z,{src:z.url,alt:z.description,sx:{width:24,height:24,display:{xs:"none",md:"flex"},mr:1,ml:-1}}),(0,n.jsx)(u.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".1rem",color:"inherit",textDecoration:"none"},children:I}),(0,n.jsxs)(c.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[(0,n.jsx)(h.Z,{size:"large","aria-label":"App Bar Menu Icon","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e=>{w(e.currentTarget),a(!0)},color:"inherit",sx:{ml:-2},children:(0,n.jsx)(x.Z,{})}),(0,n.jsx)(p.Z,{id:"menu-appbar",anchorEl:v,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:i,onClose:handleCloseNavMenu,BackdropComponent:Z.Z,BackdropProps:{onClick:()=>{w(null),a(!1)}},PaperProps:{style:{width:"100%",maxWidth:W}},sx:{display:{xs:"block",md:"none","& .MuiList-root":{paddingTop:0,paddingBottom:0}}},children:(0,n.jsx)(j.Z,{sx:{backgroundColor:"#FFE4B5"},children:(0,n.jsx)(f.Z,{children:(0,n.jsxs)(E,{sx:{mt:e.spacing(1),mb:e.spacing(1)},children:[(0,n.jsx)(R,{children:(0,n.jsx)(b.Z,{sx:{color:"#8B4513"}})}),(0,n.jsx)(N,{id:"search-input-xs",placeholder:"Search…",inputProps:{"aria-label":"search",maxLength:P.max},value:T,onChange:e=>L(e.target.value),onKeyPress:handleKeyPress})]})},"search")})})]}),(0,n.jsx)(y.Z,{src:z.url,alt:z.description,sx:{width:24,height:24,display:{xs:"flex",md:"none"},mr:1,ml:-1}}),(0,n.jsx)(u.Z,{variant:"h5",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".1rem",color:"inherit",textDecoration:"none"},children:I}),(0,n.jsx)(c.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:r.map(e=>(0,n.jsx)(g.Z,{onClick:handleCloseNavMenu,href:e.url,target:"_blank",sx:{my:2,color:"white",display:"block",textDecoration:"underline",fontWeight:"bold"},children:e.title},e.title))}),(0,n.jsxs)(E,{sx:{display:{xs:"none",md:"flex"}},children:[(0,n.jsx)(R,{children:(0,n.jsx)(b.Z,{})}),(0,n.jsx)(N,{id:"search-input-md",placeholder:"Search…",inputProps:{"aria-label":"search",maxLength:P.max},value:T,onChange:e=>L(e.target.value),onKeyPress:handleKeyPress})]})]})})})}},1832:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return SearchPage}});var n=r(5893),o=r(7294),i=r(8263),a=r(5582),s=r(2734),l=r(3454),c=r(1370),d=r(9044),h=r(3508),u=r(3972),p=r(1163),x=r(9880),m=r(7285),g=r(1812),f=r(5889),b=r(6489),v=r(4080),y=r(9008),Z=r.n(y);let j={min:2,max:64},fetchSearchByKeyword=async(e,t)=>{let{result:r,error:n}=await (0,m.D2)("api/travel-journals/search/keyword",(0,m.D4)({keyword:e,cursor:t}));return n?[]:null==r?void 0:r.body};function SearchPage(){let e=(0,s.Z)(),t=(0,p.useRouter)(),{k:r}=t.query,[m,y]=o.useState(!1),[w,S]=o.useState((0,n.jsx)(n.Fragment,{})),[k,C]=o.useState([]),[F,P]=o.useState(!0),[z,E]=o.useState({loading:!1,disabled:0===k.length});o.useEffect(()=>{if(void 0!==r&&(!(0,x.Ej)(r,j.min,j.max)||(0,x.FU)(r))&&(P(!1),t.replace("/404"),y(!0)),r){S((0,n.jsxs)(n.Fragment,{children:["Search Results for: ",(0,n.jsx)("span",{style:{textDecoration:"underline"},children:r})]}));let fetchSearchResult=async()=>{let e=await fetchSearchByKeyword(r);P(!1),e.length>0&&C(e)};fetchSearchResult()}},[r]);let handleLoadMore=async()=>{let e=k[k.length-1].cursor;E({loading:!0,disabled:!0});let t=await fetchSearchByKeyword(r,e);E({loading:!1,disabled:0===t.length}),t.length>0&&C([...k,...t])};return m?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(Z(),{children:["/*禁止搜索引擎收录*/",(0,n.jsx)("meta",{name:"robots",content:"noindex"}),r&&(0,n.jsx)("title",{children:"".concat(r," | ").concat(v.e.title)})]}),(0,n.jsxs)(a.Z,{maxWidth:"lg",children:[(0,n.jsx)("div",{id:"back-to-top-anchor"}),(0,n.jsx)(l.Z,{}),(0,n.jsx)("main",{children:(0,n.jsxs)(i.ZP,{container:!0,spacing:4,children:[(0,n.jsx)(i.ZP,{item:!0,xs:12,md:8,mt:2,mb:-2,children:(0,n.jsx)(u.Z,{variant:"h6",component:"h1",fontWeight:"bold",color:"textSecondary",children:w})}),(0,n.jsxs)(i.ZP,{item:!0,xs:12,md:8,children:[(0,n.jsx)(f.Z,{open:F,invisible:!0,sx:{zIndex:e=>e.zIndex.drawer+1},children:(0,n.jsx)(b.Z,{variant:"indeterminate",disableShrink:!1,sx:{color:e=>"light"===e.palette.mode?"#1a90ff":"#308fe8"},size:64,thickness:4})}),(0,n.jsx)(()=>F?(0,n.jsx)(u.Z,{variant:"h4",component:"h3",fontWeight:"bold",color:"textSecondary",children:"Loading..."}):0===k.length?(0,n.jsx)(u.Z,{variant:"h4",component:"h3",fontWeight:"bold",color:"textSecondary",children:"No results"}):k.map(e=>(0,n.jsx)(c.Z,{item:e},e.title)),{}),(0,n.jsx)(i.ZP,{container:!0,justifyContent:"center",sx:{mb:e.spacing(4)},children:!F&&k.length>0&&(0,n.jsx)(g.Z,{variant:"outlined",startIcon:(0,n.jsx)(h.Z,{}),loadingPosition:"start",loading:z.loading,disabled:z.disabled,onClick:()=>handleLoadMore(),sx:{color:"grey.700",borderColor:"grey.700"},children:"Load More"})})]})]})})]}),(0,n.jsx)(d.default,{})]})}},7285:function(e,t,r){"use strict";function bodyParams(e){return Array.isArray(e)?e.map(e=>Object.entries(e).reduce((e,t)=>{let[r,n]=t;return null!=n&&""!==n&&(e[r]=n),e},{})):Object.entries(e).reduce((e,t)=>{let[r,n]=t;return null!=n&&""!==n&&(e[r]=n),e},{})}async function sendPost(e,t,r){let n,o;try{var i;n=await (i=bodyParams(t),async()=>{let t=await fetch("".concat("https://api.instaer.me","/").concat(e),{method:"POST",headers:{"Content-Type":"application/json",...r||{}},body:JSON.stringify(i)}),n=await t.json();if("SUCCESS"!==n.code){let e=Error(n.message);throw e.status=500,e}return n})()}catch(e){o={status:e.status,message:e.message}}return{result:n,error:o}}r.d(t,{D2:function(){return sendPost},D4:function(){return bodyParams}})},9880:function(e,t,r){"use strict";function matchLengthRange(e,t,r){return!!e&&""!==e.trim()&&e.length>=t&&e.length<=r}function containsIllegalCharacter(e){let t=/[\u4e00-\u9fa5]/.test(e),r=/[a-zA-Z]/.test(e),n=/(http|https):\/\/\S+/.test(e),o=/\S+@\S+\.\S+/.test(e),i=/<[a-z][\s\S]*>/i.test(e);return t||!r||n||o||i}r.d(t,{Ej:function(){return matchLengthRange},FU:function(){return containsIllegalCharacter}})}},function(e){e.O(0,[895,716,347,774,888,179],function(){return e(e.s=2774)}),_N_E=e.O()}]);