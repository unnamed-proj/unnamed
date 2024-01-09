<template>

  <unnamed-proj ref="MainElement">
    <div class="shadow-2xl shadow-[#b40202] max-w-screen-xl sm:mx-auto">
      <router-view />

    </div>
    <Bottom v-if="BottomOpen"/>
  </unnamed-proj>

</template>


<script setup lang="ts">
import Bottom from "../../components/Page/Bottom.vue";
import {onMounted, ref} from "vue";


const MainElement = ref(null);
const BottomOpen = ref(false);


onMounted(() => {
  const container = MainElement.value;

  const FunctionEle = (event) => {
    const scrollHeight = container.scrollHeight;
    const scrollTop = container.scrollTop;
    const clientHeight = container.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      // 在这里执行你的逻辑
      if (event.deltaY > 0) {
        BottomOpen.value = true;
      }


    }else if (scrollTop + clientHeight <= scrollHeight -  document.getElementById("footer")?.scrollHeight) {
      if (event.deltaY < 0) {
        BottomOpen.value = false;
      }
    }
  }

  const FunctionEle2 = () => {
    const scrollHeight = container.scrollHeight;
    const scrollTop = container.scrollTop;
    const clientHeight = container.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      // 在这里执行你的逻辑
      BottomOpen.value = true;
      console.log("aaaa")

    }else if (scrollTop + clientHeight <= scrollHeight -  document.getElementById("footer")?.scrollHeight) {
      BottomOpen.value = false;
    }
  }

  container.addEventListener('wheel', FunctionEle);
  container.addEventListener('scroll', FunctionEle2);
});
</script>