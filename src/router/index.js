import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutPage from "../views/AboutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/project",
      name: "project",
      component: () => import("../views/ProjectPage.vue")
    },
    {
      path: "/style-guide",
      name: "Style Guide",
      component: () => import("../views/StyleGuide.vue"),
    },
  ],
});

export default router;
