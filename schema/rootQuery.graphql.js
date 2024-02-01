const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const Client = require("../model/Client");
const Project = require("../model/Project");

const ClientType = require("../schema/client.graphql");
const ProjectType = require("../schema/project.graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // Clients --------------
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },

    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },

    client_email: {
      type: ClientType,
      args: { email: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parent, args) {
        return Client.findOne({ email: args.email });
      },
    },

    // Projects -----------------------

    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },

    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },
  },
});

module.exports = RootQuery;
