import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Header,  Container, Titulo, Volta} from './styled';
export default function Detalhe({route, navigation}) {
    const { data } = route.params;
    console.log(data)
  return (
    <>
      <Header>
        <Volta onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={35} color="#fff" />
        </Volta>
        <Titulo>{data.titulo}</Titulo>
      </Header>
      <Container>

      </Container>
    </>
  )
}