import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import Button from 'primevue/button'
import Menubar from 'primevue/menubar';
const app = createApp(App)

app.use(PrimeVue)

app.component('Button', Menubar)
app.component('Button', Button)
app.use(PrimeVue, {ripple: true});

  
createApp(App).mount('#app')
