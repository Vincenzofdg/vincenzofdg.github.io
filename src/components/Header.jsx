import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';

import '../css/header.css';
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
    <header>
      <div className="container">
        <a href="/">
          <img src={ logo } alt="Logo" />
        </a>
        <nav>
          { language === 'english' && text('About', 'Projects','Contact') }
          { language === 'portuguese' && text('Sobre', 'Projetos', 'COntato') }
        </nav>
      </div>
    </header>
  )
}

export default Header;
