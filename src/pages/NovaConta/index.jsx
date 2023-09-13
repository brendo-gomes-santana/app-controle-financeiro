import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { firebase_auth, firebase_db } from '../../config'
import {
  Container,
  Input,
  Button,
  TextButton,
  Imagem,
  Link,
  TextLink
} from '../Login/styled' // styled vem do login.

export default function NovaConta({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleCadastrarUsuario() {
    setCarregando(true)
    await createUserWithEmailAndPassword(firebase_auth, email, senha)
      .then(async (value) => {

        await setDoc(doc(firebase_db, 'users', value.user.uid), {
          id: value.user.uid,
          nome: nome,
          email: value.user.email,
        }).then(() => {

          navigation.navigate('Login')
          setCarregando(false)
        
        }).catch((err) => {
          console.log('não foi cadastrado', err)
          setCarregando(false)
        })
      }).catch((err) => {
        console.log(err);
        setCarregando(false);
      })


  }
  return (
    <Container>
      <Imagem
        resizeMode='contain'
        source={require('../../../assets/logo.png')}
      />
      <Input
        value={nome}
        onChangeText={t => setNome(t)}
        placeholder='Digite seu nome' />
      <Input
        value={email}
        onChangeText={t => setEmail(t)}
        placeholder='Digite seu email' />
      <Input
        value={senha}
        onChangeText={t => setSenha(t)}
        placeholder='Crie sua senha'
        secureTextEntry={true} />
      <Button onPress={() => handleCadastrarUsuario()}>
        {carregando ? (
          <ActivityIndicator size={35} color='#fff'/> 
        ):(
          <TextButton>Cadastrar</TextButton>
        )}
      </Button>
      <Link onPress={() => navigation.goBack()}>
        <TextLink>Você já possui conta? Faça seu login</TextLink>
      </Link>
    </Container>
  )
}