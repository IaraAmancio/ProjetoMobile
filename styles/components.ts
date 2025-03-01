import { StyleSheet } from "react-native";
import { flexRow } from "./utility";

const components = StyleSheet.create({

    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#e0dcdc',
        padding: 10,
        justifyContent:   'center',
        alignItems: 'center'

    },

    title:{
        fontSize: 20
    },

    button: {
        backgroundColor: '#2a59d1',
        borderRadius: 3,
        padding: 10,
        cursor: 'pointer',
        paddingLeft: 20,
        paddingRight: 20,
        margin: 20,
    },

    buttonIcon: {
        backgroundColor: '#2a59d1',
        borderRadius: 3,
        padding: 5,
        cursor: 'pointer',
    },

    textInput:{
        width: '90%',
        margin: 5,
        padding: 8,
        backgroundColor: '#faebeb',
        borderRadius: 7
    },

    boxAtivity:{
        width: '100%',
        padding: 10,
        margin: 5,
        justifyContent: "space-between",
        backgroundColor: '#d1cfcf',
        borderRadius: 8
    }
})

export const container = components.container
export const title =  components.title
export const button = components.button
export const textInput =  components.textInput
export const boxAtivity = components.boxAtivity
export const buttonIcon = components.buttonIcon