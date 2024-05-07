import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import TableComponent from '../components/TableComponent'
import { userInputs, productsInputs, pedidosInputs } from '../formSource'



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


const Title = styled.h1`
    width: 100%;
    font-size: 2rem;
    text-align: start;
    color: #33333377;
    padding: 10px 20px;
`

const Left = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: start;
    gap: 20px;

`

const InputsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 50vh;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 20px;
    padding: 0px 20px;
`

const Input = styled.input`
    width: 20%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #33333330;

`

const Button = styled.button`
    width: 20%;
    padding: 10px;
    border-radius: 20px;
    border: none;
    background-color: #333;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
`

const Rigth = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: start;
    gap: 20px;
`

const Select = styled.select`
    width: 20%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #33333330;
`

function New({inputs, title}) {
  return (
    <Container>
        <RigthContainer>
          <SideBar/> 
        </RigthContainer>
        
        <LeftContainer>
          <Navbar/>
          <Title>{title}</Title>
          <Left>
            <InputsContainer>
              {inputs.map((input, index) => {
                if(input.type === 'select'){
                  return(
                    <Select key={index} name={input.name} placeholder={input.placeholder}>
                      {input.options.map((option, index) => {
                        return(
                          <option key={index} value={option.value}>{option.text}</option>
                        )
                      })}
                    </Select>
                  )
                }else{
                  return(
                    <Input key={index} type={input.type} name={input.name} placeholder={input.placeholder}/>
                  )
                }
              })};
              <Button>Guardar</Button>
            </InputsContainer>
          </Left>
          <Rigth>
            <TableComponent/>
          </Rigth>
        </LeftContainer>
    </Container>
  )
}

export default New