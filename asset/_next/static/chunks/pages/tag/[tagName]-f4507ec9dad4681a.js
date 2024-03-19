(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[248],{6989:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tag/[tagName]",function(){return n(9890)}])},1370:function(e,t,n){"use strict";var r=n(5893);n(7294);var o=n(3972),i=n(2623),s=n(1623),l=n(8492),a=n(4781),c=n(2734),d=n(5675),h=n.n(d),x=n(3379);t.Z=function(e){let t=(0,c.Z)(),{item:n}=e,d="/article/".concat(n.urlName),m=n.title.length>60?"".concat(n.title.slice(0,57),"..."):n.title,u=n.summary.length>140?"".concat(n.summary.slice(0,137),"..."):n.summary;return(0,r.jsx)(s.Z,{component:"a",href:d,sx:{mb:4},children:(0,r.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,r.jsxs)(l.Z,{sx:{flex:1,height:{xs:"auto",sm:"auto"}},children:[(0,r.jsx)(o.Z,{component:"h2",marginBottom:t.spacing(2),fontWeight:"bold",sx:{fontSize:t.typography.h6.fontSize,[t.breakpoints.down("sm")]:{fontSize:"1.2rem",marginBottom:t.spacing(0)}},children:m}),(0,r.jsx)(o.Z,{color:"text.secondary",marginBottom:t.spacing(2),sx:{fontSize:"0.9rem",[t.breakpoints.down("sm")]:{display:"none"},[t.breakpoints.up("sm")]:{fontSize:"0.9rem"},[t.breakpoints.up("md")]:{fontSize:"1.1rem"}},children:u}),(0,r.jsxs)(o.Z,{marginBottom:t.spacing(1),sx:{display:"flex",alignItems:"center",color:"text.secondary",textDecoration:"underline",[t.breakpoints.down("sm")]:{display:"none"}},children:["Continue reading",(0,r.jsx)(x.Z,{fontSize:"inherit",color:"text.secondary"})]})]}),(0,r.jsx)(a.Z,{sx:{position:"relative",pt:"1rem",pb:"0.5rem",pr:"0.5rem",width:{xs:120,sm:160},height:{xs:160,sm:213},display:{xs:"block",sm:"block"}},children:(0,r.jsx)(h(),{src:n.coverImageUrl,alt:n.title,width:160,height:213,style:{objectFit:"cover",maxWidth:"100%",maxHeight:"100%"}})})]})})}},9044:function(e,t,n){"use strict";n.r(t);var r=n(5893);n(7294);var o=n(7357),i=n(5582),s=n(3972),l=n(7786),a=n(2734),c=n(8298),d=n(6628),h=n(8850),x=n(813),m=n(4080);let u={links:[{title:"Privacy",url:"/privacy"},{title:"Terms",url:"/terms"},{title:"Contact",url:"mailto:"+m.e.email}]};function ScrollTop(e){let{children:t}=e,n=(0,c.Z)({disableHysteresis:!0,threshold:100});return(0,r.jsx)(d.Z,{in:n,timeout:500,children:(0,r.jsx)(o.Z,{onClick:e=>{let t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");if(t){let e={block:"center",behavior:"smooth"};setTimeout(()=>{t.scrollIntoView(e)},150)}},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:t})})}function Copyright(){return(0,r.jsxs)(s.Z,{variant:"subtitle2",align:"center",color:"#202124",gutterBottom:!0,children:["Copyright \xa9 ",(0,r.jsx)(l.Z,{color:"inherit",href:m.e.url,underline:"hover",children:m.e.title})," ",new Date().getFullYear(),"."]})}t.default=function(e){let t=(0,a.Z)(),{links:n}=u;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ScrollTop,{...e,children:(0,r.jsx)(h.Z,{size:"small","aria-label":"scroll back to top",sx:{bgcolor:"#FF9966","&:hover":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[8]},"&:active":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[12]}},children:(0,r.jsx)(x.Z,{})})}),(0,r.jsx)(o.Z,{component:"footer",sx:{bgcolor:"#f2f2f2",pt:2,pb:1},children:(0,r.jsxs)(i.Z,{maxWidth:"lg",children:[(0,r.jsx)(Copyright,{}),(0,r.jsx)(s.Z,{variant:"subtitle2",align:"center",component:"p",sx:{display:"flex",justifyContent:"center",gap:t.spacing(1)},children:n.map(e=>(0,r.jsx)(l.Z,{href:e.url,underline:"hover",color:"#202124",children:e.title},e.title))})]})})]})}},9890:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return w},default:function(){return TagPage}});var r=n(5893),o=n(7294),i=n(8263),s=n(5582),l=n(802),a=n(5084),c=n(2734),d=n(3454),h=n(1370),x=n(9044),m=n(3508),u=n(3972),g=n(7285),p=n(1812),f=n(4080),j=n(9739),b=n(1233),Z=n(7786),y=n(366);let fetchSearchByTag=async(e,t)=>{let{result:n,error:r}=await (0,g.D2)("api/travel-journals/search/tag",(0,g.D4)({tag:e,cursor:t}));return r?[]:null==n?void 0:n.body};var w=!0;function TagPage(e){let{tagName:t,articles:n}=e,g=(0,c.Z)(),[w,v]=o.useState(n),[k,S]=o.useState({loading:!1,disabled:0===w.length});if(!w||0===w.length)return null;let handleLoadMore=async()=>{let e=w[w.length-1].cursor;S({loading:!0,disabled:!0});let n=await fetchSearchByTag(t,e);S({loading:!1,disabled:0===n.length}),n.length>0&&v([...w,...n])},_=t+" Search Results | "+f.e.title,C="Search Results for: "+t,F=f.e.url+"/tag/"+t,P=f.e.logoUrl,T=[{name:"Twitter",icon:a.Z,url:"https://twitter.com/intent/tweet?url=".concat(F,"&text=").concat(C)},{name:"Facebook",icon:l.Z,url:"https://www.facebook.com/sharer/sharer.php?u=".concat(F)}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y.Z,{url:F,title:_,description:C,keywords:t,imageUrl:P}),(0,r.jsxs)(s.Z,{maxWidth:"lg",children:[(0,r.jsx)("div",{id:"back-to-top-anchor"}),(0,r.jsx)(d.Z,{}),(0,r.jsx)("main",{children:(0,r.jsxs)(i.ZP,{container:!0,spacing:4,children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,md:8,mt:2,mb:-2,children:(0,r.jsxs)(u.Z,{variant:"h6",component:"h1",fontWeight:"bold",color:"textSecondary",children:["Search Results for: ",(0,r.jsx)("span",{style:{textDecoration:"underline"},children:t})]})}),(0,r.jsxs)(i.ZP,{item:!0,xs:12,md:8,children:[w.map(e=>(0,r.jsx)(h.Z,{item:e},e.urlName)),(0,r.jsx)(i.ZP,{container:!0,justifyContent:"center",sx:{mb:g.spacing(4)},children:(0,r.jsx)(p.Z,{variant:"outlined",startIcon:(0,r.jsx)(m.Z,{}),loadingPosition:"start",loading:k.loading,disabled:k.disabled,onClick:()=>handleLoadMore(),sx:{color:"grey.700",borderColor:"grey.700"},children:"Load More"})})]}),(0,r.jsxs)(i.ZP,{item:!0,xs:12,md:4,mb:{xs:1},children:[(0,r.jsxs)(u.Z,{variant:"h6",gutterBottom:!0,color:"secondary",fontWeight:"bolder",sx:{display:"flex",alignItems:"center",mt:-4,[g.breakpoints.up("sm")]:{mt:-1}},children:[(0,r.jsx)(j.Z,{sx:{mr:1}}),"Share"]}),(0,r.jsx)(b.Z,{spacing:{xs:1,sm:2},direction:"row",useFlexGap:!0,flexWrap:"wrap",children:T.map(e=>(0,r.jsx)(Z.Z,{display:"block",variant:"body1",href:e.url,sx:{mb:.5},underline:"hover",children:(0,r.jsxs)(b.Z,{direction:"row",spacing:1,alignItems:"center",color:"secondary",fontWeight:"bold",children:[(0,r.jsx)(e.icon,{}),(0,r.jsx)("span",{children:e.name})]})},e.name))})]})]})})]}),(0,r.jsx)(x.default,{})]})}}},function(e){e.O(0,[895,716,811,186,883,774,888,179],function(){return e(e.s=6989)}),_N_E=e.O()}]);