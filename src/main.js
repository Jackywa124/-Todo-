import Vue from 'vue'
import App from './App.vue'
// 1. 导入 ant-design-vue 组件库
import Antd from 'ant-design-vue'
// 2. 导入组件库的样式表
import 'ant-design-vue/dist/antd.css'
// 导入全局的数据状态管理器
import store from './store'

Vue.config.productionTip = false
// 3. 安装组件库和数据管理
Vue.use(Antd)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
