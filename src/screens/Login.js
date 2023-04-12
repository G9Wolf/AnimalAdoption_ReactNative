import React, { useState } from 'react';
import { StyledView, StyledImage, StyledTytleText, StyledSubTytleText, StyledLoginText, StyledLoginTextInput, StyledViewLineEmail, StyledViewLineLogin } from '../styles/StylesLogin';
import ButtonLogin from '../components/ButtonLogin.js';
import { navigate } from '../components/navigation';



function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('1234');

    return (

        <StyledView>
            <StyledImage source={require('../imgs/icon.png')} />
            <StyledTytleText>Login</StyledTytleText>
            <StyledSubTytleText>Insira seus dados para continuar</StyledSubTytleText>
            <StyledLoginText>Email</StyledLoginText>

            <StyledLoginTextInput
                placeholder='user@exemplo.com.br'
                value={email}
                onChangeText={(text) => setEmail(text)} />

            <StyledViewLineEmail />

            <StyledLoginText>Senha</StyledLoginText>

            <StyledLoginTextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true} />

            <StyledViewLineLogin />

            <ButtonLogin title="Entrar"
                onPress={() => navigate('Home')} />
        </StyledView>
    );
}

export default Login;