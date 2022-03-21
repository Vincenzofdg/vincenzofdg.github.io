import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

import Language from '../css/Language'

function Footer() {
  const { language, setLanguage } = useContext(MyContext);

  return (
    <Language>
      <h4>{ language ? 'To:' : 'Para:' }</h4>
      <h4 onClick={ () => setLanguage(!language) }>
        {language ? 'Port' : 'Eng'}
      </h4>
    </Language>
  )
}

export default Footer;
