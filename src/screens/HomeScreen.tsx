import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HighlightButton from '../constants/HighlightButton';
import { StackRouter } from '../helper/StackRouter';
import Header from '../components/Header';

const HomeScreen = ({navigation}:StackRouter) => {
    return (
        <View style={styles.container}>
            <Header content="CityPop"/>
            <View style={styles.body}>
                <View style={styles.btnContainer}>
                    <HighlightButton content='Search By City' route='SearchByCity' navigation={navigation}/>
                </View>
                <View style={styles.btnContainer}>
                    <HighlightButton content='Search By Country' route='SearchByCountry' navigation={navigation}/>
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