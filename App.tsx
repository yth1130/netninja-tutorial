import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [name, setName] = useState('Taehun');
    // const [person, setPerson] = useState({ name: 'Mario', age: 40 });
    const [age, setAge] = useState('30');

    const clickHandler = () => {
        setName('hoho');
        // setPerson({ name: 'Luige', age: 35 });
    }
    
    return (
        <View style={styles.container}>
            <Text>Enter name:</Text>
            <TextInput 
                multiline
                style={styles.input}
                placeholder='e.g. Taehun Yun'
                onChangeText={(value) => setName(value)}    
            />
            <Text>Enter age:</Text>
            <TextInput 
                keyboardType='numeric'
                style={styles.input}
                placeholder='e.g. 99'
                onChangeText={(value) => setAge(value)}    
            />
            <Text>name: {name}, age: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer:{
        marginTop:20,
    },
    input: {
        borderWidth:1,
        borderColor:'#777',
        padding:8,
        margin:10,
        width:200,
    },
});
