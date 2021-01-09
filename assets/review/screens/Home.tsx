import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../GlobalStyles';
import Card from '../shared/Card';

export default function Home({ navigation }: any) {
    const [reviews, setReviews] = useState([
        { key: '1', title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum' },
        { key: '2', title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum' },
        { key: '3', title: 'Not So "Final" Fantasy', rating: 2, body: 'lorem ipsum' },
    ])
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={() => { navigation.navigate('ReviewDetails', item) }}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}