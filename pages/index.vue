<template>
  <div >
    123
  </div>
</template>

<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'

definePageMeta({
  title: '首页',
})

const onShowEnv = () => {
  const config = useRuntimeConfig()
  Message.info(JSON.stringify(config.public))
}
</script>

<script lang="ts">
export default { name: 'Index' }
</script>

<style scoped>

</style>
