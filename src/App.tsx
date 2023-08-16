
// import { Outlet,Link } from 'react-router-dom'
import { useRoutes,useLocation, useNavigate } from 'react-router-dom'

import router from './router/index'
import { useEffect } from 'react'
import { message } from 'antd'


const ToLoginPage = () => {
  const navigateTo = useNavigate()

  useEffect(() => {
    navigateTo("/login")
  }, [])
  return <></>
  
}

const ToHomePage = () => {
  const navigateTo = useNavigate()

  useEffect(() => {
    navigateTo("/home")
  }, [])
  return <></>
}

function BeforeRouterEnter() {
  const outlet = useRoutes(router)
  const location = useLocation(router)


  // 1.如果访问的是登录页，且有token，跳转到首页
  // 2.如果访问的不是登录页，且没有token,跳转到首页
  // 3.其余正常放行
  let token = localStorage.getItem("react_ts_token")
  if (location.pathname === "/login" && token) {
    message.success("登录成功")
    return <ToHomePage/>
  }

  if (location.pathname !== "/login" && !token) {
    message.warning('登录信息失效,请重新登录')
    return <ToLoginPage/>
    
  }


  return outlet
}


export default function App() {
  return (
    <>
      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link> */}
      

      {/* 占位符组件，类似router-view 
      <OutLet/> */}

      <BeforeRouterEnter/>
    </>
  )
}
