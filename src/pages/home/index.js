import React, { useCallback, useEffect, useMemo, useState } from 'react'

import ProjectCard from '../../components/ProjectCard'
import NewProjectCard from '../../components/NewProjectCard'
import Header from '../../components/Header'

import ProjectsService from '../../services/projects'

import { Container } from './style'

const Home = () => {
  const projectsService = useMemo(() => new ProjectsService(), [])

  const [isLoadingProjects, setIsLoadingProjects] = useState(true)
  const [projects, setProjects] = useState([])

  const loadProjects = useCallback(() => {
    setIsLoadingProjects(true)

    projectsService.getProjects().then(result => {
      setProjects(result.data)
    }).finally(() => {
      setIsLoadingProjects(false)
    })
  }, [projectsService])

  useEffect(() => {
    loadProjects()
  }, [loadProjects])

  return (
    <Header>
      {isLoadingProjects ? (
        <div>Loading</div>
      ) : (
        <Container>
          {projects && projects.length > 0 && projects.map(project => (
            <ProjectCard 
              key={project?.id} 
              project={project} 
              loadProjects={loadProjects}
            />
          ))}

          <NewProjectCard loadProjects={loadProjects} />
        </Container>
      )}
    </Header>
  )
}

export default Home