<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
 const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
  navigateTo("/")
  // try {
  //   await $fetch('/api/_supabase/session', {
  //     method: 'POST',
  //     body: { session: null, event: 'SIGNED_OUT'}
  //   })
  // }catch (error){
  //   return console.log(error)
  // }
  // user.value = null
  // navigateTo('/')
 }
</script>

<template>
    <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 bg-white border-b p-4 shadow-md">
      <NuxtLink to="/" class="ext-3xl font-mono">cartrader</NuxtLink>
      <div v-if="user" class="flex">
        <NuxtLink to="/profile/listings" class="mr-5">profile</NuxtLink>
        <p class="cursor-pointer" @click="logout">Logout</p>
      </div>
      <NuxtLink v-else to="/login">Login</NuxtLink>
    </header>
</template>