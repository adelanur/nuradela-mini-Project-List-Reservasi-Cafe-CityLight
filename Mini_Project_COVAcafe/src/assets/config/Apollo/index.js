import { split, HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: "https://amusing-goldfish-84.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "zynEQjiZGn9lws2pf8J9co1JVq8hFQgXACsF0VSXQlhnDruVehzIODCwzDWNbyqi",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://amusing-goldfish-84.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "zynEQjiZGn9lws2pf8J9co1JVq8hFQgXACsF0VSXQlhnDruVehzIODCwzDWNbyqi",
      },
    },
  })
);

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

// ...code from the above example goes here...

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
