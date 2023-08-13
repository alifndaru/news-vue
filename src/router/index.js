import { createRouter, createWebHistory } from "vue-router";
import ListNews from "../view/ListNews.vue";
import LoginItem from "../view/auth/Login.vue";
import HomeItem from "../view/Home.vue";

const routes = [
  {
    path: "/news",
    component: ListNews,
  },
  {
    path: "/",
    component: LoginItem,
  },
  {
    path: "/home",
    component: HomeItem,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
