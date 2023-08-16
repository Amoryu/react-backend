import { useEffect, useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.scss'
import initLoginBg from './init'
import { Input, Space, Button,message } from 'antd'

import { CaptchaAPI,LoginAPI } from "@/request/api"


export default function index() {
  const naigateTo = useNavigate()
  useEffect(() => {
    initLoginBg()
    getCaptchaImg()
    window.onresize = function () {
      initLoginBg()
    }
  },[])

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [captcha,setCaptcha] = useState('')
  const [captchaImg,setCaptchaImg] = useState('')

  const getUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
    // console.log(e.target.value)
  }

  const getPassword = (e:ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setPassword(e.target.value)

  }
  const getCaptcha = (e:ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setCaptcha(e.target.value)

  }
  const getCaptchaImg = async () => {
    let captchaAPI = await CaptchaAPI()
    if (captchaAPI.code === 200) {
      setCaptchaImg("data:image/gif;base64," + captchaAPI.img)
      
      localStorage.setItem("uuid",captchaAPI.uuid)
    }
  }

  const getLoginInfo = async () => {
    console.log(username, password, captcha)
    
    if (!username.trim() || !password.trim() || !captcha.trim()) {
      message.warning("请输入完整登录信息")
      return
    } 
    // 发送登录请求
    let loginRes = await LoginAPI({
      username,
      password,
      code: captcha,
      uuid: localStorage.getItem('uuid') as string
    })

    if (loginRes.code === 200) {
      // 提示成功
      message.success("登录成功！")
      // 保存token
      localStorage.setItem('react_ts_token',loginRes.token)
      // 跳转首页
      naigateTo('/about')
      // 删除uuid
      localStorage.removeItem('uuid')
    }
    
  }

  return (
    <div className={styles.loginPage}>
      <canvas id='canvas' style={{display: "block"}}></canvas>
      <div className={styles.loginBox}>
        <div className={styles.title}>
          <h1>React后台</h1>
          <p>React + Ts</p>
        </div>
        <div className="form">
          <Space direction='vertical' size={'large'} style={{display: 'flex'}}>
            <Input placeholder='用户名' onChange={getUsername}/>
            <Input.Password placeholder='密码'  onChange={getPassword}/>
            <div className={styles.captchaBox}>
              <Input placeholder='验证码' onChange={getCaptcha}/>
              <div className={styles.captchaImg} onClick={getCaptchaImg}>
                <img src={captchaImg} alt="" height={38}/>
              </div>
            </div>
            <Button type='primary' block onClick={getLoginInfo}>登录</Button>
          </Space>
        </div>
      </div>    
    </div>
  )
}