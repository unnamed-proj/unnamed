

<template>


  <Center class="w-full h-[120vh] flex-col">
    <div class="text-2xl font-mono">Hello  World!</div><span class="rotate text-[#b40202] text-2xl">☯</span>
    <RouterLink to="about" class="mt-1">你好，世界</RouterLink>'

    <div>登入状态: {{store.state.AccountStatus}}</div>
    <div>登入数据: {{store.state.AccountData}}</div>
  </Center>
</template>
<script setup lang="ts">

import Center from "../components/Center.vue";

import {useStore} from 'vuex';
const store = useStore();
</script>