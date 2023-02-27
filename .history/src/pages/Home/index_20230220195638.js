import React, { useState, useContext, useCallback } from "react";
import { Text } from 'react-native'

import { useNavigation, useFocusEffect } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import Header from "../../Components/Header";

import { AuthContext } from "../../Contexts/auth";
import firestore from '@react-native-firebase/firestore'


import {
  Container,
  ButtonPost,
  ListPosts
} from './styles'


export default function Home(){
  const { user } = useContext(AuthContext);

  const navigation = useNavigation();
  const [posts, setPosts] = useState([])

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      function fetchPosts(){
        firestore().collection('posts')
        .orderBy('created', 'desc')
        .limit(5)
        .get()
        .then((snapshot) => {

          if(isActive){
            setPosts([]);
            const postList = [];

            snapshot.docs.map( u => {
              postList.push({
                ...u.data(),
                id: u.id
              })
            })

            setPosts(postList);

          }

        })
      }

      fetchPosts();

      return () => {
        isActive = false;
      }

    }, [])
  )

  return(
    <Container>
      <Header />

      <ListPosts 
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

