import React from 'react';

import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

import data from '../data.js'

function Projects() {
  return (
    <div>
      <Header />
      { data.map((myProject) => <ProjectCard key={ myProject.id } theProject={ myProject }/>) }
    </div>
  )
}

export default Projects;
