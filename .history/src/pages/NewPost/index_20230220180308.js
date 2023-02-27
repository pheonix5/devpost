import React, { useState, useLayoutEffect } from "react";
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Input,
  Button,
  ButtonText
} from './styles'

export default function NewPost(){
  const [post, setPost] = useState('');

  useLayoutEffect(() => {



  }, [])

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

