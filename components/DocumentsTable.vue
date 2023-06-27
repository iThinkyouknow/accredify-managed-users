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
                    <tr v-for="document in documentsDisplay" :key="document.id" class="border-b border-D0D2D6">
                        <td>
                            <div class="flex items-center gap-2">
                                <SvgDocument fill="#493DF5"></SvgDocument>
                                <Text14Bold151F32 class="ml-2">

                                    {{ document.document_name }}
                                </Text14Bold151F32>
                            </div>

                        </td>
                        <td class="received-on">
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
</template>
<script setup lang="ts">
defineProps({
    documentsDisplay: {
        type: Array,
        default() {
            return []
        }
    }
})
</script>