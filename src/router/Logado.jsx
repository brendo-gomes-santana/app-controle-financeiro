import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Painel from '../pages/Painel';
import User from '../pages/User';

const BottomTab = createBottomTabNavigator();

export default function Logado() {
  return (
    <BottomTab.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      <BottomTab.Screen name='Painel' component={Painel}/>
      <BottomTab.Screen name='Configuração' component={User}/>
    </BottomTab.Navigator>
  )
}
