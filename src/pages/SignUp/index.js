import React, { useContext } from 'react';
import { View, 
    Text,  
    StyleSheet, 
    KeyboardAvoidingView, 
    Image, 
    TextInput, 
    TouchableOpacity,
    Platform } from 'react-native';

import { AuthContext } from '../../contexts/auth'

export default function SignUp() {

const { acessar } = useContext(AuthContext);

function handle(){
    acessar();
}

 return (
    <View style={style.background}>
    <KeyboardAvoidingView 
            style={style.container}
            behavior={Platform.OS === 'ios'? 'padding': ''}
            enabled
            >
        <Image style={style.logo} source={require('../../assets/logo.png')}/>
        <TextInput 
            style={style.input}
            placeholder='CPF' />
        <TouchableOpacity style={style.buttonLogin} onPress={ handle }>
            <Text style={style.descriptionButton}>Pedido de Acesso</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
   </View>
  );
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#F0F4FF",
    },

    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },

    logo: {
        marginTop: -50,
        width: 250,
        height: 250,
        resizeMode: "center"
    },

    input: {
        marginTop: -20,
        marginBottom: 35,
        backgroundColor: "#FFF",
        width: "90%",
        fontSize: 17,
        padding: 10,
        borderRadius: 8,
        color: "#121212",
        textAlign: "center"
    },

    buttonLogin: {
        width: "90%",
        height: 45,
        borderRadius: 8,
        backgroundColor: '#3b3dbf',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    descriptionButton: {
        fontSize: 20,
        color: '#FFF'
    },

    link: {
        marginTop: 20,
        marginBottom:20
    }
});