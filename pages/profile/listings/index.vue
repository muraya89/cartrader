<script setup>
definePageMeta({
    layout: 'custom',
    middlewares: ['auth']
})
const { listings } = useCars()
</script>

<template>
<div>
    <div class="flex justify-between mt-24 items-center">
        <h1 class="text-6xl">My Listings</h1>
        <NuxtLink to="/profile/listings/create" class="bg-blue-400 flex justify-center items-center rounded-full text-white font-bold cursor-pointer w-9 h-9 ">+</NuxtLink>
    </div>
    <div class="shadow rounded mt-5 p-5">
        <CarListingCard v-for="listing in listings" :key="listing" :listing="listing" />
    </div>
</div>
</template>