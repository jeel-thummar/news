import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";
import { Icon, disableCache } from "@iconify/vue";
import "./style.css";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App);

app.component("NwIcon", Icon);
disableCache("all");

app.use(pinia);
app.use(router);
app.mount("#app");
