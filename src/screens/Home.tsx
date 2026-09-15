import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'

const Home = () => {
  return (
    <View style={styles.MainContainer}>
        <View style={styles.Vcontainer}>
            <View style={styles.Hcontainer}>
            <Card title="Card 1" description="Description1" textBtn="Btn1" />
            <Card title="Card 2" description="Description2" textBtn="Btn2" />
            <Card title="Card 3" description="Description3" textBtn="Btn3" />

            </View>
        </View>
    </View>
    
    
  )
}

export default Home

const styles = StyleSheet.create({

MainContainer:{
    backgroundColor: '#e9d7aa',
    flex: 1,
},


  Hcontainer: {
    flex: 1,
    backgroundColor: '#ffffff00',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
    
  },

  Vcontainer: {
    flexDirection: 'column',
    flex: 1,
    borderRadius: 10,
  }
})