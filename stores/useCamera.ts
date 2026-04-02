import { defineStore } from 'pinia'

export const useCamera = defineStore('camera', {
  state: () => ({
    cameras: [
      { _id: 'c1', name: 'Cámara Tanque A', branchId: '1', tankId: 't1', ubicacion: 'Puerto Montt - Tanque Principal', resolucion: '1920x1080', fps: 30, estado: 'activa', ultimaActividad: new Date('2024-02-10T14:30:00'), grabaciónActiva: true, isActive: true, createdAt: new Date('2023-09-01'), updatedAt: new Date('2024-02-10') },
      { _id: 'c2', name: 'Cámara Tanque B', branchId: '1', tankId: 't2', ubicacion: 'Puerto Montt - Tanque Cría', resolucion: '1280x720', fps: 24, estado: 'activa', ultimaActividad: new Date('2024-02-10T14:25:00'), grabaciónActiva: true, isActive: true, createdAt: new Date('2023-09-15'), updatedAt: new Date('2024-02-10') },
      { _id: 'c3', name: 'Cámara Cuarentena', branchId: '2', tankId: 't3', ubicacion: 'Puerto Varas - Cuarentena', resolucion: '1920x1080', fps: 30, estado: 'activa', ultimaActividad: new Date('2024-02-10T14:20:00'), grabaciónActiva: true, isActive: true, createdAt: new Date('2023-10-05'), updatedAt: new Date('2024-02-10') },
    ]
  })
})
