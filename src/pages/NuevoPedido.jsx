import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import Navbar from '../components/Navbar';
import PedidosNuevo from '../components/PedidosNuevo';

const Container = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: #EAE9E3;
`;

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
`;

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
`;

const NuevoPedido = () => {
    const [pedidoGuardado, setPedidoGuardado] = useState(null);

    const guardarPedido = (pedido) => {
        setPedidoGuardado(pedido);
    };

    return (
        <Container>
            <RigthContainer>
                <SideBar /> 
            </RigthContainer>
            
            <LeftContainer>
                <Navbar />
                <PedidosNuevo guardarPedido={guardarPedido} />
                {/* Aquí podrías agregar un componente para mostrar el pedido guardado */}
            </LeftContainer>
        </Container>
    );
};

export default NuevoPedido;
