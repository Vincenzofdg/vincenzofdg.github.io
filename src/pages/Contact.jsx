import React, { useContext } from 'react'
import MyContext from '../context/MyContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

import PageContact from '../css/PageContact';

function Contact() {
  const { language } = useContext(MyContext);

  const userName = 'Vincenzofdg'
  const discordID = '630898609755258891';
  const web = (url) => { window.open(`https://${url}/`, '_blank', 'noopener, noreferrer') };

  return (
    <>
      <Header />
        <PageContact>
          <div>

            <div className='forms'>
              <div className='column' />
              <div className='center' />
            </div>
            
            <div className='contacts'>
              <h2>{language ? "Let's Connect:" : 'Vamos nos conectar:'}</h2>
              <div className='icons'>
                <img src={ process.env.PUBLIC_URL + '/images/GitHub.png' } onClick={ () => web(`www.github.com/${userName}`) } alt='GitHub' />
                <img src={ process.env.PUBLIC_URL + '/images/Discord.png' } onClick={ () => web(`discordapp.com/users/${discordID}`) } alt='Discord' />
                <img src={ process.env.PUBLIC_URL + '/images/Telegram.png' } onClick={ () => web(`t.me/${userName}`) } alt='Telegram' />
                <img src={ process.env.PUBLIC_URL + '/images/Linkedin.png' } onClick={ () => web(`www.linkedin.com/in/${userName}`) } alt='Linkedin' />
              </div>
            </div>

          </div>
        </PageContact>
      <Footer />
    </>
  )
}

export default Contact;
