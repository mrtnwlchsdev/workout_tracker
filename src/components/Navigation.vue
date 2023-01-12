<template>
    <header class="bg-at-light-green text-white">
        <nav class="container py-5 px-4 mx-auto flex flex-col gap-4 items-center sm:flex-row">
            <section class="flex items-center gap-x-4">
                <img
                    src="../assets/images/dumbbell-light.png"
                    alt="Logo"
                    class="w-14">
                <h1 class="text-lg">Active Tracker</h1>
            </section>
            <ul class="flex flex-1 justify-end gap-x-10">
                <RouterLink class="cursor-pointer" :to="{name: 'home'}">Home</RouterLink>
                <RouterLink
                    v-if="userInfo.user"
                    class="cursor-pointer"
                    :to="{name: ''}"
                >
                    Create
                </RouterLink>
                <RouterLink
                    v-if="!userInfo.user"
                    class="cursor-pointer"
                    :to="{name: 'login'}"
                >
                    Login
                </RouterLink>
                <li
                    v-if="userInfo.user"
                    class="cursor-pointer"
                    @click="logout"
                >
                    Logout
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { useUserInfo } from '../stores/user'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase/init'
// import { ref } from 'vue'

export default {
    setup(props) {
        const router = useRouter()
        const userInfo = useUserInfo()

        const logout = async () => {
            await supabase.auth.signOut()
            router.push({name: 'home'})
        }

        return {
            logout,
            userInfo
        }
    }
}
</script>