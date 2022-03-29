import React, { useContext } from 'react';

import MyContext from '../context/MyContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
        <h3>{ language ? "Project Type" : "Tipo de Projeto" }</h3>
        { option("", "All", "Todos") }
        { option("Front-end", "Front-end", "Front-end") }
        { option("Back-end", "Back-end", "Back-end") }
        { option("Test", "Test", "Teste") }
      </div>
      
      <div className="projects">
        { 
          data.sort(({name: a}, {name: b}) =>  a < b ? (-1) : (a > b ? 1 : 0)) // Ordem Alfabetica
            .filter(({ type: t }) => filter !== "" ? t === filter : t)
            .map((myProject) => <ProjectCard key={ myProject.id } theProject={ myProject }/>)
        }
      </div>
    </PageProject>
    <Footer />
    </>
  )
}

export default Projects;
