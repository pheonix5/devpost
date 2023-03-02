import React, { useState, useContext } from "react";
import { View, Text, ActivityIndicator } from 'react-native'

import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpText
} from './styles'

import { AuthContext } from '../../Contexts/auth'

import *as Animatable from 'react-native-animatable'

const TitleAnimatable = Animatable.createAnimatableComponent(Title)

export default function Login(){
  const { signUp, signIn, loadingAuth } = useContext(AuthContext)

  const [login, setLogin] = useState(true)
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");


  function toggleLogin(){
    setLogin(!login)
    setName('')
    setemail('')
    setPassword('')
  }

  async function handleSignIn(){
    if(email === '' || password === ''){
      alert('Preencha todos os campos')
      return;
    }

    signIn(email, password)
  }

  async function handleSignUp(){
    if(name === '' || email === '' || password === ''){
      alert('Preencha todos os campos')
      return;
    }

    await signUp(email, password, name);
  }


  if(login){
    return(
      <Container>
  
        <TitleAnimatable animation="flipInY">
          Dev<Text style={{color: '#E52246'}}>Post</Text>
        </TitleAnimatable>
  
        <Input 
          placeholder="seuemail@teste.com"
          value={email}
          onChangeText={(text) => setemail(text)}
        />
  
        <Input 
          placeholder="*****"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      
        <Button onPress={handleSignIn}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF"/>
          ) : (
            <ButtonText>Acessar</ButtonText>
          )}
        </Button>
  
        <SignUpButton onPress={toggleLogin}>
          <SignUpText>Criar uma conta</SignUpText>
        </SignUpButton>
      </Container>
    )  
  }

  return(
    <Container>

      <TitleAnimatable animation="flipInX">
        Dev<Text style={{color: '#E52246'}}>Post</Text>
      </TitleAnimatable>

      <Input 
        placeholder="Seu nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Input 
        placeholder="seuemail@teste.com"
        value={email}
        onChangeText={(text) => setemail(text)}
      />

      <Input 
        placeholder="*****"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secure={true}
      />
    
      <Button onPress={handleSignUp}>
        {loadingAuth ? (
          <ActivityIndicator size={20} color="#FFF"/>
        ): (
          <ButtonText>Cadastrar</ButtonText>
        )}
      </Button>

      <SignUpButton onPress={toggleLogin}>
        <SignUpText>Ja tenho uma conta</SignUpText>
      </SignUpButton>
    </Container>
  )
}

