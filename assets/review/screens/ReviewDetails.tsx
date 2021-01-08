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
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
        </View>
    )
}