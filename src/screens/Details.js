import { React, useEffect, useState } from 'react';
import { View } from 'react-native';
import { navigate } from '../components/navigation';
import ButtonBack from '../components/ButtonBack.js';
import { useRoute } from '@react-navigation/native';
import { StyledImage, StyledTytleText, StyledSubText } from "../styles/StylesDetails"
import Loading from '../components/Loading';

function Details() {

    const route = useRoute();
    const animalData = route.params.data;
    const [animals, setAnimals] = useState();

    useEffect(() => {
        setAnimals(animalData)
    }, [animalData, route]);

    return (
        <View>

            <ButtonBack
                title="Voltar"
                onPress={() => navigate('Home')}
            />

            <StyledTytleText> {animalData.name} </StyledTytleText>


            {animals ?
                <StyledImage source={{ uri: animalData.img }}></StyledImage>
                :
                <Loading />
            }

            <StyledSubText>ID: {animalData.id}</StyledSubText>

            <StyledSubText>Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived not only five centuries. </StyledSubText>

        </View>
    );
}

export default Details;