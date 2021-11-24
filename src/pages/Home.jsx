import React, { useContext, useEffect } from 'react'
import MyContext from '../context/MyContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading'

import { Body } from '../styles'
import hero from '../img/hero.svg'
import avatar from '../img/avatar.svg'

function Home() {
  const { language, loading, setLoading } = useContext(MyContext);

  useEffect(() => setTimeout(() => setLoading(false), 1500));

  return (
    <>
    { loading ? <Loading /> : (
      <>
        <Header />
        <Body>
          <div className="upper-container">
          { language === 'english' && <h1>Designer, Front and Back-end Developer</h1> }
          { language === 'english' && <h2>I just love everything that I code, even the bugs.</h2> }
          { language === 'portuguese' && <h1>Designer, Desenvolvedor Front e Back-end</h1> }
          { language === 'portuguese' && <h2>Eu simplesmente amo tudo o que eu programo, até mesmos os bugs.</h2> }
            <div id="avatar">
              <img src={ avatar } alt="Avatar" />
            </div>
          </div>
          <div className="lower-container">
            <img src={ hero } alt="hero" />
          </div>
        </Body>
        <Footer />
      </>
    )}
  </>
  )
}

export default Home;
