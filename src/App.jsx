import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Home from './pages/home.jsx'
import ListarLivros from './pages/listarLivros.jsx'
import AtualizarLivros from './pages/atualizarLivros.jsx'
import DeletarLivros from './pages/deletarLivros.jsx'
import CadastrarLivros from './pages/cadastrarLivros.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container-fluid p-0 m-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listarLivros" element={<ListarLivros />} />
        <Route path="/atualizarLivros" element={<AtualizarLivros />} />
        <Route path="/deletarLivros" element={<DeletarLivros />} />
        <Route path="/cadastrarLivros" element={<CadastrarLivros />} />
      </Routes>
    </div>
  )

}

export default App
