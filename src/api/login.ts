import $axios from '@/utils/request'
import config from '@/api/config'
import { PostData } from '@/api/interface'

export const handleLogin = async (data: PostData) => {
  return $axios.post(config.smaiuac_service_base_url + '/api/v2/token/user/make_token', data).then(res => res.data)
}
// 请求回logo
// export const handleLogo = async() => {
//   return $axios.get(config.smaiuac_service_base_url + '/api/v1/user_resource/user_logo').then(res => res.data)
// }
// 请求回账号信息
export const handleUserInfo = async () => {
  return $axios.get(config.smaiuac_service_base_url + '/api/v2/token/user/token_profile').then(res => res.data)
}

// 退出登录的请求
export const handleLoginout = async (access_token: string) => {
  return $axios.post(config.smaiuac_service_base_url + '/api/v2/token/user/destroy_token', access_token).then(res => res.data)
}
// 修改密码的请求
export const handleResetpwd = async (data: PostData) => {
  return $axios.post(config.smaiuac_service_base_url + '/api/v1/user_manage/modify_selfpwd', data).then(res => res.data)
}
