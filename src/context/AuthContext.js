import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const mockUsers = []; // Mock user database

  const register = (email, password, username) => {
    const existingUser = mockUsers.find((user) => user.email === email);
    if (existingUser) {
      throw new Error("Email already registered");
    }
    mockUsers.push({ email, password, username });
    return true;
  };

  const login = (username) => {
    const user = mockUsers.find((user) => user.username === username);
    if (user) {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
