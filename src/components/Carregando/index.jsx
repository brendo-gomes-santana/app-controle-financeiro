import React from 'react'
import { ActivityIndicator, Animated, View } from 'react-native';
import { Container, Imagem } from './styled';

export default function Carregando() {

    const ImagemtranslateY = new Animated.Value(0);
    const LoadingTranslateY = new Animated.Value(0);
    const ApareceLoading = new Animated.Value(0);


    Animated.parallel([
        Animated.timing(
            ImagemtranslateY,{
                toValue: -100,
                useNativeDriver: true,
            }
        ),
        Animated.timing(
            LoadingTranslateY,{
                toValue: 50,
                useNativeDriver: true,
            }
        ),
        Animated.timing(
            ApareceLoading,{
                toValue: 1,
                useNativeDriver: true,
                delay: 500
            }
        )
    ]).start()

    return (
        <Container>
            <Imagem
                source={require('../../../assets/logo.png')}
                resizeMode='contain'
                style={{
                    transform: [{ translateY: ImagemtranslateY }]
                }} />
            <Animated.View
                style={{
                    transform: [{ translateY: LoadingTranslateY }],
                    opacity: ApareceLoading
                }}
            >
                <ActivityIndicator
                    color='#fff'
                    size={70}
                />
            </Animated.View>

        </Container>
    )
}