import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import { VueCookieNext } from 'vue-cookie-next'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { unstyled: true })
app.use(VueCookieNext)

app.mount('#app')
