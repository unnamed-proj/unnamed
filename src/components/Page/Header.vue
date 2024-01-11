<script setup lang="ts">

import Ad from "./ad.vue";
import {ref} from "vue";
import { useStore } from 'vuex';
import CryptoJS from "crypto-js";
const store = useStore();
const OpenHeader = ref(true);

const AdTrue = () => {
  if (localStorage.getItem('-reg-first')){
    return false;
  }else return true;
}

function timestampToDatetime(timestamp: number) {
  const date = new Date(timestamp);
  return date.toLocaleString();
}
</script>

<template>
<div id="header" :class="OpenHeader? '':'-translate-y-full'" class="w-full max-w-[var(--index-width)] left-1/2 -translate-x-1/2 h-auto fixed z-10 top-0 transition-all duration-700 ease-in-out ">
  <ad v-if="AdTrue()"></ad>
  <div v-if="(store.state.AccountStatus)" class="w-full border-t bg-amber-50 flex justify-center px-10 py-1.5 text-xs text-stone-600">
    <div class="w-full flex justify-between  overflow-hidden">
      <div class="gap-2">
        <span class="mr-10">Login IP: {{((store.state.AccountData)["last_login_ip"])}}</span>
        <span class="mr-10">Login Location: {{((store.state.AccountData)["last_login_location"])}}</span>
        <span class="mr-10">Login Time: {{timestampToDatetime((store.state.AccountData)["last_login_time"])}}</span>
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
      <div v-if="!(store.state.AccountStatus)">
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
      <div v-if="(store.state.AccountStatus)" class="flex items-center justify-end gap-7">
        <RouterLink to="/logout" class="w-5 h-5 hover:text-[#b9bcdf] transition-all duration-200">
          <svg fill="currentColor" class="w-full h-full" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
          </svg>
        </RouterLink>

        <RouterLink to="/message" class="w-5 h-5 hover:text-[#b9bcdf] transition-all duration-200">
          <svg fill="currentColor" class="w-full h-full" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
          </svg>
        </RouterLink>

        <div class="w-12 h-12 rounded border-2 border-gray-100 bg-white relative overflow-hidden">
          <img :src="((store.state.AccountData)['avatar']['middle'])" class="w-full h-full absolute top-0 left-0" />
          <img :src="`https://cn.gravatar.com/avatar/${CryptoJS.MD5((store.state.AccountData)['email'].toString()).toString()}?s=200&d=blank&r=g`" class=" w-full h-full absolute top-0 left-0" />
        </div>


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