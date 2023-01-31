import { createApp } from 'vue'
import App from './App.vue'
import Sidebar from "./components/sidebar-menu.vue";

createApp(App).mount('#app')

App.component('vue-sidebar-menu', Sidebar);