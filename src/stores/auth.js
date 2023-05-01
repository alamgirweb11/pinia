import { defineStore } from 'pinia'

export const useAuthUser = defineStore('authUser', {
  state: () => ({
    isAuthenticate: false,
    user: {}
  }),
  getters: {
    fullName: (state) => `${state.user.first_name} ${state.user.last_name}`
  },
  actions: {
    logout () {
      this.isAuthenticate = false
    },

    async login () {
      const res = await fetch('https://reqres.in/api/users/2')
      const { data } = await res.json()
      this.user = data
      this.isAuthenticate = true
    }
  }
})
