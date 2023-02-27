import React, { useState, createContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({ Children }){
  return(
    <AuthContext.Provider value={{ signed: true }}>
      
    </AuthContext.Provider>
  )
}

export default AuthProvider;
