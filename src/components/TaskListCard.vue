<template>
    <Card>
        <template #title>
            <span class="pi pi-clock mr-2" />
            <strong>In progress</strong></template>
        <template #content>
            <DataTable :value="model" tableStyle="min-width: 50rem">
                <Column field="title" header="Title"></Column>
                <Column field="description" header="Description"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="status" header="Status"></Column>
                <Column field="createdAt" header="Created">
                    <template #body="slotProps">
                        {{ formatDate(slotProps.data.createdAt) }}
                    </template>
                </Column>
                <Column field="editedAt" header="Edited">
                    <template #body="slotProps">
                        {{ formatDate(slotProps.data.editedAt) }}
                    </template>
                </Column>
            </DataTable>
        </template>
    </Card>
</template>

<script setup lang="ts">
import { formatDate } from '../utils/format';
import type { Task } from '../models/task';

const model = defineModel<Task[]>();
</script>