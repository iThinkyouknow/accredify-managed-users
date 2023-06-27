<template>
    <div id="career-goal" class="left w-64">
        <Text20Bold>
            Career Goal
        </Text20Bold>
        <RoundedBorderContainer class="mt-6 h-full">
            <div class="flex-col flex gap-6">
                <Text14Bold5B6270 class="text-center">
                    Your Progress
                </Text14Bold5B6270>
                <CircularProgress :percent="progress ?? 0">

                </CircularProgress>
                <div>
                    <Text14 class="text-center">
                        I want to become a
                    </Text14>
                    <Text20Bold class="text-center">
                        {{ careerName }}
                    </Text20Bold>
                </div>
                <LinkEl url="">
                    View Insights
                </LinkEl>
            </div>
        </RoundedBorderContainer>
    </div>
</template>

<script setup lang="ts">
defineProps({
    progress: {
        type: Number
    },
    careerName: {
        type: String
    }
})


</script>