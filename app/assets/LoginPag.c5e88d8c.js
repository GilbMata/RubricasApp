import{Q}from"./QImg.b372572c.js";import{_ as x,az as k,r as s,E as V,a as C,O as I,G as E,H as P,I as t,J as r,aC as p,Q as f,P as q,L as z}from"./index.302b6eaf.js";import{Q as L}from"./QForm.ac6d8203.js";import{Q as F}from"./QPage.9da0b17f.js";import{b as R,c as A}from"./QLayout.0e00a024.js";import{_ as B}from"./logo.35988b20.js";const T={name:"LoginPage",setup(){k();const u=s(null),o=s(""),c=s("");let e=!1;const m=s("password"),d=s("visibility"),n=V();return C(()=>n.$state.loggedIn),{myForm:u,email:c,password:o,passwordFieldType:m,visibility:e,visibilityIcon:d,required:l,diffPassword:g,short:v,pwd:y,isEmail:b,submit:_,switchTypeForm:w,switchVisibility:h};function l(a){return a&&a.length>0||"El campo es requerido"}function g(a,i){return a&&a===i.value||"\xA1Las contrase\xF1as no coincide!"}function v(a){return a&&a.length>3||"El valor es demasiado corto"}function y(a){return a&&a.length>5||"La contrase\xF1a debe contener al menos una letra min\xFAscula, un n\xFAmero, un car\xE1cter especial y una letra may\xFAscula "}function b(a){return/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(a)||"Ingrese el correo electr\xF3nico correcto"}function _(a){u.value.validate().then(async i=>{i&&await n.login(c.value,o.value)}).catch(i=>{console.log("\u{1F680} ~ submit ~ err",i)})}function w(){register.value=!register.value,title.value=register.value?"Registro":"Bienvenido",title2.value=register.value?"Nuevo usuario":"Inicie session",btnLabel.value=register.value?"Registro":"Entrada"}function h(){e=!e,m.value=e?"text":"password",d.value=e?"visibility_off":"visibility"}}};function Z(u,o,c,e,m,d){const n=I("router-link");return E(),P(R,{view:"hHh lpR fff"},{default:t(()=>[r(A,null,{default:t(()=>[r(F,{class:"flex column flex-center",style:{backgroun:"linear-gradient(#bdc3c7, #2c3e50)"}},{default:t(()=>[r(Q,{src:B,style:{"max-width":"250px"},class:"q-mb-lg",fit:"contain"}),r(L,{ref:"myForm",prevent:""},{default:t(()=>[r(p,{dense:"",ref:"emailref",modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=l=>e.email=l),type:"email","lazy-rules":"",rules:[e.required,e.isEmail,e.short],label:"Email"},{prepend:t(()=>[r(f,{name:"email"})]),_:1},8,["modelValue","rules"]),r(p,{dense:"",ref:"passwordRef",modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=l=>e.password=l),type:e.passwordFieldType,"lazy-rules":"",rules:[e.required],label:"Contrase\xF1a"},{prepend:t(()=>[r(f,{name:"lock"})]),append:t(()=>[r(f,{name:e.visibilityIcon,class:"cursor-pointer",onClick:e.switchVisibility},null,8,["name","onClick"])]),_:1},8,["modelValue","type","rules"]),r(q,{dense:"",color:"primary",class:"full-width q-mt-xs q-mb-lg",label:"Entrar",onClick:e.submit},null,8,["onClick"])]),_:1},512),r(n,{to:"/registro"},{default:t(()=>[z("Registrarse")]),_:1})]),_:1})]),_:1})]),_:1})}var S=x(T,[["render",Z]]);export{S as default};