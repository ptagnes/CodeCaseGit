
/*import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";*/
import {
    ApolloClient,
    InMemoryCache
  } from '@apollo/client';
const cache = new InMemoryCache();
const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache
})
export default client;