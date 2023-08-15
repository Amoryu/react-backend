// 路由懒加载
import { lazy, Suspense } from 'react'

const Home = lazy(() => import("../views/Home"))
const About = lazy(() => import("../views/About"))
const User = lazy(() => import("../views/User"))

import { Navigate } from 'react-router-dom'

const withLoadingComponent = (component: JSX.Element) => (
  <Suspense fallback={<div>loading...</div>}>
      {component}
    </Suspense>
)

const routes = [
  {
    path: "/",
    element:<Navigate to="/home"/>
  },
  {
    path: "/about",
    element: withLoadingComponent(<About/>)
  },
  {
    path: "/home",
    element: withLoadingComponent(<Home/>)

  },
  {
    path: "/user",
    element: withLoadingComponent(<User/>)
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