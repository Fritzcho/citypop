import React from "react";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import {  StyleSheet, Text, TouchableHighlight, View } from "react-native";

type ButtonProps = {
    content: string,
    route: string,
    navigation: NavigationProp<ParamListBase>
}

/**
 * React-Native component HiglightButton, a button that navigates the user to a page
 * based on the given route prop.
 * 
 * @param ButtonProps Containing props content, route and navigation for the button
 * @returns component
 */
const HighlightButton = ({content, route, navigation}:ButtonProps, ) => {
  return (
    <TouchableHighlight activeOpacity={0.5} underlayColor={'white'} 
    onPress={()=>navigation.navigate(route)} style={styles.buttonHighlight}>
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

export default HighlightButton;