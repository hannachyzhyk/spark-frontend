<template>

  <div class="flex h-screen">
    <Menu :model="items" class="h-full w-1/5">
      <template #start>
        <span class="inline-flex items-center gap-1 px-2 py-2">
          <span class="text-xl font-semibold">SPARK<span class="text-primary">APP</span></span>
        </span>
      </template>
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menu>
    <div class="w-full">
      <Menubar>
        <template #start>
          <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
        </template>
        <template #end>
          <div class="flex items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
          </div>
        </template>
      </Menubar>
      <Divider />
      <main >
        <div class="content surface-ground px-4">
        <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Categories } from "../enums/categories";

const items = ref([
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: 'Tasks',
    icon: 'pi pi-list',
    route: '/tasks',
  },
  {
    label: 'Categories',
    icon: 'pi pi-tags',
    route: '/category/:id',
    items: [
      {
        label: Categories.Career,
        icon: 'pi pi-circle-fill career',
        route: '/category/career',
      },
      {
        label: Categories.Health,
        icon: 'pi pi-circle-fill health',
        route: '/category/health',
      },
      {
        label: Categories.PersonalGrowth,
        icon: 'pi pi-circle-fill personal-growth',
        route: '/category/personal-growth',
      },
      {
        label: Categories.Finance,
        icon: 'pi pi-circle-fill finance',
        route: '/category/finance',
      },
      {
        label: Categories.Relationships,
        icon: 'pi pi-circle-fill relationships',
        route: '/category/relationships',
      },
      {
        label: Categories.Romance,
        icon: 'pi pi-circle-fill romance',
        route: '/category/romance',
      },
      {
        label: Categories.FunAndRecreation,
        icon: 'pi pi-circle-fill fun-and-recreation',
        route: '/category/fun-and-recreation',
      },
      {
        label: Categories.PhysicalEnvironment,
        icon: 'pi pi-circle-fill physical-activity',
        route: '/category/physical-environment',
      },
      {
        label: Categories.Spirituality,
        icon: 'pi pi-circle-fill spirituality',
        route: '/category/spirituality',
      },
    ]
  }
]);

</script>
