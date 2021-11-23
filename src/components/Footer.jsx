import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

import '../css/footer.css';

function Footer() {
  const { language, setLanguage } = useContext(MyContext);

  const text = (word01, word02, word03) => {
    return (
      <div className="container">
        <h4>{ word01 }</h4>
        <div className="conteiner-options">
          <h4 onClick={ () => setLanguage('english') }>{ word02 }</h4>
          <h4 onClick={ () => setLanguage('portuguese') }>{ word03 }</h4>
        </div>
      </div>
    ) 
  }

  return (
    <footer>
      { language === 'english' && text('Language:', 'English', 'Portuguese') }
      { language === 'portuguese' && text('Idioma:', 'Inglês', 'Português') }
    </footer>
  )
}

export default Footer;
