import { createApp } from 'vue'
import App from './App.vue'
import "./assets/styles/styles.scss"
import 'material-design-icons-iconfont'
import router from "./router/router";
import UiGrid from "./components/ui/UiGrid";
import UiGridCol from "./components/ui/UiGridCol";
import UiBtn from "./components/ui/UiBtn";
import UiCard from "./components/ui/UiCard";
import UiTopLink from "./components/ui/UiTopLink";

export const app = createApp(App);

app.use(router);
app.component("ui-grid", UiGrid);
app.component("ui-grid-col", UiGridCol);
app.component("ui-btn", UiBtn);
app.component("ui-card", UiCard);
app.component("ui-top-link", UiTopLink);

app.mount('#app');


