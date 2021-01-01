import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    // const [name, setName] = useState('Taehun');
    // const [age, setAge] = useState('30');
    const [people, setPeople] = useState([
        { name: 'Taehun',key: '1' },
        { name: 'Mario', key: '2' },
        { name: 'Luigi', key: '3' },
        { name: 'Yoshi', key: '4' },
        { name: 'Peach', key: '5' },
        { name: 'Toad', key: '6' },
        { name: 'Bowser', key: '7' },
        { name: 'Bowser', key: '8' },
        { name: 'Bowser', key: '9' },
        { name: 'Bowser', key: '10' },
    ]);

    // const clickHandler = () => {
    //     setName('hoho');
    //     // setPerson({ name: 'Luige', age: 35 });
    // }
    
    return (
        <View style={styles.container}>
            <ScrollView>
                {people.map((item)=>{
                    return (
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 40,
        paddingHorizontal: 20,
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
    item: {
        marginTop:24,
        padding:30,
        backgroundColor:'pink',
        fontSize:24,
    },
});
