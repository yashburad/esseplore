import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Bazaar from "../views/Bazaar.vue";
import Explore from "../views/Explore.vue";
import HomeDining from "../views/HomeDining.vue";
import SignUp from "../views/SignUp.vue";
import Summary from "../views/Summary.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/homedining",
    name: "HomeDining",
    component: HomeDining,
  },
  {
    path: "/bazaar",
    name: "Bazaar",
    component: Bazaar,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/summary",
    name: "Summary",
    component: Summary,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
