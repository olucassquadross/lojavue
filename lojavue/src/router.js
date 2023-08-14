import { createRouter, createWebHistory } from 'vue-router';
import Products from './Products.vue';
import Cart from './Cart.vue';
import ThankYou from './ThankYou.vue'; // Importe o novo componente

const routes = [
  { path: '/', component: Products },
  { path: '/cart', component: Cart },
  { path: '/thankyou', component: ThankYou } // Adicione a nova rota
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
