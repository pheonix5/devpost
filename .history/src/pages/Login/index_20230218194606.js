import React from "react";
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
    </Container>
  )
}

