import React, { useEffect, useState } from 'react';
import { TextInput, View, StyleSheet, Button} from 'react-native';
import { Header, SearchButton} from '../components';
import { StackRouter } from '../constants/StackRouter'; 


export default function SearchCountryScreen({navigation}:StackRouter) {
  const [inputText, setText] = useState('');
  const searchHandler = (event: { nativeEvent: { text: any; }; }) => {
    let temp = event.nativeEvent.text;
    setText(temp);
    console.log(temp)
  }
  return(
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header content="Search by country" />
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.btnContainer}>
            <TextInput
              style={styles.input}
              placeholder='Enter a country...'
              onChange={searchHandler}
              value={inputText}
            />
          </View>
          <View style={[styles.btnContainer, styles.button]}>
            <SearchButton content='Search' route='Countries' inputText={inputText} navigation={navigation}/>
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