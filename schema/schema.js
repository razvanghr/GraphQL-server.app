const RootQuery = require("../schema/rootQuery.graphql");
const MutationQuery = require("../schema/mutationQuery.graphql");

const { GraphQLSchema } = require("graphql");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: MutationQuery,
});
