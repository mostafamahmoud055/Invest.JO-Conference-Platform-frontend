import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "../pages/IndexPage.vue";
import StartRegisterPage from "../pages/StartRegisterPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: IndexPage,
  },
  {
    path: "/start-register",
    name: "StartRegister",
    component: StartRegisterPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
