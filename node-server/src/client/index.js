
const { createApp } = require('vue')

const App = require('../App.vue')

const createRouter = require('../router/index').default
const { createWebHistory } = require('vue-router')

const { createPinia } = require('pinia')




const app = createApp(App.default)

const router = createRouter(createWebHistory())
app.use(router)

const pinia = createPinia()
app.use(pinia)

router.isReady().then(() => {
  //等待路由准备后之后，客户端在挂载（水合）
  app.mount('#app')
})

