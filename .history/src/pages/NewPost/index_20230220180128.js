import React, { useState } from "react";
import { View, Text } from 'react-native'

import {
  Container,
  Input,
  Button,
  ButtonText
} from './styles'

export default function NewPost(){
  const [post, setPost] = useState('');

  return(
    <Container>
      <Input 
        placeholder="O que está acontecendo?"
        value={post}
        onChangeText={(text) => setPost(text) }
        autoCorrect={false}
        multiline={true}
        placeholderTextColor="#DDD"
        maxLength={300}
      />
    </Container>
  )
}

