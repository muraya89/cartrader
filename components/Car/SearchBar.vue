<script setup>
const searchValue = ref("")
const searchError = ref(false)
 const handleSearch = () => {
    if(!searchValue.value){
        return searchError.value = true
    }
    navigateTo(`/city/${searchValue.value}/car` )
 }
</script>

<template>
    <div class="font-serif w-[1000px] rounded-full text-2xl flex justify-between overflow-hidden drop-shadow-2xl mx-auto bg-white">
        <input type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" placeholder="Search by city..." :class="searchError ? 'border border-red-500' : ''" v-model="searchValue">
        <button class="bg-sky-500 px-10 text-white" @click="handleSearch">Search</button>
    </div>
</template>