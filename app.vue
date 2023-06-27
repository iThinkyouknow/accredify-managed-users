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
const route = useRoute();
const getUserData = async () => {
  try {
    const userData = await $fetch('/user-module/identities/1/user');
    user.value = userData.data
    if (route.path === '/') {
      navigateTo(`/authed/user/${user.value.id}/dashboard`)
    }
  } catch (error) {
    console.error(error);
    alert('Unable to get user');
    navigateToOrigin();
  }
}

const resetState = () => {
  user.value = null;
}
watch(auth, () => {
  if (!auth.value) {
    navigateToOrigin();
    resetState();
    return;
  }

  getUserData();
}, { immediate: true })
</script>
