import React from 'react'
import { Project } from '../styles'

// Images
import web from '../img/web.png'
import code from '../img/code.png'
import download from '../img/download.png'

function ProjectCard({ theProject }) {
  const { name, internet, repositorie, downloadLink, type: ty } = theProject;
  const te = "Test";
  const bk = "Back-end";
  return ( 
    <Project>
      <h3>{ name }</h3>
      { ty === te || ty === bk ? (
        <img src={ process.env.PUBLIC_URL + `/images/${name}.jpg` } alt={ name } />
        ) : (
        <img src={ process.env.PUBLIC_URL + `/gif/${name}.gif` } alt={ name } />
      ) }
      <div>
        <a hidden={ ty === te || ty === bk } href={ internet } target="_blank" rel="noreferrer">
          <img src={ web } alt="Link to Site" />
        </a>
        <a href={ repositorie } target="_blank" rel="noreferrer">
          <img src={ code } alt="Link to GitHub" />
        </a>
        <a hidden={ ty === te || ty === bk } href={ downloadLink } download={ name }>
          <img src={ download } alt="Link to Site" />
        </a>
      </div>
    </Project>
  )
}

export default ProjectCard;
