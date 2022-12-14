import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { AddFavAddress, Home, Splash } from '../pages';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
        <Stack.Screen name="app-favaddress" component={AddFavAddress} options={{ headerShown: false }}/>
      </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})