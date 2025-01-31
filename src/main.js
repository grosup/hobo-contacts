import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@/scss/style.scss";
//import VueApexCharts from "vue3-apexcharts";
// @ts-ignore:next-line

const pinia = createPinia();
const app = createApp(App);

//app.use(VueApexCharts);
app.use(router);
app.use(pinia);
app.use(vuetify).mount("#app");
