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
              <h2>Hey! meu nome é Vincenzo, Eu sou um desenvolvedor Brasileiro de { myAge() } anos.</h2>
                <p>Nos ultimos anos eu criei um paixão e fascínio por tecnologia e programação, então eu decidi começar a estudar Sistema de Informação 
                  na <a href="https://www.unisanta.br/" target="blank">Universidade Santa Cecilia</a> em Santos/Brasil.
                  Eu acabei saindo da faculdade em <time><b>2021</b></time> pois eu entrei tendo a expectativa que haveria mais aulas voltadas à programação. Após dois 
                  meses de ter saido da Universidade eu começei a estudar Desenvolvimento Web na <a href="https://www.betrybe.com/" target="blank">Trybe</a>.</p>
              </div>
            </div>
            <div className="down-container">
            <div className="left">
              </div>

              <div className="right">
                  <div className="block" style={{height: '120px'}}>HTML5</div>
                  <div className="block" style={{height: '180px'}}>CSS3</div>
                  <div className="block" style={{height: '380px'}}>JavaScript</div>
                  <div className="block" style={{height: '350px'}}>TypeScript</div>
                  <div className="block" style={{height: '300px'}}>NodeJS</div>
                  <div className="block" style={{height: '320px'}}>MySQL</div>
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
