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
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/ContactsView"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
