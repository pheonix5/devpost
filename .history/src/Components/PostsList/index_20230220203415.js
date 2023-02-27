import React from 'react'
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

import MateriaIcons from 'react-native-vector-icons/MaterialIcons'

export default function PostList(){
  return(
    <Container>
      <Header>
        <Avatar 
          source={require('../../assets/avatar.png')}
        />

        <Name numberOfLines={1}>
          Sujeito Programador
        </Name>
      </Header>

      <ContentView>
        <Content>Todo o conteudo do posto aqui</Content>
      </ContentView>

      <Actions>
        <LikeButton>
          <Like>10</Like>
          <MaterialCommunityIcons 
            Name="heart-plus-outline"
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