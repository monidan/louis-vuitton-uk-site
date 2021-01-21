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
  },
  {
    path: '/posts',
    title: 'Posts',
    name: 'Posts',
    component: () => import('../views/PostPage.vue')
  },
  {
    path: '/posts/new',
    title: 'New Post',
    name: 'NewPost',
    component: () => import('../views/NewPostPage.vue')
  }
];

export default routes;