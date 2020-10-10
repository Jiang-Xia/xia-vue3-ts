import config from '@/api/config'
import $axios from '@/utils/request'
import {PostData } from '@/api/interface'

/*
  新版本api
*/

/* 公共资源 接口 */
export async function userResource (data: PostData, type: string) {
  const _data = {
    word: '',
    page: 1,
    no_page: 1,
    page_size: 20
  }
  return $axios({
    url: config.smaiuac_service_base_url + '/api/v2/user_resource/' + type,
    method: 'post',
    data: Object.assign(_data, data)
  })
}

// 获取项目、科室、病种权限信息
export async function searchKeywords (data: PostData) {
  return $axios({
    url: config.smaidatasearch_service_base_url + '/api/v1/data_search/quick_search',
    method: 'post',
    data: data
  })
}

// 获取keywordList
export async function keywordList (params: object) {
  return $axios({
    url: config.smaidatasearch_service_base_url + '/api/v1/data_search/keywords_template',
    method: 'get',
    params: params
  })
}

// 导出任务
export async function exportTask (data: PostData, method: string) {
  if (method === 'get' || method === 'delete') {
    return $axios({
      url: config.smaiexport_service_base_url + '/api/v2/export/task',
      method: method,
      params: data
    })
  } else {
    return $axios({
      url: config.smaiexport_service_base_url + '/api/v2/export/task',
      method: 'post',
      data: data
    })
  }
}

// 获取任务列表
export async function taskList (data: PostData) {
  return $axios({
    url: config.smaiexport_service_base_url + '/api/v2/export/task_list',
    method: 'post',
    data: data
  })
}

// 导出字段联想
export async function associationAsync (data: PostData) {
  return $axios({
    url: config.smaidatasearch_service_base_url + '/api/v1/data_search/associate_search',
    method: 'post',
    data: data
  })
}
