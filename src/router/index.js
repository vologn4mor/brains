import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView"),
  },
  {
    path: "/agents",
    name: "Agents",
    component: () => import("../views/AgentView"),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/ServicesView"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
