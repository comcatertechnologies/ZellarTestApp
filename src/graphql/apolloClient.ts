import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from '@apollo/client/link/http';
import awsconfig from './aws-exports'; 

const httpLink = createHttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint, 
  headers: {
    'x-api-key': awsconfig.aws_appsync_apiKey, 
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
