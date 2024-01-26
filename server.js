/*BANCO DE DADOS ------------------------

import { Pool, Client } from 'pg'

const pool = new Pool({
  user: 'adm',
  host: 'localhost',
  database: 'integrador',
  password: '1234',
  port: 5432,
});
 
console.log(await pool.query('SELECT NOW()'))
 
const client = new Client({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})
 
await client.connect()
 
console.log(await client.query('SELECT NOW()'))
 
await client.end()

*/








/* SERVIDOR ------------------------------- */

const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

// Configuração para servir arquivos estáticos do diretório 'public'
app.use(express.static("public"));

// Rota padrão para redirecionar para a página de login
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/login.html"));
});

// Rota para a página de login
app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/login.html"));
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor executando em http://127.0.0.1:${port}/login.html`);
});


