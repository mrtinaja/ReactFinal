(this.webpackJsonpmiapp=this.webpackJsonpmiapp||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},134:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(32),o=a.n(c),s=(a(102),a(103),a(25)),i=a(19),l=a.n(i),d=a(30),u=a(18),j=a(28),b=a(37),p=n.a.createContext({}),m=a(155),x=a(4);var O=function(e){var t=e.datos;console.log(t);var a=t.name,n=t.price,c=t.description,o=t.image,s=t.id,i=t.sku,l=!1!==e.verDetalle,d=!0===e.modificar,u=!0===e.eliminar;return Object(r.useEffect)((function(){console.log("producto",e)})),Object(x.jsx)(p.Consumer,{children:function(r){return Object(x.jsx)(b.a,{id:"card_id",style:{width:"20rem"},children:Object(x.jsxs)(b.a.Body,{children:[Object(x.jsx)(b.a.Title,{id:"name_id",children:a}),Object(x.jsx)(b.a.Text,{children:c}),Object(x.jsx)(b.a.Text,{children:i}),Object(x.jsxs)(b.a.Text,{id:"precio_id",children:["$",n]}),Object(x.jsx)(b.a.Text,{id:"photo_url_id",children:Object(x.jsx)("img",{src:o,alt:"cur",class:"image",width:100,id:"photoUrl_id"})}),l&&r.userLogin&&Object(x.jsx)(m.a,{variant:"contained",color:"primary",className:"link",size:"large",children:Object(x.jsx)(j.b,{style:{color:"#FFF",outline:"none",textDecoration:"none"},"text-color":"primary",to:"/producto/"+s,children:"Ver Detalle"})}),d&&Object(x.jsx)(m.a,{variant:"contained",color:"primary",size:"large",onClick:function(a){return e.clickModificar(t)},children:"Modificar"}),u&&Object(x.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",onClick:function(a){return e.clickEliminar(t)},children:"Eliminar"})]})})}})},h=a(39);h.a.initializeApp({apiKey:"AIzaSyC_lK3mQ650iEZ64vCT46BMYgxbuWbhz8c",authDomain:"myproyect-a944c.firebaseapp.com",projectId:"myproyect-a944c",storageBucket:"myproyect-a944c.appspot.com",messagingSenderId:"786193964536",appId:"1:786193964536:web:856683db01aba6acfc8a0d",measurementId:"G-M18JZ09PBL"}),h.a.db=h.a.firestore(),h.a.autenticacion=h.a.auth();var g=h.a,v=a(81);a.n(v).a.create({baseURL:"https://jsonfy.com/"});var f=a(82);var y=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),o=Object(u.a)(c,2),i=o[0],j=o[1],b=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),e.next=4,g.db.collection("productos").get();case 4:t=e.sent,console.log(t.docs),j(t.docs),n(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){b()}),[]),a?Object(x.jsx)(f.a,{animation:"border",role:"status",children:Object(x.jsx)("span",{className:"sr-only"})}):Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{style:{display:"flex"},children:[i.map((function(e){return Object(x.jsx)(O,{datos:Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id}),destacados:!0})})),"."]})})},w=a(17);var F=function(e){var t=e.match.params.id,a=Object(r.useState)(!0),n=Object(u.a)(a,2),c=(n[0],n[1]),o=Object(r.useState)({}),s=Object(u.a)(o,2),i=s[0],j=s[1],b=Object(w.e)();return Object(r.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.db.doc("productos/"+t).get();case 3:a=e.sent,c(!1),j(a.data()),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),i?Object(x.jsxs)("div",{id:"productoDetalle_id",children:[Object(x.jsx)(O,{datos:i,verDetalle:!1}),Object(x.jsx)(m.a,{id:"botonCompra_id",type:"submit",variant:"contained",color:"secondary",size:"large",onClick:function(){alert("Gracias por su compra"),b.push("/inicio")},children:"Comprar"})]}):Object(x.jsx)("div",{children:"Loading..."})},k=a(35),C=a(163);var S=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)({id:null,name:"",price:"",description:"",image:"",sku:""}),o=Object(u.a)(c,2),i=o[0],j=o[1],b=Object(r.useState)([]),p=Object(u.a)(b,2),h=p[0],v=p[1],f=Object(r.useState)(!1),y=Object(u.a)(f,2),w=y[0],F=y[1],S=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,a=null,null!==i.id){e.next=9;break}return e.next=6,g.db.collection("productos").add(i);case 6:a=e.sent,e.next=12;break;case 9:return e.next=11,g.db.doc("productos/"+i.id).set(i);case 11:a=e.sent;case 12:console.log("Document",a),F(!0),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log("error",e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),e.next=4,g.db.collection("productos").get();case 4:t=e.sent,v(t.docs),n(!1),F(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){I()}),[]),Object(r.useEffect)((function(){w&&I()}),[w]);var E=function(e){var t=e.target.name,a=e.target.value;console.log("handleChange",t,a),j(Object(s.a)(Object(s.a)({},i),{},Object(k.a)({},t,a)))},_=function(e){console.log(e),j(e)},B=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.db.doc("productos/"+t.id).delete();case 3:a=e.sent,F(!0),console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return a?Object(x.jsx)("div",{children:"loading..."}):Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{style:{display:"flex"},children:h.map((function(e){return Object(x.jsx)(O,{datos:Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id}),verDetalle:!1,modificar:!0,clickModificar:_,eliminar:!0,clickEliminar:B})}))}),Object(x.jsxs)(C.a,{onSubmit:S,children:[Object(x.jsx)("br",{}),Object(x.jsx)(C.a.Control,{type:"text",placeholder:"Nombre",name:"name",value:i.name,onChange:E}),Object(x.jsx)("br",{}),Object(x.jsx)(C.a.Control,{type:"number",placeholder:"Precio",name:"price",value:i.price,onChange:E}),Object(x.jsx)("br",{}),Object(x.jsx)(C.a.Control,{type:"text",placeholder:"Descripcion",name:"description",value:i.description,onChange:E}),Object(x.jsx)("br",{}),Object(x.jsx)(C.a.Control,{type:"text",placeholder:"Imagen",name:"image",value:i.image,onChange:E}),Object(x.jsx)("br",{}),Object(x.jsx)(C.a.Control,{type:"text",placeholder:"SKU",name:"sku",value:i.sku,onChange:E}),Object(x.jsx)(m.a,{type:"submit",variant:"contained",color:"secondary",size:"large",children:"Guardar"})]})]})},I=a(161);var E=function(e){var t=e.children,a=Object(r.useState)(localStorage.getItem("login")),n=Object(u.a)(a,2),c=n[0],o=n[1],s=Object(r.useState)(JSON.parse(localStorage.getItem("user"))),i=Object(u.a)(s,2),l=i[0],d=i[1],j=function(){};return Object(x.jsx)(p.Provider,{value:{userLogin:c,loginUser:function(e){o(!0),localStorage.setItem("login",!0),d(e),localStorage.setItem("user",JSON.stringify(e))},logoutUser:function(){o(!1),d(),localStorage.removeItem("login"),localStorage.removeItem("user"),j()},userInfo:l},children:t})},_=(a(133),a(157)),B=(a(134),{button:{color:"#000000",fontSize:"20px"}});var N=function(e){var t=e.variant,a=e.type,r=e.loading;return Object(x.jsxs)(_.a,{type:a||"submit",variant:t||"primary",disabled:r,style:B.button,className:"buttonWithLoading",children:[r&&Object(x.jsx)(f.a,{animation:"border",size:"sm"}),e.children]})};var D=function(e){return Object(x.jsxs)(C.a.Group,{controlId:"formBasic"+e.name,children:[Object(x.jsx)(C.a.Label,{children:e.label}),Object(x.jsx)(C.a.Control,{type:e.type,placeholder:e.placeholder,name:e.name,value:e.value,onChange:e.change})]})},L=a(162),z={alert:{marginTop:"10px"}};var A=function(e){var t=e.variant,a=e.text;return Object(x.jsx)(L.a,{variant:t,style:z.alert,children:a})};var T=function(){var e=Object(r.useState)({nombre:"",apellido:"",email:"",password:""}),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),o=Object(u.a)(c,2),i=o[0],j=o[1],b=Object(r.useState)({variant:"",text:""}),p=Object(u.a)(b,2),m=p[0],O=p[1],h=function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),console.log("handleSubmit",a),t.preventDefault(),e.prev=3,e.next=6,g.autenticacion.createUserWithEmailAndPassword(a.email,a.password);case 6:return r=e.sent,console.log("User",r),e.next=10,g.db.collection("usuarios").add({nombre:a.nombre,apellido:a.apellido,userId:r.user.uid});case 10:e.sent,j(!1),O({variant:"success",text:"Registro exitoso"}),e.next=21;break;case 15:e.prev=15,e.t0=e.catch(3),j(!1),console.log("Error",e.t0),O({variant:"danger",text:e.t0.message}),"auth/weak-password"===e.t0.code&&O({variant:"danger",text:"El password debe tener al menos 6 caracteres"});case 21:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.target.name,r=e.target.value;console.log("handleChange",t,r),n(Object(s.a)(Object(s.a)({},a),{},Object(k.a)({},t,r)))};return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:h,children:[Object(x.jsx)(D,{label:"Nombre",name:"nombre",type:"text",placeholder:"Ingrese su nombre",value:a.nombre,change:v}),Object(x.jsx)(D,{label:"Apellido",name:"apellido",type:"text",placeholder:"Ingrese su apellido",value:a.apellido,change:v}),Object(x.jsx)(D,{label:"Email",name:"email",type:"email",placeholder:"Ingrese su email",value:a.email,change:v}),Object(x.jsx)(D,{label:"Contrase\xf1a",name:"password",type:"password",placeholder:"Ingrese su contrase\xf1a",value:a.password,change:v}),Object(x.jsx)(N,{loading:i,type:"submit",children:"Registrarse"}),Object(x.jsx)(A,{variant:m.variant,text:m.text})]})})};var P=function(){var e=Object(r.useContext)(p),t=Object(r.useState)({email:"",password:""}),a=Object(u.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)(!1),i=Object(u.a)(o,2),j=i[0],b=i[1],m=Object(w.e)(),O=function(){var t=Object(d.a)(l.a.mark((function t(a){var r,c,o,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("handleSubmit",n),b(!0),a.preventDefault(),t.prev=3,t.next=6,g.autenticacion.signInWithEmailAndPassword(n.email,n.password);case 6:return o=t.sent,console.log(o),b(!1),console.log("uid",o.user.uid),t.next=12,g.db.collection("usuarios").where("userId","==",o.user.uid).get();case 12:s=t.sent,console.log("usuario",null===(r=s.docs[0])||void 0===r?void 0:r.data()),e.loginUser(null===(c=s.docs[0])||void 0===c?void 0:c.data()),alert("Bienvenido/a"),m.push("/inicio"),t.next=25;break;case 19:t.prev=19,t.t0=t.catch(3),console.log("Error",t.t0),b(!1),alert(t.t0.message),"auth/weak-password"===t.t0.code&&alert("El password debe tener al menos 6 caracteres");case 25:case"end":return t.stop()}}),t,null,[[3,19]])})));return function(e){return t.apply(this,arguments)}}(),h=function(e){var t=e.target.name,a=e.target.value;console.log("handleChange",t,a),c(Object(s.a)(Object(s.a)({},n),{},Object(k.a)({},t,a)))};return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:O,children:[Object(x.jsx)(D,{label:"Correo Electronico",name:"email",type:"email",placeholder:"Ingrese su correo electronico",value:n.email,change:h}),Object(x.jsx)(D,{label:"Contrase\xf1a",name:"password",type:"password",placeholder:"Ingrese su contrase\xf1a",value:n.password,change:h}),Object(x.jsx)(N,{loading:j,type:"submit",children:"Ingresar"})]})})},U=a(164),G=a(159),M=a.p+"static/media/logo2-bro.c057fca6.png",J=a(160),R=a(88),W=a.n(R),K=a(85),H=a.n(K),Z=a(86),q=a.n(Z),Q=a(158),V=a(87),Y=a.n(V),$=Object(Q.a)((function(e){return{root:{flexGrow:1,marginBottom:"7rem"},appBar:{background:"rgb(17,1,3)"},grow:{flexGrow:1},button:{marginLeft:e.spacing(2)},image:{marginRight:"1rem"}}}));var X=function(){var e=$();return Object(x.jsx)(p.Consumer,{children:function(t){return Object(x.jsx)("div",{className:e.root,children:Object(x.jsx)(U.a,{position:"fixed",className:e.appBar,children:Object(x.jsxs)(G.a,{children:[Object(x.jsx)(j.b,{to:"/",children:Object(x.jsx)(J.a,{edge:"start",className:e.AppBar,color:"inherit","aria-label":"menu",children:Object(x.jsx)("img",{src:M,alt:"",className:e.image,width:"50px"})})}),t.userLogin&&Object(x.jsxs)(x.Fragment,{children:["Catalogo",Object(x.jsx)(j.b,{to:"/catalogo",children:Object(x.jsx)(H.a,{id:"catalogo_id",edge:"start",className:e.AppBar,style:{color:"#FFFFFF"},"aria-label":"menu",size:"large",children:Object(x.jsx)(x.Fragment,{})})})]}),t.userInfo&&Object(x.jsxs)("div",{id:"Hola_id",children:["Hola ",t.userInfo.nombre]}),Object(x.jsx)("h1",{style:{flex:1,justifyContent:"center",alignItems:"center"},id:"titulo_id",children:"martiend@"}),Object(x.jsxs)(x.Fragment,{children:[!t.userLogin&&Object(x.jsx)(j.b,{to:"/alta",children:Object(x.jsx)(q.a,{edge:"start",className:e.AppBar,id:"alta_id",style:{color:"#FFFFFF"},"aria-label":"menu",children:Object(x.jsx)(x.Fragment,{})})}),"Registrarse",Object(x.jsx)(Y.a,{id:"flechitas_id"})," Ingresar",Object(x.jsx)(j.b,{to:"/ingresar",children:Object(x.jsx)(W.a,{edge:"start",className:e.AppBar,id:"ingresar_id",style:{color:"#FFFFFF"},"aria-label":"menu",children:Object(x.jsx)(x.Fragment,{})})})]})]})})})}})},ee=a(89);function te(){return Object(x.jsxs)("div",{className:"application",children:[Object(x.jsx)(ee.a,{children:Object(x.jsx)("style",{children:"body { background-color: black; }"})}),Object(x.jsx)("img",{src:M,alt:"",width:"200px"}),Object(x.jsx)("h4",{id:"parrafo_id",style:{color:"#FFFFFF"},children:"martiend@ te ofrece una amplia variedad de productos y las mejores marcas. Porque cada d\xeda evolucionamos con vos. Gracias por visitarnos."}),Object(x.jsx)(j.b,{to:"/ingresar",children:Object(x.jsx)("button",{id:"button1_id",children:" Bienvenid@"})})]})}var ae=function(){return Object(x.jsx)(E,{children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(X,{}),Object(x.jsxs)(I.a,{children:[Object(x.jsx)(w.a,{path:"/",exact:!0,component:te}),Object(x.jsx)(w.a,{path:"/inicio",exact:!0,component:y}),Object(x.jsx)(w.a,{path:"/alta",exact:!0,component:T}),Object(x.jsx)(w.a,{path:"/ingresar",exact:!0,component:P}),Object(x.jsx)(w.a,{path:"/producto/:id",exact:!0,component:F}),Object(x.jsx)(w.a,{path:"/catalogo",exact:!0,component:S})]})]})})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,166)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))};o.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(ae,{})}),document.getElementById("root")),re()}},[[136,1,2]]]);
//# sourceMappingURL=main.e146fd5a.chunk.js.map