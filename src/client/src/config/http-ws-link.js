import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const httpLink = new HttpLink();

const wsLink = new WebSocketLink({
  uri: "ws://localhost:5000/subscriptions",
  options: {
    reconnect: true
  }
});

const httpWsLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);

    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export default httpWsLink;
