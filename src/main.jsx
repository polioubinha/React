// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/AuthContext'; // Asegúrate de tener el contexto correcto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* Asegúrate de envolver tu App con el AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
