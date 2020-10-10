import config from '@/api/config'
import $axios from '@/utils/request'
import { PostData } from '@/api/interface'

// 获取项目、科室、病种权限信息
export async function editPassword (data: PostData) {
  return $axios({
    url: config.smaiuac_service_base_url + '/api/v2/profile/user/modify_password',
    method: 'post',
    data: data
  })
}
