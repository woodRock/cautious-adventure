(this["webpackJsonpcautious-adventure"]=this["webpackJsonpcautious-adventure"]||[]).push([[0],{155:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/logo.e2ca0a41.png"},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(53),i=a(8),l=a(3),o=a(37),m=a.n(o),s=a(54),u=a(14),d=a(13),E=a.n(d),f=a(16),p=a.n(f),h=(a(155),function(){return c.a.createElement("div",{className:"loading stage"},c.a.createElement("img",{className:"square loading-logo",style:{animation:"spin ".concat(3,"s linear infinite"),width:"50px",height:"50px",borderRadius:"50px"},src:p.a,alt:"img"}))}),v=function(e){var t=e.markdown,a=Object(n.useState)(null),r=Object(u.a)(a,2),i=r[0],l=r[1],o=function(){var e=Object(s.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(t).then((function(e){return e.text()})).then((function(e){l(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o(t)})),c.a.createElement("div",{className:"content"},i?c.a.createElement(E.a,{source:i}):c.a.createElement(h,null))},b=a(55),g=a.n(b),N=(a(36),{container:{width:"60%",minHeight:"100vh"},content:{padding:"2.5rem"}}),w=function(){return c.a.createElement("div",{style:N.container,className:"main twitter-style-border"},c.a.createElement("div",{style:N.content},c.a.createElement(v,{markdown:g.a})))},k=a(188),x=a(186),y=a(57),j=a.n(y);x.a.locale(j.a);function O(e){var t=e.date,a=new Date(t);return c.a.createElement(c.a.Fragment,null,c.a.createElement(k.a,{date:a,timeStyle:"Twitter"}))}var C=a(21),S=a(38),B=(a(175),{apiKey:"AIzaSyA6w14wLmGD4M3zYhUsWc_IZMsAO6Cs7Ng",authDomain:"portfolio-7b51b.firebaseapp.com",databaseURL:"https://portfolio-7b51b.firebaseio.com",projectId:"portfolio-7b51b",storageBucket:"portfolio-7b51b.appspot.com",messagingSenderId:"888392851400",appId:"1:888392851400:web:c91412c8602e7f2e6f2afd",measurementId:"G-N4G5H32S57"}),H=Object(n.createContext)(void 0),I=function(){var e=Object(n.useContext)(H);if(void 0===e)throw new Error("useFirebase must be used within a FirebaseContext.");return e},D=function(e){var t=e.children;S.initializeApp(B);var a=S.firestore();return c.a.createElement(H.Provider,{value:{fetch:function(e,t,n){a.collection(e).orderBy(t).onSnapshot(n)}}},t)},T=a(187),W=(a(52),function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))}),A=function(e){var t=e.Child,a=e.collectionName,r=e.sort,i=e.styles,l=Object(n.useState)([]),o=Object(u.a)(l,2),m=o[0],s=o[1],d=I().fetch;return Object(n.useEffect)((function(){d(a,r,{next:function(e){s(e.docs.map((function(e){return Object(C.a)({id:e.id},e.data())})))}})}),[d,a,r]),c.a.createElement("div",null,c.a.createElement("h1",null,W(a)),!m.length&&c.a.createElement(h,null),c.a.createElement("section",{className:i},m?m.map((function(e){return c.a.createElement(t,{key:Object(T.a)(),item:e})})):c.a.createElement("div",null,"There are no ",a,"s ...")))},J=function(e){var t=e.item;return c.a.createElement("article",{className:"card"},c.a.createElement("header",{className:"card-header"},c.a.createElement("i",{className:"secondary"},O({date:t.time})),c.a.createElement(i.b,{id:"nav-link",to:"/project/"+t.id},c.a.createElement("h2",null,t.title))),c.a.createElement("div",{className:"card-image"},c.a.createElement("a",{href:t.link},c.a.createElement("img",{src:t.image,alt:t.title}))),c.a.createElement("div",{className:"card-author"},c.a.createElement("a",{href:"#",className:"author-avatar"},c.a.createElement("img",{src:p.a,alt:"Woodrock logo"})),c.a.createElement("svg",{className:"half-circle",viewBox:"0 0 106 57"},c.a.createElement("path",{d:"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"})),c.a.createElement("div",{className:"author-name"},c.a.createElement("div",{className:"author-name-prefix"},"Author"),"Jesse Wood")))},L=function(){return c.a.createElement(A,{Child:J,collectionName:"projects",sort:"time",styles:"card-list"})},P=function(e){var t=e.id,a=e.title,n=e.description,r=e.link,l=e.image;return c.a.createElement("div",{className:"project-container twitter-style-border"},c.a.createElement("div",{className:"link-container"},c.a.createElement(i.b,{className:"github-link",to:"/blog"},c.a.createElement("i",{className:"material-icons"},"chevron_left"),c.a.createElement("span",null,"  "),c.a.createElement("span",{className:"link-text"},"Back")),c.a.createElement("div",{style:z.container},c.a.createElement("h1",null,c.a.createElement(i.b,{to:"/project/"+t},a)),c.a.createElement("a",{href:r},c.a.createElement("img",{style:z.image,src:l,alt:a})),c.a.createElement("div",{style:z.description},c.a.createElement(E.a,{source:n})),c.a.createElement("div",{className:"link-container"},c.a.createElement("a",{href:r,className:"github-link"},c.a.createElement("i",{className:"fa fa-github"}),c.a.createElement("span",null,"  "),c.a.createElement("span",{className:"link-text"},"View Source "))))))},z={container:{display:"flex",flexDirection:"column",alignItems:"left",width:"60%",minHeight:"100vh",padding:"2.5rem"},description:{},image:{width:"200px",height:"200px"}},F=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1],i=I().fetch,o=Object(l.e)().id;return Object(n.useEffect)((function(){i("projects","time",{next:function(e){e.forEach((function(e){var t=Object(C.a)({id:e.id},e.data());o===t.id&&r(t)}))}})}),[o,i]),c.a.createElement("div",{className:"project"}," ",a?c.a.createElement(P,a):c.a.createElement(h,null)," ")},G=(a(177),function(e){var t=e.item;return c.a.createElement("div",{style:M.container,className:"blog-post twitter-style-border"},c.a.createElement("div",{className:"blog-content"},c.a.createElement("h2",null,c.a.createElement(i.b,{class:"blog-title",to:"/blog/"+t.id},t.title)),c.a.createElement("i",null,c.a.createElement("span",{className:"secondary"},O({date:t.time}))),c.a.createElement(E.a,{source:t.markdown+""})))}),M={container:{width:"60%"}},R=function(){return c.a.createElement(A,{Child:G,collectionName:"blog",sort:"time",styles:""})},U=function(e){var t=e.item;return c.a.createElement("div",{className:"blog-post twitter-style-border",style:_.blog},c.a.createElement("div",{className:"link-container"},c.a.createElement(i.b,{className:"github-link",to:"/blog"},c.a.createElement("i",{className:"material-icons"},"chevron_left"),c.a.createElement("span",null,"  "),c.a.createElement("span",{className:"link-text"},"Back"))),c.a.createElement("h1",{style:_.title},t.title),c.a.createElement("div",{className:"blog-content"},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"blog-title-text"},c.a.createElement("i",null,c.a.createElement("span",{className:"secondary"},O({date:t.time}))))),c.a.createElement("div",null,c.a.createElement(E.a,{source:t.markdown+""}))))},_={blog:{width:"60%",minHeight:"100vh"},title:{paddingLeft:"5rem"}},q=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1],i=I().fetch,o=Object(l.e)().id;return Object(n.useEffect)((function(){i("blog","time",{next:function(e){e.forEach((function(e){var t=Object(C.a)({id:e.id},e.data());o===t.id&&r(t)}))}})}),[o,i]),c.a.createElement("div",{className:"blog"}," ",a?c.a.createElement(U,{item:a}):c.a.createElement(h,null)," ")},K=a(59),V=a.n(K),Y={container:{width:"60%",minHeight:"100vh"},content:{padding:"2.5rem"}},Z=function(){return c.a.createElement("div",{style:Y.container,className:"twitter-style-border"},c.a.createElement("div",{style:Y.content},c.a.createElement(v,{markdown:V.a})))},$=(a(178),function(e){var t=e.file,a=e.i%2?"right":"left";return c.a.createElement("div",{className:"timeline-container "+a},c.a.createElement("div",{className:"timeline-content twitter-style-border"},c.a.createElement(v,{markdown:t})))}),Q=function(e){var t=e.title,a=e.events;return c.a.createElement("div",null,c.a.createElement("h1",null,t),c.a.createElement("div",{className:"timeline"},a.map((function(e,t){return c.a.createElement($,{key:Object(T.a)(),file:e,i:t})}))))},X=a(60),ee=a.n(X),te=a(61),ae=a.n(te),ne=a(62),ce=a.n(ne),re=a(63),ie=[a.n(re).a,ce.a,ae.a,ee.a],le={container:{width:"60%",minHeight:"100vh"},content:{padding:"2.5rem"}},oe=function(){return c.a.createElement("div",{style:le.container,className:"twitter-style-border"},c.a.createElement("div",{style:le.content},c.a.createElement(Q,{title:"Education",events:ie}),";"))},me=a(64),se=a.n(me),ue=a(65),de=a.n(ue),Ee=a(66),fe=a.n(Ee),pe=[de.a,fe.a,se.a],he={container:{width:"60%",minHeight:"100vh"},content:{padding:"2.5rem"}},ve=[{path:"/",component:w},{name:"Home",path:"/home",component:w,icon:"home"},{name:"Projects",path:"/projects",component:L,icon:"code"},{name:"Blog",path:"/blog",component:R,icon:"create"},{name:"Skills",path:"/skills",component:Z,icon:"language"},{name:"Education",path:"/education",component:oe,icon:"school"},{name:"Jobs",path:"/job",component:function(){return c.a.createElement("div",{style:he.container,className:"twitter-style-border"},c.a.createElement("div",{style:he.content},c.a.createElement(Q,{title:"Jobs",events:pe}),";"))},icon:"work"},{path:"/blog/:id",component:q},{path:"/project/:id",component:F}],be=(a(179),Object(n.createContext)(void 0)),ge=Object(n.createContext)(void 0),Ne=function(e,t){switch(t.type){case"toggle":return{theme:we(e.theme)};default:return{theme:"dark"}}},we=function(e){return"dark"===e?"light":"dark"},ke=function(e){var t=e.children,a=Object(n.useReducer)(Ne,{theme:"dark"}),r=Object(u.a)(a,2),i=r[0],l=r[1];return c.a.createElement(be.Provider,{value:i},c.a.createElement(ge.Provider,{value:l},t))},xe=function(){var e=function(){var e=Object(n.useContext)(ge);if(void 0===e)throw new Error("useThemeDispatcher must be used within a ThemeContextDispatch context.");return e}();return c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"logo nav-item"},c.a.createElement("a",{href:"#",className:"nav-link"},c.a.createElement("span",{className:"link-text"},"Woodrock"),c.a.createElement("img",{src:p.a,alt:"Brand Logo"}))),ve.map((function(e){return void 0!==e.icon?c.a.createElement("li",{className:"nav-item",key:Object(T.a)()},c.a.createElement(i.b,{className:"nav-link",to:e.path},c.a.createElement("i",{className:"link-icon material-icons"},e.icon),c.a.createElement("span",{className:"link-text"},e.name))):null})),c.a.createElement("li",{className:"nav-item has-dropdown"},c.a.createElement("a",{className:"nav-link",href:"#",onClick:function(t){return function(t){t.preventDefault(),e({type:"toggle"})}(t)}},c.a.createElement("i",{className:"link-icon material-icons"},"palette"),c.a.createElement("span",{className:"link-text"},"Theme")))))},ye=function(){return c.a.createElement("div",{className:""},ve.map((function(e){return c.a.createElement(l.a,{key:e.path,path:e.path,exact:!0,component:e.component})})))},je=function(){var e=function(){var e=Object(n.useContext)(be);if(void 0===e)throw new Error("useThemeState must be used within a ThemeContextState context.");return e}();return c.a.createElement("body",{className:e.theme},c.a.createElement(i.a,null,c.a.createElement(xe,null),c.a.createElement("main",null,c.a.createElement(ye,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(r.render)(c.a.createElement(D,null,c.a.createElement(ke,null,c.a.createElement(je,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){},52:function(e,t,a){},55:function(e,t,a){e.exports=a.p+"static/media/home.96322957.md"},59:function(e,t,a){e.exports=a.p+"static/media/skills.0befa5d4.md"},60:function(e,t,a){e.exports=a.p+"static/media/ibs.f9e79478.md"},61:function(e,t,a){e.exports=a.p+"static/media/swis.965bd400.md"},62:function(e,t,a){e.exports=a.p+"static/media/rc.0332008a.md"},63:function(e,t,a){e.exports=a.p+"static/media/vuw.5c3093bd.md"},64:function(e,t,a){e.exports=a.p+"static/media/macs.0fc29bca.md"},65:function(e,t,a){e.exports=a.p+"static/media/niwa.181c615f.md"},66:function(e,t,a){e.exports=a.p+"static/media/stjohns.45df9c08.md"},67:function(e,t,a){e.exports=a(180)}},[[67,1,2]]]);
//# sourceMappingURL=main.55da8549.chunk.js.map