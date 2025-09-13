
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import SkillScreen from './SkillScreen';

export type RootStackParamList = {
  Main: undefined;
  Skills: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Meu Portfólio' }} />
        <Stack.Screen name="Skills" component={SkillScreen} options={{ title: 'Minhas Habilidades' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
