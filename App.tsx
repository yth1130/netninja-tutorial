import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './assets/scripts/Header';

export default function App() {

    const [todos, setTodos] = useState([
        { key: '1', text: 'buy coffee' },
        { key: '2', text: 'create an app' },
        { key: '3', text: 'play on the switch' },
    ]);
    
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                {/* to form */}
                <View style={styles.list}>
                    <FlatList 
                        data={todos}
                        renderItem={({item})=>(
                            <Text>{item.text}</Text>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding:40,
    },
    list: {
        marginTop:20,
    },
});
