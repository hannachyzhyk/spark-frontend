import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentUserStore = defineStore('currentUser', () => {
  const isAuthenticated = computed(() => true)

  return { isAuthenticated }
})
