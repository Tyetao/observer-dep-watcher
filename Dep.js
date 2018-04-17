let uid = 0
export default class Dep {
  constructor() {
    this.id = uid++
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  removeSub(sub) {
    let index = this.subs.indexOf(sub)
    if (index != -1) {
      this.subs.splice(index, 1)
    }
  }

  notify () {
    const subs = this.subs.slice()
    this.subs.forEach((sub) => {
      sub.cb()
    })
  }
}

Dep.target = null
