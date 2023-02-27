import React, { useState, useContext } from "react";
import { View, Text, Alert } from 'react-native'

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

export default function Login(){
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

  function handleSignIn(){
    if(email === '' || password === ''){
      alert('Preencha todos os campos')
      return;
    }
    // fazer loguin do usuario
  }

  function handleSignUp(){
    if(name === '' || email === '' || password === ''){
      alert('Preencha todos os campos')
      return;
    }

    //cadastrar o usuario na aplicação
  }


  if(login){
    return(
      <Container>
  
        <Title>
          Dev<Text style={{color: '#E52246'}}>Post</Text>
        </Title>
  
        <Input 
          placeholder="seuemail@teste.com"
          value={email}
          onChangeText={(text) => setemail(text)}
        />
  
        <Input 
          placeholder="*****"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      
        <Button onPress={handleSignIn}>
          <ButtonText>Acessar</ButtonText>
        </Button>
  
        <SignUpButton onPress={toggleLogin}>
          <SignUpText>Criar uma conta</SignUpText>
        </SignUpButton>
      </Container>
    )  
  }

  return(
    <Container>

      <Title>
        Dev<Text style={{color: '#E52246'}}>Post</Text>
      </Title>

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
      />
    
      <Button onPress={handleSignUp}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <SignUpButton onPress={toggleLogin}>
        <SignUpText>Ja tenho uma conta</SignUpText>
      </SignUpButton>
    </Container>
  )
}

