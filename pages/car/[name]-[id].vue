<script setup>
const route = useRoute()
const { cars } = useCars()
const { toTitleCase } = useUtilities()
definePageMeta({
    layout: "custom"
})
const car = computed(() => {
    return cars.find((c) => c.id === parseInt(route.params.id))
})
useHead({
    title: toTitleCase(route.params.name)
})
</script>
<template>
    <div v-if="car">
        <CarDetailHero />
        <CarDetailAttributes />
        <CarDetailDescription />
        <CarDetailContact />
    </div>
</template>