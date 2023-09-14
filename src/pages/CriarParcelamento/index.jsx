import React, { useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import {
  Container,
  Base,
  Input,
  Button,
  TextButton,
  InputValor
} from './styled';

import { firebase_db } from '../../config';
import { AuthContext } from '../../context/auth';
export default function CriarParcelamento() {

  const { usuario } = useContext(AuthContext);

  const [titulo, setTitulo] = useState('');
  const [valor, setValor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleCadastrarDivida() {
    setCarregando(true)
    try {
      await addDoc(collection(firebase_db, 'dividas'), {
        titulo: titulo,
        valor: valor,
        data: data,
        quantidade_de_parcelas: quantidade,
        descricao: descricao,
        id_user: usuario.id
      })
      setTitulo('');
      setValor('');
      setData('');
      setQuantidade('');
      setDescricao('');
    } catch (err) {
      console.log('Algo deu errado: ', err);
    } finally {
      setCarregando(false)
    }
  }

  return (
    <Container>
      <Base>
        <Input
          value={titulo}
          onChangeText={t => setTitulo(t)}
          placeholder='Digite o Titulo' />
        <InputValor
          type='money'
          value={valor}
          onChangeText={v => {
            setValor(v);
          }}
          placeholder='R$'
        />
        <InputValor
          type='datetime'
          options={{
            format: 'DD'
          }}
          value={data}
          onChangeText={d => setData(d)}
          placeholder='DD'
        />
        <Input
          value={quantidade}
          onChangeText={t => setQuantidade(t)}
          placeholder='Digite a qualidade de parcelas'
        />
        <Input
          value={descricao}
          onChangeText={t => setDescricao(t)}
          placeholder='Pode colocar uma descrição'
          multiline={true}
          style={{ height: 100 }}
        />
      </Base>
      <Button onPress={() => handleCadastrarDivida()} disabled={carregando}>
        {carregando ? (
          <ActivityIndicator
            color='#fff'
            size={40}
          />
        ) : (
          <TextButton>Cadastrar Parcela</TextButton>
        )}
      </Button>
    </Container >
  )
}