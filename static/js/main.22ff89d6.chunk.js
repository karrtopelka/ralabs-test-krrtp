(this["webpackJsonpralaabs-test-karrtopelka"]=this["webpackJsonpralaabs-test-karrtopelka"]||[]).push([[0],{108:function(e,t){e.exports=function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()];return"".concat(t,",  ").concat(String(e).slice(3,15))}},115:function(e,t,n){},26:function(e,t){var n=function(e){var t,n,c,s=document.cookie.split(";");for(t=0;t<s.length;t++)if(n=s[t].substr(0,s[t].indexOf("=")),c=s[t].substr(s[t].indexOf("=")+1),(n=n.replace(/^\s+|\s+$/g,""))===e)return c};e.exports={checkCookie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"local_weather",t=n(e);return t||0},setCookie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"local_weather",t=arguments.length>1?arguments[1]:void 0,n=new Date;n.setDate(n.getMinutes()+10),document.cookie="".concat(e," = ").concat(JSON.stringify(t))}}},441:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(18),i=n.n(r),a=(n(115),n(28)),j=n(11),o={key:"0aede5452ca05333aeb7943df685ad17",base:"https://api.openweathermap.org/data/2.5/"},d=n(26),l=n(9),h=function(e){var t=e.setWeather,n=Object(j.useMediaQuery)("xs",{match:"down"}),s=Object(c.useState)(""),r=Object(a.a)(s,2),i=r[0],h=r[1];return Object(l.jsx)(j.Card,{shadow:!0,children:Object(l.jsxs)(j.Grid.Container,{gap:1,justify:"space-around",children:[Object(l.jsx)(j.Grid,{children:Object(l.jsx)(j.Text,{h3:!0,style:{margin:0},children:"Search location"})}),Object(l.jsx)(j.Grid,{children:Object(l.jsx)(j.Tooltip,{text:Object(l.jsxs)(l.Fragment,{children:["Then hit "," ",Object(l.jsx)(j.Keyboard,{children:"Enter"})]}),trigger:"click",type:"dark",placement:n?"bottom":"top",children:Object(l.jsx)(j.Input,{type:"text",placeholder:"Search...",onChange:function(e){return h(e.target.value)},value:i,onKeyPress:function(e){if("Enter"===e.key){var n=Object(d.checkCookie)(i);n?(h(""),t(JSON.parse(n))):fetch("".concat(o.base,"weather?q=").concat(i,"&units=metric&appid=").concat(o.key)).then((function(e){return e.json()})).then((function(e){h(""),t(e),Object(d.setCookie)(i,e)}))}}})})})]})})},x=n(27),b=x.Sun,u=x.Cloud,O=x.CloudSnow,g=x.CloudRain,p=x.AlignCenter;function m(e){switch(e){case"Snow":return Object(l.jsx)(O,{size:48});case"Clouds":return Object(l.jsx)(u,{size:48});case"Sunny":return Object(l.jsx)(b,{size:48});case"Rain":return Object(l.jsx)(g,{size:48});case"Clear":return Object(l.jsx)(b,{size:48});case"Mist":return Object(l.jsx)(p,{size:48});default:return Object(l.jsx)(b,{size:48})}}var y=function(e){var t=e.text1,n=e.text2,c=e.p,s=e.r;return Object(l.jsxs)(j.Col,{style:s?{textAlign:"right"}:{textAlign:"left"},children:[Object(l.jsx)(j.Text,{h6:!c,p:c,style:{margin:0,color:"#ccc"},children:t}),Object(l.jsx)(j.Text,{h6:!c,p:c,style:{margin:0,color:"#ccc"},children:n})]})},f=function(e){var t=e.isSM,n=e.weather,c=Object(j.useMediaQuery)("xs",{match:"down"});return Object(l.jsxs)(l.Fragment,{children:[!t&&Object(l.jsx)(j.Col,{span:4}),Object(l.jsxs)(j.Grid.Container,{gap:2,justify:"space-between",alignItems:"center",children:[Object(l.jsx)(j.Grid,{sm:!0,xs:12,children:Object(l.jsx)(y,{text1:"wind speed",text2:"".concat(n.wind.speed," m/s"),p:!0,r:c})}),Object(l.jsx)(j.Grid,{sm:!0,xs:12,children:Object(l.jsx)(y,{text1:"feels like",text2:"".concat(n.main.feels_like,"\xb0C"),p:!0})}),Object(l.jsx)(j.Grid,{sm:!0,xs:12,children:Object(l.jsx)(y,{text1:"pressure",text2:"".concat(n.main.pressure," inHg"),p:!0,r:c})}),Object(l.jsx)(j.Grid,{sm:!0,xs:12,children:Object(l.jsx)(y,{text1:"humidity",text2:"".concat(n.main.humidity,"%"),p:!0})})]}),!t&&Object(l.jsx)(j.Col,{span:4})]})},w=n(109),C=n(110),k=function(e){var t=e.children,n=Object(C.a)(e,["children"]);return Object(l.jsx)("div",{style:Object(w.a)({textAlign:"center",width:"100%"},n),children:t})},v=function(e){var t=e.weather;return Object(l.jsx)(k,{children:Object(l.jsxs)(j.Text,{h3:!0,"text-align":"center",style:{margin:0},children:[t.name,", ",t.sys.country]})})},T=n(108),S=n.n(T),G=function(){return Object(l.jsx)(k,{children:Object(l.jsx)(j.Text,{p:!0,size:12,"text-align":"center",style:{margin:0,color:"#ccc"},children:S()(new Date)})})},M=function(e){var t=e.isSM,n=e.weather;return Object(l.jsxs)(l.Fragment,{children:[!t&&Object(l.jsx)(j.Col,{span:36}),Object(l.jsxs)(j.Grid.Container,{gap:2,justify:"space-between",alignItems:"center",children:[Object(l.jsx)(j.Grid,{sm:!0,xs:12,children:Object(l.jsx)(y,{text1:"Min",text2:"".concat(Math.round(n.main.temp_min),"\xb0C"),r:!0})}),Object(l.jsx)(j.Grid,{sm:!0,xs:12,children:Object(l.jsx)(y,{text1:"Max",text2:"".concat(Math.round(n.main.temp_max),"\xb0C")})})]}),!t&&Object(l.jsx)(j.Col,{span:36})]})},F=function(e){var t=e.weather;return Object(l.jsx)(k,{children:Object(l.jsx)(j.Text,{h5:!0,"text-align":"center",style:{margin:0,color:"#ccc"},children:t.weather[0].main})})},z=function(e){var t=e.weather,n=Object(j.useMediaQuery)("xs",{match:"down"});return Object(l.jsxs)(j.Grid.Container,{gap:2,justify:"center",children:[Object(l.jsx)(j.Grid,{xs:24,style:{paddingBottom:0},children:Object(l.jsx)(G,{})}),Object(l.jsx)(j.Grid,{xs:24,style:{paddingBottom:0},children:Object(l.jsx)(v,{weather:t})}),Object(l.jsx)(j.Grid,{xs:24,style:{paddingTop:0},children:Object(l.jsx)(F,{weather:t})}),Object(l.jsx)(j.Grid,{xs:24,children:Object(l.jsx)(k,{children:m(t.weather[0].main)})}),Object(l.jsx)(j.Grid,{xs:24,style:{paddingBottom:0,paddingTop:0},children:Object(l.jsx)(k,{children:Object(l.jsxs)(j.Text,{h1:!0,children:[Math.round(t.main.temp),"\xb0C"]})})}),Object(l.jsx)(j.Grid,{xs:24,style:{paddingTop:0,margin:-10},children:Object(l.jsx)(M,{isSM:n,weather:t})}),Object(l.jsx)(j.Grid,{xs:24,children:Object(l.jsx)(f,{isSM:n,weather:t})})]})},A=function(e){var t=e.weather;return Object(l.jsx)(j.Card,{shadow:!0,children:"undefined"!=typeof t.main?Object(l.jsx)(z,{weather:t}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j.Text,{h3:!0,children:"Nothing found \ud83d\ude0c"}),Object(l.jsx)(j.Text,{p:!0,children:"(that's not a problem, just try to find again)"})]})})},P=function(){var e=Object(c.useState)({}),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(j.useMediaQuery)("sm",{match:"down"}),i=Object(j.useToasts)(),x=Object(a.a)(i,2)[1];return Object(c.useEffect)((function(){Object(d.checkCookie)("agreement")||x({text:"This site uses cookie, do you agree to them?",type:"warning",delay:5e4,actions:[{name:"Agree",handler:function(e,t){Object(d.setCookie)("agreement",!0),t()}}]});var e=Object(d.checkCookie)();e?s(JSON.parse(e)):navigator.geolocation.getCurrentPosition((function(e){fetch("".concat(o.base,"weather?lat=").concat(e.coords.latitude,"&lon=").concat(e.coords.longitude,"&units=metric&appid=").concat(o.key)).then((function(e){return e.json()})).then((function(e){s(e),Object(d.setCookie)("local_weather",e)}))}),(function(e){x({text:e.message,type:"error",delay:3e3})}),{enableHighAccuracy:!0,maximumAge:1e4})}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(j.Row,{children:[!r&&Object(l.jsx)(j.Col,{span:4}),Object(l.jsx)(j.Col,{children:Object(l.jsx)(h,{setWeather:s})}),!r&&Object(l.jsx)(j.Col,{span:4})]}),Object(l.jsx)(j.Spacer,{y:1}),Object(l.jsxs)(j.Row,{children:[!r&&Object(l.jsx)(j.Col,{span:4}),Object(l.jsx)(j.Col,{children:Object(l.jsx)(A,{weather:n})}),!r&&Object(l.jsx)(j.Col,{span:4})]})]})},R=n(27),B=function(){return Object(l.jsxs)(j.Row,{gap:2,justify:"space-between",style:{paddingBottom:10},children:[Object(l.jsx)(j.Col,{children:Object(l.jsx)(j.Text,{p:!0,style:{margin:0},children:(new Date).getFullYear()})}),Object(l.jsx)(j.Col,{style:{textAlign:"right"},children:Object(l.jsxs)(j.Text,{p:!0,style:{margin:0},children:["Ralabs"," ",Object(l.jsx)("span",{children:Object(l.jsx)(R.Activity,{size:16})})," ","Karrtopelka"]})})]})},D=function(e){var t=e.switchThemes,n=e.themeType;return Object(l.jsxs)(j.Row,{justify:"space-between",style:{paddingTop:10},children:[Object(l.jsx)(j.Col,{children:Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["Karrtopelka",Object(l.jsx)("span",{style:{paddingLeft:10,paddingRight:10},children:Object(l.jsx)(R.CloudLightning,{size:16,color:"light"===n?"red":"cyan"})}),"weather"]})}),Object(l.jsx)(j.Col,{style:{textAlign:"right"},children:Object(l.jsx)(j.Button,{type:"light"===n?"success":"warning",ghost:!0,iconRight:"light"===n?Object(l.jsx)(R.Moon,{}):Object(l.jsx)(R.Sun,{}),auto:!0,size:"small",onClick:t})})]})},_=function(e){var t=e.switchThemes,n=e.themeType,c=Object(j.useMediaQuery)("xs",{match:"down"});return Object(l.jsxs)(j.Page,{children:[Object(l.jsx)(j.Page.Header,{children:Object(l.jsx)(D,{switchThemes:t,themeType:n})}),Object(l.jsx)(j.Page.Content,{children:Object(l.jsx)(P,{})}),!c&&Object(l.jsx)(j.Page.Footer,{children:Object(l.jsx)(B,{})})]})},I=function(){var e=Object(c.useState)("light"),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(l.jsx)("div",{children:Object(l.jsxs)(j.GeistProvider,{themeType:n,children:[Object(l.jsx)(j.CssBaseline,{}),Object(l.jsx)(_,{switchThemes:function(){s((function(e){return"dark"===e?"light":"dark"}))},themeType:n})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,442)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),J()}},[[441,1,2]]]);
//# sourceMappingURL=main.22ff89d6.chunk.js.map