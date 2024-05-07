import { useState } from 'react'
import styled from 'styled-components'
import Home from './pages/Home'
import Login from './pages/Login'
import List from './pages/List'
import Single from './pages/Single'
import New from './pages/New'
import NuevoPedido from './pages/NuevoPedido'
import Pedidos from './pages/Pedidos'
import Clientes from './pages/Clientes'
import Pdf from './pages/Pdf'
import SinglePedido from './pages/SinglePedido'
import Productos from './pages/Productos'
import SingleProducto from './pages/SingleProducto'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { userInputs, productsInputs, pedidosInputs } from './formSource'
;

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=':userid' element={<Single />} />
          <Route path='new' element={<New inputs={userInputs} title='Ingresa un nuevo cliente'/>} />
        </Route>
        <Route path="pedidos">
          <Route index element={<Pedidos />} />
          <Route path=':pedidoid' element={<SinglePedido />} />
          <Route path='nuevopedido' element={<NuevoPedido />} />
          <Route path='pdf' element={<Pdf />} />
        </Route>
        <Route path="clientes">
          <Route index element={<Clientes />} />
        </Route>
        <Route path="productos">
          <Route index element={<Productos />} />
          <Route path=':productoid' element={<SingleProducto />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
