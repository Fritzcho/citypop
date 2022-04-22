import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackRouter } from '../constants/StackRouter';
import {Header, NavigationButton} from '../components';

/**
 * React-Native component HomeScreen, the home screen of the applicaton.
 * 
 * @param navigation StackRouter containing a NavigationProp for navigation between screens
 * @returns component
 */
const HomeScreen = ({navigation}:StackRouter) => {
    return (
        <View style={styles.container}>
            <Header content="CityPop"/>
            <View style={styles.body}>
                <View style={styles.btnContainer}>
                    <NavigationButton content='Search By City' route='SearchCity' navigation={navigation}/>
                </View>
                <View style={styles.btnContainer}>
                    <NavigationButton content='Search By Country' route='SearchCountry' navigation={navigation}/>
                </View>
            </View>       
        </View>
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
    body: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 40,
    },
    btnContainer: {
        padding: 5,
    }
});
export default HomeScreen;