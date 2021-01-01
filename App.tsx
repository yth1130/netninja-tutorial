import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    // const [name, setName] = useState('Taehun');
    // const [age, setAge] = useState('30');
    const [people, setPeople] = useState([
        { name: 'Taehun',id: '1' },
        { name: 'Mario', id: '2' },
        { name: 'Luigi', id: '3' },
        { name: 'Yoshi', id: '4' },
        { name: 'Peach', id: '5' },
        { name: 'Toad',  id: '6' },
        { name: 'Bowse', id: '7' },
        { name: 'Bowse', id: '8' },
        { name: 'Bowse', id: '9' },
        { name: 'Bowse', id: '10' },
    ]);

    // const clickHandler = () => {
    //     setName('hoho');
    //     // setPerson({ name: 'Luige', age: 35 });
    // }
    
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.name}</Text>
                )}
            />
            {/* <ScrollView>
                {people.map((item)=>{
                    return (
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    )
                })}
            </ScrollView> */}
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
        marginHorizontal:10,
        
    },
});
