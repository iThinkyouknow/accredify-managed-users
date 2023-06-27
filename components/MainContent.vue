<template>
    <div class="flex-1 bg-white rounded-2xl h-screen relative z-10">
        <Header>
            <template v-slot:right>
                <div class="flex gap-2" v-if="!user?.id">
                    <LoginButton id="login-button-managed" @click="() => login(1)">Managed</LoginButton>
                    <LoginButton id="login-button-personal" @click="() => login(2)">Personal</LoginButton>
                </div>
                <ProfileMenuButton v-if="user?.id" :profile-img="userDisplay.profileImg ?? ''"
                    :profile-name="userDisplay.profileName" :profile-type="userDisplay.profileType"
                    @logout-pressed="logout">
                </ProfileMenuButton>
            </template>
        </Header>
        <div class="pt-16 h-screen">
            <slot />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { userResponseValidator } from '@/types/types';
const auth = useAuth();
const user = useUser();
const route = useRoute();

const getUserData = async (id: number | string) => {
    try {
        const userData = await $fetch(`/user-module/identities/${id}/user`);
        userResponseValidator.parse(userData);
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

const userDisplay = computed(() => {
    if (!user.value) return {
        profileImg: '',
        profileName: '',
        profileType: ''
    };
    const userV = user.value
    return {
        profileImg: userV.profile_picture_url,
        profileName: userV.name,
        profileType: userV.current_organisation?.is_personal ? 'Personal' : 'Managed'
    }
})
const logout = () => {
    auth.value = false;
}

const login = (id: number | string) => {
    getUserData(id);
    auth.value = true;
}
</script>