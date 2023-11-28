// mongo.js
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://matusame:5QTHsw5xEuJIOILM@cluster0.df36ehn.mongodb.net/?retryWrites=true&w=majority';
// Substitua pela sua URL e nome do banco de dados
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB', err);
  }
}

module.exports = { connectToMongoDB, client };



