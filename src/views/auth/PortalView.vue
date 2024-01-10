<script setup lang="ts">

import Center from "../../components/Center.vue";
import BoxInput from "../../components/auth/box-input.vue";
import BoxButton from "../../components/auth/box-button.vue";
import {ref} from "vue";

import { useStore } from 'vuex';
const store = useStore();
const router = useRouter();

const queryString = window.location.search;
const params = new URLSearchParams(queryString);


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


const USERNAME = ref();
const USERNAMEMethod = ref("none");
const USERNAMEMCheck = (value: String) => {
  USERNAME.value = value;
  if (value) {
    USERNAMEMethod.value = "true";
  }else USERNAMEMethod.value = "false";

}

const PASSWORD = ref();
const PASSWORDMethod = ref("none");
import axios from "axios";
import {msgApi} from "../../components/api/msg-api.ts";
import {useRouter} from "vue-router";
// import sha1 from "js-sha1/build/sha1.min";
import CryptoJS from "crypto-js";

const PASSWORDCheck = (value: String) => {
  PASSWORD.value = CryptoJS.SHA1(value.toString()).toString();
  if (value) {
    PASSWORDMethod.value = "true";
  }else PASSWORDMethod.value = "false";

}
const SubmitClass = () => {
  if (USERNAMEMethod.value=="true" && PASSWORDMethod.value=="true") return true;
  else return false;
}
function Submit() {
  if (USERNAMEMethod.value=="true" && PASSWORDMethod.value=="true") {
    axios.post("/alpha/api/tokens",{
      name: USERNAME.value,
      password: PASSWORD.value,
      captcha_token: CaptchaToken.value,
      captcha_code: Captcha.value
    }).then(response => {
      const ApiData = response.data;
      if (ApiData["code"]==0) {

        document.cookie = `token=${ApiData["data"]["token"]}; domain=.unnamed.org.cn; path=/`;
        document.cookie = `token=${ApiData["data"]["token"]}; domain=localhost; path=/`;
        localStorage.setItem("token",ApiData["data"]["token"])
        axios.get("/alpha/api/user?include=is_followed",{
          headers: {
            Cookie: `token=${localStorage.getItem("token")}`
          }
        }).then(response=>{
          const ApiData = response.data;
          console.log(response.data)
          if (ApiData["code"]==0) {
            store.commit("setAccountStatus",true)
            store.commit("setAccountData",ApiData["data"])
          }
        })

        msgApi("linMsgList","success","Login successfully.",3000);
        localStorage.setItem("-reg-first","true")
        if (params.get('redirect_uri')) {
          router.push(`${params.get('redirect_uri')}`);
        }else router.push("/");

      }else {
        msgApi("linMsgList","warn",JSON.stringify(ApiData["errors"]),3000);

        if (ApiData["captcha_token"]) {
          CaptchaToken.value = ApiData["captcha_token"];
          CaptchaImage.value = ApiData["captcha_image"];
        }
      }
    })
  }
}
</script>

<template>
  <Center class="w-full h-screen px-4 flex-col gap-5">
    <div class="text-3xl mb-4 uppercase font-mono">Sign in to Unnamed-Proj.</div>

    <box-input :on-input="USERNAMEMCheck" label="Username or Email" placeholder="exp@unnamed.org.cn" type="text" :icon="true" :method="USERNAMEMethod" />
    <box-input :on-input="PASSWORDCheck" label="Password" placeholder="Password" type="password" :icon="true" :method="PASSWORDMethod" />

    <div v-if="CaptchaToken" class="flex items-end gap-3 w-full max-w-[25rem]">
      <div class="flex-grow w-auto">
        <box-input :on-input="CaptchaCheck" label="Captcha" placeholder="Captcha" type="text" :icon="true" :method="CaptchaMethod" />
      </div>
      <img :src="CaptchaImage" alt="Captcha Image" class="h-12 w-auto">
    </div>



    <box-button @click="Submit" :method="SubmitClass()" class="mt-8 w-full max-w-[25rem] uppercase">Submit</box-button>

  </Center>
</template>