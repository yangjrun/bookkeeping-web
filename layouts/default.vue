<template>
  <div class="w-screen h-screen flex bg-gray-100">
    <div class="flex-none w-64 h-full bg-blue-50">
      <div class="flex flex-col items-center justify-center mt-6">
        <img class="rounded-full h-24 w-24" src="image/avatar.png" />
        <span class="mt-4">用户名称</span>
      </div>
      <div class="flex flex-col items-center mt-4">
        <nuxt-link
          v-for="nav in navList"
          :key="nav.name"
          :to="nav.to"
          class="
            hover:text-blue-500
            h-6
            w-full
            flex
            items-center
            justify-start
            p-4
            ml-24
          "
          active-class="text-blue-500"
          exact
        >
          <span class="text-sm">{{ nav.name }}</span>
        </nuxt-link>
      </div>
    </div>
    <div class="flex-grow flex flex-col">
      <div
        class="w-full h-10 bg-white rounded-br-sm rounded-bl-sm ring ring-white"
      >
        1111
      </div>
      <div
        class="w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-lg m-4 bg-white"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const navList = ref();

const routerList = router
  .getRoutes()
  .map((item) => ({ to: item.path, name: item.meta.title ?? item.name }))
  .reverse();
navList.value = routerList;
</script>

<script lang="ts">
export default { name: "Default" };
</script>

<style scoped>
</style>
