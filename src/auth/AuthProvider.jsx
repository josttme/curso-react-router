import { Navigate, useNavigate } from 'react-router-dom'
import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import useAuth from './auth'

export const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const login = ({ username }) => {
    setUser({ username })
    navigate('/profile')
  }

  const logout = () => {
    setUser(null)
    navigate('/')
  }

  const auth = { user, login, logout }

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}
export function AuthRoute ({ children }) {
  const auth = useAuth()
  if (!auth.user) {
    return <Navigate to='/login' />
  } else {
    return children
  }
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
AuthRoute.propTypes = {
  children: PropTypes.node.isRequired
}
