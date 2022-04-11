import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HighlightButton from './src/constants/StandardButton';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.body}>
        <Text>Hello World!</Text>
        <HighlightButton content='Test button'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#E7E7E7',
  },
  header: {
    backgroundColor: 'green',
    padding: 40,
  },
  body: {
    backgroundColor: 'white',
    padding: 40,
  }
});