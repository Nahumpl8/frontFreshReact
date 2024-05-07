import React from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../dataUsers'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
`

const ActionButtons = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: end;
    align-items: center;
    gap: 10px;
`

const ButtonAction = styled.button`
    padding: 5px;
    border-radius: 5px;
    color: #333;
    cursor: pointer;
    font-size: 12px;
    background-color: #f1f1f1;
`

function DataTable() {
    const actionColumn = [
        {
          field: 'actions',
          headerName: 'Acciones',
          width: 160,
          renderCell: (params) => {
            return (
              <ActionButtons>
                <ButtonAction style={{color:'#17161B', backgroundColor:'#FFE862', border: '1px solid #17161B'}}>Editar</ButtonAction>
                <ButtonAction style={{color:'red', backgroundColor:'rgba(220, 20, 60, 0.2)', border: '1px solid red'}}>Eliminar</ButtonAction>
              </ActionButtons>
            );
          },
        },
    ]
      
  return (
    <Container>
        <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            style={{ width: '100%', height: '100%', fontSize: '12px'}}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 8 },
            },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    </Container>
  )
}

export default DataTable