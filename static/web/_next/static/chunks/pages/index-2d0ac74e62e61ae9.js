(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6511)}])},37527:function(e,t,n){"use strict";n.d(t,{h:function(){return I},Z:function(){return D}});var o=n(85893),s=n(97183),a=n(94199),l=n(20550),i=n(94184),r=n.n(i),c=n(66516),d=n(38504),u=n(71577),h=n(86548),m=n(94149),x=n(38545),p=n(87547),f=n(39398),j=n(4480),_=n(67294),g=n(49218),w=n(5152),v=n.n(w),y=n(77466),b=n(79252),C=n.n(b);let k=v()(()=>n.e(4761).then(n.bind(n,14761)).then(e=>e.Modal),{loadableGenerated:{webpack:()=>[14761]}}),N=v()(()=>Promise.all([n.e(8909),n.e(8119),n.e(9096)]).then(n.bind(n,59096)).then(e=>e.NameChangeModal),{loadableGenerated:{webpack:()=>[59096]}}),S=v()(()=>Promise.all([n.e(4485),n.e(575),n.e(2335)]).then(n.bind(n,44208)).then(e=>e.AuthModal),{loadableGenerated:{webpack:()=>[44208]}}),Z=e=>{let{username:t}=e,[n,s]=(0,_.useState)(!1),[a,l]=(0,_.useState)(!1),[i,r]=(0,j.FV)(y.ZA),w=(0,j.sJ)(y.Q),v=()=>{r(!i)},b=()=>{s(!0)};(0,g.y1)("c",v,{enableOnContentEditable:!1},[i]);let Z=(0,j.sJ)(y.db);if(!Z)return null;let{displayName:F}=Z,L=(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(c.Z.Item,{icon:(0,o.jsx)(h.Z,{}),onClick:()=>b(),children:"Change name"},"0"),(0,o.jsx)(c.Z.Item,{icon:(0,o.jsx)(m.Z,{}),onClick:()=>l(!0),children:"Authenticate"},"1"),w.chatAvailable&&(0,o.jsx)(c.Z.Item,{icon:(0,o.jsx)(x.Z,{}),onClick:()=>v(),children:i?"Hide Chat":"Show Chat"},"3")]});return(0,o.jsxs)("div",{id:"user-menu",className:"".concat(C().root),children:[(0,o.jsx)(d.Z,{overlay:L,trigger:["click"],children:(0,o.jsxs)(u.Z,{type:"primary",icon:(0,o.jsx)(p.Z,{className:C().userIcon}),children:[(0,o.jsx)("span",{className:C().username,children:t||F}),(0,o.jsx)(f.Z,{})]})}),(0,o.jsx)(k,{title:"Change Chat Display Name",open:n,handleCancel:()=>s(!1),children:(0,o.jsx)(N,{})}),(0,o.jsx)(k,{title:"Authenticate",open:a,handleCancel:()=>l(!1),children:(0,o.jsx)(S,{})})]})};var F=n(50738),L=n(31764),A=n.n(L);let{Header:T}=s.Z,I=e=>{let{name:t="Your stream title",chatAvailable:n,chatDisabled:s}=e;return(0,o.jsxs)(T,{className:r()(["".concat(A().header)],"global-header"),children:[(0,o.jsxs)("div",{className:A().logo,children:[(0,o.jsx)("div",{id:"header-logo",className:A().logoImage,children:(0,o.jsx)(F.C,{variant:"contrast"})}),(0,o.jsx)("h1",{className:A().title,id:"global-header-text",title:t,children:t})]}),n&&!s&&(0,o.jsx)(Z,{}),!n&&!s&&(0,o.jsx)(a.Z,{title:"Chat is available when the stream is live.",placement:"left",children:(0,o.jsx)(l.Z,{style:{cursor:"pointer"},children:"Chat offline"})})]})};var D=I},14761:function(e,t,n){"use strict";n.r(t),n.d(t,{Modal:function(){return d}});var o=n(85893),s=n(85402),a=n(26303),l=n(11382),i=n(67294),r=n(77011),c=n.n(r);let d=e=>{let{title:t,url:n,open:r,handleOk:d,handleCancel:u,afterClose:h,height:m,width:x,children:p}=e,[f,j]=(0,i.useState)(!!n),_="100%",g="520px";n&&(_="70vh",g="900px");let w={padding:"0px",minHeight:m,height:null!=m?m:_},v=n&&(0,o.jsx)("iframe",{title:t,src:n,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:()=>j(!1)});return(0,o.jsx)(s.Z,{title:t,open:r,onOk:d,onCancel:u,afterClose:h,bodyStyle:w,width:null!=x?x:g,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,children:(0,o.jsxs)("div",{id:"modal-container",style:{height:"100%"},children:[f&&(0,o.jsx)(a.Z,{active:f,style:{padding:"10px"},paragraph:{rows:10}}),v&&(0,o.jsx)("div",{style:{display:f?"none":"inline"},children:v}),p&&(0,o.jsx)("div",{className:c().content,children:p}),f&&(0,o.jsx)(l.Z,{className:c().spinner,spinning:f,size:"large"})]})})};t.default=d,d.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0}},51513:function(e,t,n){"use strict";n.d(t,{R:function(){return c}});var o=n(85893),s=n(27049),a=n(24019),l=n(45938),i=n(88335),r=n.n(i);let c=e=>{let t,{streamName:n,customText:i,lastLive:c,notificationsEnabled:d,fediverseAccount:u,onNotifyClick:h,onFollowClick:m}=e;return t=i||(!i&&d&&u?(0,o.jsxs)("span",{children:["This stream is offline. You can"," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:r().actionLink,onClick:h,children:"be notified"})," ","the next time ",n," goes live or"," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:r().actionLink,onClick:m,children:"follow"})," ",u," on the Fediverse."]}):!i&&d?(0,o.jsxs)("span",{children:["This stream is offline."," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:r().actionLink,onClick:h,children:"Be notified"})," ","the next time ",n," goes live."]}):!i&&u?(0,o.jsxs)("span",{children:["This stream is offline."," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:r().actionLink,onClick:m,children:"Follow"})," ",u," on the Fediverse to see the next time ",n," goes live."]}):"This stream is offline. Check back soon!"),(0,o.jsx)("div",{id:"offline-banner",className:r().outerContainer,children:(0,o.jsxs)("div",{className:r().innerContainer,children:[(0,o.jsx)("div",{className:r().header,children:n}),(0,o.jsx)(s.Z,{className:r().separator}),(0,o.jsx)("div",{className:r().bodyText,children:t}),c&&(0,o.jsxs)("div",{className:r().lastLiveDate,children:[(0,o.jsx)(a.Z,{className:r().clockIcon}),"Last live ".concat((0,l.Z)(new Date(c))," ago.")]})]})})}},69357:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var o=n(85893),s=n(45938),a=n(68730),l=n(67294),i=n(31326),r=n(37970),c=n.n(r);let d=e=>{let t,{online:n,lastConnectTime:r,lastDisconnectTime:d,viewerCount:u}=e,[,h]=(0,l.useState)(new Date);(0,l.useEffect)(()=>{let e=setInterval(()=>h(new Date),1e3);return()=>{clearInterval(e)}},[]);let m="";if(n&&r){let x=function(e){let t=(0,a.Z)({start:e,end:new Date});return t.days>1?"".concat(t.days," days ").concat(t.hours," hours"):t.hours>=1?"".concat(t.hours," hours ").concat(t.minutes," minutes"):"".concat(t.minutes," minutes ").concat(t.seconds," seconds")}(new Date(r));m=n?"Live for  ".concat(x):"Offline",t=u>0&&(0,o.jsxs)("div",{className:c().right,children:[(0,o.jsx)("span",{children:(0,o.jsx)(i.Z,{})}),(0,o.jsx)("span",{children:" ".concat(u)})]})}else!n&&(m="Offline",d&&(t="Last live ".concat((0,s.Z)(new Date(d))," ago.")));return(0,o.jsxs)("div",{className:c().statusbar,children:[(0,o.jsx)("div",{children:m}),(0,o.jsx)("div",{children:t})]})};d.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},6511:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eY}});var o=n(85893),s=n(97183),a=n(4480),l=n(9008),i=n.n(l),r=n(67294),c=n(93423),d=n(77466),u=n(90575),h=n(26303),m=n(5152),x=n.n(m),p=n(72581),f=n(83469),j=n(10808),_=n.n(j);let g=e=>{let{content:t}=e;return(0,o.jsx)("div",{className:_().pageContentContainer,id:"custom-page-content",children:(0,o.jsx)("div",{className:_().customPageContent,dangerouslySetInnerHTML:{__html:t}})})};var w=n(17725),v=n.n(w),y=n(87412),b=n(12341),C=n.n(b);let k=x()(()=>Promise.all([n.e(1272),n.e(8700),n.e(3729),n.e(4977),n.e(1496)]).then(n.bind(n,94977)).then(e=>e.ChatContainer),{loadableGenerated:{webpack:()=>[94977]}}),N=()=>{let e=(0,a.sJ)(d.db),t=(0,a.sJ)(d.pH);if(!e)return null;let{id:n,isModerator:s,displayName:l}=e;return(0,o.jsx)(y.ZP,{className:C().root,collapsedWidth:0,width:320,children:(0,o.jsx)(k,{messages:t,usernameToHighlight:l,chatUserId:n,isModerator:s})})};var S=n(67917),Z=n.n(S);let F=e=>{let{version:t}=e;return(0,o.jsxs)("footer",{className:Z().footer,children:[(0,o.jsxs)("span",{children:["Powered by ",(0,o.jsx)("a",{href:"https://owncast.online",children:t})]}),(0,o.jsxs)("span",{className:Z().links,children:[(0,o.jsx)("a",{href:"https://owncast.online/docs",target:"_blank",rel:"noreferrer",children:"Documentation"}),(0,o.jsx)("a",{href:"https://owncast.online/help",target:"_blank",rel:"noreferrer",children:"Contribute"}),(0,o.jsx)("a",{href:"https://github.com/owncast/owncast",target:"_blank",rel:"noreferrer",children:"Source"})]})]})};var L=n(12270),A=n.n(L);let T=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:"".concat(A().row),children:t})};var I=n(71577),D=n(94184),M=n.n(D),H=n(13959),E=n.n(H);let B=e=>{let{action:t,primary:n=!0,externalActionSelected:s}=e,{title:a,description:l,icon:i,color:r}=t;return(0,o.jsxs)(I.Z,{type:n?"primary":"default",className:M()(["".concat(E().button),"action-button"]),onClick:()=>s(t),style:{backgroundColor:r},children:[i&&(0,o.jsx)("img",{src:i,className:"".concat(E().icon),alt:l}),a]})};var O=n(51513),P=n(34447);let U=e=>{let{onClick:t,props:n}=e;return(0,o.jsx)(I.Z,{...n,type:"primary",className:E().button,icon:(0,o.jsx)(P.Z,{}),onClick:t,id:"follow-button",children:"Follow"})};var z=n(71578);let J=e=>{let{onClick:t,text:n}=e;return(0,o.jsx)(I.Z,{type:"primary",className:"".concat(E().button),icon:(0,o.jsx)(z.Z,{}),onClick:t,id:"notify-button",children:n||"Notify"})};var R=n(53731),G=n(79216),q=n(74933),V=n.n(q);let Y=e=>{let{src:t}=e;return(0,o.jsx)("div",{className:V().root,children:(0,o.jsx)("div",{className:V().container,children:(0,o.jsx)(G.Z,{src:t,alt:"Logo",className:V().image,rootClassName:V().image})})})};var W=n(25675),Q=n.n(W),X=n(573),K=n.n(X);let $=e=>{let{links:t}=e;return(0,o.jsx)("div",{className:K().links,children:t.map(e=>(0,o.jsx)("a",{href:e.url,className:K().link,target:"_blank",rel:"noreferrer me",children:(0,o.jsx)(Q(),{src:e.icon||"/img/platformlogos/default.svg",alt:e.platform,title:e.platform,className:K().link,width:"30",height:"30"})},e.platform))})};var ee=n(47900),et=n.n(ee);let en=e=>{let{name:t,title:n,summary:s,logo:a,tags:l,links:i}=e;return(0,o.jsx)("div",{className:et().root,children:(0,o.jsxs)("div",{className:et().logoTitleSection,children:[(0,o.jsx)("div",{className:et().logo,children:(0,o.jsx)(Y,{src:a})}),(0,o.jsxs)("div",{className:et().titleSection,children:[(0,o.jsx)("div",{className:M()(et().title,et().row,"header-title"),children:t}),(0,o.jsx)("div",{className:M()(et().subtitle,et().row,"header-subtitle"),children:(0,o.jsx)(R.Z,{children:n||s})}),(0,o.jsx)("div",{className:M()(et().tagList,et().row),children:l.length>0&&l.map(e=>(0,o.jsxs)("span",{children:["#",e,"\xa0"]},e))}),(0,o.jsx)("div",{className:M()(et().socialLinks,et().row),children:(0,o.jsx)($,{links:i})})]})]})})};var eo=n(69357),es=n(71230),ea=n(15746),el=n(3698),ei=n(24093),er=n(69833),ec=n.n(er);let ed=e=>{let{follower:t}=e;return(0,o.jsx)("div",{className:M()([ec().follower,"followers-follower"]),children:(0,o.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:(0,o.jsxs)(es.Z,{wrap:!1,children:[(0,o.jsx)(ea.Z,{span:6,children:(0,o.jsx)(ei.C,{src:t.image,alt:"Avatar",className:ec().avatar,children:(0,o.jsx)("img",{src:"/logo",alt:"Logo",className:ec().placeholder})})}),(0,o.jsxs)(ea.Z,{children:[(0,o.jsx)(es.Z,{children:t.name}),(0,o.jsx)(es.Z,{className:ec().account,children:t.username})]})]})})})};var eu=n(21890),eh=n.n(eu);let em=e=>{let{name:t,onFollowButtonClick:n}=e,[s,a]=(0,r.useState)([]),[l,i]=(0,r.useState)(0),[c,d]=(0,r.useState)(1),[u,m]=(0,r.useState)(!0),x=async()=>{try{let e=await fetch("".concat("/api/followers","?page=").concat(c)),t=await e.json(),{results:n,total:o}=t;a(n),i(o),m(!1)}catch(s){console.error(s)}};(0,r.useEffect)(()=>{x()},[c]);let p=(0,o.jsxs)("div",{className:eh().noFollowers,id:"followers-collection",children:[(0,o.jsx)("h2",{children:"Be the first follower!"}),(0,o.jsxs)("p",{children:["Owncast"!==t?t:"This server"," is a part of the"," ",(0,o.jsx)("a",{href:"https://owncast.online/join-fediverse",children:"Fediverse"}),", an interconnected network of independent users and servers."]}),(0,o.jsxs)("p",{children:["By following ","Owncast"!==t?t:"this server"," you'll be able to get updates from the stream, share it with others, and show your appreciation when it goes live, all from your own Fediverse account."]}),(0,o.jsx)(U,{onClick:n})]}),f=(0,o.jsx)(h.Z,{active:!0,paragraph:{rows:3}});return u?f:(null==s?void 0:s.length)?(0,o.jsxs)("div",{className:eh().followers,id:"followers-collection",children:[(0,o.jsx)(es.Z,{wrap:!0,gutter:[10,10],children:s.map(e=>(0,o.jsx)(ea.Z,{children:(0,o.jsx)(ed,{follower:e},e.link)},e.link))}),(0,o.jsx)(el.Z,{current:c,pageSize:24,total:Math.ceil(l/24)||1,onChange:e=>{d(e)},hideOnSinglePage:!0})]}):p};var ex=n(14761),ep=n(66516),ef=n(38504),ej=n(49647),e_=n(60198),eg=n(89705),ew=n(97038),ev=n.n(ew);let ey="notify",eb="follow",eC=e=>{let{actions:t,externalActionSelected:n,notifyItemSelected:s,followItemSelected:a,showFollowItem:l,showNotifyItem:i}=e,r=e=>{if(e.key===ey){s();return}if(e.key===eb){a();return}let o=t.find(t=>t.url===e.key);n(o)},c=t.map(e=>({key:e.url,label:(0,o.jsxs)("span",{className:ev().item,children:[e.icon&&(0,o.jsx)("img",{className:ev().icon,src:e.icon,alt:e.title})," ",e.title]})}));l&&c.unshift({key:eb,label:(0,o.jsxs)("span",{className:ev().item,children:[(0,o.jsx)(ej.Z,{className:ev().icon})," Follow this stream"]})}),i&&c.unshift({key:ey,label:(0,o.jsxs)("span",{className:ev().item,children:[(0,o.jsx)(e_.Z,{className:ev().icon}),"Notify when live"]})});let d=(0,o.jsx)(ep.Z,{items:c,onClick:r});return(0,o.jsx)(ef.Z,{overlay:d,placement:"bottomRight",trigger:["click"],className:ev().menu,children:(0,o.jsx)("div",{className:ev().buttonWrap,children:(0,o.jsx)(I.Z,{type:"default",onClick:e=>e.preventDefault(),size:"large",icon:(0,o.jsx)(eg.Z,{size:6,style:{rotate:"90deg"}})})})})};var ek=n(26713),eN=n(11382),eS=n(14670),eZ=n(69677),eF=n(66009),eL=n.n(eF);let eA=e=>{let{handleClose:t,account:n,name:s}=e,[a,l]=(0,r.useState)(null),[i,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)(!1),[h,m]=(0,r.useState)(null),x=e=>{l(e),function(e){let t=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}(e)?c(!0):c(!1)},p=()=>{window.open("https://owncast.online/join-fediverse","_blank")},f=async()=>{if(i){u(!0);try{let e=a.replace(/^@+/,""),n=await fetch("/api/remotefollow",{method:"POST",body:JSON.stringify({account:e})}),o=await n.json();if(o.redirectUrl&&(window.open(o.redirectUrl,"_blank"),t()),!o.success){m(o.message),u(!1);return}if(!o.redirectUrl){m("Unable to follow."),u(!1);return}}catch(s){m(s.message)}u(!1)}};return(0,o.jsxs)(ek.Z,{direction:"vertical",id:"follow-modal",children:[(0,o.jsxs)("div",{className:eL().header,children:["By following this stream you'll get notified on the Fediverse when it goes live. Now is a great time to",(0,o.jsx)("a",{href:"https://owncast.online/join-fediverse",target:"_blank",rel:"noreferrer",children:"\xa0learn about the Fediverse\xa0"}),"if it's new to you."]}),(0,o.jsxs)(eN.Z,{spinning:d,children:[h&&(0,o.jsx)(eS.Z,{message:"Follow Error",description:h,type:"error",showIcon:!0}),(0,o.jsxs)("div",{className:eL().account,children:[(0,o.jsx)("img",{src:"/logo",alt:"logo",className:eL().logo}),(0,o.jsxs)("div",{className:eL().username,children:[(0,o.jsx)("div",{className:eL().name,children:s}),(0,o.jsx)("div",{children:n})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:eL().instructions,children:"Enter your username @server to follow"}),(0,o.jsx)(eZ.Z,{value:a,size:"large",onChange:e=>x(e.target.value),placeholder:"Your fediverse account @account@server",defaultValue:a}),(0,o.jsx)("div",{className:eL().footer,children:"You'll be redirected to your Fediverse server and asked to confirm the action."})]}),(0,o.jsxs)(ek.Z,{className:eL().buttons,children:[(0,o.jsx)(I.Z,{disabled:!i,type:"primary",onClick:f,children:"Follow"}),(0,o.jsx)(I.Z,{onClick:p,type:"primary",children:"Join the Fediverse"})]})]})]})},{Content:eT}=s.Z,eI=x()(()=>Promise.all([n.e(4485),n.e(1424)]).then(n.bind(n,11424)).then(e=>e.BrowserNotifyModal),{loadableGenerated:{webpack:()=>[11424]}}),eD=x()(()=>n.e(7815).then(n.bind(n,17815)).then(e=>e.NotifyReminderPopup),{loadableGenerated:{webpack:()=>[17815]}}),eM=x()(()=>Promise.all([n.e(2544),n.e(7902),n.e(2239),n.e(5202)]).then(n.bind(n,8888)).then(e=>e.OwncastPlayer),{loadableGenerated:{webpack:()=>[8888]}}),eH=x()(()=>Promise.all([n.e(1272),n.e(8700),n.e(3729),n.e(4977),n.e(1496)]).then(n.bind(n,94977)).then(e=>e.ChatContainer),{loadableGenerated:{webpack:()=>[94977]}}),eE=e=>{let{name:t,streamTitle:n,summary:s,tags:a,socialHandles:l,extraPageContent:i,setShowFollowModal:r,supportFediverseFeatures:c}=e,d=(0,o.jsx)(g,{content:i}),h=(0,o.jsx)(em,{name:t,onFollowButtonClick:()=>r(!0)}),m=[{label:"About",key:"2",children:d}];return c&&m.push({label:"Followers",key:"3",children:h}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:v().lowerHalf,children:(0,o.jsx)(en,{name:t,title:n,summary:s,tags:a,links:l,logo:"/logo"})}),(0,o.jsx)("div",{className:v().lowerSection,children:m.length>1?(0,o.jsx)(u.Z,{defaultActiveKey:"0",items:m}):d})]})},eB=e=>{let{name:t,streamTitle:n,summary:s,tags:a,socialHandles:l,extraPageContent:i,messages:r,currentUser:c,showChat:d,actions:h,setExternalActionToDisplay:m,setShowNotifyPopup:x,setShowFollowModal:p,supportFediverseFeatures:f,supportsBrowserNotifications:j}=e;if(!c)return null;let{id:_,displayName:w}=c,y=d&&(0,o.jsx)(eH,{messages:r,usernameToHighlight:w,chatUserId:_,isModerator:!1}),b=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(en,{name:t,title:n,summary:s,tags:a,links:l,logo:"/logo"}),(0,o.jsx)(g,{content:i})]}),C=(0,o.jsx)(em,{name:t,onFollowButtonClick:()=>p(!0)}),k=(e,t)=>(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:[(0,o.jsx)(t,{...e,style:{width:"85%"}}),(0,o.jsx)(eC,{showFollowItem:f,showNotifyItem:j,actions:h,externalActionSelected:m,notifyItemSelected:()=>x(!0),followItemSelected:()=>p(!0)})]});return(0,o.jsx)("div",{className:v().lowerSectionMobile,children:(0,o.jsx)(u.Z,{className:v().tabs,defaultActiveKey:"0",items:[d&&{label:"Chat",key:"0",children:y},{label:"About",key:"2",children:b},{label:"Followers",key:"3",children:C}],renderTabBar:k})})},eO=e=>{let{externalActionToDisplay:t,setExternalActionToDisplay:n}=e,{title:s,description:a,url:l}=t;return(0,o.jsx)(ex.Modal,{title:a||s,url:l,open:!!t,height:"80vh",handleCancel:()=>n(null)})},eP=()=>{let e=(0,a.sJ)(d.Q),t=(0,a.sJ)(d.g1),n=(0,a.sJ)(d.pT),s=(0,a.sJ)(d.di),l=(0,a.sJ)(d.db),[i,c]=(0,a.FV)(d.hz),u=(0,a.sJ)(d.j$),m=(0,a.sJ)(d.YW),{viewerCount:x,lastConnectTime:j,lastDisconnectTime:_,streamTitle:g}=(0,a.sJ)(d.RI),{extraPageContent:w,version:y,name:b,summary:C,socialHandles:k,tags:S,externalActions:Z,offlineMessage:L,chatDisabled:A,federation:I,notifications:D}=t,[M,H]=(0,r.useState)(!1),[E,P]=(0,r.useState)(!1),[z,R]=(0,r.useState)(!1),{account:G,enabled:q}=I,{browser:V}=D,{enabled:Y}=V,[W,Q]=(0,r.useState)(null),[X,K]=(0,r.useState)(!1),$=e=>{let{openExternally:t,url:n}=e;t?window.open(n,"_blank"):Q(e)},ee=Z.map(e=>(0,o.jsx)(B,{action:e,externalActionSelected:$},e.url)),et=()=>{let e=parseInt((0,p.$o)(p.dA.userVisitCount),10);Number.isNaN(e)&&(e=0),(0,p.qQ)(p.dA.userVisitCount,e+1),e>2&&!(0,p.$o)(p.dA.hasDisplayedNotificationModal)&&H(!0)},en=()=>{P(!1),H(!1),(0,p.qQ)(p.dA.hasDisplayedNotificationModal,!0)},es=()=>{let e=window.innerWidth;void 0===i&&(e<=768?c(!0):c(!1)),!i&&e<=768&&c(!0),i&&e>768&&c(!1)};(0,r.useEffect)(()=>(et(),es(),window.addEventListener("resize",es),()=>{window.removeEventListener("resize",es)}),[]),(0,r.useEffect)(()=>{K((0,f.Z)()&&Y)},[Y]);let ea=!A&&s&&n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:v().main,children:[(0,o.jsxs)(eT,{className:v().root,children:[(0,o.jsxs)("div",{className:v().mainSection,children:[(0,o.jsxs)("div",{className:v().topSection,children:[e.appLoading&&(0,o.jsx)(h.Z,{loading:!0,active:!0,paragraph:{rows:7}}),m&&(0,o.jsx)(eM,{source:"/hls/stream.m3u8",online:m}),!m&&!e.appLoading&&(0,o.jsx)(O.R,{streamName:b,customText:L,notificationsEnabled:Y,fediverseAccount:G,lastLive:_,onNotifyClick:()=>P(!0),onFollowClick:()=>R(!0)}),m&&(0,o.jsx)(eo.X,{online:m,lastConnectTime:j,lastDisconnectTime:_,viewerCount:x})]}),(0,o.jsx)("div",{className:v().midSection,children:(0,o.jsxs)("div",{className:v().buttonsLogoTitleSection,children:[!i&&(0,o.jsxs)(T,{children:[ee,q&&(0,o.jsx)(U,{size:"small",onClick:()=>R(!0)}),X&&(0,o.jsx)(eD,{open:M,notificationClicked:()=>P(!0),notificationClosed:()=>en(),children:(0,o.jsx)(J,{onClick:()=>P(!0)})})]}),(0,o.jsx)(ex.Modal,{title:"Browser Notifications",open:E,afterClose:()=>en(),handleCancel:()=>en(),children:(0,o.jsx)(eI,{})})]})}),i?(0,o.jsx)(eB,{name:b,streamTitle:g,summary:C,tags:S,socialHandles:k,extraPageContent:w,messages:u,currentUser:l,showChat:ea,actions:Z,setExternalActionToDisplay:$,setShowNotifyPopup:P,setShowFollowModal:R,supportFediverseFeatures:q,supportsBrowserNotifications:X}):(0,o.jsx)(eE,{name:b,streamTitle:g,summary:C,tags:S,socialHandles:k,extraPageContent:w,setShowFollowModal:R,supportFediverseFeatures:q}),(0,o.jsx)(F,{version:y})]}),ea&&!i&&(0,o.jsx)(N,{})]}),!i&&!1]}),W&&(0,o.jsx)(eO,{externalActionToDisplay:W,setExternalActionToDisplay:Q}),(0,o.jsx)(ex.Modal,{title:"Follow ".concat(b),open:z,handleCancel:()=>R(!1),width:"550px",children:(0,o.jsx)(eA,{account:G,name:b,handleClose:()=>R(!1)})})]})};var eU=n(37527),ez=n(85402);let eJ=e=>{let{title:t,message:n}=e;return(0,o.jsx)(ez.Z,{title:t,visible:!0,footer:null,closable:!1,keyboard:!1,width:900,centered:!0,className:"modal",children:(0,o.jsx)("p",{style:{fontSize:"1.3rem"},children:n})})},eR=e=>{let{name:t}=e,n=(0,a.sJ)(d.j$),o=(0,a.sJ)(d.RI),[s,l]=(0,r.useState)(!1),{online:i}=o,c=e=>{document.title=e},u=()=>{l(!0)},h=()=>{l(!1),c(t)},m=()=>{window.addEventListener("blur",u),window.addEventListener("focus",h)},x=()=>{window.removeEventListener("blur",u),window.removeEventListener("focus",h)};return(0,r.useEffect)(()=>(m(),()=>{x()}),[t]),(0,r.useEffect)(()=>{if(!s||!i)return;let e=n[n.length-1];"CHAT"===e.type&&c("\uD83D\uDCAC :: ".concat(t))},[n,t]),(0,r.useEffect)(()=>{s&&(i?c(" \uD83D\uDFE2 :: ".concat(t)):i||c(" \uD83D\uDD34 :: ".concat(t)))},[i,t]),null},eG=()=>(0,o.jsx)("script",{id:"server-side-hydration",nonce:"{{.Nonce}}",dangerouslySetInnerHTML:{__html:"\n	window.configHydration = {{.ServerConfigJSON}};\n	window.statusHydration = {{.StatusJSON}};\n	"}}),eq=()=>{let e=(0,a.sJ)(d.g1),{appearanceVariables:t,customStyles:n}=e,s=Object.keys(t).filter(e=>!!t[e]).map(e=>"--".concat(e,": ").concat(t[e]));return(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n				:root {\n					".concat(s.join(";\n"),"\n				}\n				").concat(n,"\n			")}})},eV=()=>{let e=(0,a.sJ)(d.g1),{name:t,title:n,customStyles:l}=e,u=(0,a.sJ)(d.di),h=(0,a.sJ)(d.ap),m=(0,r.useRef)(null),{chatDisabled:x}=e;return(0,c.Z)(!0),(0,r.useEffect)(()=>{!function(e){let t=e=>{let t=e.getAttribute("rel");e.setAttribute("rel","".concat(t," noopener noreferrer"))};e.querySelectorAll("a").forEach(e=>t(e));let n=new MutationObserver(function(e){for(let n of e)for(let o of n.addedNodes)o instanceof HTMLElement&&"a"===o.tagName.toLowerCase()&&t(o)});n.observe(e,{attributes:!1,childList:!0,subtree:!0})}(m.current)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)(eG,{}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/img/favicon/apple-icon-57x57.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/img/favicon/apple-icon-60x60.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/img/favicon/apple-icon-72x72.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/img/favicon/apple-icon-76x76.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/img/favicon/apple-icon-114x114.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/img/favicon/apple-icon-120x120.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/img/favicon/apple-icon-144x144.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/img/favicon/apple-icon-152x152.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/favicon/apple-icon-180x180.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/img/favicon/android-icon-192x192.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/img/favicon/favicon-96x96.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/img/favicon/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,o.jsx)("link",{href:"/api/auth/provider/indieauth"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,o.jsx)("meta",{name:"msapplication-TileImage",content:"/img/favicon/ms-icon-144x144.png"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,o.jsx)("style",{children:l}),(0,o.jsx)("base",{target:"_blank"})]}),(0,o.jsxs)(i(),{children:[t?(0,o.jsx)("title",{children:t}):(0,o.jsx)("title",{children:"{{.Name}}"}),(0,o.jsx)("meta",{name:"description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:site_name",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"og:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:type",content:"video.other"}),(0,o.jsx)("meta",{property:"video:tag",content:"{{.TagsString}}"}),(0,o.jsx)("meta",{property:"og:image",content:"{{.RequestedURL}}{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:url",content:"{{.RequestedURL}}{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:alt",content:"{{.RequestedURL}}{{.Image}}"}),(0,o.jsx)("meta",{property:"og:video",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:secure_url",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:height",content:"315"}),(0,o.jsx)("meta",{property:"og:video:width",content:"560"}),(0,o.jsx)("meta",{property:"og:video:type",content:"text/html"}),(0,o.jsx)("meta",{property:"og:video:actor",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"twitter:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"twitter:image",content:"{{.Image}}"}),(0,o.jsx)("meta",{property:"twitter:card",content:"player"}),(0,o.jsx)("meta",{property:"twitter:player",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"twitter:player:width",content:"560"}),(0,o.jsx)("meta",{property:"twitter:player:height",content:"315"})]}),(0,o.jsx)(d.me,{}),(0,o.jsx)(eR,{name:t}),(0,o.jsx)(eq,{}),(0,o.jsxs)(s.Z,{ref:m,style:{minHeight:"100vh"},children:[(0,o.jsx)(eU.h,{name:n||t,chatAvailable:u,chatDisabled:x}),(0,o.jsx)(eP,{}),h&&(0,o.jsx)(eJ,{title:h.title,message:h.message})]})]})};function eY(){return(0,o.jsx)(eV,{})}},83469:function(e,t,n){"use strict";function o(){return"serviceWorker"in navigator&&"PushManager"in window}n.d(t,{Z:function(){return o}})},13959:function(e){e.exports={button:"ActionButton_button__z5Z2c",icon:"ActionButton_icon__EPp7Q"}},97038:function(e){e.exports={item:"ActionButtonMenu_item__OJQdr",buttonWrap:"ActionButtonMenu_buttonWrap__WQ9kt",icon:"ActionButtonMenu_icon__edY1D",menu:"ActionButtonMenu_menu__GChDk"}},12270:function(e){e.exports={row:"ActionButtonRow_row__SiEGe"}},47900:function(e){e.exports={root:"ContentHeader_root__HaUG0",row:"ContentHeader_row__9Q8gH",logoTitleSection:"ContentHeader_logoTitleSection__Z8pUc",logo:"ContentHeader_logo__wo_HN",titleSection:"ContentHeader_titleSection___6Y15",title:"ContentHeader_title__E_DsI",subtitle:"ContentHeader_subtitle__n1Wew",tagList:"ContentHeader_tagList__rx3jY"}},79252:function(e){e.exports={root:"UserDropdown_root__IdxfQ","ant-space":"UserDropdown_ant-space__XJTZ3","ant-space-item":"UserDropdown_ant-space-item__w4nC2",userIcon:"UserDropdown_userIcon__A5XgE",username:"UserDropdown_username__nVyPA"}},66009:function(e){e.exports={header:"FollowModal_header__la1ji",buttons:"FollowModal_buttons__tt4Mc",instructions:"FollowModal_instructions__HiKFF",footer:"FollowModal_footer__AjucH",account:"FollowModal_account__cmHkm",logo:"FollowModal_logo__Ew8xK",username:"FollowModal_username__A_OTw",name:"FollowModal_name__Sf_TP"}},17725:function(e){e.exports={root:"Content_root__h1mNK",mainSection:"Content_mainSection__Gk78Y",topSection:"Content_topSection__JIZi0",lowerSection:"Content_lowerSection__BZHYI",lowerSectionMobile:"Content_lowerSectionMobile__hRr0_",tabs:"Content_tabs__LMcZ1",leftCol:"Content_leftCol__U2TDq",loadingSpinner:"Content_loadingSpinner__mDlYC",main:"Content_main__XVf63"}},10808:function(e){e.exports={pageContentContainer:"CustomPageContent_pageContentContainer__EG4tU",customPageContent:"CustomPageContent_customPageContent__Mr981",summary:"CustomPageContent_summary___Zgps"}},67917:function(e){e.exports={footer:"Footer_footer__mPuvf",links:"Footer_links__7bBxV"}},31764:function(e){e.exports={header:"Header_header__U4Ro1",logoImage:"Header_logoImage__beIL2",logo:"Header_logo__HLZ6Z",title:"Header_title__FIts2"}},74933:function(e){e.exports={root:"Logo_root__jKiJC",container:"Logo_container__A4UYT",image:"Logo_image__Ahkom"}},77011:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}},88335:function(e){e.exports={outerContainer:"OfflineBanner_outerContainer__3AbsB",innerContainer:"OfflineBanner_innerContainer__zTm13",bodyText:"OfflineBanner_bodyText__nNNy0",separator:"OfflineBanner_separator___j_Ss",lastLiveDate:"OfflineBanner_lastLiveDate___UZdO",clockIcon:"OfflineBanner_clockIcon__s0DB_",header:"OfflineBanner_header__Vu20o",footer:"OfflineBanner_footer__o3Zl5",actionLink:"OfflineBanner_actionLink__b4Mwa"}},12341:function(e){e.exports={root:"Sidebar_root__8HE0A"}},573:function(e){e.exports={link:"SocialLinks_link___CcSm",links:"SocialLinks_links__gOAb7"}},37970:function(e){e.exports={statusbar:"Statusbar_statusbar__AtVnB"}},21890:function(e){e.exports={followers:"FollowerCollection_followers__e_EUS",noFollowers:"FollowerCollection_noFollowers__UaCVW"}},69833:function(e){e.exports={follower:"SingleFollower_follower__EyBDI",avatar:"SingleFollower_avatar__V9jHG",account:"SingleFollower_account__Z66vo",placeholder:"SingleFollower_placeholder__CgsfJ"}}},function(e){e.O(0,[8909,3903,4267,575,5938,6395,1082,5360,7076,7066,4151,7466,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);