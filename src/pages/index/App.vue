<style>
@keyframes test {
  0% {
    transform: translateY(-5rem);
    opacity: 0;
  }
  20% {
    transform: translateY(-5rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0rem);
    opacity: 100;

  }
}
@keyframes test2 {
  from {
    transform: translateY(0rem);
    opacity: 100;
  }
  to {
    transform: translateY(5rem);
    opacity: 0;

  }
}
.slide-fade-enter-active {
  animation: test 1.5s;
}
.slide-fade-leave-active {
  animation: test2 1s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  animation: test2 1s;
}


@keyframes loading-out {
  0% {
    opacity: 100;
  }
  100% {
    opacity: 0;
  }
}
.loading-out { animation: loading-out 700ms ease-in }
</style>

<template>
  <div ref="loading" class="w-screen h-screen opacity-100 fixed z-20 bg-white flex justify-center items-center
  transition-all duration-700">
    <img src="../../assets/img/marisa_twirl.gif" alt="">
  </div>
  <unnamed-proj ref="MainElement">
    <Header />
    <transition name="slide-fade">
      <router-view />
    </transition>
    <Bottom v-if="BottomOpen" />


  </unnamed-proj>
  <div id="linMsgList" class="z-20 fixed top-10 right-2">

  </div>
</template>

<script setup lang="ts">
import Bottom from "../../components/Page/Footer.vue";
import { onMounted, Ref, ref } from "vue";
import Header from "../../components/Page/Header.vue";
import axios from "axios";

const loading: Ref<HTMLElement | null> = ref(null);

const MainElement: Ref<HTMLElement | null> = ref(null);
const BottomOpen = ref(false);

axios.get("https://alpha.unnamed.org.cn/api/user?include=is_followed",{
  headers: {
    Cookie: `token=${localStorage.getItem("token")}`
  }
}).then(response=>{
  console.log(response.data)
})

onMounted(() => {

  const container = MainElement.value;


  // const FunctionHeader = (event: WheelEvent) => {
  //   const scrollTop = container?.scrollTop;
  //
  //
  //   if (scrollTop == (document.getElementById("header")?.scrollHeight || 0)) {
  //       HeaderHover.value = true
  //   }else if (scrollTop == 0) {
  //       HeaderHover.value = false
  //   }
  // };

  loading.value?.classList.add("loading-out")
  setTimeout(()=>{loading.value?.remove()},700)



  const FunctionEle = (event: WheelEvent) => {
    const scrollHeight = container?.scrollHeight;
    const scrollTop = container?.scrollTop;
    const clientHeight = container?.clientHeight;

    if (scrollTop !== undefined && clientHeight !== undefined && scrollHeight !== undefined) {
      if (scrollTop + clientHeight >= scrollHeight) {
        if (event.deltaY > 0) {
          BottomOpen.value = true;
        }
      } else if (scrollTop + clientHeight <= scrollHeight -  (document.getElementById("footer")?.scrollHeight || 0)) {
        if (event.deltaY < 0) {
          BottomOpen.value = false;
        }
      }
    }
  };

  const FunctionEle2 = () => {
    const scrollHeight = container?.scrollHeight;
    const scrollTop = container?.scrollTop;
    const clientHeight = container?.clientHeight;

    if (scrollTop !== undefined && clientHeight !== undefined && scrollHeight !== undefined) {
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        BottomOpen.value = true;
      } else if (scrollTop + clientHeight <= scrollHeight - (document.getElementById("footer")?.scrollHeight || 0)) {
        BottomOpen.value = false;
      }
    }
  };

  container?.addEventListener('wheel', FunctionEle);
  // container?.addEventListener('scroll', FunctionHeader);
  container?.addEventListener('scroll', FunctionEle2);
});
</script>
