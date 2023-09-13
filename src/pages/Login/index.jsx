import React from 'react'
import { Container, 
          Input, 
          Button, 
          TextButton, 
          Imagem,
          Link,
          TextLink } from './styled'

export default function Login({navigation}) {
  return (
    <Container>
      <Imagem
        resizeMode='contain'
        source={require('../../../assets/logo.png')}
      />
      <Input placeholder='Digite seu email' />
      <Input placeholder='Digite sua senha' secureTextEntry={true} />
      <Button>
        <TextButton>Entrar</TextButton>
      </Button>
      <Link onPress={ () => navigation.navigate('NovaConta')}>
        <TextLink>Você não possui conta? Faça seu cadastro</TextLink>
      </Link>
    </Container>
  )
}