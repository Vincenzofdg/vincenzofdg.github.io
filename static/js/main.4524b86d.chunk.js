(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var i=t(1),c=t.n(i),a=t(13),s=t.n(a),r=(t(21),t(5)),l=t(2),o=t(4),d=Object(i.createContext)(),j=t(0);var h,x,b,p,u,g=function(n){var e=n.children,t=Object(i.useState)("english"),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(i.useState)(!0),l=Object(o.a)(r,2),h={language:a,setLanguage:s,loading:l[0],setLoading:l[1]};return Object(j.jsx)(d.Provider,{value:h,children:e})},m=t(6),O=t(7),f=O.a.div(h||(h=Object(m.a)(["\n\n  height: 93vh;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: space-between;\n\n  .upper-container {\n    height: 60vh;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: space-evenly;\n  }\n\n  #wallpaper {\n      width: 100%;\n      \n      img { width: 700px; }\n    }\n\n  @media (max-width: 700px) {\n\n    #wallpaper {\n      img { width: 600px; }\n    }\n  }\n  @media (max-width: 550px) {\n    .upper-container {\n      font-size: 1.3rem;\n    }\n\n    #avatar {\n      img { width: 220px; }\n    }\n\n    #wallpaper {\n      img { width: 500px; }\n    }\n  }\n  @media (max-width: 500px) {\n    .upper-container {\n      font-size: 1.1rem;\n    }\n\n    #avatar {\n      img { width: 180px; }\n    }\n\n    #wallpaper {\n      img { width: 400px; }\n    }\n  }\n"]))),v=O.a.div(x||(x=Object(m.a)(["\n\n  background-color: #7510f7;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 7vh;\n  width: 100%;\n\n  .menu-toggle {\n    display: none;\n  }\n\n  span {\n    height: inherit;\n    margin-left: 10%;\n    display: flex;\n    justify-content: right;\n\n    img {\n      width: 80px;\n      height: inherit;\n      padding: 7px;\n\n      :hover {\n        transform: scale(1.05);\n      }\n    }\n  }\n\n  nav {\n    margin-right: 10%;\n\n    ul {\n      display: flex;\n      li {\n        list-style: none;\n  \n        a {\n          text-decoration: none;\n          color: white;\n          text-transform: uppercase;\n          font-size: 1.8rem; \n          padding: 2.4rem;\n          transition: all 250ms linear 0s;\n  \n          :hover {\n            background: rgba(28, 28, 28, 0.45);\n          }\n        }\n      }\n    }\n  }\n\n\n  // Responsividade\n  @media (max-width: 2050px) {\n    span { margin-left: 3%; }\n    nav { margin-right: 2%; }\n  }\n\n  @media (max-width: 600px) {\n    span { margin-left: 2%; }\n    nav { display: none; }\n    \n    .menu-toggle {\n      display: block;\n      margin-right: 3%;\n      width: 40px;\n      height: 30px;\n\n      .one {\n        background-color: #fff;\n        height: 5px;\n        width: 100%;\n        margin: 6px auto;\n      }\n      .two {\n        background-color: #fff;\n        height: 5px;\n        width: 100%;\n        margin: 6px auto;\n      }\n      .three {\n        background-color: #fff;\n        height: 5px;\n        width: 100%;\n        margin: 6px auto;\n      }\n    }\n  }\n"]))),w=O.a.div(b||(b=Object(m.a)(["\n\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  div {\n    animation: is-rotating 1s infinite;\n    border: 6px solid #e5e5e5;\n    border-radius: 50%;\n    border-top-color: #7510f7;\n    width: 50px;\n    height: 50px;\n  }\n\n  @keyframes is-rotating {\n    to {\n      transform: rotate(1turn);\n    }\n  }\n"]))),y=O.a.footer(p||(p=Object(m.a)(["\n\n  position: absolute;\n  bottom: 0;\n  right: 0;\n\n  width: 15%;\n  height: 1.5vw;\n  display: flex;\n  justify-content: space-between;\n\n  h4 {\n    background: rgba(117, 16, 247, 0.4);\n    \n    width: 40%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  div {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n\n    h4 {\n      width: 50%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      :hover {\n        background: rgba(117, 16, 247, 0.7);\n      }\n    }\n  }\n\n  // Responsividade\n  @media (max-width: 2050px) {\n    width: 18%;\n  }\n  @media (max-width: 1700px) {\n    width: 20%;\n  }\n  @media (max-width: 1555px) {\n    width: 22%;\n  }\n  @media (max-width: 1250px) {\n    font-size: 1.3rem;\n  }\n  @media (max-width: 1150px) {\n    h4 { display: none; }\n    div { display: none; }\n  }\n"]))),k=O.a.main(u||(u=Object(m.a)(["\n\n  height: 93vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n\n  .upper-container {\n    height: 25vh;\n    font-size: 2rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n\n    h2 {\n      font-weight: bolder;\n      font-size: 3rem;\n    }\n\n    a {\n      font-weight: bold;\n      text-decoration: none;\n    }\n  }\n\n  .lower-container {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n\n    img {\n      width: 18%;\n      height: 40vh;\n      border-radius: 200px;\n      padding: 15px;\n    }\n\n    div {\n      height: 45vh;\n      width: 45%;\n      display: flex;\n      justify-content: space-evenly;\n      align-items: center;\n\n      ul {\n        background-color: #ffffff;\n        width: 40%;\n        height: inherit;\n\n        box-shadow: 10px 5px 5px black;\n        \n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n\n        p {\n          font-size: 2.4rem;\n          text-align: center;\n        }\n\n        li {\n          font-size: 2rem;\n          list-style-type: none;\n          text-align: center;\n          height: 10%;\n        }\n      }\n    }\n  }\n"]))),S=t.p+"static/media/logo.17b0b50b.png";var C=function(){var n=Object(i.useContext)(d).language,e=function(n,e,t){return Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/about",children:n})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/projects",children:e})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/contact",children:t})})]})};return Object(j.jsxs)(v,{children:[Object(j.jsx)("span",{children:Object(j.jsx)("img",{onClick:function(){return window.location.replace("/","_self")},src:S,alt:"Logo"})}),Object(j.jsxs)("nav",{children:["english"===n&&e("About","Projects","Contact"),"portuguese"===n&&e("Sobre","Projetos","COntato")]}),Object(j.jsxs)("div",{className:"menu-toggle",children:[Object(j.jsx)("div",{className:"one"}),Object(j.jsx)("div",{className:"two"}),Object(j.jsx)("div",{className:"three"})]})]})};var N=function(){var n=Object(i.useContext)(d),e=n.language,t=n.setLanguage;return Object(j.jsxs)(y,{children:[Object(j.jsx)("h4",{children:"english"===e?"Language:":"Idioma:"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{onClick:function(){return t("english")},children:"english"===e?"English":"Ingl\xeas"}),Object(j.jsx)("h4",{onClick:function(){return t("portuguese")},children:"english"===e?"Portuguese":"Portugu\xeas"})]})]})};var I=function(){return Object(j.jsx)(w,{children:Object(j.jsx)("div",{})})},z=t.p+"static/media/hero.5c8568c2.svg",P=t.p+"static/media/avatar.b6b5d830.svg";var E=function(){var n=Object(i.useContext)(d),e=n.language,t=n.loading,c=n.setLoading;return Object(i.useEffect)((function(){return setTimeout((function(){return c(!1)}),1500)})),Object(j.jsx)(j.Fragment,{children:t?Object(j.jsx)(I,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C,{}),Object(j.jsxs)(f,{children:[Object(j.jsxs)("div",{className:"upper-container",children:["english"===e&&Object(j.jsx)("h1",{children:"Designer, Front and Back-end Developer"}),"english"===e&&Object(j.jsx)("h2",{children:"I just love everything that I code, even the bugs."}),"portuguese"===e&&Object(j.jsx)("h1",{children:"Designer, Desenvolvedor Front e Back-end"}),"portuguese"===e&&Object(j.jsx)("h2",{children:"Eu simplesmente amo tudo o que eu programo, at\xe9 mesmos os bugs."}),Object(j.jsx)("div",{id:"avatar",children:Object(j.jsx)("img",{src:P,alt:"Avatar"})})]}),Object(j.jsx)("div",{id:"wallpaper",children:Object(j.jsx)("img",{src:z,alt:"hero"})})]}),Object(j.jsx)(N,{})]})})},L=t.p+"static/media/profile.b4a1b61d.jpeg";var T=function(){var n=Object(i.useContext)(d).language;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C,{}),"english"===n&&Object(j.jsxs)(k,{children:[Object(j.jsxs)("div",{className:"upper-container",children:[Object(j.jsx)("h2",{children:"Hey! my name is Vincenzo, I am a 28 years old developer from Brazil."}),Object(j.jsxs)("p",{children:["For the past year I have developed a fascination for technology and programming languages, so I decided to start studing Information Systems at ",Object(j.jsx)("a",{href:"https://www.unisanta.br/",target:"blank",children:"University Santa Cecilia"})," in Santos/Brazil."]}),Object(j.jsxs)("p",{children:["I dropped university in ",Object(j.jsx)("time",{children:Object(j.jsx)("b",{children:"2021"})})," because I expected that would be more classes about programming skills. Two mounths after dropping unisersity I started studing Web Development at ",Object(j.jsx)("a",{href:"https://www.betrybe.com/",target:"blank",children:"Trybe"}),"."]})]}),Object(j.jsxs)("div",{className:"lower-container",children:[Object(j.jsx)("img",{src:L,alt:"Profile"}),Object(j.jsxs)("div",{className:"skill-container",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:"Soft Skills"})}),Object(j.jsx)("li",{children:"Communication"}),Object(j.jsx)("li",{children:"Team Work"}),Object(j.jsx)("li",{children:"Proactivity"}),Object(j.jsx)("li",{children:"Empathy"}),Object(j.jsx)("li",{children:"Work Ethics"})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:"Hard Skills"})}),Object(j.jsx)("li",{children:"GNU/Linux"}),Object(j.jsx)("li",{children:"NodeJs"}),Object(j.jsx)("li",{children:"HTML and CSS"}),Object(j.jsx)("li",{children:"JavaScript"}),Object(j.jsx)("li",{children:"C sharp"}),Object(j.jsx)("li",{children:"Python"})]})]})]})]}),"portuguese"===n&&Object(j.jsxs)(k,{children:[Object(j.jsxs)("div",{className:"upper-container",children:[Object(j.jsx)("h2",{children:"Hey! meu nome \xe9 Vincenzo, Eu sou um desenvolvedor Brasileiro de 26 anos."}),Object(j.jsxs)("p",{children:["Nos ultimos anos eu criei um paix\xe3o e fasc\xednio por tecnologia e programa\xe7\xe3o, ent\xe3o eu decidi come\xe7ar a estudar Sistema de Informa\xe7\xe3o na ",Object(j.jsx)("a",{href:"https://www.unisanta.br/",target:"blank",children:"Universidade Santa Cecilia"})," em Santos/Brasil."]}),Object(j.jsxs)("p",{children:["Eu acabei saindo da faculdade em ",Object(j.jsx)("time",{children:Object(j.jsx)("b",{children:"2021"})})," pois eu entrei tendo a expectativa que haveria mais aulas voltadas \xe0 programa\xe7\xe3o. Ap\xf3s dois meses de ter saido da Universidade eu come\xe7ei a estudar Desenvolvimento Web na ",Object(j.jsx)("a",{href:"https://www.betrybe.com/",target:"blank",children:"Trybe"}),"."]})]}),Object(j.jsxs)("div",{className:"lower-container",children:[Object(j.jsx)("img",{src:L,alt:"Profile"}),Object(j.jsxs)("div",{className:"skill-container",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:"Soft Skills"})}),Object(j.jsx)("li",{children:"Comunica\xe7\xe3o"}),Object(j.jsx)("li",{children:"Trabalho em Equipe"}),Object(j.jsx)("li",{children:"Proatividade"}),Object(j.jsx)("li",{children:"Empatia"}),Object(j.jsx)("li",{children:"\xc9tica no Trabalho"})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:"Hard Skills"})}),Object(j.jsx)("li",{children:"GNU/Linux"}),Object(j.jsx)("li",{children:"NodeJs"}),Object(j.jsx)("li",{children:"HTML e CSS"}),Object(j.jsx)("li",{children:"JavaScript"}),Object(j.jsx)("li",{children:"C sharp"}),Object(j.jsx)("li",{children:"Python"})]})]})]})]}),Object(j.jsx)(N,{})]})};var B=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(C,{}),Object(j.jsx)("h1",{children:"PROJECTS"})]})};var J=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(C,{})})};var D=function(){return Object(j.jsx)(g,{children:Object(j.jsx)(r.a,{basename:"",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",element:Object(j.jsx)(E,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/about",element:Object(j.jsx)(T,{})}),Object(j.jsx)(l.a,{path:"/projects",element:Object(j.jsx)(B,{})}),Object(j.jsx)(l.a,{path:"/contact",element:Object(j.jsx)(J,{})})]})})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4524b86d.chunk.js.map