import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #100C33;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
`;
export const Imagem = styled.Image`
    width: 90%;
    height: 150px;
    margin-bottom: 20px;
`;
export const Input = styled.TextInput`
    width: 100%;
    height: 60px;
    background-color: #fff;
    margin-bottom: 15px;
    border-radius: 5px;
    padding: 0 15px;
    font-size: 18px;
`;
export const Button = styled.TouchableOpacity`
    background-color: #8db989;
    width: 90%;
    height: 40px;
    border-radius: 5px;

    align-items: center;
    justify-content: center;
`;
export const TextButton = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 20px;
`;
export const TextLink = styled.Text`
    color: #F1EEEE;
    font-size: 15px;
`;