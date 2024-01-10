<script setup lang="ts">

import Center from "../../components/Center.vue";
import {useRoute, useRouter} from "vue-router";
import {onMounted} from "vue";

const router = useRouter();
const route = useRoute();

onMounted(()=>{

  localStorage.setItem("-reg-first","true")
  setTimeout(()=>{
    switch (route.params?.id) {
      case 'start': router.push("/register"); break;
      default: router.push("/join/start");
    }
  },2000)

})
</script>

<template>
<Center class="w-full h-screen text-4xl font-mono">
  <div v-if="route.params?.id == 'start'">Welcome!</div>

</Center>
</template>

<style scoped>

</style>