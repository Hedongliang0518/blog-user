import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/App.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/components/HelloWorld.vue"),
    children: [],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
