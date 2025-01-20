import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './src/graphql/apolloClient';
import UserFilterScreen from './src/screens/UserFilterScreen';


const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserFilterScreen />
    </ApolloProvider>


  );
};

export default App;
