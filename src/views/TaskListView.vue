<template>
  <h1 class="text-3xl font-bold text-surface-700">My tasks</h1>
  <h3 class="text-surface-500">Manage your tasks in one place</h3>
  <br />
  <TaskListCard v-model="mocks.tasks" title="" />
  <br />
  <Card>
    <template #title>
      <span class="pi pi-th-large mr-2" />
      <strong>{{ props.title }}</strong>
    </template>
    <template #content>
      <DataTable :value="mocks.tasks" tableStyle="min-width: 50rem">
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
import { onMounted, ref } from 'vue'
import mocks from '../mocks';
import { formatDate } from '../utils/format';
import taskService from '../services/taskService'

const props = defineProps<{
  title: string;
}>();
const model = defineModel<Task[]>();

onMounted(async () => {
  const tasks = await taskService.getTasks();
  console.log(tasks);
})

</script>

<style scoped></style>
