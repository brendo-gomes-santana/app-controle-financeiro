import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { ActivityIndicator } from 'react-native';

import { firebase_db } from '../../config';
import {
  Header,
  Container,
  Titulo,
  Volta,
  Deleta,
  Base,
  BasePagarEAlterar,
  Button,
  TextoButton,
  Descricao,
  Strong
} from './styled';
export default function Detalhe({ route, navigation }) {

  const { data } = route.params;
  const [usuario, setUsuario] = useState(data);
  const [carregandoDelete, setCarregandoDelete] = useState(false);
  const [carregandoPagar, setCarregandoPagar] = useState(false);

  async function handleDelete() {
    usuario.quantidade_de_parcelas === 1 ? setCarregandoPagar(true) : setCarregandoDelete(true);
    try {
      const docRef = doc(firebase_db, 'dividas', usuario.id);
      await deleteDoc(docRef)
      navigation.push('Home')
    } catch (err) {
      console.log('Não deu pra deleta', err);
    } finally {
      usuario.quantidade_de_parcelas === 1 ? setCarregandoPagar(false) : setCarregandoDelete(false);
    }
  }

  async function handlePagar() {
    setCarregandoPagar(true)
    if (usuario.quantidade_de_parcelas === 1) {
      handleDelete();
      setCarregandoPagar(false);
      return;
    } else {
      try {
        const dia = new Date()

        const docRef = doc(firebase_db, 'dividas', usuario.id);
        await updateDoc(docRef, {
          quantidade_de_parcelas: usuario.quantidade_de_parcelas - 1,
          descricao: descricao + `\n parcela: ${usuario.quantidade_de_parcelas}, pagar ${dia.getDate()}/${dia.getMonth() + 1}`
        })

        const { quantidade_de_parcelas, data, descricao, id, titulo, valor } = usuario;

        setUsuario({
          id: id,
          titulo,
          data,
          quantidade_de_parcelas: quantidade_de_parcelas - 1,
          valor,
          descricao: descricao + `\n parcela: ${usuario.quantidade_de_parcelas}, pagar ${dia.getDate()}/${dia.getMonth() + 1}`

        })

      } catch (err) {
        console.log('não deu pra atualizar: ', err)
      } finally {
        setCarregandoPagar(false)
      }
    }

  }
  return (
    <>
      <Header>
        <Volta onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={35} color="#fff" />
        </Volta>
        <Base>
          <Titulo>{usuario.titulo}</Titulo>
          <Deleta onPress={() => handleDelete()}>
            {carregandoDelete ? (
              <ActivityIndicator size={30} color='#fff' />
            ) : (
              <Ionicons name="trash-bin-sharp" size={24} color="#fff" />
            )}
          </Deleta>
        </Base>
      </Header>

      <Container>

        <BasePagarEAlterar>
          <Button
            color="#8db989"
            disabled={carregandoPagar}
            onPress={() => handlePagar()}
          >
            {carregandoPagar ? (
              <ActivityIndicator size={30} color='#fff' />
            ) : (
              <TextoButton>Pagar</TextoButton>
            )}
          </Button>
          <Button
            color="#B98989"
          >
            <TextoButton>Alterar</TextoButton>
          </Button>
        </BasePagarEAlterar>
        <Descricao>
          <Strong>Quantidade de parcelas: </Strong>{usuario.quantidade_de_parcelas}
        </Descricao>
        <Descricao>
          <Strong>data de vescimento: </Strong>{usuario.data}
        </Descricao>
        <Descricao>
          <Strong>Valor: </Strong>{usuario.valor}
        </Descricao>
        <Descricao style={{ textAlign: 'center' }}>
          <Strong>Descricao </Strong>{'\n' + usuario.descricao}
        </Descricao>
      </Container>
    </>
  )
}