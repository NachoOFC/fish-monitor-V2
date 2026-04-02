<template>
  <div v-if="stats && !loading && !error" class="bg-gray-700 text-white p-4">
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div class="bg-blue-600 p-4 rounded-lg shadow-md flex flex-col items-center justify-center min-h-[100px]">
        <Icon name="mdi:fishbowl-outline" class="text-3xl mb-2" />
        <p class="text-sm font-medium">Total Estanques</p>
        <p class="text-2xl font-bold">{{ stats.totalTanks !== null ? stats.totalTanks : 'N/A' }}</p>
      </div>
      <div class="bg-green-600 p-4 rounded-lg shadow-md flex flex-col items-center justify-center min-h-[100px]">
        <Icon name="mdi:fish" class="text-3xl mb-2" />
        <p class="text-sm font-medium">Total Peces</p>
        <p class="text-2xl font-bold">{{ stats.totalFish !== null ? stats.totalFish : 'N/A' }}</p>
      </div>
      <div class="bg-yellow-500 p-4 rounded-lg shadow-md flex flex-col items-center justify-center min-h-[100px]">
        <Icon name="mdi:thermometer" class="text-3xl mb-2" />
        <p class="text-sm font-medium">Temp. Promedio</p>
        <p class="text-2xl font-bold">
          {{ stats.averageTemperature !== null ? stats.averageTemperature + '°C' : 'N/A' }}
        </p>
      </div>
      <div class="bg-purple-600 p-4 rounded-lg shadow-md flex flex-col items-center justify-center min-h-[100px]">
        <Icon name="mdi:weight-kilogram" class="text-3xl mb-2" />
        <p class="text-sm font-medium">Biomasa Total</p>
        <p class="text-2xl font-bold">
          {{ stats.totalBiomassKg !== null ? stats.totalBiomassKg + ' kg' : 'N/A' }}
        </p>
      </div>
    </div>
  </div>
  <div v-else-if="loading" class="bg-gray-800 text-white p-4 text-center">
    Cargando estadísticas...
  </div>
  <div v-else-if="error" class="bg-red-700 text-white p-4 text-center">
    Error al cargar estadísticas: {{ error }}
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useTank } from '~/stores/useTank';
import { useSensor } from '~/stores/useSensor';

const tankStore = useTank();
const sensorStore = useSensor();
const loading = ref(false);
const error = ref('');

const stats = computed(() => {
  const tanks = tankStore.tanks || [];
  
  // Total tanks
  const totalTanks = tanks.length;
  
  // Total fish (población)
  const totalFish = tanks.reduce((sum, tank) => {
    return sum + (tank.poblacion || 0);
  }, 0);
  
  // Average temperature from sensors
  const sensors = sensorStore.sensors || [];
  const tempSensors = sensors.filter(s => s.tipo === 'Temperatura');
  const averageTemperature = tempSensors.length > 0
    ? (tempSensors.reduce((sum, s) => sum + (s.ultimoValor || 0), 0) / tempSensors.length).toFixed(1)
    : 'N/A';
  
  // Total biomass
  const totalBiomassKg = tanks.reduce((sum, tank) => {
    // Estimación: población * 0.5 kg promedio por pez
    return sum + ((tank.poblacion || 0) * 0.5);
  }, 0).toFixed(1);
  
  return {
    totalTanks,
    totalFish,
    averageTemperature,
    totalBiomassKg
  };
});

onMounted(() => {
  loading.value = false;
});
</script>

<style scoped>
/* Scoped styles if needed, for example, to ensure min-height for consistency */
.min-h-\[100px\] {
  min-height: 100px;
}
</style>
