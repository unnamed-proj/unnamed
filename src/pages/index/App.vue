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
</style>

<template>
  <unnamed-proj ref="MainElement">
    <div class=" max-w-screen-xl sm:mx-auto">
      <transition name="slide-fade">
        <router-view />
      </transition>
    <Bottom v-if="BottomOpen" />
    </div>
  </unnamed-proj>
</template>

<script setup lang="ts">
import Bottom from "../../components/Page/Bottom.vue";
import { onMounted, Ref, ref } from "vue";

const MainElement: Ref<HTMLElement | null> = ref(null);
const BottomOpen = ref(false);

onMounted(() => {
  const container = MainElement.value;

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
  container?.addEventListener('scroll', FunctionEle2);
});
</script>
