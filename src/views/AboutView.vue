<template>
  <Center class="w-full h-screen">
    <n-space>
      <n-button @click='msgApi("linMsgList","msg","这是一条信息")'>
        信息
      </n-button>
      <n-button @click='msgApi("linMsgList","success","你好")'>
        成功
      </n-button>
      <n-button @click='msgApi("linMsgList","warn","你好")'>
        警告
      </n-button>
      <n-button @click='msgApi("linMsgList","error","你好aaaaaaaawdawd a子啊汉武帝阿红i代啊伟大伟大殴斗阿黄我丢哈iu我电话哎u我和丢 我iu的海湾的还u文化的iu阿瓦达胡啊我丢哎u味道还u文化的iu啊我会丢啊呜的还u我的iu阿黄我i待定还u我电话iuah丢啊和我ua丢货号为海盗活动i爱护我还啊我i哦")'>
        错误
      </n-button>
    </n-space>
  </Center>


</template>
<script setup lang="ts">
import Center from "../components/Center.vue";
import {msgApi} from '../components/api/msg-api.ts';

</script>