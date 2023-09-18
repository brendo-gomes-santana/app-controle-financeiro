import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Router from './src/router';
import Provider from './src/context/auth';

import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <StatusBar style="light" />
        <Router />
      </Provider>
    </NavigationContainer>
  );
}

