import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { globalStyles } from '../GlobalStyles';

export default function ReviewDetails({ navigation }: any) {
    const pressHandler = () => {
        navigation.goBack();
        // navigation.pop();
    }
    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails Screen</Text>
            <Button title='back to home screen' onPress={pressHandler}/>
        </View>
    )
}