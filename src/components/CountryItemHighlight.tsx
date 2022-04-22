import React from 'react'
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import {  StyleSheet, Text, TouchableHighlight, View } from "react-native";

type ButtonProps = {
  content: string,
  route: string,
  navigation: NavigationProp<ParamListBase>,
  inputText: string
}

/**
 * Item that is used to render cities in a country as objects in the CountriesScreen 
 * when a user has searched for a country. Upon click, it redirects the user to CityScreen
 * to display the population of the city.
 * 
 * @param ButtonProps type containing props content, route, navigation and inputText 
 * @returns 
 */
const CountryItemHighlight = ({content, route, navigation, inputText}:ButtonProps) => {
  return (
    <TouchableHighlight activeOpacity={0.5} underlayColor={'white'} 
      onPress={() =>
        inputText
          ? navigation.navigate(route, {navigation, inputText})
          : alert('Please Input the text')
      }
      style={styles.buttonHighlight}>
      <View style={styles.button}>
        <Text style={styles.text}>{content}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: 'lightblue',
    paddingHorizontal: 30,
    paddingVertical: 15,
    color: 'white',
    borderRadius: 10,
    margin: 10,
  },
  buttonHighlight: {
    borderRadius: 30,
  },
  text: {
    color:'black',
    fontSize: 18,
  },
});


export default CountryItemHighlight