"use strict";(self.webpackChunkget_price=self.webpackChunkget_price||[]).push([[4263],{22282:(H,f,e)=>{e.r(f),e.d(f,{default:()=>Oe});var t=e(67294),s=e(68547),o=e(49656),O=e(96486),d=e(87751),p=e(87462),l=e(15861),D=e(64687),c=e.n(D),v=e(97132),I=e(45697),U=e.n(I),G=e(78718),z=e.n(G),F=e(27361),x=e.n(F),R=e(57557),w=e.n(R),L=e(23724),T=e(80831),P=e(35961),N=e(29728),C=e(11276),B=e(74571),M=e(67838),W=e(49066),u=e(72735),r=e(185),a=e(7681),n=e(67109),K=e(85018),ee=e(38683),se=e(23998),re=(_,Z,m)=>new Promise((X,i)=>{var V=S=>{try{Y(m.next(S))}catch(Q){i(Q)}},$=S=>{try{Y(m.throw(S))}catch(Q){i(Q)}},Y=S=>S.done?X(S.value):Promise.resolve(S.value).then(V,$);Y((m=m.apply(_,Z)).next())});const Ee=_=>re(void 0,null,function*(){const{data:Z}=yield se.be.get(`/admin/users/${_}`);return Z.data}),ge=(_,Z)=>re(void 0,null,function*(){const{data:m}=yield se.be.put(`/admin/users/${_}`,Z);return m.data}),fe=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]];var ve=e(17405),Pe=e(81288),Me=e(25108),he=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),ne=["email","firstname","lastname","username","isActive","roles"],oe=function(Z){var m=Z.canUpdate,X=(0,v.useIntl)(),i=X.formatMessage,V=(0,o.useRouteMatch)("/settings/users/:id"),$=V.params.id,Y=(0,o.useHistory)(),S=Y.push,Q=(0,s.useAppInfos)(),De=Q.setUserDisplayName,te=(0,s.useNotification)(),le=(0,s.useOverlayBlocker)(),Le=le.lockApp,Ae=le.unlockApp;(0,s.useFocusWhenNavigate)();var ie=(0,L.useQuery)(["user",$],function(){return Ee($)},{retry:!1,keepPreviousData:!1,staleTime:1e3*20,onError:function(E){var g=E.response.status;g===403&&(te({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),S("/")),Me.log(E.response.status)}}),Te=ie.status,A=ie.data,Ce=function(){var h=(0,l.Z)(c().mark(function E(g,j){var J,q,b,ae,ue;return c().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return Le(),y.prev=1,y.next=4,ge($,w()(g,"confirmPassword"));case 4:J=y.sent,te({type:"success",message:i({id:"notification.success.saved",defaultMessage:"Saved"})}),q=s.auth.getUserInfo(),$.toString()===q.id.toString()&&(s.auth.setUserInfo(J),b=x()(g,"username")||(0,ee.Pp)(g.firstname,g.lastname),De(b)),j.setValues(z()(g,ne)),y.next=17;break;case 11:y.prev=11,y.t0=y.catch(1),ae=(0,ee.Iz)(y.t0.response.data),ue=Object.keys(ae).reduce(function(me,pe){return me[pe]=ae[pe].id,me},{}),j.setErrors(ue),te({type:"warning",message:x()(y.t0,"response.data.message","notification.error")});case 17:Ae();case 18:case"end":return y.stop()}},E,null,[[1,11]])}));return function(g,j){return h.apply(this,arguments)}}(),de=Te!=="success",Ie=de?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},k=Object.keys(z()(A,ne)).reduce(function(h,E){return E==="roles"?(h[E]=((A==null?void 0:A.roles)||[]).map(function(g){var j=g.id;return j}),h):(h[E]=A==null?void 0:A[E],h)},{}),Ue=k.username||(0,ee.Pp)(k.firstname,k.lastname),ce=i(Ie,{name:Ue});return de?t.createElement(r.o,{"aria-busy":"true"},t.createElement(s.SettingsPageTitle,{name:"Users"}),t.createElement(M.T,{primaryAction:t.createElement(N.z,{disabled:!0,startIcon:t.createElement(K.Z,null),type:"button",size:"L"},i({id:"global.save",defaultMessage:"Save"})),title:ce,navigationAction:t.createElement(s.Link,{startIcon:t.createElement(n.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},i({id:"global.back",defaultMessage:"Back"}))}),t.createElement(W.D,null,t.createElement(s.LoadingIndicatorPage,null))):t.createElement(r.o,null,t.createElement(s.SettingsPageTitle,{name:"Users"}),t.createElement(T.Formik,{onSubmit:Ce,initialValues:k,validateOnChange:!1,validationSchema:ve.YM},function(h){var E=h.errors,g=h.values,j=h.handleChange,J=h.isSubmitting;return t.createElement(s.Form,null,t.createElement(M.T,{primaryAction:t.createElement(N.z,{disabled:J||!m,startIcon:t.createElement(K.Z,null),loading:J,type:"submit",size:"L"},i({id:"global.save",defaultMessage:"Save"})),title:ce,navigationAction:t.createElement(s.Link,{startIcon:t.createElement(n.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},i({id:"global.back",defaultMessage:"Back"}))}),t.createElement(W.D,null,(A==null?void 0:A.registrationToken)&&t.createElement(P.x,{paddingBottom:6},t.createElement(he,{registrationToken:A.registrationToken})),t.createElement(a.K,{spacing:7},t.createElement(P.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(a.K,{spacing:4},t.createElement(u.Z,{variant:"delta",as:"h2"},i({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(C.r,{gap:5},fe.map(function(q){return q.map(function(b){return t.createElement(B.P,(0,p.Z)({key:b.name},b.size),t.createElement(s.GenericInput,(0,p.Z)({},b,{disabled:!m,error:E[b.name],onChange:j,value:g[b.name]||""})))})})))),t.createElement(P.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(a.K,{spacing:4},t.createElement(u.Z,{variant:"delta",as:"h2"},i({id:"global.roles",defaultMessage:"User's role"})),t.createElement(C.r,{gap:5},t.createElement(B.P,{col:6,xs:12},t.createElement(Pe.Z,{disabled:!m,error:E.roles,onChange:j,value:g.roles}))))))))}))};oe.propTypes={canUpdate:U().bool.isRequired};const ye=oe,Oe=()=>{const _=(0,s.useNotification)(),Z=(0,t.useMemo)(()=>({read:d.Z.settings.users.read,update:d.Z.settings.users.update}),[]),{isLoading:m,allowedActions:{canRead:X,canUpdate:i}}=(0,s.useRBAC)(Z),{state:V}=(0,o.useLocation)(),$=(0,O.get)(V,"from","/");return(0,t.useEffect)(()=>{m||!X&&!i&&_({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[m,X,i,_]),m?t.createElement(s.LoadingIndicatorPage,null):!X&&!i?t.createElement(o.Redirect,{to:$}):t.createElement(ye,{canUpdate:i})}},82464:(H,f,e)=>{e.d(f,{Z:()=>G});var t=e(67294),s=e(45697),o=e.n(s),O=e(12028),d=e(68547),p=e.n(d),l=e(65186),D=e(74855),c=e.n(D),v=e(97132);const I=()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},t.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},t.createElement("tspan",{x:"23",y:"36"},"\u2709\uFE0F"))),U=({children:z,target:F})=>{const x=(0,d.useNotification)(),{formatMessage:R}=(0,v.useIntl)(),w=()=>{x({type:"info",message:{id:"notification.link-copied"}})},L=R({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(d.ContentBox,{endAction:t.createElement(D.CopyToClipboard,{onCopy:w,text:F},t.createElement(O.h,{label:L,noBorder:!0,icon:t.createElement(l.Z,null)})),title:F,titleEllipsis:!0,subtitle:z,icon:t.createElement(I,null),iconBackground:"neutral100"})};U.propTypes={children:o().oneOfType([o().element,o().string]).isRequired,target:o().string.isRequired};const G=U},31605:(H,f,e)=>{e.d(f,{Z:()=>D});var t=e(67294),s=e(97132),o=e(45697),O=e.n(o),d=e(63871),p=e(82464);const l=({registrationToken:c})=>{const{formatMessage:v}=(0,s.useIntl)(),I=`${window.location.origin}${d.Z}auth/register?registrationToken=${c}`;return t.createElement(p.Z,{target:I},v({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};l.defaultProps={registrationToken:""},l.propTypes={registrationToken:O().string};const D=l},81288:(H,f,e)=>{e.d(f,{Z:()=>w});var t=e(67294),s=e(45697),o=e.n(s),O=e(97132),d=e(91216),p=e(82562),l=e(23724),D=e.n(l),c=e(27821),v=e(86647),I=e(23998),U=(L,T,P)=>new Promise((N,C)=>{var B=u=>{try{W(P.next(u))}catch(r){C(r)}},M=u=>{try{W(P.throw(u))}catch(r){C(r)}},W=u=>u.done?N(u.value):Promise.resolve(u.value).then(B,M);W((P=P.apply(L,T)).next())});const G=c.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,z=c.default.div`
  animation: ${G} 2s infinite linear;
`,F=()=>t.createElement(z,null,t.createElement(v.default,null)),x=()=>U(void 0,null,function*(){const{data:L}=yield I.be.get("/admin/roles");return L.data}),R=({disabled:L,error:T,onChange:P,value:N})=>{const{status:C,data:B}=(0,l.useQuery)(["roles"],x,{staleTime:5e4}),{formatMessage:M}=(0,O.useIntl)(),W=T?M({id:T,defaultMessage:T}):"",u=M({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),r=M({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),a=M({id:"app.components.Select.placeholder",defaultMessage:"Select"}),n=C==="loading"?t.createElement(F,null):void 0;return t.createElement(d.P,{id:"roles",disabled:L,error:W,hint:r,label:u,name:"roles",onChange:K=>{P({target:{name:"roles",value:K}})},placeholder:a,multi:!0,startIcon:n,value:N,withTags:!0,required:!0},(B||[]).map(K=>t.createElement(p.W,{key:K.id,value:K.id},M({id:`global.${K.code}`,defaultMessage:K.name}))))};R.defaultProps={disabled:!1,error:void 0},R.propTypes={disabled:o().bool,error:o().string,onChange:o().func.isRequired,value:o().array.isRequired};const w=R},17405:(H,f,e)=>{e.d(f,{YM:()=>u,Rw:()=>z});var t=e(53209),s=e(68547),o=Object.defineProperty,O=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,c=(r,a,n)=>a in r?o(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,v=(r,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(r,n,a[n]);if(p)for(var n of p(a))D.call(a,n)&&c(r,n,a[n]);return r},I=(r,a)=>O(r,d(a));const U={firstname:t.Z_().trim().required(s.translatedErrors.required),lastname:t.Z_(),email:t.Z_().email(s.translatedErrors.email).lowercase().required(s.translatedErrors.required),username:t.Z_().nullable(),password:t.Z_().min(8,s.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,s.translatedErrors.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(r,a)=>r?a.required(s.translatedErrors.required):a)},z=I(v({},U),{currentPassword:t.Z_().when(["password","confirmPassword"],(r,a,n)=>r||a?n.required(s.translatedErrors.required):n),preferedLanguage:t.Z_().nullable()}),x={roles:t.IX().min(1,s.translatedErrors.required).required(s.translatedErrors.required)};var R=Object.defineProperty,w=Object.defineProperties,L=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,C=(r,a,n)=>a in r?R(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,B=(r,a)=>{for(var n in a||(a={}))P.call(a,n)&&C(r,n,a[n]);if(T)for(var n of T(a))N.call(a,n)&&C(r,n,a[n]);return r},M=(r,a)=>w(r,L(a));const u=t.Ry().shape(B(M(B({},U),{isActive:t.Xg()}),x))},12201:(H,f,e)=>{e.d(f,{Z:()=>D});var t=e(67294),s=e(97132),o=e(45697),O=e.n(o),d=e(63871),p=e(82464);const l=({registrationToken:c})=>{const{formatMessage:v}=(0,s.useIntl)();return c?t.createElement(p.Z,{target:`${window.location.origin}${d.Z}auth/register?registrationToken=${c}`},v({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(p.Z,{target:`${window.location.origin}${d.Z}auth/login`},v({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};l.defaultProps={registrationToken:""},l.propTypes={registrationToken:O().string};const D=l}}]);
