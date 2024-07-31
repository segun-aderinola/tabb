import { createApp } from 'vue'
import App from './App.vue'
// import ServiceComponent from './pages/services/ServiceComponent.vue'
import './assets/tailwind.css';
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');
