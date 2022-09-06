(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{1927:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]",function(){return c(1176)}])},2165:function(a,b,c){"use strict";c.d(b,{Z:function(){return o}});var d=c(1799),e=c(9396),f=c(5893),g=c(7294),h=c(7536),i=c(4300),j=c(2393),k=c(9515),l=function(a){return(0,f.jsxs)("div",{className:"flex flex-col",children:[(0,f.jsx)("label",{htmlFor:"id",className:"block text-xs font-medium text-gray-500",children:"備考"}),(0,f.jsx)("input",(0,e.Z)((0,d.Z)({type:"text",id:"id",maxLength:200,className:"w-full flex-1 border-b border-dotted py-1 focus:border-b focus:border-solid focus:border-slate-500 focus:outline-none"},a.register("note")),{placeholder:"example note"})),a.errors.note&&(0,f.jsx)("span",{role:"alert",className:"block text-xs font-medium text-red-500",children:a.errors.note.message})]})},m=c(6181),n=c(6377),o=function(a){var b=(0,i.f)().login,c=(0,g.useState)(void 0),o=c[0],p=c[1],q=(0,h.cI)({defaultValues:{startTime:"09:00",endTime:"18:00",note:""}}),r=q.register,s=q.handleSubmit,t=q.setValue,u=q.setError,v=q.clearErrors,w=q.getValues,x=q.formState.errors,y=void 0!==o,z=function(c){var d={userId:a.user.id,date:a.currentDate,startTime:c.startTime,endTime:c.endTime,note:c.note};(0,j.xz)(d),p((0,j.t3)(b.user.id,a.currentDate)),(0,n.I)("".concat(y?"更新":"登録","が完了しました。")),void 0!==a.handleSubmitCallback&&a.handleSubmitCallback()},A=(0,k.w)(0,47).map(function(a){var b,c=!Number.isInteger(a/2);return"".concat(String(b=Math.floor(a/2)).padStart(2,"0"),":").concat(c?"30":"00")}),B="業務開始には業務終了よりも前の時間を入力してください。",C=function(a){if(w("startTime")>=w("endTime"))return a||u("startTime",{type:"custom",message:B}),!a||B;v(["startTime","endTime"])};return(0,g.useEffect)(function(){var c=(0,j.t3)(b.user.id,a.currentDate);p(c),void 0!==c&&(t("startTime",c.startTime),t("endTime",c.endTime),t("note",c.note))},[b.user.id,a.currentDate,t]),(0,f.jsxs)("form",{className:"flex flex-col gap-6",onSubmit:s(z),children:[(0,f.jsxs)("div",{className:"flex w-full flex-col gap-2",children:[(0,f.jsxs)("div",{className:"flex gap-3",children:[(0,f.jsxs)("div",{className:"flex-1",children:[(0,f.jsx)("label",{htmlFor:"start-time",className:"block text-xs font-medium text-gray-500",children:"業務開始"}),(0,f.jsx)("select",(0,e.Z)((0,d.Z)({id:"start-time",className:"w-full border-b border-dotted focus:border-solid focus:border-slate-500 focus:outline-none"},r("startTime",{validate:{fromToValidate:function(){return C(!0)}}})),{children:A.map(function(a,b){return(0,f.jsx)("option",{children:a},b)})})),x.startTime&&(0,f.jsx)("span",{role:"alert",className:"block text-xs font-medium text-red-500",children:x.startTime.message})]}),(0,f.jsxs)("div",{className:"flex-1",children:[(0,f.jsx)("label",{htmlFor:"end-time",className:"block text-xs font-medium text-gray-500",children:"業務終了"}),(0,f.jsx)("select",(0,e.Z)((0,d.Z)({id:"end-time",className:"w-full border-b border-dotted focus:border-solid focus:border-slate-500 focus:outline-none"},r("endTime",{validate:{fromToValidate:function(){return C(!1)}}})),{children:A.map(function(a,b){return(0,f.jsx)("option",{value:a,children:a},b)})})),x.endTime&&(0,f.jsx)("span",{role:"alert",className:"block text-xs font-medium text-red-500",children:x.endTime.message})]})]}),(0,f.jsx)("div",{children:(0,f.jsx)(l,{register:r,errors:x})})]}),(0,f.jsx)(m.Z,{text:y?"更新":"登録"})]})}},6181:function(a,b,c){"use strict";var d=c(5893),e=function(a){return(0,d.jsx)("input",{className:"cursor-pointer rounded bg-slate-500 p-1 text-xl font-bold text-white",type:"submit",value:a.text})};b.Z=e},4157:function(a,b,c){"use strict";var d=c(5893),e=function(a){return(0,d.jsx)("h1",{className:"text-xl font-black",children:a.title})};b.Z=e},6666:function(a,b,c){"use strict";c.d(b,{Z:function(){return o}});var d=c(5893),e=c(4300),f=c(1163),g=c(7294),h=function(){var a=(0,e.f)().login,b=(0,f.useRouter)();(0,g.useEffect)(function(){a.isAuthed&&b.isReady&&!a.isLogin&&b.push("/login")},[a.isAuthed,a.isLogin,b])},i=c(1664),j=c.n(i),k=c(3241),l=function(){var a=(0,e.f)().login,b=(0,f.useRouter)(),c=Object.values(k.Z).filter(function(b){return b.allowRoleList.some(function(b){return b.id===a.user.role.id})});return(0,d.jsx)("div",{className:"fixed bottom-0 h-12 w-full bg-slate-700 px-2 pb-1 text-center md:relative md:h-full md:w-1/6 md:pt-4",children:(0,d.jsx)("div",{className:"relative flex justify-between overflow-x-auto md:block",children:c.map(function(c,e){var f,g;return(0,d.jsx)("div",{className:"relative w-1/4 md:w-full",children:(0,d.jsx)(j(),{href:c.href(a.user),children:(0,d.jsxs)("a",{className:"flex flex-col items-center whitespace-nowrap p-2 transition duration-100 ease-in-out md:flex-row ".concat((f=c.href(a.user.id),g=c.path,b.asPath===f|| void 0!==g&&b.asPath.startsWith(g)?"hover:bg-gray-200 bg-white text-gray-900":"hover:bg-slate-600 text-slate-100")),"data-mdb-ripple":"true","data-mdb-ripple-color":"dark",children:[(0,d.jsx)("div",{className:"h-5 w-5 md:mr-2",children:(0,d.jsx)(c.icon,{})}),(0,d.jsx)("div",{className:"text-xs md:text-base",children:c.text})]})})},e)})})})},m=l,n=function(a){var b=a.children,c=(0,e.f)().login;return h(),(0,d.jsx)(d.Fragment,{children:c.isLogin&&(0,d.jsx)("div",{className:"h-screen w-screen bg-white",children:(0,d.jsxs)("div",{className:"flex h-full w-full flex-col justify-between md:flex-row md:justify-start",children:[(0,d.jsx)(m,{}),(0,d.jsx)("div",{className:"box-content flex flex-col overflow-y-auto md:w-5/6",children:(0,d.jsx)("div",{className:"mb-16 px-4 pt-6 md:mb-0",children:b})})]})})})},o=n},2393:function(a,b,c){"use strict";c.d(b,{Y2:function(){return h},"_Y":function(){return i},oe:function(){return g},t1:function(){return j},t3:function(){return k},xz:function(){return l}});var d=c(1743),e=c(8423),f={users:[{id:"admin",name:"Adminユーザ",role:e.Z.ADMIN},{id:"test",name:"テストユーザ",role:e.Z.CLIENT},{id:"example",name:"サンプルユーザ",role:e.Z.CLIENT},],timeRecords:[{userId:"test",date:new Date("2022-8-1"),startTime:"09:00",endTime:"17:00",note:"私用のため早退"},{userId:"test",date:new Date("2022-8-4"),startTime:"09:00",endTime:"18:00"},{userId:"test",date:new Date("2022-8-5"),startTime:"09:00",endTime:"18:00"},]},g=function(a){return f.users.find(function(b){return b.id===a})},h=function(){return f.users},i=function(a){f.users.push(a)},j=function(a){return f.timeRecords.filter(function(b){return b.userId===a})},k=function(a,b){return f.timeRecords.find(function(c){return c.userId===a&&(0,d.Z)(c.date,b)})},l=function(a){var b=k(a.userId,a.date);b?(b.startTime=a.startTime,b.endTime=a.endTime):f.timeRecords.push(a)}},9515:function(a,b,c){"use strict";c.d(b,{w:function(){return d}});var d=function(a,b){return Array.from({length:b-a+1},function(b,c){return c+a})}},1412:function(a,b,c){"use strict";c.d(b,{Ak:function(){return i},WP:function(){return h},mC:function(){return f},tl:function(){return g}});var d=c(8085),e=c(944),f=function(a){return void 0===a?"":(0,d.Z)(a,"yyyy年MM月dd日",{locale:e.Z})},g=function(a){return void 0===a?"":(0,d.Z)(a,"yyyy年MM月",{locale:e.Z})},h=function(a){return void 0===a?"":(0,d.Z)(a,"d日(E)",{locale:e.Z})},i=function(a){return void 0===a?"":(0,d.Z)(a,"HH:mm:ss",{locale:e.Z})}},1176:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return D}});var d=c(5893),e=c(1163),f=c(7294),g=c(4157),h=function(a){return(0,d.jsx)(g.Z,{title:"".concat(a.user.name,"(").concat(a.user.id,")の勤怠状況")})};let i=f.forwardRef(function(a,b){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:b},a),f.createElement("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}))});var j=i;let k=f.forwardRef(function(a,b){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:b},a),f.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}))});var l=k,m=c(9013),n=c(3882),o=c(3946),p=c(9515),q=c(1412),r=c(2165);let s=f.forwardRef(function(a,b){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:b},a),f.createElement("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}))});var t=s,u=c(1743),v=function(a){var b,c,e,f,g=function(a,b){(0,n.Z)(2,arguments);var c=(0,m.Z)(a),d=(0,o.Z)(b);return c.setDate(d),c}(new Date(a.currentDate),a.day),h=(0,u.Z)(g,new Date)?" bg-slate-200":"";return(0,d.jsxs)("div",{className:"flex border-b".concat(h),children:[(0,d.jsx)("div",{className:"basis-8",children:(0,d.jsx)("button",{type:"button",title:"edit",className:"flex h-6 w-6 items-center justify-center rounded bg-slate-500 text-white",onClick:function(){return a.handleEdit(g)},children:(0,d.jsx)(t,{className:"h-4 w-4"})})}),(0,d.jsx)("div",{className:"basis-20",children:(0,q.WP)(g)}),(0,d.jsx)("div",{className:"flex basis-28",children:(0,d.jsxs)("span",{children:[null===(b=a.timeRecord)|| void 0===b?void 0:b.startTime,(null===(c=a.timeRecord)|| void 0===c?void 0:c.startTime)&&" - ",null===(e=a.timeRecord)|| void 0===e?void 0:e.endTime]})}),(0,d.jsx)("div",{className:"flex-1 break-all",children:null===(f=a.timeRecord)|| void 0===f?void 0:f.note})]},a.day)};let w=f.forwardRef(function(a,b){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:b},a),f.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))});var x=w,y=function(a){var b=function(){a.setShow(!1)};return(0,d.jsx)(d.Fragment,{children:a.isShow&&(0,d.jsx)("div",{className:"fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black/50",children:(0,d.jsxs)("div",{className:"flex w-full flex-col rounded bg-white shadow md:w-1/2",children:[(0,d.jsx)("div",{className:"flex justify-end text-slate-600",children:(0,d.jsx)(x,{className:"m-1 h-6 w-6 cursor-pointer",onClick:b})}),(0,d.jsx)("div",{className:"h-full w-full p-4",children:a.children})]})})})},z=function(a){var b,c=(0,f.useState)(new Date),e=c[0],h=c[1],i=(0,f.useState)(!1),k=i[0],s=i[1],t=(0,f.useState)(new Date),u=t[0],w=t[1],x=null===(b=a.timeRecordList)|| void 0===b?void 0:b.filter(function(a){return function(a,b){(0,n.Z)(2,arguments);var c=(0,m.Z)(a),d=(0,m.Z)(b);return c.getFullYear()===d.getFullYear()}(e,a.date)&&function(a,b){(0,n.Z)(2,arguments);var c=(0,m.Z)(a),d=(0,m.Z)(b);return c.getFullYear()===d.getFullYear()&&c.getMonth()===d.getMonth()}(e,a.date)}),z=(function(a){(0,n.Z)(1,arguments);var b=(0,m.Z)(a),c=b.getMonth();return b.setFullYear(b.getFullYear(),c+1,0),b.setHours(23,59,59,999),b})(e).getDate(),A=(0,p.w)(1,z).map(function(a){return{timeRecord:x.find(function(b){return b.date.getDate()===a}),day:a}}),B=function(a){h(function(a,b){(0,n.Z)(2,arguments);var c=(0,o.Z)(b);return function(a,b){(0,n.Z)(2,arguments);var c=(0,m.Z)(a),d=(0,o.Z)(b);if(isNaN(d))return new Date(NaN);if(!d)return c;var e=c.getDate(),f=new Date(c.getTime());return(f.setMonth(c.getMonth()+d+1,0),e>=f.getDate())?f:(c.setFullYear(f.getFullYear(),f.getMonth(),e),c)}(a,-c)}(e,a))},C=function(){h(new Date)},D=function(a){w(a),s(!0)},E=function(){a.handleReFetch(),s(!1)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(y,{isShow:k,setShow:s,children:[(0,d.jsx)(g.Z,{title:"".concat((0,q.mC)(u),"の勤怠")}),(0,d.jsx)(r.Z,{user:a.user,currentDate:u,handleSubmitCallback:E})]}),(0,d.jsxs)("div",{className:"flex select-none flex-col gap-2",children:[(0,d.jsxs)("div",{className:"flex gap-2",children:[(0,d.jsx)(j,{className:"flex h-6 w-6 cursor-pointer items-center justify-center rounded bg-slate-500 text-white",onClick:function(){return B(1)}}),(0,d.jsx)("div",{className:"w-24 text-center font-bold",children:(0,q.tl)(e)}),(0,d.jsx)(l,{className:"flex h-6 w-6 cursor-pointer items-center justify-center rounded bg-slate-500 text-white",onClick:function(){return B(-1)}}),(0,d.jsx)("button",{type:"button",className:"flex h-6 items-center justify-center rounded bg-slate-500 px-2 text-white",onClick:function(){return C()},children:"当月"})]}),(0,d.jsx)("div",{className:"flex flex-col",children:A.map(function(a){return(0,d.jsx)(v,{currentDate:e,day:a.day,timeRecord:a.timeRecord,handleEdit:function(a){return D(a)}},a.day)})})]})]})},A=c(6666),B=c(4300),C=c(2393),D=function(){var a=(0,B.f)(),b=a.login,c=a.isAdmin,g=(0,f.useState)(),i=g[0],j=g[1],k=(0,f.useState)([]),l=k[0],m=k[1],n=(0,e.useRouter)(),o=n.query.id;(0,f.useEffect)(function(){if(void 0!==o&&b.isLogin){if("string"!=typeof o||0===o.length|| !c&&o!==b.user.id){n.push("/error");return}var a=(0,C.oe)(o);if(void 0===a){n.push("/error");return}j(a),m((0,C.t1)(a.id))}},[o,c,b.isLogin,b.user.id,n]);var p=function(){void 0!==i&&m((0,C.t1)(i.id))};return(0,d.jsx)(A.Z,{children:void 0!==i&&(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"flex h-full flex-col gap-4",children:[(0,d.jsx)(h,{user:i}),(0,d.jsx)(z,{user:i,timeRecordList:l,handleReFetch:p})]})})})}}},function(a){a.O(0,[664,894,771,774,888,179],function(){var b;return a(a.s=1927)}),_N_E=a.O()}])