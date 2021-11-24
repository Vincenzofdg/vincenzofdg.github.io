import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';

import { Navegation } from '../styles'
import logo from '../img/logo.png'

function Header() {
  const { language, toggle, setToggle } = useContext(MyContext);

  const text = (link01, link02, link03) => {
    return (
      <ul>
        <li><Link onClick={ () => setToggle(false) } to="/about">{ link01 }</Link></li>
        <li><Link onClick={ () => setToggle(false) } to="/projects">{ link02 }</Link></li>
        <li><Link onClick={ () => setToggle(false) } to="/contact">{ link03 }</Link></li>
      </ul>
    )
  }

  return (
    <Navegation>
      <span>
        <img onClick={ () => window.location.replace('/', '_self') } src={ logo } alt="Logo" />
      </span>
      <div className={ toggle ? 'menu-section on' : 'menu-section' }>

        <div onClick={ () => setToggle(!toggle) } className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
        </div>

        <nav>
          { language === 'english' && text('About', 'Projects','Contact') }
          { language === 'portuguese' && text('Sobre', 'Projetos', 'COntato') }
        </nav>

      </div>
    </Navegation>
  )
}

export default Header;
