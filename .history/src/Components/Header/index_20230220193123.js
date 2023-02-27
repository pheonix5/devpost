import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  Title
} from './styles'

export default function Header() {
 return (
   <Container>
      <Title>
        Dev
        <Text>Post</Text>
      </Title>
   </Container>
  );
}

