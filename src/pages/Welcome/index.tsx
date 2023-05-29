import React from 'react';
import * as S from './styles'
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimated from './assets/game-east-west.json';
// import imagePpoke from './simple_pokeball 1.png'
import {useNavigation} from '@react-navigation/native' 
import { Button } from '../../components/Button';

export function Welcome() {
    const {navigate} = useNavigation();

    function handleNavigation() {
        navigate('Home')
    }




    return <S.Container>
    <S.Content>
        <S.WrapperAnimation>
            <S.WrapperImage>
            <AnimatedLottieView style={{width: 300}} autoPlay source={pokemonAnimated} loop />
            </S.WrapperImage>

        
        </S.WrapperAnimation>
        <S.Title>Datamon</S.Title>
        <S.SubTitle>Encontre todos os pokémons em um só lugar!</S.SubTitle>
    </S.Content>
    <S.Footer>
        <Button 
            title='Toque para continuar' 
            onPress={handleNavigation}>
        </Button>

    </S.Footer>

    </S.Container>
    
}