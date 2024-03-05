import React, {  useContext, useState  } from 'react';
import { View, 
        Text,  
        StyleSheet, 
        KeyboardAvoidingView, 
        Image, 
        TextInput, 
        TouchableOpacity,
        Platform, 
        ActivityIndicator} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth'

export default function SignIn() {

const navigation = useNavigation();

const { user, acessar, loginAuth } = useContext(AuthContext);
const [login, setLogin ] = useState('');
const [id, setId ] = useState('');

function logar() {
    acessar(login, id);
    setLogin('');
    setId('');
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
            placeholder='Login'
            value={login}
            onChangeText={(text)=> setLogin(text)} />
        <TextInput 
            secureTextEntry={true}
            style={style.input}
            placeholder='ID'
            value={id}
            onChangeText={(text)=> setId(text)}
            />
        <TouchableOpacity style={style.buttonLogin} onPress={ logar }>
            { loginAuth ? (<ActivityIndicator size={20} color="#fff"/>) : (<Text style={style.descriptionButton}>Acessar</Text>)}
        </TouchableOpacity>

        <TouchableOpacity style={style.link} onPress={ () => navigation.navigate('SignUp')}>
            <Text style={style.descriptionLink}>Solicitar Acesso ao App!</Text>
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
    },

    descriptionLink: {

    }

});