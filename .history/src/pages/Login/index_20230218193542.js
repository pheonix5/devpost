import React from "react";
import { View, Text } from 'react-native'

export default function Login(){
  return(
    <Container>

      <Title>
        Dev<Text style={{color: '#E52246'}}>Posto</Text>
      </Title>

      <Input 
        placeholder="seuemail@teste.com"
      />

      <Input 
        placeholder="seuemail@teste.com"
      />
    
      <Button>
        <ButtonText>Acessar</ButtonText>
      </Button>
    </Container>
  )
}

