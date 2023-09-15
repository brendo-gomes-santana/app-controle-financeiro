import React from 'react'
import { Container, Titulo, Dia } from './styled';

export default function ListaDividas({ navigation, data }) {

    return (
        <Container onPress={() => navigation.navigate('Detalhe', {
            data: data
        })}>
            <Titulo>{data.titulo}</Titulo>
            <Dia>{data.data}</Dia>
        </Container>
    )
}