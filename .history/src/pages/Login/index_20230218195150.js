import React, { useState } from "react";
import { View, Text } from 'react-native'

import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpText
} from './styles'

export default function Login(){
  const [login, setLogin] = useState(false)


  function toggleLogin(){
    setLogin(!login)
  }


  if(login){
    return(
      <Container>
  
        <Title>
          Dev<Text style={{color: '#E52246'}}>Post</Text>
        </Title>
  
        <Input 
          placeholder="seuemail@teste.com"
        />
  
        <Input 
          placeholder="*****"
        />
      
        <Button>
          <ButtonText>Acessar</ButtonText>
        </Button>
  
        <SignUpButton>
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
      />

      <Input 
        placeholder="seuemail@teste.com"
      />

      <Input 
        placeholder="*****"
      />
    
      <Button>
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <SignUpButton>
        <SignUpText>Ja tenho uma conta</SignUpText>
      </SignUpButton>
    </Container>
  )
}

