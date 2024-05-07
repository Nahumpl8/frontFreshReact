import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import Chart from '../components/Chart'
import TableComponent from '../components/TableComponent'

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

const MainInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: 20px;
    padding: 20px;
` 

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: 20px;
    padding: 20px;
    
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: start;
    gap: 20px;
    font-size: 24px;
    font-weight: 200;
    color: #333;
    padding: 20px;
    border-radius: 10px;
    -webkit-box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    -moz-box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    position: relative;
`

const EditButton = styled.button`
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: #FFD700;
    color: #333;
    border: none;
    padding: 5px;
    border-radius: 0px 10px 0px 0px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    transition: all 0.3s ease;
    &:hover{
        background-color: #333;
        color: #FFD700;
    }
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    align-items: center;
    justify-content: start;
    gap: 20px;
`
const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
`

const Circle = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #FFD700;
`


const Title = styled.h1`
    font-size: 1.8rem;
    color: #333;
`


const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: 20px;
`

const Details = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 20px;
    width: 100%;
`

const DetailItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;
    width: 100%;
`

const DetailTitle = styled.h2`
    font-size: 1.4rem;
    color: #333;
`

const DetailValue = styled.p`
    font-size: 1.2rem;
    color: #333;
`

const Single = () => {
  return (
    <Container>
        <RigthContainer>
          <SideBar/> 
        </RigthContainer>
        
        <LeftContainer>
          <Navbar/>
          <MainInfoContainer>
            <Top>
              
              <Left>
                Información
                <EditButton>
                  Editar
                </EditButton>
                <ImageContainer>
                  <Circle>

                  </Circle>
                </ImageContainer>
                <Title>
                  Nahum Pérez
                </Title>
                <Details>
                  <DetailItem>
                    <DetailTitle>
                      Dirección
                    </DetailTitle>
                    <DetailValue>
                      Calle 123, Colonia X, Ciudad Y
                    </DetailValue>
                    <DetailTitle>
                      Teléfono
                    </DetailTitle>
                    <DetailValue>
                      771 123 45 67
                    </DetailValue>
                    <DetailTitle>
                      Link Gps
                    </DetailTitle>
                    <DetailValue>
                      <a href="https://www.google.com/maps/place/20.673777, -103.405360">Ver en Google Maps</a>
                    </DetailValue>
                    <DetailTitle>
                      Compras Totales
                    </DetailTitle>
                    <DetailValue>
                      $ 5,450.00
                    </DetailValue>
                  </DetailItem>
                </Details>

              </Left>
              <Right>
                <Chart aspect={3 / 2} title='Dinero gastado las últimas 8 semanas'/>
              </Right>
            </Top>
            <Bottom>
              <TableComponent title='Últimas compras del cliente'/>
            </Bottom>
          </MainInfoContainer>
        </LeftContainer>
    </Container>
  )
}

export default Single