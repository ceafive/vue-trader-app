import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () =>
      import(
        /* webpackChunkName: "portfolio" */ "../views/Portfolio"
      )
  },
  {
    path: "/stocks",
    name: "stocks",
    component: () =>
      import(/* webpackChunkName: "stocks" */ "../views/Stocks")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
