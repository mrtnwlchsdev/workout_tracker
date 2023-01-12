import { defineStore } from 'pinia'

export const useUserInfo = defineStore('userInfo', {
  state: () => ({
    user: null
  }),
  actions: {
    async setUser(payload) {
      this.user = payload ? payload.user : null
    }
  }
})