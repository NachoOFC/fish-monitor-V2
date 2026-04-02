import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
  state: () => ({
    users: [
      { _id: 'u1', name: 'Carlos López', email: 'carlos.lopez@bitnets.cl', role: 'Administrador', estado: 'activo', branchId: '1', branch: 'Puerto Montt', createdAt: new Date('2023-01-20'), updatedAt: new Date('2024-02-10') },
      { _id: 'u2', name: 'María García', email: 'maria.garcia@bitnets.cl', role: 'Técnico', estado: 'activo', branchId: '1', branch: 'Puerto Montt', createdAt: new Date('2023-02-15'), updatedAt: new Date('2024-02-10') },
      { _id: 'u3', name: 'Roberto Fernández', email: 'roberto.fernandez@bitnets.cl', role: 'Supervisor', estado: 'activo', branchId: '2', branch: 'Puerto Varas', createdAt: new Date('2023-03-10'), updatedAt: new Date('2024-02-10') },
      { _id: 'u4', name: 'Ana Martínez', email: 'ana.martinez@bitnets.cl', role: 'Técnico', estado: 'activo', branchId: '2', branch: 'Puerto Varas', createdAt: new Date('2023-04-05'), updatedAt: new Date('2024-02-10') },
    ]
  })
})
