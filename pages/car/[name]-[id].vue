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
if(!car.value){
    throw createError({
        statusCode: 404,
        message: `Car with id ${route.params.id} does not exist`
    })
}
useHead({
    title: toTitleCase(route.params.name)
})
</script>
<template>
    <div v-if="car">
        <CarDetailHero :car="car"/>
        <CarDetailAttributes :features="car.features"/>
        <CarDetailDescription :description="car.description"/>
        <CarDetailContact />
    </div>
</template>