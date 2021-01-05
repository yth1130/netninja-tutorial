import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './assets/scripts/AddTodo';
import Header from './assets/scripts/Header';
import Sandbox from './assets/scripts/Sandbox';
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

        if (text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    { key: Math.random().toString(), text: text },
                    ...prevTodos,
                ]
            });
        }
        else {
            Alert.alert('OOPS!', 'Todos must be over 3chars long', [
                {text:'Understood', onPress:()=>console.log('alert closed')}
            ]);
        }
    }
    
    return (
        // <Sandbox />
        <TouchableWithoutFeedback onPress={()=>{
            console.log('dismissed keyboard');
            Keyboard.dismiss(); 
        }}
        >
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
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1, //이걸 함으로써 자식의 크기에 따라 크기가 바뀌지 않고 부모의 비율로 크기를 갖는다..?
        padding:40,
        backgroundColor: 'pink',
    },
    list: {
        flex:1, //얘도 마찬가지.
        marginTop:20,
        backgroundColor: 'yellow',
    },
});
