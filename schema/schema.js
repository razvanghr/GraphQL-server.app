// Moongose models

const Project = require("../model/Project");
const Client = require("../model/Client");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

// Client Type

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },

    email: {
      type: GraphQLString,
    },

    phone: {
      type: GraphQLString,
    },
  }),
});

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
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

// RootQuery

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

const MutationQuery = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add Client

    addClinet: {
      type: ClientType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });

        return client.save();
      },
    },

    // Delete Client

    deleteClinet: {
      type: ClientType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Client.findByIdAndDelete(args.id);
      },
    },

    // Add Project

    addProject: {
      type: ProjectType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatus",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
        clientId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const project = new Project({
          title: args.title,
          description: args.description,
          status: args.status,
          clientId: args.clientId,
        });

        return project.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: MutationQuery,
});
