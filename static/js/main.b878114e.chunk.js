(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var i=t(1),r=t.n(i),a=t(13),o=t.n(a),s=(t(21),t(7)),c=t(2),d=t(6),l=Object(i.createContext)(),h=t(0);var m,p=function(e){var n=e.children,t=Object(i.useState)(!0),r=Object(d.a)(t,2),a=r[0],o=r[1],s=Object(i.useState)(!0),c=Object(d.a)(s,2),m=c[0],p=c[1],j=Object(i.useState)(!1),x=Object(d.a)(j,2),g=x[0],b=x[1],f=Object(i.useState)(""),u=Object(d.a)(f,2),w=u[0],O=u[1],v=Object(i.useState)(""),y=Object(d.a)(v,2),k={language:a,setLanguage:o,loading:m,setLoading:p,toggle:g,setToggle:b,type:y[0],setType:y[1],framework:w,setFramework:O};return Object(h.jsx)(l.Provider,{value:k,children:n})},j=t(3),x=t(4),g=x.a.div(m||(m=Object(j.a)(["\n  background: #4B0082;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 7%;\n\n  .marker {\n    margin-left: 100px;\n    width: 20%;\n    height: 40%;\n    display: flex;\n    justify-content: center;\n\n    .nome {\n      width: 100%;\n      :hover { transform: scale(1.05) }\n    }\n    display: flex;\n\n    .logo { display: none; }\n  }\n\n  .menu-section {\n    margin-right: 10%;\n    \n    .menu-toggle {\n      display: none;\n    }\n\n    nav {\n      ul {\n        display: flex;\n        li {\n          list-style: none;\n          a {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n          \n            text-decoration: none;\n            color: white;\n            text-transform: uppercase;\n            font-size: 1.8rem; \n            padding: 2.4rem;\n            transition: all 250ms linear 0s;\n    \n            :hover {\n              background: rgba(28, 28, 28, 0.45);\n              color: #8A2BE2;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  // Responsividade\n  @media (max-width: 1420px) { \n    .marker { \n      width: 25%;\n      height: 70%;\n    } }\n  @media (max-width: 900px) { .marker { width: 30%; } }\n  @media (max-width: 890px) { .marker { width: 35%; } }\n  @media (max-width: 745px) { \n    .marker {\n      width: 10%;\n      .nome { display: none; }\n      .logo {\n        display: block;\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n\n  @media (max-width: 600px) {\n    nav { display: none; }\n    \n    .marker {\n      margin-left: 50px;\n      width: 20%;\n      height: 90%;\n    }\n\n    .menu-section {\n      .menu-toggle {\n        display: block;\n        width: 40px;\n        height: 30px;\n        margin-right: 20px;\n  \n        .one, .two, .three {\n          background-color: #fff;\n          height: 5px;\n          width: 100%;\n          margin: 6px auto;\n\n          transition-duration: 0.3s;\n        }\n      }\n    }\n\n    .on {\n      background-color: #1D1E2C;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100vw;\n      height: 100vh;\n      z-index: 10;\n\n      nav {\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\n        ul {\n          display: flex;\n          flex-direction: column;\n          justify-content: space-evenly;\n          height: 50vh;\n\n          li { \n            font-weight: bolder; \n\n            a {\n              font-size: 2.6rem;\n              transition-duration: 0.5s;\n            }\n          }\n        }\n      }\n\n      .menu-toggle {\n        position: absolute;\n        margin-right: 65px;\n        margin-top: 18px;\n        right: 0;\n        top: 15;\n\n        .one { transform: rotate(45deg) translate(7px, 6px) }\n        .two { opacity: 0 }\n        .three { transform: rotate(-45deg) translate(9.5px, -10px) }\n      }\n    }\n  }\n"])));var b,f=function(){var e=Object(i.useContext)(l),n=e.language,t=e.toggle,r=e.setToggle,a=function(e,n,t){return Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{onClick:function(){return r(!1)},to:"/about",children:e})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{onClick:function(){return r(!1)},to:"/projects",children:n})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{onClick:function(){return r(!1)},to:"/contact",children:t})})]})};return Object(h.jsxs)(g,{children:[Object(h.jsxs)("div",{className:"marker",children:[Object(h.jsx)("img",{className:"nome",onClick:function(){return window.location.replace("/","_self")},src:"/gif/Name.gif",alt:"Nome"}),Object(h.jsx)("img",{className:"logo",onClick:function(){return window.location.replace("/","_self")},src:"/images/Logo.png",alt:"Logo"})]}),Object(h.jsxs)("div",{className:t?"menu-section on":"menu-section",children:[Object(h.jsxs)("div",{onClick:function(){return r(!t)},className:"menu-toggle",children:[Object(h.jsx)("div",{className:"one"}),Object(h.jsx)("div",{className:"two"}),Object(h.jsx)("div",{className:"three"})]}),Object(h.jsxs)("nav",{children:[n&&a("About","Projects","Contact"),!n&&a("Sobre","Projetos","Contato")]})]})]})},u=x.a.footer(b||(b=Object(j.a)(["\n  background: rgba(117, 16, 247, 0.4);\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  \n  margin-bottom: 15px;\n  margin-right: 10px;\n\n  width: 5%;\n  height: 4vh;\n  display: flex;\n  justify-content: space-evenly;\n\n  border: 2px solid rgba(117, 16, 247, 0.7);\n  border-radius: 30px 30px;\n\n  h4 {    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  // Responsividade\n  @media (max-width: 2050px) { width: 8%; }\n  @media (max-width: 1370px) { width: 9%; }\n  @media (max-width: 1070px) { width: 11%; }\n  @media (max-width: 910px) { width: 13%; }\n  @media (max-width: 720px) { width: 14%; }\n  @media (max-width: 655px) { width: 17%; }\n  @media (max-width: 600px) { width: 18%; }\n  @media (max-width: 500px) { width: 26%; }\n  @media (max-width: 410px) { width: 25%; }\n  @media (max-width: 390px) { width: 30%; }\n  @media (max-width: 250px) { width: 40%; }\n"])));var w,O=function(){var e=Object(i.useContext)(l),n=e.language,t=e.setLanguage;return Object(h.jsxs)(u,{children:[Object(h.jsx)("h4",{children:n?"To:":"Para:"}),Object(h.jsx)("h4",{onClick:function(){return t(!n)},children:n?"Port":"Eng"})]})},v=x.a.div(w||(w=Object(j.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  div {\n    animation: is-rotating 1s infinite;\n    border: 6px solid white;\n    border-radius: 50%;\n    border-top-color: #7510f7;\n    width: 50px;\n    height: 50px;\n  }\n\n  @keyframes is-rotating {\n    to {\n      transform: rotate(1turn);\n    }\n  }\n"])));var y,k=function(){return Object(h.jsx)(v,{children:Object(h.jsx)("div",{})})},z=x.a.div(y||(y=Object(j.a)(["\n  background-color: #1D1E2C;\n  height: 95%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n\n  div {\n    height: 50%;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: space-between;\n\n    .up-container {\n      height: 50%;\n      display: flex;\n      flex-direction: column;\n      text-align: center;\n      justify-content: center;\n    }\n  \n    .down-container {\n      height: 45%;\n      display: flex;\n      flex-direction: row;\n      text-align: center;\n      justify-content: center;\n      img {\n        background: #4B0082;\n        border-radius: 50%;\n        width: 200px;\n      }\n    }\n  }\n\n  @media (max-width: 550px) {\n    .up-container { font-size: 1.3rem; }\n    .down-container { img { width: 220px; } }\n  }\n\n  @media (max-width: 500px) {\n    .up-container { font-size: 1.1rem; }\n    .down-container { img { width: 180px; } }\n  }\n"])));var N,L=function(){var e=Object(i.useContext)(l),n=e.language,t=e.loading,r=e.setLoading;return Object(i.useEffect)((function(){return setTimeout((function(){return r(!1)}),1500)})),Object(h.jsx)(h.Fragment,{children:t?Object(h.jsx)(k,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{}),Object(h.jsx)(z,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"up-container",children:[n&&Object(h.jsx)("h1",{children:"Designer, Front and Back-end Developer"}),!n&&Object(h.jsx)("h1",{children:"Designer, Desenvolvedor Front e Back-end"}),n&&Object(h.jsx)("h2",{children:"I just love everything that I code, even the bugs."}),!n&&Object(h.jsx)("h2",{children:"Eu simplesmente amo tudo o que eu programo, at\xe9 mesmos os bugs."})]}),Object(h.jsx)("div",{className:"down-container",children:Object(h.jsx)("img",{src:"/images/Avatar.png",alt:"Avatar"})})]})}),Object(h.jsx)(O,{})]})})},C=x.a.main(N||(N=Object(j.a)([" \n  height: 87%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n\n  .up-container {\n    height: 35%;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n\n    .image { padding: 2%; }\n    \n    .text {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n\n      h2 {\n        text-align: center;\n        height: 20%;\n        font-weight: bolder;\n        //font-size: 3rem;\n      }\n\n      p {\n        height: 35%;\n        line-height: 1.7;\n        //font-size: 2.2rem;\n\n        a {\n          color: violet;\n          font-weight: bold;\n          text-decoration: none;\n        }\n      }\n    }\n  }\n\n  .down-container {\n    width: 80%;\n    height: 60%;\n    display: flex;\n    justify-content: space-between;\n\n    .left {\n      background-color: pink;\n      width: 30%;\n    }\n\n    .right {\n      background-color: #2a2d43;\n      box-shadow: inset 0 0 1em #2a2d43, 0 0 1em black;\n      border-bottom: solid 8px #7929C4;\n      width: 40%;\n      display: flex;\n      justify-content: space-evenly;\n      align-items: end;\n      \n      .skill {\n        display: flex;\n        flex-direction: column;\n        justify-content: end;\n        \n        p {\n          text-align: center;\n          font-weight: bold;\n          width: 100%;\n          height: 5%;\n        }\n        \n        .block {\n          background-color: #7929C4;\n          width: 75px;\n        }\n      }\n    }   \n  }\n\n  // Responsividade\n  @media (min-width: 2035px) {\n    .text {\n      h2 { font-size: 3rem; }\n      p { font-size: 2.2rem; }\n    }\n  }\n  @media (max-width: 2035px) {\n    .image {\n      img { width: 250px }\n    }\n    .text {\n      padding: 1%;\n      h2 { font-size: 2.6rem; }\n      p { font-size: 2.1rem; }\n    }\n  }\n  @media (max-width: 1952px) {\n    .down-container { .right { width: 50%; } }\n    .text {\n      h2 { font-size: 2.4rem; }\n      p { font-size: 1.9rem; }\n    }\n  }\n  @media (max-width: 1792px) {\n    .down-container { .right { width: 55%; } }\n    .image {\n      img { width: 230px }\n    }\n      h2 { font-size: 2.2rem; }\n      p { font-size: 1.8rem; }\n    }\n  }\n  @media (max-width: 1690px) {\n    .image {\n      img { width: 200px }\n    }\n    .text {\n      h2 { font-size: 2rem; }\n      p { font-size: 1.6rem; }\n    }\n  }\n  @media (max-width: 1498px) {\n    .down-container { .right { width: 57%; } }\n    .image {\n      img { width: 180px }\n    }\n    .text {\n      h2 { font-size: 1.9rem; }\n      p { font-size: 1.5rem; }\n    }\n  }\n  @media (max-width: 1395px) {\n    .down-container { .right { width: 58%; } }\n    .text {\n      h2 { font-size: 1.8rem; }\n      p { font-size: 1.4rem; }\n    }\n  }\n  @media (max-width: 1315px) {\n    .image {\n      img { width: 150px }\n    }\n    .text {\n      h2 { font-size: 1.7rem; }\n      p { font-size: 1.3rem; }\n    }\n  }\n  @media (max-width: 1205px) {\n    .image {\n      img { width: 130px }\n    }\n    .text {\n      h2 { font-size: 1.6rem; }\n      p { font-size: 1.2rem; }\n    }\n  }\n  @media (max-width: 1115px) {\n    .down-container { .right { display: none } }\n    .image {\n      img { width: 130px }\n    }\n    .text {\n      h2 { font-size: 1.5rem; }\n      p { font-size: 1.1rem; }\n    }\n  }\n  @media (max-width: 1020px) {\n    .image { display: none; }\n    .text {\n      h2 { font-size: 1.4rem; }\n      p { font-size: 1rem; }\n    }\n  }\n  @media (max-width: 625px) {\n    .text {\n      h2 { font-size: 1.8rem; }\n      p { font-size: 1.4rem; }\n    }\n  }\n  @media (max-width: 545px) {\n    .text {\n      h2 { font-size: 1.6rem; }\n      p { font-size: 1.2rem; }\n    }\n  }\n"])));var S,T=function(){var e=Object(i.useContext)(l).language,n=function(){var e=new Date,n=new Date("1995-08-28"),t=Math.abs(e.getTime()-n.getTime()),i=Math.ceil(t/864e5);return Math.floor(i/360)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{}),e&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(C,{children:[Object(h.jsxs)("div",{className:"up-container",children:[Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:"/images/Computer.png",alt:"Icon Computer"})}),Object(h.jsxs)("div",{className:"text",children:[Object(h.jsxs)("h2",{children:["Hey! my name is Vincenzo, I am a ",n()," years old developer from Brazil."]}),Object(h.jsxs)("p",{children:["For the past year I have developed a fascination for technology and programming languages, so I decided to start studing Information Systems at ",Object(h.jsx)("a",{href:"https://www.unisanta.br/",target:"blank",children:"University Santa Cecilia"})," in Santos/Brazil. I dropped university in ",Object(h.jsx)("time",{children:Object(h.jsx)("b",{children:"2021"})})," because I expected that would be more classes about programming skills. Two mounths after dropping university I started studing Web Development at ",Object(h.jsx)("a",{href:"https://www.betrybe.com/",target:"blank",children:"Trybe"}),"."]})]})]}),Object(h.jsxs)("div",{className:"down-container",children:[Object(h.jsx)("div",{className:"left"}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsxs)("div",{className:"skill",children:[Object(h.jsx)("p",{children:"HTML5"}),Object(h.jsx)("div",{className:"block",style:{height:"120px"}})]}),Object(h.jsxs)("div",{className:"skill",children:[Object(h.jsx)("p",{children:"CSS3"}),Object(h.jsx)("div",{className:"block",style:{height:"180px"}})]}),Object(h.jsxs)("div",{className:"skill",children:[Object(h.jsx)("p",{children:"JavaScript"}),Object(h.jsx)("div",{className:"block",style:{height:"380px"}})]}),Object(h.jsxs)("div",{className:"skill",children:[Object(h.jsx)("p",{children:"TypeScript"}),Object(h.jsx)("div",{className:"block",style:{height:"350px"}})]}),Object(h.jsxs)("div",{className:"skill",children:[Object(h.jsx)("p",{children:"NodeJS"}),Object(h.jsx)("div",{className:"block",style:{height:"300px"}})]}),Object(h.jsxs)("div",{className:"skill",children:[Object(h.jsx)("p",{children:"MySQL"}),Object(h.jsx)("div",{className:"block",style:{height:"320px"}})]})]})]})]}),Object(h.jsx)(O,{})]}),!e&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(C,{children:[Object(h.jsxs)("div",{className:"up-container",children:[Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:"/images/Computer.png",alt:"Icon Computer"})}),Object(h.jsxs)("div",{className:"text",children:[Object(h.jsxs)("h2",{children:["Hey! meu nome \xe9 Vincenzo, Eu sou um desenvolvedor Brasileiro de ",n()," anos."]}),Object(h.jsxs)("p",{children:["Nos ultimos anos eu criei um paix\xe3o e fasc\xednio por tecnologia e programa\xe7\xe3o, ent\xe3o eu decidi come\xe7ar a estudar Sistema de Informa\xe7\xe3o na ",Object(h.jsx)("a",{href:"https://www.unisanta.br/",target:"blank",children:"Universidade Santa Cecilia"})," em Santos/Brasil. Eu acabei saindo da faculdade em ",Object(h.jsx)("time",{children:Object(h.jsx)("b",{children:"2021"})})," pois eu entrei tendo a expectativa que haveria mais aulas voltadas \xe0 programa\xe7\xe3o. Ap\xf3s dois meses de ter saido da Universidade eu come\xe7ei a estudar Desenvolvimento Web na ",Object(h.jsx)("a",{href:"https://www.betrybe.com/",target:"blank",children:"Trybe"}),"."]})]})]}),Object(h.jsxs)("div",{className:"down-container",children:[Object(h.jsx)("div",{className:"left"}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsxs)("div",{className:"skill",children:[Object(h.jsx)("p",{children:"HTML5"}),Object(h.jsx)("div",{className:"block",style:{height:"120px"}})]}),Object(h.jsxs)("div",{className:"skill",children:[Object(h.jsx)("p",{children:"CSS3"}),Object(h.jsx)("div",{className:"block",style:{height:"180px"}})]}),Object(h.jsxs)("div",{className:"skill",children:[Object(h.jsx)("p",{children:"JavaScript"}),Object(h.jsx)("div",{className:"block",style:{height:"380px"}})]}),Object(h.jsxs)("div",{className:"skill",children:[Object(h.jsx)("p",{children:"TypeScript"}),Object(h.jsx)("div",{className:"block",style:{height:"350px"}})]}),Object(h.jsxs)("div",{className:"skill",children:[Object(h.jsx)("p",{children:"NodeJS"}),Object(h.jsx)("div",{className:"block",style:{height:"300px"}})]}),Object(h.jsxs)("div",{className:"skill",children:[Object(h.jsx)("p",{children:"MySQL"}),Object(h.jsx)("div",{className:"block",style:{height:"320px"}})]})]})]})]}),Object(h.jsx)(O,{})]})]})},M=x.a.div(S||(S=Object(j.a)(["\n  height: 4vh;\n  background: #7510f7;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  div {\n    width: 55vw;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    \n    div {\n      display: flex;\n      width: 250px;\n      justify-content: center;\n      align-items: center;\n  \n      .select {\n        position: relative;\n        display: flex;\n        width: 120px;\n        height: 30px;\n        background: #5c6664;\n        overflow: hidden;\n        border-radius: .25em;\n        \n        select {\n          -webkit-appearance:none;\n          -moz-appearance:none;\n          -ms-appearance:none;\n          appearance:none;\n          outline:0;\n          box-shadow:none;\n          border:0!important;\n          background: #5c6664;\n          background-image: none;\n          flex: 1;\n          padding: 0 .5em;\n          color:#fff;\n          cursor:pointer;\n          font-size: 1em;\n          font-family: 'Open Sans', sans-serif;\n          // text-align: center;\n        }\n      }\n    }\n  }\n"])));var A,F=function(){var e=Object(i.useContext)(l),n=e.language,t=e.setType,r=e.setFramework,a=function(e,t,i){return Object(h.jsx)("option",{value:e,children:n?t:i})};return Object(h.jsx)(M,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:n?"Project Type:":"Tipo de Projeto:"}),Object(h.jsx)("div",{className:"select",children:Object(h.jsxs)("select",{onChange:function(e){var n=e.target.value;return t(n)},children:[a("","All","Todos"),a("Front-end","Front-end","Front-end"),a("Back-end","Back-end","Back-end"),a("Test","Test","Teste")]})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Framework:"}),Object(h.jsx)("div",{className:"select",children:Object(h.jsxs)("select",{onChange:function(e){var n=e.target.value;return r(n)},children:[a("","All","Todos"),a("None","None","Nenhum"),a("React","React","React"),a("Docker","Docker","Docker"),a("MySQL","MySQL","MySQL")]})})]})]})})},V=x.a.div(A||(A=Object(j.a)(["\n  background-color: white;\n  border: 4px solid rgba(0, 0, 0, 0.4);\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 280px;\n  margin: 10px;\n  overflow: hidden;\n  width: 250px;\n\n  h3 {\n    height: 12%;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n\n  img {\n    width: 100%;\n    height: 65%;\n  }\n\n  div {\n    width: 100%;\n    height: 18%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n\n    img {\n      width: 35px;\n      height: 35px;\n    }\n  }\n"]))),D=t.p+"static/media/web.7c99c6b1.png",P=t.p+"static/media/code.8cbecd71.png",B=t.p+"static/media/download.de87af09.png";var I,J=function(e){var n=e.theProject,t=n.name,i=n.internet,r=n.repositorie,a=n.downloadLink,o=n.gif;return Object(h.jsxs)(V,{children:[Object(h.jsx)("h3",{children:t}),o?Object(h.jsx)("img",{src:""+"/gif/".concat(t,".gif"),alt:t}):Object(h.jsx)("img",{src:""+"/images/".concat(t,".jpg"),alt:t}),Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{hidden:!o,href:i,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:D,alt:"Link to Site"})}),Object(h.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:P,alt:"Link to GitHub"})}),Object(h.jsx)("a",{hidden:!o,href:a,download:t,children:Object(h.jsx)("img",{src:B,alt:"Link to Site"})})]})]})},R=x.a.div(I||(I=Object(j.a)(["\n  main {\n    display: flex;\n    justify-content: space-evenly;\n    flex-flow: row wrap;\n    padding: 48px 30px;\n  }\n"]))),_=[{id:1,name:"Pixels Art",internet:"https://vincenzofdg.github.io/Pixels-Art",repositorie:"https://github.com/Vincenzofdg/Pixels-Art",downloadLink:"https://github.com/Vincenzofdg/Pixels-Art/archive/refs/heads/master.zip",type:"Front-end",framework:"None",gif:!0},{id:2,name:"To Do List",internet:"https://vincenzofdg.github.io/To-Do-List",repositorie:"https://github.com/Vincenzofdg/To-Do-List",downloadLink:"https://github.com/Vincenzofdg/To-Do-List/archive/refs/heads/master.zip",type:"Front-end",framework:"None",gif:!0},{id:3,name:"Mistery Letter",internet:"https://vincenzofdg.github.io/Mistery-Letter",repositorie:"https://github.com/Vincenzofdg/Mistery-Letter",downloadLink:"https://github.com/Vincenzofdg/Mistery-Letter/archive/refs/heads/master.zip",type:"Front-end",framework:"None",gif:!0},{id:4,name:"Hogwarts Application",internet:"https://vincenzofdg.github.io/Hogwarts-Application",repositorie:"https://github.com/Vincenzofdg/Hogwarts-Application",downloadLink:"https://github.com/Vincenzofdg/Hogwarts-Application/archive/refs/heads/master.zip",type:"Front-end",framework:"None",gif:!0},{id:5,name:"Shopping Cart",internet:"https://vincenzofdg.github.io/Shopping-Cart",repositorie:"https://github.com/Vincenzofdg/Shopping-Cart",downloadLink:"https://github.com/Vincenzofdg/Shopping-Cart/archive/refs/heads/master.zip",type:"Front-end",framework:"None",gif:!0},{id:6,name:"Shopping Shirt",internet:"https://vincenzofdg.github.io/Shopping-Shirt",repositorie:"https://github.com/Vincenzofdg/Shopping-Shirt",downloadLink:"https://github.com/Vincenzofdg/Shopping-Shirt/archive/refs/heads/master.zip",type:"Front-end",framework:"None",gif:!0},{id:7,name:"Naruto Movies",internet:"https://vincenzofdg.github.io/Naruto-Movies",repositorie:"https://github.com/Vincenzofdg/Naruto-Movies",downloadLink:"https://github.com/Vincenzofdg/Naruto-Movies/archive/refs/heads/master.zip",type:"Front-end",framework:"React",gif:!0},{id:8,name:"Movie Library",internet:"https://vincenzofdg.github.io/Movie-Library",repositorie:"https://github.com/Vincenzofdg/Movie-Library",downloadLink:"https://github.com/Vincenzofdg/Movie-Library/archive/refs/heads/master.zip",type:"Front-end",framework:"React",gif:!0},{id:9,name:"Testes Unit\xe1rios",internet:"",repositorie:"https://github.com/Vincenzofdg/Trybe/tree/master/M.01_07%20-%20Introdu%C3%A7%C3%A3o%20%C3%A0%20JavaScript%20ES6%20e%20Testes%20Unit%C3%A1rios/04%20-%20Projeto:%20Js%20Unit%20Tests%20(27.07.21)",downloadLink:"",type:"Test",framework:"None",gif:!1},{id:10,name:"Jest (Mocking)",internet:"",repositorie:"https://github.com/Vincenzofdg/Trybe/tree/master/M.01_10%20-%20Testes%20Automatizados%20com%20Jest/04%20-%20Projeto:%20Jest%20Ass%C3%ADncrono%20e%20Mocking%20(20.08.21)",downloadLink:"",type:"Test",framework:"None",gif:!1},{id:11,name:"React Testing Library",internet:"",repositorie:"https://github.com/Vincenzofdg/Trybe/tree/master/M.02_05%20-%20Testes%20Automatizados%20com%20React%20Testing%20Library/04%20-%20Projeto:%20Testes%20em%20React%20(29.09.21)",downloadLink:"",type:"Test",framework:"React",gif:!1},{id:12,name:"To Do List (Docker)",internet:"",repositorie:"https://github.com/Vincenzofdg/Trybe/tree/master/M.03_01%20-%20Docker:%20Utilizando%20Containers/04%20-%20Projeto:%20Docker%20To%20Do%20List%20(01.12.21)",downloadLink:"",type:"Back-end",framework:"Docker",gif:!1},{id:13,name:"All For One",internet:"",repositorie:"https://github.com/Vincenzofdg/Trybe/tree/master/M.03_02%20-%20Introdu%C3%A7%C3%A3o%20%C3%A0%20SQL/05%20-%20Projeto:%20All%20For%20One%20(08.12.21)",downloadLink:"",type:"Back-end",framework:"MySQL",gif:!1},{id:14,name:"One For All",internet:"",repositorie:"https://github.com/Vincenzofdg/Trybe/tree/master/M.03_03%20-%20Fun%C3%A7%C3%B5es%20SQL,%20JOINs%20e%20Normaliza%C3%A7%C3%A3o/04%20-%20Projeto:%20One%20for%20All%20(04.01.2022)",downloadLink:"",type:"Back-end",framework:"MySQL",gif:!1},{id:15,name:"Talker Manager",internet:"",repositorie:"https://github.com/Vincenzofdg/Trybe/tree/master/M.03_04%20-%20Introdu%C3%A7%C3%A3o%20ao%20desenvolvimento%20Web%20com%20Node.js/05%20-%20Projeto:%20Talker%20Manager%20(15.02.22)",downloadLink:"",type:"Back-end",framework:"MySQL",gif:!1}];var E=function(){var e=Object(i.useContext)(l),n=e.type,t=e.framework,r=e.institution;return Object(h.jsxs)(R,{children:[Object(h.jsx)(f,{}),Object(h.jsx)(F,{}),Object(h.jsx)("main",{children:_.sort((function(e,n){var t=e.name,i=n.name;return t<i?-1:t>i?1:0})).filter((function(e){var t=e.type;return""!==n?t===n:t})).filter((function(e){var n=e.framework;return""!==t?n===t:n})).filter((function(e){var n=e.origin;return""!==r?n===r:n})).map((function(e){return Object(h.jsx)(J,{theProject:e},e.id)}))})]})};var Q=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{}),Object(h.jsx)("h1",{children:"CONTACT"})]})};var H=function(){return Object(h.jsx)(p,{children:Object(h.jsx)(s.a,{basename:"",children:Object(h.jsxs)(c.c,{children:[Object(h.jsx)(c.a,{exact:!0,path:"/",element:Object(h.jsx)(L,{})}),Object(h.jsx)(c.a,{exact:!0,path:"/about",element:Object(h.jsx)(T,{})}),Object(h.jsx)(c.a,{path:"/projects",element:Object(h.jsx)(E,{})}),Object(h.jsx)(c.a,{path:"/contact",element:Object(h.jsx)(Q,{})})]})})})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(H,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b878114e.chunk.js.map