import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import axios from 'axios';
import { useEffect, useState } from 'react';
import logoFresh from '../../public/logoFresh.png'

const Container = styled.div`
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
        flex: 0;
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
        diplay:none;
    }
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
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
    cursor: pointer;
`

const InputDate = styled.input`
    padding: 10px 20px;
    border: 1px solid #17161B;
    border-radius: 50px;
    font-size: 1.6rem;
`

const TicketContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;

    position: ${props => props.position};
    top: 0;
    left: 0; 
    & > div:nth-child(odd) {
        border-bottom: 3px dotted rgba(0,0,0,0.8);
    }
`

const Ticket = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 50vh;
    width: 100%;
    padding: 20px;
    background-color: #FFf;
`

const TopTicket = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #FFf;
`

const LeftContainerTicket = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
`

const BusissnesName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`

const Subtitle = styled.h2`
    font-size: 3.2rem;
    color: red;
`

const Slogan = styled.p`
    font-size: 1.6rem;
    color: #333;
`

const RigthContainerTicket = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    & p {   
        font-size: 2.4rem;
        color: #333;
        font-weight: bold;
    }
`

const Middleticket = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #FFf;
    & h3 {
        font-size: 3.2rem;
        color: #333;
    }
`

const BottomTicket = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    background-color: #FFf;
`

const LeftBottomTicket = styled.div`
    display: flex;
    flex: 1.8;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 10px;
    margin-top: 40px;
    & h3 {
        font-size: 2rem;
        color: #333;
        text-align: center;
    }
    & p {
        font-size: 1.8rem;
        color: #333;
    }
`

const MiddleBottomTicket = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;
    margin-top: 10px;
    & p {
        font-size: 2.4rem;
        color: rgb(4, 8, 225);
        fot-weight: bold;
    }
    & p:nth-child(2) {
        font-size: 1.8rem;
        color: #333;
        text-align: center;
    }
`

const RigthBottomTicket = styled.div`
    display: flex;
    flex: 1.8;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
    & h3 {
        width: 100%;
        font-size: 2rem;
        color: #333;
        text-align: center;
    }
`

const NewProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr);
    gap: 10px 20px;
    & p {
        font-size: 1.8rem;
        color: #333;
        padding: 0 5px;
    }
`





function Pdf() {

    const [pedidos, setPedidos] = useState([]);
    const [fecha, setFecha] = useState('');
    const [mostrarPedidos, setMostrarPedidos] = useState(false);
    const [position, setPosition] = useState('');




    useEffect(() => {
        const getPedidos = async () => {
            try {
                const response = await axios.get('https://backendfresh-production.up.railway.app/api/pedidos');


                // Filtrar los pedidos por la fecha seleccionada
                const pedidosFiltrados = response.data.filter(pedido => pedido.fecha.includes(fecha) && (pedido.deletedProducts.length > 0 || pedido.newProducts.length > 0 || pedido.regalo !== '' || pedido.despensasQuantity > 0));

                // Obtener el día de la semana

                setPedidos(pedidosFiltrados);
                console.log(pedidosFiltrados); // Mostrar los datos de los pedidos en la consola

            } catch (error) {
                console.error(error);
            }
        };

        // Llamada inicial para obtener los pedidos
        if (mostrarPedidos) {
            getPedidos();
            console.log('Pedidos que coinciden con la fecha' + fecha + 'seleccionada: ', pedidos);  // Mostrar los datos de los pedidos en la consola
            setPosition('absolute')
        }
    }, [mostrarPedidos]);



    return (
        <Container>
            <RigthContainer>
                <Sidebar />
            </RigthContainer>

            <LeftContainer>
                <Navbar />
                <Top>
                    <Title>PDF</Title>
                    <InputDate type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                    <Button onClick={() => setMostrarPedidos(true)}>
                        Buscar
                    </Button>
                </Top>
                <TicketContainer position={position}>
                    {
                        mostrarPedidos && pedidos.map((pedido, index) => (
                            <Ticket key={pedido._id}>
                                <TopTicket>
                                    <LeftContainerTicket>
                                        <img src={logoFresh} alt="Logo Fresh" style={{ width: '100px', height: '100px' }} />
                                        <BusissnesName>
                                            <Subtitle>
                                                Fresh Market
                                            </Subtitle>
                                            <Slogan>
                                                Tu súper más fresco
                                            </Slogan>
                                        </BusissnesName>
                                    </LeftContainerTicket>
                                    <RigthContainerTicket>
                                        {
                                            pedido.envio ? (
                                                <p>Envío ${pedido.envio} pesos</p>
                                            ) : (
                                                <p>Envío Gratis</p>
                                            )
                                        }
                                        <p>Total ${pedido.total}</p>
                                    </RigthContainerTicket>
                                </TopTicket>
                                <Middleticket>
                                    <h3>{pedido.cliente.split('-')[0].trim()}</h3>

                                </Middleticket>
                                <BottomTicket>
                                    <LeftBottomTicket>
                                        {
                                            pedido.deletedProducts.length > 0 ? (
                                                <h3>NO</h3>
                                            ) : ''
                                        }

                                        {
                                            pedido.deletedProducts.map((producto, index) => (
                                                <p key={index}>{producto.nombre}</p>
                                            ))
                                        }
                                    </LeftBottomTicket>
                                    <MiddleBottomTicket>
                                        <p>{pedido.despensaQuantity} {pedido.despensa}</p>
                                        {
                                            pedido.regalo ? (
                                                <p>Regalo: {pedido.regalo}</p>
                                            ) : (
                                                ''
                                            )
                                        }
                                    </MiddleBottomTicket>
                                    <RigthBottomTicket>
                                        {
                                            pedido.newProducts.length > 0 ? (
                                                <h3>Extras</h3>
                                            ) : ''
                                        }
                                        <NewProductsContainer>
                                            {
                                                pedido.newProducts.map((producto, index) => (
                                                    <p key={index} style={{ fontSize: 12 }}>{producto.title.split(' $')[0].trim()}</p>
                                                ))
                                            }
                                        </NewProductsContainer>
                                    </RigthBottomTicket>
                                </BottomTicket>
                            </Ticket>
                        ))
                    }

                </TicketContainer>



            </LeftContainer>
        </Container>
    )
}

export default Pdf