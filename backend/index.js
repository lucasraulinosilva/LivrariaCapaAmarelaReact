const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qwe456123', 
  database: 'teste_react' 
});

db.connect((err) => {
  if (err) {
    console.log('Erro na conexão com MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

app.get('/livros', (req, res) => {
  db.query('SELECT * FROM livros', (err, results) => {
    if (err) return res.status(500).json(err);
    return res.json(results);
  });
});

app.post('/livros', (req, res) => {
  const { nome, autor, tema } = req.body;
  const sql = 'INSERT INTO livros (nome, autor, tema) VALUES (?, ?, ?)';
  db.query(sql, [nome, autor, tema], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, nome, autor, tema });
  });
});

app.put('/livros/:id', (req, res) => {
  const { id } = req.params;
  const { nome, autor, tema } = req.body;
  const sql = 'UPDATE livros SET nome = ?, autor = ?, tema = ? WHERE id = ?';
  db.query(sql, [nome, autor, tema, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id, nome, autor, tema });
  });
});

app.delete('/livros/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM livros WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Livro deletado com sucesso' });
  });
});

app.listen(3001, () => {
  console.log('Servidor backend rodando na porta 3001');
});
