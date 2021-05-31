const express = require('express');
const UsuarioModel = require('./usuario');
const bodyParser = require('body-parser');
const data = require("./data.json");
const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




// POST - Criar usuário //
app.post("/clients", async function (req, res) {
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
app.get("/clients", async function (req, res) {
  const usuarios = await UsuarioModel.find();
  res.json(usuarios);
});


// GET - Buscar usuário pelo id //
app.get("/clients/:id", async function (req, res) {
  try {
    const usuarios = await new UsuarioModel.findById(req.params.id);
    return res.json(usuarios);
  } catch (error) {
    return res.status(400).send({ error: "usuario não existe !" });
  }
});


// PUT - Alterar um(1) item
app.put("/clients/:id", async function (req, res) {
  try {
    const usuarios = await UsuarioModel.findByIdAndUpdate(req.params.id);
    return res.json(usuarios);
  } catch (error) {
    return res.status(400).send({ mensage: "não alterado" });
  }
});

console.log("Server ON!")

// DELETE - Deletar usuário passando o ID //
app.delete("/clients/:id", async function (req, res) {
  try {
    const { id } = req.params;
    await UsuarioModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({ mensage: "Deletado" });
  } catch (error) {
    return res.status(400).send({ mensage: "Não deletado" });
  }
}
);

app.listen(3000, function () {
  console.log("Server ON!");
});