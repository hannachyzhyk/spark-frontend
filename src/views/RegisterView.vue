<template>
  <div class="absolute w-full h-screen bg-primary-400 -z-1"></div>
  <div class="flex flex-col items-center justify-center w-full h-screen">
    <Card class="bg-primary-200">
      <template #title>Register</template>
      <template #content>
        <IftaLabel>
          <InputText fluid id="username" v-model="username" />
          <label for="username">User</label>
        </IftaLabel>
        <IftaLabel class="mt-2">
          <Password fluid v-model="password" inputId="password" :feedback="true" toggleMask />
          <label for="password">Password</label>
        </IftaLabel>
        <IftaLabel class="mt-2">
          <Password fluid v-model="confirmPassword" inputId="confirm-password" :feedback="false" />
          <label for="confirm-password">Confirm password</label>
        </IftaLabel>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Continue" class="w-full" @click="register()" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AuthService from '../services/authService';
import { useCurrentUserStore } from "../stores/currentUser";
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const userStore = useCurrentUserStore();
const password = ref(null);
const confirmPassword = ref(null);
const username = ref(null);

onMounted(async () => {
})

let register = async () => {



  AuthService.register(username.value, password.value).then(() => {
    userStore.isAuthenticated = true;
    router.push('/tasks')
  }).catch((error) => {
    console.error(error);
  });
}
</script>
