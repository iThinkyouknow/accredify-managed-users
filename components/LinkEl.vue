<template>
    <NuxtLink :to="url" class="cursor-pointer">
        <h6 class="text-sm text-493DF5 font-bold text-center">
            <slot />
        </h6>
    </NuxtLink>
</template>

<script setup lang="ts">

defineProps<{
    url: string
}>()
</script>