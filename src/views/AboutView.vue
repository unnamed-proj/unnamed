<template>
<Center class="w-full h-screen">
  <n-button @click="router.push('/404')" type="error" ghost>返回首页</n-button>
  <RouterLink to="/">返回首页</RouterLink>

</Center>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import Center from "../components/Center.vue";

const router = useRouter();
</script>