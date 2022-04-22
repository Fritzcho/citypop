import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

type props = {
    content: string,
}

/**
 * Component header that displays a given string as a header.
 * 
 * @param param0 String that is displayed in the header
 * @returns component
 */
export default function Header({content}:props) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 200,
    },
    headerText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    }
})