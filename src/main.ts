import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import router from './router'

library.add(fas, far, fab);
dom.watch();

// 挂载Vue应用
createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app');