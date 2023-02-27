import React from "react";
import { View, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'

import {
  Container,
  ButtonPost
} from './styles'

export default function Home(){
  return(
    <Container>
      <Text>Tela Home</Text>

      <ButtonPost activeOpacity={0.8}>
        <Feather 
          name="edit-2"
          color="#FFF"
          size={25}
        />
      </ButtonPost>
    </Container>
  )
}

