(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t.n(i),s=t(13),r=t.n(s),a=(t(21),t(5)),l=t(2),j=t(4),o=Object(i.createContext)(),d=t(0);var h,b,x,u,O=function(e){var n=e.children,t=Object(i.useState)("english"),c=Object(j.a)(t,2),s=c[0],r=c[1],a=Object(i.useState)(!0),l=Object(j.a)(a,2),h={language:s,setLanguage:r,loading:l[0],setLoading:l[1]};return Object(d.jsx)(o.Provider,{value:h,children:n})},g=t(6),p=t(7),m=p.a.div(h||(h=Object(g.a)(["\n\n  height: 93vh;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: space-between;\n\n  .upper-container {\n    height: 60vh;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: space-evenly;\n  }\n\n  // Responsividade\n  /* @media (max-width: 1700px) {\n    color: pink;\n  } */\n"]))),v=p.a.div(b||(b=Object(g.a)(["\n\n  background-color:  #7510f7;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  height: 7vh;\n  width: 100%;\n  margin: auto;\n\n  a {\n    height: inherit;\n    width: 5vw;\n\n    img {\n      width: 80px;\n      height: inherit;\n      padding: 7px;\n    }\n  }\n\n  ul {\n    display: flex;\n    li {\n      list-style: none;\n\n      a {\n        text-decoration: none;\n        color: white;\n        text-transform: uppercase;\n        font-size: 1.8rem; \n        padding: 2.4rem;\n        transition: all 250ms linear 0s;\n\n        :hover {\n          background: rgba(28, 28, 28, 0.45);\n        }\n      }\n    }\n  }\n"]))),f=p.a.div(x||(x=Object(g.a)(["\n\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  div {\n    animation: is-rotating 1s infinite;\n    border: 6px solid #e5e5e5;\n    border-radius: 50%;\n    border-top-color: #7510f7;\n    width: 50px;\n    height: 50px;\n  }\n\n  @keyframes is-rotating {\n    to {\n      transform: rotate(1turn);\n    }\n  }\n\n"]))),y=p.a.footer(u||(u=Object(g.a)(["\n\n  position: absolute;\n  bottom: 0;\n  right: 0;\n\n  width: 15%;\n  height: 1.5vw;\n  display: flex;\n  justify-content: space-between;\n\n  h4 {\n    background: rgba(117, 16, 247, 0.4);\n    \n    width: 40%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  div {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n\n    h4 {\n      width: 50%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      :hover {\n        background: rgba(117, 16, 247, 0.7);\n      }\n    }\n  }\n"]))),w=t.p+"static/media/logo.17b0b50b.png";var k=function(){var e=Object(i.useContext)(o).language,n=function(e,n,t){return Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/about",children:e})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/projects",children:n})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/contact",children:t})})]})};return Object(d.jsxs)(v,{children:[Object(d.jsx)("a",{className:"logo",href:"/",children:Object(d.jsx)("img",{id:"logo",src:w,alt:"Logo"})}),Object(d.jsxs)("nav",{children:["english"===e&&n("About","Projects","Contact"),"portuguese"===e&&n("Sobre","Projetos","COntato")]})]})};var S=function(){var e=Object(i.useContext)(o),n=e.language,t=e.setLanguage;return Object(d.jsxs)(y,{children:[Object(d.jsx)("h4",{children:"english"===n?"Language:":"Idioma:"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{onClick:function(){return t("english")},children:"english"===n?"English":"Ingl\xeas"}),Object(d.jsx)("h4",{onClick:function(){return t("portuguese")},children:"english"===n?"Portuguese":"Portugu\xeas"})]})]})};var C=function(){return Object(d.jsx)(f,{children:Object(d.jsx)("div",{})})},I=t.p+"static/media/hero.5c8568c2.svg",N=t.p+"static/media/avatar.b6b5d830.svg";var P=function(){var e=Object(i.useContext)(o),n=e.language,t=e.loading,c=e.setLoading;return Object(i.useEffect)((function(){return setTimeout((function(){return c(!1)}),1500)})),Object(d.jsx)(d.Fragment,{children:t?Object(d.jsx)(C,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,{}),Object(d.jsxs)(m,{children:[Object(d.jsxs)("div",{className:"upper-container",children:["english"===n&&Object(d.jsx)("h1",{children:"Designer, Front and Back-end Developer"}),"english"===n&&Object(d.jsx)("h2",{children:"I just love everything that I code, even the bugs."}),"portuguese"===n&&Object(d.jsx)("h1",{children:"Designer, Desenvolvedor Front e Back-end"}),"portuguese"===n&&Object(d.jsx)("h2",{children:"Eu simplesmente amo tudo o que eu programo, at\xe9 mesmos os bugs."}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:N,alt:"Avatar"})})]}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:I,alt:"hero"})})]}),Object(d.jsx)(S,{})]})})},E=(t(27),t.p+"static/media/profile.b4a1b61d.jpeg");var L=function(){var e=Object(i.useContext)(o).language;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(k,{}),"english"===e&&Object(d.jsxs)("main",{children:[Object(d.jsxs)("div",{className:"upper-container",children:[Object(d.jsx)("h2",{children:"Hey! my name is Vincenzo, I am a 28 years old developer from Brazil."}),Object(d.jsxs)("p",{children:["For the past year I have developed a fascination for technology and programming languages, so I decided to start studing Information Systems at ",Object(d.jsx)("a",{href:"https://www.unisanta.br/",target:"blank",children:"University Santa Cecilia"})," in Santos/Brazil."]}),Object(d.jsxs)("p",{children:["I dropped university in ",Object(d.jsx)("time",{children:Object(d.jsx)("b",{children:"2021"})})," because I expected that would be more classes about programming skills. Two mounths after dropping unisersity I started studing Web Development at ",Object(d.jsx)("a",{href:"https://www.betrybe.com/",target:"blank",children:"Trybe"}),"."]})]}),Object(d.jsxs)("div",{className:"lower-container",children:[Object(d.jsx)("img",{src:E,alt:"Profile",srcset:""}),Object(d.jsxs)("div",{className:"skill-container",children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Soft Skills"})}),Object(d.jsx)("li",{children:"Communication"}),Object(d.jsx)("li",{children:"Team Work"}),Object(d.jsx)("li",{children:"Proactivity"}),Object(d.jsx)("li",{children:"Empathy"}),Object(d.jsx)("li",{children:"Work Ethics"})]}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Hard Skills"})}),Object(d.jsx)("li",{children:"GNU/Linux"}),Object(d.jsx)("li",{children:"NodeJs"}),Object(d.jsx)("li",{children:"HTML and CSS"}),Object(d.jsx)("li",{children:"JavaScript"}),Object(d.jsx)("li",{children:"C sharp"}),Object(d.jsx)("li",{children:"Python"})]})]})]})]}),"portuguese"===e&&Object(d.jsxs)("main",{children:[Object(d.jsxs)("div",{className:"upper-container",children:[Object(d.jsx)("h2",{children:"Hey! meu nome \xe9 Vincenzo, Eu sou um desenvolvedor Brasileiro de 26 anos."}),Object(d.jsxs)("p",{children:["Nos ultimos anos eu criei um paix\xe3o e fasc\xednio por tecnologia e programa\xe7\xe3o, ent\xe3o eu decidi come\xe7ar a estudar Sistema de Informa\xe7\xe3o na ",Object(d.jsx)("a",{href:"https://www.unisanta.br/",target:"blank",children:"Universidade Santa Cecilia"})," em Santos/Brasil."]}),Object(d.jsxs)("p",{children:["Eu acabei saindo da faculdade em ",Object(d.jsx)("time",{children:Object(d.jsx)("b",{children:"2021"})})," pois eu entrei tendo a expectativa que haveria mais aulas voltadas \xe0 programa\xe7\xe3o. Ap\xf3s dois meses de ter saido da Universidade eu come\xe7ei a estudar Desenvolvimento Web na ",Object(d.jsx)("a",{href:"https://www.betrybe.com/",target:"blank",children:"Trybe"}),"."]})]}),Object(d.jsxs)("div",{className:"lower-container",children:[Object(d.jsx)("img",{src:E,alt:"Profile",srcset:""}),Object(d.jsxs)("div",{className:"skill-container",children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Soft Skills"})}),Object(d.jsx)("li",{children:"Comunica\xe7\xe3o"}),Object(d.jsx)("li",{children:"Trabalho em Equipe"}),Object(d.jsx)("li",{children:"Proatividade"}),Object(d.jsx)("li",{children:"Empatia"}),Object(d.jsx)("li",{children:"\xc9tica no Trabalho"})]}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Hard Skills"})}),Object(d.jsx)("li",{children:"GNU/Linux"}),Object(d.jsx)("li",{children:"NodeJs"}),Object(d.jsx)("li",{children:"HTML e CSS"}),Object(d.jsx)("li",{children:"JavaScript"}),Object(d.jsx)("li",{children:"C sharp"}),Object(d.jsx)("li",{children:"Python"})]})]})]})]}),Object(d.jsx)(S,{})]})})};var T=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(k,{}),Object(d.jsx)("h1",{children:"PROJECTS"})]})};var B=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(k,{})})};var J=function(){return Object(d.jsx)(O,{children:Object(d.jsx)(a.a,{basename:"",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",element:Object(d.jsx)(P,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/about",element:Object(d.jsx)(L,{})}),Object(d.jsx)(l.a,{path:"/projects",element:Object(d.jsx)(T,{})}),Object(d.jsx)(l.a,{path:"/contact",element:Object(d.jsx)(B,{})})]})})})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(J,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3dc649e1.chunk.js.map