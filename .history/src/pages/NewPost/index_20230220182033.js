import React, { useState, useLayoutEffect, useContext } from "react";
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { AuthContext } from '../../Contexts/auth'

import {
  Container,
  Input,
  Button,
  ButtonText
} from './styles'

export default function NewPost(){
  const {user} = useContext(AuthContext)

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

    let avatarUrl = null;

    try{
      let response = await storage().ref('users').child(user?.uid).getDownloadURL();
      avatarUrl = response;
      
    }catch(err){
      avatarUrl = null;
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

