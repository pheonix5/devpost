import React, { useState, createContext, Children } from "react";

export const AuthContext = createContext({});

function AuthProvider({ Children }){
  return(
    <AuthContext.Provider>
      {Children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
