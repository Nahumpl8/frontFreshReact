import React from 'react'
import styled from 'styled-components'
import TableComponent from './TableComponent'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
const Title = styled.h1`
    font-size: 2rem;
    color: #333;
`

function LatestTransactions() {
  return (
    <Container>
        <TableComponent title='Últimas ventas'/>
    </Container>
  )
}

export default LatestTransactions