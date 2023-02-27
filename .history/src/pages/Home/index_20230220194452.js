import React, { useState } from "react";
import { Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import Header from "../../Components/Header";


import {
  Container,
  ButtonPost,
  ListPosts
} from './styles'


export default function Home(){
  const navigation = useNavigation();
  const [posts, setPosts] = useState([
    { id: '1', content: 'primeiro post'},
    { id: '2', content: 'segundo post'},
    { id: '3', content: 'terceiro post'}
  ])

  return(
    <Container>
      <Header />

      <listPosts 
        data={posts}
        renderItem={ ({ item }) => ( <Text>TEste</Text> )}
      />

      <ButtonPost
        activeOpacity={0.8}
        onPress={ () => navigation.navigate("NewPost") }
      >
        <Feather 
          name="edit-2"
          color="#FFF"
          size={25}
        />
      </ButtonPost>
    </Container>
  )
}

