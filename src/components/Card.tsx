import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native'
import React from 'react'



interface CardProps {
  title?: string;
  description?: string;
  onPress?: () => void;
  textBtn?: string;
}

const Card = ({ title, description, onPress, textBtn }: CardProps) => {

  const btnPress = () => {
    alert('boton presionado')


  }

  
  return (
        <View style = {styles.card}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
            <TouchableHighlight style={styles.boton} onPress={btnPress}>
            <Text style={styles.text}>{textBtn}</Text>
        </TouchableHighlight>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 150,
    backgroundColor: '#1e293b',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
  },
  boton:{
    backgroundColor: '#4f46e5',
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

    text:{
    color:'#f8fafc'

  }
})