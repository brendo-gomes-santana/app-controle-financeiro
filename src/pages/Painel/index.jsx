import React, { useEffect, useState, useContext } from 'react';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { ActivityIndicator, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { firebase_db } from '../../config'
import { AuthContext } from '../../context/auth';
import ListaDividas from '../../components/ListaDividas';
import { Container, Titulo, NaoPossui, Atualizar, BaseTitulo } from './styled'

export default function Painel() {

  const { usuario } = useContext(AuthContext);

  const [dividas, setDividas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [carregarAtualizacao, setCarregarAtualizacao] = useState(false);

  useEffect(() => {
    try {
      const listRef = collection(firebase_db, "dividas");
      const q = query(listRef,
        where('id_user', '==', usuario.id),
        orderBy('data', 'asc'));


      getDocs(q).then((querySnapshot) => {
        const dividasData = [];
        querySnapshot.forEach((doc) => {

          dividasData.push({
            id: doc.id,
            titulo: doc.data().titulo,
            valor: doc.data().valor,
            data: doc.data().data,
            quantidade_de_parcelas: doc.data().quantidade_de_parcelas,
            descricao: doc.data().descricao
          });
        });
        setCarregando(false);
        setDividas(dividasData);
      }).catch((error) => {
        console.log("Algo deu errado: ", error);
        setCarregando(false);
      });
    } catch (err) {
      console.log(err);
      setCarregando(false);
    }
  }, []);
  function handleAtualizar(){
    setCarregarAtualizacao(true)
    try {
      const listRef = collection(firebase_db, "dividas");
      const q = query(listRef,
        where('id_user', '==', usuario.id),
        orderBy('data', 'asc'));


      getDocs(q).then((querySnapshot) => {
        const dividasData = [];
        querySnapshot.forEach((doc) => {

          dividasData.push({
            id: doc.id,
            titulo: doc.data().titulo,
            valor: doc.data().valor,
            data: doc.data().data,
            quantidade_de_parcelas: doc.data().quantidade_de_parcelas,
            descricao: doc.data().descricao
          });
        });
        setCarregarAtualizacao(false);
        setDividas(dividasData);
      }).catch((error) => {
        console.log("Algo deu errado: ", error);
        setCarregarAtualizacao(false);
      });
    } catch (err) {
      console.log(err);
      setCarregarAtualizacao(false);
    }
  }
  if (carregando) {
    return (
      <Container
        style={{
          justifyContent: 'center'
        }}
      >
        <ActivityIndicator color='#fff' size={50} />
      </Container>
    )
  }

  return (
    <Container>
      <BaseTitulo >
        <Titulo>Contas para pagar</Titulo>
        <Atualizar>
          <MaterialCommunityIcons name="reload" size={30} color="#fff" />
        </Atualizar>
      </BaseTitulo>
      {dividas.length === 0 && (
        <NaoPossui>Você não possui contas</NaoPossui>
      )}
      <FlatList
        data={dividas}
        renderItem={({ item }) => <ListaDividas data={item} />}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}
