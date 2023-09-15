import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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
        headerShown: false
      }}
    >
      <BottomTab.Screen name='Painel' component={Home} />
      <BottomTab.Screen name='Criar Parcelamento' component={CriarParcelamento}/>
      <BottomTab.Screen name='Configuração' component={User}/>
    </BottomTab.Navigator>
  )
}

function Home(){
  return(
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
