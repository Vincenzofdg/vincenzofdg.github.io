import React, { useContext } from 'react'

import Footer from '../components/Footer';
import MyContext from '../context/MyContext';
import Header from '../components/Header';
import PageAbout from '../css/PageAbout'
import profile from '../img/profile.jpeg'

function About() {
  const { language } = useContext(MyContext);

  return (
    <>
      <Header />
        { language && (
          <>
          <PageAbout>
            <div className="up-container">
              <div className="image">
                <img src={ process.env.PUBLIC_URL + `/images/Computer.png` } alt="Icon Computer" />
              </div>
              <div className="text">
                <h2>Hey! my name is Vincenzo, I am a 28 years old developer from Brazil.</h2>
                <p>For the past year I have developed a fascination for technology and programming languages, so I decided to start studing Information Systems 
                  at <a href="https://www.unisanta.br/" target="blank">University Santa Cecilia</a> in Santos/Brazil.
                  <br />
                  I dropped university in <time><b>2021</b></time> because I expected that would be more classes about programming skills. Two mounths after dropping 
                  university I started studing Web Development at <a href="https://www.betrybe.com/" target="blank">Trybe</a>.</p>
              </div>
            </div>
            
            <div className="down-container">
                <img src={ process.env.PUBLIC_URL + `/images/Skills.png` } alt="Profile" />
              <div className="skill-container">
                <ul>
                  <p><strong>Soft Skills</strong></p>
                  <li>Communication</li>
                  <li>Team Work</li>
                  <li>Proactivity</li>
                  <li>Empathy</li>
                  <li>Work Ethics</li>
                </ul>
                <ul>
                  <p><strong>Hard Skills</strong></p>
                  <li>GNU/Linux</li>
                  <li>NodeJs</li>
                  <li>HTML and CSS</li>
                  <li>JavaScript</li>
                  <li>C sharp</li>
                  <li>Python</li>
                </ul>
              </div>
            </div>
          </PageAbout>
           <Footer />
           </>
        )}
        { !language && (
          <>
          <PageAbout>
            <div className="up-container">
              <div className="image">
                <img src={ process.env.PUBLIC_URL + `/images/Computer.png` } alt="Icon Computer" />
              </div>
              <div className="text">
              <h2>Hey! meu nome é Vincenzo, Eu sou um desenvolvedor Brasileiro de 26 anos.</h2>
                <p>Nos ultimos anos eu criei um paixão e fascínio por tecnologia e programação, então eu decidi começar a estudar Sistema de Informação 
                  na <a href="https://www.unisanta.br/" target="blank">Universidade Santa Cecilia</a> em Santos/Brasil.
                  <br />
                  Eu acabei saindo da faculdade em <time><b>2021</b></time> pois eu entrei tendo a expectativa que haveria mais aulas voltadas à programação. Após dois 
                  meses de ter saido da Universidade eu começei a <br />estudar Desenvolvimento Web na <a href="https://www.betrybe.com/" target="blank">Trybe</a>.</p>
              </div>
            </div>
            <div className="down-container">
                <img src={ profile } alt="Profile" />
              <div className="skill-container">
                <ul>
                  <p><strong>Soft Skills</strong></p>
                  <li>Comunicação</li>
                  <li>Trabalho em Equipe</li>
                  <li>Proatividade</li>
                  <li>Empatia</li>
                  <li>Ética no Trabalho</li>
                </ul>
                <ul>
                  <p><strong>Hard Skills</strong></p>
                  <li>GNU/Linux</li>
                  <li>NodeJs</li>
                  <li>HTML e CSS</li>
                  <li>JavaScript</li>
                  <li>C sharp</li>
                  <li>Python</li>
                </ul>
              </div>
            </div>
          </PageAbout>
          <Footer />
          </>
        )}
    </>
  )
}

export default About;
