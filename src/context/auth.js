import React, { useState, useEffect, createContext } from 'react';
import { Alert } from 'react-native';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { firebase_auth, firebase_db } from '../config';

export const AuthContext = createContext({})

export default function Provider({ children }) {

  const [usuario, setUsuario] = useState(null);
  const [verificandoLogado, setVerificandoLogado] = useState(true);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    (async () => {
      const r = await AsyncStorage.getItem('@user');
      const usuario = JSON.parse(r);
      if (!usuario) {
        setVerificandoLogado(false);
        setUsuario(null);
        return;
      }
      setUsuario(usuario);
      setVerificandoLogado(false);
    })()
  }, [])

  async function Login(email, senha) {

    if (email === '' || senha === '') {
      Alert.alert('Preenchar todos os campos')
      return
    }

    setCarregando(true);
    try {
      const r = await signInWithEmailAndPassword(firebase_auth, email, senha);

      const docRef = doc(firebase_db, "users", r.user.uid);
      const docSnap = await getDoc(docRef);

      let data = {
        id: docSnap.data().id,
        nome: docSnap.data().nome,
        email: docSnap.data().email,
      }
      setUsuario(data);
      await AsyncStorage.setItem("@user", JSON.stringify(data));

    } catch (err) {
      console.log('Algo deu errado:', err)
      if (err === '[FirebaseError: Firebase: Error (auth/invalid-login-credentials).]') {
        console.log('entrou aqui')
      }
    } finally {
      setCarregando(false);
    }
  }

  async function DeslogarDaConta() {
    signOut(firebase_auth);
    await AsyncStorage.clear();
    setUsuario(null)

  }
  return (
    <AuthContext.Provider value={{
      Login,
      usuario,
      DeslogarDaConta,
      logado: !!usuario,
      verificandoLogado,
      carregando
    }}>
      {children}
    </AuthContext.Provider>
  )
}