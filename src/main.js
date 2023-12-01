import Vue from "vue";
import App from "./App.vue";
import PortalVue from "portal-vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { createPopper } from "@popperjs/core";
import BootstrapIcon from "bootstrap-icons/font/bootstrap-icons.css";
import VueRouter from "vue-router";
import FontSource from "@fontsource/titillium-web";


// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(PortalVue);

Vue.use(createPopper);

Vue.use(BootstrapIcon);

Vue.use(VueRouter);

Vue.use(FontSource);

Vue.config.productionTip = false;

import Home from "./components/Home.vue";
import Setting from "./components/SettingPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/setting", component: Setting },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
