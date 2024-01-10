<script setup lang="ts">

import Ad from "./ad.vue";
import {ref} from "vue";

const OpenHeader = ref(true);

const AdTrue = () => {
  if (localStorage.getItem('-reg-first')){
    return false;
  }else return true;
}
</script>

<template>
<div id="header" :class="OpenHeader? '':'-translate-y-full'" class="w-full h-auto absolute top-0 transition-all duration-700 ease-in-out ">
  <ad v-if="AdTrue()"></ad>

  <header  class="z-10 w-full h-24 bg-white shadow-sm border-b px-10 flex justify-between items-center">
    <RouterLink to="/" class="flex gap-4 items-center cursor-pointer">
      <img src="/favicon.ico" class="w-11 h-11 rounded" />
      <div class="font-mono hidden sm:flex text-3xl">Unnamed-Proj.</div>
    </RouterLink>

    <div>
      <RouterLink to="/register" class=" transition-all duration-500
             focus-visible:text-white hover:text-white
            text-sm font-semibold shadow-sm px-5 py-2
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
               :class="`hover:bg-[#b9bcdf] focus-visible:bg-[#b9bcdf] border-[#b9bcdf] border text-[#b9bcdf] focus-visible:outline-[#b9bcdf]`">
        Sign UP
      </RouterLink>
      <RouterLink to="/portal" class=" transition-all duration-500
             focus-visible:text-white hover:text-white
            text-sm font-semibold shadow-sm pl-2 pr-1.5 py-2 border-l-0
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
               :class="`hover:bg-[#b9bcdf] focus-visible:bg-[#b9bcdf] border-[#b9bcdf] border text-[#b9bcdf] focus-visible:outline-[#b9bcdf]`">
        IN
      </RouterLink>
    </div>


  </header>

  <div @click="OpenHeader=!OpenHeader" class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-20 h-6 border border-t-0
          rounded-b-md flex justify-center items-center cursor-pointer  bg-blue-100 bg-opacity-90
          "><span :class="OpenHeader?'rotate-45':'rotate-[225deg]'" class="text-[#b9bcdf] transition-all duration-700 ease-in-out select-none">⇱</span> </div>
</div>
</template>

<style scoped>

</style>