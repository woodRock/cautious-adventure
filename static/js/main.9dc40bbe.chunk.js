(this["webpackJsonpcautious-adventure"]=this["webpackJsonpcautious-adventure"]||[]).push([[0],{104:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.e2ca0a41.png"},235:function(e,t){},254:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(84),o=a.n(l),c=(a(104),a(19)),i=a(9),s=a(16),u=a(12),m=a(4),d=a(5),p=a(7),h=a(6),f=a(18),E=r.a.createContext(null),b=function(e){return function(t){return r.a.createElement(E.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},v=E,g=a(30),w=a.n(g),j=(a(106),a(108),a(110),{apiKey:"AIzaSyA6w14wLmGD4M3zYhUsWc_IZMsAO6Cs7Ng",authDomain:"portfolio-7b51b.firebaseapp.com",databaseURL:"https://portfolio-7b51b.firebaseio.com",projectId:"portfolio-7b51b",storageBucket:"portfolio-7b51b.appspot.com",messagingSenderId:"888392851400",appId:"1:888392851400:web:c91412c8602e7f2e6f2afd",measurementId:"G-N4G5H32S57"}),O=function e(){var t=this;Object(m.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(new w.a.auth.GoogleAuthProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.collection.ref("users/".concat(e))},this.users=function(){return t.db.collection.ref("users")},this.projects=function(){return t.db.collection("projects")},this.social=function(){return t.db.collection("social")},this.blog=function(){return t.db.collection("blog")},w.a.initializeApp(j),this.auth=w.a.auth(),this.db=w.a.firestore()},y={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},k=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,l=t.passwordOne;n.props.firebase.doCreateUserWithEmailAndPassword(r,l).then((function(e){return n.props.firebase.user(e.user.uid).set({username:a,email:r})})).then((function(e){n.setState(Object(u.a)({},y)),n.props.history.push("/home")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value)),n.setState(Object(s.a)({},e.target.name,e.target.value))},n.state=Object(u.a)({},y),n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,l=e.passwordTwo,o=e.error,c=n!==l||""===n||""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",null,r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"})),r.a.createElement("p",null,r.a.createElement("input",{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address"})),r.a.createElement("p",null,r.a.createElement("input",{name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"Password"})),r.a.createElement("p",null,r.a.createElement("input",{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirm Password"})),r.a.createElement("p",null,r.a.createElement("button",{disabled:c,type:"submit"},"Sign Up")),r.a.createElement("div",{className:"error-message"},o&&r.a.createElement("p",null,o.message)))}}]),a}(n.Component),C=function(){return r.a.createElement("p",null,"Dont have an account?",r.a.createElement("span",null," "),r.a.createElement(i.b,{to:"/signup"},"Sign Up"))},S=function(){return r.a.createElement("div",{className:"account twitter-style-border"},r.a.createElement("h1",null,"Create your account"),r.a.createElement(N,null))},N=Object(f.a)(c.e,b)(k),P={email:"",error:null},x=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(Object(u.a)({},P))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.state=Object(u.a)({},P),n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",null,r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"})),r.a.createElement("p",null,r.a.createElement("button",{disabled:n,type:"submit"},"Search")),r.a.createElement("div",{className:"error-message"},a&&r.a.createElement("p",null,a.message)))}}]),a}(n.Component),A=function(){return r.a.createElement("p",null,r.a.createElement(i.b,{to:"/pw-forget"},"Forgot Password?"))},D=function(){return r.a.createElement("div",{className:"account twitter-style-border"},r.a.createElement("h1",null,"Forgot your password"),r.a.createElement("p",null,"Enter your email address."),r.a.createElement(U,null))},U=b(x),W={email:"",password:"",error:null},I=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(Object(u.a)({},W)),n.props.history.push("/home")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.state=Object(u.a)({},W),n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,l=""===a||""===t;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",null,r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"})),r.a.createElement("p",null,r.a.createElement("input",{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"})),r.a.createElement("button",{disabled:l,type:"submit"},"Sign In"),r.a.createElement("div",{className:"error-message"},n&&r.a.createElement("p",null,n.message))))}}]),a}(n.Component),R=Object(f.a)(c.e,b)(I),T=function(){return r.a.createElement("div",{className:"account twitter-style-border"},r.a.createElement("h1",null,"Log in"),r.a.createElement(R,null),r.a.createElement(A,null),r.a.createElement(C,null))},M=a(89),B=a.n(M),G=function(e){var t=function(t){Object(p.a)(n,t);var a=Object(h.a)(n);function n(e){var t;return Object(m.a)(this,n),(t=a.call(this,e)).state={terms:null},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch(e).then((function(e){return e.text()})).then((function(e){t.setState({terms:e})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement(B.a,{source:this.state.terms,escapeHtml:!1}))}}]),n}(n.Component);return t},J=a(90),F=G(a.n(J).a),z=r.a.createContext(null),H=function(e){var t=function(t){Object(p.a)(n,t);var a=Object(h.a)(n);function n(e){var t;return Object(m.a)(this,n),(t=a.call(this,e)).state={authUser:null},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(z.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return b(t)},L=function(e){return function(t){var a=function(a){Object(p.a)(l,a);var n=Object(h.a)(l);function l(){return Object(m.a)(this,l),n.apply(this,arguments)}return Object(d.a)(l,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(a){e(a)||t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(z.Consumer,null,(function(n){return e(n)?r.a.createElement(t,a.props):null}))}}]),l}(r.a.Component);return Object(f.a)(c.e,b)(a)}},_={passwordOne:"",passwordTwo:"",error:null},Y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Object(u.a)({},_))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.state=Object(u.a)({},_),n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=e.error,l=t!==a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",null,r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"})),r.a.createElement("p",null,r.a.createElement("input",{name:"passwordTwo",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"})),r.a.createElement("p",null,r.a.createElement("button",{disabled:l,type:"submit"},"Reset My Password")),r.a.createElement("div",{className:"error-message"},n&&r.a.createElement("p",null,n.message)))}}]),a}(n.Component),q=b(Y),K=L((function(e){return!!e}))((function(){return r.a.createElement(z.Consumer,null,(function(e){return r.a.createElement("div",{className:"account twitter-style-border"},r.a.createElement("h1",null,"Accounts"),r.a.createElement("strong",null,"email:")," ",e.email,r.a.createElement(U,null),r.a.createElement(q,null))}))})),V=a(27),Z=a.n(V),$=a(263),Q=a(262),X=a(92),ee=a.n(X);function te(e){var t=e.date;return r.a.createElement("span",null,r.a.createElement($.a,{date:t,timeStyle:"Twitter"}))}Q.a.locale(ee.a);var ae=a(23),ne=a.n(ae),re=(a(254),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={speed:3},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading stage"},r.a.createElement("img",{className:"square loading-logo",style:{animation:"spin ".concat(this.state.speed,"s linear infinite")},src:ne.a,alt:"img"}))}}]),a}(n.Component)),le=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={loading:!1,projects:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.projects().orderBy("time").get().then((function(t){t.forEach((function(t){var a={id:t.id,title:t.data().title,link:t.data().link,image:t.data().image,description:t.data().description,time:t.data().time};e.state.projects.push(a),e.state.projects.length>0&&e.setState({loading:!1})}))}))}},{key:"render",value:function(){var e=this.state,t=e.projects,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"Projects"),a&&r.a.createElement(re,null),t?r.a.createElement(oe,{projects:t.sort((function(e,t){return new Date(t.time)-new Date(e.time)}))}):r.a.createElement("div",null,"There are no projects ..."))}}]),a}(n.Component),oe=function(e){var t=e.projects;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(ce,{key:e.id,project:e})})))},ce=function(e){var t=e.project;return r.a.createElement("div",{className:"project-container"},r.a.createElement("div",{className:"title"},r.a.createElement("img",{class:"logo",src:ne.a,alt:"woodRock github logo"}),r.a.createElement("span",{className:"project-title-text"},r.a.createElement("span",{className:"header"}," @woodRock")," \u2022",r.a.createElement("i",{className:"secondary"}," ",te({date:t.time}))),r.a.createElement("div",{className:"description text"},r.a.createElement("h2",null,t.title),r.a.createElement(Z.a,{source:t.description}))),r.a.createElement("div",{className:"project"},r.a.createElement("a",{href:t.link},r.a.createElement("img",{width:"100%",height:"width",src:t.image,alt:t.title})),r.a.createElement("div",null,r.a.createElement("a",{href:t.link,className:"github-link"},r.a.createElement("i",{className:"fa fa-github"})))))},ie=b(le),se=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={loading:!1,blog:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.blog().orderBy("title").get().then((function(t){t.forEach((function(t){var a={id:t.id,title:t.data().title,time:t.data().time,markdown:t.data().markdown};e.state.blog.push(a),e.state.blog.length>0&&e.setState({loading:!1})}))}))}},{key:"render",value:function(){var e=this.state,t=e.blog,a=e.loading;return r.a.createElement("div",{className:"blog"},r.a.createElement("h1",null,"Blog"),a&&r.a.createElement(re,null),t?r.a.createElement(ue,{blog:t.sort((function(e,t){return new Date(t.time)-new Date(e.time)}))}):r.a.createElement("div",null,"There are no blog posts ..."))}}]),a}(n.Component),ue=function(e){var t=e.blog;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(me,{key:e.id,blog:e})})))},me=function(e){var t=e.blog;return r.a.createElement("div",{className:"blog-post twitter-style-border"},r.a.createElement("div",{className:"title"},r.a.createElement("img",{class:"logo",src:ne.a,alt:"woodRock github logo"}),r.a.createElement("span",{class:"blog-title-text"},"woodRock \u2022",r.a.createElement("i",null,r.a.createElement("span",{className:"secondary"}," ",te({date:t.time}))))),r.a.createElement("div",{className:"blog-content"},r.a.createElement("h2",null,t.title),r.a.createElement(Z.a,{source:(t.markdown+"").replace(/\\n/g,"\n\n")})))},de=b(se),pe=a(93),he=G(a.n(pe).a),fe=(a(255),a(94)),Ee=G(a.n(fe).a),be=a(95),ve=G(a.n(be).a),ge=a(96),we=G(a.n(ge).a),je=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Jobs"),r.a.createElement("div",{class:"timeline"},r.a.createElement("div",{class:"timeline-container left"},r.a.createElement("div",{class:"timeline-content twitter-style-border"},r.a.createElement(ve,null))),r.a.createElement("div",{class:"timeline-container right"},r.a.createElement("div",{class:"timeline-content twitter-style-border"},r.a.createElement(we,null))),r.a.createElement("div",{className:"timeline-container left"},r.a.createElement("div",{className:"timeline-content twitter-style-border"},r.a.createElement(Ee,null)))))},Oe=a(97),ye=G(a.n(Oe).a),ke=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Ciriculum Vitae"),r.a.createElement("embed",{src:"https://woodrock.tk/assets/files/my-cv.pdf",width:"800px",height:"600px"}))},Ce=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).props.history.push("/home"),n}return Object(d.a)(a,[{key:"render",value:function(){return null}}]),a}(n.Component),Se=[{path:"",component:Object(f.a)(c.e)(Ce)},{name:"Home",path:"/home",component:F,icon:"home"},{name:"Projects",path:"/projects",component:ie,icon:"code"},{name:"Blog",path:"/blog",component:de,icon:"create"},{name:"Skills",path:"/skills",component:ye,icon:"language"},{name:"Education",path:"/education",component:he,icon:"school"},{name:"Jobs",path:"/job",component:je,icon:"work"},{path:"/cv",component:ke,icon:""},{name:"Account",path:"/account",component:K,icon:"settings",auth:!0},{name:"Register",path:"/signup",component:S,icon:""},{path:"/signin",component:T,icon:""},{path:"/pw-forget",component:D,icon:""}],Ne=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={loading:!1,social:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.social().orderBy("title").get().then((function(t){t.forEach((function(t){var a={id:t.id,title:t.data().title,link:t.data().link,image:t.data().image,description:t.data().description};e.state.social.push(a),e.state.social.length>0&&e.setState({loading:!1})}))}))}},{key:"render",value:function(){var e=this.state,t=e.social,a=e.loading;return r.a.createElement("div",null,a&&r.a.createElement("div",null,"..."),t?r.a.createElement(Pe,{social:t}):r.a.createElement("div",null,"There are no social links ..."))}}]),a}(n.Component),Pe=function(e){var t=e.social;return r.a.createElement("div",{className:"social"},t.map((function(e){return r.a.createElement(xe,{key:e.id,social:e})})))},xe=function(e){var t=e.social;return r.a.createElement("span",null,r.a.createElement("a",{href:t.link},r.a.createElement("i",{className:"link fa fa-"+t.title})))},Ae=b(Ne),De=b((function(e){var t=e.firebase;return r.a.createElement(i.b,{to:"home",onClick:t.doSignOut},r.a.createElement("i",{className:"link material-icons"},"exit_to_app"))})),Ue=a(98),We=a.n(Ue),Ie=function(){return r.a.createElement("ul",null,Se.map((function(e){return""===e.icon?null:r.a.createElement("li",{key:e.path},r.a.createElement(i.b,{className:"link",to:e.path},r.a.createElement("i",{className:"link material-icons"},e.icon),r.a.createElement("span",{className:"link link-text"},e.name)))})),r.a.createElement("li",null,r.a.createElement(De,null)))},Re=function(){return r.a.createElement("ul",null,Se.map((function(e){return e.auth||""===e.icon?null:r.a.createElement("li",{key:e.path},r.a.createElement(i.b,{to:e.path},r.a.createElement("i",{className:"link material-icons"},e.icon),r.a.createElement("span",{className:"link link-text"},e.name)))})),r.a.createElement("li",null,r.a.createElement(i.b,{className:"link",to:"/signin"},r.a.createElement("i",{className:"link material-icons"},"person"))))},Te=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{className:"avatar",width:"80%",src:We.a,alt:""})),r.a.createElement(z.Consumer,null,(function(e){return e?r.a.createElement(Ie,null):r.a.createElement(Re,null)}))))},Me=function(){return r.a.createElement("div",{className:"copyright"},r.a.createElement("small",null,"\xa9 Copyright ",(new Date).getFullYear(),", Jesse Wood"))},Be=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"navigation twitter-style-border"},r.a.createElement(Te,null)))},Ge=function(){return r.a.createElement("div",{className:"container twitter-style-border"},r.a.createElement("div",{className:""},Se.map((function(e){return r.a.createElement(c.a,{key:e.path,path:e.path,component:e.component})}))))},Je=function(){return r.a.createElement("div",null,r.a.createElement(Ae,null),r.a.createElement(Me,null))},Fe=H((function(){return r.a.createElement(i.a,null,r.a.createElement(Be,null),r.a.createElement(Ge,null),r.a.createElement(Je,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v.Provider,{value:new O},r.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){e.exports=a.p+"static/media/home.7b4b9f85.md"},93:function(e,t,a){e.exports=a.p+"static/media/education.18fca96b.md"},94:function(e,t,a){e.exports=a.p+"static/media/job.59528574.md"},95:function(e,t,a){e.exports=a.p+"static/media/job.4ad35c9f.md"},96:function(e,t,a){e.exports=a.p+"static/media/job.606a61e0.md"},97:function(e,t,a){e.exports=a.p+"static/media/skills.f62be371.md"},98:function(e,t,a){e.exports=a.p+"static/media/me.791eff73.jpg"},99:function(e,t,a){e.exports=a(256)}},[[99,1,2]]]);
//# sourceMappingURL=main.9dc40bbe.chunk.js.map