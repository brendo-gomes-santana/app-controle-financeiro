import React, { useState } from 'react'
import { createContext } from "react";

export const AuthContext = createContext({})


export default function Provider({children}) {

    const [usuario, setUsuario] = useState(null);

    async function Login(email, senha){

    }
  return (
    <AuthContext.Provider value={{
        Login,
        usuario,
        logado: !!usuario
    }}>
      {children}
    </AuthContext.Provider>
  )
}