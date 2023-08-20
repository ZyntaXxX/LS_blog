const Koa = require('koa');
const { ApolloServer } = require('apollo-server-koa');
const { makeExecutableSchema } = require('graphql-tools');
const { resolvers, typeDefs } = require('./schemas');
const PORT = 3306;

async function startApolloServer() {
    const server = new ApolloServer({
        schema: makeExecutableSchema({ typeDefs, resolvers })
    })
    await server.start();

    const app = new Koa();
    server.applyMiddleware({ app });

    app.listen({ port: PORT }, () => {
        console.log(`Server ready at http://localhost:${PORT + server.graphqlPath}`);
    })
}

startApolloServer().catch(error => {
    console.error('Error starting the Apollo Server:', error);
})



