import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const httpLink = new HttpLink();

const uri =
  process.env.REACT_APP_ENV === "production"
    ? `ws://${window.location.host}/subscriptions`
    : "ws://localhost:5000/subscriptions";

const wsLink = new WebSocketLink({
  uri,
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
