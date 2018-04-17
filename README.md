# vue响应式原理简单实现

> ##### 运行依赖（静态服务器）
```
npm i -g browser-sync
``` 
  
> ##### 运行  
```
  browser-sync start --server
```

### 实现核心

```text
  Object.defineProperty(obj, prop, descriptor) 方法会直接在一个对象上定义一个新属性，
  或者修改一个对象的现有属性， 并返回这个对象。
  获取对象上的值时触发getter,更新对象上的值时触发setter，注意的是get()、set()、不能和value、writable一起设置
```  

```js
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {},
    set() {}
  })
```
> 更多关于 Object.defineProperty(obj, prop, descriptor)信息，请查看[文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
