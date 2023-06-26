<style scoped>
.absolute-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
<template>
    <div class="relative">
        <CircleProgress size="180" fill-color="#493DF5" empty-color="#E8E9EB" :rounded="true" :show-percent="false"
            :percent="percent">
        </CircleProgress>
        <div class="absolute-center">
            <Text30Bold2B22B5>
                {{ percent }}%
            </Text30Bold2B22B5>
        </div>
    </div>
</template>

<script setup lang="ts">
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

defineProps({
    percent: {
        default: 0
    }
})
</script>