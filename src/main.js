import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";

//import Osmosis from 'osmosis';




import "./assets/main.css";
import "./assets/bootstrap/bootstrap5.js";
import "./assets/web3/web3.js";

//definir rutas
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/home.vue"),
  },
  {
    path: "/ethbalance",
    name: "ethbalance",
    component: () => import("./views/ethbalance.vue"),
  },
  {
    path: "/tools",
    name: "tools",
    component: () => import("./views/tools.vue"),
  },
  {
    path: "/ecosystem",
    name: "ecosystem",
    component: () => import("./views/ecosystem.vue"),
  },
];

//crear objeto rutas de vue router -- objeto de VR
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//instancia de vue
const app = createApp(App);

app.use(router);

//Vue.prototype.$osmosis = Osmosis;

app.mount("#app");
