import React from 'react'
import styled from 'styled-components'
import Widget from './Widget'
import Chart from './Chart'
import Feature from './Feature'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
`
const Title = styled.h1`
    font-size: 2rem;
    color: #333;
`
const WrapperWinget = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    width: 100%;
    padding: 20px;
    gap: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
`
const WrapperCharts = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    padding: 10px 20px;
    gap: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    
`

const MainHome = () => {
  
  return (
    
    <Container>
      <WrapperWinget>
        <Widget type="usuarios"/>
        <Widget type="pedidosTotales"/>
        <Widget type="ventas"/>
        <Widget type="familires"/>
        <Widget type="especiales"/>
        <Widget type="jumbo"/>
        <Widget type="premium"/>
        <Widget type="pedidos"/>
      </WrapperWinget>
      <WrapperCharts>
        <Feature />
        <Chart aspect={2/1} title='Ingresos útimas semanas'  />
      </WrapperCharts>
    </Container>
  )
}

export default MainHome