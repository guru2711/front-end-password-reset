(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var r=s(0),c=s(19),j=s.n(c),n=(s(25),s(26),s(5)),a=s(20),b=s.n(a),o=s(1);var l=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),s=t[0],c=t[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();try{""===s?alert("please enter your email Id"):(b.a.post("http://password-reset-flow.herokuapp.com/",{emailid:s}),alert(s),console.log(s))}catch(t){console.log(t)}},children:[Object(o.jsx)("h1",{children:"Password reset Flow"}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:" Enter your Email ID to reset Your Password "}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"Email ID"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"email",placeholder:"enter your email address",onChange:function(e){c(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"submit",children:"Send"})]})})},i=s(2);function O(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),s=t[0],c=t[1],j=Object(r.useState)(""),a=Object(n.a)(j,2),b=a[0],l=a[1],i=Object(r.useState)(""),O=Object(n.a)(i,2),d=O[0],u=O[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===b||""===d||""===s?alert("please enter password"):b===d?console.log(s+" "+b):alert("please Do write correct credentials")},children:[Object(o.jsx)("h1",{children:"Password Reset"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"EmailId"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"email",placeholder:"enter your email address",onChange:function(e){c(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"password",name:"pass",placeholder:"enter your password",autoComplete:"on",onChange:function(e){l(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"confirm  Password"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"password",name:"pass2",placeholder:"confirm password",autoComplete:"on",onChange:function(e){u(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"submit",children:"reset"})]})})}var d=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",element:Object(o.jsx)(l,{})}),Object(o.jsx)(i.a,{path:"/passwordreset",element:Object(o.jsx)(O,{})})]})})},u=s(10);j.a.render(Object(o.jsx)(u.a,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.9e93cffa.chunk.js.map