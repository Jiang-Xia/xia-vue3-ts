const SALT = ''

const storage = {
  local: {
    get(key:any) {
      const strValue = localStorage.getItem(SALT + key)
      if (strValue && strValue !== 'undefined') {
        return JSON.parse(strValue)
      } else {
        return null
      }
    },
    set(key:any, jsonValue:any) {
      const strValue = JSON.stringify(jsonValue)
      localStorage.setItem(SALT + key, strValue)
    },
    remove(key:any) {
      localStorage.removeItem(SALT + key)
    },
    removeAll() {
      localStorage.clear()
    }
  },
  session: {
    get(key:any) {
      const strValue = sessionStorage.getItem(SALT + key)
      if (strValue && strValue !== 'undefined') {
        return JSON.parse(strValue)
      } else {
        return null
      }
    },
    set(key:any, jsonValue:any) {
      const strValue = JSON.stringify(jsonValue)
      sessionStorage.setItem(SALT + key, strValue)
    },
    remove(key:any) {
      sessionStorage.removeItem(SALT + key)
    },
    removeAll() {
      sessionStorage.clear()
    }
  }
}

export default storage
