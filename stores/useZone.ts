import { defineStore } from 'pinia'

export const useZone = defineStore('zone', {
  state: () => ({
    zones: [
      { _id: 'z1', name: 'Zona de Producción', branchId: '1', branch: 'Puerto Montt', descripcion: 'Área principal de cultivo de salmón', area: 500, estado: 'operativa', sensores: 3, camaras: 2, isActive: true, createdAt: new Date('2023-06-01'), updatedAt: new Date('2024-02-10') },
      { _id: 'z2', name: 'Zona de Cuarentena', branchId: '1', branch: 'Puerto Montt', descripcion: 'Aislamiento preventivo de nuevas especies', area: 100, estado: 'operativa', sensores: 1, camaras: 1, isActive: true, createdAt: new Date('2023-06-15'), updatedAt: new Date('2024-02-10') },
      { _id: 'z3', name: 'Zona de Recepción', branchId: '2', branch: 'Puerto Varas', descripcion: 'Área de recepción y almacenamiento', area: 200, estado: 'operativa', sensores: 2, camaras: 1, isActive: true, createdAt: new Date('2023-07-01'), updatedAt: new Date('2024-02-10') },
    ]
  })
})
