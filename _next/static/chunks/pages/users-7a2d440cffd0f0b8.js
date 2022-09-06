(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{3882:function(a,b,c){"use strict";function d(a,b){if(b.length<a)throw TypeError(a+" argument"+(a>1?"s":"")+" required, but only "+b.length+" present")}c.d(b,{Z:function(){return d}})},1743:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(9013),e=c(3882);function f(a){(0,e.Z)(1,arguments);var b=(0,d.Z)(a);return b.setHours(0,0,0,0),b}function g(a,b){(0,e.Z)(2,arguments);var c=f(a),d=f(b);return c.getTime()===d.getTime()}},9013:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(3882);function e(a){(0,d.Z)(1,arguments);var b=Object.prototype.toString.call(a);return a instanceof Date||"object"==typeof a&&"[object Date]"===b?new Date(a.getTime()):"number"==typeof a||"[object Number]"===b?new Date(a):(("string"==typeof a||"[object String]"===b)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},4764:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return c(345)}])},4157:function(a,b,c){"use strict";var d=c(5893),e=function(a){return(0,d.jsx)("h1",{className:"text-xl font-black",children:a.title})};b.Z=e},6666:function(a,b,c){"use strict";c.d(b,{Z:function(){return o}});var d=c(5893),e=c(4300),f=c(1163),g=c(7294),h=function(){var a=(0,e.f)().login,b=(0,f.useRouter)();(0,g.useEffect)(function(){a.isAuthed&&b.isReady&&!a.isLogin&&b.push("/login")},[a.isAuthed,a.isLogin,b])},i=c(1664),j=c.n(i),k=c(3241),l=function(){var a=(0,e.f)().login,b=(0,f.useRouter)(),c=Object.values(k.Z).filter(function(b){return b.allowRoleList.some(function(b){return b.id===a.user.role.id})});return(0,d.jsx)("div",{className:"fixed bottom-0 h-12 w-full bg-slate-700 px-2 pb-1 text-center md:relative md:h-full md:w-1/6 md:pt-4",children:(0,d.jsx)("div",{className:"relative flex justify-between overflow-x-auto md:block",children:c.map(function(c,e){var f,g;return(0,d.jsx)("div",{className:"relative w-1/4 md:w-full",children:(0,d.jsx)(j(),{href:c.href(a.user),children:(0,d.jsxs)("a",{className:"flex flex-col items-center whitespace-nowrap p-2 transition duration-100 ease-in-out md:flex-row ".concat((f=c.href(a.user.id),g=c.path,b.asPath===f|| void 0!==g&&b.asPath.startsWith(g)?"hover:bg-gray-200 bg-white text-gray-900":"hover:bg-slate-600 text-slate-100")),"data-mdb-ripple":"true","data-mdb-ripple-color":"dark",children:[(0,d.jsx)("div",{className:"h-5 w-5 md:mr-2",children:(0,d.jsx)(c.icon,{})}),(0,d.jsx)("div",{className:"text-xs md:text-base",children:c.text})]})})},e)})})})},m=l,n=function(a){var b=a.children,c=(0,e.f)().login;return h(),(0,d.jsx)(d.Fragment,{children:c.isLogin&&(0,d.jsx)("div",{className:"h-screen w-screen bg-white",children:(0,d.jsxs)("div",{className:"flex h-full w-full flex-col justify-between md:flex-row md:justify-start",children:[(0,d.jsx)(m,{}),(0,d.jsx)("div",{className:"box-content flex flex-col overflow-y-auto md:w-5/6",children:(0,d.jsx)("div",{className:"mb-16 px-4 pt-6 md:mb-0",children:b})})]})})})},o=n},2393:function(a,b,c){"use strict";c.d(b,{Y2:function(){return h},"_Y":function(){return i},oe:function(){return g},t1:function(){return j},t3:function(){return k},xz:function(){return l}});var d=c(1743),e=c(8423),f={users:[{id:"admin",name:"Adminユーザ",role:e.Z.ADMIN},{id:"test",name:"テストユーザ",role:e.Z.CLIENT},{id:"example",name:"サンプルユーザ",role:e.Z.CLIENT},],timeRecords:[{userId:"test",date:new Date("2022-8-1"),startTime:"09:00",endTime:"17:00",note:"私用のため早退"},{userId:"test",date:new Date("2022-8-4"),startTime:"09:00",endTime:"18:00"},{userId:"test",date:new Date("2022-8-5"),startTime:"09:00",endTime:"18:00"},]},g=function(a){return f.users.find(function(b){return b.id===a})},h=function(){return f.users},i=function(a){f.users.push(a)},j=function(a){return f.timeRecords.filter(function(b){return b.userId===a})},k=function(a,b){return f.timeRecords.find(function(c){return c.userId===a&&(0,d.Z)(c.date,b)})},l=function(a){var b=k(a.userId,a.date);b?(b.startTime=a.startTime,b.endTime=a.endTime):f.timeRecords.push(a)}},345:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(1664),f=c.n(e),g=c(7294),h=c(4157),i=c(6666),j=c(4300),k=c(2393),l=function(){var a=(0,g.useState)([]),b=a[0],c=a[1],e=(0,j.f)().login;return(0,g.useEffect)(function(){e.isLogin&&c((0,k.Y2)())},[e.isLogin]),(0,d.jsx)(i.Z,{children:(0,d.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,d.jsx)(h.Z,{title:"ユーザ一覧"}),b.length>0&&(0,d.jsx)("div",{className:"flex flex-col gap-2 text-base",children:b.map(function(a){return(0,d.jsx)("div",{className:"flex border-b",children:(0,d.jsx)(f(),{href:"/user/".concat(a.id),children:(0,d.jsxs)("a",{className:"flex-1",children:[a.name,"(",a.id,")"]})})},a.id)})})]})})};b.default=l}},function(a){a.O(0,[664,774,888,179],function(){var b;return a(a.s=4764)}),_N_E=a.O()}])