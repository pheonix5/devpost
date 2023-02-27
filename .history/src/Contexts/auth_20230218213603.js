import React, { useState, createContext } from "react";

import auth from '@react-native-firebase/auth'
import firestore from "@react-native-firebase/firestore";

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null);

  async function signUp(email, password, name){
    await auth().createUserWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;
      await firestore().collection('users')
      .doc(uid).set({
        nome: name
      })
    })
  }

  return(
    <AuthContext.Provider value={{ signed: !!user}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
