import { defineStore } from 'pinia'

export const useAuthUser = defineStore('authUser', {
  state: () => ({
    isAuthenticate: false
  })
})
