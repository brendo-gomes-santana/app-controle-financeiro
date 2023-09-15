import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Entypo, Ionicons } from '@expo/vector-icons';

import Painel from '../pages/Painel';
import User from '../pages/User';
import CriarParcelamento from '../pages/CriarParcelamento';
import Detalhe from '../pages/Detalhe';
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Logado() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#100C33',
        },

        tabBarInactiveTintColor: '#ddd',
        tabBarActiveTintColor: '#7A81FF'

        
      }}
    >
      <BottomTab.Screen
        name='Painel'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="home" size={size} color={color} />
          }
        }}
      />
      <BottomTab.Screen
        name='Criar Parcelamento'
        component={CriarParcelamento}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="md-add-circle" size={size} color={color} />
          }
        }}
      />
      <BottomTab.Screen
        name='Configuração'
        component={User}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="settings" size={size} color={color} />
          }
        }}
      />
    </BottomTab.Navigator>
  )
}

function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='Home'
        component={Painel}
      />
      <Stack.Screen
        name='Detalhe'
        component={Detalhe}
      />
    </Stack.Navigator>
  )
}
