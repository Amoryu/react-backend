// 定义请求参数，和响应的类型
interface CaptchaAPIReturn {
  msg: string
  img: string
  code: number
  captchaEnabled: boolean
  uuid:string
}

interface LoginAPIParams {
  username: string
  password: string
  code: string
  uuid:string
}

interface LoginAPIReturn {
  msg: string
  code: number
  token:string
}