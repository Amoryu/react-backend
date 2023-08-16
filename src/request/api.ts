import request from './index'

// 验证码的请求
export const CaptchaAPI = (): Promise<CaptchaAPIReturn> => request.get("/prod-api/captchaImage")

// 登录请求
export const LoginAPI = (params:LoginAPIParams):Promise<LoginAPIReturn> => request.get("/prod-api/login",params)