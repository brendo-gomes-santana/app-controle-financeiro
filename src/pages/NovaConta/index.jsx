import React from 'react'
import { Container, 
          Input, 
          Button, 
          TextButton, 
          Imagem,
          Link,
          TextLink } from '../Login/styled' // styled vem do login.

export default function NovaConta({navigation}) {
  return (
    <Container>
      <Imagem
        resizeMode='contain'
        source={require('../../../assets/logo.png')}
      />
      <Input placeholder='Digite seu nome' />
      <Input placeholder='Digite seu email' />
      <Input placeholder='Crie sua senha' secureTextEntry={true} />
      <Button>
        <TextButton>Entrar</TextButton>
      </Button>
      <Link onPress={ () => navigation.goBack()}>
        <TextLink>Você já possui conta? Faça seu login</TextLink>
      </Link>
    </Container>
  )
}