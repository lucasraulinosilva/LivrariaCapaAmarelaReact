import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function AtualizarLivros() {
    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [tema, setTema] = useState('');
    const [id, setId] = useState('');
    const [livroEncontrado, setLivroEncontrado] = useState(false);
    const navigate = useNavigate();

    const handleBuscar = async () => {
        if (!id) {
          alert('Por favor, forneça um ID válido!');
          return;
        }
    
        try {
          const response = await axios.get(`https://livrariacapaamarelareact.onrender.com/${id}`);
          setNome(response.data.nome);
          setAutor(response.data.autor);
          setTema(response.data.tema);
          setLivroEncontrado(true);  // O livro foi encontrado, podemos editar
        } catch (err) {
          alert('Livro não encontrado!');
          setLivroEncontrado(false);
          console.error('Erro ao buscar livro:', err);
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!nome || !autor || !tema) {
          alert('Por favor, preencha todos os campos!');
          return;
        }
    
        try {
          await axios.put(`https://apilivrariareact.onrender.com/livros${id}`, {
            nome,
            autor,
            tema,
          });
          alert('Livro atualizado com sucesso!');
          navigate('/listarLivros');  // Redireciona para a lista de livros após sucesso
        } catch (err) {
          console.error('Erro ao editar livro:', err);
        }
      };

    return (
        <>
            <div class="container col-4 mt-5 formulario">
                <form onSubmit={handleSubmit} action="">
                    <div class="form-floating mb-3">
                        <input type="text" value={id} onChange={(e) => setId(e.target.value)} id="idLivro" class="form-control" />
                        <label for="idLivro">Id do livro</label>
                    </div>
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
                    <button class="btn btn-primary center rounded-pill p-2 ps-3 pe-3 fw-bold" id="atualizarLivro" type='submit'>Atualizar livro</button>
                </form>
            </div>

            <div class="container col-4 mt-5 text-center">
                <h1 class="fw-bold func">Modo de uso</h1>
                <img src="../imgs/atualizar.png" alt="" class="mx-auto d-block mb-4 mt-4" width="80px" />
                <p>Digite as informações a serem alteradas do livro, o id não pode ser alterado, e aperte o botão de Deletar livro, caso não saiba o id clique <a href="/listarLivros">aqui</a>.</p>
            </div>
        </>
    )
}

export default AtualizarLivros