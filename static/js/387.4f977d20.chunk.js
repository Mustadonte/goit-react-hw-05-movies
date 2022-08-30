"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{8312:function(n,t,r){r.d(t,{Jn:function(){return h},M1:function(){return f},Pg:function(){return l},WG:function(){return d},YQ:function(){return o},rj:function(){return p},tx:function(){return v}});var e=r(5861),a=r(4687),c=r.n(a),u=r(4569),s=r.n(u);s().defaults.baseURL="https://api.themoviedb.org/3";var i="799d796b985f1f6ed2e5b2e723499181",o="https://image.tmdb.org/t/p/w500",p=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s()("/trending/movie/day",{params:{api_key:i}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s()("movie/".concat(t,"?api_key=").concat(i));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s()("movie/".concat(t,"/credits?api_key=").concat(i));case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s()("movie/".concat(t,"/reviews?api_key=").concat(i));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s()("/search/movie",{params:{api_key:i,query:t}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s()("/trending/movie/day",{params:{api_key:i,page:t}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},4387:function(n,t,r){r.r(t),r.d(t,{default:function(){return d}});var e,a,c=r(885),u=r(8312),s=r(2791),i=r(6871),o=r(168),p=r(1993),l=p.Z.ul(e||(e=(0,o.Z)(["\n  width: 100%;\n  list-style: none;\n"]))),f=p.Z.li(a||(a=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 1fr 2fr;\n  justify-content: center;\n  align-items: center;\n\n  border-bottom: 1px black solid;\n  span {\n    grid-column: 1/3;\n  }\n  div {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin: 0;\n  }\n"]))),v=r(184),d=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1],a=(0,i.UO)().movieId;return(0,s.useEffect)((function(){(0,u.tx)(Number(a)).then((function(n){return e(n.results)}))}),[a]),(0,v.jsx)(v.Fragment,{children:r.length>0?(0,v.jsx)(l,{children:r.map((function(n){var t=n.author_details,r=t.avatar_path,e=t.name,a=t.rating,c=t.username,s=n.content;return(0,v.jsxs)(f,{children:[(0,v.jsx)("img",{src:"".concat(u.YQ).concat(r),alt:e,width:"150"}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h4",{children:e||"Unknown author"}),(0,v.jsxs)("p",{children:[(0,v.jsx)("b",{children:"Rating:"})," ",a]})]}),(0,v.jsx)("span",{children:s}),(0,v.jsx)("hr",{})]},c)}))}):(0,v.jsx)("p",{children:"There is no reviews"})})}}}]);
//# sourceMappingURL=387.4f977d20.chunk.js.map