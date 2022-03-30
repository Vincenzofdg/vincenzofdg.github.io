import React from 'react';
import Card from '../css/Card';

function ProjectCard({ theProject }) {
  const { name, internet, repositorie, downloadLink, gif } = theProject;

  return ( 
    <Card style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/gif/${gif})` } }>
      <h3>{ name }</h3>
      { !gif ? (
        <img src={ process.env.PUBLIC_URL + `/images/${name}.jpg` } alt={ name } />
        ) : (
        <img src={ process.env.PUBLIC_URL + `/gif/${name}.gif` } alt={ name } />
      ) }
      <div>
        <a hidden={ !gif } href={ internet } target="_blank" rel="noreferrer">
          <img src={ process.env.PUBLIC_URL + `/images/Web.png` } alt="Link to Site" />
        </a>
        <a href={ repositorie } target="_blank" rel="noreferrer">
          <img src={ process.env.PUBLIC_URL + `/images/Code.png` } alt="Link to GitHub" />
        </a>
        <a hidden={ !gif } href={ downloadLink } download={ name }>
          <img src={ process.env.PUBLIC_URL + `/images/Download.png` } alt="Link to Site" />
        </a>
      </div>
    </Card>
  )
}

export default ProjectCard;


/*
    <Card>
      <h3>{ name }</h3>
      { !gif ? (
        <img src={ process.env.PUBLIC_URL + `/images/${name}.jpg` } alt={ name } />
        ) : (
        <img src={ process.env.PUBLIC_URL + `/gif/${name}.gif` } alt={ name } />
      ) }
      <div>
        <a hidden={ !gif } href={ internet } target="_blank" rel="noreferrer">
          <img src={ process.env.PUBLIC_URL + `/images/Web.png` } alt="Link to Site" />
        </a>
        <a href={ repositorie } target="_blank" rel="noreferrer">
          <img src={ process.env.PUBLIC_URL + `/images/Code.png` } alt="Link to GitHub" />
        </a>
        <a hidden={ !gif } href={ downloadLink } download={ name }>
          <img src={ process.env.PUBLIC_URL + `/images/Download.png` } alt="Link to Site" />
        </a>
      </div>
    </Card>
*/