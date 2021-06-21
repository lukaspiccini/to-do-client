import axios from 'axios'

export default class ProjectsService {
  token = localStorage.getItem('token')

  getProjects = () => 
    axios.get(`/projects`, {
      headers: {
        'Authorization': `bearer ${this.token}`
      }
    })

  createProject = (data) =>
    axios.post('/projects', data, {
      headers: {
        'Authorization': `bearer ${this.token}`
      }
    })

  updateProject = ({ project, name }) =>
    axios.put(`/projects/${project}`, { name }, {
      headers: {
        'Authorization': `bearer ${this.token}`
      }
    })

  deleteProject = ({ project }) =>
    axios.delete(`/projects/${project}`, {
      headers: {
        'Authorization': `bearer ${this.token}`
      }
    })
}
