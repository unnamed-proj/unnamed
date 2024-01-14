<script setup lang="ts">

import Center from "../../components/Center.vue";
import BoxInput from "../../components/auth/box-input.vue";
import BoxButton from "../../components/auth/box-button.vue";
import {ref} from "vue";
import {msgApi} from '../../components/api/msg-api.ts';



const CaptchaToken = ref();
const CaptchaImage = ref();
const CaptchaMethod = ref("none");
const Captcha = ref();
const CaptchaCheck = (value: String) => {
  Captcha.value = value;
  if (value) {
    CaptchaMethod.value = "true";
  }else CaptchaMethod.value = "false";

}


const Title = ref();
const TitleMethod = ref("none");
const TitleMCheck = (value: String) => {
  Title.value = value;
  if (value) {
    TitleMethod.value = "true";
  }else TitleMethod.value = "false";

}

const Content = ref();
const ContentMethod = ref("none");
import axios from "axios";
import BoxTextarea from "../../components/auth/box-textarea.vue";

const ContentCheck = (value: String) => {
  Content.value = value;
  if (value) {
    ContentMethod.value = "true";
  }else ContentMethod.value = "false";

}
const SubmitClass = () => {
  if (TitleMethod.value=="true" && ContentMethod.value=="true") return true;
  else return false;
}
function Submit() {
  if (TitleMethod.value=="true" && ContentMethod.value=="true") {
    axios.post("https://api.mio.am/project/unnamed/support",{
      title: Title.value,
      content: Content.value,
    },{
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(response => {
      const ApiData = response.data;

      if (ApiData["code"]==1) {

        msgApi("linMsgList","success",ApiData["msg"],5000);

      }else {
        msgApi("linMsgList","warn",ApiData["msg"],3000);
      }
    })

  }
}
</script>

<template>
  <Center class="w-full h-screen px-4 flex-col gap-5">
    <div class="text-3xl mb-4 uppercase font-mono">Unnamed-Proj. Support</div>

    <box-input :on-input="TitleMCheck" label="Title" placeholder="E.g. There is a bug in this website" type="text" :icon="true" :method="TitleMethod" />
    <box-textarea :on-input="ContentCheck" label="Content" placeholder="Content" :method="ContentMethod" />

    <div v-if="CaptchaToken" class="flex items-end gap-3 w-full max-w-[25rem]">
      <div class="flex-grow w-auto">
        <box-input :on-input="CaptchaCheck" label="Captcha" placeholder="Captcha" type="text" :icon="true" :method="CaptchaMethod" />
      </div>
      <img :src="CaptchaImage" alt="Captcha Image" class="h-12 w-auto">
    </div>



    <box-button @click="Submit" :method="SubmitClass()" class="mt-8 w-full max-w-[25rem] uppercase">Submit</box-button>

  </Center>
</template>