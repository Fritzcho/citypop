import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

type props = {
    content: string,
}

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