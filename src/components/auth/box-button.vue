<script setup lang="ts">

const props = defineProps(["method","class"])
const Class = () => {
  if (props.method) return `focus-visible:text-white hover:text-white hover:bg-[#b9bcdf] focus-visible:bg-[#b9bcdf] border-[#b9bcdf] border text-[#b9bcdf] active:bg-purple-400 focus-visible:outline-[#b9bcdf]`;
  else return `border-stone-400 border text-stone-400 focus-visible:outline-stone-400`
}

</script>

<template>
  <button  class="transition-all duration-500
      text-sm font-light shadow-sm h-12 tracking-widest
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
           :class="`${Class()} ${props.class}`">
    <slot/>
  </button>
</template>

<style scoped>

</style>