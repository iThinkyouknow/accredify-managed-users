<style>
.width-less-60 {
    width: calc(100% - 60px);
}
</style>
<template>
    <section id="header"
        class="header fixed top-0 left-15 h-16 border-b border-D0D2D6 flex items-center justify-between py-6 px-12"
        :class="{ 'width-less-60': auth, 'w-full': !auth }">
        <div>
        </div>
        <div class="justify-self-end">
            <slot name="right" />

        </div>
    </section>
</template>
<script setup lang="ts">
const auth = useAuth();
</script>
