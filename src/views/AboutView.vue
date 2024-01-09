<template>
  <n-space>
    <n-button>
      Wouldn't it be Nice
    </n-button>
    <n-button @click="addCount">
      Satisfaction {{count}}
    </n-button>
  </n-space>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {useNotification} from "naive-ui";
// const notification = useNotification()

const count = ref(0);
const addCount = () => {count.value += 1}

//
// const handleClick1 = () => {
//   notification.create({
//     title: "Wouldn't it be Nice",
//     description: 'From the Beach Boys',
//     content: `Wouldn't it be nice if we were older
// Then we wouldn't have to wait so long
// And wouldn't it be nice to live together
// In the kind of world where we belong
// You know its gonna make it that much better
// When we can say goodnight and stay together
// Wouldn't it be nice if we could wake up
// In the morning when the day is new
// And after having spent the day together
// Hold each other close the whole night through`,
//     meta: '2019-5-27 15:11',
//     avatar: () =>
//         h(NAvatar, {
//           size: 'small',
//           round: true,
//           src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
//         }),
//     onAfterLeave: () => {
//       message.success("Wouldn't it be Nice")
//     }
//   })
// }
</script>