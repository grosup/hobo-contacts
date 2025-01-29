import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_PATH),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Index.vue"),
    },
  ],
});

export default router;
