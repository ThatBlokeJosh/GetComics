import{C as R,U as de,u as Le,_ as k,c as m,$ as L,o as K,F as M,b as j,a0 as De,K as $,a1 as me,L as J,a2 as fe,a3 as ge,M as Q,a4 as he,N as z,O as ye,a5 as be,a6 as we,a7 as q,a8 as Se,a9 as ze,aa as xe,ab as Oe,ac as ee,ad as _e,ae as Ve,r as O,D as Ye,af as Te,P as Y,q as u,ag as D,ah as We,ai as Ue,aj as Xe,ak as Fe,al as qe,am as Ze,an as Ge,ao as re,ap as Ke,d as ke,aq as je,ar as Je,k as H,T as W,s as P,l as Z,Y as pe,G as E,X as U,v as Qe,t as et,as as G,m as te,at as Be,au as tt,av as at,aw as lt,ax as nt,x as ot,y as it,ay as F,az as st,aA as rt,aB as ut,z as ct,Z as vt}from"./entry.c25e7a07.js";import{m as Ce,u as Ee,a as dt,V as mt}from"./VMain.8f145184.js";import{_ as ft}from"./_plugin-vue_export-helper.c27b6911.js";const gt="$s";function Pe(...e){const o=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(o);const[a,n]=e;if(!a||typeof a!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+a);if(n!==void 0&&typeof n!="function")throw new Error("[nuxt] [useState] init must be a function: "+n);const l=gt+a,t=Le(),s=R(t.payload.state,l);if(s.value===void 0&&n){const c=n();if(de(c))return t.payload.state[l]=c,c;s.value=c}return s}function ht(e){let{rootEl:o,isSticky:a,layoutItemStyles:n}=e;const l=k(!1),t=k(0),s=m(()=>{const h=typeof l.value=="boolean"?"top":l.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[h]:L(t.value)}:{top:n.value.top}]});K(()=>{M(a,h=>{h?window.addEventListener("scroll",S,{passive:!0}):window.removeEventListener("scroll",S)},{immediate:!0})}),j(()=>{window.removeEventListener("scroll",S)});let c=0;function S(){const h=c>window.scrollY?"up":"down",i=o.value.getBoundingClientRect(),f=parseFloat(n.value.top??0),v=window.scrollY-Math.max(0,t.value-f),r=i.height+Math.max(t.value,f)-window.scrollY-window.innerHeight,g=parseFloat(getComputedStyle(o.value).getPropertyValue("--v-body-scroll-y"))||0;i.height<window.innerHeight-f?(l.value="top",t.value=f):h==="up"&&l.value==="bottom"||h==="down"&&l.value==="top"?(t.value=window.scrollY+i.top-g,l.value=!0):h==="down"&&r<=0?(t.value=0,l.value="bottom"):h==="up"&&v<=0&&(g?l.value!=="top"&&(t.value=-v+g+f,l.value="top"):(t.value=i.top+v,l.value="top")),c=window.scrollY}return{isStuck:l,stickyStyles:s}}const yt=100,bt=20;function ue(e){const o=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*o}function ce(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let o=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const n=ue(o),l=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);o+=(l-n)*Math.abs(l),a===e.length-1&&(o*=.5)}return ue(o)*1e3}function wt(){const e={};function o(l){Array.from(l.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new De(bt))).push([l.timeStamp,t])})}function a(l){Array.from(l.changedTouches).forEach(t=>{delete e[t.identifier]})}function n(l){var h;const t=(h=e[l])==null?void 0:h.values().reverse();if(!t)throw new Error(`No samples for touch id ${l}`);const s=t[0],c=[],S=[];for(const i of t){if(s[0]-i[0]>yt)break;c.push({t:i[0],d:i[1].clientX}),S.push({t:i[0],d:i[1].clientY})}return{x:ce(c),y:ce(S),get direction(){const{x:i,y:f}=this,[v,r]=[Math.abs(i),Math.abs(f)];return v>r&&i>=0?"right":v>r&&i<=0?"left":r>v&&f>=0?"down":r>v&&f<=0?"up":St()}}}return{addMovement:o,endTouch:a,getVelocity:n}}function St(){throw new Error}function xt(e){let{isActive:o,isTemporary:a,width:n,touchless:l,position:t}=e;K(()=>{window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",p,{passive:!0})}),j(()=>{window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",p)});const s=m(()=>["left","right"].includes(t.value)),{addMovement:c,endTouch:S,getVelocity:h}=wt();let i=!1;const f=k(!1),v=k(0),r=k(0);let g;function x(d,w){return(t.value==="left"?d:t.value==="right"?document.documentElement.clientWidth-d:t.value==="top"?d:t.value==="bottom"?document.documentElement.clientHeight-d:A())-(w?n.value:0)}function T(d){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const y=t.value==="left"?(d-r.value)/n.value:t.value==="right"?(document.documentElement.clientWidth-d-r.value)/n.value:t.value==="top"?(d-r.value)/n.value:t.value==="bottom"?(document.documentElement.clientHeight-d-r.value)/n.value:A();return w?Math.max(0,Math.min(1,y)):y}function b(d){if(l.value)return;const w=d.changedTouches[0].clientX,y=d.changedTouches[0].clientY,V=25,I=t.value==="left"?w<V:t.value==="right"?w>document.documentElement.clientWidth-V:t.value==="top"?y<V:t.value==="bottom"?y>document.documentElement.clientHeight-V:A(),N=o.value&&(t.value==="left"?w<n.value:t.value==="right"?w>document.documentElement.clientWidth-n.value:t.value==="top"?y<n.value:t.value==="bottom"?y>document.documentElement.clientHeight-n.value:A());(I||N||o.value&&a.value)&&(i=!0,g=[w,y],r.value=x(s.value?w:y,o.value),v.value=T(s.value?w:y),S(d),c(d))}function _(d){const w=d.changedTouches[0].clientX,y=d.changedTouches[0].clientY;if(i){if(!d.cancelable){i=!1;return}const I=Math.abs(w-g[0]),N=Math.abs(y-g[1]);(s.value?I>N&&I>3:N>I&&N>3)?(f.value=!0,i=!1):(s.value?N:I)>3&&(i=!1)}if(!f.value)return;d.preventDefault(),c(d);const V=T(s.value?w:y,!1);v.value=Math.max(0,Math.min(1,V)),V>1?r.value=x(s.value?w:y,!0):V<0&&(r.value=x(s.value?w:y,!1))}function p(d){if(i=!1,!f.value)return;c(d),f.value=!1;const w=h(d.changedTouches[0].identifier),y=Math.abs(w.x),V=Math.abs(w.y);(s.value?y>V&&y>400:V>y&&V>3)?o.value=w.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||A()):o.value=v.value>.5}const B=m(()=>f.value?{transform:t.value==="left"?`translateX(calc(-100% + ${v.value*n.value}px))`:t.value==="right"?`translateX(calc(100% - ${v.value*n.value}px))`:t.value==="top"?`translateY(calc(-100% + ${v.value*n.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${v.value*n.value}px))`:A(),transition:"none"}:void 0);return{isDragging:f,dragProgress:v,dragStyles:B}}function A(){throw new Error}const _t=["start","end","left","right","top","bottom"],Vt=$({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>_t.includes(e)},sticky:Boolean,...me(),...J(),...fe(),...Ce(),...ge(),...Q({tag:"nav"}),...he()},"VNavigationDrawer"),Tt=z()({name:"VNavigationDrawer",props:Vt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,o){let{attrs:a,emit:n,slots:l}=o;const{isRtl:t}=ye(),{themeClasses:s}=be(e),{borderClasses:c}=we(e),{backgroundColorClasses:S,backgroundColorStyles:h}=q(R(e,"color")),{elevationClasses:i}=Se(e),{mobile:f}=ze(),{roundedClasses:v}=xe(e),r=Oe(),g=ee(e,"modelValue",null,C=>!!C),{ssrBootStyles:x}=_e(),{scopeId:T}=Ve(),b=O(),_=k(!1),p=m(()=>e.rail&&e.expandOnHover&&_.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),B=m(()=>Xe(e.location,t.value)),d=m(()=>!e.permanent&&(f.value||e.temporary)),w=m(()=>e.sticky&&!d.value&&B.value!=="bottom");e.expandOnHover&&e.rail!=null&&M(_,C=>n("update:rail",!C)),e.disableResizeWatcher||M(d,C=>!e.permanent&&Fe(()=>g.value=!C)),!e.disableRouteWatcher&&r&&M(r.currentRoute,()=>d.value&&(g.value=!1)),M(()=>e.permanent,C=>{C&&(g.value=!0)}),Ye(()=>{e.modelValue!=null||d.value||(g.value=e.permanent||!f.value)});const{isDragging:y,dragProgress:V,dragStyles:I}=xt({isActive:g,isTemporary:d,width:p,touchless:R(e,"touchless"),position:B}),N=m(()=>{const C=d.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):p.value;return y.value?C*V.value:C}),{layoutItemStyles:X,layoutItemScrimStyles:Ne}=Ee({id:e.name,order:m(()=>parseInt(e.order,10)),position:B,layoutSize:N,elementSize:p,active:m(()=>g.value||y.value),disableTransitions:m(()=>y.value),absolute:m(()=>e.absolute||w.value&&typeof ae.value!="string")}),{isStuck:ae,stickyStyles:He}=ht({rootEl:b,isSticky:w,layoutItemStyles:X}),le=q(m(()=>typeof e.scrim=="string"?e.scrim:null)),Ae=m(()=>({...y.value?{opacity:V.value*.2,transition:"none"}:void 0,...Ne.value}));Te({VList:{bgColor:"transparent"}});function Re(){_.value=!0}function $e(){_.value=!1}return Y(()=>{const C=l.image||e.image;return u(Ue,null,[u(e.tag,D({ref:b,onMouseenter:Re,onMouseleave:$e,class:["v-navigation-drawer",`v-navigation-drawer--${B.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":_.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":d.value,"v-navigation-drawer--active":g.value,"v-navigation-drawer--sticky":w.value},s.value,S.value,c.value,i.value,v.value,e.class],style:[h.value,X.value,I.value,x.value,He.value,e.style]},T,a),{default:()=>{var ne,oe,ie,se;return[C&&u("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?(ne=l.image)==null?void 0:ne.call(l,{image:e.image}):u("img",{src:e.image,alt:""},null)]),l.prepend&&u("div",{class:"v-navigation-drawer__prepend"},[(oe=l.prepend)==null?void 0:oe.call(l)]),u("div",{class:"v-navigation-drawer__content"},[(ie=l.default)==null?void 0:ie.call(l)]),l.append&&u("div",{class:"v-navigation-drawer__append"},[(se=l.append)==null?void 0:se.call(l)])]}}),u(We,{name:"fade-transition"},{default:()=>[d.value&&(y.value||g.value)&&!!e.scrim&&u("div",D({class:["v-navigation-drawer__scrim",le.backgroundColorClasses.value],style:[Ae.value,le.backgroundColorStyles.value],onClick:()=>g.value=!1},T),null)]})])}),{isStuck:ae}}});const kt=$({id:String,text:String,...qe(Ze({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),pt=z()({name:"VTooltip",props:kt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;const n=ee(e,"modelValue"),{scopeId:l}=Ve(),t=Ge(),s=m(()=>e.id||`v-tooltip-${t}`),c=O(),S=m(()=>e.location.split(" ").length>1?e.location:e.location+" center"),h=m(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),i=m(()=>e.transition?e.transition:n.value?"scale-transition":"fade-transition"),f=m(()=>D({"aria-describedby":s.value},e.activatorProps));return Y(()=>{const[v]=re.filterProps(e);return u(re,D({ref:c,class:["v-tooltip",e.class],style:e.style,id:s.value},v,{modelValue:n.value,"onUpdate:modelValue":r=>n.value=r,transition:i.value,absolute:!0,location:S.value,origin:h.value,persistent:!0,role:"tooltip",activatorProps:f.value,_disableGlobalStack:!0},l),{activator:a.activator,default:function(){var T;for(var r=arguments.length,g=new Array(r),x=0;x<r;x++)g[x]=arguments[x];return((T=a.default)==null?void 0:T.call(a,...g))??e.text}})}),Ke({},c)}}),Ie=e=>(ot("data-v-0b5d278c"),e=e(),it(),e),Bt={key:0,style:{position:"absolute",top:"5px",right:"-20px","z-index":"9999"}},Ct={class:"pt-10 pb-7 bg-background",style:{position:"sticky",top:"0","z-index":"99"}},Et={key:0},Pt=Ie(()=>te("p",{class:"text-center mt-5 font-weight-semibold"},"Get Comics Downloader",-1)),It=Ie(()=>te("p",{class:"text-center text-body-2 text-medium-emphasis mt-1"},null,-1)),Mt=[Pt,It],Nt=ke({__name:"AdminNav",setup(e){je(t=>({"7eb7e699":E(n).current.value.dark?"#1d2636":"#e5e5e5"}));const o=O(!1),a=Pe("drawer",()=>null),n=Je(),l=()=>{n.global.name.value=n.global.current.value.dark?"light":"dark",localStorage.setItem("grow-theme",n.global.current.value.dark?"dark":"light")};return(t,s)=>(H(),W(Tt,{modelValue:E(a),"onUpdate:modelValue":s[2]||(s[2]=c=>de(a)?a.value=c:null),"expand-on-hover":"",rail:E(o),class:"nav",width:"270"},{default:P(()=>[t.$vuetify.display.lgAndUp?(H(),Z("div",Bt,[u(pe,{onClick:s[0]||(s[0]=c=>o.value=!E(o)),size:"small",flat:"",border:"",icon:""},{default:P(()=>[u(U,{icon:E(o)?"heroicons:chevron-right":"heroicons:bars-2"},null,8,["icon"]),u(pt,{activator:"parent"},{default:P(()=>[Qe(et(E(o)?"Expand":"Collapse"),1)]),_:1})]),_:1})])):G("",!0),te("div",Ct,[u(Be,{src:"/icon.svg",contain:"",class:"mx-auto",height:E(o)?50:70,width:E(o)?40:void 0},null,8,["height","width"]),u(tt,{"leave-absolute":""},{default:P(()=>[E(o)?G("",!0):(H(),Z("div",Et,Mt))]),_:1})]),u(at,{nav:""},{default:P(()=>[u(lt,{onClick:s[1]||(s[1]=()=>l()),color:"primary",density:"comfortable"},{prepend:P(()=>[E(n).current.value.dark?(H(),W(U,{key:"dark",size:"22",icon:"solar:sun-2-line-duotone",class:"mr-4"})):(H(),W(U,{key:"light",size:"22",icon:"solar:cloudy-moon-line-duotone",class:"mr-4"}))]),default:P(()=>[u(nt,{textContent:"Change theme",class:"text-body-2 font-weight-regular"})]),_:1})]),_:1})]),_:1},8,["modelValue","rail"]))}});const Ht=ft(Nt,[["__scopeId","data-v-0b5d278c"]]);const At=$({text:String,...J(),...Q()},"VToolbarTitle"),Rt=z()({name:"VToolbarTitle",props:At(),setup(e,o){let{slots:a}=o;return Y(()=>{const n=!!(a.default||a.text||e.text);return u(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[n&&u("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(l=a.default)==null?void 0:l.call(a)])]}})}),{}}}),$t=[null,"prominent","default","comfortable","compact"],Me=$({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>$t.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...me(),...J(),...fe(),...ge(),...Q({tag:"header"}),...he()},"VToolbar"),ve=z()({name:"VToolbar",props:Me(),setup(e,o){var r;let{slots:a}=o;const{backgroundColorClasses:n,backgroundColorStyles:l}=q(R(e,"color")),{borderClasses:t}=we(e),{elevationClasses:s}=Se(e),{roundedClasses:c}=xe(e),{themeClasses:S}=be(e),{rtlClasses:h}=ye(),i=k(!!(e.extended||(r=a.extension)!=null&&r.call(a))),f=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),v=m(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Te({VBtn:{variant:"text"}}),Y(()=>{var b;const g=!!(e.title||a.title),x=!!(a.image||e.image),T=(b=a.extension)==null?void 0:b.call(a);return i.value=!!(e.extended||T),u(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,t.value,s.value,c.value,S.value,h.value,e.class],style:[l.value,e.style]},{default:()=>[x&&u("div",{key:"image",class:"v-toolbar__image"},[a.image?u(F,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):u(Be,{key:"image-img",cover:!0,src:e.image},null)]),u(F,{defaults:{VTabs:{height:L(f.value)}}},{default:()=>{var _,p,B;return[u("div",{class:"v-toolbar__content",style:{height:L(f.value)}},[a.prepend&&u("div",{class:"v-toolbar__prepend"},[(_=a.prepend)==null?void 0:_.call(a)]),g&&u(Rt,{key:"title",text:e.title},{text:a.title}),(p=a.default)==null?void 0:p.call(a),a.append&&u("div",{class:"v-toolbar__append"},[(B=a.append)==null?void 0:B.call(a)])])]}}),u(F,{defaults:{VTabs:{height:L(v.value)}}},{default:()=>[u(st,null,{default:()=>[i.value&&u("div",{class:"v-toolbar__extension",style:{height:L(v.value)}},[T])]})]})]})}),{contentHeight:f,extensionHeight:v}}}),Lt=$({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Dt(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=o;let n=0;const l=O(null),t=k(0),s=k(0),c=k(0),S=k(!1),h=k(!1),i=m(()=>Number(e.scrollThreshold)),f=m(()=>rt((i.value-t.value)/i.value||0)),v=()=>{const r=l.value;!r||a&&!a.value||(n=t.value,t.value="window"in r?r.pageYOffset:r.scrollTop,h.value=t.value<n,c.value=Math.abs(t.value-i.value))};return M(h,()=>{s.value=s.value||t.value}),M(S,()=>{s.value=0}),K(()=>{M(()=>e.scrollTarget,r=>{var x;const g=r?document.querySelector(r):window;g&&g!==l.value&&((x=l.value)==null||x.removeEventListener("scroll",v),l.value=g,l.value.addEventListener("scroll",v,{passive:!0}))},{immediate:!0})}),j(()=>{var r;(r=l.value)==null||r.removeEventListener("scroll",v)}),a&&M(a,v,{immediate:!0}),{scrollThreshold:i,currentScroll:t,currentThreshold:c,isScrollActive:S,scrollRatio:f,isScrollingUp:h,savedScroll:s}}const zt=$({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Me(),...Ce(),...Lt(),height:{type:[Number,String],default:64}},"VAppBar"),Ot=z()({name:"VAppBar",props:zt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;const n=O(),l=ee(e,"modelValue"),t=m(()=>{var _;const b=new Set(((_=e.scrollBehavior)==null?void 0:_.split(" "))??[]);return{hide:b.has("hide"),inverted:b.has("inverted"),collapse:b.has("collapse"),elevate:b.has("elevate"),fadeImage:b.has("fade-image")}}),s=m(()=>{const b=t.value;return b.hide||b.inverted||b.collapse||b.elevate||b.fadeImage||!l.value}),{currentScroll:c,scrollThreshold:S,isScrollingUp:h,scrollRatio:i}=Dt(e,{canScroll:s}),f=m(()=>e.collapse||t.value.collapse&&(t.value.inverted?i.value>0:i.value===0)),v=m(()=>e.flat||t.value.elevate&&(t.value.inverted?c.value>0:c.value===0)),r=m(()=>t.value.fadeImage?t.value.inverted?1-i.value:i.value:void 0),g=m(()=>{var p,B;if(t.value.hide&&t.value.inverted)return 0;const b=((p=n.value)==null?void 0:p.contentHeight)??0,_=((B=n.value)==null?void 0:B.extensionHeight)??0;return b+_});ut(m(()=>!!e.scrollBehavior),()=>{ct(()=>{t.value.hide?t.value.inverted?l.value=c.value>S.value:l.value=h.value||c.value<S.value:l.value=!0})});const{ssrBootStyles:x}=_e(),{layoutItemStyles:T}=Ee({id:e.name,order:m(()=>parseInt(e.order,10)),position:R(e,"location"),layoutSize:g,elementSize:k(void 0),active:l,absolute:R(e,"absolute")});return Y(()=>{const[b]=ve.filterProps(e);return u(ve,D({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...T.value,"--v-toolbar-image-opacity":r.value,height:void 0,...x.value},e.style]},b,{collapse:f.value,flat:v.value}),a)}),{}}}),Xt=ke({__name:"default",setup(e){const o=Pe("drawer",()=>{});return(a,n)=>{const l=Ht;return H(),Z("div",null,[u(mt,null,{default:P(()=>[u(l),u(Ot,{class:"px-lg-10",flat:"",border:"b"},{default:P(()=>[a.$vuetify.display.mdAndDown?(H(),W(pe,{key:0,size:"small",flat:"",border:"",icon:"",onClick:n[0]||(n[0]=t=>o.value=!E(o))},{default:P(()=>[u(U,{icon:E(o)?"heroicons:chevron-right":"heroicons:bars-2"},null,8,["icon"])]),_:1})):G("",!0)]),_:1}),u(dt,null,{default:P(()=>[vt(a.$slots,"default")]),_:3})]),_:3})])}}});export{Xt as default};
