import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HighlightButton from './src/constants/StandardButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Hello header!</Text>
      </View>
      <View style={styles.body}>
        <Text>
          Lorum ipsum
        </Text>
      </View>
      <HighlightButton content='Test button'/>
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#E7E7E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'green',
    padding: 40,
  },
  body: {
    backgroundColor: 'white',
  }
});