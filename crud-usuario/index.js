const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simulação de banco de dados em memória
let usuarios = [];
let nextId = 1;

// [GET] Listar todos os usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// [GET] Obter um usuario pelo ID
app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(p => p.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).json({ mensagem: 'usuario não encontrado' });
  res.json(usuario);
});

// [POST] Criar um novo usuario
app.post('/usuarios', (req, res) => {
  const { nome, email, nivelFidelidade } = req.body;
  if (!nome || email == null || nivelFidelidade == null) {
    return res.status(400).json({ mensagem: 'Dados inválidos' });
  }
  const usuario = { id: nextId++, nome, email, nivelFidelidade };
  usuarios.push(usuario);
  res.status(201).json(usuario);
});

// [PUT] Atualizar um usuario existente
app.put('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(p => p.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).json({ mensagem: 'usuario não encontrado' });

  const { nome, email, nivelFidelidade } = req.body;
  if (!nome || email == null || nivelFidelidade == null) {
    return res.status(400).json({ mensagem: 'Dados inválidos' });
  }
  usuario.nome = nome;
  usuario.email = email;
  usuario.nivelFidelidade = nivelFidelidade;
  res.json(usuario);
});

// [DELETE] Remover um usuario
app.delete('/usuarios/:id', (req, res) => {
  const index = usuarios.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ mensagem: 'usuario não encontrado' });
  usuarios.splice(index, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`API de usuarios rodando em http://localhost:${port}`);
});