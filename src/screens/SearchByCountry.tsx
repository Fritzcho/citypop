import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TextInput, View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import HighlightButton from '../constants/HighlightButton';
import { StackRouter } from '../helper/StackRouter';

const Stack = createNativeStackNavigator();

const searchHandler = () => {
}

export default function SearchByCountry({navigation}:StackRouter) {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header content="Search by country" />
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.btnContainer}>
            <TextInput
              style={styles.input}
              placeholder='Enter a country...'
              onChangeText={searchHandler}
            />
          </View>
          <View style={[styles.btnContainer, styles.button]}>
            <HighlightButton content='Search' route='CountriesView' navigation={navigation}/>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  innerContainer: {
    flex: 2,
    flexDirection: 'column',
  },
  btnContainer: {
    padding: 40,
  },
  input: {
    padding: 10,
    fontSize: 18,
    backgroundColor: 'white',
    borderColor:'#878787', 
    borderWidth: 2,
    borderRadius: 30,
  },
  button: {
    paddingLeft: 130,
    paddingRight: 130,
  },
});