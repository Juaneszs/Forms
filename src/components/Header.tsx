import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '99%',
        height: 100,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'black',
    }
})