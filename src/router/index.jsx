import { View, Text } from 'react-native'
import React from 'react'

import Deslogado from './Deslogado';
import Carregando from '../components/Carregando';

export default function Router() {

    const logado = false;
    const carregando = false;
    if(carregando){
        return(
            <Carregando/>
        )
    }
    return (
        logado ? <View><Text>Logado</Text></View> : <Deslogado/>
    )
}
