import { React, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StyledView, StyledPicker, StyledViewSecondPanel, StyledTytleText, StyledSubTytleText, StyledViewComponents, StyledSecondPanelMainText } from '../styles/StylesHome';
import AnimalPanel from "../components/AnimalPanel";

function Home() {

    const [categories, setCategories] = useState();
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const handleCategoryChange = (itemValue, itemIndex) => {
        setSelectedCategory(itemValue);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://637297dd025414c637139c42.mockapi.io/api/v1/categories');
            const jsonData = await response.json();
            setCategories(jsonData);
        };
        fetchData();
    }, []);


    return (
        <View>

            <StyledView>
                <StyledTytleText>HOME</StyledTytleText>
                <StyledSubTytleText>Escolha uma categoria para visualizar</StyledSubTytleText>

                {categories != undefined ?
                    <StyledPicker selectedValue={selectedCategory} onValueChange={handleCategoryChange}>
                        <Picker.Item label="Todos" value="Todos" key="-1" />
                        {categories.map(item => (
                            <Picker.Item label={item.name} value={item.id} key={item.id} />
                        ))}
                    </StyledPicker>
                    :
                    <></>}

            </StyledView>

            <StyledViewComponents>
                <StyledViewSecondPanel>
                    <StyledSecondPanelMainText>Resultados da Busca</StyledSecondPanelMainText>
                    <AnimalPanel selectedCategory={selectedCategory} />
                </StyledViewSecondPanel>
            </StyledViewComponents>

        </View >
    );
}

export default Home;