import express from "express";
import { createServer } from "http";
import path from "path";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { execute, subscribe } from "graphql";

import schema from "./src/graphql/schema";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema
  })
);

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const ws = createServer(app);

ws.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);

  SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe
    },
    {
      server: ws,
      path: "/subscriptions"
    }
  );
});
