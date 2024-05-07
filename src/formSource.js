export const userInputs = [
    {
        
        type: 'text',
        placeholder: 'Nombre y apellido',
        name: 'name',
    },
    {
        type: 'text',
        placeholder: 'Calle y número',
        name: 'street',
    },
    {
        type: 'text',
        placeholder: 'Colonia',
        name: 'colony',
    },
    {
        type: 'text',
        placeholder: 'Código Postal',
        name: 'zipCode',
    },
    {
        type: 'text',
        placeholder: 'Ciudad',
        name: 'city',
    },
    {
        type: 'text',
        placeholder: 'Telefono',
        name: 'phone',
    },
    {
        type: 'file',
        placeholder: 'Foto',
        name: 'photo',
    },
]

export const productsInputs = [
    {
        type: 'text',
        placeholder: 'Nombre del producto',
        name: 'name',
    },
    {
        type: 'text',
        placeholder: 'Categoría',
        name: 'category',
    },
    {
        type: 'text',
        placeholder: 'Marca',
        name: 'brand',
    },
    {
        type: 'text',
        placeholder: 'Modelo',
        name: 'model',
    },
    {
        type: 'number',
        placeholder: 'Precio por kilo',
        name: 'price',
    },
    {
        type: 'text',
        placeholder: 'Unidad Mínima de Venta (Kg, pieza, etc.)',
        name: 'unit',
    },
    {
        type: 'number',
        placeholder: 'Peso mínimo de venta (500g, 125g, 1 pieza, etc.)',
        name: 'weight',
    },
    {
        type: 'number',
        placeholder: 'Precio por venta mínima',
        name: 'minPrice',
    },
    {
        type: 'text',
        placeholder: 'Descripción',
        name: 'description',
    },
    {
        type: 'file',
        placeholder: 'Foto',
        name: 'photo',
    },
]

export const pedidosInputs = [
    {
        type: 'text',
        placeholder: 'Nombre del cliente',
        name: 'client',
    },
    {
        type: 'text',
        placeholder: 'Dirección de entrega',
        name: 'deliveryAddress',
    },
    {
        type: 'text',
        placeholder: 'Telefono del cliente',
        name: 'phone',
    },
    {
        type: 'text',
        placeholder: 'Otro telefono del cliente',
        name: 'otherphone',
    },
    {
        type: 'select',
        placeholder: 'Tipo de despensa',
        name: 'product',
        options: [
            {
                value: '1',
                text: 'Despensa FAMILIAR'
            },
            {
                value: '2',
                text: 'Despensa ESPECIAL'
            },
            {
                value: '3',
                text: 'Despensa PREMIUM'
            },
            {
                value: '4',
                text: 'Despensa JUMBO'
            },
            {
                value: '5',
                text: 'PEDIDO'
            }
        ]
    },
    {
        type: 'number',
        placeholder: 'Total',
        name: 'total',
    },
    {
        type: 'text',
        placeholder: 'Forma de pago',
        name: 'payment',
    },
    {
        type: 'number',
        placeholder: 'Cantidad',
        name: 'quantity',
    },
    {
        type: 'text',
        placeholder: 'Link de GPS',
        name: 'gpslink',
    },
    {
        type: 'text',
        placeholder: 'Nota (si existe)',
        name: 'note',
    },
]