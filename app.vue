<template>
  <NuxtLayout :name="layoutName">
    <NuxtLoadingIndicator />
    <NuxtPage :key="key" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import '@arco-design/web-vue/es/message/style/css.js'
import '@arco-design/web-vue/es/notification/style/css.js'
import '@arco-design/web-vue/es/input/style/css.js'
import { useUserStore } from "~/stores/user.store";

const { key } = useFixApp()
const userStore = useUserStore();
const layoutName = userStore.isLogin ? 'default' : 'custom'

useHead({
  meta: [
    { name: 'description', content: '我的神奇网站.我的神奇网站.我的神奇网站.我的神奇网站.我的神奇网站.我的神奇网站.' },
    { name: 'keywords', content: 'keywords.keywords.keywords.keywords.keywords.keywords.' },
  ],
})
</script>
