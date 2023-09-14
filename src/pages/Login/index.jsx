import React, { useState, useContext } from 'react'
import { Alert } from 'react-native';
import {
  Container,
  Input,
  Button,
  TextButton,
  Imagem,
  Link,
  TextLink
} from './styled'
import { AuthContext } from '../../context/auth';

export default function Login({ navigation }) {

  const { Login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin(){
    if(email === '' || senha === '' ){
      return Alert.alert('Preenchar todos os campos')
    }

    Login(email, senha);
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