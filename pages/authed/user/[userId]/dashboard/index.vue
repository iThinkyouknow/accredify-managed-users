<style scoped>
th,
td {
    @apply pb-5
}

th:first-child,
td:first-child {
    @apply pl-4
}

td {
    @apply py-5 align-middle
}
</style>
<template>
    <MainContent>
        <div id="container" class="pt-12 px-36">
            <section id="managed-dashboard-header">
                <Text30Bold>Hi, Gerald Goh 👋</Text30Bold>
                <TextNormal class="mt-2">Manage your documents issued by SMU Academy or track your career goal.</TextNormal>
            </section>

            <section id="managed-dashboard-content" class="flex gap-6 mt-8">
                <div v-if="careersDisplay" class="left w-64">
                    <Text20Bold>
                        Career Goal
                    </Text20Bold>
                    <RoundedBorderContainer class="mt-6 h-full">
                        <div class="flex-col flex gap-6">
                            <Text14Bold5B6270 class="text-center">
                                Your Progress
                            </Text14Bold5B6270>
                            <CircularProgress :percent="careersDisplay.progress">

                            </CircularProgress>
                            <div>
                                <Text14 class="text-center">
                                    I want to become a
                                </Text14>
                                <Text20Bold class="text-center">
                                    {{ careersDisplay.name }}
                                </Text20Bold>
                            </div>
                            <LinkEl url="">
                                View Insights
                            </LinkEl>
                        </div>
                    </RoundedBorderContainer>
                </div>

                <div class="right flex-1">
                    <div class="header flex justify-between">
                        <Text20Bold>
                            Recent Documents
                        </Text20Bold>
                        <LinkEl>
                            View All Documents
                        </LinkEl>
                    </div>
                    <RoundedBorderContainer class="mt-6 min-h-full">
                        <div class="px-6 ">

                            <table class="w-full px-6 table-fixed text-left">
                                <thead class="border-b border-D0D2D6 ">
                                    <tr class="">
                                        <th class="w-19/12 ">
                                            <Text14Bold5B6270>
                                                Document Name
                                            </Text14Bold5B6270>
                                        </th>

                                        <th class="w-2/12">
                                            <Text14Bold5B6270>
                                                Received On
                                            </Text14Bold5B6270>
                                        </th>
                                        <th class="w-1/12"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="document in documentsDisplay" :key="document.id"
                                        class="border-b border-D0D2D6">
                                        <td>
                                            <div class="flex items-center gap-2">
                                                <SvgDocument fill="#493DF5"></SvgDocument>
                                                <Text14Bold151F32 class="ml-2">

                                                    {{ document.document_name }}
                                                </Text14Bold151F32>
                                            </div>

                                        </td>
                                        <td>
                                            <Text14>
                                                {{ document.received_on_display }}
                                            </Text14>
                                        </td>
                                        <td>
                                            <SvgThreeDots>
                                            </SvgThreeDots>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </RoundedBorderContainer>
                </div>
            </section>

        </div>
    </MainContent>
</template>
<script setup lang="ts">
const user = useUser();

const documents = ref();
const careers = ref();

const getDocuments = async () => {
    if (!user.value?.id) return;
    try {
        const { data } = await $fetch(`/document-module/identities/${user.value.id}/documents`)
        documents.value = data;
    } catch (error) {
        console.error(error);
        alert('Unable to get your documents')
    }
};

const getCareers = async () => {
    if (!user.value?.id) return;
    try {
        const { data } = await $fetch(`/career-module/identities/${user.value.id}/careers`);
        careers.value = data;


    } catch (error) {
        console.error(error);
        alert('Unable to get your Career Path')
    }
}

watch(user, () => {
    if (user.value) {
        getDocuments();
        getCareers();
        return;
    }
    navigateToOrigin();
}, { immediate: true })

const documentsDisplay = computed(() => {
    const data = documents?.value;
    if (!documents.value || !Array.isArray(data)) return [];

    return data.map(document => {
        return {
            ...document,
            received_on_display: formatUTCDateTimeStrToddMMMyyyy(document.received_on)
        }
    }).sort((a, b) => +(new Date(b.received_on ?? 0)) - +(new Date(a.received_on ?? 0)))
})

const careersDisplay = computed(() => {
    const data = careers?.value;
    if (!careersDisplay || !Array.isArray(data) || !data.length) return null;
    return data[0]
});

</script>