// src/contexts/AuthContext.jsx
import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(); // Asegúrate de que esta línea esté aquí

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    // Simulando autenticación
    if (email === "test@test.com" && password === "password") {
      setIsAuthenticated(true);
    }
  };

  return (
    <AuthContext.Provider value={{ login, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Asegúrate de exportar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider'); // Proporciona un mensaje claro si se usa fuera del proveedor
  }
  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext; // Exporta el contexto si es necesario
