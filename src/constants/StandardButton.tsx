import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

type ButtonProps = {
    content: string
}

const HighlightButton = ({content}:ButtonProps) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <TouchableHighlight activeOpacity={0.5} underlayColor={'white'} 
      onPress={onPress} style={styles.highlight}>
        <View style={styles.button}>
          <Text style={styles.text}>{content}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 30
  },
  button: {
    alignItems: "center",
    backgroundColor: 'lightblue',
    paddingHorizontal: 40,
    paddingVertical: 20,
    color: 'white',
    borderRadius: 30
  },
  text: {
      color:'black',
  },
  highlight: {
      borderRadius: 30
  }
});

export default HighlightButton;