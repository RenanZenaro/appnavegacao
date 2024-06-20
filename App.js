import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./components/views/HomeScreen";
import EquipeScreen from "./components/views/EquipeScreen";
import QuemSomosScreen from './components/views/QuemSomosScreen';
import ContatoScreen from './components/views/ContatoScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Equipe" component={EquipeScreen} />
        <Stack.Screen name="Quem Somos" component={QuemSomosScreen} />
        <Stack.Screen name="Contato" component={ContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;