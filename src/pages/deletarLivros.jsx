import React, { useState } from 'react';
import axios from 'axios';

function DeletarLivros() {
    const [id, setId] = useState(''); // Estado para armazenar o ID do livro
    const [status, setStatus] = useState(''); // Para exibir mensagens de sucesso ou erro
  
    const handleDeletar = () => {
      if (!id) {
        setStatus('Por favor, forneça um ID válido!');
        return;
      }
  
      if (window.confirm('Tem certeza que deseja deletar este livro?')) {
        axios.delete(`https://livrariacapaamarelareact.onrender.com/${id}`)
          .then((response) => {
            setStatus('Livro deletado com sucesso!');
            setId('');  // Limpa o campo de ID após a exclusão
          })
          .catch((err) => {
            setStatus('Erro ao deletar livro!');
            console.error('Erro ao deletar livro:', err);
          });
      }
    };
      
    return (
        <>
            <div class="container col-4 mt-5 formulario">
                <form onsubmit="return false" action="">
                    <div class="form-floating mb-3">
                        <input type="text" value={id} onChange={(e) => setId(e.target.value)} id="idLivro" class="form-control" />
                        <label for="idLivro">Id do livro</label>
                    </div>
                    <button class="btn btn-primary center rounded-pill p-2 ps-3 pe-3 fw-bold" id="deletarLivro" onClick={handleDeletar}>Deletar livro</button>
                </form>
            </div>

            <div class="container col-4 mt-5 text-center">
                <h1 class="fw-bold func">Modo de uso</h1>
                <img src="../imgs/excluir.png" alt="" class="mx-auto d-block mb-4 mt-4" width="80px" />
                <p>Digite o id do livro, e aperte o botão de Deletar livro, caso não saiba o id clique <a href="/listarLivros">aqui</a>.</p>
            </div>
        </>
    )
}

export default DeletarLivros