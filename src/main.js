import { createApp } from "vue";

import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import VJstree from "vue-jstree";

const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("v-jstree", VJstree);

app.mount("#app");
