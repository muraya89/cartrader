<script setup>
definePageMeta({
    layout: "custom",
    middleware: ['auth']
})
</script>

<template>
<div class="shadow mt-20 rounded">
    <div>
        <CarMessageCard />
        <CarMessageCard />
        <CarMessageCard />
        <CarMessageCard />
        <CarMessageCard />
    </div>
</div>
</template>