import { createApp } from 'vue'
import '../../assets/style.css'

import App from "./App.vue"
import router from "./router";
import store from "./store.ts";
import axios from 'axios'
import {msgApi} from '../../components/api/msg-api.ts';

const app = createApp(App);

app.config.globalProperties.$axios = axios
app.config.globalProperties.$msgApi = msgApi;

app.use(router)
app.use(store)

app.mount('body')