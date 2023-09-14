import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: #100C33;

    align-items: center;
    justify-content: space-evenly;
`;
export const Imagem = styled.Image`
    width: 100%;
    height: 150px;
`;
export const Section = styled.View`
    width: 100%;
    align-items: center;
`;
export const Email = styled.Text`
    font-size: 18px;
    color: #fff;
    `;
export const Nome = styled.Text`
    font-size: 28px;
    color: #fff;
    margin-bottom: 5px;
`;

export const Deslogar = styled.TouchableOpacity`
    width: 90%;
    background-color: #B98989;
    height: 50px;
    border-radius: 20px;

    align-items: center;
    justify-content: center;
    flex-direction: row;
`;
export const TextDeslogar = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin-left: 10px;
`;