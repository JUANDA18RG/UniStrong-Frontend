import{g as M,at as f,h as x,_ as d,r as y,i as b,d as h,j as v,e as I,f as N}from"./index.6f29d54c.js";function O(e){return M("MuiCardMedia",e)}f("MuiCardMedia",["root","media","img"]);const S=["children","className","component","image","src","style"],_=e=>{const{classes:o,isMediaComponent:t,isImageComponent:s}=e;return N({root:["root",t&&"media",s&&"img"]},O,o)},k=x("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{isMediaComponent:s,isImageComponent:a}=t;return[o.root,s&&o.media,a&&o.img]}})(({ownerState:e})=>d({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),P=["video","audio","picture","iframe","img"],R=["picture","img"],j=y.exports.forwardRef(function(o,t){const s=b({props:o,name:"MuiCardMedia"}),{children:a,className:l,component:i="div",image:n,src:p,style:c}=s,u=h(s,S),r=P.indexOf(i)!==-1,C=!r&&n?d({backgroundImage:`url("${n}")`},c):c,m=d({},s,{component:i,isMediaComponent:r,isImageComponent:R.indexOf(i)!==-1}),g=_(m);return v(k,d({className:I(g.root,l),as:i,role:!r&&n?"img":void 0,ref:t,style:C,ownerState:m,src:r?n||p:void 0},u,{children:a}))}),E=j;export{E as C};
//# sourceMappingURL=CardMedia.cf807b9e.js.map