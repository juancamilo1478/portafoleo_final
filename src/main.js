import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Correcta importación de Font Awesome

const app = createApp(App)

app.use(router)

app.mount('#app')
