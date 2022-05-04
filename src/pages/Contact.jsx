import React, { useContext } from 'react'
import MyContext from '../context/MyContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

import PageContact from '../css/PageContact';

function Contact() {
  const { language } = useContext(MyContext);

  const userName = 'Vincenzofdg'
  const discordID = '630898609755258891';

  const publicURL = (file) => process.env.PUBLIC_URL + `/images/${file}.png`;
  const webLink = (url) => window.open(`https://${url}/`, '_blank', 'noopener, noreferrer');
  const viewDoc = (path) => window.open(process.env.PUBLIC_URL + path, '_blank', 'noopener, noreferrer');

  return (
    <>
      <Header />
        <PageContact>
          <div>

            <div className='forms'>
              <div className='column' style={{width: '10px', height: '100%' }} />
              <div className='center' />
            </div>
            
            <div className='contacts'>
              <h2>{ language ? "Let's Connect:" : 'Vamos nos conectar:' }</h2>
              <div className='icons'>
                <img src={ publicURL('GitHub') } onClick={ () => webLink(`www.github.com/${userName}`) } alt='GitHub' />
                <img src={ publicURL('Discord') } onClick={ () => webLink(`discordapp.com/users/${discordID}`) } alt='Discord' />
                <img src={ publicURL('Telegram') } onClick={ () => webLink(`t.me/${userName}`) } alt='Telegram' />
                <img src={ publicURL('Linkedin') } onClick={ () => webLink(`www.linkedin.com/in/${userName}`) } alt='Linkedin' />
                <div className='column' style={{width: '2px', height: '50%' }} />
                <img src={ publicURL('CV') } onClick={ () => viewDoc(`/cv/${language ? 'eng-us' : 'pt-br' }.pdf`) } alt='Curriculum' />
              </div>
            </div>

          </div>
        </PageContact>
      <Footer />
    </>
  )
}

export default Contact;
