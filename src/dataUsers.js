export const userColumns = [
    { field: 'id', headerName: 'ID', width: 20 },
    {
        field: 'nombreCompleto',
        headerName: 'Nombre',
        width: 120,
        renderCell: (params) => `${params.row.nombre} ${params.row.apellido}`,
        
    },
    {
        field: 'direccion',
        headerName: 'Dirección',
        width: 180,
        renderCell: (params) => `${params.row.calle} ${params.row.colonia}`,
    },
    {
      field: 'gps',
        headerName: 'GPS',
        width: 100,
    },
    {
      field: 'telefono',
        headerName: 'Telefono',
        width: 100,
    },
    {
      field: 'pedidos',
        headerName: 'Pedidos',
        width: 80,
        type: 'number',
    },
    {
      field: 'comprasTotales',
        headerName: 'Compras Totales',
        width: 150,
        type: 'number',
    },
  ];
  
export const userRows = [
    { id: 1, apellido: 'Pérez', nombre: 'Nahum', calle: 'Av Insurgentes Manzana H lote 27', colonia: 'Parque de Poblamiento', gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA', telefono: '123456789', pedidos: 10, comprasTotales: 2500,},
    { id: 2, apellido: 'Duarte', nombre: 'Juan', calle: 'Calle 123', colonia: 'Colonia Madero', gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA', telefono: '123456789', pedidos: 1, comprasTotales: 250,},
    { id: 3, apellido: 'García', nombre: 'Pedro', calle: 'Calle 123', colonia: 'Colonia Madero', gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA', telefono: '123456789', pedidos: 1, comprasTotales: 250,},
    { id: 4, apellido: 'González', nombre: 'María', calle: 'Calle 123', colonia: 'Colonia Madero', gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA', telefono: '123456789', pedidos: 1, comprasTotales: 250,},
    { id: 5, apellido: 'Hernández', nombre: 'José', calle: 'Calle 123', colonia: 'Colonia Madero', gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA', telefono: '123456789', pedidos: 1, comprasTotales: 250,},
    { id: 6, apellido: 'Martínez', nombre: 'Ana', calle: 'Calle 123', colonia: 'Colonia Madero', gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA', telefono: '123456789', pedidos: 1, comprasTotales: 250,},
    { id: 7, apellido: 'López', nombre: 'Luis', calle: 'Calle 123', colonia: 'Colonia Madero', gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA', telefono: '123456789', pedidos: 1, comprasTotales: 250,},
    { id: 8, apellido: 'Rodríguez', nombre: 'Laura', calle: 'Calle 123', colonia: 'Colonia Madero', gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA', telefono: '123456789', pedidos: 1, comprasTotales: 250,},
    { id: 9, apellido: 'Pérez', nombre: 'Nahum', calle: 'Av Insurgentes Manzana H lote 27', colonia: 'Parque de Poblamiento', gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA', telefono: '123456789', pedidos: 10, comprasTotales: 2500,},
    { id: 10, apellido: 'Duarte', nombre: 'Juan', calle: 'Calle 123', colonia: 'Colonia Madero', gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA', telefono: '123456789', pedidos: 1, comprasTotales: 250,},
    { id: 11, apellido: 'García', nombre: 'Pedro', calle: 'Calle 123', colonia: 'Colonia Madero', gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA', telefono: '123456789', pedidos: 1, comprasTotales: 250,},
    { id: 12, apellido: 'González', nombre: 'María', calle: 'Calle 123', colonia: 'Colonia Madero', gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA', telefono: '123456789', pedidos: 1, comprasTotales: 250,},
    { id: 13, apellido: 'Hernández', nombre: 'José', calle: 'Calle 123', colonia: 'Colonia Madero', gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA', telefono: '123456789', pedidos: 1, comprasTotales: 250,},
  ];