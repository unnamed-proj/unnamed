<template>
    <div ref="elementRef" :class="Animations" class="MsgComp py-1 px-3.5 my-2 w-52 sm:w-72 md:w-80 lg:w-96 flex items-center justify-between  border-l-4 border-l-gray-300 shadow-sm bg-white bg-opacity-90 shadow-2xl shadow-gray-300">
        <div class="flex items-center truncate">
            <div class="w-5 h-5 mr-2 flex items-center" v-html="IconGet(type)">
            </div>
            <div class="whitespace-normal break-words text-sm">
                <slot/></div>
            </div>
        <div @click="deleteElement" class="ml-0.5 cursor-pointer select-none transition-all duration-75 ease-linear text-gray-500 hover:text-gray-800 active:scale-90">⨉</div>
    </div>
</template>



<script setup>
import { defineProps } from 'vue';
import { ref,onMounted } from 'vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    type: String,
    deleteAfterMs: {
        type: Number,
        default: 0
    }
});
const timeouts = [];
onMounted(() => {
    if (props.deleteAfterMs > 0) {
        timeouts.push(setTimeout(deleteElement, props.deleteAfterMs));
    }
});

const IconList = {
    "success": '<svg xmlns="http://www.w3.org/2000/svg"fill="currentColor"class="w-5 text-green-500"viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>',
    "info": '<svg xmlns="http://www.w3.org/2000/svg"fill="currentColor"class="w-4 text-blue-500"viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>',
    "warn": '<svg xmlns="http://www.w3.org/2000/svg"fill="currentColor"class="w-4 text-yellow-400"viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>',
    "error": '<svg xmlns="http://www.w3.org/2000/svg"fill="currentColor"class="w-4 text-red-500"viewBox="0 0 16 16"><path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/></svg>',
    "bug": '<svg xmlns="http://www.w3.org/2000/svg"fill="currentColor"class="w-4 text-red-700"viewBox="0 0 16 16"><path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z"/><path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/></svg>',
    "msg": '<svg xmlns="http://www.w3.org/2000/svg"fill="currentColor"class="w-4 text-pink-500"viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/></svg>',
}
const IconGet = (type) => {
    if (IconList[type]){
        return IconList[type]
    }
    return IconList["msg"]
}

const elementRef = ref(null);
function deleteElement() {
    
    // 取消所有的 setTimeout
    for (let i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }

    // 清空 timeouts 数组
    timeouts.length = 0;
    
    
    Animations.value = 'out';


    setTimeout(function() {
        const element = elementRef.value;
        element.parentNode.removeChild(element);
    }, 150);
    
}
const Animations = ref("main");
</script>

<style>
.MsgComp.main{
    animation: slideInFromRight 200ms ease-in forwards;
}
.MsgComp.out{
    animation: slideOurToRight 150ms ease-in forwards;

}
@keyframes slideInFromRight {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes slideOurToRight {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(100%);
        opacity: 0;
    }
}
</style>