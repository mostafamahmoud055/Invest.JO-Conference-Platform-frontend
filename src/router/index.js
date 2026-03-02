import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import IndexPage from "../pages/IndexPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import StartRegisterPage from "../pages/StartRegisterPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import GenericInfoPage from "../pages/GenericInfoPage.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: IndexPage,
      },
      {
        path: "about",
        name: "About",
        component: AboutPage,
      },
      {
        path: "agenda",
        name: "Agenda",
        component: GenericInfoPage,
        meta: {
          title: "Agenda",
          description: "Conference tracks, sessions, and detailed timetable will be published here.",
        },
      },
      {
        path: "speakers",
        name: "Speakers",
        component: GenericInfoPage,
        meta: {
          title: "Speakers",
          description: "Meet keynote speakers, policy leaders, and private sector experts.",
        },
      },
      {
        path: "investment-opportunities",
        name: "InvestmentOpportunities",
        component: GenericInfoPage,
        meta: {
          title: "Investment Opportunities",
          description: "Discover project pipelines and strategic investment opportunities in Jordan.",
        },
      },
      {
        path: "tourism",
        name: "Tourism",
        component: GenericInfoPage,
        meta: {
          title: "Tourism",
          description: "Explore tourism investment opportunities and destination development projects.",
        },
      },
      {
        path: "partners",
        name: "Partners",
        component: GenericInfoPage,
        meta: {
          title: "Partners",
          description: "Institutions and organizations supporting JEIC 2026.",
        },
      },
      {
        path: "news-updates",
        name: "NewsUpdates",
        component: GenericInfoPage,
        meta: {
          title: "News Updates",
          description: "Latest announcements, releases, and conference updates.",
        },
      },
      {
        path: "contact",
        name: "Contact",
        component: GenericInfoPage,
        meta: {
          title: "Contact",
          description: "Reach the organizing team for participation and partnership inquiries.",
        },
      },
      {
        path: "start-register",
        name: "StartRegister",
        component: StartRegisterPage,
      },
      {
        path: "register",
        name: "Register",
        component: RegisterPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 96,
        behavior: "smooth",
      };
    }

    return { top: 0 };
  },
});

export default router;
