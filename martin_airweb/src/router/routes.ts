import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'articles',
        name: 'articles',
        component: () => import('pages/ArticlesListPage.vue'),
      },
      {
        path: 'mon-panier',
        name: 'shoppingCart',
        component: () => import('pages/ShoppingCart.vue'),
      },
      {
        path: 'profil',
        name: 'profil',
        component: () => import('pages/ProfilPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
