<script setup lang="ts">

import {Ref, ref} from "vue";

const ad: Ref<HTMLElement | null> = ref(null);
const CloseAD = () => {
  // ad.value?.classList.toggle("-translate-y-14");
  ad.value?.classList.toggle("opacity-0");
  setTimeout(()=>{
    ad.value?.remove();
  },800)
}
</script>

<template>
  <div ref="ad" class="relative w-full isolate flex items-center bg-[#e9e8f3] gap-x-6 transition-all duration-1000 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
    <div class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
      <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#e9e8f3] to-[#e4b5d9] " style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"></div>
    </div>
    <div class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
      <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#e9e8f3] to-[#e4b5d9] " style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"></div>
    </div>
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p class="text-sm leading-6 text-gray-900">
        <strong class="font-semibold">Unnamed Proj. 2024</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Join us in Denver from June 7 – 9 to see what’s coming next.
      </p>
      <RouterLink to="/register" class="flex-none transition-all duration-500 hover:bg-gray-900 focus-visible:bg-gray-900 focus-visible:text-white hover:text-white border-gray-900 border text-gray-900 px-3.5 py-1 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register now <span aria-hidden="true">&rarr;</span></RouterLink>
    </div>
    <div class="flex flex-1 justify-end">
      <button @click="CloseAD" type="button" class="-m-3 p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-900 focus-visible:outline-offset-[-10px]">
        <span class="sr-only">Dismiss</span>
        <svg class="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>