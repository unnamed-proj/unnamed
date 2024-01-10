<template>
  <div></div>
</template>

<script>
import { defineComponent, getCurrentInstance } from "vue";
import { useNotification } from "naive-ui";

export default defineComponent({
  setup() {
    window.$notification = useNotification();
  },
});
</script>