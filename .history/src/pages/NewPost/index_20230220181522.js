import React, { useState, useLayoutEffect } from "react";
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

import {
  Container,
  Input,
  Button,
  ButtonText
} from './styles'

export default function NewPost(){
  const navigation = useNavigation();
  const [post, setPost] = useState('');

  useLayoutEffect(() => {

    const options = navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => handlePost()}>
          <ButtonText>Compartilhar</ButtonText>
        </Button>
      )
    })

  }, [navigation, post])

  async function handlePost(){
    if(post === ''){
      alert('Post contem conteúdo inválido')
      return;
    }
  }

  return(
    <Container>
      <Input 
        placeholder="O que está acontecendo?"
        value={post}
        onChangeText={(text) => setPost(text) }
        autoCorrect={false}
        multiline={true}
        placeholderTextColor="#DDD"
        maxLength={500}
      />
    </Container>
  )
}

