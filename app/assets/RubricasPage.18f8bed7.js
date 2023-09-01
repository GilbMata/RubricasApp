import{u as Ze,Q as _t,d as wt}from"./date.5ba94c70.js";import{c as H,q as qt,ak as Pt,t as Tt,r as T,a as l,al as $t,v as Mt,am as Bt,x as At,an as Lt,w as ue,o as ce,ag as ne,ab as G,a0 as It,b as m,ai as Pe,g as K,C as j,X as re,d as et,ao as Vt,ap as ye,u as tt,aq as Rt,af as we,B as at,ar as Et,as as Nt,Q as Dt,n as zt,at as Ft,a8 as Ut,a9 as ee,Z as Ot,aa as Qt,ac as xe,A as jt,au as Ht,av as nt,i as Kt,e as Ce,aw as rt,a3 as Wt,m as Yt,ax as te,ay as Xt,_ as Gt,az as Jt,E as Zt,z as ea,G as ae,H as ta,I as N,J as B,S as Q,R as ie,aA as Ve,aB as Re,P as ke,L as Ee,M as Ne,aC as De,aD as aa,aE as na}from"./index.302b6eaf.js";import{u as ra,v as ze,a as la,p as Fe,b as oa,c as sa,r as Ue,s as ia,d as ua,Q as Oe}from"./QChip.c0577f4d.js";import{c as qe}from"./selection.d8d846f4.js";import{T as ca,g as Qe,s as je}from"./TouchPan.373ac755.js";import{b as J}from"./format.2bc25e5f.js";import{Q as da}from"./QPage.9da0b17f.js";import{a as Se}from"./authHeader.38407fc4.js";var He=H({name:"QTooltip",inheritAttrs:!1,props:{...ra,...qt,...Pt,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ze},self:{type:String,default:"top middle",validator:ze},offset:{type:Array,default:()=>[14,14],validator:la},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Tt],setup(e,{slots:o,emit:d,attrs:u}){let t,n;const c=K(),{proxy:{$q:i}}=c,h=T(null),b=T(!1),p=l(()=>Fe(e.anchor,i.lang.rtl)),k=l(()=>Fe(e.self,i.lang.rtl)),g=l(()=>e.persistent!==!0),{registerTick:x,removeTick:v}=$t(),{registerTimeout:r}=Mt(),{transitionProps:s,transitionStyle:f}=Bt(e),{localScrollTarget:S,changeScrollEvent:_,unconfigureScrollTarget:I}=oa(e,oe),{anchorEl:$,canShow:W,anchorEvents:A}=sa({showing:b,configureAnchorEl:de}),{show:O,hide:E}=At({showing:b,canShow:W,handleShow:y,handleHide:w,hideOnRouteChange:g,processOnMount:!0});Object.assign(A,{delayShow:X,delayHide:le});const{showPortal:F,hidePortal:D,renderPortal:Y}=Lt(c,h,pe,"tooltip");if(i.platform.is.mobile===!0){const M={anchorEl:$,innerRef:h,onClickOutside(z){return E(z),z.target.classList.contains("q-dialog__backdrop")&&re(z),!0}},Z=l(()=>e.modelValue===null&&e.persistent!==!0&&b.value===!0);ue(Z,z=>{(z===!0?ua:Ue)(M)}),ce(()=>{Ue(M)})}function y(M){F(),x(()=>{n=new MutationObserver(()=>R()),n.observe(h.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),R(),oe()}),t===void 0&&(t=ue(()=>i.screen.width+"|"+i.screen.height+"|"+e.self+"|"+e.anchor+"|"+i.lang.rtl,R)),r(()=>{F(!0),d("show",M)},e.transitionDuration)}function w(M){v(),D(),V(),r(()=>{D(!0),d("hide",M)},e.transitionDuration)}function V(){n!==void 0&&(n.disconnect(),n=void 0),t!==void 0&&(t(),t=void 0),I(),ne(A,"tooltipTemp")}function R(){const M=h.value;$.value===null||!M||ia({el:M,offset:e.offset,anchorEl:$.value,anchorOrigin:p.value,selfOrigin:k.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function X(M){if(i.platform.is.mobile===!0){qe(),document.body.classList.add("non-selectable");const Z=$.value,z=["touchmove","touchcancel","touchend","click"].map(se=>[Z,se,"delayHide","passiveCapture"]);G(A,"tooltipTemp",z)}r(()=>{O(M)},e.delay)}function le(M){i.platform.is.mobile===!0&&(ne(A,"tooltipTemp"),qe(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),r(()=>{E(M)},e.hideDelay)}function de(){if(e.noParentEvent===!0||$.value===null)return;const M=i.platform.is.mobile===!0?[[$.value,"touchstart","delayShow","passive"]]:[[$.value,"mouseenter","delayShow","passive"],[$.value,"mouseleave","delayHide","passive"]];G(A,"anchor",M)}function oe(){if($.value!==null||e.scrollTarget!==void 0){S.value=It($.value,e.scrollTarget);const M=e.noParentEvent===!0?R:E;_(S.value,M)}}function ve(){return b.value===!0?m("div",{...u,ref:h,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",u.class],style:[u.style,f.value],role:"tooltip"},j(o.default)):null}function pe(){return m(Pe,s.value,ve)}return ce(V),Object.assign(c.proxy,{updatePosition:R}),Y}});const Ke="q-slider__marker-labels",va=e=>({value:e}),pa=({marker:e})=>m("div",{key:e.value,style:e.style,class:e.classes},e.label),lt=[34,37,40,33,39,38],fa={...tt,...Rt,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:e=>e>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,hideSelection:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},ma=["pan","update:modelValue","change"];function ba({updateValue:e,updatePosition:o,getDragging:d,formAttrs:u}){const{props:t,emit:n,slots:c,proxy:{$q:i}}=K(),h=et(t,i),b=Et(u),p=T(!1),k=T(!1),g=T(!1),x=T(!1),v=l(()=>t.vertical===!0?"--v":"--h"),r=l(()=>"-"+(t.switchLabelSide===!0?"switched":"standard")),s=l(()=>t.vertical===!0?t.reverse===!0:t.reverse!==(i.lang.rtl===!0)),f=l(()=>isNaN(t.innerMin)===!0||t.innerMin<t.min?t.min:t.innerMin),S=l(()=>isNaN(t.innerMax)===!0||t.innerMax>t.max?t.max:t.innerMax),_=l(()=>t.disable!==!0&&t.readonly!==!0&&f.value<S.value),I=l(()=>(String(t.step).trim().split(".")[1]||"").length),$=l(()=>t.step===0?1:t.step),W=l(()=>_.value===!0?t.tabindex||0:-1),A=l(()=>t.max-t.min),O=l(()=>S.value-f.value),E=l(()=>fe(f.value)),F=l(()=>fe(S.value)),D=l(()=>t.vertical===!0?s.value===!0?"bottom":"top":s.value===!0?"right":"left"),Y=l(()=>t.vertical===!0?"height":"width"),y=l(()=>t.vertical===!0?"width":"height"),w=l(()=>t.vertical===!0?"vertical":"horizontal"),V=l(()=>{const a={role:"slider","aria-valuemin":f.value,"aria-valuemax":S.value,"aria-orientation":w.value,"data-step":t.step};return t.disable===!0?a["aria-disabled"]="true":t.readonly===!0&&(a["aria-readonly"]="true"),a}),R=l(()=>`q-slider q-slider${v.value} q-slider--${p.value===!0?"":"in"}active inline no-wrap `+(t.vertical===!0?"row":"column")+(t.disable===!0?" disabled":" q-slider--enabled"+(_.value===!0?" q-slider--editable":""))+(g.value==="both"?" q-slider--focus":"")+(t.label||t.labelAlways===!0?" q-slider--label":"")+(t.labelAlways===!0?" q-slider--label-always":"")+(h.value===!0?" q-slider--dark":"")+(t.dense===!0?" q-slider--dense q-slider--dense"+v.value:""));function X(a){const C="q-slider__"+a;return`${C} ${C}${v.value} ${C}${v.value}${r.value}`}function le(a){const C="q-slider__"+a;return`${C} ${C}${v.value}`}const de=l(()=>{const a=t.selectionColor||t.color;return"q-slider__selection absolute"+(a!==void 0?` text-${a}`:"")}),oe=l(()=>le("markers")+" absolute overflow-hidden"),ve=l(()=>le("track-container")),pe=l(()=>X("pin")),M=l(()=>X("label")),Z=l(()=>X("text-container")),z=l(()=>X("marker-labels-container")+(t.markerLabelsClass!==void 0?` ${t.markerLabelsClass}`:"")),se=l(()=>"q-slider__track relative-position no-outline"+(t.trackColor!==void 0?` bg-${t.trackColor}`:"")),it=l(()=>{const a={[y.value]:t.trackSize};return t.trackImg!==void 0&&(a.backgroundImage=`url(${t.trackImg}) !important`),a}),ut=l(()=>"q-slider__inner absolute"+(t.innerTrackColor!==void 0?` bg-${t.innerTrackColor}`:"")),Te=l(()=>{const a={[D.value]:`${100*E.value}%`,[Y.value]:`${100*(F.value-E.value)}%`};return t.innerTrackImg!==void 0&&(a.backgroundImage=`url(${t.innerTrackImg}) !important`),a});function ct(a){const{min:C,max:q,step:P}=t;let L=C+a*(q-C);if(P>0){const U=(L-C)%P;L+=(Math.abs(U)>=P/2?(U<0?-1:1)*P:0)-U}return I.value>0&&(L=parseFloat(L.toFixed(I.value))),J(L,f.value,S.value)}function fe(a){return A.value===0?0:(a-t.min)/A.value}function dt(a,C){const q=we(a),P=t.vertical===!0?J((q.top-C.top)/C.height,0,1):J((q.left-C.left)/C.width,0,1);return J(s.value===!0?1-P:P,E.value,F.value)}const $e=l(()=>Vt(t.markers)===!0?t.markers:$.value),Me=l(()=>{const a=[],C=$e.value,q=t.max;let P=t.min;do a.push(P),P+=C;while(P<q);return a.push(q),a}),Be=l(()=>{const a=` ${Ke}${v.value}-`;return Ke+`${a}${t.switchMarkerLabelsSide===!0?"switched":"standard"}${a}${s.value===!0?"rtl":"ltr"}`}),me=l(()=>t.markerLabels===!1?null:pt(t.markerLabels).map((a,C)=>({index:C,value:a.value,label:a.label||a.value,classes:Be.value+(a.classes!==void 0?" "+a.classes:""),style:{...Le(a.value),...a.style||{}}}))),Ae=l(()=>({markerList:me.value,markerMap:ft.value,classes:Be.value,getStyle:Le})),vt=l(()=>{if(O.value!==0){const a=100*$e.value/O.value;return{...Te.value,backgroundSize:t.vertical===!0?`2px ${a}%`:`${a}% 2px`}}return null});function pt(a){if(a===!1)return null;if(a===!0)return Me.value.map(va);if(typeof a=="function")return Me.value.map(q=>{const P=a(q);return ye(P)===!0?{...P,value:q}:{value:q,label:P}});const C=({value:q})=>q>=t.min&&q<=t.max;return Array.isArray(a)===!0?a.map(q=>ye(q)===!0?q:{value:q}).filter(C):Object.keys(a).map(q=>{const P=a[q],L=Number(q);return ye(P)===!0?{...P,value:L}:{value:L,label:P}}).filter(C)}function Le(a){return{[D.value]:`${100*(a-t.min)/A.value}%`}}const ft=l(()=>{if(t.markerLabels===!1)return null;const a={};return me.value.forEach(C=>{a[C.value]=C}),a});function mt(){if(c["marker-label-group"]!==void 0)return c["marker-label-group"](Ae.value);const a=c["marker-label"]||pa;return me.value.map(C=>a({marker:C,...Ae.value}))}const bt=l(()=>[[ca,gt,void 0,{[w.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function gt(a){a.isFinal===!0?(x.value!==void 0&&(o(a.evt),a.touch===!0&&e(!0),x.value=void 0,n("pan","end")),p.value=!1,g.value=!1):a.isFirst===!0?(x.value=d(a.evt),o(a.evt),e(),p.value=!0,n("pan","start")):(o(a.evt),e())}function Ie(){g.value=!1}function ht(a){o(a,d(a)),e(),k.value=!0,p.value=!0,document.addEventListener("mouseup",be,!0)}function be(){k.value=!1,p.value=!1,e(!0),Ie(),document.removeEventListener("mouseup",be,!0)}function yt(a){o(a,d(a)),e(!0)}function xt(a){lt.includes(a.keyCode)&&e(!0)}function Ct(a){if(t.vertical===!0)return null;const C=i.lang.rtl!==t.reverse?1-a:a;return{transform:`translateX(calc(${2*C-1} * ${t.thumbSize} / 2 + ${50-100*C}%))`}}function kt(a){const C=l(()=>k.value===!1&&(g.value===a.focusValue||g.value==="both")?" q-slider--focus":""),q=l(()=>`q-slider__thumb q-slider__thumb${v.value} q-slider__thumb${v.value}-${s.value===!0?"rtl":"ltr"} absolute non-selectable`+C.value+(a.thumbColor.value!==void 0?` text-${a.thumbColor.value}`:"")),P=l(()=>({width:t.thumbSize,height:t.thumbSize,[D.value]:`${100*a.ratio.value}%`,zIndex:g.value===a.focusValue?2:void 0})),L=l(()=>a.labelColor.value!==void 0?` text-${a.labelColor.value}`:""),U=l(()=>Ct(a.ratio.value)),ge=l(()=>"q-slider__text"+(a.labelTextColor.value!==void 0?` text-${a.labelTextColor.value}`:""));return()=>{const he=[m("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[m("path",{d:t.thumbPath})]),m("div",{class:"q-slider__focus-ring fit"})];return(t.label===!0||t.labelAlways===!0)&&(he.push(m("div",{class:pe.value+" absolute fit no-pointer-events"+L.value},[m("div",{class:M.value,style:{minWidth:t.thumbSize}},[m("div",{class:Z.value,style:U.value},[m("span",{class:ge.value},a.label.value)])])])),t.name!==void 0&&t.disable!==!0&&b(he,"push")),m("div",{class:q.value,style:P.value,...a.getNodeData()},he)}}function St(a,C,q,P){const L=[];t.innerTrackColor!=="transparent"&&L.push(m("div",{key:"inner",class:ut.value,style:Te.value})),t.selectionColor!=="transparent"&&L.push(m("div",{key:"selection",class:de.value,style:a.value})),t.markers!==!1&&L.push(m("div",{key:"marker",class:oe.value,style:vt.value})),P(L);const U=[at("div",{key:"trackC",class:ve.value,tabindex:C.value,...q.value},[m("div",{class:se.value,style:it.value},L)],"slide",_.value,()=>bt.value)];if(t.markerLabels!==!1){const ge=t.switchMarkerLabelsSide===!0?"unshift":"push";U[ge](m("div",{key:"markerL",class:z.value},mt()))}return U}return ce(()=>{document.removeEventListener("mouseup",be,!0)}),{state:{active:p,focus:g,preventFocus:k,dragging:x,editable:_,classes:R,tabindex:W,attributes:V,step:$,decimals:I,trackLen:A,innerMin:f,innerMinRatio:E,innerMax:S,innerMaxRatio:F,positionProp:D,sizeProp:Y,isReversed:s},methods:{onActivate:ht,onMobileClick:yt,onBlur:Ie,onKeyup:xt,getContent:St,getThumbRenderFn:kt,convertRatioToModel:ct,convertModelToRatio:fe,getDraggingRatio:dt}}}const ga=()=>({});var We=H({name:"QSlider",props:{...fa,modelValue:{required:!0,default:null,validator:e=>typeof e=="number"||e===null},labelValue:[String,Number]},emits:ma,setup(e,{emit:o}){const{proxy:{$q:d}}=K(),{state:u,methods:t}=ba({updateValue:v,updatePosition:s,getDragging:r,formAttrs:Nt(e)}),n=T(null),c=T(0),i=T(0);function h(){i.value=e.modelValue===null?u.innerMin.value:J(e.modelValue,u.innerMin.value,u.innerMax.value)}ue(()=>`${e.modelValue}|${u.innerMin.value}|${u.innerMax.value}`,h),h();const b=l(()=>t.convertModelToRatio(i.value)),p=l(()=>u.active.value===!0?c.value:b.value),k=l(()=>{const _={[u.positionProp.value]:`${100*u.innerMinRatio.value}%`,[u.sizeProp.value]:`${100*(p.value-u.innerMinRatio.value)}%`};return e.selectionImg!==void 0&&(_.backgroundImage=`url(${e.selectionImg}) !important`),_}),g=t.getThumbRenderFn({focusValue:!0,getNodeData:ga,ratio:p,label:l(()=>e.labelValue!==void 0?e.labelValue:i.value),thumbColor:l(()=>e.thumbColor||e.color),labelColor:l(()=>e.labelColor),labelTextColor:l(()=>e.labelTextColor)}),x=l(()=>u.editable.value!==!0?{}:d.platform.is.mobile===!0?{onClick:t.onMobileClick}:{onMousedown:t.onActivate,onFocus:f,onBlur:t.onBlur,onKeydown:S,onKeyup:t.onKeyup});function v(_){i.value!==e.modelValue&&o("update:modelValue",i.value),_===!0&&o("change",i.value)}function r(){return n.value.getBoundingClientRect()}function s(_,I=u.dragging.value){const $=t.getDraggingRatio(_,I);i.value=t.convertRatioToModel($),c.value=e.snap!==!0||e.step===0?$:t.convertModelToRatio(i.value)}function f(){u.focus.value=!0}function S(_){if(!lt.includes(_.keyCode))return;re(_);const I=([34,33].includes(_.keyCode)?10:1)*u.step.value,$=([34,37,40].includes(_.keyCode)?-1:1)*(u.isReversed.value===!0?-1:1)*(e.vertical===!0?-1:1)*I;i.value=J(parseFloat((i.value+$).toFixed(u.decimals.value)),u.innerMin.value,u.innerMax.value),v()}return()=>{const _=t.getContent(k,u.tabindex,x,I=>{I.push(g())});return m("div",{ref:n,class:u.classes.value+(e.modelValue===null?" q-slider--no-value":""),...u.attributes.value,"aria-valuenow":e.modelValue},_)}}}),Ye=H({name:"QStepperNavigation",setup(e,{slots:o}){return()=>m("div",{class:"q-stepper__nav"},j(o.default))}}),ha=H({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:o,emit:d}){let u=!1,t,n,c=null,i=null,h,b;function p(){t&&t(),t=null,u=!1,c!==null&&(clearTimeout(c),c=null),i!==null&&(clearTimeout(i),i=null),n!==void 0&&n.removeEventListener("transitionend",h),h=null}function k(r,s,f){r.style.overflowY="hidden",s!==void 0&&(r.style.height=`${s}px`),r.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,u=!0,t=f}function g(r,s){r.style.overflowY=null,r.style.height=null,r.style.transition=null,p(),s!==b&&d(s)}function x(r,s){let f=0;n=r,u===!0?(p(),f=r.offsetHeight===r.scrollHeight?0:void 0):b="hide",k(r,f,s),c=setTimeout(()=>{c=null,r.style.height=`${r.scrollHeight}px`,h=S=>{i=null,(Object(S)!==S||S.target===r)&&g(r,"show")},r.addEventListener("transitionend",h),i=setTimeout(h,e.duration*1.1)},100)}function v(r,s){let f;n=r,u===!0?p():(b="show",f=r.scrollHeight),k(r,f,s),c=setTimeout(()=>{c=null,r.style.height=0,h=S=>{i=null,(Object(S)!==S||S.target===r)&&g(r,"hide")},r.addEventListener("transitionend",h),i=setTimeout(h,e.duration*1.1)},100)}return ce(()=>{u===!0&&p()}),()=>m(Pe,{css:!1,appear:e.appear,onEnter:x,onLeave:v},o.default)}}),ot=H({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:o}){const{proxy:{$q:d}}=K(),u=T(null),t=l(()=>e.stepper.modelValue===e.step.name),n=l(()=>{const s=e.step.disable;return s===!0||s===""}),c=l(()=>{const s=e.step.error;return s===!0||s===""}),i=l(()=>{const s=e.step.done;return n.value===!1&&(s===!0||s==="")}),h=l(()=>{const s=e.step.headerNav,f=s===!0||s===""||s===void 0;return n.value===!1&&e.stepper.headerNav&&f}),b=l(()=>e.step.prefix&&(t.value===!1||e.stepper.activeIcon==="none")&&(c.value===!1||e.stepper.errorIcon==="none")&&(i.value===!1||e.stepper.doneIcon==="none")),p=l(()=>{const s=e.step.icon||e.stepper.inactiveIcon;if(t.value===!0){const f=e.step.activeIcon||e.stepper.activeIcon;return f==="none"?s:f||d.iconSet.stepper.active}if(c.value===!0){const f=e.step.errorIcon||e.stepper.errorIcon;return f==="none"?s:f||d.iconSet.stepper.error}if(n.value===!1&&i.value===!0){const f=e.step.doneIcon||e.stepper.doneIcon;return f==="none"?s:f||d.iconSet.stepper.done}return s}),k=l(()=>{const s=c.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(t.value===!0){const f=e.step.activeColor||e.stepper.activeColor||e.step.color;return f!==void 0?f:s}return s!==void 0?s:n.value===!1&&i.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),g=l(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(k.value!==void 0?` text-${k.value}`:"")+(c.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(b.value===!0?"prefix":"icon"):"")+(t.value===!0?" q-stepper__tab--active":"")+(i.value===!0?" q-stepper__tab--done":"")+(h.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(n.value===!0?" q-stepper__tab--disabled":"")),x=l(()=>e.stepper.headerNav!==!0?!1:h.value);function v(){u.value!==null&&u.value.focus(),t.value===!1&&e.goToPanel(e.step.name)}function r(s){s.keyCode===13&&t.value===!1&&e.goToPanel(e.step.name)}return()=>{const s={class:g.value};h.value===!0&&(s.onClick=v,s.onKeyup=r,Object.assign(s,n.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:o.tabindex||0}));const f=[m("div",{class:"q-focus-helper",tabindex:-1,ref:u}),m("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[m("span",{class:"row flex-center"},[b.value===!0?e.step.prefix:m(Dt,{name:p.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const S=[m("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&S.push(m("div",{class:"q-stepper__caption"},e.step.caption)),f.push(m("div",{class:"q-stepper__label q-stepper__line relative-position"},S))}return zt(m("div",s,f),[[Ft,x.value]])}}});function ya(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((d,u)=>{const t=parseFloat(d);t&&(o[u]=t)}),o}var xa=Ut({name:"touch-swipe",beforeMount(e,{value:o,arg:d,modifiers:u}){if(u.mouse!==!0&&ee.has.touch!==!0)return;const t=u.mouseCapture===!0?"Capture":"",n={handler:o,sensitivity:ya(d),direction:Qe(u),noop:Ot,mouseStart(c){je(c,n)&&Qt(c)&&(G(n,"temp",[[document,"mousemove","move",`notPassive${t}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(c,!0))},touchStart(c){if(je(c,n)){const i=c.target;G(n,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","notPassiveCapture"],[i,"touchend","end","notPassiveCapture"]]),n.start(c)}},start(c,i){ee.is.firefox===!0&&xe(e,!0);const h=we(c);n.event={x:h.left,y:h.top,time:Date.now(),mouse:i===!0,dir:!1}},move(c){if(n.event===void 0)return;if(n.event.dir!==!1){re(c);return}const i=Date.now()-n.event.time;if(i===0)return;const h=we(c),b=h.left-n.event.x,p=Math.abs(b),k=h.top-n.event.y,g=Math.abs(k);if(n.event.mouse!==!0){if(p<n.sensitivity[1]&&g<n.sensitivity[1]){n.end(c);return}}else if(p<n.sensitivity[2]&&g<n.sensitivity[2])return;const x=p/i,v=g/i;n.direction.vertical===!0&&p<g&&p<100&&v>n.sensitivity[0]&&(n.event.dir=k<0?"up":"down"),n.direction.horizontal===!0&&p>g&&g<100&&x>n.sensitivity[0]&&(n.event.dir=b<0?"left":"right"),n.direction.up===!0&&p<g&&k<0&&p<100&&v>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&p<g&&k>0&&p<100&&v>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&p>g&&b<0&&g<100&&x>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&p>g&&b>0&&g<100&&x>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(re(c),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),qe(),n.styleCleanup=r=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const s=()=>{document.body.classList.remove("no-pointer-events--children")};r===!0?setTimeout(s,50):s()}),n.handler({evt:c,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:i,distance:{x:p,y:g}})):n.end(c)},end(c){n.event!==void 0&&(ne(n,"temp"),ee.is.firefox===!0&&xe(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),c!==void 0&&n.event.dir!==!1&&re(c),n.event=void 0)}};if(e.__qtouchswipe=n,u.mouse===!0){const c=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";G(n,"main",[[e,"mousedown","mouseStart",`passive${c}`]])}ee.has.touch===!0&&G(n,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const d=e.__qtouchswipe;d!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&d.end(),d.handler=o.value),d.direction=Qe(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(ne(o,"main"),ne(o,"temp"),ee.is.firefox===!0&&xe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}});const Ca={name:{required:!0},disable:Boolean},Xe={setup(e,{slots:o}){return()=>m("div",{class:"q-panel scroll",role:"tabpanel"},j(o.default))}},ka={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Sa=["update:modelValue","beforeTransition","transition"];function _a(){const{props:e,emit:o,proxy:d}=K(),{getCacheWithFn:u}=Ze();let t,n;const c=T(null),i=T(null);function h(y){const w=e.vertical===!0?"up":"left";A((d.$q.lang.rtl===!0?-1:1)*(y.direction===w?1:-1))}const b=l(()=>[[xa,h,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),p=l(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),k=l(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),g=l(()=>`--q-transition-duration: ${e.transitionDuration}ms`),x=l(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),v=l(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),r=l(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);ue(()=>e.modelValue,(y,w)=>{const V=_(y)===!0?I(y):-1;n!==!0&&W(V===-1?0:V<I(w)?-1:1),c.value!==V&&(c.value=V,o("beforeTransition",y,w),jt(()=>{o("transition",y,w)}))});function s(){A(1)}function f(){A(-1)}function S(y){o("update:modelValue",y)}function _(y){return y!=null&&y!==""}function I(y){return t.findIndex(w=>w.props.name===y&&w.props.disable!==""&&w.props.disable!==!0)}function $(){return t.filter(y=>y.props.disable!==""&&y.props.disable!==!0)}function W(y){const w=y!==0&&e.animated===!0&&c.value!==-1?"q-transition--"+(y===-1?p.value:k.value):null;i.value!==w&&(i.value=w)}function A(y,w=c.value){let V=w+y;for(;V>-1&&V<t.length;){const R=t[V];if(R!==void 0&&R.props.disable!==""&&R.props.disable!==!0){W(y),n=!0,o("update:modelValue",R.props.name),setTimeout(()=>{n=!1});return}V+=y}e.infinite===!0&&t.length>0&&w!==-1&&w!==t.length&&A(y,y===-1?t.length:-1)}function O(){const y=I(e.modelValue);return c.value!==y&&(c.value=y),!0}function E(){const y=_(e.modelValue)===!0&&O()&&t[c.value];return e.keepAlive===!0?[m(nt,v.value,[m(r.value===!0?u(x.value,()=>({...Xe,name:x.value})):Xe,{key:x.value,style:g.value},()=>y)])]:[m("div",{class:"q-panel scroll",style:g.value,key:x.value,role:"tabpanel"},[y])]}function F(){if(t.length!==0)return e.animated===!0?[m(Pe,{name:i.value},E)]:E()}function D(y){return t=Ht(j(y.default,[])).filter(w=>w.props!==null&&w.props.slot===void 0&&_(w.props.name)===!0),t.length}function Y(){return t}return Object.assign(d,{next:s,previous:f,goTo:S}),{panelIndex:c,panelDirectives:b,updatePanelsList:D,updatePanelIndex:O,getPanelContent:F,getEnabledPanels:$,getPanels:Y,isValidPanelName:_,keepAliveProps:v,needsUniqueKeepAliveWrapper:r,goToPanelByOffset:A,goToPanel:S,nextPanel:s,previousPanel:f}}function st(e){return m("div",{class:"q-stepper__step-content"},[m("div",{class:"q-stepper__step-inner"},j(e.default))])}const Ge={setup(e,{slots:o}){return()=>st(o)}};var Je=H({name:"QStep",props:{...Ca,icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean,onScroll:[Function,Array]},setup(e,{slots:o,emit:d}){const{proxy:{$q:u}}=K(),t=Kt(rt,Ce);if(t===Ce)return console.error("QStep needs to be a child of QStepper"),Ce;const{getCacheWithFn:n}=Ze(),c=T(null),i=l(()=>t.value.modelValue===e.name),h=l(()=>u.platform.is.ios!==!0&&u.platform.is.chrome===!0||i.value!==!0||t.value.vertical!==!0?{}:{onScroll(k){const{target:g}=k;g.scrollTop>0&&(g.scrollTop=0),e.onScroll!==void 0&&d("scroll",k)}}),b=l(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function p(){const k=t.value.vertical;return k===!0&&t.value.keepAlive===!0?m(nt,t.value.keepAliveProps.value,i.value===!0?[m(t.value.needsUniqueKeepAliveWrapper.value===!0?n(b.value,()=>({...Ge,name:b.value})):Ge,{key:b.value},o.default)]:void 0):k!==!0||i.value===!0?st(o):void 0}return()=>m("div",{ref:c,class:"q-stepper__step",role:"tabpanel",...h.value},t.value.vertical===!0?[m(ot,{stepper:t.value,step:e,goToPanel:t.value.goToPanel}),t.value.animated===!0?m(ha,p):p()]:[p()])}});const wa=/(-\w)/g;function qa(e){const o={};for(const d in e){const u=d.replace(wa,t=>t[1].toUpperCase());o[u]=e[d]}return o}var Pa=H({name:"QStepper",props:{...tt,...ka,flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String},emits:Sa,setup(e,{slots:o}){const d=K(),u=et(e,d.proxy.$q),{updatePanelsList:t,isValidPanelName:n,updatePanelIndex:c,getPanelContent:i,getPanels:h,panelDirectives:b,goToPanel:p,keepAliveProps:k,needsUniqueKeepAliveWrapper:g}=_a();Wt(rt,l(()=>({goToPanel:p,keepAliveProps:k,needsUniqueKeepAliveWrapper:g,...e})));const x=l(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0?" q-stepper--flat":"")+(e.bordered===!0?" q-stepper--bordered":"")+(u.value===!0?" q-stepper--dark q-dark":"")),v=l(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function r(){const s=j(o.message,[]);if(e.vertical===!0){n(e.modelValue)&&c();const f=m("div",{class:"q-stepper__content"},j(o.default));return s===void 0?[f]:s.concat(f)}return[m("div",{class:v.value},h().map(f=>{const S=qa(f.props);return m(ot,{key:S.name,stepper:e,step:S,goToPanel:p})})),s,at("div",{class:"q-stepper__content q-panel-parent"},i(),"cont",e.swipeable,()=>b.value)]}return()=>(t(o),m("div",{class:x.value},Yt(o.navigation,r())))}});class Ta{async getRubricas(o){try{return await te.get(`/rubricas/${o}`)}catch(d){return console.error(d),d}}async saveUserRubrica(o){try{const d=await te.post("/userrubrica/new",o);return Xt.create("Datos guardados"),d}catch(d){return console.log(" Error",d),d.response.status}}async delUser(o){try{return await te.delete(`/client/${o}`,{headers:Se()})}catch(d){return console.log(JSON.stringify(d.data)),d}}async editUser(o){console.log(o);try{const d=await te.put(`/user/${o.id}`,{headers:Se(),data:{username:o.username,email:o.email,pass:o.pass,role:o.role}});return console.log(d),d}catch(d){return d}}getUser(o){return te.get(`/user/${o}`,{headers:Se()})}}var _e=new Ta;const $a=e=>(aa("data-v-53a33cec"),e=e(),na(),e),Ma=$a(()=>Q("h6",{style:{"margin-top":"10px","text-align":"center"},class:"q-pa-md"}," Bots del Sistema Operativo Neurocognitivo Personal Autoprogramable Molecularmente para el desarrollo de Embriocient\xEDficos ",-1)),Ba={class:"q-pa-d"},Aa={class:"fit row wrap justify-between"},La={class:"ellipsis"},Ia={class:"fit row wrap justify-between"},Va={class:"ellipsis"},Ra={class:"row items-center q-mt-sm justify-center"},Ea={__name:"RubricasPage",setup(e){const o=Jt(),d=Zt(),u=T(1),t=T(!1),n=T(!1),c=T(null),i=T([]),h=T([]),b=T([]);T([]),ea(()=>{p()});async function p(x=!1){_e.getRubricas("1").then(v=>{i.value=v.rubricas,i.value.forEach(r=>{r.color=g(),b.value[r.uuid]=0}),x&&$q.notify({icon:"done",color:"positive",message:"Datos cargados"})}).catch(v=>{console.log(v),$q.notify({icon:"report_problem",color:"negative",message:"Error de conexi\xF3n",progress:!0})});try{const v=await _e.getRubricas("2");h.value=v.rubricas,h.value.forEach(r=>{r.color=g(),b.value[r.uuid]=0})}catch(v){console.log("\u{1F680} ~ getRubricas ~ error:",v)}}function k(){const x=[],v=wt.formatDate(new Date,"YYYY-MM-DD HH:mm:ss");i.value.forEach(r=>{x.push({UserUuid:d.user.uuid,RubricaUuid:r.uuid,value:b.value[r.uuid],date:v})}),h.value.forEach(r=>{x.push({UserUuid:d.user.uuid,RubricaUuid:r.uuid,value:b.value[r.uuid],date:v})}),console.log("\u{1F680} ~ rubricas.value.forEach ~ rubricasdata",x),_e.saveUserRubrica(x).then(r=>{console.log(r),o.replace({name:"index"})})}function g(){let x=["teal-7","orange-10","deep-orange-7","brown-7","blue-grey","indigo-7","deep-purple-6","green-7","pink-4","red-12","blue-7","cyan-7"],v=Math.floor(Math.random()*x.length);return x[v]}return(x,v)=>(ae(),ta(da,null,{default:N(()=>[B(_t,{ref_key:"bar",ref:c,position:"bottom",color:"primary",size:"10px"},null,512),Ma,Q("div",Ba,[B(Pa,{vertical:"",modelValue:u.value,"onUpdate:modelValue":v[1]||(v[1]=r=>u.value=r),"header-nav":"",ref:"stepper",color:"primary",animated:""},{default:N(()=>[B(Je,{name:1,title:"Bots",icon:"settings",done:t.value},{default:N(()=>[(ae(!0),ie(Re,null,Ve(i.value,r=>(ae(),ie("div",{key:r.uuid,class:"text-capitalize q-pt-xs"},[Q("div",Aa,[Q("div",La,[B(Oe,{class:"glossy",style:{"max-width":"100%"},size:"md",color:r.color?r.color:"blue",label:r.name,ripple:""},{default:N(()=>[B(He,null,{default:N(()=>[Ee(Ne(r.name),1)]),_:2},1024)]),_:2},1032,["color","label"])]),B(De,{class:"self-center",modelValue:b.value[r.uuid],"onUpdate:modelValue":s=>b.value[r.uuid]=s,borderless:"",type:"number",style:{"max-width":"50px"},"text-color":"white"},null,8,["modelValue","onUpdate:modelValue"])]),B(We,{modelValue:b.value[r.uuid],"onUpdate:modelValue":s=>b.value[r.uuid]=s,min:0,max:10,color:"light-green",label:"",markers:"",snap:""},null,8,["modelValue","onUpdate:modelValue"])]))),128)),B(Ye,null,{default:N(()=>[B(ke,{onClick:v[0]||(v[0]=()=>{t.value=!0,u.value=2}),color:"primary",label:"Continuar"})]),_:1})]),_:1},8,["done"]),B(Je,{name:2,title:"Emociones",icon:"settings",done:n.value},{default:N(()=>[(ae(!0),ie(Re,null,Ve(h.value,r=>(ae(),ie("div",{key:r.uuid,class:"text-capitalize q-pt-xs"},[Q("div",Ia,[Q("div",Va,[B(Oe,{class:"glossy",style:{"max-width":"100%"},size:"md",color:r.color?r.color:"blue",label:r.name,ripple:""},{default:N(()=>[B(He,null,{default:N(()=>[Ee(Ne(r.name),1)]),_:2},1024)]),_:2},1032,["color","label"])]),B(De,{class:"self-center",modelValue:b.value[r.uuid],"onUpdate:modelValue":s=>b.value[r.uuid]=s,borderless:"",type:"number",style:{"max-width":"50px"},"text-color":"white"},null,8,["modelValue","onUpdate:modelValue"])]),B(We,{modelValue:b.value[r.uuid],"onUpdate:modelValue":s=>b.value[r.uuid]=s,min:0,max:10,color:"light-green",label:"",markers:"",snap:""},null,8,["modelValue","onUpdate:modelValue"])]))),128)),B(Ye,null,{default:N(()=>[B(ke,{flat:"",color:"primary",onClick:k,label:"Guardar"})]),_:1})]),_:1},8,["done"])]),_:1},8,["modelValue"]),Q("div",Ra,[B(ke,{outline:"",label:"Guardar",onClick:k,class:"q-px-lg"})])])]),_:1}))}};var Ha=Gt(Ea,[["__scopeId","data-v-53a33cec"]]);export{Ha as default};