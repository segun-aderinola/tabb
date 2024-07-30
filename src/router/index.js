import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../HomeComponent.vue';
import ServiceComponent from '../pages/services/ServiceComponent.vue';


const routes = [
  { path: '/', name: 'Home', component: HomeComponent },
  { path: '/services', name: 'Services', component: ServiceComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
