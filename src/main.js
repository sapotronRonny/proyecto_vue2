import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/store.js';

const app = createApp(App)

app.use(router)
// App.config.globalProperties.$axios = axios;
app.mount('#app')
