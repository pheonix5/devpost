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

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function PostList({ data, userId }){
  const [likesPost, setLikesPost] = useState(data?.likes)



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
        <LikeButton>
          <Like>10</Like>
          <MaterialCommunityIcons 
            name="heart-plus-outline"
            size={20}
            color="#E52246"
          />
        </LikeButton>

        <TimePost>
          Há um minuto
        </TimePost>
      </Actions>

    </Container>
  )
}