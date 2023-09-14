import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext } from "react";
import { firebase_auth, firebase_db } from '../config';

export const AuthContext = createContext({})


export default function Provider({ children }) {

  const [usuario, setUsuario] = useState(null);
  const [verificandoLogado, setVerificandoLogado] = useState(true);

  useEffect(() => {
    (async () => {
      const r = await AsyncStorage.getItem('@user');
      const usuario = JSON.parse(r)
      if(!usuario){
        setVerificandoLogado(false);
        setUsuario(null);
        return;
      }
      setUsuario(usuario);
      setVerificandoLogado(false);
    })()
  }, [])

  async function Login(email, senha) {
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
      console.log('Algo deu errado', err)
    } finally {

    }
  }
  return (
    <AuthContext.Provider value={{
      Login,
      usuario,
      logado: !!usuario,
      verificandoLogado
    }}>
      {children}
    </AuthContext.Provider>
  )
}