import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #100C33;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    position: relative;
`;
export const Imagem = styled(Animated.Image)`
    width: 50%;
    margin-bottom: 20px;
    position: absolute;
`;




