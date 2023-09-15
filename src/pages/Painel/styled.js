import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #100C33;
    width: 100%;
    padding: 0 20px;
    padding-top: 50px;
`;
export const BaseTitulo = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;
export const Atualizar = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: #8db989;
    border-radius: 100px;

    align-items: center;
    justify-content: center;
`;
export const NaoPossui = styled.Text`
    color: #fff;
    font-size: 20px;
    text-align: center;
`;

export const Titulo = styled.Text`
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
`;