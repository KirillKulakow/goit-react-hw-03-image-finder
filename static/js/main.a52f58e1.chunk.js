(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{17:function(e,a,t){e.exports=t(47)},22:function(e,a,t){},24:function(e,a,t){},4:function(e,a,t){e.exports={bar:"SearchBar_bar__1QUga",form:"SearchBar_form__eUnqm",formButton:"SearchBar_formButton__2Xl42",formButtonLabel:"SearchBar_formButtonLabel__1iyu5",formInput:"SearchBar_formInput__yzRTn"}},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),o=t.n(c),l=(t(22),t(3)),i=t.n(l),u=t(5),m=t(2),s=(t(24),t(4)),f=t.n(s),d=function(e){var a=e.addSearchQuery,t=Object(n.useState)(""),c=Object(m.a)(t,2),o=c[0],l=c[1];return r.a.createElement("header",{className:f.a.bar},r.a.createElement("form",{className:f.a.form,onSubmit:function(e){e.preventDefault(),a(o)}},r.a.createElement("button",{type:"submit",className:f.a.formButton},r.a.createElement("span",{className:f.a.formButtonLabel},"Search")),r.a.createElement("input",{className:f.a.formInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos...",onChange:function(e){l(e.target.value)}})))},p=t(16),E=t.n(p),g=function(){var e=Object(u.a)(i.a.mark((function e(a,t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://pixabay.com/api",{params:{q:a,page:t,key:"15687137-c5f0f01058e95950ce1cda2fd",image_type:"photo",orientation:"horizontal",per_page:12}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),v=(t(42),function(e){return r.a.createElement("ul",{className:"ImageGallery"},e.children)}),b=(t(43),function(e){var a=e.images,t=e.openModal,n=e.getModalImage;return r.a.createElement("li",{className:"ImageGalleryItem"},r.a.createElement("img",{src:a.webformatURL,alt:a.tags,onClick:function(){n(a.id),t()},className:"ImageGalleryItem-image"}))}),h=(t(44),function(e){var a=e.modalImg,t=e.closeModal,c=function(e){"Escape"===e.key&&t()};Object(n.useEffect)((function(){window.addEventListener("keydown",(function(e){return c(e)}))}),[]),Object(n.useEffect)((function(){return function(){window.removeEventListener("keydown",(function(e){return c(e)}))}}));return r.a.createElement("div",{className:"Overlay",onClick:function(e){"Overlay"===e.target.className&&t()}},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:a.largeImageURL,alt:a.tags,className:"modal__image"})))}),N=(t(45),function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader-inner"},r.a.createElement("div",{className:"loader-line-wrap"},r.a.createElement("div",{className:"loader-line"})),r.a.createElement("div",{className:"loader-line-wrap"},r.a.createElement("div",{className:"loader-line"})),r.a.createElement("div",{className:"loader-line-wrap"},r.a.createElement("div",{className:"loader-line"})),r.a.createElement("div",{className:"loader-line-wrap"},r.a.createElement("div",{className:"loader-line"})),r.a.createElement("div",{className:"loader-line-wrap"},r.a.createElement("div",{className:"loader-line"}))))}),w=(t(46),function(e){var a=e.addNextPageImages;return r.a.createElement("button",{className:"Button",onClick:function(){a()}},"Load more...")});var y=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(1),l=Object(m.a)(o,2),s=l[0],f=l[1],p=Object(n.useState)(!1),E=Object(m.a)(p,2),y=E[0],O=E[1],j=Object(n.useState)({}),_=Object(m.a)(j,2),S=_[0],I=_[1],k=Object(n.useState)(!1),B=Object(m.a)(k,2),x=B[0],L=B[1],M=Object(n.useState)(""),C=Object(m.a)(M,2),U=C[0],G=C[1],Q=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.prev=1,e.next=4,g(U,s).then((function(e){c(1===s?e.data.hits:t.concat(e.data.hits))}));case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,L(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])})));return function(){return e.apply(this,arguments)}}(),R=function(e){var a=t.find((function(a){return a.id===e}));I(a)},q=function(){O(!0)};return Object(n.useEffect)((function(){Q()}),[U,s]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{addSearchQuery:function(e){f(1),G(e)}}),r.a.createElement(v,null,x?r.a.createElement(N,null):t.map((function(e){return r.a.createElement(b,{key:e.id,images:e,getModalImage:R,openModal:q})}))),!!t.length&&!x&&r.a.createElement(w,{addNextPageImages:function(){f(s+1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}}),y&&r.a.createElement(h,{modalImg:S,closeModal:function(){O(!1),I({})}}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a52f58e1.chunk.js.map