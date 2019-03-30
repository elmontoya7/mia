export default [
  {
    title: 'Unidad Médica',
    items: [
      {
        key: 'nombre',
      },
      {
        key: 'instituto',
        label: 'Institución'
      },
      {
        key: 'localidad'
      },
      {
        key: 'municipio'
      },
      {
        key: 'entidad'
      },
      {
        key: 'clues',
        label: 'CLUES'
      }
    ]
  },
  {
    title: 'Datos de la víctima',
    items: [
      {
        key: 'nombre'
      },
      {
        key: 'edad',
        type: 'number'
      },
      {
        key: 'sexo',
        type: 'boolean'
      },
      {
        key: 'embarazada',
        label: '¿Está embarazada?',
        type: 'boolean'
      },
      {
        key: 'discapacidad',
        type: 'boolean'
      },
      {
        key: 'curp',
        label: 'CURP'
      }
    ]
  },
  {
    title: 'Domicilio',
    items: [
      {
        key: 'calle',
      },
      {
        key: 'numero',
        label: 'Número exterior',
        type: 'number'
      },
      {
        key: 'numero_interior',
        label: 'Número interior',
        type: 'number'
      },
      {
        key: 'barrio',
        label: 'Barrio o colonia',
        type: 'string'
      },
      {
        key: 'localidad'
      },
      {
        key: 'municipio'
      },
      {
        key: 'entidad',
        label: 'Entidad federativa'
      }
    ]
  },
]
