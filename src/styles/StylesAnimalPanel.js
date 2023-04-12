import styled from 'styled-components/native';

export const StyledView = styled.View`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  margin-bottom: 4%;
`;

export const StyledImage = styled.Image`
  width: 30%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  margin-bottom: 15px;
`;

export const StyledTextContent = styled.View`
  margin-left: 5%;
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled.Text`
font-weight: bold;
margin-top: 6px;
font-size: 17px;
`;