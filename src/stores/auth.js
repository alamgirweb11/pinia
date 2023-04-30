import { defineStore } from 'pinia'

export const useAuthUser = defineStore('authUser', {
  state: () => ({
    isAuthenticate: true,
    user: {
      name: 'Abir Ahmed',
      email: 'abir@gmail.com'
    }
  }),
  actions: {
    logout () {
      this.isAuthenticate = false
    },

    login () {
      this.$reset()
    }
  }
})
