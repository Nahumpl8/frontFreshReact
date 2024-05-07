import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import EggAltOutlinedIcon from '@mui/icons-material/EggAltOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { Link } from 'react-router-dom'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start  ;
    width: 100%;
    height: 100%;
    background-color: #EAE9E3;
    padding: 20px;
    gap: 20px;
    border-right: 1px solid rgba(0,0,0,0.1);
`


const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.1);

`
const Title = styled.h1`
    font-size: 3.2rem;
    color: #333;
    margin-bottom: 10px;
`
const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`
const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    list-style: none;

`
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
    transition: all 0.3s ease;
    &:hover{
        background-color: #EAE9E3;
        border: 1px solid #17161B;
    }
`
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`
const ColorOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    border-top: 1px solid rgba(0,0,0,0.1);

`
const ColorOption = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${props => props.color};
    border-radius: 50%;
    margin: 10px;
    cursor: pointer;
    border: 0.5px solid #17161B;
`

const Sidebar = () => {
    return (
      <Container>
         <Top>
            <Title>
                Pedidos Fresh
            </Title>
            
         </Top>
         
         <Center>
            <Menu>
                <Link to="/pedidos" style={{textDecoration:'none', minWidth:'100%'}}>
                    <MenuItem>
                        <EditNoteOutlinedIcon style={{marginRight: '10px', fontSize: '3.2rem', color: '#17161B'}}/>
                        Pedidos
                    </MenuItem>
                </Link>
                <Link to="/pedidos/nuevopedido" style={{textDecoration:'none', minWidth:'100%'}}>
                    <MenuItem>
                        <EditNoteOutlinedIcon style={{marginRight: '10px', fontSize: '3.2rem', color: '#17161B'}}/>
                        Nuevo Pedido
                    </MenuItem>
                </Link>
                <Link to="/pedidos/pdf" style={{textDecoration:'none', minWidth:'100%'}}>
                    <MenuItem>
                        <PictureAsPdfOutlinedIcon style={{marginRight: '10px', fontSize: '3.2rem', color: '#17161B'}}/>
                        PDFs
                    </MenuItem>
                </Link>
                <Link to="/clientes" style={{textDecoration:'none', minWidth:'100%'}}>
                    <MenuItem>
                        <AccountCircleOutlinedIcon style={{marginRight: '10px', fontSize: '3.2rem', color: '#17161B'}}/>
                        Clientes
                    </MenuItem>
                </Link>
                <Link to="/productos" style={{textDecoration:'none', minWidth:'100%'}}>
                    <MenuItem>
                        <EggAltOutlinedIcon style={{marginRight: '10px', fontSize: '3.2rem', color: '#17161B'}}/>
                        Productos
                    </MenuItem>
                </Link>
                <Link to="/" style={{textDecoration:'none', minWidth:'100%'}}>
                    <MenuItem>
                        <QueryStatsOutlinedIcon style={{marginRight: '10px', fontSize: '3.2rem', color: '#17161B'}}/>
                        Estadísticas
                    </MenuItem>
                </Link>
                

            </Menu>
         </Center>
         
         <Bottom>
            
            <ColorOptions>
                <ColorOption color="#f0f0f0" />
                <ColorOption color="#333" />
                
            </ColorOptions>
         </Bottom>

      </Container>
    )
  }

export default Sidebar