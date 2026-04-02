import { defineStore } from 'pinia'

export const useCompany = defineStore('company', {
  state: () => ({
    company: {
      name: 'Bitnets',
      descripcion: 'Soluciones innovadoras en monitoreo de acuicultura',
      logo: '/bitnets-logo.png',
      sitioWeb: 'https://bitnets.cl',
      email: 'info@bitnets.cl',
      telefono: '+56 9 2000 0000',
      direccion: 'Puerto Montt, Los Lagos, Chile',
      pais: 'Chile',
      region: 'Los Lagos',
      empleadosTotales: 15,
      sucursales: 2,
      createdAt: new Date('2023-01-01'),
      updatedAt: new Date('2024-02-10'),
      activo: true,
    }
  })
})
