import React from 'react'
import styled from 'styled-components'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    -webkit-box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    -moz-box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    height: 100px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    &:hover{
        transform: scale(1.02);
        transition: 0.3s;
        justify-content: space-between;
    }

`
const Left = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`
const Rigth = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    width: 100%;
    gap: 10px;
    
`
const Title = styled.span`
    font-size: 1.6rem;
    color: #A2A2A4;
    font-weight: bold;
`
const Counter = styled.span`
    font-size: 1.4rem;
    color: #1E1E1E;
`
const Link = styled.a`
    font-size: 1.2rem;
    color: #1E1E1E;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px solid #1E1E1E;
`
const Porcentaje = styled.span`
    font-size: 1.4rem;
    color: #1E1E1E;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 5px;
    color: ${props => props.color};
`



function Widget({ type }) {

    let data;

    const [counterClientes, setCounterClientes] = useState(0)
    const [counterPedidosThisWeek, setCounterPedidosThisWeek] = useState(0)
    const [counterVentas, setCounterVentas] = useState(0)
    const [familiaresCounter, setFamiliaresCounter] = useState(0)
    const [especialesCounter, setEspecialesCounter] = useState(0)
    const [jumboCounter, setJumboCounter] = useState(0)
    const [premiumCounter, setPremiumCounter] = useState(0)
    const [pedidosCounter, setPedidosCounter] = useState(0)


    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const res = await axios.get('https://backendfresh-production.up.railway.app/api/clientes')
                setCounterClientes(res.data.length)
            } catch (error) {
                console.log(error)
            }
        }
        fetchClientes();
    }, [])


    //traer pedidos de la ultima semana de la semana actual

    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const res = await axios.get('https://backendfresh-production.up.railway.app/api/pedidos/semana')
                setCounterPedidosThisWeek(res.data.length)
                //contar las ventas de la semana actual
                let ventas = 0;
                res.data.forEach(pedido => {
                    ventas += pedido.total
                });
                setCounterVentas(ventas)

                //contar los familiares
                let familiares = 0;
                res.data.forEach(pedido => {
                    if (pedido.despensa == 'FAMILIAR') {
                        familiares += parseInt(pedido.despensaQuantity)
                    }

                });
                setFamiliaresCounter(familiares)

                let especiales = 0;
                res.data.forEach(pedido => {
                    if (pedido.despensa == 'ESPECIAL') {
                        especiales += parseInt(pedido.despensaQuantity)
                    }

                });
                setEspecialesCounter(especiales)

                let jumbo = 0;
                res.data.forEach(pedido => {
                    if (pedido.despensa == 'JUMBO') {
                        jumbo += parseInt(pedido.despensaQuantity)
                    }

                });
                setJumboCounter(jumbo)

                let premium = 0;
                res.data.forEach(pedido => {
                    if (pedido.despensa == 'PREMIUM') {
                        premium += parseInt(pedido.despensaQuantity)
                    }

                });
                setPremiumCounter(premium)

                let pedidos = 0;
                res.data.forEach(pedido => {
                    if (pedido.despensa == 'PEDIDO') {
                        pedidos += 1
                    }

                });

                setPedidosCounter(pedidos)



            }
            catch (error) {
                console.log(error)
            }
        }
        fetchPedidos();
    }, [])







    switch (type) {
        case 'usuarios':
            data = {
                title: 'CLIENTES',
                isMoney: false,
                counter: counterClientes,
                link: 'Ver mas',
                color: 'green',
            }
            break;
        case 'pedidosTotales':
            data = {
                title: 'PEDIDOS TOTALES',
                isMoney: false,
                counter: counterPedidosThisWeek,
                link: 'Ver mas',
                porcentaje: 13,
                color: 'green',
            }
            break;
        case 'ventas':
            data = {
                title: 'VENTAS',
                isMoney: true,
                counter: counterVentas,
                link: 'Ver mas',
                porcentaje: 13,
                color: 'green',
            }
            break;
        case 'familires':
            data = {
                title: 'FAMILIARES',
                isMoney: false,
                counter: familiaresCounter,
                link: 'Ver mas',
                porcentaje: 13,
                color: 'green',
            }
            break;

        case 'especiales':
            data = {
                title: 'ESPECIALES',
                counter: especialesCounter,
                link: 'Ver mas',
                porcentaje: 13,
                color: 'green'
            }
            break;
        case 'jumbo':
            data = {
                title: 'JUMBO',
                counter: jumboCounter,
                link: 'Ver mas',
                porcentaje: 13,
                color: 'green'
            }
            break;
        case 'premium':
            data = {
                title: 'PREMIUM',
                counter: premiumCounter,
                link: 'Ver mas',
                porcentaje: 13,
                color: 'green'
            }
            break;
        case 'pedidos':
            data = {
                title: 'PEDIDOS',
                counter: pedidosCounter,
                link: 'Ver mas',
                porcentaje: 13,
                color: 'green'
            }
            break;


        default:
            data = {
                title: 'Clientes',
                counter: 21345,
                link: 'Ver mas',
                porcentaje: 13,
                color: 'green'
            }
            break;
    }


    return (
        <Container>
            <Left>
                <Title>
                    {data.title}
                </Title>
                <Counter>
                    {data.isMoney ? '$' : ''} {data.counter}
                </Counter>
                <Link>
                    Ver más
                </Link>
            </Left>
            <Rigth>
                {data.icon}
            </Rigth>
        </Container>
    )
}

export default Widget