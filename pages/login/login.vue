<template>
  <div
    class="
      w-screen
      h-screen
      flex
      bg-gray-100 bg-cover
      justify-center
      items-center
    "
    style="
      background-image: url(https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg);
    "
  >
    <div
      class="w-96 h-44 bg-white rounded-lg p-6 login-box"
      @submit="handleSubmit"
    >
      <a-input-number v-model="count" :min="1" :max="10000" />
      <a-form :model="form">
        <a-form-item
          field="userName"
          tooltip="请输入用户名称"
          label="账号"
          allow-clear
          :validate-trigger="['change', 'input']"
          :rules="[{ required: true, message: '请输入用户名称' }]"
          @input="handleBlur"
        >
          <a-input v-model="form.userName" placeholder="请输入用户名称" />
        </a-form-item>
        <a-form-item
          field="password"
          tooltip="请输入密码"
          label="密码"
          :validate-trigger="['change', 'input']"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input-password v-model="form.password" placeholder="请输入密码">
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { Input } from "@arco-design/web-vue";

const count = 0;

const form = {
  userName: "",
  password: "",
};

const rules = {
  userName: [{ required: true, message: "请输入用户名称" }],
  password: [{ required: true, message: "请输入密码" }],
};

const handleSubmit = () => {};
const handleBlur = () => {
  console.log("input失去焦点");
};

definePageMeta({
  title: "登录",
});
</script>
  
<script lang="ts">
export default {
  name: "login",
};
</script>
  
<style scoped lang="scss">
.login-box {
  -webkit-box-shadow: 0 0 5px rgba(120, 128, 114, 1.5);
  -moz-box-shadow: 0 0 5px rgba(202, 203, 204, 0.5);
}
</style>
  