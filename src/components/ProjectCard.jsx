import React, { useContext } from 'react'
import MyContext from '../context/MyContext';
import { Project } from '../styles'

// Images
import GitHub from '../img/code.png'

function ProjectCard({ theProject }) {
  const { language } = useContext(MyContext);
  const {
    name,
    aboutPort,
    aboutEng,
    download,
    link,
    gif
  } = theProject;
  
  const about = language ? aboutEng : aboutPort;
  
  return ( 
    <Project>
      <div>
        <h3>{ name }</h3>
        <p>{ about }</p>
      </div>
      <img src={ gif } alt={ name } />

      
      <div className="buttons">
        <a href={ download } target="_blank" rel="noreferrer">
          <button>{language ? 'Download Code' : 'Baixar Codigo'}</button>
        </a>

        <img id="github-code" src={ GitHub } href={ link } alt="Github Code" />
        {/* <div id="github-code" href={ link } target="_blank" /> */}
        {/* <a href={ link } target="_blank" rel="noreferrer"></a> */}
          {/* <button id="github-code">{`${language ? 'Go to' : 'Ir para'} Github`}</button> */}
      </div>


    </Project>
  )
}

export default ProjectCard;