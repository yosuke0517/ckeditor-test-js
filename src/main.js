import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { key, store } from "./store";
import CKEditor from "@ckeditor/ckeditor5-vue";

createApp(App).use(store, key).use(router).use(CKEditor).mount("#app");
