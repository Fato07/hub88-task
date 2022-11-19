import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App';
import ReactDOM from 'react-dom/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
);

