import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

import { Language } from '../styles'

function Footer() {
  const { language, setLanguage } = useContext(MyContext);

  return (
    <Language>
      <h4>{ language === 'english' ? 'Language:' : 'Idioma:' }</h4>

      <div>
        <h4 onClick={ () => setLanguage('english') }>{ language === 'english' ? 'English' : 'Inglês' }</h4>
        <h4 onClick={ () => setLanguage('portuguese') }>{ language === 'english' ? 'Portuguese' : 'Português' }</h4>
      </div>
    </Language>
  )
}

export default Footer;
