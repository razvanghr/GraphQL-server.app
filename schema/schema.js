const RootQuery = require("./rootQuery.graphql");
const MutationQuery = require("./mutationQuery.graphql");

const { GraphQLSchema } = require("graphql");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: MutationQuery,
});
