import{K as C,aC as T,c as v,r as ne,J as $,aD as se,aE as D,_ as U,o as le,aF as Z,aG as ue,an as ie,aH as re,aI as ce,b as ve,$ as R,L as q,a4 as de,N as F,a5 as ye,O as pe,P as X,q as M,M as me,ad as fe}from"./entry.c25e7a07.js";const z=Symbol.for("vuetify:layout"),G=Symbol.for("vuetify:layout-item"),j=1e3,ge=C({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ve=C({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function he(){const e=T(z);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function $e(e){const r=T(z);if(!r)throw new Error("[Vuetify] Could not find injected layout");const a=e.id??`layout-item-${ie()}`,l=D("useLayoutItem");Z(G,{id:a});const n=U(!1);re(()=>n.value=!0),ce(()=>n.value=!1);const{layoutItemStyles:u,layoutItemScrimStyles:i}=r.register(l,{...e,active:v(()=>n.value?!1:e.active.value),id:a});return ve(()=>r.unregister(a)),{layoutItemStyles:u,layoutRect:r.layoutRect,layoutItemScrimStyles:i}}const Ie=(e,r,a,l)=>{let n={top:0,left:0,right:0,bottom:0};const u=[{id:"",layer:{...n}}];for(const i of e){const p=r.get(i),f=a.get(i),I=l.get(i);if(!p||!f||!I)continue;const g={...n,[p.value]:parseInt(n[p.value],10)+(I.value?parseInt(f.value,10):0)};u.push({id:i,layer:g}),n=g}return u};function be(e){const r=T(z,null),a=v(()=>r?r.rootZIndex.value-100:j),l=ne([]),n=$(new Map),u=$(new Map),i=$(new Map),p=$(new Map),f=$(new Map),{resizeRef:I,contentRect:g}=se(),J=v(()=>{const o=new Map,d=e.overlaps??[];for(const t of d.filter(c=>c.includes(":"))){const[c,s]=t.split(":");if(!l.value.includes(c)||!l.value.includes(s))continue;const m=n.get(c),h=n.get(s),w=u.get(c),L=u.get(s);!m||!h||!w||!L||(o.set(s,{position:m.value,amount:parseInt(w.value,10)}),o.set(c,{position:h.value,amount:-parseInt(L.value,10)}))}return o}),b=v(()=>{const o=[...new Set([...i.values()].map(t=>t.value))].sort((t,c)=>t-c),d=[];for(const t of o){const c=l.value.filter(s=>{var m;return((m=i.get(s))==null?void 0:m.value)===t});d.push(...c)}return Ie(d,n,u,p)}),B=v(()=>!Array.from(f.values()).some(o=>o.value)),x=v(()=>b.value[b.value.length-1].layer),W=v(()=>({"--v-layout-left":R(x.value.left),"--v-layout-right":R(x.value.right),"--v-layout-top":R(x.value.top),"--v-layout-bottom":R(x.value.bottom),...B.value?void 0:{transition:"none"}})),S=v(()=>b.value.slice(1).map((o,d)=>{let{id:t}=o;const{layer:c}=b.value[d],s=u.get(t),m=n.get(t);return{id:t,...c,size:Number(s.value),position:m.value}})),E=o=>S.value.find(d=>d.id===o),P=D("createLayout"),H=U(!1);le(()=>{H.value=!0}),Z(z,{register:(o,d)=>{let{id:t,order:c,position:s,layoutSize:m,elementSize:h,active:w,disableTransitions:L,absolute:ee}=d;i.set(t,c),n.set(t,s),u.set(t,m),p.set(t,w),L&&f.set(t,L);const _=ue(G,P==null?void 0:P.vnode).indexOf(o);_>-1?l.value.splice(_,0,t):l.value.push(t);const N=v(()=>S.value.findIndex(V=>V.id===t)),A=v(()=>a.value+b.value.length*2-N.value*2),te=v(()=>{const V=s.value==="left"||s.value==="right",O=s.value==="right",oe=s.value==="bottom",K={[s.value]:0,zIndex:A.value,transform:`translate${V?"X":"Y"}(${(w.value?0:-110)*(O||oe?-1:1)}%)`,position:ee.value||a.value!==j?"absolute":"fixed",...B.value?void 0:{transition:"none"}};if(!H.value)return K;const y=S.value[N.value];if(!y)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const k=J.value.get(t);return k&&(y[k.position]+=k.amount),{...K,height:V?`calc(100% - ${y.top}px - ${y.bottom}px)`:h.value?`${h.value}px`:void 0,left:O?void 0:`${y.left}px`,right:O?`${y.right}px`:void 0,top:s.value!=="bottom"?`${y.top}px`:void 0,bottom:s.value!=="top"?`${y.bottom}px`:void 0,width:V?h.value?`${h.value}px`:void 0:`calc(100% - ${y.left}px - ${y.right}px)`}}),ae=v(()=>({zIndex:A.value-1}));return{layoutItemStyles:te,layoutItemScrimStyles:ae,zIndex:A}},unregister:o=>{i.delete(o),n.delete(o),u.delete(o),p.delete(o),f.delete(o),l.value=l.value.filter(d=>d!==o)},mainRect:x,mainStyles:W,getLayoutItem:E,items:S,layoutRect:g,rootZIndex:a});const Y=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),Q=v(()=>({zIndex:a.value,position:r?"relative":void 0,overflow:r?"hidden":void 0}));return{layoutClasses:Y,layoutStyles:Q,getLayoutItem:E,items:S,layoutRect:g,layoutRef:I}}const xe=C({...q(),...ge({fullHeight:!0}),...de()},"VApp"),Re=F()({name:"VApp",props:xe(),setup(e,r){let{slots:a}=r;const l=ye(e),{layoutClasses:n,layoutStyles:u,getLayoutItem:i,items:p,layoutRef:f}=be(e),{rtlClasses:I}=pe();return X(()=>{var g;return M("div",{ref:f,class:["v-application",l.themeClasses.value,n.value,I.value,e.class],style:[u.value,e.style]},[M("div",{class:"v-application__wrap"},[(g=a.default)==null?void 0:g.call(a)])])}),{getLayoutItem:i,items:p,theme:l}}});const Se=C({scrollable:Boolean,...q(),...me({tag:"main"})},"VMain"),Me=F()({name:"VMain",props:Se(),setup(e,r){let{slots:a}=r;const{mainStyles:l}=he(),{ssrBootStyles:n}=fe();return X(()=>M(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[l.value,n.value,e.style]},{default:()=>{var u,i;return[e.scrollable?M("div",{class:"v-main__scroller"},[(u=a.default)==null?void 0:u.call(a)]):(i=a.default)==null?void 0:i.call(a)]}})),{}}});export{Re as V,Me as a,Ve as m,$e as u};