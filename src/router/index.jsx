import { View, Text } from 'react-native'
import React, {useContext} from 'react'

import Deslogado from './Deslogado';
import Carregando from '../components/Carregando';

import { AuthContext } from '../context/auth';

export default function Router() {
    
    const { logado, verificandoLogado } = useContext(AuthContext);

    if(verificandoLogado){
        return(
            <Carregando/>
        )
    }

    return (
        logado ? <View><Text>Logado</Text></View> : <Deslogado/>
    )
}
