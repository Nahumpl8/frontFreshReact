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
  @media (max-width: 768px) {
    display: none;
  }
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

const SingleProducto = () => {
  const [producto, setProducto] = useState({});
  const [edit, setEdit] = useState(false);
  const [textButton, setTextButton] = useState('Editar');
  const productoId = window.location.pathname.split('/')[2];

  const editproducto = () => {
    setEdit(!edit);
    if (edit) {
      setTextButton('Editar');
    } else {
      setTextButton('Guardar');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProducto({ ...producto, [name]: value });
  };

  const guardarCambios = async () => {
    try {
      const response = await fetch(`https://backendfresh-production.up.railway.app/api/products/${productoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
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
    const getproducto = async () => {
      try {
        const response = await fetch(`https://backendfresh-production.up.railway.app/api/products/find/${productoId}`);
        const data = await response.json();
        setProducto(data);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };
    getproducto();
  }, [productoId]);

  return (
    <Container>
      <RigthContainer>
        <SideBar />
      </RigthContainer>

      <LeftContainer>
        <Navbar />
        <MainInfoContainer>
          <Top>
            <Title>Detalles del producto</Title>
            <Link to="/productos">
              <Button>Regresar</Button>
            </Link>
          </Top>

          <Middle>
            {/*Mostrar la data para poder editarla si es necesario*/}
            {producto && (
              <Left>
                <DataContainer>
                  <h2>Nombre:</h2>
                  {edit ? (
                    <input
                      type="text"
                      name="title"
                      value={producto.title ? producto.title.split('-')[0].trim() : 'Nombre del cliente' || 'Nombre del cliente'}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span>{producto.title ? producto.title.split('-')[0].trim() : 'Nombre del cliente' }</span>
                  )}
                </DataContainer>
                <DataContainer>
                  <h2>Precio:</h2>
                  {edit ? (
                    <input
                      type="number"
                      name="price"
                      value={producto.price}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span>{producto.price}</span>
                  )}
                </DataContainer>
                <DataContainer>
                  <h2>Descripcion:</h2>
                  {edit ? (
                    <input
                      type="text"
                      name="description"
                      value={producto.desc}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span>{producto.desc}</span>
                  )}
                </DataContainer>
                <DataContainer>
                  <h2>Unidad en gramos o pieza:</h2>
                  {edit ? (
                    <input type="number" name="minUnit" value={producto.minUnit} onChange={handleInputChange} />
                  ) : (
                    <span>{producto.minUnit}</span>
                  )}
                </DataContainer>
                <DataContainer>
                  <h2>Unidad pieza o kg:</h2>
                  {edit ? (
                    <input type="text" name="unit" value={ producto.unit ? producto.unit : 'unidad'} onChange={handleInputChange} />
                  ) : (
                    producto.unit ? <span>{producto.unit}</span> : <span>Sin unidad</span>
                  )}
                </DataContainer>
                <ButtonEditar onClick={edit ? guardarCambios : editproducto}>{textButton}</ButtonEditar>
              </Left>
            )}
          </Middle>
        </MainInfoContainer>
      </LeftContainer>
    </Container>
  );
};

export default SingleProducto;
