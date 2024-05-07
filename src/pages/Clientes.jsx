import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'

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
        display:none;
    }
`

const SearchContainer = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    min-height: 100vh;
    width: 100%;
    gap: 20px;
`

const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    color: #333;
`

const Input = styled.input`
    width: 50%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 50px;
    font-size: 1rem;
    color: #333;
    outline: none;
`

const ClientOptions = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 50%;
`

const ClienteOption = styled.li`
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s;
    &:hover {
        background-color: #555;
    }
`

const DataContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 20px;
    padding: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftDataContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 40px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 20px;
    position: relative;
    & p {
        font-size: 1.6rem;
        font-weight: 800;
        color: #333;
    }
    & span {
        font-size: 1.4rem;
        font-weight: 500;
        color: #333;
    }
`

const InfoCliente = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    width: 100%;
    & input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 50px;
        font-size: 1rem;
        color: #333;
        outline: none;
        width: 300px;
        max-width: 300px;
    }
`

const RigthDataContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 20px;
`

const Button = styled.button`
    padding: 10px 20px;
    border: 1px solid #333;
    border-radius: 50px;
    background-color: #ffe762;
    color: #333;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 500;
    transition: all 0.3s;
    &:hover {
        background-color: transparent;
    }
`

const Label = styled.label`
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
`


const EditButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 0px 20px 0px 0px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 500;
    transition: all 0.3s;
    &:hover {
        background-color: transparent;
        color: #333;
    }
`

const EditInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;
`

const PedidosArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 20px;
`


const PedidoArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    width: 30%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const PedidosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        flex-wrap: nowrap;
    }
`

const FormAddCliente = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    & input {
      width: 100%;
    }
`





function Clientes() {

  const [cliente, setCliente] = useState([])
  const [inputSearch, setInputSearch] = useState('')
  const [clienteFiltrado, setClienteFiltrado] = useState([])
  const [editAction, setEditAction] = useState(false)
  const [textEdit, setTextEdit] = useState('Editar')
  const [pedidos, setPedidos] = useState([])
  const [nuevoCliente, setNuevoCliente] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    gpsLink: ''
  });


  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get('https://backendfresh-production.up.railway.app/api/clientes');
        setCliente(response.data); // Establecer los clientes en el estado
      } catch (error) {
        console.error('Error al obtener clientes:', error);
      }
    };

    fetchClientes();
  }, [inputSearch, nuevoCliente]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get('https://backendfresh-production.up.railway.app/api/pedidos');
        //filtrar los pedidos que incluyen el nombre del cliente y el telefono
        const pedidosCliente = response.data.filter(pedido => pedido.cliente.includes(cliente.nombre) || pedido.telefono.includes(cliente.telefono));
        setPedidos(pedidosCliente); // Establecer los pedidos en el estado

      } catch (error) {
        console.error('Error al obtener pedidos:', error);
      }
    };

    fetchPedidos();
  }, [clienteFiltrado]);




  const handleClienteSelect = (e) => {
    const inputName = e.target.value.toLowerCase();
    setInputSearch(inputName); // Actualizar el estado del input de búsqueda
    if (inputName.length >= 3) {
      const clienteSeleccionado = cliente.filter(cliente => cliente.nombre.toLowerCase().includes(inputName));
      setClienteFiltrado(clienteSeleccionado);
    } else {
      setClienteFiltrado([]);
    }
  }

  const handleCliente = (clienteSeleccionado) => {
    setCliente(clienteSeleccionado);
    setClienteFiltrado([]);
  };

  const handleEdit = () => {
    setEditAction(!editAction);
    if (editAction) {
      setTextEdit('Editar');
    } else {
      setTextEdit('Guardar');
    }
  }

  const handleChange = (e) => {
    setNuevoCliente({
      ...nuevoCliente,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backendfresh-production.up.railway.app/api/clientes/new', nuevoCliente);
      console.log('Cliente agregado:', response.data);
      // Limpiar el formulario después de agregar el cliente
      setNuevoCliente({
        nombre: '',
        direccion: '',
        telefono: '',
        gpsLink: ''
      });
      alert('Cliente agregado correctamente.');
    } catch (error) {
      console.error('Error al agregar el cliente:', error);
      alert('Ocurrió un error al agregar el cliente. Por favor, inténtalo de nuevo.');
    }
  };

  //funcion para editar un cliente

  const handleEditCliente = async (e) => {
    e.preventDefault();
    // Validar que los campos no estén vacíos o sean diferentes a los originales
    if (cliente.nombre === '' || cliente.direccion === '' || cliente.telefono === '' ) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    try {
      const response = await axios.put(`https://backendfresh-production.up.railway.app/api/clientes/${cliente._id}`, cliente);
      console.log('Cliente actualizado:', response.data);
      alert('Cliente actualizado correctamente.');
      setEditAction(false);
      setTextEdit('Editar');
    }
    catch (error) {
      console.error('Error al actualizar el cliente:', error);
      alert('Ocurrió un error al actualizar el cliente. Por favor, inténtalo de nuevo.');
    }

  }
  


  return (
    <Container>
      <RigthContainer>
        <SideBar />
      </RigthContainer>

      <SearchContainer>
        <Navbar />
        <h1>Clientes Fresh Market</h1>
        <Title>Elige el cliente</Title>
        <Input placeholder="Busca un cliente..." value={inputSearch} onChange={handleClienteSelect} />
        {clienteFiltrado.length > 0 && (
          <ClientOptions>
            {clienteFiltrado.map((cliente, index) => (
              <ClienteOption key={index} onClick={() => handleCliente(cliente)}>
                {cliente.nombre}
              </ClienteOption>
            ))}
          </ClientOptions>
        )}

        <DataContainer>
          <LeftDataContainer>
            <Title>Información del cliente</Title>
            {
              clienteFiltrado ? (
                <InfoCliente>
                  {
                    editAction ? (
                      <EditInput>
                        <Label>
                          Nombre
                        </Label>
                        <Input value={cliente?.nombre || ''} onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })} />
                      </EditInput>
                    ) : (
                      <p>Nombre: <span>{cliente.nombre}</span></p>
                    )
                  }
                  {
                    editAction ? (
                      <EditInput>
                        <Label>
                          Dirección
                        </Label>
                        <Input value={cliente?.direccion || ''} onChange={(e) => setCliente({ ...cliente, direccion: e.target.value })} />
                      </EditInput>
                    ) : (
                      <p>Dirección: <span>{cliente.direccion}</span></p>
                    )
                  }
                  {
                    editAction ? (
                      <EditInput>
                        <Label>
                          Teléfono
                        </Label>
                        <Input value={cliente?.telefono || ''} onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })} />
                      </EditInput>
                    ) : (
                      <p>Teléfono: <span>{cliente.telefono}</span></p>
                    )
                  }
                  {
                    editAction ? (
                      <EditInput>
                        <Label>
                          GpsLink
                        </Label>
                        <Input value={cliente?.gpsLink || ''} onChange={(e) => setCliente({ ...cliente, gpsLink: e.target.value })} />
                      </EditInput>
                    ) : (
                      <p>GpsLink: <span>{cliente.gpsLink}</span></p>
                    )
                  }

                </InfoCliente>
              ) : (
                <p>Selecciona un cliente</p>
              )
            }
            <EditButton onClick={editAction ? 
              handleEditCliente : handleEdit
            }>
              {textEdit}
            </EditButton>
          </LeftDataContainer>
          <RigthDataContainer>
            <Title>Añadir un cliente nuevo</Title>
            <FormAddCliente onSubmit={handleSubmit}>
              <Input placeholder="Nombre" name="nombre" value={nuevoCliente.nombre} onChange={handleChange} />
              <Input placeholder="Dirección" name="direccion" value={nuevoCliente.direccion} onChange={handleChange} />
              <Input placeholder="Teléfono" name="telefono" value={nuevoCliente.telefono} onChange={handleChange} />
              <Input placeholder="Link de GPS" name="gpsLink" value={nuevoCliente.gpsLink} onChange={handleChange} />
              <Button type="submit">Agregar cliente</Button>
            </FormAddCliente>
          </RigthDataContainer>
        </DataContainer>
        <PedidosArea>
          <Title>Pedidos del cliente</Title>
          <h2>Numero total de pedidos {pedidos.length > 0 ? pedidos.length : 0}</h2>
          <h2>Total gastado ${
            pedidos.length > 0 ?
              pedidos.reduce((acc, pedido) => acc + pedido.total, 0) :
              0
          
          } </h2>
          <PedidosContainer>
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
          </PedidosContainer>
        </PedidosArea>
      </SearchContainer>
    </Container>
  )
}

export default Clientes