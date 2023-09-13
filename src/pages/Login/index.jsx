import React, { useState, useEffect } from 'react'
import {
  Container,
  Input,
  Button,
  TextButton,
  Imagem,
  Link,
  TextLink
} from './styled'

export default function Login({ navigation }) {
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {

  }
  return (
    <Container>
      <Imagem
        resizeMode='contain'
        source={require('../../../assets/logo.png')}
      />
      <Input
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder='Digite seu email' />
      <Input
        value={senha}
        onChangeText={ text => setSenha(text)}
        placeholder='Digite sua senha' 
        secureTextEntry={true} />
      <Button onPress={() => handleLogin()}>
        <TextButton>Entrar</TextButton>
      </Button>
      <Link onPress={() => navigation.navigate('NovaConta')}>
        <TextLink>Você não possui conta? Faça seu cadastro</TextLink>
      </Link>
    </Container>
  )
}