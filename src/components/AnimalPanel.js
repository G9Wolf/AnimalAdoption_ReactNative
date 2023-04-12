import { React, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StyledView, StyledImage, StyledTextContent, StyledText } from '../styles/StylesAnimalPanel';
import { navigate } from '../components/navigation';
import Loading from '../components/Loading';

const MeuComponente = ({ categoriesData, animalData, selectedCategory }) => {

    return (
        <ScrollView style={{ height: '55%' }}>

            <View>
                {animalData != undefined ?
                    <View>
                        {selectedCategory.selectedCategory != "Todos" ?
                            <>
                                {animalData.map((item, id) => (

                                    <>
                                        {parseFloat(item.id) === parseFloat(selectedCategory.selectedCategory) ?
                                            <TouchableOpacity key={item.id + 100} onPress={() => navigate('Details', { data: item })}>
                                                <StyledView >
                                                    <StyledImage source={{ uri: item.img }} ></StyledImage>
                                                    <StyledTextContent>
                                                        <StyledText>{item.id}</StyledText>
                                                        <StyledText>{item.name}</StyledText>
                                                        <StyledText>3 Anos</StyledText>
                                                    </StyledTextContent>
                                                </StyledView>
                                            </TouchableOpacity>
                                            :
                                            <></>
                                        }
                                    </>
                                ))}
                            </>
                            :
                            <>
                                {animalData != undefined ?
                                    <View>
                                        {animalData.map((item, id) => (
                                            <>
                                                <TouchableOpacity key={item.id + 1000} onPress={() => navigate('Details', { data: item })}>
                                                    <StyledView >
                                                        <StyledImage source={{ uri: item.img }} ></StyledImage>
                                                        <StyledTextContent>
                                                            <StyledText>{item.id}</StyledText>
                                                            <StyledText>{item.name}</StyledText>
                                                            <StyledText>3 Anos</StyledText>
                                                        </StyledTextContent>
                                                    </StyledView>
                                                </TouchableOpacity>
                                            </>
                                        ))}
                                    </View>
                                    :
                                    <Loading />
                                }

                            </>}

                    </View>
                    :
                    <Loading />
                }

            </View>

        </ScrollView >
    );
}



const AnimalPanel = (selectedCategory) => {

    const [categories, setCategories] = useState();
    const [animals, setAnimals] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://637297dd025414c637139c42.mockapi.io/api/v1/categories');
            const jsonData = await response.json();
            setCategories(jsonData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response2 = await fetch('https://637297dd025414c637139c42.mockapi.io/api/v1/animal');
            const jsonData2 = await response2.json();
            setAnimals(jsonData2);
        };
        fetchData();
    }, []);

    return (<MeuComponente categoriesData={categories} animalData={animals} selectedCategory={selectedCategory} />);

}

export default AnimalPanel; 