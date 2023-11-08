// import { createSSRApp } from "vue";
// import App from './App.vue'

const { createSSRApp } = require('vue')
const App = require('./App.vue')
// import App from './App.vue'


/**
 * 这里为什么导出一个函数，并且返回一个app实例？
 * 原因： 
 *    避免跨请求状态的污染
 *    通过函数返回app实例，每次都会返回一个新的实例
 */

// export default function createApp() {
//   return createSSRApp(App)
// }
function createApp() {
  console.log('server App', App);
  return createSSRApp(App.default)
}

module.exports = {
  createApp
}
