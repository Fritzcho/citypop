import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchByCity from './src/screens/SearchByCity';
import SearchByCountry from './src/screens/SearchByCountry';
import CityView from './src/screens/CityView';
import CountriesView from './src/screens/CountriesView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SearchByCity" component={SearchByCity}/>
        <Stack.Screen name="SearchByCountry" component={SearchByCountry}/>
        <Stack.Screen name="CityView" component={CityView}/>
        <Stack.Screen name="CountriesView" component={CountriesView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

