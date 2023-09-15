import styled from "styled-components/native";

export const Header = styled.View`
    background-color: #100C33;

    height: 80px;
    
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
`;

export const Volta = styled.TouchableOpacity`
    width: 70px;
    height: 100%;
    margin-right: 10px;

    align-items: center;
    justify-content: center;

`;
export const Titulo = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
`;

export const Container = styled.View`
    flex: 1;
`;