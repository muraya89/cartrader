<script setup>
const { cars } = useCars()

const favorites = useLocalStorage('favorites', {})
const handleFavorite = (id) => {
    if (id in favorites.value) {
        delete favorites.value[id]
    }else{
        favorites.value = {
            ...favorites.value,
            [id]: true
        }
    }
}
</script>

<template>
    <div class="w-full">
        <CarCard v-for="car in cars" :key="car.id" :car="car" @favorite="handleFavorite" :favored="favorites[car.id]"/>
    </div>
</template>