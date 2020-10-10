const SALT = ''
interface JsonValue {
  [propName: string]: string;
}
const storage = {
  local: {
    get (key: string) {
      const strValue = localStorage.getItem(SALT + key)
      if (strValue && strValue !== 'undefined') {
        return JSON.parse(strValue)
      } else {
        return null
      }
    },
    set (key: string, jsonValue: JsonValue) {
      const strValue = JSON.stringify(jsonValue)
      localStorage.setItem(SALT + key, strValue)
    },
    remove (key: string) {
      localStorage.removeItem(SALT + key)
    },
    removeAll () {
      localStorage.clear()
    }
  },
  session: {
    get (key: string) {
      const strValue = sessionStorage.getItem(SALT + key)
      if (strValue && strValue !== 'undefined') {
        return JSON.parse(strValue)
      } else {
        return null
      }
    },
    set (key: string, jsonValue: JsonValue) {
      const strValue = JSON.stringify(jsonValue)
      sessionStorage.setItem(SALT + key, strValue)
    },
    remove (key: string) {
      sessionStorage.removeItem(SALT + key)
    },
    removeAll () {
      sessionStorage.clear()
    }
  }
}

export default storage
