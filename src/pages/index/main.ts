import { createApp } from 'vue'
import '../../assets/style.css'

import App from "./App.vue"
import router from "./router";
import axios from 'axios'
import {msgApi} from '../../components/api/msg-api.ts';

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import naive from 'naive-ui'

const app = createApp(App);
app.use(naive)

app.config.globalProperties.$axios = axios
app.config.globalProperties.$msgApi = msgApi;

app.use(router)

app.mount('body')