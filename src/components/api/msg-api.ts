import { h, createApp } from "vue";
import Message from "./msg-comp.vue"; // 将你的通知组件保存为单文件组件

export function msgApi(targetId, type, msg, deleteAfterMs = 0) {
    const container = document.createElement("div");

    document.getElementById(targetId).appendChild(container);

    const app = createApp({
        render: () => h(Message, { type: type, deleteAfterMs:deleteAfterMs }, { default: () => msg })
    });

    app.mount(container);


}