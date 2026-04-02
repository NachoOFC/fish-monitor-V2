<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
    <div class="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold flex items-center">
          <Icon name="mdi:fish" class="mr-2" /> Estanques
        </h3>
        <span class="bg-white text-blue-600 text-sm font-medium px-2.5 py-0.5 rounded-full">
          {{ tanks.length }}
        </span>
      </div>
    </div>
    
    <div class="flex-grow flex flex-col">
      <div v-if="loading" class="p-6 flex justify-center">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
      
      <div v-else-if="error" class="p-6 text-center text-red-500">
        <Icon name="mdi:alert-circle" size="32" class="mx-auto mb-2" />
        <p>{{ error }}</p>
      </div>
      
      <div v-else-if="tanks.length === 0" class="p-6 text-center text-gray-500 dark:text-gray-400 flex-grow">
        <Icon name="mdi:fish-off" size="32" class="mx-auto mb-2" />
        <p>No hay estanques registrados</p>
      </div>
      
      <div v-else class="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto flex-grow">
      <div v-for="tank in tanks" :key="tank._id" class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150">
        <div class="flex justify-between items-start">
          <div>
            <div class="flex items-center">
              <h4 class="font-medium text-gray-900 dark:text-white">{{ tank.name }}</h4>
              <span 
                :class="{
                  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300': tank.isActive,
                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300': !tank.isActive
                }"
                class="text-xs font-medium ml-2 px-2.5 py-0.5 rounded-full"
              >
                {{ tank.isActive ? 'Activo' : 'Inactivo' }}
              </span>
            </div>
            <p class="text-xs text-gray-400 mt-1">
              <Icon name="mdi:map-marker" class="inline-block mr-1" />
              {{ tank.branch }}
            </p>
            <div class="grid grid-cols-2 gap-2 mt-2 text-xs text-gray-500 dark:text-gray-400">
              <span class="flex items-center">
                <Icon name="mdi:water" class="mr-1" />
                {{ tank.capacidad }} L
              </span>
              <span class="flex items-center">
                <Icon name="mdi:shape" class="mr-1" />
                {{ tank.tipo }}
              </span>
              <span class="flex items-center">
                <Icon name="mdi:fish" class="mr-1" />
                {{ tank.especie }}
              </span>
              <span class="flex items-center">
                <Icon name="mdi:counter" class="mr-1" />
                {{ tank.poblacion }} peces
              </span>
              <span class="flex items-center">
                <Icon name="mdi:calendar-plus" class="mr-1" />
                {{ new Date(tank.createdAt).toLocaleDateString() }}
              </span>
              <span class="flex items-center">
                <Icon name="mdi:calendar-edit" class="mr-1" />
                {{ new Date(tank.updatedAt).toLocaleDateString() }}
              </span>
            </div>
          </div>
          
          <div class="flex space-x-1">
            <button 
              @click="viewTankDetails(tank._id)"
              class="p-1 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
              title="Ver detalles"
            >
              <Icon name="mdi:eye" />
            </button>
            <button 
              @click="editTank(tank._id)"
              class="p-1 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
              title="Editar estanque"
            >
              <Icon name="mdi:pencil" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    <div class="p-3 bg-gray-50 dark:bg-gray-900 flex justify-end items-center h-14 mt-auto">
      <button 
        @click="$emit('create-tank')"
        class="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 font-medium"
      >
        <Icon name="mdi:plus" class="inline-block mr-1" /> Crear nuevo estanque
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useTank } from '~/stores/useTank';

const router = useRouter();
const emit = defineEmits(['create-tank']);

const tankStore = useTank();
const tanks = computed(() => tankStore.tanks);
const loading = computed(() => false);
const error = computed(() => null);

const viewTankDetails = (tankId) => {
  router.push(`/dashboard/tank/${tankId}`);
};

const editTank = (tankId) => {
  router.push(`/settings/control-panel`);
};
</script>