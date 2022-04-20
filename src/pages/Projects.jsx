import React, { useContext } from 'react';

import MyContext from '../context/MyContext';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import PageProject from '../css/PageProject'

import data from '../data.js'

function Projects() {
  const { type: filter } = useContext(MyContext);
  const { language, setType } = useContext(MyContext);

  const option = (v, eng, port) => {
    return (
      <option value={ v } onClick={ ({ target: { value } }) => setType(value) }>
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
        { option('', 'All', 'Todos') }
        { option('JavaScript', 'JavaScript', 'JavaScript') }
        { option('TypeScript', 'TypeScript', 'TypeScript') }
        { option('ReactJs', 'ReactJs', 'ReactJs') }
        { option('Docker', 'Docker', 'Docker') }
        { option('MySQL', 'MySQL', 'MySQL') }
        { option('Express', 'Express', 'Express') }
        { option('Sequelize', 'Sequelize', 'Sequelize') }
        { option('Test', 'Tests', 'Testes') }
        { option("Study", "Studies", "Estudos") }
      </div>
      
      <div className="projects">
        { 
          data
            .sort(({name: a}, {name: b}) =>  a < b ? (-1) : (a > b ? 1 : 0))
            .filter(({ type: t }) => filter !== "" ? t.includes(filter) : t)
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
