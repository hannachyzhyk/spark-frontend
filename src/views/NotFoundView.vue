<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-6xl font-bold text-surface-700">404</h1>
    <h3 class="text-surface-500 text-3xl">Well, that was unexpected 😖</h3>
    <br />
    <Button label="Go back home" @click="$router.push('/')" />
  </div>
</template>
