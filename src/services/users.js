import axios from 'axios'

export default class UsersService {
  createUser = ({ firstName, lastName, login, password }) => 
    axios.post(`/users`, { firstName, lastName, login, password })


  login = ({ login, password }) =>
    axios.post(`/auth`, { login, password })
}
