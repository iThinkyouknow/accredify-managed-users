<template>
    <div class="flex-1 bg-white rounded-2xl h-screen relative z-10">
        <Header>
            <template v-slot:right>
                <LoginButton @click="login" v-if="!user?.id"></LoginButton>
                <ProfileMenuButton v-if="user?.id" :profile-img="userDisplay.profileImg"
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
const auth = useAuth();
const user = useUser();

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
        profileType: userV.current_organisation.is_personal ? 'Personal' : 'Non-Personal'
    }
})
const logout = () => {
    auth.value = false;
}

const login = () => {
    auth.value = true;
}
</script>