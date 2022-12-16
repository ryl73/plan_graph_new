import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import VueKonva from "vue-konva";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import store from "@/store/index.js";

createApp(App).use(PrimeVue).use(VueKonva).use(store).mount("#app");
