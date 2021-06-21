import axios from 'axios'

export default class ProjectsService {
  token = localStorage.getItem('token')

  createTask = ({ project, description }) => 
    axios.post(`/${project}/tasks`, { description }, {
      headers: {
        'Authorization': `bearer ${this.token}`
      }
    })

  finishTask = ({ project, task }) => 
    axios.put(`/${project}/tasks/${task}`, { finishedAt: new Date() }, {
      headers: {
        'Authorization': `bearer ${this.token}`
      }
    })

  deleteTask = ({ project, task }) =>
    axios.delete(`/${project}/tasks/${task}`, {
      headers: {
        'Authorization': `bearer ${this.token}`
      }
    })
}
