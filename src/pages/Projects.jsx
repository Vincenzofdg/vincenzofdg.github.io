import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { ProjectList } from '../styles'

import data from '../data.js'

function Projects() {
  return (
    <ProjectList>
      <Header />
      <main>
        { data.map((myProject) => <ProjectCard key={ myProject.id } theProject={ myProject }/>) }
      </main>
    </ProjectList>
  )
}

export default Projects;
