import { useState } from 'react'
import useAuth from './auth'
import { Navigate } from 'react-router-dom'

export default function Login () {
  const auth = useAuth()

  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    auth.login({ username })
  }
  if (auth.user) {
    return <Navigate to='/profile' />
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}
