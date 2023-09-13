import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Login';
import NovaConta from '../pages/NovaConta';
const Stack = createStackNavigator();

export default function Deslogado() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Home} />
      <Stack.Screen name='NovaConta' component={NovaConta}/>
    </Stack.Navigator>
  )
}