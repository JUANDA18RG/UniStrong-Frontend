import{F as N}from"./form-divider.de671e3e.js";import{ap as B,r as d,ao as H,a as s,F as W,j as e,H as j,v as E,B as c,aq as V,T as b,al as w,bk as q}from"./index.6f29d54c.js";import{B as Y}from"./BannerRegister.ebc60dc7.js";import{m as u,v as G}from"./fade.2b467b59.js";import{v}from"./rotate.6bce3218.js";import{C as O}from"./config-global.ff2a549f.js";import{u as P}from"./index.esm.02330b99.js";import{G as o}from"./Grid.a2d7585c.js";import{T as y,F as S}from"./TextField.d0c16b0f.js";import{a as F,I as R,S as D}from"./Select.5c46e07a.js";import{M as r}from"./MenuItem.ea1f428a.js";import"./Divider.cee5b4c1.js";import"./dividerClasses.ac5022c8.js";const z={title:`Full |  ${O.appName}`};function se(){const C=B(),[p,f]=d.exports.useState(""),[x,k]=d.exports.useState([]),[g,A]=d.exports.useState([]),{enqueueSnackbar:h}=H();d.exports.useState("");const{control:M,handleSubmit:T,reset:I,register:l,formState:{errors:t}}=P(),L=async a=>{const n=parseFloat(p);if(isNaN(n)){h("La altura es inv\xE1lida",{variant:"error"}),console.error("La altura es inv\xE1lida");return}const i={birthDate:a.birthDate,height:n,diseases:x,dietaryRestrictions:g};console.log("Datos enviados",i),console.log("Tipo de birthDate:",typeof i.birthDate),console.log("Tipo de height:",typeof i.height),console.log("Tipo de diseases:",Array.isArray(i.diseases)?"Array":typeof i.diseases),console.log("Tipo de dietaryRestrictions:",Array.isArray(i.dietaryRestrictions)?"Array":typeof i.dietaryRestrictions);try{const m=await q(i);console.log(m.data),h("Datos registrados con exito....",{variant:"success"}),C("/Membership"),I()}catch(m){h("Error al enviar los datos",{variant:"success"}),console.error("Error al enviar los datos:",m)}};return s(W,{children:[e(j,{children:e("title",{children:z.title})}),s(o,{container:!0,sx:{overflow:"hidden"},maxHeight:{xs:"calc(100vh)",sm:"calc(100vh)"},children:[e(o,{item:!0,xs:12,md:6,sx:{display:"flex",justifyContent:"center",alignItems:"center",padding:{xs:2,sm:4},backgroundColor:"cultured.main"},children:e(u.div,{initial:"initial",animate:"animate",exit:"exit",variants:E().in,children:s(c,{sx:{maxWidth:{xs:"100%",md:"700px"},width:"100%",mt:8,padding:{xs:2,sm:4},borderRadius:3,boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.1)",backgroundColor:"#ffffff"},children:[e(u.div,{initial:"initial",animate:"animate",exit:"exit",variants:v().in,children:e("img",{src:V,alt:"Logo",style:{margin:"0 auto 10px auto",padding:"5px",border:"3px solid #ff0000",borderRadius:"50%",width:"100px",height:"100px",display:"block",boxShadow:"0 10px 0 10px #ffffff"}})}),s(b,{variant:"h5",component:"h1",color:"redRYB.main",sx:{fontSize:{xs:"1.5rem",sm:"2rem",md:"2.5rem"},textAlign:"center",justifyContent:"center",fontWeight:700,textTransform:"uppercase",marginY:3},children:["UniStrong ",e("span",{style:{color:"Black"},children:"Complete the form"})]}),s("form",{onSubmit:T(L),children:[s(o,{container:!0,spacing:2,children:[e(o,{item:!0,xs:12,sm:6,children:e(y,{...l("birthDate",{required:"La fecha de nacimiento es obligatoria"}),name:"birthDate",label:" Fecha de cumplea\xF1os",type:"date",InputLabelProps:{shrink:!0},fullWidth:!0,variant:"outlined",sx:{backgroundColor:"#f4f4f9",borderRadius:2},error:!!t.birthDate,helperText:t.birthDate?t.birthDate.message:""})}),e(o,{item:!0,xs:12,sm:6,children:e(y,{...l("height",{required:"La altura es obligatoria",validate:a=>{const n=parseFloat(a.replace(",","."));return!isNaN(n)&&n>=1.3&&n<=2?!0:"La altura debe ser un n\xFAmero entre 1.30 y 2.0 metros"}}),name:"height",label:"Altura (metros)",placeholder:"1,60",InputLabelProps:{shrink:!0},value:p,onChange:a=>{const n=a.target.value,i=parseFloat(n.replace(",","."));!isNaN(i)&&i>=1.3&&i<=2?f(i):f(n)},type:"text",fullWidth:!0,variant:"outlined",sx:{backgroundColor:"#f4f4f9",borderRadius:2},error:!!t.height,helperText:t.height?t.height.message:""})}),e(o,{item:!0,xs:12,sm:6,children:s(F,{fullWidth:!0,margin:"dense",variant:"outlined",error:!!t.diseases,children:[e(R,{id:"diseases-select-label",children:"Enfermedades"}),s(D,{...l("diseases",{required:"Debe seleccionar al menos una enfermedad"}),labelId:"diseases-select-label",label:"Enfermedades",multiple:!0,value:x,onChange:a=>{k(a.target.value)},renderValue:a=>a.join(", "),fullWidth:!0,variant:"outlined",sx:{backgroundColor:"#f4f4f9",borderRadius:2},children:[e(r,{value:"Hipertensi\xF3n arterial",children:"Hipertensi\xF3n arterial"}),e(r,{value:"Diabetes",children:"Diabetes"}),e(r,{value:"Obesidad",children:"Obesidad"}),e(r,{value:"Asma",children:"Asma"}),e(r,{value:"Artritis",children:"Artritis"}),e(r,{value:"Osteoporosis",children:"Osteoporosis"}),e(r,{value:"Hernias discales",children:"Hernias discales"}),e(r,{value:"Insuficiencia card\xEDaca",children:"Insuficiencia card\xEDaca"}),e(r,{value:"Hipotiroidismo",children:"Hipotiroidismo"}),e(r,{value:"Ninguna",children:"Ninguna"})]}),t.diseases&&e(S,{children:t.diseases.message})]})}),e(o,{item:!0,xs:12,sm:6,children:s(F,{fullWidth:!0,margin:"dense",variant:"outlined",error:!!t.dietaryRestrictions,children:[e(R,{id:"dietaryRestrictions-select-label",children:"Restricciones"}),s(D,{...l("dietaryRestrictions",{required:"Selecciona al menos una restricci\xF3n"}),labelId:"dietaryRestrictions-select-label",label:"Restricciones",multiple:!0,value:g,onChange:a=>A(a.target.value),renderValue:a=>a.join(", "),fullWidth:!0,variant:"outlined",sx:{backgroundColor:"#f4f4f9",borderRadius:2},children:[e(r,{value:"Sin Lactosa",children:"Sin Lactosa"}),e(r,{value:"Sin Gluten",children:"Sin Gluten"}),e(r,{value:"Vegetariana",children:"Vegetariana"}),e(r,{value:"Vegana",children:"Vegana"}),e(r,{value:"Baja en Carbohidratos",children:"Baja en Carbohidratos"}),e(r,{value:"Alta en Prote\xEDnas",children:"Alta en Prote\xEDnas"}),e(r,{value:"Sin Frutos Secos",children:"Sin Frutos Secos"}),e(r,{value:"Keto",children:"Keto"}),e(r,{value:"Ninguna",children:"Ninguna"})]}),t.dietaryRestrictions&&e(S,{children:t.dietaryRestrictions.message})]})})]}),e(N,{}),e(w,{type:"submit",variant:"contained",color:"redRYB",fullWidth:!0,sx:{textTransform:"none",marginY:2,borderRadius:2,padding:1.5},children:"Continuar"}),e(c,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",flexDirection:{xs:"column",sm:"row"},marginTop:2,backgroundColor:"#ffffff"}})]})]})})}),e(o,{item:!0,xs:!1,md:6,sx:{height:"100vh"},children:e(u.div,{variants:G().in,style:{height:"100%"},children:e(c,{sx:{height:"100%",backgroundImage:`url(${Y})`,backgroundSize:"cover",backgroundPosition:"center",position:"relative",display:{xs:"none",md:"block"},maxWidth:"100%"},children:e(c,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:2,textAlign:"center",color:"white",display:{xs:"none",md:"block"}},children:e(u.div,{initial:"initial",animate:"animate",exit:"exit",variants:v().in,children:e(b,{variant:"h2",fontWeight:"bold",sx:{fontSize:{xs:"1.5rem",sm:"3rem"}},children:"Transform Your Body, Transform Your Life"})})})})})})]})]})}export{se as default};
//# sourceMappingURL=CompleteForm.81d2e218.js.map