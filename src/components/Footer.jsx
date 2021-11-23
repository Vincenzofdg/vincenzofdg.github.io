import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

import '../css/footer.css';
// import '../css/responsice.css';

function Footer() {
  const { language, setLanguage } = useContext(MyContext);

  return (
    <footer>
      <h4 id="language">{ language === 'english' ? 'Language:' : 'Idioma:' }</h4>

      <div className="conteiner-options">
        <h4 id="option" onClick={ () => setLanguage('english') }>{ language === 'english' ? 'English' : 'Inglês' }</h4>
        <h4 id="option" onClick={ () => setLanguage('portuguese') }>{ language === 'english' ? 'Portuguese' : 'Português' }</h4>
      </div>
    </footer>
  )
}

export default Footer;
