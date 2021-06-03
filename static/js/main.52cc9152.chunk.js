(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(20),s=n.n(c),i=n(9),r=(n(30),n(24)),l=n(2),u=n(3);var d=function(){var e="undefined"!==typeof window,t=o.a.useState({width:e?1200:window.innerWidth,height:e?800:window.innerHeight}),n=Object(l.a)(t,2),a=n[0],c=n[1];function s(){c({width:window.innerWidth,height:window.innerHeight})}return o.a.useEffect((function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}),[]),a},p=n(0);var h=function(e){var t=e.userEmail,n=e.loggedIn,a=e.handleLogout,o=e.handleBurger,c=e.isBurgerOpened,s=Object(u.h)(),r="/signin"===s.pathname?"signup":"signin",l="/signin"===s.pathname?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438",h=d().width;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"header__auth  header__auth_mobile ".concat(c?"header__auth_mobile-opened":""),children:[Object(p.jsxs)("p",{className:"header__user-email",children:[t," "]}),Object(p.jsx)(i.b,{to:"signin",onClick:a,className:"header__link header__link_logout",children:" \u0412\u044b\u0439\u0442\u0438"})]}),Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("div",{className:"header__logo"}),!1===n?Object(p.jsx)("div",{className:"header__auth",children:Object(p.jsx)(i.b,{to:r,className:"header__link header__link_signup",children:l})}):h>=767&!0===n?Object(p.jsxs)("div",{className:"header__auth",children:[Object(p.jsxs)("p",{className:"header__user-email",children:[t," "]}),Object(p.jsx)(i.b,{to:"signin",onClick:a,className:"header__link header__link_logout",children:" \u0412\u044b\u0439\u0442\u0438"})]}):Object(p.jsx)("div",{className:"header__auth",children:Object(p.jsx)("div",{className:"header__burger",onClick:o,children:Object(p.jsx)("div",{className:"header__burger-btn"})})})]})]})},j=o.a.createContext();var _=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,c=e.onCardDelete,s=o.a.useContext(j),i=t.owner._id===s._id,r=t.likes.some((function(e){return e._id===s._id})),l="cards__delete-btn ".concat(i?"cards__delete-btn_visible":""),u="cards__like ".concat(r?"cards__like_active":"");return Object(p.jsxs)("li",{className:"cards__item",children:[Object(p.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0443\u0434\u0430\u043b\u0438\u0442\u044c",className:l,onClick:function(){c(t)}}),Object(p.jsx)("img",{src:t.link,alt:t.name,onClick:function(){n(t)},className:"cards__image"}),Object(p.jsxs)("div",{className:"cards__elements",children:[Object(p.jsx)("h2",{className:"cards__text",children:t.name}),Object(p.jsxs)("div",{className:"card__like-area",children:[Object(p.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u043b\u0430\u0439\u043a",className:u,onClick:function(){a(t)}}),Object(p.jsx)("p",{className:"cards__like-number",children:t.likes.length})]})]})]})};var m=function(e){var t=e.cards,n=e.onEditAvatar,a=e.onEditProfile,c=e.onAddPlace,s=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,l=o.a.useContext(j);return Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsxs)("div",{className:"profile__photo-area",children:[Object(p.jsx)("img",{src:l.avatar,alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__photo"}),Object(p.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"profile__edtn-button profile__edtn-button_photo",onClick:n})]}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsx)("h1",{className:"profile__name",children:l.name}),Object(p.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"profile__edtn-button profile__edtn-button_info",onClick:a}),Object(p.jsx)("p",{className:"profile__bio",children:l.about})]}),Object(p.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"profile__add-button",onClick:c})]}),Object(p.jsx)("section",{className:"photo-grid",children:Object(p.jsx)("ul",{className:"cards",children:t.map((function(e){return Object(p.jsx)(_,{card:e,onCardClick:s,onCardLike:i,onCardDelete:r},e._id)}))})})]})};var b=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsxs)("p",{className:"footer__author",children:["\xa9",(new Date).getFullYear(),". \u042e\u043b\u0438\u044f \u0422\u0443\u0432\u0430\u043b\u0435\u0432\u0430"]})})};var f=function(e){var t=e.name,n=e.title,a=e.isOpen,o=e.onClose,c=e.onSubmit,s=e.children,i=e.buttonText;return Object(p.jsxs)("div",{className:"popup popup_type_".concat(t," ").concat(a?"popup_opened":""),children:[Object(p.jsx)("div",{className:"popup__overlay",onClick:o}),Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-btn popup__close-btn_area_".concat(t),onClick:o,"aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(p.jsx)("h3",{className:"popup__name",children:n}),Object(p.jsxs)("form",{className:"popup__form",name:"".concat(t,"-form"),noValidate:!0,onSubmit:c,children:[s,Object(p.jsx)("button",{type:"submit","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-".concat(i),className:"popup__submit-btn",value:i,children:i})]})]})]})};var O=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,c=o.a.useContext(j),s=o.a.useState(""),i=Object(l.a)(s,2),r=i[0],u=i[1],d=o.a.useState(""),h=Object(l.a)(d,2),_=h[0],m=h[1];return o.a.useEffect((function(){u(c.name||""),m(c.about||"")}),[c,t]),Object(p.jsxs)(f,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:r,about:_})},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(p.jsx)("input",{type:"text",placeholder:"\u0418\u043c\u044f",name:"name",id:"name",className:"popup__form-input popup__form-input_field_name",required:!0,minLength:"2",maxLength:"40",value:r,onChange:function(e){u(e.target.value)}}),Object(p.jsx)("span",{className:"popup__form-error name-error"}),Object(p.jsx)("input",{type:"text",placeholder:"\u041e \u0421\u0435\u0431\u0435",name:"about",id:"about",className:"popup__form-input popup__form-input_field_bio",required:!0,minLength:"2",maxLength:"200",value:_,onChange:function(e){m(e.target.value)}}),Object(p.jsx)("span",{className:"popup__form-error about-error"})]})};var g=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,c=o.a.useRef();return Object(p.jsxs)(f,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:c.current.value}),c.current.value=""},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(p.jsx)("input",{ref:c,type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",id:"link",name:"link",className:"popup__form-input popup__form-input_field_avatar",required:!0}),Object(p.jsx)("span",{className:"popup__form-error link-error"})]})},v=n(10),x=n(8);var k=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,c=o.a.useState({name:"",link:""}),s=Object(l.a)(c,2),i=s[0],r=s[1];function u(e){var t=e.target,n=t.name,a=t.value;r(Object(x.a)(Object(x.a)({},i),{},Object(v.a)({},n,a)))}return Object(p.jsxs)(f,{name:"cards",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i.name,link:i.link}),i.name="",i.link=""},buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(p.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"cardName",name:"name",className:"popup__form-input popup__form-input_field_image-name",required:!0,minLength:"2",maxLength:"30",value:i.name,onChange:u}),Object(p.jsx)("span",{className:"popup__form-error cardName-error"}),Object(p.jsx)("input",{required:!0,type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"cardLink",name:"link",className:"popup__form-input popup__form-input_field_image-src",value:i.link,onChange:u}),Object(p.jsx)("span",{className:"popup__form-error cardLink-error"})]})};var N=function(e){var t=e.card,n=e.isOpen,a=e.onClose;return Object(p.jsxs)("div",{className:"popup popup_type_image ".concat(n?"popup_opened":""),children:[Object(p.jsx)("div",{className:"popup__overlay",onClick:a}),Object(p.jsxs)("div",{className:"popup__image-container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-btn popup__close-btn_area_image","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:a}),Object(p.jsxs)("figure",{className:"popup__image",children:[Object(p.jsx)("img",{src:null===t||void 0===t?void 0:t.link,alt:null===t||void 0===t?void 0:t.name,className:"popup__image-content"}),Object(p.jsx)("figcaption",{className:"popup__image-caption",children:null===t||void 0===t?void 0:t.name})]})]})]})};var C=function(e){var t=e.card,n=e.isOpen,a=e.onClose,o=e.onCardDelete;return Object(p.jsx)(f,{name:"submit-delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:n,onClose:a,onSubmit:function(e){e.preventDefault(),o(t)},buttonText:"\u0414\u0430"})};var y=function(e){var t=e.email,n=e.password,a=e.handleChange,o=e.handleSubmit,c=Object(u.h)().pathname,s="/signin"===c?"\u0412\u043e\u0439\u0442\u0438":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",r="/signin"===c?"\u0412\u043e\u0439\u0442\u0438":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",l="/signin"===c?"\u0415\u0449\u0435 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f":"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438",d="/signin"===c?"signup":"signin";return Object(p.jsxs)("div",{className:"login-signup",children:[Object(p.jsx)("h3",{className:"login-signup__title",children:s}),Object(p.jsxs)("form",{className:"login-signup__form",name:"login-signup-form",onSubmit:o,children:[Object(p.jsx)("input",{required:!0,type:"email",placeholder:"Email",id:"email",name:"email",className:"login-signup__form-input login-signup__form-input_field_email",minLength:"2",autoComplete:"off",value:t,onChange:a}),Object(p.jsx)("span",{className:"login-signup__form-error email-error"}),Object(p.jsx)("input",{required:!0,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",name:"password",className:"login-signup__form-input login-signup__form-input_field_password",autoComplete:"off",value:n,onChange:a}),Object(p.jsx)("span",{className:"login-signup__form-error password-error"}),Object(p.jsx)("button",{type:"submit","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",className:"login-signup__submit-btn",children:r}),Object(p.jsx)("div",{className:"login-signup__login-area",children:Object(p.jsx)(i.b,{to:d,className:"login-signup__login-area login-signup__link",children:l})})]})]})};var w=function(e){var t=e.handleRegister,n=Object(a.useState)({email:"",password:""}),o=Object(l.a)(n,2),c=o[0],s=o[1];return Object(p.jsx)(y,{email:c.email,password:c.password,handleChange:function(e){var t=e.target,n=t.name,a=t.value;s(Object(x.a)(Object(x.a)({},c),{},Object(v.a)({},n,a)))},handleSubmit:function(e){e.preventDefault();var n=c.email,a=c.password;t({password:a,email:n})}})};var S=function(e){var t=e.handleLogin,n=Object(a.useState)({email:"",password:""}),o=Object(l.a)(n,2),c=o[0],s=o[1];return Object(p.jsx)(y,{email:c.email,password:c.password,handleChange:function(e){var t=e.target,n=t.name,a=t.value;s(Object(x.a)(Object(x.a)({},c),{},Object(v.a)({},n,a)))},handleSubmit:function(e){if(e.preventDefault(),c.email&&c.password){var n=c.email,a=c.password;t({email:n,password:a})}}})},L=n(25),E=function(e){var t=e.component,n=Object(L.a)(e,["component"]);return Object(p.jsx)(u.b,{children:function(){return n.loggedIn?Object(p.jsx)(t,Object(x.a)({},n)):Object(p.jsx)(u.a,{to:"./signin"})}})};var I=function(e){var t=e.isSuccess,n=e.isOpen,a=e.onClose;return Object(p.jsxs)("div",{className:"popup popup_type_infotooltip ".concat(n?"popup_opened":""),children:[Object(p.jsx)("div",{className:"popup__overlay",onClick:a}),Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-btn popup__close-btn_area_infotooltip","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:a}),Object(p.jsxs)("div",{className:"popup__signup",children:[Object(p.jsx)("div",{className:"popup__signup-image ".concat(t?"popup__signup-image_success":"popup__signup-image_error")}),t?Object(p.jsx)("p",{className:"popup__signup-text",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}):Object(p.jsx)("p",{className:"popup__signup-text",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})]})]})},P=n(22),T=n(23),D=new(function(){function e(t){var n=t.address,a=t.cohortId,o=t.token;Object(P.a)(this,e),this._address=n,this._token=o,this._cohortId=a}return Object(T.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._address,"/").concat(this._cohortId,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/").concat(this._cohortId,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"editProfileInfo",value:function(e){return fetch("".concat(this._address,"/").concat(this._cohortId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._address,"/").concat(this._cohortId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/").concat(this._cohortId,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"addLikeCard",value:function(e){return fetch("".concat(this._address,"/").concat(this._cohortId,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"cancelLikeCard",value:function(e){return fetch("".concat(this._address,"/").concat(this._cohortId,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this._address,"/").concat(this._cohortId,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then(this._checkResponse):fetch("".concat(this._address,"/").concat(this._cohortId,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"editProfilePhoto",value:function(e){return fetch("".concat(this._address,"/").concat(this._cohortId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(this._checkResponse)}}]),e}())({address:"https://mesto.nomoreparties.co/v1",cohortId:"cohort-22",token:"1ce66c26-e1b5-44dd-8df7-d34ef0ebc07d"}),A="https://auth.nomoreparties.co",R=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))},z=n.p+"static/media/spinner.63894ea4.gif";var U=function(){return Object(p.jsxs)("div",{className:"load-spinner",children:[Object(p.jsx)("img",{className:"load-spinner__image",src:z,alt:"spinner"}),Object(p.jsx)("p",{className:"load-spinner__text",children:"Loading..."})]})};var q=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(l.a)(s,2),d=i[0],_=i[1],f=Object(a.useState)(!1),v=Object(l.a)(f,2),x=v[0],y=v[1],L=Object(a.useState)(!1),P=Object(l.a)(L,2),T=P[0],z=P[1],q=Object(a.useState)(!1),B=Object(l.a)(q,2),J=B[0],F=B[1],H=Object(a.useState)(!1),W=Object(l.a)(H,2),G=W[0],M=W[1],V=Object(a.useState)(null),Y=Object(l.a)(V,2),K=Y[0],Q=Y[1],X=Object(a.useState)(null),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)({}),ne=Object(l.a)(te,2),ae=ne[0],oe=ne[1],ce=Object(a.useState)(null),se=Object(l.a)(ce,2),ie=se[0],re=se[1],le=Object(a.useState)(!1),ue=Object(l.a)(le,2),de=ue[0],pe=ue[1],he=Object(a.useState)(!1),je=Object(l.a)(he,2),_e=je[0],me=je[1],be=Object(u.g)(),fe=Object(a.useState)(null),Oe=Object(l.a)(fe,2),ge=Oe[0],ve=Oe[1],xe=o.a.useState(!1),ke=Object(l.a)(xe,2),Ne=ke[0],Ce=ke[1];function ye(){_(!1),y(!1),z(!1),F(!1),M(!1),pe(!1)}return Object(a.useEffect)((function(){D.getProfileInfo().then((function(e){oe(e)})).catch((function(e){console.log(e)})),D.getInitialCards().then((function(e){c(e)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){var e=function(e){27===e.keyCode&&ye()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("jwt");e?(t=e,fetch("".concat(A,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(R)).then((function(e){ve(e.data.email),re(!0),be.push("/")})).catch((function(e){return console.log(e)})):re(!1);var t}()}),[]),null===ie?Object(p.jsx)(U,{}):Object(p.jsxs)(j.Provider,{value:ae,children:[Object(p.jsx)(h,{loggedIn:ie,userEmail:ge,handleLogout:function(e){ve(null),re(!1),Ce(!1),localStorage.removeItem("jwt")},handleBurger:function(e){var t=e.target.parentElement;Ne?(t.classList.remove("header__burger_open"),Ce(!1)):(t.classList.add("header__burger_open"),Ce(!0))},isBurgerOpened:Ne}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/signup",children:Object(p.jsx)(w,{handleRegister:function(e){(function(e,t){return console.log(e,t),fetch("".concat(A,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(R)})(e.password,e.email).then((function(e){e&&(me(!0),pe(!0),be.push("/signin"))})).catch((function(e){me(!1),pe(!0),console.log(e)}))}})}),Object(p.jsx)(u.b,{path:"/signin",children:Object(p.jsx)(S,{handleLogin:function(e){var t=e.email,n=e.password;(function(e,t){return fetch("".concat(A,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(R)})(t,n).then((function(e){var n=e.token;localStorage.setItem("jwt",n),re(!0),ve(t),be.push("/")})).catch((function(e){return console.log(e)}))}})}),Object(p.jsx)(E,{exact:!0,path:"/",cards:n,onEditAvatar:function(){z(!0)},onEditProfile:function(){_(!0)},onAddPlace:function(){y(!0)},onCardClick:function(e){Q(e),M(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===ae._id}));D.changeLikeCardStatus(e._id,!t).then((function(t){c((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){F(!0),ee(e)},loggedIn:ie,component:m}),Object(p.jsx)(u.b,{children:ie?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsx)(u.a,{to:"/signin"})})]}),Object(p.jsx)(b,{}),Object(p.jsx)(O,{isOpen:d,onClose:ye,onUpdateUser:function(e){D.editProfileInfo(e).then((function(e){oe(e),_(!1)})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(g,{isOpen:T,onClose:ye,onUpdateAvatar:function(e){D.editProfilePhoto(e).then((function(e){oe(e),z(!1)})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(k,{isOpen:x,onClose:ye,onAddPlace:function(e){D.addNewCard(e).then((function(e){c([e].concat(Object(r.a)(n))),y(!1)})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(C,{card:$,isOpen:J,onCardDelete:function(e){D.deleteCard(e._id).then((function(){c((function(t){return t.filter((function(t){return t._id!==e._id}))})),F(!1)})).catch((function(e){console.log(e)}))},onClose:ye}),Object(p.jsx)(N,{card:K,isOpen:G,onClose:ye}),Object(p.jsx)(I,{isSuccess:_e,isOpen:de,onClose:ye})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(i.a,{children:Object(p.jsx)(q,{})})}),document.getElementById("root")),B()}},[[37,1,2]]]);
//# sourceMappingURL=main.52cc9152.chunk.js.map