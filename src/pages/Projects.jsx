import React, { useContext } from 'react';

import MyContext from '../context/MyContext';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import PageProject from '../css/PageProject'

import data from '../data.js'

function Projects() {
  const { type: filter } = useContext(MyContext);
  const { language, setType } = useContext(MyContext);

  const topic = (eng, port) => {
    return (
      <option className="topic" value={ eng } onClick={ ({ target: { value } }) => setType(value) }>
        { language ? eng : port }
      </option>
    )
  }

  return (
    <>
    <Header />
    <PageProject>
      <div className="menu">
        <h3>Menu</h3>
        { topic('All', 'Todos') }
        { topic('JavaScript', 'JavaScript') }
        { topic('Python', 'Python') }
        { topic('TypeScript', 'TypeScript') }
        { topic('APIs', 'APIs') }
        { topic('Study', 'Estudo') }
      </div>
      
      <div className="projects">
        { 
          data
            .sort(({name: a}, {name: b}) =>  a < b ? (-1) : (a > b ? 1 : 0))
            .filter(({ type: t }) => t.includes(filter))
            .map((myProject) => {
              const { type, id, name } = myProject;
              console.log(`Name: ${ name } | Type: ${ type }`)
              return (<ProjectCard key={ id } theProject={ myProject }/>)
            })
        }
      </div>
    </PageProject>
    </>
  )
}

export default Projects;
