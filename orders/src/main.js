import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import OrderCard from "./components/OrderCard.vue";

const app = createApp(App);
app.component("OrderCard", OrderCard);

app.use(router);
app.use(store);

app.mount("#app");
