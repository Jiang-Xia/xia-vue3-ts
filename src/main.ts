import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import '@/styles/base.scss'
import 'ant-design-vue/dist/antd.css'
import './permission'

const app = createApp(App)
app.use(Antd)
app.use(store).use(router).mount('#app')
