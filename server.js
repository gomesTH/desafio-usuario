const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json());


// POST - Criar usuário //
app.post("/clients", function(req, res){
  const 
        { 
          nome,
          nascimento,
          idade,
          cpf,
          cep,
          endereco
          

        } = req.body;

   res.json({ nome, nascimento, idade, cpf, cep, endereco});     

});


// GET - Listar todos usuários //
app.get("/clients", function(req, res){ 
  res.json(data);
});


// GET - Buscar usuário pelo id //
app.get("/clients/:id", function(req, res) { 
  const { id } = req.params
  const client = data.find(cli => cli.id == id);

  res.json(client);
});


// PUT - Alterar um(1) item
app.put("/clients/:id", function(req, res){
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

   
  const { nome } = req.body;
  const { nascimento } = req.body;
  const { idade } = req.body;
  const { cpf } = req.body;
  const { cep } = req.body;
  const { endereco } = req.body;


  client.nome = nome;

  client.nascimento = nascimento;

  client.idade = idade;

  client.cpf = cpf;

  client.cep = cep;

  client.endereco = endereco;
  

  res.json(client);
});


// DELETE - Deletar usuário passando o ID //
app.delete("/clients/:id", function(req, res){
  const { id } =req.params;
  const clientsFiltered = data.filter(client => client.id != id);

  res.json(clientsFiltered);
});



app.listen(3000, function(){
  console.log("Server ON!");
});