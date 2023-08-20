import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.js';
import '@quasar/extras/ionicons-v4/ionicons-v4.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { MessageProvider } from './MessageContext';

import './assets/scss/base.scss';

const client = new ApolloClient({
  uri: 'http://localhost:3306/graphql',
  cache: new InMemoryCache(),
});

// Create a root instance and render the app
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MessageProvider>
        <App />
      </MessageProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

