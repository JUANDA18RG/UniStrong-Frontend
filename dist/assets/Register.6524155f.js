import{ap as R,ao as S,r as b,an as N,a as n,F as E,j as e,H as B,v as L,B as d,aq as A,T as m,ar as P,am as W,al as j,L as z}from"./index.6f29d54c.js";import{u as Y}from"./index.esm.02330b99.js";import{F as q}from"./form-divider.de671e3e.js";import{B as $}from"./BannerRegister.ebc60dc7.js";import{I as D,d as V,a as G}from"./VisibilityOff.05d98fa8.js";import{m as u,v as H}from"./fade.2b467b59.js";import{v}from"./rotate.6bce3218.js";import{C as M}from"./config-global.ff2a549f.js";import{z as o,t as U}from"./zod.module.40bda67a.js";import{G as a}from"./Grid.a2d7585c.js";import{T as s}from"./TextField.d0c16b0f.js";import"./Divider.cee5b4c1.js";import"./dividerClasses.ac5022c8.js";import"./Select.5c46e07a.js";const _=o.object({name:o.string().min(1,"Nombre completo es requerido"),dni:o.string().min(1,"C\xE9dula es requerida"),email:o.string().email("Correo electr\xF3nico inv\xE1lido"),phoneNumber:o.string().min(1,"Tel\xE9fono es requerido"),username:o.string().min(6,"Nombre de usuario debe tener al menos 6 caracteres"),password:o.string().min(10,"Contrase\xF1a debe tener al menos 8 caracteres").regex(/[A-Z]/,"Contrase\xF1a debe tener al menos una letra may\xFAscula").regex(/[a-z]/,"Contrase\xF1a debe tener al menos una letra min\xFAscula").regex(/[!@#$%^&*(),.?":{}|<>]/,"Contrase\xF1a debe tener al menos un car\xE1cter especial")}),O={name:"",dni:"",email:"",phoneNumber:"",username:"",password:""},Z={title:`Register |  ${M.appName}`};function me(){const k=R(),{enqueueSnackbar:c}=S(),[x,C]=b.exports.useState(""),{signup:y}=N(),{register:i,handleSubmit:I,formState:{isSubmitting:F,errors:r}}=Y({resolver:U(_),defaultValues:O}),[p,w]=b.exports.useState(!1),T=async h=>{var g,f;try{await new Promise(l=>setTimeout(l,500)),console.info("Data",h);const t=await y(h);t&&t.status===201?(c("Usuario registrado exitosamente",{variant:"success"}),k("/login")):c("Error al registrar usuario",{variant:"error"})}catch(t){console.error(t);const l=((f=(g=t.response)==null?void 0:g.data)==null?void 0:f.message)||(typeof t=="string"?t:t.message);C(l),c(`Error: ${l}`,{variant:"error"}),console.log("Error:",l)}};return n(E,{children:[e(B,{children:e("title",{children:Z.title})}),n(a,{container:!0,sx:{overflow:"hidden"},maxHeight:{xs:"calc(100vh)",sm:"calc(100vh)"},children:[e(a,{item:!0,xs:12,md:6,sx:{display:"flex",justifyContent:"center",alignItems:"center",padding:{xs:2,sm:4},backgroundColor:"cultured.main"},children:e(u.div,{initial:"initial",animate:"animate",exit:"exit",variants:L().in,children:n(d,{sx:{maxWidth:500,width:"100%",mt:8,padding:{xs:2,sm:4},borderRadius:3,boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.1)",backgroundColor:"#ffffff"},children:[e(u.div,{initial:"initial",animate:"animate",exit:"exit",variants:v().in,children:e("img",{src:A,alt:"Logo",style:{margin:"0 auto 10px auto",padding:"5px",border:"3px solid #ff0000",borderRadius:"50%",width:"100px",height:"100px",display:"block",boxShadow:"0 10px 0 10px #ffffff"}})}),n(m,{variant:"h5",component:"h1",color:"redRYB.main",sx:{fontSize:{xs:"1.5rem",sm:"2rem",md:"2.5rem"},textAlign:"center",justifyContent:"center",fontWeight:700,textTransform:"uppercase",marginY:3},children:["UniStrong ",e("span",{style:{color:"Black"},children:"Register"})]}),!!x&&e(P,{severity:"error",sx:{mb:2},children:x}),n("form",{onSubmit:I(T),noValidate:!0,children:[n(a,{container:!0,spacing:2,children:[e(a,{item:!0,xs:12,sm:6,children:e(s,{name:"name",label:"Nombre Completo",placeholder:"Ingresa tu nombre completo",InputLabelProps:{shrink:!0},error:!!r.name,helperText:r.name?r.name.message:"",...i("name"),fullWidth:!0,variant:"outlined",sx:{backgroundColor:"#f4f4f9",borderRadius:2}})}),e(a,{item:!0,xs:12,sm:6,children:e(s,{name:"dni",label:"C\xE9dula",placeholder:"Ingresa tu c\xE9dula",InputLabelProps:{shrink:!0},error:!!r.dni,helperText:r.dni?r.dni.message:"",...i("dni"),fullWidth:!0,variant:"outlined",sx:{backgroundColor:"#f4f4f9",borderRadius:2}})}),e(a,{item:!0,xs:12,sm:6,children:e(s,{name:"email",label:"Correo Electr\xF3nico",placeholder:"Ingresa tu correo electr\xF3nico",InputLabelProps:{shrink:!0},error:!!r.email,helperText:r.email?r.email.message:"",...i("email"),fullWidth:!0,variant:"outlined",sx:{backgroundColor:"#f4f4f9",borderRadius:2}})}),e(a,{item:!0,xs:12,sm:6,children:e(s,{name:"phoneNumber",label:"Tel\xE9fono",placeholder:"Ingresa tu n\xFAmero de tel\xE9fono",InputLabelProps:{shrink:!0},error:!!r.phoneNumber,helperText:r.phoneNumber?r.phoneNumber.message:"",...i("phoneNumber"),fullWidth:!0,variant:"outlined",sx:{backgroundColor:"#f4f4f9",borderRadius:2}})}),e(a,{item:!0,xs:12,sm:6,children:e(s,{name:"username",label:"Nombre de Usuario",placeholder:"Ingresa tu nombre de usuario",InputLabelProps:{shrink:!0},error:!!r.username,helperText:r.username?r.username.message:"",...i("username"),fullWidth:!0,variant:"outlined",sx:{backgroundColor:"#f4f4f9",borderRadius:2}})}),e(a,{item:!0,xs:12,sm:6,children:e(s,{name:"password",label:"Contrase\xF1a",type:p?"text":"password",InputLabelProps:{shrink:!0},placeholder:"8+ caracteres",error:!!r.password,helperText:r.password?r.password.message:"",...i("password"),fullWidth:!0,variant:"outlined",sx:{backgroundColor:"#f4f4f9",borderRadius:2},InputProps:{endAdornment:e(D,{position:"end",children:e(W,{edge:"end",onClick:()=>w(!p),children:p?e(V,{}):e(G,{})})})}})})]}),e(q,{}),e(j,{type:"submit",variant:"contained",color:"redRYB",disabled:F,fullWidth:!0,sx:{textTransform:"none",marginY:2,borderRadius:2,padding:1.5},children:"Registrarse"}),n(d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:{xs:"column",sm:"row"},marginTop:2},children:[e(m,{variant:"body1",sx:{marginRight:{sm:1}},children:"\xBFya tienes una cuenta?"}),e(m,{component:z,to:"/login",sx:{color:"blue","&:hover":{textDecoration:"underline"}},children:"Iniciar Sesi\xF3n"})]})]})]})})}),e(a,{item:!0,xs:!1,md:6,sx:{height:"100vh"},children:e(u.div,{variants:H().in,style:{height:"100%"},children:e(d,{sx:{height:"100%",backgroundImage:`url(${$})`,backgroundSize:"cover",backgroundPosition:"center",position:"relative",display:{xs:"none",md:"block"}},children:e(d,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:2,textAlign:"center",color:"white",display:{xs:"none",md:"block"}},children:e(u.div,{initial:"initial",animate:"animate",exit:"exit",variants:v().in,children:e(m,{variant:"h2",fontWeight:"bold",sx:{fontSize:{xs:"1.5rem",sm:"3rem"}},children:"Transform Your Body, Transform Your Life"})})})})})})]})]})}export{me as default};
//# sourceMappingURL=Register.6524155f.js.map