<template>
    <div v-show="shouldShow" class="bg-white  w-72 h-44  translate-y-2 rounded drop-shadow-lg px-3 text-left">
        <div class="p-6 border-b border-D0D2D6">
            <div class="flex gap-4  ">
                <div class="overflow-hidden rounded-full w-12 h-12 bg-493DF5 flex justify-center items-center">
                    <img v-if="profileImg" class="w-12 h-12 object-cover" :src="profileImg" alt="profile">
                    <text24White v-else>
                        {{ profileInitials }}
                    </text24White>
                </div>
                <div class="">
                    <TextBold>
                        {{ profileName }}
                    </TextBold>
                    <Text145B6270>
                        {{ profileType }}
                    </Text145B6270>
                </div>
            </div>
        </div>
        <div class="p-6">
            <button class="flex gap-4 items-center" @click="logout">
                <SvgLogout></SvgLogout>
                <Text145B6270>
                    Log Out
                </Text145B6270>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">

defineProps({
    profileType: { type: String },
    profileName: { type: String },
    profileImg: { type: String },
    profileInitials: { type: String },
    shouldShow: {
        type: Boolean
    }
})

const emit = defineEmits(['logoutPressed'])

const logout = () => {
    emit('logoutPressed')
}


</script>