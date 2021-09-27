<script lang="ts" setup>
import { useRouter } from "vue-router";
import { architectSDK } from "../architectSDKConfig";

const router = useRouter();

const logout = async () => {
  await architectSDK.logout();
  router.push("/");
};
</script>
<template>
  <div class="header">
    <button @click="logout" class="btn btn-purple">Logout</button>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
