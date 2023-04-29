import useAuth from '../auth/auth'

export default function Profile () {
  const auth = useAuth()

  return (
    <h1>{auth.user.username}</h1>
  )
}
