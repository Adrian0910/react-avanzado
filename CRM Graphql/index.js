//? Server Apollo conf here
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema.graphql');
const resolvers = require('./db/resolvers');

// Server
const server = new ApolloServer({ 
    typeDefs, 
    resolvers
});

// run server
server.listen().then( ({ url }) => {
    console.log(`Servidor listo en la URL ${url}`);
});
