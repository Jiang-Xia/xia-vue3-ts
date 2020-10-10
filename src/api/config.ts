import { Config } from '@/api/interface'
const getConfig = () => {
  const config: Config = {}
  const _config = window.BASECONFIG
  console.log(window.BASECONFIG)
  for (const k in _config) {
    config[k] = _config[k]
  }
  return config
}
export default getConfig()
