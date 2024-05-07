import React from 'react'
import styled from 'styled-components'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #EAE9E3;
    gap: 20px;
    -webkit-box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    -moz-box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3);
    border-radius: 10px;
    padding: 20px;
`
const Title = styled.h1`
    font-size: 2rem;
    color: #33333370;
`

function Chart({aspect, title}) {
    const data = [
        {name: '1-7 Abril', total: 4000},
        {name: '8-14 Abril', total: 3500},
        {name: '15-21 Abril', total: 2400},
        {name: '22-28 Abril', total: 4560},
        {name: '29-30 Abril', total: 4387},
        {name: '1-7 Mayo', total: 2954},
    ];
  return (
    <Container>
        <Title>
            {title}
        </Title>
        <ResponsiveContainer width='100%' aspect={aspect}>
            <AreaChart
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" style={{stroke:'lightgray'}}/>
            <XAxis dataKey="name" stroke='gray'/>
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    </Container>
  )
}

export default Chart