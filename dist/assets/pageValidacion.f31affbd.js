import{an as b,r as t,ap as m,j as a,aU as F,a as u,S as C,T as c,al as f,be as x}from"./index.6f29d54c.js";const k=()=>{const{User:e}=b(),[s,l]=t.exports.useState(!1),[n,r]=t.exports.useState(""),[d,h]=t.exports.useState(!1),g=m(),v=async()=>{if(!(e!=null&&e.email)){r("No se encontr\xF3 el correo electr\xF3nico del usuario.");return}l(!0);try{(await x.post("http://localhost:3001/verification/send-email",{email:e.email})).status===200?r("Correo de verificaci\xF3n enviado con \xE9xito."):r("Hubo un problema al enviar el correo.")}catch(i){console.error("Error al enviar el correo de verificaci\xF3n:",i),r("Hubo un error al enviar el correo de verificaci\xF3n.")}finally{l(!1)}},p=async i=>{try{const o=await x.post(`http://localhost:3001/verification/verify-email?token=${i}`);o.status===200&&o.data.pass?(h(!0),r("Correo verificado correctamente.")):r("El c\xF3digo de verificaci\xF3n no es v\xE1lido.")}catch(o){console.error("Error al verificar el c\xF3digo:",o),r("Hubo un error al verificar el c\xF3digo.")}};return t.exports.useEffect(()=>{const o=new URLSearchParams(window.location.search).get("token");o&&p(o)},[]),a(F,{open:!0,hideBackdrop:!1,sx:{bgcolor:"rgba(33, 33, 33, 0.7)",backdropFilter:"blur(5px)"},children:u(C,{spacing:3,sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",bgcolor:"#000",padding:4,borderRadius:2,boxShadow:24,width:320,textAlign:"center"},children:[a(c,{variant:"h6",color:"white",children:"Verificar Correo Electr\xF3nico"}),u(c,{variant:"h6",color:"white",children:[e==null?void 0:e.email," "]}),a(c,{variant:"body2",color:"white",sx:{marginBottom:2},children:"Por favor, verifica tu correo electr\xF3nico antes de continuar."}),n&&a(c,{variant:"body2",color:n.includes("\xE9xito")||n.includes("verificado")?"green":"red",sx:{marginBottom:2},children:n}),!d&&a(f,{variant:"contained",color:"success",size:"large",sx:{width:"80%",alignSelf:"center",borderRadius:"20px",backgroundColor:"#E5533D",":hover":{backgroundColor:"#C4452F"}},onClick:v,disabled:s,children:s?"Enviando...":"Enviar Correo de Verificaci\xF3n"}),d&&a(f,{variant:"contained",color:"primary",size:"large",sx:{width:"80%",alignSelf:"center",borderRadius:"20px",backgroundColor:"#E5533D",":hover":{backgroundColor:"#C4452F"},marginTop:2},onClick:()=>g("/Login"),children:"Ir a Inicio"})]})})};export{k as default};
//# sourceMappingURL=pageValidacion.f31affbd.js.map