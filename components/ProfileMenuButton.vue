<template>
    <div class="relative" v-click-outside="closePopup">
        <button @click="togglePopup"
            class="flex items-center gap-2 border border-transparent rounded p-2 pr-4 hover:border hover:border-493DF5 active:border active:border-493DF5 focus:border focus:border-493DF5 ">
            <div class="rounded-full bg-493DF5 w-6 h-6">
                <img v-if="profileImg" class="w-6 h-6" :src="profileImg" alt="profile" />
                <Text14White v-else>GG</Text14White>
            </div>
            <Text14151F32>Gerald Goh</Text14151F32>
            <SvgCaret />
        </button>
        <div class="top-full right-0 absolute">
            <Transition name="fade">
                <ProfileMenuOptions :should-show="popupShouldShow" @close-popup="closePopup">
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

const closePopup = () => {
    popupShouldShow.value = false;
}

const togglePopup = () => {
    popupShouldShow.value = !popupShouldShow.value;
}
</script>