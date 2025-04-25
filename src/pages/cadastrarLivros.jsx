import React, { useState } from 'react';
import axios from 'axios';

function CadastrarLivros() {
    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [tema, setTema] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post('https://apilivrariareact.onrender.com/livros', {
            nome,
            autor,
            tema,
          });
          alert('Livro adicionado com sucesso!');
          setNome('');
          setAutor('');
          setTema('');
        } catch (err) {
          console.error('Erro ao adicionar livro:', err);
        }
      };
    
    return (
        <>
            <div class="container col-4 mt-5 formulario">
                <form onSubmit={handleSubmit} action="">
                    <div class="form-floating mb-3">
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} id="nomeLivro" class="form-control" />
                        <label for="nomeLivro">Nome do livro</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} id="autorLivro" class="form-control" />
                        <label for="autorLivro">Autor do livro</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" value={tema} onChange={(e) => setTema(e.target.value)} id="temaLivro" class="form-control" />
                        <label for="temaLivro">Tema do livro</label>
                    </div>
                    <button class="btn btn-primary center rounded-pill p-2 ps-3 pe-3 fw-bold" id="cadastrarLivro" type="submit">Cadastrar livro</button>
                </form>
            </div>

            <div class="container col-4 mt-5 text-center">
                <h1 class="fw-bold func">Modo de uso</h1>
                <img src="../imgs/criar.png" alt="" class="mx-auto d-block mb-4 mt-4" width="80px" />
                <p>Digite o nome, autor e tema do livro, e aperte o botão de Cadastrar livro.</p>
            </div>
        </>
    )
}

export default CadastrarLivros