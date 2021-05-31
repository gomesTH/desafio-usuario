const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb+srv://cadastro:cadastro@cluster0.qf8op.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;



let UsuarioModel = mongoose.model
  ('usuario', mongoose.Schema(
    {
      nome: {
        type: String
      },
      nascimento: {
        type: String
      },
      idade: {
        type: Number
      },
      cpf: {
        type: String
      },
      cep: {
        type: String
      },
      endereco: {
        type: String
      },
    }));


module.exports = UsuarioModel;


