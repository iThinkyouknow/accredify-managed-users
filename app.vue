<style>
/* all global styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<template>
  <div class="">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">

const auth = useAuth();
const user = useUser();

const resetState = () => {
  user.value = null;
}
watch(auth, () => {
  if (!auth.value) {
    navigateToOrigin();
    resetState();
    return;
  }
}, { immediate: true })
</script>
