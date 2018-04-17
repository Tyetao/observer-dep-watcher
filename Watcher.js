import Dep from './Dep.js'

export default class Watcher {
  constructor(obj, key, cb) {
    this.obj = obj
    this.key = key
    this.cb = cb
    this.get(obj, key)
  }

  get(obj, key) {
    Dep.target = this
    obj[key] // 触发Observer的getter
    Dep.target = null
  }
}
