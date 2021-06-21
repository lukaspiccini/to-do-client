import React, { useState, useMemo } from 'react'
import { Container, NewProjectTitle, NewProjectButton } from './style'
import ProjectsService from '../../services/projects'

const NewProjectCard = ({ loadProjects }) => {
  const projectsService = useMemo(() => new ProjectsService(), [])

  const [isLoading, setIsLoading] = useState(false)
  const [projectName, setProjectName] = useState('')
  
  const onCreateProject = () => {
    setIsLoading(true)

    projectsService.createProject({ name: projectName }).then(() =>{
      setProjectName('')
      if (loadProjects) loadProjects()
    }).finally(() => {
      setIsLoading(false)
    })
  }
  
  return (
    <Container>
        <NewProjectTitle>Create a new project</NewProjectTitle>
        
        <input 
          type='text'
          placeholder='Project name'
          value={projectName}
          onChange={event => setProjectName(event?.target?.value)} 
        />
        
        <NewProjectButton 
          variant='info' 
          fullWidth 
          isLoading={isLoading}
          onClick={onCreateProject}
        >
          Create Project
        </NewProjectButton>
    </Container>
  )
}

export default NewProjectCard