import listar from '../assets/listar.png'
import criar from '../assets/criar.png'
import excluir from '../assets/excluir.png'
import atualizar from '../assets/atualizar.png'
import principal from '../assets/pasta.png'
import livro from '../assets/undraw_books_wxzz.svg'

function Home() {
    return (
        <>

            <div class="container-fluid p-5 bloco1">
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-5">
                        <h1 class="fs-1 fw-bold">Livraria Capa Amarela, site feito para testar as funcionalidades de uma REST API feita com Spring Boot</h1>
                        <a href="https://github.com/lucasraulinosilva/ApiLivraria" target="_blank"><button class="btn btn-lg mt-4 vejaMais fs-2 fw-bold rounded-pill p-3 ps-3 pe-3">Saiba Mais</button></a>
                    </div>
                    <div class="col-5">
                        <img src={livro} alt="" class="mx-auto d-block" width="500px" />
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>

            <div class="container col-9 mt-5">
                <h1 class="fs-1 fw-bold text-center func">Funcionalidades</h1>
                <div class="container-fluid row text-center mt-5">
                    <div class="col-3 mt-5">
                        <img src={listar} alt="" class="mx-auto d-block mb-4" width="100px" />
                        <h2 class="fs-2 fw-bold">Listar livros</h2>
                        <p class="fs-5">Funcionalidade de listagem e pesquisa de todos os livros disponíveis na API</p>
                    </div>
                    <div class="col-3 mt-5">
                        <img src={criar} alt="" class="mx-auto d-block mb-4" width="100px" />
                        <h2 class="fs-2 fw-bold">Cadastrar livros</h2>
                        <p class="fs-5">Funcionalidade de cadastro de livros na API</p>
                    </div>
                    <div class="col-3 mt-5">
                        <img src={excluir} alt="" class="mx-auto d-block mb-4" width="100px" />
                        <h2 class="fs-2 fw-bold">Deletar livros</h2>
                        <p class="fs-5">Funcionalidade de deletar livros disponível na API</p>
                    </div>
                    <div class="col-3 mt-5">
                        <img src={atualizar} alt="" class="mx-auto d-block mb-4" width="100px" />
                        <h2 class="fs-2 fw-bold">Atualizar livros</h2>
                        <p class="fs-5">Funcionalidade de atualizar livros disponível na API</p>
                    </div>
                </div>
            </div>

            <div class="container-fluid p-0 bloco2 d-flex justify-content-center">
                <div class="row p-5 container">
                    <div class="col-6">
                        <img src={principal} alt="" class="mx-auto d-block" width="300px" />
                    </div>
                    <div class="col-6">
                        <h2 class="fw-bold fs-2 func2">API REST criada inteiramente com Spring Boot</h2>
                        <p class="fs-5">Possui orientação a objeto, conexão com o Microsoft Azure, e está hospedada no Render, o que permite interações com várias linguagens e trabalhos, como
                            análise de dados com python.</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home