import{Q as A}from"./date.19a11155.js";import{c as B,d as M}from"./QList.2fbf911b.js";import{u as S,d as v,b as T,Q as f,a as g}from"./dataService.c901cdf3.js";import{Q as _,C as b}from"./ClosePopup.aa7f118d.js";import{r as t,E as j,z as I,w as E,G as F,R as L,J as e,I as a,aw as R,aN as z,S as i,L as G,ax as w,Q as y,n as h,P as Q}from"./index.667e992f.js";import{Q as H}from"./QPage.a8222513.js";import"./format.c860d4da.js";import"./position-engine.a6141200.js";import"./selection.2879ee5e.js";import"./authHeader.bc06fe4e.js";const J={class:"full-width row wrap justify-center"},$={class:"q-pa-sm col-grow"},K=i("div",null,"\xA1No se encontro ning\xFAn dato!",-1),O={class:"col-sm-auto col-xs-8 q-px-lg"},W={class:"row items-center justify-end"},X={class:"row items-center justify-end"},Z={class:"q-mt-lg col-"},me={__name:"UsersRubricasAvg",setup(ee){const D=[{name:"name",label:"Name",field:s=>s.lastname+" "+s.name,align:"left",sortable:!0},{name:"email",label:"Correo",field:"email",align:"center"}],V=["name","apellido","email"],x=t([]),U=t(null);j();const m=S(),d=t(!1),c=t([]);t();const p=t(),C=[{name:"name",label:"Nombre",field:"name",align:"left",sortable:!0},{name:"promedio",label:"Promedio",field:"promedio",align:"center",sortable:!0},,],u=t(),r=t(""),n=t(""),P=new Date().toLocaleDateString(),Y={rowsPerPage:30};I(()=>{d.value=!0,N(!0),n.value=P,d.value=!1}),E([u,r,n],()=>{u.value&&r.value&&n.value&&v.getAvg(u.value[0].uuid,r.value,n.value).then(s=>{console.log("\u{1F680} ~ .then ~ data:",s),p.value=s.userubricas,x.value.length=0})});function k(s){return!0}function q(s){s.added}function N(s=!1){v.getUsers().then(o=>{c.value=o.users,s&&m.notify({icon:"done",color:"positive",message:"Datos cargados",timeout:1500})}).catch(o=>{console.log(o),m.notify({icon:"report_problem",color:"negative",message:"Error de conexi\xF3n",progress:!0})})}return(s,o)=>(F(),L(R,null,[e(A,{ref_key:"bar",ref:U,position:"bottom",color:"primary",size:"8px"},null,512),e(H,{padding:""},{default:a(()=>[e(z,{class:"q-pa-md"},{default:a(()=>[i("div",J,[i("div",$,[e(_,{dense:"",rows:c.value,columns:D,"visible-columns":V,"row-key":"name","items-per-page":10,"sort-by":"name",selection:"single",selected:u.value,"onUpdate:selected":o[0]||(o[0]=l=>u.value=l),onSelection:q,loading:d.value},{top:a(()=>[e(B,{class:"shdow-1"},{default:a(()=>[e(M,null,{default:a(()=>[G(" Usuarios ")]),_:1})]),_:1})]),"no-data":a(()=>[K]),loading:a(()=>[e(T,{showing:"",color:"primary"})]),_:1},8,["rows","selected","loading"])]),i("div",O,[e(w,{dense:"",modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=l=>r.value=l),class:"q-mx-lg",label:"Desde"},{append:a(()=>[e(y,{name:"event",class:"cursor-pointer"},{default:a(()=>[e(f,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:a(()=>[e(g,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=l=>r.value=l),options:k,"today-btn":"","no-unset":"","years-in-month-view":"",mask:"DD/MM/YYYY"},{default:a(()=>[i("div",W,[h(e(Q,{label:"Close",color:"primary",flat:""},null,512),[[b]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{dense:"",modelValue:n.value,"onUpdate:modelValue":o[4]||(o[4]=l=>n.value=l),class:"q-mx-lg",label:"Hasta"},{append:a(()=>[e(y,{name:"event",class:"cursor-pointer"},{default:a(()=>[e(f,{"transition-show":"scale","transition-hide":"scale"},{default:a(()=>[e(g,{modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=l=>n.value=l),"today-btn":"","no-unset":"",mask:"DD/MM/YYYY","years-in-month-view":""},{default:a(()=>[i("div",X,[h(e(Q,{label:"Close",color:"primary",flat:""},null,512),[[b]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),i("div",Z,[e(_,{dense:"",title:"Datos",rows:p.value,columns:C,"row-key":"name","hide-pagination":"",pagination:Y},null,8,["rows"])])]),_:1})]),_:1})],64))}};export{me as default};