import{at as h,g as b,r as p,h as u,bc as q,aU as G,b as x,_ as s,aV as A,i as D,ax as J,d as C,aB as Q,j as c,e as m,f as v,bd as Z,T as oo}from"./index.6f29d54c.js";function eo(o){return b("MuiDialog",o)}const to=h("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),M=to,ao=p.exports.createContext({}),U=ao,so=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],io=u(q,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),ro=o=>{const{classes:e,scroll:t,maxWidth:a,fullWidth:r,fullScreen:i}=o,l={root:["root"],container:["container",`scroll${x(t)}`],paper:["paper",`paperScroll${x(t)}`,`paperWidth${x(String(a))}`,r&&"paperFullWidth",i&&"paperFullScreen"]};return v(l,eo,e)},no=u(G,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),lo=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.container,e[`scroll${x(t.scroll)}`]]}})(({ownerState:o})=>s({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),co=u(A,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.paper,e[`scrollPaper${x(t.scroll)}`],e[`paperWidth${x(String(t.maxWidth))}`],t.fullWidth&&e.paperFullWidth,t.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>s({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${M.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${M.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${M.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),po=p.exports.forwardRef(function(e,t){const a=D({props:e,name:"MuiDialog"}),r=J(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":n,BackdropComponent:d,BackdropProps:k,children:F,className:_,disableEscapeKeyDown:w=!1,fullScreen:I=!1,fullWidth:j=!1,maxWidth:L="sm",onBackdropClick:T,onClick:P,onClose:W,open:R,PaperComponent:Y=A,PaperProps:B={},scroll:E="paper",TransitionComponent:K=Z,transitionDuration:N=i,TransitionProps:X}=a,z=C(a,so),f=s({},a,{disableEscapeKeyDown:w,fullScreen:I,fullWidth:j,maxWidth:L,scroll:E}),y=ro(f),S=p.exports.useRef(),H=g=>{S.current=g.target===g.currentTarget},V=g=>{P&&P(g),S.current&&(S.current=null,T&&T(g),W&&W(g,"backdropClick"))},$=Q(n),O=p.exports.useMemo(()=>({titleId:$}),[$]);return c(no,s({className:m(y.root,_),closeAfterTransition:!0,components:{Backdrop:io},componentsProps:{backdrop:s({transitionDuration:N,as:d},k)},disableEscapeKeyDown:w,onClose:W,open:R,ref:t,onClick:V,ownerState:f},z,{children:c(K,s({appear:!0,in:R,timeout:N,role:"presentation"},X,{children:c(lo,{className:m(y.container),onMouseDown:H,ownerState:f,children:c(co,s({as:Y,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":$},B,{className:m(y.paper,B.className),ownerState:f,children:c(U.Provider,{value:O,children:F})}))})}))}))}),Po=po;function uo(o){return b("MuiDialogActions",o)}h("MuiDialogActions",["root","spacing"]);const go=["className","disableSpacing"],xo=o=>{const{classes:e,disableSpacing:t}=o;return v({root:["root",!t&&"spacing"]},uo,e)},mo=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,!t.disableSpacing&&e.spacing]}})(({ownerState:o})=>s({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),fo=p.exports.forwardRef(function(e,t){const a=D({props:e,name:"MuiDialogActions"}),{className:r,disableSpacing:i=!1}=a,l=C(a,go),n=s({},a,{disableSpacing:i}),d=xo(n);return c(mo,s({className:m(d.root,r),ownerState:n,ref:t},l))}),Ro=fo;function ho(o){return b("MuiDialogContent",o)}h("MuiDialogContent",["root","dividers"]);function bo(o){return b("MuiDialogTitle",o)}const Do=h("MuiDialogTitle",["root"]),Co=Do,vo=["className","dividers"],ko=o=>{const{classes:e,dividers:t}=o;return v({root:["root",t&&"dividers"]},ho,e)},Wo=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>s({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${Co.root} + &`]:{paddingTop:0}})),yo=p.exports.forwardRef(function(e,t){const a=D({props:e,name:"MuiDialogContent"}),{className:r,dividers:i=!1}=a,l=C(a,vo),n=s({},a,{dividers:i}),d=ko(n);return c(Wo,s({className:m(d.root,r),ownerState:n,ref:t},l))}),Bo=yo,So=["className","id"],$o=o=>{const{classes:e}=o;return v({root:["root"]},bo,e)},Mo=u(oo,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),wo=p.exports.forwardRef(function(e,t){const a=D({props:e,name:"MuiDialogTitle"}),{className:r,id:i}=a,l=C(a,So),n=a,d=$o(n),{titleId:k=i}=p.exports.useContext(U);return c(Mo,s({component:"h2",className:m(d.root,r),ownerState:n,ref:t,variant:"h6",id:i!=null?i:k},l))}),No=wo;export{Po as D,No as a,Bo as b,Ro as c};
//# sourceMappingURL=DialogTitle.102bca73.js.map