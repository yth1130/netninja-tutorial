import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AddTodo from './assets/scripts/AddTodo';
import Header from './assets/scripts/Header';
import TodoItem from './assets/scripts/TodoItem';

export default function App() {

    const [todos, setTodos] = useState([
        { key: '1', text: 'buy coffee' },
        { key: '2', text: 'create an app' },
        { key: '3', text: 'play on the switch' },
        { key: '4', text: 'play on the switch' },
        { key: '5', text: 'play on the switch' },
        { key: '6', text: 'play on the switch' },
    ]);

    const pressHandler = (key:string) => {
        console.log("Press");
        setTodos((prevTodos) => {
            return prevTodos.filter(todo=>todo.key != key);
        });
    }

    const submitHandler = (text:string) => {
        setTodos((prevTodos) => {
            return [
                { key: Math.random().toString(), text: text },
                ...prevTodos,
            ]
        });
    }
    
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <AddTodo submitHandler={submitHandler} />
                <View style={styles.list}>
                    <FlatList 
                        data={todos}
                        renderItem={({item})=>(
                            <TodoItem item={item} pressHandler={pressHandler}/>
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
