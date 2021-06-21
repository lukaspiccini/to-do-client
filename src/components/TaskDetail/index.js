import React, { useState, useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { SectionTitle, Task } from './style'

import TasksService from '../../services/tasks'

const TaskDetails = ({ title, tasks, loadProjects, project }) => {
  const tasksService = useMemo(() => new TasksService(), [])

  const [isDeletingTask, setIsDeletingTask] = useState(false)
  const [isCompletingTask, setIsCompletingTask] = useState(false)

  const onCompleteTask = taskId => {
    setIsCompletingTask(true)

    tasksService.finishTask({
      project: project?.id,
      task: taskId
    }).then(() => {
      if (loadProjects) loadProjects()
    }).finally(() => {
      setIsCompletingTask(false)
    })
  }

  const onDeleteTask = (taskId, taskDescription) => {
    if(window.confirm(`Do you really want to delete the task ${taskDescription}?`)) {
      setIsDeletingTask(true)
  
      tasksService.deleteTask({
        project: project?.id,
        task: taskId
      }).then(() => {
        if (loadProjects) loadProjects()
      }).finally(() => {
        setIsDeletingTask(false)
      })
    }
  }

  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      {tasks && tasks.length > 0 ? tasks.map((task) => (
        <Task key={task?.id}>
          <div {...task?.finishedAt ? { ['data-tooltip']: new Date(task?.finishedAt).toLocaleString() } : {}}>
            <input 
              type='checkbox'
              id={task?.id}
              checked={task?.finishedAt}
              disabled={task?.finishedAt || isDeletingTask || isCompletingTask}
              onChange={() => onCompleteTask(task?.id)} 
            />
            <label htmlFor={task?.description}>{task?.description}</label>
          </div>
          {!isDeletingTask && !isCompletingTask && !task?.finishedAt && (
            <button onClick={() => onDeleteTask(task?.id, task?.description)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          )}
        </Task>
      )) : (
        <p>None</p>
      )}
    </>
  )
}

export default TaskDetails