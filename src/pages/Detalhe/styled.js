import styled from "styled-components/native";

export const Header = styled.View`
    background-color: #100C33;

    height: 80px;
    
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
`;

export const Volta = styled.TouchableOpacity`
    width: 15%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;
export const Base = styled.View`
    flex-direction: row;
    width: 85%;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
`;

export const Titulo = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
`;

export const Deleta = styled.TouchableOpacity``;

export const Container = styled.View`
    flex: 1;
    background-color: #C4C4C4;
    padding: 10px;
`;
export const BasePagarEAlterar = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 20px;
`;
export const Button = styled.TouchableOpacity`
    height: 50px;
    width: 100px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${props => props.color};
    `;
export const TextoButton = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const Descricao = styled.Text`
    font-size: 18px;
    margin-bottom: 10px;
`;
export const Strong = styled.Text`
    font-weight: bold;
`;
