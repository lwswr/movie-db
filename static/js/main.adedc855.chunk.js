(this["webpackJsonpmovie-db"]=this["webpackJsonpmovie-db"]||[]).push([[0],{26:function(e,n,t){e.exports=t(49)},49:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(21),c=t.n(o),i=t(7),u=t.n(i),l=t(22),d=t(4),s=t(5),p=t(1),f=t(2);function b(){var e=Object(p.a)(["\n  font-size: 25px;\n  padding: 10px 20px;\n  margin: 5px 10px;\n  border: 2px solid white;\n  border-radius: 10px;\n  background: none;\n  color: white;\n  transition: 0.2s;\n  :hover {\n    background: white;\n    color: rgb(66, 76, 84);\n  }\n"]);return b=function(){return e},e}function m(){var e=Object(p.a)(["\n  width: 150px;\n  font-size: 25px;\n  padding: 10px 20px;\n  margin: 5px 10px;\n  background: none;\n  border-bottom: 2px solid white;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  color: white;\n  :focus {\n    outline-width: 0;\n  }\n"]);return m=function(){return e},e}function g(){var e=Object(p.a)(["\n  width: 300px;\n  font-size: 25px;\n  padding: 10px 20px;\n  margin: 5px 10px;\n  background: none;\n  border-bottom: 2px solid white;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  color: white;\n  :focus {\n    outline-width: 0;\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);return v=function(){return e},e}var x=f.a.form(v()),h=f.a.input(g()),j=f.a.select(m()),w=f.a.button(b()),O=function(e){var n=e.submit,t=Object(r.useState)(""),o=Object(d.a)(t,2),c=o[0],i=o[1],u=Object(r.useState)("movie"),l=Object(d.a)(u,2),s=l[0],p=l[1];return a.a.createElement(x,{action:"submit",onSubmit:function(e){e.preventDefault(),null!==c&&(n({search:c,mediaType:s}),i(""))}},a.a.createElement(h,{type:"text",placeholder:"search...",value:c,onChange:function(e){return i(e.target.value)}}),a.a.createElement(j,{onChange:function(e){return p(e.target.value)}},a.a.createElement("option",{value:"film"},"Film"),a.a.createElement("option",{value:"series"},"Series")),a.a.createElement(w,{type:"submit"},"Search"))};function y(){var e=Object(p.a)(["\n  font-size: 12px;\n"]);return y=function(){return e},e}function E(){var e=Object(p.a)(["\n  height: 300px;\n  width: 200px;\n"]);return E=function(){return e},e}function k(){var e=Object(p.a)(["\n  list-style: none;\n  flex: 0 0 18%;\n  margin: 20px 20px;\n  padding: 20px 20px;\n  background: white;\n  border-radius: 8px;\n"]);return k=function(){return e},e}var P=f.a.li(k()),S=f.a.img(E()),z=f.a.div(y()),C=function(e){var n=e.movie,t=e.onClick;return a.a.createElement(P,{onClick:function(){return t(n.imdbID)}},a.a.createElement(S,{src:n.Poster,alt:"#"}),a.a.createElement(z,null,n.Title))};function R(){var e=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return R=function(){return e},e}var M=f.a.div(R()),D=function(e){var n=e.movies,t=e.sendSelectedID;return a.a.createElement(M,null,n.map((function(e){return a.a.createElement(C,{key:e.imdbID,movie:e,onClick:function(e){return t(e)}})})))};function I(){var e=Object(p.a)(["\n  padding: 10px;\n  height: 450px;\n  width: 300;\n"]);return I=function(){return e},e}function T(){var e=Object(p.a)(["\n  padding: 10px;\n  color: rgb(66, 76, 84);\n  font-size: 15px;\n"]);return T=function(){return e},e}function B(){var e=Object(p.a)(["\n  padding: 10px;\n  color: rgb(66, 76, 84);\n  font-size: 15px;\n"]);return B=function(){return e},e}function F(){var e=Object(p.a)(["\n  padding: 10px;\n  color: rgb(66, 76, 84);\n  font-size: 35px;\n"]);return F=function(){return e},e}function J(){var e=Object(p.a)(["\n  font-size: 25px;\n  padding: 10px 20px;\n  margin: 5px 10px;\n  border: 2px solid white;\n  border-radius: 10px;\n  background: none;\n  color: white;\n  transition: 0.2s;\n  :hover {\n    background: white;\n    color: rgb(66, 76, 84);\n  }\n"]);return J=function(){return e},e}function L(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n  color: rgb(66, 76, 84);\n  padding: 20px;\n  border-radius: 25px;\n  width: 60%;\n"]);return L=function(){return e},e}function V(){var e=Object(p.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: "Verdana";\n  background: rgb(66, 76, 84);\n  height: 100%;\n  width: auto;\n']);return V=function(){return e},e}var N=f.a.div(V()),q=f.a.div(L()),A=f.a.button(J()),G=f.a.div(F()),H=f.a.div(B()),K=f.a.div(T()),Q=f.a.img(I()),U=function(e){var n=e.selected,t=e.backClick;return n?r.createElement(N,null,r.createElement(q,null,r.createElement(G,null,n.Title),r.createElement(H,null,n.Released),r.createElement(K,null,n.Plot),r.createElement(Q,{src:n.Poster,alt:""})),r.createElement(A,{onClick:function(){return t(!1)}},"Back")):null},W=t(9),X=t.n(W),Y=function(e,n,t){return X.a.get("https://www.omdbapi.com/?apikey=13d6c617&s=".concat(e,"&page=").concat(n,"&type=").concat(t)).then((function(e){return e.data}))},Z=function(e){return X.a.get("https://www.omdbapi.com/?apikey=13d6c617&i=".concat(e)).then((function(e){return e.data}))};function $(){var e=Object(p.a)(["\n  font-size: 25px;\n  padding: 10px 20px;\n  margin: 5px 10px;\n  border: 2px solid white;\n  border-radius: 10px;\n  background: none;\n  color: white;\n  transition: 0.2s;\n  :hover {\n    background: white;\n    color: rgb(66, 76, 84);\n  }\n"]);return $=function(){return e},e}function _(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]);return _=function(){return e},e}function ee(){var e=Object(p.a)(["\n  color: white;\n  text-align: center;\n"]);return ee=function(){return e},e}function ne(){var e=Object(p.a)(["\n  color: white;\n  text-align: center;\n  font-size: 50px;\n  padding: 20px;\n"]);return ne=function(){return e},e}function te(){var e=Object(p.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: "Verdana";\n  background: rgb(66, 76, 84);\n  height: 100%;\n  width: auto;\n  padding: 0;\n  margin: 0;\n']);return te=function(){return e},e}var re=f.a.div(te()),ae=f.a.div(ne()),oe=f.a.div(ee()),ce=f.a.div(_()),ie=f.a.button($()),ue={search:"Lord of the Rings",result:void 0,page:1,selectedMovie:void 0},le=function(e,n){switch(null===n||void 0===n?void 0:n.type){case"search set":return Object(s.a)(Object(s.a)({},e),{},{search:n.payload.search});case"movie response set":return Object(s.a)(Object(s.a)({},e),{},{result:n.movieResPayload});case"page number changed":return Object(s.a)(Object(s.a)({},e),{},{page:n.pagePayload.page});case"select movie response set":return Object(s.a)(Object(s.a)({},e),{},{selectedMovie:n.selMovieResPayload})}};var de=function(){var e=Object(r.useReducer)(le,ue),n=Object(d.a)(e,2),t=n[0],o=n[1],c=a.a.useState(""),i=Object(d.a)(c,2),s=i[0],p=i[1],f=a.a.useState(!1),b=Object(d.a)(f,2),m=b[0],g=b[1],v=a.a.useState("movie"),x=Object(d.a)(v,2),h=x[0],j=x[1],w=a.a.useState(!1),y=Object(d.a)(w,2),E=y[0],k=y[1];return Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(){var n,r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([Y(t.search,t.page,h),Z(s)]);case 3:n=e.sent,r=Object(d.a)(n,2),a=r[0],c=r[1],o({type:"movie response set",movieResPayload:a}),o({type:"select movie response set",selMovieResPayload:c}),console.log(c),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),k(!0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}null!==t.search&&function(){e.apply(this,arguments)}()}),[t.search,t.page,s,h]),t.result?a.a.createElement(re,null,a.a.createElement(ae,null,"Movie Database"),m?a.a.createElement(U,{selected:t.selectedMovie,backClick:function(e){g(e)}}):a.a.createElement("div",null,a.a.createElement(O,{submit:function(e){var n=e.search,t=e.mediaType;o({type:"search set",payload:{search:n}}),o({type:"page number changed",pagePayload:{page:1}}),j(t)}}),E?a.a.createElement("div",null,"Failed to Load"):a.a.createElement("div",null,a.a.createElement(oe,null,t.result.totalResults,' results for "',t.search,'"'),a.a.createElement(D,{movies:t.result.Search,sendSelectedID:function(e){p(e),g(!0)}})),a.a.createElement(ce,null,a.a.createElement(ie,{onClick:function(){t.page>=1&&o({type:"page number changed",pagePayload:{page:t.page-1}})}},"Prev"),a.a.createElement(ie,{onClick:function(){o({type:"page number changed",pagePayload:{page:t.page+1}})}},"Next"),a.a.createElement("p",null," page ",t.page)))):null};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(de,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.adedc855.chunk.js.map