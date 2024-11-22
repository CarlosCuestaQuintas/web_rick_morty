import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide'
import router from './router'

import '@splidejs/vue-splide/css'

createApp(App).use(VueSplide).use(router).mount('#app')
