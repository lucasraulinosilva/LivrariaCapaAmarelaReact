import { useState } from 'react'
import './App.css'
import livro from './assets/open-book.png'
import { Link } from 'react-router-dom';

function Navbar() {
    const [count, setCount] = useState(0)

    return (
        <>
            <nav className="navbar bg-body-terciary p-3">
                <div className="container-fluid nav ms-5">
                    <ul className="nav nav-underline d-flex align-items-center">
                        <nav className="navbar navbar-light bg-light icone">
                            <img src={livro} alt="" width="40px" />
                        </nav>
                        <li className="nav-item">
                            <h1 className="fs-6"><Link to="/">Home</Link></h1>
                        </li>
                        <li className="nav-item">
                            <h1 className="fs-6"><Link to="/listarLivros">Listar livros</Link></h1>
                        </li>
                        <li className="nav-item">
                            <h1 className="fs-6"><Link to="/cadastrarLivros">Cadastrar livros</Link></h1>
                        </li>
                        <li className="nav-item">
                            <h1 className="fs-6"><Link to="/deletarLivros">Deletar livro</Link></h1>
                        </li>
                        <li className="nav-item">
                            <h1 className="fs-6"><Link to="/atualizarLivros">Atualizar livro</Link></h1>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar