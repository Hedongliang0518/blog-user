import "@/assets/style/global.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "reset-css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.mount("#app");
