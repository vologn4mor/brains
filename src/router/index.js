import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView"),
  },
  {
    path: "/agents",
    name: "agents",
    component: () => import("../views/AgentView"),
  },
  {
    path: "/services",
    name: "agents",
    component: () => import("../views/ServicesView"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
