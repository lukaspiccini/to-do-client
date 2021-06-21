import React, { useMemo, useState } from 'react'
import { Card, CardHeader, CardTitle, CardActions, CardBody, CardFooter } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

import TasksService from '../../services/tasks'
import ProjectsService from '../../services/projects'

import Button from '../../objects/Button'
import TaskDetails from '../TaskDetail'

const ProjectCard = ({ project, loadProjects }) => {
  const tasksService = useMemo(() => new TasksService(), [])
  const projectsService = useMemo(() => new ProjectsService(), [])

  const uncompletedTasks = useMemo(() => project?.tasks?.filter(task => !task?.finishedAt), [project])
  const completedTasks = useMemo(() => project?.tasks?.filter(task => task?.finishedAt), [project])

  const [taskDescription, setTaskDescription] = useState('')
  const [newProjectName, setNewProjectName] = useState(project?.name)
  const [isCreatingTask, setIsCreatingTask] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  const onCreateTask = () => {
    setIsCreatingTask(true)

    tasksService.createTask({ 
      project: project?.id,
      description: taskDescription 
    }).then(() => {
      if (loadProjects) loadProjects()
    }).finally(() => {
      setIsCreatingTask(false)
    })
  }

   const onUpdateProject = () => {
    projectsService.updateProject({ 
      project: project?.id,
      name: newProjectName 
    }).then(() => {
      loadProjects()
    })
  }

  const onDeleteProject = (projectId, projectName) => {
    if(window.confirm(`Do you really want to delete the project ${projectName}?`)) {
      projectsService.deleteProject({ project: projectId }).then(() => {
        loadProjects()
      })
    }
  }

  const onCancelEdit = () => {
    setIsUpdating(false)
    setNewProjectName(project?.name)
  }

  return (
    <Card>
      <CardHeader>
        {isUpdating ? (
          <input type='text' value={newProjectName} onChange={event => setNewProjectName(event?.target?.value)} />
        ) : (
          <CardTitle>{project?.name}</CardTitle>
        )}
        <CardActions>
          {isUpdating ? (
            <>
              <button onClick={onUpdateProject}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button onClick={onCancelEdit}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setIsUpdating(true)}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </button>
              <button onClick={() => onDeleteProject(project?.id, project?.name)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </>
          )}
        </CardActions>
      </CardHeader>
      <CardBody>
        <TaskDetails
          title='To Do'
          tasks={uncompletedTasks}
          project={project}
          loadProjects={loadProjects}
        />
        <TaskDetails
          title='Done'
          tasks={completedTasks}
          project={project}
          loadProjects={loadProjects}
        />
      </CardBody>
      <CardFooter>
        <input
          type='text' 
          placeholder='Task'
          value={taskDescription}
          onChange={event => setTaskDescription(event?.target?.value)}  
        />
        <Button
          variant='success'
          onClick={onCreateTask}
          isLoading={isCreatingTask}
        >
          Add
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard