<script lang="ts" setup>
import Center from "../components/Center.vue";
import {useRouter} from "vue-router";

const router = useRouter();

</script>

<template>
  <Center class="w-full h-screen flex-col gap-2">

    <div class="flex flex-col justify-center items-center leading-3 font-medium">
      <div>く__,.ヘヽ.　　　　/　,ー､ 〉</div>
      <div>＼ ', !-─‐-i　/　/´</div>
      <div>／｀ｰ'　　　 L/／｀ヽ､</div>
      <div>/　 ／,　 /|　 ,　 ,　　　 ',</div>
      <div>ｲ 　/ /-‐/　ｉ　L_ ﾊ ヽ!　 i</div>
      <div>ﾚ ﾍ 7ｲ｀ﾄ　 ﾚ'ｧ-ﾄ､!ハ|　 |</div>
      <div>!,/7 '0'　　 ´0iソ| 　      |</div>
      <div>|.从"　　_　　 ,,,, / |./ 　 |</div>
      <div> ﾚ'| i＞.､,,__　_,.イ / 　.i 　|</div>
      <div>ﾚ'| | / k_７_/ﾚ'ヽ,　ﾊ.　|</div>
      <div>| |/i 〈|/　 i　,.ﾍ |　i　|</div>
      <div>.|/ /　ｉ： 　 ﾍ!　　＼　|</div>
      <div>kヽ>､ﾊ 　 _,.ﾍ､ 　 /､!</div>
      <div>!'〈//｀Ｔ´', ＼ ｀'7'ｰr'</div>
      <div>ﾚ'ヽL__|___i,___,ンﾚ|ノ</div>
      <div>ﾄ-,/　|___./</div>
      <div>'ｰ'　　!_,.:</div>
    </div>
    <div class="text-4xl font-mono mt-2">404 NotFound</div>
    <div class="text-sm font-[v-sans] font-light mt-1">奇怪？书去哪了？</div>

      <div class="mt-5 flex gap-3">
        <n-popover placement="top" trigger="hover">
          <template #trigger>
            <n-button @click="router.push('/')" type="error" ghost>返回首页</n-button>
          </template>
          <span>或许你可以直接返回上级</span>
        </n-popover>
        <n-popover placement="top" trigger="hover">
          <template #trigger>
            <n-button @click="router.back()" type="error" ghost>返回上级</n-button>
          </template>
          <span>或许你可以直接返回首页</span>
        </n-popover>
      </div>
  </Center>
</template>

<style scoped>

</style>