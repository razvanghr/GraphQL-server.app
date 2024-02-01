const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const ClientType = require("../schema/client.graphql");

const Client = require("../model/Client");

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

module.exports = ProjectType;
