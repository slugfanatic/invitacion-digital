"use strict";(self.webpackChunkinvitacion_digital=self.webpackChunkinvitacion_digital||[]).push([[668],{7068:(e,s,a)=>{a.d(s,{_4:()=>i,aT:()=>l,ng:()=>d,Ur:()=>h,oy:()=>m,nG:()=>x,Wf:()=>u,ez:()=>p,$w:()=>j});var n=a(5865),t=a(297),r=a(579);const i=()=>{const{currentCelebrant:{celebrantsName:e}}=(0,t.d)();return(0,r.jsx)(n.A,{variant:"h1",color:"text.primary",children:e})};var c=a(6653);const l=()=>{const{currentCelebrant:{invitationMessage:e}}=(0,t.d)();return(0,r.jsx)(n.A,{variant:"body1",color:"text.primary",children:(0,r.jsx)(c.A,{message:e})})};function o(e){const s=e.getDate(),a=e.toLocaleString("default",{month:"long"}),n=e.getFullYear();return"".concat(s," de ").concat(a," de ").concat(n)}const d=()=>(0,r.jsx)(n.A,{variant:"h4",color:"text.primary",children:o(new Date("2024-06-08 13:30:00"))}),h=()=>{const{currentCelebrant:{celebrationType:e}}=(0,t.d)();return(0,r.jsx)(n.A,{variant:"h2",color:"text.secondary",children:e})},m=()=>{const{currentCelebrant:{longMessage:e}}=(0,t.d)();return(0,r.jsx)(n.A,{variant:"body2",color:"text.secondary",children:(0,r.jsx)(c.A,{message:e})})},x=()=>(0,r.jsx)(n.A,{variant:"h2",color:"text.primary",children:"Save the date"}),u=e=>{let{children:s}=e;return(0,r.jsx)(n.A,{variant:"subtitle1",color:"text.primary",children:s})},p=e=>{let{children:s}=e;return(0,r.jsx)(n.A,{variant:"body1",color:"text.primary",children:s})},j=()=>(0,r.jsx)(n.A,{variant:"h3",children:"Bienvenidos"})},6653:(e,s,a)=>{a.d(s,{A:()=>t});a(5043);var n=a(579);const t=e=>{let{message:s}=e;const a=function(e,s){return e.split(s)}(s,"<br />");return(0,n.jsx)(n.Fragment,{children:a.map(((e,s)=>(0,n.jsxs)(n.Fragment,{children:[e,s!==a.length-1&&(0,n.jsx)("br",{})]})))})}},9543:(e,s,a)=>{a.d(s,{Pb:()=>c,ZY:()=>x,nu:()=>u,gA:()=>p,uH:()=>o,Pw:()=>w,vT:()=>F,Zs:()=>f,G4:()=>M});var n=a(5043),t=a(6446),r=a(297),i=a(579);const c=e=>{let{children:s,type:a,background:n}=e;const{currentCelebrant:{imageH:c,imageV:l}}=(0,r.d)(),o={color:{backgroundColor:e=>e.palette.primary.main},alternative:{backgroundColor:e=>e.palette.secondary.main},pictureH:{backgroundImage:"url(".concat(c,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"},pictureV:{backgroundImage:"url(".concat(l,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}};return(0,i.jsx)(t.A,{className:"test",sx:{margin:{full:"0%",margin:"1%",card:"3% 8% 3% 8%"}[a],...n&&o[n]},children:s})};var l=a(2075);const o=e=>{let{children:s,color:a,glass:n,className:r,opacity:c=.4}=e;const l=(e,s)=>e+Math.floor(255*s).toString(16),o={primary:{backgroundColor:e=>l(e.palette.primary.main,c)},secondary:{backgroundColor:e=>l(e.palette.secondary.main,c)}};return(0,i.jsx)(t.A,{className:r,sx:{...o[a],...n&&{lower:{backdropFilter:"blur(2.5px)"},medium:{backdropFilter:"blur(5px)"},high:{backdropFilter:"blur(10px)"}}[n]},children:s})};var d=a(7068);const h=e=>{let{shape:s,color:a,value:n,label:t,glass:r}=e;return(0,i.jsxs)(o,{className:"countdown-time-item timer-".concat(s),color:a,glass:r,opacity:.7,children:[(0,i.jsx)(d.Wf,{children:n}),(0,i.jsx)(d.ez,{children:t})]})},m=e=>{const[s,a]=(0,n.useState)({days:0,hours:0,minutes:0,seconds:0}),t=(e,s)=>(e=Math.floor(e),[Math.floor(e/s),e%s]);return(0,n.useEffect)((()=>{let s=e.valueOf(),n=(new Date).valueOf(),r=Math.floor((s-n)/1e3);const i=setInterval((()=>{r>0&&(r--,(()=>{let e,s,n,i;[n,i]=t(r,60),[s,n]=t(n,60),[e,s]=t(s,24),a({days:e,hours:s,minutes:n,seconds:i})})())}),1e3);return()=>clearInterval(i)}),[e]),s},x=e=>{let{shape:s,color:a,glass:n}=e;const{currentCelebrant:{celebrationDate:t}}=(0,r.d)(),{days:c,hours:o,minutes:x,seconds:u}=m(t);let p=[{value:c,label:"Days"},{value:o,label:"Hours"},{value:x,label:"Minutes"},{value:u,label:"Seconds"}];return(()=>{if(c>0||o>0||x>0||u>0){const e=p.map((e=>({...e,selectedColor:"alternate"===a?"Days"===e.label||"Minutes"===e.label?"primary":"secondary":a})));return(0,i.jsx)(l.A,{container:!0,spacing:1,children:e.map((e=>{let{value:a,label:t,selectedColor:r}=e;return(0,i.jsx)(l.A,{xs:"auto",children:(0,i.jsx)(h,{shape:s,color:r,value:a,label:t,glass:n})},t)}))})}return(0,i.jsx)(d.$w,{})})()};const u=function(e){let{children:s,pSize:a="small",innerRef:n}=e;return(0,i.jsx)(t.A,{ref:n,sx:{padding:{small:"2%",medium:"4%",big:"8%"}[a]},children:s})},p=e=>{let{vSize:s="xsmall",height:a}=e;return(0,i.jsx)(t.A,{sx:{height:a?"".concat(a.toFixed(2),"px"):{xsmall:"10vh",small:"20vh",medium:"35vh",tall:"45vh",xtall:"60vh"}[s]}})};a(6653);var j=a(9686),g=a(3797),v=a(8029),A=a(7634),b=a(5570),y=a(9872),N=a(2104),C=a(3336),T=a(5865);const f=e=>{const s=a(5061),n={default:s.Info,start:s.EventAvailable,end:s.EventBusy,milestone:s.CheckCircle,warning:s.Warning,error:s.Error,darkMode:s.DarkMode,festival:s.Festival,eventStart:s.EventIcon};if(!n[e])return console.error('Icon "'.concat(e,'" not found. Returning default icon.')),(0,i.jsx)(s.Info,{});const t=n[e];return(0,i.jsx)(t,{})},w=()=>{var e=[{dateOrTime:"1:30 - 2:00 PM",title:"Recepci\xf3n",description:"",iconType:"festival"},{dateOrTime:"2:00 - 3:00 PM",title:"Ceremonia",description:"Religiosa y Civil",iconType:"festival"},{dateOrTime:"3:00 - 4:00 PM",title:"Cocktail",description:"",iconType:"festival"},{dateOrTime:"4:10 - 5:10 PM",title:"Banquete",description:"",iconType:"festival"},{dateOrTime:"5:10 - 11:30 PM",title:"Fiesta",description:"",iconType:"festival"},{dateOrTime:"",title:"Tornaboda",description:"",iconType:""}];const s=(e,s)=>(0,i.jsxs)(g.A,{children:[s[e].iconType?(0,i.jsx)(v.A,{color:"secondary",variant:"outlined",children:f(s[e].iconType)}):(0,i.jsx)(v.A,{color:"secondary",variant:"filled"}),e<s.length-1&&(0,i.jsx)(A.A,{})]});return(0,i.jsx)(y.A,{position:"alternate",children:e.map(((a,n)=>{return(0,i.jsxs)(N.A,{children:[(c=a.dateOrTime,c&&(0,i.jsx)(j.A,{sx:{margin:"auto 0",textShadow:"0px 0px 5px #000"},variant:"body2",color:"text.primary",children:c})),s(n,e),(t=a.title,r=a.description,(0,i.jsx)(b.A,{children:(0,i.jsxs)(C.A,{elevation:3,sx:{backgroundColor:e=>e.palette.primary.main+80},children:[(0,i.jsx)(T.A,{variant:"h5",gutterBottom:!0,children:t}),(0,i.jsx)(T.A,{variant:"body2",children:r})]})}))]},n);var t,r,c}))})};var k=a(8911);const F=e=>{let{children:s}=e;return(0,i.jsx)(k.A,{children:s})},M=e=>{let{events:s}=e;return(0,i.jsx)(y.A,{className:"timeline",position:"alternate",children:s.map(((e,a)=>(0,i.jsxs)(N.A,{className:"timelineItem",children:[(0,i.jsx)(j.A,{sx:{m:"auto 0"},variant:"body2",color:"text.secondary",children:e.dateOrTime}),(0,i.jsxs)(g.A,{className:"timelineSeparator",children:[(0,i.jsx)(v.A,{color:"primary",variant:"outlined",className:"timelineDot",children:f(e.iconFinder)}),a<s.length-1&&(0,i.jsx)(A.A,{})]}),(0,i.jsx)(b.A,{className:"timelineContent",children:(0,i.jsxs)(C.A,{elevation:3,className:"paper",children:[(0,i.jsx)(T.A,{variant:"h5",component:"h2",className:"title",gutterBottom:!0,children:e.title}),(0,i.jsx)(T.A,{variant:"body1",component:"p",className:"description",children:e.description})]})})]},a)))})}},3668:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var n=a(5043),t=a(6446),r=a(2075),i=a(344),c=a(8911),l=a(1937),o=a(3792),d=a(9543),h=a(579);const m=()=>{const e=(0,i.A)("(min-width:600px)"),[s,a]=(0,n.useState)({days:0,hours:0,minutes:0,seconds:0}),m=(e,s)=>(e=Math.floor(e),[Math.floor(e/s),e%s]),x=e=>{window.open(e,"_blank")},u=e=>{const s="https://maps.app.goo.gl/".concat(e);return(0,h.jsx)("a",{href:s,className:"whiteText",target:"_blank",rel:"noreferrer",children:"Ver en mapa"})};return(0,n.useEffect)((()=>{console.log("i fire once");let e=(new Date).valueOf(),s=new Date("2024-06-08 13:30:00").valueOf(),n=Math.floor((s-e)/1e3);const t=setInterval((()=>{n>0&&(n--,(e=>{let s,n,t,r;[t,r]=m(e,60),[n,t]=m(t,60),[s,n]=m(n,24),a({days:s,hours:n,minutes:t,seconds:r})})(n))}),1e3);return()=>clearInterval(t)}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.A,{component:"section",children:(0,h.jsx)("div",{className:"mainBackground",children:(0,h.jsx)("div",{className:"mainContent",children:(0,h.jsxs)(c.A,{spacing:2,children:[(0,h.jsx)("h1",{className:"capitalize whiteText shadowText",children:"Angie y Julio"}),(0,h.jsx)("h2",{className:"whiteText shadowText",children:"\xa1Nos casamos!"})]})})})}),(0,h.jsx)(t.A,{component:"section",children:(0,h.jsx)("div",{className:"messageBackground",children:(0,h.jsx)("div",{className:"messageContent",children:(0,h.jsxs)(c.A,{spacing:2,children:[(0,h.jsx)("div",{className:"whiteContent",children:(0,h.jsx)(o.A,{sx:{fontSize:50}})}),(0,h.jsx)("h3",{className:"whiteText upperCase",children:"Se nos ocurri\xf3 una idea loca, \xa1Nos Casamos!"}),(0,h.jsx)("p",{className:"whiteText",children:"Ya son 8 a\xf1os de recorrer este camino juntos, entre risas, aventuras y un amor que no para de crecer. Ahora, queremos dar el siguiente paso, y as\xed como han estado desde el principio de nuestra historia, tambi\xe9n son parte fundamental de esta celebraci\xf3n, por eso los invitamos con mucha alegr\xeda a que vengan a compartir este momento tan especial con nosotros. \xa1Ser\xe1 un d\xeda de pura diversi\xf3n y amor! Nos vemos pronto,y \xa1Prep\xe1rense para bailar hasta que el cuerpo aguante!"})]})})})}),(0,h.jsx)(t.A,{component:"section",children:(0,h.jsx)("div",{className:"saveTheDateBackground",children:(0,h.jsx)("div",{className:"saveTheDateContent",children:(0,h.jsxs)(c.A,{spacing:2,children:[(0,h.jsx)("h1",{className:"whiteText shadowText",children:"Save the Date"}),(0,h.jsx)("h3",{className:"whiteText upperCase",children:"8 Junio 2024"}),s.days>0||s.hours>0||s.minutes>0||s.seconds>0?(0,h.jsxs)(r.A,{container:!0,spacing:2,children:[(0,h.jsxs)(r.A,{xl:3,xs:12,md:6,className:"timer days",children:[(0,h.jsx)("span",{className:"whiteText",children:s.days}),(0,h.jsx)("p",{className:"whiteText",children:"Days"})]}),(0,h.jsxs)(r.A,{xl:3,xs:12,md:6,className:"timer hours",children:[(0,h.jsx)("span",{className:"whiteText",children:s.hours}),(0,h.jsx)("p",{className:"whiteText",children:"Hours"})]}),(0,h.jsxs)(r.A,{xl:3,xs:12,md:6,className:"timer minutes",children:[(0,h.jsx)("span",{className:"whiteText",children:s.minutes}),(0,h.jsx)("p",{className:"whiteText",children:"Minutes"})]}),(0,h.jsxs)(r.A,{xl:3,xs:12,md:6,className:"timer seconds",children:[(0,h.jsx)("span",{className:"whiteText",children:s.seconds}),(0,h.jsx)("p",{className:"whiteText",children:"Seconds"})]})]}):(0,h.jsx)("h2",{className:"whiteText",children:"Bienvenidos"})]})})})}),(0,h.jsx)(t.A,{component:"section",children:(0,h.jsx)("div",{className:"placeBackground",children:(0,h.jsx)("div",{className:"placeContent",children:(0,h.jsxs)(c.A,{spacing:2,children:[(0,h.jsx)("h2",{className:"whiteText",children:"CEREMONIA RELIGIOSA | RECEPCI\xd3N"}),(0,h.jsx)("h3",{className:"whiteText",children:"8 de Junio"}),(0,h.jsx)("h3",{className:"whiteText",children:"1:30 PM"}),(0,h.jsx)("h3",{className:"whiteText",children:"Jard\xedn Vand\xfa"}),(0,h.jsx)("h2",{className:"whiteText",children:"DIRECCI\xd3N"}),(0,h.jsx)("h3",{className:"whiteText",children:"Rosales s/n, Atlacomulco, 62560 Jiutepec, Morelos."}),u("YEADbvpUVugdShZz9"),(0,h.jsx)("iframe",{title:"place",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15099.382782296027!2d-99.2054817!3d18.8939254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf6eb4b585b1%3A0x594798d78b451eac!2zSmFyZMOtbiBWYW5kw7o!5e0!3m2!1ses-419!2smx!4v1710462177756!5m2!1ses-419!2smx",width:"600",height:"450",loading:"lazy"}),(0,h.jsx)(t.A,{component:"img",sx:{height:400},alt:"The house from the offer.",src:"https://angyyjulio.com/assets/img/recepcion.jpg"})]})})})}),(0,h.jsx)(t.A,{component:"section",children:(0,h.jsx)("div",{className:"calendarBackground",children:(0,h.jsx)("div",{className:"calendarContent",children:(0,h.jsxs)(c.A,{spacing:2,children:[(0,h.jsx)("div",{className:"whiteContent",children:(0,d.Zs)("start")}),(0,h.jsx)("h2",{className:"whiteText",children:"Agregalo a tu Calendario"}),(0,h.jsxs)(r.A,{container:!0,spacing:2,children:[(0,h.jsx)(r.A,{xl:6,xs:12,md:6,children:(0,h.jsx)(l.A,{variant:"contained",size:"large",onClick:()=>{x("https://angyyjulio.com/assets/img/20240608-ang-lica-y-julio.ics")},children:"iOS y PC"})}),(0,h.jsx)(r.A,{xl:6,xs:12,md:6,children:(0,h.jsx)(l.A,{variant:"contained",size:"large",onClick:()=>{x("https://www.google.com/calendar/render?action=TEMPLATE&text=Ang%C3%A9lica%20y%20Julio&dates=20240608T193000Z/20240608T070000Z&details=Ang%C3%A9lica%20y%20Julio%0D%0ADate%20and%20Time%3A%20Jun%208%2C%202024%207%3A30%20PM%20-%207%3A00%20AM%0D%0AVenue%3A%20https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FJard%25C3%25ADn%2BVand%25C3%25BA%2F%4018.8939254%2C-99.2054817%2C15z%2Fdata%3D!4m6!3m5!1s0x85cddf6eb4b585b1%3A0x594798d78b451eac!8m2!3d18.8939254!4d-99.2054817!16s%252Fg%252F11b6cb6r9v%3Fentry%3Dtts%0D%0ABoda%20de%20Ang%C3%A9lica%20y%20Julio&location=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FJard%25C3%25ADn%2BVand%25C3%25BA%2F%4018.8939254%2C-99.2054817%2C15z%2Fdata%3D!4m6!3m5!1s0x85cddf6eb4b585b1%3A0x594798d78b451eac!8m2!3d18.8939254!4d-99.2054817!16s%252Fg%252F11b6cb6r9v%3Fentry%3Dtts&trp=true&sf=true&output=xml#f")},children:"Android y Google Calendar"})})]})]})})})}),(0,h.jsx)(t.A,{component:"section",children:(0,h.jsx)("div",{className:"dressCodeBackground",children:(0,h.jsx)("div",{className:"dressCodeContent",children:(0,h.jsxs)(c.A,{spacing:2,children:[(0,h.jsx)("h2",{className:"upperCase",children:"C\xf3digo de vestimenta"}),(0,h.jsx)("h3",{className:"upperCase",children:"Semi formal"}),e?(0,h.jsxs)(r.A,{container:!0,spacing:2,children:[(0,h.jsx)(r.A,{lg:3,xl:3,children:(0,h.jsx)("div",{className:"titles green",children:(0,h.jsx)("span",{children:"Hombres"})})}),(0,h.jsx)(r.A,{lg:3,xl:3,className:"box men"}),(0,h.jsx)(r.A,{lg:3,xl:3,className:"box women"}),(0,h.jsx)(r.A,{lg:3,xl:3,children:(0,h.jsx)("div",{className:"titles pink",children:(0,h.jsx)("span",{children:"MUJERES"})})})]}):(0,h.jsx)("div",{children:"Hola"})]})})})}),(0,h.jsx)(t.A,{component:"section",children:(0,h.jsx)("div",{className:"suggestionBackground",children:(0,h.jsx)("div",{className:"suggestionContent",children:(0,h.jsxs)(c.A,{spacing:2,children:[(0,h.jsx)("h2",{className:"whiteText upperCase",children:"Sugerencia de Hospedaje"}),(0,h.jsx)(t.A,{component:"img",sx:{height:400},alt:"The house from the offer.",src:"https://angyyjulio.com/assets/img/hotels/h1.jpg"}),(0,h.jsx)("h2",{className:"whiteText upperCase",children:"HOSTER\xcdA LAS QUINTAS"}),(0,h.jsx)("br",{}),(0,h.jsx)("h3",{className:"whiteText",children:"Direcci\xf3n"}),(0,h.jsx)("p",{className:"whiteText",children:"Blvd. Gustavo D\xedaz Ordaz 9, Cantarranas, 62448 Cuernavaca, Mor."}),u("QQkZQxW3GcA7XFyr6")]})})})}),(0,h.jsx)(t.A,{component:"section",children:(0,h.jsx)("div",{className:"itineraryBackground",children:(0,h.jsx)("div",{className:"itineraryContent",children:(0,h.jsxs)(c.A,{spacing:2,children:[(0,h.jsx)("h2",{className:"upperCase",children:"Itinerario"}),(0,h.jsx)("h3",{className:"upperCase",children:"\xa1ACOMP\xc1\xd1ANOS!"}),(0,h.jsx)(d.G4,{events:[{dateOrTime:"1:30 - 2:00 PM",title:"Recepci\xf3n",description:"",iconFinder:"festival"},{dateOrTime:"2:00 - 3:00 PM",title:"Ceremonia",description:"Religiosa y Civil",iconFinder:"festival"},{dateOrTime:"3:00 - 4:00 PM",title:"Cocktail",description:"",iconFinder:"festival"},{dateOrTime:"4:10 - 5:10 PM",title:"Banquete",description:"",iconFinder:"festival"},{dateOrTime:"5:10 - 11:30 PM",title:"Fiesta",description:"",iconFinder:"festival"},{dateOrTime:"11:30 PM - 1:00 AM",title:"Tornaboda",description:"",iconFinder:"darkMode"}]})]})})})})]})}}}]);
//# sourceMappingURL=668.882ee61e.chunk.js.map