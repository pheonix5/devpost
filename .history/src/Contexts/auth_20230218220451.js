import React, { useState, createContext } from "react";
import { useNavigation } from '@react-navigation/native'

import auth from '@react-native-firebase/auth'
import firestore from "@react-native-firebase/firestore";

export const AuthContext = createContext({});
const Navigation = useNavigation();

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  async function signUp(email, password, name){
    setLoadingAuth(true);

    await auth().createUserWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;
      await firestore().collection('users')
      .doc(uid).set({
        nome: name,
        createdAt: new Date()
      })
      .then(() => {
        naviga

        setLoadingAuth(false)
        
      })
    })
    .catch((error) => {
      console.log(error);
      setLoadingAuth(false)
    })
  }

  async function signIn(email, password){
    setLoadingAuth(true);

    await auth().signInWithEmailAndPassword(email, password)
    .then(async (value) =>{
      let uid = value.user.uid;

      const userProfile = await firestore().collection('users')
      .doc(uid).get();

      // console.log(userProfile.data().nome);
      let data = {
        uid: uid,
        nome: userProfile.data().nome,
        email: value.user.email
      }

      setUser(data);
      setLoadingAuth(false);
    })
    .catch((error) => {
      console.log(error);
      setLoadingAuth(false);
    })
  }

  return(
    <AuthContext.Provider value={{ signed: !!user, signUp, signIn, loadingAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
