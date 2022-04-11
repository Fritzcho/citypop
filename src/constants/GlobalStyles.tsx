import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingVertical: 30,
        paddingHorizontal: 30,
        backgroundColor: '#E7E7E7',
    },
    header: {
        flex: 1,
    },
    headerText: {
        fontSize: 20
    },
    body: {
        flex: 2,
        flexDirection: "column",
        padding: 40,
    },
    text: {
        color:'black',
    },
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

    
});

export default GlobalStyles;