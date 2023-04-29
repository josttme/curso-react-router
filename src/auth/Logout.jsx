import useAuth from './auth'

export default function Logout () {
  const auth = useAuth()
  const logout = (e) => {
    e.preventDefault()
    auth.logout()
  }
  return (
    <>
      <h1>Logout</h1>
      <form action='' onClick={logout}>
        <label htmlFor=''>¿Seguro de que quieres salir?</label>

        <input type='password' placeholder='Password' />
        <button type='submit'>Salir</button>
      </form>
    </>
  )
}
