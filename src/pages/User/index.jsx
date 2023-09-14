import React, { useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  Container,
  Section,
  Email,
  Nome,
  Imagem,
  Deslogar,
  TextDeslogar
} from './styled';
import { AuthContext } from '../../context/auth';
export default function User() {

  const { usuario, DeslogarDaConta } = useContext(AuthContext);

  return (
    <Container>
      <Imagem
        source={require('../../../assets/logo.png')}
        resizeMode='contain'
      />
      <Section>
        <Nome>{usuario.nome}</Nome>
        <Email>{usuario.email}</Email>
      </Section>

      <Deslogar onPress={() => DeslogarDaConta()}>
        <AntDesign name="logout" size={30} color="#fff" />
        <TextDeslogar>Deslogar</TextDeslogar>
      </Deslogar>
    </Container>
  )
}