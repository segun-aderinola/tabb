// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../HomeComponent.vue';
// import ServicesComponent from '../components/ServicesComponent.vue';
// import SolutionsComponent from '../components/SolutionsComponent.vue';
// import AboutComponent from '../components/AboutComponent.vue';
// import BlogComponent from '../components/BlogComponent.vue';
// import ContactComponent from '../components/ContactComponent.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeComponent },
//   { path: '/services', name: 'Services', component: ServicesComponent },
//   { path: '/solutions', name: 'Solutions', component: SolutionsComponent },
//   { path: '/about', name: 'About', component: AboutComponent },
//   { path: '/blog', name: 'Blog', component: BlogComponent },
//   { path: '/contact', name: 'Contact', component: ContactComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
