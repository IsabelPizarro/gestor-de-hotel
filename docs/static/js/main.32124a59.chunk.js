(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(61)},58:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(25),o=t.n(c),l=t(3),s=t(4),i=t(6),m=t(5),u=t(7),p=t(64),h=t(65),d=t(66),b=t(2),f=t.n(b),E=t(8),v=t(28),y=t(17),g=t(9),N=t.n(g),C=r.a.createContext(),j=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contactos:e.contactos.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(y.a)({},e,{contactos:[a.payload].concat(Object(v.a)(e.contactos))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contactos:e.contactos.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},O=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contactos:[],dispatch:function(e){t.setState(function(a){return j(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contactos:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),k=C.Consumer,w=t(63),x=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onShowClick=function(e){t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(){var e=Object(E.a)(f.a.mark(function e(a,t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:return e.prev=7,t({type:"DELETE_CONTACT",payload:a}),e.finish(7);case 10:case"end":return e.stop()}},e,null,[[0,5,7,10]])}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contacto,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state.showContactInfo;return r.a.createElement(k,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{style:{cursor:"pointer"},onClick:e.onShowClick,className:"fas fa-caret-down"}),r.a.createElement("i",{style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,t,s),className:"fas fa-times"}),r.a.createElement(w.a,{to:"contact/edit/".concat(t)},r.a.createElement("i",{style:{cursor:"pointer",float:"right",color:"blue",marginRight:"1rem"},className:"fas fa-pencil-alt"}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Tel\xe9fono: ",o)):null)})}}]),a}(n.Component);x.defaultProps={contacto:{name:"Nombre",email:"nombre@ejemplo.com",phone:"1234 5678"}};var A=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var a=e.contactos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-success"},"Usuarios")),a.map(function(e){return r.a.createElement(x,{key:e.id,contacto:e})}),r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{to:"/contact/add",className:"text-primary"},r.a.createElement("i",{className:"fas fa-plus"})," ",r.a.createElement("span",{class:"badge badge-pill badge-primary"},"Agregar nuevo usuario"))))})}}]),a}(n.Component),S=t(13),T=t(26),D=t.n(T),I=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{name:t,type:o,className:D()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};I.defaultProps={type:"text"};var q=I,F=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(S.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(E.a)(f.a.mark(function e(a,n){var r,c,o,l,s,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c.trim()){e.next=5;break}return t.setState({errors:{name:"Nombre requerido"}}),e.abrupt("return");case 5:if(""!==o.trim()){e.next=8;break}return t.setState({errors:{email:"Email requerido"}}),e.abrupt("return");case 8:if(""!==l.trim()){e.next=11;break}return t.setState({errors:{phone:"Tel\xe9fono requerido"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,N.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,a({type:"ADD_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Agregar contacto"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{name:"name",label:"Nombre",placeholder:"Ingrese nombre",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(q,{name:"email",label:"Email",placeholder:"Ingrese email",type:"email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(q,{name:"phone",label:"Tel\xe9fono",placeholder:"Ingrese tel\xe9fono",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-block btn-light",value:"Agregar Contacto"}))))})}}]),a}(n.Component),_=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",addres:"",errors:{}},t.onChange=function(e){return t.setState(Object(S.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(E.a)(f.a.mark(function e(a,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,s=r.addres,""!==c.trim()){e.next=5;break}return t.setState({errors:{name:"Nombre requerido"}}),e.abrupt("return");case 5:if(""!==o.trim()){e.next=8;break}return t.setState({errors:{email:"Email requerido"}}),e.abrupt("return");case 8:if(""!==l.trim()){e.next=11;break}return t.setState({errors:{phone:"Tel\xe9fono requerido"}}),e.abrupt("return");case 11:return i={name:c,email:o,phone:l,addres:s},e.next=14,N.a.post("https://jsonplaceholder.typicode.com/users",i);case 14:m=e.sent,a({type:"ADD_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",addres:"",errors:{}}),t.props.history.push("/rooms");case 18:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.addres,l=a.errors;return r.a.createElement(k,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Agregar Habitaci\xf3n"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,s)},r.a.createElement(q,{name:"name",label:"Nombre",placeholder:"Nombre del Hotel",value:t,onChange:e.onChange,error:l.name}),r.a.createElement(q,{name:"addres",label:"Ciudad",placeholder:"Ciudad",value:o.city,onChange:e.onChange,error:l.name}),r.a.createElement(q,{name:"email",label:"Email",placeholder:"Email",type:"email",value:n,onChange:e.onChange,error:l.email}),r.a.createElement(q,{name:"phone",label:"Tel\xe9fono",placeholder:"Tel\xe9fono",value:c,onChange:e.onChange,error:l.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-block btn-light",value:"Agregar Habitacion"}))))})}}]),a}(n.Component),P=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(S.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(E.a)(f.a.mark(function e(a,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c.trim()){e.next=5;break}return t.setState({errors:{name:"Nombre requerido"}}),e.abrupt("return");case 5:if(""!==o.trim()){e.next=8;break}return t.setState({errors:{email:"Email requerido"}}),e.abrupt("return");case 8:if(""!==l.trim()){e.next=11;break}return t.setState({errors:{phone:"Tel\xe9fono requerido"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=t.props.match.params.id,e.next=15,N.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var a,t,n,r,c,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,N.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,r=n.name,c=n.email,o=n.phone,this.setState({name:r,email:c,phone:o});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Editar contacto"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{name:"name",label:"Nombre",placeholder:"Ingrese nombre",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(q,{name:"email",label:"Email",placeholder:"Ingrese email",type:"email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(q,{name:"phone",label:"Tel\xe9fono",placeholder:"Ingrese tel\xe9fono",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-block btn-light",value:"Actualizar"}))))})}}]),a}(n.Component),H=function(e){var a=e.titulo;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark mb-3 bg-success py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(w.a,{to:"/welcome"},r.a.createElement("h1",{className:"navbar-brand"},a)),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/",className:"nav-link",usuario:"usuario"},r.a.createElement("i",{className:"fas fa-users"})," Usuarios")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/rooms",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Habitaciones")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/users",className:"nav-link"},r.a.createElement("i",{className:"fas fa-book"})," Reservas")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/bills",className:"nav-link"},r.a.createElement("i",{className:"fas fa-bill"})," Facturas"))))))};H.defaultProps={titulo:"My App"};var L=H,R=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"Gestor de reservas"),r.a.createElement("p",{className:"text-primary"},"Aqu\xed apareceran las reservas de los usuarios"))},U=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," No encontrado"),r.a.createElement("p",{className:"lead"},"Lo sentimos, esa p\xe1gina no existe"))},B=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"Bienvenido al gestor de reservas."),r.a.createElement("h3",{className:"h3"},"Nombre y Apellidos"),r.a.createElement("span",null,"correo"),r.a.createElement("span",null,"contrase\xf1a"),r.a.createElement("hora",null),r.a.createElement("p",{className:"text-secondary"},"Espa\xf1a Fascinante"))},M=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onShowClick=function(e){t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(){var e=Object(E.a)(f.a.mark(function e(a,t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:return e.prev=7,t({type:"DELETE_CONTACT",payload:a}),e.finish(7);case 10:case"end":return e.stop()}},e,null,[[0,5,7,10]])}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contacto,t=a.id,n=a.email,c=a.phone,o=a.username,l=a.address,s=this.state.showContactInfo;return r.a.createElement(k,null,function(a){var i=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,r.a.createElement("span",null,"Hotel ",o),r.a.createElement("i",{style:{cursor:"pointer"},onClick:e.onShowClick,className:"fas fa-caret-down"}),r.a.createElement("i",{style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,t,i),className:"fas fa-times"}),r.a.createElement(w.a,{to:"contact/edit/".concat(t)},r.a.createElement("i",{style:{cursor:"pointer",float:"right",color:"blue",marginRight:"1rem"},className:"fas fa-pencil-alt"}))),s?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"City:  ",l.city),r.a.createElement("li",{className:"list-group-item"},"Email: ",n),r.a.createElement("li",{className:"list-group-item"},"Tel\xe9fono: ",c)):null)})}}]),a}(n.Component);M.defaultProps={contacto:{name:"Nombre",address:"calle",email:"direcci\xf3n",phone:"600 000 000",username:"pepa"}};var J=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var a=e.contactos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-success"},"Habitaciones Disponiblbles")),r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{to:"/AddRoom",className:"text-primary"},r.a.createElement("i",{className:"fas fa-plus"})," Agregar nueva habitaci\xf3n")),a.map(function(e){return r.a.createElement(M,{key:e.id,contacto:e})}))})}}]),a}(n.Component),W=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"Lista de Facturas."),r.a.createElement("p",{className:"text-primary"},"Aqu\xed apareceran las reservas facturas de los usuarios"))},z=(t(56),t(58),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(L,{titulo:"Aministrador"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{exact:!0,path:"/users",component:R}),r.a.createElement(d.a,{exact:!0,path:"/bills",component:W}),r.a.createElement(d.a,{exact:!0,path:"/rooms",component:J}),r.a.createElement(d.a,{exact:!0,path:"/AddRoom",component:_}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:F}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:P}),r.a.createElement(d.a,{exact:!0,path:"/welcome",component:B}),r.a.createElement(d.a,{component:U}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.32124a59.chunk.js.map