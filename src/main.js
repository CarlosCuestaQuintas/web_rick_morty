import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide'
import router from './router'

createApp(App).use(VueSplide).use(router).mount('#app')
