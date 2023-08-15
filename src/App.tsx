
// import { Outlet,Link } from 'react-router-dom'
import { useRoutes,Link } from 'react-router-dom'

import router from './router/index'

export default function App() {
  const outlet = useRoutes(router)
  return (
    <>
      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link> */}
      

      {/* 占位符组件，类似router-view 
      <OutLet/> */}

      {outlet}
    </>
  )
}
