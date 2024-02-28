<script setup>
import heartFilled from "@/assets/heartFilled.png"
import heartOutline from "@/assets/heartOutline.png"
const props = defineProps({
    car: Object
})
const favorited = useState(`favored-${props.car.id}`, () => {
    return false
})
</script>

<template>
    <div class="relative shadow border w-ful overflow-hidden mb-5 cursor-pointer h-[200px]">
        <img :src="favorited ?  heartFilled : heartOutline" @click="favorited = !favorited" alt="heartsfilled" class="absolute w-7 right-5 top-2 z-20">
        <div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
            <NuxtImg :src="car.url" />
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