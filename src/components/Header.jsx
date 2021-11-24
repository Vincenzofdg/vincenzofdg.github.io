import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';

import { Navegation } from '../styles'
import logo from '../img/logo.png'

function Header() {
  const { language } = useContext(MyContext);

  const text = (link01, link02, link03) => {
    return (
      <ul>
        <li><Link to="/about">{ link01 }</Link></li>
        <li><Link to="/projects">{ link02 }</Link></li>
        <li><Link to="/contact">{ link03 }</Link></li>
      </ul>
    )
  }

  return (
    <Navegation>
      <span>
        <img onClick={ () => window.location.replace('/', '_self') } src={ logo } alt="Logo" />
      </span>
      <nav>
        { language === 'english' && text('About', 'Projects','Contact') }
        { language === 'portuguese' && text('Sobre', 'Projetos', 'COntato') }
      </nav>
      <div className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
      </div>
    </Navegation>
  )
}

export default Header;
