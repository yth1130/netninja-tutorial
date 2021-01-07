import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../GlobalStyles';

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
        </View>
    )
}