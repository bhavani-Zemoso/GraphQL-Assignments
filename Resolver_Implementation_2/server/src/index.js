require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const {typeDefs, dateScalar, urlScalar} = require('./schema');
const {Query} = require('./resolvers/Query');
const {Tweet} = require('./resolvers/Tweet');
const {Mutation} = require('./resolvers/Mutation');
const { db } = require("./db");

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Tweet,
        Mutation,
        Date: dateScalar,
        Url: urlScalar
    },
    context: {
        db
    },
});

server.listen().then(({url}) => {
    console.log(`Server is running. Listening on port 4000`)
});