import { createApp } from 'vue'
import { createPinia } from 'pinia'
//@ts-ignore
import StarRating from 'vue-star-rating'

import App from './App.vue'
import router from './router'
import './assets/main.css'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoSearch } from 'oh-vue-icons/icons'

addIcons(IoSearch)

const app = createApp(App)
app.component('StarRating', StarRating)
app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)
app.mount('#app')
