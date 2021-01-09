import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { globalStyles } from '../GlobalStyles';
import Card from '../shared/Card';

export default function ReviewDetails({ navigation }: any) {
    const pressHandler = () => {
        navigation.goBack();
        // navigation.pop();
    }
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <Text>{navigation.getParam('rating')}</Text>
            </Card>
        </View>
    )
}