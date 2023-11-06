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
    component: () => import("../views/AgentsView"),
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
  {
    path: "/onboarding",
    name: "Onboarding",
    component: () => import("../views/OnboardingView"),
  },
  {
    path: "/scaling",
    name: "Scaling",
    component: () => import("../views/ScalingView"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/BlogView"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
