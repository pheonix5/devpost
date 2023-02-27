import React, { useState, createContext } from "react";

import auth from '@react-native-firebase/auth'
import firestore from "@react-native-firebase/firestore";

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null);

  return(
    <AuthContext.Provider value={{ signed: !!user}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
