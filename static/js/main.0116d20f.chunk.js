(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/B VOC.c435443f.mp3"},function(e,t,n){e.exports=n.p+"static/media/DRUMS.e3e2854f.mp3"},function(e,t,n){e.exports=n.p+"static/media/HE HE VOC.4db5581d.mp3"},function(e,t,n){e.exports=n.p+"static/media/HIGH VOC.d02c4164.mp3"},function(e,t,n){e.exports=n.p+"static/media/JIBRISH.11a9984b.mp3"},function(e,t,n){e.exports=n.p+"static/media/LEAD 1.dadfe26a.mp3"},function(e,t,n){e.exports=n.p+"static/media/UUHO VOC.b68f64b5.mp3"},function(e,t,n){e.exports=n.p+"static/media/_tambourine_shake_higher.06c14ace.mp3"},function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),l=n.n(r),u=(n(20),n(21),n(3)),o=(n(22),n(2)),i=function(e){var t=Object(a.useState)(c.a.createElement(o.e,null)),n=Object(u.a)(t,2),r=n[0],l=n[1],i=Object(a.useRef)(),m=Object(a.useRef)();return c.a.createElement("div",null,c.a.createElement("div",{className:"flex justify-center items-center"},c.a.createElement("div",{className:"flex justify-end items-center br1 ma1 w-75 h2 bg-".concat(e.color," shadow-3 o-60")},c.a.createElement("audio",{ref:i,id:e.id},c.a.createElement("source",{src:e.track,type:"audio/mpeg"}),"Your browser does not support the audio element."),c.a.createElement("div",{className:"line",id:e.id+"l"})),c.a.createElement("button",{ref:m,value:"Mute",className:"near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma1 br2 pa1 shadow-5",onClick:function(){i.current.muted?(i.current.muted=!1,m.current.value="Mute",l(c.a.createElement(o.e,null))):(i.current.muted=!0,m.current.value="Unmute",l(c.a.createElement(o.d,null)))},type:"button"},r)))},m=function(e){var t=e.songs.map(function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return c.a.createElement(i,{id:n,key:n,track:n,color:a})});return c.a.createElement("div",{className:"pv2"},t)},s=n(4),d="near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center justify-center w3 ma1 shadow-5 br2 pa2",f=function(e){var t=Object(a.useState)(c.a.createElement(o.b,null)),n=Object(u.a)(t,2),r=n[0],l=n[1],i=Object(a.useState)(c.a.createElement(s.c,null)),m=Object(u.a)(i,2),f=m[0],p=m[1],E=Object(a.useRef)(),b=Object(a.useRef)(),g=Object(a.useRef)(),v=Object(a.useRef)(),y=function(e){return 100-100*e/17},h=function t(){var n=document.getElementById("/static/media/B VOC.c435443f.mp3").currentTime;g.current.value=n;var a=y(n);e.songs.forEach(function(e){document.getElementById(e[0]+"l").style.width="".concat(a,"%")}),v.current=requestAnimationFrame(t)};return c.a.createElement("div",{className:""},c.a.createElement("div",null,c.a.createElement("input",{ref:g,className:"w-75",type:"range",min:"0",max:"17",step:"any",defaultValue:"0",onChange:function(){var t=Number(g.current.value).toFixed(6);e.songs.forEach(function(e){document.getElementById(e[0]).currentTime=t});var n=y(t);e.songs.forEach(function(e){document.getElementById(e[0]+"l").style.width="".concat(n,"%")})}}),c.a.createElement("div",{className:"dib w2 ml1"})),c.a.createElement("button",{id:"play/pause",ref:E,value:"Play",className:d,onClick:function(){"Play"===E.current.value?(e.songs.forEach(function(e){document.getElementById(e[0]).play()}),v.current=requestAnimationFrame(h),E.current.value="Puase",l(c.a.createElement(o.a,null))):(e.songs.forEach(function(e){document.getElementById(e[0]).pause()}),cancelAnimationFrame(v.current),E.current.value="Play",l(c.a.createElement(o.b,null)))},type:"button"},r),c.a.createElement("button",{className:d,onClick:function(){e.songs.forEach(function(e){document.getElementById(e[0]).pause(),document.getElementById(e[0]).currentTime=0}),E.current.value="Play",g.current.value="0",l(c.a.createElement(o.b,null))},type:"button"},c.a.createElement(o.c,null)),c.a.createElement("button",{ref:b,id:"loop/unloop",value:"Loop",className:d,onClick:function(){"Loop"===b.current.value?(e.songs.forEach(function(e){document.getElementById(e[0]).loop=!0}),b.current.value="Unloop",p(c.a.createElement(s.b,null))):(e.songs.forEach(function(e){document.getElementById(e[0]).loop=!1}),b.current.value="Loop",p(c.a.createElement(s.c,null)))},type:"button"},f))},p=n(7),E=n.n(p),b=n(8),g=n.n(b),v=n(9),y=n.n(v),h=n(10),w=n.n(h),O=n(11),j=n.n(O),x=n(12),B=n.n(x),I=n(13),N=n.n(I),k=n(14),C=n.n(k),F=[[E.a,"blue"],[g.a,"green"],[y.a,"light-purple"],[w.a,"yellow"],[j.a,"light-yellow"],[B.a,"pink"],[N.a,"light-blue"],[C.a,"light-red"]],R=function(){return c.a.createElement("div",{className:"App pv1"},c.a.createElement("h1",{className:""},"Loop Machine"),c.a.createElement(m,{songs:F}),c.a.createElement(f,{songs:F}),c.a.createElement("div",{className:"flex align-center justify-center pv1"}," ",c.a.createElement(s.a,null),"shacharEtt"))},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)})};n(23);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(R,null)),document.getElementById("root")),L()}],[[15,1,2]]]);
//# sourceMappingURL=main.0116d20f.chunk.js.map