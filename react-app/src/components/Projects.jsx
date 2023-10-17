import React from 'react'
import Header from './Header'
import Project from './Project'
import ProjectInfo from '../ProjectInfo'
function Projects() {
  return (
    <div className='py-12'>
        <Header id="projects">Projects</Header>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {ProjectInfo.map(project => (
                <Project 
                key={project.title} 
                imageUrl={project.imageUrl} 
                title={project.title} 
                tech={project.tech}
                link={project.link}
                externalLink={project.externalLink}
                showExternalLinkIcon={project.title === 'ArithmeticAssist' || project.title === 'SpideyTest'}
                >
                </Project>
            ))}
        </div>
    </div>
  )
}

export default Projects