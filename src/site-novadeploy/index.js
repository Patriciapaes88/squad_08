const express = require('express');
const helloDevOps = require('./helloDevOps');

const app = express();

app.get('/', (req, res) => {
  res.send(helloDevOps());
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
