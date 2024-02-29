<script setup>
definePageMeta({
    layout: 'custom',
})

const { makes } = useCars()

const info = useState('adInfo', () => {
    return {
        make: "",
        model: "",
        year: "",
        miles: "",
        price: "",
        city: "",
        seats: "",
        description: "",
        features: "",
        image: null
    }
})
const inputs = [
    {
        id: 1,
        title: "Model *",
        name: "model",
        placeholder: "Model"
    },
    {
        id: 2,
        title: "Year *",
        name: "year",
        placeholder: "Year"
    },
    {
        id: 3,
        title: "Miles *",
        name: "miles",
        placeholder: "Miles"
    
    },
    {
        id: 4,
        title: "City *",
        name: "city",
        placeholder: "City"
    },
    {
        id: 5,
        title: "Number of seats *",
        name: "seats",
        placeholder: "5"
    },
    {
        id: 6,
        title: "Description *",
        name: "description",
        placeholder: "Description"
    },
    {
        id: 7,
        title: "Features *",
        name: "Features",
        placeholder: "Leather Interior, No accidents"
    }
]
const onChangeInput = (data, name) => {
    info.value[name] = data
}
</script>

<template>
<div>
    <div class="mt-24">
        <h1 class="text-6xl">Create a new Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
        <CarAdSelect title="Make *" :options="makes" name="make" @change-input="onChangeInput" />
        <CarAdInput v-for="input in inputs" :key="input.id" :title="input.title" :name="input.name" @change-input="onChangeInput" :placeholder="input.placeholder" />
        <CarAdTextarea :title="description" :name="description" @change-input="onChangeInput" placeholder="" />
        <CarAdImage @change-input="onChangeInput"/>
    </div>
</div>
</template>