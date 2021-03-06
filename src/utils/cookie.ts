import Cookies from 'js-cookie'
export interface AnyProp {
  [propName: string]: string|number;
}
const TokenKey = 'sys_token'
const InfoKey = 'sys_info'
let day: number // 一天时间
export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (type: string, token: string, time: number) {
  day = time / (1000 * 60 * 60 * 24) // 一天时间
  return Cookies.set(TokenKey, type + ' ' + token, { expires: day })
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function getInfo () {
  const userInfo = Cookies.get(InfoKey) || '{}'
  if (userInfo) {
    return JSON.parse(unescape(userInfo))
  }
}

export function setInfo (userData: AnyProp) {
  // console.log(userData);
  return Cookies.set(InfoKey, userData, { expires: day })
}

export function removeInfo () {
  return Cookies.remove(InfoKey)
}
