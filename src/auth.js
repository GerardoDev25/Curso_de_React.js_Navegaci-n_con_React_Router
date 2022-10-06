import React, { createContext, useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = ({ username }) => {
    setUser({ username });
    navigate('/profile');
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  const auth = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const AuthRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) return <Navigate to="/" />;
  return children;
};

export const useAuth = () => {
  // const auth = useContext(AuthContext);
  // return auth;
  return useContext(AuthContext);
};
