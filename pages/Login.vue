<script setup>
definePageMeta({
    layout: 'custom'
})
const supabase = useSupabaseAuthClient()
const login = () => {
    const {error} = supabase.auth.signInWithOAuth({
        provider: 'google'
    })
    if(error){
        console.log(error)
    }
}
</script>

<template>
<div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">
        Log in
    </h1>
    <button class="bg-red-400 p-3 rounded text-white font-bold" @click="login">Login with google</button>
</div>
</template>