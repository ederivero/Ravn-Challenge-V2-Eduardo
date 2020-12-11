const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const PeopleAPI = require('./datasources/people');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    personAPI: new PeopleAPI()
  })
});
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});