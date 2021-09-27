<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { architectSDK } from "../architectSDKConfig";

const router = useRouter();
const email = ref("");
const password = ref("");

const login = async () => {
  try {
    await architectSDK.login(
      { email: email.value, password: password.value },
      "email"
    );
    router.push("/contact-list");
  } catch (e) {
    console.log(e);
  }
};
console.log(architectSDK);
</script>

<template>
  <div class="form-wrapper">
    <form class="form" @submit.prevent="login">
      <h3>Sign in</h3>
      <div class="form-field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          autocomplete="email"
          v-model="email"
        />
      </div>
      <div class="form-field">
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          autocomplete="current-password"
          v-model="password"
        />
      </div>
      <button class="btn btn-purple">Login</button>
    </form>
  </div>
</template>

<style scoped>
.form-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 70vh;
  font-family: Arial, Helvetica, sans-serif;
}

.form {
  width: 50%;
  min-width: 400px;
  border: 1px solid rgb(216, 215, 215);
  border-radius: 5px;
  box-shadow: 0px 0px 0px 1px rgba(178, 204, 247, 0.5);
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 15px;
  align-items: center;
}
</style>
