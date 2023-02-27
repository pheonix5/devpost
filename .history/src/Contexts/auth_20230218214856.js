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
        nome: name,
        createdAt: new Date()
      })
      .then(() => {
        let data ={
          uid: uid,
          nome: name,
          email: value.user.email
        }
        setUser(data);
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  async function signIn(email, password){
    await auth().signInWithEmailAndPassword(email, password)
    .then(async (value) =>{
      let uid = value.user.uid;

      const userProfile = await firestore().collection('users')
      .doc(uid).get();

      console.log(userProfile.data().nome);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return(
    <AuthContext.Provider value={{ signed: !!user, signUp}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
