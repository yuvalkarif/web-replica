(this["webpackJsonpweb-replica"]=this["webpackJsonpweb-replica"]||[]).push([[7],{55:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"h",(function(){return l})),t.d(e,"i",(function(){return p})),t.d(e,"g",(function(){return j})),t.d(e,"l",(function(){return h})),t.d(e,"k",(function(){return g})),t.d(e,"d",(function(){return v})),t.d(e,"e",(function(){return y})),t.d(e,"c",(function(){return C})),t.d(e,"f",(function(){return L})),t.d(e,"b",(function(){return z})),t.d(e,"j",(function(){return P}));var r=t(29),a=t(51),c=t.n(a),o=t(16),i=t(52),u=t(21);function s(n){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(c.a.mark((function n(e){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("users").where("username","==",e).get();case 2:return t=n.sent,n.abrupt("return",t.docs.map((function(n){return n.data().length>0})));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(c.a.mark((function n(e){var t,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("users").where("userId","==",e).get();case 2:return t=n.sent,r=t.docs.map((function(n){return Object(o.a)(Object(o.a)({},n.data()),{},{docId:n.id})})),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(c.a.mark((function n(e){var t,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("users").where("username","==",e).get();case 2:return t=n.sent,r=t.docs.map((function(n){return Object(o.a)(Object(o.a)({},n.data()),{},{docId:n.id})})),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n,e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(c.a.mark((function n(e,t){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("users").where("userId","!=",e).limit(10).get();case 2:return r=n.sent,n.abrupt("return",r.docs.map((function(n){return Object(o.a)(Object(o.a)({},n.data()),{},{docId:n.id})})).filter((function(n){return n.userId&&!t.includes(n.userId)})));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,e,t){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(c.a.mark((function n(e,t,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u.b.firestore().collection("users").doc(e).update({following:r?u.a.arrayRemove(t):u.a.arrayUnion(t)}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,e,t){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(c.a.mark((function n(e,t,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u.b.firestore().collection("users").doc(e).update({followers:r?u.a.arrayRemove(t):u.a.arrayUnion(t)}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n,e){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(c.a.mark((function n(e,t){var r,a,s;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("photos").where("userId","in",t).get();case 2:return r=n.sent,a=r.docs.map((function(n){return Object(o.a)(Object(o.a)({},n.data()),{},{docId:n.id})})),n.next=6,Promise.all(a.map(function(){var n=Object(i.a)(c.a.mark((function n(t){var r,a,i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=!1,t.likes.includes(e)&&(r=!0),n.next=4,l(t.userId);case 4:return a=n.sent,i=a[0].username,n.abrupt("return",Object(o.a)(Object(o.a)({username:i},t),{},{userLikedPhoto:r}));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 6:return s=n.sent,n.abrupt("return",s);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(c.a.mark((function n(e){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("photos").where("userId","==",e).get();case 2:return t=n.sent,n.abrupt("return",t.docs.map((function(n){return n.data()})));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function C(n){return I.apply(this,arguments)}function I(){return(I=Object(i.a)(c.a.mark((function n(e){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("photos").where("photoId","==",e).get();case 2:return t=n.sent,n.abrupt("return",t.docs.map((function(n){return Object(o.a)(Object(o.a)({},n.data()),{},{docId:n.id})})));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function L(n){return S.apply(this,arguments)}function S(){return(S=Object(i.a)(c.a.mark((function n(e){var t,a,o;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p(e);case 2:return t=n.sent,a=Object(r.a)(t,1),o=a[0],n.abrupt("return",o.profilePic);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function z(n,e){var t=!1;return n.likes.includes(e)&&(t=!0),Object(o.a)(Object(o.a)({},n),{},{userLikedPhoto:t})}function P(n){return N.apply(this,arguments)}function N(){return(N=Object(i.a)(c.a.mark((function n(e){var t,a,i,s;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("users").where("userId","==",e).get();case 2:return t=n.sent,a=t.docs.map((function(n){return Object(o.a)(Object(o.a)({},n.data()),{},{docId:n.id})})),i=Object(r.a)(a,1),s=i[0],n.abrupt("return",s);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},57:function(n,e,t){"use strict";e.a=t.p+"static/media/Karifgram.33790cf2.png"},58:function(n,e,t){"use strict";t.d(e,"j",(function(){return v})),t.d(e,"m",(function(){return w})),t.d(e,"o",(function(){return y})),t.d(e,"i",(function(){return k})),t.d(e,"p",(function(){return C})),t.d(e,"a",(function(){return I})),t.d(e,"k",(function(){return L})),t.d(e,"c",(function(){return S})),t.d(e,"l",(function(){return z})),t.d(e,"h",(function(){return P})),t.d(e,"g",(function(){return N})),t.d(e,"e",(function(){return D})),t.d(e,"f",(function(){return F})),t.d(e,"n",(function(){return E})),t.d(e,"b",(function(){return U})),t.d(e,"d",(function(){return K}));var r,a,c,o,i,u,s,d,l,f,p,b,j,m,h,O,g=t(53),x=t(54),v=x.a.div(r||(r=Object(g.a)(["\n  width: 600px;\n\n  a {\n    text-decoration: none;\n    color: black;\n    display: flex;\n    flex-direction: row;\n    font-size: 0.65rem;\n    padding-block: 0.75rem;\n    padding-left: 0.5rem;\n  }\n"]))),w=x.a.img(a||(a=Object(g.a)(["\n  width: 25px;\n  border-radius: 100%;\n"]))),y=x.a.img(c||(c=Object(g.a)(["\n  width: 600px;\n"]))),k=x.a.div(o||(o=Object(g.a)(["\n  margin-block: auto;\n  margin-left: 0.5rem;\n  font-weight: 500;\n  font-size: 0.725rem;\n"]))),C=x.a.div(i||(i=Object(g.a)(["\n  border: 1px solid var(--lightColor);\n  margin-bottom: 3rem;\n"]))),I=x.a.div(u||(u=Object(g.a)(["\n  padding: 0.6rem;\n"]))),L=x.a.svg(s||(s=Object(g.a)(["\n  width: 2rem;\n  user-select: none;\n  cursor: pointer;\n  fill: ",";\n  stroke: ",";\n  margin-right: 0.5rem;\n"])),(function(n){return n.toggleLiked?"red":"none"}),(function(n){return n.toggleLiked?"red":"var(--darkColor);"})),S=x.a.svg(d||(d=Object(g.a)(["\n  width: 2rem;\n  user-select: none;\n  cursor: pointer;\n  stroke: var(--darkColor);\n"]))),z=x.a.div(l||(l=Object(g.a)(["\n  font-size: 0.8rem;\n  padding-left: 0.2rem;\n  font-weight: 500;\n  color: var(--darkColor);\n"]))),P=x.a.div(f||(f=Object(g.a)(["\n  font-size: 0.8rem;\n  padding-left: 0.8rem;\n  font-weight: 400;\n  color: var(--darkColor);\n  span:first-child {\n    font-weight: 500;\n    margin-right: 0.5rem;\n  }\n"]))),N=x.a.div(p||(p=Object(g.a)(["\n  color: var(--mediumColor);\n  font-size: 0.8rem;\n  padding-left: 0.8rem;\n  margin-top: 0.35rem;\n  cursor: pointer;\n"]))),D=x.a.div(b||(b=Object(g.a)(["\n  display: flex;\n  margin-top: 0.35rem;\n  a {\n    font-weight: 500;\n\n    text-decoration: none;\n    color: var(--darkColor);\n    font-size: 0.8rem;\n    padding-left: 0.8rem;\n\n    cursor: pointer;\n  }\n"]))),F=x.a.div(j||(j=Object(g.a)(["\n  font-size: 0.8rem;\n  padding-left: 0.35rem;\n  font-weight: 400;\n  color: var(--darkColor);\n"]))),E=x.a.div(m||(m=Object(g.a)(["\n  font-size: 0.65rem;\n  padding-left: 0.8rem;\n  font-weight: 400;\n  color: var(--mediumColor);\n  margin-block: 0.5rem;\n"]))),U=x.a.div(h||(h=Object(g.a)(["\n  border-top: 1px solid var(--lightColor);\n  background-color: white;\n\n  form {\n    display: flex;\n    justify-content: space-between;\n    padding-left: 0;\n\n    input {\n      border: none;\n      padding: 1.1rem 1rem;\n      width: 100%;\n      color: var(--darkColor);\n      outline: none;\n    }\n  }\n"]))),K=x.a.button(O||(O=Object(g.a)(["\n  border: none;\n  background: white;\n  font-weight: 600;\n  color: var(--blueColor);\n  padding-inline: 1rem;\n  cursor: pointer;\n  opacity: ","; ;\n"])),(function(n){return n.comment?"1":"0.25"}))},59:function(n,e,t){"use strict";var r,a,c,o,i,u,s=t(51),d=t.n(s),l=t(52),f=t(29),p=t(1),b=t(53),j=t(54),m=j.a.div(r||(r=Object(b.a)(["\n  width: 100%;\n  background-color: white;\n  margin: 0;\n  display: grid;\n  height: 3rem;\n  grid-auto-columns: 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 0px 0px;\n  border-bottom: 1.5px solid var(--lightColor);\n\n  align-items: center;\n  a {\n    display: flex;\n  }\n"]))),h=j.a.img(a||(a=Object(b.a)(["\n  height: 2rem;\n  margin-left: 1rem;\n  margin-top: 0.5rem;\n"]))),O=j.a.div(c||(c=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem;\n  input {\n    text-align: center;\n    color: var(--mediumColor);\n    background-color: var(--bgColor);\n    border: 1.5px solid var(--lightColor);\n    border-radius: 5px;\n  }\n"]))),g=j.a.img(o||(o=Object(b.a)(["\n  height: 2.25rem;\n  border-radius: 100%;\n  margin-right: 0.5rem;\n  :hover {\n    opacity: 80%;\n  }\n"]))),x=j.a.div(i||(i=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]))),v=j.a.button(u||(u=Object(b.a)(["\n  background-color: var(--blueColor);\n  color: var(--bgColor);\n  border: none;\n  border-radius: 4px;\n  font: inherit;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  margin-right: 1rem;\n  cursor: pointer;\n  text-decoration: none;\n"]))),w=t(57),y=t(30),k=t(18),C=t(31),I=t(13),L=t(55),S=t(56),z=t.n(S),P=t(4);e.a=function(){var n=Object(p.useContext)(k.a).firebase,e=Object(p.useContext)(C.a).user,t=Object(p.useState)(),r=Object(f.a)(t,2),a=r[0],c=r[1],o=Object(p.useState)(""),i=Object(f.a)(o,2),u=i[0],s=i[1];return Object(p.useEffect)((function(){function n(){return(n=Object(l.a)(d.a.mark((function n(){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(L.h)(e.uid);case 2:t=n.sent,c(t[0].profilePic);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(null===e||void 0===e?void 0:e.uid)&&function(){n.apply(this,arguments)}()}),[e]),Object(P.jsxs)(m,{children:[Object(P.jsx)(y.b,{to:I.a,children:Object(P.jsx)(h,{src:w.a,alt:""})}),Object(P.jsx)(O,{children:Object(P.jsx)("input",{placeholder:"Search",value:u,onChange:function(n){var e=n.target;return s(e.value)}})}),Object(P.jsx)(x,{children:e?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(y.b,{to:I.a,style:{textDecoration:"none"},children:Object(P.jsx)(v,{onClick:function(){n.auth().signOut()},onKeyDown:function(e){"Enter"===e.key&&n.auth().signOut()},children:"Sign Out"})}),Object(P.jsx)(y.b,{to:"/web-replica/p/".concat(e.displayName),children:a?Object(P.jsx)(g,{src:a}):Object(P.jsx)(z.a,{height:36,width:36,circle:!0})})]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(y.b,{to:I.b,children:Object(P.jsx)(v,{children:"Login"})}),Object(P.jsx)(y.b,{to:I.e,children:Object(P.jsx)(v,{onClick:function(){n.auth().signOut()},onKeyDown:function(e){"Enter"===e.key&&n.auth().signOut()},children:"Sign Up"})})]})})]})}},60:function(n,e,t){"use strict";t.d(e,"a",(function(){return f}));var r=t(51),a=t.n(r),c=t(52),o=t(29),i=t(1),u=t(18),s=t(31),d=t(58),l=t(4);function f(n){var e=n.docId,t=n.totalLikes,r=n.handleFocus,f=n.likedPhoto,p=Object(i.useContext)(s.a).user.uid,b=void 0===p?"":p,j=Object(i.useState)(f),m=Object(o.a)(j,2),h=m[0],O=m[1],g=Object(i.useState)(t),x=Object(o.a)(g,2),v=x[0],w=x[1],y=Object(i.useContext)(u.a),k=y.firebase,C=y.FieldValue,I=function(){var n=Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return O((function(n){return!n})),n.next=3,k.firestore().collection("photos").doc(e).update({likes:h?C.arrayRemove(b):C.arrayUnion(b)});case 3:w((function(n){return h?n-1:n+1}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(l.jsxs)(d.a,{children:[Object(l.jsx)(d.k,{onClick:I,onKeyDown:function(n){"Enter"===n.key&&I()},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,className:"heart",toggleLiked:h,children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),Object(l.jsx)(d.c,{onClick:r,onKeyDown:function(n){"Enter"===n.key&&r()},className:"comment",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),Object(l.jsx)(d.l,{children:"".concat(v,v>1?" likes":" like")})]})}},61:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var r=t(67),a=t(29),c=t(1),o=t(18),i=t(31),u=t(58),s=t(4);function d(n){var e=n.docId,t=n.comments,d=n.setComments,l=n.commentInput,f=Object(c.useState)(""),p=Object(a.a)(f,2),b=p[0],j=p[1],m=Object(c.useContext)(o.a),h=m.firebase,O=m.FieldValue,g=Object(c.useContext)(i.a).user.displayName,x=function(n){return n.preventDefault(),d([{displayName:g,comment:b}].concat(Object(r.a)(t))),j(""),h.firestore().collection("photos").doc(e).update({comments:O.arrayUnion({displayName:g,comment:b})})};return Object(s.jsx)(u.b,{children:Object(s.jsxs)("form",{method:"POST",onSubmit:function(n){return b.length>=1?x(n):n.preventDefault()},children:[Object(s.jsx)("input",{"aria-label":"Add a comment...",autoComplete:"off",type:"text",name:"add-comment",placeholder:"Add a comment",value:b,onChange:function(n){var e=n.target;return j(e.value)},ref:l}),Object(s.jsx)(u.d,{comment:b,type:"button",disabled:b.length<1,onClick:x,children:"Post"})]})})}},81:function(n,e,t){"use strict";t.r(e);var r,a,c,o,i,u,s,d,l,f,p,b,j,m=t(51),h=t.n(m),O=t(52),g=t(29),x=t(1),v=t(5),w=t(53),y=t(54),k=y.a.div(r||(r=Object(w.a)(["\n  display: flex;\n  margin: 0 auto;\n  width: 1080px;\n  border: 1.5px solid var(--lightColor);\n  background-color: white;\n  margin-top: 2rem;\n"]))),C=y.a.div(a||(a=Object(w.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 60% 1fr 1fr;\n  gap: 0px 0px;\n"]))),I=y.a.div(c||(c=Object(w.a)(["\n  display: flex;\n  text-align: center;\n  padding: 1rem;\n  flex-direction: column;\n"]))),L=y.a.div(o||(o=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  border-bottom: 1.5px solid var(--lightColor);\n  h1 {\n    margin-left: 1rem;\n    font-size: 0.85rem;\n    font-weight: 500;\n  }\n"]))),S=y.a.img(i||(i=Object(w.a)(["\n  width: 44px;\n  height: 44px;\n\n  overflow: hidden;\n  border-radius: 100%;\n"]))),z=y.a.div(u||(u=Object(w.a)(["\n  display: flex;\n  align-items: flex-start;\n  border-bottom: 1.5px solid var(--lightColor);\n  text-align: center;\n  h1 {\n    margin-top: 0.75rem;\n    margin-left: 1rem;\n    font-size: 0.85rem;\n    font-weight: 500;\n    margin-right: 0.8rem;\n  }\n  div {\n    margin-top: 0.75rem;\n    font-size: 0.85rem;\n    font-weight: 400;\n  }\n"]))),P=(y.a.div(s||(s=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  border-bottom: 1.5px solid var(--lightColor);\n  div {\n    margin-right: 1rem;\n  }\n"]))),y.a.div(d||(d=Object(w.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1rem;\n"]))),y.a.div(l||(l=Object(w.a)(["\n  color: var(--mediumColor);\n  margin-left: 0.75rem;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n"])))),N=(y.a.div(f||(f=Object(w.a)(["\n  padding: 1rem;\n  color: var(--mediumColor);\n"]))),y.a.div(p||(p=Object(w.a)(["\n  display: flex;\n  flex-direction: row;\n\n  a {\n    text-decoration: none;\n    display: flex;\n    color: inherit;\n  }\n  div {\n    color: var(--darkColor);\n  }\n"])))),D=y.a.div(b||(b=Object(w.a)(["\n  span {\n    margin-block: 0.5rem;\n  }\n"]))),F=y.a.div(j||(j=Object(w.a)(["\n  display: flex;\n  flex-direction: row;\n\n  div {\n    font-weight: 400;\n    margin-left: 0.5rem;\n    color: var(--darkColor);\n  }\n"]))),E=t(59),U=t(55),K=t(56),M=t.n(K),R=t(30),A=t(60),B=t(75),J=t(61),V=t(31),W=t(4);e.default=function(){var n=Object(v.h)().photoId,e=Object(x.useState)(null),t=Object(g.a)(e,2),r=t[0],a=t[1],c=Object(x.useState)(null),o=Object(g.a)(c,2),i=o[0],u=o[1],s=Object(x.useState)([]),d=Object(g.a)(s,2),l=d[0],f=d[1],p=Object(x.useState)([]),b=Object(g.a)(p,2),j=b[0],m=b[1],w=Object(x.useRef)(null),y=Object(x.useContext)(V.a).user;return Object(x.useEffect)((function(){function e(){return(e=Object(O.a)(h.a.mark((function e(){var t,r,c,o,i,s,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.c)(n);case 2:return t=e.sent,r=Object(g.a)(t,1),c=r[0],m(c.comments),e.next=8,Object(U.h)(c.userId);case 8:return o=e.sent,i=Object(g.a)(o,1),s=i[0],u(s),e.next=14,Promise.all(c.comments.map(function(){var n=Object(O.a)(h.a.mark((function n(e){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(U.f)(e.displayName);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 14:d=e.sent,f(d),a(Object(U.b)(c,y.uid));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&function(){e.apply(this,arguments)}()}),[n,y.uid]),Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(E.a,{}),Object(W.jsxs)(k,{children:[r?Object(W.jsx)("img",{src:r.imageSrc,alt:""}):Object(W.jsx)(M.a,{width:600,height:600}),Object(W.jsxs)(C,{children:[Object(W.jsxs)(L,{children:[i?Object(W.jsx)(R.b,{to:"/web-replica/p/".concat(i.username),children:Object(W.jsx)(S,{src:i.profilePic,alt:""})}):Object(W.jsx)(M.a,{width:44,height:44,circle:!0}),Object(W.jsx)("h1",{children:i&&r?Object(W.jsxs)(F,{children:[Object(W.jsx)("span",{children:i.username}),Object(W.jsx)("div",{children:r.caption})]}):Object(W.jsx)(M.a,{width:150,height:17})})]}),Object(W.jsx)(z,{children:Object(W.jsx)(I,{children:r&&i?j.map((function(n,e){return Object(W.jsxs)(N,{children:[Object(W.jsxs)(R.b,{to:"/web-replica/p/".concat(n.displayName),children:[l?Object(W.jsx)(S,{src:l[e],alt:""}):Object(W.jsx)(M.a,{width:44,height:44}),Object(W.jsx)("h1",{children:n.displayName})]}),Object(W.jsx)("div",{children:n.comment})]},e)})):Object(W.jsx)(D,{children:Object(W.jsx)(M.a,{width:410,height:44,count:5})})})}),r?Object(W.jsx)(A.a,{totalLikes:r.likes.length,docId:r.docId,likedPhoto:r.userLikedPhoto,handleFocus:function(){return w.current.focus()}}):null,r?Object(W.jsxs)(P,{children:[Object(B.a)(r.dateCreated,new Date).toUpperCase()," AGO"]}):Object(W.jsx)(M.a,{}),r?Object(W.jsx)(J.a,{docId:r.docId,comments:j,commentInput:w,setComments:m}):null]})]})]})}}}]);
//# sourceMappingURL=7.0167eaf4.chunk.js.map