import Dep from './Dep.js'

export default class Observer {
  constructor(data) {
    this._data = data.data
    this.walk(this._data)
  }

  walk(data) {
    Object.keys(data).forEach((key) => { this.defineRective(data, key, data[key]) })
  }

  defineRective(data, key, value) {
    let self = this
    let dep = new Dep()
    if (value && typeof value === 'object') {
      this.walk(value)
    }
    console.log('订阅器' + dep.id + '->', dep.subs)
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (Dep.target) {
          // 添加订阅者
          dep.addSub(Dep.target)
        }
        return value
      },
      set(newVal) {
        if (value !== newVal) {
          if (newVal && typeof newVal === 'object') {
            self.walk(newVal)
          }
          value = newVal
          // 通知订阅者
          dep.notify()
        }
      }
    })
  }
}
