<script setup lang="ts">
import Center from "../../components/Center.vue";
import {useRouter} from "vue-router";
import {msgApi} from '../../components/api/msg-api.ts';
import BoxInput from "../../components/auth/box-input.vue";
import {ref} from "vue";
import BoxButton from "../../components/auth/box-button.vue";
import axios from "axios";
const router = useRouter();

const queryString = window.location.search;
const params = new URLSearchParams(queryString);


if (!localStorage.getItem("-reg-first")) {
  router.replace("/join/start")
}

const EmailMethod = ref("none");
const EmailCheck = (value: String) => {
  Email.value = value;
  const EmailRE = "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+";
  switch (value.search(EmailRE)) {
    case 0: EmailMethod.value = "true"; break;
    default:case -1: EmailMethod.value = "false"; break;
  }

}

const CodeMethod = ref("none");
const CodeCheck = (value: String) => {
  Code.value = value;
  if (value.length == 6) {
    CodeMethod.value = "true";
  }else CodeMethod.value = "false";

}

const CaptchaToken = ref();
const CaptchaImage = ref();
const CaptchaMethod = ref("none");
const CaptchaCheck = (value: String) => {
  Captcha.value = value;
  if (value) {
    CaptchaMethod.value = "true";
  }else CaptchaMethod.value = "false";

}

const SendCodeClass = () => {
  if (CaptchaToken.value) {
    if (EmailMethod.value=="true" && CaptchaMethod.value=="true") return true;
    else return false;
  }else {
    if (EmailMethod.value=="true") return true;
    else return false;
  }
}
const SubmitClass = () => {
  if (EmailMethod.value=="true" && CodeMethod.value=="true" && USERNAMEMethod.value=="true" && PASSWORDMethod.value=="true") return true;
  else return false;
}

function SendCode() {
  if (CaptchaToken.value) {
    if (!(EmailMethod.value=="true" && CaptchaMethod.value=="true")) {
      return
    }
  }
  if (EmailMethod.value=="true") {

    axios.post(
        "/alpha/api/user/register/email",{
          email: Email.value,
          captcha_token: CaptchaToken.value,
          captcha_code: Captcha.value
        }
    ).then(response => {
      const ApiData = response.data;
      if (ApiData["code"]==0) {
        msgApi("linMsgList","success","Created email successfully.",3000);
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
const Email = ref();
const Code = ref();
const Captcha = ref();


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
import CryptoJS from "crypto-js";
const PASSWORDCheck = (value: String) => {
  PASSWORD.value = CryptoJS.SHA1(value.toString()).toString();
  if (value) {
    PASSWORDMethod.value = "true";
  }else PASSWORDMethod.value = "false";

}

function Submit() {
  if (SubmitClass()) {
    axios.post("/alpha/api/users?include=is_followed,is_me",{
      "email": Email.value,
      "email_code": Code.value,
      "username": USERNAME.value,
      "password": PASSWORD.value
    }).then(response=>{
      const ApiData = response.data;
      if (ApiData["code"]==0) {
        msgApi("linMsgList","success","Created account successfully.",3000);
        router.push(`/portal?redirect_uri=${params.get('redirect_uri')}`)
      }else {

        msgApi("linMsgList","warn",JSON.stringify(ApiData["errors"]),3000);
      }
    })
  }
}
</script>

<template>
<Center class="w-full h-screen px-4 flex-col gap-5">
  <div class="text-3xl mb-4 uppercase font-mono">Sign up in Unnamed-Proj.</div>


  <box-input :on-input="EmailCheck" label="Email Address" placeholder="example@unnamed.org.cn" type="text" :icon="true" :method="EmailMethod" />
  <div v-if="CaptchaToken" class="flex items-end gap-3 w-full max-w-[25rem]">
    <div class="flex-grow w-auto">
      <box-input :on-input="CaptchaCheck" label="Captcha" placeholder="Captcha" type="text" :icon="true" :method="CaptchaMethod" />
    </div>
    <img :src="CaptchaImage" alt="Captcha Image" class="h-12 w-auto">
  </div>
  <div class="flex items-end gap-3 w-full max-w-[25rem]">
    <div class="flex-grow w-auto">
      <box-input :on-input="CodeCheck" maxlength="6" label="Code" placeholder="Code" type="text" :icon="true" :method="CodeMethod" />
    </div>
    <box-button @click="SendCode" :method="SendCodeClass()" class="w-28">Send Code</box-button>
  </div>

  <box-input v-if="(CodeMethod=='true'&&EmailMethod=='true')" maxlength="20" :on-input="USERNAMEMCheck" label="Username" placeholder="Username" type="text" :icon="true" :method="USERNAMEMethod" />
  <box-input v-if="(CodeMethod=='true'&&EmailMethod=='true')" :on-input="PASSWORDCheck" label="Password" placeholder="Password" type="password" :icon="true" :method="PASSWORDMethod" />




  <box-button @click="Submit" :method="SubmitClass()" class="mt-8 w-full max-w-[25rem] uppercase">Submit</box-button>

</Center>
</template>