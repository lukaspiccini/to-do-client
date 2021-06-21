export const isUserLoggedIn = () => {
  const token = localStorage.getItem('token')
  return token !== '' && token !== undefined && token !== null
}