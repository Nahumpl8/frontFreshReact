import React from 'react'
import styled from 'styled-components'
import { dataClientes } from '../dataClientes';
import { useState, useEffect } from 'react';
import { despensaEspecial, despensaPremium, despensaFamiliar, despensaJumbo } from '../despnesasData';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { regalosDespensas } from '../regalosDespensas';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 20px;
`;

const TittleAndButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    @media (max-width: 768px) {
        padding: 0px;
    }
    @media (max-width: 528px) {
        flex-direction: column;
    }
`;

const LeftSide = styled.div`    
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    padding: 20px;
    @media (max-width: 528px) {
        padding: 0px;
    }


`;

const RightSide = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    padding: 20px;
`;

const PedidoDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 20px;
    width: 100%;
    padding: 20px;
    border: 1px solid rgba(0,0,0,0.1);
`;

const Description = styled.p`
    gap: 10px;
    font-size: 1.6rem;
    padding: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    width: 100%;
    height: 100%;
    margin: 0px;
    span {
        font-size: 1.6rem;
    }

`;



const ClientSelect = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 20px;
    width: 100%;
    border-right: 1px solid rgba(0,0,0,0.1);
    padding: 0px 20px;
    @media (max-width: 768px) {
        border-right: none;
    }
    
`;

const Title = styled.h1`
    font-size: 2.4rem;
    padding: 20px 0px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    outline: none;
    border-radius: 20px;
    
`;

const InputDate = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    outline: none;
    border-radius: 20px;
`;

const ClientOptions = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 10px;
    width: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    border-bottom: none;
`;

const ClienteOption = styled.li`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    cursor: pointer;
    list-style: none;
`;

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const SelectDespensa = styled.select`
    width: 70%;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const DespensaQuantity = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    gap: 20px;
    width: 100%;
    margin-bottom: 20px;

`;

const OptionDespensa = styled.option`
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
`;

const Cambios = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    width: 100%;
    height: 1000%;
    padding: 20px;
    gap: 40px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const SelectProducts = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 20px;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;



const NewProducts = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 20px;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;


const SubTitle = styled.h2`
    font-size: 1.8rem;
    padding: 20px 0px;
`;

const ProductInput = styled.select`
    width: 70%;
    padding: 10px 20px;
    border: 1px solid rgba(0,0,0,0.1);
    outline: none;
    border-radius: 20px;
    cursor: pointer;

`;

const OptionProduct = styled.option`
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
`;

const PriceElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
`;

const Price = styled.h3`
    font-size: 2.4rem;
    text-align: center;
`;

const ExtrasButton = styled.button`
    padding: 10px 20px;
    border: 1px solid rgba(0,0,0,0.1);
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    background-color: #FFE862;
    color: black;
    font-size: 1.6rem;
`;

const MoreExtrasButton = styled.button`
    padding: 10px 20px;
    padding: 10px 20px;
    border: 1px solid rgba(0,0,0,0.1);
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    background-color: #FFE862;
    color: black;
    font-size: 1.6rem;
    flex-align: flex-end;
    border-right: none;
`;

const Bottom = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    width: 100%;
    padding: 20px;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;


const Button = styled.button`
    padding: 10px 20px;
    border: 1px solid rgba(0,0,0,0.1);
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    background-color: #FFE862;
    color: black;
    font-size: 1.6rem;
    margin-top: 20px;
`;

const LeftSideBottom = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    padding: 20px;
`;

const RightSideBottom = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    padding: 20px;
`;

const FormAddCliente = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 20px;
    width: 100%;
`;

const DisplayInfoAction = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-size: 2.4rem;
    background-color: #000000;
    color: #fff;
    display: ${props => props.display};
`;


const InputEdit = styled.input`
    width: 20px;
    height: 20px;
    cursor: pointer;
    bordr-radius: 50%;
`;

const TicketEdit = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
`;





function PedidosNuevo({ guardarPedido }) {

    const [cliente, setCliente] = useState({});
    const [selectedDay, setSelectedDay] = useState('');
    const [newProducts, setNewProducts] = useState([]);
    const [productos, setProductos] = useState([]);
    const [inputSearch, setInputSearch] = useState('');
    const [clientesFiltrados, setClientesFiltrados] = useState([]);
    const [costoDespensa, setCostoDespensa] = useState(0);
    const [deletedProducts, setDeletedProducts] = useState([]);
    const [descuentoPorProductosEliminados, setDescuentoPorProductosEliminados] = useState(0);
    const [regalo, setRegalo] = useState('');
    const [despensa, setDespensa] = useState('');
    const [costoNuevoProducto, setCostoNuevoProducto] = useState(0);
    const [showExtras, setShowExtras] = useState(false);
    const [nuevosProductos, setNuevosProductos] = useState([]);
    const [numExtras, setNumExtras] = useState(5);
    const [nuevoCliente, setNuevoCliente] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        gpsLink: ''
    });
    const [infoAction, setInfoAction] = useState('');
    const [display, setDisplay] = useState('none');
    const [envio, setEnvio] = useState(0);
    const [editarPdf, setEditarPdf] = useState(false);
    const [despensasQuantity, setDespensasQuantity] = useState(1);


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


    const [pedido, setPedido] = useState({
        cliente: '',
        direccion: '',
        telefono: '',
        despensa: '',
        despensaQuantity: 1,
        deletedProducts: [],
        newProducts: [],
        total: 0,
        fecha: '',
        envio: '',
        regalo: '',
        nota: '',
        editarPdf: false
    });

    useEffect(() => {
        console.log(pedido);
    }, [pedido]);



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
    }, [nuevoCliente, inputSearch]);


    useEffect(() => {
        const fetchNewProducts = async () => {
            try {
                const response = await axios.get('https://backendfresh-production.up.railway.app/api/products');
                //mostrar productos ordenados alfabeticamente quitando con un split ('de ') y tomando la seguna parte

                const productosOrdenados = response.data.sort((a, b) => {
                    if (a.title.split('de')[1] < b.title.split('de')[1]) {
                        return -1;
                    }
                    if (a.title.split('de')[1] > b.title.split('de')[1]) {
                        return 1;
                    }
                    return 0;
                }
                );
                setNuevosProductos(productosOrdenados);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };
        fetchNewProducts();
    }, [nuevosProductos]);


    const showExtrasInput = () => {
        setShowExtras(!showExtras);
        setNumExtras(5);
    }

    const showMoreExtras = () => {
        setNumExtras(prevNumExtras => prevNumExtras + 3);
    };

    const handleSelect = (e) => {
        const inputName = e.target.value.toLowerCase();
        setInputSearch(inputName); // Actualizar el estado del input de búsqueda
        if (inputName.length >= 3) {
            const clienteSeleccionado = cliente.filter(cliente => cliente.nombre.toLowerCase().includes(inputName));
            setClientesFiltrados(clienteSeleccionado);
        } else {
            setClientesFiltrados([]);
        }
    }

    const handleCliente = (clienteSeleccionado) => {
        setCliente(clienteSeleccionado);
        setClientesFiltrados([]);
        setPedido({
            ...pedido,
            cliente: clienteSeleccionado.nombre,
            direccion: clienteSeleccionado.direccion,
            telefono: clienteSeleccionado.telefono
        });
    };

    const handleDespensaSelect = (e) => {
        const despensaSeleccionada = e.target.value;
        let productos = [];
        let costoDespensa = 0; // Inicializar el costo de la despensa
        console.log(despensaSeleccionada)
        switch (despensaSeleccionada) {
            case '1':
                productos = despensaFamiliar;
                setDespensa('Familiar');
                setPedido({
                    ...pedido,
                    despensa: 'FAMILIAR',
                    total: 250,
                });
                costoDespensa = 250; // Asignar el costo de la despensa familiar
                break;
            case '2':
                productos = despensaJumbo;
                setDespensa('Jumbo');
                setPedido({
                    ...pedido,
                    despensa: 'JUMBO',
                    total: 385,
                });
                costoDespensa = 385; // Asignar el costo de la despensa jumbo
                break;
            case '3':
                productos = despensaEspecial;
                setDespensa('Especial');
                setPedido({
                    ...pedido,
                    despensa: 'ESPECIAL',
                    total:  320,
                });
                costoDespensa = 320; // Asignar el costo de la despensa especial
                break;
            case '4':
                productos = despensaPremium;
                setDespensa('Premium');
                setPedido({
                    ...pedido,
                    despensa: 'PREMIUM',
                    total: 440,
                });
                costoDespensa = 440; // Asignar el costo de la despensa premium
                break;
            case '5':
                setDespensa('Pedido');
                setPedido({
                    ...pedido,
                    despensa: 'PEDIDO',
                });
                costoDespensa = 0; // Asignar el costo de la despensa premium
                break;
            default:
                productos = [];
        }
        setProductos(productos);
        setCostoDespensa(costoDespensa); // Actualizar el costo de la despensa

    };

    useEffect(() => {
        setPedido({
            ...pedido,
            despensaQuantity: despensasQuantity,
            total: costoDespensa * despensasQuantity,
            
        });
        
        console.log(despensasQuantity)
    }, [despensasQuantity]);






    const deletedProduct = (e) => {
        // Obtener el producto seleccionado
        const selectedProduct = productos.find(producto => producto.nombre === e.target.value);
        // Agregar el producto a la lista de productos eliminados
        setDeletedProducts(prevDeletedProducts => [...prevDeletedProducts, selectedProduct]);

        setDescuentoPorProductosEliminados(selectedProduct.precio);

        setPedido({
            ...pedido,
            deletedProducts: [...deletedProducts, selectedProduct],
            total: costoDespensa - selectedProduct.precio
        });
    }

    const addNewProduct = (e) => {
        // Obtener el producto seleccionado
        const selectedNewProduct = nuevosProductos.find(producto => producto.title === e.target.value);
        console.log(selectedNewProduct);
        // Agregar el producto a la lista de nuevos productos
        setNewProducts(prevNewProducts => [...prevNewProducts, selectedNewProduct]);
        // Actualizar el costo del nuevo producto
        setCostoNuevoProducto(selectedNewProduct.price);

        setPedido({
            ...pedido,
            newProducts: [...newProducts, selectedNewProduct],
            total: costoDespensa + selectedNewProduct.price
        });
    }

    useEffect(() => {
        // Calcular el costo total sumando el costo de la despensa y restando el costo de los productos eliminados
        let total = costoDespensa;

        if (deletedProducts.length > 0) {
            total -= descuentoPorProductosEliminados;
        }
        // Actualizar el costo total
        setCostoDespensa(total);
        setPedido({
            ...pedido,
            total: total
        });
    }, [deletedProducts]);

    useEffect(() => {
        // Calcular el costo total sumando el costo de la despensa y el costo de los nuevos productos
        let total = costoDespensa;
        if (newProducts.length > 0) {
            total += costoNuevoProducto;
        }
        // Actualizar el costo total
        if (total < 250 && total > 245) {
            total = 250;
        } else if (total < 385 && total > 380) {
            total = 385;
        } else if (total < 320 && total > 315) {
            total = 320;
        } else if (total < 440 && total > 435) {
            total = 440;
        }
        setCostoDespensa(total);
        setPedido({
            ...pedido,
            total: total
        });
    }, [newProducts]);


    useEffect(() => {
        //añadir la variable regalo al pedido y a la descripcion
        setPedido({
            ...pedido,
            regalo: regalo
        });
    }, [regalo]);


    const getCurrentDate = () => {
        const today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        const year = today.getFullYear();

        if (day < 10) {
            day = '0' + day;
        }

        if (month < 10) {
            month = '0' + month;
        }

        return `${year}-${month}-${day}`;
    }

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const options = { weekday: 'long' };
        const dayOfWeek = new Intl.DateTimeFormat('es-ES', options).format(selectedDate);
        setSelectedDay(dayOfWeek);
        setPedido({
            ...pedido,
            fecha: dayOfWeek + ' ' + e.target.value
        });
    }

    const handleClickReload = () => {
        // Recargar la página
        window.location.reload();
    };


    const enviarPedido = async () => {
        try {
            const response = await axios.post('https://backendfresh-production.up.railway.app/api/pedidos/new', pedido);
            console.log('Pedido enviado:', response.data);
            guardarPedido(response.data); // Enviamos el pedido guardado al componente padre
            // Limpiar el formulario
            setCliente({});
            setDespensa('');
            setProductos([]);
            setDespensasQuantity(1);
            setDeletedProducts([]);
            setNewProducts([]);
            setCostoDespensa(0);
            setShowExtras(false);
            setNumExtras(5);

            setPedido({
                cliente: '',
                direccion: '',
                telefono: '',
                despensa: '',
                despensaQuantity: 1,
                deletedProducts: [],
                newProducts: [],
                total: 0,
                fecha: '',
                envio: '',
                nota: ''
            });

            setInfoAction('Pedido enviado correctamente.');
            setDisplay('flex');

        } catch (error) {
            console.error('Error al enviar el pedido:', error);
        }
    };


    return (
        <Container>
            <TittleAndButton>
                <Title>Nuevo Pedido</Title>
                <Link to="/pedidos">
                    <Button>Ver Pedidos</Button>
                </Link>
            </TittleAndButton>
            <Top>
                <LeftSide>
                    <ClientSelect>
                        <Title>Elige el cliente</Title>
                        <InputDate type='date' placeholder="Día de Entrega" min={getCurrentDate()} onChange={handleDateChange} />
                        <Input placeholder="Busca un cliente..." value={inputSearch} onChange={handleSelect} />
                        {clientesFiltrados.length > 0 && (
                            <ClientOptions>
                                {clientesFiltrados.map((cliente, index) => (
                                    <ClienteOption key={index} onClick={() => handleCliente(cliente)}>
                                        {cliente.nombre}
                                    </ClienteOption>
                                ))}
                            </ClientOptions>
                        )}
                        <Input placeholder="Nombre" value={cliente?.nombre || ''} onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })} />
                        <Input placeholder="Dirección" value={cliente?.direccion || ''} onChange={(e) => setCliente({ ...cliente, direccion: e.target.value })} />
                        <Input placeholder="Teléfono" value={cliente?.telefono || ''} onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })} />
                        <Input placeholder="Link de GPS" value={cliente?.gpsLink || ''} onChange={(e) => setCliente({ ...cliente, gpsLink: e.target.value })} />
                    </ClientSelect>
                </LeftSide>
                <RightSide>
                    {/*Añadir nuevo cliente*/}
                    <Title>Añade un cliente nuevo</Title>
                    <FormAddCliente onSubmit={handleSubmit}>
                        <Input placeholder="Nombre" name="nombre" value={nuevoCliente.nombre} onChange={handleChange} />
                        <Input placeholder="Dirección" name="direccion" value={nuevoCliente.direccion} onChange={handleChange} />
                        <Input placeholder="Teléfono" name="telefono" value={nuevoCliente.telefono} onChange={handleChange} />
                        <Input placeholder="Link de GPS" name="gpsLink" value={nuevoCliente.gpsLink} onChange={handleChange} />
                        <Button type="submit">Agregar cliente</Button>
                    </FormAddCliente>


                </RightSide>
            </Top>
            <Center>
                <Title>¿Cuál es la despensa?</Title>
                <SelectDespensa onChange={handleDespensaSelect}>
                    <OptionDespensa value="">Selecciona una despensa</OptionDespensa>
                    <OptionDespensa value="1">Despensa Familiar</OptionDespensa>
                    <OptionDespensa value="2">Despensa Jumbo</OptionDespensa>
                    <OptionDespensa value="3">Despensa Especial</OptionDespensa>
                    <OptionDespensa value="4">Despensa Premium</OptionDespensa>
                    <OptionDespensa value="5">Pedido</OptionDespensa>
                </SelectDespensa>
                <Title>Cantidad de despensas</Title>
                <DespensaQuantity>
                    <Input placeholder="Cantidad de despensas" type='number' value={despensasQuantity} onChange={(e) => setDespensasQuantity(e.target.value)} style={{width:'20%', textAlign:'center'}} />
                </DespensaQuantity>

                <PriceElement>
                    <SubTitle>Costo total</SubTitle>
                    <Price>${pedido.total}</Price>
                </PriceElement>

                <Cambios>
                    <SelectProducts>
                        <SubTitle>Selecciona los productos a cambiar</SubTitle>
                        <ProductInput onChange={deletedProduct}>
                            <OptionProduct>Elige un producto</OptionProduct>
                            {productos.map((producto) => (
                                <OptionProduct key={producto.id}>
                                    {producto.nombre}
                                </OptionProduct>
                            ))}
                        </ProductInput>
                        <ProductInput onChange={deletedProduct}>
                            <OptionProduct>Elige un producto</OptionProduct>
                            {productos.map((producto) => (
                                <OptionProduct key={producto.id}>
                                    {producto.nombre}
                                </OptionProduct>
                            ))}
                        </ProductInput>
                        <ProductInput onChange={deletedProduct}>
                            <OptionProduct>Elige un producto</OptionProduct>
                            {productos.map((producto) => (
                                <OptionProduct key={producto.id}>
                                    {producto.nombre}
                                </OptionProduct>
                            ))}
                        </ProductInput>

                    </SelectProducts>
                    <NewProducts>
                        <SubTitle>Agrega nuevos productos</SubTitle>
                        <ProductInput onChange={addNewProduct}>
                            <OptionProduct>Elige un producto</OptionProduct>
                            {nuevosProductos.map((producto) => (
                                <OptionProduct key={producto._id}>
                                    {producto.title}
                                </OptionProduct>
                            ))}
                        </ProductInput>
                        <ProductInput onChange={addNewProduct}>
                            <OptionProduct>Elige un producto</OptionProduct>
                            {nuevosProductos.map((producto) => (
                                <OptionProduct key={producto._id}>
                                    {producto.title}
                                </OptionProduct>
                            ))}
                        </ProductInput>
                        <ProductInput onChange={addNewProduct}>
                            <OptionProduct>Elige un producto</OptionProduct>
                            {nuevosProductos.map((producto) => (
                                <OptionProduct key={producto._id}>
                                    {producto.title}
                                </OptionProduct>
                            ))}
                        </ProductInput>
                        <ExtrasButton onClick={showExtrasInput}>
                            ¿EXTRAS?
                        </ExtrasButton>
                        {
                            showExtras ? (
                                <>
                                    {Array.from({ length: numExtras }).map((_, index) => (
                                        <ProductInput key={index} onChange={addNewProduct}>
                                            <OptionProduct>Elige un producto</OptionProduct>
                                            {nuevosProductos.map((producto) => (
                                                <OptionProduct key={producto._id}>{producto.title}
                                                </OptionProduct>
                                            ))}
                                        </ProductInput>
                                    ))}
                                    <MoreExtrasButton onClick={showMoreExtras}>
                                        ¿Más extras?
                                    </MoreExtrasButton>
                                </>
                            ) : ''
                        }
                    </NewProducts>
                </Cambios>
            </Center>
            <Bottom>
                <LeftSideBottom>
                    <PedidoDescription>
                        <Title>Descripción del pedido</Title>
                        <Description>
                            🏆 {cliente && cliente.nombre && cliente.nombre.includes('-') ? cliente.nombre.split('-')[0].trim() : cliente.nombre} - {cliente.direccion}({despensasQuantity} {despensa.toUpperCase()}) {
                                deletedProducts ?
                                    deletedProducts.map((producto) => (
                                        <span key={producto.id}> <span style={{ color: 'red' }}>no</span> {producto.nombre}</span>
                                    )) : ''
                            }  {
                                newProducts.length > 0 ?
                                    <>
                                        <span style={{ color: 'purple' }}> EXTRAS:</span>
                                        {newProducts.map((producto) => (
                                            <span key={producto._id} style={{ color: 'green' }}> {producto.title},</span>
                                        ))}
                                    </> : ''
                            }  {
                                envio ? <span style={{ color: 'blue' }}> + envío: ${envio}</span> : ''
                            }<span style={{ fontWeight: 'bold' }}>  Total $ {pedido.envio ? parseInt(pedido.total) + parseInt(pedido.envio) : pedido.total} </span> {regalo ? <span style={{ color: 'brown' }}> Regalo: {regalo}</span> : ''} <span style={{ color: 'crimson' }}> CEL. {cliente.telefono}</span> <span style={{ color: 'blue' }}>{selectedDay}</span> {
                                cliente.gpsLink ?
                                    <span>gpsLINK: {cliente.gpsLink}</span> : ''
                            } { editarPdf ? <span style={{ color: 'red' }}> **EDITAR PDF**</span> : ''}

                        </Description>
                    </PedidoDescription>
                </LeftSideBottom>
                <RightSideBottom>
                    <Title>Regalo</Title>
                    <SelectDespensa onChange={(e) => setRegalo(e.target.value)}>
                        <OptionDespensa value="">Selecciona un regalo</OptionDespensa>
                        {regalosDespensas.map((regalo) => (
                            <OptionDespensa key={regalo.id} value={regalo.nombre}>{regalo.nombre}</OptionDespensa>
                        ))}
                    </SelectDespensa>
                    <Title>Envío</Title>
                    <Input placeholder="Escribe el costo del envío" value={pedido.envio} onChange={(e) => {
                        setPedido({ ...pedido, envio: e.target.value })
                        setEnvio(e.target.value)
                    }
                    } />
                    <Title>Nota si se requiere</Title>
                    <Input placeholder="Escribe una nota para el pedido" value={pedido.nota} onChange={(e) => setPedido({ ...pedido, nota: e.target.value })} />
                    <Title>Editar PDF</Title>
                    <TicketEdit>
                        <InputEdit type="checkbox" onChange={(e) => {setPedido({ ...pedido, editarPdf: e.target.checked }); setEditarPdf(e.target.checked)}} /> <span style={{ color: 'red', fontSize: 14}}>Hacer ticket manualmente</span>
                    </TicketEdit>
                    <Button onClick={enviarPedido}>Enviar pedido</Button>
                </RightSideBottom>
            </Bottom>
            <DisplayInfoAction display={display} >
                {infoAction}
                <Button onClick={() => { setDisplay('none'); handleClickReload() }} >Envíar otro pedido</Button>
            </DisplayInfoAction>
        </Container>

    );
}

export default PedidosNuevo;

