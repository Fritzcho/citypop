import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/constants/RootStack';
import { HomeScreen, SearchCityScreen, SearchCountryScreen, CityScreen, CountriesScreen} from './src/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="SearchCity" component={SearchCityScreen}/>
          <Stack.Screen name="SearchCountry" component={SearchCountryScreen}/>
          <Stack.Screen name="City" component={CityScreen}/>
          <Stack.Screen name="Countries" component={CountriesScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column",
      paddingVertical: 30,
      paddingHorizontal: 30,
      backgroundColor: '#E7E7E7',    
  },
});

