import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

export const StyledView = styled.View`
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
`;

export const StyledTytleText = styled.Text`
  color: black;
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const StyledSubTytleText = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5%;
`;

export const StyledViewComponents = styled.View`
  width: 100%;
  height: 100%;
  background-color: #FBE8FF;
`;

export const StyledViewSecondPanel = styled.View`
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
`;

export const StyledSecondPanelMainText = styled.Text`
  color: #B946D3;
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 5%;
`;

export const StyledPicker = styled(Picker)`
  background-color: #FFC21D;
  color: white;
  width: 40%;
  margin-bottom: 3%;
`;