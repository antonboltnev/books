import { createRouter, createWebHistory } from 'vue-router'
import Page from '../layouts/Page'

const HomePage = () => import("../components/HomePage");
const Catalogue = () => import('../components/Catalogue');
const BookPage = () => import('../components/BookPage');

const routes = [
  {
    path: '/',
    name: "Main",
    component: Page,
    children: [
      {
        path: '/',
        name: 'HomePage',
        component: HomePage
      },
      { path: '/catalogue',
        name: "Catalogue",
        component: Catalogue
      },
      { path: '/book-page',
        name: "BookPage",
        component: BookPage,
        props: true
      }
    ]
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
