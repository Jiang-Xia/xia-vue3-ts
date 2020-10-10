import $axios from '@/utils/request'
import config from '@/api/config'
import { ResearchData,PostData } from '@/api/interface'
/*
  新版本api 开始
*/
// 获取大模块数据
export async function getProjectData (params: PostData) {
  return $axios({
    url: config.smaidatasearch_service_base_url + '/api/v1/data_detail/data',
    method: 'get',
    params: params
  })
}
// 获取时间线 数据
export async function getTimeline (params: PostData) {
  return $axios({
    url: config.smaidatasearch_service_base_url + '/api/v1/data_detail/time_line_list',
    method: 'get',
    params: params
  })
}

// 获取时间线 数据
export async function getNavList (params: PostData) {
  return $axios({
    url: config.smaidatasearch_service_base_url + '/api/v1/origin/nav_list',
    method: 'get',
    params: params
  })
}
// 获取结构化数据 分专病和科研不同的api
export async function getAnalyticalData (params: ResearchData) {
  const ip = config.smaiserv_service_base_url
  let url = ip + '/api/v3/disease/data'
  if (params.research_id) {
    url = ip + '/api/v3/research/data'
  }
  return $axios({
    url: url,
    method: 'get',
    params: params
  })
}

// 更新结构化数据 分专病和科研不同的api
export function modifyAnalyticalData (data: ResearchData) {
  const ip = config.smaiserv_service_base_url
  let url = ip + '/api/v3/disease/data'
  if (data.research_id) {
    url = ip + '/api/v3/research/data'
  }
  return $axios({
    url: url,
    method: 'patch',
    data: data
  })
}

// 添加结构化数据 分专病和科研不同的api
export function addAnalyticalData (data: ResearchData) {
  const ip = config.smaiserv_service_base_url
  let url = ip + '/api/v3/disease/data'
  if (data.research_id) {
    url = ip + '/api/v3/research/data'
  }
  return $axios({
    url: url,
    method: 'post',
    data: data
  })
}

// 获取结构化模板 分专病和科研不同的api
export async function getDetailTemplate (params: ResearchData) {
  const ip = config.smaifdef_service_base_url
  let url = ip + '/api/v1/disease/meta_template'
  if (params.research_id) {
    url = ip + '/api/v1/research/meta_template'
  }
  return $axios({
    method: 'get',
    url: url,
    params: params
  })
}

// 获取患者基本信息 分专病和科研不同的api
export async function getBaseInfo (params: PostData) {
  return $axios({
    url: config.smaidatasearch_service_base_url + '/api/v1/data_detail/patient_info',
    method: 'get',
    params: params
  })
}

// 请求pdf
export async function getPdf (params: PostData) {
  return $axios({
    url: config.smaidatasearch_service_base_url + '/api/v1/data_detail/data',
    method: 'get',
    params: params
  })
}
/*
  新版本api 结束
*/
