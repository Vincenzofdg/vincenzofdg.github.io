import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Header from '../components/Header';
import Filter from '../components/Filter';
import ProjectCard from '../components/ProjectCard';
import { ProjectList } from '../styles'

import data from '../data.js'

function Projects() {
  const { 
    type: filter01,
    framework: filter02,
    institution: filter03
  } = useContext(MyContext);
  return (
    <ProjectList>
      <Header />
      <Filter />
      <main>
        { data.sort(({name: a}, {name: b}) =>  a < b ? (-1) : (a > b ? 1 : 0)) // Ordem Alfabetica
          .filter(({ type: t }) => filter01 !== "" ? t === filter01 : t)
          .filter(({ framework: f }) => filter02 !== "" ? f === filter02 : f)
          .filter(({ origin: o }) => filter03 !== "" ? o === filter03 : o)
          .map((myProject) => <ProjectCard key={ myProject.id } theProject={ myProject }/>)
        }
      </main>
    </ProjectList>
  )
}

export default Projects;
