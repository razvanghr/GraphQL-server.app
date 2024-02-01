const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const database = require("./connection/dbConnection");
const schema = require("./schema/schema");

const app = express();

// Connect to MongoDb
database.connection();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(8080, () => {
  console.log("App running on port 8080");
});
