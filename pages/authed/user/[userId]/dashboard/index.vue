
<template>
    <MainContent>
        <div id="container" class="pt-12 px-36">
            <section id="managed-dashboard-header">
                <Text30Bold>Hi, {{ user?.name }} 👋</Text30Bold>
                <TextNormal class="mt-2">{{ subtitle }}</TextNormal>
            </section>

            <section id="managed-dashboard-content" class="flex gap-6 mt-10">
                <CareerGoal v-if="careersDisplay && !user?.current_organisation.is_personal"
                    :progress="careersDisplay.progress" :career-name="careersDisplay.name" />

                <div class="right flex-1">
                    <DocumentsTable :documents-display="documentsDisplay" />
                </div>
            </section>

        </div>
    </MainContent>
</template>
<script setup lang="ts">
import { z } from 'zod';
import { documentsResponseValidatorData, careerResponseValidatorData } from '@/types/types'
const user = useUser();

const documents = ref<z.infer<typeof documentsResponseValidatorData>>([]);
const careers = ref<z.infer<typeof careerResponseValidatorData> | undefined>();

const subtitle = computed(() => {
    const userOrganization = user.value.current_organisation;
    const preText = 'Manage your documents';
    return userOrganization && userOrganization?.name && !userOrganization.is_personal
        ? `${preText} issued by ${user.value?.current_organisation?.name} or track your career goal.`
        : preText;
});

const getDocuments = async () => {
    if (!user.value?.id) return;
    try {
        const { data } = await $fetch(`/document-module/identities/${user.value.id}/documents`);
        documentsResponseValidatorData.parse(data);
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
        careerResponseValidatorData.parse(data);
        careers.value = data;
    } catch (error) {
        console.error(error);
        alert('Unable to get your Career Path')
    }
};

watch(user, () => {
    if (user.value) {
        getDocuments();
        getCareers();
        return;
    }
    navigateToOrigin();
}, { immediate: true });

const documentsDisplay = computed(() => {
    const data = documents?.value;
    if (!documents.value || !Array.isArray(data)) return [];

    return data.map(document => {
        return {
            ...document,
            received_on_display: formatUTCDateTimeStrToddMMMyyyy(document.received_on)
        }
    }).sort((a, b) => +(new Date(b.received_on ?? 0)) - +(new Date(a.received_on ?? 0)))
});

const careersDisplay = computed(() => {
    const data = careers?.value;
    if (!careersDisplay || !Array.isArray(data) || !data.length) return null;
    return data[0]
});

</script>