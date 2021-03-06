import React, { useContext } from 'react'

import Footer from '../components/Footer';
import MyContext from '../context/MyContext';
import Header from '../components/Header';
import PageAbout from '../css/PageAbout'

function About() {
  const { language } = useContext(MyContext);

  const myAge = () => {
    const now = new Date();
    const myBirth = new Date('1995-08-28');

    const diff = Math.abs(now.getTime() - myBirth.getTime());
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffDays / 360)
    
    return diffYears;
  }

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
                <h2>Hey! my name is Vincenzo, I am a { myAge() } years old developer from Brazil.</h2>
                <p>For the past year I have developed a fascination for technology and programming languages, so I decided to start studing Information Systems 
                  at <a href="https://www.unisanta.br/" target="blank">University Santa Cecilia</a> in Santos/Brazil.
                  I dropped university in <time><b>2021</b></time> because I expected that would be more classes about programming skills. Two mounths after dropping 
                  university I started studing Web Development at <a href="https://www.betrybe.com/" target="blank">Trybe</a>.</p>
              </div>
            </div>
            
            <div className="down-container">

              <div className="left">

              </div>

              <div className="right">
                  <div className="block" style={{height: '40%'}}>HTML5</div>
                  <div className="block" style={{height: '50%'}}>CSS3</div>
                  <div className="block" style={{height: '88%'}}>JavaScript</div>
                  <div className="block" style={{height: '80%'}}>TypeScript</div>
                  <div className="block" style={{height: '85%'}}>NodeJS</div>
                  <div className="block" style={{height: '80%'}}>MySQL</div>
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
              <h2>Hey! meu nome ?? Vincenzo, Eu sou um desenvolvedor Brasileiro de { myAge() } anos.</h2>
                <p>Nos ultimos anos eu criei um paix??o e fasc??nio por tecnologia e programa????o, ent??o eu decidi come??ar a estudar Sistema de Informa????o 
                  na <a href="https://www.unisanta.br/" target="blank">Universidade Santa Cecilia</a> em Santos/Brasil.
                  Eu acabei saindo da faculdade em <time><b>2021</b></time> pois eu entrei tendo a expectativa que haveria mais aulas voltadas ?? programa????o. Ap??s dois 
                  meses de ter saido da Universidade eu come??ei a estudar Desenvolvimento Web na <a href="https://www.betrybe.com/" target="blank">Trybe</a>.</p>
              </div>
            </div>
            <div className="down-container">
            <div className="left">
              </div>

              <div className="right">
                  <div className="block" style={{height: '40%'}}>HTML5</div>
                  <div className="block" style={{height: '50%'}}>CSS3</div>
                  <div className="block" style={{height: '88%'}}>JavaScript</div>
                  <div className="block" style={{height: '80%'}}>TypeScript</div>
                  <div className="block" style={{height: '85%'}}>NodeJS</div>
                  <div className="block" style={{height: '80%'}}>MySQL</div>
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
