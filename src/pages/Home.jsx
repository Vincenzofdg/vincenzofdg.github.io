import React, { useContext, useEffect } from 'react'

import MyContext from '../context/MyContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading'
import PageHome from '../css/PageHome'

function Home() {
  const { language, loading, setLoading } = useContext(MyContext);

  useEffect(() => setTimeout(() => setLoading(false), 1500));

  return (
    <>
    { loading ? <Loading /> : (
      <>
        <Header />
        <PageHome>
        
        <div>
          <div className="up-container">
            { language && <h1>Designer, Front and Back-end Developer</h1> }
            { !language && <h1>Designer, Desenvolvedor Front e Back-end</h1> }
            { language && <h2>I just love everything that I code, even the bugs.</h2> }
            { !language && <h2>Eu simplesmente amo tudo o que eu programo, até mesmos os bugs.</h2> }
          </div>

          <div className="down-container">
            <img src={ process.env.PUBLIC_URL + `/images/Avatar.png` } alt="Avatar" />
          </div>
        </div>

        </PageHome>
        <Footer />
      </>
    )}
  </>
  )
}

export default Home;
