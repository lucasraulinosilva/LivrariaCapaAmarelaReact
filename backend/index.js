const express = require('express');
import sql from 'mssql';
const cors = require('cors');

const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: 'bancosql.mysql.database.azure.com',
  user: process.env.user,
  password: process.env.senha, 
  port: 3306,
  database: 'livraria',
  ssl: {
    rejectUnauthorized: true,
  },
});

const pool = new sql.ConnectionPool(db);
const poolConnect = pool.connect();

pool.on('error', err => {
  console.error('Erro no pool de conexão:', err);
});

router.get('/', async (req, res) => {
  try {
    await poolConnect;
    const result = await new sql.Request().query('SELECT * FROM Livros');
    res.json(result.recordset);
  } catch (err) {
    console.error('Erro ao listar livros:', err);
    res.status(500).send('Erro ao listar livros');
  }
});

router.post('/', async (req, res) => {
  const { nome, autor, tema } = req.body;
  try {
    await poolConnect;
    const request = new sql.Request();
    request.input('nome', sql.VarChar, nome);
    request.input('autor', sql.VarChar, autor);
    request.input('tema', sql.VarChar, tema);
    await request.query('INSERT INTO Livros (nome, autor, tema) VALUES (@nome, @autor, @tema)');
    res.status(201).send('Livro criado com sucesso!');
  } catch (err) {
    console.error('Erro ao criar livro:', err);
    res.status(500).send('Erro ao criar livro');
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, autor, tema } = req.body;
  try {
    await poolConnect;
    const request = new sql.Request();
    request.input('id', sql.Int, parseInt(id));
    request.input('nome', sql.VarChar, nome);
    request.input('autor', sql.VarChar, autor);
    request.input('tema', sql.VarChar, tema);
    await request.query('UPDATE Livros SET nome = @nome, autor = @autor, tema = @tema WHERE id = @id');
    res.send('Livro atualizado com sucesso!');
  } catch (err) {
    console.error('Erro ao atualizar livro:', err);
    res.status(500).send('Erro ao atualizar livro');
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await poolConnect;
    const request = new sql.Request();
    request.input('id', sql.Int, parseInt(id));
    await request.query('DELETE FROM Livros WHERE id = @id');
    res.send('Livro deletado com sucesso!');
  } catch (err) {
    console.error('Erro ao deletar livro:', err);
    res.status(500).send('Erro ao deletar livro');
  }
});

export default router;
