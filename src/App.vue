<template>
  <main>
    <Navigation />
  </main>
  <RouterView />
</template>

<script>
import { onMounted } from 'vue'
import { useUserInfo } from './stores/user'
import { RouterView } from 'vue-router'
import { supabase } from './supabase/init'
import Navigation from './components/Navigation.vue'

export default {
  components: {
      Navigation
  },

  setup(props) {
    const userInfo = useUserInfo()

    supabase.auth.onAuthStateChange((_, session) => {
      userInfo.setUser(session)
    })
  }
}
</script>

<style scoped>
</style>
