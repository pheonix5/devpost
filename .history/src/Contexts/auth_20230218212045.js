import React, { useState, createContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState({
    nome: 'Matheus'
  });

  return(
    <AuthContext.Provider value={{ signed: !!user}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
