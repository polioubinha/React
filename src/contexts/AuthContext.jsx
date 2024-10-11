import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(); 

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
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


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext; 
