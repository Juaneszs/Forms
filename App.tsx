import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';


import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  // Estado global que controla si el usuario tiene acceso
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        {IsLoggedIn ? (
          // Si es true
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => <Home {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>

        ) : (
          // Si es false
          <>
            <Stack.Screen name="Login">
              {(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            
            <Stack.Screen name="Register" component={Register} />
          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#707276',

  },
});
