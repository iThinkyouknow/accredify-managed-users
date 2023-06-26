<template>
    <div class="py-4">
        <div id="Logo-container" class="flex items-center justify-center">
            <img class="w-10 h-10" src="/accredify-logo.png" alt="Accredify">
        </div>
        <div class="mt-10">
            <NuxtLink v-for="menuItem in menuBar" :key="menuItem.link" :title="menuItem.description" :to="menuItem.link"
                class="w-15 h-15 flex items-center justify-center cursor-pointer hover:bg-white/10">
                <component :is="menuItem.icon"></component>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
const menuBar = computed(() => [
    {
        icon: resolveComponent('SvgHome'),
        description: 'Home',
        link: '/' // todo: change this route
    },
    {
        icon: resolveComponent('SvgDocument'),
        description: 'Documents',
        link: '/documents'
    },
    {
        icon: resolveComponent('SvgLightbulb'),
        description: 'Ideas',
        link: '/ideas'
    },
    {
        icon: resolveComponent('SvgShield'),
        description: 'Security',
        link: '/security'
    },
    {
        icon: resolveComponent('SvgGear'),
        description: 'Settings',
        link: '/settings'
    },
])
</script>