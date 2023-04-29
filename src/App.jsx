import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Profile from './pages/Profile'
import Menu from './components/Menu'
import BlogPost from './components/BlogPost'
import Login from './auth/Login'
import Logout from './auth/Logout'
import { AuthProvider, AuthRoute } from './auth/AuthProvider'
export default function App () {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />}>
              <Route path=':slug' element={<BlogPost />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route
              path='/logout'
              element={
                <AuthRoute>
                  <Logout />
                </AuthRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <AuthRoute>
                  <Profile />
                </AuthRoute>
              }
            />
            <Route path='/*' element={<p>404</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}
