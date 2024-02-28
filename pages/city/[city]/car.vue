<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities()

definePageMeta({
    layout: "custom"
})
useHead({
    title: `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)}`
})
</script>
<template>
    <div>
        <div class="mt-32 flex">
            <NuxtErrorBoundary>
                <CarSideBar />
                <NuxtPage />
                <template #error="{error}">
                    <div class="flex flex-col text-center mx-auto">
                        <h1 class="text-red-600 text-5xl mb-4">Something went wrong</h1>
                        <code class="text-center text-2xl">{{ error }}</code>
                        <button class="bg-blue-400 px-10 py-3 mt-4 rounded text-white" @click="error.value = null">Go back</button>
                    </div>
                </template>
            </NuxtErrorBoundary>
        </div>
    </div>
</template>