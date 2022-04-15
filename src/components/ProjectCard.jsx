import React from 'react';
import Card from '../css/Card';

// Images
import web from '../img/web.png';
import code from '../img/code.png';
import download from '../img/download.png';

function ProjectCard({ theProject }) {
  const { name, internet, repositorie, downloadLink, gif } = theProject;

  return ( 
    <Card>
      <h3>{ name }</h3>
      { !gif ? (
        <img src={ process.env.PUBLIC_URL + `/images/${name}.jpg` } alt={ name } />
        ) : (
        <img src={ process.env.PUBLIC_URL + `/gif/${name}.gif` } alt={ name } />
      ) }
      <div>
        <a hidden={ !gif } href={ internet } target="_blank" rel="noreferrer">
          <img src={ web } alt="Link to Site" />
        </a>
        <a href={ repositorie } target="_blank" rel="noreferrer">
          <img src={ code } alt="Link to GitHub" />
        </a>
        <a hidden={ !gif } href={ downloadLink } download={ name }>
          <img src={ download } alt="Link to Site" />
        </a>
      </div>
    </Card>
  )
}

export default ProjectCard;
