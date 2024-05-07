import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import MainHome from '../components/MainHome'
import Navbar from '../components/Navbar'
import LatestTransactions from '../components/LatestTransactions'

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
    @media (max-width: 768px) {
      diplay:none;
    }
`




const Home = () => {
  return (
    <Container>
        <RigthContainer>
          <SideBar/> 
        </RigthContainer>
        
        <LeftContainer>
          <Navbar/>
          <MainHome/>
          <LatestTransactions/>
        </LeftContainer>
    </Container>
  )
}

export default Home
