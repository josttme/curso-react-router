
import { NavLink } from 'react-router-dom'
import useAuth from '../auth/auth'
export default function Menu () {
  const auth = useAuth()

  return (
    <nav>
      <ul>
        {routes.map(route => {
          if ((route.publicOnly && auth.user) ||
          (route.private && !auth.user)) return null

          return (
            <li key={route.path}>
              <NavLink
                to={route.path}
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'black'
                })}
              >
                {route.text}
              </NavLink>

            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const routes = []
routes.push({
  path: '/',
  text: 'Home',
  private: false
})
routes.push({
  path: '/blog',
  text: 'Blog',
  private: false
})
routes.push({
  path: '/profile',
  text: 'Profile',
  private: true
})
routes.push({
  path: '/login',
  text: 'Login',
  private: false,
  publicOnly: true
})
routes.push({
  path: '/logout',
  text: 'Logout',
  private: true
})
