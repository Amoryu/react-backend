import Home from '../views/Home'
import About from '../views/About'
import User from '../views/User'

import { Navigate } from 'react-router-dom'

const routes = [
  {
    path: "/",
    element:<Navigate to="/home"/>
  },
  {
    path: "/about",
    element:<About/>
  },
  {
    path: "/home",
    element:<Home/>
  },
  {
    path: "/user",
    element:<User/>
  },
]

export default routes


/**
 * 组件式路由写法
 */
/* import App from '../App'
import Home from '../views/Home'
import About from '../views/About'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/' element={<Navigate to="home"/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default baseRouter */