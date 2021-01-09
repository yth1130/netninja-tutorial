import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { globalStyles, images } from '../GlobalStyles';
import Card from '../shared/Card';

export default function ReviewDetails({ navigation }: any) {
    const pressHandler = () => {
        navigation.goBack();
        // navigation.pop();
    }
    const rating = navigation.getParam('rating');
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});
