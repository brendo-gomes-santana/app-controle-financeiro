import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Router/>
    </NavigationContainer>
  );
}

