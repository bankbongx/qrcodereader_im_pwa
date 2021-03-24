import { createApp } from 'vue'
import App from './App.vue'
import VueQrcodeReader from "vue-qrcode-reader"


createApp(App).mount('#app')
App.use(VueQrcodeReader);