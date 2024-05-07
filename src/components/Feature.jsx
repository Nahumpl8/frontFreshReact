import React from 'react'
import styled from 'styled-components'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {CircularProgressbarWithChildren} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useState, useEffect } from 'react';
import axios from 'axios';



const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1.5;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    -webkit-box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    -moz-box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    height: 100%;
`
const Top = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const Title = styled.h1`
    font-size: 1.8rem;
    color: #A2A2A4;
`

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
`
const Sales = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
`
const Graphic = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SubTitle = styled.h1`
    font-size: 1.8rem;
    color: #17161B;
`
const Description = styled.p`
    font-size: 1.2rem;
    color: #17161B;
`
const Summary = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`
const Target = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
const ItemResult = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
const Results = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
    gap: 10px;
`
const TitleSummary = styled.h1`
    font-size: 1.4rem;
    color: #A2A2A4;
`
const SubTitleSummary = styled.h1`
    font-size: 1.2rem;
    color: #17161B;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    color: ${props => props.color};

`



function Feature() {

    const [ventasSemana, setVentasSemana] = useState(0)
    const [target, setTarget] = useState(120000)

    useEffect(() => {
        const getVentasSemana = async () => {
            try {
                const res = await axios.get('https://backendfresh-production.up.railway.app/api/pedidos/semana')
                let total = 0
                res.data.forEach(pedido => {
                    total += pedido.total
                })
                setVentasSemana(total)

            } catch (error) {
                console.log(error)
            }
        }
        getVentasSemana()
    }
    ,[])
    


  return (
    
    <Container>
        <Top>
            <Title>
                Ingresos
            </Title>
            <MoreVertOutlinedIcon style={{fontSize: 20, color: '#A2A2A4', marginLeft: 10, cursor: 'pointer'}}/>
        </Top>
        <Bottom>
            <Graphic>
                <CircularProgressbarWithChildren
                    value={((ventasSemana/target)*100).toFixed(0)}
                    text={`${((ventasSemana/target)*100).toFixed(0)}%`}
                    styles={{
                    
                        path: {
                            stroke: '#FFC107'
                        },
                        trail: {
                            stroke: '#E0E0E0'
                        },
                        text: {
                            fill: '#17161B',
                            fontSize: '1.5rem'
                        }

                    }}

                />
            </Graphic>
            <Sales>
                <Title>
                Ventas esta semana
                </Title>
                <SubTitle>
                    ${ventasSemana}
                </SubTitle>
            </Sales>
            <Description>
                Estas son las ventas de hoy
            </Description>
            <Summary>
                <Target>
                    <TitleSummary>
                        Target
                    </TitleSummary>
                    <SubTitleSummary color='green'>
                        $50000
                    </SubTitleSummary>
                </Target>
                <ItemResult>
                    <TitleSummary>
                        Result
                    </TitleSummary>
                    <SubTitleSummary color='green'>
                        $39540
                    </SubTitleSummary>
                </ItemResult>

                <Results>
                    <TitleSummary>
                        Results
                    </TitleSummary>
                    <SubTitleSummary color='green'>
                        <KeyboardArrowDownOutlinedIcon style={{fontSize: 20, color: 'green'}}/>
                        66%
                    </SubTitleSummary>
                </Results>

            </Summary>
        </Bottom>
    </Container>
    )
}

export default Feature