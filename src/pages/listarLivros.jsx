import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListarLivros() {
    const [livros, setLivros] = useState([]);

    $(document).ready(function() {
        $("#pesquisarFilme").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#livros .col-4").filter(function() {
                $(this).toggle($(this).text()
                .toLowerCase().indexOf(value) > -1)
            });
        });
    });

    useEffect(() => {
        axios.get('http://localhost:3001/livros')
            .then((res) => {
                setLivros(res.data);
            })
            .catch((err) => {
                console.error('Erro ao buscar livros:', err);
            });
    }, []);
    return (
        <>

            <div class="container col-6 mt-5">
                <input type="text" class="form-control mt-2 mb-2" placeholder="Digite o nome do filme" id="pesquisarFilme" />
                <div class="row" id="livros">
                    {livros.map((livro) => (
                        <div className="col-4">
                            <div className="card mt-2 mb-2">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{livro.nome}</h5>
                                    <p><span class="fw-bold">Id: </span> {livro.id} </p>
                                    <p><span class="fw-bold">Autor: </span> {livro.autor} </p>  
                                    <p><span class="fw-bold">Tema: </span> {livro.tema} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default ListarLivros