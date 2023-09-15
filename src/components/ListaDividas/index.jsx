import React from 'react'
import { Container, Titulo, Dia } from './styled';

export default function ListaDividas({ data }) {

    return (
        <Container>
            <Titulo>{data.titulo}</Titulo>
            <Dia>{data.data}</Dia>
        </Container>
    )
}