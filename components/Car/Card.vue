<script setup>
const props = defineProps({
    car: Object
})
</script>

<template>
    <div class="shadow border w-ful overflow-hidden mb-5 cursor-pointer h-[200px]" @click="navigateTo(`/car/${car.name}-${car.id}`)">
        <div class="flex h-full">
        <img :src="car.url">
        <div class="p-4 flex flex-col">
            <div>
            <h1 class="text-blue-700 text-2xl">{{car.name}}</h1>
            <p class="text-gray-800">{{car.description}}</p>
            </div>
            <h1 class="mt-auto text-xl">{{ car.price }}</h1>
        </div>
        </div>
    </div>
</template>