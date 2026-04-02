import { defineStore } from 'pinia'

export const useSensor = defineStore('sensor', {
  state: () => ({
    sensors: [
      { _id: 's1', name: 'Sensor Temperatura A', tankId: 't1', branchId: '1', tipo: 'Temperatura', ubicacion: 'Centro del Tanque', ultimoValor: 14.5, minimo: 10, maximo: 18, estado: 'activo', ultimaLectura: new Date('2024-02-10T14:35:00'), isActive: true, createdAt: new Date('2023-09-01'), updatedAt: new Date('2024-02-10') },
      { _id: 's2', name: 'Sensor pH A', tankId: 't1', branchId: '1', tipo: 'pH', ubicacion: 'Centro del Tanque', ultimoValor: 7.2, minimo: 6.5, maximo: 7.8, estado: 'activo', ultimaLectura: new Date('2024-02-10T14:33:00'), isActive: true, createdAt: new Date('2023-09-02'), updatedAt: new Date('2024-02-10') },
      { _id: 's3', name: 'Sensor Oxígeno A', tankId: 't1', branchId: '1', tipo: 'Oxígeno Disuelto', ubicacion: 'Centro del Tanque', ultimoValor: 8.1, minimo: 6, maximo: 12, estado: 'activo', ultimaLectura: new Date('2024-02-10T14:34:00'), isActive: true, createdAt: new Date('2023-09-03'), updatedAt: new Date('2024-02-10') },
      { _id: 's4', name: 'Sensor Temperatura B', tankId: 't2', branchId: '1', tipo: 'Temperatura', ubicacion: 'Centro del Tanque', ultimoValor: 15.8, minimo: 10, maximo: 18, estado: 'activo', ultimaLectura: new Date('2024-02-10T14:32:00'), isActive: true, createdAt: new Date('2023-09-05'), updatedAt: new Date('2024-02-10') },
      { _id: 's5', name: 'Sensor Temperatura Cuarentena', tankId: 't3', branchId: '2', tipo: 'Temperatura', ubicacion: 'Centro del Tanque', ultimoValor: 13.2, minimo: 10, maximo: 18, estado: 'activo', ultimaLectura: new Date('2024-02-10T14:31:00'), isActive: true, createdAt: new Date('2023-09-10'), updatedAt: new Date('2024-02-10') },
    ]
  })
})
