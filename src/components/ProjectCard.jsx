import React, { useContext } from 'react'
import MyContext from '../context/MyContext';
import { Project } from '../styles'

function ProjectCard({ theProject }) {
  // const { language } = useContext(MyContext);

  const {name, aboutPort, aboutEng, gif} = theProject;
  // const about = language ? aboutEng : aboutPort;
  return ( 
    <Project>
      <div>
        <h2>{ name }</h2>
        {/* <p>{ about }</p> */}
        <p>{aboutPort}</p>
      </div>
      <img src={ gif } alt={ name } />
    </Project>
  )
}

export default ProjectCard;