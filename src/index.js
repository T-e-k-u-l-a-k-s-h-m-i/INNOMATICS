// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this line
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import './styles/App.css'; // Ensure your CSS file exists

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
