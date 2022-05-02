import React from "react";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import {  StyleSheet, Text, TouchableHighlight, View } from "react-native";

type ButtonProps = {
  content: string,
  route: string,
  navigation: NavigationProp<ParamListBase>,
  inputText: string
}

/**
 * React-Native component SearchButton, a button that navigates the user to a view
 * based on the given route prop and triggers a search. 
 * Also sends the needed inputText, which is the usergiven searchstring, prop to the next view.
 * 
 * @param ButtonProps Containing props content, route, navigation and inputText for the button
 * @returns component
 */
const SearchButton = ({content, route, navigation, inputText}:ButtonProps) => {
  /**
   * Check whether the string, inputText, consists of a correct format or not.
   * If not, do not navigate to the next screen and display a relevan alert.
   */
  const checkString = () => { 
    if (inputText) {
      if (inputText.trim().length === 0 || /\d/.test(inputText)) {
        alert('Please input letters');
      } else {
        navigation.navigate(route, {inputText: inputText});
      }
    } else {
      alert('Please input some text');
    }
  }

  return (
    <TouchableHighlight activeOpacity={0.5} underlayColor={'white'} 
      onPress={checkString}
      style={styles.buttonHighlight}>
      <View style={styles.button}>
        <Text style={styles.text}>{content}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: 'lightblue',
    paddingHorizontal: 30,
    paddingVertical: 15,
    color: 'white',
    borderRadius: 30,
  },
  buttonHighlight: {
    borderRadius: 30,
  },
  text: {
    color:'black',
    fontSize: 18,
  },
});

export default SearchButton;