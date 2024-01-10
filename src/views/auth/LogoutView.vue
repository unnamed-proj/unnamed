<script setup lang="ts">
import Center from "../../components/Center.vue";
import {useRouter} from "vue-router";
import axios from "axios";
localStorage.removeItem("token")
deleteCookie('token');

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

import { useStore } from 'vuex';
const store = useStore();
function deleteCookie(name: String) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
const router = useRouter();
axios.get("/alpha/api/user?include=is_followed",{
  headers: {
    Cookie: `token=${localStorage.getItem("token")}`
  }
}).then(response=>{
  const ApiData = response.data;
  if (ApiData["code"]==201001) {
    store.commit("setAccountStatus",false)
    store.commit("setAccountData",{})

      if (params.get('redirect_uri')) {
        location.replace(`${params.get('redirect_uri')}`);
      }else router.push("/");
  }
})

</script>

<template>
  <Center class="w-full h-screen">

    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <span class="rotate absolute text-[#b40202] text-7xl">☯</span>
  </Center>

</template>

<style scoped>
.loading,
.loading > div {
  position: relative;
  box-sizing: border-box;
}

.loading {
  display: block;
  font-size: 0;
  color: #000;
}

.loading.la-dark {
  color: #333;
}

.loading > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.loading {
  width: 128px;
  height: 128px;
}

.loading > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 128px;
  height: 128px;
  background: transparent;
  border-width: 2px;
  border-radius: 100%;
  opacity: 0;
  animation: ball-scale-ripple-multiple 1.25s 0s infinite
  cubic-bezier(0.21, 0.53, 0.56, 0.8);
}

.loading > div:nth-child(1) {
  animation-delay: 0s;
}

.loading > div:nth-child(2) {
  animation-delay: 0.25s;
}

.loading > div:nth-child(3) {
  animation-delay: 0.5s;
}

.loading.la-sm {
  width: 64px;
  height: 64px;
}

.loading.la-sm > div {
  width: 64px;
  height: 64px;
  border-width: 1px;
}

.loading.la-2x {
  width: 256px;
  height: 256px;
}

.loading.la-2x > div {
  width: 256px;
  height: 256px;
  border-width: 4px;
}

.loading.la-3x {
  width: 256px;
  height: 256px;
}

.loading.la-3x > div {
  width: 384px;
  height: 384px;
  border-width: 6px;
}

@keyframes ball-scale-ripple-multiple {
  0% {
    opacity: 1;
    transform: scale(0.1);
  }

  70% {
    opacity: 0.5;
    transform: scale(1);
  }

  95% {
    opacity: 0;
  }
}
</style>