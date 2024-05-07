import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
    
`

const Thead = styled.thead`
    background-color: #333;
    color: #fff;
`

const Tbody = styled.tbody`
    background-color: #f5f5f5;
    color: #333;
`

const Tr = styled.tr`
    border-bottom: 1px solid #ddd;
`

const Th = styled.th`
    font-size: 1.4rem;
    padding: 10px;
    text-align: left;
`

const Td = styled.td`
    padding: 10px;
`

const Title = styled.h1`
    font-size: 2rem;
    color: #33333370;
    margin-bottom: 20px;
`



function TableComponent({title}) {
    const rows = [
        {
            id: 129948, 
            nombre: 'Juan Duarte',
            calle: 'Calle 123',
            colonia: 'Colonia Madero',
            gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA',
            telefono: '123456789',
            pedido: '1 Familiar, no guayaba por 500g de jitomate',
            total: 250,
            fecha: '18/04/2024',
            dia: 'Miercoles',
            nota: 'Pasar antes de 2pm'
        },
        {
            id: 129949, 
            nombre: 'Pedro Gonzales',
            calle: 'Calle Bugambilia 204',
            colonia: 'Colonia Paseos de las reinas',
            gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA',
            telefono: '123456789',
            pedido: '1 Premium, no calabaza por 500g de zanahoria',
            total: 440,
            fecha: '18/04/2024',
            dia: 'Miercoles',
            nota: 'Pasar antes de 2pm'
        },
        {
            id: 129950, 
            nombre: 'Alexa Jimenez',
            calle: 'Calle insurgentes 123',
            colonia: 'Colonia Parque de poblamiento',
            gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA',
            telefono: '123456789',
            pedido: '1 Especial, no longaniza por 300g de papas a la francesa',
            total: 320,
            fecha: '18/04/2024',
            dia: 'Miercoles',
            nota: ''
        },
        {
            id: 129951, 
            nombre: 'Esperanza Lopez',
            calle: 'Calle 123',
            colonia: 'Colonia Piracantos',
            gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA',
            telefono: '123456789',
            pedido: '1 Familiar, no guayaba por 500g de jitomate',
            total: 250,
            fecha: '18/04/2024',
            dia: 'Miercoles',
            nota: 'Pasar antes de 2pm'
        },
        {
            id: 129952, 
            nombre: 'Juan Duarte',
            calle: 'Calle 123',
            colonia: 'Colonia Av Madero',
            gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA',
            telefono: '123456789',
            pedido: '1 Familiar, no guayaba por 500g de jitomate',
            total: 250,
            fecha: '18/04/2024',
            dia: 'Miercoles',
            nota: 'Pasar antes de 2pm'
        },
        {
            id: 129953, 
            nombre: 'Juan Duarte',
            calle: 'Calle 123',
            colonia: 'Colonia Madero',
            gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA',
            telefono: '123456789',
            pedido: '1 Familiar, no guayaba por 500g de jitomate',
            total: 250,
            fecha: '18/04/2024',
            dia: 'Miercoles',
            nota: 'Pasar antes de 2pm'
        },
        {
            id: 129954, 
            nombre: 'Juan Duarte',
            calle: 'Calle 123',
            colonia: 'Colonia Madero',
            gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA',
            telefono: '123456789',
            pedido: '1 Familiar, no guayaba por 500g de jitomate',
            total: 250,
            fecha: '18/04/2024',
            dia: 'Miercoles',
            nota: 'Pasar antes de 2pm'
        },
        {
            id: 129955, 
            nombre: 'Juan Duarte',
            calle: 'Calle 123',
            colonia: 'Colonia Madero',
            gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA',
            telefono: '123456789',
            pedido: '1 Familiar, no guayaba por 500g de jitomate',
            total: 250,
            fecha: '18/04/2024',
            dia: 'Miercoles',
            nota: 'Pasar antes de 2pm'
        },
        {
            id: 129956, 
            nombre: 'Juan Duarte',
            calle: 'Calle 123',
            colonia: 'Colonia Madero',
            gps: 'https://maps.app.goo.gl/nPFKNoEg6quX2SBDA',
            telefono: '123456789',
            pedido: '1 Familiar, no guayaba por 500g de jitomate',
            total: 250,
            fecha: '18/04/2024',
            dia: 'Jueves',
            nota: 'Pasar antes de 2pm'
        },

    ]
  return (
    <Container>
        <Title>
            {title}
        </Title>
        <Table>
            <Thead>
                <Tr>
                    <Th>Nombre</Th>
                    <Th>Direccion</Th>
                    <Th>GPS</Th>
                    <Th>Telefono</Th>
                    <Th>Pedido</Th>
                    <Th>Total</Th>
                    <Th>Fecha</Th>
                    <Th>Dia</Th>
                </Tr>
            </Thead>
            <Tbody>
                {rows.map(row => (
                    <Tr key={row.id}>
                        <Td>{row.nombre}</Td>
                        <Td>{row.calle}, {row.colonia}</Td>
                        <Td><a href={row.gps} target="_blank" rel="noreferrer">Ver mapa</a></Td>
                        <Td>{row.telefono}</Td>
                        <Td>{row.pedido}</Td>
                        <Td>{row.total}</Td>
                        <Td>{row.fecha}</Td>
                        <Td>{row.dia}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </Container>
  )
}

export default TableComponent;