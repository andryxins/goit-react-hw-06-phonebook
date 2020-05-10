(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{103:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n.n(o),c=n(12),l=n(82),u=n(62),s=n(32),m=n(8),d=Object(s.b)({name:"contacts",initialState:[],reducers:{addContact:function(e,t){return[].concat(Object(u.a)(e),[t.payload])},deleteContact:function(e,t){return e.filter((function(e){return e.id!==t.payload}))}}}),h=Object(s.b)({name:"filter",initialState:"",reducers:{changeQuery:function(e,t){return t.payload}}}),p=Object(m.c)({contacts:d.reducer,filter:h.reducer}),_=n(77),b=n(83),f={key:"root",storage:n.n(b).a,whitelist:["contacts"]},v=Object(u.a)(Object(s.c)({serializableCheck:{ignoredActions:["persist/PERSIST"]}})),E=Object(_.a)(f,p),k=Object(s.a)({reducer:E,middleware:v}),B=Object(_.b)(k),O=(n(103),n(104),n(109)),g=n(73),x=n.n(g),y=n(15),C=n.n(y),F=function(e){var t=e.title,n=void 0===t?"":t,a=e.isActive,o=e.children;return r.a.createElement(O.a,{in:a,timeout:500,classNames:C.a,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("section",{className:x.a.container},r.a.createElement("h1",{className:x.a.title},n),o))},N=function(e){return e.contacts},j=n(91),I=n(70),P=n(50),A=n(59),L=n(110),S=n(75),w=n(87),Q=n.n(w),D=n(17),T=n.n(D);S.a.configure();var M=I.a().shape({name:I.b().max(20,"Must be 20 characters or less").min(2,"Must be 2 characters or more").required("Required"),number:I.b().matches(/^(\()?\d{3}(\))?(-|\s)?\d{2}(-|\s)\d{2}$/,"Telephone number should be like: 000-00-00").required("Required")}),q=function(e){var t=e.onAddContact,n=e.phoneBookItems;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.c,{initialValues:{name:"",number:""},onSubmit:function(e,a){var r;(r=e,n.some((function(e){return e.name.toLowerCase()===r.name.toLowerCase()})))?S.a.error("This contact is alredy exist",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0}):(t(Object(j.a)({},e,{id:Object(L.a)()})),a.resetForm())},validationSchema:M},(function(e){var t=e.values,n=e.touched,a=e.errors,o=e.handleChange,i=e.handleBlur;return r.a.createElement(P.b,{className:T.a.container},r.a.createElement("label",{className:T.a.inputLabel,htmlFor:"name"},"Name"),r.a.createElement(O.a,{in:a.name&&n.name,classNames:C.a,timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("div",{className:T.a.invalidMessage},a.name)),r.a.createElement(P.a,{className:a.name&&n.name?T.a.inputFieldError:T.a.inputField,type:"text",value:t.name,onChange:o,onBlur:i,name:"name",placeholder:"Put contact name"}),r.a.createElement("label",{className:T.a.inputLabel,htmlFor:"number"},"Number"),r.a.createElement(O.a,{in:a.number&&n.number,classNames:C.a,timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("div",{className:T.a.invalidMessage},a.number)),r.a.createElement(P.a,{className:a.number&&n.number?T.a.inputFieldError:T.a.inputField,value:t.number,onChange:o,onBlur:i,type:"tel",name:"number",placeholder:"Number format 000-00-00"}),r.a.createElement("button",{type:"submit",className:T.a.Btn},r.a.createElement(A.Icon,{icon:Q.a,color:"blue",width:"70px",height:"50px"})))})))},R=Object(c.b)((function(e){return{phoneBookItems:N(e)}}),(function(e){return{onAddContact:function(t){return e((n=t,d.actions.addContact(n)));var n}}}))(q),Y=n(107),z=n(60),J=n(61),G=n(63),H=n(65),U=n(88),V=n.n(U),W=n(69),X=n.n(W),Z=function(e){Object(H.a)(n,e);var t=Object(G.a)(n);function n(){var e;Object(z.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleDelete=function(){var t=e.props;(0,t.onDeleteContact)(t.contact.id)},e}return Object(J.a)(n,[{key:"render",value:function(){var e=this.props.contact,t=e.name,n=e.number;return r.a.createElement("li",{className:X.a.listItem},r.a.createElement("span",{className:X.a.name},t," : ",n),r.a.createElement("button",{onClick:this.handleDelete,className:X.a.Btn,type:"button"},r.a.createElement(A.Icon,{icon:V.a,color:"red",width:"40px",height:"40px"})))}}]),n}(a.Component),$=Object(c.b)(null,(function(e){return{onDeleteContact:function(t){return e(function(e,t){return e.actions.deleteContact(t)}(d,t))}}}))(Z),K=n(89),ee=n.n(K),te=function(e){var t,n=e.phoneBookItems,a=e.filterQuery,o=(t=a,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})));return r.a.createElement(Y.a,{component:"ul",className:ee.a.container},o.map((function(e){return r.a.createElement(O.a,{in:!0,timeout:500,classNames:C.a,key:e.id,unmountOnExit:!0},r.a.createElement($,{contact:e}))})))},ne=function(e){return e.filter},ae=Object(c.b)((function(e){return{phoneBookItems:N(e),filterQuery:ne(e)}}))(te),re=n(76),oe=n.n(re),ie=function(e){var t=e.filterQuery,n=e.onChangeQuery,a=e.isActive;return r.a.createElement(O.a,{in:a,mountOnEnter:!0,unmountOnExit:!0,timeout:500,classNames:C.a},r.a.createElement("div",{className:oe.a.container},r.a.createElement("input",{className:oe.a.searchField,type:"text",name:"filterQuery",value:t,onChange:function(e){var t=e.target;return n(t.value)},placeholder:"Search contact..."})))},ce=Object(c.b)((function(e){return{filterQuery:ne(e)}}),(function(e){return{onChangeQuery:function(t){return e(function(e,t){return e.actions.changeQuery(t)}(h,t))}}}))(ie),le=n(90),ue=n.n(le),se=function(e){Object(H.a)(n,e);var t=Object(G.a)(n);function n(){var e;Object(z.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isActive:!1},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({isActive:!0})}),300)}},{key:"render",value:function(){var e=this.state.isActive,t=this.props.title;return r.a.createElement(O.a,{in:e,classNames:C.a,timeout:500},r.a.createElement("div",{className:ue.a.logo},t))}}]),n}(a.Component),me=function(e){var t=e.phoneBookItems;return r.a.createElement("main",null,r.a.createElement(se,{title:"PhoneBook"}),r.a.createElement(F,{isActive:!0},r.a.createElement(R,null)),r.a.createElement(F,{title:"Contacts",isActive:t.length>0},r.a.createElement(ce,{isActive:t.length>1}),r.a.createElement(ae,null)))},de=Object(c.b)((function(e){return{phoneBookItems:N(e)}}))(me);i.a.render(r.a.createElement(c.a,{store:k},r.a.createElement(l.a,{loading:null,persistor:B},r.a.createElement(de,null))),document.getElementById("root"))},15:function(e,t,n){e.exports={enter:"slideTransition_enter__1_ZFG",enterActive:"slideTransition_enterActive__1BRvI",exit:"slideTransition_exit__2Q6p1",exitActive:"slideTransition_exitActive__37gDL"}},17:function(e,t,n){e.exports={container:"PhoneBookFields_container__3EnU5",inputLabel:"PhoneBookFields_inputLabel__QSj-3",inputField:"PhoneBookFields_inputField__2ek-Y",inputFieldError:"PhoneBookFields_inputFieldError__3a2uY PhoneBookFields_inputField__2ek-Y",invalidMessage:"PhoneBookFields_invalidMessage__2qvzv",Btn:"PhoneBookFields_Btn__2LpxF"}},69:function(e,t,n){e.exports={listItem:"PhoneBookListItem_listItem__2xyrn",name:"PhoneBookListItem_name__1DQ3C",Btn:"PhoneBookListItem_Btn__3p8In"}},73:function(e,t,n){e.exports={container:"Section_container__37ABw",title:"Section_title__2S6oE"}},76:function(e,t,n){e.exports={container:"PhoneBookSearchField_container__r3Qr_",searchField:"PhoneBookSearchField_searchField__1IWvs"}},89:function(e,t,n){e.exports={container:"PhoneBookList_container__3N2_v",listItem:"PhoneBookList_listItem__1XvuD",name:"PhoneBookList_name__SEw86",Btn:"PhoneBookList_Btn__2CxxD"}},90:function(e,t,n){e.exports={logo:"PhoneBookLogo_logo__1f4sl"}},93:function(e,t,n){e.exports=n(106)}},[[93,1,2]]]);
//# sourceMappingURL=main.c5d8d6b4.chunk.js.map