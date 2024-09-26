import React, { createContext, useState, useContext, useEffect } from 'react';

export const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  // Inicializa el token en true si es la primera carga de la app
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem('token');
    return storedToken === null ? true : storedToken === 'true';
  });

  const login = () => {
    setToken(true);
    localStorage.setItem('token', 'true');
    console.log("Login ejecutado, token es true");
  };

  const logout = () => {
    setToken(false);
    localStorage.setItem('token', 'false');
    console.log("Logout ejecutado, token es false");
  };

  useEffect(() => {
    console.log("Token actual:", token)
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;