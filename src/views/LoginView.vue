<template>
  <div class="absolute w-full h-screen bg-primary-400 -z-1"></div>
  <div class="flex flex-col items-center justify-center w-full h-screen">
    <Card class="bg-primary-200">
      <template #title>Welcome</template>
      <template #content>
        <IftaLabel >
          <InputText fluid id="username" v-model="username" />
          <label for="username">User</label>
        </IftaLabel>
        <br/>
        <IftaLabel>
          <Password fluid v-model="password" inputId="password" :feedback="false" />
          <label for="password">Password</label>
        </IftaLabel>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Login" class="w-full" @click="login"/>
        </div>
      </template>
    </Card>

    <br/>
    <span class="text-white">Don’t have an account? <a href="/register" target="_blank" rel="noopener" class="blue" >Sign up</a></span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AuthService from '../services/authService';
import {useCurrentUserStore} from "../stores/currentUser";
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const userStore = useCurrentUserStore();
const password = ref(null);
const username = ref(null);

onMounted(async () => {
})

let login = async () => {
  AuthService.login(username.value, password.value).then(()=> {
    userStore.isAuthenticated = true;
    router.push('/tasks')
  }).catch((error) => {
    console.error(error);
  });
}

</script>

<style scoped></style>
