import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #eae9e3;
`;

const RigthContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 100%;
  width: 100%;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
  padding: 20px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  width: 100%;
  gap: 20px;
`;

const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 20px;
  padding: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  font-size: 1.2rem;
  font-weight: 200;
  color: #333;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  -webkit-box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 5px;
  font-weight: 200;
  color: #333;
  padding: 10px;
  border-radius: 10px;
  & h2 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
  }
  & span {
    font-weight: 200;
    font-size: 1.2rem;
  }
  & p {
    font-weight: 200;
    font-size: 1.2rem;
  }
  & input {
    font-weight: 200;
    font-size: 1.2rem;
    width: 250px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #333;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  background-color: #ffe862;
  border: 1px solid #333;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: transparent;
  }
`;

const ButtonEditar = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  float: right;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  background-color: rgb(4, 4, 116);
  border-radius: 0px 10px 0px 0px;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  &:hover {
    background-color: #5b5bfd;
  }
`;

const SinglePedido = () => {
  const [pedido, setPedido] = useState({});
  const [edit, setEdit] = useState(false);
  const [textButton, setTextButton] = useState('Editar');
  const pedidoId = window.location.pathname.split('/')[2];

  const editPedido = () => {
    setEdit(!edit);
    if (edit) {
      setTextButton('Editar');
    } else {
      setTextButton('Guardar');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPedido({ ...pedido, [name]: value });
  };

  const guardarCambios = async () => {
    try {
      const response = await fetch(`https://backendfresh-production.up.railway.app/api/pedidos/${pedidoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pedido),
      });
      // Aquí puedes manejar la respuesta del servidor si lo deseas
      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      // Una vez que se guardan los cambios, cambia el modo de edición
      setEdit(false);
      setTextButton('Editar');
    } catch (error) {
      console.error('Error al guardar cambios:', error);
    }
  };

  useEffect(() => {
    const getPedido = async () => {
      try {
        const response = await fetch(`https://backendfresh-production.up.railway.app/api/pedidos/find/${pedidoId}`);
        const data = await response.json();
        setPedido(data);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener el pedido:', error);
      }
    };
    getPedido();
  }, [pedidoId]);

  return (
    <Container>
      <RigthContainer>
        <SideBar />
      </RigthContainer>

      <LeftContainer>
        <Navbar />
        <MainInfoContainer>
          <Top>
            <Title>Detalles del pedido</Title>
            <Link to="/pedidos">
              <Button>Regresar</Button>
            </Link>
          </Top>

          <Middle>
            {/*Mostrar la data para poder editarla si es necesario*/}
            {pedido && (
              <Left>
                <DataContainer>
                  <h2>Nombre:</h2>
                  {edit ? (
                    <input
                      type="text"
                      name="cliente"
                      value={pedido.cliente ? pedido.cliente.split('-')[0].trim() : 'Nombre del cliente' || 'Nombre del cliente'}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span>{pedido.cliente ? pedido.cliente.split('-')[0].trim() : 'Nombre del cliente' }</span>
                  )}
                </DataContainer>
                <DataContainer>
                  <h2>Dirección:</h2>
                  {edit ? (
                    <input
                      type="text"
                      name="direccion"
                      value={pedido.direccion}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span>{pedido.direccion}</span>
                  )}
                </DataContainer>
                <DataContainer>
                  <h2>Telefono:</h2>
                  {edit ? (
                    <input type="text" name="telefono" value={pedido.telefono} onChange={handleInputChange} />
                  ) : (
                    <span>{pedido.telefono}</span>
                  )}
                </DataContainer>
                <DataContainer>
                  <h2>Gps Link:</h2>
                  {edit ? (
                    <input type="text" name="gps" value={ pedido.gpsLink ? pedido.gpsLink : 'GpsLink'} onChange={handleInputChange} />
                  ) : (
                    pedido.gpsLink ? <span>{pedido.gpsLink}</span> : <span>Sin link</span>
                  )}
                </DataContainer>
                <DataContainer>
                  <h2>Fecha de entrega:</h2>
                  {edit ? (
                    <input type="date" name="fecha" value={pedido.fecha} onChange={handleInputChange} />
                  ) : (
                    <span>{pedido.fecha}</span>
                  )}
                </DataContainer>
                <DataContainer>
                  <h2>Despensa:</h2>
                  {edit ? (
                    <input type="text" name="despensa" value={pedido.despensa} onChange={handleInputChange} />
                  ) : (
                    <span>{pedido.despensa}</span>
                  )}
                </DataContainer>
                <DataContainer>
                  <h2>Envio:</h2>
                  {edit ? (
                    <input type="text" name="envio" value={pedido.envio ? pedido.envio : 'Sin envío'} onChange={handleInputChange} />
                  ) : (
                    pedido.envio ? <span>{pedido.envio}</span> : <span>Gratis</span>
                  )}
                </DataContainer>
                <DataContainer>
                  <h2>Nota:</h2>
                  {edit ? (
                    <input type="text" name="nota" value={pedido.nota} onChange={handleInputChange} />
                  ) : (
                    pedido.nota ? <span>{pedido.nota}</span> : <span>Sin nota</span>
                  )}
                </DataContainer>
                <DataContainer>
                  <h2>Total:</h2>
                  {edit ? (
                    <input type="text" name="total" value={pedido.total} onChange={handleInputChange} />
                  ) : (
                    <span>${pedido.total}</span>
                  )}
                </DataContainer>
                <ButtonEditar onClick={edit ? guardarCambios : editPedido}>{textButton}</ButtonEditar>
              </Left>
            )}
          </Middle>
        </MainInfoContainer>
      </LeftContainer>
    </Container>
  );
};

export default SinglePedido;
