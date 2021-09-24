//? Server Apollo conf here
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const conectarDB = require('./config/db');

// Conectar a la base de datos
conectarDB();

// Server
const server = new ApolloServer({ 
    typeDefs, 
    resolvers
});

// run server
server.listen().then( ({ url }) => {
    console.log(`Servidor listo en la URL ${url}`);
});
