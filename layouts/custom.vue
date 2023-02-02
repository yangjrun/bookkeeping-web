<template>
  <div>
    <slot />
  </div>
</template>
  
  <script lang="ts" setup>
import { useUserStore } from "~/stores/user.store";

const router = useRouter();
const navList = ref();

const userStore = useUserStore();
if (!userStore.isLogin) {
  router.push("/login/login");
}

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
  