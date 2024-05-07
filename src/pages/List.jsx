import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import DataTable from '../components/DataTable'
import Sidebar from '../components/SideBar'

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

const List = () => {
  return (
    <Container>
        <RigthContainer>
          <Sidebar/> 
        </RigthContainer>
        
        <LeftContainer>
          <Navbar/>
          <DataTable/>
        </LeftContainer>
    </Container>
  )
}

export default List