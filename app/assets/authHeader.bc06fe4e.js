import{c as C,u as x,aH as _,d as y,aI as B,a,B as R,g as I,b as l,Q as u,aJ as A,ao as Q,X as j,E as w}from"./index.667e992f.js";const z={xs:8,sm:10,md:14,lg:20,xl:24};var V=C({name:"QChip",props:{...x,..._,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:h,emit:n}){const{proxy:{$q:i}}=I(),v=y(e,i),b=B(e,z),m=a(()=>e.selected===!0||e.icon!==void 0),f=a(()=>e.selected===!0?e.iconSelected||i.iconSet.chip.selected:e.icon),q=a(()=>e.iconRemove||i.iconSet.chip.remove),c=a(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),g=a(()=>{const t=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(c.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(v.value===!0?" q-chip--dark q-dark":"")}),s=a(()=>{const t=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},o={...t,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||i.lang.label.remove};return{chip:t,remove:o}});function k(t){t.keyCode===13&&r(t)}function r(t){e.disable||(n("update:selected",!e.selected),n("click",t))}function d(t){(t.keyCode===void 0||t.keyCode===13)&&(j(t),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function S(){const t=[];c.value===!0&&t.push(l("div",{class:"q-focus-helper"})),m.value===!0&&t.push(l(u,{class:"q-chip__icon q-chip__icon--left",name:f.value}));const o=e.label!==void 0?[l("div",{class:"ellipsis"},[e.label])]:void 0;return t.push(l("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},A(h.default,o))),e.iconRight&&t.push(l(u,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&t.push(l(u,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:q.value,...s.value.remove,onClick:d,onKeyup:d})),t}return()=>{if(e.modelValue===!1)return;const t={class:g.value,style:b.value};return c.value===!0&&Object.assign(t,s.value.chip,{onClick:r,onKeyup:k}),R("div",t,S(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Q,e.ripple]])}}});function L(){const e=w();return e.user&&e.user.token?{"Content-Type":"application/json",Accept:"application/json","x-access-token":e.user.token}:{}}export{V as Q,L as a};