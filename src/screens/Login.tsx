import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'
import { useState } from 'react'




const Login = ({ setIsLoggedIn, navigation }: any) => {

  
//estados para lo que el usuario ingresa

const [correo, setCorreo] = useState('');
const [contraseña, setContraseña] = useState('');

//credenciales seteadass

const correoValido = '111';
const contraseñaValida = '123456';

const handleLogin = () => {
  if (correo === correoValido && contraseña === contraseñaValida) {
    setIsLoggedIn(true);
  } else {
    alert('Correo o contraseña incorrectos');
  };
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
  return (
    <View style = {styles.mainContainer}>
    <View style = {styles.contenedor}>
      <Text style={styles.text}>Iniciar sesión</Text>
      <TextInput style={styles.txtinput} placeholder="Usuario" value={correo} onChangeText={setCorreo}></TextInput>
      <TextInput style={styles.txtinput} placeholder="Contraseña" secureTextEntry={true} value={contraseña} onChangeText={setContraseña}></TextInput>
      <TouchableOpacity style={styles.boton} onPress={handleLogin}>
        <Text style={styles.text}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.boton}>
        <Text style={styles.text}>Registrarse</Text>
      </TouchableOpacity>
    </View>
    </View>
  ) 
  
}

export default Login

const styles = StyleSheet.create({
  contenedor: {
    gap: 6,
    width: '85%',
    height: '65%',
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#000000',
    alignItems: 'center',
    borderWidth: 2,
    color:'#f8fafc'
  },
  boton: {
    color:'#f8fafc',
    width: 100,
    height: 30,
    backgroundColor: '#4f46e5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
  
  },

  text:{
    color:'#f8fafc'
  },
  txtinput:{
    color:'#000000',
    backgroundColor:'#f8fafc',
    borderRadius: 12,

  },

  mainContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9d7aa',
    color:'#f8fafc'
  }



})