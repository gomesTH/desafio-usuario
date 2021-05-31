const express = require('express');
const UsuarioModel = require('./usuario');
const app = express();
const data = require("./data.json");



app.use(express.json());


// POST - Criar usuário //
app.post("/clients", async function(req, res){
  const 
        { 
          nome,
          nascimento,
          idade,
          cpf,
          cep,
          endereco
          

        } = req.body;

       const usuarioModel = new UsuarioModel(
        {
          nome, nascimento, idade, cpf, cep, endereco
       }
       );

       const usuario = await usuarioModel.save({
                   nome, nascimento, idade, cpf, cep, endereco
                });
  
        res.json(usuario);     

});


// GET - Listar todos usuários //
app.get("/clients", async function(req, res){ 
  const usuarios = await UsuarioModel.find();
   res.json(usuarios);
});


// GET - Buscar usuário pelo id //
app.get("/clients/:id", async function(req, res) { 
  const { id } = req.params
  const usuarios = data.find(cli => cli.id == id);
  try {
    const usuario = await UsuarioModel.findById(req.params.id)
    
    return res.send({ usuario });
  } catch (err) {
    
  }

  res.json(usuarios);
});


// PUT - Alterar um(1) item
app.put("/clients/:id", async function(req, res){
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

  console.log("Server ON!")

// DELETE - Deletar usuário passando o ID //
app.delete("/clients/:id", async function(req, res){
    const { id } = req.params;
    const  usuarios = data.filter(client => client.id != id);
  
   await UsuarioModel.findByIdAndRevome(usuario, done) 
        if (err) {
            
        } else {
          done(null, deletedRecord)
        }
    
  
       
      return res.send();
      return res.status(400).send({error: "Error Deleting project" });
    
   }
  
);



app.listen(3000, function(){
  console.log("Server ON!");
});