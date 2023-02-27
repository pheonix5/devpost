import React from 'react'
import {
  Container,
  Name
} from './styles'

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
    </Container>
  )
}