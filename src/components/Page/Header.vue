<script setup lang="ts">

import Ad from "./ad.vue";
import {ref} from "vue";

const OpenHeader = ref(true);

const AdTrue = () => {
  if (localStorage.getItem('-reg-first')){
    return false;
  }else return true;
}

function timestampToDatetime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString();
}
</script>

<template>
<div id="header" :class="OpenHeader? '':'-translate-y-full'" class="w-full max-w-[1000px] left-1/2 -translate-x-1/2 h-auto fixed z-10 top-0 transition-all duration-700 ease-in-out ">
  <ad v-if="AdTrue()"></ad>
  <div v-if="($store.state.AccountStatus)" class="w-full border-t bg-black flex justify-center px-10 py-1.5 text-xs text-gray-400">
    <div class="w-full flex justify-between  overflow-hidden">
      <div class="gap-2">
        <span class="mr-10">Login IP: {{(($store.state.AccountData)["last_login_ip"])}}</span>
        <span class="mr-10">Login Location: {{(($store.state.AccountData)["last_login_location"])}}</span>
        <span class="mr-10">Login Time: {{timestampToDatetime(($store.state.AccountData)["last_login_time"])}}</span>
      </div>
    </div>

    <RouterLink to="/logout" class="hover:text-white">Logout</RouterLink>

  </div>
  <header  class="z-10 w-full h-24 bg-white shadow-sm border-b px-10 flex justify-between items-center">
    <RouterLink to="/" class="flex gap-4 items-center cursor-pointer">
      <img src="../../assets/img/icon.png" class="w-11 h-11 rounded" />
      <div class="font-mono hidden sm:flex text-3xl">Unnamed-Proj.</div>
    </RouterLink>

    <div class="mr-1">
      <div v-if="!($store.state.AccountStatus)">
        <RouterLink to="/register" class=" transition-all duration-500
             focus-visible:text-white hover:text-white
            text-sm font-semibold shadow-sm px-5 py-2
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                    :class="`hover:bg-[#b9bcdf] focus-visible:bg-[#b9bcdf] border-[#b9bcdf] border text-[#b9bcdf] focus-visible:outline-[#b9bcdf]`">
          Sign UP
        </RouterLink>
        <RouterLink to="/portal" class=" transition-all duration-500
             focus-visible:text-white hover:text-white
            text-sm font-semibold shadow-sm p-2 border-l-0
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                    :class="`hover:bg-[#b9bcdf] focus-visible:bg-[#b9bcdf] border-[#b9bcdf] border text-[#b9bcdf] focus-visible:outline-[#b9bcdf]`">
          IN
        </RouterLink>
      </div>
      <div v-if="($store.state.AccountStatus)">
        <img :src="(($store.state.AccountData)['avatar']['middle'])" class="w-12 h-12 rounded border-2 border-gray-100 bg-white" />

      </div>
    </div>


  </header>

  <div @click="OpenHeader=!OpenHeader" class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-4 border border-t-0
          rounded-b-md flex justify-center items-center cursor-pointer  bg-blue-100 bg-opacity-90
          "><span :class="OpenHeader?'rotate-45':'rotate-[225deg]'" class="text-[#b9bcdf] transition-all duration-700 ease-in-out select-none">⇱</span> </div>
</div>
</template>

<style scoped>

</style>