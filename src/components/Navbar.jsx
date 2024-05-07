import React, { useState } from 'react';
import styled from 'styled-components';
import logoFresh from '../../public/logoFresh.png';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EggAltOutlinedIcon from '@mui/icons-material/EggAltOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    padding: 20px;
    background-color: #EAE9E3;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`;

const ImgContainer = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    img {
        width: 100%;
    }
`;

const Menu = styled.ul`
    display: ${props => props.display};
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    list-style: none;
`;

const MenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    background-color: #FFE862;
    color: #17161B;
    font-size: 1.8rem;
    margin-bottom: 10px;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 50px;
    border: 1px solid transparent;
`;

const ResponsiveMenu = styled.div`
    @media (max-width: 768px) {
        position: absolute;
        top: 100px;
        left: 0;
        right: 0;
        background-color: #EAE9E3;
        padding: 20px;
        z-index: 999;
    }
`;

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 3.2rem;
    color: #333;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const display = isOpen ? 'flex' : 'none';



    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <Left>
                <ImgContainer onClick={handleClick}>
                    <img src={logoFresh} alt="logo" />
                </ImgContainer>
            </Left>
            <ResponsiveMenu>
                <Menu display={display}>
                    <Link to="/pedidos" style={{ textDecoration: 'none', minWidth: '100%' }}>
                        <MenuItem>
                            <EditNoteOutlinedIcon style={{ marginRight: '10px', fontSize: '3.2rem', color: '#17161B' }} />
                            Pedidos
                        </MenuItem>
                    </Link>
                    <Link to="/pedidos/nuevopedido" style={{ textDecoration: 'none', minWidth: '100%' }}>
                        <MenuItem>
                            <EditNoteOutlinedIcon style={{ marginRight: '10px', fontSize: '3.2rem', color: '#17161B' }} />
                            Nuevo Pedido
                        </MenuItem>
                    </Link>
                    <Link to="/pedidos/pdf" style={{ textDecoration: 'none', minWidth: '100%' }}>
                        <MenuItem>
                            <PictureAsPdfOutlinedIcon style={{ marginRight: '10px', fontSize: '3.2rem', color: '#17161B' }} />
                            PDFs
                        </MenuItem>
                    </Link>
                    <Link to="/clientes" style={{ textDecoration: 'none', minWidth: '100%' }}>
                        <MenuItem>
                            <AccountCircleOutlinedIcon style={{ marginRight: '10px', fontSize: '3.2rem', color: '#17161B' }} />
                            Clientes
                        </MenuItem>
                    </Link>
                    <Link to="/productos" style={{ textDecoration: 'none', minWidth: '100%' }}>
                        <MenuItem>
                            <EggAltOutlinedIcon style={{ marginRight: '10px', fontSize: '3.2rem', color: '#17161B' }} />
                            Productos
                        </MenuItem>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none', minWidth: '100%' }}>
                        <MenuItem>
                            <QueryStatsOutlinedIcon style={{ marginRight: '10px', fontSize: '3.2rem', color: '#17161B' }} />
                            Estadísticas
                        </MenuItem>
                    </Link>
                </Menu>
            </ResponsiveMenu>
            <Center>
                <Title>Fresh Market</Title>
            </Center>
            <Right>
                <h2>Admin</h2>
            </Right>
        </Container>
    );
}
export default Navbar;
