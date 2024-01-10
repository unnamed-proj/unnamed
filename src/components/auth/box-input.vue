<script setup lang="ts">

import {ref} from "vue";

const props = defineProps(['label','placeholder','type','method','onInput','icon','maxlength','class']);


const InputClass = () => {
  if (props.method=="none") return "border-stone-400 focus:border-[#b9bcdf]";
  else if (props.method=="true") return "pr-11 border-[#b9bcdf]";
  else if (props.method=="false") return "pr-11 border-red-500";
}
const TrueClass = () => {
  if (props.method=="none") return "hidden";
  else if (props.method=="true") return "text-[#b9bcdf]";
  else if (props.method=="false") return "text-red-500";
}
const True = () => {
  if (props.method=="none") return "";
  else if (props.method=="true" && props.icon) return "◯";
  else if (props.method=="false" && props.icon) return "⨉";
}

const Model = ref();
</script>

<template>
  <div class="relative flex flex-col items-start justify-between  w-full max-w-[25rem]  ">
    <label class="text-[#797b92] font-mono uppercase mb-0.5">{{props.label}}</label>
    <input v-model="Model" @input="onInput(Model)" class="w-full h-12 bg-opacity-10 bg-white border
          outline-0 px-3  text-gray-500 leading-3 tracking-wider
          transition-all duration-300
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b9bcdf]"
           :class="`${InputClass()} ${props.class}`"
           :placeholder="props.placeholder" :type="props.type" :maxlength="props.maxlength">
    <label :class="TrueClass()"
        class="absolute bottom-2.5 text-xl right-4">{{True()}}</label>
  </div>
</template>

<style scoped>

</style>