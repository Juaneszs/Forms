import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Register = () => {
const [nombreUsuario, setNombreUsuario] = React.useState('');
const [contraseña, setContraseña] = React.useState('');
const [confirmarContraseña, setConfirmarContraseña] = React.useState('');

const handleRegister = () => {
  if (contraseña !== confirmarContraseña){
    alert('Las contraseñas no coinciden');

  } else if (nombreUsuario === ''){
    alert('El nombre de usuario no puede estar vacío');
  }  
    return;
  }


  return (
    <View style={styles.mainContainer}>
    <View style={styles.container}>
      <Text style={styles.text}>Registrarse</Text>
      <TextInput style={styles.txtinput} placeholder="Nombre de usuario" value={nombreUsuario} onChangeText={setNombreUsuario} />
      <TextInput style={styles.txtinput} placeholder="Contraseña" secureTextEntry={true} value={contraseña} onChangeText={setContraseña} />
      <TextInput style={styles.txtinput} placeholder="Confirmar contraseña" secureTextEntry={true} value={confirmarContraseña} onChangeText={setConfirmarContraseña} />
      <TouchableOpacity style = {styles.button} onPress={handleRegister}>
        <Text style={styles.text}>Registrarse</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    gap: 6,
    width: '85%',
    height: '65%',
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#000000',
    alignItems: 'center',
    borderWidth: 2,
  },
  button: {
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
    flex:1 ,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#e9d7aa'
  }



})