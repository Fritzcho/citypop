import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>CityPop</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height:90,
        paddingTop: 42,
        backgroundColor: 'lightblue',
        paddingLeft: 40,
    },
    headerText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    }
})