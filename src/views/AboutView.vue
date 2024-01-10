<template>
  <Center class="w-full h-screen">
    <p>Count: {{ $store.state.count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </Center>
</template>

<script lang="ts">
import Center from "../components/Center.vue";

export default {
  components: {Center},
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
  },
};
</script>