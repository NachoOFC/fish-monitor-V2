import { defineStore } from 'pinia'

export const useTank = defineStore('tank', {
  state: () => ({
    tanks: [
      { _id: 't1', name: 'Tanque Principal A', branchId: '1', branch: 'Puerto Montt', capacidad: 5000, profundidad: 3, tipo: 'Recirculación', especie: 'Salmón', poblacion: 2500, isActive: true, createdAt: new Date('2023-06-01'), updatedAt: new Date('2024-02-10') },
      { _id: 't2', name: 'Tanque Cría B', branchId: '1', branch: 'Puerto Montt', capacidad: 2000, profundidad: 1.5, tipo: 'Jaula de Cultivo', especie: 'Trucha', poblacion: 800, isActive: true, createdAt: new Date('2023-07-15'), updatedAt: new Date('2024-01-20') },
      { _id: 't3', name: 'Tanque Cuarentena', branchId: '2', branch: 'Puerto Varas', capacidad: 1000, profundidad: 2, tipo: 'Recirculación', especie: 'Salmón', poblacion: 200, isActive: true, createdAt: new Date('2023-08-10'), updatedAt: new Date('2024-02-05') },
    ]
  })
})
