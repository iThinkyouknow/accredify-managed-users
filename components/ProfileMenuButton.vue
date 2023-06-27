<template>
    <div class="relative" v-click-outside="closePopup">
        <TopRightButtonWrapper @click="togglePopup" class="flex items-center gap-2 ">
            <div class="rounded-full overflow-hidden bg-493DF5 w-6 h-6">
                <img v-if="profileImg" class="w-6 h-6 object-cover	" :src="profileImg" alt="profile" />
                <Text14White>{{ initials }}</Text14White>
            </div>
            <Text14151F32>{{ profileName }}</Text14151F32>
            <SvgCaret />
        </TopRightButtonWrapper>
        <div class="top-full right-0 absolute">
            <Transition name="fade">
                <ProfileMenuOptions :should-show="popupShouldShow" @close-popup="closePopup"
                    @logout-pressed="$emit('logoutPressed')" :profile-img="profileImg" :profile-name="profileName"
                    :profile-type="profileType" :profile-initials="initials">
                </ProfileMenuOptions>
            </Transition>
        </div>
    </div>
</template>
<script setup lang="ts">
const popupShouldShow = ref(false);

const props = defineProps({
    profileImg: { type: String },
    profileName: { type: String },
    profileType: { type: String }
});

const initials = computed(() => {
    if (!props.profileName) return '';
    return makeInitials(props.profileName)
})
const closePopup = () => {
    popupShouldShow.value = false;
}

const togglePopup = () => {
    popupShouldShow.value = !popupShouldShow.value;
}
</script>