import {NavigationContainer} from '@react-navigation/native';
import React from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegistrarScreen from '../screens/RegistrarScreen';
import { RootStackParamList } from '../types';
import {Provider as PaperProvider,} from 'react-native-paper';

export default function Navigation() {
  return (
    <PaperProvider >
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
    </PaperProvider>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RegistrarScreen" component={RegistrarScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

