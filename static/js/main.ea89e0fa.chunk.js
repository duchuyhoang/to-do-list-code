(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),o=n(9),a=n.n(o),r=(n(16),n(4)),l=n(7),s=n(3),u=(n(17),n(1)),d=i.a.memo((function(e){var t=e.addTodo,n=e.checkAll,i=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e;null===(e=i.current)||void 0===e||e.focus()}),[]),Object(u.jsxs)("div",{className:"d-flex form-container align-center",children:[Object(u.jsx)("input",{type:"checkbox",id:"checkAll"}),Object(u.jsx)("label",{htmlFor:"checkAll",className:"checkAll",onClick:n}),Object(u.jsx)("input",{className:"input-field",ref:i,onKeyPress:function(e){if("Enter"===e.key){var n=e.target.value.trim();""!==n&&t(n),i.current&&(i.current.value="")}}}),Object(u.jsx)("button",{className:"input-button",onClick:function(e){if(i.current){var n=i.current.value.trim();""!==n&&t(n),i.current&&(i.current.value="")}},children:"Add"})]})})),f=(n(19),n(20),n(11)),j=n(10),b=function(e){var t=e.list,n=e.setEditingId,c=e.editingId,i=e.deleteItem,o=e.editById,a=e.tickABox;return Object(u.jsx)("section",{className:"todo-list-container",children:t.map((function(e){return c===e.id?Object(u.jsx)("input",{type:"text",className:"todo-item",defaultValue:e.description,autoFocus:!0,onBlur:function(t){var c=t.currentTarget.value;o(e.id,c),n(-1)},onKeyPress:function(t){if("Enter"===t.key){var c=t.currentTarget.value;o(e.id,c),n(-1)}}},e.id):Object(u.jsxs)("div",{className:"todo-item",children:[Object(u.jsxs)("div",{className:"tick-container d-flex align-center",children:[Object(u.jsx)("input",{type:"checkbox",id:'"checkbox-"'.concat(e.id),checked:e.isCompleted,onChange:function(){a(e.id,!e.isCompleted),console.log("changed")}}),Object(u.jsx)("label",{htmlFor:'"checkbox-"'.concat(e.id),className:"label-checkbox"})]}),Object(u.jsx)("div",{className:"item-description ".concat(e.isCompleted?"item-complete":""),children:e.description}),Object(u.jsxs)("div",{className:"d-flex align-center icon-container",children:[Object(u.jsx)(j.a,{size:"25",onClick:function(){return n(e.id)}}),Object(u.jsx)(f.a,{size:"25",onClick:function(t){i(e.id)}})]})]},"edit-".concat(e.id))}))})},m=(n(21),function(e){var t=e.filterStatus,n=e.setFilterStatus,c=e.itemLeft;return Object(u.jsxs)("div",{className:"d-flex space-between mt-10",children:[Object(u.jsxs)("div",{className:"item-left d-flex align-center",children:[c," items left"]}),Object(u.jsxs)("div",{className:"d-flex space-between filter-button-container",children:[Object(u.jsx)("button",{className:"filter-button d-flex align-center\n          ".concat("All"===t&&"button-activate"," "),onClick:function(){n("All")},children:"All"}),Object(u.jsx)("button",{className:"filter-button d-flex align-center\n        ".concat("Activated"===t&&"button-activate","\n        "),onClick:function(){n("Activated")},children:"Activated"}),Object(u.jsx)("button",{className:"filter-button d-flex align-center\n          ".concat("Completed"===t&&"button-activate"," "),onClick:function(){n("Completed")},children:"Completed"})]})]})}),O=function(e){var t=Object(c.useState)(e),n=Object(s.a)(t,2),i=n[0];n[1];Object(c.useEffect)((function(){}),[]);return[function(){var e=localStorage.getItem(i);return"string"===typeof e?JSON.parse(e):[]},function(e){localStorage.setItem(i,JSON.stringify(e))}]};function x(){var e=Object(c.useState)(-1),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)("All"),a=Object(s.a)(o,2),f=a[0],j=a[1],x=Object(c.useState)(!1),p=Object(s.a)(x,2),v=p[0],h=p[1],g=O("todo"),C=Object(s.a)(g,2),k=C[0],N=C[1],A=Object(c.useState)([]),I=Object(s.a)(A,2),S=I[0],y=I[1];Object(c.useEffect)((function(){N(S)}),[S]),Object(c.useEffect)((function(){y(k())}),[]);var E=Object(c.useCallback)((function(e){y([].concat(Object(l.a)(S),[{id:(new Date).getTime(),description:e,isCompleted:!1}]))}),[S]),F=function(e,t){switch(t){case"All":return e;case"Activated":return e.filter((function(e){return!1===e.isCompleted}));case"Completed":return e.filter((function(e){return!0===e.isCompleted}));default:return e}};return Object(u.jsxs)("section",{className:"todo-container",children:[Object(u.jsx)("h1",{children:"What's is the Plan for Today?"}),Object(u.jsx)(d,{addTodo:E,checkAll:function(){y(v?S.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{isCompleted:!1})})):S.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{isCompleted:!0})}))),h((function(e){return!e}))}}),Object(u.jsx)(b,{list:F(S,f),editingId:n,setEditingId:function(e){i(e)},editById:function(e,t){var n=S.findIndex((function(t){return t.id===e}));if(Number.isInteger(n)){var c=Object(l.a)(S);c.splice(n,1,{id:S[n].id,description:t,isCompleted:S[n].isCompleted}),y(c)}},deleteItem:function(e){y(S.filter((function(t){return t.id!==e})))},tickABox:function(e,t){var n=S.findIndex((function(t){return t.id===e}));if(Number.isInteger(n)){var c=Object(l.a)(S);c.splice(n,1,Object(r.a)(Object(r.a)({},S[n]),{},{isCompleted:t})),y(c)}}}),Object(u.jsx)(m,{filterStatus:f,setFilterStatus:j,itemLeft:F(S,"Activated").length})]})}n(22);var p=function(){return Object(u.jsx)(x,{})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),v()}],[[23,1,2]]]);
//# sourceMappingURL=main.ea89e0fa.chunk.js.map