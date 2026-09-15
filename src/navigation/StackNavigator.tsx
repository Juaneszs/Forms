import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <View>
      <NavigationContainer>
            <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Login" component={Login}/>
                </Stack.Navigator>
            
        </NavigationContainer>
    </View>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})