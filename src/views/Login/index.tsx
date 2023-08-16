import { useEffect,useState } from 'react'
import styles from './login.module.scss'
import initLoginBg from './init'
import { Input, Space, Button } from 'antd'

export default function index() {

  useEffect(() => {
    initLoginBg()
    window.onresize = function () {
      initLoginBg()
    }
  },[])

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [captcha,setCaptcha] = useState('')

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


  const getLoginInfo = () => {
    console.log(username,password,captcha)
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
              <div className="captchaImg">
                <img src="" alt="" height={38}/>
              </div>
            </div>
            <Button type='primary' block onClick={getLoginInfo}>登录</Button>
          </Space>
        </div>
      </div>    
    </div>
  )
}