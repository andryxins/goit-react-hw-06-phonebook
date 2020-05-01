(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{102:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),i=n.n(o),c=n(63),l=n(82),s=n(43),u=n(31),m=n(8),d=Object(u.b)({name:"contacts",initialState:[],reducers:{addContact:function(e,t){return[].concat(Object(s.a)(e),[t.payload])},deleteContact:function(e,t){return e.filter((function(e){return e.id!==t.payload}))}}}),h=Object(u.b)({name:"filter",initialState:"",reducers:{changeQuery:function(e,t){return t.payload}}}),p=Object(m.c)({contacts:d.reducer,filter:h.reducer}),b=n(77),_=n(83),v={key:"root",storage:n.n(_).a,whitelist:["contacts"]},E=Object(s.a)(Object(u.c)({serializableCheck:{ignoredActions:["persist/PERSIST"]}})),f=Object(b.a)(v,p),g=Object(u.a)({reducer:f,middleware:E}),k=Object(b.b)(g),O=(n(102),n(103),n(90)),B=n(53),C=n(54),x=n(64),F=n(66),N=n(109),y=n(76),j=n(108),S=n(73),A=n.n(S),P=n(14),L=n.n(P),w=function(e){var t=e.title,n=void 0===t?"":t,a=e.isActive,o=e.children;return r.a.createElement(j.a,{in:a,timeout:500,classNames:L.a,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("section",{className:A.a.container},r.a.createElement("h1",{className:A.a.title},n),o))},I=n(51),Q=n(70),D=n(62),T=n(87),M=n.n(T),q=n(16),R=n.n(q),Y=Q.a().shape({name:Q.b().max(20,"Must be 20 characters or less").min(2,"Must be 2 characters or more").required("Required"),number:Q.b().matches(/^(\()?\d{3}(\))?(-|\s)?\d{2}(-|\s)\d{2}$/,"Telephone number should be like: 000-00-00").required("Required")}),z=function(e){var t=e.onSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.c,{initialValues:{name:"",number:""},onSubmit:function(e,n){t(e)&&n.resetForm()},validationSchema:Y},(function(e){var t=e.values,n=e.touched,a=e.errors,o=e.handleChange,i=e.handleBlur;return r.a.createElement(I.b,{className:R.a.container},r.a.createElement("label",{className:R.a.inputLabel,htmlFor:"name"},"Name"),r.a.createElement(j.a,{in:a.name&&n.name,classNames:L.a,timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("div",{className:R.a.invalidMessage},a.name)),r.a.createElement(I.a,{className:a.name&&n.name?R.a.inputFieldError:R.a.inputField,type:"text",value:t.name,onChange:o,onBlur:i,name:"name",placeholder:"Put contact name"}),r.a.createElement("label",{className:R.a.inputLabel,htmlFor:"number"},"Number"),r.a.createElement(j.a,{in:a.number&&n.number,classNames:L.a,timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("div",{className:R.a.invalidMessage},a.number)),r.a.createElement(I.a,{className:a.number&&n.number?R.a.inputFieldError:R.a.inputField,value:t.number,onChange:o,onBlur:i,type:"tel",name:"number",placeholder:"Number format 000-00-00"}),r.a.createElement("button",{type:"submit",className:R.a.Btn},r.a.createElement(D.Icon,{icon:M.a,color:"blue",width:"70px",height:"50px"})))})))},J=n(106),G=n(88),H=n.n(G),U=n(49),V=n.n(U),W=function(e){var t=e.onDelete,n=e.contacts;e.isLoading;return r.a.createElement(J.a,{component:"ul",className:V.a.container},n.map((function(e){var n=e.id,a=e.name,o=e.number;return r.a.createElement(j.a,{in:!0,timeout:500,classNames:L.a,className:V.a.listItem,key:n,unmountOnExit:!0},r.a.createElement("li",null,r.a.createElement("span",{className:V.a.name},a," : ",o),r.a.createElement("button",{onClick:function(){return t(n)},className:V.a.Btn,type:"button"},r.a.createElement(D.Icon,{icon:H.a,color:"red",width:"40px",height:"40px"}))))})))},X=n(75),Z=n.n(X),$=function(e){var t=e.value,n=e.onChange,a=e.isActive;return r.a.createElement(j.a,{in:a,mountOnEnter:!0,unmountOnExit:!0,timeout:500,classNames:L.a},r.a.createElement("div",{className:Z.a.container},r.a.createElement("input",{className:Z.a.searchField,type:"text",name:"filterQuery",value:t,onChange:n,placeholder:"Search contact..."})))},K=n(89),ee=n.n(K),te=function(e){Object(F.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(B.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isActive:!1},e}return Object(C.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({isActive:!0})}),300)}},{key:"render",value:function(){var e=this.state.isActive,t=this.props.title;return r.a.createElement(j.a,{in:e,classNames:L.a,timeout:500},r.a.createElement("div",{className:ee.a.logo},t))}}]),n}(a.Component),ne=function(e,t){return e.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))};y.a.configure();var ae=function(e){Object(F.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(B.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){var n=e.props,a=n.onAddContact,r=n.phoneBookItems;return ne(r,t)?(y.a.error("This contact is alredy exist",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),!1):(a(Object(O.a)({},t,{id:Object(N.a)()})),!0)},e.handleChange=function(t){var n=t.target.value;e.props.onChangeQuery(n)},e}return Object(C.a)(n,[{key:"render",value:function(){var e,t=this.props,n=t.phoneBookItems,a=t.onDeleteContact,o=t.filterQuery,i=(e=o,n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})));return r.a.createElement("main",null,r.a.createElement(te,{title:"PhoneBook"}),r.a.createElement(w,{isActive:!0},r.a.createElement(z,{onSubmit:this.handleSubmit})),r.a.createElement(w,{title:"Contacts",isActive:n.length>0},r.a.createElement($,{isActive:n.length>1,value:o,onChange:this.handleChange}),r.a.createElement(W,{onDelete:a,contacts:i})))}}]),n}(a.Component),re=Object(c.b)((function(e){return{phoneBookItems:Object(s.a)(e.contacts),filterQuery:e.filter}}),(function(e){return{onAddContact:function(t){return e(d.actions.addContact(t))},onDeleteContact:function(t){return e(d.actions.deleteContact(t))},onChangeQuery:function(t){return e(h.actions.changeQuery(t))}}}))(ae);i.a.render(r.a.createElement(c.a,{store:g},r.a.createElement(l.a,{loading:null,persistor:k},r.a.createElement(re,null))),document.getElementById("root"))},14:function(e,t,n){e.exports={enter:"slideTransition_enter__1_ZFG",enterActive:"slideTransition_enterActive__1BRvI",exit:"slideTransition_exit__2Q6p1",exitActive:"slideTransition_exitActive__37gDL"}},16:function(e,t,n){e.exports={container:"PhoneBookFields_container__3EnU5",inputLabel:"PhoneBookFields_inputLabel__QSj-3",inputField:"PhoneBookFields_inputField__2ek-Y",inputFieldError:"PhoneBookFields_inputFieldError__3a2uY PhoneBookFields_inputField__2ek-Y",invalidMessage:"PhoneBookFields_invalidMessage__2qvzv",Btn:"PhoneBookFields_Btn__2LpxF"}},49:function(e,t,n){e.exports={container:"PhoneBookList_container__3N2_v",listItem:"PhoneBookList_listItem__1XvuD",name:"PhoneBookList_name__SEw86",Btn:"PhoneBookList_Btn__2CxxD"}},73:function(e,t,n){e.exports={container:"Section_container__37ABw",title:"Section_title__2S6oE"}},75:function(e,t,n){e.exports={container:"PhoneBookSearchField_container__r3Qr_",searchField:"PhoneBookSearchField_searchField__1IWvs"}},89:function(e,t,n){e.exports={logo:"PhoneBookLogo_logo__1f4sl"}},92:function(e,t,n){e.exports=n(105)}},[[92,1,2]]]);
//# sourceMappingURL=main.97ead193.chunk.js.map