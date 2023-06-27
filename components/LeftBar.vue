<template>
    <div class="py-4">
        <div id="Logo-container" class="flex items-center justify-center">
            <img class="w-10 h-10" src="/accredify-logo.png" alt="Accredify">
        </div>
        <div class="mt-10">
            <NuxtLink v-for="menuItem in menuBar" :key="menuItem.link" :title="menuItem.description" :to="menuItem.link"
                class="menu-items w-15 h-15 flex items-center justify-center cursor-pointer hover:bg-white/10"
                :class="{ 'bg-white/10': menuItem.isCurrent }">
                <component :is="menuItem.icon"></component>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute();
const user = useUser();

const menuBar = computed(() => {
    const dashboardPath = `/authed/user/${user.value?.id ?? ''}/dashboard`;
    return [
        {
            icon: resolveComponent('SvgHome'),
            description: 'Home',
            link: dashboardPath,
            isCurrent: isCurrentPath(route.path, dashboardPath)
        },
        {
            icon: resolveComponent('SvgDocument'),
            description: 'Documents',
            link: '/documents',
            isCurrent: isCurrentPath(route.path, '/documents')
        },
        {
            icon: resolveComponent('SvgLightbulb'),
            description: 'Ideas',
            link: '/ideas',
            isCurrent: isCurrentPath(route.path, '/ideas')
        },
        {
            icon: resolveComponent('SvgShield'),
            description: 'Security',
            link: '/security',
            isCurrent: isCurrentPath(route.path, '/security')
        },
        {
            icon: resolveComponent('SvgGear'),
            description: 'Settings',
            link: '/settings',
            isCurrent: isCurrentPath(route.path, '/settings')
        },
    ]
})
</script>