import React from 'react'
import { Project } from '../styles'

// Images
import web from '../img/web.png'
import code from '../img/code.png'
import download from '../img/download.png'


function ProjectCard({ theProject }) {
  const { name, gif, internet, repositorie, downloadLink } = theProject;

  return ( 
    <Project>
      <h3>{ name }</h3>
      <img src={ gif } alt={ name } />
      <div>
        <a href={ internet } target="_blank" rel="noreferrer">
          <img src={ web } alt="Link to Site" />
        </a>
        <a href={ repositorie } target="_blank" rel="noreferrer">
          <img src={ code } alt="Link to GitHub" />
        </a>
        <a href={ downloadLink } download={ name }>
          <img src={ download } alt="Link to Site" />
        </a>
      </div>
    </Project>
  )
}

export default ProjectCard;