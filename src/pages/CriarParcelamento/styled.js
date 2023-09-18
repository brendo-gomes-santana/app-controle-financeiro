import styled from "styled-components/native";
import { TextInputMask } from 'react-native-masked-text';
export const Container = styled.View`
    flex: 1;
    background-color: #100C33;

    align-items: center;
    justify-content: center;
    padding: 0 25px;
`;

export const Titulo = styled.Text`
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    margin: 40px 0;
`;

export const Base = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const BaseValorEData = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const InputValor = styled(TextInputMask)`
    width: 49%;
    height: 50px;
    background-color: #fff;
    margin: 0 10px 10px 0;
    padding: 0 10px;
    font-size: 18px;
    border-radius: 10px;
`;
export const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    background-color: #fff;
    margin-bottom: 10px;
    padding: 0 10px;
    font-size: 18px;
    border-radius: 10px;

`;
export const Button = styled.TouchableOpacity`
    width: 80%;
    height: 50px;
    background-color: #8db989;

    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;
export const TextButton = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
`;