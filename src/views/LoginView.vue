<template>
    <section class="max-w-screen-sm mx-auto px-4 py-10">
        <!-- Error handling -->
        <article
            v-if="errorMessage"
            class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
                <p class="text-red-500 text-center">
                    {{ errorMessage }}
                </p>
        </article>

        <!-- Register from -->
        <form
            class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg"
            autocomplete="off"
            @submit.prevent="login"
        >
            <header>
                <h1 class="text-3xl text-at-light-green text-center mb-4">
                    Login
                </h1>
            </header>
            <section class="flex flex-col mb-2">
                <label for="email" class="mb-1 text-sm text-at-light-green">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    class="p-2 text-gray-500 focus:outline-none"
                    v-model="email"
                    required
                >
            </section>
            <section class="flex flex-col mb-2">
                <label for="password" class="mb-1 text-sm text-at-light-green">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    class="p-2 text-gray-500 focus:outline-none"
                    v-model="password"
                    required
                >
            </section>
            <button
                type="submit"
                class="mt-6 py-2 px-6 rounded-md text-sm text-white bg-at-light-green w-full duration-200 border-solid border-2 border-transparent hover:bg-white hover:text-at-light-green hover:border-at-light-green"
            >
                Login
            </button>
        </form>
        <section class="mt-6 text-center text-sm">
            <span>
                Don't have an account? <router-link :to="{name: 'register'}" class="text-at-light-green">Register</router-link>
            </span>
        </section>
    </section>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../supabase/init'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const email = ref(null)
        const password = ref(null)
        const errorMessage = ref(null)

        const login = async () => {
            try {
                const { error } = await supabase.auth.signInWithPassword({
                    email: email.value,
                    password: password.value
                })
                if (error) throw error
                router.push({name: 'home'})
            } catch (error) {
                errorMessage.value = error.message
                setTimeout(() => {
                    errorMessage.value = null
                }, 5000)
            }
        }

        return {
            email,
            password,
            errorMessage,
            login
        }
    }
}
</script>