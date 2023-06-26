<template>
    <div class="flex-1 bg-white rounded-2xl">
        <Header>
            <template v-slot:right>
                <ProfileMenuButton></ProfileMenuButton>
            </template>
        </Header>
        <slot />
    </div>
</template>