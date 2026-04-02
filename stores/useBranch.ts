import { defineStore } from 'pinia'

export const useBranch = defineStore('branch', {
  state: () => ({
    branches: [
      {
        _id: '1',
        name: 'Puerto Montt',
        location: 'Puerto Montt, Los Lagos, Chile',
        description: 'Sucursal principal controladora de acuicultura',
        isActive: true,
        empleados: [
          { _id: 'e1', name: 'Carlos López', role: 'Gerente' },
          { _id: 'e2', name: 'María García', role: 'Técnico' },
        ],
        telefono: '+56 9 2345 6789',
        createdAt: new Date('2023-01-15'),
        updatedAt: new Date('2024-01-10'),
      },
      {
        _id: '2',
        name: 'Puerto Varas',
        location: 'Puerto Varas, Los Lagos, Chile',
        description: 'Sucursal de operaciones y monitoreo',
        isActive: true,
        empleados: [
          { _id: 'e3', name: 'Roberto Fernández', role: 'Supervisor' },
          { _id: 'e4', name: 'Ana Martínez', role: 'Técnico' },
          { _id: 'e5', name: 'Juan Rodríguez', role: 'Operador' },
        ],
        telefono: '+56 9 9999 9999',
        createdAt: new Date('2023-03-20'),
        updatedAt: new Date('2024-02-15'),
      },
    ]
  })
})
