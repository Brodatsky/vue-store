import { createApp } from 'vue'
import { createPinia } from 'pinia'
//@ts-ignore
import StarRating from 'vue-star-rating'

import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.component('StarRating', StarRating)
app.use(createPinia())
app.use(router)
app.mount('#app')
