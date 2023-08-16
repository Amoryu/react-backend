import React from 'react'
import ReactDOM from 'react-dom/client'
//初始化样式
import 'reset-css'

// 全局样式
import '@/assets/styles/global.scss'

import App from './App.tsx'

//路由组件写法
// import Router from './router/index.tsx'

//路由表写法
import { BrowserRouter } from 'react-router-dom'

// 引入redux状态管理库
import { Provider } from 'react-redux'
import store from './store/index.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>

    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>

)
