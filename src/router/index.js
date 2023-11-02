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
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
