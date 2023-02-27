import React, { useState } from 'react'
import {
  Container,
  Name,
  Header,
  Avatar,
  ContentView,
  Content,
  Actions,
  LikeButton,
  Like,
  TimePost
} from './styles'

import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import firestore from '@react-native-firebase/firestore'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function PostList({ data, userId }){
  const [likesPost, setLikesPost] = useState(data?.likes)

  async function handleLikePost(id, likes){
    const docId = `${userId}_${id}`;

    //Checar se o post ja foi curtido por mim
    const doc = await firestore().collection('likes')
    .doc(docId).get();

    if(doc.exists){
      //quer dizer que ja curtiu esse post, entao precisamos remover o like
      await firestore().collection('posts')
      .doc(id).update({
        likes: likes - 1,
      })

      //Apagando coleção 'likes' de banco quando clica  pra tirar o like
      await firestore().collection('likes').doc(docId)
      .delete()
      .then(() => {
        setLikesPost(likes - 1)
      })

      return;

    }

    // Precisamos da o like no Post
    await firestore().collection('likes')
    .doc(docId).set({
      postId: id,
      userId: userId
    })

    await firestore().collection('posts')
    .doc(id).update({
      likes: likes + 1
    })
    .then(() => {
      setLikesPost(likes + 1)
    })

  }

  function formatTimePost(){
    // console.log(new Date(data.created.seconds * 1000));
    const datePost = new Date(data.created.seconds * 1000);

    return formatDistance(
      new Date(),
      datePost,
      {
        locale: ptBR
      }
    )
  }

  return(
    <Container>
      <Header>

        { data.avatarUrl ? (
          <Avatar 
          source={{ uri: data.avatarUrl }}
        />
        ) : (
          <Avatar 
          source={require('../../assets/avatar.png')}
        />
        ) }

        <Name numberOfLines={1}>
          {data?.autor}
        </Name>
      </Header>

      <ContentView>
        <Content>{data?.content}</Content>
      </ContentView>

      <Actions>
        <LikeButton onPress={ () => handleLikePost(data.id, likesPost) }>
          <Like>
            {likesPost === 0 ? '': likesPost}
          </Like>
          <MaterialCommunityIcons 
            name={likesPost === 0 ? 'heart-plus-outline' : 'cards-heart'}
            size={20}
            color="#E52246"
          />
        </LikeButton>

        <TimePost>
          {formatTimePost()}
        </TimePost>
      </Actions>

    </Container>
  )
}