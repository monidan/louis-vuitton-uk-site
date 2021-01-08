import Homepage from '../views/Homepage.vue';

const routes = [
  {
    path: '/',
    title: 'Louis Vuitton Official Site Homepage',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '*',
    title: 'Not Found Page',
    name: 'NotFound',
    component: () => import('../views/NotFound404.vue')
  },
  {
    path:'/women/clothes',
    title: 'Louis Vuitton Women Collection',
    name: 'WomenClothes',
    component: () => import('../views/WomenItems.vue')
  }
];

export default routes;