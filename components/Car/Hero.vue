
import type { CarSearchBar } from '#build/components';
<template>
    <div class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('https://images.unsplash.com/photo-1561816544-21ecbffa09a3?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div class="z-10 absolute w-full h-full flex justify-center items-center">
            <div class="text-center w-1/2">
                <h1 class="text-8xl font-serif mb-10 text-white">Find your drive</h1>
                <CarSearchBar />
            </div>
        </div>
        <div class="absolute bg-black opacity-40 z-1 w-full h-full"></div>
    </div>
</template>