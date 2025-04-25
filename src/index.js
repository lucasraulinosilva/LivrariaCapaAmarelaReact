// src/api/livroService.js

const API_URL = 'https://livrariacapaamarelareact.onrender.com/livros';

export const getLivros = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro na requisição GET');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Erro ao buscar livros: ' + error.message);
  }
};

export const createLivro = async (livro) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livro)
    });
    if (!response.ok) {
      throw new Error('Erro na requisição POST');
    }
    const result = await response.text();
    return result;
  } catch (error) {
    throw new Error('Erro ao criar livro: ' + error.message);
  }
};

export const updateLivro = async (id, livro) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livro)
    });
    if (!response.ok) {
      throw new Error('Erro na requisição PUT');
    }
    const result = await response.text();
    return result;
  } catch (error) {
    throw new Error('Erro ao atualizar livro: ' + error.message);
  }
};

export const deleteLivro = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Erro na requisição DELETE');
    }
    const result = await response.text();
    return result;
  } catch (error) {
    throw new Error('Erro ao deletar livro: ' + error.message);
  }
};
