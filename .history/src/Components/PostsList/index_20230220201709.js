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
      </Header>
    </Container>
  )
}