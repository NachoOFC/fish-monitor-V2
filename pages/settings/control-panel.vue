<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
      Panel de Control
    </h1>
    <p class="mb-6 text-gray-600 dark:text-gray-400">
      En este panel puedes ver un resumen de todas las entidades principales.
    </p>

    <!-- Filtros -->
    <div class="mb-6 flex flex-wrap gap-2">
      <button 
        @click="activeFilter = 'all'"
        :class="{
          'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200': activeFilter === 'all',
          'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700': activeFilter !== 'all'
        }"
        class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
      >
        <Icon name="mdi:view-dashboard" class="mr-1" /> Todos
      </button>
      
      <button 
        @click="activeFilter = 'branches'"
        :class="{
          'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200': activeFilter === 'branches',
          'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700': activeFilter !== 'branches'
        }"
        class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
      >
        <Icon name="mdi:source-branch" class="mr-1" /> Sucursales
      </button>
      
      <button 
        @click="activeFilter = 'zones'"
        :class="{
          'bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200': activeFilter === 'zones',
          'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700': activeFilter !== 'zones'
        }"
        class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
      >
        <Icon name="mdi:map-marker-multiple" class="mr-1" /> Zonas
      </button>
      
      <button 
        @click="activeFilter = 'tanks'"
        :class="{
          'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200': activeFilter === 'tanks',
          'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700': activeFilter !== 'tanks'
        }"
        class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
      >
        <Icon name="mdi:fish" class="mr-1" /> Estanques
      </button>
      
      <button 
        @click="activeFilter = 'users'"
        :class="{
          'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200': activeFilter === 'users',
          'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700': activeFilter !== 'users'
        }"
        class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
      >
        <Icon name="mdi:account-group" class="mr-1" /> Usuarios
      </button>
    </div>

    <!-- Contenido principal -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-fr">
      <!-- Sucursales -->
      <AllBranches 
        v-if="activeFilter === 'all' || activeFilter === 'branches'"
        @create-branch="openCreateBranchModal" 
      />
      
      <!-- Zonas -->
      <allZone 
        v-if="activeFilter === 'all' || activeFilter === 'zones'"
        @create-zone="openCreateZoneModal" 
      />
      
      <!-- Estanques -->
      <allTanks 
        v-if="activeFilter === 'all' || activeFilter === 'tanks'"
        @create-tank="openCreateTankModal" 
      />
      
      <!-- Usuarios -->
      <allUsers 
        v-if="activeFilter === 'all' || activeFilter === 'users'"
        @create-user="openCreateUserModal" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { definePageMeta } from "#imports";
import AllBranches from "~/components/card/allBranches.vue";
import allZone from "~/components/card/allZone.vue";
import allTanks from "~/components/card/allTanks.vue";
import allUsers from "~/components/card/allUsers.vue";

definePageMeta({
  // Removed authentication middleware
});

// Filtro activo
const activeFilter = ref('all');
</script>

<style scoped>
/* Puedes agregar estilos específicos si es necesario */
.container {
  max-width: 1200px;
}
</style>
