import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { doc, deleteDoc } from 'firebase/firestore';
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
  const [carregandoDelete, setCarregandoDelete] = useState(false);
  const [carregandoPagar, setCarregandoPagar] = useState(false);

  async function handleDelete(){
    setCarregandoDelete(true);
    try{
      const docRef = doc(firebase_db,'dividas',data.id);
      await deleteDoc(docRef)
      navigation.push('Home')
    }catch(err){
      console.log('Não deu pra deleta', err);
    }finally{
      setCarregandoDelete(false);
    }
  }

  async function handlePagar(){
    setCarregandoPagar(true)
    try{

    }catch(err){
      console.log('não deu pra atualizar: ', err)
    }finally{
      setCarregandoPagar(false)
    }
  }
  return (
    <>
      <Header>
        <Volta onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={35} color="#fff" />
        </Volta>
        <Base>
          <Titulo>{data.titulo}</Titulo>
          <Deleta onPress={() => handleDelete()}>
            {carregandoDelete ? (
              <ActivityIndicator size={30} color='#fff'/>
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
          >
            <TextoButton>Pagar</TextoButton>
          </Button>
          <Button
            color="#B98989"
          >
            <TextoButton>Alterar</TextoButton>
          </Button>
        </BasePagarEAlterar>
        <Descricao>
          <Strong>Quantidade de parcelas: </Strong>{data.quantidade_de_parcelas}
        </Descricao>
        <Descricao>
          <Strong>data de vescimento: </Strong>{data.data}
        </Descricao>
        <Descricao>
          <Strong>Valor: </Strong>{data.valor}
        </Descricao>
        <Descricao style={{textAlign: 'center'}}>
          <Strong>Descricao </Strong>{'\n' + data.descricao}
        </Descricao>
      </Container>
    </>
  )
}