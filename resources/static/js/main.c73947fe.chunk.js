(window["webpackJsonphouse-form-widget"]=window["webpackJsonphouse-form-widget"]||[]).push([[0],{137:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"House successfully saved","dataDeleted":"House successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"house":{"deleteDialog":{"title":"Delete house","description":"Are you sure?"},"notFound":"House not found","deleted":"House deleted","id":"ID","name":"entities.house.name","dim":"entities.house.dim","color":"entities.house.color"}}}')},138:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Errore durante la connessione al server"},"common":{"save":"Salva","dataSaved":"House salvato/a con successo","dataDeleted":"House eliminato/a con successo","notAuthenticated":"L\'utente non \xe8 autenticato.","selectFile":"Carica nuovo file","selectImageFile":"Carica nuova immagine","download":"Scarica","cancel":"Annulla","delete":"Elimina","yes":"Si","no":"No"},"validation":{"required":"{{field}} \xe8 obbligatorio"},"entities":{"house":{"deleteDialog":{"title":"Elimina house","description":"Sei sicuro/a?"},"notFound":"House non trovato/a","deleted":"House eliminato/a","id":"ID","name":"entit\xe0.house.name","dim":"entit\xe0.house.dim","color":"entit\xe0.house.color"}}}')},161:function(e,t,n){e.exports=n(282)},282:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(8),i=n(12),o=n(6),c=n(11),s=n(79),l=n(40),u=n(0),d=n.n(u),h=n(13),f=n.n(h),p=n(127),m=n.n(p),b=n(331),v=n(335),O=n(329),y=n(149),g=n(18),k=d.a.createContext(null),E=n(47),j=n(92),w=n(39),C={en:n(137),it:n(138)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var D=Object.keys(C).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",C[t])))}),{}),P=j.a.t,x=function(e){!function(e,t){j.a.use(w.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:D,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var n=t.path;return e("validation.required",{field:e("entities.house.".concat(n))})}}};E.c(t)}(P)},F=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},N={tableAdd:"house.table.add",tableSelect:"house.table.select"},U={create:"house.form.create",update:"house.form.update",errorCreate:"house.form.errorCreate",errorUpdate:"house.form.errorUpdate"},A=n(15),T=n.n(A),R=n(26),H=n(20),M=n(3),z=n.n(M),L=(z.a.shape({initialized:z.a.bool,authenticated:z.a.bool}),n(150));z.a.oneOfType([z.a.func,z.a.shape({current:z.a.elementType}),z.a.shape(null)]);function I(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(r=Object(i.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,i=Object(L.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},i,{ref:a,keycloak:t}))},r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return d.a.createElement(k.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}var W=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},J=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},q=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},B=function(){var e=Object(R.a)(T.a.mark((function e(t,n){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(){var e=Object(R.a)(T.a.mark((function e(t,n){var a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/houses","/").concat(n),r=V({},q(),{method:"GET"}),e.abrupt("return",B(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(R.a)(T.a.mark((function e(t,n){var a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/houses"),r=V({},q(),{method:"POST",body:n?JSON.stringify(n):null}),e.abrupt("return",B(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(R.a)(T.a.mark((function e(t,n){var a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/houses"),r=V({},q(),{method:"PUT",body:n?JSON.stringify(n):null}),e.abrupt("return",B(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(R.a)(T.a.mark((function e(t,n){var a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/houses","/").concat(n),r=V({},q(),{method:"DELETE"}),e.abrupt("return",B(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=n(4),$=n(334),_=n(321),ee=n(317),te=n(5),ne=n(322),ae=n(140),re=n.n(ae),ie=n(141),oe=n.n(ie),ce=n(139),se=n.n(ce),le=n(142),ue=n.n(le),de={success:se.a,error:re.a,info:oe.a},he={success:3e3,error:null,info:5e3},fe=function e(t){var n=t.className,a=t.classes,r=t.status,i=t.message,o=t.onClose,c=!!i,s=r||e.INFO,l=de[s],u=he[s],h=d.a.createElement("span",{className:a.message},d.a.createElement(l,{className:Object(Z.a)(a.icon,a.iconStatus)}),i);return d.a.createElement($.a,{open:c,onClose:o,autoHideDuration:u},d.a.createElement(_.a,{className:Object(Z.a)(a[s],n),message:h,action:[d.a.createElement(ne.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},d.a.createElement(ue.a,{className:a.icon}))]}))};fe.SUCCESS="success",fe.ERROR="error",fe.defaultProps={message:null,className:"",status:fe.INFO="info",onClose:function(){}};var pe=Object(te.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:ee.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(fe),me=(z.a.shape({id:z.a.number,name:z.a.string,dim:z.a.number,color:z.a.string}),z.a.shape({name:z.a.string,dim:z.a.oneOfType([z.a.string,z.a.number]),color:z.a.string}),z.a.shape({name:z.a.oneOfType([z.a.bool,z.a.shape()]),dim:z.a.oneOfType([z.a.bool,z.a.shape()]),color:z.a.oneOfType([z.a.bool,z.a.shape()])}),z.a.shape({name:z.a.oneOfType([z.a.string,z.a.shape()]),dim:z.a.oneOfType([z.a.string,z.a.shape()]),color:z.a.oneOfType([z.a.string,z.a.shape()])}),n(148)),be=n(151),ve=n(327),Oe=n(328),ye=n(330),ge=n(333),ke=n(326),Ee=n(324),je=n(325),we=n(323),Ce=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={open:!1},n.handleOpen=n.handleOpen.bind(Object(H.a)(n)),n.discard=n.discard.bind(Object(H.a)(n)),n.confirm=n.confirm.bind(Object(H.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.dialog,a=n.title,r=n.description,i=n.confirmLabel,o=n.discardLabel,c=t.Renderer;return d.a.createElement("div",null,d.a.createElement(c,{onClick:this.handleOpen}),d.a.createElement(ge.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(we.a,{id:"confirmation-dialog-title"},a),d.a.createElement(Ee.a,null,d.a.createElement(je.a,{id:"confirmation-dialog-description"},r)),d.a.createElement(ke.a,null,d.a.createElement(ve.a,{onClick:this.discard,autoFocus:!0},o),d.a.createElement(ve.a,{onClick:this.confirm,color:"primary"},i))))}}]),t}(u.PureComponent);Ce.CONFIRM="CONFIRM",Ce.DISCARD="DISCARD";var Se=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleConfirmationDialogAction=n.handleConfirmationDialogAction.bind(Object(H.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,n=t.onDelete,a=t.values;switch(e){case Ce.CONFIRM:n(a)}}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.values,a=e.touched,r=e.errors,i=e.handleChange,o=e.handleBlur,c=e.handleSubmit,s=e.onDelete,l=e.onCancelEditing,u=e.isSubmitting,h=e.t,f=function(e){return r[e]&&a[e]?r[e]:""};return d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),c(e)},className:t.root,"data-testid":"house-form"},d.a.createElement(Oe.a,{container:!0,spacing:2},d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ye.a,{id:"house-name",error:r.name&&a.name,helperText:f("name"),className:t.textField,onChange:i,onBlur:o,value:n.name,name:"name",label:h("entities.house.name")})),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ye.a,{id:"house-dim",error:r.dim&&a.dim,helperText:f("dim"),className:t.textField,type:"number",onChange:i,onBlur:o,value:n.dim,name:"dim",label:h("entities.house.dim")})),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ye.a,{id:"house-color",error:r.color&&a.color,helperText:f("color"),className:t.textField,onChange:i,onBlur:o,value:n.color,name:"color",label:h("entities.house.color")})),s&&d.a.createElement(Ce,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:h("entities.house.deleteDialog.title"),description:h("entities.house.deleteDialog.description"),confirmLabel:h("common.yes"),discardLabel:h("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(ve.a,{onClick:t,disabled:u},h("common.delete"))}}),d.a.createElement(ve.a,{onClick:l,disabled:u,"data-testid":"cancel-btn"},h("common.cancel")),d.a.createElement(ve.a,{type:"submit",color:"primary",disabled:u,"data-testid":"submit-btn"},h("common.save"))))}}]),t}(u.PureComponent);Se.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var De={name:"",dim:"",color:""},Pe={mapPropsToValues:function(e){return e.house||De},enableReinitialize:!0,validationSchema:E.b().shape({name:E.d(),dim:E.a(),color:E.d()}),handleSubmit:function(e,t){var n=t.setSubmitting;(0,t.props.onSubmit)(e),n(!1)},displayName:"HouseForm"},xe=Object(be.a)(Object(te.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(w.b)(),Object(me.a)(Pe))(Se),Fe=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(H.a)(n)),n.handleDelete=n.handleDelete.bind(Object(H.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(H.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,r=n.initialized&&n.authenticated,i=e.keycloak.authenticated!==r,o=a&&a!==e.id;r&&(o||i)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(R.a)(T.a.mark((function e(){var t,n,a,r,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,G(r,a);case 6:i=e.sent,this.setState((function(){return{house:i}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(R.a)(T.a.mark((function e(t){var n,a,r,i,o,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onUpdate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Q(o,t);case 6:c=e.sent,r(c),this.setState({house:c,notificationMessage:a("common.dataSaved"),notificationStatus:pe.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(R.a)(T.a.mark((function e(t){var n,a,r,i,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onDelete,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=13;break}return e.prev=3,e.next=6,X(o,t.id);case 6:r(t),this.setState({house:null,notificationMessage:a("common.dataDeleted"),notificationStatus:pe.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:pe.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,n=t.keycloak,a=t.onCancelEditing,r=t.t,i=this.state,o=i.notificationMessage,c=i.notificationStatus,s=i.house;return e="undefined"===typeof s?r("entities.house.notFound"):null===s?r("entities.house.deleted"):d.a.createElement(xe,{house:s,onSubmit:this.handleSubmit,onCancelEditing:a,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(J,{keycloak:n},r("common.notAuthenticated")),d.a.createElement(W,{keycloak:n},e),d.a.createElement(pe,{status:c,message:o,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Fe.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Ne=I(Object(w.b)()(Fe)),Ue=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(H.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(H.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(R.a)(T.a.mark((function e(t){var n,a,r,i,o,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onCreate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Y(o,t);case 6:c=e.sent,r(c),this.setState({notificationMessage:a("common.dataSaved"),notificationStatus:pe.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.setState({notificationMessage:a("error.dataLoading"),notificationStatus:pe.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,n=e.onCancelEditing,a=e.t,r=this.state,i=r.notificationMessage,o=r.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(J,{keycloak:t},a("common.notAuthenticated")),d.a.createElement(W,{keycloak:t},d.a.createElement(xe,{onSubmit:this.handleSubmit,onCancelEditing:n})),d.a.createElement(pe,{status:o,message:i,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Ue.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var Ae=I(Object(w.b)()(Ue));function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var He=function(){return window&&window.entando&&window.entando.keycloak&&Re({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},Me={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},ze=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).keycloak=He(),n.onCreate=F(U.create),n.onCancelEditing=F(U.cancelEditing),n.onDelete=F(U.delete),n.onUpdate=F(U.update),n.onErrorCreate=F(U.errorCreate),n.onErrorUpdate=F(U.errorUpdate),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(Me).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===Me.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(g.b)(Re({},Object(b.a)(),{insertionPoint:this.container})),this.muiTheme=Object(y.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=Re({},He(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=Re({},He(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),m()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=N.tableAdd,a=N.cancelEditing,r=N.create,i=N.edit,o=N.delete,c=N.tableSelect,s=N.update,l=Me.id;switch(t.type){case n:e.setAttribute(l,"");break;case i:e.hidden=!1,e.setAttribute(l,t.detail.payload.id);break;case r:case a:case s:e.hidden=!0;break;case o:e.hidden=!0,e.setAttribute(l,"");break;case c:e.setAttribute(l,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(Me.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(N),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(Me.serviceUrl)||"";if("true"===this.getAttribute(Me.hidden))f.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(Me.locale);x(t);var n=this.getAttribute(Me.id),a=n?d.a.createElement(Ne,{id:n,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(Ae,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);f.a.render(d.a.createElement(k.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(O.a,{theme:this.muiTheme},a))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(Me)}}]),t}(Object(s.a)(HTMLElement));customElements.define("house-form",ze)}},[[161,1,2]]]);
//# sourceMappingURL=main.c73947fe.chunk.js.map