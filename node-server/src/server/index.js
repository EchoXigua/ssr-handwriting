

const express = require('express')
const server = express()
const path = require('path')
const { createApp } = require('../app.js')
const { renderToString } = require('@vue/server-renderer')

const createRouter = require('../router/index.js').default

const { createMemoryHistory } = require('vue-router')

const { createPinia } = require('pinia')



server.use(express.static(path.resolve(__dirname, '../../build')))
server.get('/*', async (req, res) => {
  const app = createApp()
  //创建路由
  const router = createRouter(createMemoryHistory())
  app.use(router)

  //等待路由加载完成（异步路由）
  await router.push('/about')
  //等待页面跳转好
  await router.isReady()


  //安装 store
  const pinia = createPinia()
  app.use(pinia)



  const appStringHtml = await renderToString(app)
  console.log('appStringHtml', appStringHtml);
  res.send(`
  
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>

  <body>
    <h2>Vue3 SSR app</h2>
    <div id="app">${appStringHtml}</div>

    <script src="/client/client_bundle.js"></script>
  </body>

  </html>
  `)
})

server.listen(3000, () => {
  console.log('this server running http://localhost:3000');
})