import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './Context/AuthContext';
import { DishProvider } from './Context/DishContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <DishProvider>
      <App />
      </DishProvider>
    </AuthProvider>
  </React.StrictMode>
);

