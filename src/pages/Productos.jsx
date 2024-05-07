import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
`

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
`

const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: 20px;
`

const Title = styled.h1`
    font-size: 2.4rem;
    color: #333;
    margin-bottom: 10px;
`

const SearchInput = styled.input`
    width: 50%;
    padding: 10px;
    font-size: 1.6rem;
    border-radius: 50px;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 20px;
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid rgba(0,0,0,0.1);
    font-size: 1.4rem;
    & th {
        background-color: #333;
        color: #fff;
        padding: 10px;
    }
    & td {
        padding: 10px;
        text-align: center;
    }
    & td:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    & input {
        padding: 5px;
        font-size: 1.2rem;
        border-radius: 50px;
        border: 1px solid rgba(0,0,0,0.1);
    }

`

const Button = styled.button`
    padding: 5px 10px;
    font-size: 1.2rem;
    border-radius: 50px;
    border: 1px solid #333;
    background-color: #FFE862;
    color: #17161B;
    cursor: pointer;
    margin-right: 10px;
    &:last-child {
       background-color: rgb(185, 40, 30);
        color: #fff;
    }
`

const SpliceButtons = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: end;
    gap: 10px;
    margin-top: 20px;
    & button {
        padding: 5px 10px;
        font-size: 1.2rem;
        border-radius: 50px;
        border: 1px solid transparent;
        background-color: #333;
        color: #fff;
        cursor: pointer;
    }
`

const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: 20px;
    gap: 20px;
`

const SubmitForm = styled.form`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
`

const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    & label {
        font-size: 1.6rem;
        color: #333;
    }
    & input {
        padding: 10px;
        font-size: 1.6rem;
        border-radius: 50px;
        border: 1px solid rgba(0,0,0,0.1);
        width: 100%;
    }
`

const ButtonForm = styled.button`
    padding: 10px 20px;
    font-size: 1.6rem;
    border-radius: 50px;
    border: 1px solid #333;
    background-color: #FFE862;
    color: #17161B;
    cursor: pointer;
    width: 50%;

`




function Productos() {
    const [productos, setProductos] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredProductos, setFilteredProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [newProducto, setNewProducto] = useState({
        title: '',
        desc: '',
        price: '',
        minUnit: '',
        unit: '',
        img: ''
    });



    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get('https://backendfresh-production.up.railway.app/api/products');
                //filtrar los productos por fecha de creacion

                response.data.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setProductos(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError('Error al cargar los productos');
                setLoading(false);
            }
        };

        fetchProductos();
    }, [newProducto]);







    const handleSearch = (e) => {
        //filtrar los productos por nombre
        setSearch(e.target.value);

    };

    useEffect(() => {
        //buscar productos con acento o sin acento
        setFilteredProductos(
            productos.filter((producto) =>
                producto.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, productos]);


    // Calcular los índices de los productos a mostrar en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProductos = filteredProductos.length > 0 ? filteredProductos.slice(indexOfFirstItem, indexOfLastItem) : productos.slice(indexOfFirstItem, indexOfLastItem);

    // Cambiar a la página anterior
    const paginatePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Cambiar a la página siguiente
    const paginateNext = () => {
        if (indexOfLastItem < productos.length) {
            setCurrentPage(currentPage + 1);
        }
    };


    //añadir nuevo producto

    const addProducto = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://backendfresh-production.up.railway.app/api/products', newProducto);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        //recargar la pagina
        window.location.reload();
    }


    return (
        <Container>
            <RigthContainer>
                <SideBar />
            </RigthContainer>

            <LeftContainer>
                <Navbar />
                <TopContainer>
                    <Title>Busca un producto</Title>
                    <SearchInput
                        type="text"
                        placeholder="Buscar..."

                        value={search}
                        onChange={handleSearch}

                    />
                </TopContainer>
                <MiddleContainer>
                    {loading ? (
                        <p>Cargando productos...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <Table>
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Gramos o pieza</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentProductos.map((producto) => (
                                    <tr key={producto._id}>
                                        <td>{producto.img}</td>
                                        <td>{producto.title}</td>
                                        <td>${producto.price}</td>
                                        <td>{producto.minUnit}{producto.unidad}</td>
                                        <td>
                                            <Link to={`/productos/${producto._id}`}>
                                                <Button style={{ backgroundColor: '#FFE862', color: '#333' }} >Editar</Button>
                                            </Link>
                                            <Button>Eliminar</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                    <SpliceButtons>
                        <button onClick={paginatePrev}>Anterior</button>
                        <button onClick={paginateNext}>Siguiente</button>
                    </SpliceButtons>
                </MiddleContainer>
                <BottomContainer>
                    {/*Crear un nuevo producto */}
                    <Title>Crear un nuevo producto</Title>
                    <SubmitForm>

                        <FormInput>
                            <label htmlFor="title">Nombre:</label>
                            <input type="text" id="title" name="title" onChange={
                                (e) => setNewProducto({ ...newProducto, title: e.target.value })
                            } />
                        </FormInput>
                        <FormInput>
                            <label htmlFor="desc">Descripción:</label>
                            <input type="text" id="desc" name="desc" onChange={
                                (e) => setNewProducto({ ...newProducto, desc: e.target.value })} />
                        </FormInput>
                        <FormInput>
                            <label htmlFor="price">Precio:</label>
                            <input type="number" id="price" name="price" onChange={
                                (e) => setNewProducto({ ...newProducto, price: e.target.value })} />
                        </FormInput>
                        <FormInput>
                            <label htmlFor="minUnit">Gramos o pieza:</label>
                            <input type="text" id="minUnit" name="minUnit" onChange={
                                (e) => setNewProducto({ ...newProducto, minUnit: e.target.value })} />
                        </FormInput>
                        <FormInput>
                            <label htmlFor="unit">Unidad mínima:</label>
                            <input type="text" id="unit" name="unit" onChange={
                                (e) => setNewProducto({ ...newProducto, unit: e.target.value })} />
                        </FormInput>
                        <FormInput>
                            <label htmlFor="img">Imagen:</label>
                            <input type="text" id="img" name="img" onChange={
                                (e) => setNewProducto({ ...newProducto, img: e.target.value })} />
                        </FormInput>

                    </SubmitForm>
                    <ButtonForm onClick={addProducto} >Crear producto</ButtonForm>
                </BottomContainer>
            </LeftContainer>
        </Container>
    );
}

export default Productos