import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
store.getters.config;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "*",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/meal",
    name: "Meal",
    component: () => import("../views/Meal.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profil",
    name: "Profil",
    component: () => import("../views/Profil.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/injection",
    name: "Injection",
    component: () => import("../views/Injection.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//Check Authentification before allowing changing page
router.beforeEach((to, from, next) => {
  const auth = store.getters.isLoggedIn;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !auth) {
    next("login");}
  else next();
});

export default router;
