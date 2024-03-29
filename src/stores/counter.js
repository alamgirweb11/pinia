import { defineStore } from 'pinia'
import { useAuthUser } from './auth'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 10
  }),
  getters: {
    countDigitLength: (state) => state.count.toString().length
  },
  actions: {
    increment () {
      if (!this.isAuthenticated()) return
      this.count++
    },
    decrement () {
      if (!this.isAuthenticated()) return
      this.count--
    },
    isAuthenticated () {
      const authStore = useAuthUser()
      return authStore.isAuthenticate
    }
  }
})
