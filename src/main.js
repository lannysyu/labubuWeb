// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// 建立實體
const app = createApp(App)

// 路由工具
// npm install vue-router@4
import router from './router'

// Bootstrap 5 css framework
// npm install bootstrap@latest @popperjs/core
import "@/assets/scss/all.scss";

// 使用Svg圖片工具，vite.config.js setting
// npm i vite-plugin-svg-icons
import SvgIcon from "@/components/common/icons/SvgIcon.vue";
import "virtual:svg-icons-register";


app.use(createPinia())
app.use(router)

// 安裝額外插件
app.mount('#app')

// 註冊全域組件
app.component("svg-icon", SvgIcon);
