<script setup lang="ts">
// const props = defineProps(['color'])
</script>

<template>
  <button  class=" transition-all duration-500
   focus-visible:text-white hover:text-white
  text-sm font-semibold shadow-sm px-4 py-1.5
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
  :class="`hover:bg-[#b9bcdf] focus-visible:bg-[#b9bcdf] border-[#b9bcdf] border text-[#b9bcdf] focus-visible:outline-[#b9bcdf]`">
    <slot />
  </button>
</template>

<style scoped>

</style>