import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';


const Container = styled.div`
    position: relative;
    display: flex;
    align-items: start;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: #EAE9E3;
`
const RigthContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
        display:none;
    }
`

const LeftContainer = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    min-height: 100vh;
    width: 100%;
    gap: 20px;
    @media (max-width: 768px) {
        flex: 1;
    }
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

const Title = styled.h1`
    font-size: 3.2rem;
    color: #333;
`

const Button = styled.button`
    background-color: #FFD700;
    color: #17161B;
    padding: 10px 20px;
    border: 1px solid #17161B;
    border-radius: 50px;
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        background-color: transparent;
    }
`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const SubTitle = styled.h2`
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
`

const InputDate = styled.input`
    padding: 10px 20px;
    border: 1px solid #17161B;
    border-radius: 50px;
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 10px;
`

const SelectFormat = styled.select`
    padding: 10px 20px;
    border: 1px solid #17161B;
    border-radius: 50px;
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 10px;
`

const Option = styled.option`
    font-size: 1.6rem;
    font-weight: bold;
`

const InfoPedidos = styled.div`
    display: flex;
    flex-direction: column;
    align-self: start;
    justify-content: center;
    width: 30%;
    margin-top: 20px;
    font-size: 1.4rem;
    color: #17161B;
    padding: 10px 20px;
`

const PedidoArea = styled.div`
    border-radius: 10px;
    margin: 10px;
`

const DayOfWeek = styled.h3`
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
`

const WrapperPedidos = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

const InfoExtras = styled.div`
    display: flex;
    flex-direction: column;
    align-self: start;
    justify-content: center;
    width: 30%;
    margin-top: 20px;
    font-size: 1.4rem;
    color: #17161B;
    padding: 10px 20px;
`

const InfoNoDeseados = styled.div`
    display: flex;
    flex-direction: column;
    align-self: start;
    justify-content: center;
    width: 30%;
    margin-top: 20px;
    font-size: 1.4rem;
    color: #17161B;
    padding: 10px 20px;
`


const EditPedidos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 20px;
    width: 100%;
    padding: 20px;
    background-color: #FFf;
    & h3 {
        font-size: 1.8rem;
        color: #333;
    }
    & table {
        width: 100%;
        border-collapse: collapse;
    }
    & thead {
        background-color: #FFD700;
    }
    & th {
        font-size: 1.4rem;
        color: #17161B;
        padding: 10px;
    }
    & td {
        font-size: 1.2rem;
        color: #333;
        padding: 10px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    & td:last-child {
        display: flex;
        gap: 10px;
    }
`


const ButtonAction = styled.button`
    background-color: #FFD700;
    color: #17161B;
    padding: 5px 10px;
    border: 1px solid #17161B;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        background-color: transparent;
    }
`

const ButtonActionDelete = styled.button`
    background-color: red;
    color: #FFF;
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        background-color: transparent;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`



function Pedidos() {
    const [pedidos, setPedidos] = useState([]);
    const [mostrarPedidos, setMostrarPedidos] = useState(false);
    const [fecha, setFecha] = useState('');
    const [diaSemana, setDiaSemana] = useState('');


    //contador de productos, si se repite el nombre del producto, se incrementa el contador

    const contarProductos = () => {
        const contadorProductos = {};
        pedidos.forEach(pedido => {
            pedido.newProducts.forEach(producto => {
                const nombreProducto = producto.title;
                contadorProductos[nombreProducto] = (contadorProductos[nombreProducto] || 0) + 1;
            });
        });
        return contadorProductos;
    };
    const contarProductosNoDeseados = () => {
        const contadorProductos = {};
        pedidos.forEach(pedido => {
            pedido.deletedProducts.forEach(producto => {
                const nombreProducto = producto.nombre;
                contadorProductos[nombreProducto] = (contadorProductos[nombreProducto] || 0) + 1;
            });
        });
        return contadorProductos;
    };


    useEffect(() => {
        const getPedidos = async () => {
            try {
                const response = await axios.get('https://backendfresh-production.up.railway.app/api/pedidos');


                // Filtrar los pedidos por la fecha seleccionada
                const pedidosFiltrados = response.data.filter(pedido => pedido.fecha.includes(fecha));

                //Ordenar los pedidos alfabeticamente

                pedidosFiltrados.sort((a, b) => {
                    if (a.cliente < b.cliente) {
                        return -1;
                    }
                    if (a.cliente > b.cliente) {
                        return 1;
                    }
                    return 0;
                });



                setPedidos(pedidosFiltrados);
                console.log(pedidosFiltrados);

                if (pedidosFiltrados) {
                    setDiaSemana(pedidosFiltrados[0].fecha.split(' ')[0]);
                } else {
                    setDiaSemana('');
                }
            } catch (error) {
                console.error(error);
            }
        };

        // Llamada inicial para obtener los pedidos
        if (mostrarPedidos) {
            getPedidos();
            console.log('Pedidos que coinciden con la fecha' + fecha + 'seleccionada: ', pedidos);  // Mostrar los datos de los pedidos en la consola
            setMostrarPedidos(false);
        }
    }, [mostrarPedidos]);


    //borrar el pedido

    const borrarPedidoFunction = async (id) => {
        try {
            await axios.delete(`https://backendfresh-production.up.railway.app/api/pedidos/${id}`);
            // Después de borrar el pedido, actualizamos la lista de pedidos
            setPedidos(prevPedidos => prevPedidos.filter(pedido => pedido._id !== id));
        } catch (error) {
            console.error(error);
        }
    }







    return (
        <Container>
            <RigthContainer>
                <Sidebar />
            </RigthContainer>
            <LeftContainer>
                <Navbar />
                <Top>
                    <Title>Pedidos</Title>
                    <ButtonsContainer>
                        <Link to="nuevopedido">
                            <Button>Nuevo Pedido</Button>
                        </Link>
                        <Link to="pdf">
                            <Button>Generar PDF</Button>
                        </Link>
                    </ButtonsContainer>
                </Top>
                <Center>
                    <SubTitle>Mostrar pedidos</SubTitle>
                    <InputDate type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                    <Button
                        onClick={() => {
                            setMostrarPedidos(true);
                        }}
                    >
                        Buscar
                    </Button>
                    <WrapperPedidos>
                        <InfoPedidos>
                            <SubTitle>Pedidos del día </SubTitle>
                            <DayOfWeek>{diaSemana ? `${diaSemana}` : ''}</DayOfWeek>

                            {
                                pedidos.length > 0 ?
                                    pedidos.map(pedido => (
                                        <PedidoArea key={pedido._id}>
                                            🏆 {pedido.cliente.split('-')[0].trim()} - {pedido.direccion} ({pedido.despensaQuantity} {pedido.despensa}) {
                                                pedido.deletedProducts.length > 0 ?
                                                    pedido.deletedProducts.map(producto => `no ${producto.nombre}, `) :
                                                    ''
                                            } {
                                                pedido.newProducts.length > 0 ?
                                                    `EXTRAS: ${pedido.newProducts.map(producto => producto.title).join(', ')} ` :
                                                    ''
                                            } Total ${pedido.total} CEL. {pedido.telefono} {pedido.fecha.split(' ')[0].toUpperCase()} {
                                                pedido.nota ? `Nota: ${pedido.nota}` : ''
                                            }
                                        </PedidoArea>
                                    )) :
                                    'No hay pedidos para mostrar'
                            }
                        </InfoPedidos>
                        <InfoExtras>
                            <SubTitle>Extras del día {diaSemana}</SubTitle>
                            {
                                pedidos.length > 0 ?
                                    Object.entries(contarProductos()).map(([nombreProducto, cantidad]) => (
                                        <PedidoArea key={nombreProducto}>
                                            {console.log(nombreProducto)}
                                            {cantidad} - {nombreProducto}
                                        </PedidoArea>
                                    )) :
                                    'No hay extras para mostrar'
                            }
                        </InfoExtras>
                        <InfoNoDeseados>
                            <SubTitle>Productos no deseados del día {diaSemana}</SubTitle>
                            {
                                pedidos.length > 0 ?
                                    Object.entries(contarProductosNoDeseados()).map(([nombreProducto, cantidad]) => (
                                        <PedidoArea key={nombreProducto}>
                                            {console.log(nombreProducto)}
                                            {cantidad} - {nombreProducto}
                                        </PedidoArea>
                                    )) :
                                    'No hay extras para mostrar'
                            }
                        </InfoNoDeseados>
                    </WrapperPedidos>
                </Center>
                <EditPedidos>
                    {/* crear una tabla donde poder editar los pedidos si le hacemos algun cambio */}
                    {
                        pedidos.length > 0 ?
                            <Title>Editar pedidos del día {pedidos[0].fecha.split(' ')[0]}</Title> :
                            null
                    }
                    {
                        pedidos.length > 0 ?

                            <table>
                                <thead>
                                    <tr>
                                        <th>Cliente</th>
                                        <th>Dirección</th>
                                        <th>Telefono</th>
                                        <th>Despensa</th>
                                        <th>Productos no deseados</th>
                                        <th>Productos a cambio o extras</th>
                                        <th>Precio</th>
                                        <th>Editar o eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        pedidos.map(pedido => (
                                            <tr key={pedido._id}>
                                                <td>{pedido.cliente}</td>
                                                <td>{pedido.direccion}</td>
                                                <td>{pedido.telefono}</td>
                                                <td>{pedido.despensa}</td>
                                                <td>{pedido.deletedProducts.map(producto => producto.nombre).join(', ')}</td>
                                                <td>{pedido.newProducts.map(producto => producto.title).join(', ')}</td>
                                                <td>${pedido.total}</td>
                                                <td>
                                                    <Link to={`/pedidos/${pedido._id}`} >
                                                        <ButtonAction>Editar</ButtonAction>
                                                    </Link>
                                                    <ButtonActionDelete onClick={() => borrarPedidoFunction(pedido._id)}>Eliminar</ButtonActionDelete>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table> :
                            'No hay pedidos para mostrar'
                    }

                </EditPedidos>
            </LeftContainer>
        </Container>
    );
}

export default Pedidos;

